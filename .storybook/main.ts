import type { StorybookConfig } from '@storybook/react-webpack5';
import { storybookAddonStylingWebpackConfig } from './addon-styling-webpack-config';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ['../static'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling-webpack',
      options: storybookAddonStylingWebpackConfig
    },
    '@storybook/addon-webpack5-compiler-swc'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {}
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
