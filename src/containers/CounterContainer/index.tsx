import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Counter } from './components';

export default function CounterContainer() {
  return (
    <RecoilRoot>
      <Layout>
        <Link to='/playground'>&larr; back</Link>
        <h1>Counter with Recoil</h1>
        <Counter />
      </Layout>
    </RecoilRoot>
  );
}
