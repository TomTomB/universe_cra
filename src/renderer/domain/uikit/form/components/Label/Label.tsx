import * as E from './Label.styles';
import React, { FC } from 'react';
import type { LabelProps } from './Label.types';
import classNames from 'classnames';

export const Label: FC<LabelProps> = ({
  htmlFor,
  children,
  isInvalid,
  disabled,
  id,
  onClick,
  className,
}) => {
  return (
    <E.Label
      id={id}
      onClick={onClick}
      htmlFor={htmlFor}
      className={classNames(className, {
        'is-invalid': isInvalid,
      })}
      data-disabled={disabled}
    >
      {children}
    </E.Label>
  );
};
