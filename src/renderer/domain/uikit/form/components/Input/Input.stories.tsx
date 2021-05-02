import type { Meta, Story } from '@storybook/react';
import { Input } from './Input';
import type { InputProps } from './Input.types';
import React from 'react';

export default {
  title: 'UiKit/Form/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'My Input',
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  label: 'My Disabled Input',
  disabled: true,
};

export const DefaultWithError = Template.bind({});
DefaultWithError.args = {
  label: 'My Invalid Input',
  error: { type: 'minLength', message: 'The value is too short' },
};

export const Search = Template.bind({});
Search.args = {
  type: 'search',
  label: 'My Search',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  label: 'My Password',
};
