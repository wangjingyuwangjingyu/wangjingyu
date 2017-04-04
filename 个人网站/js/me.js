// 动画一
function lbfn1(){
	$('.p1-1').css({'left':'20%'});
	$('.p1-2').css({'top':'50%'});
	// $('.p1-2 p').css({'margin-left':'0px','opacity':'1'});
}
function lbfn1t(){
	$('.p1-1').css({'left':'-100%'});
	$('.p1-2').css({'top':'100%'});
	// $('.p1-2 p').css({'margin-left':'500px','opacity':'0'});
}
// 动画二
function lbfn2(){
	$('.leftbox').css({'left':'20%','opacity':'1'});
	$('.rightbox').css({'left':'45%','opacity':'1'});
}
function lbfn2t(){
	$('.leftbox').css({'left':'-100%','opacity':'0'});
	$('.rightbox').css({'left':'100%','opacity':'0'});
}
// 动画三
function lbfn3(){
	$('.j1').css({'top':'20%'});
	$('.j2').css({'opacity':'1','transform':'translateX(-50%) scale(1)'});
}
function lbfn3t(){
	$('.j1').css({'top':'-100%'});
	$('.j2').css({'opacity':'0','transform':'translateX(-50%) scale(0)'});
}
// 动画四
function lbfn4(){
	$('.lian').css({'transform':'translateX(-50%) rotate(-720deg) scale(1)','opacity':'1'});
}
function lbfn4t(){
	$('.lian').css({'transform':'translateX(-50%) rotate(720deg) scale(3)','opacity':'0'});
}
var next=0;
var now=0;
var t1=window.setInterval(fn,3000);
function fn(){
	next++;
	if(next>=$('.pre').length){
		next=0;
	}
	switch(next){
		case 0 :lbfn1();lbfn2t();lbfn3t();lbfn4t();break;
		case 1 :lbfn1t();lbfn2();lbfn3t();lbfn4t();break;
		case 2 :lbfn1t();lbfn2t();lbfn3();lbfn4t();break;
		case 3 :lbfn1t();lbfn2t();lbfn4();lbfn3t();break;
	}
	$($('.pre')[next]).css({'left':'100%'});
	$($('.pre')[now]).animate({'left':'-100%'});
	$($('.pre')[next]).animate({'left':'0px'});
	$('.nn li').css({'background':'#fff'});
	$($('.nn li')[next]).css({'background':'yellow'});
	now=next;
}
$('.nn li').click(function(){
	next=$(this).index()-1;
	fn();
	window.clearInterval(t1);
	window.setTimeout(function(){
		t1=window.setInterval(fn,3000);
	},3000);
});
var angle=0;
window.setInterval(fn1,1);
function fn1(){
	angle++;
	$('.p1-2-2-1').css({'transform':'translate(-50%,-100%) rotate('+angle+'deg)'});
	if(angle%2==0){
		$('.p1-2-2-1').css({'opacity':'0'});
	}else{
		$('.p1-2-2-1').css({'opacity':'1'});
	}
}
window.setInterval(fn2,200);
function fn2(){
	$('.p1-1').css({'line-height':'300px'});
	window.setTimeout(function(){
	$('.p1-1').css({'line-height':'200px'});
	},100);
}
var num=200;
for(var i=0;i<$('.p1-2 p').length;i++){
	$('.p1-2 p').css({'transition':'all '+(num*(i+1))+'s'});
}


window.onresize=rr123;
function rr123(){
	var cccw=document.documentElement.clientWidth;
	if(cccw<500){
		$('.hehehehhe').css({'display':'none'});
		$('.jijiji').css({'display':'block'});
	}else{
		$('.hehehehhe').css({'display':'block'});
		$('.jijiji').css({'display':'none'});
	}
}
rr123();

