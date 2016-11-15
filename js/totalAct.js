$(function(){
//	window.onload=function(){
//		$("body").show();
//	}
	//语言选择
	$(".language").click(function() {
		if ($(".languageShow").is(":hidden")) {
			$(".languageShow").show()
		}else{
			$(".languageShow").hide()
		}
	});
	$(".languageShow li").click(function(){
		$(".language").empty();
		$(".language").append($(this).html());
		$(".languageShow").hide()
		setCookie("language",$(this).html(),365);
	});
	//会员登录
	$(".member").click(function() {
		
	  if(getCookie("myName")!= 0){
	  	if ($(".havedLogin").is(":hidden")) {
			$(".havedLogin").show()
		}else{
			$(".havedLogin").hide()
		}
	  }else{
	  	if ($(".memberShow").is(":hidden")) {
			$(".memberShow").show()
		}
	  }
		
	});
	//会员登录弹出框关闭
	$(".memberShow .ui-btn-left").click(function() {
		if ($(".memberShow").is(":visible")) {
			$(".memberShow").hide()
		}
	});
	//cookie
	function setCookie(c_name,value,expiredays)
		{
		var exdate=new Date()
		exdate.setDate(exdate.getDate()+expiredays)
		document.cookie=c_name+ "=" +escape(value)+
		((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+";path=/"
		
		
		}
	
		
	function getCookie(c_name)
		{
		if (document.cookie.length>0)
		  {
		  c_start=document.cookie.indexOf(c_name + "=")
		  if (c_start!=-1)
		    { 
		    c_start=c_start + c_name.length+1 
		    c_end=document.cookie.indexOf(";",c_start)
		    if (c_end==-1) c_end=document.cookie.length
		    return unescape(document.cookie.substring(c_start,c_end));
		    } 
		  }
		return ""
		}
		   //删除订单
       $(".deleteMyOther").click(function(){
       	$(this).parent().remove();
       });
});