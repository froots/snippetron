var snippetSteps = function() {
  this.World = require("../support/world.js").World;

  this.Given(/^I am on the home page$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I enter "([^"]*)" in the "([^"]*)" field$/, function(arg1, arg2, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I click the "([^"]*)" button$/, function(arg1, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should see a message with "([^"]*)"$/, function(arg1, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });
};

module.exports = snippetSteps;