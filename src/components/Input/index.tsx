import React from 'react';
import { Input as AntdInput, InputProps } from 'antd';
import styles from './styles.module.scss';

type ExtraProps = {
  label?: string;
};

const Input = ({ ...props }: InputProps & ExtraProps): React.ReactElement => (
  <>
    {props.label && <label>{props.label}</label>}
    <AntdInput autoComplete="chrome-off" className={styles.input} {...props} />
  </>
);

Input.Password = AntdInput.Password;
Input.displayName = 'Input';

export default Input;
