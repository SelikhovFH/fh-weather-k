import React, { HTMLAttributes } from 'react';

import WidgetCard from '../../WidgetCard';
import { ReactComponent as Eye } from '../../../assets/eye.svg';

import styles from './Visibility.module.scss';

interface IVisibilityProps extends HTMLAttributes<HTMLDivElement> {
  visibility: number;
  description: string;
}

const Visibility: React.FC<IVisibilityProps> = ({
  visibility,
  description,
}) => {
  const capitalize = (str: string): string =>
    str[0].toUpperCase() + str.slice(1);

  return (
    <WidgetCard title="Humidity" icon={Eye}>
      <p className={styles['widget__main-text']}>
        {Math.round(visibility / 1000)} km
      </p>
      <p className={styles['widget__secondary-text']}>
        {capitalize(description)}
      </p>
    </WidgetCard>
  );
};

export default Visibility;
