import { useState, ChangeEvent } from "react";
import { AuthErrors } from "../enums/auth";

export default function useForm<T>(inputs: T) {
  const [values, setValues] = useState(inputs);

  const [errors, setErrors] = useState(inputs);

  const handleValidateOne = (value: string) => {
    const error = !values[value as keyof typeof values]
      ? { [value]: AuthErrors[value as keyof typeof AuthErrors] }
      : { [value]: "" };

    setErrors({
      ...errors,
      ...error,
    });
  };

  const handleValidate = (value?: string) => {
    if (value) {
      handleValidateOne(value);
      return;
    }

    const inputErrors = Object.fromEntries(
      Object.keys(values as {})
        .filter((value: string) => !values[value as keyof typeof values])
        .map((value: string) => [
          value,
          AuthErrors[value as keyof typeof AuthErrors],
        ])
    );

    setErrors(inputErrors as T);

    return Object.values(inputErrors).every((value: any) => value !== "");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return {
    values,
    handleInputChange,
    errors,
    handleValidate,
  };
}
