const closeBtn= document.querySelector(".mobile-view__close");
const openBtn =document.querySelector(".mobile-view__open");
const nav =document.querySelector(".main-nav");
const html =document.querySelector("html");

closeBtn.addEventListener("click",()=>{
    nav.classList.toggle("mobile-view");
  
})

openBtn.addEventListener("click",()=>{
    nav.classList.toggle("mobile-view");
    html.classList.add("overflowY");
})