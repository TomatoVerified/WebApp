# Project Summary
In essence, this application monitors the prices of items by scraping the webpage of the URL that the user has provided, extracting relevant information, and notifying the user via email if the price of the item drops below or to a certain price point that has been set by them.
This application only supports URLs of items from Costco.ca, BestBuy.ca, and Amazon.ca. In addition to entering the URL of the item, they can also add a alert price, the price point that will trigger an email notification if the price of the item drop to or below that value. 
The users can only provide a Gmail address to receive notifications from, there is a section below where they'd enter in item URLs to update their email. 
In addition to scraping the price of the item from the URL, this application also scrapes the item's picture, title, and stock availability.
Finally, in terms of the frameworks/libraries involved, React was used for the front-end while Flask was used for the back-end. 

# Local Setup
1) Inside flask-server directory (type cd flask-server to enter directory), enter the command as shown (for Windows):

PS C:\Users\viroo\OneDrive\Desktop\WebApp\flask-server> .\venv\Scripts\activate

2) Then start the server:

(venv) PS C:\Users\viroo\OneDrive\Desktop\WebApp\flask-server> py server.py

3) In another terminal window, inside viroosh directory (type cd viroosh to enter directory), enter what's shown:

PS C:\Users\viroo\OneDrive\Desktop\WebApp\viroosh> npm start

# Goals
I wanted to push myself to learn and build something of quality that I can use as a future reference to show off my capabilities to potential employers. I am in Life Science but I learn to code in my spare time, so creating a functioning application that I can show off will improve my credibility. Additionally, I wanted to learn the difference between front-end and back-end design, thus I wanted a project that incorporated both in a meaningful way. Also, I didn't want to just make something simple like a to-do list, instead I wanted to challenge myself and create an application that I'd be interested in using myself. In terms of the specific technical skills, I wanted to learn to scrape web pages to extract specific information, as well learn how to communicate between the front-end and back-end by fetching and pushing data to the server in the back-end from the front-end. Morever, I have an interest in UI design as well, so I wanted to learn more about how UIs are designed for web pages. Also, I wanted to learn to automatically send email notifications, as well as learn how to automate a task that can periodically run in the background. Finally, with the recent hype about AI, I wanted to incorporate using AI tools like ChatGPT to aid me with my learning. 

# Accomplishments 
Overall, I learned to use the React library for the front-end and learned the JSX programming language that's used in it, since JSX is almost like a combination of HTML and JavaScript, I am now more familiar with both languages. For React, I learned to use Bootstrap to simplify the process of designing the UI for my application. With the help of Boostrap, I was able to format all the different components of my application in a simple and clear manner. This allowed me to learn how to approach UI design on a software level. For the back-end I learned to use Flask, which exposed me to more Python, and increased my knowledge regarding back-end server design further. I learned to create a Flask server in the back-end and learned how to fetch data from it and pass it to the front-end and modify it as well. In addition, I learned how to scrape web pages for specific information like the title, picture, and price of the item based on just the URL the user provides. This was done using selenium webdriver to open the web page using for the URL in a testing environment, and then using BeautifulSoup to scrape the web page and gather specific information. Moreover, I also learned to set up an SMTP server and send notifications via email, and learned to make the application scrape the data from all the URLs entered periodically to automatically detect when the price drops to or below the price limit set by the user, and email the user of this change when it happens. 
On the whole, I learned to use recent AI tools like ChatGPT to learn more about web design, especially in regards to syntax and bug fixes. As a bonus, I can see myself using this tool to track prices of items I want to purchase in the future, since it can notify me whenever the price of these items drop to an acceptable amount that I am willing to pay. Overall, this has been an incredible learning opportunity for me to not only learn the specific technical skills regarding web design, but also to learn how to learn, especially with the recent introduction of AI tools like ChatGPT, aiding me in my learning. Going forward, I will take the lessons I've learned from this project and apply them effectively. 
