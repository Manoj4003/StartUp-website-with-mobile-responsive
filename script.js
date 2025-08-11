const menuIcon=document.querySelector(".nav-bar-content i");
const menuBar=document.querySelector(".menu-bar");
menuIcon.addEventListener("click",()=>{
    menuBar.classList.toggle("show");
})