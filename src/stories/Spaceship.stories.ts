import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Starship from '../components/Starship';

const meta: Meta<typeof Starship> = {
  title: 'Example/Starship',
  component: Starship,
  tags: ['autodocs'],
  argTypes: {
    /*shipData: {
      control: {type: "text"},
    }*/
  }
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