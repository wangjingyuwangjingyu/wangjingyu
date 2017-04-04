// 数据
var data=[
	{
		id:1,
		title:'新建1',
		todo:[
			{
				text:'上午9:00开会',
				wc:true
			},
			{
				text:'上午10:00开会',
				wc:true
			},
			{
				text:'下午3:00开会',
				wc:false
			},
			{
				text:'下午6:00开会',
				wc:true
			},
			{
				text:'晚上9:00开会',
				wc:false
			}
		]
	},
	{
		id:2,
		title:'新建2',
		todo:[
			{
				text:'上午9:00开会',
				wc:false
			},
			{
				text:'上午10:00开会',
				wc:true
			},
			{
				text:'下午3:00开会',
				wc:false
			},
			{
				text:'下午6:00开会',
				wc:true
			},
			{
				text:'晚上9:00开会',
				wc:false
			}
		]
	},
	{
		id:3,
		title:'新建3',
		todo:[
			{
				text:'上午9:00开会',
				wc:false
			},
			{
				text:'上午10:00开会',
				wc:true
			},
			{
				text:'下午3:00开会',
				wc:false
			},
			{
				text:'下午6:00开会',
				wc:true
			},
			{
				text:'晚上9:00开会',
				wc:false
			}
		]
	},
	{
		id:4,
		title:'新建4',
		todo:[
			{
				text:'上午9:00开会',
				wc:true
			},
			{
				text:'上午10:00开会',
				wc:true
			},
			{
				text:'下午3:00开会',
				wc:false
			},
			{
				text:'下午6:00开会',
				wc:false
			},
			{
				text:'晚上9:00开会',
				wc:false
			}
		]
	},
	{
		id:5,
		title:'新建5',
		todo:[
			{
				text:'上午9:00开会',
				wc:false
			},
			{
				text:'上午10:00开会',
				wc:true
			},
			{
				text:'下午3:00开会',
				wc:false
			},
			{
				text:'下午6:00开会',
				wc:true
			}
		]
	},
	{
		id:6,
		title:'新建6',
		todo:[
			{
				text:'上午9:00开会',
				wc:false
			},
			{
				text:'上午10:00开会',
				wc:true
			},
			{
				text:'下午3:00开会',
				wc:false
			},
			{
				text:'下午6:00开会',
				wc:true
			},
			{
				text:'晚上9:00开会',
				wc:false
			}
		]
	},
	{
		id:7,
		title:'新建7',
		todo:[
			{
				text:'上午9:00开会',
				wc:false
			},
			{
				text:'上午10:00开会',
				wc:true
			},
			{
				text:'下午3:00开会',
				wc:false
			},
			{
				text:'下午6:00开会',
				wc:true
			},
			{
				text:'晚上9:00开会',
				wc:false
			}
		]
	}
]
// 本地应用颜色
var colors=['#841DA3','#F6CA21','#F02871','#2EA91C','#1C65CB','#DE1C0F','#BC0A41'];
var app=angular.module('app',[]);
app.controller('c1',function($scope){
// 初始化
	$scope.data=data;
	$scope.colors=colors;
	$scope.flag=false;
	$scope.dataing={};
	$scope.num1=0;
	$scope.num2=0;
	$scope.se='#ccc';
	$scope.secun='';
	$scope.biancun="";
// 添加新建
$scope.add=function(){
	var id=$scope.data[$scope.data.length-1].id+1;
	var r=Math.floor(Math.random()*10);
	$scope.data.push({
		id:id,
		title:'新建'+id,
		todo:[
			{
				text:'上午'+r+':00开会',
				wc:false
			},
			{
				text:'上午'+r+':00开会',
				wc:true
			},
			{
				text:'下午'+r+':00开会',
				wc:false
			},
			{
				text:'下午'+r+':00开会',
				wc:true
			},
			{
				text:'晚上'+r+':00开会',
				wc:false
			}
		]
	});
	$scope.dataing=$scope.data[$scope.data.length-1];
	$scope.se=$scope.colors[id%7];
}
// 显示新建
$scope.show=function(id){
	$scope.num1=0;
	$scope.num2=0;
	$scope.se=$scope.colors[id%7];
	angular.forEach($scope.data,function(data,index){
		if(data.id==id){
			$scope.dataing=data;
		}
	});
	angular.forEach($scope.dataing.todo,function(data,index){
		if(data.wc){
			$scope.num1++;
		}else{
			$scope.num2++;
		}
	});
}
// 加入未完成
$scope.addj=function(k){
	$scope.num2++;
	$scope.num1--;
	var num=0;
	angular.forEach($scope.dataing.todo,function(data,index){
		if(data.wc){
			if(num==k){
				var xixi=$scope.dataing.id;
				for(var i=0;i<=$scope.data.length;i++){
					if($scope.data[i].id==xixi){
						$scope.data[i].todo[index].wc=false;
						$scope.dataing.todo[index].wc=false;
					}
				}
			}
			num++;
		}
	});
}
// 加入完成
$scope.del=function(k){
	$scope.num2--;
	$scope.num1++;
	var num=0;
	angular.forEach($scope.dataing.todo,function(data,index){
		if(!data.wc){
			if(num==k){
				var xixi=$scope.dataing.id;
				for(var i=0;i<=$scope.data.length;i++){
					if($scope.data[i].id==xixi){
						$scope.data[i].todo[index].wc=true;
						$scope.dataing.todo[index].wc=true;
					}
				}
			}
			num++;
		}
	});
}
// 增加未完成
$scope.addxian=function(){
	var id=$scope.dataing.id;
	angular.forEach($scope.data,function(data,index){
		if(id==data.id){
			var r=Math.floor(Math.random()*10);
			$scope.data[index].todo.push({
				text:'晚上'+r+':00开会',
				wc:false
			});
		}
	});
	$scope.num2++;
}
// 选色
$scope.xuanse=function(v,k){
	$scope.se=v;
}
// 修改文字内容
$scope.xieru=function(v,k,e){
	var num=0;
	angular.forEach($scope.dataing.todo,function(data,index){
		if(data.wc){
			if(num==k){
				var xixi=$scope.dataing.id;
				for(var i=0;i<=$scope.data.length;i++){
					if($scope.data[i].id==xixi){
						$scope.data[i].todo[index].text=e.innerText;
					}
				}
			}
			num++;
		}
	});
}
//修改文字内容
$scope.xieru1=function(v,k,e){
	var num=0;
	angular.forEach($scope.dataing.todo,function(data,index){
		if(!data.wc){
			if(num==k){
				var xixi=$scope.dataing.id;
				for(var i=0;i<=$scope.data.length;i++){
					if($scope.data[i].id==xixi){
						$scope.data[i].todo[index].text=e.innerText;
					}
				}
			}
			num++;
		}
	});
}
// 删除
$scope.delete=function(){
	var id=$scope.dataing.id-1;
	$scope.data.splice(id,1);
	$scope.dataing={};
	$scope.flag=false;
}
// 完成
$scope.f2=function(){
	$scope.data.title=$scope.biancun;
	$scope.dataing.title=$scope.biancun;
	angular.forEach($scope.colors,function(data,index){
		if($scope.se==data){
			var index=index+1;
		}
	});

	$scope.flag=false;
}
// 点击跳转
$scope.tiao=function(id){
}
// 点击效果
$scope.fnn=function(target){
	$scope.flag=true;
	$scope.biancun=$scope.dataing.title;
}
$scope.none=function(){
	var id=$scope.dataing.id;
	$scope.se=$scope.colors[id%7];
	$scope.flag=false;
}
});

