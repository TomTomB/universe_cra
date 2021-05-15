import * as E from './Textarea.styles';
import { FormField } from '../base';
import { springConfigHarsh } from '@universe/renderer/uikit/core';
import { useTransition } from 'react-spring';
import React from 'react';
import type { FC } from 'react';
import type { TextareaProps } from './Textarea.types';

export const Textarea: FC<TextareaProps> = ({
  id,
  label,
  name,
  placeholder,
  error,
  spellcheck,
  showError = true,
  disabled = false,
  register,
}) => {
  const transition = useTransition(error, {
    config: springConfigHarsh,
    from: { transform: 'translateY(-20px)', opacity: 0 },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
  });

  return (
    <FormField>
      <E.TextareaLabel htmlFor={id} isInvalid={!!error} disabled={disabled}>
        {label}
      </E.TextareaLabel>
      <E.StyledTextarea
        disabled={disabled}
        id={id}
        spellCheck={spellcheck}
        aria-invalid={error ? 'true' : 'false'}
        placeholder={placeholder}
        {...register?.(name)}
      />
      {showError && (
        <E.ErrorContainer>
          {transition(
            (style, error) =>
              error && (
                <E.ErrorParagraph style={style} role="alert">
                  {error.message}
                </E.ErrorParagraph>
              ),
          )}
        </E.ErrorContainer>
      )}
    </FormField>
  );
};
