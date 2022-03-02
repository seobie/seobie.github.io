---
slug: err-package-path-not-exported
title: '[Error Log] ERR_PACKAGE_PATH_NOT_EXPORTED 에러 해결'
authors: seob
tags: ['errors', 'node', 'nodejs', 'mac']
---

## 에러 발견! 👻

새 맥북에서 새로운 라이브러리를 사용해볼 목적으로 CRA 탬플릿으로 리액트 프로젝트를 하나 생성해서 실행 해보려는데 에러가 발생했다.

<!--truncate-->

```console
$yarn start

yarn run v1.22.17
$ react-scripts start
node:internal/modules/cjs/loader:488
      throw e;
      ^

Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './lib/tokenize' is not defined by "exports" in /Users/seob/Desktop/-/node_modules/postcss-safe-parser/node_modules/postcss/package.json
    at new NodeError (node:internal/errors:371:5)
    at throwExportsNotFound (node:internal/modules/esm/resolve:429:9)
    at packageExportsResolve (node:internal/modules/esm/resolve:683:3)
    at resolveExports (node:internal/modules/cjs/loader:482:36)
    at Function.Module._findPath (node:internal/modules/cjs/loader:522:31)
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:919:27)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Module.require (node:internal/modules/cjs/loader:999:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (/Users/seob/Desktop/-/node_modules/postcss-safe-parser/lib/safe-parser.js:1:17) {
  code: 'ERR_PACKAGE_PATH_NOT_EXPORTED'
}

Node.js v17.2.0
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

## 원인?💩 👻

stack overflow에도 [비슷한 질문](https://stackoverflow.com/questions/69693907/error-err-package-path-not-exported-package-subpath-lib-tokenize-is-not-d)이 있어서 확인해보니 node의 버전이 문제인 것 같았다.

```console
$node -v
v17.2.0
```

현재 노드의 버전을 확인해보고 노드 공식 홈페이지에 들어가서 확인해보니 최신버전으로 깔려있었다.

![img](https://user-images.githubusercontent.com/67283770/145682764-dafb9a18-8dd9-4d1e-b72d-5e0c964307ce.png)

## 해결 방법 💡 👻

글 작성 기준, 안정적인 버전으로 돌아가기 위해 노드 버전 관리 매니저인 nvm (node version manager) 을 깔아준다.

### [nvm 설치 방법](https://github.com/nvm-sh/nvm#installing-and-updating) 👻

설치나 업데이트를 하기 위해서는 설치 스크립트를 실행하여야 하며, 그렇게 하기 위해서는 스크립트를 직접 다운받아서 실행하거나 cURL 이나 Wget 명령어를 이용할 수 있다.

간편하게 cURL 명령어를 이용해서 설치해보자.

```console
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

위의 명령어를 실행하는 것은 스크립트를 다운로드하고 실행한다. 이 스크립트는 nvm 레포지토리를 `~/.nvm`에 클론하고 아래의 소스 라인 스니펫을 알맞은 프로필 파일(`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`)에 넣어주려는 시도를 한다.

```console
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" ## This loads nvm 👻
```

나의 경우엔 설치 후 터미널을 재실행 시켜주었더니 nvm명령어를 사용할 수 있게 되었고, `~.zshrc`를 확인해보니 아래와 와 같이 추가되었다.

```console
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" ## This loads nvm 👻
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" ## This  👻loads nvm bash_completion
```

아래와 같은 방법으로 nvm 명령어가 제대로 동작하는지 확인해볼 수 있다.

```console
$command -v nvm
nvm
$nvm -v
0.39.0
```

### node 버전 바꾸기 👻

```console
$nvm use 16
N/A: version "16 -> N/A" is not yet installed.

You need to run "nvm install 16" to install it before using it.
```

위의 명령어를 사용하여 안정적인 16 버전을 사용하려고 했더니 먼저 설치하라고 안내해준다.

```console
$nvm install 16
Downloading and installing node v16.13.1...
Downloading https://nodejs.org/dist/v16.13.1/node-v16.13.1-darwin-arm64.tar.xz...
############################################################################################################################### 100.0% 👻
Computing checksum with shasum -a 256
Checksums matched!
Now using node v16.13.1 (npm v8.1.2)
Creating default alias: default -> 16 (-> v16.13.1)

$node-v
v16.13.1
```

**해결!! 🥳**

노드 버전을 안정적인 버전으로 낮춰주니 더 이상 에러가 발생하지 않았다!
