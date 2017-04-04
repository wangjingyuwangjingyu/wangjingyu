var d1=document.querySelector('.zz');
var yaoyao1=document.querySelector('#njimk');
var flag=true;
d1.onclick=function(){
	// location.href='index.html';
	d1.style.display='none';
	
	window.setTimeout(function(){
		yaoyao1.style.animation='donghua 0.1s infinite alternate';
	},200);
}
var d2=document.querySelector('.right');
d2.onclick=function(){
	var hhj=d1.style.display;
	if(hhj=='block'){
		d1.style.display='none';
	}else{
		d1.style.display='block';
	}	
}

var omp1=document.querySelector('#omp1');

var num1=0;
window.setInterval(function(){
	num1+=2;
	omp1.style.transform='rotate('+num1+'deg)';

	if(yaoyao1.style.animation){
		window.setTimeout(function(){
			yaoyao1.style.animation='';
			window.setTimeout(function(){
				location.href='grzx1.html';
			},200);
		},5000);
	}

},2);


