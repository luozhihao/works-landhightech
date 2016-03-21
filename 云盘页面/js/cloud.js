$(function(){
	$(".done").mouseover(function(){
		$(this).addClass("checked");
		$(".sth").removeClass("checked");
		$(".info2").show();
		$(".info").hide();
	});
	
	$(".sth").mouseover(function(){
		$(this).addClass("checked");
		$(".done").removeClass("checked");
		$(".info").show();
		$(".info2").hide();
	});
	
	$(".tool").click(function(){
		$(".show").hide();
		$(".center_main_top h3").text("名称");
		$(".listshow").show();
	});
	
	$(".listshow li").hover(function(){
		$(this).css("background","#CBF4E4");
		$(this).find(".wj").css("background","url(images/wj.jpg) no-repeat");
		$(this).find("dd").css("color","#2CD195");
		$(this).find(".hdf").show();
	},function(){
		$(this).css("background","#fff");
		$(this).find(".wj").css("background","url(images/wj1.jpg) no-repeat");
		$(this).find("dd").css("color","#A1A1A1");
		$(this).find(".hdf").hide();
	});
	
	$("textarea").bind('keyup',function(){
		var txtVal=$(this).val();
		var txtLength=txtVal.length;
		$(".num").text(txtLength);
	});
	
	$(".search").focus(function(){
		if($(this).val()=="搜索我的文件")
		{
			$(this).val('');
		}
	});
	
	$(".search").blur(function(){
		if($(this).val()=="")
		{	
			$(this).val('搜索我的文件');
		}
	});
	
	$(".searchmy").focus(function(){
		if($(this).val()=="搜索我的工作室")
		{
			$(this).val('');
		}
	});
	
	$(".searchmy").blur(function(){
		if($(this).val()=="")
		{	
			$(this).val('搜索我的工作室');
		}
	});
})