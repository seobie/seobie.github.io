---
slug: 'what-is-enum-and-is-it-good'
title: '[TypeScript] enum은 뭐지? 써야할까?'
authors: 'seob'
tags: ['typescript', 'basics', 'enum', 'javascript', 'ts', 'js']
---

## Enum? 이게 뭘까?🤷🏻‍♂️

타입스크립트에는 `enum`이라는 것이 있다. [한국어 타입스크립트 핸드북](https://typescript-kr.github.io/pages/enums.html)에서는 열거형이라고 표현하고 있으며, 다음과 같이 정의한다.

> 열거형으로 이름이 있는 **상수들의 집합을 정의**할 수 있습니다. 열거형을 사용하면 의도를 문서화 하거나 구분되는 사례 집합을 더 쉽게 만들수 있습니다. TypeScript는 숫자와 문자열-기반 열거형을 제공합니다.

<!--truncate-->

사실 `enum`은 다른 프로그래밍 언어에서는 흔하게 사용되는 타입이지만 자바스크립트에는 `enum`타입이 존재하지 않는다.

## 그럼 자바스크립트에서는 어떻게 쓰지?

자바스크립트에서는 고정값을 나타날때 이름을 대문자로 나타내는 경우가 일반적이다.

```js
const MAX_HEIGHT = 100;
const MY_NAME = 'Seob';
```

### 연관되어 있지만 묶을 수 없는 상수는?

```js
const JANUARY = 0;
const FEBRUARY = 1;
...
const DECEMBER = 11;
```

이렇게 변수를 따로 따로 만들어줘야할까? 😯

자바스크립트에서 최대한 `enum`과 비슷하게 표현하려면 이렇게 할 수도 있다.

```js
const MONTHS = Object.freeze({
  JANUARY: 0,
  FEBRUARY: 1,
  ...
});
const firstMonth = MONTHS.JANUARY;
console.log(firstMonth) // 0
```

> **[Object.freeze()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)** 메서드는 객체를 **동결**합니다. 동결된 객체는 더 이상 변경될 수 없습니다. 즉, 동결된 객체는 새로운 속성을 추가하거나 존재하는 속성을 제거하는 것을 방지하며 존재하는 속성의 불변성, 설정 가능성(configurability), 작성 가능성이 변경되는 것을 방지하고, 존재하는 속성의 값이 변경되는 것도 방지합니다. 또한, 동결 객체는 그 프로토타입이 변경되는것도 방지합니다. freeze()는 전달된 동일한 객체를 반환합니다.

## **타입스크립트에서 `enum` 사용법! 🤓**

```ts
enum Months { // enum에서는 제일 앞 글자만 대문자로 적는 것이 일반적이다.
  January,
  February,
  ...
}
console.log(MONTHS.January); // 0
console.log(MONTHS.February); // 1
```

### 숫자 열거형 (Numeric enums)

만약 `January`의 값은 1, `February`는 2 ... 로 하려면 다음과 같이 할 수 있다.

```ts
enum Months {
  January = 1,
  February,
  ...
}
console.log(MONTHS.January); // 1
console.log(MONTHS.February); // 2
```

숫자로 할당할 경우 `January`에만 할당하게 되면 `February`부터는 자동으로 1씩 큰 수가 할당된다.

### 문자열 열거형 (String enums)

위에서 `TypeScript는 숫자와 문자열-기반 열거형을 제공합니다.` 라고 했다.

숫자 말고 문자도 할당이 가능하다.

```ts
enum Months {
  January = '1월',
  February = '2월',
  ...
}
console.log(MONTHS.January); // 1월
console.log(MONTHS.February); // 2월
``
```

숫자에서는 자동으로 1씩 큰 수가 할당되었지만 문자열에서는 자동으로 할당되지 않으므로 모든 멤버에 값을 할당해야한다.

> 숫자 열거형은 계산된 멤버와 상수 멤버 (아래 참조)를 섞어서 사용할 수 있습니다. 간단히 말해, 초기화되지 않은 열거형이 먼저 나오거나, 숫자 상수 혹은 다른 상수 열거형 멤버와 함께 초기화된 숫자 열거형 이후에 와야 합니다. 즉 아래 방식은 허용되지 않습니다:

```ts
enum E {
  A = getSomeValue(),
  B, // 오류! 앞에 나온 A가 계산된 멤버이므로 초기화가 필요합니다.
}
```

## 그래서 언제 어떻게 쓰죠?? 🤨

다른 언어에서는 유용하게 쓰일지 모르지만 타입스크립트에서는 되도록이면 쓰지 않는 것이 좋다고 한다..!

![what..?](https://jjalbang.today/jjv1nt.gif)
_아니.. 그럼 뭐.. 왜.. 뭘.. 써야하죠?_

![image](https://user-images.githubusercontent.com/67283770/141263485-3d514a37-5119-4150-9b7a-1d6a067cccb9.png)
_IDE에서 자동으로 타입이 추론되는 모습_

자동으로 타입추론이 되면 위와 같이 된다.

```ts
enum Months {
  January,
  February,
}

let firstMonth: Months = Months.January;
firstMonth = 2;
firstMonth = 999999; // 에러가 발생하지 않는다....? 🤦🏻‍♂️
```

위의 코드에서 처럼 타입을 `Months`로 지정해주었지만 999999같은 이상한 숫자를 넣어도 아무런 에러가 발생하지 않는다.
이렇게 `enum`을 사용하면 타입이 정확히 보장되지 않는다.

### 그럼 뭘 써야하냐..! 🤯

타입스크립트에는 상수를 묶을 수 있는 방법이 `enum` 말고도 한 가지 더 있다!
`type` alias의 union 타입을 사용할 수 있다.

```ts
type Months = 'January' | 'February' | 'March' | ...
let firstMonth:Months = 'January';
```

![image](https://user-images.githubusercontent.com/67283770/141265470-5cf81fec-efd5-4a6e-bf8f-fe3c7356cd8d.png)
_IDE에서 자동완성도 잘 된다._

![image](https://user-images.githubusercontent.com/67283770/141265851-acd276da-ae86-4422-92e2-88333689f36f.png)
_엉뚱한 문자열을 할당하면 에러를 발생시킨다._

이렇게 가능하면 `enum`을 사용하지 않는게 좋고, 다른 모바일 클라이언트(코틀린, 스위프트)와 의사소통을 해야하는 경우가 아니라면 `enum`을 사용해야할 특이한 경우는 없을 것 같다.

## 결론

`enum`은 꼭 필요한 경우가 아니라면 `type` alias의 union타입을 쓰자!

![no more explanation](https://ww.namu.la/s/2b38937bb1ead788420b12c0f2f31d441cfc8af59d3fba718c03085bd37cacece7eaae2bc0e47717d99177eb018bd48b66075acf90a58840228eeb6fa02eeca1007e6df2caeb0816f1a9d14cd30b13ea)
