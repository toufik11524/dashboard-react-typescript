import React from 'react';
import home from '../../assets/images/Home.png';
import dot from '../../assets/images/Ellipse 4.png';
import course from '../../assets/images/Category.png';
import resoucre from '../../assets/images/Folder.png';
import chat from '../../assets/images/Chat.png';
import setting from '../../assets/images/Setting.png';

const Menu = () => {
  return (
    <section className="nav__menu">
      <section className="nav__menu__special">
        <img className="nav__menu__special__logo" src={home} alt="home-logo" />
        <span className="nav__menu__special__flex">
          <span className="nav__menu__special__flex__text">Overview</span>
          <span>
            <img
              className="nav__menu__special__flex__dot"
              src={dot}
              alt="dot"
            />
          </span>
        </span>
      </section>
      <section className="nav__menu__common">
        <img className="nav__menu__common__logo" src={course} alt="home-logo" />
        <span className="nav__menu__common__text">Course</span>
      </section>
      <section className="nav__menu__common">
        <img
          className="nav__menu__common__logo"
          src={resoucre}
          alt="home-logo"
        />
        <span className="nav__menu__common__text">Resources</span>
      </section>
      <section className="nav__menu__common">
        <img className="nav__menu__common__logo" src={chat} alt="home-logo" />
        <span className="nav__menu__common__text">Message</span>
      </section>
      <section className="nav__menu__common">
        <img
          className="nav__menu__common__logo"
          src={setting}
          alt="home-logo"
        />
        <span className="nav__menu__common__text">Setting</span>
      </section>
    </section>
  );
};

export default Menu;
