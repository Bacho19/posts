import { IValidatorErrors } from "../store/slices/auth";

export const mapFromErrors = (errors: IValidatorErrors[] | null) => {
  const formattedErrors: Record<string, string> = {};

  errors?.forEach((error) => {
    formattedErrors[error.param] = error.msg;
  });

  return formattedErrors;
};

export const getFormattedDate = (date: string) => {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.getMonth();
  const fullYear = newDate.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}.${formattedMonth}.${fullYear}`;
};
