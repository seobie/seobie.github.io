import { useInput } from '../../../TodoContainer/hooks';
import { todoState } from '../../../TodoContainer/recoil/atoms';
import React, { FormEvent } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const Wrapper = styled.form`
  display: flex;
  align-items: center;
`;
export default function InputForm() {
  const { inputValue, setInputValue, onChange } = useInput('');
  const [todo, setTodo] = useRecoilState(todoState);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodo([
      {
        id: Date.now().toString(),
        createdAt: Date.now().toString(),
        isDone: false,
        text: inputValue,
      },
      ...todo,
    ]);
    setInputValue('');
  };
  return (
    <Wrapper onSubmit={onSubmit}>
      <input type='text' value={inputValue} onChange={onChange} />
      <button type='submit'>add</button>
    </Wrapper>
  );
}
