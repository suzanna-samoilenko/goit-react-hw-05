import { useEffect, useRef, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api"; // Функція для запиту до API
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    };

    getMovieDetails();
  }, [movieId]);

  const location = useLocation();
  const goBackRef = useRef(location.state?.from || "/movies");

  useEffect(() => {
    if (location.state?.from) {
      goBackRef.current = location.state.from;
    }
  }, [location.state?.from]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const { title, overview, genres, poster_path, release_date, vote_average } =
    movie;

  return (
    <div className={styles.container}>
      {/* <button onClick={() => navigate(-1)} className={styles.goBackButton}>
        Go back
      </button> */}
      <Link to={goBackRef.current} className={styles.goBackButton}>
        Go back
      </Link>
      <div className={styles.movieDetails}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className={styles.poster}
        />
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{title}</h1>
          <p>
            <strong>Release date:</strong> {release_date}
          </p>
          <p>
            <strong>Rating:</strong> {vote_average} / 10
          </p>
          <p>
            <strong>Overview:</strong> {overview || "No overview available."}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {genres?.map((genre) => genre.name).join(", ") ||
              "No genres available."}
          </p>
        </div>
      </div>
      <div className={styles.info}>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
