import React, { HTMLAttributes, ReactNode } from 'react';

import styles from './WidgetCard.module.scss';

interface IWidgetCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const WidgetCard: React.FC<IWidgetCardProps> = ({
  title,
  icon: Icon,
  children,
}) => {
  return (
    <div className={styles['widget-card']}>
      <div className={styles['widget-card__header']}>
        <Icon className={styles.header__icon} />
        <p className={styles.header__title}>{title}</p>
      </div>
      <div className={styles['widget-card__body']}>{children as ReactNode}</div>
    </div>
  );
};

export default WidgetCard;
