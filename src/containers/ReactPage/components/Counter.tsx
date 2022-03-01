import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { counterState } from '../recoil/atoms';
import Count from './Count';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div:first-child {
    display: flex;
    align-items: center;
  }
`;

export default function Counter() {
  const setCount = useSetRecoilState(counterState);
  let timer: NodeJS.Timer = null;
  const onDecrement = () => setCount((prev) => prev - 1);
  const onIncrement = () => setCount((prev) => prev + 1);
  return (
    <Wrapper>
      <div>
        <button onClick={onDecrement}>-</button>
        <div>
          Count: <Count />
        </div>
        <button onClick={onIncrement}>+</button>
      </div>
      <div>
        <button
          onClick={() => (timer = setInterval(() => onIncrement(), 1000))}
        >
          auto-increment start
        </button>
        <button onClick={() => clearInterval(timer)}>
          auto-increment stop
        </button>
      </div>
    </Wrapper>
  );
}
