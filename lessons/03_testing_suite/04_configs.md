# Customizing Mocha

## Resources

The following resources may be helpful as you complete these exercises:

1. [Mocha Usage Options](http://mochajs.org/#usage)
1. [Reporters](http://webdriver.io/guide/testrunner/reporters.html)
1. [Timeouts](http://mochajs.org/#timeouts)

## Assignment

WebdriverIO has [a Command Line Interface tool](http://webdriver.io/guide/testrunner/gettingstarted.html) that makes sharing set up between tests easier. It uses a configuration file to run. 

To generate your configuration file, run `npm run wdio-config` in your command line. It will ask you about various options; set the following:

1. In the cloud (pass in your user/key)
2. Which framework do you want to use? Mocha
3. Where are your test specs located? `webdrivercss/*.js`
4. Which reporter do you want to use? dot
5. Level of logging verbosity: Silent
6. In which directory should screenshots gets saved... errorShots
7. What is the base url? http://xxxxxxxx.ngrok.io (replace with your base url)

This will create a `wdio.conf.js` file with your options. 

1. In your `add-ons.js` file, change all `client` references to `browser`.
1. Change the reporter in your `wdio.conf.js` file to be `spec` and see how it changes the output of the tests.
1. Increase the timeout of the mocha tests in your `wdio.conf.js` file to allow you to take more time in your tests.
1. Run `npm run wdio` in your command line and validate your tests run.

### Extra Credit

We've use Chai's `expect` and `should` interfaces so far. However, [Mocha works with several other interfaces](http://mochajs.org/#interfaces) to fit each developer's personal style. Check out the options to see if another form of writing tests fits you better (and try changing over to a different interface).
