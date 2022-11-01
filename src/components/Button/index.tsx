import React, { HTMLAttributes } from 'react';

import styles from './Button.module.scss';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  secondary,
  onClick,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`${
        secondary ? styles.button_secondary : styles.button_primary
      } ${className}`}
      type="button"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
