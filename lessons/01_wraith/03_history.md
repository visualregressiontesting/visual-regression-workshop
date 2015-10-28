# Using Wraith History

Wraith supports multiple comparison modes. History mode allows you to create baseline images of your website or styleguide and compare your site to those baselines as you change your code.

## Resources

The following resources may be helpful as you complete these exercises:

1. Check out the [history mode](http://bbc-news.github.io/wraith/index.html#HistoryMode) for setup instructions


## Assignment

1. Create baseline images of all of your local pages
2. Uncomment the "break-some-things.scss" partial inside of the "main.scss"
3. Compile Sass and compare the current site to your baseline images
- View gallery output by running `open shots/gallery.html` (or open via your browser of choice).
- Find all of the differences between the two sites.

### Extra Credit
1. Check out Wraith [Spidering Mode](http://bbc-news.github.io/wraith/index.html#SpideringMode) and set up a spider file that includes all of the site pages
2. Use a `beforeCapture` hook to modify the H1 text on the style guide page to be at least 3 lines of text before creating your baseline

