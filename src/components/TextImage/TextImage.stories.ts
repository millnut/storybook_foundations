import type { Meta, StoryObj } from '@storybook/react';
import TextImage from './TextImage';

const meta = {
  title: 'Example/TextImage',
  component: TextImage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof TextImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
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
  }
};
