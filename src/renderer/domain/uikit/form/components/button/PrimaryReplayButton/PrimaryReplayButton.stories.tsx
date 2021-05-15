import { PrimaryReplayButton } from './PrimaryReplayButton';
import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { PrimaryReplayButtonProps } from './PrimaryReplayButton.types';

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
