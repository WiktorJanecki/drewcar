const nav = document.querySelector(".elements");
const button = document.querySelector('.hamburger');
const offertLinks = document.querySelectorAll('.offertLink');
nav.style.display = 'none';
for(let i = 0;i<offertLinks.length;i++){
    offertLinks[i].style.display = 'none';
}

function seeNav(){

    if(nav.style.display == 'none'){
        nav.style.display = 'block';
        button.classList.add('open');
    }else{
        nav.style.display = 'none';
        button.classList.remove('open');
    }
}
function showOffert(){
        if(offertLinks[0].style.display == 'none'){
            for(let i = 0;i<offertLinks.length;i++){
                offertLinks[i].style.display = 'block';
            }
        }else{
            for(let i = 0;i<offertLinks.length;i++){
                offertLinks[i].style.display = 'none';
            }
    }
}

$(document).ready(function(){
  $('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  pauseOnFocus:false,
      centerMode:true,
  pauseOnHover:false,
      initialSlide:5,
  variableWidth: true,
  });
});
