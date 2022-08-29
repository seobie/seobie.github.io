---
slug: 'what-and-why-react-query'
title: React Query 감칠맛 나게 찍먹하기
authors: seob
tags: ['react-query']
---

react query가 무엇이고 왜 핫한지 알아봅니다.

<!--truncate-->

## react query? 🤷🏻‍♂️

리액트 쿼리는 [TanStack](https://github.com/orgs/TanStack/people)이 만든 오픈소스 라이브러리입니다.

TanStack은 React query를 이렇게 소개합니다.

### Declarative & Automatic

> 손으로 직접 데이터 페칭 로직을 짜는건 이제 끝났습니다. TanStack Query에게 어디서 데이터를 가져오고 이 데이터가 얼마나 최신 상태어야 하는지 알려주면 나머지는 자동입니다. TanStack Query는 캐싱, 백그라운드 업데이트 및 오래된 데이터를 아무 설정 없이 처리합니다.

### Simple & Familiar

> promise 또는 async/await를 사용하는 방법을 알고 있다면 이미 TanStack Query를 사용하는 방법을 알고 있는 것입니다. 관리할 전역 상태, 리듀서, 정규화 시스템 또는 이해해야 할 무거운 구성이 없습니다. 간단히 데이터를 받아오는(또는 오류를 발생시키는) 함수를 전달하기만 하면 됩니다.

### Extensible

> TanStack Query는 모든 use-case에 맞도록 노브와 옵션을 사용하여 각 옵저버 인스턴스 까지 설정 가능합니다. 전용 devtools, 무한 로드 API 및 데이터 업데이트를 쉽게 해주는 일급 mutation 도구와 함께 제공됩니다. 하지만 모든 것이 미리 세팅되어 있으므로 걱정하지 마세요!

## Motivation

기본적으로 React는 컴포넌트에서 데이터를 페칭하거나 업데이트하는 명확한 방법이 없으므로 개발자가 직접 자신반의 방식의 데이터페칭을 구현하게 됩니다. 이는 일반적으로 리액트 훅을 사용하여 컴포넌트 기반 상태와 효과를 결합하거나 보다 범용적인 상태 관리 라이브러리를 사용하여 앱 전체에 비동기 데이터를 저장하고 제공하는 것을 의미합니다.

대부분의 기존 상태 관리 라이브러리는 클라이언트 상태 작업에 적합하지만 비동기 또는 서버 상태 작업에는 그다지 적합하지 않습니다. 서버 상태가 완전히 다르기 때문입니다.

- 서버 상태는 사용자가 제어하거나 소유하지 않는 위치에서 원격으로 유지됩니다.
- 서버 상태를 가져오고 업데이트하려면 비동기 API가 필요합니다.
- 서버 상태는 공유 소유권을 의미하며 다른 사용자가 모르게 변경할 수 있습니다.
- 주의하지 않으면 응용프로그램에서 서버 상태가 "오래된" 상태가 될 수 있습니다.

일단 서버 상태의 특성에 대해 이해하고 나면, 더 많은 챌린지가 생기게 됩니다.

- 캐싱...하기 (아마 프로그래밍에서 가장 하기 힘든 것)
- 동일한 데이터에 대한 여러 요청을 한번만 하도록 중복 제거 하기
- 백그라운드에서 "오래된" 데이터 업데이트하기
- 데이터가 "오래된" 시점을 알기
- 업데이트를 데이터에 최대한 빠르게 반영하기
- 페이징과 레이지 로딩 같은 성능 최적화 하기
- 메모리와 서버 상태의 가비지 콜렉션 관리하기
- 구조 공유로 쿼리 결과 메모하기(Memoizing)

혹시 만약 위 리스트에게 압도당하지 않았다면 당신은 아마도 이런 서버 상태 문제를 이미 해결했고 상받을만 할 사람 일겁니다. 하지만, 만약 여러분이 대부분의 사람들과 같다면, 여러분은 아직 이러한 도전들의 전부 또는 대부분을 해결하지 못했고 우리는 단지 수박 겉핥기만 하고 있을 뿐입니다!

리액트 쿼리는

- 복잡한 코드라인을 간단한 리액트 쿼리 로직으로 줄여서 이해하기 쉽게 합니다.
- 유지보수가 더 용이해지게 하여 새로운 기능을 구현할 때 데이터 소스에 새로운 서버 상태를 연결하는 것에 대한 걱정을 줄여줍니다.
- 애플리케이션이 이전보다 더 빠르고 신속하게 응답할 수 있도록 함으로써 최종 사용자에게 직접적인 영향을 미칩니다.
- 잠재적으로 대역폭을 절약하고 메모리 성능을 향상시키는 데 도움이 됩니다.

소개는 이쯤에서 마치고 설치하고 직접 코드를 작성해봅시다.

## 설치

### NPM

```bash
$ npm i @tanstack/react-query @tanstack/react-query-devtools
# or
$ yarn add @tanstack/react-query @tanstack/react-query-devtools
```

### CDN

```html
<script src="https://unpkg.com/@tanstack/react-query@4/build/umd/index.production.js"></script>
```

모듈 번들러나 패키지 매니저를 사용하지 않는다면 HTML파일 마래쪽에 `<script>` 태그를 넣어줍니다. 태그를 추가하면 `window.ReactQuery` 객체에 접근할 수 있게 됩니다.

:::info
v3는 `react-query`였지만 v4부터 `@tanstack/react-query`로 바뀌었습니다.<br />
리액트 쿼리는 `React v16.8+`, `ReactDom`, `React Native`를 지원합니다.
:::

### 브라우저 최소 요구사항

리액트쿼리는 모던 브라우저에 최적화 되어 있습니다. 아래의 브라우저 버전에 호환됩니다. 만약 더 오래된 브라우저에 지원되길 원한다면 환경에 따라 폴리필을 추가하거나 `node_modules`를 직접 트랜스파일 해야할 수도 있습니다.

```text
Chrome >= 73
Firefox >= 78
Edge >= 79
Safari >= 12.0
iOS >= 12.0
opera >= 53
```

## 초기 설정

### QueryClient

```ts title="src/store/queryClient.ts"
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
```

적당한 곳에 `queryClient`를 만들어줍니다. 이름이 꼭 `queryClient`일 필요는 없습니다. 저는 `src/store/queryClient.ts` 이 경로에 만들어봤습니다.

### index.tsx

다음은 `index.ts` 입니다.<br />
`QueryClientProvider`와 `ReactQueryDevtools` 를 추가합니다.

```tsx title="src/index.tsx"
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { queryClient } from './store';

const container = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

const renderApp = () => {
  root.render(
    <StrictMode>
      // highlight-next-line
      <QueryClientProvider client={queryClient}>
        <App />
        // highlight-start
        <ReactQueryDevtools
          initialIsOpen={process.env.NODE_ENV === 'development'}
        />
      </QueryClientProvider>
      // highlight-end
    </StrictMode>
  );
};

renderApp();
```

이제 리액트 쿼리를 사용할 준비는 모두 끝났습니다. 간단하죠?

## Query의 상태

![image](https://velog.velcdn.com/images%2Fjkl1545%2Fpost%2F89cf1f23-57f4-4772-a06d-71cdcbb54bde%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-01-27%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.25.48.png)

- fresh : 새롭게 추가되었거나 만료되지 않은 쿼리 (컴포넌트가 마운트, 업데이트 등 리렌더가 일어나도 데이터를 새로 요청하지 않습니다.)
- fetching : 받아오는 중인 쿼리
- stale : 만료된 쿼리 (fresh의 반대입니다. 컴포넌트가 마운트, 업데이트 등 리렌더가 일어나면 데이터를 새로 요청합니다.)
- inactive : 비활성화된 쿼리 (특정 시간이 지나면 가비지 컬렉터에 의해 제거됩니다.)

## 기본 사용법

### 요청(GET)에 사용하는 useQuery

```ts
const requestData = useQuery(쿼리 키, 쿼리 함수, 옵션);
```

- useQuery의 첫번째 인자는 쿼리 키이고 문자열로 이루어진 배열이 가장 기본 형태입니다.(`['쿼리 키']`) 쿼리는 서버에서 데이터를 가져오기 위해 모든 Promise 기반 메서드(GET 및 POST 메서드 포함) 에 대해 사용이 가능합니다. (3버전에서는 문자열도 사용이 가능하지만 4버전부터는 배열이어야만 합니다.)
- 두번째 인자는 Promise를 리턴하는 쿼리(api 요청) 함수입니다.
- 세번째 인자는 useQuery의 기능을 설정하는 옵션입니다.

:::caution
쿼리키가 다르면 같은 api를 호출하더라도 캐싱을 별도로 관리합니다.
:::

```ts
interface QueryObserverBaseResult<TData = unknown, TError = unknown> {
  data: TData | undefined;
  dataUpdatedAt: number;
  error: TError | null;
  errorUpdatedAt: number;
  failureCount: number;
  errorUpdateCount: number;
  isError: boolean;
  isFetched: boolean;
  isFetchedAfterMount: boolean;
  isFetching: boolean;
  isLoading: boolean;
  isLoadingError: boolean;
  isPaused: boolean;
  isPlaceholderData: boolean;
  isPreviousData: boolean;
  isRefetchError: boolean;
  isRefetching: boolean;
  isStale: boolean;
  isSuccess: boolean;
  refetch: <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>
  ) => Promise<QueryObserverResult<TData, TError>>;
  remove: () => void;
  status: QueryStatus;
  fetchStatus: FetchStatus;
}
```

Query가 리턴하는 객체는 상황에 따라 다양하지만 기본적이고 가장 많이 사용하는 것들만 살펴보겠습니다.

- data : 서버 요청에 대한 응답 데이터
- isLoading : 캐시가 없는 상태에서의 데이터 요청 중인 상태 (true / false)
- isFetching : 캐시의 유무 상관없이 데이터 요청 중인 상태 (true / false)
- isError : 서버 요청 실패에 대한 상태 (true / false)
- error : 서버 요청 실패 (object)

```ts
const { data, isLoading, isFetching, isError, error } = useQuery(쿼리 키, 쿼리 함수, 옵션);
```

이렇게 구조분해할당하여 사용할 수도 있습니다.

#### 옵션

옵션에서는 다양한 기능을 제어할 수 있습니다.

```json
{
  cacheTime,
  enabled,
  networkMode,
  initialData,
  initialDataUpdatedAt,
  isDataEqual,
  keepPreviousData,
  meta,
  notifyOnChangeProps,
  onError,
  onSettled,
  onSuccess,
  placeholderData,
  queryKeyHashFn,
  refetchInterval,
  refetchIntervalInBackground,
  refetchOnMount,
  refetchOnReconnect,
  refetchOnWindowFocus,
  retry,
  retryOnMount,
  retryDelay,
  select,
  staleTime,
  structuralSharing,
  suspense,
  useErrorBoundary,
}
```

- cacheTime : 언마운트된 후 어느 시점까지 메모리에 데이터를 저장하여 캐싱할 것인지를 결정
  - 기본값은 5 _ 60 _ 1000 (5 분) 이며 SSR에서는 `Infinity` 이다.
  - 사용되지 않거나 비활성화된 캐시 데이터가 메모리에 남아있는 밀리세컨즈단위의 시간이다. 이 시간 이후에도 쿼리의 캐시가 사용되지 않거나 비활성화상태면 그 캐시데이터는 가비지 콜렉트된다. 서로 다른 캐시 타임이 주어지면 가장 긴 시간이 사용된다.
  - `Infinity`로 설정하면 가비지 콜렉션을 비활성화한다.
- staleTime : 쿼리가 fresh 상태에서 stale 상태로 전환되는 시간
  - 기본값은 0이다.
  - fresh 상태에서는 데이터요청을 보내지 않으므로 특정 시간동안 fresh한 데이터가 보장이 된다면 특정 시간으로 설정하여 API호출을 줄일 수 있다.
  - `Infinity`로 설정하면 fresh한 상태를 유지한다.
- refetchOnMount : 컴포넌트 마운트시 새로운 데이터 패칭
  - 기본값은 true이다.
  - false로 설정하면 마운트시 새로운 데이터를 요청하지 않는다.
- refetchOnWindowFocus : 브라우저 클릭 시 새로운 데이터 패칭
  - 기본값은 true이다.
  - false로 설정할 경우 브라우저가 포커스 되어도 데이터를 가지고 오지 않는다.
- refetchInterval : 지정한 시간 간격만큼 데이터 패칭
  - 기본값 : 0
  - 브라우저에 포커스가 없을 때 실행되지 않는다.
- refetchIntervalInBackground : 브라우저에 포커스가 없어도 refetchInterval에서 지정한 시간 간격만큼 데이터 패칭
  - 기본값 : false
- enabled : 컴포넌트가 마운트 되어도 데이터 패칭 하지 않는다.

  - 기본값 : true
  - useQuery의 반환값 중 refetch를 활용하여 데이터 패칭을 할 수 있다.
  - 어떤 값이 있어야만 fetch하는 경우 사용할 수 있다.

    ```ts
    const { data } = useQuery(['example'], () => fetch(url), {
      enable: someData.length > 10,
    });
    ```

- onSuccess : 데이터 패칭 성공시 실행할 콜백함수를 넣어줄 수 있다.
- onError : 데이터 패칭 실패시 실행할 콜백함수를 넣어줄 수 있다.
- select : 데이터 패칭 성공 시 원하는 데이터 형식으로 변환할때 쓰인다. redux toolkit의 createSelector(reselect)와 유사하다.

#### 병렬 요청

한 번에 여러 요청을 보내야 하는 경우 이렇게 해도 상관 없습니다.

```ts
const getTodos = useQuery(['todos'], getTodos)
const getNames = useQuery(['names'], getNames)
const getFood = useQuery(['food'], getFood)
...
```

하지만 이렇게 하면 한 번에 작성할 수 있습니다.

```ts
const results = useQueries([
  { queryKey: ['todos'], queryFn: getTodos},
  { queryKey: ['names'], queryFn: getNames},
  { queryKey: ['food'], queryFn: getFood},
  ...
])
```

이렇게 하면 로딩, 에러, 성공, 실패 처리 등을 한 번에 할 수 있어서 편리합니다.

### 변경(PUT, POST, DELETE 등)에 사용하는 useMutation

```ts
const requestData = useMutation(API 호출 함수, 옵션);
```

- API 호출 함수: 특정 endpoint로 요청을 보내고 Promise를 반환하는 함수
- 옵션 : useQuery와 같은 비슷한 옵션을 받는다.

useMutation은 useQuery와 같은 값을 반환하며 `mutate`메서드가 추가됩니다. `mutate` 함수를 이용하여 API 함수를 호출합니다.

```ts
const { mutate } = useMutation((title: string) => addTodo(title));
mutate('로또 당첨되기');
```

#### useMutation 옵션

```ts
useMutation(addTodo, {
  onMutate: (variables) => {
    // mutation이 일어나는 시점
    // 예를들어 선택적으로 롤백할 때 사용할 데이터가 포함된 컨텍스트 반환할 수도 있다.
    return { id: 1 };
  },
  onError: (error, variables, context) => {
    // 에러가 발생한 시점
    console.log(`rolling back optimistic update with id ${context.id}`);
  },
  onSuccess: (data, variables, context) => {
    // 성공한 시점
  },
  onSettled: (data, error, variables, context) => {
    // 성공 혹은 실패 상관없이 모두 실행된다.
  },
});
```

`mutate`가 실행되는 시점에 추가로 옵션을 더 넣고 싶은 경우가 있다면 이렇게 할 수 있다.

```ts
useMutation(addTodo, {
  onSuccess: (data, variables, context) => {
    // I will fire first
  },
  onError: (error, variables, context) => {
    // I will fire first
  },
  onSettled: (data, error, variables, context) => {
    // I will fire first
  },
});

mutate(todo, {
  onSuccess: (data, variables, context) => {
    // I will fire second!
  },
  onError: (error, variables, context) => {
    // I will fire second!
  },
  onSettled: (data, error, variables, context) => {
    // I will fire second!
  },
});
```
