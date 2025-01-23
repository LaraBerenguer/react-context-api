import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import ShipCard from '../../src/components/ShipCard/ShipCard';
import { MemoryRouter } from 'react-router-dom';

describe('Shipcard', () => {
    it('should render name and model when shipData is provided', () => {

        const data = {
            id: 1,
            name: "Millenium Falcon",
            model: "YT-1300 light freighter"
        };

        render(
            <MemoryRouter>
                <ShipCard shipData={data} />
            </MemoryRouter>);

        expect(screen.getByText(data.name)).toBeInTheDocument();
        expect(screen.getByText(data.model)).toBeInTheDocument();
    })

    it('should render an error message if shipData is empty', () => {

        render(
            <MemoryRouter>
                <ShipCard shipData={{} as any} />
            </MemoryRouter>);

        expect(screen.getByText("No ship available")).toBeInTheDocument();
    })
});