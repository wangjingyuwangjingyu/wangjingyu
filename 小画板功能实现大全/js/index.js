var can=document.querySelector('#can');
var btns=document.querySelectorAll('.nav-1');
var body=document.querySelector('body');
can.width='1200';
can.height='600';
can.style.border='2px solid red';
var o=can.getContext('2d');
//调用
var hao123=new hb(can,o);
btns[0].onclick=function(){
	hao123.line();
}
btns[1].onclick=function(){
	hao123.rect();
}
btns[3].onclick=function(){
	hao123.triangle();
}
btns[2].onclick=function(){
	hao123.radio();
}
btns[5].onclick=function(){
	hao123.pen();	
}
btns[6].onclick=function(){
	document.querySelector('.fzinput').style.display='block';
	document.querySelector('#input').style.display='block';
}
btns[8].onclick=function(){
	hao123.cx();
}
btns[9].onclick=function(){
	hao123.hf();
}
var keys=true;
btns[10].onclick=function(){
	if(keys){
		keys=false;
		hao123.xp();
		hao123.can.curpos='crosshair';
		
	}else{
		keys=true;
		var el=document.querySelector('.el');
		el.style.display='none';
		hao123.sjfz(function(self,cx,cy){},function(self,cx,cy,mx,my){},function(self,cx,cy,mx,my){});
		document.querySelector('body').onmousemove=null;
		hao123.line();
	}
}
var flag1=true;
btns[13].onclick=function(){
	if(flag1){
		flag1=false;
		hao123.type='fill';
		this.innerHTML='取消';
	}else{
		flag1=true;
		hao123.type='stroke';
		this.innerHTML='填充';
	}
}
btns[11].onclick=function(){
	document.querySelector('#in1').style.display='block';
	document.querySelector('.zz12').style.display='block';
}
document.querySelector('.zz12').onclick=function(){
	hao123.xk=Number(document.querySelector('#in1').value);
	document.querySelector('#in1').style.display='none';
	document.querySelector('.zz12').style.display='none';
}
// 颜色生成器
hao123.ysq();
var flag=true;
document.querySelector('.nav-3').onclick=function(){
	if(flag){
		flag=false;
		document.querySelector('.m1').style.display='block';
	}else{
		flag=true;
		document.querySelector('.m1').style.display='none';
	}
};
var dd1s=document.querySelectorAll('.dd1');
for(var i=0;i<dd1s.length;i++){
	dd1s[i].indexsss=i;
	dd1s[i].onclick=function(){
		hao123.colors=dd1s[this.indexsss].colors;
	}
}
var nklop=1;
var newjian=document.querySelector('.newjian');
var df=document.createElement('div');
df.className='df12';
df.innerText='系统默认画布';
newjian.appendChild(df);
// 新建画布
btns[12].onclick=function(){
	// 新建款
	var df=document.createElement('div');
	df.className='df12';
	df.innerText=nklop+'新建画布';
	nklop++;
	newjian.appendChild(df);
	// 新建画布
	var df=document.createElement('canvas');
	df.className='can';
	console.dir(df);
	document.querySelector('body').appendChild(df);
	o=df.getContext('2d');
	hao123=new hb(can,o);
}
var body=document.querySelector('body')
body.addEventListener('click',function(e){
	hao123.cx=e.clientX;
	hao123.cy=e.clientY;
	console.dir(hao123.cx);

	var yuan=e.target;
	var bbm=0;
	console.dir(yuan);
	if(yuan.className=='df12'){
		var dfg=document.querySelectorAll('.can');
		var dfg1=document.querySelectorAll('.df12');
		for(var i=0;i<dfg1.length;i++){
			if(parseInt(yuan.innerText)==Number(dfg1[i].innerText)){
				bbm=parseInt(yuan.innerText);
			}
		}
		document.querySelector('body').removeChild(dfg[bbm]);
		newjian.removeChild(yuan);
		console.dir(dfg[bbm].parent);
	}
},false);

var flag123=true;
btns[4].onclick=function(){
	if(flag123){
		flag123=false;
		var gh=document.createElement('input');
		gh.className='iii';
		gh.value='...';
		document.querySelector('body').appendChild(gh);

		var gh=document.createElement('input');
		gh.className='iiii';
		gh.value='内角度';
		document.querySelector('body').appendChild(gh);
	}else{
		hao123.num=Number(document.querySelector('.iii').value);
		hao123.neijiao=Number(document.querySelector('.iiii').value);
		hao123.xing();

		flag123=true;
		var op=document.querySelectorAll('.iii');
		for(var ub=0;ub<op.length;ub++){
			op[ub].style.display='none';
		}
		var op=document.querySelectorAll('.iiii');
		for(var ub=0;ub<op.length;ub++){
			op[ub].style.display='none';
		}
	}
	
}






// document.documentElement.body.onclick=function(e){
// 	var yuan=e.target;
// 	if(yuan){
// 			vv[g].indexxx=g;
// 			vv[g].onclick=function(){
// 			yuan.style.display='none';
// 			}
// 		}
// 	}
// }



var cx=0,cy=0;
//字体 
var flaghhh=true;
btns[15].onclick=function(){
	if(flaghhh){
		flaghhh=false;
		hao123.sjfz(function(self,cx,cy){},function(self,cx,cy,mx,my){},function(self,cx,cy,mx,my){});
		document.querySelector('body').ondblclick=function(e){
			document.querySelector('#can').onclick=function(e){
				cx=e.offsetX;
				cy=e.offsetY;
			}
			if(cx==0&&cy==0){
				return;
			}
			// 创建
			var fontinput=document.createElement('div');
			fontinput.className='font1';
			fontinput.style.left=cx+100+'px';
			fontinput.style.top=cy+25+'px';
			fontinput.contentEditable=true;
			fontinput.autofocus='autofocus';
			document.querySelector('body').appendChild(fontinput);
			// 失去焦点
			fontinput.onblur=function(){
				hao123.sjfz(function(self,cx,cy){},function(self,cx,cy,mx,my){},function(self,cx,cy,mx,my){});
				var values=this.innerText;
				document.querySelector('body').removeChild(this);
				var pml=document.querySelector('body');
				hao123.o.font='30px 宋体';
				hao123.o.strokeStyle='#000';
				hao123.o.fillText(values,cx+100,cy+25);
				hao123.o.stroke();
			}
		}
	}else{
		flaghhh=true;
		document.querySelector('body').onclick=null;
	}
}

document.querySelector('.df12').onclick=function(){
	document.querySelector('#can').style.display='none';
	this.style.display='none';
}




document.querySelector('.fzinput').onclick=function(){
	hao123.num=Number(document.querySelector('#input').value);
	document.querySelector('.fzinput').style.display='none';
	document.querySelector('#input').style.display='none';
	if(hao123.num){
		hao123.polygon(hao123.num);
	}else{
		alert('输入数据错误！！！');
	}
};

// 默认工具
hao123.pen();
hao123.colors='#fff';


// // 背景壁纸
// var index=0;
// var arr=['u=3942640875,1986357827&fm=11&gp=0.jpg','502d30f79a6c4.jpg','1920x1200_5431f602437e035.jpg','20160625005.jpg'];
// window.setInterval(function(){
// 	index++;
// 	if(index>=arr.length){
// 		index=0;
// 	}
// 	body.style['background-image']='url(img/'+arr[index]+')';
// },8000);



// 保存
var gb123=document.querySelector('.baocun');

btns[16].onclick=function(){
	var img=new Image();
	img.src=hao123.can.toDataURL('image/png','image/octet-stream');
	img.style.height=100+'%';
	img.style.cssText='border:1px solid #ccc;height:100%;float:left;'
	document.querySelector('body').appendChild(img);
	gb123.appendChild(img);
}


