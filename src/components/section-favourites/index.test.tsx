import { render, screen } from '@testing-library/react';
import React from 'react';
import { SectionFavourites } from '.';

describe('SectionFavourites', () => {
    it('renders the section', () => {
        render(<SectionFavourites />);

        expect(screen.getByRole('grid')).toBeInTheDocument();
        expect(screen.getByRole('grid')).toHaveTextContent("Favourites");
    })
})