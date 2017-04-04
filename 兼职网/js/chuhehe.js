// rem计算
window.onresize=rr;
function rr(){
	var d1=document.documentElement.clientWidth;
	var sum=d1/750*100;
	document.documentElement.style.fontSize=sum+'px';
}
rr();