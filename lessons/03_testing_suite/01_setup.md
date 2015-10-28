# Mocha/Chai Setup

## Resources

The following resources may be helpful as you complete these exercises:

1. [Take a Drive with WebdriverIO and Mocha](http://blog.kevinlamping.com/take-a-drive-with-webdriverio-and-mocha/)
2. [WebdriverIO Test Frameworks](http://webdriver.io/guide/testrunner/frameworks.html)

## Installation

Run:
```
npm install --save-dev mocha
```

Now that you're using Mocha, you'll need to use it to run your tests. To do so, update your `package.json` file's `test` script to be `mocha webdrivercss/*.js -t 60000`.

## Assignment

1. Run `npm install --save chai` from the project root in the command line.
1. Create a new file call `add-ons.js` in you `webdrivercss` folder
1. At the top of your file, add:
```
var chai = require('chai');
var expect = chai.expect;
```
1. Add your WebdriverIO/WebdriverCSS init commands (e.g. `var client = require('webdriverio')...`)
1. Create a `describe` block
1. Inside the `describe` block, create an `it` statement
1. Add `return ` at the front of the `client` call (we'll explain this in the next lesson) (e.g. `return client.url('...');`)
1. Get the title of the page
1. Add an 'expect' assertion validating that the title of the page is 'Add-ons'
1. Run `npm test` and ensure that everything runs.
1. Get the text of the `h1.page-title` element
1. Assert the text contains 'Add'
1. Run `npm test` again

### Extra Credit

[WebdriverCSS provides an interface for assertions](https://github.com/webdriverio/webdrivercss#let-your-test-fail-when-screenshots-differ). Add a `webdrivercss` call that has assertion checking that `err` isn't an `error` and the `isWithinMisMatchTolerance` is `true`. 

### Spoilers

Getting the title of the page:
```
    .getTitle()
    .then(function (title) {
        expect(title).to.equal('Add-ons')
    })
```

Getting the text of the page:
```
    .getText('h1.page-title')
    .then(function (text) {
        expect(text).to.contain('Add')
    })
```