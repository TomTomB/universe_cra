import * as E from './PurchaseButton.styles';
import React from 'react';
import type { FC } from 'react';
import type { PurchaseButtonProps } from './PurchaseButton.types';

export const PurchaseButton: FC<PurchaseButtonProps> = ({
  children,
  type,
  className,
  disabled,
  onClick,
  currencyType,
}) => {
  return (
    <E.StyledPurchaseButton
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      <E.OuterContainer>
        <E.InnerContainer>
          <E.ButtonContainer>
            <E.OuterBorder />
            <E.BorderIdle />
            <E.BorderTransition />
            {currencyType === 'rp' && <E.ContentIconRp />}
            {currencyType === 'be' && <E.ContentIconBe />}
            <E.ContentValue>{children}</E.ContentValue>
          </E.ButtonContainer>
        </E.InnerContainer>
      </E.OuterContainer>
    </E.StyledPurchaseButton>
  );
};
