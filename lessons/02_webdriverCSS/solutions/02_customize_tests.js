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
            elem: '.site-header',
            screenWidth: [600, 760, 1150]
        }, {
            name: 'content',
            elem: '.site-content',
            screenWidth: [600, 760, 1150]
        }
    ], function(err, res) {
        assert.ifError(err);
        assert.ok(res.header[0].isWithinMisMatchTolerance);
        assert.ok(res.header[1].isWithinMisMatchTolerance);
        assert.ok(res.header[2].isWithinMisMatchTolerance);
        assert.ok(res.content[0].isWithinMisMatchTolerance);
        assert.ok(res.content[1].isWithinMisMatchTolerance);
        assert.ok(res.content[2].isWithinMisMatchTolerance);
    })
    .url('http://127.0.0.1:8080/layout-sidebar-left.html')
    .webdrivercss('layout-sidebar',[
        {
            name: 'page',
            exclude: ['.site-header', '.sidebar', '.site-footer'],
            screenWidth: [600, 760, 1150]
        }
    ], function(err, res) {
        assert.ifError(err);
        assert.ok(res.page[0].isWithinMisMatchTolerance);
        assert.ok(res.page[1].isWithinMisMatchTolerance);
        assert.ok(res.page[2].isWithinMisMatchTolerance);
    })
    .end();
