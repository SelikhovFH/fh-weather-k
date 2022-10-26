import React from 'react';

import styles from './Subscription.module.scss';

const Subscription: React.FC = () => {
  return (
    <div className={styles.subscription}>
      <h2 className={styles.subscription__title}>
        Subscribe to our e-mail newsletter
      </h2>
      <form className={styles.subscription__form}>
        <input
          className={styles.subscription__input}
          type="email"
          placeholder="E-mail"
        />
        <button className={styles.button} type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscription;
