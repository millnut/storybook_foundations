import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Listing from './Listing';
import Card from '../Card/Card';
import { cardProps } from '../Card/defaultProps';

const meta = {
  title: 'Example/Listing',
  component: Listing,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Listing>;

export default meta;
type Story = StoryObj<typeof Listing>;

const cards = Array(12)
  .fill(null)
  .map((_, index) => <Card key={index} {...cardProps} />);

export const Primary: Story = {
  args: {
    children: cards
  }
};
