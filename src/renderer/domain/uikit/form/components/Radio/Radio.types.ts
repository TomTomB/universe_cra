import type { UseFormRegister } from 'react-hook-form';

export interface RadioProps {
  id: string;
  label: string;
  name: string;
  disabled?: boolean;
  className?: string;
  value?: string | number;
  register?: UseFormRegister<any>;
  onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SNOWPACK = true;
