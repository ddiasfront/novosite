
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


//TYPED 

    $(function(){

            $("#typed").typed({
                // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
                stringsElement: $('#typed-strings'),
                typeSpeed: 30,
                backDelay: 0,
                loop: true,
                contentType: 'html', // or text
                // defaults to false for infinite loop
                loopCount: false,
                callback: function(){ foo(); },
                resetCallback: function() { newTyped(); }
            });

            $(".reset").click(function(){
                $("#typed").typed('reset');
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

function avancarlead(n) {
  if (n == demonum){
    return;
  }
  else {
     showDivslead(leadIndex += n);
  }
 
}

function voltarlead(n) {
  if (n >= 1) {
    showDivslead(leadIndex -= n);
  }
  else {
    return;
  }
  
}

function currentDiv(n) {
  showDivslead(leadIndex = n);
}

function showDivslead(n) {
  var i;
  var x = document.getElementsByClassName("myLeads");
  var dots = document.getElementsByClassName("demolead");
  if (n > x.length) {leadIndex = 1}
  if (n < 1) {leadIndex = x.length}
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


$('.demolead:first-child.w3-yellow').append($bolinha);

$('.demolead').click(function() {
    $('.bolinha').css('opacity', '0');
    $('.demolead.w3-yellow').append($bolinha);
    $('.bolinha').css('opacity', '1');
});

