$(function(){
	$(".check").click(function(){
		if($(this).hasClass("check"))
		{
			$(this).addClass("checked").removeClass("check");
			$("#auto").attr("checked",true);
		}
		else
		{
			$(this).addClass("check").removeClass("checked");
			$("#auto").attr("checked",false);
		}
	});
	
	$(".name").focus(function(){
		if($(this).val()=="手机/邮箱/用户名")
		{
			$(this).val('');
		}
	});
	
	$(".name").blur(function(){
		if($(this).val()=="")
		{	
			$(this).val('手机/邮箱/用户名');
		}
	});
	
	$(".psw").focus(function(){
		if($(this).val()=="密码")
		{
			$(this).val('');
		}
	});
	
	$(".psw").blur(function(){
		if($(this).val()=="")
		{	
			$(this).val('密码');
		}
	});
})