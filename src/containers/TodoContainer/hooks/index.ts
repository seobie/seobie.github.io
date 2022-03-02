import { ChangeEvent, useState } from 'react';

export const useInput = (initialValue: string) => {
  const [inputValue, setInputValue] = useState<string>(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);
  return { inputValue, setInputValue, onChange };
};
