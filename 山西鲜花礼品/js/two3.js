$('.y10').hover(function(){
	$(this).find('.y14').css({'display':'none'});
	$(this).find('.y11').css({'display':'block'});
},function(){
	$(this).find('.y14').css({'display':'block'});
	$(this).find('.y11').css({'display':'none'});
});
$('.y31:nth-child(1)~a').hover(function(){
	$(this).find('.y33').css({'border-top':'6px solid #00bf9d'});
},function(){
	$(this).find('.y33').css({'border-top':'6px solid #ccc'});
});
$('.o2').hover(function(){
	$(this).find('.o10').css({'display':'inline-block'});
	$(this).find('.o7').css({'display':'none'});
},function(){
	$(this).find('.o10').css({'display':'none'});
	$(this).find('.o7').css({'display':'inline-block'});
});
$('.o100 .o188').hover(function(){
	$(this).css({'background':'#00bf9d','color':'#fff'});
	$(this).find('a').css({'color':'#fff'});
},function(){
	$(this).css({'background':'#fff','color':'#333'});
	$(this).find('a').css({'color':'#333'});
});