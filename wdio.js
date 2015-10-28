var assert = require('assert');

// init WebdriverIO
var client = require('webdriverio').remote({desiredCapabilities:{browserName: 'chrome'}})
// init WebdriverCSS
require('webdrivercss').init(client);

client
    .init()
    .url('http://mpgilbertusa.github.io/Responsive-Starter-Kit-Pro-Sass/')
    .webdrivercss('startpage',[
        {
            name: 'body',
            elem: '.site-container',
            screenWidth: [320, 1024]
        }
    ], function(err, res) {
        assert.ifError(err);
        assert.ok(res.body[0].isWithinMisMatchTolerance);
    })
    .end();
