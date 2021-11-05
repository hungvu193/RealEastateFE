import { Rule } from 'antd/lib/form';

const REGEX_EMAIL_FRONT = /(^[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*)$/;
const REGEX_EMAIL_BACK = /(^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+)$/;
const REGEX_PASSWORD = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;

export const emailValidator = (_: Rule, value: string): Promise<void> => {
  if (value && value.trim() !== '') {
    const chunks = value.split('@');

    if (chunks.length === 2) {
      if (
        REGEX_EMAIL_FRONT.test(chunks[0]) &&
        REGEX_EMAIL_BACK.test(chunks[1])
      ) {
        return Promise.resolve();
      }
    }
  }
  return Promise.reject("Incorrect 'Email' format");
};

export const passwordValidator = (_: Rule, value: string): Promise<void> => {
  if (value && value.trim() !== '' && REGEX_PASSWORD.test(value)) {
    return Promise.resolve();
  }
  return Promise.reject("Incorrect 'Password' format");
};

export const confirmPasswordValidator = (
  confirmPwd: string,
  pwd: string,
): Promise<void> => {
  if (confirmPwd && confirmPwd === pwd) {
    return Promise.resolve();
  }
  return Promise.reject("'Password' & 'Repeat Password' don't match");
};
