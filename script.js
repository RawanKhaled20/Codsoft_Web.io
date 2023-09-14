const links=document.getElementById("nav-links");
const hide=document.getElementById("xs");
const show=document.getElementById("bars");

hide.onclick=hideMenu;
show.onclick=showMenu;

function hideMenu(){
    links.style.right="-200px";
}
function showMenu(){
    links.style.right="0px";
}
const intersectionObserver = new IntersectionObserver((entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
        }
    })
}), {threshold: .7})

const elements = document.querySelectorAll('#animate-text1,#gu,#gu2');


elements.forEach(el => intersectionObserver.observe(el));