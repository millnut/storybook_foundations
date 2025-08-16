import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Heading from '.';

const meta = {
  title: 'Atoms/Heading',
  component: Heading,
  tags: ['autodocs']
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingOne: Story = {
  args: {
    level: 'h1',
    children: 'Heading One'
  }
};

export const HeadingTwo: Story = {
  args: {
    level: 'h2',
    children: 'Heading Two'
  }
};

export const HeadingThree: Story = {
  args: {
    level: 'h3',
    children: 'Heading Three'
  }
};

export const HeadingFour: Story = {
  args: {
    level: 'h4',
    children: 'Heading Four'
  }
};

export const HeadingFive: Story = {
  args: {
    level: 'h5',
    children: 'Heading Five'
  }
};

export const HeadingSix: Story = {
  args: {
    level: 'h6',
    children: 'Heading Six'
  }
};
