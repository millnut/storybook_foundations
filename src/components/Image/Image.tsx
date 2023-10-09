import React, { ReactElement } from 'react';

export type ImageProps = {
  src: {
    small?: string;
    medium?: string;
    default: string;
  };
  altText: string;
  title?: string;
  loadingAttr?: 'lazy' | 'eager' | undefined;
};

export default function Image({ src, altText, title, loadingAttr = 'lazy' }: ImageProps): ReactElement {
  //  TODO: Add sizes attribute so these can be passed in
  return (
    <img
      className="image"
      srcSet={`${src.small} 576w, ${src.medium} 992w, ${src.default} 1440w`}
      src={src.default}
      alt={altText || ''}
      title={title || ''}
      loading={loadingAttr}
    />
  );
}
