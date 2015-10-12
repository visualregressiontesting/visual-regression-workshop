# Mocha/Chai Setup

## Resources

The following resources may be helpful as you complete these exercises:

1. [Take a Drive with WebdriverIO and Mocha](http://blog.kevinlamping.com/take-a-drive-with-webdriverio-and-mocha/)
2. [WebdriverIO Test Frameworks](http://webdriver.io/guide/testrunner/frameworks.html)

## Installation



## Assignment

1. Add mochaOpts to your webdriver configuration
1. In your `addons.js` test file, wrap all of your tests in a `describe` block
1. For each set of tests, wrap them in an `it` statement
2. Add `return browser;` to the end every `it` statement (we'll explain this in the next lesson)
1. Get the title of the page
1. Add an assertion that the title of the page equals 'Add-ons'
1. Get the text of the `.page-title` element
1. Assert the text equals 'Add-ons'

### Extra Credit

When writing new tests, it may take several tries to get it right. To avoid running the entire test suite for each iteration, use [Mocha's `.only` & `.skip` test properties](https://mochajs.org/#exclusive-tests) to fine tune which tests get run.

Try adding `.only` or `.skip` to your tests to see how they can help speed testing up, or allow you to skip a broken test until you can fix it later.

## Conclusion

## Spoilers

    + 
