// barner轮播
var next=0;
$('.m8>img').each(function(){
	$(this).css({'opacity':'0'});
});
$('.m8>img:nth-child(1)').css({'opacity':'1'});
var flag=true;


var t1=window.setInterval(fn,6000);



function fn(){
	if(flag){
		flag=false;
		next++;
	if(next>=$('.m8>img').length){
		next=0;
	}
	$('.m12>li').css({'background':'#656565'});
	$($('.m12>li')[next]).css('background','#EC7815');
		$('.m8>img').css({'opacity':'0'});
	$($('.m8>img')[next]).animate({'opacity':'1'},300,function(){
		flag=true;
	});
	}
}
// 小点跟随
$('.m10').on('click',false,function(){
	if(flag){
		flag=false;
		next--;
		if(next<0){
			next=$('.m8>img').length-1;
		}
		$('.m12>li').css({'background':'#656565'});
		$($('.m12>li')[next]).css('background','#EC7815');
			$('.m8>img').css({'opacity':'0'});
		$($('.m8>img')[next]).animate({'opacity':'1'},300,function(){
			flag=true;
		});
	}
});
$('.m11').on('click',false,function(){
	fn();
});
// 小点点击
$('.m12>li').each(function(){
	$(this).on('click',function(){
		next=$(this).index()-1;
		$('.m8>img').css('opacity','0');
		$($('.m8>img')[next]).css('opacity','1');
	});
});
// 大轮播
var tops=0;
var nexts=0;
var nnn=0;
$($('.p3>.p5>img')[nexts]).css({'width':'142px','margin':'4px'});
$('.y3').css({'bottom':'-75px'});
$($('.y3')[nexts]).css({'bottom':'0px'});
var t2=window.setInterval(fn1,2000);
function fn1(){
	tops+=87;
	nexts++;
	if(nexts>4||tops>=265){
		nexts=0;
		tops=0;
	}
	$('.y1').animate({'top':tops+'px'});
	$('.p3>.p5>img').css({'width':'150px','margin':'0px','opacity':'0.8'});
	$($('.p3>.p5>img')[nexts]).css({'width':'142px','margin':'4px','opacity':'1'});
	$('.p2>img').animate({'opacity':'0'});
	$($('.p2>img')[nexts]).animate({'opacity':'1'});
	$($('.y3')[nnn]).animate({'bottom':'-75px'});
	$($('.y3')[nexts]).animate({'bottom':'0px'});
	nnn=nexts;
}
// 鼠标指向
$('.p3>.p5').hover(function(i,j){
	$('.p3>.p5>img').css({'opacity':'0.8'});
	$(this).css({'opacity':'1'});
	var sum=$(this).index()*87;
	$('.y1').animate({'top':sum+'px'});
	$('.p2>img').css({'opacity':'0'});
	$($('.p2>img')[$(this).index()]).css({'opacity':'1'});
	$($('.y3')[nnn]).animate({'bottom':'-75px'});
	$($('.y3')[$(this).index()]).animate({'bottom':'0px'});
	tops=sum;
	nnn=$(this).index();
	nexts=$(this).index();
},function(){
});
// 轮播
var indexxx=0;
var now=0;
var t3 =window.setInterval(fn3,1000);
function fn3(){
	indexxx++;
	if(indexxx>=$('.g4>img').length){
		indexxx=0;
	}
	$($('.g4>img')[indexxx]).css({'top':'257px'});
	$($('.g4>img')[now]).animate({'top':'-257px'});
	$($('.g4>img')[indexxx]).animate({'top':'0px'});
	$('.gg1').css({'background':'#fff','color':'#333'});
	$($('.gg1')[indexxx]).css({'background':'#006699','color':'#fff'});
	now=indexxx;
}
$('.gg1').css({'cursor':'pointer'});
$('.gg1').each(function(){
	$(this).on('click',function(){
		indexxx=$(this).index()-1;
	});
});
// foot
$('.g57>a').hover(function(){
	$(this).css({'text-decoration':'underline'});
},function(){
	$(this).css({'text-decoration':'none'});
});
// 蒙版
$('.m6').hover(function(){
	$(this).css({'cursor':'pointer'});
	$('<div>').addClass('mkl1').appendTo(this).css({'width':'100%','height':'100%','background':'rgba(0,0,0,0.2)'});
},function(){
	$('.mkl1').remove();
});
// $('.n3').css({'display':'none'});
$('.n1').on('click',function(){
	$('.n3').css({'display':'block'});
	$('.n1').css({'display':'none'});
});
$('.nnn1').on('click',function(){
	$('.n3').css({'display':'none'});
	$('.n1').css({'display':'block'});
});
$('.n2').on('click',function(){
	$('.n2').css({'display':'none'});
	$('.nb1').css({'display':'block'});
});
$('.njuhp1').on('click',function(){
	$('.n2').css({'display':'block'});
	$('.nb1').css({'display':'none'});
});
// $('.nb1').css({'display':'none'});