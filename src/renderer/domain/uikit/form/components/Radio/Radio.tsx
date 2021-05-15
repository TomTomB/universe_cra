import * as E from './Radio.styles';
import React from 'react';
import type { FC } from 'react';
import type { RadioProps } from './Radio.types';

export const Radio: FC<RadioProps> = ({
  id,
  label,
  name,
  className,
  disabled = false,
  value,
  register,
  onChange,
}) => {
  return (
    <E.StyledRadioOption className={className}>
      {register && (
        <E.RadioInput
          type="radio"
          id={id}
          disabled={disabled}
          {...register(name)}
        />
      )}
      {!register && (
        <E.RadioInput
          type="radio"
          id={id}
          name={name}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
      )}
      <E.RadioSpan />
      <E.RadioLabel htmlFor={id} isInvalid={false}>
        {label}
      </E.RadioLabel>
    </E.StyledRadioOption>
  );
};
