import {
    TweenLite,
    TimelineLite,
    Strong
} from 'gsap';

// const createEase = () => new Ease(BezierEasing(0, 1.01, .48, 1));

export default () => {
    const tl = new TimelineLite();

    const homeLogoContainer = document.querySelector(`.home-logo-container`);
    const logo = document.querySelector(`.logo`);
    const navigation = document.querySelector(`.navigation`);
    const navLinks = document.querySelectorAll(`.navigation a`);

    homeLogoContainer.appendChild(logo);

    logo.classList.add(`show`);

    tl
        .staggerTo(navLinks, .25, {
            ease: Strong.easeInOut,
            filter: `blur(0)`,
            transform: `scale(1)`,
            opacity: 1
        }, .25);

};