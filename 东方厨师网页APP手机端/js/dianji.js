$('.wjy-dianhuan').css({'display':'none'});
$($('.wjy-dianhuan')[0]).css({'display':'block'});
$('.g4').on('click',function(){
	$('.g4').css({'color':'#000','background':'transparent'});
	$(this).css({'color':'#fff','background':'#01B5FF'});
	$('.wjy-dianhuan').css({'display':'none'});
	$($('.wjy-dianhuan')[$(this).index()]).css({'display':'block'});
});