import { Label } from './Label';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React from 'react';

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
