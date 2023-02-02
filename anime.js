// swipper


var swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,

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
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    
  });


  var swiper = new Swiper('.trending-swiper', {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: 20,

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
      nextEl: '.arrow-key-left1',
      prevEl: '.arrow-key-right1',
    },
  
    
  });


  var swiper = new Swiper('.trending-swiper-heading', {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: 20,

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
