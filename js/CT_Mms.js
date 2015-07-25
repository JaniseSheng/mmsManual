/**
 * Created by janisesheng on 15-5-29.
 */

 $(function () {
 FastClick.attach(document.body);
 });

//初始状态下进入页面
$(document).ready(function () {
    ctMMsLoadEvent.loadpage1();
});


var ctMMsLoadEvent = (function(){
    var loadpage1 = function () {
        $("#st-container .st-pusher").load("tpl/tp_mms01_content.html",ctMMsCliskEvent.page01Event);
    }
    var loadpage2_1 = function () {
        $("#st-container .st-pusher").load("tpl/tp_mms02_content.html",ctMMsCliskEvent.page02Event);
    }
    var loadpage3_1 = function () {
        $("#st-container .st-pusher").load("tpl/tp_mms03_content.html",ctMMsCliskEvent.page03Event);
    }
    //加载第3页的内页面
    var loadSubpage3_1 = function (tpUrl,callbackEvent) {
        $("#scroller").load(tpUrl,callbackEvent);
    }
    return{
        loadpage1:loadpage1,
        loadpage2_1:loadpage2_1,
        loadpage3_1:loadpage3_1,
        loadSubpage3_1:loadSubpage3_1
    }
})();


var ctMMsCliskEvent = (function(){
    //第一页js事件
    var page01Event = function (){
        pageTips(".icon-approximately","#menuInfoBox",page01_tips_info);
        clickNextPage(".next",".back");
    }
    //第二页js事件
    var page02Event = function (){
        pageTips(".icon-approximately","#menuInfoBox",page02_tips_info);
        clickNextPage(".next",".back");
    }
    //第三页js事件
    var page03Event = function (){
        clickNextPage(".next",".back");
        $(".commintClick").click(function(){
            $(".pageMask").css("width","100%");
            $("#fankuiBox").load("tpl/tp_mms03_commitBox.html",function(){
                $(".commintButton").click(function(){
                    $("#fankuiBox").html("");
                    $(".pageMask").css("width","0");
                });
            });
        });
        $(".pageMask").click(function(){
            $("#fankuiBox").html("");
            $(".pageMask").css("width","0");
        });
        clickNextSubPage(".subNext",".subBack");
    }

    //-------------------------------------------------------------------------------------------------------------
    //点击右边图标显示其内容
    var pageTips = function (iconname,boxname,tipsInfo) {
        var iconMun = $(iconname).length;
        console.log("列表数量="+iconMun);
        var click_mun = new Array(iconMun);
        for (var i = 0; i < iconMun; i++) {
            click_mun[i] = true;
        }

        $(iconname).click(function(){
            var index =  $(iconname).index(this);
            if(click_mun[index]){
                $(boxname).html(tipsInfo[index]);
                for (var i = 0; i <iconMun; i++) {
                    click_mun[i] = true;
                }
                $(iconname).css("color","#0f89c7");
                $(this).css("color","#FF4A04");
                $(boxname).css("top","140px");
            }
            else{
                $(boxname).css("top","-500px");
                $(this).css("color","#0f89c7");
            }
            click_mun[index]=!click_mun[index];
        });
    }

    //点击进入下一页/或返回
    var clickNextPage = function (nextname,backname){
        $(nextname).click(function(){
            var pageInfo = $(this).attr("pagename");
           if(pageInfo=="page2_1"){
               animate_index.animate_next(ctMMsLoadEvent.loadpage2_1);
           }
            if(pageInfo=="page3_1"){
                animate_index.animate_next(ctMMsLoadEvent.loadpage3_1)

            }
        });
        $(backname).click(function(){
            var pageInfo = $(this).attr("pagename");
            if(pageInfo=="page1"){
                animate_index.animate_back(ctMMsLoadEvent.loadpage1);
            }
            if(pageInfo=="page2_1"){
                animate_index.animate_back( ctMMsLoadEvent.loadpage2_1);
            }
        });
    }

    //点击下一内页
    var clickNextSubPage = function (nextname,backname){
        var pageInfo = 1;
        $(nextname).click(function(){
            pageInfo++;
            if(pageInfo=="1"){
                ctMMsLoadEvent.loadSubpage3_1("tpl/tp_mms03_list01.html")
            }
            if(pageInfo=="2"){

                ctMMsLoadEvent.loadSubpage3_1("tpl/tp_mms03_list02.html")

            }
            if(pageInfo=="3"){
                ctMMsLoadEvent.loadSubpage3_1("tpl/tp_mms03_list03.html")
            }
            if(pageInfo>=3)pageInfo=3;
        });
        $(backname).click(function(){
            pageInfo--;
            if(pageInfo=="1"){
                ctMMsLoadEvent.loadSubpage3_1("tpl/tp_mms03_list01.html")
            }
            if(pageInfo=="2"){
                ctMMsLoadEvent.loadSubpage3_1("tpl/tp_mms03_list02.html")
            }
            if(pageInfo=="3"){
                ctMMsLoadEvent.loadSubpage3_1("tpl/tp_mms03_list03.html")
            }
            if(pageInfo<=1)pageInfo=1;
        });
    }

    return{
        page01Event:page01Event,
        page02Event:page02Event,
        page03Event:page03Event
    }
})();



//切换动画

animate_index={
    fadeOutLeft : 'animated fadeOutLeftBig',
    fadeOutRight : 'animated fadeOutRightBig',
    animationEnd : 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',

    animate_next : function(callback){
        $('#st-trigger-effects,.container').addClass(animate_index.fadeOutLeft).one(animate_index.animationEnd, function () {
            callback();
        });
    },

    animate_back : function(callback){
        $('#st-trigger-effects,.container').addClass(animate_index.fadeOutRight).one(animate_index.animationEnd, function () {
            callback();
        });
    }
}