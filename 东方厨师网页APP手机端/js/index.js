// 轮播插件
var mySwiper = new Swiper('.swiper-container', {
	autoplay:300,//可选选项，自动滑动
	loop:true,
	touchRatio:0.5,
	autoplayDisableOnInteraction : false,
});

// rem单位计算布局
window.onresize=rr;
function rr(){
	var wm=document.documentElement.clientWidth;
	var rem=wm/750*100;
	document.documentElement.style.fontSize=rem+'px';
}
rr();
