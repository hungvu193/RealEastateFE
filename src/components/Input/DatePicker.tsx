import React from 'react';
import { DatePicker as DatePickerInput, DatePickerProps } from 'antd';
import styles from './styles.module.scss';

type ExtraDateProps = {
  label?: string;
};

const AntdDatePicker = ({
  ...props
}: DatePickerProps & ExtraDateProps): React.ReactElement => (
  <>
    {props.label && <label>{props.label}</label>}
    <DatePickerInput
      autoComplete="chrome-off"
      inputReadOnly
      format={'DD/MM/YYYY'}
      allowClear={false}
      className={styles.ant_picker}
      {...props}
    />
  </>
);

export default AntdDatePicker;
