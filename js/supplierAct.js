$(function() {
	window.onload = function() {
	$("body").show(); //窗口加载完时显示页面
		changeLanguage(); //多语言显示
	}
	$(".languageShow li").click(function() {
		changeLanguage(); //多语言显示
	});

	function changeLanguage() {
		//supplier页面多语言的文字转换
		if (getCookie("language") == "简体") {
			//页面头部
        	$(".headSty h1").empty();
			$(".headSty h1").append("账户中心");
			$(".language").empty();
			$(".language").append("简体");
			$(".supplierNav li:eq(0) a").empty();
			$(".supplierNav li:eq(0) a").append("账户");
			$(".supplierNav li:eq(1) a").empty();
			$(".supplierNav li:eq(1) a").append("企业");
			$(".supplierNav li:eq(2) a").empty();
			$(".supplierNav li:eq(2) a").append("发布");
			$(".supplierNav li:eq(3) a").empty();
			$(".supplierNav li:eq(3) a").append("留言");
			//共用
			$(".SuChangeMessage").empty();
			$(".SuChangeMessage").append("修改资料");
			//userMessage
			$("#SuUserMessName span").empty();
			$("#SuUserMessName span").append("用户名：");
			$("#SuUserMessEmail span").empty();
			$("#SuUserMessEmail span").append("邮箱：");
			$("#SuUserMessStatus span").empty();
			$("#SuUserMessStatus span").append("身份：");
			//userMessageChange
			$("#SuUserMessChaName").empty();
			$("#SuUserMessChaName").append("用户名：");
			$("#SuUserMessChaEmail").empty();
			$("#SuUserMessChaEmail").append("邮箱：");
			$("#SuUserMessChaPass").empty();
			$("#SuUserMessChaPass").append("密码：");
			$("#SuUserMessChaPassAgain").empty();
			$("#SuUserMessChaPassAgain").append("密码确认：");
			//conpanyMess
			$(".ConMessStatus").empty();
			$(".ConMessStatus").append("我的身份：");
			$(".ConMessConpanyName").empty();
			$(".ConMessConpanyName").append("企业名称：");
			$(".ConMessFrom").empty();
			$(".ConMessFrom").append("国家/地区：");
			$(".ConMessExport").empty();
			$(".ConMessExport").append("主要进口（出口）国家/地区：");
			$(".ConMessCharacter").empty();
			$(".ConMessCharacter").append("业务性质：");
			$(".ConMessIntro").empty();
			$(".ConMessIntro").append("企业介绍：");
			$(".ConMessPhone").empty();
			$(".ConMessPhone").append("联系方式：");
			$(".ConMessEmail").empty();
			$(".ConMessEmail").append("电子邮箱：");
			//noConpanyMess
			$("#noConMessAttent").empty();
			$("#noConMessAttent").append("您还没上传您的信息，请问是否马上上传？");
			$("#noConMessUploadNow a").empty();
			$("#noConMessUploadNow a").append("上传信息");
			//其他多语言
			changeLanguageSimple();
		} else if (getCookie("language") == "繁體") {
			//页面头部
			$(".headSty h1").empty();
			$(".headSty h1").append("帳戶中心");
			$(".language").empty();
			$(".language").append("繁體");
			$(".supplierNav li:eq(0) a").empty();
			$(".supplierNav li:eq(0) a").append("帳戶");
			$(".supplierNav li:eq(1) a").empty();
			$(".supplierNav li:eq(1) a").append("企業");
			$(".supplierNav li:eq(2) a").empty();
			$(".supplierNav li:eq(2) a").append("發佈");
			$(".supplierNav li:eq(3) a").empty();
			$(".supplierNav li:eq(3) a").append("留言");
			//共用
			$(".SuChangeMessage").empty();
			$(".SuChangeMessage").append("修改資料");
			//userMessage
			$("#SuUserMessName span").empty();
			$("#SuUserMessName span").append("用戶名：");
			$("#SuUserMessEmail span").empty();
			$("#SuUserMessEmail span").append("郵箱：");
			$("#SuUserMessStatus span").empty();
			$("#SuUserMessStatus span").append("身份：");
			//userMessageChange
			$("#SuUserMessChaName").empty();
			$("#SuUserMessChaName").append("用戶名：");
			$("#SuUserMessChaEmail").empty();
			$("#SuUserMessChaEmail").append("郵箱：");
			$("#SuUserMessChaPass").empty();
			$("#SuUserMessChaPass").append("密碼：");
			$("#SuUserMessChaPassAgain").empty();
			$("#SuUserMessChaPassAgain").append("密碼確認：");
			//conpanyMess
			$(".ConMessStatus").empty();
			$(".ConMessStatus").append("我的身份：");
			$(".ConMessConpanyName").empty();
			$(".ConMessConpanyName").append("企業名稱：");
			$(".ConMessFrom").empty();
			$(".ConMessFrom").append("國家/地區：");
			$(".ConMessExport").empty();
			$(".ConMessExport").append("主要進口（出口）國家/地區：");
			$(".ConMessCharacter").empty();
			$(".ConMessCharacter").append("業務性質：");
			$(".ConMessIntro").empty();
			$(".ConMessIntro").append("企業介紹：");
			$(".ConMessPhone").empty();
			$(".ConMessPhone").append("聯繫方式：");
			$(".ConMessEmail").empty();
			$(".ConMessEmail").append("電子郵箱：");
			//noConpanyMess
			$("#noConMessAttent").empty();
			$("#noConMessAttent").append("您還沒上傳您的資訊，請問是否馬上上傳？");
			$("#noConMessUploadNow a").empty();
			$("#noConMessUploadNow a").append("上傳資訊");
			//其他多语言
			changeLanguageTraditional();
		} else if (getCookie("language") == "Português|") {
			//页面头部
			$(".headSty h1").empty();
			$(".headSty h1").append("Centro de Contas");
		    $(".language").empty();
			$(".language").append("Português|");
			$(".supplierNav li:eq(0) a").empty();
			$(".supplierNav li:eq(0) a").append("conta");
			$(".supplierNav li:eq(1) a").empty();
			$(".supplierNav li:eq(1) a").append("empresa");
			$(".supplierNav li:eq(2) a").empty();
			$(".supplierNav li:eq(2) a").append("publicação");
			$(".supplierNav li:eq(3) a").empty();
			$(".supplierNav li:eq(3) a").append("Mensagem");
			//共用
			$(".SuChangeMessage").empty();
			$(".SuChangeMessage").append("Alteração de dados");
			//userMessage
			$("#SuUserMessName span").empty();
			$("#SuUserMessName span").append("Nome de usuário：");
			$("#SuUserMessEmail span").empty();
			$("#SuUserMessEmail span").append("Caixa de correio：");
			$("#SuUserMessStatus span").empty();
			$("#SuUserMessStatus span").append("identidade：");
			//userMessageChange
			$("#SuUserMessChaName").empty();
			$("#SuUserMessChaName").append("Nome de usuário：");
			$("#SuUserMessChaEmail").empty();
			$("#SuUserMessChaEmail").append("Caixa de correio：");
		$("#SuUserMessChaPass").empty();
			$("#SuUserMessChaPass").append("senha：");
			$("#SuUserMessChaPassAgain").empty();
			$("#SuUserMessChaPassAgain").append("Confirmar senha：");
			
			//conpanyMess
			$(".ConMessStatus").empty();
			$(".ConMessStatus").append("minha identidade:");
			$(".ConMessConpanyName").empty();
			$(".ConMessConpanyName").append("Nome de empresa:");
			$(".ConMessFrom").empty();
			$(".ConMessFrom").append("País / região:");
			$(".ConMessExport").empty();
			$(".ConMessExport").append("As regiões / países (exportação):：");
			$(".ConMessCharacter").empty();
			$(".ConMessCharacter").append("natureza do negócio:：");
			$(".ConMessIntro").empty();
			$(".ConMessIntro").append("Introdução Da empresa:");
			$(".ConMessPhone").empty();
			$(".ConMessPhone").append("Forma de Contato:");
			$(".ConMessEmail").empty();
			$(".ConMessEmail").append("E - mail:");
			//noConpanyMess
			$("#noConMessAttent").empty();
			$("#noConMessAttent").append("Você não gostaria de enviar a SUA informação, Se enviar imediatamente?");
			$("#noConMessUploadNow a").empty();
			$("#noConMessUploadNow a").append("Upload");
			//其他多语言
			changeLanguagePortuguese();
		} else if (getCookie("language") == "English") {
			//页面头部
			$(".headSty h1").empty();
			$(".headSty h1").append("Account center");
			$(".language").empty();
			$(".language").append("English");
			$(".supplierNav li:eq(0) a").empty();
			$(".supplierNav li:eq(0) a").append("account");
			$(".supplierNav li:eq(1) a").empty();
			$(".supplierNav li:eq(1) a").append("enterprise");
			$(".supplierNav li:eq(2) a").empty();
			$(".supplierNav li:eq(2) a").append("Release");
			$(".supplierNav li:eq(3) a").empty();
			$(".supplierNav li:eq(3) a").append("message.");
			//共用
			$(".SuChangeMessage").empty();
			$(".SuChangeMessage").append("Modify data");
			//userMessage
			$("#SuUserMessName span").empty();
			$("#SuUserMessName span").append("User name：");
			$("#SuUserMessEmail span").empty();
			$("#SuUserMessEmail span").append("Email：");
			$("#SuUserMessStatus span").empty();
			$("#SuUserMessStatus span").append("Identity：");
			//userMessageChange
			$("#SuUserMessChaName").empty();
			$("#SuUserMessChaName").append("User name：");
			$("#SuUserMessChaEmail").empty();
			$("#SuUserMessChaEmail").append("Email：");
			$("#SuUserMessChaPass").empty();
			$("#SuUserMessChaPass").append("Password：");
			$("#SuUserMessChaPassAgain").empty();
			$("#SuUserMessChaPassAgain").append("Password Again：");
			//conpanyMess
			$(".ConMessStatus").empty();
			$(".ConMessStatus").append("My identity:");
			$(".ConMessConpanyName").empty();
			$(".ConMessConpanyName").append("Enterprise name:");
			$(".ConMessFrom").empty();
			$(".ConMessFrom").append("Country / region:");
			$(".ConMessExport").empty();
			$(".ConMessExport").append("Major import (export) country / region:");
			$(".ConMessCharacter").empty();
			$(".ConMessCharacter").append("Business nature:");
			$(".ConMessIntro").empty();
			$(".ConMessIntro").append("Enterprise introduction:");
			$(".ConMessPhone").empty();
			$(".ConMessPhone").append("Contact information：");
			$(".ConMessEmail").empty();
			$(".ConMessEmail").append("Email：");
			//noConpanyMess
			$("#noConMessAttent").empty();
			$("#noConMessAttent").append("You haven't uploaded your message, will you upload it right away?");
			$("#noConMessUploadNow a").empty();
			$("#noConMessUploadNow a").append("Upload");
			//其他多语言
			changeLanguageEnglish();
		}
	}
	//中文
	function changeLanguageSimple(){
		//myConpany
		$("#IDbuy0").empty();
		$("#IDbuy0").append("采购商");
		$("#IDpurchase0").empty();
		$("#IDpurchase0").append("供应商");
		$("#IDgrent0").empty();
		$("#IDgrent0").append("代理商");
		$("#ConpayCountryButton").empty();
		$("#ConpayCountryButton").append("请选择");
		$("#ConpayCountry li:eq(0)").empty();
		$("#ConpayCountry li:eq(0)").append("安哥拉");
		$("#ConpayCountry li:eq(1)").empty();
		$("#ConpayCountry li:eq(1)").append("巴西");
		$("#ConpayCountry li:eq(2)").empty();
		$("#ConpayCountry li:eq(2)").append("中国");
		$("#ConpayCountry li:eq(3)").empty();
		$("#ConpayCountry li:eq(3)").append("几内亚比绍");
		$("#ConpayCountry li:eq(4)").empty();
		$("#ConpayCountry li:eq(4)").append("中国澳门");
		$("#ConpayCountry li:eq(5)").empty();
		$("#ConpayCountry li:eq(5)").append("葡萄牙");
		$("#ConpayCountry li:eq(6)").empty();
		$("#ConpayCountry li:eq(6)").append("其他");
		$("#Scharacter0Id").empty();
		$("#Scharacter0Id").append("制造商");
		$("#Scharacter1Id").empty();
		$("#Scharacter1Id").append("出口商");
		$("#Scharacter2Id").empty();
		$("#Scharacter2Id").append("进口商");
		//addProduct
        $("#addProductLanguage label:eq(0)").empty();
        $("#addProductLanguage label:eq(0)").append("产品名称：");
        $("#addProductLanguage label:eq(1)").empty();
        $("#addProductLanguage label:eq(1)").append("产品类别：");
        $("#addProductLanguage label:eq(2)").empty();
        $("#addProductLanguage label:eq(2)").append("产品产地：");
        $("#addProductLanguage label:eq(3)").empty();
        $("#addProductLanguage label:eq(3)").append("产品价格：");
        $("#addProductLanguage label:eq(4)").empty();
        $("#addProductLanguage label:eq(4)").append("生产厂家：");
        $("#addProductLanguage label:eq(5)").empty();
        $("#addProductLanguage label:eq(5)").append("库存：");
        $("#addProductLanguage label:eq(6)").empty();
        $("#addProductLanguage label:eq(6)").append("上架时间：");
        $("#addProductLanguage label:eq(7)").empty();
        $("#addProductLanguage label:eq(7)").append("下架时间：");
        $("#addProductLanguage label:eq(8)").empty();
        $("#addProductLanguage label:eq(8)").append("产品信息：");
        $("#addProductLanguage label:eq(9)").empty();
        $("#addProductLanguage label:eq(9)").append("产品封面图：");
        $("#addProductLanguage label:eq(10)").empty();
        $("#addProductLanguage label:eq(10)").append("产品介绍：");
		//leaveWordMore
        $("#leaWorMorTitle").empty();
        $("#leaWorMorTitle").append("主题：");
        $("#leaWorMorEmail").empty();
        $("#leaWorMorEmail").append("用户电邮：");
        $("#leaWorMorNeed").empty();
        $("#leaWorMorNeed").append("用户需求：");
        $("#leaWorMorNum").empty();
        $("#leaWorMorNum").append("订购数量：");
        $("#leaWorMoRead").empty();
        $("#leaWorMoRead").append("已阅");
	}
		//繁体
	function changeLanguageTraditional(){
	//myConpany
		$("#IDbuy0").empty();
		$("#IDbuy0").append("採購商");
		$("#IDpurchase0").empty();
		$("#IDpurchase0").append("供應商");
		$("#IDgrent0").empty();
		$("#IDgrent0").append("代理商");
		$("#ConpayCountryButton").empty();
		$("#ConpayCountryButton").append("請選擇");
		$("#ConpayCountry li:eq(0)").empty();
		$("#ConpayCountry li:eq(0)").append("安哥拉");
		$("#ConpayCountry li:eq(1)").empty();
		$("#ConpayCountry li:eq(1)").append("巴西");
		$("#ConpayCountry li:eq(2)").empty();
		$("#ConpayCountry li:eq(2)").append("中國");
		$("#ConpayCountry li:eq(3)").empty();
		$("#ConpayCountry li:eq(3)").append("幾內亞·比索");
		$("#ConpayCountry li:eq(4)").empty();
		$("#ConpayCountry li:eq(4)").append("中國澳門");
		$("#ConpayCountry li:eq(5)").empty();
		$("#ConpayCountry li:eq(5)").append("葡萄牙");
		$("#ConpayCountry li:eq(6)").empty();
		$("#ConpayCountry li:eq(6)").append("其他");
		$("#Scharacter0Id").empty();
		$("#Scharacter0Id").append("製造商");
		$("#Scharacter1Id").empty();
		$("#Scharacter1Id").append("出口商");
		$("#Scharacter2Id").empty();
		$("#Scharacter2Id").append("進口商");
        //addProduct
        $("#addProductLanguage label:eq(0)").empty();
        $("#addProductLanguage label:eq(0)").append("產品名稱：");
        $("#addProductLanguage label:eq(1)").empty();
        $("#addProductLanguage label:eq(1)").append("產品類別：");
        $("#addProductLanguage label:eq(2)").empty();
        $("#addProductLanguage label:eq(2)").append("產品產地：");
        $("#addProductLanguage label:eq(3)").empty();
        $("#addProductLanguage label:eq(3)").append("產品價格：");
        $("#addProductLanguage label:eq(4)").empty();
        $("#addProductLanguage label:eq(4)").append("生產廠家：");
        $("#addProductLanguage label:eq(5)").empty();
        $("#addProductLanguage label:eq(5)").append("庫存：");
        $("#addProductLanguage label:eq(6)").empty();
        $("#addProductLanguage label:eq(6)").append("上架時間：");
        $("#addProductLanguage label:eq(7)").empty();
        $("#addProductLanguage label:eq(7)").append("下架時間：");
        $("#addProductLanguage label:eq(8)").empty();
        $("#addProductLanguage label:eq(8)").append("產品資訊：");
        $("#addProductLanguage label:eq(9)").empty();
        $("#addProductLanguage label:eq(9)").append("產品封面圖：");
        $("#addProductLanguage label:eq(10)").empty();
        $("#addProductLanguage label:eq(10)").append("產品介紹：");
	    //leaveWordMore
        $("#leaWorMorTitle").empty();
        $("#leaWorMorTitle").append("主題：");
        $("#leaWorMorEmail").empty();
        $("#leaWorMorEmail").append("用戶電郵：");
        $("#leaWorMorNeed").empty();
        $("#leaWorMorNeed").append("用戶需求：");
        $("#leaWorMorNum").empty();
        $("#leaWorMorNum").append("訂購數量：");
        $("#leaWorMoRead").empty();
        $("#leaWorMoRead").append("已閱");
	}
	//葡语
	function changeLanguagePortuguese(){
		//myConpany
		$("#IDbuy0").empty();
		$("#IDbuy0").append("Participa Da Feira de cantão");
		$("#IDpurchase0").empty();
		$("#IDpurchase0").append("Fornecedores de");
		$("#IDgrent0").empty();
		$("#IDgrent0").append("Agentes");
		$("#ConpayCountryButton").empty();
		$("#ConpayCountryButton").append("Por favor, escolha");
		$("#ConpayCountry li:eq(0)").empty();
		$("#ConpayCountry li:eq(0)").append("Angola");
		$("#ConpayCountry li:eq(1)").empty();
		$("#ConpayCountry li:eq(1)").append("Brasil");
		$("#ConpayCountry li:eq(2)").empty();
		$("#ConpayCountry li:eq(2)").append("China");
		$("#ConpayCountry li:eq(3)").empty();
		$("#ConpayCountry li:eq(3)").append("guiné - Bissau");
		$("#ConpayCountry li:eq(4)").empty();
		$("#ConpayCountry li:eq(4)").append("Macau, China");
		$("#ConpayCountry li:eq(5)").empty();
		$("#ConpayCountry li:eq(5)").append("Portugal");
		$("#ConpayCountry li:eq(6)").empty();
		$("#ConpayCountry li:eq(6)").append("Outros");
		$("#Scharacter0Id").empty();
		$("#Scharacter0Id").append("fabricante");
		$("#Scharacter1Id").empty();
		$("#Scharacter1Id").append("exportadores");
		$("#Scharacter2Id").empty();
		$("#Scharacter2Id").append("importador");
        //addProduct
        $("#addProductLanguage label:eq(0)").empty();
        $("#addProductLanguage label:eq(0)").append("Nome de Produto:");
        $("#addProductLanguage label:eq(1)").empty();
        $("#addProductLanguage label:eq(1)").append("Categorias de produtos:");
        $("#addProductLanguage label:eq(2)").empty();
        $("#addProductLanguage label:eq(2)").append("Origem do Produto:");
        $("#addProductLanguage label:eq(3)").empty();
        $("#addProductLanguage label:eq(3)").append("Preço do Produto:");
        $("#addProductLanguage label:eq(4)").empty();
        $("#addProductLanguage label:eq(4)").append("Fabricante:");
        $("#addProductLanguage label:eq(5)").empty();
        $("#addProductLanguage label:eq(5)").append("Inventário:");
        $("#addProductLanguage label:eq(6)").empty();
        $("#addProductLanguage label:eq(6)").append("Vida de prateleira:");
        $("#addProductLanguage label:eq(7)").empty();
        $("#addProductLanguage label:eq(7)").append("Tempo de prateleira:");
        $("#addProductLanguage label:eq(8)").empty();
        $("#addProductLanguage label:eq(8)").append("Informações do Produto:");
        $("#addProductLanguage label:eq(9)").empty();
        $("#addProductLanguage label:eq(9)").append("Produto: capa");
        $("#addProductLanguage label:eq(10)").empty();
        $("#addProductLanguage label:eq(10)").append("Descrição do Produto:");
	    //leaveWordMore
        $("#leaWorMorTitle").empty();
        $("#leaWorMorTitle").append("Assunto:");
        $("#leaWorMorEmail").empty();
        $("#leaWorMorEmail").append("Usuário e - mail:");
        $("#leaWorMorNeed").empty();
        $("#leaWorMorNeed").append("Usuário:");
        $("#leaWorMorNum").empty();
        $("#leaWorMorNum").append("Quantidade de ordem:");
        $("#leaWorMoRead").empty();
        $("#leaWorMoRead").append("Li");
	}
	//英语
	function changeLanguageEnglish(){
		//myConpany
		$("#IDbuy0").empty();
		$("#IDbuy0").append("Purchaser");
		$("#IDpurchase0").empty();
		$("#IDpurchase0").append("Supplier");
		$("#IDgrent0").empty();
		$("#IDgrent0").append("Agent");
		$("#ConpayCountryButton").empty();
		$("#ConpayCountryButton").append("Please select");
		$("#ConpayCountry li:eq(0)").empty();
		$("#ConpayCountry li:eq(0)").append("Angola");
		$("#ConpayCountry li:eq(1)").empty();
		$("#ConpayCountry li:eq(1)").append("Brazil");
		$("#ConpayCountry li:eq(2)").empty();
		$("#ConpayCountry li:eq(2)").append("China");
		$("#ConpayCountry li:eq(3)").empty();
		$("#ConpayCountry li:eq(3)").append("Guinea-Bissau");
		$("#ConpayCountry li:eq(4)").empty();
		$("#ConpayCountry li:eq(4)").append("Macao China");
		$("#ConpayCountry li:eq(5)").empty();
		$("#ConpayCountry li:eq(5)").append("Portugal");
		$("#ConpayCountry li:eq(6)").empty();
		$("#ConpayCountry li:eq(6)").append("Other");
		$("#Scharacter0Id").empty();
		$("#Scharacter0Id").append("Manufacturer");
		$("#Scharacter1Id").empty();
		$("#Scharacter1Id").append("Exporter");
		$("#Scharacter2Id").empty();
		$("#Scharacter2Id").append("Importer");
		//addProduct
        $("#addProductLanguage label:eq(0)").empty();
        $("#addProductLanguage label:eq(0)").append("Product name:");
        $("#addProductLanguage label:eq(1)").empty();
        $("#addProductLanguage label:eq(1)").append("Product categories:");
        $("#addProductLanguage label:eq(2)").empty();
        $("#addProductLanguage label:eq(2)").append("Product origin:");
        $("#addProductLanguage label:eq(3)").empty();
        $("#addProductLanguage label:eq(3)").append("Product price:");
        $("#addProductLanguage label:eq(4)").empty();
        $("#addProductLanguage label:eq(4)").append("Manufacturer:");
        $("#addProductLanguage label:eq(5)").empty();
        $("#addProductLanguage label:eq(5)").append("Stock：");
        $("#addProductLanguage label:eq(6)").empty();
        $("#addProductLanguage label:eq(6)").append("Time on shelves:");
        $("#addProductLanguage label:eq(7)").empty();
        $("#addProductLanguage label:eq(7)").append("Shelf time:");
        $("#addProductLanguage label:eq(8)").empty();
        $("#addProductLanguage label:eq(8)").append("Product information:");
        $("#addProductLanguage label:eq(9)").empty();
        $("#addProductLanguage label:eq(9)").append("Product cover map:");
        $("#addProductLanguage label:eq(10)").empty();
        $("#addProductLanguage label:eq(10)").append("Product introduction:");
        //leaveWordMore
        $("#leaWorMorTitle").empty();
        $("#leaWorMorTitle").append("Subject:");
        $("#leaWorMorEmail").empty();
        $("#leaWorMorEmail").append("User email:");
        $("#leaWorMorNeed").empty();
        $("#leaWorMorNeed").append("User needs:");
        $("#leaWorMorNum").empty();
        $("#leaWorMorNum").append("Order quantity:");
        $("#leaWorMoRead").empty();
        $("#leaWorMoRead").append("I have read");
        
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
