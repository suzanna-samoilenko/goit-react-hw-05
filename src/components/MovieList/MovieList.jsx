import styles from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={styles.movieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.movieItem}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              className={styles.moviePoster}
            />
          </Link>
          <Link
            to={`/movies/${movie.id}`}
            className={styles.movieTitle}
            state={{ from: location }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
