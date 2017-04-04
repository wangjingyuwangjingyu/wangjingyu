function Tetris(){
		this.bgWidth=400;
		this.bgHeight=500;
		this.bgcolor='black';
		this.UnitColor='white';
		this.UnitWidth=19;
		this.UnitHeight=19;
		this.allchange=[[{x:8,y:1},{x:9,y:0},{x:8,y:0},{x:9,y:1},{x:0,y:0}],//方块  
					   [{x:9,y:0},{x:9,y:1},{x:9,y:2},{x:9,y:3},{x:9,y:1}],//长条
					   [{x:10,y:0},{x:10,y:2},{x:10,y:1},{x:11,y:2},{x:10,y:1}],//L型
					   [{x:9,y:0},{x:9,y:1},{x:8,y:1},{x:10,y:1},{x:9,y:1}],//山型
					   [{x:11,y:0},{x:11,y:2},{x:11,y:1},{x:10,y:2},{x:11,y:1}],//L相反型
					   [{x:10,y:0},{x:10,y:1},{x:9,y:1},{x:9,y:2},{x:10,y:1}],//S型
					   [{x:9,y:0},{x:9,y:1},{x:10,y:1},{x:10,y:2},{x:9,y:1}]];//反S型
		  this.changeY=[[{y:0},{y:0},{y:1},{y:1}],//方块
					   [{y:0},{y:1},{y:2},{y:3}],//长条
					   [{y:0},{y:2},{y:1},{y:2}],//L型
					   [{y:0},{y:1},{y:1},{y:1}],//山型
					   [{y:0},{y:2},{y:1},{y:2}],//L相反型
					   [{y:0},{y:1},{y:1},{y:2}],//S型
					   [{y:0},{y:1},{y:1},{y:2}]];//反S型
		this.now;
		this.next;
		this.time;
		this.num=0;
		this.DownP=[];
		this.lins={};
	}
	// 开始
	Tetris.prototype={
		play:function(){
			this.randomNum();
			this.drawbg();

			this.drawDiamond();
			this.nextt();
			this.move();
			this.Deformation();
			this.clearss();
		},
		//背景绘制
		drawbg:function(){
			$('<div>').css({width:this.bgWidth,height:this.bgHeight,background:this.bgcolor,margin:'0 auto',marginTop:50,borderTop:'1px solid black',borderLeft:'1px solid black'}).addClass('box').appendTo($('body'));
			for(var i=0;i<25;i++){
				for(var j=0;j<20;j++){
					$('<div>').css({width:this.UnitWidth,height:this.UnitHeight,background:'white',float:'left',marginRight:1,marginBottom:1}).attr('id',i+'_'+j).addClass('Diamond').appendTo($('.box'));
				}
			}
				
		},
		//随机数生成 选区定义图形的索引值
		randomNum:function(){
			var random=Math.floor(Math.random()*7);
			this.next=random;
		},
		//绘制下落元素
		drawDiamond:function(){
			this.now=this.now==undefined?3:this.now;
			$('.Diamond').css({background:'yellow'});
			
			for(var i=0;i<this.allchange[this.now].length-1;i++){
				var divs=document.getElementById(this.allchange[this.now][i].y+'_'+this.allchange[this.now][i].x);
				divs.style.background='red';
			}
			this.DownDraw();
		},

		move:function(){
			self=this;
			 self.time=setInterval(self.goon,200);
		},
		goon:function(){
			self.num++;
			
			var flag=false;
			for(var i=0;i<self.allchange[self.now].length-1;i++){
				var test=self.allchange[self.now][i].y+1;
				var checkedFlag=self.checked(self.allchange[self.now],self.DownP);
				if(test==25||checkedFlag){
					flag=true;
				}
			}
			if(flag){
				self.DownP[self.DownP.length]=self.allchange[self.now];
					self.clears();
					self.DownDraw();
					self.num=0;
					self.now=self.next;
					self.reset();
					return;
			}
			
			for(var i=0;i<self.allchange[self.now].length-1;i++){
				self.allchange[self.now][i].y+=1;
				self.drawDiamond();

			}
			
		},
		
		checked:function(now,all){
			for(var i=0;i<all.length;i++){
				for(var j=0;j<all[i].length-1;j++){
					var allyy=all[i][j].y;
					var allxx=all[i][j].x;
					for(var k=0;k<now.length-1;k++){
						var nowxx=now[k].x;
						var nowyy=now[k].y+1;
						if(nowxx==allxx&&nowyy==allyy){
							return true;
						}

					}
				}
			} 
			return false;
		},
		
		reset:function(){
			clearInterval(this.time);
			$('body').empty();
						this.allchange=[[{x:8,y:1},{x:9,y:0},{x:8,y:0},{x:9,y:1},{x:0,y:0}],//方块
					                   [{x:9,y:0},{x:9,y:1},{x:9,y:2},{x:9,y:3},{x:9,y:1}],//长条
					                   [{x:10,y:0},{x:10,y:2},{x:10,y:1},{x:11,y:2},{x:10,y:1}],//L型
					                   [{x:9,y:0},{x:9,y:1},{x:8,y:1},{x:10,y:1},{x:9,y:1}],//山型
					                   [{x:11,y:0},{x:11,y:2},{x:11,y:1},{x:10,y:2},{x:11,y:1}],//L相反型
					                   [{x:10,y:0},{x:10,y:1},{x:9,y:1},{x:9,y:2},{x:10,y:1}],//S型
					                   [{x:9,y:0},{x:9,y:1},{x:10,y:1},{x:10,y:2},{x:9,y:1}]];//反S型
					      this.changeY=[[{y:0},{y:0},{y:1},{y:1}],//方块
					                   [{y:0},{y:1},{y:2},{y:3}],//长条
					                   [{y:0},{y:2},{y:1},{y:2}],//L型
					                   [{y:0},{y:1},{y:1},{y:1}],//山型
					                   [{y:0},{y:2},{y:1},{y:2}],//L相反型
					                   [{y:0},{y:1},{y:1},{y:2}],//S型
					                   [{y:0},{y:1},{y:1},{y:2}]];//反S型
			this.play();
		},
		//显示下一次将要下落的元素
		nextt:function(){
			$('<div>').css({width:100,height:100,background:'black',borderTop:'1px solid black',borderLeft:'1px solid black',position:'absolute',top:50,left:890}).addClass('nextbox').appendTo($('body'));
			for(var i=0;i<5;i++){
				for(var j=0;j<5;j++){
					$('<div>').css({width:19,height:19,background:'white',float:'left',marginRight:1,marginBottom:1}).attr('id',i+'-'+j).appendTo($('.nextbox'));
				}
			}
			for(var k=0;k<this.allchange[this.next].length-1;k++){
				divss=document.getElementById((this.allchange[this.next][k].y+1)+'-'+(this.allchange[this.next][k].x-7))
					divss.style.background='blue';
			}		   
		},
		//变形
		Deformation:function(){
			self=this;
			document.onkeydown=function(e){
				var keys=e.keyCode;
				var newx;
				var newy;
				var newW=[];
				if(keys==38){
					if(self.now==0){
						return;
					}
					for(var i=0;i<self.allchange[self.now].length-1;i++){
						var BJX=self.allchange[self.now][4].x+self.allchange[self.now][4].y-self.changeY[self.now][i].y;
						var BJY=(self.allchange[self.now][4].y-self.allchange[self.now][4].x+self.allchange[self.now][i].x)+self.num;
							if(BJX<0||BJX>19||BJY<0||BJY>24){
								return;
							}
						}
					for(var i=0;i<self.allchange[self.now].length-1;i++){
						newx=self.allchange[self.now][4].x+self.allchange[self.now][4].y-self.changeY[self.now][i].y;
						newy=(self.allchange[self.now][4].y-self.allchange[self.now][4].x+self.allchange[self.now][i].x)+self.num;
						newchangeY=self.allchange[self.now][4].y-self.allchange[self.now][4].x+self.allchange[self.now][i].x;		
						self.allchange[self.now][i].x=newx;
						self.allchange[self.now][i].y=newy;	
						self.changeY[self.now][i].y=newchangeY;
					}
				}
				if(keys==39){
					for(var j=0;j<self.allchange[self.now].length-1;j++){					
						var BJR=self.allchange[self.now][j].x;
						BJR++;
						if(BJR<0||BJR>19){
							return;
						}
					}//预先生成下一步位置 判断是否合法 不合法return
					for(var i=0;i<self.allchange[self.now].length-1;i++){					
						self.allchange[self.now][i].x++;
					}
						self.allchange[self.now][4].x++;
				}
				if(keys==37){
					for(var j=0;j<self.allchange[self.now].length-1;j++){					
						var BJL=self.allchange[self.now][j].x;
						BJL--;
						if(BJL<0||BJL>19){
							return;
						}
					}//预先生成下一步位置 判断是否合法 不合法return
					for(var i=0;i<self.allchange[self.now].length-1;i++){
						self.allchange[self.now][i].x--;
					}
						self.allchange[self.now][4].x--;
				}
			}
		},
		DownDraw:function(){
			for(var k in this.lins){
				for(var m=0;m<this.lins[k].length;m++){
					var divss=document.getElementById(this.lins[k][m].y+'_'+this.lins[k][m].x);
					divss.style.background='black';
				}
			}
		},
		clears:function(){
			for(var i=0;i<this.DownP.length;i++){
				for(var j=0;j<this.DownP[i].length-1;j++){
					var zancun=this.DownP[i][j].y;
					if(!(this.lins[zancun])){
						this.lins[zancun]=[];
					}
					this.lins[zancun].push(this.DownP[i][j]);	
				}
			}
			for(var k in this.lins){
				if(this.lins[k].length==20){
					for(var l=0;l<20;l++){
						this.lins[k][l];
					}
				}
			}
			console.log(this.lins)
		},
		clearss:function(){
			var indexflag=false;
			var colorarr=[];
			var self=this;
			window.setInterval(function(){
				for(var i=0;i<25;i++){
					colorarr=[];
					var shanchui=i;
					indexflag=false;
					for(var j=0;j<20;j++){
						var divss=document.getElementById(i+'_'+j);
						var color=divss.style.backgroundColor;
						colorarr.push(color);
					}
					for(var k=0;k<colorarr.length;k++){
						if(colorarr[k]!='black'){
							indexflag=true;
						}
					}
					if(!indexflag){
						for(var n=0;n<self.DownP.length;n++){
							var hehehe=0;
							for(var nn=0;nn<self.DownP[n].length;nn++){
								if(shanchui==self.DownP[n][nn].x){
									hehehe=n;
								}
								self.DownP[n][nn].y++;
							}
							self.DownP.splice(hehehe,1);
						}
					}
				}
			},200);
		}
	}