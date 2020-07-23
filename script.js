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
        $(".usAll").click(function(){
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
      /*if ($(document).scrollTop() >= 700) {
        $(".logoImg").addClass('spin3');
      } else {
        $(".logoImg").removeClass('spin3');
      }

      if ($(document).scrollTop() >= 1400) {
        $(".logoImg").addClass('spin4');
      } else {
        $(".logoImg").removeClass('spin4');
      }*/

      //  FOR WHEN CONTENT IS IN
      if ($(document).scrollTop() >= 1100) {
        $(".logoImg").addClass('spin3');
      } else {
        $(".logoImg").removeClass('spin3');
      }

      if ($(document).scrollTop() >= 2100) {
        $(".logoImg").addClass('spin4');
      } else {
        $(".logoImg").removeClass('spin4');
      }

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

      if ($(document).scrollTop() >= 5100) {
        $(".logoImg").addClass('spin7');
      } else {
        $(".logoImg").removeClass('spin7');
      }

      if ($(document).scrollTop() >= 6100) {
        $(".logoImg").addClass('spin8');
      } else {
        $(".logoImg").removeClass('spin8');
      }

      if ($(document).scrollTop() >= 7100) {
        $(".logoImg").addClass('spin9');
      } else {
        $(".logoImg").removeClass('spin9');
      }

      if ($(document).scrollTop() >= 8100) {
        $(".logoImg").addClass('spin10');
      } else {
        $(".logoImg").removeClass('spin10');
      }

      if ($(document).scrollTop() >= 9100) {
        $(".logoImg").addClass('spin11');
      } else {
        $(".logoImg").removeClass('spin11');
      }

      if ($(document).scrollTop() >= 10100) {
        $(".logoImg").addClass('spin12');
      } else {
        $(".logoImg").removeClass('spin12');
      }

      if ($(document).scrollTop() >= 11100) {
        $(".logoImg").addClass('spin13');
      } else {
        $(".logoImg").removeClass('spin13');
      }

      if ($(document).scrollTop() >= 12100) {
        $(".logoImg").addClass('spin14');
      } else {
        $(".logoImg").removeClass('spin14');
      }

      if ($(document).scrollTop() >= 13100) {
        $(".logoImg").addClass('spin15');
      } else {
        $(".logoImg").removeClass('spin15');
      }

      if ($(document).scrollTop() >= 14100) {
        $(".logoImg").addClass('spin16');
      } else {
        $(".logoImg").removeClass('spin16');
      }

      if ($(document).scrollTop() >= 15100) {
        $(".logoImg").addClass('spin17');
      } else {
        $(".logoImg").removeClass('spin17');
      }

      if ($(document).scrollTop() >= 16100) {
        $(".logoImg").addClass('spin18');
      } else {
        $(".logoImg").removeClass('spin18');
      }

      if ($(document).scrollTop() >= 17100) {
        $(".logoImg").addClass('spin19');
      } else {
        $(".logoImg").removeClass('spin19');
      }

      if ($(document).scrollTop() >= 18100) {
        $(".logoImg").addClass('spin20');
      } else {
        $(".logoImg").removeClass('spin20');
      }

      if ($(document).scrollTop() >= 19100) {
        $(".logoImg").addClass('spin21');
      } else {
        $(".logoImg").removeClass('spin21');
      }

      if ($(document).scrollTop() >= 20100) {
        $(".logoImg").addClass('spin22');
      } else {
        $(".logoImg").removeClass('spin22');
      }

      if ($(document).scrollTop() >= 21100) {
        $(".logoImg").addClass('spin23');
      } else {
        $(".logoImg").removeClass('spin23');
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
        /*if ($(document).scrollTop() >= 1100) {
            $(".logo").addClass('spin3');
          } else {
            $(".logo").removeClass('spin3');
          }*/


        //  FOR WHEN CONTENT IS IN
        if ($(document).scrollTop() >= 1600) {
            $(".logo").addClass('spin3');
          } else {
            $(".logo").removeClass('spin3');
          }
        

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

        if ($(document).scrollTop() >= 15100) {
          $(".logo").addClass('spin12');
        } else {
          $(".logo").removeClass('spin12');
        }

        if ($(document).scrollTop() >= 16600) {
          $(".logo").addClass('spin13');
        } else {
          $(".logo").removeClass('spin13');
        }

        if ($(document).scrollTop() >= 18100) {
          $(".logo").addClass('spin14');
        } else {
          $(".logo").removeClass('spin14');
        }


        //Here it stops spinning fsr...(working fine on mobile)

        if ($(document).scrollTop() >= 19600) {
          $(".logo").addClass('spin15');
        } else {
          $(".logo").removeClass('spin15');
        }

        if ($(document).scrollTop() >= 21100) {
          $(".logo").addClass('spin16');
        } else {
          $(".logo").removeClass('spin16');
        }

        if ($(document).scrollTop() >= 22600) {
          $(".logo").addClass('spin17');
        } else {
          $(".logo").removeClass('spin17');
        }

        if ($(document).scrollTop() >= 24100) {
          $(".logo").addClass('spin18');
        } else {
          $(".logo").removeClass('spin18');
        }

        if ($(document).scrollTop() >= 25600) {
          $(".logo").addClass('spin19');
        } else {
          $(".logo").removeClass('spin19');
        }

        if ($(document).scrollTop() >= 27100) {
          $(".logo").addClass('spin20');
        } else {
          $(".logo").removeClass('spin20');
        }

        if ($(document).scrollTop() >= 28600) {
          $(".logo").addClass('spin21');
        } else {
          $(".logo").removeClass('spin21');
        }

        if ($(document).scrollTop() >= 30100) {
          $(".logo").addClass('spin22');
        } else {
          $(".logo").removeClass('spin22');
        }

        if ($(document).scrollTop() >= 31600) {
          $(".logo").addClass('spin23');
        } else {
          $(".logo").removeClass('spin23');
        }


  });


 //    _
 //   ___/_)              _____
 //  (  /       /       (, /   )      /)
 //  __/    _ _/_ /_      /__ / ____  /_.
 // (_/\___(/_(___/_)_   /   \_(_)(__/(__

// SLIDESHOW FANCYBOXXXX===============
// ====================================


    /*ADD WEBSITE LINK  --*/ $(".open_fancybox_anastasia").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/anastasia/anasta_0.jpg',
            opts : {
              //caption : 'First caption',
              //thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          },
          {src : '#abstract-anastasia',},
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
          },
          {
            src : 'imgs/anastasia/anasta_4.jpg',
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
            src : 'https://player.vimeo.com/video/436092429?title=0&byline=0&portrait=0', 
            type : 'iframe' 
          },
          {src : '#abstract-anna',},
          { 
            src : 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/844722430&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', 
            type : 'iframe' 
          }/*,
          {
            src  : 'https://annamoschioni.github.io/domestic-tales/#/',
            type : 'iframe',
            opts : {
              afterShow : function( instance, current ) {
                console.info( 'done!' );
              }   
            }
          }*/
      ], {
          preload: true, loop : true
      });

      return false;
    });
    
    /*ADD WEBSITE LINK --*/ $(".open_fancybox_berglind").click(function() {

      $.fancybox.open([ 
          { src : 'imgs/berglind/2.png', },
          {src : '#abstract-berglind', },
          { src : 'imgs/berglind/5.mp4', },
          { src : 'imgs/berglind/3.png', },
          { src : 'imgs/berglind/5.jpg', }
      ], {
          padding : 0, loop : true
      });

      return false;
    });
    
    $(".open_fancybox_brechje").click(function() {

      $.fancybox.open([
          { src : 'imgs/brechje/brechje_0.png', },
          { src : '#abstract-brechje', },
          { src : 'imgs/brechje/brechje_1.png', },
          { src : 'imgs/brechje/brechje_2.png', },
          { src : 'imgs/brechje/brechje_3.png', }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_clara").click(function() {

      $.fancybox.open([
          { src : 'imgs/clara/clara_0.mp4', },
          { src : '#abstract-clara', },
          { src : 'imgs/clara/clara_1.png', },
          { src : 'imgs/clara/clara_2.png', },
          { src : 'imgs/clara/clara_3.png', }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    /*MAKE SELECION / MAKE SMALLER FILES --*/ $(".open_fancybox_dana").click(function() {

      $.fancybox.open([
          { src : 'imgs/dana/dana_2-1.png', },
          { src : '#abstract-dana', },
          { src : 'imgs/dana/dana_2-2.png', },
          { src : 'imgs/dana/dana_2-3.png', },
          { src : 'imgs/dana/dana_2-4.png', },
          { src : 'imgs/dana/dana_2-5.png', },
          { src : 'imgs/dana/dana_3.jpg', },
          { src : 'imgs/dana/dana_4.png', },
          { src : 'imgs/dana/dana_5.png', },
          { src : 'imgs/dana/dana_6.png', },
          { src : 'imgs/dana/dana_7.png', },
          { src : 'imgs/dana/dana_8.png', },
          { src : 'imgs/dana/dana_9.png', },
          { src : 'imgs/dana/dana_10.png', },
          { src : 'imgs/dana/dana_11.png', },
          { src : 'imgs/dana/dana_12.png', },
          { src : 'imgs/dana/dana_13.png', },
          { src : 'imgs/dana/dana_14.png', },
          { src : 'imgs/dana/dana_15.png', },
          { src : 'imgs/dana/dana_16.png', }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_denise").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/denise/denise_1.jpg',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-denise', },
          {
            src : 'imgs/denise/denise_2.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/denise/denise_3.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/denise/denise_4.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/denise/5Ear_Plasty.mp4',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/denise/denise_5.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/denise/denise_6.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/denise/2Flaporen_Lexicon.mp4',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_edward").click(function() {

      $.fancybox.open([
          { src : 'imgs/edward/edward_0-1.png', },
          { src : '#abstract-edward', },
          { src : 'imgs/edward/edward_0-2.jpg', },
          { src : 'imgs/edward/edward_0-3.jpg', },
          { src : 'imgs/edward/edward_0-4.jpg', },
          { src : 'imgs/edward/edward_0-5.jpg', },
          { src : 'imgs/edward/edward_0-6.jpg', },
          { src : 'imgs/edward/edward_1.jpg', },
          { src : 'imgs/edward/edward_2.jpg', },
          { src : 'imgs/edward/edward_3.jpg', },
          { src : 'imgs/edward/edward_4.jpg', },
          { src : 'imgs/edward/edward_5.jpg', },
          { src : 'imgs/edward/edward_6.jpg', },
          { src : 'imgs/edward/edward_7.jpg', },
          { src : 'imgs/edward/edward_8.jpg', }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_emily").click(function() {

      $.fancybox.open([
          { 
            src : 'https://player.vimeo.com/video/438916995?title=0&byline=0&portrait=0', 
            type : 'iframe' 
          },
          { src : '#abstract-emily', }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    /*ADD WEBSITE LINK -- */ $(".open_fancybox_fien").click(function() {

      $.fancybox.open([
          { 
            src : 'https://www.youtube.com/embed/57AB5qwNqPo', 
            type : 'iframe' 
          },
          { src : '#abstract-fien', },
          /*{
            src  : 'https://eerstehulpbijongemak.nl/',
            type : 'iframe',
            opts : {
              afterShow : function( instance, current ) {
                console.info( 'done!' );
              }   
            }
          },*/
          {
            src : 'imgs/fien/fien_2.jpg',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    /*ADD WEBSITE LINK -- */ $(".open_fancybox_golshan").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/golshan/golshan_0.jpg',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-golshan', },
          {
            src : 'imgs/golshan/golshan_1.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/golshan/golshan_2.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/golshan/golshan_3.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/golshan/golshan_4.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/golshan/golshan_5.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/golshan/golshan_6.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/golshan/golshan_7.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/golshan/golshan_8.jpg',
            opts : {caption : 'First caption',}
          }/*,
          {
            src  : 'https://azadokht.github.io/beginning-without-endings/',
            type : 'iframe',
            opts : {
              afterShow : function( instance, current ) {
                console.info( 'done!' );
              }   
            }
          }*/
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_kihyeon").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/kihyeon/kihyeon_0.mp4',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-hyeonjeong', },
          {
            src : 'imgs/kihyeon/kihyeon_1.png',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/kihyeon/kihyeon_2.png',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/kihyeon/kihyeon_3.png',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/kihyeon/kihyeon_4.png',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/kihyeon/kihyeon_5.mp4',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_kiki").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/kiki/0-min.png',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-kiki', },
          {
            src : 'imgs/kiki/1-min.png',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/kiki/2-min.png',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_laura").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/laura/laura_0.jpg',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-laura', },
          {
            src : 'imgs/laura/laura_1.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/laura/laura_2.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/laura/laura_3.jpg',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_linda").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/linda/linda_0.jpg',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-linda', },
          {
            src : 'imgs/linda/linda_1.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/linda/linda_2.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/linda/linda_3.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/linda/linda_4.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/linda/linda_5.jpg',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_louana").click(function() {

      $.fancybox.open([
          { 
            src : 'https://player.vimeo.com/video/435502965?title=0&byline=0&portrait=0', 
            type : 'iframe' 
          },
          { src : '#abstract-louana', }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_maarten").click(function() {

      $.fancybox.open([
          /*{
            src : 'imgs/maarten/screenshot.jpg',
            opts : {caption : 'First caption',}
          },*/
          {
            src : 'imgs/maarten/maarten_0.mp4',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-maarten', },
          {
            src : 'imgs/maarten/maarten_1.mp4',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    }); 

    $(".open_fancybox_marc").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/marc/marc_0.jpg',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-marc', },
          {
            src : 'imgs/marc/marc_1.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/marc/marc_2.jpg',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    }); 

    $(".open_fancybox_sophia").click(function() {

      $.fancybox.open([
          /*{
            src : 'imgs/sophia/front.jpg',
            opts : {caption : 'First caption',}
          },*/
          {
            src : 'imgs/sophia/sophia_0.mp4',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-sophia', }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    }); 

    $(".open_fancybox_martijn").click(function() {

      $.fancybox.open([
          /*{
            src : 'imgs/martijn/still.jpg',
            opts : {caption : 'First caption',}
          },*/
          {
            src : 'imgs/martijn/1_Martijn_Brakenhoff.mp4',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-martijn', }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_martin").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/martin/martin_0.png',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-martin', },
          {
            src : 'imgs/martin/martin_1.png',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/martin/martin_2.png',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/martin/martin_3.png',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/martin/martin_4.png',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_ned").click(function() {

      $.fancybox.open([
          /*{
            src : 'imgs/ned/screenshot.jpg',
            opts : {caption : 'First caption',}
          },*/
          {
            src : 'imgs/ned/ned_0.mp4',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-ned', }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_nicolai").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/nicolai/nicolai_0.jpg',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-nicolai', },
          {
            src : 'imgs/nicolai/nicolai_1.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/nicolai/nicolai_2.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/nicolai/nicolai_3.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/nicolai/nicolai_4.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/nicolai/nicolai_5.jpg',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    /*ADD WEBSITE LINK -- */ $(".open_fancybox_nicoletta").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/nicoletta/nicoletta_0.jpg',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-nicoletta', },
          {
            src : 'imgs/nicoletta/nicoletta_1.mp4',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_pepjin").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/pepjin/pepjin.jpg',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-pepijn', },
          {
            src : 'imgs/pepjin/pepjin2.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/pepjin/pepjin3.jpg',
            opts : {caption : 'First caption',}
          },
          { 
            src : 'https://open.spotify.com/embed/artist/7FhgRkfCZXxVIRfqt9q7w5', 
            type : 'iframe' 
          }

      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    /*MISSING ABSTRACT --- */ $(".open_fancybox_ruben").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/ruben/ruben_0.jpg',
            opts : {caption : 'First caption',}
          },/*
          { src : '#abstract-ruben', },*/
          {
            src : 'imgs/ruben/ruben_1.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/ruben/ruben_2.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/ruben/ruben_3.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/ruben/ruben_4.jpg',
            opts : {caption : 'First caption',}
          },
          {            
            src : 'imgs/ruben/ruben_5.jpg',
            opts : {caption : 'First caption',}
          },
          {            
            src : 'imgs/ruben/ruben_6.jpg',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_selina").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/selina/selina_1.mp4',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-selina', },
          {
            src : 'imgs/selina/selina_2.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/selina/selina_3.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/selina/selina_4.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/selina/selina_5.jpg',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_seojeong").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/seojeong/seojeong_0.mp4',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-seojeong', },
          {
            src : 'imgs/seojeong/seojeong_1.mp4',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/seojeong/seojeong_2.mp4',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_tilius").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/tilius/tilius_0.jpg',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-tilius', },
          {
            src : 'imgs/tilius/tilius_1.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/tilius/tilius_2.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/tilius/tilius_3.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/tilius/tilius_4.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/tilius/tilius_5.jpg',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    }); 

    $(".open_fancybox_trang").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/trang/trang_0.jpg',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-trang', },
          {
            src : 'imgs/trang/trang_1.png',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/trang/trang_2.png',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/trang/trang_3.png',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/trang/trang_4.png',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    /*ADD WEBSITE LINK -- */ $(".open_fancybox_yessica").click(function() {

      $.fancybox.open([
          { src : 'imgs/yessica/yessica_0.jpg', },
          { src : '#abstract-yessica', },
          { 
            src : 'https://www.youtube.com/embed/mQwWaHovLfk', 
            type : 'iframe' 
          },
          { src : 'imgs/yessica/yessica_2.jpg', },
          { src : 'imgs/yessica/yessica_3.jpg', },
          { src : 'imgs/yessica/yessica_5.jpg', },
          { src : 'imgs/yessica/yessica_6.jpg', },
          { src : 'imgs/yessica/yessica_7.jpg', },
          { src : 'imgs/yessica/yessica_8.jpg', },
          { src : 'imgs/yessica/yessica_9.png', },
          { src : 'imgs/yessica/yessica_10.png', },
          { src : 'imgs/yessica/yessica_11.png', },
          { src : 'imgs/yessica/yessica_12.png', },
          { src : 'imgs/yessica/yessica_13.jpg', }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    }); 

    $(".open_fancybox_zahari").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/zahari/zahari_0.mp4',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-zahari', },
          {
            src : 'imgs/zahari/zahari_1.mp4',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/zahari/zahari_2.png',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/zahari/zahari_3.png',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/zahari/zahari_4.png',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/zahari/zahari_5.png',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    /*MISSING ABSTRACT -- */ $(".open_fancybox_zuzanna").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/zuzanna/zuzanna_1.mp4',
            opts : {caption : 'First caption',}
          },
          /*{ src : '#abstract-zuzanna', },*/
          {
            src : 'imgs/zuzanna/zuzanna_2.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/zuzanna/zuzanna_3.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/zuzanna/zuzanna_4.jpg',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    }); 



    $(".open_fancybox_claude").click(function() {

      $.fancybox.open([
          { 
            src : 'https://player.vimeo.com/video/436081318', 
            type : 'iframe' 
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    }); 

    $(".open_fancybox_cristina").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/cristina/cristina_0.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/cristina/cristina_1.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/cristina/cristina_2.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/cristina/cristina_3.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/cristina/cristina_4.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/cristina/6_Cristina_Lavosi_LOWER.mp4',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    $(".open_fancybox_cyan").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/cyan/cyan_0.png',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/cyan/cyan_1.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/cyan/cyan_2.png',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/cyan/cyan_3.jpg',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    }); 

    $(".open_fancybox_guilia").click(function() {

      $.fancybox.open([
          { 
            src : 'https://www.youtube.com/embed/BYTd1LLBvm8', 
            type : 'iframe' 
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    }); 

    $(".open_fancybox_kert").click(function() {

      $.fancybox.open([
          { src : 'imgs/kert/imgs/kert-0.jpg', },
          { src : '#abstract-kert', },
          { src : 'imgs/kert/imgs/kert-1.jpg', },
          { src : 'imgs/kert/imgs/kert-2.jpg', },
          { src : 'imgs/kert/imgs/kert-3.jpg', },
          { src : 'imgs/kert/imgs/kert-4.jpg', },
          { src : 'imgs/kert/imgs/kert-5.jpg', },
          { src : 'imgs/kert/imgs/kert-6.jpg', },
          { src : 'imgs/kert/imgs/kert-7.jpg', },
          { src : 'imgs/kert/imgs/kert-8.jpg', },
          { src : 'imgs/kert/imgs/kert-9.jpg', },
          { src : 'imgs/kert/imgs/kert-10.jpg', },
          { src : 'imgs/kert/imgs/kert-11.jpg', },
          { src : 'imgs/kert/imgs/kert-12.jpg', },
          { src : 'imgs/kert/imgs/kert-13.jpg', },
          { src : 'imgs/kert/imgs/kert-14.jpg', },
          { src : 'imgs/kert/imgs/kert-15.jpg', },
          { src : 'imgs/kert/stills/kert-stills-0.png', },
          { src : 'imgs/kert/stills/kert-stills-1.png', },
          { src : 'imgs/kert/stills/kert-stills-2.png', },
          { src : 'imgs/kert/stills/kert-stills-3.png', },
          { src : 'imgs/kert/stills/kert-stills-4.png', },
          { src : 'imgs/kert/stills/kert-stills-5.png', },
          { src : 'imgs/kert/stills/kert-stills-6.png', }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    }); 

    $(".open_fancybox_lila").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/lila/lila_0.jpg',
            opts : {caption : 'First caption',}
          },
          { src : '#abstract-lila', },
          {
            src : 'imgs/lila/lila_1.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/lila/lila_2.jpg',
            opts : {caption : 'First caption',}
          },
          {
            src : 'imgs/lila/lila_3.mp4',
            opts : {caption : 'First caption',}
          }
      ], {
          padding : 0,
          loop : true
      });

      return false;
    });

    /*EMBED SOUNDCLOUD (waiting for it to be set to public) -- */ $(".open_fancybox_mauro").click(function() {

      $.fancybox.open([
          {
            src : 'imgs/mauro/mauro_1.mp4', /*  https://soundcloud.com/mauro_tosarelli/prisoners-sound-archive-230520/s-fVDu17nKWaq?fbclid=IwAR1qp0jyL8rb3tNs3Sq6OFNUwV9JBkGqz9zfCRclk30azphjQcNS18Vy0lE  */
            opts : {caption : 'First caption',}
          },
          { 
            src : 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/826935472&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', 
            type : 'iframe' 
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







// SCROLL OVERVIEW TO ======================
// ================================


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});






// Loop scroll, working put jumpy ======================
// ================================
/*
        $('document').ready(function() {
          $(document).scroll(function(){
            if (document.documentElement.clientHeight + $(window).scrollTop() >= $(document).height()) {
              $(document).scrollTop(0);
            }
          });
        });
*/






