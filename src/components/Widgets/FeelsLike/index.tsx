import React, { HTMLAttributes } from 'react';

import WidgetCard from '../../WidgetCard';
import { ReactComponent as Thermometer } from '../../../assets/thermometer.svg';

import styles from './FeelsLike.module.scss';

interface IFeelsLikeProps extends HTMLAttributes<HTMLDivElement> {
  temperature: number;
}

const FeelsLike: React.FC<IFeelsLikeProps> = ({ temperature }) => {
  return (
    <WidgetCard title="Feels like" icon={Thermometer}>
      <p className={styles['widget__main-text']}>{Math.round(temperature)}°</p>
      <p className={styles['widget__secondary-text']}>Feels almost the same</p>
    </WidgetCard>
  );
};

export default FeelsLike;
