// init WebdriverIO
var client = require('webdriverio').remote({desiredCapabilities:{browserName: 'firefox'}})
// init WebdriverCSS
require('webdrivercss').init(client);

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.Should();
chai.use(chaiAsPromised);
chaiAsPromised.transferPromiseness = client.transferPromiseness;

describe('Add-ons Page', function () {
  before(function() {
    return client
      .init()
      .url('http://127.0.0.1:8080/add-ons.html');
  });

  it('should assert the title', function() {
    return client
      .getTitle().should.eventually.equal('Add-ons');
  })

  it('should check the page title', function () {
    return client
      .getText('h1.page-title').should.eventually.contain('Add');
  })

  after(function() {
    return client.end();
  });
});