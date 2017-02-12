$(".red").addClass("bigbox"); //adding 2 classes

$(".red").on("click", function(){
  $(this).toggleClass("orange");
  // interchangeable with $(".red").toggleClass("orange");
}); //not calling a function, just write down the function

// $(".red").on("click", function(){}) = $(".red").click(function(){}) ->1time anonymous function.
// = $(".red").on("click", something());
//   function something() {}
