import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';
import { imageProps } from './defaultProps';

const meta = {
  title: 'Example/Image',
  component: Image,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...imageProps
  }
};
