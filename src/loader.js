import brisket from './brisket.jpg';
import './style.css';

export default function initialLoader() {

    const pageContent = document.createElement('div');
    pageContent.setAttribute('id', 'content');
    pageContent.classList.add('background');
    document.body.appendChild(pageContent);

    const headline = document.createElement('h1');
    headline.textContent = 'Combos BBQ Pit';
    pageContent.appendChild(headline);

    const myBrisket = new Image();
    myBrisket.src = brisket;
    myBrisket.classList.add('size-limit');
    pageContent.appendChild(myBrisket);

    const blurb = document.createElement('p');
    blurb.textContent = 'Voted best BBQ in the state of Florida by none other than Combos himself!';
    pageContent.appendChild(blurb);
};