import {
    TweenLite
} from 'gsap';

import Home from './pages/home';

(async () => {

    const logoAnimation = new Promise(resolve => {
        const logo = document.querySelector(`.logo`);

        logo.addEventListener(`animationend`, ({ animationName }) => {
            if(animationName === `showLogo`) {
                // overwrite CSS centering
                const width = logo.clientWidth;
                const height = logo.clientHeight;
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;

                logo.style.margin = 0;
                logo.style.left = (windowWidth / 2) - (width / 2);
                logo.style.top = (windowHeight / 2) - (height / 2);
                
                resolve();
            }
        });
    });

    
    const dependencies = () => Promise.all([
        document.fonts.ready,
        logoAnimation
    ]);

    await dependencies();

    const page = window.location.pathname.match(/\/website\/([a-z0-9]+).html/)[1];

    switch(page) {
        case `index`: {
            Home();
        }
    }
})();