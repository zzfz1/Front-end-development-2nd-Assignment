import { useEffect } from "react";
import { useStates } from "./utilities/states";
import MovieList from "./MovieList";
import ScreeningList from "./ScreeningList";
import MovieDetail from "./MovieDetail";
import Welcome from "./Welcome";
import DisplaySeats from "./DisplaySeats";
import Page404 from "./Page404";
import Receipt from "./Receipt";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { kebabify } from "./utilities/kebabify";
import { NavigationBar } from "./NavigationBar";

export default function App() {
  const s = useStates("main", {
    movies: [],
    screenings: [],
    screeningsXmovies: [],
    sortingOrders: 1,
    categories: [],
    selectedCategory: "All",
    searchText: "",
  });

  useEffect(() => {
    (async () => {
      // fetch alll movies from the REST api
      let movies = await (await fetch("/api/movies")).json();
      // add a slug to be used in url routes to each movie
      for (let movie of movies) {
        movie.slug = kebabify(movie.title);
      }
      // store the movies in our state variable
      s.movies = movies;

      let screenings = await (await fetch("/api/screenings")).json();
      screenings.sort(({ time: aTime }, { time: bTime }) => {
        return aTime < bTime ? s.sortingOrders : -s.sortingOrders;
      });
      s.screenings = screenings;

      let screeningsXmovies = s.screenings.map((sc) => {
        let movie = s.movies.find((m) => m.id === sc.movieId);
        return { ...movie, ...sc };
      });
      s.screeningsXmovies = screeningsXmovies;

      let categories = await (await fetch("/api/categories")).json();
      s.categories = categories;
    })();
  }, []);

  return s.movies.length === 0 ? null : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Welcome />}></Route>
          <Route path="movie-list" element={<MovieList />}></Route>
          <Route path="screen-list" element={<ScreeningList />}></Route>
          <Route path="movie-detail/:slug" element={<MovieDetail />} />
          <Route path="booking/:screeningId" element={<DisplaySeats />} />
          <Route path="receipt" element={<Receipt />} />
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
