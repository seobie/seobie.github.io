import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function index() {
  return (
    <Layout>
      <ul>
        <li>
          <Link to='/playground/counter'>Counter</Link>
        </li>
        <li>
          <Link to='/playground/todo-list'>Todo List</Link>
        </li>
      </ul>
    </Layout>
  );
}
