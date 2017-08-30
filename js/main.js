$(document).ready(function(){
  
  
  //------------------------------------//
  //Navbar//
  //------------------------------------//
    	var menu = $('.navbar');
    	$(window).bind('scroll', function(e){
    		if($(window).scrollTop() > 140){
    			if(!menu.hasClass('open')){
    				menu.addClass('open');
    			}
    		}else{
    			if(menu.hasClass('open')){
    				menu.removeClass('open');
    			}
    		}
    	});
  
  
  //------------------------------------//
  //Scroll To//
  //------------------------------------//
  $(".scroll").click(function(event){		
  	event.preventDefault();
  	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
  	
  });
  
  //------------------------------------//
  //Wow Animation//
  //------------------------------------// 
  wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false        // trigger animations on mobile devices (true is default)
        }
      );
      $('body').removeClass('oculto');
      wow.init();

  //------------------------------------//
  //Comece aqui (form)//
  //------------------------------------// 
  $('#comecar').submit(function(event) {

    e.preventDefault(); 
    $.ajax({
        type: "POST",
        url: "formulario.html",
        async: true,
        data: $(this).serialize(),
        success: function(data) { 
        },
        complete: function(result){
            if(result == 10) {
                //clear inputs
                //show msg success
        } else {
                //show msg error
        }}
    });

    // var $form = $(this);
    // console.log("Submit to Firebase");

    // var email = $('#exampleInputEmail1').val();
    // console.log(email);

    // return false;
  })

  // Idade
  $('#div-idade a').click(function(e) {
     //e.stopPropagation();
    e.preventDefault();
    $('#div-idade a').removeClass('active');
    $(this).addClass('active');
    $('#idade').val($(this).text());
    $('#idade').blur();
   });

  // Hospedagem
  $('#div-hospedagem a').click(function(e) {
    //e.stopPropagation();
    e.preventDefault();
    $('#div-hospedagem a').removeClass('active');
    $(this).addClass('active');
    $('#hospedagem').val($(this).text());
    $('#hospedagem').blur();
  });

  // Você viajará
  $('#div-voce-viajara a').click(function(e) {
    //e.stopPropagation();
    e.preventDefault();
    $('#div-voce-viajara a').removeClass('active');
    $(this).addClass('active');
    $('#voceViajara').val($(this).text());
    $('#voceViajara').blur();
  });

  // Tipo restaurante
  $('#div-restaurantes .thumbnail').click(function (e) {
    e.preventDefault();

    var id = $(this).data('slide-number');
    id = parseInt(id);

    if(!$(this).hasClass('active')){
      $(this).addClass('active');
      $('[id=restaurante-' + id + ']').prop('checked', true);
    } else {
      $(this).removeClass('active');
      $('[id=restaurante-' + id + ']').prop('checked', false);
    }   

    if($('input[name="check-restaurantes[]"]:checked').length > 0){
      $('input[id="restaurantes"]').prop('checked', true);
    } else {
      $('input[id="restaurantes"]').prop('checked', false);
    }

    $('#restaurantes').blur();
  })


  // Pode fazer
  $('#pode-fazer a').click(function (e) {
    e.preventDefault();
    
    var id = $(this).data('number');
    id = parseInt(id);

    if(!$(this).hasClass('active')){
      $(this).addClass('active');
      $('[id=pode-fazer-' + id + ']').prop('checked', true);
    } else {
      $(this).removeClass('active');
      $('[id=pode-fazer-' + id + ']').prop('checked', false);
    }

    if($('input[name="check-pode-fazer[]"]:checked').length > 0){
      $('input[id="podeFazer"]').prop('checked', true);
    } else {
      $('input[id="podeFazer"]').prop('checked', false);
    }

    $('#podeFazer').blur();
  })
	
});

