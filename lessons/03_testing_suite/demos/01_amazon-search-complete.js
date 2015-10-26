var chai = require("chai");
var expect = chai.expect;

describe("Amazon Search", function() {
  it("should show results for The Queen Mary book search", function() {
    return browser
      .url("http://www.amazon.com/")
      .setValue("#twotabsearchtextbox", "The Queen Mary Book")
      .submitForm(".nav-searchbar")
      .webdrivercss("search results", {
        name: "results",
        elem: "#atfResults"
      }, function(err, res) {
        expect(err).to.not.exist;

        expect(res.results[0].isWithinMisMatchTolerance).to.be.true;
      })
      .getTitle().should.eventually.contain("The Queen Mary book");
      // .then(function(title) {
      //   expect(title).to.contain("The Queen Mary book");
      // });
  });
});
