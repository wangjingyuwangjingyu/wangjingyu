// 数据本身
// var dataarr=[
// 	{'id':'001','name':'dsfgdf,','pd':false},
// 	{'id':'002','name':'chdasjd','pd':false},
// 	{'id':'003','name':'gdfgsdf','pd':true},
// 	{'id':'004','name':'dfgdsfg','pd':false},
// 	{'id':'005','name':'dfgdsfg','pd':false},
// 	{'id':'006','name':'dfgdsfg','pd':false},
// 	{'id':'007','name':'dfgdsfg','pd':false}
// ]
var togo=getitem();
// 刷新函数
function reload(dataarr){
	var str1='';
	var str2='';
	var index1=0;
	var index2=0;
	for(var i=0;i<dataarr.length;i++){
		if(!dataarr[i].pd){
			index1++;
			str1+='<li>'+
				'<input type="checkbox"  n='+i+' class="check" complete onclick="ns('+i+');">'+
				'<p class="text" contenteditable onblur="xiugaishuju('+i+',this);">'+dataarr[i].id+'</p>'+
				'<a href="#" class="del" onclick="delete1('+i+',this);">-</a>'+
				'</li>';
		}else{
			index2++;
			str2+='<li>'+
				'<input type="checkbox" n='+i+' checked class="check" complete onclick="ns('+i+');">'+
				'<p class="text" contenteditable onblur="xiugaishuju('+i+');">'+dataarr[i].id+'</p>'+
				'<a href="#" class="del"  onclick="delete1('+i+',this);">-</a>'+
				'</li>'
		}
	}
	$('.nowul').html(str1);
	$('.now h2 span').html(index1);
	$('.completeul').html(str2);
	$('.complete h2 span').html(index2);
}


reload(togo);
// 添加数据
$('#add').on('keydown',function(e){
	if(e.keyCode==13&&$(this)[0].value){
			addfn($(this)[0].value);
			e.preventDefault();
			$(this)[0].value='';
	}
});

// 添加函数
function addfn(idx){
	var obj1={'id':idx,'name':'sdhgf','pd':false};
	togo.unshift(obj1);
	reload(togo);
}



// 数据修改1
function ns(i){
	togo[i].pd=!togo[i].pd;
	reload(togo);
}

// 数据修改2
function xiugaishuju(i,m){
	togo[i]['id']=m.innerHTML;
}

// 数据删除
function delete1(i,m){
	// 删除效果
	window.setTimeout(function(){
		m.style.transition='all 700ms';
		m.style.transform='scale(2)';
		m.style.opacity=0;
	},200);
	// 删除
	window.setTimeout(function(){
		togo.splice(i,1);
		reload(togo);
	},700);
	
}


// 本地存
function setitem(data){
	var data=JSON.stringify(data);
	localStorage.setItem('data',data);
}

// 本地取
function getitem(){
	var data=localStorage.getItem('data')||'[]';
	return JSON.parse(data);
}



// 获取浏览器关闭
var READYTOPROCESS = false;
window.onbeforeunload = function closeWindow(e)
{
    if (!READYTOPROCESS)
    {	
    	setitem(togo);
        var message = '你确定要关闭吗？',
            e = e || window.event;
        if (e)
            e.returnValue = message; // IE
        return message; // Safari
    }
};

