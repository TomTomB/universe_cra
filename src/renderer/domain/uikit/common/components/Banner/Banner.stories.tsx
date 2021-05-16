import { Banner } from './Banner';
import React from 'react';
import type { BannerProps } from './Banner.types';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Common/Banner',
  component: Banner,
} as Meta;

const Template: Story<BannerProps> = (args) => (
  <div style={{ width: 220 }}>
    {' '}
    <Banner {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  rank: 'challenger',
  showPattern: true,
};
