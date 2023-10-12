import React, { ReactElement, ReactNode } from 'react';
import './listing.scss';

export interface ListingProps {
  children: ReactNode;
}

const Listing = ({ children }: ListingProps): ReactElement => <ul className="listing">{children}</ul>;

export default Listing;
