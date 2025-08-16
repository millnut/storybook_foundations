import type { Meta, StoryObj } from '@storybook/react-webpack5';

import AccordionItem from '.';

const meta = {
  title: 'Molecules/AccordionItem',
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
