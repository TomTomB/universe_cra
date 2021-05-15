import { PrimaryFlatButton } from './PrimaryFlatButton';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';

describe('PrimaryFlatButton', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <PrimaryFlatButton type="button">Click me</PrimaryFlatButton>
        </ThemeProvider>,
      ),
    );
  });
});
