var baseUrl = "http://localhost:3000";

casper.test.comment("Scenario: A user can view the home page");

casper.start(baseUrl, function() {
  this.test.assertHttpStatus(200, "Response is a success");
  this.test.assertTitle("Snippetron", "Title is as expected");
});

casper.run(function() {
  this.test.done();
});