//-----------NAV---------------

const navBar = document.querySelector('header');

window.addEventListener('resize', () => {
    navBar.style.background = "#FFD700";
})

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(item => {
    item.addEventListener('mouseenter', e => {
        item.style.color = "blue";
    })
});

navLinks.forEach(item => {
    item.addEventListener('mouseleave', e => {
        item.style.color = "#212529";
    })
});

navLinks.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
    })
});

const logo = document.querySelector('.logo-heading');

logo.addEventListener('dblclick', e => {
    logo.style.display = "none"
});

window.addEventListener('keydown', () =>{
    logo.style.color = "red";
});

window.addEventListener('keyup', () =>{
    logo.style.color = "#212529";
});

//---------------IMG------------------

const imgs = document.querySelectorAll('img');

imgs[0].addEventListener('click', () => {
    imgs[0].style.opacity = "0.7"; 
});


//----------------H2----------------------

const h2s = document.querySelectorAll('h2');

h2s[2].addEventListener('wheel', () => {
    h2s[2].style.color = "red";
});

//------------BACKGROUND------------------

const body = document.querySelector('body');

window.addEventListener('resize', () => {
    body.style.background = "#87CEFA";
})

//------------BOTTOM BTN----------------

const btns = document.querySelectorAll('.btn');



btns[1].addEventListener('click', () => {
    body.style.fontFamily = "'Dancing Script', cursive";
})

//-----------STOP PROP--------------

const contentDestination = document.querySelector('.content-destination');

contentDestination.addEventListener('dblclick', e => {
    contentDestination.style.color = "purple";
})

imgs[3].addEventListener('dblclick', e => {
    imgs[3].style.borderRadius = "25px";
    e.stopPropagation();
})