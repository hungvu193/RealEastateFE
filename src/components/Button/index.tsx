import React, { forwardRef } from 'react';
import { Button as AntdButton, ButtonProps } from 'antd';

const Button = forwardRef(
  ({ ...props }: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
    <AntdButton ref={ref} {...props} />
  ),
);

Button.displayName = 'Button';

export default Button;
