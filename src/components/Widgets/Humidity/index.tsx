import React, { HTMLAttributes } from 'react';

import WidgetCard from '../../WidgetCard';
import { ReactComponent as Mist } from '../../../assets/humidity.svg';

import styles from './Humidity.module.scss';

interface IHumidityProps extends HTMLAttributes<HTMLDivElement> {
  humidity: number;
  dewPoint: number;
}

const Humidity: React.FC<IHumidityProps> = ({ humidity, dewPoint }) => {
  return (
    <WidgetCard title="Humidity" icon={Mist}>
      <p className={styles['widget__main-text']}>{humidity} %</p>
      <p className={styles['widget__secondary-text']}>
        Dew point now: {dewPoint}
      </p>
    </WidgetCard>
  );
};

export default Humidity;
