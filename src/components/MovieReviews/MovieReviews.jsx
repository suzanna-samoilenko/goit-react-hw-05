import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import styles from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchMovieReviews(movieId);
      setReviews(data);
    };

    getReviews();
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>No reviews available for this movie.</p>;
  }

  return (
    <ul className={styles.reviewList}>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={styles.reviewItem}>
          <p className={styles.reviewAuthor}>
            <strong>Author:</strong> {author}
          </p>
          <p className={styles.reviewContent}>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
