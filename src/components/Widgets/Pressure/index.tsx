import React, { HTMLAttributes } from 'react';

import WidgetCard from '../../WidgetCard';
import { ReactComponent as Compass } from '../../../assets/compass-2.svg';
import { ReactComponent as Indicator } from '../../../assets/pressure-indicator.svg';
import { ReactComponent as Arrow } from '../../../assets/pressure-arrow.svg';

import styles from './Pressure.module.scss';

interface IPressureProps extends HTMLAttributes<HTMLDivElement> {
  pressure: number;
}

const Pressure: React.FC<IPressureProps> = ({ pressure }) => {
  return (
    <WidgetCard title="Pressure" icon={Compass}>
      <Indicator className={styles['pressure-indicator']} />
      <Arrow className={styles['pressure-arrow']} />
      <div className={styles['widget__main-text']}>
        <p>{pressure}</p>
        <p>hPa</p>
      </div>
    </WidgetCard>
  );
};

export default Pressure;
