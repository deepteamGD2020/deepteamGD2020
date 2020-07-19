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

  $(".fancybox").fancybox();

  $(".open_fancybox_berglind").click(function() {

    $.fancybox.open([
        {
            href : 'imgs/berglind/1.png',
            title : '1st title'
        },
        {
            href : 'imgs/berglind/2.png',
            title : '2nd title'
        },
        {
            href : 'imgs/berglind/3.png',
            title : '3rd title'
        }
    ], {
        padding : 0
    });

    return false;

  });

  $(".open_fancybox_clara").click(function() {

    $.fancybox.open([
        {
            href : 'imgs/clara/1_Lezla.png',
            title : '1st title'
        },
        {
            href : 'imgs/clara/2_Lezla.png',
            title : '2nd title'
        },
        {
            href : 'imgs/clara/3_Lezla.png',
            title : '3rd title'
        }
    ], {
        padding : 0
    });

    return false;

  });

  $(".open_fancybox_cristina").click(function() {

    $.fancybox.open([
        {
            href : 'imgs/cristina/1_Cristina_Lavosi.jpg',
            title : '1st title'
        },
        {
            href : 'imgs/cristina/2_Cristina_Lavosi.jpg',
            title : '2nd title'
        },
        {
            href : 'imgs/cristina/3_Cristina_Lavosi.jpg',
            title : '3rd title'
        },
        {
            href : 'imgs/cristina/4_Cristina_Lavosi.jpg',
            title : '4rd title'
        },
        {
            href : 'imgs/cristina/5_Cristina_Lavosi.jpg',
            title : '5rd title'
        }
    ], {
        padding : 0
    });

    return false;

  });

  $(".open_fancybox_edward").click(function() {

    $.fancybox.open([
        {
            href : 'imgs/edward/Posters3-min.jpg',
            title : '1st title'
        },
        {
            href : 'imgs/edward/Posters4-min.jpg',
            title : '2nd title'
        },
        {
            href : 'imgs/edward/Posters6-min.jpg',
            title : '3rd title'
        },
        {
            href : 'imgs/edward/Posters7-min.jpg',
            title : '4rd title'
        },
        {
            href : 'imgs/edward/Posters9-min-min.jpg',
            title : '5rd title'
        }
    ], {
        padding : 0
    });

    return false;

  });




// EXPAND MENU======================
// ================================

  $('#infoButton').click(function(){
    $('.headline').toggleClass('expand');
    $('.filmProg').toggle();
    $('.contactBar').toggle();
  });

  $('#overviewButton').click(function(){
    $('.menuBar').toggleClass('expand');
    // $('.menuTop').toggleClass('moveMenu');
  });

});

//DOC READY FUNCT-------------------
