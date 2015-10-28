# Customizing Mocha

## Resources

The following resources may be helpful as you complete these exercises:

1. [Mocha Usage Options](http://mochajs.org/#usage)
1. [Reporters](http://webdriver.io/guide/testrunner/reporters.html)
1. [Timeouts](http://mochajs.org/#timeouts)

## Assignment

1. Change the reporter in your `wdio.conf.js` file to be `spec` and see how it changes the output of the tests.
1. Increase the timeout of the mocha tests in your `wdio.conf.js` file to allow you to take more time in your tests.

### Extra Credit

We've use Chai's `expect` and `should` interfaces so far. However, [Mocha works with several other interfaces](http://mochajs.org/#interfaces) to fit each developer's personal style. Check out the options to see if another form of writing tests fits you better (and try changing over to a different interface).
