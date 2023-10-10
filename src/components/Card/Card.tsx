import React, { ReactNode } from 'react';
import useTheme from '../../hooks/useDarkMode';
import Image, { ImageProps } from '../Image/Image';
import './Card.scss';

interface CardProps {
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
}

export default function Card({ image, title, body }: CardProps): ReactNode {
  const theme = useTheme();
  return (
    <li className={`card theme--${theme.mode}`}>
      <Image src={image.src} width={400} height={400} altText={image.altText} />
      <span className="card__container">
        <h2 className="card__title">{title}</h2>
        <p className="card__body">{body}</p>
      </span>
    </li>
  );
}
