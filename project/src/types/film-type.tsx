export type FilmType = {
    id: number;
    name: string;
    posterImage: string;
    previewImage: string;
    backgroundImage: string;
    videoLink: string;
    previewVideoLink: string;
    description: string;
    rating: number;
    votesNumber: number;
    director: string;
    actors: string[];
    duration: number;
    genre: string;
    releaseYear: number;
    addMyList: boolean;
    reviews: Review[];
  };

export type Review = {
  id: number,
  rating: number,
  author: string,
  date: string,
  text: string
};
