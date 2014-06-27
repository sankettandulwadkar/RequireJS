
window.onload = function(){

if (document.getElementById('language').value == "en"){
	var translated_string = i18n.translate( "Hello World").onDomain("messages-en").fetch(); // alerts "some value"
	console.log(translated_string)
	// var divContent = document.getElementById("text-container").innerHTML;
	// divContent = translated_string;
}

else if (document.getElementById('language').value == "fr"){
	var translated_string = i18n.translate( "Hello World").onDomain("messages-fr").fetch(); // alerts "some value"
	var divContent = document.getElementById("text-container").innerHTML;
	divContent = translated_string;
}

else {
	console.log("Deutsch");
}

};