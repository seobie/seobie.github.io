import { getTodos } from '../../recoil/selectors';
import { useRecoilValue } from 'recoil';
import React from 'react';
import TodoItem from '../TodoItem';

export default function TodoList() {
  const todos = useRecoilValue(getTodos);
  return (
    <ul>
      {todos.map(({ text }, index) => (
        <TodoItem key={index}>{text}</TodoItem>
      ))}
    </ul>
  );
}
