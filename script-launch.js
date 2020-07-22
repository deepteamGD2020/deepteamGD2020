// TIMER ======================
// ================================
    document.addEventListener('DOMContentLoaded', () => {
        let timer = document.getElementById("timer");
        detectSpentTime();
    })

    let detectSpentTime = function () {

        TimeMe.initialize({
            currentPageName: "index.html", // current page
            idleTimeoutInSeconds: 30 // seconds
        });

        // Retrieve time spent on current page
        // let timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();

        setInterval(() => {
            let date = new Date(null);
            let timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();

            date.setSeconds(timeSpentOnPage); // specify value for SECONDS here
            let timeSpentFormatted = date.toISOString().substr(11, 8);

            timer.textContent = timeSpentFormatted;



        }, 1000)

    }





// CLICK FUNCTIONS ======================
// ================================
    $(document).ready(function(){
        //$('.filmProg').hide();
        //$('.contactBar').hide();

        $(".click-to-open").click(function(){
            $(".blueBanner").addClass('fullscreen');
            $(".textInBannerCenterClose").show();
            $(".blueScreenOpen").show();
            $(".click-to-open").hide();
            $(".banner-closed").hide();
        });

        $(".textInBannerCenterClose").click(function(){
            $(".blueBanner").removeClass('fullscreen');
            $(".textInBannerCenterClose").hide();
            $(".blueScreenOpen").hide();
            $(".click-to-open").show();
            $(".banner-closed").show();
        });




        $(".showOverview").click(function(){
            $(".showOverview").hide();
            $(".hideOverview").show();
            $(".usAll").removeClass('hide');
        });
        $(".hideOverview").click(function(){
            $(".showOverview").show();
            $(".hideOverview").hide();
            $(".usAll").addClass('hide');
        });












// SHRINK THE IMAGE mobile====================
// ====================================
  window.onscroll = function() {scrollFunction()};

  var topOffset = 50;

  function scrollFunction() {
    if (document.body.scrollTop > topOffset || document.documentElement.scrollTop > topOffset) {
      document.getElementById("shrinkHeader").style.width = "45%";
      $('.bottomIcon').css({
        'margin-top' : '2%',
      });
    } else {
      document.getElementById("shrinkHeader").style.width = "90%";
      $('.bottomIcon').css({
        'margin-top' : '0%',
      });
    }
  }



// ROTATE THE IMAGE =============

  $(document).on('scroll', function() {
    // mobile spin //

    if ($(document).scrollTop() >= 100) {
      $(".logoImg").addClass('spin2');
    } else {
      $(".logoImg").removeClass('spin2');
    }

    //  FOR FIRST CONTENTLESS VIEW
    if ($(document).scrollTop() >= 700) {
      $(".logoImg").addClass('spin3');
    } else {
      $(".logoImg").removeClass('spin3');
    }

    if ($(document).scrollTop() >= 1400) {
      $(".logoImg").addClass('spin4');
    } else {
      $(".logoImg").removeClass('spin4');
    }

    /*  FOR WHEN CONTENT IS IN
    if ($(document).scrollTop() >= 1100) {
      $(".logoImg").addClass('spin3');
    } else {
      $(".logoImg").removeClass('spin3');
    }

    if ($(document).scrollTop() >= 2100) {
      $(".logoImg").addClass('spin4');
    } else {
      $(".logoImg").removeClass('spin4');
    }*/

    if ($(document).scrollTop() >= 3100) {
      $(".logoImg").addClass('spin5');
    } else {
      $(".logoImg").removeClass('spin5');
    }

    if ($(document).scrollTop() >= 4100) {
      $(".logoImg").addClass('spin6');
    } else {
      $(".logoImg").removeClass('spin6');
    }


    // desktop spin //
    if ($(document).scrollTop() >= 100) {
      $(".logo").addClass('smaller');
      $(".logo").addClass('spin2');
    } else {
      $(".logo").removeClass('smaller');
      $(".logo").removeClass('spin2');
    }


      //  FOR FIRST CONTENTLESS VIEW
      if ($(document).scrollTop() >= 1100) {
          $(".logo").addClass('spin3');
        } else {
          $(".logo").removeClass('spin3');
        }


      /*  FOR WHEN CONTENT IS IN
      if ($(document).scrollTop() >= 1600) {
          $(".logo").addClass('spin3');
        } else {
          $(".logo").removeClass('spin3');
        }
      */

      if ($(document).scrollTop() >= 3100) {
        $(".logo").addClass('spin4');
      } else {
        $(".logo").removeClass('spin4');
      }

      if ($(document).scrollTop() >= 4600) {
        $(".logo").addClass('spin5');
      } else {
        $(".logo").removeClass('spin5');
      }

      if ($(document).scrollTop() >= 6100) {
        $(".logo").addClass('spin6');
      } else {
        $(".logo").removeClass('spin6');
      }

      if ($(document).scrollTop() >= 7600) {
        $(".logo").addClass('spin7');
      } else {
        $(".logo").removeClass('spin7');
      }

      if ($(document).scrollTop() >= 9100) {
        $(".logo").addClass('spin8');
      } else {
        $(".logo").removeClass('spin8');
      }

      if ($(document).scrollTop() >= 10600) {
        $(".logo").addClass('spin9');
      } else {
        $(".logo").removeClass('spin9');
      }

      if ($(document).scrollTop() >= 12100) {
        $(".logo").addClass('spin10');
      } else {
        $(".logo").removeClass('spin10');
      }

      if ($(document).scrollTop() >= 13600) {
        $(".logo").addClass('spin11');
      } else {
        $(".logo").removeClass('spin11');
      }


  });


 //    _
 //   ___/_)              _____
 //  (  /       /       (, /   )      /)
 //  __/    _ _/_ /_      /__ / ____  /_.
 // (_/\___(/_(___/_)_   /   \_(_)(__/(__

// SLIDESHOW FANCYBOXXXX===============
// ====================================

    $(".open_fancybox_berglind").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/berglind/berglind_0.png',
            opts : {
              caption : 'First caption',
              //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          },
          {
            src : 'imgs/berglind/berglind_1.png',
            opts : {
              caption : 'First caption',
              //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          },
          {
            src : 'imgs/berglind/berglind_2.png',
            opts : {
              caption : 'First caption',
              //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          },
          {
            src : 'imgs/berglind/berglind_3.png',
            opts : {
              caption : 'First caption',
              //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          },
          {
            src : 'imgs/berglind/berglind_4.png',
            opts : {
              caption : 'First caption',
              //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          },
          {
            src : 'imgs/berglind/berglind_5.png',
            opts : {
              caption : 'First caption',
              //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          },
          {
            src : 'imgs/berglind/berglind_6.png',
            opts : {
              caption : 'First caption',
              //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          }
      ], {
          padding : 0,
          loop : true
      });

    return false;

    });

    $(".open_fancybox_anastasia").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/anastasia/anasta_0.jpg',
            opts : {
              //caption : 'First caption',
              //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          },
          {
            src : '',
            opts : {
              //caption : 'First caption',
              //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          },
          {
            src : 'imgs/anastasia/anasta_1.jpg',
            opts : {
              //caption : 'First caption',
              //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          },
          {
            src : 'imgs/anastasia/anasta_2.jpg',
            opts : {
              //caption : 'First caption',
              //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          },
          {
            src : 'imgs/anastasia/anasta_3.jpg',
            opts : {
              //caption : 'First caption',
              //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          }
      ], {
          padding : 0,
          loop : true
      });

    return false;

    });



    $(".open_fancybox_anna").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/anna/anna_0.png',
            opts : {
              caption : 'First caption',
              //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          },
          {
            src : 'imgs/berglind/berglind_1.png',
            opts : {
              caption : 'First caption',
              //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          },
          {
            src : 'imgs/berglind/berglind_2.png',
            opts : {
              caption : 'First caption',
              //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          },
          {
            src : 'imgs/berglind/berglind_3.png',
            opts : {
              caption : 'First caption',
              //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          }
      ], {
          padding : 0,
          loop : true
      });

    return false;

    });





// TYPEWRITER======================
// ================================

  var spacing = "<span class=whiteSpace> </span>";

  var str = "<p>dear reader</p> <br> <p>our private spaces have become the centers of our public lives" +spacing+ "our common place has dispersed"+spacing+"and we found ourselves in our bedrooms"+spacing+"making projects related to social"+spacing+"political and economic issues"+spacing+"since then"+spacing+"we sought to re-enact a shared ground"+spacing+"and eventually"+spacing+"have patched our fragmented times into this very shared moment"+spacing+"soon to be experienced together on our own time </p> <br> <p> the works displayed on this platform will be materialized in a real-time physical encounter at our graduation festival from the 10th to the 13th of september"+spacing+"during which the platform will host a screening of complete works</p> <br> <p>although the graduation show this year will be limited in terms of accessibility and time"+spacing+"we hope this platform will allow our audience to experience our work further on their own time</p><br><p>take care" +spacing+ "see you soon</p><br><br><p>(type design" +spacing+ "chalga by nedislav kamburov" +spacing+ "sambo by edward dżułaj)</p><br><br>",
      i = 0,
      isTag,
      text;

  (function type() {
      text = str.slice(0, ++i);
      if (text === str) return;

      document.getElementById('typewriter').innerHTML = text;
      // document.getElementById( 'bottom' ).scrollIntoView();

      var char = text.slice(-1);
      if( char === '<' ) isTag = true;
      if( char === '>' ) isTag = false;


      // ===================================
      // FUNCTION TO FIND TIME-RELATED WORDS
      // ===================================

      // ADD TIME-RELATED WORDS TO THIS ARRAY
      var yourstring = ["2020", "in these times", "on their", "own time", "in progress", "ultimately", "soon", "different times", "fragmented times", "event", "ually", "real-time", "10th", "13th", "of september", "fall", "moment", 'year', 'sambo'];

      $.each(yourstring , function(index, val) {
        $('#typewriter p:contains('+val+')', document.body).each(function(){
              console.log(this);
              $(this).html($(this).html().replace(
                    new RegExp(val, 'g'), '<span class=timeClass>'+val+'</span>'
              ));
        });
      });

      // ===================================

      // $('#readLetter').click(function(){
        if (isTag) return type();
        setTimeout(type, 50);
      // });


  }());



});//DOC READY FUNCT-------------------









// LAZYLOAD ======================
// ================================

    document.addEventListener("DOMContentLoaded", function() {
      var lazyloadImages;

      if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        var imageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              var image = entry.target;
              image.src = image.dataset.src;
              image.classList.remove("lazy");
              imageObserver.unobserve(image);
            }
          });
        });

        lazyloadImages.forEach(function(image) {
          imageObserver.observe(image);
        });
      } else {
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy");

        function lazyload () {
          if(lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
          }

          lazyloadThrottleTimeout = setTimeout(function() {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function(img) {
                if(img.offsetTop < (window.innerHeight + scrollTop)) {
                  img.src = img.dataset.src;
                  img.classList.remove('lazy');
                }
            });
            if(lazyloadImages.length == 0) {
              document.removeEventListener("scroll", lazyload);
              window.removeEventListener("resize", lazyload);
              window.removeEventListener("orientationChange", lazyload);
              window.removeEventListener("load", lazyload);
            }
          }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
        window.addEventListener("load", lazyload);
      }
    });
