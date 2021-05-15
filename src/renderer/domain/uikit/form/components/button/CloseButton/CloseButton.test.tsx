import { CloseButton } from './CloseButton';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React from 'react';

describe('CloseButton', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <CloseButton btnStyle="add" type="button" />
        </ThemeProvider>,
      ),
    );
  });
});
