var snippetCounter = 1;

var SnippetProvider = function() {

};

SnippetProvider.prototype.dummyData = [];

SnippetProvider.prototype.save = function(snippets, callback) {
  if (typeof(snippets.length) == "undefined") {
    snippets = [ snippets ];
  }

  var sp = this;

  snippets.forEach(function(snippet) {
    snippet._id = snippetCounter++;
    snippet.create_at = new Date();

    sp.dummyData.push = snippet;
  });

  callback(null, snippets);
};

exports.SnippetProvider = SnippetProvider;