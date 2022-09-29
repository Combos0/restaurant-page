import brisket from './brisket.jpg';
import './style.css';

export default function initialLoader() {

    const pageContent = document.createElement('div');
    pageContent.setAttribute('id', 'wrapper');
    pageContent.classList.add('background');
    document.body.appendChild(pageContent);

    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'nav-bar');
    pageContent.appendChild(navBar);

    const homePage = document.createElement('button');
    homePage.setAttribute('id', 'home-btn');
    homePage.textContent = 'Menu';
    navBar.appendChild(homePage);

    const contactPage = document.createElement('button');
    contactPage.setAttribute('id', 'contact-btn');
    contactPage.textContent = 'Contact Us';
    navBar.appendChild(contactPage);

    const mainMenuWrapper = document.createElement('div');
    mainMenuWrapper.setAttribute('id', 'content-wrapper');
    pageContent.appendChild(mainMenuWrapper);

    const centerContent = document.createElement('div');
    centerContent.setAttribute('id', 'content');
    mainMenuWrapper.appendChild(centerContent);

    /*const headline = document.createElement('h1');
    headline.textContent = 'Combos BBQ Pit';
    pageContent.appendChild(headline);

    const myBrisket = new Image();
    myBrisket.src = brisket;
    myBrisket.classList.add('size-limit');
    pageContent.appendChild(myBrisket);

    const blurb = document.createElement('p');
    blurb.textContent = 'Voted best BBQ in the state of Florida by none other than Combos himself!';
    pageContent.appendChild(blurb);*/
};