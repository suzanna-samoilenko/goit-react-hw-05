import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchSearchMovies } from "../../services/api";
import { useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      const data = await fetchSearchMovies(query);
      setMovies(data);
    };
    getMovies();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newQuery = form.elements.query.value.trim();

    if (!newQuery) {
      setSearchParams({});
      return;
    }

    setSearchParams({ query: newQuery });
    form.reset();
  };

  return (
    <div className={s.searchFormСontainer}>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <input
          type="text"
          name="query"
          placeholder="Search for movies..."
          className={s.input}
        />
        <button type="submit" className={s.searchFormBtn}>
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
