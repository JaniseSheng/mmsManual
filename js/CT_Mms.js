/**
 * Created by janisesheng on 15-5-29.
 */

 $(function () {
 FastClick.attach(document.body);
 });

//初始状态下进入页面
$(document).ready(function () {
    ctMMsLoadEvent.loadpage01();
});


var ctMMsLoadEvent = (function(){
    var loadpage01 = function () {
        $("#st-container .st-pusher").load("tpl/tp_mms01_content.html")
    }
    return{
        loadpage01:loadpage01
    }
})();

/*var ctMMsCliskEvent = (function(){
    var page01next = function () {
        $(".next").click(function(){

        });
    }
    return{
        page01next:page01next
    }
})();*/



//切换动画
animate_index={
    fadeOutUp : 'animated fadeOutUpBig',
    fadeInDown : 'animated fadeInDown',
    fadeOutLeft : 'animated fadeOutLeftBig',
    fadeOutRight : 'animated fadeOutRightBig',
    fadeInRight : 'animated fadeInRight',
    fadeInLeft : 'animated fadeInLeft',
    fadeOutDown : 'animated fadeOutDownBig',
    fadeInUp : 'animated fadeInUp',
    slideInUp : 'animated slideInUp',
    slideOutDown : 'animated slideOutDown',
    animationEnd : 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',

    animate_next : function(){
        $('#st-trigger-effects,.container').addClass(animate_index.fadeOutLeft).one(animate_index.animationEnd, function () {
            $(this).removeClass(animate_index.fadeOutLeft);
            $(this).addClass(animate_index.fadeInRight).one(animate_index.animationEnd, function () {
                $(this).removeClass(animate_index.fadeInRight);
            });
        });
    },

    animate_back : function(){
        $('#st-trigger-effects,.container').addClass(animate_index.fadeOutRight).one(animate_index.animationEnd, function () {
            $(this).removeClass(animate_index.fadeOutRight);
            $(this).addClass(animate_index.fadeInLeft).one(animate_index.animationEnd, function () {
                $(this).removeClass(animate_index.fadeInLeft);
            });
        });
    }
}