//#region variables
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
// END INTRO
const section = document.querySelector('.reminder');
const end = section.querySelector('h1');
// END REMINDER
const unicorn = document.querySelector('.unicorn');
const txtScrolldown = unicorn.querySelector('p');
const txtUnicorns = unicorn.querySelector('#txtUnicorns');
const txtDont = unicorn.querySelector('#txtDont');
const txtExists = unicorn.querySelector('#txtExists');
const imgUnicorn = unicorn.querySelector('img');
//#endregion

//Init Scroll Magic
const controller = new ScrollMagic.Controller();

//#region Alert scrolling
// Scene
let alertScene = new ScrollMagic.Scene({
    duration: 3500,
    triggerElement: intro,
    triggerHook: 0,

})
    .setPin(intro)
    .addTo(controller);

// Text animation
const textAnim = TweenMax.fromTo(text, 2, { opacity: 1 }, { opacity: 0 });
let titleScene = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);

// Video animation
let accelamount = 0.08;
let scrollpos = 0;
let delay = 0;

alertScene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;

    video.currentTime = delay;
}, 40);
//#endregion

//#region Unicorns scenes
let tl = new TimelineMax();
tl
    .fromTo(txtScrolldown, 1, { opacity: 1 }, { opacity: 0 })
    .fromTo(txtUnicorns, 2, { x: '400%' }, { x: '-400%' })
    .fromTo(txtDont, 2, { x: '600%' }, { x: '-600%' })
    .fromTo(txtExists, 2, { x: '600%' }, { x: '-600%' })
    .fromTo(imgUnicorn, 1, { opacity: 0, x: '600%' }, { opacity: 1, x: '0%' });

let scrollDownScene = new ScrollMagic.Scene({
    duration: 8000,
    triggerElement: unicorn,
    triggerHook: 0
})
    .setTween(tl)
    .setPin(unicorn)
    .addTo(controller);
//#endregion

