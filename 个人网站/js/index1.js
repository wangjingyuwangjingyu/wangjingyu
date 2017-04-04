$('.jk1').each(function(){
	var self=this;
	this.onclick=function(){
		$('.jk1').css({'background':''});
		$(self).css({'background':'#4BC3E8'});
		$('.jk1 a').css({'color':''});
		$(self).find('a').css({'color':'#fff'});
		console.dir($(this).index());
		$('.mmm48').css({'display':'none'});
		$($('.mmm48')[$(this).index()-1]).css({'display':'block'});
	}
});
$('.mmm48').css({'display':'none'});
$($('.mmm48')[0]).css({'display':'block'});
$('.mmk6').hover(function(){
	$(this).find('.kkk55').css({'left':'0px'});
	var self=this;
		$(self).css({'transform':'rotate3d(0,1,0,180deg)'});
	window.setTimeout(function(){
		$(self).css({'transform':'rotate3d(0,1,0,360deg)'});
	},1100);
},function(){
	$(this).find('.kkk55').css({'left':'-100%'});
	$(this).css({'transform':'rotate3d(0,1,0,-360deg)'});
});
window.setTimeout(function(){
	$('.hh1').css({'opacity':'1','transform':'translateY(0px)'});	
},0);
$('.mm156 li:nth-child(2)').css({'background':'#4BC3E8'});
$('.mm156 li:nth-child(2) a').css({'color':'#fff'});

