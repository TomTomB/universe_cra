import * as E from './NativeSelect.styles';
import React, { FC } from 'react';
import type { NativeSelectProps } from './NativeSelect.types';

export const NativeSelect: FC<NativeSelectProps> = ({
  id,
  items,
  name,
  register,
  onChange,
  hidden,
  disabled,
}) => {
  return (
    <E.StyledNativeSelect
      hidden={hidden}
      aria-hidden={hidden}
      id={id}
      disabled={disabled}
      onChange={onChange}
      {...register?.(name)}
    >
      {items.map(
        (option) =>
          option && (
            <option
              key={option.label + option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ),
      )}
    </E.StyledNativeSelect>
  );
};
