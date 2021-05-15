import { ButtonGroup } from './ButtonGroup';
import { PrimaryFlatButton } from '../PrimaryFlatButton';
import React from 'react';
import type { ButtonGroupProps } from './ButtonGroup.types';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Form/Button/Group',
  component: ButtonGroup,
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args}>
    <PrimaryFlatButton type="button">Save</PrimaryFlatButton>
    <PrimaryFlatButton type="button">Discard</PrimaryFlatButton>
  </ButtonGroup>
);

export const Default = Template.bind({});
Default.args = {};
