import { PlayButtonPlay } from './Play';
import { PlayButtonState } from '../PlayButton.types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';

describe('PlayButtonPlay', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <PlayButtonPlay
            buttonState={{
              prev: PlayButtonState.PLAY,
              curr: PlayButtonState.PLAY,
            }}
            disabled
            isHovering
          />
        </ThemeProvider>,
      ),
    );
  });
});
