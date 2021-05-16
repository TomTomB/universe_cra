import { Banner } from './Banner';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React from 'react';

describe('Banner', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <Banner rank="challenger" showPattern />
        </ThemeProvider>,
      ),
    );
  });
});
