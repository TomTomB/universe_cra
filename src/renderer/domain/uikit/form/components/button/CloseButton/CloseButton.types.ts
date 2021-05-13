import type { ButtonProps } from '@universe/types/components';

export interface StyledCloseButtonProps {
  btnStyle?: CloseButtonStyle;
}

export type CloseButtonStyle =
  | 'arrow'
  | 'arrowLeft'
  | 'refresh'
  | 'cog'
  | 'edit'
  | 'plus'
  | 'delete'
  | 'next'
  | 'compare'
  | 'back'
  | 'add'
  | 'duplicate'
  | 'clear'
  | 'export'
  | 'import';

export interface CloseButtonProps extends ButtonProps {
  btnStyle?: CloseButtonStyle;
  label?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SNOWPACK = true;
