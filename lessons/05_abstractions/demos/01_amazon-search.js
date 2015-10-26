var chai = require("chai");
var expect = chai.expect;

describe("Amazon Search", function() {
  beforeEach(function() {
    return browser
      .url("http://www.amazon.com/")
      .execute(function() {
        // fix firefox bug with sending keys
        window.focus();
      });
  });

  it("should show results for The Queen Mary book search", function() {
    return browser
      .setValue("#twotabsearchtextbox", "The Queen Mary Book")
      .submitForm(".nav-searchbar")
      .getTitle().should.eventually.contain("The Queen Mary book");
  });

  it("should show results for Frontend Architecture book search", function() {
    return browser
    .setValue("#twotabsearchtextbox", "Frontend Architecture book")
    .submitForm(".nav-searchbar");
  });

  afterEach(function() {
    return browser
      .webdrivercss("search results", {
        name: "results",
        elem: "#atfResults"
      }, function(err, res) {
        expect(err).to.not.exist;

        expect(res.results[0].isWithinMisMatchTolerance).to.be.true;
      })
  })
});
