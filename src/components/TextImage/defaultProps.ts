import { TextImageProps } from './TextImage';

export const textImageProps: TextImageProps = {
  title: 'Example title',
  body: 'Example body text',
  image: {
    src: {
      small: 'https://picsum.photos/200/300',
      medium: 'https://picsum.photos/600/1200',
      default: 'https://picsum.photos/1200/1800'
    },
    width: 500,
    height: 500,
    altText: 'An example image'
  }
};
