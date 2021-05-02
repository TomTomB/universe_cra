import { Checkbox } from './Checkbox';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import { useForm } from 'react-hook-form';

describe('Checkbox', () => {
  it('should render', () => {
    const FormComponent = () => {
      const { register } = useForm();

      return (
        <Checkbox
          id="abc123"
          label="Test Checkbox"
          name="abc123"
          register={register}
        />
      );
    };

    expect(
      render(
        <ThemeProvider theme={theme}>
          <FormComponent />
        </ThemeProvider>,
      ),
    );
  });
});
