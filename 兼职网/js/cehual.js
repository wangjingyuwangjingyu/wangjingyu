// 主体
var zBox=$('.zhuti-box');
// 侧滑页
var cehuaBox=$('.cehua-box');
var ceHuas=$('.cehuas');
var wyFoote=$('.wy-footer');

// 动态获取浏览器高度
function resize(){
	var ch=document.documentElement.clientHeight;
	cehuaBox.style.height=ch+'px';
	// zBox.style.height=ch+'px';
	ceHuas.style.height=ch+'px';
}
resize();
window.addEventListener('resize',resize);




// 获取点击按钮
var btn=$('.zhuti-box .head>.btn>img');
// 侧滑效果
btn.addEventListener('touchstart',function(){
	zBox.classList.add('active');
	wyFoote.classList.add('active');
	ceHuas.style.display='block';
	cehuaBox.classList.remove('active');
})



ceHuas.addEventListener('touchstart',function(){
	zBox.classList.remove('active');
	wyFoote.classList.remove('active');
	ceHuas.style.display='none';
	cehuaBox.classList.add('active');
})



// 定位城市背景切换
var li=document.querySelectorAll('.cehua-box>.bottom>li');
var img=document.querySelectorAll('.cehua-box>.bottom>li img');

var spanZ=$('.zhuti-box .head>.btn>span');
var spans=document.querySelector('.cehua-box>.zhong>.zi>span');

var ul=$('.cehua-box>.bottom');

// 事件委派
ul.addEventListener('touchstart',function(){
	var e=e||window.event;
	var obj=e.target;
	// 判断obj是否为img
	if(obj.nodeName=='IMG'){
		for(var i=0;i<li.length;i++){
			li[i].classList.remove('active');
			img[i].src='../images/tianjia.png';
		}
		// 切换图片路径
		obj.src='../images/queding.png';
		// 切换li背景
		var parent=obj.parentNode.parentNode;
		parent.classList.add('active');
		// 获取城市，给顶部定位城市值
		var text=parent.childNodes[1].innerHTML;
		spans.innerHTML=text;
		spanZ.innerHTML=text;
	}else if(obj.nodeName=='LI'){
		for(var i=0;i<li.length;i++){
			li[i].classList.remove('active');
			img[i].src='../images/tianjia.png';
		}
		obj.classList.add('active');
		obj.querySelector('img').src='../images/queding.png';
		var text=obj.querySelector('span').innerHTML;
		spans.innerHTML=text;
		spanZ.innerHTML=text;
	}
})












function $(arr){
	return document.querySelector(arr);
}


