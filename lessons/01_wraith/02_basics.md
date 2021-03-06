# Wraith Basics

Let's look at how to configure and run Wraith to capture page screenshots. We won't be doing any style editing yet. We want to validate that we can get Wraith running first.

## Assignment

1. Open 'wraith/configs/multiple_domain.yaml' in your editor of choice.
2. Update the `domains` section to point to your local server and the live site: [http://mpgilbertusa.github.io/Responsive-Starter-Kit-Pro-Sass/](http://mpgilbertusa.github.io/Responsive-Starter-Kit-Pro-Sass/). (See [spoilers section](#spoilers) for hints).
- Update the `paths` section to include each page. (Again, see the [spoilers section](#spoilers) below for all the paths).
- Run Wraith via `wraith capture configs/multiple_domains.yml`.
- View gallery output by running `open shots/gallery.html` (or open via your browser of choice).
- Find all of the differences between the two sites.

### Extra Credit

If you don't want to see pages that didn't have any differences, [you can change the `diff mode` via your config file](http://bbc-news.github.io/wraith/index.html#Configoptions).

Try this by adding `mode: diffs_only` to the bottom of your config.yaml file and running Wraith again. Your gallery should be much simpler now.


## Spoilers

If you're stuck trying to get the code working, here are some solutions:

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
