import { selector } from 'recoil';
import { todoState } from './atoms';

export const getTodos = selector({
  key: 'getTodos',
  get: ({ get }) => get(todoState),
});
