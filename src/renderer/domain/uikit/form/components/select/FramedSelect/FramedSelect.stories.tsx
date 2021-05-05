import type { Meta, Story } from '@storybook/react';
import { FramedSelect } from './FramedSelect';
import type { FramedSelectProps } from './FramedSelect.types';
import React from 'react';

export default {
  title: 'UiKit/Form/Select/Framed',
  component: FramedSelect,
} as Meta;

const Template: Story<FramedSelectProps> = (args) => <FramedSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select a foo',
  name: 'foo',
  value: 'foo',
  items: [
    { label: 'Bar', value: 'bar', disabled: true },
    { label: 'Baz', value: 'baz' },
    { label: 'Buz', value: 'buz' },
    { label: 'Biz', value: 'biz' },
    {
      label:
        'Super long Label that should cut off Super long Label that should cut off',
      value: 'bez',
    },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Select',
  disabled: true,
  items: [],
};
