import React, { HTMLAttributes } from 'react';

import { IWeatherForecast } from '../../types';

import FeelsLike from './FeelsLike';
import Wind from './Wind';
import UVIndex from './UVIndex';
import Humidity from './Humidity';
import Sunrise from './Sunrise';
import Visibility from './Visibility';
import Pressure from './Pressure';
import CloudPercentage from './CloudPercentage';

import styles from './Widgets.module.scss';

interface IWidgetsProps extends HTMLAttributes<HTMLDivElement> {
  forecast: IWeatherForecast;
}

const Widgets: React.FC<IWidgetsProps> = ({ forecast, className }) => {
  return (
    <section className={`${styles.widgets} ${className}`}>
      <FeelsLike temperature={forecast.current.temp} />
      <Wind
        speed={forecast.current.wind_speed}
        degree={forecast.current.wind_deg}
      />
      <UVIndex uvi={forecast.current.uvi} />
      <Humidity
        humidity={forecast.current.humidity}
        dewPoint={forecast.current.dew_point}
      />
      <Sunrise
        sunrise={forecast.current.sunrise}
        sunset={forecast.current.sunset}
        timezone={forecast.timezone}
      />
      <Visibility
        visibility={forecast.current.visibility}
        description={forecast.current.weather[0].description}
      />
      <Pressure pressure={forecast.current.pressure} />
      <CloudPercentage percentage={forecast.current.clouds} />
    </section>
  );
};

export default Widgets;
