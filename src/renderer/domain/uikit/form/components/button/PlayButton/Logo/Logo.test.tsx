import { PlayButtonLogo } from './Logo';
import { PlayButtonState } from '../PlayButton.types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';

describe('PlayButtonLogo', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <PlayButtonLogo
            buttonState={{
              prev: PlayButtonState.PLAY,
              curr: PlayButtonState.PLAY,
            }}
            playPatcherIntro
          />
        </ThemeProvider>,
      ),
    );
  });
});
