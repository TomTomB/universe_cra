import { ButtonGroup } from './ButtonGroup';
import React from 'react';
import type { ButtonGroupProps } from './ButtonGroup.types';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Form/Button/Group',
  component: ButtonGroup,
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args}>
    <button>Button A</button>
    <button>Button B Lorem</button>
  </ButtonGroup>
);

export const Default = Template.bind({});
Default.args = {};
