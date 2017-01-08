$(function(){
	window.onload=function(){
		$("body").show();
		changeLanguage();
		//foodMessage导航固定
	$("#fmIntro").position({top:100,left:0});
	console.log("");
	}
	$(".languageShow li").click(function(){
		changeLanguage();
	});
	
	function changeLanguage(){
			if(getCookie("language") == "简体"){
			//登陆
			$(".memberShow h1").empty();
			$(".memberShow h1").append("登录");
			$(".memberShow h5").empty();
			$(".memberShow h5").append("您还未登录，请问是否马上登录？");
			$(".memberShow a").empty();
			$(".memberShow a").append("马上去登录");
			$(".havedLogin li:eq(0) a").empty();
			$(".havedLogin li:eq(0) a").append("我的主页");
			$(".havedLogin li:eq(1) a").empty();
			$(".havedLogin li:eq(1) a").append("我的购物车");
			$(".havedLogin li:eq(2) a").empty();
			$(".havedLogin li:eq(2) a").append("我的信息");
			//头部标题
			$(".headSty h1").empty();
			$(".headSty h1").append("食品");
			$(".ui-content h3").empty();
			//foodMessage
			changeContentLanguage_simpleChinese()
			$("#foodMessBuy li:eq(0) a").empty();
			$("#foodMessBuy li:eq(0) a").append("联系供应商");
			$("#foodMessBuy li:eq(1) a").empty();
			$("#foodMessBuy li:eq(1) a").append("加入购物车");
			$("#foodMessBuy li:eq(2) a").empty();
			$("#foodMessBuy li:eq(2) a").append("直接购买");
		}else if(getCookie("language") == "繁體"){
			//登陆
			$(".memberShow h1").empty();
			$(".memberShow h1").append("登入");
			$(".memberShow h5").empty();
			$(".memberShow h5").append("您還未登錄，請問是否馬上登入？");
			$(".memberShow a").empty();
			$(".memberShow a").append("馬上去登入");
			$(".havedLogin li:eq(0) a").empty();
			$(".havedLogin li:eq(0) a").append("我的主頁");
			$(".havedLogin li:eq(1) a").empty();
			$(".havedLogin li:eq(1) a").append("我的購物車");
			$(".havedLogin li:eq(2) a").empty();
			$(".havedLogin li:eq(2) a").append("我的資訊");
			//头部标题
			$(".headSty h1").empty();
			$(".headSty h1").append("食品");
			//foodMessage
			changeContentLanguage_complexChinese()
			$("#foodMessBuy li:eq(0) a").empty();
			$("#foodMessBuy li:eq(0) a").append("聯系供應商");
			$("#foodMessBuy li:eq(1) a").empty();
			$("#foodMessBuy li:eq(1) a").append("加入購物車");
			$("#foodMessBuy li:eq(2) a").empty();
			$("#foodMessBuy li:eq(2) a").append("直接購買");
		}else if(getCookie("language") == "Português|"){
			//登陆
			$(".memberShow h1").empty();
			$(".memberShow h1").append("Login");
			$(".memberShow h5").empty();
			$(".memberShow h5").append("Se você ainda não entrou imediatamente, por favor?");
			$(".memberShow a").empty();
			$(".memberShow a").append("Vou Logar");
			$(".havedLogin li:eq(0) a").empty();
			$(".havedLogin li:eq(0) a").append("A minha home page");
			$(".havedLogin li:eq(1) a").empty();
			$(".havedLogin li:eq(1) a").append("MEU carrinho de Compras");
			$(".havedLogin li:eq(2) a").empty();
			$(".havedLogin li:eq(2) a").append("A minha Mensagem");
            //头部标题
			$(".headSty h1").empty();
			$(".headSty h1").append("Alimentares");
			//foodMessage
			changeContentLanguage_portuguese()
			$("#foodMessBuy li:eq(0) a").empty();
			$("#foodMessBuy li:eq(0) a").append("Contato");
			$("#foodMessBuy li:eq(1) a").empty();
			$("#foodMessBuy li:eq(1) a").append("Se o carro");
			$("#foodMessBuy li:eq(2) a").empty();
			$("#foodMessBuy li:eq(2) a").append("Compra direta");
		}else if(getCookie("language") == "English"){
			//登陆
			$(".memberShow h1").empty();
			$(".memberShow h1").append("Sign in");
			$(".memberShow h5").empty();
			$(".memberShow h5").append("You have not logged in, may I ask you to log in immediately?");
			$(".memberShow a").empty();
			$(".memberShow a").append("Sign on right now.");
			$(".havedLogin li:eq(0) a").empty();
			$(".havedLogin li:eq(0) a").append("My home page");
			$(".havedLogin li:eq(1) a").empty();
			$(".havedLogin li:eq(1) a").append("My shopping cart");
			$(".havedLogin li:eq(2) a").empty();
			$(".havedLogin li:eq(2) a").append("My message");
            //头部标题
			$(".headSty h1").empty();
			$(".headSty h1").append("Food");
			//foodMessage
			changeContentLanguage_english()
			$("#foodMessBuy li:eq(0) a").empty();
			$("#foodMessBuy li:eq(0) a").append("Contact supplier");
			$("#foodMessBuy li:eq(1) a").empty();
			$("#foodMessBuy li:eq(1) a").append("Join a shopping cart");
			$("#foodMessBuy li:eq(2) a").empty();
			$("#foodMessBuy li:eq(2) a").append("Direct purchase");
		}
	}
	function changeContentLanguage_simpleChinese(){
	   $(".fmMore span:eq(0)").empty();
	   $(".fmMore span:eq(0)").append("商品标示号：");
	   $(".fmEx span:eq(0)").empty();
	   $(".fmEx span:eq(0)").append("快递：");
	   $(".fmEx span:eq(1)").empty();
	   $(".fmEx span:eq(1)").append("库存：");
	   //产品详细信息	  
	   $("fmDet p:eq(0) span").empty();
	   $("fmDet p:eq(0) span").append("产品类别：");
	   $("fmDet p:eq(1) span").empty();
	   $("fmDet p:eq(1) span").append("产品品牌：");
	   $("fmDet p:eq(2) span").empty();
	   $("fmDet p:eq(2) span").append("产品产地：");
	   $("fmDet p:eq(3) span").empty();
	   $("fmDet p:eq(3) span").append("产品价格$：");
	   $("fmDet p:eq(4) span").empty();
	   $("fmDet p:eq(4) span").append("产品尺寸：");
	   $("fmDet p:eq(5) span").empty();
	   $("fmDet p:eq(5) span").append("生产厂家：");
	   $("fmDet p:eq(6) span").empty();
	   $("fmDet p:eq(6) span").append("上架时间：");
	   $("fmDet p:eq(7) span").empty();
	   $("fmDet p:eq(7) span").append("产品介绍：");
	   //更多产品信息
	   $("#fmIntro").empty();
	   $("#fmIntro").append("企业介绍");
	   $("#fmDetail").empty();
	   $("#fmDetail").append("产品详情");
	}
	function changeContentLanguage_complexChinese(){
	   $(".fmMore span:eq(0)").empty();
	   $(".fmMore span:eq(0)").append("商品標示號：");
	   $(".fmEx span:eq(0)").empty();
	   $(".fmEx span:eq(0)").append("快遞：");
	   $(".fmEx span:eq(1)").empty();
	   $(".fmEx span:eq(1)").append("庫存：");
	   	   //产品详细信息
	   $(".fmDet p:eq(0) span").empty();
	   $(".fmDet p:eq(0) span").append("產品類別：");
	   $(".fmDet p:eq(1) span").empty();
	   $(".fmDet p:eq(1) span").append("產品品牌：");
	   $(".fmDet p:eq(2) span").empty();
	   $(".fmDet p:eq(2) span").append("產品產地：");
	   $(".fmDet p:eq(3) span").empty();
	   $(".fmDet p:eq(3) span").append("產品價格$：");
	   $(".fmDet p:eq(4) span").empty();
	   $(".fmDet p:eq(4) span").append("產品尺寸：");
	   $(".fmDet p:eq(5) span").empty();
	   $(".fmDet p:eq(5) span").append("生產廠家：");
	   $(".fmDet p:eq(6) span").empty();
	   $(".fmDet p:eq(6) span").append("上架時間：");
	   $(".fmDet p:eq(7) span").empty();
	   $(".fmDet p:eq(7) span").append("產品介紹：");
	    //更多产品信息
	   $("#fmIntro").empty();
	   $("#fmIntro").append("企業介紹");
	   $("#fmDetail").empty();
	   $("#fmDetail").append("產品詳情");
	}
	function changeContentLanguage_portuguese(){
	   $(".fmMore span:eq(0)").empty();
	   $(".fmMore span:eq(0)").append("Marcado：");
	   $(".fmEx span:eq(0)").empty();
	   $(".fmEx span:eq(0)").append("Express：");
	   $(".fmEx span:eq(1)").empty();
	   $(".fmEx span:eq(1)").append("O inventário：");
	   	   //产品详细信息
	   $(".fmDet p:eq(0) span").empty();
	   $(".fmDet p:eq(0) span").append("Categoria de Produto:");
	   $(".fmDet p:eq(1) span").empty();
	   $(".fmDet p:eq(1) span").append("Marcas de produtos:");
	   $(".fmDet p:eq(2) span").empty();
	   $(".fmDet p:eq(2) span").append("A Origem do Produto:");
	   $(".fmDet p:eq(3) span").empty();
	   $(".fmDet p:eq(3) span").append("O preço do Produto$:");
	   $(".fmDet p:eq(4) span").empty();
	   $(".fmDet p:eq(4) span").append("O tamanho do Produto:");
	   $(".fmDet p:eq(5) span").empty();
	   $(".fmDet p:eq(5) span").append("Fabricantes de:");
	   $(".fmDet p:eq(6) span").empty();
	   $(".fmDet p:eq(6) span").append("A Hora do recreio:");
	   $(".fmDet p:eq(7) span").empty();
	   $(".fmDet p:eq(7) span").append("Descrição do Produto:");
	    //更多产品信息
	   $("#fmIntro").empty();
	   $("#fmIntro").append("Introdução Da empresa");
	   $("#fmDetail").empty();
	   $("#fmDetail").append("Detalhes do Produto");
	}
	function changeContentLanguage_english(){
	   $(".fmMore span:eq(0)").empty();
	   $(".fmMore span:eq(0)").append("Commodity marker：");
	   $(".fmEx span:eq(0)").empty();
	   $(".fmEx span:eq(0)").append("express：");
	   $(".fmEx span:eq(1)").empty();
	   $(".fmEx span:eq(1)").append("Stock：");
	   	   //产品详细信息
	   $(".fmDet p:eq(0) span").empty();
	   $(".fmDet p:eq(0) span").append("Product categories:");
	   $(".fmDet p:eq(1) span").empty();
	   $(".fmDet p:eq(1) span").append("Product brand:");
	   $(".fmDet p:eq(2) span").empty();
	   $(".fmDet p:eq(2) span").append("Product origin:");
	   $(".fmDet p:eq(3) span").empty();
	   $(".fmDet p:eq(3) span").append("Product price $:");
	   $(".fmDet p:eq(4) span").empty();
	   $(".fmDet p:eq(4) span").append("Product size:");
	   $(".fmDet p:eq(5) span").empty();
	   $(".fmDet p:eq(5) span").append("Manufacturer:");
	   $(".fmDet p:eq(6) span").empty();
	   $(".fmDet p:eq(6) span").append("Time on shelves:");
	   $(".fmDet p:eq(7) span").empty();
	   $(".fmDet p:eq(7) span").append("Product introduction:");
	    //更多产品信息
	   $("#fmIntro").empty();
	   $("#fmIntro").append("Enterprise introduction");
	   $("#fmDetail").empty();
	   $("#fmDetail").append("product details");
	}
	//直接购买
	$("#foodMessBuy li:eq(2)").click(function(){
	  setCookie("totalPrice",$(".fmP span").html(),1);	
	  setCookie("shopArrayImg",$(".fmC").html(),1);	
	  setCookie("shopArrayName",$(".fmT p:eq(0)").html(),1);	
	  setCookie("shopArrayNum","x1",1);	
	  setCookie("shopArrayPrice","￥"+ $(".fmP span").html(),1);	
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
		//收藏商品
	var haveCollect = 0;
	$(".fmT span").click(function(){
		if( haveCollect == 0){
		$(this).empty();
		$(this).append("<img src='../img/food/haveStar.png'/>");
		haveCollect = 1;
		}else{
			$(this).empty();
		$(this).append("<img src='../img/food/star.png'/>");
		haveCollect = 0;
		}
		
	});
	//ajax读取产品数据
	
});
