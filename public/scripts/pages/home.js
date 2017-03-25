import {
    TweenLite,
    TimelineLite,
    Strong
} from 'gsap';

import 'whatwg-fetch';

import {
    goTo
} from '../../scripts/navigation';

export default async() => {
    document.body.classList.add(`home`);

    const tl = new TimelineLite();

    const navigation = document.querySelector(`.navigation`);
    const navLinks = document.querySelectorAll(`.navigation a`);
    const blurb = document.querySelector(`.blurb`);

    const homeLogoContainer = document.querySelector(`.home-logo-container`);
    const logo = document.querySelector(`.logo`);

    homeLogoContainer.appendChild(logo);

    console.log(navLinks);

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const href = link.attributes.href.value;

            goTo(href);
        });
    });

    tl
        .to(logo, .5, {
            opacity: 1,
            filter: `blur(0)`,
            transform: `scale(1)`,
        })
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
            ease: Strong.easeInOut,
            filter: `blur(20px)`,
            transform: `translate3d(0, 3vh, 0)`,
            opacity: 0
        }, {
            transform: `translate3d(0, 0, 0)`,
            filter: `blur(0)`,
            opacity: 1
        });
};