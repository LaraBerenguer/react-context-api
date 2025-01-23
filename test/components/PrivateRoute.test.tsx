/*import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, it, vi } from 'vitest';
import PrivateRoute from '../../src/auth/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';
import { useAuth } from '../../src/auth/AuthContext';
import { IdTokenResult, UserCredential, UserMetadata } from 'firebase/auth';

vi.mock("./AuthContext", () => ({ useAuth: vi.fn() }));

describe('PrivateRoute', () => {
    const mockUser = {
        displayName: "Test User",
        email: "test@test.com",
        emailVerified: false,
        isAnonymous: false,
        metadata: {
            creationTime: undefined,
            lastSignInTime: undefined,
        } as UserMetadata,
        providerData: [],
        refreshToken: '',
        tenantId: null,
        delete: async () => {},
        getIdToken: async (forceRefresh?: boolean) => "mock-token",
        getIdTokenResult: async (forceRefresh?: boolean) => ({} as IdTokenResult),
        reload: async () => {},
        toJSON: () => ({}),
        phoneNumber: null,
        photoURL: null,
        providerId: '',
        uid: 'mock-uid',
    };

    const mockUserCredential: UserCredential = {
        user: mockUser,
        operationType: "signIn",
        providerId: null
    };

    vi.mocked(useAuth).mockReturnValue({
        currentUser: mockUser, // Mock del usuario
        signUp: async (email: string, password: string) => mockUserCredential,
        logIn: async (email: string, password: string) => mockUserCredential,
        logOut: async () => {},
    });

    it('should render content when currentUser is true', () => {
        render(
            <MemoryRouter>
                <PrivateRoute>
                    <div>Private content</div>
                </PrivateRoute>
            </MemoryRouter>
        );

        expect(screen.getByText("Private content")).toBeInTheDocument();
    });
});*/
