$(function () {
    $('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').fadeToggle(200);
    $('body').toggleClass('noscroll');
    });

    jQuery('.swiper-wrapper *').removeAttr('style');

    var mySwiper1 = new Swiper('.swiper1', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            reverseDirection: false
        },
        breakpoints: {
            600: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var mySwiper2 = new Swiper('.swiper2', {
        loop: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            reverseDirection: false
        },
        pagination: {
            el: '.page2',
            type: 'bullets',
            clickable: true
        }
    });

    jQuery(window).on("scroll", function($) {
        if (jQuery(this).scrollTop() > 500) {
          jQuery('.floating').show();
        } else {
          jQuery('.floating').hide();
        }
      });
      
      jQuery('.floating').click(function () {
        jQuery('body,html').animate({
          scrollTop: 0
        }, 500);
        return false;
      });

      let $form = $( '#js-form')
      $form.submit(function(e) { 
        $.ajax({ 
         url: $form.attr('action'), 
         data: $form.serialize(), 
         type: "POST", 
         dataType: "xml", 
         statusCode: { 
            0: function() { 
              //送信に成功したときの処理 
              $form.slideUp()
              $( '#js-success' ).slideDown()
            }, 
            200: function() { 
              //送信に失敗したときの処理 
              $form.slideUp()
              $( '#js-error' ).slideDown()
            } 
          } 
        });
        return false; 
      }); 
    
      $('.works-nav-items li').on('click', function(){
        let category = $(this).attr('data-target');
        
          $('.works-nav-items li').removeClass('-select');
          $(this).addClass('-select');
          $('.works-item').removeClass('-select');
          $('.' + category).addClass('-select');
      });
});