import { PendingBanner } from './PendingBanner';
import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { PendingBannerProps } from './PendingBanner.types';

export default {
  title: 'UiKit/Lobby/Banner/Pending',
  component: PendingBanner,
} as Meta;

const Template: Story<PendingBannerProps> = (args) => (
  <PendingBanner {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
