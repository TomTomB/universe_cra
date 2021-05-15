import { PurchaseButton } from './PurchaseButton';
import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { PurchaseButtonProps } from './PurchaseButton.types';

export default {
  title: 'UiKit/Form/Button/Purchase',
  component: PurchaseButton,
} as Meta;

const Template: Story<PurchaseButtonProps> = (args) => (
  <PurchaseButton {...args}>1280</PurchaseButton>
);

export const RP = Template.bind({});
RP.args = {
  currencyType: 'rp',
};

export const BE = Template.bind({});
BE.args = {
  currencyType: 'be',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  currencyType: 'be',
};
