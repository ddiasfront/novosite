
$( document ).on( "pagecreate", "html", function() {

  
  $("#homesliders").on( "swiperight", function( event ) {
       avancar(1);
  });

  $("#homesliders").on( "swipeleft", function( event ) {
         voltar(1);
    });


});



// MENU DESKTOP
$(".sidebar-nav li a").click(function() {
  $(".sidebar-nav li a:active").addClass('hovered');
});

$(".sidebar-nav li a").click(function(){
    $(".sidebar-nav li a").children().removeClass("hovered");
    $(".sidebar-nav li a:focus div").toggleClass("hovered");
});



// MENU DESKTOP
// $(".sidebar-nav li a").click(function() {
//   $(".sidebar-nav li a:active").addClass('hovered');
// });

$(".sidebar-nav li a").click(function(){
    $(".sidebar-nav li a").children().removeClass("hovered");
    $(".sidebar-nav li a:focus div").toggleClass("hovered");
});
var wtf;

//TYPED 

    $(function(){

            $("#typed").typed({
                // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
                stringsElement: $('#typed-strings'),
                typeSpeed: 30,
                backDelay: 0,
                loop: false,
                contentType: 'html', // or text
                // defaults to false for infinite loop
                loopCount: false,
            });

  

        });


// VIDEO PORTFOLIO CUSTOM HOVER

var figure = $(".videoport");
var vid = figure.find("video");

[].forEach.call(figure, function (item,index) {
    item.addEventListener('mouseover', hoverVideo.bind(item,index), false);
    item.addEventListener('mouseout', hideVideo.bind(item,index), false);
});

function hoverVideo(index, e) {
    vid[index].play(); 
}

function hideVideo(index, e) {
    vid[index].pause(); 
}





  /*Menu-toggle*/
    $("#sidebar-wrapper").hover(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
                 $( ".sidebar-nav li a span" ).animate({
              opacity: 1,
            }, 500, function() {
              // Animation complete.
            });


    });




// slider

var demonum = $('.demo').length;
var slideIndex = 1;

showDivs(slideIndex);

function avancar(n) {
  if (n == demonum){
    return;
  }
  else {
     showDivs(slideIndex += n);
  }
 
}

function voltar(n) {
  if (n >= 1) {
    showDivs(slideIndex -= n);
  }
  else {
    return;
  }
  
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-red";

}


//LIGHTBOX MANIFESTO



var $overlay = $('<div class="overlay"></div>');
var $fechar = $('<a class="fecharover">X</a>');
var $video = $(' <video autoplay loop controls class="fillWidth"><source src="img/video.mp4" type="video/mp4"/></video>');

$overlay.append($video);

$('body').append($overlay);
$overlay.append($fechar);

$('.botao-home').click(function(event) {
  event.preventDefault();
  $overlay.show();
});

$overlay.click(function() {
  $overlay.hide('slow');
});



//LIGHTBOX PORTFOLIO01



var $overlay01 = $('<div class="overlay01"></div>');
var $fechar = $('<a class="fecharover">X</a>');
var $video01 = $(' <video autoplay loop controls class="othavidao"><source src="img/video.mp4" type="video/mp4"/></video>');

$overlay01.append($video01);
$overlay01.append($fechar);

$('body').append($overlay01);

$('.port01').click(function(event) {
  event.preventDefault();
  $overlay01.show();
});

$overlay01.click(function() {
  $overlay01.hide('slow');
});




//LIGHTBOX PORTFOLIO02



var $overlay02 = $('<div class="overlay02"></div>');
var $fechar = $('<a class="fecharover">X</a>');
var $video02 = $(' <video autoplay loop controls class="othavidao"><source src="img/video.mp4" type="video/mp4"/></video>');

$overlay02.append($video02);
$overlay02.append($fechar);

$('body').append($overlay02);

$('.port02').click(function(event) {
  event.preventDefault();
  $overlay02.show();
});

$overlay02.click(function() {
  $overlay02.hide('slow');
});





//LIGHTBOX PORTFOLIO03



var $overlay03 = $('<div class="overlay03"></div>');
var $fechar = $('<a class="fecharover">X</a>');
var $video03 = $(' <video autoplay loop controls class="othavidao"><source src="img/video.mp4" type="video/mp4"/></video>');

$overlay03.append($video03);
$overlay03.append($fechar);

$('body').append($overlay03);

$('.port03').click(function(event) {
  event.preventDefault();
  $overlay03.show();
});

$overlay03.click(function() {
  $overlay03.hide('slow');
});





//LIGHTBOX PORTFOLIO04



var $overlay04 = $('<div class="overlay04"></div>');
var $fechar = $('<a class="fecharover">X</a>');
var $video04 = $(' <video autoplay loop controls class="othavidao"><source src="img/video.mp4" type="video/mp4"/></video>');

$overlay04.append($video04);
$overlay04.append($fechar);

$('body').append($overlay04);

$('.port04').click(function(event) {
  event.preventDefault();
  $overlay04.show();
});

$overlay04.click(function() {
  $overlay04.hide('slow');
});







$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$(".port01h").hover(function(){
    $( ".port01" ).addClass('thefuckenhover');
    }, function(){
    $( ".port01" ).removeClass('thefuckenhover');
});

$(".port02h").hover(function(){
    $( ".port02" ).addClass('thefuckenhover');
    }, function(){
    $( ".port02" ).removeClass('thefuckenhover');
});


$(".port03h").hover(function(){
    $( ".port03" ).addClass('thefuckenhover');
    }, function(){
    $( ".port03" ).removeClass('thefuckenhover');
});


$(".port04h").hover(function(){
    $( ".port04" ).addClass('thefuckenhover');
    }, function(){
    $( ".port04" ).removeClass('thefuckenhover');
});


// sliderLIDERES

var demolead = $('.demolead').length;
var leadIndex = 1;

showDivslead(leadIndex);

function avancarlead(m) {
  if (m == demonum){
    return;
  }
  else {
     showDivslead(leadIndex += m);
  }
 
}

function voltarlead(m) {
  if (m >= 1) {
    showDivslead(leadIndex -= m);
  }
  else {
    return;
  }
  
}

function currentDivLead(m) {
  showDivslead(leadIndex = m);
}

function showDivslead(m) {
  var i;
  var x = document.getElementsByClassName("myLeads");
  var dots = document.getElementsByClassName("demolead");
  if (m > x.length) {leadIndex = 1}
  if (m < 1) {leadIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace("w3-yellow", "");
  }
  x[leadIndex-1].style.display = "block";
  dots[leadIndex-1].className += " w3-yellow";

}

var $bolinha = $('<div class="bolinha"></div>');


$('.demolead.calfat').append($bolinha);

$('.demolead').click(function() {
    $('.bolinha').css('opacity', '0');
    $('.demolead.w3-yellow').append($bolinha); 
    $('.bolinha').css('opacity', '1');
});



// MENU MOBILE / DESK -- AUTOMATIC SCROLLING
//  =================================================


      // Config
      // =================================================

      var $root           = $('html'),
          $nav_header     = $('#homesliders'),
          $navicon        = $('[data-navicon="button"]'),
          homesliders     = $('#homesliders').height(),
          lideres         = $('#lideres').height(),
          trabalhos       = $('#trabalhos').height(),
          agenciaoffset   = lideres * 2 - 100,
          trabalhosoffset = lideres * 3 - 100,
          lideresoffset   = lideres * 4 - 100,
          clientesoffset  = lideres * 5 - 100,
          contatooffset   = lideres * 6 - 100,
          $imgoff         = $(".currentpage>img"),
          $textoff        = $(".currentpage>span"),
          hero_height     = $('.hero').height(),
          eventType       = ((document.ontouchstart !== null) ? 'click' : 'touchstart');


      // Methods
      // =================================================


      function menuToggle() {
        if($nav_header.hasClass('is-open')) {
          $root.removeClass('pinned');
          $nav_header.removeClass('is-open');
          $navicon.removeClass('is--closed');
        } else {
          $root.addClass('pinned');
          $nav_header.addClass('is-open');
          $navicon.addClass('is--closed')
        }
      }

      function openNav() {
        if ($nav_header.hasClass('is-open')) {
          $nav_header.removeClass('is-open');
          $root.removeClass('pinned');
          $navicon.removeClass('is--closed');
        }
      }

      function anchorScroll(event) {
        var id     = $(this).attr('href'),
            offset = header_height,
            target = $(id).offset().top - offset;

        $('html, body').animate({
          scrollTop: target
        }, 500);

        event.preventDefault();
      }

      function a (u) {
        console.log('qualquercoisa');
      }
      // Handlers
      // =================================================

      $('.scrollto').on(eventType, function() {
        anchorScroll.call(this, event);
      });

      $navicon.on(eventType, menuToggle);

      $('.banner a').on(eventType, openNav);





    function scrollwtf() {
      wtf =  $(window).scrollTop();
      console.log(wtf); 
      return wtf; 
    }

    var alllinks = $('.sidebar-nav li a');
    var homescrolling = $('.menu01>a');
    var agenciacrolling = $('.menu02>a');
    var trabalhocrolling = $('.menu03>a');
    var leadscrolling = $('.menu04>a');
    var clientescrolling = $('.menu05>a');
    var vagascrolling = $('.menu06>a');
    var contatoscrolling = $('.menu07>a');


   $( document ).ready(function() {

        function hideURLbar() {
          if (window.location.hash.indexOf('#') == -1) {
            window.scrollTo(0, 1);
          }
        }

        if (navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('Android') != -1) {
            addEventListener("load", function() {
                    setTimeout(hideURLbar, 0);
            }, false);
        }

     $(window).scroll(function (argument) {

         scrollwtf();

          if ( wtf >= homesliders && wtf <= agenciaoffset) {
              alllinks.removeClass('active');
              alllinks.children().removeClass('hovered');
              agenciacrolling.addClass('active');
              agenciacrolling.children().addClass('hovered');
             $imgoff.attr('src', 'img/menu/ico02.gif');
             $textoff.html('AGÊNCIA');
          }

          else if ( wtf >= agenciaoffset && wtf <= trabalhosoffset) {
              alllinks.removeClass('active');
              alllinks.children().removeClass('hovered');
              trabalhocrolling.addClass('active');
              trabalhocrolling.children().addClass('hovered');
              $imgoff.attr('src', 'img/menu/ico03.gif');
              $textoff.html('TRABALHOS');
          }

          else if ( wtf >= trabalhosoffset && wtf <= lideresoffset ) {
              alllinks.removeClass('active');
              alllinks.children().removeClass('hovered');
              leadscrolling.addClass('active');
              leadscrolling.children().addClass('hovered');
              $imgoff.attr('src', 'img/menu/ico04.gif');
              $textoff.html('LÍDERES');
          }

          else if ( wtf >= lideresoffset && wtf <= clientesoffset ) {
              alllinks.removeClass('active');
              alllinks.children().removeClass('hovered');
              clientescrolling.addClass('active');
              clientescrolling.children().addClass('hovered');
              $imgoff.attr('src', 'img/menu/ico04.gif');
              $textoff.html('CLIENTES');
          }

          else if ( wtf >= clientesoffset && wtf <= contatooffset ) {
              alllinks.removeClass('active');
              alllinks.children().removeClass('hovered');
              contatoscrolling.addClass('active');
              contatoscrolling.children().addClass('hovered');
              $imgoff.attr('src', 'img/menu/ico04.gif');
              $textoff.html('CONTATO');
          }

          else {
              alllinks.removeClass('active');
              alllinks.children().removeClass('hovered');
              $imgoff.attr('src', 'img/menu/ico01.gif');
              $textoff.html('HOME');
              homescrolling.addClass('active');
              homescrolling.children().addClass('hovered');
          }
       });
    });


// ANCHORS

  $('.btnRoll').on('click', function(e){
      var data = $(this).data('local');
      var aTag = $("a[name='"+ data +"']");
      $('html,body').animate({
         scrollTop: aTag.offset().top
      },
      500);
   });


  // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 18,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(-23.581258, -46.66537), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#ed5929"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#c4c4c4"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#ffcb05"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21},{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffcb05"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#ed5929"},{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffcb05"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#666666"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(-23.581258, -46.66537),
                    map: map,
                    title: 'Snazzy!'
                });
            }





