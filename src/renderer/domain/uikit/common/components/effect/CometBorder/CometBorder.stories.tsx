import { CometBorder } from './CometBorder';
import React from 'react';
import type { CometBorderProps } from './CometBorder.types';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Common/Effect/CometBorder',
  component: CometBorder,
} as Meta;

const Template: Story<CometBorderProps> = (args) => <CometBorder {...args} />;

export const Default = Template.bind({});
Default.args = {
  borderWith: 2,
  height: 30,
  width: 150,
};
