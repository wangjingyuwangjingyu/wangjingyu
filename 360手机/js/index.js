console.dir(document.documentElement.clientWidth);
var next=0;
var now=0;
window.setInterval(fn,1000);

function fn(){
	next++;
	if(next>=$('.barner img').length){
		next=0;
	}
	$($('.barner img')[next]).css({'left':'100%'});
	$($('.barner img')[now]).animate({'left':'-100%'});
	$($('.barner img')[next]).animate({'left':'0px'});
	$('.barner ul li').css({'background':'rgba(255,255,255,0.5)'});
	$($('.barner ul li')[next]).css({'background':'#fff'});

	now=next;
}
