import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ShipCard from '../components/ShipCard';

const meta: Meta<typeof ShipCard> = {
  title: 'Example/ShipCard',
  component: ShipCard,
  tags: ['autodocs'],
  argTypes: {
    shipName: {
      control: {type: "text"},
    },
    shipModel: {
      control: {type: "text"},
    },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: fn(),
    shipName: "Ship Name",
    shipModel: "Ship Model"
  },
};