$(function () {
    // 背景音乐播放和关闭
    $('.header .aki-music').click(function () {
        $(this).toggleClass('active')
        if ($(this).hasClass("active")) {
            $('#body-bgm')[0].play();
        } else {
            $('#body-bgm')[0].pause();
        }
        let that = $(this);
        let xunhuan = setInterval(function () {
            if ($('#body-bgm')[0].paused) {
                that.removeClass('active')
                clearInterval(xunhuan);
            }
        }, 500)
    })


    // 显示隐藏视频弹窗层
    $('.video-hidden').click(function () {
        $('.video-alert').removeClass('active')
        $('html').removeClass('active')
        $('.video-alert video')[0].pause();
    })

    $('.video-show').click(function () {
        $('.video-alert').addClass('active')
        $('html').addClass('active')
        $('.video-alert video')[0].play();
    })


    // 资讯页面轮播图
    var newsSwiper1 = new Swiper('.page-news .swiper', {
        autoplay: {
            delay: 3500,
        },
        speed: 800,
        autoHeight: true,
        loop: true,
        pagination: {
            el: '.page-news .swiper-pagination',
            clickable: true
        }
    });


    // 角色小图轮播
    var swiper_small = new Swiper(".page-resonators .swiper_small", {
        loop: false,
        spaceBetween: 0,
        slidesPerView: "auto",
    });

    $('.page-resonators .swiper-button-prev').click(function () {
        swiper_small.slidePrev();

    })
    $('.page-resonators .swiper-button-next').click(function () {
        swiper_small.slideNext();
    })

    // 角色大图轮播
    var swiper_big = new Swiper(".page-resonators .swiper_big", {
        loop: false,
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        thumbs: {
            swiper: swiper_small,
        },
        navigation: {
            nextEl: '.page-resonators .swiper-button-next',
            prevEl: '.page-resonators .swiper-button-prev',
        },
    });



    // 情报页图片切换
    var swiper_img = new Swiper(".page-lore .swiper_img", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 3,
        watchSlidesProgress: true,
    });

    // 情报页文字切换
    var swiper_txt = new Swiper(".page-lore .swiper_txt", {
        loop: true,
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        thumbs: {
            swiper: swiper_img,
        },
        navigation: {
            nextEl: '.page-lore .swiper-button-next',
            prevEl: '.page-lore .swiper-button-prev',
        },
    });



    // 世界小图轮播
    var world_small = new Swiper(".page-world .swiper_small", {
        loop: false,
        spaceBetween: 0,
        slidesPerView: "auto",
    });

    // 世界大图轮播
    var world_big = new Swiper(".page-world .swiper_big", {
        loop: false,
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        thumbs: {
            swiper: world_small,
        },
    });
})