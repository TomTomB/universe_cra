import { ChampionIcons } from '@universe/renderer/uikit/gamedata';
import { ChampionMasteryBanner } from '../ChampionMasteryBanner';
import { ChampionThumbnail } from './ChampionThumbnail';
import { Thumbnail } from '@universe/renderer/uikit/common';
import React from 'react';
import type { ChampionThumbnailProps } from './ChampionThumbnail.types';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'UiKit/Champion/Thumbnail',
  component: ChampionThumbnail,
} as Meta;

const Template: Story<ChampionThumbnailProps> = (args) => (
  <div style={{ width: '68px' }}>
    <ChampionThumbnail {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  masteryBanner: <ChampionMasteryBanner level={7} />,
  thumbnail: (
    <Thumbnail>
      <img src={ChampionIcons.ahri} alt="Ahri" />
    </Thumbnail>
  ),
};
