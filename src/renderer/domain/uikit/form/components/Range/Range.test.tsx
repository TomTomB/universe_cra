import { Range } from './Range';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';

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
