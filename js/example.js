// $('.slick-carousel').slick({
//     dots: true,
//     arrows: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     slidesToShow: 5,
//     slidesToScroll: 2
// });
// var $jq = jQuery.noConflict();
$(document).ready(function(){

    $('.slick-carousel').slick({
    dots: true,
      infinite: true,
      autoplay: false,
      // autoplaySpeed: 2000,
      pauseOnFocus: true,
      pauseOnHover: false,
     
      pauseOnDotsHover: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: $('.next'),
      prevArrow: $('.previous'),
  });
});


$(document).ready(function(){

  $('.image-wrapper').slick({
  dots: true,
    infinite: true,
    autoplay: false,
    // autoplaySpeed: 2000,
    pauseOnFocus: true,
    pauseOnHover: false,
    // arrows: true,
    pauseOnDotsHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: $('.next-custom'),
    prevArrow: $('.prev-custom'),
});
});

// $(document).ready(function(){
//   $(".nav-tabs-dropdown a").click(function(){
//     $(this).tab('show');
//   });
// });

$(document).ready(function(){
  $(".nav-tabs-dropdown a").click(function(){
    $(this).tab('show');
  });
  // $('.nav-tabs-dropdown a').on('shown.bs.tab', function(event){
  //   var x = $(event.target).text();         // active tab
  //   var y = $(event.relatedTarget).text();  // previous tab
  //   $(".act span").text(x);
  //   $(".prev span").text(y);
  // });
});


// $(document).ready(function(){
//   $('.nav i.fa').click(function() {
//     $(this).parent().toggleClass('open');
//   });

//   $('.nav > li a').click(function() {
//     $('.nav > li').removeClass('active');
//     $(this).parent().addClass('active');
//     $('.nav').toggleClass('open');
//   });
// });




