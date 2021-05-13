import { PlayButton } from './PlayButton';
import { PlayButtonState } from './PlayButton.types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';

describe('PlayButton', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <PlayButton
            buttonState={PlayButtonState.PLAY}
            prevButtonState={PlayButtonState.HIDDEN}
            type="button"
          >
            Test Button
          </PlayButton>
        </ThemeProvider>,
      ),
    );
  });
});
