import { ThemeProvider } from 'styled-components';
import { ThemedLevelRing } from './ThemedLevelRing';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React from 'react';

describe('ThemedLevelRing', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <ThemedLevelRing
            ringType="progress"
            progress={20}
            summonerLevel={20}
          />
        </ThemeProvider>,
      ),
    );
  });
});
