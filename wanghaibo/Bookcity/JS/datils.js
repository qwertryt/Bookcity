		
		
					
class Magnifier{
		constructor(){
			this.oXq = document.querySelector(".xq-b");
			this.search = location.search.substr(1);
			this.url = "http://localhost/Bookcity/data/dateils/dateils.json";
			this.load();
			
		}
			

		localStorage()
		{
			this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
			if(this.goods.length == 0)
			{
				this.goods.push({
					id:this.id,
					num:1
				});
			}else{
				var i = 0;
				var onoff = this.goods.some((val,index)=>{
					i = index;
					return val.id == this.id;
				});
				if(onoff)
				{
					this.goods[i].num++;
				}else{
					this.goods.push({
						id:this.id,
						num:1
					});
				}
			} 
			localStorage.setItem("goods",JSON.stringify(this.goods));
			
		}
		
	load()
	{
		var that = this;
		ajaxGet(this.url,function(res)
		{
			that.res = JSON.parse(res);
			// console.log(that.res);
			that.display();
		})
	}
	display()
	{
		var str ="";
		this.res.forEach((resVal)=>{
			if(resVal.goodsId == this.search){
				str +=	`<div  qwq="${resVal.goodsId}"  id="box" class="boxX">
						<div class="imgbox">
							<div id="box1">
								<img src="${resVal.url}" />
							</div>
							<div id="box2">
								<img src="${resVal.url}" />
							</div>
							<div class="bigbox">
								<a href="##" class="prev"></a>
								<div id="box3">
									<a href="##" class="current active"><img src="${resVal.url}" /></a>
								</div>
								<a href="##" class="next"></a>
							</div>
						</div>
						<div class="selection">
							<div class="info">
								<h3>${resVal.name}<em>${resVal.Reminder}</em></h3>
								<dl>
									<dt>编号:</dt>
									<dd>${resVal.number}</dd>
								</dl>
								<dl>
									<dt>销售价:</dt>
									<dd>
										<strong id="price">￥${resVal.price}</strong>
									</dd>
									<dd>
										<span>(<em>市场价:</em><del>￥${resVal.Original}</del>)</span>
									</dd>
								</dl>
								<dl>
									<dt>赠送积分:</dt>
									<dd id="rPint">${resVal.rPint}</dd>
								</dl>
							</div>
							<div class="selb">
								<div class="action">
									<p>请选择商品规格</p>
									<dl>
										<dt title="内存容量">内存容量：</dt>
										<dd>
											<a href="##">${resVal.capacity}
												<span title="点击取消选择"></span>
											</a>
										</dd>
									</dl>
									<dl>
										<dt title="颜色">颜色：</dt>
										<dd>
											<a href="##">${resVal.color1}
												<span title="点击取消选择"></span>
											</a>
										</dd>
										<dd>
											<a href="##">${resVal.color2}
												<span title="点击取消选择"></span>
											</a>
										</dd>
										<dd>
											<a href="##" class="aa1">${resVal.color3}
												<span title="点击取消选择"></span>
											</a>
										</dd>
										<dd>
											<a href="##" class="aa1">${resVal.color4}
												<span title="点击取消选择"></span>
											</a>
										</dd>
										<dd>
											<a href="##" class="aa1">${resVal.color5}
												<span title="点击取消选择"></span>
											</a>
										</dd>
									</dl>
								</div>
								<dl class="quantity">
									<dt>数量：</dt>
									<dd>
										<input type="number" name="txt" id="txt" value="1" min = "1"/>
									</dd>
									<dd>件</dd>
								</dl>
								<div class="buy">
									<input type="button" name="btn1" id="btn1" value="加入购物车" />
									<a href="##">收藏</a>
								</div>
							</div>
						</div>
					</div>`;
				}
		})	
		this.oXq.innerHTML = str;
		var oBox1 = document.querySelector("#box1");
		var aImg1 = oBox1.children[0];
		var oBox2 = document.querySelector("#box2");
		var aImg2 = oBox2.children[0];
		var oBox3 = document.querySelector("#box3");
		var oBtn = document.querySelector("#btn1");
		
		this.addEvent(oBox1);
		this.addEvent2(oBtn);
		this.switchImg([aImg1,aImg2,oBox3]);
		this.show([oBox2,aImg2,oBox1]);
		this.hide(oBox2);
		this.move("",[oBox2,aImg2,oBox1]);
	}
	
	addEvent(options)
		{
			this.oBox1 = options;
			var that = this;
			this.oBox1.addEventListener("mouseenter",function(eve)
			{
				var e = eve || window.event;
				that.show(options);
			})
			
			this.oBox1.addEventListener("mouseleave",function(eve)
			{
				var e = eve || window.event;
				that.hide();
			})
			this.oBox1.addEventListener("mousemove",function(eve)
			{
				var e = eve || window.event;
				that.move(e,options);
			})
		}
	
	addEvent2(options){
		this.oBtn = options;
		var that = this;
		this.oBtn.addEventListener("click",function(eve)
		{
			var e = eve || window.event;
			var target = e.target || e.srcElement;
			that.id = e.target.parentNode.parentNode.parentNode.parentNode.getAttribute("qwq");
			that.localStorage();
			console.log(that.localStorage())
		})
		
	}
	
	show(options){
		for(var i = 0;i < options.length;i++){
			this.oBox2 = options[0];
			this.aImg2 = options[1];
			this.oBox1 = options[2];
		}
			this.oBox2.style.display = "block";
			if(!this.span)
			{
				this.span = document.createElement("span");
				var w = this.oBox2.offsetWidth / this.aImg2.offsetWidth * this.oBox1.offsetWidth;
				var h = this.oBox2.offsetHeight / this.aImg2.offsetHeight * this.oBox1.offsetHeight;
				this.span.style.cssText = `width:${w}px;height:${h}px;background:rgba(200,200,200,0.6);
				position:absolute;top:0;left:0;`;
				this.oBox1.appendChild(this.span);
			}
			this.span.style.display = "block";
		}
		
		
	hide(oBox2){
			this.span.style.display = "none";
			this.oBox2.style.display = "none";
		}
		
		
	move(e,options){
		for(var i = 0;i < options.length;i++){
			this.oBox2 = options[0];
			this.aImg2 = options[1];
			this.oBox1 = options[2];
		}
			var scrollT = document.documentElement.scrollTop;
			var l = e.clientX - this.oBox1.offsetLeft - this.span.offsetWidth/2;
			var t = e.clientY - this.oBox1.offsetTop + scrollT - this.span.offsetHeight/2;
			
			if(l < 0)l = 0;
			if(t < 0)t = 0;
			if(l > this.oBox1.offsetWidth - this.span.offsetWidth)
			{
				l = this.oBox1.offsetWidth - this.span.offsetWidth;
			}
			if(t > this.oBox1.offsetHeight - this.span.offsetHeight)
			{
				t = this.oBox1.offsetHeight - this.span.offsetHeight;
			}
			
			this.span.style.left = l + "px";
			this.span.style.top = t + "px";
			var x = l / (this.oBox1.offsetWidth - this.span.offsetWidth);
			var y = t / (this.oBox1.offsetHeight - this.span.offsetHeight);
			
			this.aImg2.style.left = -x * (this.aImg2.offsetWidth - this.oBox2.offsetWidth) + "px";
			this.aImg2.style.top = -y * (this.aImg2.offsetHeight -this.oBox2.offsetHeight) + "px";		
		}
	switchImg(options)
	{
		var that = this;
		for(var i = 0;i < options.length;i++){
			this.aImg1 = options[0];
			this.aImg2 = options[1];
			this.oBox3 = options[2];
		}
		this.oA = this.oBox3.children;
		for(var i = 0;i < this.oA.length;i++)
		{
			this.aImg3 = this.oA[i].children;
			
		}
			
		for(var j = 0;j < this.aImg3.length;j++){
			this.aImg3[j].addEventListener("click",function(eve)
			{
				console.log(this.aImg3);
				var e = eve || window.event;
				that.aImg1.src = this.src;
				that.aImg2.src = this.src;
			})
		}
	}
}		

new Magnifier;


var msg = localStorage.getItem("loginUser");
    if(msg){
        $(".p1").hide();
		$(".tit").hide();
        $(".p2").show();
        $(".p2").find("span").html(msg);
		$(".car").attr("href","car.html"); 
    }else{
        $(".p1").show();
		$(".tit").show();
        $(".p2").hide();
		$(".car").attr("href","login.html");
    }

    $(".p2").find("a").click(function(){
        localStorage.removeItem("loginUser");
        $(".p1").show();
        $(".p2").hide();
    })

	
	
