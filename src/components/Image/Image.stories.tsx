import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';

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
