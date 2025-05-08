//lets smooth the navbar
const nav = document.querySelector(".nav");
gsap.from(nav, {
    y: -50,
    duration: 0.5,
    ease: "back.out(1.7)",
});
const mainScreen = document.querySelector('.main')

//For the menu bar
const menu = document.querySelector(".nav i");
//getting bar
const seque = gsap.timeline();
menu.addEventListener("click", (dets) => {
    gsap.to('.bar', {
        right: 0,
    });
    seque.from('.bar h4', {
        x: 70,
        opacity: 0,
        duration: .3,
        stagger: .4,
    })
    gsap.from('.bar i', {
        opacity: 0,

    })
});
//Removing a bar
const cross = document.querySelector('.bar i')
cross.addEventListener('click', () => {
    gsap.to('.bar', {
        right: '-35%',
    })
})

const cursor = document.querySelector('.cursor')
document.body.addEventListener('mousemove', (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        duration: 1,
        y: dets.y,
        ease: "back.out(4)",
    })
})

