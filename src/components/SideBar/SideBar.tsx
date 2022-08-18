import React from 'react';
import notify from '../../assets/images/notify.jpg';
import profile from '../../assets/images/profile.png';
import arrow from '../../assets/images/arrow.png';
import Statistics from './Statistics';
import Activity from './Activity';

const SideBar = () => {
  return (
    <section className='sidebar'>
      <section className='sidebar__header'>
        <nav className='sidebar__header__notify'>
            <img src={notify} alt="notify" />
        </nav>
        <nav className='sidebar__header__user'>
            <span className="sidebar__header__user__left">
              <img src={profile} alt="profile" />
            </span>
            <span className="sidebar__header__user__right">
              <span className='sidebar__header__user__right__text'>
                <span className="sidebar__header__user__right__text__top">
                Bruno Fernandes
                </span>
                <span className="sidebar__header__user__right__text__bottom">
                Basic Plan
                </span>
              </span>
              <span className="sidebar__header__user__right__img">
                <img src={arrow} alt="arrow" />
              </span>
            </span>
        </nav>
      </section>
      <Statistics />
      <Activity />
    </section>
  );
};

export default SideBar;
