import { useState } from "react";
import { validation } from "../utils/validation";

export default function useChangeForm(formParams) {
  const [formState, setFormState] = useState(formParams);

  const onChangeFormHandler = (type) => (e) => {
    validation(type, e.target.value, setFormState);
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return [formState, onChangeFormHandler, setFormState];
}
