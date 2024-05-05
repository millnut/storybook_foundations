import type { Meta, StoryObj } from '@storybook/react';
import Alert from '.';

const meta = {
  title: 'Organisms/Alert',
  component: Alert,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Announcement: Story = {
  args: {
    token: 'alert-1--df0cdb746e87057fcd01a876c6694aa956db0179',
    type: 'announcement',
    title: 'My heading!',
    body: 'This is an example of an alert - click hide and you should not see me again. Other alerts might be displayed on specific pages.'
  }
};

export const Minor: Story = {
  args: {
    token: 'alert-2--df0cdb746e87057fcd01a876c6694aa956db0179',
    type: 'minor',
    title: 'My heading!',
    body: 'This is an example of an alert - click hide and you should not see me again. Other alerts might be displayed on specific pages.'
  }
};

export const Major: Story = {
  args: {
    token: 'alert-3--df0cdb746e87057fcd01a876c6694aa956db0179',
    type: 'major',
    title: 'My heading!',
    body: 'This is an example of an alert - click hide and you should not see me again. Other alerts might be displayed on specific pages.'
  }
};

export const NotablePerson: Story = {
  args: {
    token: 'alert-4--df0cdb746e87057fcd01a876c6694aa956db0179',
    type: 'notable-person',
    title: 'My heading!',
    body: 'This is an example of an alert - click hide and you should not see me again. Other alerts might be displayed on specific pages.'
  }
};
