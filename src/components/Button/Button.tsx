import React, { ReactElement } from 'react';
import useTheme from '../../hooks/useDarkMode';
import './button.scss';

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

const Button = ({ label, url, ...props }: ButtonProps): ReactElement => {
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

Button.defaultProps = {
  label: 'Button',
  buttonLinkProps: {
    label: 'Button',
    url: '#'
  }
};

// export const buttonProps: ButtonProps = {
//   label: 'Button'
// };

// export const buttonLinkProps: ButtonProps = {
//   label: 'Button',
//   url: 'https://example.com'
// };

export default Button;
