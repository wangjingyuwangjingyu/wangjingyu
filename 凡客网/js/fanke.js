$('.k3').find('a').css({'cursor':'pointer'});
$('.fkt1').hover(function(){
	$(this).css('color','#B81C20');
},function(){
	$(this).css('color','');
});
$('.fkt2').hover(function(){
	$('.fkt3').css('display','block');
},function(){
	$('.fkt3').css('display','none');
});
$('.u2').find('img').css({'cursor':'pointer'});





$('.p2>.p5').hover(function(){
	$(this).css({'background':'#fff','background-image':'url(../img/截图12.png)','background-repeat':'no-repeat','border':'1px solid #B81C20','border-bottom':'0','color':'#B81C20','height':'30px'});
	$('.pkmu1').css({'display':'block'});
},function(){
	$(this).css({'background':'','border':'none','color':'#fff'});
	$('.pkmu1').css({'display':'none'});
});


// 头部
// $('.u3>li').hover(function(){
// 	$(this).css({'color':'#B81C20'});
// 	$($(this).find('.fkte1')[$(this).index()]).css({'display':'block'});
// },function(){
// });


// 下拉选项框
$('.u3>li').find('a').each(function(){
		this.onmouseover=function(){
			// console.dir(this.offsetHeight);
		$(this).css({'color':'#B81C20'});
		$($(this).find('.fkte1')[$(this).index()]).css({'display':'block'});
		// console.dir(this.offsetHeight);
	}
});
$('.u3>li').find('a').each(function(){
	this.onmouseout=function(){
		$(this).css({'color':''});
		$($(this).find('.fkte1')[$(this).index()]).css({'display':'none'});
	}
});
// 每个单元的样式
$('.fktee1>ul>li').hover(function(){
	$(this).css({'background-color':'#B81C20','color':'#fff'});
},function(){
	$(this).css({'background-color':'','color':''});
});



var indexs=0;
var flag=true;
$($('.w6>ul>li')[0]).css({'backgroundColor':'#A10000'});
var tt1=window.setInterval(fnlb,2200);
function fnlb(){
	if(flag){
		flag=false;
		indexs++;
		if(indexs>=$('.w2').length){
			indexs=0;
		}
		$('.w2').css('opacity','0');
		$('.w6>ul>li').css({'backgroundColor':''});
		$($('.w6>ul>li')[indexs]).css({'backgroundColor':'#A10000'});
		$($('.w2')[indexs]).animate({'opacity':'1'},300,function(){
			flag=true;
		});
	}
}
$('.w4').hover(function(){
	$(this).css({'background-position':'0px 63px'});
},function(){
	$(this).css('color','');
	$(this).css({'background-position':'0px 0px'});
});

$('.w5').hover(function(){
	$(this).css({'background-position':'30px 63px'});
},function(){
	$(this).css('color','');
	$(this).css({'background-position':'30px 0px'});
});

$('.w4').click(function(){
	if(flag){
		flag=false;
		indexs--;
		if(indexs<0){
			indexs=$('.w2').length-1;
		}
		$('.w2').css('opacity','0');
		$('.w6>ul>li').css({'backgroundColor':''});
		$($('.w6>ul>li')[indexs]).css({'backgroundColor':'#A10000'});
		$($('.w2')[indexs]).animate({'opacity':'1'},300,function(){
			flag=true;
		});
	}
});
$('.w5').click(function(){
	fnlb();
});

$('.w6>ul>li').hover(function(){
	indexs=$(this).index()-1;
	fnlb();
	window.clearInterval(tt1);
},function(){
	tt1=window.setInterval(fnlb,2200);
});

$('.mopknn').click(function(){

	$('body').animate({'scrollTop':'0'});
	document.documentElement.scrollTop=0;
	document.body.scrollTop=0;
});


$('.p3').mouseover(function(){
	$(this)[0].focus();
	var bhu123=$(this)[0].value;
	if(bhu123=='搜“羊毛大衣”，体验与众不同'){
		$(this)[0].value='';
	}
	
});
$('.p3').mouseout(function(){
	if(!$(this)[0].value){
		$(this)[0].blur();
		$(this)[0].value='搜“羊毛大衣”，体验与众不同';
	}
});
