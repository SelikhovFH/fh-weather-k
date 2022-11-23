import React, { HTMLAttributes } from 'react';

import WidgetCard from '../../WidgetCard';
import { ReactComponent as Vane } from '../../../assets/vane.svg';
import { ReactComponent as Compass } from '../../../assets/compass.svg';
import { ReactComponent as CompassArrow } from '../../../assets/compass-arrow.svg';

import styles from './Wind.module.scss';

interface IWindProps extends HTMLAttributes<HTMLDivElement> {
  speed: number;
  degree: number;
}

const Wind: React.FC<IWindProps> = ({ speed, degree }) => {
  return (
    <WidgetCard title="Wind" icon={Vane}>
      <Compass className={styles['widget__compass-icon']} />
      <CompassArrow
        className={styles['widget__compass-arrow-icon']}
        // TODO: update compass-arrow.svg to remove a magic number (134)
        style={{
          transform: `translate(1px, 6px) rotate(${-134 + degree}deg)`,
        }}
      />
      <div className={styles['widget__main-text']}>
        <p>{speed}</p>
        <p>km/h</p>
      </div>
    </WidgetCard>
  );
};

export default Wind;
