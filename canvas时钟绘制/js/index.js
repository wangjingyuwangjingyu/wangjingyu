var content=document.querySelector('#can');
var o=content.getContext('2d');
can.width=600;
can.height=600;
o.lineCap='round';
o.translate(300,300);
// 时
function hhh(){
	for(var i=0;i<12;i++){
		x=Math.sin(Math.PI/180*30*i)*235;
		y=Math.cos(Math.PI/180*30*i)*235;
		x1=Math.sin(Math.PI/180*30*i)*210;
		y1=Math.cos(Math.PI/180*30*i)*210;
		o.beginPath();
		o.lineWidth=7;
		o.moveTo(x1,y1);
		o.lineTo(x,y);
		o.strokeStyle="#000";
		o.stroke();
		o.closePath();
	}
}
// 分
function mmm(){
	for(var i=0;i<60;i++){
		x=Math.sin(Math.PI/180*6*i)*225;
		y=Math.cos(Math.PI/180*6*i)*225;
		x1=Math.sin(Math.PI/180*6*i)*210;
		y1=Math.cos(Math.PI/180*6*i)*210;
		o.beginPath();
		o.lineWidth=7;
		o.moveTo(x1,y1);
		o.lineTo(x,y);
		o.strokeStyle="#000";
		o.stroke();
		o.closePath();
	}
}
mmm();
hhh();
// 文字
function text(){
	for(var i=1;i<=12;i++){
		x=Math.sin(-Math.PI/180*30*i-Math.PI)*280;
		y=Math.cos(-Math.PI/180*30*i-Math.PI)*280;
		var str=i+'';
		o.font='50px 宋体';
		o.textBaseline='bottom';
		if(i%3==0){
			o.fillStyle='red';
		}else{
			o.fillStyle='blue';
		}
		o.fillText(str,x-15,y+22);
	}
	o.beginPath();
	o.arc(0,0,250,0,Math.PI*2,0);
	o.lineWidth=5;
	o.stroke();
	o.closePath();
}

text();
var t1=window.setInterval(fn,1000);
function fn(){
	var date=new Date();
	var hour=date.getHours();
	var minutes=date.getMinutes();
	var seconds=date.getSeconds();
	hx=Math.sin(-Math.PI-Math.PI/180*30*hour)*80;
	hy=Math.cos(-Math.PI-Math.PI/180*30*hour)*80;
	mx=Math.sin(-Math.PI-Math.PI/180*6*minutes)*150;
	my=Math.cos(-Math.PI-Math.PI/180*6*minutes)*150;
	sx=Math.sin(-Math.PI-Math.PI/180*6*seconds)*200;
	sy=Math.cos(-Math.PI-Math.PI/180*6*seconds)*200;
	o.clearRect(-can.width/2,-can.height/2,can.width,can.width);

	mmm();
	hhh();
	text();

	o.beginPath();
	o.moveTo(0,0);
	o.lineWidth=10;
	o.strokeStyle='#000';
	o.lineTo(hx,hy);
	o.stroke();
	o.closePath();

	o.beginPath();
	o.moveTo(0,0);
	o.lineTo(mx,my);
	o.lineWidth=5;
	o.strokeStyle='#000';
	o.stroke();
	o.closePath();


	o.beginPath();
	o.moveTo(0,0);
	o.lineTo(sx,sy);
	o.strokeStyle='red';
	o.lineWidth=2;
	o.stroke();
	o.closePath();

	o.beginPath();
	o.arc(0,0,10,0,Math.PI*2,0);
	o.fillStyle='#adb';
	o.lineWidth=2;
	o.stroke();
	o.fill();
	o.closePath();
}
fn();

