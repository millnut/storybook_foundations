import clsx from 'clsx';
import React, { ReactElement } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  label: string;
  /**
   * Optional url
   */
  url?: string;
}

/**
 * Primary UI component for user interaction
 */

export default function Button({ url, label }: ButtonProps): ReactElement {
  return url ? (
    <a className={clsx(styles.button, styles.primary)} href={url}>
      {label}
    </a>
  ) : (
    <button type="button" className={clsx(styles.button, styles.primary)}>
      {label}
    </button>
  );
}
