import { ParallaxLayer } from './ParallaxLayer';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React from 'react';
import smoke4 from '../assets/images/parallax-smoke4.png';

describe('ParallaxLayer', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <ParallaxLayer delay={0} duration={0} imageSrc={smoke4} />
        </ThemeProvider>,
      ),
    );
  });
});
