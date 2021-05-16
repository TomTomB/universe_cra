import * as E from './SystemTooltip.styles';
import { springConfigHarsh, useCompare } from '@universe/renderer/uikit/core';
import { usePopperTooltip } from 'react-popper-tooltip';
import { useTransition } from 'react-spring';
import React, { useEffect } from 'react';
import type { FC } from 'react';
import type { SystemTooltipProps } from './SystemTooltip.types';

export const SystemTooltip: FC<SystemTooltipProps> = ({
  triggerRef,
  children,
  defaultVisible = false,
  placement = 'auto',
}) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
    update,
  } = usePopperTooltip({ placement, visible: defaultVisible });

  const transition = useTransition(visible, {
    config: springConfigHarsh,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const childrenHasChanged = useCompare(children?.toString() ?? '');

  useEffect(() => {
    if (!triggerRef) {
      return;
    }
    setTriggerRef(triggerRef);
  }, [triggerRef, setTriggerRef]);

  useEffect(() => {
    if (update && children && childrenHasChanged) {
      update();
    }
  }, [children, update, childrenHasChanged]);

  if (!triggerRef) {
    return <></>;
  }

  return (
    <>
      {transition(
        (style, show) =>
          show && (
            <E.StyledSystemTooltip
              ref={setTooltipRef}
              {...getTooltipProps({ style: style as any })}
            >
              <div {...getArrowProps({ className: 'tooltip-arrow' })} />
              {children}
            </E.StyledSystemTooltip>
          ),
      )}
    </>
  );
};
