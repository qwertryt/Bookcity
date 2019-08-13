class Shopping
{
	constructor()
	{
		this.aUl = document.querySelector(".goods ul");
		this.url = "http://localhost/Bookcity/data/listss.json";
		
		this.load();
		this.addEvent();
	}
	addEvent()
	{
		var that = this;
		this.aUl.addEventListener("click",function(eve)
		{
				
			var e = eve || window.event;
			var target = e.target || e.srcElement;
			if(e.target.id == "btn")
			{	
				that.id = e.target.parentNode.parentNode.getAttribute("qwe");
				that.localStorage();
			}
			
		})
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
		this.res.forEach((val)=>{
				str += `<li qwe="${val.goodsId}">
							<a href="details.html?${val.goodsId}">
								<img src="${val.url}" />
								<div>
									<span title="${val.titel1}">${val.name}</span>
									<em title="${val.titel2}">${val.Reminder}</em>
								</div>
							</a>
							<strong>￥${val.price}<del>￥${val.Original}</del></strong>
							<div class="actions">
								<a href="##" class="addCart" id="btn">加入购物车</a>
								<a href="##" class="addPF" title="${val.titel3}"">&nbsp;</a>
							</div>
					</li>`;
			})
			this.aUl.innerHTML = str;
	}
}
		

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
	
	

new Shopping;



