var swiper = new Swiper('.swiper-containerd', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,//可选选项，自动滑动
    	loop : true,
    });
var swiper = new Swiper('.guidebox', {
	loop : true,
    // pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true

});
    var swiperslide=document.querySelectorAll('.swiper-slide');
    for(var i=0;i<swiperslide.length;i++){
        swiperslide[i].classList.remove('swiper-slide-active');
    }
    swiperslide[1].classList.add('swiper-slide-active');

    var wb_cj=document.querySelectorAll(".wb_cj");
    var wb_cja=document.querySelectorAll(".wb_cj a");
    // console.log(wb_cja);

   for(var i=0;i<wb_cj.length;i++){
        wb_cj[i].index=i;
        wb_cj[i].addEventListener("touchstart",function(){
            for(var j=0;j<wb_cj.length;j++){
                wb_cj[j].classList.remove("hot");
                wb_cja[j].classList.remove("color");
            }
            wb_cj[this.index].classList.add("hot");
            wb_cja[this.index].classList.add("color");
        })
   }