import * as E from './PrimaryMagicButton.styles';
import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import type {
  FC,
  PropsWithChildren} from 'react';
import type { PrimaryMagicButtonProps } from './PrimaryMagicButton.types';

export const PrimaryMagicButton: FC<
  PropsWithChildren<PrimaryMagicButtonProps>
> = ({ children, disabled, className }) => {
  const [intro, setIntro] = useState(false);

  const introTimeout = useRef(0);

  useEffect(() => {
    if (!disabled) {
      clearTimeout(introTimeout.current);
      setIntro(true);
    } else {
      setIntro(false);
      return;
    }

    introTimeout.current = window.setTimeout(() => {
      setIntro(false);
    }, 400);
  }, [disabled]);

  return (
    <E.MagicButton
      className={classNames(className, { intro })}
      disabled={disabled}
    >
      <E.Container>
        <E.FrameIdle />
        <E.FrameInteractive />
        <E.LeftRuneMagic />
        <E.RightRuneMagic />
        <E.RadialContainer>
          <E.RadialEffect />
        </E.RadialContainer>
        <E.Content>{children}</E.Content>
        <E.StyledAnimatedBorderOverlay speed={7500} />
      </E.Container>
    </E.MagicButton>
  );
};
