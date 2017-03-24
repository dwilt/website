import {
    TweenLite,
    TimelineLite,
    Strong
} from 'gsap';

export default () => {
    const tl = new TimelineLite();

    const logo = document.querySelector(`.logo`);
    const logoContainer = document.querySelector(`.logo-container`);
    const navigation = document.querySelector(`.navigation`);
    const navLinks = document.querySelectorAll(`.navigation a`);

    tl
        .to(logo, .5, {
            ease: Strong.easeInOut,
            top: 50,
            onComplete: () => {
                logoContainer.style.paddingTop = `50px`;
                logo.style.position = 'static';
            }
        })
        .staggerTo(navLinks, 2, {
            ease: Strong.easeInOut,
            filter: `blur(0)`,
            transform: `scale(1)`,
            opacity: 1
        }, .25);

};