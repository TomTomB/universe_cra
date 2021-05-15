import { BackgroundSwitcher } from './BackgroundSwitcher';
import { Splash } from '@universe/renderer/uikit/gamedata';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React from 'react';

describe('BackgroundSwitcher', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <BackgroundSwitcher
            items={[
              {
                src: Splash.Images.dianaBloodmoon,
                alt: 'Diana Bloodmoon',
              },
            ]}
            currentIndex={0}
          />
        </ThemeProvider>,
      ),
    );
  });
});
