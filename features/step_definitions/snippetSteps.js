var snippetSteps = function() {
  this.World = require("../support/world.js").World;

  this.Given(/^I am on the home page$/, function(callback) {
    this.visit("/", callback);
  });

  this.When(/^I enter "([^"]*)" in the "([^"]*)" field$/, function(val, fieldSelector, callback) {
    this.browser.fill(fieldSelector, val, callback);
  });

  this.When(/^I visit the home page$/, function(callback) {
    this.visit("/", callback);
  });

  this.When(/^I click the "([^"]*)" button$/, function(buttonSelector, callback) {
    this.browser.pressButton(buttonSelector, callback);
  });

  this.Then(/^the page title should be "([^"]*)"$/, function(text, callback) {
    if (this.browser.text("h1") !== text) {
      callback.fail(new Error("Expected to have h1 with text '" + text + "'"));
    } else {
      callback();
    }
  });

  this.Then(/^I should see a message with "([^"]*)"$/, function(messageText, callback) {
    if (this.browser.text(".message") !== messageText) {
      callback.fail(new Error("Expected to see a message with text '" + messageText + '"'));
    } else {
      callback();
    }
  });
};

module.exports = snippetSteps;