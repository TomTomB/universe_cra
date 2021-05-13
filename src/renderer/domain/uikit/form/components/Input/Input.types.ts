import type { FieldError, UseFormRegister } from 'react-hook-form';

export interface InputProps {
  id: string;
  label: string;
  name: string;
  register: UseFormRegister<any>;
  type?: string;
  placeholder?: string;
  showError?: boolean;
  disabled?: boolean;
  error?: FieldError;
  spellcheck?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SNOWPACK = true;
