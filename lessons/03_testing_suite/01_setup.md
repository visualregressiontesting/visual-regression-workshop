# Mocha/Chai Setup

## Resources

The following resources may be helpful as you complete these exercises:

1. [Take a Drive with WebdriverIO and Mocha](http://blog.kevinlamping.com/take-a-drive-with-webdriverio-and-mocha/)
2. [WebdriverIO Test Frameworks](http://webdriver.io/guide/testrunner/frameworks.html)

## Installation

Run:
```
npm install --save-dev mocha chai
```

Now that you're using Mocha, you'll need to use it to run your tests. To do so, update your `package.json` file's `test` script to be `mocha .`.

## Assignment

1. Run `npm install --save chai` from the project root in the command line.
1. In your `addons.js` test file, add this require statement to the top of the file `var expect = require('chai').expect;`.
1. wrap all of your tests in a `describe` block
1. For each set of tests, wrap them in an `it` statement
1. Add `return ` at the front of every `browser` call (we'll explain this in the next lesson) (e.g. `return browser.url('...');`)
1. Get the title of the page
1. Add an 'expect' assertion validating that the title of the page is 'Add-ons'
1. Get the text of the `.page-title` element
1. Assert the text contains 'Add'

### Extra Credit

When writing new tests, it may take several tries to get it right. To avoid running the entire test suite for each iteration, use [Mocha's `.only` & `.skip` test properties](https://mochajs.org/#exclusive-tests) to fine tune which tests get run.

Try adding `.only` or `.skip` to your tests to see how they can help speed testing up, or allow you to skip a broken test until you can fix it later.

## Spoilers

    + 
