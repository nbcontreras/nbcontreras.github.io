import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LineIcon from 'react-lineicons';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [information, setInformation] = useState('');
  const [navigationToggler, setNavigationToggler] = useState(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <nav className={navigationToggler ? 'mi-header is-visible' : 'mi-header'}>
      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        {!navigationToggler ? (
          <LineIcon name="menu" />
        ) : (
          <LineIcon name="close" />
        )}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link to="/">
            <img src={information.brandImage} alt="brandimage" />
          </Link>
        </div>

        <ul className="mi-header-menu">
          <li>
            <NavLink exact to="/">
              <span>Inicio</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span>Sobre mi</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume">
              <span>Resumen</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/portfolios">
              <span>Portafolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs">
              <span>Blogs</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span>Contacto</span>
            </NavLink>
          </li> */}
        </ul>
        <p className="mi-header-copyright">
          &copy; {new Date().getFullYear()}{' '}
          <b>
            <a rel="noopener noreferrer" href={information.url}>
              Nicolás
            </a>
          </b>
        </p>
      </div>
    </nav>
  );
}

export default Header;
