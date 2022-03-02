---
slug: '회사-프로젝트에-mono-repo-도입기'
title: '회사 프로젝트에 mono-repo 도입기'
authors: 'seob'
tags: ['mono-repo', 'lerna', 'yarn workspace']
---

## mono-repo 도입을 결정하게 된 이유

현재 회사에서 리액트로 개발중인 프론트엔드 프로젝트는 3개이다.

최근까지는 모두 다른 Repository에서 개별적으로 관리를 했었는데, 프로젝트가 모두 공통된 디자인과 컴포넌트를 사용하고 있었기 때문에 A 프로젝트에서 컴포넌트를 수정하면 프로젝트 B와 C에서도 수정을 해줘야만 했다.

하지만 minor한 수정인 경우 제때 수정하지 않게 되거나 업데이트 하는 것을 잊게 되어 한 프로젝트에서만 업데이트되는 상황이 발생했고 나중에는 프로젝트간 차이점을 좁히기가 어려워졌다.

이 문제점을 해결하기 위하여 공통적으로 사용되는 컴포넌트만 따로 분리하여 라이브러리처럼 배포해서 사용하려고도 했었지만 mono-repo라는 개념을 알게 되고 나서, 여러 자료를 리서치해보게 되었고, 지금 나의 상황에 가장 적합하다고 판단하여 mono-repo로 전환을 하기로 정하였다.

<!--truncate-->

## mono-repo? 🤨

mono의 반대 개념은 multi 이다. (mono 는 하나, multi는 여러개)

기존 프로젝트마다 각자 repository를 갖고 있었으므로 기존의 프로젝트는 multi-repo 라고 보면 된다.

mono-repo는 두 개 이상의 프로젝트를 하나의 repository에서 관리하는 방법이고 이렇게 하게되면 각 프로젝트별로 설치되어야하는 공통된 패키지를 한 곳에서 관리할 수 있게 된다.

### mono-repo의 장점

- **코드의 재사용** : 현재 프로젝트는 모두 같은 디자인톤을 사용하고 같은 컴포넌트를 사용하고 있었기때문에, 각 repository에 같은 코드를 복붙해야 했다. 하지만 mono-repo에서는 한 곳에 공통으로 쓰이는 것들을 모아두고 각 프로젝트에서 가져다 쓸 수 있기 때문에 코드의 재사용성이 좋아진다.
- **의존성 관리** : 멀티레포에서는 각 프로젝트마다 `typescript`, `prettier`, `eslint`, `husky` 등.. 프로젝트 설정에 필요한 외부 라이브러리를 동일하게 설치하고 동일하게 설정해주어야 했지만, 루트에서 패키지를 관리하게 되어 패키지의 버전이나 의존성 관리가 용이해진다.

## [Lerna](https://github.com/lerna/lerna#about)

> Splitting up large codebases into separate independently versioned packages is extremely useful for code sharing. However, making changes across many repositories is messy and difficult to track, and testing across repositories becomes complicated very quickly.
> <br /><br />
> To solve these (and many other) problems, some projects will organize their codebases into multi-package repositories (sometimes called monorepos). Projects like Babel, React, Angular, Ember, Meteor, Jest, and many others develop all of their packages within a single repository.
> <br /><br /> **Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.** <br /><br />
> Lerna can also reduce the time and space requirements for numerous copies of packages in development and build environments - normally a downside of dividing a project into many separate NPM packages. See the hoist documentation for details.

[Lerna 공식문서](https://github.com/lerna/lerna#about)를 보면 설명이 자세히 나와있는데 핵심은 **bold**처리된 부분이다. git과 npm을 사용하여 multi-repo를 관리하는 작업과정을 최적화하는 도구라고 소개한다.

lerna는 mono-repo의 개념을 구현한 라이브러리로 우리가 잘 아는 facebook의 `create-react-app`이나, `storybook` 등 유명한 라이브러리도 러나를 사용중이다.

### Lerna repo의 구조

현재 우리 프로젝트의 구조는 이런식으로 구성되어있다.

```text
mono-repo-project/
├─ node_modules/
├─ packages/
│  ├─ common/
│  │  ├─ node_modules/
│  │  ├─ ...
│  │  └─ package.json
│  ├─ project-1/
│  │  ├─ node_modules/
│  │  ├─ ...
│  │  └─ package.json
│  └─ project-2/
│  │  ├─ node_modules/
│  │  ├─ ...
│  │  └─ package.json
├─ lerna.json
└─ package.json
```

### 자주 사용하는 명령어

#### 1.[**`lerna bootstrap`**](https://github.com/lerna/lerna/tree/main/commands/bootstrap)

> 각각의 패키지에 명시된 디펜던시를 설치하고 패키지들 내에서 특정 모듈이 필요로 하는 버전과 실제 모듈 버전이 동일하다면 불필요한 다운로드 없이 서로 심링크를 걸어 로컬에서 사용할 수 있게 해줍니다 (심볼릭링크)

![image](https://user-images.githubusercontent.com/67283770/140882461-a3a7f6a1-0afb-48cd-ac8f-2062a1e3b65e.png)

`—hoist` 옵션(플래그)을 사용한다면 공통되는 모듈을 루트의 `node_modules` 로 올려서 설치하고, 만약 각각의 패키지가 서로다른 버전의 외부 디펜던시를 사용한다면 가장 많이 사용되고 있는 버전이 호이스팅 되고 관련된 경고를 보여줍니다. 호이스팅을 잘 이용한다면 다음과 같은 이점을 얻을 수 있습니다. (yarn worspaces를 설명할 때 자세히 설명합니다)

- 모든 패키지는 주어진 종속성의 동일한 버전을 사용한다.
- GreenKeeper와 같은 자동화 된 도구를 사용하여 루트의 종속성을 최신 상태로 유지할 수 있다.
- 종속성 설치 시간이 줄어든다.
- 저장 공간이 덜 필요하다.

#### 2.**`lerna clean`**

- `packages` 하위 폴더 안에 있는 `node_modules` 폴더를 삭제한다.
- 루트의 `node_modules` 는 삭제하지 않는다.
- clean build의 목적으로 사용

## [Yarn Workspace](https://classic.yarnpkg.com/lang/en/docs/workspaces/)

> Workspaces are a new way to set up your package architecture that’s available by default starting from Yarn 1.0. It allows you to setup multiple packages in such a way that you only need to run `yarn install` once to install all of them in a single pass.

- 모노레포의 각 패키지마다 가지고 있는 `node_modules` 가 루트의 `node_modules` 를 참조한다.
- 별도의 라이브러리를 설치할 필요 없이 yarn에 내장된 기능이다.
- `yarn install` 혹은 `yarn` 을 실행하면 루트의 package.json안에 명시되어 있는 dependency, 그리고 각 패키지에 명시되어있는 dependency가 중복을 최대한 줄인 채 루트의 node_modules안에 `호이스팅` 되어서 설치되고 dependency로 명시 되어있는 모듈은 심링크가 걸려 npm에 배포되어있는 버전이 아니라 로컬에 있는 코드를 바로 볼 수 있게 해줍니다.

![image](https://miro.medium.com/max/1400/1*uGcDMXSuT1LYa0Ex8kOuaw.png)
_from https://classic.yarnpkg.com/_

### package.json 설정

```json title="package.json"
{
  "name": "mono-repo",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "private": true, // true로 설정되어야 yarn workspace를 사용할 수 있다.
  "workspaces": {
    "packages": [
      "packages/*" // workspace 경로 설정
    ]
  },
  "scripts": {
    "common": "yarn workspace @mono-repo/common",
    "project-1": "yarn workspace @mono-repo/project-1", // 명령어를 짧게 하기 위해 추가해줬다.
    ...
  }
}
```

```json title="packages/common/package.json"
{
  "name": "@mono-repo/common", // yarn workspace 에서 쓰일 이름
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "private": true,
  "dependencies": {
    ...
  },
  "devDependencies": {
    ...
  },
  ...
}
```

```json title="packages/project-1/package.json"
{
  "name": "@mono-repo/project-1", // yarn workspace 에서 쓰일 이름
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "@mono-repo/common": "1.0.0", // common 패키지에 접근하기 위해 추가해야한다.
    ...
  },
 ...
}
```

### 특정 패키지에 라이브러리 설치 및 삭제하는법

```console
// @mono-repo/project-1 에 react 설치
$ yarn workspace @mono-repo/project-1 add react
// 혹은
$ yarn project-1 add react // package.jsos > scrripts

// @mono-repo/project-1 에서 react 제거
$ yarn workspace @mono-repo/project-1 remove react
// 혹은
$ yarn project-1 remove react

// 루트 package.json > devDependancies에 react 추가
$ yarn add -W -D react
// -W 가 없으면 에러가 발생한다
// error Running this command will add the dependency to the workspace root rather than the workspace itself, which might not be what you want - if you really meant it, make it explicit by running this command again with the -W flag (or --ignore-workspace-root-check).
// info Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.
```

### tsconfig.paths.json 설정

프로젝트가 모두 `typescript`를 사용하고 있으므로 `tsconfig.json`도 설정해주어야 한다.

```json title="packages/project-1/tsconfig.paths.json"
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@mono-repo/common/*": ["../../common/src/*"],
      ...
    }
  }
}
```

```json title="packages/project-1/tsconfig.json"
{
  "extends": "./tsconfig.paths.json",
  "compilerOptions": {
    ...
  },
  ...
}
```

## [CRACO](https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#craco--)

> Create React App Configuration Override is an easy and comprehensible configuration layer for create-react-app.
> <br /><br />
> Get all the benefits of create-react-app and customization without using 'eject' by adding a single configuration (e.g. craco.config.js) file at the root of your application and customize your eslint, babel, postcss configurations and many more.
> <br /><br />
> All you have to do is create your app using create-react-app and customize the configuration file.

### craco.json 설정

`project-1` , `project-2` 모두 CRA 템플릿 베이스의 프로젝트라고 한다면, CRA 프로젝트의 CRA config에서는 `src` 폴더보다 상위의 폴더에서 파일을 `import` 할 수 없도록 설정이 되어있어서 config를 overide 해주어야한다.

### craco 설치

```console
$ yarn workspace project-1 add @craco/craco
## OR
$ npm project-1 add @craco/craco
```

`craco.config.js`파일을 프로젝트 루트(`packages/project-1`)에 생성하고 `package.json` 파일 안에 `scripts`를 다음과 같이 수정해준다.

```diff title="packages/project-1/package.json"
"scripts": {
-   "start": "react-scripts start",
+   "start": "craco start",
-   "build": "react-scripts build",
+   "build": "craco build"
-   "test": "react-scripts test",
+   "test": "craco test"
}
```

```js title="packages/project-1/craco.config.js"
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  eslint: { enable: false },
  webpack: {
    configure: (config) => {
      // Remove ModuleScopePlugin which throws when we try to import something
      // outside of src/.
      config.resolve.plugins.pop();

      // Resolve the path aliases.
      config.resolve.plugins.push(new TsconfigPathsPlugin());

      // Let Babel compile outside of src/.
      const oneOfRule = config.module.rules.find((rule) => rule.oneOf);
      const tsRule = oneOfRule.oneOf.find((rule) =>
        rule.test.toString().includes('ts|tsx')
      );

      tsRule.include = undefined;
      tsRule.exclude = /node_modules/;

      return config;
    },
    plugins: {
      remove: [
        // This plugin is too old and causes problems in monorepos. We'll
        // replace it with a newer version.
        'ForkTsCheckerWebpackPlugin',
      ],
      add: [
        // Use newer version of ForkTSCheckerWebpackPlugin to type check
        // files across the monorepo.
        new ForkTSCheckerWebpackPlugin({
          issue: {
            // The exclude rules are copied from CRA.
            exclude: [
              {
                file: '**/src/**/__tests__/**',
              },
              {
                file: '**/src/**/?(*.)(spec|test).*',
              },
              {
                file: '**/src/setupProxy.*',
              },
              {
                file: '**/src/setupTests.*',
              },
            ],
          },
        }),
      ],
    },
  },
  jest: {
    configure: {
      moduleDirectories: ['<rootDir>/', 'src', 'node_modules'],
      moduleNameMapper: {
        '^.+\\.(scss)$': '<rootDir>/../hrm-frontend/src/mocks/styleMock.js',
        // '^.+\\.(gif|ttf|eot|svg|png)$':
        //   '<rootDir>/../packages/hrm-frontend/src/mocks/fileMock.ts',
        '^@inssait-mono-repo/common/(.*)$': [
          '<rootDir>/../common/src/$1.ts',
          '<rootDir>/../common/src/$1.tsx',
        ],
      },
    },

    //Jest can not find any module with absoulte path without this option include "src"
    transformIgnorePatterns: [
      '/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$',
    ],
    collectCoverageFrom: [
      './src/components/**/*.tsx',
      './src/features/**/*.ts',
      './src/pages/**/*.tsx',
      './src/pages/**/*.ts',
    ],
  },
};
```

#### 참고한 글

- [Lerna와 Yarn workspaces를 활용한 패키지 관리](https://medium.com/wantedjobs/lerna%EC%99%80-yarn-workspaces%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%ED%8C%A8%ED%82%A4%EC%A7%80-%EA%B4%80%EB%A6%AC-429d2a685486)
- [Lerna · A tool for managing JavaScript projects with multiple packages.](https://lerna.js.org/)
- [[Node] yarn workspaces (프로젝트 참조)](https://musma.github.io/2019/04/02/yarn-workspaces.html)
- [Lerna와 yarn-workspace를 활용한 Mono Repo (Typescript & Jest) 환경 구성하기](https://jojoldu.tistory.com/585)
- [Monorepo eslint vscode](https://medium.com/devityoself/monorepo-eslint-vscode-6f5982c8404d)
- [Microfrontends: Integrating with a create-react-app (CRA) project without eject using CRACO (Create-React-App Configuration Override)](https://www.linkedin.com/pulse/microfrontends-integrating-create-react-app-cra-eject-rany?trk=articles_directory)
- [Monorepo? Yarn Workspace!](https://medium.com/@deptno/monorepo-yarn-workspace-e81e3e078100)
- [타입스크립트 모노레포](https://medium.com/@deptno/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-8ba1f1757345)
- [Lerna를 활용한 Mono-Repo 구축 완벽 가이드 - 예제를 통한 완벽 파악](https://kdydesign.github.io/2020/08/27/mono-repo-lerna-example/)
- [craco/README.md at master · gsoft-inc/craco](https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation)
- [Configuring TypeScript Monorepo with ESLint, Prettier and WebStorm](https://valcker.medium.com/configuring-typescript-monorepo-with-eslint-prettier-and-webstorm-61a71f218104)
- [Lerna와 Yarn workspaces를 활용한 패키지 관리 - zero's 이모저모](https://awesomezero.com/development/lerna_and_yarn_workspace/)
- [Using Create-React-App In A Monorepo](https://frontend-digest.com/using-create-react-app-in-a-monorepo-a4e6f25be7aa)
- [Monorepo? Yarn Workspace!](https://medium.com/@deptno/monorepo-yarn-workspace-e81e3e078100)
- [React-Native + CRA MonoRepo 환경 구축하기](https://velog.io/@younuk23/React-Native-CRA-MonoRepo-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0)
- [How to set up a TypeScript monorepo with Lerna](https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559)
