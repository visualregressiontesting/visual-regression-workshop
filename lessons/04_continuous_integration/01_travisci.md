# Travis Set Up

## Resources

The following resources may be helpful as you complete these exercises:

- [Getting Started with TravisCI](http://docs.travis-ci.com/user/getting-started/#To-get-started-with-Travis-CI%3A)
- [Building a Node.js Project](http://docs.travis-ci.com/user/languages/javascript-with-nodejs/)
- [The Build Lifecycle](http://docs.travis-ci.com/user/customizing-the-build/#The-Build-Lifecycle)
- [Validate your `.travis.yml` file](http://docs.travis-ci.com/user/travis-lint/)

## Assignment

1. Create a new file named `.travis.yml`
1. In that file, define that you want the Node.js language (version `0.12`)
1. Add a `before_install` hook that runs `sudo apt-get install graphicsmagick`
1. [Authorize TravisCI with GitHub](https://travis-ci.org/auth)
1. Go to [your profile page](https://travis-ci.org/profile) and enable your repo
1. Push a commit to Github and view the results of the build in Travis

### Extra Credit

One of the benefits of TravisCI is that it integrates heavily with Github. With this, you can [have TravisCI run your test script everytime someone pushes a code to a Pull Request](http://docs.travis-ci.com/user/pull-requests/). This is extremely beneficial for open-source tool maintainers, as it eases the burden of testing.

You can easily try this out by [opening a pull request](https://help.github.com/articles/using-pull-requests/) on your own repo. Since Travis is already set up, it will work without any extra configuration. 

After your pull request is opened, give Travis a minute or two to run, and the results should be displayed at the bottom of your pull request (a little green checkmark or red x).