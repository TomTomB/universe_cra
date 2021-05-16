import type { Rank } from '@universe/types/lcu';

export type LobbyBannerType = 'primary' | 'ally';

export interface LobbyBannerProps {
  rank: Rank;
  showPattern?: boolean;
  bannerType?: LobbyBannerType;
  playIntro?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SNOWPACK = true;
