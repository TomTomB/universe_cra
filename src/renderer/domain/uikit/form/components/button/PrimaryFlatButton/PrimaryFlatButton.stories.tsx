import { PrimaryFlatButton } from './PrimaryFlatButton';
import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { PrimaryFlatButtonProps } from './PrimaryFlatButton.types';

export default {
  title: 'UiKit/Form/Button/PrimaryFlat',
  component: PrimaryFlatButton,
} as Meta;

const Template: Story<PrimaryFlatButtonProps> = (args) => (
  <PrimaryFlatButton {...args}>Click me</PrimaryFlatButton>
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Purchase = Template.bind({});
Purchase.args = {
  variant: 'purchase',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
