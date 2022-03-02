---
slug: conquer-css-nth-child
title: '[CSS] 알아두면 유용한 nth-child 정복하기 😎(feat. nth-of-type)'
authors: 'seob'
tags: ['css', 'styled-components', 'sass', 'scss']
---

> 항상 nth-child(숫자)만 사용하세요??
> `div > div` === `div > div:nth-child(n + 1)`
> 왜 같은지 알아보고 다른 유용한 문법도 알아갑시다. 🤓

<!--truncate-->

## :nth-child

### 예제로 사용할 동그라미의 구조

```JavaScript
<div> // Circle Wrapper
  <div /> // Circle
  <span>{숫자}</span>
</div>
```

### :nth-child(숫자)

![](https://images.velog.io/images/seob/post/e9f951f9-0ce8-4ad5-826d-c1410c5a7297/image.png)

```css
& > div:nth-child(5) > div {
  background-color: cornflowerblue;
}
```

> 가장 기본적이고 가장 많이 쓰이는 nth-child 문법이다.
> `:nth-child(5)`를 사용하면 특정 숫자번째의 자식을 지정해서 스타일을 바꿀 수 있다.

### :nth-child(n + 숫자)

![](https://images.velog.io/images/seob/post/b40a7995-0556-4400-ae52-b9a33afccd2a/image.png)

```css
& > div:nth-child(n + 3) > div {
  background-color: cornflowerblue;
}
```

> `숫자`번째를 포함한 이후의 모든 자식에게 스타일을 적용할 수 있다.

### :nth-child(-n + 숫자)

![](https://images.velog.io/images/seob/post/2811c1cf-0a2e-46c0-90fb-364c162f15ba/image.png)

```css
& > div:nth-child(-n + 6) > div {
  background-color: cornflowerblue;
}
```

> 이전의 방법의 반대케이스이다.
> `숫자`번째를 포함한 이전의 모든 자식에게 스타일을 적용할 수 있다.

### :nth-child(n + 숫자):nth-child(-n + 숫자)

![](https://images.velog.io/images/seob/post/3dfce432-dbcd-445f-9164-27a8078690eb/image.png)

```css
& > div:nth-child(n + 3):nth-child(-n + 6) > div {
  background-color: cornflowerblue;
}
```

> 위의 두 가지 방법을 합친 케이스이다.
> n번째 자식을 포함한 이후의 모든 자식에 대해서 m번째를 포함한 이전의 모든 자식에게 스타일을 적용한 것이다.
> n번부터 m번까지 범위를 정하고 싶을때 유용하다.

### :nth-child(odd)

![](https://images.velog.io/images/seob/post/d300e679-caeb-4592-b012-512f4cb31b56/image.png)

```css
& > div:nth-child(odd) > div {
  background-color: cornflowerblue;
}
```

> 모든 홀수번째 자식에게 스타일을 적용하는 방법이다.

### :nth-child(even)

![](https://images.velog.io/images/seob/post/753e6f34-bbe2-4dba-836e-557246136cec/image.png)

```css
& > div:nth-child(even) > div {
  background-color: cornflowerblue;
}
```

> 모든 짝수번째 자식에게 스타일을 적용하는 방법이다.

### :nth-child(n + 숫자):nth-child(odd):nth-child(-n + 숫자)

![](https://images.velog.io/images/seob/post/9376c19c-7c6d-4be6-a09f-79d1054a0fa0/image.png)

```css
& > div:nth-child(n + 2):nth-child(odd):nth-child(-n + 9) > div {
  background-color: cornflowerblue;
}
```

> 위의 세 가지 방법을 합친 케이스이다.
> 특정 범위 안에서 홀수 혹은 짝수의 자식들에게 스타일을 적용하는 방법이다.

### :nth-child(An + B)

![](https://images.velog.io/images/seob/post/fdb91989-fd97-42ac-9970-e8daf4ad7041/image.png)

```css
& > div:nth-child(3n + 1) > div {
  background-color: cornflowerblue;
}
```

> B번 자식부터 A개 띄어서 스타일을 적용하는 방법이다.

### nth-child(An + B):nth-child(even)

![](https://images.velog.io/images/seob/post/c3388600-92ad-4e75-9f5b-2f805dfc243a/image.png)

```css
& > div:nth-child(3n + 1):nth-child(even) > div {
  background-color: cornflowerblue;
}
```

> 위의 케이스에서 짝수번 자식들에게만 스타일을 적용하는 방법이다.

## nth-of-type

### 예제로 사용할 네모의 구조

```JavaScript
<span> // Square Wrapper
  <span /> // Square
  <span>{숫자}</span>
</div>
```

### nth-of-type(숫자)

![](https://images.velog.io/images/seob/post/f97627b4-d920-46cb-a627-71ea650a902d/image.png)

```css
& > div:nth-of-type(3) > div {
  background-color: cornflowerblue;
}
& > span:nth-of-type(4) > span:first-child {
  background-color: coral;
}
```

> `nth-child(숫자)`와는 다르게 모든 자식에 대해서가 아니라 **같은 타입(태그)인 자식에 대해서** 특정한 숫자번째 자식을 고를 수 있다.

### div:nth-of-type(n + A), span:nth-of-type(Bn + C)

![](https://images.velog.io/images/seob/post/6a13a188-2acb-4dfa-8c06-c41371a09f40/image.png)

```css
& > div:nth-of-type(n + 3) > div {
  background-color: cornflowerblue;
}
& > span:nth-of-type(3n + 2) > span:first-child {
  background-color: coral;
}
```

> `nth-child`에서와 마찬가지로 `nth-of-type`에도 같은 문법을 적용할 수 있다.

나머지 문법들도 동일하게 적용되므로 `nth-of-type`은 여기에서 마치겠다. 😜
