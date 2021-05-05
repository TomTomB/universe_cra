import { FlatSelectOption } from './FlatSelectOption';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';

describe('FlatSelectOption', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <FlatSelectOption
            index={1}
            onClick={() => {
              // Make linter happy
            }}
          >
            Option
          </FlatSelectOption>
        </ThemeProvider>,
      ),
    );
  });
});
