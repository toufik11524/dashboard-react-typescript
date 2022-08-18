import React from 'react';
import Chart from './Chart';

const Activity = () => {
  return (
    <section className='sidebar__activity'>
        <section className='sidebar__activity__title'>
            <span className='sidebar__activity__title__left'>
            Activity
            </span>
            <span className='sidebar__activity__title__right'>
                <span className='sidebar__activity__title__right__day'>
                    Day
                </span>
                <span className='sidebar__activity__title__right__week'>
                    Week
                </span>
                <span className='sidebar__activity__title__right__month'>
                    Month
                </span>
            </span>
        </section>
        <Chart />
    </section>
  );
};

export default Activity;