$(function(){
 	 $('#dowebok').fullpage({'navigation':'true','navigationTooltips':['登录百度舆情','领先:数据收集与处理','全面舆情分析逻辑与构架','专业:专业数据可视化']});
 	
 	 $('.btn').click(function(){
		$.fn.fullpage.moveSectionDown();
	});
}); 






// dendenglu


window.setInterval(fn,100);
function fn(){
	$('.section').each(function(){
		var pp=this.className;
		var pp=pp.split(' ');
		// 去字符串
		for(var i=0;i<pp.length;i++){
			if(pp[i]=='active'&&$(this).index()!=0){
				$('.dltext').css({'opacity':'1'});
			}else if(pp[i]=='active'&&$(this).index()==0){
				$('.dltext').css({'opacity':'0'});
			}
		}
	})
}