import { loadContent } from './loadContent.js';
import { anime } from './anime.js';

// TODO: add eventListeners to each tab button
const animeButton = document.querySelector('#anime');
const tabs = document.querySelector('#tabs');

animeButton.addEventListener('click', () => {

    animeButton.classList.add('active');
    tabs.classList.add('active');
    loadContent(anime);

}, { once: true });




