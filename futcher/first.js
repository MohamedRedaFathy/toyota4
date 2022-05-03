const navbar =document.getElementById("nav");
const links =document.getElementById("links");
const dow =document.getElementById("dow");
const up =document.getElementById("up");

window.addEventListener("scroll" , function(){
    navbar.classList.toggle("stkly" , this.window.scrollY > 10)
});

dow.addEventListener("click" , (eo) => {
    links.style.display="block";
    dow.style.display="none";
    up.style.display="block";
});

up.addEventListener("click" , (eo) => {
    links.style.display="none";
    dow.style.display="block";
    up.style.display="none";
});