import React from 'react';
import pictureGirl from '../../assets/images/girlLaptop.png';
import logo from '../../assets/images/logo.png';
import Menu from './Menu';
import Upgrade from './Upgrade';

interface Props {
  color: string;
  backgroundColor: string;
}

const Nav: React.FC<Props> = (props) => {
  return (
    <section
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
      }}
      className="nav"
    >
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
