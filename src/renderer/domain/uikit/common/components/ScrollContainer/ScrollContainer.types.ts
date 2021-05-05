import type { Direction } from '@universe/types/common';

export interface ScrollContainerProps {
  maskOverflow?: boolean;
  scrollDirection?: Direction;
  observeTopSelector?: string;
  observeBottomSelector?: string;
  observeLeftSelector?: string;
  observeRightSelector?: string;
}
