
// const header= document.querySelector(".header");

// window.onscroll = function(){
//         if(document.body.clientWidth>=1024 &&
//            (document.body.scrollTop>=20 || document.documentElement.scrollTop>=20)  )
//         {
//         if(document.body.scrollTop>=20){
//           header.classList.add('.scroll')
//         }
//         else{
//           header.classList.remove('.scroll')
//         }
//         }
//         }


// window.onscroll =function(){
//   if (
//     document.body.clientWidth>= 1024 &&
//     (document.body.scrollTop>=20 || document.documentElement.scrollTop>=20)
//   ){
//     if(document.body.scrollTop >= 20){
//       document.querySelector('header').style.background = "transparent"
//   }
//   else{
//     document.querySelector ('header').style.background = "#eee"
//     document.querySelector('a').style.color='green'
//     // dpcument.querySelector('i').style.color ='black'
//   }

// }}

// window.onscroll =function(){
//   if(document.body.scrollTop>= 1024 &&
//     (document.body.scrollTop>=20 || document.documentElement.scrollTop>=20)){
//       if(document.body.scrollTop >= 20){
//         document.querySelector('header').style.background = "#eee"
//         document.querySelector('li').style.color = 'green'
//       }
//       else{
//         document.querySelector ('header').style.background = "transparent"
//         document.querySelector('li').style.color='#eee'
//       }
//     }
// }

// const header= document.querySelector('.header');

// window.onscroll=function(){
//   var top=window.scrollY;

// if(top >= 20){
//     header.classList.add('active')
//   }
//   else{
//     header.classList.remove('active');
//   }

// }

jQuery(function($){
  var $navbar = $('.header');
  var link= $('.active');
  var icon = $('.icons');
  $(window).scroll(function(event){
    var $current = $(this).scrollTop();

    if($current>10){
      $navbar.addClass('scroll');
      link.addClass('active');
      icon.addClass('icons');
    }
    else{
      $navbar.removeClass('scroll');
      link.removeClass('active');
      icon.removeClass('icons');
    }
  })
})