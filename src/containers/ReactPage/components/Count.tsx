import React from 'react';
import { useRecoilValue } from 'recoil';
import { getCount } from '../recoil/selectors';

export default function Count() {
  const count = useRecoilValue(getCount);
  return <>{count}</>;
}
