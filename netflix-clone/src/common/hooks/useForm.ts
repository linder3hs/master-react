import { useState, ChangeEvent } from "react";

export default function useForm<T>(inputs: T) {
  const [values, setValues] = useState(inputs);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return {
    values,
    handleInputChange,
  };
}
