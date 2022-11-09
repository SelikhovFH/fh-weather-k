import React, { HTMLAttributes } from 'react';

import styles from './Jumbotron.module.scss';

const DEFAULT_PHOTO_URL =
  'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

interface IJumbotronProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  temp: number;
  timezone: number;
  weather: string;
  backgroundUrl: string;
}

const getTimeString = (locale: string, timezone: number) => {
  const date: Date = new Date(
    Date.now() + new Date().getTimezoneOffset() * 60 * 1000 + timezone * 1000
  );
  const time: string = date.toTimeString().slice(0, 5);
  const day: string = date.toLocaleDateString(locale, {
    weekday: 'long',
  });

  return `${time}, ${day}`;
};

const Jumbotron: React.FC<IJumbotronProps> = ({
  name,
  temp,
  timezone,
  weather,
  backgroundUrl = DEFAULT_PHOTO_URL,
}) => {
  return (
    <section
      className={styles.jumbotron}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(79, 78, 78, 0.49), rgba(79, 78, 78, 0.49)), url(${backgroundUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className={styles.jumbotron__weather}>
        <h1 className={styles['weather__city-name']}>{name}</h1>
        <p className={styles.weather__temperature}>{Math.round(temp)}°C</p>
        <p className={styles.weather__precipitation}>{weather}</p>
      </div>
      <div className={styles.jumbotron__datetime}>
        <p className={styles.datetime__text}>
          {getTimeString('en-EN', timezone)}
        </p>
      </div>
    </section>
  );
};

export default Jumbotron;
