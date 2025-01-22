import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../components/Button/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {    
    layout: 'centered',
  },  
  tags: ['autodocs'],  
  argTypes: {
    backgroundColor: { control: 'color' },
  },  
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    backgroundColor: "#FFE81F"
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};