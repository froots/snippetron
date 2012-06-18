var config = module.exports;

config["Backbone unit specs"] = {
  rootPath: "../",
  environment: "browser",
  libs: [
    "public/javascripts/lib/jquery.js",
    "public/javascripts/lib/underscore.js",
    "public/javascripts/lib/backbone.js",
    "public/javascripts/lib/**/*.js"
  ],
  sources: [
    "public/javascripts/src/**/*.js"
  ],
  specs: [
    "spec/**/*-spec.js"
  ]
};