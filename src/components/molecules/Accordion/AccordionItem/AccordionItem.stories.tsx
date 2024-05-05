import type { Meta, StoryObj } from '@storybook/react';
import AccordionItem from '.';

const meta = {
  title: 'Example/AccordionItem',
  component: AccordionItem,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof AccordionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 'id',
    summary: 'Accordion Item',
    body: 'Content for Accordion Item'
  }
};
