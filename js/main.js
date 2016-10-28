

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


		window.addEventListener('load', function() {
		    var video = document.querySelector('#video');
		    var preloader = document.querySelector('.preloader');

		    function checkLoad() {
		        if (video.readyState === 4) {
		            preloader.parentNode.removeChild(preloader);
		        } else {
		            setTimeout(checkLoad, 100);
		        }
		    }

		    checkLoad();
		}, false);


// slider

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
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

//LIGHTBOX 


var $overlay = $('<div class="overlay"></div>');
var $video = $(' <video autoplay loop controls class="fillWidth"><source src="img/video.mp4" type="video/mp4"/></video>');

$overlay.append($video);

$('body').append($overlay);

$('.botao-home').click(function(event) {
  event.preventDefault();
  $overlay.show();
});

$overlay.click(function() {
  $overlay.hide('slow');
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



//MENU MOBILE 
$(window).on("load resize",function(e) {
  var more = document.getElementById("js-centered-more");

  if ($(more).length > 0) {
    var windowWidth = $(window).width();
    var moreLeftSideToPageLeftSide = $(more).offset().left;
    var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

    if (moreLeftSideToPageRightSide < 330) {
      $("#js-centered-more .submenu .submenu").removeClass("fly-out-right");
      $("#js-centered-more .submenu .submenu").addClass("fly-out-left");
    }

    if (moreLeftSideToPageRightSide > 330) {
      $("#js-centered-more .submenu .submenu").removeClass("fly-out-left");
      $("#js-centered-more .submenu .submenu").addClass("fly-out-right");
    }
  }

  var menuToggle = $("#js-centered-navigation-mobile-menu").unbind();
  $("#js-centered-navigation-menu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();
    $("#js-centered-navigation-menu").slideToggle(function(){
      if($("#js-centered-navigation-menu").is(":hidden")) {
        $("#js-centered-navigation-menu").removeAttr("style");
      }
    });
  });

      $(".centered-navigation ul li.nav-link a").click(function(){
        $(".centered-navigation ul li.nav-link a div , .centered-navigation ul li.nav-link a div ").removeClass("hovered");
        $(".centered-navigation ul li.nav-link a:focus div , .centered-navigation ul li.nav-link a:hover div ").toggleClass("hovered");
            $("#js-centered-navigation-menu").slideToggle(function(){
      if($("#js-centered-navigation-menu").is(":hidden")) {
        $("#js-centered-navigation-menu").removeAttr("style");
      }
    });

        
    });
}); 




