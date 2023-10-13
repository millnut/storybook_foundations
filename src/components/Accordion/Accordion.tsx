import React, { ReactElement } from 'react';
import './accordion.scss';
import AccordionItem, { AccordionItemProps } from './AccordionItem/AccordionItem';

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

const Accordion = ({ title, body, accordionItems }: AccordionProps): ReactElement => (
  <section className="accordion">
    {title && <h2 className="accordion__title">{title}</h2>}
    {body && <p className="accordion__body">{body}</p>}
    {accordionItems.map((accordionItem, index) => (
      <AccordionItem summary={accordionItem.summary} body={accordionItem.body} key={index} />
    ))}
  </section>
);

Accordion.defaultProps = {
  title: 'Example title',
  body: 'Example body',
  accordionItems: Array(12).fill(AccordionItem.defaultProps)
};

export default Accordion;
