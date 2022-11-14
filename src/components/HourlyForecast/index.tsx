import React, { HTMLAttributes } from 'react';
import { DateTime } from 'luxon';

import { IHourlyForecast } from '../../types';
import Cloudy from '../../assets/cloudy.svg';
import Clock from '../../assets/clock.svg';

import styles from './HourlyForecast.module.scss';

interface IWeatherCardProps extends HTMLAttributes<HTMLDivElement> {
  time: number;
  timezone: string;
  icon: string;
  temp: number;
}

const WeatherCard: React.FC<IWeatherCardProps> = ({
  time,
  timezone,
  // TODO: Create a dictionary with weather icons, using 'icon' as key and SVG React Component as value
  icon,
  temp,
}) => {
  const formatTime = (seconds: number, tmz: string) => {
    return DateTime.fromSeconds(seconds)
      .setZone(tmz)
      .toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
  };

  const formattedTime: number | string =
    DateTime.fromSeconds(time).hour === new Date().getHours()
      ? 'Now'
      : formatTime(time, timezone);

  return (
    <div className={styles['weather-card']}>
      <p className={styles['weather-card__time']}>{formattedTime}</p>
      <div className={styles['weather-card__body']}>
        <img
          className={styles['weather-card__icon']}
          alt="Weather Card"
          src={Cloudy}
        />
        <p className={styles['weather-card__temperature']}>
          {Math.round(temp)}°C
        </p>
      </div>
    </div>
  );
};

interface IHourlyForecastProps extends HTMLAttributes<HTMLDivElement> {
  timezone: string;
  forecast: IHourlyForecast[];
}

const HourlyForecast: React.FC<IHourlyForecastProps> = ({
  timezone,
  forecast,
  className,
}) => {
  return (
    <section className={`${styles['hourly-forecast']} ${className}`}>
      <div className={styles['hourly-forecast__title']}>
        <img className={styles.title__icon} alt="Weather Card" src={Clock} />
        <h2 className={styles.title__text}>Hourly forecast</h2>
      </div>
      <div className={styles['hourly-forecast__weather-cards']}>
        {forecast &&
          forecast.slice(0, 11).map((item, index) => {
            return (
              <WeatherCard
                key={`weather-card_${index + 1}`}
                time={item.dt}
                timezone={timezone}
                icon={item.weather[0].icon}
                temp={item.temp}
              />
            );
          })}
      </div>
    </section>
  );
};

export default HourlyForecast;
