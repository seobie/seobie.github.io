import { atom } from 'recoil';

interface Todo {
  id: string;
  createdAt: string;
  text: string;
  isDone: boolean;
}

export const todoState = atom<Todo[]>({
  key: 'todoState',
  default: [],
});
