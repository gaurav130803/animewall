// swipper


const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidePerView:5,
    spaceBetween:20,

    autoplay :{
        delay :3000,
        disableOnInteraction : false,
    },
    //<!-- loop : true, -->
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });
