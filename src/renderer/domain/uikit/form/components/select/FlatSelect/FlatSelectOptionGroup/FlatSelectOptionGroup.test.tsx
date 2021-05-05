import { FlatSelectOptionGroup } from './FlatSelectOptionGroup';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';

describe('FlatSelectOptionGroup', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <FlatSelectOptionGroup name="Group" />
        </ThemeProvider>,
      ),
    );
  });
});
