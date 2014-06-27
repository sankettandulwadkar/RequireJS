
function translate(){

	var chosen_language = document.getElementById('language').value;
	var translated_string = i18n.translate( "Hello World").onDomain("messages-"+chosen_language).fetch(); // alerts "some value"
	console.log(translated_string)
	document.getElementById("text-container").innerHTML = translated_string;
	
}

$("document").ready(function(){
	$("#btn-translate").click(function(){
		translate();
	})
});
