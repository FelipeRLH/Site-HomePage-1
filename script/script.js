let menu = document.querySelector("nav ul")
let menuBar = document.querySelector(".menu-hamburguer")
let icon = document.querySelector(".menu-hamburguer img")

menuBar.addEventListener('click', (e) =>{
    menu.classList.toggle("active");

    if (icon.getAttribute("src") == "./style/menu.png"){
        icon.setAttribute("src", "./style/close.png")
    }else{
        icon.setAttribute("src", "./style/menu.png")
    }




});