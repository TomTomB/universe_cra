import { ChampionIcons } from '@universe/renderer/uikit/gamedata';
import { Thumbnail } from './Thumbnail';
import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { ThumbnailProps } from './Thumbnail.types';

export default {
  title: 'UiKit/Common/Thumbnail',
  component: Thumbnail,
} as Meta;

const Template: Story<ThumbnailProps> = (args) => (
  <Thumbnail {...args}>
    <img src={ChampionIcons.ahri} alt="Ahri" />
  </Thumbnail>
);

export const Default = Template.bind({});
Default.args = {};
