/* $ means it's jquery. 
*/


$(".red").addClass("yellow bigbox");



// you can click anywhere on page to get message because selected all divs
// $("div").on("click",function(){alert("what up dog")});
//because .on("click", function(){ is so common, there is also
	//.click(function){       which we use below.



	//note that we are using anonymous function below! doesn't save anything.
$(".red").click(function(){
	$(this).toggleClass("orange")
	//above line is the same as $(".red").click(function(){}
});
// toggle will add and remove.
/*"this" refers to whatever the current instance is.
	If you ever get confused, check out console.log(this)
	Note that "this" tends to confuse others. So only use sparingly, maybe nested functions