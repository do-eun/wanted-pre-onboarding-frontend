import { useState } from "react";

export const useInput = (
  initailValue: any,
  handleVaild: (inputValue: string) => void
) => {
  const [inputValue, setInputValue] = useState(initailValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAction = () => {
    setInputValue("");
    handleVaild(inputValue);
    return true;
  };

  return [inputValue, handleChange, handleAction];
};
