var yao=document.querySelector(".yaoyao");
var yao1=document.querySelector(".yao1");
var yao2=document.querySelector(".yao2");
var bgcont=document.querySelector(".bgcont",yao);
var yanse=document.querySelector(".yanse",yao);
// console.log(yanse);

yao.addEventListener("touchstart",function(){
	// alert(1);
	yao1.style.display="none";
	yao2.style.display="block";
	yanse.style.color="#e0fc9f";
});
yao.addEventListener("touchend",function(){
	// alert(1);
	yao1.style.display="block";
	yao2.style.display="none";
	yanse.style.color="#a8d655";
});