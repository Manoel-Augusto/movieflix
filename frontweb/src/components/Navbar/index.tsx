import { getTokenData, isAuthenticated } from 'auth';
import { AuthContext } from 'AuthContext';

import React, { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { removeAuthData } from 'storage';
import history from 'util/history';
import './styles.css';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="bg-primary main-nav">
      <div className="container-logo">
        <Link to="/">MovieFlix</Link>
      </div>
      {authContextData.authenticated ? (
        <div>
          <div className="btn-container-login">
            <button className=" btn-logout bg-primary">
              <Link to="/" onClick={handleLogoutClick} className="">
                SAIR
              </Link>
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </nav>
  );
};
export default Navbar;
