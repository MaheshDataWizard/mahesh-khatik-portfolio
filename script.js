
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".typed",{
        strings:["design", "development", "data analysis", "machine learning", "deep learning", "artificial intelligence"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true

    })
});



// --------------------------------------Swiper-----------------------------------------
const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    autoplay: {
        delay: 2500,         
        disableOnInteraction: false,
      },
      speed: 600, 
    grabCursor: true,
    spaceBetween: 30,


    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0:{
            slidesPerView: 1
        },
        620:{
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  
  });


//   -------------------------------Swiper End--------------------------


var tablinks=document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){

    for( tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("side-menu");

function openmenu(){
    sidemenu.style.right = "0";
}
    
function closemenu(){
    sidemenu.style.right = "-200px";
}


const msg = document.getElementById("msg");

  const scriptURL = 'https://script.google.com/macros/s/AKfycby88ao3yJfbdCEDZfGKxW_CH0IsZYQVWuTHLBxHtSvOW5RJz-mNTxE5TV5Kworz4loAcQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML= "Message Sent Successfully!"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
      
  })
