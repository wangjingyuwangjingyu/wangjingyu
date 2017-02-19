
$('.knm1').hover(function(){
	var self=this;
	var index=0;
	for(var i=0;i<$('.knm1').length;i++){
		if($('.knm1')[i]==self){
			index=i;
			break;
		}
	}
	$($('.dian')[index]).css({'animation':'a1 0.5s linear 0s infinite normal'});
},function(){
	$('.dian').css({'animation':''});
});



window.addEventListener('scroll',function(e){
	var st=document.body.scrollTop;
	var windows=document.documentElement.clientHeight;
	if((st+windows-500)>$('.grhh6')[0].offsetTop&&st+windows>$('.grhh6')[0].offsetTop){
		$('.grhh6').css({'animation':'a2 0.5s linear 0s infinite normal'});
	}else{
		$('.grhh6').css({'animation':''});
	}
	if((st+windows-500)>$('.grhh1')[0].offsetTop&&st+windows>$('.grhh1')[0].offsetTop){
		$('.grhh1').css({'animation':'a2 0.5s linear 0s infinite normal'});
	}else{
		$('.grhh1').css({'animation':''});
	}

	if(st+480>=$('.foot12')[0].offsetTop-80){
		$('.foot123:nth-child(2)').css({'left':'52%'});
		$('.foot123:nth-child(1)').css({'right':'52%'});
	}else{
		$('.foot123:nth-child(2)').css({'left':'100%'});
		$('.foot123:nth-child(1)').css({'right':'100%'});
	}
});


$('.dianji').click(function(){
	$('.dianji').css({'background':'','color':'#fc828C'});
	$(this).css({'background':'#333','color':'#fff'});
});

window.addEventListener('resize',fn123);
function fn123(){
	var hh=parseInt($('.bb-11').css('width'));
	console.dir(hh);
	$('.bb-11').css({'height':hh+'px'});
	var hhj=parseInt($('.bb-11').css('margin-left'));
	var hhkl=parseInt(($('.bb-11').length)/5-1);
	
	var bh=document.documentElement.clientHeight;
	$('.zz').css({'height':bh+'px'});
	$('.zzz').css({'height':parseInt($('.zzz').css('width'))+'px'});

	$('.bigbox').css({'height':2*hh+hhj*2+hhj*hhkl+'px'});
}
fn123();
$('.zz').click(function(){
	$(this).css({'transform':'scale(0)','opacity':'0'});
});

$('.bb-11').click(function(){
	var imgsrc=$(this).find('img')[0].getAttribute("imgsrc");
	var lianjie=$(this).find('img')[0].getAttribute("lianjie");
	$('.zzdian a')[0].href='http://'+lianjie;
	console.dir(lianjie);
	$('.zz').css({'transform':'scale(1)','opacity':'1'});
	$('.zzz').find('img')[0].src=imgsrc;
});
$('.zzdian')[0].onclick=function(e){
	e.stopPropagation();
}
var indexpp=0;
$('.dianji').each(function(){
	this.setAttribute('ii',indexpp);
	$(this).click(function(){
		$('.big-1').css({'display':'none'});
		$($('.big-1')[this.getAttribute('ii')]).css({'display':'block'});
	});
	indexpp++;
});
$('.big-1').css({'display':'none'});
$($('.big-1')[0]).css({'display':'block'});
$('.nav-3')[0].style.cssText='background:#333;color:#fff;';



