## Neighborhood Map Project

This is the Neighborhood Map project. This project consists of several parts:
* Use Google Maps API and create markers and infowindows for various locations
* Use third-party API(s) to add functionality
* Use `Knockout` to handle list, filter, and other changeable information

___

####Use Google Maps API

The basic purpose of this project is to create a single page application using
Google Maps API. The steps needed for this are outlined below:

1. Create a Google Project and obtain an API key for Google Maps
1. Load the Google Maps API asynchronously
1. Create the function in `sd-map.js` that would load the map on the page
1. Create an array of markers that would load when the application is launched
1. Create infowindows that will appear when a marker or its corresponding list
   item is clicked

---

Personalizations made:

For this project I made several personalizations. I used `BOUNCE` to indicate
when a marker or list item was clicked. I also adjusted the color of markers
when a user drags the cursor over the markers on the map. When a user clicks
either a marker or a list item, an infowindow appears over the marker and
displays a brief snipet of information and links to the corresponding website.

___

####Use Third-Party API(s)



___

####Use Knockout



###Running the application

The portfolio must be accessed at my [website](http://marcnjaramillo.github.io)

A working internet connection is required to access the website.
* Note: `pizza.html` links to `main.min.js`, which is the minified version.

___

###Gulp

In order to make work simpler, I used gulp to perform a number of tasks.

Gulp is run from the the command line by switching to the directory holding
`gulpfile.js` and the `node_modules` directory

```
marcjaramillo (master) ~ $ cd ~/marcnjaramillo.github.io
marcjaramillo (master *) marcnjaramillo.github.io $

```

####Installing plugins

Plugins are added to `node_modules` via the command line

```
marcjaramillo (master *) marcnjaramillo.github.io $ npm install gulp-plugin --save-dev

```
The plugins used can be found in `gulpfile.js`. They are described below:

* __gulp__ - required to use gulp
* __gulp-jshint__ - checks for any errors in the JS file
* __gulp-clean-css__ - minifies by removing whitespace in CSS file
* __gulp-uglify__ - minifies by removing whitespace and comments in JS file
* __pump__ - needed for *gulp-uglify* to work
* __gulp-imagemin__ - reduces image size

These plugins operate by defining a task and then calling a function that will
carry out the necessary steps to accomplish the goals stated above.

####Running gulp

Once changes have been completed in the source file, use the command line to
perform the desired tasks

```
marcjaramillo (master *) marcnjaramillo.github.io $ gulp task

```
