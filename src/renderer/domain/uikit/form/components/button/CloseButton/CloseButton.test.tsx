import { CloseButton } from './CloseButton';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';

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
