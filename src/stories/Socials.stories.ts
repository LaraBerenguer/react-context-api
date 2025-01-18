import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Socials from '../components/Socials';

const meta: Meta<typeof Socials> = {
  title: 'Example/Socials',
  component: Socials,
  tags: ['autodocs'],
  argTypes: {
    /*shipData: {
      control: {type: "text"},
    }*/
  },
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: fn(),
    /*shipData: {
      name: "Ship Name",
      model: "Ship Model"
    }*/
  },
};