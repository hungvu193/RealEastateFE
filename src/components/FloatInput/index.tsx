import { InputProps } from 'antd';
import React, { useState } from 'react';
import Input from '../Input';

import styles from './styles.module.scss';

interface FloatInputProps {
  inputProps: InputProps;
  inputId: string;
  label: string;
  type?: string;
  onChange?: Function;
}

const InputType = {
  Text: Input,
  Password: Input.Password,
};

const FloatInput = ({
  inputProps,
  inputId,
  label,
  type = 'Text',
  onChange = () => undefined,
}: FloatInputProps): React.ReactElement => {
  const { value = '' } = inputProps;
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useState(value);

  const InputElement = InputType[type];

  const focusClass =
    focus || input ? `${styles.labelShrink} ${styles.labelFocused}` : '';

  const onChangeCallback = (e) => {
    setInput(e.target.value);
    onChange(e);
  };

  return (
    <div
      onFocus={() => {
        setFocus(true);
      }}
      onBlur={() => {
        setFocus(false);
      }}
    >
      <div className={styles.wrapper}>
        <InputElement
          {...inputProps}
          id={inputId}
          onChange={onChangeCallback}
        />
        ​
        <fieldset
          className={`${styles.fieldset} ${
            focusClass ? styles.fieldsetFocus : ''
          }`}
        >
          <legend
            className={`${styles.legend} ${
              focusClass ? styles.legendFocus : ''
            }`}
          >
            <span>{label}</span>
          </legend>
        </fieldset>
      </div>
      <label
        htmlFor={inputId}
        className={`${styles.label} ${styles.labelAnimated} ${styles.labelOutlined} ${focusClass}`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatInput;
