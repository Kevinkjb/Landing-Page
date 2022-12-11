$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $(".main-nav").css({"background-color" : "#000", "z-index" : "1"})
        }
        else{
            $(".main-nav").css({"opacity" : "1", "background-color" : "transparent"})
        }
    })
})

const hamBurger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-list")

hamBurger.addEventListener('click', function(){
    hamBurger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", function(){
    hamBurger.classList.remove("active");
    navMenu.classList.remove("active");
  }));