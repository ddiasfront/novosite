



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


$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

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




