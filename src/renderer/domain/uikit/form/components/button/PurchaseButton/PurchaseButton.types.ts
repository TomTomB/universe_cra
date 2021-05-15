import type { ButtonProps } from '@universe/types/components';
import type { Currency } from '@universe/types/lcu';

export interface PurchaseButtonProps extends ButtonProps {
  currencyType: Currency;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SNOWPACK = true;
