import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import styles from "./MovieCast.module.css";
import { MdOutlineNoPhotography } from "react-icons/md";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      const data = await fetchMovieCast(movieId);
      setCast(data);
    };

    getCast();
  }, [movieId]);

  if (cast.length === 0) {
    return <p>No cast information available for this movie.</p>;
  }

  return (
    <ul className={styles.castList}>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id} className={styles.castItem}>
          {profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
              className="castImage"
            />
          ) : (
            <span className={styles.iconSpan}>
              <MdOutlineNoPhotography size={120} className="noImageIcon" />
            </span>
          )}

          <div className={styles.containerCast}>
            <p className={styles.castName}>
              <strong>{name}</strong>
            </p>
            <p className={styles.castCharacter}>Character: {character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
