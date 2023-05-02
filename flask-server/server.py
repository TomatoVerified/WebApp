from flask import Flask, request
from scraper import Robot
import threading
import time
import smtplib

# try and except block for whenever something isn't found

app = Flask(__name__)

items = []
price_thread = None
currentEmail = "No Email Set"


@app.route("/update-email", methods=["POST"])
def update_email():
    global currentEmail
    email = request.json["email"]
    currentEmail = email
    return currentEmail


@app.route("/get-email", methods=["GET"])
def get_email():
    global currentEmail
    email = currentEmail  # replace this with your code to get the email
    return {"email": email}


def get_info(url):
    bot = Robot()
    info = bot.scrape_info(url)
    return info


def update_prices():
    while True:
        time.sleep(120)  # wait 2 minutes
        for item in items:
            url = item["type"]
            priceE = item["price"]
            currentPrice = item["priceURL"]
            if url != "No URL Provided" and priceE != "?" and currentPrice != "Unavailable":
                info = get_info(url)
                print(info[0])
                priceFromURL = info[0]
                priceFromURL = priceFromURL.replace(",", "")
                if priceFromURL != "Unavailable":
                    priceFromURL = float(priceFromURL.replace("$", ""))
                item["priceURL"] = priceFromURL
                alertPrice = float(item["price"])
                if alertPrice <= priceFromURL:
                    # Set up the SMTP server
                    smtp_server = "smtp.gmail.com"
                    smtp_port = 587
                    smtp_username = "pricetrackersoftware@gmail.com"
                    smtp_password = "rhsurdeweygefami"
                    server = smtplib.SMTP(smtp_server, smtp_port)
                    server.starttls()
                    server.login(smtp_username, smtp_password)

                    # Compose the email message
                    global currentEmail
                    from_email = "pricetrackersoftware@gmail.com"
                    to_email = currentEmail
                    subject = "PRICE-ALERT! From PriceTracker"
                    itemDescription = str(item["name"])
                    body = itemDescription + "'s price met/exceeded the alert price value of $" + \
                        str(alertPrice) + " with a value of $" + \
                        str(priceFromURL) + "!"
                    message = f"From: {from_email}\nTo: {to_email}\nSubject: {subject}\n\n{body}"

                    # Send the email
                    server.sendmail(from_email, to_email, message)

                    # Disconnect from the SMTP server
                    server.quit()


@app.route("/items", methods=["GET", "POST"])
def get_items():
    global price_thread
    if request.method == "GET":
        return {"items": items}
    elif request.method == "POST":
        data = request.get_json()
        url = data["type"]

        if not url or url.isspace():
            data["type"] = "No URL Provided"
            priceURL = "?"
            title = "?"
            inStock = "?"
            Pic = "https://cdn-icons-png.flaticon.com/512/8373/8373460.png"
        else:
            info = get_info(url)
            print(info[0])
            priceURL = info[0]
            priceURL = priceURL.replace(",", "")
            if priceURL != "Unavailable":
                priceURL = float(priceURL.replace("$", ""))
            title = info[1]
            inStock = info[2]
            # title = "heeeyyy"
            Pic = info[3]
            print(title)
        if not data["name"] or data["name"].isspace():
            data["name"] = "?"
        if not data["price"] or data["price"].isspace():
            data["price"] = "?"
        new_item = {"id": len(
            items) + 1, "name": data["name"], "price": data["price"], "type": data["type"], "priceURL": priceURL, "title": title, "inStock": inStock, "Pic": Pic}
        items.append(new_item)
        if price_thread is None:
            price_thread = threading.Thread(target=update_prices)
            price_thread.start()
        return new_item


@app.route("/items/<int:item_id>", methods=["DELETE"])
def delete_item(item_id):
    global items
    new_items = [item for item in items if item["id"] != item_id]
    if len(items) == len(new_items):
        return {"message": f"Item with id {item_id} not found."}, 404
    else:
        items = new_items
        return {"message": f"Item with id {item_id} deleted."}


if __name__ == "__main__":
    app.run(debug=True)
