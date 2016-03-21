/**
 * Created by SYSTEM on 2015/3/11.
 */
$(function(){

    //首页背景图高度自动效果
    var wHeight=$(window).height();
    $(".cd-main").css("height",wHeight+"px");
    $(window).resize(function(){
        var wHeight=$(window).height();
        $(".cd-main").css("height",wHeight+"px");
    });

    //左边栏效果
    $(".slide-bar").each(function(){
        var view=$(this).next().css('display');
        if(view=="block")
        {
            $(this).addClass('up');
        }
    });
    $(".slide-bar").click(function(){
        if(!$(this).hasClass('up')){
            $(this).siblings().removeClass('on');
            $(this).addClass('up').next().addClass('on').slideDown();
            $(".pannel").not('.on').slideUp().prev().removeClass('up');
        }
        else{
            $(this).removeClass('up').next().removeClass('on').slideUp();  
        }
    });

    //全选效果
    $(".ck-all").click(function(){
        if(this.checked){
            $('.ck').each(function(){
                $(this).prop('checked',true);
            });
        }
        else{
            $('.ck').each(function(){
                $(this).prop('checked',false);
            });
        }
    });

    //筛选下拉效果
    $('.search-txt').click(function(){
        var view=$(this).next().css('display');
        if(view=='block'){
            $(this).next().slideUp();
            $(this).find('.fliter').css('transform','rotate(360deg)');
        }
        else {
            $(this).next().slideDown();
            $(this).find('.fliter').css('transform','rotate(180deg)');
        }
    });


});

$(document).ready(function() {

    //全局配置下拉框
    var data = [
        { text: "Black", value: "1" },
        { text: "Orange", value: "2" },
        { text: "Grey", value: "3" }
    ];

    // create DropDownList from input HTML element
    $("#color").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: data,
        index: 0,
        change: onChange
    });

    // create DropDownList from select HTML element
    $("#size").kendoDropDownList();

    var size = $("#size").data("kendoDropDownList");

    function onChange() {
        var value = $("#color").val();
        $("#cap")
            .toggleClass("black-cap", value == 1)
            .toggleClass("orange-cap", value == 2)
            .toggleClass("grey-cap", value == 3);
    };

    //修改密码弹窗

    var window = $("#window"),
        undo = $("#undo")
            .bind("click", function() {
                window.data("kendoWindow").center().open();
                undo.parent().css("opacity",0);
            });

            var onClose = function() {
                
                undo.parent().css("opacity",1);
            }

            if (!window.data("kendoWindow")) {
                window.kendoWindow({
                    width: "540px",
                    height:"240px",
                    title: "修改密码",
                    modal: true,
                    actions: [

                        "Close"
                    ],
                    close: onClose
                 });
            } 
});

window.onload=function(){
    var apply=document.getElementById('apply');
    apply.setAttribute("id","asa");
    apply.parentNode.style.height="50px";
    var txt=document.createTextNode('55555');
    apply.appendChild(txt);

    function element(e) {
        return document.getElementById(e);
    }

    element('bottom-ul').appendChild(element('list').cloneNode(true));

    var array=new Array();
    array[0]="1";
    array[1]="2";
    console.log("array",array);
    array.splice(1,1);
    console.log("array",array);
    array.push('3');
    array.unshift('0');
    console.log("array",array);
    array.reverse();
    console.log("array",array);
}