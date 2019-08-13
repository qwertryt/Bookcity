class Login{
	constructor() {
		this.lA = document.querySelectorAll(".t-left a");
		this.aLi = document.querySelectorAll("header ul li a");
	    this.oUser = document.getElementById("user");
	    this.oPass = document.getElementById("pass");
	    this.oSpan = document.querySelector(".span");
		this.oCaptcha = document.getElementById("captcha");
	    this.oBtn = document.getElementById("sub");
	    this.U = this.P = this.S = this.C = false;
		
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
		
		this.oUser.addEventListener("change",function(eve){
			var e = eve || window.event;
			// 1.	用户名只能包含数字、字母、下划线，长度为6～18位（5分）
			that.reg = /^\w{6,18}$/;
			var user = localStorage.getItem(this.value);
				if(user)
				{
					that.U = true;	
				}else if(that.reg.test(this.value))
				{
					that.U = true;
				}else
				{
					alert("用户名错误或不存在该用户信息请注册！！！");
					that.oUser.value = null;	
					that.U = false;
				}	
		})
		this.oSpan.addEventListener("click",function(){ 
			var str = "";
			for(var i = 0;i < 4;i++){
				var az = String.fromCharCode(that.random(97,122));
				var AZ = String.fromCharCode(that.random(65,90));
				var num = that.random(0,9);
				str = str + az + AZ + num;
			}
			var randomStr = "";
			for(var i = 0;i < 4;i++){
				randomStr += str[that.random(0,str.length-1)];
			}
			that.oSpan.innerHTML = randomStr;
			that.oSpan.value = that.oSpan.innerHTML
			that.randomStr = that.oSpan.value;
			that.S = true;
		})
		
		this.oCaptcha.addEventListener("blur",function(eve) 
		{
			var e = eve || window.event;
			if(that.oCaptcha.value == that.oSpan.value)
			{
				that.C = true;
			}else
			{
				alert("请输入正确的验证码！！！");
				that.oCaptcha.value = null;
				that.C = false;
			}
		})
		
		this.oPass.addEventListener("blur",function(eve){
			var e = eve || window.event;
			var pass = localStorage.getItem(that.oUser.value);
			console.log(pass)
			if(this.value == pass){
				
				that.P = true;
			}else{
				alert("请输入正确的密码！！！");		
				that.P = false;
			}
		})
				
		this.oBtn.addEventListener("click",function(eve){
			var e = eve || window.event;
			if(that.U && that.P && that.S){
				localStorage.setItem("loginUser",that.oUser.value,that.oPass.value);
				alert("登录成功")
				location = "index.html";
			}
			if(!that.U){
				alert("用户名输入错误！");
			}
			if(!that.P){
				alert("密码错误!");
			}
			if(!that.S){
				alert("验证码错误!");
			}

		})
	}
	
	random(max,min){
		return Math.round(Math.random() * (max - min) + min)
	}
	
}

    
new Login();





