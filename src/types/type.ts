export interface IData {
  page: number;
  results: IResult[];
  total_pages: number;
  total_results: number;
}

export interface IResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IItem {
  img: string;
  id: number;
  title: string;
}

export interface IUserData {
  email: any;
  password: any;
}

export interface IContext {
  signUp: any;
  logIn: any;
  logOut: any;
  user: any;
}
