import type { Meta, StoryObj } from '@storybook/react';

import SVGImage from '.';

const meta = {
  title: 'Atoms/SVGImage',
  component: SVGImage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: 'https://placeholder.pics/svg/500x500',
    width: 500,
    height: 500,
    altText: 'An example image'
  }
};
