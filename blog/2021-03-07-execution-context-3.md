---
slug: execution-context
title: '[JavaScript] 실행컨택스트 (Execution Context) - 3 (함수 선언문과 함수 표현식)'
authors: 'seob'
tags: ['basics', 'javascript', 'js', '코어자바스크립트', 'core-javascript']
---

> 아래 내용은 코어자바스크립트를 참고하여 정리한 내용으로, 스크린샷을 제외한 대부분의 내용의 출처는 `<코어자바스크립트 저자 정재남 출판 위키복스>`입니다!

## 함수 선언문과 함수 표현식

이전 글([실행 컨텍스트(Execution Context) - 2 ( 호이스팅 직접 보고👀 이해하기💡)](https://velog.io/@seob/%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8Execution-Context-2-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85-%EC%A7%81%EC%A0%91-%EB%B3%B4%EA%B3%A0-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0))에서는 호이스팅에 대해서 정리했다. 이번 글에서는 호이스팅과 함께 알아두면 좋은 함수 선언문(function declaration)과 함수 표현식(function expression)에 대해서 정리를 하고자 한다.

<!--truncate-->

### 차이점 간단 ver. 🙃

간단히 둘의 공통점과 차이점을 비교해보면 다음과 같다.

- 공통점 : (함수) 선언문과 표현식 모두 함수를 새롭게 정의할 때 쓰인다.
- 다른점

  - 함수 선언문 : function 정의부만 존재하고 별도의 할당 명령이 없다.
  - 함수 표현식 : 정의한 function을 별도의 변수에 할당한다.

  >

  - 기명 함수 표현식 : 함수명을 정의한 함수 표현식
  - 익명 함수 표현식 : 함수명을 정의하지 않은 함수 표현식
    💡일반적으로 함수 표현식은 익명 함수 표현식을 말한다.

```javascript
const namedFunction = function name () {...} // 기명 함수 표현식. 변수명: namedFunction, 함수명: name
const anonymousFunction = function () {...} // 익명 함수 표현식. 변수명 anonymousFunction이 곧 함수명.
function functionExpression () {...} // 함수 선언문. 함수명 functionExpression이 곧 변수명.

namedFunction(); // 실행 OK.
name(); // Error!
anonymousFunction(); // 실행 OK.
functionExpression(); // 실행 OK.
```

![](https://images.velog.io/images/seob/post/c307e08c-00b7-4404-a4f4-12823edf8336/image.png)
![](https://images.velog.io/images/seob/post/b343b4cc-ba4d-46f8-8dae-430ce53120b4/image.png)

> ⚠️
> 기명 함수 표현식에서 함수명은 외부에서 호출될 수 없다!
> 함수명은 함수의 내부에서만 접근할 수 있다.
> 과거에는 기명 함수 표현식이 디버깅시 어떤 함수인지 추적하기에 익명 함수 표현식보다 유리한 측면이 있었지만, 이제는 모든 브라우저가 익명 함수 표현식의 변수명을 함수의 `name` 프로퍼티에 할당하고 있다.
> `namedFunction`함수 내부에서 `name()`함수를 호출하면 재귀함수를 호출하는 용도로 함수명을 쓸 수 있지만, `namedFunction()`으로도 호출이 되기 때문에 굳이 `name()`으로 호출해야 할 필요는 없을 것이다.

### 차이점 본격 ver. 🧐

```javascript
console.log(sum(1, 2));
console.log(multiply(3, 4));

function sum(a, b) {
  // 함수 선언문 sum
  return a + b;
}

var multiply = function (a, b) {
  // 함수 표현식 mulitply
  return a * b;
};
```

앞의 포스팅에서 `lexicalEnvironment`는 두 가지 정보를 수집한다고 했다. 여기서는 `environmentRecord`의 정보 수집 과정에서 발생하는 호이스팅을 살펴보자.

```javascript
01 var sum = function sum (a, b) {  // 함수 선언문은 전체를 호이스팅한다.
02   return a + b;
03 }
04
05 var muliply; // 변수는 선언부만 끌어올린다.
06 console.log(sum(1, 2));
07 console.log(multiply(3, 4));
08
09 multiply = function (a, b) { // 변수의 할당부는 원래 자리에 남겨둔다.
10   return a* b;
11 }
```

> 함수 선언문은 전체를 호이스팅했고, 함수 표현식은 변수 선언부만 호이스팅 했다.
> 함수를 하나의 값으로 취급하여 다른 변수에 값으로 할당한 것이 곧 함수 표현식이다.

- 1번째 줄: 메모리 공간을 확보하고 확보된 공간의 주솟값을 변수`sum`에 연결한다.
- 5번째 줄: 또 다른 메모리 공간을 확보하고 그 공간의 주솟값을 변수 `multiply`에 연결한다.
- 1번째 줄: `sum`함수를 또 다른 메모리 공간에 저장하고, 그 주솟값을 앞서 선언한 변수 `sum`의 공간에 할당 => 변수 `sum`은 함수 `sum`을 바라보는 상태가 된다.
- 6번째 줄: `sum`을 실행하여 3을 출력한다.
- 7번째 줄: `multiply`에는 아무런 값도 할당되어 있지 않다. 그러므로 `multiply is not a function`이라는 에러 메세지가 출력된다.
  ![](https://images.velog.io/images/seob/post/bd86f64b-756e-4a10-bc71-e56d764a6875/image.png)
- 9번째 줄 부터는 7번째 줄의 에어로 인해 실행되지 않고 런타임이 종료된다.

`sum`함수는 선언 전에 호출해도 아무런 문제없이 실행되기 때문에 초급자들에게는 더 편할지 모르겠지만, 더 큰 혼란을 가져올 수도 있다. 우리는 글을 좌에서 우로, 위에서 아래로 읽는 문화환경에서 살아왔기 때문에 선언한 후에 호출하는 것이 훨씬 자연스럽다.

#### 함수 선언문의 위험성 ⛔️

함수 선언문이 이렇게 혼란스러울뿐만 아니라, 위험할 수도 있는 이유는 다음의 예시와 함께 알아보자.

```javascript
...
60 console.log(sum(3,4));
...
100 function sum (x, y) {
101   return x + y;
102 }
...
200 var a = sum(1, 2);
...
5000 function sum (x, y) {
5001  return x + ' + ' + y + ' = ' + (x + y);
5002 }
...
5010 var c = sum(1, 2);
5011 console.log(c);
```

![](https://images.velog.io/images/seob/post/7b50b5a9-910c-4dc4-afea-3ecb7cd9d3d9/image.png)
원래 개발자 A가 100번째 줄에 `sum`함수를 선언하고 100번째 줄 앞 뒤에서 문제 없이 쓰다가 다른 개발자 B가 나중에 5000번째 줄에 `sum`이라는 함수를 새롭게 선언한다.

전역 컨텍스트가 활성화될 때 전역공간에 선언된 함수들이 모두 가장 위로 끌어올려진다. 같은 변수명에 서로 다른 값을 할당할 경우 나중에 할당한 값을 먼저 할당한 값을 덮어씌우기 때문에 나중에 실제로 코드를 실행할 때는 마지막에 할당한 함수(개발자B가 선언한 함수)만 호출된다.

여기서 생기는 문제는 개발자 A가 100번째 줄 앞 뒤에서 문제 없이 사용하던 함수에 생기게 된다. 개발자 B가 새로운 함수를 할당해버렸으니 예전처럼 동작하지 않게 된다. 하지만 에러를 출력하지 않고 함수는 호출이 되어서 디버깅할 때 큰 어려움이 생길 수 있을 것이다.

만약 개발자 A와 B가 `sum`함수를 함수 표현식으로 정의했다면, 5000번째 줄 이전 까지는 개발자 A의 의도대로 작동하고, 5000번째 줄 이후부터는 개발자 B의 의도대로 잘 동작했을 것이다. 그리고 100번째 줄 이전에 `sum`함수를 호출했다면 에어를 출력했을 것이기 때문에 디버깅 하기도 더 수월했을 것이다.

#### 상대적으로 안전한 함수 표현식 👷🏻

```javascript
...
60 console.log(sum(3, 4)); // Type Error: sum is not a function
...
100 var sum = function (x, y) {
101   return x + y;
102 }
...
200 var a = sum(1, 2);
...
5000 var sum = function(x, y) {
5001   return x + ' + ' + y + ' = ' + (x + y);
5002 }
...
5010 var c = sum(1, 2);
5011 console.log(c);
...
```

![](https://images.velog.io/images/seob/post/e1a71d18-1f24-4f26-a460-e361e114aa32/image.png)

극단적인 예시이지만 원할한 협업을 위해서는 전역공간에 함수를 선언하거나 동명의 함수를 중복 선언하는 경우는 없어야만 한다. 하지만 전역공간의 같은 이름의 함수가 여럿 존재하더라도 모든 함수가 함수 표현식으로 정의돼 있었다면 위와 같은 상황은 일어나지 않을 것이다.

#### Bonus✨

위의 내용을 잘 이해했는지 스스로 점검쓰 ☝🏻

```javascript
var a = function named() {
  console.log('this is function expression');
};

function a() {
  console.log('this is function declaration');
}

a();

function b() {
  console.log('this is function declaration');
}

var b = function () {
  console.log('this is function expression');
};

b();
```

위 코드의 결과는??

두구두구..

과연..

.
.
.
.
.
.
.
.
.
.
.
.
.
3
2
1

![](https://images.velog.io/images/seob/post/8568bc76-f2cd-4248-a986-7b7f0e37419c/image.png)

함수 선언문과 함수 표현식을 섞어서 쓸 경우 순서에 상관 없이 함수 표현식이 출력된다!
호이스팅과 함수 선언문, 함수 표현식을 모두 잘 이해했다면 쉽게 맞출 수 있었을 것이다. 😉
