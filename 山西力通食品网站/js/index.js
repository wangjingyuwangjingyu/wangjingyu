$('.navleft li:first-child').hover(function(){
	$(this).find('a').css({'color':'#fff'});
},function(){
	$(this).find('a').css({'color':'#f60'});
});

$('.navleft li').hover(function(){
	$(this).find('.xl').css({'display':'block'});
},function(){
	$(this).find('.xl').css({'display':'none'});
});