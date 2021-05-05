export interface FramedSelectOptionProps {
  index: number;
  selected?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export interface StyledFramedSelectOptionProps {
  selected?: boolean;
  sortingActive?: boolean;
}
