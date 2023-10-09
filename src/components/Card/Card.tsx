import React, { ReactNode } from 'react';
import useTheme from '../../hooks/useDarkMode';
import Image, { ImageProps } from '../Image/Image';

type CardProps = {
  image: ImageProps;
  title: string;
  body: string;
};

export default function Card({ image, title, body }: CardProps): ReactNode {
  const theme = useTheme();

  return (
    <li className={`card card--${theme.mode}`}>
      <Image src="" altText="" />
      <h2>{title}</h2>
      <p>{body}</p>
    </li>
  );
}
