# Project Summary
In essence, this application monitors the prices of items by scraping the webpage of the URL that the user has provided, extracting relevant information, and notifying the user via email if the price of the item drops below or to a certain price point that has been set by them.
This application only supports URLs of items from Costco.ca, BestBuy.ca, and Amazon.ca. In addition to entering the URL of the item, they can also add a alert price, the price point that will trigger an email notification if the price of the item drop to or below that value. 
The users can only provide a Gmail address to receive notifications from, there is a section below where they'd enter in item URLs to update their email. 
In addition to scraping the price of the item from the URL, this application also scrapes the item's picture, title, and stock availability.
Finally, in terms of the frameworks/libraries involved, React was used for the front-end while Flask was used for the back-end. 
# Local Setup
1) Inside flask-server directory, enter the command as shown (for Windows):

PS C:\Users\viroo\OneDrive\Desktop\WebApp\flask-server> .\venv\Scripts\activate

2) Then start the server:

(venv) PS C:\Users\viroo\OneDrive\Desktop\WebApp\flask-server> py server.py

3) In another terminal window, inside viroosh directory, enter what's shown:

PS C:\Users\viroo\OneDrive\Desktop\WebApp\viroosh> npm start
# Goals
# Accomplishments 
