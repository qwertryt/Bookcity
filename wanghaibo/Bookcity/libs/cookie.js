// cookie的设置
function setCookie(key,value,options)
{
	options = options || {};
	var date = "";
	if(options.expires)
	{
		var d = new Date();
		d.setDate(d.getDate() + options.expires);
		date = ";expires = " + d;
	}
	var path = options.path ? ";path = " + options.path: "";
	document.cookie = key + "=" + value + date + path;
}

// cookie的删除
function removeCookie(key,options)
{
	options = options || {};
	options.expires = -1;
	setCookie(key,null,options);
}

// cookie的获取
function getCookie(key)
{
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i = 0;i < arr.length;i++)
	{
		if(arr[i].split("=")[0] == key)
		{
			return arr[i].split("=")[1];
		}
	}
	return "";
}

// 替换for循环部分
// var v = "";
// arr.some((val)=>{
// 	var sArr = value.split("=");
// 	v = sArr[1];
// 	return sArr[0] == key;
// })
// return v;

