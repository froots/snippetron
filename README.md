## Snippetron

This is an example app for my talk "Testing your Backbone from the outside-in" given at ScotlandJS in June 2012.

Functionally, all it does is allow a snippet to be saved, and a success message to be displayed when the server has successfully completed the save.

There are very simple examples of acceptance / functional tests using both CasperJS and Cucumber.js / Zombie and unit tests using BusterJS.

### Pre-requisites

* [Node.js](http://nodejs.org/) with NPM
* [PhantomJS](http://phantomjs.org/)
* [CasperJS](http://casperjs.org/)

### Installation

* Clone the project
* `> cd` to the project directory
* `> npm install` to install dependencies locally from `package.json`
* `> npm link`

### Running the app for acceptance tests

Both CasperJS and Cucumber.js acceptance tests require the app to run. Start the app server with:

      > supervisor app.js

[Supervisor](https://github.com/isaacs/node-supervisor) allows hot code reloading of Node.js applications without restarting the web server.

### Running tests

#### CasperJS & PhantomJS

There are 2 very simple acceptance tests using CasperJS, a scripting, testing and navigation utility for the PhantomJS headless web browser in `test/functional`.

To run tests:

      > casperjs test test/functional

#### Cucumber.js & Zombie

There are 2 very simple cucumber.js scenarios that can be run. These use the zombie headless browser. Features are in the `features` directory, along with step definitions and cucumber.js setup.

To run the scenarios:

      > cucumber.js

#### Buster unit tests

There is a small suite of [Buster.js](http://busterjs.org/) unit specs in BDD style in the `spec` directory.

To run specs, start the buster server with:

      > buster server

Then, navigate any number of slave browsers to the buster server at `http://localhost:1111`

Run specs with:

      > buster test --reporter specification

or simply:

      > buster test

for less verbose output.