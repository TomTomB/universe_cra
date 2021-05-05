import Option from './FramedSelectOption';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';

describe('Option', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <Option
            index={1}
            onClick={() => {
              // Make linter happy
            }}
          >
            Option
          </Option>
        </ThemeProvider>,
      ),
    );
  });
});
