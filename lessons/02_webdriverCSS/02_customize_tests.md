# Customizing Webdriver Tests

## Resources

The following resources may be helpful as you complete these exercises:

1. WebdriverCSS has [instructions on excluding areas of the page](https://github.com/webdriverio/webdrivercss#exclude-specific-areas)
2. WebdriverCSS also has details on [testing multiple resolutions](https://github.com/webdriverio/webdrivercss#keep-an-eye-on-mobile-screen-resolution)


## Assignment

1. Change your tests for "layout-full-width" to capture 1150px, 760px, and 600px
2. Exlude the navigation, footer and sidebar of "Sidebar Left Layout" and test the remainder of the page at the same 3 breakpoints
3. Turn the 'break-some-stuff' partial off. Take baselines, turn it back on and find the differences

### Tips
2. When you create a second instance of `.webdrivercss()` make sure that the first string you pass in is unique

### Extra Credit

1. Check out the "hide" and "remove" [usage option](https://github.com/webdriverio/webdrivercss#usage)

## Conclusion

## Spoilers

1. You'll need an assert statement for each screenshot in order to do a comparison. res.header is just an array of screenshots
2. Multiple .url() and .webdrivercss() functions can be strung together within a single client.
