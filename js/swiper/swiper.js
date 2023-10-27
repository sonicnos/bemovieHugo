
function swiperMode(className, next, prev, params) {
    new Swiper(className, {
        // loop: true,
        effetct: "fade",
        spaceBetween: 20,
        slidesPerView: params,
        pagination: {
            // type: "progressbar"
            clickable: true,
        },
        navigation: {
            nextEl: next,
            prevEl: prev
        },
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
    });
}


$(function(){
    var lastWidth = $(window).width();

    if (lastWidth <= 768) {
        swiperMode(".swiper_search", ".search_next", ".search_prev", 2)
        swiperMode(".swiper_Latest_releases", ".Latest_releases_next", ".Latest_releases_prev", 2)
        swiperMode(".swiper_genre", ".genre_next", ".genre_prev", 2)
    }else if(lastWidth <= 1024){
        swiperMode(".swiper_search", ".search_next", ".search_prev", 3)
        swiperMode(".swiper_Latest_releases", ".Latest_releases_next", ".Latest_releases_prev", 3)
        swiperMode(".swiper_genre", ".genre_next", ".genre_prev", 3)

    } else {
        swiperMode(".swiper_search", ".search_next", ".search_prev", 4)
        swiperMode(".swiper_Latest_releases", ".Latest_releases_next", ".Latest_releases_prev", 4)
        swiperMode(".swiper_genre", ".genre_next", ".genre_prev", 4)
    }

    $(window).resize(function(){
        if($(window).width()!=lastWidth){
            //execute code here.
            lastWidth = $(window).width();
            if (lastWidth <= 768) {
                swiperMode(".swiper_search", ".search_next", ".search_prev", 2)
                swiperMode(".swiper_Latest_releases", ".Latest_releases_next", ".Latest_releases_prev", 2)
                swiperMode(".swiper_genre", ".genre_next", ".genre_prev", 2)
            }else if(lastWidth <= 1024){
                swiperMode(".swiper_search", ".search_next", ".search_prev", 3)
                swiperMode(".swiper_Latest_releases", ".Latest_releases_next", ".Latest_releases_prev", 3)
                swiperMode(".swiper_genre", ".genre_next", ".genre_prev", 3)
        
            }  else {
                swiperMode(".swiper_search", ".search_next", ".search_prev", 4)
                swiperMode(".swiper_Latest_releases", ".Latest_releases_next", ".Latest_releases_prev", 4)
                swiperMode(".swiper_genre", ".genre_next", ".genre_prev", 4)
            }
        }
    }) 
})


