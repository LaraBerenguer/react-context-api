import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ShipCard from '../components/ShipCard';

const meta: Meta<typeof ShipCard> = {
  title: 'Example/ShipCard',
  component: ShipCard,
  tags: ['autodocs'],
  argTypes: {
    shipData: {
      control: {type: "text"},
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: fn(),
    shipData: {
      name: "Ship Name",
      model: "Ship Model",
      id: 0,
    }
  },
};