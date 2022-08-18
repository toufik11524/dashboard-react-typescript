import React from 'react';
import logo from '../../assets/images/logo.png';
import pictureGirl from '../../assets/images/girlLaptop.png';
import Menu from './Menu';
import Upgrade from './Upgrade';

const Nav = () => {
  return (
    <section className="nav">
      <figure className="nav__figure">
        <img src={logo} alt="Logo" />
      </figure>
      <Menu />
      <img className="nav__image" src={pictureGirl} alt="girl-laptop" />
      <Upgrade />
    </section>
  );
};

export default Nav;
