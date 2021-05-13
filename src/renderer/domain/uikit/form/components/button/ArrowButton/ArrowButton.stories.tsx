import type { Meta, Story } from '@storybook/react';
import { ArrowButton } from './ArrowButton';
import type { ArrowButtonProps } from './ArrowButton.types';
import React from 'react';

export default {
  title: 'UiKit/Form/Button/Arrow',
  component: ArrowButton,
  args: {
    label: 'Go back',
    type: 'button',
  },
} as Meta;

const Template: Story<ArrowButtonProps> = (args) => <ArrowButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
