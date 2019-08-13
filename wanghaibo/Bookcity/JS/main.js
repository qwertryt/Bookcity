
	require.config({
	    baseUrl:"module",
	    paths:{
	        list:"list",
	        floor:"floor",
	        jq:"../libs/jquery.1.12.4",
	    }
	})


	require(["jq","floor","list"],function(_,f,l){
	     	// console.log(l)
	    	// var myList= new l;
	     //    var myFloor= new f;
	     //    myList.addEvent();
	     //    myFloor.totop();
	        // console.log(1)
	})
	
	
	
	
	// require(["jq","tab","floor","list"],function(_,t,f,l){
	//     // console.log(l)
	//     // console.log(t)
	//     // console.log(f)
	//     // console.log($)
	// 
	//     var mylist = new l({
	//         allBtn:$("#ly_box"),
	//         ool:$("#ly_box").children("#ly_list")
	//     })
	// 
	//     new f({
	//         btns:mylist.ol,
	//         floor:$(".floor")
	//     })
	// 
	// })