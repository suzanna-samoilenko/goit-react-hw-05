import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
// import HomePage from "../pages/HomePage/HomePage.jsx";
// import MoviesPage from "../pages/MoviesPage/MoviesPage.jsx";
// import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
// import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage.jsx";
import MovieReviews from "./MovieReviews/MovieReviews";
import MovieCast from "./MovieCast/MovieCast";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage.jsx"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx")
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<MovieCast />} />
            <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
