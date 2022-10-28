import React from 'react';

import Search from '../Search';

import styles from './Header.module.scss';
import logo from '../../assets/weather_logo.svg';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} ${styles.container}`}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <Search />
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
