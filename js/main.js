

  /*Menu-toggle*/
    $("#sidebar-wrapper").hover(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
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
