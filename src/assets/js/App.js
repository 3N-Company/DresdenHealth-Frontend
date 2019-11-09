(function($) {

    "use strict";

    var win = $(window),
        ww = window.innerWidth,
        wh = window.innerHeight;

    main_nav();
    portfolio_links();
    sliders();
    shortcodes();

    win.on('load', function() {
        $('body').waitForImages({
            finished: function() {
                setTimeout(function() {
                    $('.loader').addClass('hide');

                    reveals();
                }, 1000);
            },
            waitForAll: true
        });
    });

    win.on('resize', function() {
        ww = window.innerWidth;
        wh = window.innerHeight;
    });


    // main nav
    // --------------------

    function main_nav() {
        $('.options .trigger').on('click', function() {
            if (!$('.main_nav').hasClass('open')) {
                toggle_nav(true);
            }
        });

        $('.options .toggle_filters').on('click', function() {
            if (!$('.filters_wrap').hasClass('open')) {
                toggle_filters(true);
            }
        });

        $('.close_nav, .main_overlay, .filters li').on('click', function() {
            if ($('.main_nav').hasClass('open')) {
                toggle_nav(false);
            }

            if ($('.filters_wrap').hasClass('open')) {
                toggle_filters(false);
            }
        });

        function toggle_nav(bool) {
            var animated = $('.menu li.animated');

            if (bool == true) {
                $('.options .trigger').addClass('active');
                $('.options .toggle_filters, .options .back').addClass('hide');
                $('.main_nav, .main_overlay').addClass('open');

                setTimeout(function() {
                    for (var i = 0; i <= animated.length; i++) {
                        $(animated[i]).delay(i * 100).queue(function(next) {
                            $(this).addClass('show');
                            next();
                        });
                    }
                }, 300);
            } else {
                for (var i = animated.length - 1; i >= 0; i--) {
                    $(animated[i]).delay(((animated.length - 1) - i) * 100).queue(function(next) {
                        $(this).removeClass('show');
                        next();
                    });
                }

                setTimeout(function() {
                    $('.options .trigger').removeClass('active');
                    $('.options .toggle_filters, .options .back').removeClass('hide');
                    $('.main_nav, .main_overlay').removeClass('open');
                }, (animated.length + 1) * 100);
            }
        }

        $('.main_nav .menu li:has(ul)').find('a').on('click', function() {
            var parent = $(this).parent(),
                submenu = $(this).next('ul');

            if (submenu.is(':visible'))
                parent.find('ul').slideUp(300);

            if (submenu.is(':hidden')) {
                parent.siblings().find('ul').slideUp(300);
                submenu.slideDown(300);
            }

            if (parent.children('ul').length == 0) return true;
            else return false;
        });
    }


    // portfolio links
    // --------------------

    function portfolio_links() {
        var move = 0,
            first_hover = true,
            prev = 0;

        $('.hover_links .hover_link_item').each(function() {
            var $this = $(this),
                index = $this.index(),
                ref = $this.data('ref');

            $this.on('mouseenter', 'a', function() {
                $('.hover_links .hover_link_item').addClass('hide');
                $this.addClass('visible').removeClass('hide');
                $('.hover_links_media').addClass('visible');

                if (index >= prev) {
                    var previ = $('.link_media').eq(ref - 2);
                    var next = $('.link_media').eq(ref);

                    $('.link_media').removeClass('to_top to_bottom');
                    $('.link_media[data-ref="' + ref + '"]').addClass('visible from_top');

                    previ.addClass('to_bottom').removeClass('to_top');
                    next.addClass('to_bottom');

                    setTimeout(function() {
                        $('.link_media[data-ref="' + ref + '"]').removeClass('from_top');
                        $('.link_media[data-ref="' + ref + '"]').addClass('to_bottom');
                    }, 300);
                } else {
                    var previ = $('.link_media').eq(ref);
                    var next = $('.link_media').eq(ref - 2);

                    $('.link_media').removeClass('to_top to_bottom');
                    $('.link_media[data-ref="' + ref + '"]').addClass('visible from_bottom');

                    next.addClass('to_top');
                    previ.addClass('to_top');

                    setTimeout(function() {
                        $('.link_media[data-ref="' + ref + '"]').removeClass('from_bottom');
                        $('.link_media[data-ref="' + ref + '"]').addClass('to_top');
                    }, 300);
                }

                prev = index;
            }).on('mouseleave', function() {
                $('.hover_links .hover_link_item').removeClass('hide visible');
                $('.hover_links_media, .link_media').removeClass('visible');
            });
        });
    }


    // reveals
    // --------------------

    function reveals() {
        setTimeout(function() {
            $(window).on('scroll', function() {
                var win_bottom = wh + ($(window).scrollTop() - 100);

                $('.reveal').each(function(i) {
                    var el_top = $(this).offset().top;

                    if (el_top < win_bottom) {
                        $(this).delay(i * 100).queue(function() {
                            $(this).addClass('reveal-in');
                        });
                    }
                });
            }).scroll();
        }, 100);
    }


    // sliders
    // --------------------

    function sliders() {
        $('.slider').each(function() {
            var slider = $(this),
                dots = slider.data('dots') == true ? 1 : 0,
                arrows = slider.data('arrows') == true ? 1 : 0,
                items = typeof(slider.data('items')) !== "undefined" ? parseInt(slider.data('items'), 10) : 1,
                margin = typeof(slider.data('margin')) !== "undefined" ? parseInt(slider.data('margin'), 10) : 0;

            if (slider.hasClass('full_slider')) {
                slider.on('initialized.owl.carousel', function(event) {
                    var item = event.item.index;

                    slider_caption(item);
                });

                slider.owlCarousel({
                    autoplay: true,
                    items: items,
                    loop: false,
                    nav: arrows,
                    dots: dots,
                    margin: margin,
                    navText: ['', '']
                    //mouseDrag: false
                });

                slider.on('changed.owl.carousel', function(event) {
                    var item = event.item.index;
                    $(this).find('.slider_caption').removeClass('animated');
                    slider_caption(item);
                });

                function slider_caption(item) {
                    setTimeout(function() {
                        $('.owl-item').not('.cloned').eq(item).find('.slider_caption').addClass('animated');
                    }, 200);

                    if ($('.owl-item').not('.cloned').eq(item).find('.item').hasClass('light_content')) {
                        $('.header').addClass('light');
                        slider.addClass('light_controls');
                    } else {
                        $('.header').removeClass('light');
                        slider.removeClass('light_controls');
                    }
                }
            }

            slider.owlCarousel({
                autoplay: true,
                items: items,
                loop: true,
                nav: arrows,
                dots: dots,
                margin: margin,
                navText: ['', ''],
                autoHeight: true
            });
        });
    }


    // shortcodes
    // --------------------

    function shortcodes() {
        // background images
        $('[data-bg]').each(function() {
            var bg = $(this).data('bg');

            $(this).css({
                'background-image': 'url(' + bg + ')',
                'background-size': 'cover',
                'background-position': 'center center',
                'background-repeat': 'no-repeat'
            });
        });

        // background colors
        $('[data-bg-color]').each(function() {
            var bg = $(this).data('bg-color');

            $(this).css({
                'background-color': bg
            });
        });

        // magnific popup
        $('.magnific-popup').each(function() {
            var gallery = $(this).data('gallery') == true ? 1 : 0;

            $(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: gallery
                }
            });
        });

        // back2top
        win.on('scroll', function() {
            var scroll = $(this).scrollTop();

            if (scroll > 100) {
                $('.back2top').addClass('visible');
            } else {
                $('.back2top').removeClass('visible');
            }
        });

        $('.back2top').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 300);
        });
    }

})(jQuery);
