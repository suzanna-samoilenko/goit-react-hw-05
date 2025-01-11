import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODZlYWE4ZjEyZDgwZTM3ZjcyYzZjZWQyZDY0NzBlNyIsIm5iZiI6MTczNjQzNjk0MS42MzYsInN1YiI6IjY3N2ZlY2NkMzRhNGU3NWU0OTdiMzg4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jjN7EznFQWCt11LBQLT2z0O6iR5QCRz9jwrEntteBKI";

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, {
    headers: {
      Authorization: API_TOKEN,
    },
  });
  return data.results;
};

export const fetchMovieDetails = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/{movie_id}`, {
    headers: {
      Authorization: API_TOKEN,
    },
  });
  return data;
};
