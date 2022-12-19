import { render, screen } from '@testing-library/react';
import React from 'react';
import { SectionsSwitch } from '.';
import { SectionKeys } from '../../models/section-keys';

describe('SectionsSwitch', () => {
    it.each([
        [SectionKeys.Search, "Search"],
        [SectionKeys.Favourites, "Favourites"],
        [SectionKeys.WatchLater, "Watch later"]
    ])('should render the appropiate section when activeSectionKey is %s', (activeSectionKey: SectionKeys, text: string) => {
        render(<SectionsSwitch activeSectionKey={activeSectionKey} />);

        expect(screen.getByRole('grid')).toHaveTextContent(text);
    })
})