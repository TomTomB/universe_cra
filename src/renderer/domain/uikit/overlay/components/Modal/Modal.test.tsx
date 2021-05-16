import { Modal } from './Modal';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import React from 'react';

describe('Modal', () => {
  it('should render', () => {
    expect(
      render(
        <ThemeProvider theme={theme}>
          <Modal bottomButtons={[]} show>
            <p>Modal Content</p>
          </Modal>
        </ThemeProvider>,
      ),
    );
  });
});
