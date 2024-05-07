import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import Button from '.';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button')).toBeInTheDocument();
  }
};

export const ButtonLink: Story = {
  args: {
    url: '#'
  }
};
