var baseUrl = "http://localhost:3000";

casper.test.comment("Scenario: A user can create a snippet");

casper.test.comment("Given I am on the home page");

casper.start(baseUrl, function() {
  this.test.comment("When I fill out the form");
  this.fill("form.create-snippet", {
    "title": "Alert example",
    "content": "alert('Hello World!');"
  });
  this.test.comment("And I submit the form");
  this.click("input[type='submit']");
});

casper.test.comment("Then I should see a message");
casper.waitUntilVisible(".message", function() {
  this.test.assertTextExists("Snippet 'Alert example' saved!", "Save text is correct");
}, function() {
  this.debugHTML();
  this.test.fail("Create snippet message timed out");
}, 3000);

casper.run(function() {
  this.test.done();
});