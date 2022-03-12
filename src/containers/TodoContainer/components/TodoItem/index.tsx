import { memo, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const Li = styled.li`
  display: flex;
`;
const TodoItem = memo(function TodoItem<FC>({ children }) {
  return (
    <Li>
      <input type='checkbox' />
      {children}
      <button type='button'>edit</button>
      <button type='button'>remove</button>
    </Li>
  );
});

export default TodoItem;
