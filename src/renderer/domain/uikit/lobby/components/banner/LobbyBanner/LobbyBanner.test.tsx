import { LobbyBanner } from './LobbyBanner';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React from 'react';

describe('LobbyBanner', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <LobbyBanner rank="challenger" showPattern />
        </ThemeProvider>,
      ),
    );
  });
});
