import type { Meta, StoryObj } from '@storybook/react';
import ShipCard from '../components/ShipCard';

const meta: Meta<typeof ShipCard> = {
  title: 'Example/ShipCard',
  component: ShipCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

