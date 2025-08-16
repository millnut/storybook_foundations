import type { Preview } from '@storybook/react-webpack5';
import '../src/scss/index.scss';

const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '360px',
      height: '850px'
    },
    type: 'mobile'
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px'
    },
    type: 'tablet'
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1200px',
      height: '700px'
    },
    type: 'desktop'
  }
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    viewport: { viewports: customViewports },
    options: {
      storySort: {
        order: ['Foundations', 'Atoms', 'Molecules', 'Organisms', 'Pages']
      }
    }
  },

  tags: ['autodocs']
};

export default preview;
