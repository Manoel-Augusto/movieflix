import List from 'components/ListMovies';
import MovieDetails from 'pages/MovieDetails';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/movies" exact>
        <List />
      </Route>

      <Route path="/movies/:movieId" exact>
        <MovieDetails />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
