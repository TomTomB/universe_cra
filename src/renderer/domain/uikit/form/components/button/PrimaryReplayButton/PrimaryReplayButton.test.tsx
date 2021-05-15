import { PrimaryReplayButton } from './PrimaryReplayButton';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';

describe('PrimaryReplayButton', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <PrimaryReplayButton />
        </ThemeProvider>,
      ),
    );
  });
});
