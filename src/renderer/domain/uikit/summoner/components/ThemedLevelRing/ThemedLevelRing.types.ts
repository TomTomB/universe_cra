import type { RadialProgressTypes } from '@universe/renderer/uikit/common';

export type RingProps = React.FC<
  RadialProgressTypes.RadialProgressProps & {
    ringTheme?: number;
    ringType: ThemedLevelRingType;
  }
>;

export type ThemedLevelRingType =
  | 'progress'
  | 'solid'
  | 'social'
  | 'simplified';

export interface ThemedLevelRingProps {
  ringType: ThemedLevelRingType;
  progress?: number;
  className?: string;
  summonerLevel: number;
}
