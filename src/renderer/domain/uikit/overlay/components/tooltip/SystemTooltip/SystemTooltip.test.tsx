import { SystemTooltip } from './SystemTooltip';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React, { useRef } from 'react';

describe('SystemTooltip', () => {
  const TooltipWrapper = () => {
    const triggerRef = useRef<HTMLButtonElement>(null);

    return (
      <>
        <button ref={triggerRef}>My button</button>
        <SystemTooltip triggerRef={triggerRef.current}>
          Test Tooltip
        </SystemTooltip>
      </>
    );
  };

  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <TooltipWrapper />
        </ThemeProvider>,
      ),
    );
  });
});
