


function hb(can,o){
	this.can=can;
	this.o=o;
	this.imgs=[];
	this.colors='#fff';
	this.type='stroke';
	this.num=5;
	this.delarr=[];
	this.xk=1;
	this.dxwh=20;
	this.neijiao=10;
	this.cx=0;
	this.cy=0;
}
// 事件
hb.prototype.sjfz=function(huidiao1,huidiao2,huidiao3){
	var self=this;
	this.can.onmousedown=function(e){
		var cx=e.offsetX;
		var cy=e.offsetY;
		var mx1,my1;
		self.o.lineWidth=self.xk;
		self.o.fillStyle=self.colors;
		self.o.strokeStyle=self.colors;
		huidiao1(self,cx,cy);
		self.can.onmousemove=function(e){
			var mx=e.offsetX;
			var my=e.offsetY;
			mx1=mx;
			my1=my;
			// 回调函数
			huidiao2(self,cx,cy,mx,my);
		}
		self.can.onmouseup=function(e){
			huidiao3(self,cx,cy,mx1,my1);
			self.imgs.push(self.o.getImageData(0,0,self.can.width,self.can.height));
			self.can.onmousemove=null;
			self.o.onmouseup=null;
		}
	}
};
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 工具 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// 画线
hb.prototype.line=function(){
	this.sjfz(function(self,cx,cy){
	},function(self,cx,cy,mx,my){
		self.o.clearRect(0,0,self.can.width,self.can.height);
		if(self.imgs.length){
			console.dir(self.imgs);
			self.o.putImageData(self.imgs[self.imgs.length-1],0,0,0,0,self.can.width,self.can.height);
		}
		self.o.beginPath();
		self.o.moveTo(cx,cy);
		self.strokeStyle='blue';
		self.o.lineTo(mx,my);
		self.o.fillStyle=self.colos;
		self.o.strokeStyle=self.colos;
		self.o[self.type]();
		self.o.closePath();
	},function(self,cx,cy,mx,my){
		
	});
};
// 画矩形
hb.prototype.rect=function(){
	this.sjfz(function(self,cx,cy){

	},function(self,cx,cy,mx,my){
		self.o.clearRect(0,0,self.can.width,self.can.height);
		if(self.imgs.length){
			console.dir(self.imgs);
			self.o.putImageData(self.imgs[self.imgs.length-1],0,0,0,0,self.can.width,self.can.height);
		}
		self.o.beginPath();
	
		self.o.rect(cx,cy,mx-cx,my-cy);

		self.o.fillStyle=self.colos;
		self.o.strokeStyle=self.colos;
		self.o[self.type]();
		self.o.closePath();
	},function(self,cx,cy,mx,my){

	});
}
// 画三角形
hb.prototype.triangle=function(){
	this.sjfz(function(self,cx,cy){

	},function(self,cx,cy,mx,my){

		self.o.clearRect(0,0,self.can.width,self.can.height);
		if(self.imgs.length){
			console.dir(self.imgs);
			self.o.putImageData(self.imgs[self.imgs.length-1],0,0,0,0,self.can.width,self.can.height);
		}
		self.o.beginPath();
	
		self.o.moveTo(cx,cy);
		self.o.lineTo(mx,my);
		self.o.lineTo(cx,my);
		self.o.lineTo(cx,cy);

		self.o.fillStyle=self.colos;
		self.o.strokeStyle=self.colos;
		self.o[self.type]();
		self.o.closePath();

	},function(self,cx,cy,mx,my){

	});
}

// 画圆形
hb.prototype.radio=function(){
	this.sjfz(function(self,cx,cy){

	},function(self,cx,cy,mx,my){

		self.o.clearRect(0,0,self.can.width,self.can.height);
		if(self.imgs.length){
			console.dir(self.imgs);
			self.o.putImageData(self.imgs[self.imgs.length-1],0,0,0,0,self.can.width,self.can.height);
		}
		self.o.beginPath();
		self.o.arc(cx,cy,Math.sqrt(Math.pow(mx-cx,2)+Math.pow(my-cy,2)),0,Math.PI*2,0);

		self.o.fillStyle=self.colos;
		self.o.strokeStyle=self.colos;
		self.o[self.type]();
		self.o.closePath();

	},function(self,cx,cy,mx,my){
	});
}
// 画铅笔
hb.prototype.pen=function(){
	this.sjfz(function(self,cx,cy){
		self.o.beginPath();
		self.o.moveTo(cx,cy);
	},function(self,cx,cy,mx,my){

		self.o.clearRect(0,0,self.can.width,self.can.height);
		if(self.imgs.length){
			console.dir(self.imgs);
			self.o.putImageData(self.imgs[self.imgs.length-1],0,0,0,0,self.can.width,self.can.height);
		}
		
		self.o.lineTo(mx,my);

		self.o.fillStyle=self.colos;
		self.o.strokeStyle=self.colos;
		self.o[self.type]();

	},function(self,cx,cy,mx,my){
		self.o.closePath();
	});
}
// 画多边
hb.prototype.polygon=function(num){
	this.sjfz(function(self,cx,cy){
		
	},function(self,cx,cy,mx,my){

		self.o.clearRect(0,0,self.can.width,self.can.height);
		if(self.imgs.length){
			self.o.putImageData(self.imgs[self.imgs.length-1],0,0,0,0,self.can.width,self.can.height);
		}
		self.o.beginPath();
		
		var r=Math.sqrt(Math.pow(mx-cx,2)+Math.pow(my-cy,2));
		var angle=360/num;

		for(var i=0;i<=num;i++){
			var hd=Math.PI/180*angle*i+Math.PI/180*(-mx);
			var y=Math.sin(hd)*r;
			var x=Math.cos(hd)*r;
			self.o.lineTo(x+cx,y+cy);
		}
		self.o.fillStyle=self.colos;
		self.o.strokeStyle=self.colos;
		self.o.closePath();
		self.o[self.type]();

	},function(self,cx,cy,mx,my){
	});
}
// 多边心形
hb.prototype.xing=function(){
	this.sjfz(function(self,cx,cy){
	},function(self,cx,cy,mx,my){
		self.o.clearRect(0,0,self.can.width,self.can.height);
		if(self.imgs.length){
			self.o.putImageData(self.imgs[self.imgs.length-1],0,0,0,0,self.can.width,self.can.height);
		}
		self.o.beginPath();
		var r=Math.sqrt(Math.pow(mx-cx,2)+Math.pow(my-cy,2));
		var angle=360/(self.num*2);
		var x=0,y=0;
		for(var i=0;i<=(self.num*2);i++){
			var hd=Math.PI/180*angle*i+Math.PI/180*(-mx);
			if(i%2==0){
				y=Math.sin(hd)*r;
				x=Math.cos(hd)*r;
			}else{
				y=Math.sin(hd)*(r-self.neijiao);
				x=Math.cos(hd)*(r-self.neijiao);
			}
			self.o.lineTo(x+cx,y+cy);
		}
		self.o.fillStyle=self.colos;
		self.o.strokeStyle=self.colos;
		self.o.closePath();
		self.o[self.type]();

	},function(self,cx,cy,mx,my){
	});
}
// 撤销
hb.prototype.cx=function(){
	if(!this.imgs.length){
		this.o.clearRect(0,0,this.can.width,this.can.height);
		return;
	}
	this.delarr.push(this.imgs[this.imgs.length-1]);
	this.imgs.length=this.imgs.length-1;
	if(!this.imgs.length){
		this.o.clearRect(0,0,this.can.width,this.can.height);
		return;
	}
	this.o.putImageData(this.imgs[this.imgs.length-1],0,0,0,0,this.can.width,this.can.height);
}
// 恢复
hb.prototype.hf=function(){
	if(!this.delarr.length){
		return;
	}
	this.imgs.push(this.delarr[this.delarr.length-1]);
	this.o.putImageData(this.delarr[this.delarr.length-1],0,0,0,0,this.can.width,this.can.height);
	this.delarr.length=this.delarr.length-1;
}
// 橡皮
hb.prototype.xp=function(){
	var self=this;
	var el=document.querySelector('.el');
	el.style.display='block';

	document.querySelector('body').onkeydown=function(e){
		var code=e.keyCode;
		// console.dir(code);
		if(code==107&&el){
			self.dxwh+=1;
			el.style.width=self.dxwh+'px';
			el.style.height=self.dxwh+'px';

			self.o.rect(self.cx-self.dxwh/2,self.cy-self.dxwh/2,self.dxwh,self.dxwh);
		}
		if(code==109&&el){
			self.dxwh-=1;
			el.style.width=self.dxwh+'px';
			el.style.height=self.dxwh+'px';

			self.o.rect(self.cx-self.dxwh/2,self.cy-self.dxwh/2,self.dxwh,self.dxwh);
		}
	}


	document.querySelector('body').onmousemove=function(e){
		var yuan=e.target;
		var ox=e.offsetX;
		var oy=e.offsetY;
		if(el){
			el.style.top=oy+45+'px';
			el.style.left=ox+95+'px';
		}
	}
	this.sjfz(function(self,cx,cy){
		self.o.clearRect(cx-self.dxwh/2,cy-self.dxwh/2,self.dxwh,self.dxwh);
	},function(self,cx,cy,mx,my){
		self.o.clearRect(mx-self.dxwh/2,my-self.dxwh/2,self.dxwh,self.dxwh);
	},function(){
	});
}
// 颜色生成器
hb.prototype.ysq=function(){
	var m1=document.querySelector('.m1');
	for(var i=0;i<=255;i+=25){
		for(var j=0;j<=255;j+=25){
			for(var k=0;k<=255;k+=25){
					var d1=document.createElement('div');
					d1.className='dd1';
					var r1=Math.floor(Math.random()*256);
					var r2=Math.floor(Math.random()*256);
					var r3=Math.floor(Math.random()*256);
					d1.colors='rgb('+r1+','+r2+','+r3+')';
					d1.style.background='rgb('+r1+','+r2+','+r3+')';
					m1.appendChild(d1);
			}
		}
	}

}



