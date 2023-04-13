import { useState } from "react";

type TInputHook = [string, (e: React.ChangeEvent<HTMLInputElement>) => void];

export const useInput = (initailValue: string): TInputHook => {
  const [inputValue, setInputValue] = useState(initailValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return [inputValue, handleChange];
};
