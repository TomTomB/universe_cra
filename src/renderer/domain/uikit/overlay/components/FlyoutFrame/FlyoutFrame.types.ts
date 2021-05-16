export interface FlyoutFrameProps {
  className?: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  closeButtonClick?: (e: React.MouseEvent) => void;
  showCloseButton?: boolean;
  animated?: boolean;
  show?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SNOWPACK = true;
