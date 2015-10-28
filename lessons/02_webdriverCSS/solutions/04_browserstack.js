var assert = require('assert');
var options = require('../browserstack.json');

// init WebdriverIO
var client = require('webdriverio').remote({
  desiredCapabilities: {
    'browserstack.debug': 'true',
    'browserstack.local': 'true',
    os: 'Windows',
    os_version: '10',
    browser: 'firefox',
    browser_version: '41'
  },
  host: 'hub.browserstack.com',
  port: 80,
  user: options.browserstack.user,
  key: options.browserstack.key
});


// init WebdriverCSS
require('webdrivercss').init(client);

client
    .init()

    // ### Move & Click
    .url('http://127.0.0.1:8080')
    .webdrivercss('body',[
        {
            name: 'body',
            elem: '.site-container',
            screenWidth: ['1150']
        }
    ], function(err, res) {
        assert.ifError(err);
        assert.ok(res.body[0].isWithinMisMatchTolerance);
    })


    .end();






