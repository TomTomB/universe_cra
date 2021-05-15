import { AnimatedArrowOverlay } from './AnimatedArrowOverlay';
import {
  AnimatedArrowOverlayStateActive,
  AnimatedArrowOverlayStateHoverFocus,
} from './AnimatedArrowOverlay.styles';
import React from 'react';
import styled from 'styled-components';
import type { AnimatedArrowOverlayProps } from './AnimatedArrowOverlay.types';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Common/Effect/AnimatedArrowOverlay',
  component: AnimatedArrowOverlay,
} as Meta;

const HoverHelper = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  padding: 10px 20px;
  position: relative;
  display: inline-block;

  &:hover {
    ${AnimatedArrowOverlayStateHoverFocus}
  }

  &:active {
    ${AnimatedArrowOverlayStateActive}
  }
`;

const Template: Story<AnimatedArrowOverlayProps> = (args) => (
  <HoverHelper>
    Hover me
    <AnimatedArrowOverlay {...args} />
  </HoverHelper>
);

export const Default = Template.bind({});
Default.args = {
  isCarrot: true,
};
