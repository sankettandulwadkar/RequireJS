requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts/helper',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        i18n: '../i18n'
    }
});


/*require(["helper/util"], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
}); */

requirejs(['jquery', 'util'],
function   ($) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.

    alert("Inside require");
    $(document).ready(function(){
    	$("body").append("<p>Hi there!</p>");	
    });
    

});