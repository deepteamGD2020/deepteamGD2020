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




// TYPEWRITER======================
// ================================

  var spacing = "<span class=whiteSpace> </span>";

  var str = " <p> dear reader </p> <br> <p> we"+spacing+"the graduating class of 2020"+spacing+"hope you are safe and sound </p> <p> in these in these times times"+spacing+"we found ourselves in our bedrooms"+spacing+"making work related to social"+spacing+"political"+spacing+"and economic issues </p> <p> our common place has dispersed"+spacing+"but we sought to re-enact a shared ground in the writing of <br> this letter </p> <p> we chose a location for everyone to visit on their <br> own time </p> <p> we brought and performed there our works in progress </p> <p> ultimately"+spacing+"we came together"+spacing+"in one place"+spacing+"but at different moments </p> <p> you"+spacing+"the reader of this letter"+spacing+"are the first witness of our re-entry to the public sphere </p> <p> as you read"+spacing+"you patch our fragmented times into <br> a shared event </p> <p> what appears only <br> a simulation in your mind"+spacing+"will soon materialize as <br> a real-time physical encounter"+spacing+"at our graduation show <br> from 10th to 13th september </p> <p> by financially supporting us and visiting the exhibition in the fall <br> you restore a sense of publicness"+spacing+"urgency"+spacing+"and importance to our ideas </p> <p> we are looking forward to hearing back from you </p> <p> sincerely </p> <p> the 2020 graduates of graphic design (ba): </p> <p> anastasia umpeleva"+spacing+"anna moschioni"+spacing+"berglind jóhannsdóttir"+spacing+"brechje krah"+spacing+"clara lezla"+spacing+"dana doorenbos"+spacing+"denise jansen"+spacing+"edward dzulaj"+spacing+"emily anderson"+spacing+"fien leeflang"+spacing+"golshan azadokht"+spacing+"kihyeon kim"+spacing+"kiki coster"+spacing+"laura brouwer"+spacing+"linda van houtum"+spacing+"louana gentner"+spacing+"marc van den berg"+spacing+"menso jensen"+spacing+"maarten meij"+spacing+"martijn brakenhoff"+spacing+"nedislav kamburov"+spacing+"nicolai schmelling"+spacing+"nicoletta radice"+spacing+"pepijn de jonge"+spacing+"ruben visser"+spacing+"selina landis"+spacing+"seojeong youn"+spacing+"sophia de jong yantorno"+spacing+"tilius sodeika"+spacing+"trang hà"+spacing+"yessica deira"+spacing+"zahari dimitrov"+spacing+"zuzanna zgierska </p> <p> & non linear narrative (ma): </p> <p> claude nassar"+spacing+"cristina lavosi"+spacing+"cyan bae"+spacing+"giulia faccin"+spacing+"kert viiart"+spacing+"lila steinkampf"+spacing+"mauro tosarelli </p> <p> royal academy of art <br> the hague (kabk) </p>",

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
      var yourstring = ["2020", "in these times", "on their", "own time", "in progress", "ultimately", "soon", "moments", "different times", "fragmented times", "event", "real-time", "10th", "13th september", "fall"];

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
