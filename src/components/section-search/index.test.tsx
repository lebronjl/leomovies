import { render, screen } from '@testing-library/react';
import React from 'react';
import { SectionSearch } from '.';

describe('SectionSearch', () => {
    it('renders the section', () => {
        render(<SectionSearch />);

        expect(screen.getByRole('grid')).toBeInTheDocument();
        expect(screen.getByRole('grid')).toHaveTextContent("Search");
    })
})