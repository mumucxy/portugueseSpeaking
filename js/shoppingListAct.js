$(function(){	
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
		$(this).parent().remove();
	});
});