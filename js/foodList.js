$(function(){	
	//选择食品一级菜单内容
	$("#foodListOneButton").click(function(){
		event.preventDefault(); 
		if ($("#foodListOne").is(":hidden")) {
			$("#foodListOne").show();
		}else{
			$("#foodListOne").hide();
		}
	});
	$("#foodListTwoButton").click(function(){
		event.preventDefault(); 
		if ($("#foodListTwo").is(":hidden")) {
			$("#foodListTwo").show();
		}else{
			$("#foodListTwo").hide();
		}
	});
	
		$.ajax({
		type:"get",
		url:"../../json/foodList.json",
		async:true,
		success:function(data){			
				loadFoodList(data);		
		},
		error:function(){
			alert("error");
		}		
	});
	
});
function loadFoodList(data){
	// 遍历object数组 ，每个对象的值存放在value里 ，key表示为第几个对象  
	$.each(data.foodListOne, function(keyName,valueName) {
	   $("#foodListOne ul").append('<li>'+valueName.OneName+'</li>');
	});
	$("#foodListOne li").click(function(){
		$("#foodListOneButton").empty();
		$("#foodListOneButton").append($(this).html());
		 $("#foodListTwo ul").empty();
		 $("#foodListTwoButton").empty();
		 $("#foodListTwoButton").append("请选择");
	    var _this = $(this).html();
	   $.each(data.foodListOne, function(keyName,valueName) {  
	   if(valueName.OneName == _this ){
	   	 $.each(valueName.foodListTwo, function(keyNameTwo,valueNameTwo) {  
	       $("#foodListTwo ul").append('<li>'+valueNameTwo.TwoName+'</li>');
	     });
	     $("#foodListTwo li").click(function(){
	     	$("#foodListTwoButton").empty();
		   $("#foodListTwoButton").append($(this).html());
		   $("#foodListTwo").hide();
	     });
	   	 }
	    });
		$("#foodListOne").hide();
		$("#foodListTwoButton").show();	    
	});

	
}
