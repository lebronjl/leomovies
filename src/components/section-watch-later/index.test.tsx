import { render, screen } from '@testing-library/react';
import React from 'react';
import { SectionWatchLater } from '.';

describe('SectionWatchLater', () => {
    it('renders the section', () => {
        render(<SectionWatchLater />);

        expect(screen.getByRole('grid')).toBeInTheDocument();
        expect(screen.getByRole('grid')).toHaveTextContent("Watch later");
    })
})