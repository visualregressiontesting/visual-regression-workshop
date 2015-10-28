var chai = require('chai');
var expect = chai.expect;

// init WebdriverIO
var client = require('webdriverio').remote({desiredCapabilities:{browserName: 'firefox'}})
// init WebdriverCSS
require('webdrivercss').init(client);

describe('Add-ons Page', function () {
  it('should assert the title', function() {
    return client
      .init()
      .url('http://127.0.0.1:8080/add-ons.html')
      .getTitle()
      .then(function (title) {
          expect(title).to.equal('Add-ons')
      })
      .getText('h1.page-title')
      .then(function (text) {
          expect(text).to.contain('Add')
      })
      .end();
  })
});