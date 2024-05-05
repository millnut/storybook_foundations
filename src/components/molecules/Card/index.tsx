import React, { ReactElement } from 'react';
import Image, { ImageProps } from '../../atoms/Image';
import styles from './Card.module.scss';

export interface CardProps {
  /**
   * Is this the principal call to action on the page?
   */
  image: ImageProps;
  /**
   * The title
   */
  title: string;
  /**
   * The description
   */
  body: string;
  /**
   * The url used to link the card
   */
  url?: string;
}

export default function Card({ image, title, body, url }: CardProps): ReactElement {
  function handleClick(e: React.MouseEvent<HTMLElement>): void {
    const link = e.currentTarget.querySelector('a');
    if (link) {
      link.click();
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li
      className={styles.card}
      onClick={(event) => {
        handleClick(event);
      }}
    >
      {image.src && <Image src={image.src} width={400} height={400} altText={image.altText} />}
      <span className={styles.card__container}>
        {title && (
          <h2 className="card__title">
            {url ? (
              <a className="card__link" href={url}>
                {title}
              </a>
            ) : (
              title
            )}
          </h2>
        )}
        {body && <p className={styles.card__body}>{body}</p>}
      </span>
    </li>
  );
}
