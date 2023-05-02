from selenium import webdriver
from bs4 import BeautifulSoup
import time
import re

# for next meeting: push to github, UI upgrade,
# how to disable pop-up
# https://stackoverflow.com/questions/50605373/how-to-disable-opening-the-page-in-a-new-tab-in-selenium-webdriver-in-python


class Robot:
    def scrape_info(self, url):
        driver = webdriver.Edge()
        driver.get(url)
        html_text = driver.page_source

        if "https://www.costco.ca" in url:
            time.sleep(10)
        else:
            time.sleep(5)

        soup = BeautifulSoup(html_text, 'html.parser')

        if "https://www.bestbuy.ca" in url:
            try:
                price = soup.find(
                    'span', class_='screenReaderOnly_2mubv large_3uSI_').text
                if not re.search(r'\d', price):
                    price = "Unavailable"
            except:
                price = "Unavailable"
            try:
                title = soup.find(
                    'h1', class_='productName_2KoPa').text
                if len(title.split()) == 0:
                    title = "Unavailable"
            except:
                title = "Unavailable"
            try:
                inStock = soup.find(
                    'span', class_='availabilityMessage_3ZSBM container_1DAvI').text
                if len(inStock.split()) == 0:
                    inStock = "Unknown"
            except:
                inStock = "Unknown"

            try:
                image_tag = soup.find('img', {'class': 'productImage_1NbKv'})
                pic = image_tag['src']
            except:
                pic = "https://cdn-icons-png.flaticon.com/512/8373/8373460.png"

        elif "https://www.amazon.ca" in url:
            try:
                price = soup.find('span', class_='a-offscreen').text
                if "$" not in price:
                    price = "Unavailable"
                if not re.search(r'\d', price):
                    price = "Unavailable"
            except:
                price = "Unavailable"
            try:
                title = soup.find(
                    'span', class_='a-size-large product-title-word-break').text
                if len(title.split()) == 0:
                    title = "Unavailable"
            except:
                title = "Unavailable"
            try:
                inStock = soup.find(
                    'span', class_='a-size-medium a-color-success').text
                if len(inStock.split()) == 0:
                    inStock = "Unknown"
            except:
                inStock = "Unknown"
            try:
                image_tag = soup.find('img', id='landingImage')
                pic = image_tag['src']
            except:
                pic = "https://cdn-icons-png.flaticon.com/512/8373/8373460.png"

        elif "https://www.costco.ca" in url:
            try:
                price = soup.find(
                    'span', class_='value canada-currency-size').text
                if not re.search(r'\d', price):
                    price = "Unavailable"
            except:
                price = "Unavailable"
            try:
                title = soup.find('h1', {'itemprop': 'name'}).text.strip()
                if len(title.split()) == 0:
                    title = "Unavailable"
            except:
                title = "Unavailable"
            try:
                inStock = soup.find(
                    'span', class_='edd-expected-date').text
                if len(inStock.split()) == 0:
                    inStock = "Unknown"
                else:
                    inStock = "Estimated Delivery Date: " + inStock
            except:
                inStock = "Unknown"

            try:
                image_tag = soup.find(
                    'img', id='RICHFXViewerContainer___richfx_id_0_initialImage')
                pic = image_tag['src']
            except:
                pic = "https://cdn-icons-png.flaticon.com/512/8373/8373460.png"
    # ^ setting prices as json object
    # look into python classes
    # make the code here into an object/class - make a func getPrice(), func returns price, server.py can call this
        driver.quit()
        info = [price, title, inStock, pic]
        print(info)
        return info


"""
    def scrape_title(self, url):
        driver = webdriver.Edge()
        driver.get(url)
        html_text = driver.page_source
        time.sleep(5)
        soup = BeautifulSoup(html_text, 'html.parser')
        if "https://www.bestbuy.ca" in url:
            title = soup.find(
                'h1', class_='productName_2KoPa').text
        elif "https://www.amazon.ca" in url:
            title = soup.find(
                'span', class_='a-size-large product-title-word-break').text
        elif "https://www.costco.ca" in url:
            title = soup.find('h1', {'itemprop': 'name'}).text.strip()
        driver.quit()
        return title
"""
# print(scrape_price_amazon_ca("https://www.amazon.ca/PlayStation-Console-Disc-Ragnarök-Bundle/dp/B0BHF3ZDQW/ref=asc_df_B0BHF3ZDQW/?tag=coa_ca_g-20&linkCode=df0&hvadid=579300984187&hvpos=&hvnetw=g&hvrand=12222199213355268662&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1002155&hvtargid=pla-1943881380693&th=1"))
