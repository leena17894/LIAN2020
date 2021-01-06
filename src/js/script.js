// let link = document.getElementsByTagName("a");
//     activeLink = document.querySelector(".active");

// link.addEventListener('click', function(){
//         link.classList.toggle('link_active');
//     });

$(document).ready(function(){
  $('a.link').on('click', function(){
    $(this)
    .addClass('link_active').siblings().removeClass('link_active');
  });
});

var slider = tns({
    container: '.sliders',
    items: 1,
    controls: false,
    nav: true,
    speed: 500
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

  
