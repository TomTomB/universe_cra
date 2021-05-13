import styled, { css } from 'styled-components';
import borderArrowClick from './assets/images/border-arrow-click.png';
import borderArrowDisabled from './assets/images/border-arrow-disabled.png';
import borderArrowHover from './assets/images/border-arrow-hover.png';
import borderArrowUp from './assets/images/border-arrow-up.png';

export const ButtonStateBase = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  transition: 0.3s all ease;
  top: 2px;
  bottom: 2px;
`;

export const Default = styled(ButtonStateBase)`
  opacity: 1;
  background-image: url(${borderArrowUp});
`;

export const Click = styled(ButtonStateBase)`
  background-image: url(${borderArrowClick});
`;
export const Hover = styled(ButtonStateBase)`
  background-image: url(${borderArrowHover});
`;
export const Disabled = styled(ButtonStateBase)`
  background-image: url(${borderArrowDisabled});
`;

export const StyledArrowButton = styled.button<{ rotated?: boolean }>`
  display: block;
  height: 48px;
  width: 44px;
  background-color: transparent;
  border: 0;
  padding: 0;
  appearance: none;
  cursor: pointer;
  position: relative;

  ${({ rotated }) =>
    rotated &&
    css`
      transform: rotate(180deg);
    `};

  &:hover ${Hover} {
    opacity: 1;
  }

  &:active ${Click} {
    opacity: 1;
  }

  &:disabled {
    cursor: default;
    pointer-events: none;
    ${Disabled} {
      opacity: 1;
    }
  }
`;
