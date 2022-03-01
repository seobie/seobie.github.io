---
slug: 'm1-chip-mac-bundle-install-error'
title: '[Error Log] M1 Chip Mac Bundle Install Error'
authors: seob
tags: [errors, node, nodejs, mac, m1, apple, silicon]
---

## 에러 발견! 👾

m1 칩 맥북으로 블로그 작성시 로컬 서버를 띄우기 위해 `bundle install` 명령어를 입력하니 에러가 발생했다.

<!--truncate-->

```console
$bundle install
...
extconf failed, exit code 1

Gem files will remain installed in
/var/folders/hv/p27mdhm969j2dvw0pl23f3pw0000gn/T/bundler20211212-46570-1hvg6dbnokogumbo-2.0.5/gems/nokogumbo-2.0.5
for inspection.
Results logged to
/var/folders/hv/p27mdhm969j2dvw0pl23f3pw0000gn/T/bundler20211212-46570-1hvg6dbnokogumbo-2.0.5/extensions/universal-darwin-21/2.6.0/nokogumbo-2.0.5/gem_make.out

An error occurred while installing nokogumbo (2.0.5), and Bundler cannot continue.
Make sure that `gem install nokogumbo -v '2.0.5' --source 'https://rubygems.org/'` succeeds before bundling.

In Gemfile:
  html-proofer was resolved to 3.19.2, which depends on
    nokogumbo
```

## 원인? 💩

검색을 해보니 m1칩 기반의 맥에서 발생하는 문제였다. [👉🏻 참고한 곳](https://github.com/rubys/nokogumbo/issues/173)

## 해결 방법 💡

nokogumbo의 이슈에 달린 코멘트의 해결방법은 다음과 같았다.

```text
1. Go to your applications > utilities folder.
2. Right click and click "Get Info" on your terminal app
3. Check "Open Using Rosetta" option
4. Start your terminal app
5. bundle install
```

![img](https://user-images.githubusercontent.com/67283770/145717440-d37a14b6-14d7-409c-85b9-fe20550e4550.png)

위와 같이 `Open using Rosetta`에 체크하고 터미널을 실행시켜 `bundle install` 명령어를 입력하니 정상적으로 잘 인스톨 되었다.

해결!! 🥳

M1 아키텍쳐에서 jekyll도 설치가 안되는 것 같으니 이 문제는 따로 글을 써야겠다..
