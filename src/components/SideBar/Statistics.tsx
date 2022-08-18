import React from 'react';
import bar from '../../assets/images/bar.png';

const Statistics = () => {
  return (
    <section className='sidebar__header__statistics'>
        <p className='sidebar__header__statistics__title'>Statistics</p>
        <section className='sidebar__header__statistics__data'>
            <section className='sidebar__header__statistics__data__card'>
                <span className='sidebar__header__statistics__data__card__top'>
                Courses
                Completed
                </span>
                <span className='sidebar__header__statistics__data__card__bottom'>
                    <span className='sidebar__header__statistics__data__card__bottom__left'>
                        <img src={bar} alt="line-bar" />
                    </span>
                    <span className='sidebar__header__statistics__data__card__bottom__right'>
                        02
                    </span>
                </span>
            </section>
            <section className='sidebar__header__statistics__data__card'>
                <span className='sidebar__header__statistics__data__card__top'>
                Total Points
                Gained
                </span>
                <span className='sidebar__header__statistics__data__card__bottom'>
                    <span className='sidebar__header__statistics__data__card__bottom__left'>
                        <img src={bar} alt="line-bar" />
                    </span>
                    <span className='sidebar__header__statistics__data__card__bottom__right'>
                        250
                    </span>
                </span>
            </section>
            <section className='sidebar__header__statistics__data__card'>
                <span className='sidebar__header__statistics__data__card__top'>
                Courses
                In Progress
                </span>
                <span className='sidebar__header__statistics__data__card__bottom'>
                    <span className='sidebar__header__statistics__data__card__bottom__left'>
                        <img src={bar} alt="line-bar" />
                    </span>
                    <span className='sidebar__header__statistics__data__card__bottom__right'>
                        03
                    </span>
                </span>
            </section>
            <section className='sidebar__header__statistics__data__card'>
                <span className='sidebar__header__statistics__data__card__top'>
                Tasks
                Finished
                </span>
                <span className='sidebar__header__statistics__data__card__bottom'>
                    <span className='sidebar__header__statistics__data__card__bottom__left'>
                        <img src={bar} alt="line-bar" />
                    </span>
                    <span className='sidebar__header__statistics__data__card__bottom__right'>
                        05
                    </span>
                </span>
            </section>
        </section>
    </section>
  );
};

export default Statistics;