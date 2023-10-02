import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  features: {
    storyStoreV7: true
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../static'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    'storybook-addon-performance',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
          rules: [
              {
                  test: /\.scss$/,
                  use: [
                      'style-loader',
                      'css-loader',
                      {
                          loader: 'sass-loader',
                          options: {
                              implementation: require.resolve('sass'),
                              sassOptions: {
                                  includePaths: ['node_modules'],
                              },
                          },
                      },
                  ],
              },
          ],
      },
  }
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  core: {
    disableTelemetry: true
  },
};
export default config;
