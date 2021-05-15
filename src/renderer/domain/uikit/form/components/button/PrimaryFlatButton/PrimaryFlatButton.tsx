import * as E from './PrimaryFlatButton.styles';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import type { FC} from 'react';
import type { PrimaryFlatButtonProps } from './PrimaryFlatButton.types';

export const PrimaryFlatButton: FC<PrimaryFlatButtonProps> = ({
  type,
  children,
  className,
  disabled,
  onClick,
  variant,
  external,
}) => {
  const [showClickAnim, setShowClickAnim] = useState(false);

  useEffect(() => {
    if (!showClickAnim) {
      return;
    }

    const t = window.setTimeout(() => {
      setShowClickAnim(false);
    }, 400);

    return () => {
      window.clearTimeout(t);
    };
  }, [showClickAnim]);

  return (
    <E.StyledPrimaryFlatButton
      disabled={disabled}
      type={type}
      className={classNames(className, { click: showClickAnim })}
      variant={variant}
      external={external}
      onClick={(e) => {
        setShowClickAnim(true);
        onClick?.(e);
      }}
    >
      <E.Flare />
      <E.Glow />
      <E.Bg />
      <E.BorderIdle />
      <E.BorderTransition />
      <E.SheenWrapper>
        <E.Sheen />
      </E.SheenWrapper>
      <E.ContentWrapper> {children} </E.ContentWrapper>
    </E.StyledPrimaryFlatButton>
  );
};
