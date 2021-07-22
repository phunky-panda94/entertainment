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

export const anime = [

    new Anime('One Piece', 'https://0c86e2d1-madman-com-au.akamaized.net/shows/one-piece_portrait-key-art-normal-small_60209.jpeg', 'https://www.animelab.com/shows/one-piece'),
    new Anime('One Punch Man', 'https://0c86e2d1-madman-com-au.akamaized.net/shows/one-punch-man_portrait-key-art-normal-small_59071.jpeg', 'https://www.animelab.com/shows/one-punch-man'),
    new Anime('Boku no Hero Academia', 'https://0c86e2d1-madman-com-au.akamaized.net/shows/my-hero-academia_portrait-key-art-normal-small_101358.png','https://www.animelab.com/shows/my-hero-academia'),
    new Anime('Boruto','https://0c86e2d1-madman-com-au.akamaized.net/shows/boruto-naruto-next-generations_portrait-key-art-normal-small_99655.jpg','https://www.animelab.com/shows/boruto-naruto-next-generations'),
    new Anime('Demon Slayer','https://0c86e2d1-madman-com-au.akamaized.net/shows/demon-slayer_portrait-key-art-normal-small_58856.jpeg','https://www.animelab.com/shows/demon-slayer')

];
