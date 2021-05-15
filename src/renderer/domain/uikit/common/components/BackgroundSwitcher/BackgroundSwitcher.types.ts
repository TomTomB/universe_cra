export interface BackgroundSwitcherItem {
  src: string;
  alt: string;
}

export interface BackgroundSwitcherProps {
  items: BackgroundSwitcherItem[];
  currentIndex: number;
  className?: string;
  switchAnimation?: 'pop-in' | 'fade' | 'small-pop' | 'pop-in-fade';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SNOWPACK = true;
