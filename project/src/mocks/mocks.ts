import { FilmType } from '../types/film-type';
import { Review } from '../types/film-type';

export const takeTestFilm = () : FilmType => ({
  name: 'The Grand Budapest Hotel',
  posterImage:
      'img/the-grand-budapest-hotel-poster.jpg',
  previewImage:
      'img/the-grand-budapest-hotel-poster.jpg',
  backgroundImage:
      'img/bg-the-grand-budapest-hotel.jpg',
  description:
      'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. \
      (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege. \
      Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the \
      many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless \
      painting and the chief suspect in her murder.',
  rating: 8.9,
  scoresCount: 154,
  director: 'Wes Anderson',
  starring: ['Jared Gilman', 'Kara Hayward', 'Bruce Willis'],
  runTime: 94,
  genre: 'Drama',
  released: 2011,
  id: 1,
  isFavorite: false,
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  backgroundColor: 'red'
});

export const takeTestFilms = () : FilmType[] => [
  {
    name: 'The Grand Budapest Hotel',
    posterImage:
      'img/the-grand-budapest-hotel-poster.jpg',
    previewImage:
      'img/the-grand-budapest-hotel-poster.jpg',
    backgroundImage:
      'img/bg-the-grand-budapest-hotel.jpg',
    description:
      'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. \
      (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege. \
      Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the \
      many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless \
      painting and the chief suspect in her murder.',
    rating: 8.9,
    scoresCount: 154,
    director: 'Wes Anderson',
    starring: ['Jared Gilman', 'Kara Hayward', 'Bruce Willis'],
    runTime: 94,
    genre: 'Drama',
    released: 2011,
    id: 1,
    isFavorite: false,
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    backgroundColor: 'red'
  },
  {
    name: 'Moonrise Kingdom',
    posterImage:
      'https://10.react.pages.academy/static/film/poster/Moonrise_Kingdom.jpg',
    previewImage:
      'https://10.react.pages.academy/static/film/preview/moonrise-kingdom.jpg',
    backgroundImage:
      'https://10.react.pages.academy/static/film/background/Moonrise_Kingdom.jpg',
    description:
      'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.',
    rating: 7.9,
    scoresCount: 222,
    director: 'Wes Anderson',
    starring: ['Jared Gilman', 'Kara Hayward', 'Bruce Willis'],
    runTime: 94,
    genre: 'Adventure',
    released: 2012,
    id: 2,
    isFavorite: false,
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    backgroundColor: 'blue'
  },
  {
    name: 'Bronson',
    posterImage:
      'https://10.react.pages.academy/static/film/poster/bronson.jpg',
    previewImage:
      'https://10.react.pages.academy/static/film/preview/bronson.jpg',
    backgroundImage:
      'https://10.react.pages.academy/static/film/background/bronson.jpg',
    description:
      'A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.',
    rating: 3.6,
    scoresCount: 998866,
    director: 'Nicolas Winding Refn',
    starring: ['Tom Hardy', 'Kelly Adams', 'Luing Andrews'],
    runTime: 92,
    genre: 'Action',
    released: 2008,
    id: 3,
    isFavorite: false,
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    backgroundColor: 'green'
  },
  {
    name: 'Orlando',
    posterImage:
      'https://10.react.pages.academy/static/film/poster/Orlando.jpg',
    previewImage:
      'https://10.react.pages.academy/static/film/preview/orlando.jpg',
    backgroundImage:
      'https://10.react.pages.academy/static/film/background/Orlando.jpg',
    description:
      'Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships along the way, and even changing sex.',
    rating: 2.6,
    scoresCount: 14422,
    director: 'Sally Potter',
    starring: ['Tilda Swinton', 'Billy Zane', 'Quentin Crisp'],
    runTime: 94,
    genre: 'Drama',
    released: 1992,
    id: 4,
    isFavorite: false,
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    backgroundColor: 'green'
  },
  {
    name: 'Beach',
    posterImage: 'https://10.react.pages.academy/static/film/poster/beach.jpg',
    previewImage:
      'https://10.react.pages.academy/static/film/preview/beach.jpg',
    backgroundImage:
      'https://10.react.pages.academy/static/film/background/beach.jpg',
    description:
      'Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.',
    rating: 3.3,
    scoresCount: 966,
    director: 'Danny Boyle',
    starring: ['Leonardo DiCaprio', 'Daniel York', 'Patcharawan Patarakijjanon'],
    runTime: 119,
    genre: 'Adventure',
    released: 2000,
    id: 5,
    isFavorite: false,
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    backgroundColor: 'green'
  },
  {
    name: 'Aviator',
    posterImage:
      'https://10.react.pages.academy/static/film/poster/Aviator.jpg',
    previewImage:
      'https://10.react.pages.academy/static/film/preview/aviator.jpg',
    backgroundImage:
      'https://10.react.pages.academy/static/film/background/Aviator.jpg',
    description:
      'A biopic depicting the early years of legendary Director and aviator Howard Hughes career from the late 1920s to the mid 1940s.',
    rating: 9.8,
    scoresCount: 8558,
    director: 'Martin Scorsese',
    starring: ['Leonardo DiCaprio', 'Cate Blanchett', 'Kate Beckinsale'],
    runTime: 170,
    genre: 'Drama',
    released: 2014,
    id: 6,
    isFavorite: false,
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    backgroundColor: 'green'
  },
  {
    name: 'Shutter Island',
    posterImage:
      'https://10.react.pages.academy/static/film/poster/Shutter_Island.jpg',
    previewImage:
      'https://10.react.pages.academy/static/film/preview/shutter-island.jpg',
    backgroundImage:
      'https://10.react.pages.academy/static/film/background/Shutter_Island.jpg',
    description:
      'In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.',
    rating: 4.1,
    scoresCount: 134443,
    director: 'Martin Scorsese',
    starring: ['Leonardo DiCaprio', 'Emily Mortimer', 'Mark Ruffalo'],
    runTime: 138,
    genre: 'Thriller',
    released: 2010,
    id: 7,
    isFavorite: false,
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    backgroundColor: 'green'
  },
  {
    name: 'Seven Years in Tibet',
    posterImage:
      'https://10.react.pages.academy/static/film/poster/Seven_Years_in_Tibet.jpg',
    previewImage:
      'https://10.react.pages.academy/static/film/preview/seven-years-in-tibet.jpg',
    backgroundImage:
      'https://10.react.pages.academy/static/film/background/Seven_Years_in_Tibet.jpg',
    description:
      'True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of China\'s takeover of Tibet.',
    rating: 3.6,
    scoresCount: 36836,
    director: 'Jean-Jacques Annaud',
    starring: ['Brad Pitt', 'David Thewlis', 'BD Wong'],
    runTime: 136,
    genre: 'Adventure',
    released: 1997,
    id: 8,
    isFavorite: false,
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    backgroundColor: 'green'
  },
  {
    name: 'Pulp Fiction',
    posterImage:
      'https://10.react.pages.academy/static/film/poster/Pulp_Fiction.jpg',
    previewImage:
      'https://10.react.pages.academy/static/film/preview/pulp-fiction.jpg',
    backgroundImage:
      'https://10.react.pages.academy/static/film/background/Pulp_Fiction.jpg',
    description:
      'The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    rating: 1.5,
    scoresCount: 3527,
    director: 'Quentin Tarantino',
    starring: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    runTime: 153,
    genre: 'Crime',
    released: 1994,
    id: 9,
    isFavorite: false,
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    backgroundColor: 'green'
  },
];

export const takeTestReviews = () : Review[] => [
  {
    id: 1,
    rating: 8.0,
    user: {name: 'Amanda Greever', id: 1},
    date: 'November 18, 2015',
    comment: 'It\'s a good film for watching with your family. My daughter was in a perfect mood all day after watching, thanks for it!'
  },
  {
    id: 2,
    rating: 8.0,
    user: {name: 'Bill Goodykoontz', id: 2},
    date: 'November 18, 2015',
    comment: 'I adore it! During the watching I was thinking about my husband and how I love him/'
  },
  {
    id: 3,
    rating: 2.0,
    user: {name: 'Abbad Joringhton', id: 3},
    date: 'April 8, 2005',
    comment: 'I didn\'t see something worse than that. I just want to wash my eyes with soap/'
  },
];
