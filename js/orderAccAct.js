$(function(){
	window.onload=function(){
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