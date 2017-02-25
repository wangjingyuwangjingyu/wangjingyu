// 动态
window.setInterval(function(){
	var b=Math.floor($('.boxr').height());
	$('.boxl').css({'height':b+'px'});
	$('.bigbox').css({'height':b+'px'});
	$('.imglunbo').css({'height':b+'px'});

	var a1=Math.floor($('.boxl').width());

	$('.ydbox').css({'width':a1+'px','height':b+'px'});
	$('.xzbox').css({'width':a1*4+'px','height':b+'px'});
},200);

// 轮播
// window.setInterval(function(){
// 	var a=Math.floor($('.boxl').width());
// 	$('.xzbox').animate({'left':-33.33333+'%'});
// },10);

