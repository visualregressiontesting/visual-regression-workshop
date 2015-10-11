# Wraith Basics

Let's look at how to configure and run Wraith to capture page screenshots. We won't be doing any style editing yet. We want to validate that we can get Wraith running first.

## Assignment

1. In your visual regression workshop folder create a folder call 'wraith',
2. Change directory into the wraith folder and initialize Wraith by running `wraith setup`.
- Open 'wraith/configs/config.yaml' in your editor of choice.
- Update the `domains` section to point to your local server and the live site: [http://mpgilbertusa.github.io/Responsive-- - Starter-Kit-Pro-Sass](http://mpgilbertusa.github.io/Responsive-Starter-Kit-Pro-Sass). (See [spoilers section](#spoilers) for hints).
- Update the `paths` section to include each page. (Again, see the [spoilers section](#spoilers) below for all the paths).
- Run Wraith via `wraith capture config`.
- View gallery output by running `open shots/gallery.html` (or open via your browser of choice).
- Find any differences between the two sites. There should only be one.

### Extra Credit

If you don't want to see pages that didn't have any differences, [you can change the `diff mode` via your config file](http://bbc-news.github.io/wraith/index.html#Configoptions).

Try this by adding `mode: diffs_only` to the bottom of your config.yaml file and running Wraith again. Your gallery should be much simpler now.

## Conclusion

Wraith's biggest strength is its ease of setup and configuration for quick validation of changes. As you should have noticed, it caught one regression between the local and live site.

In the next exercise we'll look at how Wraith handles using baseline images to test the same URL multiple times

## Spoilers

If you're stuck trying to get the code working, here are some solutions:

Step 1: Use `mkdir wraith` to create a folder, or create one using the finder or windows explorer

Step 4:

```
domains:
    local: "http://localhost:8080"
    production: "http://mpgilbertusa.github.io/Responsive-Starter-Kit-Pro"
```

Step 5:

```
paths:
  home: /
  sidebar_left: /layout-sidebar-left.html
  sidebar_right: /layout-sidebar-right.html
  three_col: /layout-two-sidebars.html
  full_width: /layout-full-width.html
  audio_video: /layout-transcript.html
  sample_form: /layout-form.html
  styleguide: /style-guide.html
  addons: /add-ons.html
```
