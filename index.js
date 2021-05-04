const navToggle = document.querySelector('.nav');
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navLinks = document.querySelectorAll(".nav-list-item");
const container = document.querySelector(".container");

openMenu.addEventListener('click', ()=> {
    navToggle.classList.add("active-nav");
    container.classList.add("inactive-container")
})

closeMenu.addEventListener('click', ()=> {
    navToggle.classList.remove("active-nav");
    container.classList.remove("inactive-container")
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove("active-nav");
        container.classList.remove("inactive-container")
    })
})

