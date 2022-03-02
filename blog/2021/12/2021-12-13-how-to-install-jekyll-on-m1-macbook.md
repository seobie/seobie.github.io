---
slug: 'how-to-install-jekyll-on-m1-macbook'
title: 'M1 맥에서 jekyll 설치하기'
authors: seob
tags: [errors, mac, m1, jekyll, apple, silicon, arm64]
---

## 에러 발견! 👾

M1 맥북에서 jekyll을 설치하려니 에러가 발생했다.

<!--truncate-->

```console
$ gem install jekyll
Successfully installed jekyll-4.2.1
Parsing documentation for jekyll-4.2.1
Before reporting this, could you check that the file you're documenting
has proper syntax:

  /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/bin/ruby -c lib/jekyll/commands/doctor.rb

RDoc is not a full Ruby parser and will fail when fed invalid ruby programs.

The internal error was:

  (NoMethodError) undefined method `[]' for nil:NilClass

ERROR:  While executing gem ... (NoMethodError)
    undefined method `[]' for nil:NilClass
```

---

## 원인?💩

M1 기반 맥은 ARM 아키텍쳐인데 이것을 지원하지 않아서 발생하는 문제이다. 👻

---

## 해결 방법 💡

### jekyll을 설치하기 전 먼저 해야 하는 것들

#### Xcode 설치

```console
$xcode-select --install
```

최근에 맥북을 구입했다면 아직 Xcode를 설치하지 않았을 것이다. Xcode는 jekyll을 포함한 다른 프로그램들에 필요한 라이브러리들이 포함되어있다. 굳이 Xcode 자체를 설치할 필요는 없고 CLT(Command Line Tools)만 설치해도 된다고 한다.

[CLT 설치 방법](https://atoz-develop.tistory.com/entry/맥-CLTCommand-Line-Tools-설치-방법Xcode-없이)

#### Homebrew 설치

만약 아직 [Homebrew](https://brew.sh)를 설치하지 않았다면 설치해주자.

```console
$/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Rbenv 설치

ARM 프로세서를 지원하는 루비 버전을 설치해야 한다.

- [Rbenv README.md](https://github.com/rbenv/rbenv)
- [ruby-build README.md](https://github.com/rbenv/ruby-build)

```console
$brew install rbenv ruby-build
```

#### ARM 기반 Ruby 3.0.0 설치

```console
$rbenv install 3.0.0
$rbenv global 3.0.0
$ruby -v
$rbenv rehash
```

#### ruby와 gem 경로를 쉘 설정에 추가하기

##### zsh를 사용하는 경우

```console
$echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
```

##### bash를 사용하는 경우

```console
$echo 'eval "$(rbenv init - bash)"' >> ~/.bash_profile
```

##### 무슨 쉘을 사용하는지 모르겠을땐?

```console
$echo $SHELL
/bin/zsh ## 저는 zsh을 사용하고 있어서 이렇게 나오네요!
```

#### 드디어 Jekyll 설치하기

```console
$gem install jekyll bundler
```

만약 설치가 안된다면 에러를 잘 읽고 `sudo` 권한을 앞에 붙여주어야 하는지, 혹은 특정 버전을 인스톨 하지 못했는지 확인해서 에러메세지가 주는 힌트를 잘 따라오면 결국 설치가 될 것이다..!

그래도 안된다면 `source /.~zshrc` 를 해보거나, `rbenv rehash` 를 시도해 볼 수도 있고..

```console
$gem install bunlder
$bundler install
$bundle exec jekyll serve
```

위의 명령어를 차례대로 입력하고 `localhost:4000`에서 정상적으로 로컬서버가 동작하는 것을 확인했다면..

문제 해결!! 🥳

[참조](https://www.earthinversion.com/blogging/how-to-install-jekyll-on-appple-m1-macbook/)
