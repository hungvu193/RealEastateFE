import { notification } from 'antd';
import { ArgsProps } from 'antd/lib/notification';

export const SUCCESS_TYPE = 'success';
export const INFO_TYPE = 'info';
export const WARNING_TYPE = 'warning';
export const ERROR_TYPE = 'error';

export const Messages = {
  somethingWentWrong: 'Something went wrong, please try again shortly.',
  registeredSuccessfully: 'Successfully registered!',
  invalidFields: 'Please ensure that all fields are valid.',
  passwordResetSuccessfully: 'Password was successfully reset.',
};

const typeMapper = {
  [SUCCESS_TYPE]: 'Success',
  [INFO_TYPE]: 'Info',
  [WARNING_TYPE]: 'Warning',
  [ERROR_TYPE]: 'Error',
};

export function showNotification({
  type = INFO_TYPE,
  message: content = '',
  top = 70,
  ...options
}: ArgsProps): void {
  return notification[type]({
    message: typeMapper[type],
    description: content,
    duration: 3,
    top,
    ...options,
  });
}

export default showNotification;
