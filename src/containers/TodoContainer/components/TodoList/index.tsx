import React from 'react';
import { useRecoilValue } from 'recoil';
import { getTodos } from '../../recoil/selectors';

export default function TodoList() {
  const todos = useRecoilValue(getTodos);
  return (
    <ul>
      {todos.map(({ text }) => (
        <li>{text}</li>
      ))}
    </ul>
  );
}
