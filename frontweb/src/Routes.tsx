import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'util/history';
import PrivateRoute from 'components/PrivateRoute';
import ListMovies from 'components/ListMovies';
import MovieDetails from 'pages/MovieDetails';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <PrivateRoute path="/movies" exact="exact">
        <ListMovies />
      </PrivateRoute>

      <PrivateRoute path="/movies/:movieId">
        <MovieDetails />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
/*

 <PrivateRoute path="/movies">
        <ListMovies />
      </PrivateRoute>


 <PrivateRoute path="/movies/:movieId">
        <MovieDetails />
      </PrivateRoute>

*/
