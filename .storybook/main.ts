import type { StorybookConfig } from '@storybook/react-webpack5';
import { storybookAddonStylingWebpackConfig } from './addon-styling-webpack-config';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../static'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-styling-webpack',
      options: storybookAddonStylingWebpackConfig
    },
    '@storybook/addon-docs'
  ],
  typescript: {
    reactDocgen: 'react-docgen'
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {}
    }
  },
  docs: {},
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
