import type { Meta, Story } from '@storybook/react';
import { CloseButton } from './CloseButton';
import type { CloseButtonProps } from './CloseButton.types';
import React from 'react';

export default {
  title: 'UiKit/Form/Button/Close',
  component: CloseButton,
  args: {
    label: 'Go back',
    type: 'button',
  },
} as Meta;

const Template: Story<CloseButtonProps> = (args) => <CloseButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  btnStyle: 'back',
};

export const Disabled = Template.bind({});
Disabled.args = {
  btnStyle: 'back',
  disabled: true,
};
