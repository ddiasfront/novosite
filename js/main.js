
var whitefoota = $(".svg05, .svg04, .svg03");
var bluefoota = $(".svg07, .svg08, .svg06");
var heada = $(".svg01, .svg02");
var fromto = TweenLite.fromTo;
var to = TweenLite.to;
TweenLite.set(".brancob", {rotationX:-90, y:100, opacity:0});
TweenLite.set(".texto01", {visible:false, opacity:0, scale:2});
TweenLite.set(".texto02", {visible:false, opacity:0, scale:2});
TweenLite.set(".footer03", {visible:false, rotation:180, opacity:0, y:-200});
TweenLite.set(".footer04", {visible:false, rotationX:180, opacity:0, y:-200});
TweenLite.set(".img02", {visible:false, opacity:0});
TweenLite.set(heada, {visible:false, opacity:0, scaleX:0.3});
TweenLite.set(whitefoota, {visible:false, opacity:0, scaleX:0.3});
TweenLite.set(bluefoota, {visible:false, opacity:0, scaleX:0.3});
TweenLite.set(".svg01", {x:-200});
TweenLite.set(".svg02", {x:-30});
TweenLite.set(".svg04", {x:200});
TweenLite.set(".svg07", {x:20, opacity:0});
TweenLite.set(".svg08", {x:-200});
TweenLite.set(".logo01", {visible:false, opacity:0});
TweenLite.set(".logo02", {visible:false, opacity:0});
TweenLite.set(".preco", {visible:false, opacity:0});
TweenLite.set(".texto03", {visible:false, opacity:0});
TweenLite.set(".texto04", {opacity:0, scale:2});

fromto(".footer01", 1,

	{ 

	opacity:0, 
	x: -200, 
	perspective:800, 
	transformStyle:"preserve-3d", 
	rotationX:-90

	},

	{

	x :0, 
	opacity:1, 
	scale:1, 
	rotationX:0

	})

fromto(".footer02", 1, 

	{ 

	opacity:0, 
	x: -200, 
	perspective:800, 
	transformStyle:"preserve-3d", 
	rotationX:-90,

	},

	{

	x :0, 
	opacity:1, 
	scale:1, 
	rotationX:0,
	delay:0.3,

	})

fromto(".logo01", 1,

	{
	opacity:0,
	},


	{
	opacity:1,
	delay:1.1,
	})


to(".logo01", 0.5,

	{
	opacity:0,
	delay:3.3
	})


to(".texto01", 1,

	{
	opacity:1,
	scale:1,
	delay:3.5,
	ease: Expo.easeOut
	})



to(".img02", 0.5,
	{ 
	opacity:1,
	delay:6

	})


to(".texto01", 1.5,

	{
	y:100,	
	opacity:0,
	delay:9,
	ease: Expo.easeOut
	})



to(".footer01", 1.5,
	{ 
	x:-300, 
	delay:9.2,
	opacity:0
	})


to(".footer02", 1.8,
	{ 
	x:-300, 
	delay:9.2,
	opacity:0

	})


to(".svg01", 0.5,
	{
	scaleX:1, 
	opacity:1,
	delay:9.5,
	x:0,


	})


to(".texto03", 0.5,
	{
	opacity:1,
	delay:9.6
	})


to(".svg02", 0.5,
	{
	scaleX:1,
	opacity:1,
	delay:10,
	x:0,

	})


to(".preco", 0.5,
	{
	opacity:1,
	delay:10.2
	})



to(".svg03", 0.4,
	{
	scaleX:1,
	opacity:1,
	delay:10,
	x:0,

	})


to(".svg04", 0.4,
	{
	scaleX:1,
	opacity:1,
	delay:10.2,
	x:0,

	})


to(".logo02", 0.4,
	{
	opacity:1,
	delay:10.3,

	})



to(".svg05", 0.4,
	{
	scaleX:1,
	opacity:1,
	delay:10.5,
	x:0,

	})


to(".svg06", 0.4,
	{
	scaleX:1,
	opacity:1,
	delay:10.7,
	x:0,

	})



to(".svg07", 0.4,
	{
	scaleX:1,
	opacity:1,
	delay:10.9,
	x:0,

	})

to(".svg08", 0.4,
	{
	scaleX:1,
	opacity:1,
	delay:11.1,
	x:0,

	})


to(".texto04", 1,
	{
	opacity:1,
	scale:1,
	delay:11.4,
	ease: Bounce.easeOut
	})

  window.setTimeout(function(){
    $(".texto04").addClass('floatBoat');
	}, 11400); //<-- Delay in milliseconds



