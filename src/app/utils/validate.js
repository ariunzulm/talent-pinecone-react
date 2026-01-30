export const isEmpty = (value) => value === "";
export const isContainSpecialChars = (value) => !/^[a-zA-Z\s]+$/.test(value);

export const isEmptyObject = (object) => Object.keys(object).length === 0;
export const isValidEmail = (value) =>
  !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
export const isValidNumber = (value) => !/^[0-9]{7,8}$/.test(value);
