import ButtonIcon from 'components/ButtonIcon';
import { NavLink } from 'react-router-dom';
import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import './styles.css';

const LoginCard = () => {
  return (
    <div className="main">
      <div className="container-image-main">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <MainImage />
      </div>

      <div className="login-card">
        <h1>LOGIN</h1>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Senha" />
        <NavLink to="/movies">
          <ButtonIcon text="Fazer Login" />
        </NavLink>
      </div>
    </div>
  );
};

export default LoginCard;
