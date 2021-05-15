import { Backdrop } from './Backdrop';
import React from 'react';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Common/Backdrop',
  component: Backdrop,
} as Meta;

const Template: Story = (args) => (
  <div style={{ width: '100%', height: 'calc(100vh - 2rem)' }}>
    <Backdrop {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
