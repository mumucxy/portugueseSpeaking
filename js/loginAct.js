$(function(){
	//返回上一页
	$(".loginBack").on("click",function(){
		window.history.back(-1);
	});
	//身份选择
	$(".registerChoose").click(function() {
		if ($(".registerChooseShow").is(":hidden")) {
			$(".registerChooseShow").show()
		}
	});
	$(".chooseBox ul li").click(function(){
		$("input[id='myLoginChoose']").prop("value",$(this).html());
	});
	//身份选择弹出框关闭
	$(".registerChooseShow").click(function() {
		if ($(".registerChooseShow").is(":visible")) {
			$(".registerChooseShow").hide()
		}
	});
	//表单验证
	$("input[id='registerNow']").click(function(){	
	  if($("input[id='myLoginName']").prop("value").length <= 0 ){
	   event.preventDefault(); //阻止默認事件發生
   	$("input[id='myLoginName']").prop("placeholder","用户名不能为空!");
	 }
	   if($("input[id='myLoginPass']").prop("value").length <= 0  ){
	   	event.preventDefault(); //阻止默認事件發生
	   	$("input[id='myLoginPass']").prop("placeholder","密码不能为空!");
	   }
	   if($("input[id='myLoginPassAgain']").prop("value") != $("input[id='myLoginPass']").prop("value")){
	    event.preventDefault(); //阻止默認事件發生
	    	$("input[id='myLoginPass']").prop("value","");
	    	$("input[id='myLoginPassAgain']").prop("value","");
	   	$("input[id='myLoginPass']").prop("placeholder","密码不一致");
	   	$("input[id='myLoginPassAgain']").prop("placeholder","密码不一致");
	   }
	});
	//登陆cookie
	$("#loginSubLogin").click(function(){
		var myName = $("#myName").prop("value");
		var myPassword = $("#myPassword").prop("value");
	  if($("input[id='myName']").prop("value").length <= 0 ){
	   event.preventDefault(); //阻止默認事件發生
   	      $("input[id='myName']").prop("placeholder","用户名不能为空!");
	 }else{
	 	setCookie("myName",myName ,365 );
	 }
	   if($("input[id='myPassword']").prop("value").length <= 0  ){
	   	event.preventDefault(); //阻止默認事件發生
	   	$("input[id='myPassword']").prop("placeholder","密码不能为空!");
	   }else{
	   	setCookie("myPassword", myPassword ,365 );
	   }
		
	});
	function setCookie(c_name,value,expiredays)
		{
		var exdate=new Date()
		exdate.setDate(exdate.getDate()+expiredays)
		document.cookie=c_name+ "=" +escape(value)+
		((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+";path=/"
		//location.href = "../z_pay/orderAccout.html";//接收页面.
		
	}
});
