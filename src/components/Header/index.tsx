import React from 'react';

import styles from './Header.module.scss';

import logo from '../../assets/weather_logo.svg';
import search from '../../assets/search.svg';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} ${styles.container}`}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.search}>
          <input
            className={styles.search__input}
            type="text"
            placeholder="Enter the name of the city, region, or country"
          />
          <img src={search} alt="Search" />
          <ul className={styles.dropdown}>
            <li className={styles.dropdown__item}>
              <p>
                <b>City</b>, region, country
              </p>
            </li>
            <li className={styles.dropdown__item}>
              <p>
                <b>City</b>, region, country
              </p>
            </li>
            <li className={styles.dropdown__item}>
              <p>
                <b>City</b>, region, country
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.search__backdrop} />
        <div>
          <button
            className={`${styles.lang__btn} ${styles.lang__btn_selected}`}
            type="button"
          >
            EN
          </button>
          <button className={styles.lang__btn} type="button">
            UA
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
