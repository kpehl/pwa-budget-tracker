# PWA Budget Tracker

## Project Description

This project takes provided starter code for a database enabled budget tracker and converts it into a functional Progressive Web Application (PWA) with offline access and functionality. The browser Cache API is used to store the application's HTML, CSS, and JavaScript, controlled by a service worker. Offline transactions are stored using Indexed DB and are automatically uploaded when a connection is restored. A manifest file is also provided to allow the application to be downloaded to a browser, tablet, or phone.

## Tools Used
* JavaScript
* Node.js
* Express.js
* MongoDB and Mongoose
* Browser Tools
  * Cache API
  * Indexed DB
* npm packages
  * morgan - http request logger middleware used to track online and offline requests in development
  * compression - response compression middleware

## Installation

If you would like to view the code on your own device, clone the code into a project folder. From the project root directory, type npm install to install the necessary packages. Poke around and see how it works!

## Usage

The application is deployed on Heroku at https://sheltered-eyrie-50710.herokuapp.com

## Screenshot

![screenshot](./pwa-budget-tracker-screenshot.png)

## License

  **Licensed under the MIT License.**

MIT License

Copyright (c) 2020 PWA Budget Tracker

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.