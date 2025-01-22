import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import NavigationButton from '../components/Navigation-Button/NavigationButton';

const meta = {
  title: 'Example/NavigationButton',
  component: NavigationButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'text' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof NavigationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'left'
  },
};