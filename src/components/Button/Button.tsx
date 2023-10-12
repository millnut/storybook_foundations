import React, { ReactElement } from 'react';
import './button.scss';
import useTheme from '../../hooks/useDarkMode';

export interface ButtonProps {
  label: string;
  /**
   * Optional url
   */
  url?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */

export const Button = ({ label, url, ...props }: ButtonProps): ReactElement => {
  const theme = useTheme();
  return url ? (
    <a className={`button theme--${theme.mode}`} href={url}>
      {label}
    </a>
  ) : (
    <button type="button" className={`button theme--${theme.mode}`} {...props}>
      {label}
    </button>
  );
};
