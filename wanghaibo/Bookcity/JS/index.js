
class Project{
	constructor(){
		this.lA = document.querySelectorAll(".t-left a");
		this.aLi = document.querySelectorAll("header ul li a");
		this.aLista = document.querySelectorAll(".lista li");
		this.menu = document.querySelectorAll(".menu1");
		
		this.te1 = document.querySelector(".dynamic h3 .te1");
		this.te2 = document.querySelector(".dynamic h3 .te2");
		this.ul1 = document.querySelector(".dynamic .ul1");
		this.ul2 = document.querySelector(".dynamic .ul2");
		
		this.s1 = document.querySelector(".Title1 h3 .s1");
		this.s2 = document.querySelector(".Title1 h3 .s2");
		this.s3 = document.querySelector(".Title1 h3 .s3");
		
		this.new1 = document.querySelector(".b-l .new1");
		this.new2 = document.querySelector(".b-l .new2");
		this.new3 = document.querySelector(".b-l .new3");
	
		this.sp1 = document.querySelector(".b-r h3 .sp1");
		this.sp2 = document.querySelector(".b-r h3 .sp2");
		this.sp3 = document.querySelector(".b-r h3 .sp3");
		this.bsy = document.querySelector(".b-r #BestSellingYear");
		this.mbs = document.querySelector(".b-r #monthlyBestSeller");
		this.zbs = document.querySelector(".b-r #zhouBestSelling");
		
		this.addEvent();
	}
	
	addEvent(){
		var that = this;
		for(var i = 0;i < this.lA.length;i++){
			this.lA[i].addEventListener("mouseenter",function(eve){
				let e = eve || window.event;
				this.style = "color:#ff7700";
			})
			this.lA[i].addEventListener("mouseleave",function(eve){
				let e = eve || window.event;
				this.style = "color:#666";
			})
		}
		for(var i = 0;i < this.aLi.length;i++){
			this.aLi[i].addEventListener("mouseenter",function(eve){
				let e = eve || window.event;
				this.style = "color:#ff7700";
			})
			this.aLi[i].addEventListener("mouseleave",function(eve){
				let e = eve || window.event;
				this.style = "color:#666";
			})
		}
		
		this.te2.addEventListener("mouseover",function(eve){
			let e = eve || window.event;
			this.style = "border-bottom:0";
			that.ul2.style = "display:block";
			that.ul1.style = "display:none";
			that.te1.style = "border-bottom:1px solid rgba(0,0,0,0.3)";
		})
		this.te1.addEventListener("mouseout",function(eve){
			let e = eve || window.event;
			this.style = "border-bottom:0";
			that.ul1.style = "display:block";
			that.ul2.style = "display:none";
			that.te2.style = "border-bottom:1px solid rgba(0,0,0,0.3)";
		})
		
	
		this.s1.addEventListener("mouseover",function(eve){
		// console.log(this)
			let e = eve || window.event;
			this.style.cssText = "border:1px solid #000;border-bottom:0;background:#fff;font-weight:700;color:#666;cursor:pointer;";
			that.s2.style.cssText = that.s3.style.cssText = "border:1px solid rgba(222,222,222,0.5);border-bottom:1px solid #000;background:rgba(240,240,240,0.5)";
			that.new1.style = "display:block";
			that.new2.style = "display:none";
			that.new3.style = "display:none";

		})
		this.s2.addEventListener("mouseover",function(eve){
		// console.log(this)
			let e = eve || window.event;
			this.style.cssText = "border:1px solid #000;border-bottom:0;background:#fff;font-weight:700;color:#666;cursor:pointer;";
			that.s1.style.cssText = that.s3.style.cssText = "border:1px solid rgba(222,222,222,0.5);border-bottom:1px solid #000;background:rgba(240,240,240,0.5)";
			that.new2.style = "display:block";
			that.new1.style = "display:none";
			that.new3.style = "display:none";
		
		})
		this.s3.addEventListener("mouseover",function(eve){
		// console.log(this)
			let e = eve || window.event;
			this.style.cssText = "border:1px solid #000;border-bottom:0;background:#fff;font-weight:700;color:#666;cursor:pointer;";
			that.s2.style.cssText = that.s1.style.cssText = "border:1px solid rgba(222,222,222,0.5);border-bottom:1px solid #000;background:rgba(240,240,240,0.5)";
			that.new3.style = "display:block";
			that.new1.style = "display:none";
			that.new2.style = "display:none";
		
		})
		
		this.sp1.addEventListener("mouseover",function(eve){
			let e = eve || window.event;
			this.style.cssText = "border-bottom:0;font-weight:700;color:#666;background:#fff;cursor:pointer;";
			that.sp3.style.cssText = that.sp2.style.cssText = "border-bottom:1px solid rgba(222,222,222,0.5);color:#888;background:rgba(240,240,240,0.5)";
			that.bsy.style = "display:block";
			that.mbs.style = "display:none";
			that.zbs.style = "display:none";
		})
		
		this.sp2.addEventListener("mouseover",function(eve){
			let e = eve || window.event;	
			this.style.cssText = "border-bottom:0;font-weight:700;color:#666;background:#fff;cursor:pointer;";
			that.sp3.style.cssText = that.sp1.style.cssText = "border-bottom:1px solid rgba(222,222,222,0.5);color:#888;background:rgba(240,240,240,0.5)";
			that.bsy.style = "display:none";
			that.mbs.style = "display:block";
			that.zbs.style = "display:none";
		})
			
		this.sp3.addEventListener("mouseover",function(eve){
			let e = eve || window.event;
			this.style.cssText = "border-bottom:0;font-weight:700;color:#666;background:#fff;cursor:pointer;";
			that.sp2.style.cssText = that.sp1.style.cssText = "border-bottom:1px solid rgba(222,222,222,0.5);color:#888;background:rgba(240,240,240,0.5)";
			that.bsy.style = "display:none";
			that.mbs.style = "display:none";
			that.zbs.style = "display:block";
		})	
		
		this.bsy.addEventListener("mouseover",function(eve){
			let e = eve || window.event;
			
		})	
		
		
			
		for(var i = 0;i < this.aLista.length;i++){
			
			var that = this;
			this.aLista[i].index = i;
			this.aLista[i].addEventListener("mouseenter",function(eve){
				let e = eve || window.event;
					this.children[1].style = "display:block";
			})
			this.aLista[i].addEventListener("mouseleave",function(eve){
				let e = eve || window.event;
				this.children[1].style = "display:none";
			})
		}
	}
}

class Banner{
	constructor() {
		this.ban = document.querySelector(".ban");
		this.left = document.querySelector(".ban .left");
		this.right = document.querySelector(".ban .right");
		this.imgbox = document.querySelector(".imgbox");
		this.img = this.imgbox.children;
		// this.aul = document.querySelector(".radius");
		this.oSpan = document.querySelector(".blist span");

		this.t;
		
		this.index = 0;
		this.num = 4;
		this.init();
		this.autoAction();
		// this.createPage();
	}
	init(){
		this.imgbox.style.width = this.img.length * this.img[0].offsetWidth + "px";
		
		this.addEvent();
	}
		
	addEvent(){
		var that = this;
		
		this.left.onclick = function(){
			
			that.changeIndexLeft();
		}
		this.right.onclick = function(){
			
			that.changeIndexRight();
		}
	}
	
	changeIndexLeft(){
		if(this.index == 0){
		  this.index = this.img.length-2;
		  this.imgbox.style.left = -(this.img.length-1)*this.img[0].offsetWidth + "px";
		}else{
		  this.index--;
		}
		this.display();
	}
	
	changeIndexRight(){
		if(this.index == this.img.length-1){
		   this.index = 1;
		   this.imgbox.style.left = 0;
		}else{
			this.index++;
	}
		this.display();
	}
	display(){
		move(this.imgbox,{left:-this.index * this.img[0].offsetWidth});
	}
	
	autoAction(){
		var that = this;
		
		 this.t = setInterval(() => {
		    this.changeIndexRight();
		}, 3000);
		
		this.ban.addEventListener("mouseenter",function(){
		    clearInterval(that.t);
		});
		this.ban.addEventListener("mouseleave",function(){
		    that.t = setInterval(() => {
		        that.changeIndexRight();
		    }, 3000);
		});
	}
}

class List{
        constructor(){
            this.aUl = document.querySelector(".project");
			this.oFt = document.querySelector(".f1-t");
			this.oFb = document.querySelector(".f1-b");
			this.oFt2 = document.querySelector(".f2-t");
			this.oFb2 = document.querySelector(".f2-b");
			this.oFt3 = document.querySelector(".f3-t");
			this.oFb3 = document.querySelector(".f3-b");
			this.oFt4 = document.querySelector(".f4-t");
			this.oFb4 = document.querySelector(".f4-b");
			this.oFt5 = document.querySelector(".f5-t");
			this.oFb5 = document.querySelector(".f5-b");
			this.oFt6 = document.querySelector(".f6-t");
			this.oFb6 = document.querySelector(".f6-b");
			this.oNew1 = document.querySelector(".new1");
			this.oNew2 = document.querySelector(".new2");
			this.oNew3 = document.querySelector(".new3");
            this.url  = "http://localhost/Bookcity/data/index/index1.json";
			this.url2 = "http://localhost/Bookcity/data/index/index2.2.json";
			this.url3 = "http://localhost/Bookcity/data/index/index2.1.json";
			this.url4 = "http://localhost/Bookcity/data/index/index3.1.json";
			this.url5 = "http://localhost/Bookcity/data/index/index3.2.json";
			this.url6 = "http://localhost/Bookcity/data/index/index4.1.json";
			this.url7 = "http://localhost/Bookcity/data/index/index4.2.json";
			this.url8 = "http://localhost/Bookcity/data/index/index5.1.json";
			this.url9 = "http://localhost/Bookcity/data/index/index5.2.json";
			this.url10 = "http://localhost/Bookcity/data/index/index6.1.json";
			this.url11 = "http://localhost/Bookcity/data/index/index6.2.json";
			this.url12 = "http://localhost/Bookcity/data/index/index7.1.json";
			this.url13 = "http://localhost/Bookcity/data/index/index7.2.json";
			this.url14 = "http://localhost/Bookcity/data/index2/books1.json";
			this.url15 = "http://localhost/Bookcity/data/index2/books2.json";
			this.url16 = "http://localhost/Bookcity/data/index2/books3.json";
            this.load();
            this.init();

        }
        init(){
			this.setCookie();
        }
        setCookie(){
            this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
            if(this.goods.length == 0){
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }else{
                var i = 0;
                var onoff = this.goods.some((val,index)=>{
                    i = index;
                    return val.id == this.id;
                })
                if(onoff){
                    this.goods[i].num++
                }else{
                    this.goods.push({
                        id:this.id,
                        num:1
                    })
                }
            }
            setCookie("goods",JSON.stringify(this.goods));
        }
        load(){
            var that = this;
            ajaxGet(this.url,function(res){
                that.res = JSON.parse(res);
                that.display();
            })

			ajaxGet(this.url2,function(res){
			    that.res = JSON.parse(res);
			    that.displayW(that.oFt,that.res);
			})
			
			ajaxGet(this.url3,function(res){
			    that.res = JSON.parse(res);
				that.displayq(that.oFb,that.res);
			})
			
			ajaxGet(this.url4,function(res){
			    that.res = JSON.parse(res);
				// console.log(that.res)
			    that.display4();
			})
			
			ajaxGet(this.url5,function(res){
			    that.res = JSON.parse(res);
				that.displayq(that.oFb2,that.res);
			})
			
			ajaxGet(this.url6,function(res){
			    that.res = JSON.parse(res);
			    that.displayW(that.oFt3,that.res);
			})
			
			ajaxGet(this.url7,function(res){
			    that.res = JSON.parse(res);
			    that.displayq(that.oFb3,that.res);
			})
			
			ajaxGet(this.url8,function(res){
			    that.res = JSON.parse(res);
				that.displayW(that.oFt4,that.res);
			})
			
			ajaxGet(this.url9,function(res){
			    that.res = JSON.parse(res);
				that.displayq(that.oFb4,that.res);
			})
			
			ajaxGet(this.url10,function(res){
			    that.res = JSON.parse(res);
				that.displayW(that.oFt5,that.res);
			})
			
			ajaxGet(this.url11,function(res){
			    that.res = JSON.parse(res);
				that.displayq(that.oFb5,that.res);
			})
			
			ajaxGet(this.url12,function(res){
			    that.res = JSON.parse(res);
				that.displayW(that.oFt6,that.res);
			})
			
			ajaxGet(this.url13,function(res){
			    that.res = JSON.parse(res);
			    that.displayq(that.oFb6,that.res);
			})
        
			ajaxGet(this.url14,function(res){
			    that.res = JSON.parse(res);
				that.displayY(that.oNew1,that.res);
			})
			
			ajaxGet(this.url15,function(res){
			    that.res = JSON.parse(res);
				that.displayY(that.oNew2,that.res);
			})
			
			ajaxGet(this.url16,function(res){
			    that.res = JSON.parse(res);
				that.displayY(that.oNew3,that.res);
			})
		}
		
    display(){
            var str = "";
            this.res.forEach((val)=>{
                str += `<li ids="${val.goodsId}">
							<a href="##">
								<img src="${val.url}" />
							</a>
						</li>`;
            })
            this.aUl.innerHTML = str;
		}
		
	display4(){
		var str4 = "";
		this.res.forEach((val)=>{
			str4 +=`<li qwt="${val.goodsId}">
							<a href="details.html?${val.goodsId}" title="${val.titel}">
								<p title="${val.tite}">${val.name1}</p>
								<em title="${val.tite2}">${val.name2}</em>
								<strong>￥${val.price}</strong>
								<img src="${val.url}" />
							</a>
						</li>`;
		})		
		this.oFt2.innerHTML = str4;
	}

	displayW(ele,res){
		res = res || {};
		var str = "";
		res.forEach((val)=>{
		    str += `<li qww = "${val.goodsId}">
						<a href="details.html?${val.goodsId}" title="${val.tit}">
							<p>${val.name}</p>
							<strong>￥${val.price}</strong>
							<img src="${val.url}" />
						</a>
					</li>`;
		})				
		ele.innerHTML = str;
	}
	
	displayq(ele,res){
		res = res || {};
		var str = "";
		res.forEach((val)=>{
		    str += `<li qwh = "${val.goodsId}">
						<a href="details.html?${val.goodsId}" title="${val.tit}">
							<img src="${val.url}" />
							<div class="cont">
								<span title="${val.tit2}">${val.name}</span>
								<b>￥${val.price}</b>	
							</div>
						</a>
					</li>`
		})				
		ele.innerHTML = str;
	}
	
	displayY(ele,res){
		res = res || {};
		var str = "";
		res.forEach((val)=>{
		    str += `<li qwm = "${val.goodsId}">
						<a href="details.html?${val.goodsId}" title="${val.title}">
							<div class="img">
								<img src="${val.url}" />
							</div>
							<span>${val.name}</span>
							<p>
								<b>￥${val.price}</b><s>${val.price2}</s>
							</p>	
						</a>
					</li>`
		})
		ele.innerHTML = str;
	}
}


var msg = localStorage.getItem("loginUser");
	if(msg){
		$(".car").attr("href","car.html");
		console.log($(".car"))
	    $(".p1").hide();
		$(".tit").hide();
	    $(".p2").show();
	    $(".p2").find("span").html(msg);
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
	
	$("#lou").children("a").click(function(){
		var index = $(this).index();
		var iNowFloor = $(".f1").eq(index);
		var t = iNowFloor.offset().top;
		$("html").stop().animate({
			scrollTop:t
		})
		
	})
	
	$(document).scroll(function(){   
	　　var Scroll = $(document).scrollTop();
	　　if(Scroll >= 1000) {
	　　　　$("#lou").css("display","block")  
	　　} else {
	    　　$("#lou").css("display","none")  
	　　}
	})


	
new Project;
new Banner;
new List;


