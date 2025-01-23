/*import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, it, vi } from 'vitest';
import Films from '../../src/components/Films/Films';

vi.mock('@context/FilmsContext', () => ({useFilms: vi.fn(),}));

describe('Films', () => {
    it('should render film cards when filmsData is provided', () => {

        const data = [{
            id: 1,
            title: "A New Hope",
            episode_id: 4
        },
        {
            id: 2,
            title: "The Empire Strikes Back",
            episode_id: 5
        }];

        const { useFilms } = require('@context/FilmsContext');

        useFilms.mockReturnValue({
            filmsData: data,
            filmsLoading: false,
            filmsError: null,
        });

        render(<Films />)

        expect(screen.getByText("A New Hope")).toBeInTheDocument();
        expect(screen.getByText("Episode 4")).toBeInTheDocument();
        expect(screen.getByText("The Empire Strikes Back")).toBeInTheDocument();
        expect(screen.getByText("Episode 5")).toBeInTheDocument();
    })
});*/