// toggle & responsive navigation
const navLists = document.querySelector("nav")
const burger = document.querySelector(".burger")
const navSlide = () => {
burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active")
    burger.classList.toggle("toggle-burger")
})
};

navSlide();

//Clear from before undo
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

//touch keluar (burger)
document.addEventListener('click', function(e){
    if(!burger.contains(e.target) && !navLists.contains(e.target)) {
        navLists.classList.remove('nav-active')
        burger.classList.remove("toggle-burger")
    }
})