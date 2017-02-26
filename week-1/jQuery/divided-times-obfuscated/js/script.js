<<<<<<< HEAD
// A button click to lead to a drawer appearing with links or each nav item
// slide up and slide down
// adding classes to the buttons
//active open slide-down slide-up
//make sure the other items don't have an active class

$(document).ready(function(){

=======
//  Abutton click to lead to a drawer appearing with links for each nav item
// slide up and slide down
// adding classes to the buttons
// active open slide-down slide up
// make sure that the other items dont have an active class
$(document).ready(function(){

// Internation navigation buttons
>>>>>>> master
  $('#primary-nav .international').on('click', function(e){
    e.preventDefault();
    $('#primary-nav .international').siblings().removeClass('active');
    $('#primary-nav .international').toggleClass('active');
    if($('#primary-nav .international').hasClass('active')){
      if($('#slide-down').hasClass('open')){
        $('#slide-down .drop.open').hide().removeClass('open');
        $('.drop.international').show().addClass('open');
<<<<<<< HEAD
    }else{
      $('#slide-down .drop').hide();
      $('.drop.international').show().addClass('open');
      $('#slide-down').slideDown(200).addClass('open');

    }
  } else{
    $('#slide-down').slideUp(200).removeClass('open');
  }
});
})

=======
        console.log('this is working?');
      }else{
        $('#slide-down .drop').hide();
        $('.drop.international').show().addClass('open');
        $('#slide-down').slideDown(200).addClass('open');
      }
    }else{
      $('#slide-down').slideUp(200).removeClass('open');
    }
  });

// POLITICS
>>>>>>> master
$('#primary-nav .politics').on('click', function(e){
  e.preventDefault();
  $('#primary-nav .politics').siblings().removeClass('active');
  $('#primary-nav .politics').toggleClass('active');
  if($('#primary-nav .politics').hasClass('active')){
    if($('#slide-down').hasClass('open')){
      $('#slide-down .drop.open').hide().removeClass('open');
      $('.drop.politics').show().addClass('open');
<<<<<<< HEAD
  }else{
    $('#slide-down .drop').hide();
    $('.drop.politics').show().addClass('open');
    $('#slide-down').slideDown(200).addClass('open');

  }
} else{
  $('#slide-down').slideUp(200).removeClass('open');
}
});


$('#primary-nav .business').on('click', function(e){
  e.preventDefault();
  $('#primary-nav .business').siblings().removeClass('active');
  $('#primary-nav .business').toggleClass('active');
  if($('#primary-nav .business').hasClass('active')){
    if($('#slide-down').hasClass('open')){
      $('#slide-down .drop.open').hide().removeClass('open');
      $('.drop.business').show().addClass('open');
  }else{
    $('#slide-down .drop').hide();
    $('.drop.business').show().addClass('open');
    $('#slide-down').slideDown(200).addClass('open');

  }
} else{
  $('#slide-down').slideUp(200).removeClass('open');
}
});

$('#primary-nav .technology').on('click', function(e){
  e.preventDefault();
  $('#primary-nav .technology').siblings().removeClass('active');
  $('#primary-nav .technology').toggleClass('active');
  if($('#primary-nav .technology').hasClass('active')){
    if($('#slide-down').hasClass('open')){
      $('#slide-down .drop.open').hide().removeClass('open');
      $('.drop.technology').show().addClass('open');
  }else{
    $('#slide-down .drop').hide();
    $('.drop.technology').show().addClass('open');
    $('#slide-down').slideDown(200).addClass('open');

  }
} else{
  $('#slide-down').slideUp(200).removeClass('open');
}
});


$('#primary-nav .culture').on('click', function(e){
  e.preventDefault();
  $('#primary-nav .culture').siblings().removeClass('active');
  $('#primary-nav .culture').toggleClass('active');
  if($('#primary-nav .culture').hasClass('active')){
    if($('#slide-down').hasClass('open')){
      $('#slide-down .drop.open').hide().removeClass('open');
      $('.drop.culture').show().addClass('open');
  }else{
    $('#slide-down .drop').hide();
    $('.drop.culture').show().addClass('open');
    $('#slide-down').slideDown(200).addClass('open');

  }
} else{
  $('#slide-down').slideUp(200).removeClass('open');
}
});


$('#primary-nav .blogs').on('click', function(e){
  e.preventDefault();
  $('#primary-nav .blogs').siblings().removeClass('active');
  $('#primary-nav .blogs').toggleClass('active');
  if($('#primary-nav .blogs').hasClass('active')){
    if($('#slide-down').hasClass('open')){
      $('#slide-down .drop.open').hide().removeClass('open');
      $('.drop.blogs').show().addClass('open');
  }else{
    $('#slide-down .drop').hide();
    $('.drop.blogs').show().addClass('open');
    $('#slide-down').slideDown(200).addClass('open');

  }
} else{
  $('#slide-down').slideUp(200).removeClass('open');
}
=======
      console.log('this is working?');
    }else{
      $('#slide-down .drop').hide();
      $('.drop.politics').show().addClass('open');
      $('#slide-down').slideDown(200).addClass('open');
    }
  }else{
    $('#slide-down').slideUp(200).removeClass('open');
  }
});

// BUSINESS


// TECHNOLOGY


// CULTURE


// BLOGS




>>>>>>> master
});
