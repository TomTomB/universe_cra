import type { Meta, Story } from '@storybook/react';
import React from 'react';
import { SecondaryFlatButton } from './SecondaryFlatButton';
import type { SecondaryFlatButtonProps } from './SecondaryFlatButton.types';

export default {
  title: 'UiKit/Form/Button/SecondaryFlat',
  component: SecondaryFlatButton,
} as Meta;

const Template: Story<SecondaryFlatButtonProps> = (args) => (
  <SecondaryFlatButton {...args}>Click me</SecondaryFlatButton>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
