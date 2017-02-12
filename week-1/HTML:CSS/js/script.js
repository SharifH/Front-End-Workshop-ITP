/* $ means it's jquery. 
*/
$(".red").addClass("yellow bigbox");

// you can click anywhere on page to get message because selected all divs
// $("div").on("click",function(){alert("what up dog")}); 

$(".red").click(function(){
	$(this).toggleClass("orange")
	//above line = $(".red").click(function(){}
});
// toggle will add and remove.
/*"this" refers to whatever the current instance is. so if you have a bunch of
	nested functions or nested objects, you can just say "this"
	If you ever get confused, check out console.log(this)