# Dynamic Web
Welcome to my dynamic web program, which I have programmed for my course. I hope they can help you if you need them.

For those of you who do not know, a dynamic website is a type where users can update and change the content of their website regularly, written with a set of administrative tools so that webmasters can easily change some details in the website they want.

Designing a dynamic website is a combination of front-end and back-end programming.

I have created a website that allows the user to create a list. Users can add, edit or delete information on the front-end and this will also be updated on the database in the back-end.

The front-end part of a website is the part that interacts with the user. Everything seen when navigating the Internet, from fonts, colors, and images to drop-down menus and sliders, is a combination of HTML, CSS, and JavaScript controlled by the computer's browser.

What makes the front-end of a website work? Where will all the data be stored? That's the back end's job. The back end of a website includes a server, an application, and a database. This program uses the open-source relational database management system MySQL.

You can write a database processing program on MySQL Workbench as follows:

```
CREATE DATABASE `List`;
USE `List`;
Create table DS (
    last_name varchar(100) not null,
    first_name varchar(50) not null,
    MSSV mediumint unsigned primary key not null AUTO_INCREMENT,
    Phone varchar(12),
    Email varchar(255)
)
```

About deploying the product, I need Render. Rendering a web page is the process of displaying a web page from the moment you receive data from the server to the time the web page is fully displayed on the screen (including images, sounds, and text). This process is actually quite complex and undergoes much different processing. You can refer to:

https://www.freecodecamp.org/news/how-to-deploy-nodejs-application-with-render/

So my website can use HTTPS protocol on the platform of Render
