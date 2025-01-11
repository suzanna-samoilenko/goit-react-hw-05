import styles from "./MovieList.module.css";
import { Link } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieList = ({ movies }) => {
  console.log(movies);

  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.listItem}>
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            className={styles.poster}
          />
          <Link to={`/movies/${movie.id}`} className={styles.link}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
