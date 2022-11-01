import React, { HTMLAttributes } from 'react';

import styles from './Footer.module.scss';

const Footer: React.FC<HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} ${styles.container}`}>
        <ul className={styles.links}>
          <li className={styles.links__item}>
            <a href="/">Privacy policy</a>
          </li>
          <li className={styles.links__item}>
            <a href="/">Agreement</a>
          </li>
          <li className={styles.links__item}>
            <a href="/">Feedback</a>
          </li>
        </ul>
        <p className={styles.copyright}>
          <span className={styles.copyright__year}>@ 2022</span>
          <span>Weather FH Solutions</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
