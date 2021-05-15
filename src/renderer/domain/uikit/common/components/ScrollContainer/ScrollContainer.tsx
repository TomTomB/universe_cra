import * as E from './ScrollContainer.styles';
import { generateId } from '@universe/core';
import React, { FC, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import type { ScrollContainerProps } from './ScrollContainer.types';

export const ScrollContainer: FC<ScrollContainerProps> = ({
  children,
  maskOverflow,
  scrollDirection = 'vertical',
  observeTopSelector,
  observeBottomSelector,
  observeLeftSelector,
  observeRightSelector,
}) => {
  const scrollContainerId = useMemo(() => {
    return generateId();
  }, []);
  const [scrolledTop, setScrolledTop] = useState(false);
  const [scrolledBottom, setScrolledBottom] = useState(false);
  const [scrolledLeft, setScrolledLeft] = useState(false);
  const [scrolledRight, setScrolledRight] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const targetTop = document.querySelector(
      `#${scrollContainerId} ${observeTopSelector}`,
    );
    const targetBottom = document.querySelector(
      `#${scrollContainerId} ${observeBottomSelector}`,
    );

    const targetLeft = document.querySelector(
      `#${scrollContainerId} ${observeLeftSelector}`,
    );
    const targetRight = document.querySelector(
      `#${scrollContainerId} ${observeRightSelector}`,
    );

    const root = document.querySelector(`#${scrollContainerId}`);

    if (maskOverflow) {
      const handleIntersect: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting, target } = entry;

          if (target === targetTop) {
            setScrolledTop(isIntersecting);
          }
          if (target === targetBottom) {
            setScrolledBottom(isIntersecting);
          }
          if (target === targetLeft) {
            setScrolledLeft(isIntersecting);
          }
          if (target === targetRight) {
            setScrolledRight(isIntersecting);
          }
        });
      };

      observer = new IntersectionObserver(handleIntersect, {
        threshold: [1],
        root,
      });

      if (targetTop && targetBottom) {
        observer.observe(targetTop);
        observer.observe(targetBottom);
      }
      if (targetLeft && targetRight) {
        observer.observe(targetLeft);
        observer.observe(targetRight);
      }
    }
    return () => {
      if (targetTop && targetBottom) {
        observer?.unobserve(targetTop);
        observer?.unobserve(targetBottom);
      }
      if (targetLeft && targetRight) {
        observer?.unobserve(targetLeft);
        observer?.unobserve(targetRight);
      }
    };
  }, [
    maskOverflow,
    scrollContainerId,
    observeTopSelector,
    observeBottomSelector,
    observeLeftSelector,
    observeRightSelector,
    scrollDirection,
  ]);

  return (
    <E.StyledScrollContainer
      className={classNames(scrollDirection, {
        'with-overflow-masks': maskOverflow,
      })}
      id={scrollContainerId}
      data-scrolled-top={scrolledTop}
      data-scrolled-bottom={scrolledBottom}
      data-scrolled-left={scrolledLeft}
      data-scrolled-right={scrolledRight}
    >
      <E.InnerScrollContainer>{children}</E.InnerScrollContainer>
    </E.StyledScrollContainer>
  );
};
