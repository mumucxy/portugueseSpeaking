$(function() {
	window.onload=function(){
		$("body").show();
		changeLanguage();
	}
	$(".languageShow li").click(function(){
		changeLanguage();
	});
	//多语言转换
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
			//food
			$(".language").empty();
			$(".language").append("简体");
			$(".headSty h1").empty();
			$(".headSty h1").append("食品");
			$(".ui-content h3").empty();
			$(".ui-content h3").append("最新上架");
			$("#foodMoreTable li:eq(0) a").empty();
			$("#foodMoreTable li:eq(0) a").append("价格");
			$("#foodMoreTable li:eq(1) a").empty();
			$("#foodMoreTable li:eq(1) a").append("上架时间");
			$("#foodMoreTable li:eq(2) a").empty();
			$("#foodMoreTable li:eq(2) a").append("产地");
			//shoppingCart
			$("#shoppingCarPay li:eq(0) label").empty();
			$("#shoppingCarPay li:eq(0) label").append("全选");
			$("#shoppingCarPay li:eq(1) span:eq(0)").empty();
			$("#shoppingCarPay li:eq(1) span:eq(0)").append("合计");
			$("#shoppingCarPay li:eq(2) label").empty();
			$("#shoppingCarPay li:eq(2) p").append("结算");
		
		}else if(getCookie("language") == "繁體"){
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
			$(".headSty h1").append("食品");
			$(".ui-content h3").empty();
			$(".ui-content h3").append("最新上架");
			$("#foodMoreTable li:eq(0) a").empty();
			$("#foodMoreTable li:eq(0) a").append("價格");
			$("#foodMoreTable li:eq(1) a").empty();
			$("#foodMoreTable li:eq(1) a").append("上架時間");
			$("#foodMoreTable li:eq(2) a").empty();
			$("#foodMoreTable li:eq(2) a").append("產地");
			//shoppingCart
			$("#shoppingCarPay li:eq(0) label").empty();
			$("#shoppingCarPay li:eq(0) label").append("全選");
			$("#shoppingCarPay li:eq(1) span:eq(0)").empty();
			$("#shoppingCarPay li:eq(1) span:eq(0)").append("合計");
			$("#shoppingCarPay li:eq(2) label").empty();
			$("#shoppingCarPay li:eq(2) p").append("結算");
		
		}else if(getCookie("language") == "Português|"){
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
			$(".headSty h1").append("Alimentares");
			$(".ui-content h3").empty();
			$(".ui-content h3").append("Produtos Recém-ChegadosMais");
		    $("#foodMoreTable li:eq(0) a").empty();
			$("#foodMoreTable li:eq(0) a").append("Preço");
			$("#foodMoreTable li:eq(1) a").empty();
			$("#foodMoreTable li:eq(1) a").append("A Hora do recreio");
			$("#foodMoreTable li:eq(2) a").empty();
			$("#foodMoreTable li:eq(2) a").append("De Origem");
			//shoppingCart
			$("#shoppingCarPay li:eq(0) label").empty();
			$("#shoppingCarPay li:eq(0) label").append("Select");
			$("#shoppingCarPay li:eq(1) span:eq(0)").empty();
			$("#shoppingCarPay li:eq(1) span:eq(0)").append("Total");
			$("#shoppingCarPay li:eq(2) label").empty();
			$("#shoppingCarPay li:eq(2) p").append("Liquidação");
			
		}else if(getCookie("language") == "English"){
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
			$(".headSty h1").append("Food");
			$(".ui-content h3").empty();
			$(".ui-content h3").append("New Arrivalsmore");
		    $("#foodMoreTable li:eq(0) a").empty();
			$("#foodMoreTable li:eq(0) a").append("Price");
			$("#foodMoreTable li:eq(1) a").empty();
			$("#foodMoreTable li:eq(1) a").append("Time on shelves");
			$("#foodMoreTable li:eq(2) a").empty();
			$("#foodMoreTable li:eq(2) a").append("Place of Origin");
			//shoppingCart
			$("#shoppingCarPay li:eq(0) label").empty();
			$("#shoppingCarPay li:eq(0) label").append("Select");
			$("#shoppingCarPay li:eq(1) span:eq(0)").empty();
			$("#shoppingCarPay li:eq(1) span:eq(0)").append("Total");
			$("#shoppingCarPay li:eq(2) p").empty();
			$("#shoppingCarPay li:eq(2) p").append("Settlement");
		
		}
	}
	//匿名闭包函数
	//食品排序筛选
	(function() {
		
		var compare = {
			//排序食品名字
			from: function(a, b) {
				if (a < b) {
					return -1;
				} else {
					return a > b ? 1 : 0;
				}
			},	
			price: function(a, b) {
				a = a.split('￥');
				b = b.split('￥');
	
				a = Number(a[1]);
				b = Number(b[1]);
	
				return a - b;
			},
			//排序日期
			date: function(a, b) {
				a = new Date(a);
				b = new Date(b);
	
				return a - b;
			}
		};
	
		var rows = $(".foodCon").find("dl").toArray(); //将食品简介信息放入名为rows的数组中
		$("#foodMoreTable li").click(function() { //当点击某个排序筛选时
			var order = $(this).data("sort"); //将表头的data-sort属性值保存到名为order的变量里
			var column = $("#foodMoreTable li").index(this);
			if ($(this).is('.ascending') || $(this).is('.descending')) {
				$(this).toggleClass('ascending descending')
				$(".foodCon").append(rows.reverse());
			} else {
				$(this).addClass('ascending');
				$(this).siblings().removeClass('ascending descending'); //移除同胞元素的相应样式值
				if (compare.hasOwnProperty(order)) {
	
	
	
					//sort() 方法用于对数组的元素进行排序
					rows.sort(function(a, b) { //应用在行数组之上的sort()方法进行两行一组的比较        
						a = $(a).find('dd').eq(column + 1).text(); //将上架时间储存在变量里
						b = $(b).find('dd').eq(column + 1).text();
						return compare[order](a, b); //进行排序      
					});
					$(".foodCon").append(rows); //将这些行追加到表格中
				}
			}
		});
	}());
	//購物車
	$("fieldset .ui-checkbox").append('<span><img src="../css/themes/images/icons-png/edit-black.png" /></span>'); 
	$("fieldset .ui-checkbox").append('<div class="sCartSelectNum"><button class="minus"><img src="../css/themes/images/icons-png/minus-black.png"/></button><input type="text" value="1"/><button class="add"><img src="../css/themes/images/icons-png/plus-black.png"/></button></div>');
	$("fieldset .ui-checkbox .sCartSelectNum").append('<button class="deleteProduct">删除</button>')
	$("fieldset .ui-checkbox .sCartSelectNum").append('<button class="changComplete">完成</button>')
	//更改商品數量
	$("span").click(function(){	
	   $(this).parent().children(".sCartSelectNum").fadeIn();
	 });
	//增加
	$(".add").click(function(){
		event.preventDefault(); //阻止默認事件發生
		 var productOriNum = parseInt($(this).parent().children(".sCartSelectNum input").prop("value"));
		 var productChanNum = productOriNum+1 ;
		$(this).parent().children(".sCartSelectNum input").prop("value",productChanNum);
	});
	//減少
		$(".minus").click(function(){
		 event.preventDefault(); 
		 var productOriNum = parseInt($(this).parent().children(".sCartSelectNum input").prop("value"));
		 if(productOriNum>1){
		 var productChanNum = productOriNum-1 ;
		 $(this).parent().children(".sCartSelectNum input").prop("value",productChanNum);
		 }
		
	});
	//完成修改
	$(".sCartSelectNum  .changComplete").click(function(){
		event.preventDefault(); 	
	    $(this).parent().parent().find(".sCartProMess p:eq(2)").empty();
		$(this).parent().parent().find(".sCartProMess p:eq(2)").append('x'+$(this).parent().children(".sCartSelectNum input").prop("value"));
		var _onePrice = $(this).parent().parent().find(".onePrice").html().split("￥");
		var _one_Price = parseFloat(_onePrice[1]);
		$(this).parent().parent().find(".onePrice").empty();
		$(this).parent().parent().find(".onePrice").append('￥'+$(this).parent().children(".sCartSelectNum input").prop("value")*_one_Price);
		$(".sCartSelectNum").fadeOut();
		checkNum();
	});
	//删除商品
	$(".sCartSelectNum  .deleteProduct").click(function(){
		event.preventDefault(); 
		$(this).parent().parent().remove();
	});
	//选中商品
	$("input").click(function() {
		checkNum();
	});
	//支付全选
	$(".payMess input").click(function() {
		if (this.checked == true) {
			$("input[type='checkbox']").prop("checked", true).checkboxradio("refresh");
		} else {
			$("input[type='checkbox']").prop("checked", false).checkboxradio("refresh");
		}
		checkNum()
	});
	//分类全选
	$(".sCClassify legend input").click(function() {
		var haveClassify = $(this).prop("id").split("-");
		var selectName = "checkbox-choice-" + haveClassify[1];
		var _selectName = "input[name='" + selectName + "']"
		if (this.checked == true) {
			$(_selectName).prop("checked", true).checkboxradio("refresh");
		} else {
			$(_selectName).prop("checked", false).checkboxradio("refresh");
		}
		checkNum()
	});
	//统计价格
	function checkNum() {
		var totalPrice = 0;
		$("input").each(function(i) {
			var inputEach = $(this);
			if (inputEach.prop("checked")) {
				$("label").each(function(j) {
					var labelEach = $(this);
					if (inputEach.prop("id") == labelEach.prop("for")) {
						var _labelEachFor = "label[for = '" + labelEach.prop("for") + "'] .onePrice";
						if ($(_labelEachFor).html() != undefined) {
							var _onePrice = $(_labelEachFor).html().split("￥");
							var _one_Price = parseFloat(_onePrice[1]);
							totalPrice += _one_Price;
						}
					}
				});
			}
		});
		$("#sCtotalPrice").empty();
		$("#sCtotalPrice").append(totalPrice);	
		return totalPrice;
	}
		
	$(".scPay").click(function(){
		event.preventDefault(); 
		var shopArrayImg = [];
		var shopArrayName = [];
		var shopArrayPrice = [];
		var shopArrayNum = [];
		$("input").each(function(i) {
			var inputEach = $(this);
			if (inputEach.prop("checked")) {
				$("label").each(function(j) {
					var labelEach = $(this);
					if (inputEach.prop("id") == labelEach.prop("for")) {
						var _labelEachForImg ="label[for = '" + labelEach.prop("for") + "'] .shopArrayImg";
						var _labelEachForName ="label[for = '" + labelEach.prop("for") + "'] .shopArrayName";
						var _labelEachForPrice ="label[for = '" + labelEach.prop("for") + "'] .onePrice";
						var _labelEachForNum ="label[for = '" + labelEach.prop("for") + "'] .shopArrayNum";
						if ($(_labelEachForPrice).html() != undefined) {
							shopArrayImg.push($(_labelEachForImg).html());
						   shopArrayName.push ($(_labelEachForName).html());
						   shopArrayPrice.push ($(_labelEachForPrice).html());	
						   shopArrayNum.push ($(_labelEachForNum).html());	
						}
					}
				});
				
			}
			
		});
		setCookie('totalPrice',checkNum(),1);
		setCookie('shopArrayImg',shopArrayImg,1);
		setCookie('shopArrayName',shopArrayName,1);
		setCookie('shopArrayPrice',shopArrayPrice,1);
		setCookie('shopArrayNum',shopArrayNum,1);
		if(getCookie("totalPrice") != 0){
			location.href = "../z_pay/orderAccout.html";//接收页面.
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
	
    
});



















