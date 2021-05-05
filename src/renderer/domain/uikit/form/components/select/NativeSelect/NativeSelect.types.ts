import type { SelectOption } from '../select.types';
import type { UseFormRegister } from 'react-hook-form';

export interface NativeSelectProps {
  id: string;
  name: string;
  items: SelectOption[];
  disabled?: boolean;
  hidden?: boolean;
  register?: UseFormRegister<any>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
