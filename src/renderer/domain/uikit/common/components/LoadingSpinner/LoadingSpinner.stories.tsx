import { LoadingSpinner } from './LoadingSpinner';
import React from 'react';
import type { LoadingSpinnerProps } from './LoadingSpinner.types';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Common/LoadingSpinner',
  component: LoadingSpinner,
} as Meta;

const Template: Story<LoadingSpinnerProps> = (args) => (
  <LoadingSpinner {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Large = Template.bind({});
Large.args = {
  isLarge: true,
};
