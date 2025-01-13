import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <p className={s.error}>Not found</p>
      <Link to="/" className={s.backButton}>
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
