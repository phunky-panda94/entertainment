import { loadContent } from './loadContent.js';
import { manga } from './manga.js';

// TODO: add eventListeners to each tab button
const mangaTab = document.querySelector('#manga');

mangaTab.addEventListener('click', () => {

    mangaTab.classList.add('active');
    loadContent(manga);

}, { once: true });




