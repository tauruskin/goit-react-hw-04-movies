import axios from 'axios';

export const popularFilms = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_KEY}`,
  );
};

export const showAllInfo = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}&language=en-US`,
  );
};

export const viewCredits = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_KEY}`,
  );
};

export const getReview = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`,
  );
};

export const searchFilm = string => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${string}&page=1&include_adult=false`,
  );
};
