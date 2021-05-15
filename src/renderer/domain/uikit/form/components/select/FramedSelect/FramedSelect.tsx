import * as E from './FramedSelect.styles';
import { FormField } from '../../base';
import { FramedSelectOption } from './FramedSelectOption';
import { NativeSelect } from '../NativeSelect';
import { ScrollContainer } from '@universe/renderer/uikit/common';
import { springConfigHarsh } from '@universe/renderer/uikit/core';
import { useSelectBehavior } from '../useSelectBehavior';
import { useTransition } from 'react-spring';
import React, { FC } from 'react';
import type { FramedSelectProps } from './FramedSelect.types';

export const FramedSelect: FC<FramedSelectProps> = ({
  items,
  register,
  id,
  label,
  name,
  value,
  disabled,
  openUpward = false,
}) => {
  const {
    nativeSelectId,
    labelId,
    selectedOption,
    optionsContainerRef,
    customSelectRef,
    isOpen,
    setSelectedOption,
    setIsOpen,
    handleKeyDown,
    handleKeyUp,
  } = useSelectBehavior(items, name, id, value);

  const transition = useTransition(isOpen, {
    config: springConfigHarsh,
    from: { transform: 'scaleY(0)', opacity: 0 },
    enter: { opacity: 1, transform: 'scaleY(1)' },
    leave: { opacity: 0, transform: 'scaleY(0)' },
  });

  return (
    <FormField>
      <NativeSelect
        id={nativeSelectId}
        register={register}
        hidden
        items={items}
        name={name}
        disabled={disabled}
        onChange={(e) => {
          if (selectedOption !== e.target.value) {
            setSelectedOption(e.target.value);
          }
        }}
      />

      <E.SelectLabel
        id={labelId}
        htmlFor={id}
        isInvalid={false}
        disabled={disabled}
        onClick={() => document.getElementById(id)?.focus()}
      >
        {label}
      </E.SelectLabel>
      <E.Select
        tabIndex={disabled ? -1 : 0}
        active={isOpen}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        role="combobox"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-haspopup="true"
        aria-autocomplete="none"
        aria-labelledby={labelId}
        data-disabled={disabled}
        id={id}
        ref={customSelectRef}
      >
        {transition(
          (style, show) =>
            show && (
              <E.AnimatedOptionsContainer
                openUpward={openUpward}
                ref={optionsContainerRef}
                style={style}
              >
                <ScrollContainer>
                  <E.Options role="listbox">
                    {items.map(
                      (option, index) =>
                        option && (
                          <FramedSelectOption
                            index={index}
                            disabled={option.disabled}
                            key={option.label + option.value}
                            selected={selectedOption === option.value}
                            onClick={() => {
                              setSelectedOption(option.value);
                              setIsOpen(false);
                            }}
                          >
                            {option.label}
                          </FramedSelectOption>
                        ),
                    )}
                  </E.Options>
                </ScrollContainer>
              </E.AnimatedOptionsContainer>
            ),
        )}

        <E.CurrentContainer onClick={() => setIsOpen(!isOpen)}>
          <E.CurrentValue>
            {items.find((item) => item.value === selectedOption)?.label ||
              'Select'}
          </E.CurrentValue>
        </E.CurrentContainer>
      </E.Select>
    </FormField>
  );
};
