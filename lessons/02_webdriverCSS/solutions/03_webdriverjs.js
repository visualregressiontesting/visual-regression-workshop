var assert = require('assert');

// init WebdriverIO
var client = require('webdriverio').remote({desiredCapabilities:{browserName: 'firefox'}})
// init WebdriverCSS
require('webdrivercss').init(client);

client
    .init()

    // ### Move & Click
    .url('http://127.0.0.1:8080/add-ons.html')
    .webdrivercss('htabs',[
        {
            name: 'htabs',
            elem: '#tab-horizontal',
            screenWidth: ['1150']
        }
    ], function(err, res) {
        assert.ifError(err);
        assert.ok(res.htabs[0].isWithinMisMatchTolerance);
    })
    .moveToObject('[aria-controls="tab_item-1"]')
    .webdrivercss('htabs-hover',[
        {
            name: 'htabs',
            elem: '#tab-horizontal',
            screenWidth: ['1150']
        }
    ], function(err, res) {
        assert.ifError(err);
        assert.ok(res.htabs[0].isWithinMisMatchTolerance);
    })
    .click('[aria-controls="tab_item-1"]')
    .webdrivercss('htabs-click',[
        {
            name: 'htabs',
            elem: '#tab-horizontal',
            screenWidth: ['1150']
        }
    ], function(err, res) {
        assert.ifError(err);
        assert.ok(res.htabs[0].isWithinMisMatchTolerance);
    })

    // ### Interact with form
    .url('http://127.0.0.1:8080/layout-form.html')
    .webdrivercss('form',[
        {
            name: 'form',
            elem: '#form1',
            screenWidth: ['1150']
        }
    ], function(err, res) {
        assert.ifError(err);
        assert.ok(res.form[0].isWithinMisMatchTolerance);
    })
    .setValue('#text01', 'Hello from CSS Dev Conf')
    .selectByValue('#select01', '5')
    .webdrivercss('form-update',[
        {
            name: 'form',
            elem: '#form1',
            screenWidth: ['1150']
        }
    ], function(err, res) {
        assert.ifError(err);
        assert.ok(res.form[0].isWithinMisMatchTolerance);
    })

    // ### Pause and Waiting
    .url('http://127.0.0.1:8080/add-ons.html')
    .click('.image-gallery .fancybox:first-child img')
    .isVisible('.fancybox-wrap')
    .webdrivercss('modal',[
        {
            name: 'modal',
            elem: 'body',
            screenWidth: ['1150']
        }
    ], function(err, res) {
        assert.ifError(err);
        assert.ok(res.modal[0].isWithinMisMatchTolerance);
    })

    // reset the page
    .click('.fancybox-next')
    .pause(1000)
    .webdrivercss('modal-next',[
        {
            name: 'modal',
            elem: 'body',
            screenWidth: ['1150']
        }
    ], function(err, res) {
        assert.ifError(err);
        assert.ok(res.modal[0].isWithinMisMatchTolerance);
    })

    .end();






