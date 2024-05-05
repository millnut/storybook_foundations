import clsx from 'clsx';
import React, { ReactElement } from 'react';
import styles from './Heading.module.scss';

export interface HeadingProps {
  /**
   * Semantic heading level value between 1 and 6
   */
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Style the element as a different heading level
   */
  styledAsLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Text to be displayed
   */
  children: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */

export default function Heading({ level, styledAsLevel, children }: HeadingProps): ReactElement {
  return (
    <>
      {(() => {
        switch (level) {
          case 'h1':
            return <h1 className={clsx(styles.base, styles.h1, styledAsLevel && styles[styledAsLevel])}>{children}</h1>;
          case 'h2':
            return <h2 className={clsx(styles.base, styles.h2, styledAsLevel && styles[styledAsLevel])}>{children}</h2>;
          case 'h3':
            return <h3 className={clsx(styles.base, styles.h3, styledAsLevel && styles[styledAsLevel])}>{children}</h3>;
          case 'h4':
            return <h4 className={clsx(styles.base, styles.h4, styledAsLevel && styles[styledAsLevel])}>{children}</h4>;
          case 'h5':
            return <h5 className={clsx(styles.base, styles.h5, styledAsLevel && styles[styledAsLevel])}>{children}</h5>;
          case 'h6':
            return <h6 className={clsx(styles.base, styles.h6, styledAsLevel && styles[styledAsLevel])}>{children}</h6>;
          default:
            return null;
        }
      })()}
    </>
  );
}
