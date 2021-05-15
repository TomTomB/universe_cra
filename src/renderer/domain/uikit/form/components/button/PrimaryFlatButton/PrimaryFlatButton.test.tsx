import { PrimaryFlatButton } from './PrimaryFlatButton';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React from 'react';

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
