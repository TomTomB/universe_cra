export interface LabelProps {
  htmlFor: string;
  isInvalid: boolean;
  disabled?: boolean;
  id?: string;
  onClick?: (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SNOWPACK = true;
