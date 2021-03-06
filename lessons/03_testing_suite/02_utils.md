# Utils

## Resources

The following resources may be helpful as you complete these exercises:

1. [Mocha Hooks](https://mochajs.org/#hooks)
1. [Hooks Analogy](http://blog.kevinlamping.com/take-a-drive-with-webdriverio-and-mocha/#howtotaketurnssafelymochabeforeafterhooks)
1. [Where to put code in mocha/jasmine tests](https://medium.com/@kentcdodds/where-to-put-code-in-mocha-jasmine-tests-24aade62fd7e)

## Assignment

1. Add a `before` hook to init the client and load the correct url.
1. Split your two assertions (`getTitle` and `getText`) in to separate `it` statments.
1. Add an `after` hook to end the client.

### Extra Credit

WebdriverIO also allows you to run commands before/after the entire test suite. Check out [the `wdio.conf.js` example file](https://github.com/webdriverio/webdriverio/blob/master/examples/wdio.conf.js#L179) to see where they exist. In the `onPrepare` and `onComplete` hooks, you can use [the selenium-standalone NPM module to start/stop Selenium automatically](https://github.com/vvo/selenium-standalone#programmatic-api).

## Spoilers

- Extra credit: [Sample wdio.conf.js file with hook set up](https://gist.github.com/klamping/f48f3167775e483e712e)