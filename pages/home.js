import {
    TweenLite,
    TimelineLite,
    Strong
} from 'gsap';

// const createEase = () => new Ease(BezierEasing(0, 1.01, .48, 1));

export default async () => {
    document.body.classList.add(`home`);

    const tl = new TimelineLite();

    const navigation = document.querySelector(`.navigation`);
    const navLinks = document.querySelectorAll(`.navigation a`);
    const blurb = document.querySelector(`.blurb`);

    const homeLogoContainer = document.querySelector(`.home-logo-container`);
    const logo = document.querySelector(`.logo`);

    homeLogoContainer.appendChild(logo);

    logo.classList.add(`show`);

    tl
        .staggerFromTo(navLinks, .5, {
            ease: Strong.easeInOut,
            filter: `blur(20px)`,
            transform: `translate3d(0, 3vh, 0)`,
            opacity: 0
        }, {
            transform: `translate3d(0, 0, 0)`,
            filter: `blur(0)`,
            opacity: 1
        }, .1)
        .fromTo(blurb, 1, {
            opacity: 0
        }, {
            opacity: 1
        })
};