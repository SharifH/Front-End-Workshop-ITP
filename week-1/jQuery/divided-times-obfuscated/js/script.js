//Button to lead to a drawer appearing with links for each nav item
//Slide up and slide down
//adding clases to the buttons
//active open slide-down and slide-up
$(document).ready(function(){

  //International
  $('#primary-nav .international').on('click',function(e){
    e.preventDefault();
    $('#primary-nav .international').siblings().removeClass('active');
    $('#primary-nav .international').toggleClass('active');
    if ($('#primary-nav .international').hasClass('active')){
      if ($('#slide-down').hasClass('open')){
      $('#slide-down .drop.open').hide().removeClass('open');
      $('.drop.international').show().addClass('open');
      console.log('interantional working?')
    } else {
      $('#slide-down .drop').hide();
      $('.drop.international').show().addClass('open');
      $('#slide-down').slideDown(200).addClass('open');
    }
  }else{
    $('#slide-down').slideUp(200).removeClass('open');
  }
});

  //Politics
  $('#primary-nav .politics').on('click',function(e){
    e.preventDefault();
    $('#primary-nav .politics').siblings().removeClass('active');
    $('#primary-nav .politics').toggleClass('active');
    if($('#primary-nav .politics').hasClass('active')){
      if ($('#slide-down').hasClass('open')) {
        $('#slide-down .drop.open').hide().removeClass('open');
        $('.drop.politics').show().addClass('open');
        console.log('this is sibling Politics working')
      }else{
        $('#slide-down .drop').hide();
        $('.drop.politics').show().addClass('open');
        $('#slide-down').slideDown(200).addClass('open');
      }
    } else{
      $('#slide-down').slideUp(200).removeClass('open');
    }
  });

});
