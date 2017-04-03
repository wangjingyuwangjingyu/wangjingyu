$('.bg1').css({'opacity':'0'}).eq(1).css({'opacity':'1'});
$($('.xiaodian li')[0]).css({'border':'3px solid #fff','background':'transparent','margin-top':'-3px'});
var index=0;
var flag=true;
var t1=window.setInterval(fn,3000);
function fn(){
	index++;
	if(index>=$('.bg1').length){
		index=0;
	}
	$(".xiaodian li").css({'background':'#fff','border':'none','margin-top':'0px'});
	$('.bg1').css({'opacity':'0'}).eq(index).css({'opacity':'1'});
	$($('.xiaodian li')[index]).css({'border':'3px solid #fff','background':'transparent','margin-top':'-3px'});
}
function fn1(){
	index--;
	if(index<0){
		index=$('.bg1').length-1;
	}
	$(".xiaodian li").css({'background':'#fff','border':'none','margin-top':'0px'});
	$('.bg1').css({'opacity':'0'}).eq(index).css({'opacity':'1'});
	$($('.xiaodian li')[index]).css({'border':'3px solid #fff','background':'transparent','margin-top':'-3px'});	
}
$('.c6').hover(function(){
	$(this).find('a img')[0].src=$(this).find('a img')[0].getAttribute('path');
},function(){
	$(this).find('a img')[0].src=$(this).find('a img')[0].getAttribute('pathx');
});
$('.xiaodian li').on('click',function(){
	index=$(this).index()-1;
	fn();
});
$('.clickl').on('click',function(){
	fn1();
});
$('.clickr').on('click',function(){
	fn();
});
$('.barder').hover(function(){
	$('.lrclick').css({'opacity':'1'});
},function(){
	$('.lrclick').css({'opacity':'0'});
});


