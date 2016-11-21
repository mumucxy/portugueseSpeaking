$(function() {
	window.onload = function() {
		$("body").show();
		changeLanguage();
	}
	$(".languageShow li").click(function() {
	changeLanguage();
	});
	function changeLanguage(){
		//首页多语言的文字转换
		if (getCookie("language") == "简体") {
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
			$(".language").empty();
			$(".language").append("简体");
			$(".headSty h1").empty();
			$(".headSty h1").append("主页");
			$(".foo label").empty();
			$(".foo label").append("葡语国家食品资料库");
			$(".peo label").empty();
			$(".peo label").append("葡语双语人才库");
			$(".exh label").empty();
			$(".exh label").append("专业服务供应商");
			$(".eco label").empty();
			$(".eco label").append("经贸信息");
		} else if (getCookie("language") == "繁體") {
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
			$(".language").empty();
			$(".language").append("繁體");
			$(".headSty h1").empty();
			$(".headSty h1").append("首頁");
			$(".foo label").empty();
			$(".foo label").append("葡語國家食品資料庫");
			$(".peo label").empty();
			$(".peo label").append("中葡雙語人才資料庫 ");
			$(".exh label").empty();
			$(".exh label").append("專業服務供應商");
			$(".eco label").empty();
			$(".eco label").append("經貿信息");
		} else if (getCookie("language") == "Português|") {
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
			$(".language").empty();
			$(".language").append("Português|");
			$(".headSty h1").empty();
			$(".headSty h1").append("Página Inicial");
			$(".foo label").empty();
			$(".foo label").append("Base de Dados dos Produtos Alimentares dos Países de Língua Portuguesa");
			$(".peo label").empty();
			$(".peo label").append("Base de Dados de Profissionais Qualificados em Chinês e Português");
			$(".exh label").empty();
			$(".exh label").append("Fornecedores de Serviços Profissionais");
			$(".eco label").empty();
			$(".eco label").append("Informação Económica e Comercial");
		} else if (getCookie("language") == "English") {
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
			$(".language").empty();
			$(".language").append("English");
			$(".headSty h1").empty();
			$(".headSty h1").append("Home");
			$(".foo label").empty();
			$(".foo label").append("Portuguese Speaking Countries Food Products Database");
			$(".peo label").empty();
			$(".peo label").append("Bilingual Professional Service and Personnel Database ");
			$(".exh label").empty();
			$(".exh label").append("Fornecedores de Serviços Profissionais");
			$(".eco label").empty();
			$(".eco label").append("Trade and Economic Updates");
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
