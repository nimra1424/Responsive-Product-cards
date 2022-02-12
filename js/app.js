// function parallax(element, distance, speed){
//   const item = document.querySelectorAll(element);
//   item.style.transform = 'translateY(${distance * speed}px)';
// }

$('.slick-carousel').slick({
  infinite: true,
  slidesToShow: 3, 
  slidesToScroll: 1, 
  arrows: true, 
  dots: true 
});
for( var i =1; i <= 2500; i++){
  $('.contact-container').append('<div class="box"></div>');
}

// for( var i =1; i <= 528; i++){
//   $('footer').append('<div class="footer-box"></div>');
// }
window.addEventListener("scroll", function(e){

  const target = document.querySelectorAll('.parallax');
  var index = 0, length = target.length;
  for (index; index < length; index++){
    var position = window.pageYOffset * target[index].dataset.rate;
    target[index].style.transform = 'translate3d(0px, '+position+'px, 0px)';
  }
  // parallax(".parallax", window.scrollY, 1);
  // parallax(".spacial-1", window.scrollY, 0.4);
  // parallax("spacial-2", window.scrollY, 0.7);
});


// var text = document.querySelector('.about-text p');
// text.innerHTML = text.textContent.replace(/\S/g,"<span></span>");

// const textElement = document.querySelectorAll('p');
// for(let i = 0; i<textElement.length; i++){
//   var letter = text.charAt(i);
//   document.getElementById(id).innerHTML += "<p id='span"+textElement+"'>"+letter+"</p>";

// }
//   textElement[i].style.transform = "rotate("+i*8+"deg)"
// }
// text.innerHTML = text.innerText.split("").map(
//                   (char, i) => 
//                   '<span style="transform: rotate(${ i * 8}deg)">${char}</span>'
//                   ).join("")

      // for(var c = 0;c < n;c++){
      //   var letter = content.charAt(c);
      //   document.getElementById(id).innerHTML += "<span id='span"+c+"'>"+letter+"</span>";


      

  // var content = document.querySelector('.about-text p');
  // document.getElementById(id).innerHTML = "";
  // var n = content.length;
  // for(var c = 0;c < n;c++){
  // var letter = content.charAt(c);
  // document.getElementById(id).innerHTML += "<span id='span"+c+"'>"+letter+"</span>";
    
  // }
  

  
function parseText(id){
  var content = document.getElementById(id).innerHTML;
  document.getElementById(id).innerHTML = "";
  var n = content.length;
  for(var c = 0;c < n;c++){
  var letter = content.charAt(c);
  document.getElementById(id).innerHTML += "<span id='span"+c+"'>"+letter+"</span>";
    
  document.getElementById("span"+c).style.webkitTransformOrigin = "50% 150px"
  document.getElementById("span"+c).style.webkitTransition = "all 1s ease-in";
  document.getElementById("span"+c).style.webkitTransform = "rotate(0deg)";
  document.getElementById("span"+c).style.webkitTransform = "rotate("+(c*14.5)+"deg)";
  
     
  }
  }





// function sizeButtonFunction(e){
//     var target = e.target,
//     status = e.target.classList.contains('active');

//     e.target.classList.add(status ? 'inactive' : 'active');
//     e.target.classList.remove(status ? 'active' : 'inactive'); 
// }
    

// function swatchFunction(e){
//     var target = e.target,
//     status = e.target.classList.contains('swatchActive');

//     e.target.classList.add(status ? 'swatchInactive' : 'swatchActive');
//     e.target.classList.remove(status ? 'swatchActive' : 'swatchInactive'); 
// }

// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })
// function scroll(){
//     const controller = new ScrollMagic.Controller();
//     new ScrollMagic.Scene({
//         duration: 500, //500pixels
//         triggerElement: '.outfit-left-image'
//         // triggerHook: 0
//     })
//     .addIndicators()
//     .addTo(controller);
// }
// scroll();