import { ChampionIcons } from '@universe/renderer/uikit/gamedata';
import { FramedIcon } from './FramedIcon';
import React from 'react';
import type { FramedIconProps } from './FramedIcon.types';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Common/FramedIcon',
  component: FramedIcon,
} as Meta;

const Template: Story<FramedIconProps> = (args) => (
  <div style={{ width: 100, height: 100 }}>
    <FramedIcon {...args}>
      <img src={ChampionIcons.ahri} alt="Ahri Icon" />
    </FramedIcon>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
