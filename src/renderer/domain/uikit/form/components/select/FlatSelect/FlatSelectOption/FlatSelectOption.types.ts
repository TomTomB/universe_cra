export interface StyledFlatSelectOptionProps {
  selected?: boolean;
}

export interface FlatSelectOptionProps {
  index: number;
  selected?: boolean;
  disabled?: boolean;
  onClick: () => void;
}
