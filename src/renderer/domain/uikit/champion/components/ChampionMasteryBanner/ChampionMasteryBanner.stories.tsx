import { ChampionMasteryBanner } from './ChampionMasteryBanner';
import React from 'react';
import type { ChampionMasteryBannerProps } from './ChampionMasteryBanner.types';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Champion/ChampionMasteryBanner',
  component: ChampionMasteryBanner,
} as Meta;

const Template: Story<ChampionMasteryBannerProps> = (args) => (
  <div style={{ width: '68px' }}>
    <ChampionMasteryBanner {...args} />
  </div>
);

export const BannerDefault = Template.bind({});
BannerDefault.args = {};

export const BannerLevel7 = Template.bind({});
BannerLevel7.args = {
  level: 7,
};
