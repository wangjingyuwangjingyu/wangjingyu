


window.onresize=rr;
function rr(){
	var a1=document.documentElement.clientWidth;
	var sum=750/a1*100;
	document.documentElement.style['font-size']=sum+'px';
}
rr();

var mySwiper = new Swiper('.barner', {
	autoplay: 1000,//可选选项，自动滑动
	onInit: function(swiper){
      //Swiper初始化了
      //alert(swiper.activeIndex);提示Swiper的当前索引
      
      window.setInterval(fn1,1000);
	  function fn1(){
		$('.bc-1').css({'background':'rgba(255,255,255,0.8)'});
		$($('.bc-1')[swiper.activeIndex]).css({'background':'#ffc001'});
	  }

    }
});

var next=0;
var now=0;

window.setInterval(fn2,1000);
function fn2(){
	next++;
	if(next>=$('.j5').length){
		next=0;
		$('.j5').css({'transition':''});
		$('.j5:nth-child(1)').css({'top':'0px'});
		$('.j5:nth-child(2)').css({'top':'100%'});
		$('.j5:nth-child(3)').css({'top':'200%'});
	}
	$('.j5')[next].style.top=100+'%';
	$($('.j5')[now]).css({'top':'-100%'});
	$($('.j5')[next]).css({'top':'0px'});
	now=next;
}






var mySwiper1 = new Swiper('.nkl', {
	autoplay: 300,//可选选项，自动滑动
	onInit: function(swiper){
      //Swiper初始化了
      //alert(swiper.activeIndex);提示Swiper的当前索引
      
      window.setInterval(fn1,50);
	  function fn1(){
		$('.nkl3').css({'background':'rgba(255,255,255,0.8)'});
		$($('.nkl3')[swiper.activeIndex]).css({'background':'#ffc001'});
	  }

    }
});




var mySwiper1 = new Swiper('.jip1', {
	autoplay: 20,//可选选项，自动滑动
	onInit: function(swiper){
      //Swiper初始化了
      //alert(swiper.activeIndex);提示Swiper的当前索引
      
      window.setInterval(fn1,20);
	  function fn1(){
		$('.b1156').css({'background':'#ddd'});
		$($('.b1156')[swiper.activeIndex]).css({'background':'#FFC001'});
	  }
    }
});