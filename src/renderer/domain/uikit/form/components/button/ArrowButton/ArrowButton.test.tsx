import { ArrowButton } from './ArrowButton';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';

describe('ArrowButton', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <ArrowButton label="Go back" type="button" />
        </ThemeProvider>,
      ),
    );
  });
});
