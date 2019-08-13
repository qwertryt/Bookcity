class Register{
	constructor() {
	    this.oUser = document.getElementById("user");
	    this.oPass1 = document.getElementById("pass1");
		this.oPass2 = document.getElementById("pass2");
		this.oCaptcha = document.getElementById("captcha");
		this.oSpan = document.querySelector(".span");
	    this.oMobile = document.querySelector("#mobile");
	    this.oBtn = document.getElementById("sub");
		
	    this.U = this.P1 = this.S = this.C = this.P2 = this.M = false;
		
		this.addEvent();
	}
	addEvent(){
		var that = this;
		this.oUser.addEventListener("change",function(eve){
			var e = eve || window.event;
			// 1.	用户名只能包含数字、字母、下划线，长度为6～18位（5分）
			that.reg = /^\w{6,18}$/;
			
				if(that.oUser.value == "")
				{
					alert("用户名不能为空！！！");
						
				}else if(that.reg.test(this.value))
				{
					that.U = true;
				}else
				{
					alert("用户名输入错误！！！");
					that.oUser.value = null;	
					that.U = false;
				}	
			})
		this.oSpan.addEventListener("click",function(eve){ 
			var e = eve || window.event;
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
		
		this.oMobile.addEventListener("change",function(eve)
		{
			var e = eve || window.event;
			that.reg = /^1[3-9]\d{9}$/;
			if(that.oMobile.value == "")
			{
				alert("手机号不能为空！！！");
			}else if(that.reg.test(this.value))
			{
				that.M = true;
			}else
			{
				alert("请输入正确的11位手机号！！！");
				that.oMobile.value = null;
				that.M = false;
			}
		})
		
		this.oPass1.addEventListener("change",function(eve){
			var e = eve || window.event;
			var reg = /^.{6,20}$/;
			if(reg.test(this.value)) {
				
				that.P1 = true;
			}else if(this.value == that.oPass2.value)
			{
				that.P1 = true;
			}else{
				alert("请输入正确的密码！！！");		
				that.P1 = false;
			}
		})
				
		this.oPass2.addEventListener("blur",function(eve){
			var e = eve || window.event;
			if(this.value == that.oPass1.value){
				that.P2 = true;
			}else{
				alert("请输入正确的确认密码！！！");	
				that.oPass2.value = null;
				that.P2 = false;
			}
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
		
		this.oBtn.addEventListener("click",function(eve){
			var e = eve || window.event;
			if(that.U && that.P1 && that.S && that.P2 && that.M){
				alert("注册成功")
				localStorage.setItem("loginUser",that.oUser.value,that.oPass1.value,that.oMobile.value)
				location = "login.html";
			}
			if(!that.U){
				alert("用户名输入错误！");
			}
			if(!that.P1){
				alert("密码错误!");
			}
			if(!that.S){
				alert("验证码错误!");
			}
			if(!that.P2){
				alert("确认密码错误！");
			}
			if(!that.M){
				alert("手机号输入错误!");
			}
		})
	}
	
	random(max,min){
		return Math.round(Math.random() * (max - min) + min)
	}
	
}

new Register;

