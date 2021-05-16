import * as E from './FlyoutFrame.styles';
import { springConfigHarsh } from '@universe/renderer/uikit/core';
import { useTransition } from 'react-spring';
import React from 'react';
import classNames from 'classnames';
import type { FC } from 'react';
import type { FlyoutFrameProps } from './FlyoutFrame.types';

export const FlyoutFrame: FC<FlyoutFrameProps> = ({
  className,
  children,
  showCloseButton,
  closeButtonClick,
  animated,
  show,
  position = 'bottom',
}) => {
  const isTopOrBottom = position === 'top' || position === 'bottom';

  const transitionsBorder = useTransition(show, {
    config: springConfigHarsh,
    from: {
      transform: animated ? `scale${isTopOrBottom ? 'X' : 'Y'}(0.5)` : 'none',
    },
    enter: {
      transform: animated ? `scale${isTopOrBottom ? 'X' : 'Y'}(1)` : 'none',
    },
    leave: {
      transform: animated ? `scale${isTopOrBottom ? 'X' : 'Y'}(0.5)` : 'none',
    },
  });

  const transitionBase = useTransition(show, {
    config: springConfigHarsh,
    from: {
      opacity: animated ? 0 : 1,
    },
    enter: {
      opacity: animated ? 1 : 1,
    },
    leave: {
      opacity: animated ? 0 : 1,
    },
  });

  const transitionFrameInner = useTransition(show, {
    config: springConfigHarsh,
    from: {
      WebkitMaskSize: animated
        ? isTopOrBottom
          ? '50% 100%'
          : '100% 50%'
        : '100% 100%',
    },
    enter: {
      WebkitMaskSize: '100% 100%',
    },
    leave: {
      WebkitMaskSize: animated
        ? isTopOrBottom
          ? '50% 100%'
          : '100% 50%'
        : '100% 100%',
    },
  });

  return (
    <>
      {transitionBase(
        (styleBase, showBase) =>
          showBase && (
            <E.StyledFlyoutFrame
              style={{
                opacity: styleBase.opacity?.to({
                  range: [0, 0.25, 1],
                  output: [0, 0.75, 1],
                }),
              }}
              className={classNames(
                className,
                position,
                { animated },
                { show },
              )}
            >
              {transitionsBorder(
                (style, show) => show && <E.Border style={style} />,
              )}
              {transitionsBorder(
                (style, show) => show && <E.SubBorder style={style} />,
              )}
              <E.Caret />
              {transitionFrameInner(
                (style, show) =>
                  show && (
                    <E.FlyoutFrameInner style={style}>
                      {children}
                    </E.FlyoutFrameInner>
                  ),
              )}
              {showCloseButton && !animated && (
                <E.CloseButtonContainer>
                  <E.StyledCloseButton
                    label="Close"
                    type="button"
                    onClick={closeButtonClick}
                  />
                </E.CloseButtonContainer>
              )}
            </E.StyledFlyoutFrame>
          ),
      )}
    </>
  );
};
