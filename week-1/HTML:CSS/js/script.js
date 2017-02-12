$(".red").addClass("yellow bigbox");

// $("div").on("click", function(){
// 	alert("you poked the bear!")
// });

$(".red").click(function(){
	$(this).toggleClass("orange")
});