import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>Not found</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
