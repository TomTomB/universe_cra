import { PlayButtonFrame } from './Frame';
import { PlayButtonState } from '../PlayButton.types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';

describe('PlayButtonFrame', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <PlayButtonFrame
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
