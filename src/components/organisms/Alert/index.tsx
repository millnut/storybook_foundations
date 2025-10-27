import clsx from 'clsx';
import { type ReactElement, useEffect, useState } from 'react';

import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Text from '../../atoms/Text';

import styles from './Alert.module.scss';

export interface AlertProps {
  /**
   * A unique token used for hiding the alert banner
   */
  token: string;
  /**
   * Type of alert banner
   */
  type: 'announcement' | 'minor' | 'major' | 'notable-person';
  /**
   * Title of the alert
   */
  title: string;
  /**
   * Content of the alert
   */
  body: string;
  /**
   * Indicating if alert title should be displayed
   */
  displayTitle?: boolean;
}

export default function Alert({ token, type, title, body, displayTitle = true }: AlertProps): ReactElement | null {
  const [isHidden, setIsHidden] = useState(false);

  const checkLocalStorage = (): void => {
    const alerts = localStorage.getItem('hide-alert-token');

    if (!alerts) {
      return;
    }

    if (alerts.split('+').includes(token)) {
      setIsHidden(true);
    }
  };

  const hideAlert = (): void => {
    const alerts = localStorage.getItem('hide-alert-token');

    const alertTokens = alerts ? alerts.split('+') : [];
    alertTokens.push(token);
    localStorage.setItem('hide-alert-token', alertTokens.join('+'));
    setIsHidden(true);
  };

  useEffect(() => {
    checkLocalStorage();
  });

  return !isHidden ? (
    <section data-dismiss-alert-token={token} className={clsx(styles.base, styles[type])}>
      <div>
        {displayTitle && <Heading level="h2">{title}</Heading>}

        <Text>{body}</Text>

        <Button onClick={hideAlert}>Hide</Button>
      </div>
    </section>
  ) : null;
}
