import React from 'react';
import click from '../../assets/images/click.png';

const Upgrade = () => {
  return (
    <section className="nav__upgrade">
      <section className="nav__upgrade__top">Upgrade your plan</section>
      <section className="nav__upgrade__bottom">
        <span className="nav__upgrade__bottom__text">Go to PRO</span>
        <span className="nav__upgrade__bottom__button">
          <img src={click} alt="click" />
        </span>
      </section>
    </section>
  );
};

export default Upgrade;
