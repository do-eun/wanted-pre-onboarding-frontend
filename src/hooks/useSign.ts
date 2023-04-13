import { useEffect, useState } from "react";

type TSignHook = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  boolean
];

export const useSign = (
  initialValue: string,
  vaildCheck: (str: string) => boolean
): TSignHook => {
  const [value, setValue] = useState(initialValue);
  const [vaild, setVaild] = useState(false);

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setVaild(vaildCheck(value));
  }, [value, vaildCheck]);

  return [value, handlechange, vaild];
};
