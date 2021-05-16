export interface ModalProps {
  topRightCloseButton?: {
    variant: 'circle' | 'toast';
    toastWithBackground?: boolean;
    click: (e: React.MouseEvent) => void;
  };
  bottomButtons: {
    buttonText: string;
    click: (e: React.MouseEvent) => void;
  }[];
  show: boolean;
  className?: string;
  backdropClick?: () => void;
  position?: 'top' | 'right' | 'bottom' | 'left';
  caret?: boolean;
  disabled?: boolean;
  borderless?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SNOWPACK = true;
