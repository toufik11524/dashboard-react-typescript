import React from 'react';
import search from '../../assets/images/search.png';
import german from '../../assets/images/german.png';
import frence from '../../assets/images/frence.png';
import portugiz from '../../assets/images/portugiz.png';
import italian from '../../assets/images/italian.png';
import fifty from '../../assets/images/50.png';
import seventyFive from '../../assets/images/75.png';
import twentyFive from '../../assets/images/25.png';
import seventyFive2 from '../../assets/images/75_2.png';
import calendar from '../../assets/images/calendar.png';
import book from '../../assets/images/book 1.png';
import verticaldot from '../../assets/images/more-vertical 1.png';
import edit from '../../assets/images/edit-2.png';
import headphone from '../../assets/images/headphones 1.png';
import speaker from '../../assets/images/volume-1 1.png';

const Course = () => {
  return (
    <section className="course">
      <section className="course__title">
        <span className="course__title__hello">Hello </span>
        <span className="course__title__bruno">BRUNO</span>
        <span className="course__title__hello">, welcome back!</span>
      </section>
      <section className="course__my">
        <section className="course__my__header">
          <span className="course__my__header__leftside">
            <span className="course__my__header__leftside__mycourse">
              My Courses
            </span>
            <span className="course__my__header__leftside__view">View All</span>
          </span>
          <span className="course__my__header__rightside">
            <img src={search} alt="" />
          </span>
        </section>
        <section className="course__my__detail">
          <span className="course__my__detail__first">
            <span className="course__my__detail__first__card--frence">
              <span className="course__my__detail__first__card--frence__info">
                <span className="course__my__detail__first__card--frence__info__top">
                  <span className="course__my__detail__first__card--frence__info__top__name">
                    French
                  </span>
                  <span className="course__my__detail__first__card--frence__info__top__lesson">
                    35 lessons
                  </span>
                </span>
                <span className="course__my__detail__first__card--frence__info__bottom">
                  <img src={seventyFive2} alt="75" />
                </span>
              </span>
              <span>
                <img
                  className="course__my__detail__first__card--frence__logo"
                  src={frence}
                  alt="frence"
                />
              </span>
            </span>
            <span className="course__my__detail__first__card--portuguese">
              <span className="course__my__detail__first__card--portuguese__info">
                <span className="course__my__detail__first__card--portuguese__info__top">
                  <span className="course__my__detail__first__card--portuguese__info__top__name">
                    Portugese
                  </span>
                  <span className="course__my__detail__first__card--portuguese__info__top__lesson">
                    30 lessons
                  </span>
                </span>
                <span className="course__my__detail__first__card--portuguese__info__bottom">
                  <img src={fifty} alt="50" />
                </span>
              </span>
              <img
                className="course__my__detail__first__card--portuguese__logo"
                src={portugiz}
                alt="frence"
              />
            </span>
          </span>
          <span className="course__my__detail__second">
            <span className="course__my__detail__second__card--italian">
              <span className="course__my__detail__second__card--italian__info">
                <span className="course__my__detail__second__card--italian__info__top">
                  <span className="course__my__detail__second__card--italian__info__top__name">
                    Italian
                  </span>
                  <span className="course__my__detail__second__card--italian__info__top__lesson">
                    20 lessons
                  </span>
                </span>
                <span className="course__my__detail__second__card--italian__info__bottom">
                  <img src={twentyFive} alt="25" />
                </span>
              </span>
              <img
                className="course__my__detail__second__card--italian__logo"
                src={italian}
                alt="frence"
              />
            </span>
            {/* // german */}
            <span className="course__my__detail__second__card--german">
              <span className="course__my__detail__second__card--german__info">
                <span className="course__my__detail__second__card--german__info__top">
                  <span className="course__my__detail__second__card--german__info__top__name">
                    German
                  </span>
                  <span className="course__my__detail__second__card--german__info__top__lesson">
                    40 lessons
                  </span>
                </span>
                <span className="course__my__detail__second__card--german__info__bottom">
                  <img src={seventyFive} alt="75-2" />
                </span>
              </span>
              <img
                className="course__my__detail__second__card--german__logo"
                src={german}
                alt="frence"
              />
            </span>
          </span>
        </section>
      </section>
      <section className="course__planing">
        <section className="course__planing__header">
          <span className="course__planing__header__leftside">
            <span className="course__planing__header__leftside__planning">
              Planning
            </span>
            <span className="course__planing__header__leftside__view">
              View All
            </span>
          </span>
          <span className="course__planing__header__rightside">
            <img src={calendar} alt="calender" />
            <span className="course__planing__header__rightside__date">
              20 March 2020
            </span>
          </span>
        </section>
        <section className="course__planing__detail">
          <section className="course__planing__detail__card">
            <span className="course__planing__detail__card__left">
              <span className="course__planing__detail__card__left__first">
                <img src={book} alt="book" />
              </span>
              <span className="course__planing__detail__card__left__middle">
                <span className="course__planing__detail__card__left__middle__top">
                  Reading - Beginner Topic 1
                </span>
                <span className="course__planing__detail__card__left__middle__bottom">
                  8:00 AM - 10:00 AM
                </span>
              </span>
            </span>
            <span className="course__planing__detail__card__right">
              <img src={verticaldot} alt="vertical dot" />
            </span>
          </section>
          <section className="course__planing__detail__card">
            <span className="course__planing__detail__card__left">
              <span className="course__planing__detail__card__left__second">
                <img src={edit} alt="edit" />
              </span>
              <span className="course__planing__detail__card__left__middle">
                <span className="course__planing__detail__card__left__middle__top">
                  Reading - Beginner Topic 1
                </span>
                <span className="course__planing__detail__card__left__middle__bottom">
                  01:00 PM - 02:00 PM
                </span>
              </span>
            </span>
            <span className="course__planing__detail__card__right">
              <img src={verticaldot} alt="vertical dot" />
            </span>
          </section>
          <section className="course__planing__detail__card">
            <span className="course__planing__detail__card__left">
              <span className="course__planing__detail__card__left__third">
                <img src={headphone} alt="headphone" />
              </span>
              <span className="course__planing__detail__card__left__middle">
                <span className="course__planing__detail__card__left__middle__top">
                  Listening - Intermediate Topic 1
                </span>
                <span className="course__planing__detail__card__left__middle__bottom">
                  03:00 PM - 04:00 PM
                </span>
              </span>
            </span>
            <span className="course__planing__detail__card__right">
              <img src={verticaldot} alt="vertical dot" />
            </span>
          </section>
          <section className="course__planing__detail__card">
            <span className="course__planing__detail__card__left">
              <span className="course__planing__detail__card__left__fourth">
                <img src={speaker} alt="speaker" />
              </span>
              <span className="course__planing__detail__card__left__middle">
                <span className="course__planing__detail__card__left__middle__top">
                  Speaking - Advanced Topic 1
                </span>
                <span className="course__planing__detail__card__left__middle__bottom">
                  03:00 PM - 04:00 PM
                </span>
              </span>
            </span>
            <span className="course__planing__detail__card__right">
              <img src={verticaldot} alt="vertical dot" />
            </span>
          </section>
          <section className="course__planing__detail__card">
            <span className="course__planing__detail__card__left">
              <span className="course__planing__detail__card__left__fifth">
                <img src={speaker} alt="speaker" />
              </span>
              <span className="course__planing__detail__card__left__middle">
                <span className="course__planing__detail__card__left__middle__top">
                  Speaking - Beginner Topic 1
                </span>
                <span className="course__planing__detail__card__left__middle__bottom">
                  8:00 AM - 12:00 PM
                </span>
              </span>
            </span>
            <span className="course__planing__detail__card__right">
              <img src={verticaldot} alt="vertical dot" />
            </span>
          </section>
          <section className="course__planing__detail__card">
            <span className="course__planing__detail__card__left">
              <span className="course__planing__detail__card__left__sixth">
                <img src={headphone} alt="headphone" />
              </span>
              <span className="course__planing__detail__card__left__middle">
                <span className="course__planing__detail__card__left__middle__top">
                  Listening - Beginner Topic 1
                </span>
                <span className="course__planing__detail__card__left__middle__bottom">
                  8:00 AM - 12:00 PM
                </span>
              </span>
            </span>
            <span className="course__planing__detail__card__right">
              <img src={verticaldot} alt="vertical dot" />
            </span>
          </section>
          <section className="course__planing__detail__card">
            <span className="course__planing__detail__card__left">
              <span className="course__planing__detail__card__left__seventh">
                <img src={edit} alt="edit" />
              </span>
              <span className="course__planing__detail__card__left__middle">
                <span className="course__planing__detail__card__left__middle__top">
                  Grammar - Intermediate Topic 2
                </span>
                <span className="course__planing__detail__card__left__middle__bottom">
                  8:00 AM - 12:00 PM
                </span>
              </span>
            </span>
            <span className="course__planing__detail__card__right">
              <img src={verticaldot} alt="vertical dot" />
            </span>
          </section>
          <section className="course__planing__detail__card">
            <span className="course__planing__detail__card__left">
              <span className="course__planing__detail__card__left__eight">
                <img src={book} alt="book" />
              </span>
              <span className="course__planing__detail__card__left__middle">
                <span className="course__planing__detail__card__left__middle__top">
                  Reading - Advanced Topic 1
                </span>
                <span className="course__planing__detail__card__left__middle__bottom">
                  8:00 AM - 12:00 PM
                </span>
              </span>
            </span>
            <span className="course__planing__detail__card__right">
              <img src={verticaldot} alt="vertical dot" />
            </span>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Course;
