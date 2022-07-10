const linksContainer = document.querySelector('.navbar');
const links = document.querySelector('.nav-list');
const navToggler = document.getElementById('nav-toggle');
const navbarToggle = ()=>{
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(linksContainerHeight == 0){
        linksContainer.style.height = `${linksHeight}px`
    }else{
        linksContainer.style.height = `0px`
    }
};
navToggler.addEventListener('click', navbarToggle);

// scroll effect

const nav = document.querySelector('nav');
const navHeight = nav.getBoundingClientRect().height;
window.addEventListener('scroll', ()=>{
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > navHeight){
        nav.classList.add('fixed');
    }else{
        nav.classList.remove('fixed');
    }
})

// addd the actiev class to the nav items when within their sections
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries, sectionObserver)=>{
    entries.forEach(entry=>{
        const id = entry.target.getAttribute('id');
        const navlink = document.querySelector(`[href="#${id}"]`)
        if(entry.isIntersecting){
            // find the navlink with such id
            if(navlink){
                navlink.classList.add('active');
            }
        }else{
            if(navlink){
                navlink.classList.remove('active')
            }
        }
    })
}, {
    root:null,
    threshold: 0.5,
    rootMargin: "0px"
});

sections.forEach(section=>{
    observer.observe(section);
})