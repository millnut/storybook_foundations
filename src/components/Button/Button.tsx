import React, { ReactElement } from 'react';
import * as stylex from '@stylexjs/stylex';
import { styles } from './Button.stylex';

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
    <a {...stylex.props(styles.base, styles.link)} href={url}>
      {label}
    </a>
  ) : (
    <button type="button" {...stylex.props(styles.base, styles.button)}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  label: 'Button',
  buttonlinkprops: {
    label: 'Button',
    url: '#'
  }
};
