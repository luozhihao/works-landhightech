
$(function(){
    //获得数据
    getdata();
    //setInterval('getdata()', 3000);//每隔3秒执行一次


    $(".nav-down").hover(function(){
        $(this).addClass("cur");
    },function(){
        $(this).removeClass("cur");
    });


    $(".m-banner-pager .li").hover(function(){
        $(this).find(".m-banner-s").stop();
        $(this).addClass("active").siblings().removeClass("active");
        $(this).find(".m-banner-s").animate({"top":"-68px"},400);

    },function(){
        $(this).find(".m-banner-s").stop();
        $(this).removeClass("active");
        $(this).find(".m-banner-s").animate({"top": "-8px"}, 400);


    });
    $(".m-banner-pager .li").on("click",function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        $(".m-banner-pic li").eq($(this).index()).fadeIn(500).siblings().hide(500);
        $(".m-banner-w li").eq($(this).index()).fadeIn(500).siblings().hide(500);
    });

    $(".m-hall .btn-middle").on("click",function(){

        if(!$(this).closest(".m-hall").next(".m-hall-class").hasClass("cur")){
            $(this).closest(".m-hall").next(".m-hall-class").addClass("cur");
            $(this).closest(".m-hall").next(".m-hall-class").find(".m-warp").slideDown(400);
        }
        else{
            $(this).closest(".m-hall").next(".m-hall-class").removeClass("cur");
            $(this).closest(".m-hall").next(".m-hall-class").find(".m-warp").slideUp(400);
        }

    });
    $(".m-icon-close").on("click",function(){
        $(this).closest(".m-hall-class").removeClass("cur");
        $(this).closest(".m-hall-class").find(".m-warp").slideUp(400);
    });

    //===========翻页
    $(".m-hall-pager a").on("click",function(){
        var num = 0;
        $(".task-carousel li").each(function(liNum){
            if($(this).hasClass("active")){
                num = liNum;
            }
        });

        var taskCarouseLength =  $(".task-carousel li").length;
        if($(this).hasClass("next") && !$(this).hasClass("disabled")){
            if(num <= taskCarouseLength-2){
                $(".task-carousel li").eq(num+1).addClass("active").siblings().removeClass("active");
                $(".task-carousel").animate({"marginLeft":(-16-(1016*(num+1)))+"px"},500,function(){
                    if(num == taskCarouseLength-2){
                        $(".next").addClass("disabled");
                    }
                });
                $(this).parent().find(".prev").removeClass("disabled");
            }
            else{
                $(this).addClass("disabled");
            }
        }else if($(this).hasClass("prev") && !$(this).hasClass("disabled")){
            if(num >=1){
                $(".task-carousel li").eq(num-1).addClass("active").siblings().removeClass("active");
                $(".task-carousel").animate({"marginLeft":(-16-(1016*(num-1)))+"px"},500,function(){
                    if(num == 1){
                        $(".prev").addClass("disabled");
                    }
                });
                $(this).parent().find(".next").removeClass("disabled");
            }
            else{
                $(this).addClass("disabled");
            }
        }
    });
    //===========tab切换
    $(".m-cultural-pager li").on("click",function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        var marginLeft = null;
        var num = $(this).index();
        if( num== 0){
            marginLeft =  -16;
        }else{
            marginLeft = -1032*$(this).index();
        }
        $(".cultural-carousel").animate({"marginLeft":marginLeft+"px"},500,function(){
            if( num== 0){
                $(".cultural-carousel").css("margin-left","-16px");
            }
        });
    });





    $(window).scroll(function(){

        if($(window).scrollTop() >= $("#header_top_fixed").position().top && !$(".m-header-fixed").hasClass("cur")){

            $(".m-header-fixed").addClass("cur");

        } if($(window).scrollTop() < $("#header_top_fixed").position().top && $(".m-header-fixed").hasClass("cur")){

            $(".m-header-fixed").removeClass("cur");

        }
        if($(window).scrollTop() >= $("#m_lift_top").position().top && !$(".m-lift-list").hasClass("cur")){


                $(".m-lift").show();
                setTimeout(function(){
                    $(".m-lift-list").addClass("cur");
                },100);
        }
        else if($(window).scrollTop() < $("#m_lift_top").position().top && $(".m-lift-list").hasClass("cur")){
            $(".m-lift-list").removeClass("cur");
            $(".m-lift").delay(300).hide(0);
        }
        else if($(window).scrollTop() >= $("#task_hall").position().top && $(window).scrollTop() < $("#create_hall").position().top && !$("[data-link='task_hall']").hasClass("active")){
            $("[data-link='task_hall']").addClass("active").siblings().removeClass("active");
        }else if($(window).scrollTop() >= $("#create_hall").position().top && $(window).scrollTop() < $("#shop_hall").position().top && !$("[data-link='create_hall']").hasClass("active")){
            $("[data-link='create_hall']").addClass("active").siblings().removeClass("active");
        }else if($(window).scrollTop() >= $("#shop_hall").position().top && $(window).scrollTop() < $("#render_hall").position().top && !$("[data-link='shop_hall']").hasClass("active")){
            $("[data-link='shop_hall']").addClass("active").siblings().removeClass("active");
        }else if($(window).scrollTop() >= $("#render_hall").position().top && $(window).scrollTop() < $("#cultural_hall").position().top && !$("[data-link='render_hall']").hasClass("active")){
            $("[data-link='render_hall']").addClass("active").siblings().removeClass("active");
        }else if($(window).scrollTop() >= $("#cultural_hall").position().top && $(window).scrollTop() < $("#community_hall").position().top && !$("[data-link='cultural_hall']").hasClass("active")){
            $("[data-link='cultural_hall']").addClass("active").siblings().removeClass("active");
        }else if($(window).scrollTop() >= $("#community_hall").position().top && $(window).scrollTop() < $(".m-footer").position().top && !$("[data-link='community_hall']").hasClass("active")){
        $("[data-link='community_hall']").addClass("active").siblings().removeClass("active");
        }else if($(window).scrollTop() < $("#task_hall").position().top ||  $(window).scrollTop() > $(".m-footer").position().top ){
            $(".m-lift-nav").removeClass("active");
        }


    });
    $(".m-lift-nav").on("click",function(){
        if($("#"+$(this).attr("data-link")).length>=1){
            $('html, body').animate({scrollTop: $("#"+$(this).attr("data-link")).position().top}, 300);
        }
    });

    //返回顶部
    $(window).scroll(function(){
        var wHeight=$(window).height();
        var wTop=$(window).scrollTop();
        if(wTop>=wHeight)
        {
            $(".goto-top").show();
        }
        else
        {
            $(".goto-top").hide();
        }
    });
    $(".goto-top").click(function(){
        $("html,body").animate({scrollTop:0},500);
    });
});



function getdata(){
    /*
    $.ajax({
        url: 'data.php',
        type: 'POST',
        dataType: "json",
        cache: false,
        timeout: 10000,
        error: function(){},
        success: function(data){
            show_num(data.count);
        }
    });
    */
    show_num(654321);

}
function show_num(n){
    var it = $(".num i");

    var len = String(n).length;
    for(var i=0;i<len;i++){
        if(it.length<=i){
            $(".t_num").append("<i></i>");
        }
        var num=String(n).charAt(i);
        var y = -parseInt(num)*30; //y轴位置
        var obj = $(".t_num i").eq(i);

        obj.animate({ //滚动动画
                backgroundPosition :'(0 '+String(y)+'px)'
            }, 'slow','swing',function(){}
        );
    }
}

