import React, { ReactElement } from 'react';
import './accordionItem.scss';
export interface AccordionItemProps {
  /**
   * Example summary
   */
  summary: string;
  /**
   * Example body text
   */
  body: string;
}

const AccordionItem = ({ summary, body }: AccordionItemProps): ReactElement => (
  <details className="accordionItem">
    <summary className="accordionItem__summary">{summary}</summary>
    <p className="accordionItem__body">{body}</p>
  </details>
);

AccordionItem.defaultProps = {
  summary: 'Accordion Item',
  body: 'Content for Accordion Item'
};

export default AccordionItem;
