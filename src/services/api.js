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

export const fetchMovieDetails = async (movieId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      headers: {
        Authorization: API_TOKEN,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const fetchSearchMovies = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    headers: {
      Authorization: API_TOKEN,
    },
    params: {
      query,
      language: "en-US",
      page: 1,
    },
  });
  return data.results;
};

export const fetchMovieCast = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    headers: {
      Authorization: API_TOKEN,
    },
  });
  return data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    headers: {
      Authorization: API_TOKEN,
    },
  });
  return data.results;
};
