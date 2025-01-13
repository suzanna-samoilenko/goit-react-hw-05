import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "/src/services/api.js";
import MovieList from "/src/components/MovieList/MovieList";
import s from "./Home.module.css";

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
    <div className={s.container}>
      <h1 className={s.mainTitle}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
