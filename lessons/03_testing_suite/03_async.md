# Async

## Resources

The following resources may be helpful as you complete these exercises:

1. [Mocha Async Tips](http://blog.kevinlamping.com/mocha-usage-tips/#asynctests)
1. [Chai-as-promised and WebdriverIO](http://webdriver.io/guide/usage/transferpromises.html)
1. [JavaScript Promises](http://www.html5rocks.com/en/tutorials/es6/promises/#toc-async)

## Assignment

1. Run `npm install --save chai-as-promised` from the project root in the command line.
1. Load `chai-as-promised` in your `before` hook (use [the WebdriverIO docs](http://webdriver.io/guide/usage/transferpromises.html) for direction on this)
1. Change your title assertion from a `.then` statement to `.should.eventually.equal`
1. Update your `.page-title` assertion using the `.should.eventually` approach as well.
1. Run `npm test` and validate your tests still pass

### Extra Credit

When writing new tests, it may take several tries to get it right. To avoid running the entire test suite for each iteration, use [Mocha's `.only` & `.skip` test properties](https://mochajs.org/#exclusive-tests) to fine tune which tests get run.

Try adding `.only` or `.skip` to your tests to see how they can help speed testing up, or allow you to skip a broken test until you can fix it later.