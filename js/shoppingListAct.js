$(function(){	
	window.onload=function(){
		$("body").show();
		changeLanguage();
	}
	$(".languageShow li").click(function(){
		setCookie("language",$(this).html(),365);
		changeLanguage()
	});
	   var shopArrayImgLength = getCookie("shopArrayImg").split(",");
		var shopArrayNameLength = getCookie("shopArrayName").split(",");
		var shopArrayPriceLength = getCookie("shopArrayPrice").split(",");
		var shopArrayNumLength = getCookie("shopArrayNum").split(",");
	 	for(var i = 0 ; i<shopArrayNameLength.length;i++){
            var theListMess = "<li ><div style='clear: both;'>"
                               + shopArrayImgLength[i]+ "</div><div><p>"
			   		           + shopArrayNameLength[i]+ "</p><p >"
			   		           + shopArrayPriceLength[i]+ "</p><p >&nbsp;"
			   		           + shopArrayNumLength[i]+ "</p></div></li>"
			   	
            $("#shoppingListMess").append(theListMess);
	       }
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
		  }else{
		  	location.href="../z_food/shoppingCart.html"
		  }
		return ""
		}
	//changeLocation
	//删除地址
	$(".cL_delete").click(function(){
		$(this).parent().parent().remove();
	});
	//多语言转换
	function changeLanguage(){
		if(getCookie("language") == "简体"){
		$(".language").empty();
		$(".language").append(getCookie("language") );
		$(".headSty h1").empty();
		$(".headSty h1").append("订单结算");
		//location
		$(".mylocation p:eq(0) span:eq(0) span:eq(0)").empty();
		$(".mylocation p:eq(0) span:eq(0) span:eq(0)").append("收货人");
		$(".mylocation p:eq(1) span:eq(0)").empty();
		$(".mylocation p:eq(1) span:eq(0)").append("收货地址");
		$("#changeLocation").empty();
		$("#changeLocation").append("修改");
		$(".sure a").empty();
		$(".sure a").append("確定");
		//changelocation
		$(".mylocation p:eq(2) span:eq(0) a").empty();
		$(".mylocation p:eq(2) span:eq(0) a").append("编辑");
		$(".mylocation p:eq(2) span:eq(1) a").empty();
		$(".mylocation p:eq(2) span:eq(1) a").append("删除");
		$("#changeLoAddLocat").empty();
		$("#changeLoAddLocat").append("添加新地址");
		//addLocation
		$("#addLocation label:eq(0)").empty();
		$("#addLocation label:eq(0)").append("收货人：");
		$("#addLocation label:eq(1)").empty();
		$("#addLocation label:eq(1)").append("联系电话：");
		$("#addLocation label:eq(2)").empty();
		$("#addLocation label:eq(2)").append("收货地址：");
		}else if(getCookie("language") == "繁體"){
			$(".language").empty();
		$(".language").append(getCookie("language") );
			$(".headSty h1").empty();
		$(".headSty h1").append("訂單結算");
		//location
		$(".mylocation p:eq(0) span:eq(0) span:eq(0)").empty();
		$(".mylocation p:eq(0) span:eq(0) span:eq(0)").append("收貨人");
		$(".mylocation p:eq(1) span:eq(0)").empty();
		$(".mylocation p:eq(1) span:eq(0)").append("收貨地址");
		$("#changeLocation").empty();
		$("#changeLocation").append("修改");
		$(".sure a").empty();
		$(".sure a").append("確定");
		//changelocation
		$(".mylocation p:eq(2) span:eq(0) a").empty();
		$(".mylocation p:eq(2) span:eq(0) a").append("編輯");
		$(".mylocation p:eq(2) span:eq(1) a").empty();
		$(".mylocation p:eq(2) span:eq(1) a").append("删除");
		$("#changeLoAddLocat").empty();
		$("#changeLoAddLocat").append("添加新地址");
		//addLocation
		$("#addLocation label:eq(0)").empty();
		$("#addLocation label:eq(0)").append("收貨人：");
		$("#addLocation label:eq(1)").empty();
		$("#addLocation label:eq(1)").append("聯繫電話：");
		$("#addLocation label:eq(2)").empty();
		$("#addLocation label:eq(2)").append("收貨地址：");
		}else if(getCookie("language") == "Português|"){
			$(".language").empty();
		$(".language").append(getCookie("language") );
			$(".headSty h1").empty();
		$(".headSty h1").append("ordem de liquidação");
		//location
		$(".mylocation p:eq(0) span:eq(0) span:eq(0)").empty();
		$(".mylocation p:eq(0) span:eq(0) span:eq(0)").append("O destinatário");
		$(".mylocation p:eq(1) span:eq(0)").empty();
		$(".mylocation p:eq(1) span:eq(0)").append("O endereço de entrega");
		$("#changeLocation").empty();
		$("#changeLocation").append("Modificar");
		$(".sure a").empty();
		$(".sure a").append("OK");
		//changelocation
		$(".mylocation p:eq(2) span:eq(0) a").empty();
		$(".mylocation p:eq(2) span:eq(0) a").append("Editar");
		$(".mylocation p:eq(2) span:eq(1) a").empty();
		$(".mylocation p:eq(2) span:eq(1) a").append("Del");
		$("#changeLoAddLocat").empty();
		$("#changeLoAddLocat").append("Adicionar um novo endereço");
		//addLocation
		$("#addLocation label:eq(0)").empty();
		$("#addLocation label:eq(0)").append("O destinatário：");
		$("#addLocation label:eq(1)").empty();
		$("#addLocation label:eq(1)").append("O telefone de Contato：");
		$("#addLocation label:eq(2)").empty();
		$("#addLocation label:eq(2)").append("O endereço de entrega：");
		}else if(getCookie("language") == "English"){
			$(".language").empty();
		$(".language").append(getCookie("language") );
			$(".headSty h1").empty();
		$(".headSty h1").append("Order settlement");
		//location
		$(".mylocation p:eq(0) span:eq(0) span:eq(0)").empty();
		$(".mylocation p:eq(0) span:eq(0) span:eq(0)").append("Consignee");
		$(".mylocation p:eq(1) span:eq(0)").empty();
		$(".mylocation p:eq(1) span:eq(0)").append("Receipt address");
		$("#changeLocation").empty();
		$("#changeLocation").append("modify");
		$(".sure a").empty();
		$(".sure a").append("OK");
		//changelocation
		$(".mylocation p:eq(2) span:eq(0) a").empty();
		$(".mylocation p:eq(2) span:eq(0) a").append("edit");
		$(".mylocation p:eq(2) span:eq(1) a").empty();
		$(".mylocation p:eq(2) span:eq(1) a").append("delete");
		$("#changeLoAddLocat").empty();
		$("#changeLoAddLocat").append("Add a new address");
		//addLocation
		$("#addLocation label:eq(0)").empty();
		$("#addLocation label:eq(0)").append("Consignee：");
		$("#addLocation label:eq(1)").empty();
		$("#addLocation label:eq(1)").append("Contact number：");
		$("#addLocation label:eq(2)").empty();
		$("#addLocation label:eq(2)").append("Receipt address：");
		}
	}
});