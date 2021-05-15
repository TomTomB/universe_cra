import { ThemeProvider } from 'styled-components';
import { Thumbnail } from './Thumbnail';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React from 'react';

describe('Thumbnail', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <Thumbnail />
        </ThemeProvider>,
      ),
    );
  });
});
