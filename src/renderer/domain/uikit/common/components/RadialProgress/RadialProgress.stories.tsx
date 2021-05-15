import { RadialProgress } from './RadialProgress';
import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { RadialProgressProps } from './RadialProgress.types';

export default {
  title: 'UiKit/Common/RadialProgress',
  component: RadialProgress,
} as Meta;

const Template: Story<RadialProgressProps> = (args) => (
  <div style={{ width: 100, height: 100 }}>
    <RadialProgress {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  progressType: 'blue',
  progress: 40,
};
