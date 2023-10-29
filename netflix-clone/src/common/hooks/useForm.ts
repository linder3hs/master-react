import { useState, ChangeEvent } from "react";
import { AuthErrors } from "../enums/auth";

export default function useForm<T>(inputs: T) {
  const [values, setValues] = useState(inputs);

  const [errors, setErrors] = useState(inputs);

  const handleValidate = () => {
    const errors = Object.fromEntries(
      Object.keys(values as {})
        .filter((value: string) => !values[value as keyof typeof values])
        .map((value: string) => [
          value,
          AuthErrors[value as keyof typeof AuthErrors],
        ])
    );
    setErrors(errors as T);
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
