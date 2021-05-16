import { ChampionMasteryTooltip } from './ChampionMasteryTooltip';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React from 'react';

describe('ChampionMasteryTooltip', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <ChampionMasteryTooltip
            masteryLevel={7}
            masteryProgress={20}
            championName="Karma"
            masteryPoints={10000}
            masteryTitle="Warden"
          />
        </ThemeProvider>,
      ),
    );
  });
});
