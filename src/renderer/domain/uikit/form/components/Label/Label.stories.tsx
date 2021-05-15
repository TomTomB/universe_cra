import { Label } from './Label';
import React from 'react';
import type { LabelProps } from './Label.types';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Form/Label',
  component: Label,
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args}>My label</Label>;

export const Default = Template.bind({});
Default.args = {};

export const Invalid = Template.bind({});
Invalid.args = {
  isInvalid: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
