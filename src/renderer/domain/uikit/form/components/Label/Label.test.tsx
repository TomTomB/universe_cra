import { Label } from './Label';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';

describe('Label', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <Label htmlFor="abc123" isInvalid={false}>
            Test Label
          </Label>
        </ThemeProvider>,
      ),
    );
  });
});
