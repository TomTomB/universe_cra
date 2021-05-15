import { AnimatedBorderOverlay } from './AnimatedBorderOverlay';
import React from 'react';
import styled from 'styled-components';
import type { AnimatedBorderOverlayProps } from './AnimatedBorderOverlay.types';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Common/Effect/AnimatedBorderOverlay',
  component: AnimatedBorderOverlay,
} as Meta;

const StyledAnimatedBorderOverlay = styled(AnimatedBorderOverlay)`
  display: block;
  position: absolute;
  opacity: 0.01;
  transition: 300ms opacity linear;
  pointer-events: none;
`;

const HoverHelper = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  padding: 10px 20px;
  position: relative;
  display: inline-block;

  &:hover {
    ${StyledAnimatedBorderOverlay} {
      opacity: 1;
    }
  }
`;

const Template: Story<AnimatedBorderOverlayProps> = (args) => (
  <HoverHelper>
    Hover me
    <StyledAnimatedBorderOverlay {...args} />
  </HoverHelper>
);

export const Default = Template.bind({});
Default.args = {};
