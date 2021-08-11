import List from 'components/ListMovies';
import MovieDetails from 'pages/MovieDetails';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import { Router, Route, Switch} from 'react-router-dom';
import history from 'util/history';


const Routes = () => (
  <Router history={history}>
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
  </Router>
);

export default Routes;