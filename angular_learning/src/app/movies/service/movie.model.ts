export const actors = [
    "Robert Downey Jr.",
    "Chris Evans",
    "Scarlett Johansson",
    "Chadwick Boseman",
    "Letitia Wright",
    "Lupita Nyong\'o",
    "Danai Gurira",
    "Mark Ruffalo",
    "Chris Hemsworth",
    "Jeremy Renner"
]

export const movies = [
    {
        title: 'The Avengers',
        director: 'Joss Whedon',
        writer: 'Joss Whedon',
        desc: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        img: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
        actors: [actors[0], actors[1], actors[2]],
        rating: 8.0,
        year: 2012
    },{
        title: 'Avengers: Age of Ultron',
        director: 'Joss Whedon',
        writer: 'Joss Whedon, Stan Lee',
        desc: 'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it\'s up to Earth\'s mightiest heroes to stop the villainous Ultron from enacting his terrible plan.',
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        img: 'https://upload.wikimedia.org/wikipedia/id/1/1b/Avengers_Age_of_Ultron.jpg',
        actors: [actors[0], actors[1], actors[2], actors[7]],
        rating: 7.3,
        year: 2015
    },{
        title: 'Avengers: Infinity War',
        director: 'Anthony Russo, Joe Russo',
        writer: 'Christopher Markus, Stephen McFeely, Stan Lee',
        desc: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        img: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg',
        actors: [actors[0], actors[1], actors[2], actors[7], actors[8]],
        rating: 8.4,
        year: 2018
    },{
        title: 'Avengers: Endgame',
        director: 'Joss Whedon',
        writer: 'Joss Whedon, Stan Lee',
        desc: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        img: 'https://s1.bukalapak.com/img/68286857232/large/Poster_Film___Avengers_Endgame___Marvel_Studios___Movie_Post.jpg',
        actors: [actors[0], actors[1], actors[2], actors[7], actors[8], actors[9]],
        rating: 8.4,
        year: 2019
    },{
        title: 'Black Panther',
        director: 'Ryan Coogler',
        writer: 'Ryan Coogler',
        desc: 'T\'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country\'s past.',
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        img: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg',
        actors: [actors[3], actors[4], actors[5], actors[6]],
        rating: 7.3,
        year: 2018
    },{
        title: 'Black Panther: Wakanda Forever',
        director: 'Ryan Coogler',
        writer: 'Ryan Coogler',
        desc: 'The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T\'Challa.',
        genre: ['Action', 'Adventure', 'Drama'],
        img: 'https://asset.tix.id/wp-content/uploads/2022/11/c6b9890add5c02fcf9b0bfbee9813858.jpg',
        actors: [actors[4], actors[5], actors[6]],
        rating: 7.3,
        year: 2022
    }
]

export interface Movie {
    title: string,
    director: string,
    writer: string,
    desc: string,
    genre: string[],
    img: string,
    actors: string[],
    rating: number,
    year: number
}