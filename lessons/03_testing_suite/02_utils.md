# Utils

## Resources

The following resources may be helpful as you complete these exercises:

1. [Mocha Hooks](https://mochajs.org/#hooks)
2. Kent Article
1. [Hooks Analogy](http://blog.kevinlamping.com/take-a-drive-with-webdriverio-and-mocha/#howtotaketurnssafelymochabeforeafterhooks)

## Assignment

1. Add a `before` hook to load the correct url, then `pause` for 2 seconds before starting the tests.
1. Add an `afterEach` hook to capture a screenshot of the page after each test is complete
1. Move `require('chai')` and other related code to `wdio.conf.js` file in the `before` function. Change `expect` load to: `var expect = require('chai')`.expect)`

### Extra Credit

WebdriverIO also allows you to run commands before/after the entire test suite. Check out [the `wdio.conf.js` example file](https://github.com/webdriverio/webdriverio/blob/master/examples/wdio.conf.js#L179) to see where they exist. In the `onPrepare` and `onComplete` hooks, you can use [the selenium-standalone NPM module to start/stop Selenium automatically](https://github.com/vvo/selenium-standalone#programmatic-api).

## Spoilers

    + 
    + Extra credit: [Sample wdio.conf.js file with hook set up](https://gist.github.com/klamping/f48f3167775e483e712e)