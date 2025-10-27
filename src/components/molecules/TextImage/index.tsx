import type { ReactElement } from 'react';

import Image, { type ImageProps } from '../../atoms/Image';

import styles from './TextImage.module.scss';

export interface TextImageProps {
  /**
   * Title text
   */
  title: string;
  /**
   * Body copy
   */
  body: string;
  /**
   * Image
   */
  image: ImageProps;
}

export default function TextImage({ title, body, image }: TextImageProps): ReactElement {
  return (
    <section className={styles['text-image']}>
      {image.src && <Image src={image.src} width={400} height={400} altText={image.altText} />}
      <div className="text-image__content">
        {title && <h2 className="text-image__title">{title}</h2>}
        {body && <p className="text-image__body">{body}</p>}
      </div>
    </section>
  );
}
