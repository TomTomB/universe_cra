import * as E from './Modal.styles';
import { PrimaryFlatButton } from '@universe/renderer/uikit/form';
import {
  springConfigHarsh,
  useClickOutside,
} from '@universe/renderer/uikit/core';
import { useTransition } from 'react-spring';
import React, { useRef } from 'react';
import classNames from 'classnames';
import type { FC } from 'react';
import type { ModalProps } from './Modal.types';

export const Modal: FC<ModalProps> = ({
  children,
  bottomButtons,
  show,
  className,
  backdropClick,
  position = 'bottom',
  disabled,
  borderless,
  topRightCloseButton,
  caret,
}) => {
  const transitionModal = useTransition(show, {
    config: springConfigHarsh,
    from: { opacity: 0, transform: 'scaleX(0.6) scaleY(1) translateY(100px)' },
    enter: { opacity: 1, transform: 'scaleX(1) scaleY(1) translateY(0)' },
    leave: { opacity: 0, transform: 'scaleX(1.2) scaleY(1.2) translateY(0)' },
  });

  const transitionBackdrop = useTransition(show, {
    config: springConfigHarsh,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(
    modalRef,
    () => {
      if (show) {
        backdropClick?.();
      }
    },
    true,
  );

  return (
    <>
      {transitionBackdrop(
        (tbStyle, tbVisible) =>
          tbVisible && (
            <E.ModalContainer style={tbStyle}>
              {transitionModal(
                (mStyles, mVisible) =>
                  mVisible && (
                    <E.StyledModal
                      style={mStyles}
                      className={classNames(
                        className,
                        position,
                        { caret },
                        { disabled },
                        { borderless },
                        { withButtons: bottomButtons.length },
                      )}
                      ref={modalRef}
                    >
                      <E.StyledModalSubBorder />

                      {children}

                      {bottomButtons.length && (
                        <E.ModalButtonGroup>
                          {bottomButtons.map((b) => (
                            <PrimaryFlatButton
                              type="button"
                              key={b.buttonText}
                              onClick={b.click}
                            >
                              {b.buttonText}
                            </PrimaryFlatButton>
                          ))}
                        </E.ModalButtonGroup>
                      )}

                      {topRightCloseButton && (
                        <>
                          {topRightCloseButton.variant === 'circle' && (
                            <E.ModalTopCloseContainer>
                              <E.ModalTopCloseButton
                                type="button"
                                label="Close"
                                onClick={topRightCloseButton.click}
                              />
                            </E.ModalTopCloseContainer>
                          )}
                          {topRightCloseButton.variant === 'toast' && (
                            <E.ToastCloseButton
                              type="button"
                              aria-label="Close"
                              withBackground={
                                topRightCloseButton.toastWithBackground
                              }
                              onClick={topRightCloseButton.click}
                            />
                          )}
                        </>
                      )}
                    </E.StyledModal>
                  ),
              )}
            </E.ModalContainer>
          ),
      )}
    </>
  );
};
