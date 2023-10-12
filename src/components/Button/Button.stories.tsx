import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import buttonProps, { buttonLinkProps } from './defaultProps';

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
    ...buttonProps
  }
};

export const ButtonLink: Story = {
  args: {
    ...buttonLinkProps
  }
};
