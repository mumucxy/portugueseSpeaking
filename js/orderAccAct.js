$(function(){
	window.onload=function(){
		$("body").show();
		changeLanguage();
		if(getCookie("totalPrice").length != 0){
			
		
	var myTotalPrice = getCookie("totalPrice");
	var TotalPrice1 = $("#orderExpress div:eq(1) p:eq(1) span:eq(2) span");
	var TotalPrice2 = $("#orderPay li:eq(1) span:eq(1) span");
	
	TotalPrice1.empty();
	TotalPrice1.append(myTotalPrice);
	TotalPrice2.empty();
	TotalPrice2.append(myTotalPrice);
	 var shopArrayImgLength = getCookie("shopArrayImg").split(",");
	 if(shopArrayImgLength.length > 3){
	 	 for(var i = 0 ; i<3;i++){
	 	    $("#shopArrayImgList ").append(shopArrayImgLength[i]);	 
	       }
	 	   $("#shopArrayImgList ").append("...");	
	 }else{
	 	 for(var i = 0 ; i<shopArrayImgLength.length;i++){
	 	    
	 	    $("#shopArrayImgList ").append(shopArrayImgLength[i]);	 
	       }
	 }
	}else{
		  	location.href="../z_food/shoppingCart.html"
		  }
	} 
	$(".languageShow li").click(function(){
		setCookie("language",$(this).html(),365);
		changeLanguage()
	});
	//多语言转换
	function changeLanguage(){
		if(getCookie("language") == "简体"){
		$(".language").empty();
		$(".language").append(getCookie("language") );
		$(".headSty h1").empty();
		$(".headSty h1").append("订单结算");
		$(".mylocation p:eq(0) span:eq(0) span").empty();
		$(".mylocation p:eq(0) span:eq(0) span").append("收货人");
		$(".mylocation p:eq(1) span").empty();
		$(".mylocation p:eq(1)  span").append("收货地址");
		//快递
		$("#orderExpress div:eq(1) p:eq(0) span:eq(1)").empty();
		$("#orderExpress div:eq(1) p:eq(0) span:eq(1)").append("配送");
		$("#orderExpress div:eq(1) p:eq(1) span:eq(1)").empty();
		$("#orderExpress div:eq(1) p:eq(1) span:eq(1)").append("小计：");
		$("#orderExpress div:eq(1) p:eq(2) ").empty();
		$("#orderExpress div:eq(1) p:eq(2) ").append("预计5天后送达");
		//付款
		$("#orderAccSelectPay  span:eq(0)").empty();
		$("#orderAccSelectPay  span:eq(0)").append("付款");
		$("#orderAccSelectPay  span:eq(1)").empty();
		$("#orderAccSelectPay  span:eq(1)").append("网上付款");
		//优惠运费
		$("#orderAccFav").empty();
		$("#orderAccFav").append("优惠");
		$("#orderAccDe").empty();
		$("#orderAccDe").append("运费");
		//合计
		$("#orderPay li:eq(1) span:eq(0)").empty();
		$("#orderPay li:eq(1) span:eq(0)").append("合计：");
		$("#orderPay li:eq(2) a").empty();
		$("#orderPay li:eq(2) a").append("结算");
		}else if(getCookie("language") == "繁體"){
			$(".language").empty();
		$(".language").append(getCookie("language") );
			$(".headSty h1").empty();
		$(".headSty h1").append("訂單結算");
		$(".mylocation p:eq(0) span:eq(0) span").empty();
		$(".mylocation p:eq(0) span:eq(0) span").append("收貨人");
		$(".mylocation p:eq(1) span").empty();
		$(".mylocation p:eq(1)  span").append("收貨地址");
		//快递
		$("#orderExpress div:eq(1) p:eq(0) span:eq(1)").empty();
		$("#orderExpress div:eq(1) p:eq(0) span:eq(1)").append("配送");
		$("#orderExpress div:eq(1) p:eq(1) span:eq(1)").empty();
		$("#orderExpress div:eq(1) p:eq(1) span:eq(1)").append("小計：");
		$("#orderExpress div:eq(1) p:eq(2) ").empty();
		$("#orderExpress div:eq(1) p:eq(2) ").append("預計5天后送達");
		//付款
		$("#orderAccSelectPay  span:eq(0)").empty();
		$("#orderAccSelectPay  span:eq(0)").append("付款");
		$("#orderAccSelectPay  span:eq(1)").empty();
		$("#orderAccSelectPay  span:eq(1)").append("網上付款");
		//优惠运费
		$("#orderAccFav").empty();
		$("#orderAccFav").append("優惠");
		$("#orderAccDe").empty();
		$("#orderAccDe").append("運費");
		//合计
		$("#orderPay li:eq(1) span:eq(0)").empty();
		$("#orderPay li:eq(1) span:eq(0)").append("合計：");
		$("#orderPay li:eq(2) a").empty();
		$("#orderPay li:eq(2) a").append("結算");
		}else if(getCookie("language") == "Português|"){
			$(".language").empty();
		$(".language").append(getCookie("language") );
			$(".headSty h1").empty();
		$(".headSty h1").append("ordem de liquidação");
		$(".mylocation p:eq(0) span:eq(0) span").empty();
		$(".mylocation p:eq(0) span:eq(0) span").append("O destinatário");
		$(".mylocation p:eq(1) span").empty();
		$(".mylocation p:eq(1)  span").append("O endereço de entrega");
		//快递
		$("#orderExpress div:eq(1) p:eq(0) span:eq(1)").empty();
		$("#orderExpress div:eq(1) p:eq(0) span:eq(1)").append("De distribuição");
		$("#orderExpress div:eq(1) p:eq(1) span:eq(1)").empty();
		$("#orderExpress div:eq(1) p:eq(1) span:eq(1)").append("Subtotal：");
		$("#orderExpress div:eq(1) p:eq(2) ").empty();
		$("#orderExpress div:eq(1) p:eq(2) ").append("5 Dias após a entrega");	
		//付款
		$("#orderAccSelectPay  span:eq(0)").empty();
		$("#orderAccSelectPay  span:eq(0)").append("O pagamento");
		$("#orderAccSelectPay  span:eq(1)").empty();
		$("#orderAccSelectPay  span:eq(1)").append("Pagamento Online");
		//优惠运费
		$("#orderAccFav").empty();
		$("#orderAccFav").append("Preferencial");
		$("#orderAccDe").empty();
		$("#orderAccDe").append("O frete");
		//合计
		$("#orderPay li:eq(1) span:eq(0)").empty();
		$("#orderPay li:eq(1) span:eq(0)").append("Total：");
		$("#orderPay li:eq(2) a").empty();
		$("#orderPay li:eq(2) a").append("Liquidação");
		}else if(getCookie("language") == "English"){
			$(".language").empty();
		$(".language").append(getCookie("language") );
			$(".headSty h1").empty();
		$(".headSty h1").append("Order settlement");
		
		$(".mylocation p:eq(0) span:eq(0) span").empty();
		$(".mylocation p:eq(0) span:eq(0) span").append("Consignee");
		$(".mylocation p:eq(1) span").empty();
		$(".mylocation p:eq(1)  span").append("Receipt address");
		//快递
		$("#orderExpress div:eq(1) p:eq(0) span:eq(1)").empty();
		$("#orderExpress div:eq(1) p:eq(0) span:eq(1)").append("Distribution");
		$("#orderExpress div:eq(1) p:eq(1) span:eq(1)").empty();
		$("#orderExpress div:eq(1) p:eq(1) span:eq(1)").append("Subtotal：");
		$("#orderExpress div:eq(1) p:eq(2) ").empty();
		$("#orderExpress div:eq(1) p:eq(2) ").append("Is expected 5 days after delivery");
		//付款
		$("#orderAccSelectPay span:eq(0)").empty();
		$("#orderAccSelectPay  span:eq(0)").append("payment");
		$("#orderAccSelectPay  span:eq(1)").empty();
		$("#orderAccSelectPay  span:eq(1)").append("Online payment");
		//优惠运费
		$("#orderAccFav").empty();
		$("#orderAccFav").append("Discount");
		$("#orderAccDe").empty();
		$("#orderAccDe").append("freight");
		//合计
		$("#orderPay li:eq(1) span:eq(0)").empty();
		$("#orderPay li:eq(1) span:eq(0)").append("Total：");
		$("#orderPay li:eq(2) a").empty();
		$("#orderPay li:eq(2) a").append("pay");
		}
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
		  }
		return ""
		}
   
    
});