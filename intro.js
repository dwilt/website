import {
    TweenLite
} from 'gsap';

import Home from './pages/home';

(async() => {
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

        logo.classList.add(`hide`);
    });

    const dependencies = () => Promise.all([
        document.fonts.ready,
        new Promise(resolve => {
            setTimeout(resolve, 1000)
        })
    ]);

    await dependencies();

    await logoAnimation();

    const page = window.location.pathname.match(/\/website\/([a-z0-9]+).html/)[1];

    switch (page) {
        case `index`: {
            Home();
        }

        default:
            Home();
    }
})();