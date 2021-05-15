import * as E from './Input.styles';
import React, { useRef, useState } from 'react';
import type { FC} from 'react';
// import { Tooltip, TooltipText } from '@uikit/components/tooltip';
import { FormField } from '../base';
import { springConfigHarsh } from '@universe/renderer/uikit/core';
import { useTransition } from 'react-spring';
import classNames from 'classnames';
import type { InputProps } from './Input.types';

export const Input: FC<InputProps> = ({
  id,
  label,
  name,
  placeholder,
  error,
  spellcheck,
  type = 'text',
  showError = true,
  disabled = false,
  register,
}) => {
  const triggerShowPasswordCheckboxRef = useRef<HTMLInputElement>(null);

  const [showPassword, setShowPassword] = useState(false);

  const transition = useTransition(error, {
    config: springConfigHarsh,
    from: { transform: 'translateY(-20px)', opacity: 0 },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
  });

  return (
    <FormField>
      <E.InputLabel htmlFor={id} isInvalid={!!error} disabled={disabled}>
        {label}
      </E.InputLabel>
      <E.FlatInput
        {...register?.(name)}
        id={id}
        spellCheck={spellcheck}
        aria-invalid={error ? 'true' : 'false'}
        className={classNames({
          'is-invalid': error,
          'is-password-field': type === 'password',
        })}
        placeholder={placeholder}
        type={showPassword ? 'text' : type}
        disabled={disabled}
      />
      {type === 'password' && (
        <>
          <E.TogglePasswordCheckbox
            type="checkbox"
            className={classNames({
              'is-shown': showPassword,
            })}
            onChange={(event) => setShowPassword(event.target.checked)}
            checked={showPassword}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            ref={triggerShowPasswordCheckboxRef}
          />

          {/* <Tooltip triggerRef={triggerShowPasswordCheckboxRef.current}>
            <TooltipText>
              {showPassword ? 'Hide password' : 'Show password'}
            </TooltipText>
          </Tooltip> */}
        </>
      )}
      {showError && (
        <E.ErrorContainer>
          {transition(
            (style, error) =>
              error && (
                <E.ErrorParagraph style={style} role="alert">
                  {error?.message}
                </E.ErrorParagraph>
              ),
          )}
        </E.ErrorContainer>
      )}
    </FormField>
  );
};
