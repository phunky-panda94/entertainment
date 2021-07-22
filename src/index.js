import { loadContent, removeContent } from './content.js';
import { manga } from './manga.js';
import { anime } from './anime.js';

// TODO: add eventListeners to each tab button
const tabs = document.querySelectorAll('.tab');
const mangaTab = document.querySelector('#manga');
const animeTab = document.querySelector('#anime');
const tvTab = document.querySelector('#tv');
const moviesTab = document.querySelector('#movies');

mangaTab.addEventListener('click', () => {

    clear();
    mangaTab.classList.add('active');
    loadContent(manga);

});



animeTab.addEventListener('click', () => {

    clear();
    animeTab.classList.add('active');
    loadContent(anime);

});

tvTab.addEventListener('click', () => {

    clear();
    tvTab.classList.add('active');

})

moviesTab.addEventListener('click', () => {

    clear();
    moviesTab.classList.add('active');

});

function clear() {

    removeContent();
    
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

}
 