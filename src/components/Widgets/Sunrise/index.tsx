import React, { HTMLAttributes } from 'react';
import { DateTime } from 'luxon';

import WidgetCard from '../../WidgetCard';
import { ReactComponent as Dawn } from '../../../assets/sunrise.svg';
import { ReactComponent as Parabola } from '../../../assets/parabola.svg';

import styles from './Sunrise.module.scss';

interface ISunriseProps extends HTMLAttributes<HTMLDivElement> {
  sunrise: number;
  sunset: number;
  timezone: string;
}

const Sunrise: React.FC<ISunriseProps> = ({ sunrise, sunset, timezone }) => {
  const formatTime = (seconds: number, tmz: string) => {
    return DateTime.fromSeconds(seconds)
      .setZone(tmz)
      .toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
  };

  return (
    <WidgetCard title="Sunrise" icon={Dawn}>
      <p className={styles['widget__main-text']}>
        {formatTime(sunrise, timezone)}
      </p>
      <div className={styles['sunrise-chart']}>
        <Parabola className={styles['sunrise-chart__parabola']} />
        <hr className={styles['sunrise-chart__axis']} />
      </div>
      <p className={styles['widget__secondary-text']}>
        Sunset: {formatTime(sunset, timezone)}
      </p>
    </WidgetCard>
  );
};

export default Sunrise;
