import React, { ReactElement } from 'react';
import styles from './AccordionItem.module.scss';

export interface AccordionItemProps {
  /**
   * Example ID
   */
  id: string;
  /**
   * Example summary
   */
  summary: string;
  /**
   * Example body text
   */
  body: string;
}

export default function AccordionItem({ id, summary, body }: AccordionItemProps): ReactElement {
  return (
    <details className={styles['accordion-item']} data-id={id}>
      <summary className="accordion-item__summary">{summary}</summary>
      <p className={styles['accordion-item__body']}>{body}</p>
    </details>
  );
}
