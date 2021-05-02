import type { Direction } from '@universe/types/common';
import type { UseFormRegister } from 'react-hook-form';

export interface RangeProps {
  id: string;
  name: string;
  direction?: Direction;
  className?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  register?: UseFormRegister<any>;
  onChange?: (value: number) => void;
}
