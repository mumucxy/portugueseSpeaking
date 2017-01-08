 $(function(){
 	
   $(".preSubmit").click(function(){
   	event.preventDefault();
   	history.go(-1);
   });
   window.onload = function() {
	$("body").show(); //窗口加载完时显示页面
		changeLanguage(); //多语言显示
		
	}
	$(".languageShow li").click(function() {
		setCookie("language",$(this).html(),365);
		changeLanguage(); //多语言显示
	});
	//删除收藏
	$(".myLoveDel").click(function(){
		$(this).parent().parent().remove();
	});
	//限制显示的留言详情字数
	
	if($(".comMyMessLeave").html() != undefined){
		
	
    if($(".comMyMessLeave").html().length>35){
    	var leaveWordMess =  $(".comMyMessLeave").html();
    	$(".comMyMessLeave").empty();
    	for(var i = 0 ; i<35 ; i++){
    	
    	$(".comMyMessLeave").append(leaveWordMess.charAt(i));
    	}
    	$(".comMyMessLeave").append("...");
    	
    }
  }else{
  	return;
 }
	function changeLanguage() {
		//supplier页面多语言的文字转换
		if (getCookie("language") == "简体") {
			//页面头部
			$(".language").empty();
			$(".language").append("简体");
			//公共			
		   $(".commonNav ul li:eq(0) a").empty();
		   $(".commonNav ul li:eq(0) a").append("账户");
		   $(".commonNav ul li:eq(1) a").empty();
		   $(".commonNav ul li:eq(1) a").append("我的订单");
		   $(".commonNav ul li:eq(2) a").empty();
		   $(".commonNav ul li:eq(2) a").append("我的收藏");
		   $(".commonNav ul li:eq(3) a").empty();
		   $(".commonNav ul li:eq(3) a").append("留言信息");
		   $(".ComChange").empty();
		   $(".ComChange").append("修改");
			//mainCommon
			$("#commonHead label:eq(0) p:eq(1)").empty();
			$("#commonHead label:eq(0) p:eq(1)").append("留言");
			$("#commonHead label:eq(2) p:eq(1)").empty();
			$("#commonHead label:eq(2) p:eq(1)").append("收藏");
			$("#mainCommonFirstLine p:eq(0) span").empty();
			$("#mainCommonFirstLine p:eq(0) span").append("我的账户");
			$("#mainCommonFirstLine p:eq(1) span").empty();
			$("#mainCommonFirstLine p:eq(1) span").append("我的订单");
			$("#mainCommonSecondLine p:eq(0) span").empty();
			$("#mainCommonSecondLine p:eq(0) span").append("我的收藏");
			$("#mainCommonSecondLine p:eq(1) span").empty();
			$("#mainCommonSecondLine p:eq(1) span").append("我的留言");
			//userMessage
			$(".comUserName").empty();
			$(".comUserName").append("用户名：");
			$(".comUserEmail").empty();
			$(".comUserEmail").append("邮箱：");
			$(".comUserID").empty();
			$(".comUserID").append("身份：");
			$(".comUserPass").empty();
			$(".comUserPass").append("密码：");
			$(".comUserPassAgain").empty();
			$(".comUserPassAgain").append("密码确认：");
			//myOther
			$(".deleteMyOther").empty();
			$(".deleteMyOther").append("删除订单");
			//myLove
			$(".myLoveDel").empty();
			$(".myLoveDel").append("删除");
			//myMessage
			$('.replyMess').empty();
			$('.replyMess').append("回复");
			
		    //其他多语言
			//changeLanguageSimple();
		} else if (getCookie("language") == "繁體") {
			//页面头部
			$(".language").empty();
			$(".language").append("繁體");
			//公共
		   $(".commonNav ul li:eq(0) a").empty();
		   $(".commonNav ul li:eq(0) a").append("帳戶");
		   $(".commonNav ul li:eq(1) a").empty();
		   $(".commonNav ul li:eq(1) a").append("我的訂單");
		   $(".commonNav ul li:eq(2) a").empty();
		   $(".commonNav ul li:eq(2) a").append("我的收藏");
		   $(".commonNav ul li:eq(3) a").empty();
		   $(".commonNav ul li:eq(3) a").append("留言資訊");
            $(".ComChange").empty();
		   $(".ComChange").append("修改");
            //mainCommon
			$("#commonHead label:eq(0) p:eq(1)").empty();
			$("#commonHead label:eq(0) p:eq(1)").append("留言");
			$("#commonHead label:eq(2) p:eq(1)").empty();
			$("#commonHead label:eq(2) p:eq(1)").append("收藏");
			$("#mainCommonFirstLine p:eq(0) span").empty();
			$("#mainCommonFirstLine p:eq(0) span").append("我的帳戶");
			$("#mainCommonFirstLine p:eq(1) span").empty();
			$("#mainCommonFirstLine p:eq(1) span").append("我的訂單");
			$("#mainCommonSecondLine p:eq(0) span").empty();
			$("#mainCommonSecondLine p:eq(0) span").append("我的收藏");
			$("#mainCommonSecondLine p:eq(1) span").empty();
			$("#mainCommonSecondLine p:eq(1) span").append("我的留言");
			//userMessage
			$(".comUserName").empty();
			$(".comUserName").append("用戶名：");
			$(".comUserEmail").empty();
			$(".comUserEmail").append("郵箱：");
			$(".comUserID").empty();
			$(".comUserID").append("身份：");
			$(".comUserPass").empty();
			$(".comUserPass").append("密碼：");
			$(".comUserPassAgain").empty();
			$(".comUserPassAgain").append("密碼確認：");
			//myOther
			$(".deleteMyOther").empty();
			$(".deleteMyOther").append("删除訂單");
			//myLove
			$(".myLoveDel").empty();
			$(".myLoveDel").append("删除");
			//myMessage
			$('.replyMess').empty();
			$('.replyMess').append("回復");
		
			//其他多语言
			//changeLanguageTraditional();
		} else if (getCookie("language") == "Português|") {
			//页面头部
		    $(".language").empty();
			$(".language").append("Português|");
			//公共
		   $(".commonNav ul li:eq(0) a").empty();
		   $(".commonNav ul li:eq(0) a").append("conta");
		   $(".commonNav ul li:eq(1) a").empty();
		   $(".commonNav ul li:eq(1) a").append("encomenda");
		   $(".commonNav ul li:eq(2) a").empty();
		   $(".commonNav ul li:eq(2) a").append("colecção");
		   $(".commonNav ul li:eq(3) a").empty();
		   $(".commonNav ul li:eq(3) a").append("Mensagens");
			$(".ComChange").empty();
		   $(".ComChange").append("Modificar");
			//mainCommon
			$("#commonHead label:eq(0) p:eq(1)").empty();
			$("#commonHead label:eq(0) p:eq(1)").append("Mensagem");
			$("#commonHead label:eq(2) p:eq(1)").empty();
			$("#commonHead label:eq(2) p:eq(1)").append("coleção");
			$("#mainCommonFirstLine p:eq(0) span").empty();
			$("#mainCommonFirstLine p:eq(0) span").append("conta");
			$("#mainCommonFirstLine p:eq(1) span").empty();
			$("#mainCommonFirstLine p:eq(1) span").append("encomenda");
			$("#mainCommonSecondLine p:eq(0) span").empty();
			$("#mainCommonSecondLine p:eq(0) span").append("colecção");
			$("#mainCommonSecondLine p:eq(1) span").empty();
			$("#mainCommonSecondLine p:eq(1) span").append("Mensagem");
			//userMessage
			$(".comUserName").empty();
			$(".comUserName").append("Nome de usuário:");
			$(".comUserEmail").empty();
			$(".comUserEmail").append("E - mail:");
			$(".comUserID").empty();
			$(".comUserID").append("ID:");
			$(".comUserPass").empty();
			$(".comUserPass").append("Senha:");
			$(".comUserPassAgain").empty();
			$(".comUserPassAgain").append("Confirmar senha:");
			//myOther
			$(".deleteMyOther").empty();
			$(".deleteMyOther").append("Apagar as Ordens");
			//myLove
			$(".myLoveDel").empty();
			$(".myLoveDel").append("Del");
			//myMessage
			$('.replyMess').empty();
			$('.replyMess').append("Reply");
			//其他多语言
			//changeLanguagePortuguese();
		} else if (getCookie("language") == "English") {
			//页面头部
			$(".language").empty();
			$(".language").append("English");
			//公共
		   $(".commonNav ul li:eq(0) a").empty();
		   $(".commonNav ul li:eq(0) a").append("account");
		   $(".commonNav ul li:eq(1) a").empty();
		   $(".commonNav ul li:eq(1) a").append("order");
		   $(".commonNav ul li:eq(2) a").empty();
		   $(".commonNav ul li:eq(2) a").append("collection");
		   $(".commonNav ul li:eq(3) a").empty();
		   $(".commonNav ul li:eq(3) a").append("Message");
			$(".ComChange").empty();
		   $(".ComChange").append("change");
			//userMessage
			$(".comUserName").empty();
			$(".comUserName").append("User name：");
			$(".comUserEmail").empty();
			$(".comUserEmail").append("Email:");
			$(".comUserID").empty();
			$(".comUserID").append("Identity:");
			
			//mainCommon

			$("#commonHead label:eq(0) p:eq(1)").empty();
			$("#commonHead label:eq(0) p:eq(1)").append("message");
			$("#commonHead label:eq(2) p:eq(1)").empty();
			$("#commonHead label:eq(2) p:eq(1)").append("Collection");
			$("#mainCommonFirstLine p:eq(0) span").empty();
			$("#mainCommonFirstLine p:eq(0) span").append("My account");
			$("#mainCommonFirstLine p:eq(1) span").empty();
			$("#mainCommonFirstLine p:eq(1) span").append("My order");
			$("#mainCommonSecondLine p:eq(0) span").empty();
			$("#mainCommonSecondLine p:eq(0) span").append("My collection");
			$("#mainCommonSecondLine p:eq(1) span").empty();
			$("#mainCommonSecondLine p:eq(1) span").append("My message");
	        $(".comUserPass").empty();
			$(".comUserPass").append("Password：");
			$(".comUserPassAgain").empty();
			$(".comUserPassAgain").append("Password Again：");
			//myOther
			$(".deleteMyOther").empty();
			$(".deleteMyOther").append("Delete order");
			//myLove
			$(".myLoveDel").empty();
			$(".myLoveDel").append("delete");
			//myMessage
			$('.replyMess').empty();
			$('.replyMess').append("Reply");
			//其他多语言
		//	changeLanguageEnglish();
		}
		
	}
	//cookie
	function setCookie(c_name, value, expiredays) {
		var exdate = new Date()
		exdate.setDate(exdate.getDate() + expiredays)
		document.cookie = c_name + "=" + escape(value) +
			((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) + ";path=/"


	}


	function getCookie(c_name) {
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf(c_name + "=")
			if (c_start != -1) {
				c_start = c_start + c_name.length + 1
				c_end = document.cookie.indexOf(";", c_start)
				if (c_end == -1) c_end = document.cookie.length
				return unescape(document.cookie.substring(c_start, c_end));
			}
		}
		return ""
	}
	 });