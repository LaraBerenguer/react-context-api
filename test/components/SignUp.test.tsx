/*import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import SignUp from '../../src/auth/components/SignUp';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../../src/auth/AuthContext';

describe('SignUp', () => {
    it('should render the SignUp component', () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <SignUp />
                </AuthProvider>
            </MemoryRouter>
        );

        expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
        expect(screen.getByText(/Sign Up to Star Wars and join the MyDisney family./i)).toBeInTheDocument();
    });

    it('should display error if passwords do not match', () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <SignUp />
                </AuthProvider>
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@.com' } });
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'pass123' } });
        fireEvent.change(screen.getByLabelText(/Password confirmation/i), { target: { value: 'pass456' } });

        fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));

        expect(screen.getByText(/Your passwords don't match. Try again, young Padawan/i)).toBeInTheDocument();
    });    
});*/