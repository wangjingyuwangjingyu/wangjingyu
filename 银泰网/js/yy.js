// 图片退闪
var q1=document.getElementsByClassName('j15')[0];
q1.onmouseover=function(e){
	e.stopPropagation();
	animate(q1,{left:985},300);
}
q1.onmouseout=function(e){
	e.stopPropagation();
	animate(q1,{left:990},300);
}



// barder图片及背景图片轮播
var q2=document.getElementsByClassName('jku1');
var q3=document.getElementsByClassName('j11')[0];
var q4=document.getElementsByClassName('j12');
var q5=document.getElementsByClassName('jj1')[0];
var q6=document.getElementsByTagName('li');
var q9=document.getElementsByClassName('j13')[0];
var q7=document.getElementsByClassName('jjj1')[0];
var num=0;
var newarr=[];
var flag=true;
var q8=document.getElementsByClassName('jj2');
for(var i=0;i<q8.length;i++){
	q8[i].style.display='none';
}
q9.onmouseover=function(){
	for(var i=0;i<q8.length;i++){
		q8[i].style.display='block';
	}
}
q9.onmouseout=function(){
	for(var i=0;i<q8.length;i++){
		q8[i].style.display="none";
	}
}

q7.onmouseover=function(e){
	e.stopPropagation();
}
q7.onmouseout=function(e){
	e.stopPropagation();
}



q8[0].onclick=function(){
	mnbp();
	flag=false;
}
q8[1].onclick=function(){
	mmnnn();
	flag=false;
}
var ppt=window.setInterval(mmnnn,2000);
function mnbp(){
	if(flag){
			num--;
		for(var i=0;i<q2.length;i++){
			q2[i].style.opacity=0;
		}
		for(var l=0;l<q4.length;l++){
			q4[l].style.opacity=0;
		}
		for(var i=0;i<newarr.length;i++){
			newarr[i].style.background='';
		}
		if(num<0){
			num=q2.length-1;
		}
		newarr[num].style.background='#E5004F';
		animate(q4[num],{opacity:1});
		animate(q2[num],{opacity:1},function(){
			flag=true;
		});
	}
}





for(var i=0;i<q6.length;i++){
	if(q6[i].parentNode==q7){
		newarr[newarr.length]=q6[i];
	}
}

for(var i=0;i<q2.length;i++){
	q2[i].style.opacity=0;
}
newarr[0].style.background='#E5004F';
q2[0].style.opacity=1;
q4[0].style.opacity=1




function mmnnn(){
	if(flag){
			num++;
		for(var i=0;i<q2.length;i++){
			q2[i].style.opacity=0;
		}
		for(var l=0;l<q4.length;l++){
			q4[l].style.opacity=0;
		}
		for(var i=0;i<newarr.length;i++){
			newarr[i].style.background='';
		}
		if(num>=q2.length){
			num=0;
		}
		newarr[num].style.background='#E5004F';
		animate(q4[num],{opacity:1});
		animate(q2[num],{opacity:1},function(){
			flag=true;
		});
	}
}
q3.onmouseover=function(){
		window.clearInterval(ppt);

}
q3.onmouseout=function(){
		ppt=window.setInterval(mmnnn,2000);
}
for(var b=0;b<newarr.length;b++){
	newarr[b].indexss=b;
	newarr[b].onmouseover=function(){
			num=this.indexss-1;
	}
}







// 图片加载技术
var qq10=document.getElementsByClassName('mmm2');

var qq0=document.getElementsByClassName('img111');
var qq1=document.getElementsByClassName('img112');
var qq2=document.getElementsByClassName('img113');
var qq3=document.getElementsByClassName('img114');
var qq4=document.getElementsByClassName('img115');
var qq5=document.getElementsByClassName('img116');
var qq6=document.getElementsByClassName('img117');
var qq7=document.getElementsByClassName('img118');
var qq8=document.getElementsByClassName('img119');
var aaxxs1=document.getElementsByClassName('nml2');
var aaxxs=document.getElementsByClassName('nml1')[0];
var arrs=[];
arrs[0]=qq0;
arrs[1]=qq1;
arrs[2]=qq2;
arrs[3]=qq3;
arrs[4]=qq4;
arrs[5]=qq5;
arrs[6]=qq6;
arrs[7]=qq7;
arrs[8]=qq8;
var uu=document.getElementsByClassName('nml3');
var uyp=document.getElementsByClassName('nxxss');
// 保存所有的距离


var arr1=[];
for(var i=0;i<qq10.length;i++){
	arr1[i]=qq10[i].offsetTop;
}


for(var i=0;i<uu.length;i++){
	uu[i].style.display='none';
}
window.onscroll=function(){
var aa=document.body.scrollTop;
var aa1=document.documentElement.clientHeight;
var sum=aa+aa1;
			
			for(var i=0;i<arr1.length;i++){
				if(sum>=arr1[i]+400){
					for(var bb=0;bb<aaxxs1.length-1;bb++){
						uu[bb].style.display='none';
					}
					for(var b=0;b<aaxxs1.length;b++){
						aaxxs1[b].style.background='';
					}
				aaxxs1[i].style.background='#E5004F';
				uu[i].style.display='block';


			for(var j=0;j<qq0.length;j++){
				var mmp=arrs[i];
				mmp[j].src=mmp[j].getAttribute('aa');
			}
		}
	}
	if(sum>=arr1[0]){
		aaxxs.style.display='block';
	}
	if(sum<arr1[0]){
		aaxxs.style.display='none';
	}
}

for(var i=0;i<uyp.length;i++){
		uyp[i].indexsss=i;
		uyp[i].onclick=function(){
			animate(document.body,{scrollTop:arr1[this.indexsss]-133});
		}
		uyp[i].onmouseover=function(){
			aaxxs1[this.indexsss].style.background='#E5004F';
			uu[this.indexsss].style.display='block';
		}
		uyp[i].onmouseout=function(){
			aaxxs1[this.indexsss].style.background='';
			uu[this.indexsss].style.display='none';
	}

}

uyp[uyp.length-1].onclick=function(){
	animate(document.body,{scrollTop:0});
}



// 尾部效果
var g1=document.getElementsByClassName('ty2');
g1[0].onmouseover=function(){
	g1[0].style.backgroundPositionY=-164+'px';
	g1[0].style.opacity=0.7;
}
g1[0].onmouseout=function(){
	g1[0].style.backgroundPositionY=0+'px';
	g1[0].style.opacity=1;
}
g1[1].onmouseover=function(){
	g1[1].style.backgroundPositionY=-165+'px';
	g1[1].style.opacity=0.7;
}
g1[1].onmouseout=function(){
	g1[1].style.backgroundPositionY=0+'px';
	g1[1].style.opacity=1;
}
g1[2].onmouseover=function(){
	g1[2].style.opacity=0.7;
}
g1[2].onmouseout=function(){
	g1[2].style.opacity=1;
}
var ppp123=document.getElementsByClassName('jk123');
for(var n=0;n<ppp123.length;n++){
	ppp123[n].indexsss=n;
	ppp123[n].onmouseover=function(){
		ppp123[this.indexsss].style.color='#EB1F2A';
	}
	ppp123[n].onmouseout=function(){
		ppp123[this.indexsss].style.color='';
	}
}


var jm11=document.getElementsByClassName('jm11');
for(var n=0;n<jm11.length;n++){
	jm11[n].indexsss=n;
	jm11[n].onmouseover=function(){
		jm11[this.indexsss].style.color='#EB1F2A';
	}
	jm11[n].onmouseout=function(){
		jm11[this.indexsss].style.color="";
	}
}





var bml=document.getElementsByClassName('mn1');
for(var n=0;n<bml.length;n++){
	bml[n].indexsss=n;
	bml[n].onmouseover=function(){
		bml[this.indexsss].style.background='#E5004F';
		bml[this.indexsss].style.color='#fff';
	}
	bml[n].onmouseout=function(){
		bml[this.indexsss].style.background='';
		bml[this.indexsss].style.color='';
	}
	bml[n].style['cursor']='pointer';
}

var jp=document.getElementsByClassName('nu56');
var klo=document.getElementsByClassName('op198');
for(var i=0;i<jp.length;i++){
	jp[i].indexsss=i;
	jp[i].style['cursor']='pointer';
	jp[i].onmouseover=function(){
		jp[this.indexsss].style.color='#E5004F';
		klo[this.indexsss].style.display='block';
	}
	jp[i].onmouseout=function(){
		jp[this.indexsss].style.color='';
		klo[this.indexsss].style.display='none';
	}
}
var ujk=document.getElementsByClassName('klp1');
for(var i=0;i<ujk.length;i++){
	ujk[i].indexsss=i;
	ujk[i].onmouseover=function(){
		ujk[this.indexsss].style.color='#E5004F';
	}
	ujk[i].onmouseout=function(){
		ujk[this.indexsss].style.color=''
	}
}


var nhj=document.getElementsByClassName('nk985');
for(var i=0;i<nhj.length;i++){
	nhj[i].indexsss=i;
	nhj[i].onmouseover=function(){
		nhj[this.indexsss].style['text-decoration']='underline';
	}
	nhj[i].onmouseout=function(){
		nhj[this.indexsss].style['text-decoration']='';
	}
}



var bhuy7=document.getElementsByClassName('jm12')[0];
var mk56=document.getElementsByClassName('jmmmm')[0];
mk56.onmouseover=function(){
	bhuy7.style.display='block';
}

mk56.onmouseout=function(){
	bhuy7.style.display='none';
}

var mlop=document.getElementsByClassName('lom1');
for(var i=0;i<mlop.length;i++){
	mlop[i].indexsss=i;
	mlop[i].onmouseover=function(){
		mlop[this.indexsss].style.color='#E5004F';
	}
	mlop[i].onmouseout=function(){
		mlop[this.indexsss].style.color='';	
	}
}

var hj1=document.getElementsByClassName('ml');
var hj2=document.getElementsByClassName('ppp12');
var hj3=document.getElementsByClassName('ppp3');
for(var h=0;h<hj2.length;h++){
	hj2[h].indexsss=h;
	hj2[h].onmouseover=function(){
		hj2[this.indexsss].style.opacity=0.7;
	}
	hj2[h].onmouseout=function(){
		hj2[this.indexsss].style.opacity=1;
	}
}
for(var h=0;h<hj1.length;h++){
	hj1[h].indexsss=h;
	hj1[h].onmouseover=function(){
		hj1[this.indexsss].style.opacity=0.7;
	}
	hj1[h].onmouseout=function(){
		hj1[this.indexsss].style.opacity=1;
	}
}
hj3[0].onmouseover=function(){
	hj3[0].style.opacity=0.7;
}
hj3[0].onmouseout=function(){
	hj3[0].style.opacity=1;
}








var huj23=document.getElementsByClassName('o10');
huj23[0].style['font-weight']='bold';







var hu564=document.getElementsByClassName('o11');
var hu563=document.getElementsByClassName('oop1');
var hu5621=document.getElementsByClassName('o5');
for(var h=0;h<hu564.length;h++){
	hu564[h].indexsss=h;
	hu564[h].onmouseover=function(){
		for(var g=0;g<hu563.length;g++){
			hu563[g].style.display='none';
		}
		for(var g=0;g<hu5621.length;g++){
			hu5621[g].style.display='none';
		}
		for(var g=0;g<hu5621.length;g++){
			hu564[g].style['font-weight']='';
		}
		hu563[this.indexsss].style.display='block';
		hu5621[this.indexsss].style.display='block';
		hu564[this.indexsss].style['font-weight'] ='bold';
	}
}



var jn=document.getElementsByClassName('op16');
var jnk=document.getElementsByClassName('mq1');
var jnkk=document.getElementsByClassName('ppp6');
for(var k=0;k<jn.length;k++){
	jn[k].style.display='none';
}
for(var k=0;k<jnkk.length;k++){
	jnkk[k].style.display='none';
}
jnkk[0].style.display='block';
jn[0].style.display='block';
jnk[0].style['font-weight']='bold';
for(var k=0;k<jn.length;k++){	
	jnk[k].indexsss=k;
	jnk[k].onmouseover=function(){
		for(var k=0;k<jn.length;k++){
			jn[k].style.display='none';
		}
		for(var k=0;k<jnk.length;k++){
			jnk[k].style['font-weight']='';
		}
		for(var k=0;k<jnkk.length;k++){
			jnkk[k].style.display='none';
		}
		jnkk[this.indexsss].style.display='block';
		jn[this.indexsss].style.display='block';
		jnk[this.indexsss].style['font-weight']='bold';
	}
}




var nuuu=document.getElementsByClassName('mf');
var nuy1=document.getElementsByClassName('nmby21');
var nuy2=document.getElementsByClassName('nmby22');
var nuy3=document.getElementsByClassName('nmby23');
var nuy4=document.getElementsByClassName('nmby24');
for(var tg=0;tg<nuuu.length;tg++){
	nuuu[tg].indexsss=tg;
	nuuu[tg].onmouseover=function(){
		animate(nuy1[this.indexsss],{width:198});
		animate(nuy2[this.indexsss],{height:248});
		animate(nuy3[this.indexsss],{width:198});
		animate(nuy4[this.indexsss],{height:248});
	}
	nuuu[tg].onmouseout=function(){
		animate(nuy1[this.indexsss],{width:0});
		animate(nuy2[this.indexsss],{height:0});
		animate(nuy3[this.indexsss],{width:0});
		animate(nuy4[this.indexsss],{height:0});
	}
}











var tyup2=document.getElementsByClassName('mmm6');
var tyup1=document.getElementsByClassName('mmka1');
var tyup3=document.getElementsByClassName('mmka2');
var tyup4=document.getElementsByClassName('mmka3');
var tyup5=document.getElementsByClassName('mmka4');
for(var c=0;c<tyup2.length;c++){
	tyup2[c].indexsss=c;
	tyup2[c].onmouseover=function(){
		animate(tyup1[this.indexsss],{width:272},500);
		animate(tyup3[this.indexsss],{height:182},500)
		animate(tyup4[this.indexsss],{width:272},500);
		animate(tyup5[this.indexsss],{height:182},500);
	}
	tyup2[c].onmouseout=function(){
		animate(tyup1[this.indexsss],{width:0},200);
		animate(tyup3[this.indexsss],{height:0},200)
		animate(tyup4[this.indexsss],{width:0},200);
		animate(tyup5[this.indexsss],{height:0},200);
	}
}


var kp=document.getElementsByClassName('kp678');
for(var u=0;u<kp.length;u++){
	kp[u].indexsss=u;
	kp[u].onmouseover=function(){
		kp[this.indexsss].style.opacity=0.7;
	}
	kp[u].onmouseout=function(){
		kp[this.indexsss].style.opacity=1;
	}
}

var nj=document.getElementsByClassName('nmv156');
var nj4=document.getElementsByClassName('nmv159');
var nj1=document.getElementsByClassName('lm1');
var nj3=document.getElementsByClassName('lm2');
var nj2=document.getElementsByClassName('mkjq56');
var njnnk=document.getElementsByClassName('ml89');
var njnnk1=document.getElementsByClassName('ml88');
for(var u=0;u<nj.length;u++){
	nj[u].style.left=390+'px';
}
for(var u=0;u<njnnk.length;u++){
	njnnk[u].style.background="#D4054A";
}

for(var u=0;u<nj2.length;u++){
	nj2[u].indexsss=u;
	nj2[u].onmouseover=function(){
		animate(nj1[this.indexsss],{left:0},100);
		animate(nj3[this.indexsss],{left:360},100);
		nj2[this.indexsss].style.opacity=0.9;
	}
	nj2[u].onmouseout=function(){
		animate(nj1[this.indexsss],{left:-30},150);
		animate(nj3[this.indexsss],{left:390},150);
		nj2[this.indexsss].style.opacity=1;
	}
	nj1[u].indexsss=u;
	nj1[u].onclick=function(){
		njnnk[this.indexsss].style.background='';
		njnnk1[this.indexsss].style.background='#D4054A';
		animate(nj4[this.indexsss],{left:-390},1000);
		animate(nj[this.indexsss],{left:0},1000);
	}
	nj3[u].indexsss=u;
	nj3[u].onclick=function(){
		njnnk1[this.indexsss].style.background='';
		njnnk[this.indexsss].style.background='#D4054A';
		animate(nj4[this.indexsss],{left:0},1000);
		animate(nj[this.indexsss],{left:390},1000);
	}
}




var pok3=document.getElementsByClassName('juk56');
var pok4=document.getElementsByClassName('jbuyp8');
var pok5=document.getElementsByClassName('jbuyp7');
var pp95=document.getElementsByClassName('opq23');
var pp96=document.getElementsByClassName('jk190');
var hju=document.getElementsByClassName('lnji89');
for(var i=0;i<pok3.length;i++){
	pok3[i].style.display='none';
	pok4[i].style.display='none';
	pok5[i].style.display='none';
}
for(var i=0;i<pp95.length;i++){
	pp95[i].indexsss=i;
	pp95[i].onmouseover=function(e){
		e.stopPropagation();
		pp95[this.indexsss].style.background='#E5004F';
		pp96[this.indexsss].style.backgroundPositionY=19+'px';
		pok3[this.indexsss].style.display='block';
		pok4[this.indexsss].style.display='block';
		pok5[this.indexsss].style.display='block';
	}
	pp95[i].onmouseout=function(e){
		e.stopPropagation();
		pp95[this.indexsss].style.background='';
		pp96[this.indexsss].style.backgroundPositionY='';
		pok3[this.indexsss].style.display='none';
		pok4[this.indexsss].style.display='none';
		pok5[this.indexsss].style.display='none';
	}
}
for(var i=0;i<hju.length;i++){
	hju[i].indexsss=i;
	hju[i].onmouseover=function(){
		hju[this.indexsss].style['text-decoration']='underline';
	}
	hju[i].onmouseout=function(){
		hju[this.indexsss].style['text-decoration']='';
	}
}









// 小图片轮播
function bbp16(xlbm){
	var next=0;
	var newww=0;
	for(var i=0;i<xlbm.length;i++){
		xlbm[i].style.left=75+'px';
	}
	xlbm[0].style.left=0+'px';
	var ss=window.setInterval(fnmm,5000);
	function fnmm(){
		next++;
		if(next>=xlbm.length){
			next=0;
		}
		xlbm[next].style.left=75+'px';
		animate(xlbm[newww],{left:-75});
		animate(xlbm[next],{left:0});
		newww=next;
	}
	$(xlbm[0]).parent().siblings('.mp1').click(function(){
		next--;
		if(next<0){
			next=xlbm.length-1	;
		}
		xlbm[next].style.left=-75+'px';
		animate(xlbm[newww],{left:75});
		animate(xlbm[next],{left:0});
		newww=next;
	});
	$(xlbm[0]).parent().siblings('.mp2').click(function(){
		fnmm();
	});


}
// 1
var xlbm=document.getElementsByClassName('byc1');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc2');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc3');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc4');
bbp16(xlbm);
// 2
$('.byc5').css({'position':'absolute'});
$('.byc6').css({'position':'absolute'});
$('.byc7').css({'position':'absolute'});
$('.byc8').css({'position':'absolute'});
var xlbm=document.getElementsByClassName('byc5');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc6');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc7');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc8');
bbp16(xlbm)
// 3
$('.byc13').css({'position':'absolute'});
$('.byc14').css({'position':'absolute'});
$('.byc15').css({'position':'absolute'});
$('.byc16').css({'position':'absolute'});
var xlbm=document.getElementsByClassName('byc13');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc14');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc15');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc16');
bbp16(xlbm);
// 4
$('.byc17').css({'position':'absolute'});
$('.byc18').css({'position':'absolute'});
$('.byc19').css({'position':'absolute'});
$('.byc20').css({'position':'absolute'});
var xlbm=document.getElementsByClassName('byc17');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc18');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc19');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc20');
bbp16(xlbm)





// 5
$('.byc21').css({'position':'absolute'});
$('.byc22').css({'position':'absolute'});
$('.byc23').css({'position':'absolute'});
$('.byc24').css({'position':'absolute'});
var xlbm=document.getElementsByClassName('byc21');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc22');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc23');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc24');
bbp16(xlbm)
// 6
$('.byc25').css({'position':'absolute'});
$('.byc26').css({'position':'absolute'});
$('.byc27').css({'position':'absolute'});
$('.byc28').css({'position':'absolute'});
var xlbm=document.getElementsByClassName('byc25');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc26');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc27');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc28');
bbp16(xlbm)
// 7
$('.byc29').css({'position':'absolute'});
$('.byc30').css({'position':'absolute'});
$('.byc31').css({'position':'absolute'});
$('.byc32').css({'position':'absolute'});
var xlbm=document.getElementsByClassName('byc29');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc30');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc31');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc32');
bbp16(xlbm)
// 8
$('.byc33').css({'position':'absolute'});
$('.byc34').css({'position':'absolute'});
$('.byc35').css({'position':'absolute'});
$('.byc36').css({'position':'absolute'});
var xlbm=document.getElementsByClassName('byc33');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc34');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc35');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc36');
bbp16(xlbm)
// 9
$('.byc37').css({'position':'absolute'});
$('.byc38').css({'position':'absolute'});
$('.byc39').css({'position':'absolute'});
$('.byc40').css({'position':'absolute'});
var xlbm=document.getElementsByClassName('byc37');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc38');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc39');
bbp16(xlbm);
var xlbm=document.getElementsByClassName('byc40');
bbp16(xlbm)


$('.mp1').css('cursor','pointer');
$('.mp2').css('cursor','pointer');
