export interface ChampionMasteryTooltipProps {
  championName: string;
  masteryPoints: number;
  masteryLevel: number;
  masteryProgress: number;
  masteryTitle: string;

  chestAcquired?: boolean;
  displayAsCore?: boolean;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SNOWPACK = true;
