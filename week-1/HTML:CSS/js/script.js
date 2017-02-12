$(".red").addClass("bigbox");

// $("div").on("click",function(){
//   alert("you poked the bear!")
// });

$(".red").click(function(){
  $(this).toggleClass("orange")
  $ (".red").toggleClass("orange");
});

$(".red").on("click", doSomething);

function doSomething (){
  
}
