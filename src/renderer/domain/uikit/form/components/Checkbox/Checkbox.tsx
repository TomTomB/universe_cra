import * as E from './Checkbox.styles';
import React, { FC } from 'react';
import classNames from 'classnames';
import type * as T from './Checkbox.types';

export const Checkbox: FC<T.CheckboxProps> = ({
  id,
  label,
  name,
  className,
  disabled = false,
  value = false,
  register,
  onChange,
}) => {
  return (
    <E.CheckboxContainer
      className={classNames(
        {
          disabled,
        },
        className,
      )}
    >
      {register && (
        <E.CheckboxInput
          type="checkbox"
          id={id}
          disabled={disabled}
          {...register(name)}
        />
      )}
      {!register && (
        <E.CheckboxInput
          type="checkbox"
          id={id}
          name={name}
          disabled={disabled}
          checked={value}
          onChange={onChange}
        />
      )}
      <E.CheckboxSpan />
      <E.CheckboxLabel htmlFor={id}>{label}</E.CheckboxLabel>
    </E.CheckboxContainer>
  );
};
