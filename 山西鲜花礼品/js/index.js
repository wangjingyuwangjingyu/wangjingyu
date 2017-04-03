

window.onresize=rr;

function rr(){
	var pm=document.documentElement.clientWidth;
	var xsb=pm/750*100;
	document.documentElement.style.fontSize=pm+'px';
}
rr();

$('.tou5').hover(function(){
	$('.ttu1').css({'display':'block'});
	$('.ttu2').css({'opacity':'0'});
	$('.nn2 a').css({'display':'block'});
},function(){
	$('.ttu1').css({'display':'none'});
	$('.ttu2').css({'opacity':'1'});
	$('.nn2 a').css({'display':'none'});
});


$('.gg5').hover(function(){
	$('.gg8').css({'display':'block'});
},function(){
	$('.gg8').css({'display':'none'});
});


$('.gg4').hover(function(){
	$('.gg10').css({'display':'block'});
},function(){
	$('.gg10').css({'display':'none'});
});
$('.gg3').hover(function(){
	$('.gg11').css({'display':'block'});
},function(){
	$('.gg11').css({'display':'none'});
});


$('.gg1').hover(function(){
	$('.gg12').css({'display':'block'});
},function(){
	$('.gg12').css({'display':'none'});
});
