$(function(){
	window.onload=function(){
		$("body").show();
		changeLanguage();
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
			//connect
			simpleChinese()

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
			//connect
            complexChinese()
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
			//connect
			portuguese()
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
			//connect
			english()
		}
	}
		function simpleChinese(){
			//supplierMess 
			$("#supplierMess div:eq(0) p:eq(1)").empty();
			$("#supplierMess div:eq(0) p:eq(1)").append("供应商信息");
			$("#supplierMess div:eq(1) p:eq(0) span").empty();
			$("#supplierMess div:eq(1) p:eq(0) span").append("国家/地区");
			$("#supplierMess div:eq(1) p:eq(1) span").empty();
			$("#supplierMess div:eq(1) p:eq(1) span").append("企业类型");
			$("#supplierMess div:eq(1) p:eq(2) span").empty();
			$("#supplierMess div:eq(1) p:eq(2) span").append("成立年份");
			$("#supplierMess div:eq(1) p:eq(3) span").empty();
			$("#supplierMess div:eq(1) p:eq(3) span").append("雇佣人数");
			$("#supplierMess div:eq(1) p:eq(4) span").empty();
			$("#supplierMess div:eq(1) p:eq(4) span").append("业务性质");
			$("#supplierMess div:eq(1) p:eq(5) span").empty();
			$("#supplierMess div:eq(1) p:eq(5) span").append("主营产品");
			//supplierCon
			$("#supplierCon div:eq(0) p:eq(0) span").empty();
			$("#supplierCon div:eq(0) p:eq(0) span").append("联系人");
			$("#supplierCon div:eq(0) p:eq(1) span").empty();
			$("#supplierCon div:eq(0) p:eq(1) span").append("联系电话");
			$("#supplierCon div:eq(0) p:eq(2) span").empty();
			$("#supplierCon div:eq(0) p:eq(2) span").append("传真号码");
			$("#supplierCon div:eq(0) p:eq(3) span").empty();
			$("#supplierCon div:eq(0) p:eq(3) span").append("电子邮件");
			$("#supplierCon div:eq(1) p:eq(1)").empty();
			$("#supplierCon div:eq(1) p:eq(1)").append("联系方式");
			//connectSendEmail
			$("#connectSendEmail label:eq(0)").empty();
			$("#connectSendEmail label:eq(0)").append("您的电邮地址：");
			$("#connectSendEmail label:eq(1)").empty();
			$("#connectSendEmail label:eq(1)").append("收件人：");
			$("#connectSendEmail label:eq(2)").empty();
			$("#connectSendEmail label:eq(2)").append("查询内容：");
			$("#connectSendEmail label:eq(3)").empty();
			$("#connectSendEmail label:eq(3)").append("我想收到：");
			$("#connectSendEmail label:eq(4)").empty();
			$("#connectSendEmail label:eq(4)").append("公司资料：");
			$("#connectSendEmail label:eq(5)").empty();
			$("#connectSendEmail label:eq(5)").append("产品规格：");
			$("#connectSendEmail label:eq(6)").empty();
			$("#connectSendEmail label:eq(6)").append("最低订购数量：");
			$("#connectSendEmail label:eq(7)").empty();
			$("#connectSendEmail label:eq(7)").append("离岸价格：");
			$("#connectSendEmail label:eq(8)").empty();
			$("#connectSendEmail label:eq(8)").append("小批量订购：");
			$("#connectSendEmail label:eq(9)").empty();
			$("#connectSendEmail label:eq(9)").append("有兴趣：");
			$("#connectSendEmail label:eq(10)").empty();
			$("#connectSendEmail label:eq(10)").append("不感兴趣：");
			$("#connectSendEmail label:eq(11)").empty();
			$("#connectSendEmail label:eq(11)").append("初次订货量：");
          

		}
		function complexChinese(){
			//supplierMess 
			$("#supplierMess div:eq(0) p:eq(1)").empty();
			$("#supplierMess div:eq(0) p:eq(1)").append("供應商資訊");
			$("#supplierMess div:eq(1) p:eq(0) span").empty();
			$("#supplierMess div:eq(1) p:eq(0) span").append("國家/地區");
			$("#supplierMess div:eq(1) p:eq(1) span").empty();
			$("#supplierMess div:eq(1) p:eq(1) span").append("企業類型");
			$("#supplierMess div:eq(1) p:eq(2) span").empty();
			$("#supplierMess div:eq(1) p:eq(2) span").append("成立年份");
			$("#supplierMess div:eq(1) p:eq(3) span").empty();
			$("#supplierMess div:eq(1) p:eq(3) span").append("雇傭人數");
			$("#supplierMess div:eq(1) p:eq(4) span").empty();
			$("#supplierMess div:eq(1) p:eq(4) span").append("業務性質");
			$("#supplierMess div:eq(1) p:eq(5) span").empty();
			$("#supplierMess div:eq(1) p:eq(5) span").append("主營產品");
		    //supplierCon
		    $("#supplierCon div:eq(0) p:eq(0) span").empty();
			$("#supplierCon div:eq(0) p:eq(0) span").append("連絡人");
			$("#supplierCon div:eq(0) p:eq(1) span").empty();
			$("#supplierCon div:eq(0) p:eq(1) span").append("聯繫電話");
			$("#supplierCon div:eq(0) p:eq(2) span").empty();
			$("#supplierCon div:eq(0) p:eq(2) span").append("傳真號碼");
			$("#supplierCon div:eq(0) p:eq(3) span").empty();
			$("#supplierCon div:eq(0) p:eq(3) span").append("電子郵件");
			$("#supplierCon div:eq(1) p:eq(1)").empty();
			$("#supplierCon div:eq(1) p:eq(1)").append("聯繫方式");
			//connectSendEmail
			$("#connectSendEmail label:eq(0)").empty();
			$("#connectSendEmail label:eq(0)").append("您的電郵地址：");
			$("#connectSendEmail label:eq(1)").empty();
			$("#connectSendEmail label:eq(1)").append("收件人：");
			$("#connectSendEmail label:eq(2)").empty();
			$("#connectSendEmail label:eq(2)").append("査詢內容：");
			$("#connectSendEmail label:eq(3)").empty();
			$("#connectSendEmail label:eq(3)").append("我想收到：");
			$("#connectSendEmail label:eq(4)").empty();
			$("#connectSendEmail label:eq(4)").append("公司資料：");
			$("#connectSendEmail label:eq(5)").empty();
			$("#connectSendEmail label:eq(5)").append("產品規格：");
			$("#connectSendEmail label:eq(6)").empty();
			$("#connectSendEmail label:eq(6)").append("最低訂購數量：");
			$("#connectSendEmail label:eq(7)").empty();
			$("#connectSendEmail label:eq(7)").append("離岸價格：");
			$("#connectSendEmail label:eq(8)").empty();
			$("#connectSendEmail label:eq(8)").append("小批量訂購：");
			$("#connectSendEmail label:eq(9)").empty();
			$("#connectSendEmail label:eq(9)").append("有興趣：");
			$("#connectSendEmail label:eq(10)").empty();
			$("#connectSendEmail label:eq(10)").append("不感興趣：");
			$("#connectSendEmail label:eq(11)").empty();
			$("#connectSendEmail label:eq(11)").append("初次訂貨量：");
			
		}
		function portuguese(){
			//supplierMess 
			$("#supplierMess div:eq(0) p:eq(1)").empty();
			$("#supplierMess div:eq(0) p:eq(1)").append("Informações do fornecedor");
			$("#supplierMess div:eq(1) p:eq(0) span").empty();
			$("#supplierMess div:eq(1) p:eq(0) span").append("Países / regiões");
			$("#supplierMess div:eq(1) p:eq(1) span").empty();
			$("#supplierMess div:eq(1) p:eq(1) span").append("Tipo de empresa");
			$("#supplierMess div:eq(1) p:eq(2) span").empty();
			$("#supplierMess div:eq(1) p:eq(2) span").append("Ano de fundação");
			$("#supplierMess div:eq(1) p:eq(3) span").empty();
			$("#supplierMess div:eq(1) p:eq(3) span").append("O número de trabalhadores");
			$("#supplierMess div:eq(1) p:eq(4) span").empty();
			$("#supplierMess div:eq(1) p:eq(4) span").append("A natureza do negócio");
			$("#supplierMess div:eq(1) p:eq(5) span").empty();
			$("#supplierMess div:eq(1) p:eq(5) span").append("Principais produtos");
			//supplierCon
			$("#supplierCon div:eq(0) p:eq(0) span").empty();
			$("#supplierCon div:eq(0) p:eq(0) span").append("Contato");
			$("#supplierCon div:eq(0) p:eq(1) span").empty();
			$("#supplierCon div:eq(0) p:eq(1) span").append("O telefone de Contato");
			$("#supplierCon div:eq(0) p:eq(2) span").empty();
			$("#supplierCon div:eq(0) p:eq(2) span").append("Número de fax");
			$("#supplierCon div:eq(0) p:eq(3) span").empty();
			$("#supplierCon div:eq(0) p:eq(3) span").append("O e - mail");
			$("#supplierCon div:eq(1) p:eq(1)").empty();
			$("#supplierCon div:eq(1) p:eq(1)").append("Contato");
			//connectSendEmail
			$("#connectSendEmail label:eq(0)").empty();
			$("#connectSendEmail label:eq(0)").append("O SEU endereço de e - mail：");
			$("#connectSendEmail label:eq(1)").empty();
			$("#connectSendEmail label:eq(1)").append("O destinatário：");
			$("#connectSendEmail label:eq(2)").empty();
			$("#connectSendEmail label:eq(2)").append("A pesquisa de conteúdo：");
			$("#connectSendEmail label:eq(3)").empty();
			$("#connectSendEmail label:eq(3)").append("EU gostaria de receber：");
			$("#connectSendEmail label:eq(4)").empty();
			$("#connectSendEmail label:eq(4)").append("Informações sobre a empresa：");
			$("#connectSendEmail label:eq(5)").empty();
			$("#connectSendEmail label:eq(5)").append("Especificação de Produto：");
			$("#connectSendEmail label:eq(6)").empty();
			$("#connectSendEmail label:eq(6)").append("Quantidade de ordem mínima：");
			$("#connectSendEmail label:eq(7)").empty();
			$("#connectSendEmail label:eq(7)").append("Preço de FOB：");
			$("#connectSendEmail label:eq(8)").empty();
			$("#connectSendEmail label:eq(8)").append("Ordem Da quantidade Pequena：");
			$("#connectSendEmail label:eq(9)").empty();
			$("#connectSendEmail label:eq(9)").append("Tenho interesse：");
			$("#connectSendEmail label:eq(10)").empty();
			$("#connectSendEmail label:eq(10)").append("Não interessa：");
			$("#connectSendEmail label:eq(11)").empty();
			$("#connectSendEmail label:eq(11)").append("A ordem inicial de：");
		   
		}
		function english(){
			//supplierMess 
			$("#supplierMess div:eq(0) p:eq(1)").empty();
			$("#supplierMess div:eq(0) p:eq(1)").append("Supplier information");
			$("#supplierMess div:eq(1) p:eq(0) span").empty();
			$("#supplierMess div:eq(1) p:eq(0) span").append("Country / Region");
			$("#supplierMess div:eq(1) p:eq(1) span").empty();
			$("#supplierMess div:eq(1) p:eq(1) span").append("Type of enterprise");
			$("#supplierMess div:eq(1) p:eq(2) span").empty();
			$("#supplierMess div:eq(1) p:eq(2) span").append("Year of establishment");
			$("#supplierMess div:eq(1) p:eq(3) span").empty();
			$("#supplierMess div:eq(1) p:eq(3) span").append("Employment number");
			$("#supplierMess div:eq(1) p:eq(4) span").empty();
			$("#supplierMess div:eq(1) p:eq(4) span").append("Business nature");
			$("#supplierMess div:eq(1) p:eq(5) span").empty();
			$("#supplierMess div:eq(1) p:eq(5) span").append("Main products");
		   //supplierCon
		   $("#supplierCon div:eq(0) p:eq(0) span").empty();
			$("#supplierCon div:eq(0) p:eq(0) span").append("Contacts");
			$("#supplierCon div:eq(0) p:eq(1) span").empty();
			$("#supplierCon div:eq(0) p:eq(1) span").append("Contact number");
			$("#supplierCon div:eq(0) p:eq(2) span").empty();
			$("#supplierCon div:eq(0) p:eq(2) span").append("Fax number");
			$("#supplierCon div:eq(0) p:eq(3) span").empty();
			$("#supplierCon div:eq(0) p:eq(3) span").append("E-mail");
			$("#supplierCon div:eq(1) p:eq(1)").empty();
			$("#supplierCon div:eq(1) p:eq(1)").append("Contact information");
			//connectSendEmail
			$("#connectSendEmail label:eq(0)").empty();
			$("#connectSendEmail label:eq(0)").append("Your email address：");
			$("#connectSendEmail label:eq(1)").empty();
			$("#connectSendEmail label:eq(1)").append("Addressee：");
			$("#connectSendEmail label:eq(2)").empty();
			$("#connectSendEmail label:eq(2)").append("Query content：");
			$("#connectSendEmail label:eq(3)").empty();
			$("#connectSendEmail label:eq(3)").append("I want to receive：");
			$("#connectSendEmail label:eq(4)").empty();
			$("#connectSendEmail label:eq(4)").append("Company information：");
			$("#connectSendEmail label:eq(5)").empty();
			$("#connectSendEmail label:eq(5)").append("Product specifications：");
			$("#connectSendEmail label:eq(6)").empty();
			$("#connectSendEmail label:eq(6)").append("Minimum order quantity：");
			$("#connectSendEmail label:eq(7)").empty();
			$("#connectSendEmail label:eq(7)").append("FOB price：");
			$("#connectSendEmail label:eq(8)").empty();
			$("#connectSendEmail label:eq(8)").append("Small batch order：");
			$("#connectSendEmail label:eq(9)").empty();
			$("#connectSendEmail label:eq(9)").append("Have interest in：");
			$("#connectSendEmail label:eq(10)").empty();
			$("#connectSendEmail label:eq(10)").append("Uninterested：");
			$("#connectSendEmail label:eq(11)").empty();
			$("#connectSendEmail label:eq(11)").append("Initial order quantity：");

		    
		    
		    
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
