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

    get link() {
        return this._link;
    }

}

export const anime = [

    new Anime('One Piece', 'https://images.mangafreak.net/mini_images/one_piece/80x127', 'https://w11.mangafreak.net/Manga/One_Piece'),
    new Anime('One Punch Man', 'https://images.mangafreak.net/mini_images/onepunch_man/80x127', 'https://w11.mangafreak.net/Manga/Onepunch_Man'),
    new Anime('Boku no Hero Academia', 'https://images.mangafreak.net/mini_images/my_hero_academia/80x127', 'https://w11.mangafreak.net/Manga/My_Hero_Academia'),
    new Anime('Boruto', 'https://images.mangafreak.net/mini_images/boruto_naruto_next_generations/80x127', 'https://w11.mangafreak.net/Manga/Boruto_Naruto_Next_Generations'),
    new Anime('Black Clover', 'https://images.mangafreak.net/mini_images/black_clover/80x127', 'https://w11.mangafreak.net/Manga/Black_Clover')

];



