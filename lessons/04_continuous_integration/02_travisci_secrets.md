## Travis Set Up

## Resources

The following resources may be helpful as you complete these exercises:

- [Browserstack Automate Profile Page]()
- [Travis Environmental Variables]()

## Assignment

1. Add user/key to Travis environmental variables
1. In your `wdio.conf.js` file, add user/key information

### Extra Credit

You can also define environmental variables from the command line. Read up on [the TravisCI documentation]() and see if you can store the information from the Travis CLI (command-line interface).

## Spoilers

    + 1.
        ```
        exports.config = {
            user: process.env.user,
            key: process.env.key,

            // Rest of configs go here
        };
        ```
