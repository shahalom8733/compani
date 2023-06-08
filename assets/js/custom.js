

window.onscroll = function(){
	scrollFunction();
}
function scrollFunction(){
	if(document.body.scrollTop >50 || document.documentElement.scrollTop > 50){
		document.getElementById('logo-size').style.width = "9rem";	
	}
	else{
		document.getElementById('logo-size').style.width = "12rem";
	}	 
}

$(document).ready(function(){



$('.vplay').click(function(){
	$('.mfp-wrap').addClass('down-header');
})
// $(".mfp-iframe-scaler").click(function(){
// 	$('.header-area').removeClass('down-header');
// })



 $(window).load(function() {
	$(".preloder").delay(1000).fadeOut("fast");
	$(".loder").delay(1000).fadeOut("fast");
});



	$('.menu-button').click(function(){
		$('.menu-button').removeClass('nav-close');
		$(this).addClass('nav-close');
		
		$('nav').toggleClass('nav-background');
	    $('nav ul').toggleClass('nav-position');

	})



	$('nav ul li a').click(function(){
		$('nav ul li a').removeClass('active');
		$(this).addClass('active');
	})

	$('.mixitup-menu button').click(function(){
		$('.mixitup-menu button').removeClass('mixitup-active');
		$(this).addClass('mixitup-active');
	})

	var mixer = mixitup('.work-images');

})

  AOS.init();





$(document).ready(function(){
	$('.gimg').magnificPopup({
		type: 'image',
		gallery: {
			enabled:true
		}
	});
});
  

$(document).ready(function(){
    $('.vplay').magnificPopup({
        type: 'iframe',
      
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>', 
          
            patterns: {
              youtube: {
                index: 'youtube.com/',
          
                id: 'v=',
          
                src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
              },
              vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: 'https://player.vimeo.com/video/%id%?autoplay=1'
              },
              gmaps: {
                index: '//maps.google.',
                src: '%id%&output=embed'
              }
          
              
          
            },
          
            srcAction: 'iframe_src', 
          }


      
        
    })
})