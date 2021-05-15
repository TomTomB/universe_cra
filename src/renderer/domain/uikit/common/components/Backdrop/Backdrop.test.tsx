import { Backdrop } from './Backdrop';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React from 'react';

describe('Backdrop', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <Backdrop />
        </ThemeProvider>,
      ),
    );
  });
});
