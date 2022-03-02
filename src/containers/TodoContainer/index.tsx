import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { TodoList, InputForm } from './components';

export default function TodoContainer() {
  return (
    <RecoilRoot>
      <Layout>
        <Link to='/playground'>&larr; back</Link>
        <h1>Todo-list with Recoil</h1>
        <InputForm />
        <TodoList />
      </Layout>
    </RecoilRoot>
  );
}
