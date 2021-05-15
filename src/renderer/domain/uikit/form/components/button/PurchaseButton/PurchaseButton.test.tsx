import { PurchaseButton } from './PurchaseButton';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';

describe('PurchaseButton', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <PurchaseButton currencyType="be" type="button">
            1200
          </PurchaseButton>
        </ThemeProvider>,
      ),
    );
  });
});
