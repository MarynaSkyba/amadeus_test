import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '81a241f12309c5e9ca28c72f9b2b35af',
};

async function fetchMovies(url = '', config = {}) {
  const response = await axios.get(url, config);
  return response.data;
}


export function moviesSearch(searchMovie) {
  return fetchMovies(`search/movie?&query=${searchMovie}`);
}
