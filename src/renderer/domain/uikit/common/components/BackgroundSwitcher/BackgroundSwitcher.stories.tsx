import { BackgroundSwitcher } from './BackgroundSwitcher';
import { Splash } from '@universe/renderer/uikit/gamedata';
import React from 'react';
import type { BackgroundSwitcherProps } from './BackgroundSwitcher.types';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Common/BackgroundSwitcher',
  component: BackgroundSwitcher,
} as Meta;

const Template: Story<BackgroundSwitcherProps> = (args) => (
  <BackgroundSwitcher {...args} />
);

export const Default = Template.bind({});
Default.args = {
  currentIndex: 0,
  items: [
    {
      src: Splash.Images.caitlynPulsefire,
      alt: 'Caitlyn Pulsfire',
    },
    {
      src: Splash.Images.dianaBloodmoon,
      alt: 'Diana Bloodmoon',
    },
  ],
};
