import React from 'react';
import { ButtonProps } from 'antd';

import Button from './index';

import styles from './styles.module.scss';

const CustomButton = (props: ButtonProps): React.ReactElement => (
  <Button className={styles.custom_btn} {...props} />
);

export default CustomButton;
