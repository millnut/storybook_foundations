import React, { ReactElement, ReactNode } from 'react';
import styles from './Listing.module.scss';

export interface ListingProps {
  children: ReactNode;
}

export default function Listing({ children }: ListingProps): ReactElement {
  return <ul className={styles.listing}>{children}</ul>;
}
