import React, { ReactElement } from 'react';
import useTheme from '../../hooks/useDarkMode';
import Image, { ImageProps } from '../Image/Image';
import './textImage.scss';

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

const TextImage = ({ title, body, image }: TextImageProps): ReactElement => {
  const theme = useTheme();
  return (
    <section className={`textImage theme--${theme.mode}`}>
      {image.src && <Image src={image.src} width={400} height={400} altText={image.altText} />}
      <div className="textImage__content">
        {title && <h2 className="textImage__title">{title}</h2>}
        {body && <p className="textImage__body">{body}</p>}
      </div>
    </section>
  );
};

TextImage.defaultProps = {
  title: 'Example title',
  body: 'Example body text',
  image: Image.defaultProps
};

export default TextImage;
