export const isEmpty = (value) => value === "";
export const isContainSpecialChars = (value) => !/^[a-zA-Z\s]+$/.test(value);

export const isEmptyObject = (object) => Object.keys(object).length === 0;
