class Anime {
    constructor(title, img, link) {
        this._title = title;
        this._img = img;
        this._link = link;
    }

    get title () {
        return this._title;
    }

    get img () {
        return this._img;
    }

    get link () {
        return this._link;
    }
};

const anime = [

    new Anime('One Piece', '', ''),
    new Anime('One Punch Man', '', ''),
    new Anime('Boku no Hero Academia', 'https://0c86e2d1-madman-com-au.akamaized.net/shows/my-hero-academia_portrait-key-art-normal-small_101358.png','https://www.animelab.com/shows/my-hero-academia'),
    new Anime('Boruto','',''),
    new Anime('Black Clover','','')

];
