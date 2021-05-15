import { ChampionIcons } from '@universe/renderer/uikit/gamedata';
import { FilterFader } from './FilterFader';
import React from 'react';
import styled from 'styled-components';
import type { FilterFaderProps } from './FilterFader.types';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Common/FilterFader',
  component: FilterFader,
} as Meta;

const StyledFilterFader = styled(FilterFader)`
  --filter-fader-filter: grayscale(0.75);
  --filter-fader-opacity: 0.75;
`;

const Template: Story<FilterFaderProps> = (args) => (
  <StyledFilterFader {...args}>
    <img src={ChampionIcons.ahri} alt="Ahri Icon" />
  </StyledFilterFader>
);

export const Default = Template.bind({});
Default.args = {};
