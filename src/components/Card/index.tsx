import React, { HTMLAttributes } from 'react';

import Button from '../Button';

import styles from './Card.module.scss';

import sunny from '../../assets/sunny.svg';
import cloud from '../../assets/cloud.svg';
import cloudy from '../../assets/cloudy.svg';
import rainy from '../../assets/rainy.svg';

const Card: React.FC<HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <div className={styles.card}>
      <div className={styles['card__main-section']}>
        <h2 className={styles.card__cityname}>San Francisco</h2>
        <p className={styles['card__current-time']}>Tuesday, 11:00</p>
        <h1 className={styles.card__temperature}>29</h1>
        <p className={styles.card__precipitation}>Cloudy</p>
      </div>
      <div className={styles['card__hourly-forecasts']}>
        <div className={styles['hourly-forecast__container']}>
          <p className={styles['hourly-forecast__title']}>Now</p>
          <div className={styles['hourly-forecast__card']}>
            <img src={sunny} alt="Sunny" />
            <p className={styles['hourly-forecast__temperature']}>29°C</p>
          </div>
        </div>
        <div className={styles['hourly-forecast__container']}>
          <p className={styles['hourly-forecast__title']}>12:00</p>
          <div className={styles['hourly-forecast__card']}>
            <img src={cloud} alt="Sunny" />
            <p className={styles['hourly-forecast__temperature']}>30°C</p>
          </div>
        </div>
        <div className={styles['hourly-forecast__container']}>
          <p className={styles['hourly-forecast__title']}>13:00</p>
          <div className={styles['hourly-forecast__card']}>
            <img src={cloudy} alt="Sunny" />
            <p className={styles['hourly-forecast__temperature']}>32°C</p>
          </div>
        </div>
        <div className={styles['hourly-forecast__container']}>
          <p className={styles['hourly-forecast__title']}>14:00</p>
          <div className={styles['hourly-forecast__card']}>
            <img src={rainy} alt="Sunny" />
            <p className={styles['hourly-forecast__temperature']}>32°C</p>
          </div>
        </div>
      </div>
      <div className={styles.percentage}>
        <div className={styles.percentage__section}>
          <p className={styles.percentage__value}>20%</p>
          <p className={styles.percentage__type}>Wind</p>
        </div>
        <div className={styles.percentage__section}>
          <p className={styles.percentage__value}>20%</p>
          <p className={styles.percentage__type}>Humidity</p>
        </div>
        <div className={styles.percentage__section}>
          <p className={styles.percentage__value}>20%</p>
          <p className={styles.percentage__type}>Precipitation</p>
        </div>
      </div>
      <Button className={styles.card__button} onClick={() => null}>
        See more
      </Button>
    </div>
  );
};

export default Card;
