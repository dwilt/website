import {
    createElementFromString
} from './helpers/dom';

export async function goTo(url) {
    const location = window.location.host;
    const fullURL = `http://${location}/api${url}`;

    const res = await fetch(fullURL);
    const html = await res.text();

    document.body.appendChild(createElementFromString(html));

    window.history.pushState({
        html: html,
        title: `this is the title`
    }, "", url);
}