import * as E from './Label.styles';
import React, { FC } from 'react';
import classNames from 'classnames';
import type { LabelProps } from './Label.types';

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
