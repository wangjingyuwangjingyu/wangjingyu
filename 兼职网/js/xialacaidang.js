var inss=1;
$('.w-btn-xiala').click(function(){
	var d1=$(this).index();
	$('.w-btn-xiala').css({'background':'none'});
	this.style.background='url(../images/bjl_option.png) no-repeat center center/cover';
	$($('.w-xiala')[d1]).css({'transition':'left 1s','left':'0px','opacity':'1'});
	$('.w-xiala').each(function(){
		var d2=$(this).index();
		if(d1!=d2){
			if(d1<d2){
				var h1=this.style.left;
				if(h1=='-100%'){
					$(this).css({'transition':'left 0s','left':'100%','opacity':'0'});
				}else{
					$(this).css({'transition':'left 1s','left':'100%','opacity':'1'});
				}
			}else{
				var h1=this.style.left;
				if(h1=='100%'){
					$(this).css({'transition':'left 0s','left':'-100%','opacity':'0'});
				}else{
					if(inss==1&&d2==1&&d1!=2){
						inss++;
						$(this).css({'transition':'left 0s','left':'-100%','opacity':'0'});
					}else{
						$(this).css({'transition':'left 1s','left':'-100%','opacity':'1'});
					}
				}
			}
		}
		
	});
});