var a=document.getElementsByClassName("t5");
var b=document.getElementsByClassName("t4");
for(var i=0;i<a.length;i++){
	b[i].indexss=i;
	b[i].onmouseover=function(){
		b[this.indexss].style.background='#F8F8F8';
		a[this.indexss].style.display='block';
	}
	b[i].onmouseout=function(){
		b[this.indexss].style.background='#E4E4E4';
		a[this.indexss].style.display='none';
	}
}










var a2=document.getElementsByClassName("t6");
for(var i=0;i<6;i++){
	a2[i].indexss=i;
	a2[i].onmouseover=function(){
		a2[this.indexss].style.color='#0085D0';
	}
	a2[i].onmouseout=function(){
		a2[this.indexss].style.color='#666';	
	}
}



var a3=document.getElementsByClassName("t7");
for(var i=0;i<a3.length;i++){
	a3[i].indexss=i;
	a3[i].onmouseover=function(){
		a3[this.indexss].style.color='#0085D0';
	}
	a3[i].onmouseout=function(){
		a3[this.indexss].style.color='#666';	
	}
}



var a4=document.getElementsByClassName("t8");
for(var i=0;i<a4.length;i++){
	a4[i].indexss=i;
	a4[i].onmouseover=function(){
		a4[this.indexss].style.color='#0085D0';
	}
	a4[i].onmouseout=function(){
		a4[this.indexss].style.color='#666';	
	}
}




var a5=document.getElementsByClassName("t9");
for(var i=0;i<a5.length;i++){
	a5[i].indexss=i;
	a5[i].onmouseover=function(){
		a5[this.indexss].style.color='#0085D0';
	}
	a5[i].onmouseout=function(){
		a5[this.indexss].style.color='#666';	
	}
}








var a1=document.getElementsByClassName("t2")[0];
a1.onmouseover=function(){
	a1.style.background='#F8F8F8';
}
a1.onmouseout=function(){
	a1.style.background="#E4E4E4";
}




var a6=document.getElementsByClassName('yo5')[0];
a6.onmouseout=function(){
	a6.style.color='#333'
}
a6.onmouseover=function(){
	;a6.style.color='#25B2FE';
}
var a7=document.getElementsByClassName('yyy6');
for(var k=0;k<a7.length;k++){
	a7[k].indexss=k;
	a7[k].onmouseover=function(){
		a7[this.indexss].style.color='#25B2FE';
	}
	a7[k].onmouseout=function(){
		a7[this.indexss].style.color='#333';
	}
}






var a8=document.getElementsByClassName('yuu1');
for(var i=0;i<a8.length;i++){
	a8[i].indexss=i;
	var kjlp1=true;
		a8[i].onclick=function(){
			for(var jk=0;jk<a8.length;jk++){
				a8[jk].style.background='';
				a8[jk].style.color='#333';
			}
			a8[this.indexss].style.background='#E40077';
			a8[this.indexss].style.color='#fff';
		}
}








var a9=document.getElementsByClassName('y23');
for(var i=0;i<a9.length;i++){
	a9[i].indexss=i;
	a9[i].onmouseover=function(){
		a9[this.indexss].style.width=40+'px';
	}
	a9[i].onmouseout=function(){
		a9[this.indexss].style.width="";
	}
}






var a10=document.getElementsByClassName('j10');
for(var i=0;i<a10.length;i++){
	a10[i].indexss=i;
	a10[i].onmouseout=function(){
		animate(a10[this.indexss],{'left':75},200);
	}
	a10[i].onmouseover=function(){
		animate(a10[this.indexss],{'left':58},200);
	}
}













var jk1=document.getElementsByClassName('tyui1');
for(var i=0;i<jk1.length;i++){
	jk1[i].indexss=i;
	jk1[i].onmouseover=function(){
		jk1[this.indexss].style.color='#007FD8';
		jk1[this.indexss].style.textDecoration='underline';
	}
	jk1[i].onmouseout=function(){
		jk1[this.indexss].style.color='#666';
		jk1[this.indexss].style.textDecoration='';
	}
}




var n1=document.getElementsByClassName('tyui2');
for(var i=0;i<n1.length;i++){
	n1[i].indexss=i;
	n1[i].onmouseover=function(){
		n1[this.indexss].style.textDecoration="underline";
	}
	n1[i].onmouseout=function(){
		n1[this.indexss].style.textDecoration='';
	}
}







var bn123=document.getElementsByClassName('v6');
for(var i=0;i<bn123.length;i++){
	bn123[i].indexss=i;
	bn123[i].onmouseover=function(){
		animate(bn123[this.indexss],{right:35},300,Tween.Quad.easeInOut);
	}
	bn123[i].onmouseout=function(){
		animate(bn123[this.indexss],{right:-25},300,Tween.Quad.easeInOut);

	}
}




var tyu12=document.getElementsByClassName('ghj1');
for(var i=0;i<tyu12.length;i++){
	tyu12[i].indexss=i;
	tyu12[i].onmouseover=function(){
		tyu12[this.indexss].style.color='#007FD8';
	}
	tyu12[i].onmouseout=function(){
		tyu12[this.indexss].style.color='#666';
	}
}


















// 轮播 

var a11=document.getElementsByClassName('ypo1');
var hui9=document.getElementsByClassName('yii1');
var hjk=document.getElementsByClassName('yyp1');
var hghj=document.getElementsByClassName('y3')[0];
var widthss=parseInt(getComputedStyle(hghj,null).width);
var now=0;
var next=0;
var flag=true;
hjk[0].style.left='0';
hui9[0].style.background='#E70D6E';

var t=window.setInterval(lk,2000);
hghj.onmouseover=function(){
	window.clearInterval(t);
}
hghj.onmouseout=function(){
	t= window.setInterval(lk,2000);
}

function lk(){
		if(flag){
		flag=false;
		next++;
		if(next>=7){
		next=0;	
		}
		for(var j=0;j<hui9.length;j++){
		hui9[j].style.background='';
		}
		hui9[next].style.background='#E70D6E';
		hjk[next].style.left=widthss+'px';
		animate(hjk[now],{left:-widthss});
		animate(hjk[next],{left:0},function(){
			flag=true;
		});
	}
	




	now=next;
}


// 两个按钮样式
a11[0].onclick=function(){
	if(flag){
		flag=false;
		next--;
		if(next<0){
			next=hjk.length-1;
		}
		for(var j=0;j<hui9.length;j++){
		hui9[j].style.background='';
		}
		hui9[next].style.background='#E70D6E';
		hjk[next].style.left=-widthss+'px';
		animate(hjk[now],{left:widthss});
		animate(hjk[next],{left:0},function(){
			flag=true;
		});
		now=next;
	}

}
a11[1].onclick=function(){
	lk();
}



// 下面的7个小圆更随走
for(var j=0;j<hui9.length;j++){
	hui9[j].indexss=j;
	hui9[j].onclick=function(){
		for(var p=0;p<hui9.length;p++){
			hui9[p].style.background='';
		}
		hui9[this.indexss].style.background='#E70D6E';




		if(this.indexss>now){
			hjk[this.indexss].style.left=widthss+'px';
			animate(hjk[now],{left:-widthss});
			animate(hjk[this.indexss],{left:0});
		}else if(this.indexss<now){
			hjk[this.indexss].style.left=-widthss+'px';
			animate(hjk[now],{left:widthss});
			animate(hjk[this.indexss],{left:0});
		}else{
			return ;
		}





		now=this.indexss;
		next=this.indexss;
	}

}
























// 导航里两个按键样式
for(var i=0;i<a11.length;i++){
	a11[i].indexss=i;
	a11[i].onmouseover=function(){
		a11[this.indexss].style.background='#B4B4B4';
	}
	a11[i].onmouseout=function(){
		a11[this.indexss].style.background='';
	}
}


































// 滚动条样式
var ghj11=document.getElementsByClassName('k9');
for(var w=0;w<ghj11.length;w++){
	ghj11[w].indexss=w;
	ghj11[w].onmouseover=function(){
		ghj11[this.indexss].style.background='#B6B6B6';
	}
	ghj11[w].onmouseout=function(){
		ghj11[this.indexss].style.background='';
	}
}













// 获取对象前面的第一个孩子
	function fy(p){
		var kk=p.childNodes;
		var tttt;
		for(var i=0;i<kk.length;i++){
			if(kk[i].nodeType==1&&kk[i].nodeType!=3){
				return tttt=kk[i];
			}
		}
		return false;
	}
// 获取最后一个子元素
	function uu59q(aajh){
		var yug=aajh.childNodes;
		var jj=[];
		for(var i=0;i<yug.length;i++){
			if(yug[i].nodeType==1&&yug[i].nodeType!=3){
				jj[jj.length]=yug[i];
			}
		}
		return jj[jj.length-1];
	}






// 调用方式:LB(父块容器,子块容器,轮播速度);
// 滚动条滚动轮播
function  LB(hnm,jhkl,sudu){
	
	var ghj11=document.getElementsByClassName('k9');
	var bnvf=parseInt(getComputedStyle(jhkl[0],null).width);
	var nmty=parseInt(getComputedStyle(jhkl[0],null)['margin-right']);
	var hjgk85=bnvf+nmty;
	var flag=true;
	var ggghhh=mmnn;

		var jkl123=window.setInterval(ggghhh,sudu);
// 滚动条按钮动画效果
	ghj11[1].onclick=function(){
		bbbnnm();
		ggghhh=bbbnnm;
	}
	ghj11[0].onclick=function(){
		mmnn();
		ggghhh=mmnn;
	}

//鼠标悬浮
	hnm.onmouseover=function(){
		window.clearInterval(jkl123);
	}
	hnm.onmouseout=function(){
		jkl123=window.setInterval(ggghhh,sudu);
	}
//右轮 
	function mmnn(){
		if(flag){
			flag=false;
			animate(hnm,{left:-hjgk85},function(){
						var bhy1 =fy(hnm);
						hnm.appendChild(bhy1);
						hnm.style.left=0+'px';
						flag=true;
					});		
		}
		
	}
// 左轮
function bbbnnm(){
		if(flag){
			flag=false;
			var tyup=uu59q(hnm);
			var jjjjj=fy(hnm);
			hnm.insertBefore(tyup,jjjjj);
			hnm.style.left=-hjgk85+'px';
			animate(hnm,{'left':0},function(){
				flag=true;
			});
		}
		
	}
	
}



var jjj1=document.getElementsByClassName('k3');
var hnm=document.getElementsByClassName('k2')[0];
LB(hnm,jjj1,1500);



