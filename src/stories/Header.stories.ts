import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Header from '../components/Header';

const meta: Meta<typeof Header> = {
    title: 'Example/Header',
    component: Header,
    tags: ['autodocs'],
    argTypes: {
        login: {}
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onClick: fn()
    },
};