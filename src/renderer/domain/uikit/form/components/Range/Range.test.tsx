import { Range } from './Range';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React from 'react';

describe('Range', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <Range id="abc" name="foo" />
        </ThemeProvider>,
      ),
    );
  });
});
