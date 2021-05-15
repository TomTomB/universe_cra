import { Radio } from './Radio';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React from 'react';

describe('Radio', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <Radio id="foo" label="Foo" name="foo" />
        </ThemeProvider>,
      ),
    );
  });
});
