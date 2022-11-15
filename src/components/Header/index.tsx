import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../Search';
import { ReactComponent as Logo } from '../../assets/weather_logo.svg';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} ${styles.container}`}>
        <div className={styles.logo}>
          <Link to="/">
            <Logo />
          </Link>
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
