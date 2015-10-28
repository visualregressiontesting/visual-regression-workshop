var assert = require('assert');

// init WebdriverIO
var client = require('webdriverio').remote({desiredCapabilities:{browserName: 'firefox'}})
// init WebdriverCSS
require('webdrivercss').init(client);

client
    .init()
    .url('http://127.0.0.1:8080/layout-full-width.html')
    .webdrivercss('full-width',[
        {
            name: 'header',
            elem: '.site-header'
        }, {
            name: 'content',
            elem: '.site-content'
        }
    ], function(err, res) {
        assert.ifError(err);
        assert.ok(res.header[0].isWithinMisMatchTolerance);
        assert.ok(res.content[0].isWithinMisMatchTolerance);
    })
    .end();
