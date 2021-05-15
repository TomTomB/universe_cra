import { InfoIcon } from './InfoIcon';
import React from 'react';
import type { InfoIconProps } from './InfoIcon.types';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Common/InfoIcon',
  component: InfoIcon,
} as Meta;

const Template: Story<InfoIconProps> = (args) => <InfoIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
