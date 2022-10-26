import React, { HTMLAttributes } from 'react';

import styles from './Button.module.scss';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  secondary,
  text,
  onClick,
  ...props
}) => {
  return (
    <button
      className={secondary ? styles.button_secondary : styles.button_primary}
      type="button"
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
