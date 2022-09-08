import { IValidatorErrors } from "../store/slices/auth";

export const mapFromErrors = (errors: IValidatorErrors[] | null) => {
  const formattedErrors: Record<string, string> = {};

  errors?.forEach((error) => {
    formattedErrors[error.param] = error.msg;
  });

  return formattedErrors;
};
