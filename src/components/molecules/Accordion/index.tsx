import React, { ReactElement } from 'react';
import AccordionItem, { AccordionItemProps } from './AccordionItem';
import styles from './Accordion.module.scss';

export interface AccordionProps {
  /**
   * Example title
   */
  title?: string;
  /**
   * Example body text
   */
  body?: string;
  /**
   * Example accordion items
   */
  accordionItems: AccordionItemProps[];
}

export default function Accordion({ title, body, accordionItems }: AccordionProps): ReactElement {
  return (
    <section>
      {title && <h2 className="accordion__title">{title}</h2>}
      {body && <p className={styles.accordion__body}>{body}</p>}
      {accordionItems.map((accordionItem) => (
        <AccordionItem
          key={accordionItem.id}
          id={accordionItem.id}
          summary={accordionItem.summary}
          body={accordionItem.body}
        />
      ))}
    </section>
  );
}
