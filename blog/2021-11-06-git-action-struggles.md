---
slug: git-action-struggles
title: 'git action 자동 배포 에러 해결기 (ERROR: Invalid first code point of tag name U+C804.)'
authors: 'seob'
tags: ['errors']
---

## 문제 발견..!

이 전 글인 [정규 표현식 어렵지 않아요 😉](https://seobie.github.io/posts/regular_expression/)를 velog에서 시험삼아 옮겨오는 작업을 하던 도중 에러가 발생했었다.

<!--truncate-->

지금 이 블로그는 [jekyll-theme-chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) 테마를 사용하고 있으며, `main` 브랜치에 merge가 되거나 push 되면 `git action`에서 자동으로 빌드하고 배포해주는 방식을 사용한다.

velog에 있던 글을 그대로 옮겨와도 대부분 원래의 모양과 비슷하게 보였기 때문에 약간의 수정만 하고 로컬에서 확인했을 때는 문제 없어보였고, `main` 브랜치에 push 하고 나니 자동으로 배포가 진행되었다.

하지만 아래 이미지와 같은 에러가 발생했다.

![image](https://user-images.githubusercontent.com/67283770/140597948-a754375d-5f9f-4bcc-b0b2-4846480612c7.png)

> HTML-Proofer found 2 failures!<br/>
> Error: Process completed with exit code 1.

지금 블로그의 `deploy.sh`파일 안에는 다음과 같은 명령어가 실행이 되게 되는데 `htmlproofer`에서 이상한 문법을 감지하고 에러를 보낸 것이다.

{: file='deploy.sh'}

```text
test() {
  bundle exec htmlproofer \
    --disable-external \
    --check-html \
    --allow_hash_href \
    "$SITE_DIR"
}
```

로그를 보니 태그에 문제가 있다는 내용이었다.
![image](https://user-images.githubusercontent.com/67283770/140597750-18a63a0d-6646-4410-a56f-f3c799438a06.png)

> - 1:21593: ERROR: Invalid first code point of tag name U+C804.

내가 작성한 마크다운과 결과물을 살펴보니 다른 점을 발견했다.
![image](https://user-images.githubusercontent.com/67283770/140598042-98e0cb12-359b-406b-815c-ec0da895f52a.png)
![image](https://user-images.githubusercontent.com/67283770/140598053-ee254fc8-cdb1-4231-8a59-0d284b38fb79.png)

벨로그에서는 잘 나왔었는데..? 🤯
![image](https://user-images.githubusercontent.com/67283770/140598074-9700c3f2-480a-4ce0-a06f-3450d409fb1d.png)

## 문제 해결🥰

해결 방법은 간단하다. backslash (`\`)를 `<`와 `>` 앞에 넣어주면 된다.

```md
### 이제는 실전이야..! \<전화번호 찾기\>
```

![image](https://user-images.githubusercontent.com/67283770/140598254-0c952f44-ed68-408d-89d0-a22f4240a5d2.png)

저 부분만 수정하고 다시 push하니 문제없이 배포되었다! 👏🏻
