//-----------NAV EVENTS---------------

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

// const logo = document.querySelector('.logo-heading');

// logo.addEventListener('click', e => {
//     e.style.transform = "rotate(360)";
//     e.style.transition = "transform 1.0s";
// })

//---------------TOP IMG------------------

const imgs = document.querySelectorAll('img');

imgs[0].addEventListener('keydown', e => {
    e.style.transform = 'scale(1.5)';
    e.style.transition = 'transform 0.8s';
})

console.log(imgs[0]);

// header.addEventListener('click', e => {
//     e.style.transform = "rotate(45)";
//     e.style.transition = "transform 0.4s";
// })


// const h2s = document.querySelectorAll('h2');

// h2s.forEach(item => {
//     item.addEventListener('dblclick', e => {
//         e.style.transform = "rotate(180)";
//         e.style.transition = "transform 1.0s";
//     })
// })