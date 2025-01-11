import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "/src/services/api.js";
import MovieList from "/src/components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    };
    getMovies();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
