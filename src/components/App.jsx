import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import HomePage from "/src/pages/HomePage/HomePage";
import MoviesPage from "/src/pages/MoviesPage/MoviesPage";
import NotFoundPage from "/src/pages/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "/src/pages/MovieDetailsPage/MovieDetailsPage";
import MovieReviews from "./MovieReviews/MovieReviews";
import MovieCast from "./MovieCast/MovieCast";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={MovieDetailsPage}>
          <Route path="/movies/:movieId/cast" element={MovieCast} />
          <Route path="/movies/:movieId/reviews" element={MovieReviews} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
