import { selector } from 'recoil';
import { counterState } from './atoms';

export const getCount = selector({
  key: 'getCount',
  get: ({ get }) => get(counterState),
});
