var index=0;
var t1=window.setInterval(fn,3000);
function fn(){
	index++;
	if(index>=$('.j1 a').length){
		index=0;
	}
	$('.j1 a').css({'opacity':'0'});
	$($('.j1 a')[index]).css({'opacity':'1'});
	$('.j2 li').css({'backgroundColor':'rgba(255,255,255,0.4)'});
	$($('.j2 li')[index]).css({'backgroundColor':'rgba(255,255,255,0.9)'});
}



var now1=0;
var next1=0;
var t2=window.setInterval(fnn,2000);

function fnn(){
	next1++;
	if(next1>=$('.j6').length){
		next1=0;
	}
	$($('.j6')[next1]).css({'top':'100%'});
	$($('.j6')[now1]).animate({'top':'-100%'});
	$($('.j6')[next1]).animate({'top':'14px'});
	now1=next1;
}


$('.j8').hover(function(){
	$($('.j10')[$(this).index()]).css({'display':'inline-block'});
	$($('.j9')[$(this).index()]).css({'display':'none'});
	$(this).find('span:nth-child(2)').css({'color':'#00BF9D'});
	$(this).find('span:nth-child(3)').css({'color':'#00BF9D'});
},function(){
	$($('.j9')[$(this).index()]).css({'display':'inline-block'});
	$($('.j10')[$(this).index()]).css({'display':'none'});
	$(this).find('span:nth-child(2)').css({'color':'#666'});
	$(this).find('span:nth-child(3)').css({'color':'#E72F0F'});
})

$('.jj13 .jj18').hover(function(){
	$(this).find('#jj21').css({'display':'none'});
	$(this).find('#jj22').css({'display':'block'});
},function(){
	$(this).find('#jj21').css({'display':'block'});
	$(this).find('#jj22').css({'display':'none'});
});
$('.u4').hover(function(){
	$(this).find('.u5').css({'display':'block','margin-top':'20px'});
	$(this).find('.u6').css({'display':'none'});
},function(){
	$(this).find('.u5').css({'display':'none'});
	$(this).find('.u6').css({'display':'block'});
});

$('.jj11 .jj12 .jj30  #mklop123').hover(function(){
	$(this).css({'text-decoration':'underline'});
},function(){
	$(this).css({'text-decoration':'none'});
});
$('.b5').css({'backgroundColor':'#00BF9D','color':'#fff'});

$('.b4').hover(function(){
	$('.b4').css({'backgroundColor':'#fff','color':'#333'});
	$('.bnmk1').css({'display':'none'});
	$($('.bnmk1')[$(this).index()]).css({'display':'block'});
	$(this).css({'backgroundColor':'#00BF9D','color':'#fff'});
},function(){

});
