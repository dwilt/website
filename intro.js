import {
    TweenLite
} from 'gsap';

import Home from './public/scripts/pages/home';

(async() => {

    console.log('intro animation start');

    const logoAnimation = () => new Promise(resolve => {
        const logoContainer = document.querySelector(`.logo-container`);
        const logo = document.querySelector(`.logo`);

        logo.addEventListener(`animationend`, ({ animationName }) => {
            if (animationName === `hideLogo`) {
                logoContainer.style.display = `none`;
                logo.classList.add(`hidden`);
                logo.classList.remove(`intro`, `hide`, `show`);
                resolve();
            }
        });

        console.log('intro animation end');

        logo.classList.add(`hide`);
        console.log('add hide class');
    });

    const dependencies = () => Promise.all([
        document.fonts.ready,
        new Promise(resolve => {
            setTimeout(resolve, 4000)
        })
    ]);

    await dependencies();

    await logoAnimation();

    const page = window.location.pathname;

    switch (page) {
        case `/`: {
            Home();
        }
    }
})();