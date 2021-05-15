import { Range } from './Range';
import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { RangeProps } from './Range.types';

export default {
  title: 'UiKit/Form/Range',
  component: Range,
} as Meta;

const Template: Story<RangeProps> = (args) => (
  <div style={{ width: '100%', height: '300px' }}>
    <Range {...args} />
  </div>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  value: 40,
  min: 0,
  max: 100,
};

export const Vertical = Template.bind({});
Vertical.args = {
  value: 40,
  min: 0,
  max: 100,
  direction: 'vertical',
};
