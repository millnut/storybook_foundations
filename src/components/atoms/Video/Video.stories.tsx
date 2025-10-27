import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Video from '.';

const meta = {
  title: 'Atoms/Video',
  component: Video,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Video>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    videoSrc: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
    posterImage: '',
  },
};
