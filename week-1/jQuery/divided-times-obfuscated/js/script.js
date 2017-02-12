//A button click to reveal drawer with links for each nav item
	//change text color when category highlighted
//slide up and slide down
//adding classes to the buttons

//classes: active, open, slide-down, slide-up
//make sure that only one item in ul can be active at a time


//once page loads, then run:
$(document).ready(function(){

//e means event.
//#primary-nav is an unordered list; international is a class. select both please
	$('#primary-nav .international').on('click', function(e){

		e.preventDefault(); //don't do what you'd normally do

		//remove active class from its siblings, i.e. things in same div
		$('#primary-nav .international').siblings().removeClass('active');
		//turn it active
		$('#primary-nav .international').toggleClass('active');


		if($('#primary-nav .international').hasClass('active')){
			if($('#slide-down').hasClass('open')){
				$('slide-down .drop.open').hide().removeClass('open');
				$('drop.international').show().addClass('open');
			}

		}

	})//end of international




})