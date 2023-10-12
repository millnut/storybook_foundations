import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    ...Button.defaultProps
  }
};

export const ButtonLink: Story = {
  args: {
    ...Button.defaultProps.buttonLinkProps
  }
};
