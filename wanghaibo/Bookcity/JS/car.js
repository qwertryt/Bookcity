
class Car{
		constructor(){
			this.oCont = document.querySelector("tbody .tcont");
			this.oR1 = document.querySelectorAll(".goods .r1");
			this.oBtn = document.querySelector("#Settlement");
			this.tbody = document.querySelector("tbody");
			this.url = "http://localhost/Bookcity/data/listss.json";
			this.load();
			this.addEvent();
		}
	addEvent(){
		var that = this;
		var a;
		this.tbody.addEventListener("click",function(eve)
		{
			var e = eve || window.event;
			var target = e.target || e.srcElement;
			if(target.className == "del")
			{	
				a = confirm("单击“确定”继续。单击“取消”停止。"); 
					if (a) { 
						that.id = e.target.parentNode.getAttribute("index");
						e.target.parentNode.remove();
						that.changeLocalstorage(function(i){
							that.goods.splice(i,1);
						}) 
					}  
			}
			 
		})
		

		this.tbody.addEventListener("input",function(eve)
		{
			var e = eve || window.event;
			var target = e.target || e.srcElement;
			if(target.className == "num")
			{
				that.id = e.target.parentNode.parentNode.getAttribute("index");
				that.changeLocalstorage(function(i)
				{
					that.goods[i].num = e.target.value;												
				})
				that.display();
			}

		})	
	}
			
	changeLocalstorage(callback){
			var i = 0;
				this.goods.some((val,index)=>{
					i = index;
					return val.id == this.id;
				});
				callback(i);
				localStorage.setItem("goods",JSON.stringify(this.goods));
			}

		load(){
			var that = this;
			ajaxGet(this.url,function(res){
				that.res = JSON.parse(res);
				that.localStorage();
			})
			
		}
			 		
			localStorage()
			{
				this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
				this.display();		
			}
			display()
			{
				var str = "";
				this.res.forEach((resVal)=>{
					this.goods.forEach((goodsVal)=>{
						if(resVal.goodsId == goodsVal.id)
						{
							var sum = (resVal.price*goodsVal.num ).toFixed(2);
							str += `<tr index="${resVal.goodsId}">
										<td><input type="checkbox" class="check" /></td>
										<td  width="60px"><img src="${resVal.url}" alt=""></td>
										<td><a href="##" title="${resVal.title}" target="_blank">${resVal.name}</a><span>[8+128GB, 亮黑色]</span></td>
										<td class="price">￥${resVal.price}</td>
									<td><input class="num" type="number" value="${goodsVal.num}" min = "1"/></td>
										<td width="140px"><span class="subTotal price">￥${sum}</span></td>	
										<td class="del">删除</td>
									</tr>`;	
							// this.addEvent2(["",sum]);		
						}
					})
				})
				this.tbody.innerHTML = str;
				this.show(str);
			
				// var check = document.querySelectorAll(".check");
				// 	this.addEvent2(check,"");
				// 
			}
		
		// addEvent2(options){
		// 	this.oStati = document.querySelectorAll(".Statistics");
		// 	var that = this;
		// 	var cont = 0;
		// 	for(var t = 0;t < options.length;t++){
		// 		console.log(t)
		// 	}
		// 	this.check = options[0];
		// 	this.sum = options[1];
		// 	
		// 	
		// 	for(var i = 0;i < this.check.length;i++){
		// 		this.check[i].addEventListener("click",function(){
		// 			if(this.checked){
		// 				cont += that.sum.innerHTML;
		// 				
		// 				// this.id = that.sum;
		// 				// that.oStati.innerHTML = that.sum;
		// 				// this.id++
		// 			}
		// 				// this.sums = this.id
		// 		})
		// 	}
		// 	
		// 	
		// }
		
		show(str){
			for(var i = 0;i < this.oR1.length;i++){
					if(str != ""){
						this.oR1[i].style = "display:block";
					}else{
						this.oR1[i].style = "display:none";
					}
				}
				
			}
		}
		
	new Car;

var msg = localStorage.getItem("loginUser");
    if(msg){
        $(".p1").hide();
		$(".tit").hide();
        $(".p2").show();
        $(".p2").find("span").html(msg);
		$(".car").attr("href","car.html");
    }else{
		$(".car").attr("href","login.html");
        $(".p1").show();
		$(".tit").show();
        $(".p2").hide();
    }

    $(".p2").find("a").click(function(){
        localStorage.removeItem("loginUser");
        $(".p1").show();
        $(".p2").hide();
    })