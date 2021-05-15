import type { Meta, Story } from '@storybook/react';
import { PrimaryReplayButton } from './PrimaryReplayButton';
import type { PrimaryReplayButtonProps } from './PrimaryReplayButton.types';
import React from 'react';

export default {
  title: 'UiKit/Form/Button/PrimaryReplay',
  component: PrimaryReplayButton,
} as Meta;

const Template: Story<PrimaryReplayButtonProps> = (args) => (
  <PrimaryReplayButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
