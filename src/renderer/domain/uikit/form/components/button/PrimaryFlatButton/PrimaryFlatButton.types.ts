import type { ButtonProps } from '@universe/types/components';

export interface StyledPrimaryFlatButtonProps {
  external?: boolean;
  variant?: PrimaryFlatButtonVariant;
}

export type PrimaryFlatButtonVariant = 'primary' | 'purchase';

export interface PrimaryFlatButtonProps extends ButtonProps {
  variant?: PrimaryFlatButtonVariant;
  external?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SNOWPACK = true;
