import { Images } from './assets';
import { ParallaxBackground } from './ParallaxBackground';
import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { ParallaxBackgroundProps } from './ParallaxBackground.types';

export default {
  title: 'UiKit/Common/ParallaxBackground',
  component: ParallaxBackground,
} as Meta;

const Template: Story<ParallaxBackgroundProps> = (args) => (
  <div style={{ position: 'relative', width: '1280px', height: '720px' }}>
    <ParallaxBackground {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  layers: [
    {
      imageSrc: Images.smokeBackground,
      isBackgroundLayer: true,
      delay: 0,
      duration: 0,
    },
    {
      imageSrc: Images.smokeForeground,
      isBackgroundLayer: true,
      delay: 0,
      duration: 0,
    },
    {
      imageSrc: Images.smoke1,
      delay: 7500,
      duration: 30,
    },
    {
      imageSrc: Images.smoke2,
      delay: 5000,
      duration: 25,
    },
    {
      imageSrc: Images.smoke3,
      delay: 15000,
      duration: 28,
    },
    {
      imageSrc: Images.smoke4,
      delay: 0,
      duration: 30,
    },
  ],
};
