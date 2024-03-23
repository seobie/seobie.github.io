---
slug: "정규-표현식-어렵지-않아요-😉"
title: "정규 표현식 어렵지 않아요 😉"
authors: "seob"
tags: [regex, regular expression]
comment: true
---

[드림코딩 by 엘리님의 \<정규표현식 , 더이상 미루지 말자 🤩\> 를 참고하여 작성한 글입니다.](https://youtu.be/t3M6toIflyQ)

## 정규 표현식? Regular expression? 🤔

> 정규 표현식(正規表現式, 영어: **regular expression**, 간단히 regexp 또는 regex, rational expression) 또는 정규식(正規式)은 특정한 규칙을 가진 문자열의 집합을 표현하는 데 사용하는 형식 언어이다. 정규 표현식은 많은 텍스트 편집기와 프로그래밍 언어에서 문자열의 검색과 치환을 위해 지원하고 있으며, 특히 펄과 Tcl은 언어 자체에 강력한 정규 표현식을 구현하고 있다.<br /><br />일부는 펄, 자바스크립트, 루비, Tcl처럼 문법에 내장되어 있는 반면 닷넷 언어, 자바, 파이썬, POSIX C, C++ (C++11 이후)에서는 표준 라이브러리를 통해 제공한다. 그 밖의 대부분의 언어들은 별도의 라이브러리를 통해 정규 표현식을 제공한다.<br /><br />[위키백과 - 정규표현식](https://ko.wikipedia.org/wiki/%EC%A0%95%EA%B7%9C_%ED%91%9C%ED%98%84%EC%8B%9D)

<!--truncate-->

## 언제 쓸까? 🤷🏻‍♂️

> 주로 패턴(pattern)으로 부르는 정규 표현식은 특정 목적을 위해 필요한 문자열 집합을 지정하기 위해 쓰이는 식이다.

어떤 텍스트 덩어리 안에서 전화번호나 이메일 패턴을 찾아낸다든지, 특정 패턴 속에 있는 문자를 다른 문자로 바꾸는 것도 가능하다. 우리 실생활에서 가장 자주 그리고 직접적으로 경험하는 곳은 회원가입할 때 일 것이다.

비밀번호는 몇 자 이상 되어야 하고 대문자, 소문자, 특수문자, 숫자 등을 모두 포함해야 하거나 이메일의 아이디에는 특수문자를 넣을 수 없게 한다던가 이런 일을 쉽게 해주는 게 정규 표현식이다!

## 어떻게 생겼니? 👀

`/regex?/i`

정규 표현식은 위와 같이 생겼다.

열고 닫는 `/`가 쌍으로 들어가야 하고, 이 `/`안에 우리가 찾으려고 하는 패턴을 넣어주고, `i`부분에는 어떻게 패턴을 찾을 건지 정해주는 옵션인 flag를 달아준다.

처음에는 어려워 보일 수 있지만 몇 가지 옵션과 방법만 기억하면 쉽게 활용할 수 있다. 🤓

https://regexr.com/
위의 사이트는 정규식을 연습해 볼 수 있고, 동작 원리를 이해하기 쉽게 되어 있어서 추천하는 사이트이다.

## 문법 정리

출처 : [드림코딩 엘리 github](https://github.com/dream-ellie/regex)

### Groups & Ranges

| character | 의미                                      |
| --------- | ----------------------------------------- |
| \|        | or                                        |
| ( )       | 그룹 묶기                                 |
| [ ]       | 문자셋, 괄호 안의 어떤 문자든             |
| [ ^ ]     | 부정 문자셋, 괄호 안의 어떤 문자가 아닐때 |
| (?:)      | 찾지만 기억하지 않음                      |

#### `|` (or)

<br />

![](https://images.velog.io/images/seob/post/ec7ae59f-6184-4ed9-bba4-917d2b2814c0/image.png)
<br />
ex 또는 or 을 찾아서 매칭한다.

#### 그룹 묶기 + |

<br />

![](https://images.velog.io/images/seob/post/8f93aeb2-9f57-4522-8d36-df72e6fa8305/image.png)
<br />
첫 번째 그룹의 ex를 찾았기 때문에 그룹 #2는 undefined이다.
<br />

![](https://images.velog.io/images/seob/post/e56c0468-1ba5-4d0c-b924-43a7e94175d1/image.png)
<br />
`for`에 or 과 for 모두 들어있지만 더 정확한 단어가 있는 그룹2로 정해졌고, 그룹#1은 undefined이다.
<br />

![](https://images.velog.io/images/seob/post/8a1cda78-c645-4b6b-9a6f-077cae8ff814/image.png)
<br />
`gr`로 시작하며, `y`로 끝나지만 사이에는 `a` 또는 `e`가 들어가는 문자를 찾는다. 그룹이 1개이기 때문에 `gray`와 `grey` 모두 그룹#1에 데이터가 들어간다.

#### (?:) 찾지만 기억하지 않기

<br />

![](https://images.velog.io/images/seob/post/41ea79df-b4a1-4405-a3e9-7374d2712058/image.png)
<br />
그룹으로 `a`와 `e`를 묶었지만 `?:`를 앞에 추가하면서, 기억하진 않게 설정할 수 있다.

#### [ ] 대괄호 활용하기

<br />

![](https://images.velog.io/images/seob/post/55c64241-5f82-4bd4-8509-a6f14f1f00b4/image.png)
<br />
이렇게 여러개를 `|`를 이용하여 찾을 수도 있지만, `[ ]`를 이용하여 더 간단하게 작성할 수 있다.
<br />

![](https://images.velog.io/images/seob/post/47de0358-b1e9-4677-a05d-3a0955f6f2a5/image.png)
<br />
대괄호 안에 어떤 문자든 찾고 싶을때 사용하면 된다. 하지만 이마저도 더 간단하게 작성할 수 있다..!
<br />

![](https://images.velog.io/images/seob/post/682e44ad-cc47-4ed4-b01a-2fd4baafd347/image.png)
<br />
짜잔-✨ 정규 표현식.. 조아,,
<br />

![](https://images.velog.io/images/seob/post/4e16f06c-bf15-4298-b5ae-97276c081943/image.png)
<br />
이렇게 작성하면 모든 소문자, 대문자, 숫자를 찾아낼 수 있다. ☺️
그럼 찾고 싶은건 모르고 찾기 싫은 것만 알땐??
<br />

![](https://images.velog.io/images/seob/post/a3ec4e72-c60b-4e95-bcba-2a15f9ca1d55/image.png)
<br />
제일 앞쪽에 `^`를 넣어주면 이렇게 제외시킬 수 있다.

### Quantifiers

| character   | 의미                                |
| ----------- | ----------------------------------- |
| `?`         | 없거나 있거나 (zero or one)         |
| `*`         | 없거나 있거나 많거나 (zero or more) |
| `+`         | 하나 또는 많이 (one or more)        |
| `{n}`       | n번 반복                            |
| `{min,}`    | 최소                                |
| `{min,max}` | 최소, 그리고 최대                   |

#### `?` 없거나 있거나

<br />

![](https://images.velog.io/images/seob/post/ba6c139f-c104-4087-9d04-0ec761ff5745/image.png)
<br />
`h`와 `l`사이에 `e`가 없거나 있는 경우 매치된다.

#### `*` 없거나 많거나

<br />

![](https://images.velog.io/images/seob/post/3be20514-9e3a-45d9-8674-74a3b128cd6d/image.png)
<br />
없어도, 1개 이상이어도 매치된다.

#### `+` 하나 이상

<br />

![](https://images.velog.io/images/seob/post/a9e85e8f-af53-4b2e-bb9e-82b7c0d92274/image.png)
<br />
`e`가 하나 이상인 경우 매치된다.

#### `{ }` 반복되는 횟수 정하기

<br />

![](https://images.velog.io/images/seob/post/ce2856b3-f3fd-4d91-b3de-67dc7d8658a9/image.png)
<br />
`e`뒤에 `{3}`을 넣어서 `e`를 3번 반복하는 `heeello`가 매치되었다.

#### `{min,max}` 반복 범위 지정하기

<br />

![](https://images.velog.io/images/seob/post/62f8c9fe-0186-468c-a539-53c367b70dfe/image.png)
<br />
3번 이상, 7번 이하로 반복하는 경우 매치한다.

#### `{min, }` min번 이상 반복

<br />

![](https://images.velog.io/images/seob/post/224b6b7d-f6ac-48ba-ae68-16568bb98995/image.png)
<br />
`e`가 3번 이상 반복되는 모든 경우를 매치한다.

### Boundary-type

| character | 의미             |
| --------- | ---------------- |
| \b        | 단어 경계        |
| \B        | 단어 경계가 아님 |
| ^         | 문장의 시작      |
| $         | 문장의 끝        |

#### \b 단어의 경계 지정하기

<br />

![](https://images.velog.io/images/seob/post/2d05eb65-79ec-4f4a-92ed-de59e97074b1/image.png)
<br />
<br />

![](https://images.velog.io/images/seob/post/bf6e0efd-e2a8-4f72-aa97-34c141ae3d5f/image.png)
<br />
찾고자 하는 패턴의 앞이나 뒤에 `\b` 넣어주면, 해당하는 경우를 찾아서 매치한다.

#### \B 단어 경계가 아닌 모두!

<br />

![](https://images.velog.io/images/seob/post/72308cbf-baca-45ba-a045-5f59be67df9a/image.png)
<br />
<br />

![](https://images.velog.io/images/seob/post/307f2bac-caee-4a12-b833-ef7963310cfe/image.png)
<br />

`Ha`의 경우 시작과 끝 모두 해당되기 때문에 매치되지 않았다.

#### ^문장의 시작과 끝$

<br />

![](https://images.velog.io/images/seob/post/73a3fe9d-a4e0-44c2-a02e-78ec13845443/image.png)
<br />
<br />

![](https://images.velog.io/images/seob/post/a51985cf-4a1d-4850-8ddb-b95763ff0846/image.png)
<br />

`^`는 앞에, `$`는 뒤에 붙이면, 해당 패턴이 있는 문자의 처음과 끝을 매칭한다.

flag에 있는 `m`은 multiline을 의미한다.이 옵션을 제거하면 다음과 같이 전체의 처음과 끝에서 매치한다.
<br />

![](https://images.velog.io/images/seob/post/d4539b4e-c3fb-4a24-8258-ba724ad9621f/image.png)
<br />
<br />

![](https://images.velog.io/images/seob/post/a99d220f-48e7-4073-9edf-9bd129e2e83c/image.png)
<br />
<br />

![](https://images.velog.io/images/seob/post/4210c75c-1a16-410e-a3a2-e40e777fe050/image.png)
<br />

### Character classes

| character               | 의미                         |
| ----------------------- | ---------------------------- |
| \|특수 문자가 아닌 문자 |
| .                       | 어떤 글자 (줄바꿈 문자 제외) |
| \d                      | digit 숫자                   |
| \D                      | digit 숫자 아님              |
| \w                      | word 문자                    |
| \W                      | word 문자 아님               |
| \s                      | space 공백                   |
| \S                      | space 공백 아님              |

#### . 모두 매치하기

<br />

![](https://images.velog.io/images/seob/post/3d2e231e-cf98-486f-a1b0-6573ff541ad4/image.png)
<br />
git을 사용하면서 `git add .`명령어를 사용해봤다면 뭔가 익숙하게 다가올 것 같다.
줄바꿈을 제외한 모든 문자를 매치한다.

#### 진짜 . 찾기 (특수문자 찾기)

대부분 프로그래밍언어에서도 많이 쓰이는 문법으로 친숙한 방법이다.
<br />

![](https://images.velog.io/images/seob/post/750e4c0f-740b-4df9-9618-113daa734931/image.png)
<br />
`\`를 찾고자 하는 특수문자 앞에 넣어서 매치할 수 있다.

연속된 특수문자를 찾을 때는 아래와 같이 작성하면 된다.
<br />

![](https://images.velog.io/images/seob/post/a075b691-51ac-4288-86a6-6e48c7f4f11f/image.png)
<br />

#### 숫자 찾기 & 숫자 말고 다 찾기

<br />

![](https://images.velog.io/images/seob/post/a8a22bf8-8e5d-439f-8277-e8b59d4beaac/image.png)
<br />
<br />

![](https://images.velog.io/images/seob/post/f952ee7d-0bf5-46c2-9a8c-a7be97965dd1/image.png)
<br />

#### 문자 찾기 & 문자 말고 다 찾기

<br />

![](https://images.velog.io/images/seob/post/fb274dd8-ebfd-4512-b19f-cbbac35e2b4c/image.png)
<br />
<br />

![](https://images.velog.io/images/seob/post/4f249380-f1b6-4702-a598-09aa5296e22b/image.png)
<br />

여기서 특이한 점은 `_`가 문자라는 점!

#### 띄어쓰기(space) 찾기 & 띄어쓰기 말고 다 찾기

<br />

![](https://images.velog.io/images/seob/post/e7a6cc1f-439f-4701-965d-5f795af7d38a/image.png)
<br />
<br />

![](https://images.velog.io/images/seob/post/bd3763dc-d835-4fcf-a8e2-6747bc876144/image.png)
<br />

### 이제는 실전이야..! \<전화번호 찾기\>

```
0123456789
010-1234-5678
010 1234 5678
010.1234.5678
010-5678-1234
011-123-4567
02 111 2222
1588-1234
```

위와 같은 전화번호가 있을 때 정규식으로 찾으려면 어떻게 해야할까?

**가장 쉬운 패턴부터 시도한다**
<br />

![](https://images.velog.io/images/seob/post/67c05518-5bd3-466d-b002-14ab7a8b0eea/image.png)
<br />
앞 번호가 `010`, `02`, `1588` 처럼 자릿수가 다를땐 이렇게 해보자.

<br />

![](https://images.velog.io/images/seob/post/df0ab8f2-0437-4664-a11e-67ad6703856c/image.png)
<br />

그리고 숫자와 숫자를 이어주는건 `-`, `.`, ` `(공백 1칸) 이렇게 3가지 경우이다.
<br />

![](https://images.velog.io/images/seob/post/21b6582d-dfc7-48fa-af37-6d0c7cbdade8/image.png)
<br />
<br />

![](https://images.velog.io/images/seob/post/413b9bda-c519-4e8f-9c62-368bf924d43d/image.png)
<br />
두 번째 덩어리에는 숫자 3~4자리 이기 때문에 위와 같이 `\d{3,4}`를 넣어준다.

<br />

![](https://images.velog.io/images/seob/post/77df49ce-c627-432a-80db-e17cb3c13a56/image.png)
<br />
마지막 덩어리까지 잘 한 것 같은데 아니 `1588-1234`는 그럼 어쩌지?? 라고 생각이 들 때 `있거나~ 없거나`한 경우 우리는 `?`를 쓸 수 있다고 배웠다.
<br />

![](https://images.velog.io/images/seob/post/6d987a82-f423-475b-aa6d-9875ce90a88c/image.png)
<br />
이렇게요 😎

`1588-1234`는 그룹에 해당이 되지 않기때문에 undefined이지만 다른 숫자는 아래와 같이 마지막 덩어리 숫자는 그룹으로 지정된다.
<br />

![](https://images.velog.io/images/seob/post/4bdecda6-cae6-48dc-9ea5-01612f0457c8/image.png)
<br />

### one more thing ☝🏻

```
https://www.velog.io/@seob/React-js-정규식으로-핸드폰-번호-input-만들기
http://www.velog.io/@seob/React-js-정규식으로-핸드폰-번호-input-만들기
https://velog.io/@seob/React-js-정규식으로-핸드폰-번호-input-만들기
velog.io/@seob/React-js-정규식으로-핸드폰-번호-input-만들기
```

위와 같은 주소가 있을때, 가장 마지막에 있는 `React-js-정규식으로-핸드폰-번호-input-만들기` 부분만 선택해보자!
~~(진짜 주소는 👀 https://velog.io/@seob/React-js-정규식으로-핸드폰-번호-input-만들기)~~

<br />

![](https://images.velog.io/images/seob/post/8e9a9910-bbc1-47ca-8f4c-3b6216d9b8b3/image.png)
<br />
`s`는 있거나 없거나 => `?` 사용하기
`https://`나 `http://`가 모두 없는 경우도 있다. => `?` 사용하기
`www.`가 없을 수도 있다 => `?` 사용하기
<br />

![](https://images.velog.io/images/seob/post/c4280783-cb2e-4446-85eb-3f16beede19c/image.png)
<br />

이제 뒤에는 영어 대문자, 소문자, 하이픈, 한글이 들어간다.
위에서 한글의 패턴은 다루지 않았지만 영어와 비슷하다!

<br />

![](https://images.velog.io/images/seob/post/0a675827-e005-47c1-b59a-2856c46821e6/image.png)
<br />

무사히 다 선택이 되었으니 우리가 필요한 부분만 가져올 수 있어야 한다.

<br />

![](https://images.velog.io/images/seob/post/7f98a0f7-9aee-4792-9c67-8d7840adeb18/image.png)
<br />
필요한 부분에 그룹으로 묶어주고 나머지 그룹은 `(?:)`를 사용하여 기억하지 않게 한다.

#### 자바스크립트에서 사용해보기!

<br />

![](https://images.velog.io/images/seob/post/5efcafb5-4197-4f65-ba32-2c609c1262e1/image.png)
<br />
크롬 브라우저에서 작성해본 모습이다.
`match()`는 배열을 리턴하므로 다음과 같이 원하는 값에 접근할 수 있다.
<br />

![](https://images.velog.io/images/seob/post/154c64f2-88c7-45a5-b169-d265437873d6/image.png)
<br />

#### 보너스 🤑 한글 찾기

<br />

![](https://images.velog.io/images/seob/post/6edb34a9-2b70-4bb9-91ef-c457bee25e4f/image.png)
<br />
`[가-하]`는 완전히 매치하지 못한다. 그렇기 때문에 `[가-힣]`로 해야한다.
<br />

![](https://images.velog.io/images/seob/post/2d718a7a-8c99-41d8-b5b2-8a8ce3a10a39/image.png)
<br />

자음과 모음은 이렇게 찾는다.
<br />

![](https://images.velog.io/images/seob/post/c3708256-119e-45a3-938d-090f149f7a8a/image.png)
<br />
<br />

![](https://images.velog.io/images/seob/post/f42066bf-e9d3-4e1c-8d48-3366683f2a82/image.png)
<br />
마지막으로 모든 한글 찾기
<br />

![](https://images.velog.io/images/seob/post/fd6d7641-a576-48f4-888d-0c7bc981dfda/image.png)
<br />
