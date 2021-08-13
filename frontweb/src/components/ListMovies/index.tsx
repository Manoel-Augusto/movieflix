import { NavLink } from 'react-router-dom';

import './styles.css';

const ListMovies = () => {
  return (
    <div className="list-container">
      <h1>Tela de listagem de filmes</h1>
      <div></div>
      <div className="links">
        <div>
          <NavLink to="/movies/1">
            <span>Acessar</span>/movies/1
          </NavLink>

          <br />
          <NavLink to="/movies/2">
            <span>Acessar</span>/movies/2
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default ListMovies;
