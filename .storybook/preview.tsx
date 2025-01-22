import type { Preview } from '@storybook/react';
import '../src/styles/tailwind.css';
import { withThemeByClassName } from '@storybook/addon-themes';
import { AuthProvider } from '../src/auth/AuthContext';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story) => (
      <MemoryRouter>
        <AuthProvider>
          <Story />
        </AuthProvider>
      </MemoryRouter>
    ),
  ],
};

export default preview;
