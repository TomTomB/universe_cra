import React from 'react';
import { SecondaryFlatButton } from './SecondaryFlatButton';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';

describe('SecondaryFlatButton', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <SecondaryFlatButton type="button">Click me</SecondaryFlatButton>
        </ThemeProvider>,
      ),
    );
  });
});
