import type { ReactElement } from 'react';

import styles from './SVGImage.module.scss';

export interface SVGImageProps {
  /**
   * Source url of the image
   */
  src: string;
  /*
   * Width of image to stop layout shift
   */
  width: number;
  /*
   * Height of image to stop layout shift
   */
  height: number;
  altText: string;
  /*
   * The loading attribute is used to lazy load the image. If you need the image
   * to load quickly (example on a hero) then set loadingAttr to "eager"
   */
  loadingAttr?: 'lazy' | 'eager' | undefined;
}

export default function Image({ src, width, height, altText, loadingAttr = 'lazy' }: SVGImageProps): ReactElement {
  return (
    <img className={styles.svgimage} src={src} width={width} height={height} alt={altText} loading={loadingAttr} />
  );
}
