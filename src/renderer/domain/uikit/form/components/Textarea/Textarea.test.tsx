import { Textarea } from './Textarea';
import { ThemeProvider } from 'styled-components';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { theme } from '@universe/renderer/style';
import { useForm } from 'react-hook-form';
import React from 'react';

describe('Textarea', () => {
  it('should render', () => {
    const FormComponent = () => {
      const { register } = useForm();

      return (
        <Textarea
          id="abc123"
          label="Test Textarea"
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
