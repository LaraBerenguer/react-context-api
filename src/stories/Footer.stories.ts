import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Footer from '../components/Footer';

const meta: Meta<typeof Footer> = {
    title: 'Example/Footer',
    component: Footer,
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