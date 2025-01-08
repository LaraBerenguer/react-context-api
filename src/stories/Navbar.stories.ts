import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Navbar from '../components/Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'Example/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onClick: fn()
    },
};