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
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.s[ac]ss$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 3
                }
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  implementation: require.resolve('postcss')
                }
              },
              require.resolve('resolve-url-loader'),
              {
                loader: require.resolve('sass-loader'),
                options: {
                  // Want to add more Sass options? Read more here: https://webpack.js.org/loaders/sass-loader/#options
                  implementation: require.resolve('sass'),
                  sourceMap: true,
                  sassOptions: {}
                }
              }
            ]
          }
        ]
      }
    },
    'storybook-addon-performance'
  ],
  typescript: {
    reactDocgen: 'react-docgen'
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  docs: {
    autodocs: 'tag'
  },
  core: {
    disableTelemetry: true
  },
  webpackFinal: async (config) => {
    config.resolve = config.resolve ?? {};

    // webpack < 5 used to include polyfills for node.js core modules by default.
    // Prevent ModuleNotFoundError for this dependency.
    config.resolve.fallback = {
      fs: false,
      path: false,
      url: false,
      module: false,
      assert: false,
      perf_hooks: false
    };

    return config;
  }
};
export default config;
