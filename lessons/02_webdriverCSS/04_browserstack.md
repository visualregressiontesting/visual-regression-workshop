- run tests in browserstack

# Customizing Webdriver Tests

## Resources

The following resources may be helpful as you complete these exercises:

1. [Browserstack Local Testing](https://www.browserstack.com/local-testing)

## Setup


## Assignment

1. Set up a local tunnel to your computer
2. Test your most recent code through browserstack

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
