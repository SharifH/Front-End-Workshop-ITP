//A button click to reveal drawer with links for each nav item
	//change text color when category highlighted
//slide up and slide down
//adding classes to the buttons

//classes: active, open, slide-down, slide-up
//make sure that only one item in ul can be active at a time


//once page loads, then run:
$(document).ready(function(){

//e means event.

//INTERNATIONAL
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
				$('.drop.international').show().addClass('open');
				// console.log('this is working INTERNATIONAL!');
			} else {
				$('#slide-down .drop').hide();
				$('.drop.international').show().addClass('open');
				$('#slide-down').slideDown(200).addClass('open');
			}
		}else{
			$('#slide-down').slideUp(200).removeClass('open');
		}

	});//end of international

//POLITICS
	$('#primary-nav .politics').on('click', function(e){

		e.preventDefault();

		$('#primary-nav .politics').siblings().removeClass('active');
		$('#primary-nav .politics').toggleClass('active');

		if($('#primary-nav .politics').hasClass('active')){
			if($('#slide-down').hasClass('open')){
				$('slide-down .drop.open').hide().removeClass('open');
				$('.drop.politics').show().addClass('open');
				// console.log('this is working POLITICS!');
			} else {
				$('#slide-down .drop').hide();
				$('.drop.politics').show().addClass('open');
				$('#slide-down').slideDown(6000).addClass('open');
			}
		} else{
				$('#slide-down').slideUp(6000).removeClass('open');

		}

	});//end of politics

//BUSINESS

	$('#primary-nav .business').on('click', function(e){

		e.preventDefault();

		$('#primary-nav .business').siblings().removeClass('active');
		$('#primary-nav .business').toggleClass('active');

		if($('primary-nav .business').hasClass('active')){
			if($('#slide-down').)
		}

	})//end of business

})