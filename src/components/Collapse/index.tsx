import React from 'react';
import { Collapse as AntdCollapse } from 'antd';

import styles from './styles.module.scss';

const Collapse = (props: any): React.ReactElement => (
  <AntdCollapse className={styles.collapse} {...props} />
);

Collapse.displayName = 'Collapse';
Collapse.Panel = AntdCollapse.Panel;

export default Collapse;
