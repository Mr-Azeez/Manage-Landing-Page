// Toggle hamburger button
function toggleIcon() {
    // Get references to the hamburger and close icon elements
    const hamburgerIcon = document.getElementById('hamburgerBtn');
    const closeIcon = document.getElementById('closeBtn');
    const menuBar = document.querySelector('.menu')

    if (hamburgerIcon.style.display === 'none') {
            // If hidden, show the hamburger icon and hide the close icon
            hamburgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            menuBar.style.display = 'none'
        } else {
            // If visible, hide the hamburger icon and show the close icon
            hamburgerIcon.style.display = 'none';
            closeIcon.style.display = 'block';
            menuBar.style.display = 'block'
        }
}

let menu_icon_box = document.getElementById("toggleButton")
let box = document.querySelector(".menu")

document.onclick = function(e){
    if(!menu_icon_box.contains(e.target) && !box.contains(e.target)) {
        // toggleIcon()
    }
}

// Responsive horizontal slider using SwipeJs
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

// Email validator
const form = document.querySelector(".form");
const emailField = document.getElementById("email-field");
const emailError = document.getElementById("email-error");

function validateEmail(){
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailField.value.match(emailPattern)){
        emailError.innerHTML = "Please enter a valid email";
        emailField.style.outline = "2px solid #d93025";
        location.href = form.removeAttribute("action");
        return false;
    }
    emailError.innerHTML = "";
    emailField.style.outline = "2px solid green";
    location.href = form.getAttribute("action");
    return true;
}
