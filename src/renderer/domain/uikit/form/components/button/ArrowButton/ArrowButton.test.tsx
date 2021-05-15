import { ArrowButton } from './ArrowButton';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React from 'react';

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
