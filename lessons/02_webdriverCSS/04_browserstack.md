# Customizing Webdriver Tests

## Resources

The following resources may be helpful as you complete these exercises:

1. [Browserstack Local Testing](https://www.browserstack.com/local-testing)
2. [ngrok local tunnel](https://ngrok.com/)
3. [ngrok npm](https://www.npmjs.com/package/ngrok)

## Setup


## Assignment

1. Run `npm run local` and use the `xxxxxxxx.ngrok.io` url as your test URL
2. Write a single test for the full homepage
3. Run that test via Browserstack

### Extra Credit
1. SauceLabs
1. Multiremotes


## Spoilers

Update your client to the following


```
  var client = require('webdriverio').remote({
    desiredCapabilities: {
      'browserstack.debug': 'true',
      'browserstack.local': 'true',
      os: 'Windows',
      os_version: '10',
      browser: 'firefox',
      browser_version: '41'
    },
    host: 'hub.browserstack.com',
    port: 80,
    user: options.browserstack.user,
    key: options.browserstack.key
  });
```
