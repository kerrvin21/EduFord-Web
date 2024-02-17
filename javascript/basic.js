let menu = document.querySelector('#menu');
let closeMenu = document.querySelector("#close-menu")
let nav = document.querySelector("nav")
let body = document.querySelector("body");

function disableScroll(val){
    if (val)body.classList.add("disable-scroll")
    else body.classList.remove("disable-scroll")
}

function openMenu(val){
    if(val){
        nav.classList.add("open")
        disableScroll(true)}
    else{
        nav.classList.remove("open")
        disableScroll(false)
    }
        
}

menu.addEventListener("click", () => openMenu(true))
closeMenu.addEventListener("click", ()=> openMenu(false))



