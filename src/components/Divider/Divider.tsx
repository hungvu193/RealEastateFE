import React from 'react';
import styles from './styles.module.scss';

interface DividerProps {
  fullWidth?: boolean;
}

const Divider = ({ fullWidth }: DividerProps): React.ReactElement => (
  <div
    className={[styles.divider, fullWidth ? styles.full_width : ''].join(' ')}
  />
);

export default Divider;
