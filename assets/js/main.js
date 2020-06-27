$(document).ready(function(){
      // =============================================
        //   MailChimp Slider
    // =============================================
      ;(function($){
    "use strict"
        function mailChimp(){
            $('#mc_embed_signup').find('form').ajaxChimp();
        }
        mailChimp();
      
      $('select').niceSelect();

    // =============================================
        //   Simple LightBox js
   // =============================================
        $('.imageGallery1 .light').simpleLightbox();
      
      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });
      
      
      $(".skill_main").each(function() {
            $(this).waypoint(function() {
                var progressBar = $(".progress-bar");
                progressBar.each(function(indx){
                    $(this).css("width", $(this).attr("aria-valuenow") + "%")
                })
            }, {
                triggerOnce: true,
                offset: 'bottom-in-view'

            });
        });
   // =============================================
        //   Isotope Fillter js
   // =============================================
   function gallery_isotope(){
        if ( $('.gallery_f_inner').length ){
            // Activate isotope in container
      $(".gallery_f_inner").imagesLoaded( function() {
                $(".gallery_f_inner").isotope({
                    layoutMode: 'fitRows',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                }); 
            });
      
            // Add isotope click function
            $(".gallery_filter li").on('click',function(){
                $(".gallery_filter li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".gallery_f_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    gallery_isotope();
  
})(jQuery)
     // =============================================
        //   HIRE-ME-CONTACT
   // =============================================
        $('.button').click(function(){
          var buttonId = $(this).attr('id');
          $('#modal-container').removeAttr('class').addClass(buttonId);
          $('body').addClass('modal-active');
        })
        $('#modal-container').click(function(){
          $(this).addClass('out');
          $('body').removeClass('modal-active');
        });
  // =============================================
        //    PRELOADER
  // =============================================
      setTimeout(function(){
        $('.loader_bg').fadeToggle();
      }, 1500)
  // =============================================
          //   SMOOTH-SCROLL
    // =============================================
        var topoffset = 80; //variable for menu height
        //Use smooth scrolling when clicking on navigation
        $('.navbar-nav a').click(function() {
        if (location.pathname.replace(/^\//,'') === 
          this.pathname.replace(/^\//,'') && 
          location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top-topoffset
          }, 500);
          return false;
          } //target.length
        } //click function
        }); //smooth scrolling
 
  // =============================================
          //    TYPEWRITER
    // =============================================
    
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

  // =============================================
          //    BACK-TO-TOP
    // =============================================
  $(window).scroll(function(){
    if ($(this).scrollTop()>500){
      $(".back-top").fadeIn();
    }else{
        $(".back-top").fadeOut();
    }
  });
   $(".back-top").click(function(){
    $("html, body").animate({scrollTop:0}, 500)
  });
    // =============================================
          //    ANIMATE
    // =============================================
     new WOW().init();

   // =============================================
          //    TESTIMONIAL
    // =============================================
   // vars
'use strict'
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;
;
 // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
    
    testim.addEventListener("touchstart", function(e) {
        touchStartPos = e.changedTouches[0].clientX;
    })
  
    testim.addEventListener("touchend", function(e) {
        touchEndPos = e.changedTouches[0].clientX;
      
        touchPosDiff = touchStartPos - touchEndPos;
      
        console.log(touchPosDiff);
        console.log(touchStartPos); 
        console.log(touchEndPos); 

      
        if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click();
        } else {
          return;
        }
      
    })
});
 