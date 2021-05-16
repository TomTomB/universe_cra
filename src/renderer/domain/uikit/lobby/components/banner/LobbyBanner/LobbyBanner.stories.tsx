import { LobbyBanner } from './LobbyBanner';
import React from 'react';
import type { LobbyBannerProps } from './LobbyBanner.types';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Lobby/Banner/Lobby',
  component: LobbyBanner,
} as Meta;

const Template: Story<LobbyBannerProps> = (args) => <LobbyBanner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  rank: 'gold',
  showPattern: false,
  bannerType: 'primary',
};

export const Ally = Template.bind({});
Ally.args = {
  rank: 'gold',
  showPattern: false,
  bannerType: 'ally',
};
