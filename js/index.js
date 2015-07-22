//FastClick
$(function () {
    FastClick.attach(document.body);
});

//动画
$(function () {
    var fadeOutUp = 'animated fadeOutUpBig'
    var fadeInDown = 'animated fadeInDown'
    var fadeOutLeft = 'animated fadeOutLeftBig'
    var fadeOutRight = 'animated fadeOutRightBig'
    var fadeInRight = 'animated fadeInRight'
    var fadeInLeft = 'animated fadeInLeft'
    var fadeOutDown = 'animated fadeOutDownBig'
    var fadeInUp = 'animated fadeInUp'
    var slideInUp = 'animated slideInUp'
    var slideOutDown = 'animated slideOutDown'
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

    $('.next').on('click', function () {
        $('div.container').addClass(fadeOutLeft).one(animationEnd, function () {
            $(this).removeClass(fadeOutLeft);
            $(this).addClass(fadeInRight).one(animationEnd, function () {
                $(this).removeClass(fadeInRight);
            });
        });
        $('div.header').addClass(fadeOutLeft).one(animationEnd, function () {
            $(this).removeClass(fadeOutLeft);
            $(this).addClass(fadeInRight).one(animationEnd, function () {
                $(this).removeClass(fadeInRight);
            });
        });

    });

    $('.back').on('click', function () {
        $('div.container').addClass(fadeOutRight).one(animationEnd, function () {
            $(this).removeClass(fadeOutRight);
            $(this).addClass(fadeInLeft).one(animationEnd, function () {
                $(this).removeClass(fadeInLeft);
            });
        });
        $('div.header').addClass(fadeOutRight).one(animationEnd, function () {
            $(this).removeClass(fadeOutRight);
            $(this).addClass(fadeInLeft).one(animationEnd, function () {
                $(this).removeClass(fadeInLeft);
            });
        });

    });

    $('#reg').on('click', function () {
        $('#dd-reg').addClass(fadeInDown).one(animationEnd, function () {
            $(this).removeClass(fadeInDown);
        });
    });
});


$(function() {
/*    $('.tab-panels .tabs li a').on('click', function() {
        var $panel = $(this).closest('.tab-panels');

        $panel.find('.tabs li a.activ').removeClass('activ');
        $(this).addClass('activ');

        var panelToShow = $(this).attr('rel');

        $panel.find('.panel.activ').show(0, showNextPanel);

        function showNextPanel() {
            $(this).removeClass('activ');
            $('#'+panelToShow).hide(0, function() {
                $(this).addClass('activ');
            });
        }

    });*/
    abc("li .tab","div .panel");
    abc("li .sub-tab","div .sub-panel");

});

function abc (tab_name,panelname){
    $(tab_name).on('click', function() {
        var index_mun= $(tab_name).index(this);
        $(this).addClass("activ");
        $(tab_name).slice(0,index_mun).removeClass("activ");
        $(tab_name).slice(index_mun+1).removeClass("activ");

        //tab对应的panel,控制其显示消失
        $(panelname).eq(index_mun).addClass("activ");
        $(panelname).slice(0,index_mun).removeClass("activ");
        $(panelname).slice(index_mun+1).removeClass("activ");
    });
}


/*$(function() {
    $('.sub-tab-panels .sub-tabs li a').on('click', function() {
        var $panel = $(this).closest('.sub-tab-panels');

        $panel.find('.sub-tabs li a.activ').removeClass('activ');
        $(this).addClass('activ');

        var panelToShow = $(this).attr('rel');

        $panel.find('.sub-panel.activ').show(0, showNextPanel);

        function showNextPanel() {
            $(this).removeClass('activ');
            $('#'+panelToShow).hide(0, function() {
                $(this).addClass('activ');
            });
        }

    });
});*/
