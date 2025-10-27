import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { expect, within } from 'storybook/test';

import Button from '.';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button')).toBeInTheDocument();
  },
};

export const Light: Story = {
  args: {
    children: 'Button',
  },
  decorators: [
    (Story) => (
      <div className="mt-theme_core--light">
        <Story />
      </div>
    ),
  ],
};

export const Dark: Story = {
  args: {
    children: 'Button',
  },
  decorators: [
    (Story) => (
      <div className="mt-theme_core--dark">
        <Story />
      </div>
    ),
  ],
};
