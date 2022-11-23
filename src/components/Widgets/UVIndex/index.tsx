import React, { HTMLAttributes } from 'react';

import WidgetCard from '../../WidgetCard';
import { ReactComponent as Sun } from '../../../assets/sun.svg';

import styles from './UVIndex.module.scss';

interface IUVIndexProps extends HTMLAttributes<HTMLDivElement> {
  uvi: number;
}

const UVIndex: React.FC<IUVIndexProps> = ({ uvi }) => {
  const getUVIText = (index: number) => {
    if (index < 20) {
      return 'Low';
    }

    if (index < 60) {
      return 'Medium';
    }

    return 'High';
  };

  return (
    <WidgetCard title="UV Index" icon={Sun}>
      <p className={styles['widget__main-text']}>
        {uvi}
        <br />
        {getUVIText(uvi)}
      </p>
      <div className={styles['uvi-indicator']}>
        <div
          className={styles['uvi-indicator__ball']}
          style={{ left: `calc(${uvi}%)` }}
        />
      </div>
    </WidgetCard>
  );
};

export default UVIndex;
