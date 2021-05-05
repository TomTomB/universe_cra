import * as E from './FlatSelectOptionGroup.styles';
import React, { FC } from 'react';
import type { FlatSelectOptionGroupProps } from './FlatSelectOptionGroup.types';

export const FlatSelectOptionGroup: FC<FlatSelectOptionGroupProps> = ({
  children,
  name,
}) => {
  return (
    <E.FlatSelectOptionGroupContainer>
      <E.StyledFlatSelectOptionGroup>
        <E.OptionGroupHeaderText> {name} </E.OptionGroupHeaderText>
      </E.StyledFlatSelectOptionGroup>
      {children}
    </E.FlatSelectOptionGroupContainer>
  );
};
