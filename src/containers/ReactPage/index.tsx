import Layout from '@theme/Layout';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Counter } from './components';

export default function ReactPage() {
  return (
    <RecoilRoot>
      <Layout>
        <h1>My React page</h1>
        <p>This is a React page</p>
        <Counter />
      </Layout>
    </RecoilRoot>
  );
}
