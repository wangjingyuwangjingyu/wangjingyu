


var now=0;
var next=0;
var t1=window.setInterval(fn,3000);

function fn(){
	next++;
	if(next>=$('.imgk').length){
		next=0;
	}
	tui(now);
	hui(next);
	$('.btnlist ul li').css({'transform':'scale(1)'});
	$($('.btnlist ul li')[next]).css({'transform':'scale(1.2)'});
	now=next;
}
fn();


// 动画效果退去的
function tui(i){
	switch(i){
		case 0 :$($('.imgk')[0]).find('img:first-child').css({'left':'-100%','opacity':'0'});
				$($('.imgk')[0]).find('img:last-child').css({'left':'100%','opacity':'0'});
		break;
		case 1 :$($('.imgk')[1]).find('img:first-child').css({'left':'-100%','top':'-100%','opacity':'0'});
				$($('.imgk')[1]).find('img:last-child').css({'left':'100%','top':'100%','opacity':'0'});
		break;
		case 2 :$($('.imgk')[2]).find('img:first-child').css({'left':'100%','opacity':'0'});
				$($('.imgk')[2]).find('img:last-child').css({'left':'-100%','opacity':'0'});
		break;
		case 3 :$($('.imgk')[3]).find('img:first-child').css({'left':'-100%','top':'100%','opacity':'0'});
				$($('.imgk')[3]).find('img:last-child').css({'left':'100%','top':'-100%','opacity':'0'});
		break;
		case 4 :$($('.imgk')[4]).find('img:first-child').css({'left':'100%','opacity':'0'});
				$($('.imgk')[4]).find('img:last-child').css({'left':'-100%','opacity':'0'});
		break;
		case 5 :$($('.imgk')[5]).find('img:first-child').css({'left':'100%','top':'-100%','opacity':'0'});
				$($('.imgk')[5]).find('img:last-child').css({'left':'-100%','top':'100%','opacity':'0'});
		break;
		case 6 :$($('.imgk')[6]).find('img:first-child').css({'left':'-100%','top':'-100%','opacity':'0'});
				$($('.imgk')[6]).find('img:last-child').css({'left':'100%','top':'100%','opacity':'0'});
		break;
	}
}

// 动画效果回来的
function hui(i){
	switch(i){
		case 0 :$($('.imgk')[0]).find('img:first-child').css({'left':'20px','opacity':'1'});
				$($('.imgk')[0]).find('img:last-child').css({'left':'200px','opacity':'1'});
		break;
		case 1 :$($('.imgk')[1]).find('img:first-child').css({'left':'20px','top':'20px','opacity':'1'});
				$($('.imgk')[1]).find('img:last-child').css({'left':'200px','top':'20px','opacity':'1'});
		break;
		case 2 :$($('.imgk')[2]).find('img:first-child').css({'left':'0px','opacity':'1'});
				$($('.imgk')[2]).find('img:last-child').css({'left':'150px','opacity':'1'});
		break;
		case 3 :$($('.imgk')[3]).find('img:first-child').css({'left':'10px','top':'20px','opacity':'1'});
				$($('.imgk')[3]).find('img:last-child').css({'left':'150px','top':'0px','opacity':'1'});
		break;
		case 4 :$($('.imgk')[4]).find('img:first-child').css({'left':'0px','opacity':'1'});
				$($('.imgk')[4]).find('img:last-child').css({'left':'500px','opacity':'1'});
		break;
		case 5 :$($('.imgk')[5]).find('img:first-child').css({'left':'10px','top':'10px','opacity':'1'});
				$($('.imgk')[5]).find('img:last-child').css({'left':'600px','top':'0px','opacity':'1'});
		break;
		case 6 :$($('.imgk')[6]).find('img:first-child').css({'left':'10px','top':'5px','opacity':'1'});
				$($('.imgk')[6]).find('img:last-child').css({'left':'200px','top':'5px','opacity':'1'});
		break;
	}
}

$('.btnlist ul li').on('click',function(){
		next=$(this).index()-1;
		fn();
});


