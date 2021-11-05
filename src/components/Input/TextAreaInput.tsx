import React from 'react';
import { Input as AntdInput } from 'antd';
import styles from './styles.module.scss';
import { TextAreaProps } from 'antd/lib/input';

type TextAreaExtraProps = {
  label?: string;
};

const { TextArea } = AntdInput;

const TextAreaInput = ({
  ...props
}: TextAreaProps & TextAreaExtraProps): React.ReactElement => (
  <>
    {props.label && <label>{props.label}</label>}
    <TextArea
      rows={5}
      autoComplete="chrome-off"
      className={styles.input}
      {...props}
    />
  </>
);

TextAreaInput.Password = AntdInput.Password;
TextAreaInput.displayName = 'TextArea';

export default TextAreaInput;
