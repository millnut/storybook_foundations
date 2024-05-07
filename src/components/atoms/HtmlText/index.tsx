import React, { ReactElement } from 'react';

import { sanitizeText } from '../../../utils/util';

import styles from './HtmlText.module.scss';

type HtmlTextProps = {
  body: string;
};

export default function HtmlText({ body }: HtmlTextProps): ReactElement {
  return (
    <div
      className={styles.base}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: sanitizeText(body)
      }}
    />
  );
}
