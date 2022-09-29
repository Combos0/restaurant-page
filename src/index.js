import initialLoader from './loader.js';
import contactInfo from './contact.js';
import menuInfo from './menu.js';

initialLoader();

const listeners = (() => {

    const main = document.querySelector('body');
    main.setAttribute('style', 'margin: 0;');

    const homePageBTN = document.getElementById('home-btn');
    homePageBTN.addEventListener('click', () => {
        menuInfo();
    });

    const contactBTN = document.getElementById('contact-btn');
    contactBTN.addEventListener('click', () => {
        contactInfo();
    });
})();