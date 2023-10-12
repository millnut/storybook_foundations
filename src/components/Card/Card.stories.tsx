import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import { cardData } from './cardData';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...cardData
  }
};
