# Project 13: Eat-Da-Burger Express-Handlebars

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Project 13 tasked the student with building an application that allowed the user to submit a burger using a textarea field and submit this burger. This burger would then be added to a MySQL database
and would populate in display on the same page with a button to devour or eat the burger. Once that button was clicked, that item moved to a new table to its right where it was already eaten.

I decided to use my creative license on this project and rather than do the standard layout seen in the introduction video, I decided to give my application a Spongebob Squarepants theme and make my
application themed as the Krusty Krab, yarrrrrrr! I was able to do this by creating a color palette that took the colors from screenshots of the Krusty Krab along with using the Eye Dropper Color
Picker Chrome Plug-in that allows the user to find the hex color key for any pixel on the internet. Once I had the color palette made, I found a Google font, called Slackey, that was very close to the
typeface used for Spongebob Squarepants. From here, it was just a matter of putting everything together and getting the application functioning.

While this project was not that hard, the most difficulty came from building the model view controller set up and ensureing that my callback functions were operating properly.

What sets my application apart from the rest of the class's project was taking the creative license to start with a foundation of the functionality for this project, and then giving it my own twist.
The application accomplishese all the goals required for this assignment, however, it looks uniquely different. I also instutited the REM sizing code rather than using px for most of the CSS to make
the text and other elements of the design more responsive to different browsers and users who have accessability features turn on in their browsers.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Credits](#credits)
-   [License](#license)
-   [Contributing](#contributing)
-   [Questions](#questions)

## Installation

To install this application, first, branch the Github Repo and clone the repo to your local machine. Then, you will need to install the node dependencies which can be done by running the npm install
command in your terminal/bash shell.

After the dependencies have been installed, you will need to populate your MySQL database. This can be done with dummy data that is found in the sqlFiles folder. There are two files for this. First
the schema.sql which will creat the database and the one table. Second, there is a seed.sql file which will populate the database with data for the one table. You can also run this application without
the seed file if you want to start from a blank database after the schema.sql is added

After populating the data, you can run the command npm start or node server.js to start up the application. This application will run on PORT 8082. If this port is already opened, you can change this
in the Connections.js file. Once the server is up and running, you can visit the localhost port location and start using this app!

## Usage

Once everything has been set up, the application can be launched by running the command node server.js or npm start. You will then need to visit the local host URL for the port that you have set up
for this application. Once loaded in the browser, all you have to do is add new meals using the textarea, and hit submit. This will create a new meal item on the left hand table. Then you can click
the fork and spoon icon to consume that item which moves it to the right hand, already devoured table.

## Credits

This application was completed by Jeff Quittman as a project for UCLA/Trilogy's Full Stack Software Development Bootcamp.

Dependencies for this project include the node modules:

-Express: for setting up the node server

-Express Handlebars: for setting up the HTML UI

-MySQL: for setting up the database

Other credits include: Google Fonts, Font Awesome, and Bootstrap.

## License

    								MIT License

    		Unit 13 Express-Handlebars: Eat-Da-Burger!   Copyright (C) 2020 Jeffrey Quittman

    		Permission is hereby granted, free of charge, to any person obtaining a copy
    		of this software and associated documentation files (the "Software"), to deal
    		in the Software without restriction, including without limitation the rights
    		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    		copies of the Software, and to permit persons to whom the Software is
    		furnished to do so, subject to the following conditions:

    		The above copyright notice and this permission notice shall be included in all
    		copies or substantial portions of the Software.

    		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    		SOFTWARE.

## Contributing

If you would like to contribute to this application, please feel free to email me via the email found in the questions section and we can discuss how to collaborate and enhance this application

## Tests

N/A

## Questions

-   For any questions related to this applicaiton, please contact me at: JeffQuittman@gmail.com.

-   Please use this link to access my Github Profile: [https://github.com/JeffQuit](https://github.com/JeffQuit)
