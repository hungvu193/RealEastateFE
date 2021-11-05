import React from 'react';
import { Form as AntdForm, FormProps } from 'antd';
import styles from './styles.module.scss';

function Form({ children, ...props }: FormProps): React.ReactElement {
  return (
    <AntdForm
      autoComplete="chrome-off"
      className={styles.form_wrapper}
      {...props}
    >
      {children}
    </AntdForm>
  );
}

Form.useForm = AntdForm.useForm;
Form.Item = AntdForm.Item;

export default Form;
