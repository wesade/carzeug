$(document).ready(function(){
	sizeOfContent();
	$(window).resize(sizeOfContent);
});


function sizeOfContent() {
	var height = $("html").height() + "px";
	$(".wrapper").css("min-height", height);
}