import React, { ReactElement, ReactNode } from 'react';

import styles from './Text.module.scss';

type TextProps = {
  children: ReactNode;
};

export default function Text({ children }: TextProps): ReactElement {
  return <p className={styles.base}>{children}</p>;
}
