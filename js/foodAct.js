$(function() {
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
		  }else{
		  	location.href="../z_food/shoppingCart.html"
		  }
		return ""
		}
		

});



















