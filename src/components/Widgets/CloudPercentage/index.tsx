import React, { HTMLAttributes } from 'react';

import WidgetCard from '../../WidgetCard';
import { ReactComponent as Cloud } from '../../../assets/cloud-2.svg';

import styles from './CloudPercentage.module.scss';

interface ICloudPercentageProps extends HTMLAttributes<HTMLDivElement> {
  percentage: number;
}

const CloudPercentage: React.FC<ICloudPercentageProps> = ({ percentage }) => {
  return (
    <WidgetCard title="Clouds" icon={Cloud}>
      <p className={styles['widget__main-text']}>{percentage} %</p>
      <p className={styles['widget__secondary-text']}>Few clouds</p>
    </WidgetCard>
  );
};

export default CloudPercentage;
