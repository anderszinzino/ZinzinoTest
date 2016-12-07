$(document).ready(function () {
    var mainnav = function () {
        $('.mn-nav > li > a').click(function () {
            var mn_nav = $('.mn-nav');
            mn_nav.find('li').removeClass('active');
            $('.mn-nav > li > ul > li').removeClass('active');

            var checkElement = $(this).parent();
            var ulDom = checkElement.find('.mn-submenu')[0];

            if (ulDom == undefined) {
                checkElement.addClass('active');
                $('.mn-nav').find('li').find('ul:visible').slideUp();
                return;
            }
            if (ulDom.style.display != 'block') {
                mn_nav.find('li').find('ul:visible').slideUp();
                mn_nav.find('li.init-arrow-up').removeClass('init-arrow-up').addClass('arrow-down');
                mn_nav.find('li.arrow-up').removeClass('arrow-up').addClass('arrow-down');
                checkElement.removeClass('init-arrow-down');
                checkElement.removeClass('arrow-down');
                checkElement.addClass('arrow-up');
                checkElement.addClass('active');
                checkElement.find('ul.mn-submenu').slideDown(300);
            } else {
                checkElement.removeClass('init-arrow-up');
                checkElement.removeClass('arrow-up');
                checkElement.removeClass('active');
                checkElement.addClass('arrow-down');
                checkElement.find('ul').slideUp(300);

            }
        });
        $('.mn-nav > li > ul > li > a').click(function () {
            $(this).parent().parent().parent().removeClass('active');
            $('.mn-nav > li > ul > li').removeClass('active');
            $(this).parent().addClass('active')
        });


        // 3:rd level menu links 
        $('.mn-submenu > li > a').click(function () {
            var mn_sub_nav = $('.mn-sub-submenu');
            mn_sub_nav.find('li').removeClass('active');
            $('.mn-sub-submenu > li > ul > li').removeClass('active');

            var checkElement = $(this).parent();
            var ulDom = checkElement.find('.mn-sub-submenu')[0];

            if (ulDom == undefined) {
                checkElement.addClass('active');
                $('.mn-sub-submenu').find('li').find('ul:visible').slideUp();
                return;
            }
            if (ulDom.style.display != 'block') {
                mn_sub_nav.find('li').find('ul:visible').slideUp();
                mn_sub_nav.find('li.init-arrow-up').removeClass('init-arrow-up').addClass('arrow-down');
                mn_sub_nav.find('li.arrow-up').removeClass('arrow-up').addClass('arrow-down');
                checkElement.removeClass('init-arrow-down');
                checkElement.removeClass('arrow-down');
                checkElement.addClass('arrow-up');
                checkElement.addClass('active');
                checkElement.find('ul.mn-sub-submenu').slideDown(300);
            } else {
                checkElement.removeClass('init-arrow-up');
                checkElement.removeClass('arrow-up');
                checkElement.removeClass('active');
                checkElement.addClass('arrow-down');
                checkElement.find('ul.mn-sub-submenu').slideUp(300);

            }
        });
        $('.mn-submenu > li > ul > li > a').click(function () {
            $(this).parent().parent().parent().removeClass('active');
            $('.mn-sub-submenu > li > ul > li').removeClass('active');
            $(this).parent().addClass('active')
        });



    };
    mainnav();
    var leftnav = function () {
        $('.ln-nav > li > a').click(function () {
            var ln_nav = $('.ln-nav');
            ln_nav.find('li').removeClass('active');
            $('.ln-nav > li > ul > li').removeClass('active');

            var checkElement = $(this).parent();
            var ulDom = checkElement.find('.ln-submenu')[0];

            if (ulDom == undefined) {
                checkElement.addClass('active');
                $('.ln-nav').find('li').find('ul:visible').slideUp();
                return;
            }
            if (ulDom.style.display != 'block') {
                ln_nav.find('li').find('ul:visible').slideUp();
                ln_nav.find('li.init-arrow-up').removeClass('init-arrow-up').addClass('arrow-down');
                ln_nav.find('li.arrow-up').removeClass('arrow-up').addClass('arrow-down');
                checkElement.removeClass('init-arrow-down');
                checkElement.removeClass('arrow-down');
                checkElement.addClass('arrow-up');
                checkElement.addClass('active');
                checkElement.find('ul').slideDown(300);
            } else {
                checkElement.removeClass('init-arrow-up');
                checkElement.removeClass('arrow-up');
                checkElement.removeClass('active');
                checkElement.addClass('arrow-down');
                checkElement.find('ul').slideUp(300);

            }
        });
        $('.ln-nav > li > ul > li > a').click(function () {
            $(this).parent().parent().parent().removeClass('active');
            $('.ln-nav > li > ul > li').removeClass('active');
            $(this).parent().addClass('active')
        });
    };
    leftnav();
});

