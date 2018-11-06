;$(function(){
    'use strict'

    let sideBar = $(".sideBar"),
        mask = $(".mask"),
        showsideBar = $(".showSideBar"),
        backToTop = $(".back-to-top");
function showBar() {
        mask.fadeIn(); //显示遮罩区
        sideBar.css('right', 0);
    }

    function hideBar() {
        mask.fadeOut();
        sideBar.css('right', - sideBar.width())
    }

    function backTop() {
        $('html,body').animate({
            scrollTop: 0
        },800);
    }

    $(window).on('scroll', function () {
       if ($(window).scrollTop() > $(window).height())
           backToTop.fadeIn();
       else
           backToTop.fadeOut();
    });
    //模拟页面滚动事件
    $(window).trigger('scroll');

    showsideBar.on('click', showBar);//点击更多显示side
    mask.on('click', hideBar);//点击遮罩层隐藏side
    backToTop.on('click', backTop);//返回顶部事件

});