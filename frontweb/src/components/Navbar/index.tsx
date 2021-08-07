import ButtonLogout from 'components/ButtonLogout';
import { Link } from 'react-router-dom';
import './styles.css';
const Navbar = () => {
  return (
    <nav className="bg-primary main-nav">
      <div className="container-logo">
        <Link to="/#">MovieFlix</Link>
      </div>
      <div className="btn-login-logout">
        <ButtonLogout text="sair" />
      </div>
    </nav>
  );
};
export default Navbar;
