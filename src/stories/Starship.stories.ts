import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Starship from '../components/Starship';

const meta: Meta<typeof Starship> = {
  title: 'Example/Starship',
  component: Starship,
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: { type: "text" },
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: fn(),
    data: {
      id: '1',
      name: 'X-Wing',
      model: 'T-65 X-wing starfighter',
      cost_in_credits: '149,999',
      max_atmosphering_speed: '1050',
      manufacturer: 'Incom Corporation',
      length: '12.5',
      passengers: '0',
      cargo_capacity: '110',
      consumables: "1 week",
      hyperdrive_rating: "1.0",
      MGLT: "100",
      starship_class: "Starfighter",
      pilots: [],
      films: [],
      url: "url",
      crew: '1'
    }
  },
};