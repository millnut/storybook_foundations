import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Image from '.';

const meta = {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: {
      small: 'https://placeholder.pics/svg/576x576',
      medium: 'https://placeholder.pics/svg/992x992',
      default: 'https://placeholder.pics/svg/1440x1440',
    },
    width: 500,
    height: 500,
    altText: 'An example image',
  },
};
