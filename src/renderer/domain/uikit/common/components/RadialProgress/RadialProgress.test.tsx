import { RadialProgress } from './RadialProgress';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React from 'react';

describe('RadialProgress', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <RadialProgress progress={10} progressType="blue" />
        </ThemeProvider>,
      ),
    );
  });
});
