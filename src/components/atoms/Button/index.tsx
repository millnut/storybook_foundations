import clsx from 'clsx';
import React, { ReactElement, ReactNode } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  children?: ReactNode;
  /**
   * Optional url
   */
  url?: string;
  onClick?: () => void;
}

export default function Button({ url, children, onClick }: ButtonProps): ReactElement {
  return url ? (
    <a className={clsx(styles.button, styles.primary)} href={url}>
      {children}
    </a>
  ) : (
    <button type="button" className={clsx(styles.button, styles.primary)} onClick={onClick}>
      {children}
    </button>
  );
}
