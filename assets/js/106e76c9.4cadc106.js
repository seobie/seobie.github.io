"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3004],{287:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var t=s(4848),r=s(8453);const c={slug:"what-is-enum-and-is-it-good",title:"[TypeScript] enum\uc740 \ubb50\uc9c0? \uc368\uc57c\ud560\uae4c?",authors:"seob",tags:["typescript","basics","enum","javascript","ts","js"]},i=void 0,l={permalink:"/blog/what-is-enum-and-is-it-good",editUrl:"https://github.com/seobie/seobie.github.io/tree/main/blog/2021/11/2021-11-11-what-is-enum-and-is-it-good.md",source:"@site/blog/2021/11/2021-11-11-what-is-enum-and-is-it-good.md",title:"[TypeScript] enum\uc740 \ubb50\uc9c0? \uc368\uc57c\ud560\uae4c?",description:"Enum? \uc774\uac8c \ubb58\uae4c?\ud83e\udd37\ud83c\udffb\u200d\u2642\ufe0f",date:"2021-11-11T00:00:00.000Z",formattedDate:"November 11, 2021",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"basics",permalink:"/blog/tags/basics"},{label:"enum",permalink:"/blog/tags/enum"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"ts",permalink:"/blog/tags/ts"},{label:"js",permalink:"/blog/tags/js"}],readingTime:6.47,hasTruncateMarker:!0,authors:[{name:"\uc774\uc601\uc12d",title:"Frontend Engineer",url:"https://github.com/seobie",imageURL:"https://avatars.githubusercontent.com/u/67283770?v=4",key:"seob"}],frontMatter:{slug:"what-is-enum-and-is-it-good",title:"[TypeScript] enum\uc740 \ubb50\uc9c0? \uc368\uc57c\ud560\uae4c?",authors:"seob",tags:["typescript","basics","enum","javascript","ts","js"]},unlisted:!1,prevItem:{title:"oh-my-zsh git plugin cheatsheet",permalink:"/blog/oh-my-zsh-git-plugin-cheatsheet"},nextItem:{title:"git action \uc790\ub3d9 \ubc30\ud3ec \uc5d0\ub7ec \ud574\uacb0\uae30 (ERROR: Invalid first code point of tag name U+C804.)",permalink:"/blog/git-action-struggles"}},a={authorsImageUrls:[void 0]},o=[{value:"Enum? \uc774\uac8c \ubb58\uae4c?\ud83e\udd37\ud83c\udffb\u200d\u2642\ufe0f",id:"enum-\uc774\uac8c-\ubb58\uae4c\ufe0f",level:2},{value:"\uadf8\ub7fc \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\ub294 \uc5b4\ub5bb\uac8c \uc4f0\uc9c0?",id:"\uadf8\ub7fc-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\ub294-\uc5b4\ub5bb\uac8c-\uc4f0\uc9c0",level:2},{value:"\uc5f0\uad00\ub418\uc5b4 \uc788\uc9c0\ub9cc \ubb36\uc744 \uc218 \uc5c6\ub294 \uc0c1\uc218\ub294?",id:"\uc5f0\uad00\ub418\uc5b4-\uc788\uc9c0\ub9cc-\ubb36\uc744-\uc218-\uc5c6\ub294-\uc0c1\uc218\ub294",level:3},{value:"<strong>\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c <code>enum</code> \uc0ac\uc6a9\ubc95! \ud83e\udd13</strong>",id:"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c-enum-\uc0ac\uc6a9\ubc95-",level:2},{value:"\uc22b\uc790 \uc5f4\uac70\ud615 (Numeric enums)",id:"\uc22b\uc790-\uc5f4\uac70\ud615-numeric-enums",level:3},{value:"\ubb38\uc790\uc5f4 \uc5f4\uac70\ud615 (String enums)",id:"\ubb38\uc790\uc5f4-\uc5f4\uac70\ud615-string-enums",level:3},{value:"\uadf8\ub798\uc11c \uc5b8\uc81c \uc5b4\ub5bb\uac8c \uc4f0\uc8e0?? \ud83e\udd28",id:"\uadf8\ub798\uc11c-\uc5b8\uc81c-\uc5b4\ub5bb\uac8c-\uc4f0\uc8e0-",level:2},{value:"\uadf8\ub7fc \ubb58 \uc368\uc57c\ud558\ub0d0..! \ud83e\udd2f",id:"\uadf8\ub7fc-\ubb58-\uc368\uc57c\ud558\ub0d0-",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"enum-\uc774\uac8c-\ubb58\uae4c\ufe0f",children:"Enum? \uc774\uac8c \ubb58\uae4c?\ud83e\udd37\ud83c\udffb\u200d\u2642\ufe0f"}),"\n",(0,t.jsxs)(n.p,{children:["\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\ub294 ",(0,t.jsx)(n.code,{children:"enum"}),"\uc774\ub77c\ub294 \uac83\uc774 \uc788\ub2e4. ",(0,t.jsx)(n.a,{href:"https://typescript-kr.github.io/pages/enums.html",children:"\ud55c\uad6d\uc5b4 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \ud578\ub4dc\ubd81"}),"\uc5d0\uc11c\ub294 \uc5f4\uac70\ud615\uc774\ub77c\uace0 \ud45c\ud604\ud558\uace0 \uc788\uc73c\uba70, \ub2e4\uc74c\uacfc \uac19\uc774 \uc815\uc758\ud55c\ub2e4."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\uc5f4\uac70\ud615\uc73c\ub85c \uc774\ub984\uc774 \uc788\ub294 ",(0,t.jsx)(n.strong,{children:"\uc0c1\uc218\ub4e4\uc758 \uc9d1\ud569\uc744 \uc815\uc758"}),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5f4\uac70\ud615\uc744 \uc0ac\uc6a9\ud558\uba74 \uc758\ub3c4\ub97c \ubb38\uc11c\ud654 \ud558\uac70\ub098 \uad6c\ubd84\ub418\ub294 \uc0ac\ub840 \uc9d1\ud569\uc744 \ub354 \uc27d\uac8c \ub9cc\ub4e4\uc218 \uc788\uc2b5\ub2c8\ub2e4. TypeScript\ub294 \uc22b\uc790\uc640 \ubb38\uc790\uc5f4-\uae30\ubc18 \uc5f4\uac70\ud615\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\uc0ac\uc2e4 ",(0,t.jsx)(n.code,{children:"enum"}),"\uc740 \ub2e4\ub978 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc5d0\uc11c\ub294 \ud754\ud558\uac8c \uc0ac\uc6a9\ub418\ub294 \ud0c0\uc785\uc774\uc9c0\ub9cc \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\ub294 ",(0,t.jsx)(n.code,{children:"enum"}),"\ud0c0\uc785\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294\ub2e4."]}),"\n",(0,t.jsx)(n.h2,{id:"\uadf8\ub7fc-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\ub294-\uc5b4\ub5bb\uac8c-\uc4f0\uc9c0",children:"\uadf8\ub7fc \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\ub294 \uc5b4\ub5bb\uac8c \uc4f0\uc9c0?"}),"\n",(0,t.jsx)(n.p,{children:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\ub294 \uace0\uc815\uac12\uc744 \ub098\ud0c0\ub0a0\ub54c \uc774\ub984\uc744 \ub300\ubb38\uc790\ub85c \ub098\ud0c0\ub0b4\ub294 \uacbd\uc6b0\uac00 \uc77c\ubc18\uc801\uc774\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const MAX_HEIGHT = 100;\nconst MY_NAME = 'Seob';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\uc5f0\uad00\ub418\uc5b4-\uc788\uc9c0\ub9cc-\ubb36\uc744-\uc218-\uc5c6\ub294-\uc0c1\uc218\ub294",children:"\uc5f0\uad00\ub418\uc5b4 \uc788\uc9c0\ub9cc \ubb36\uc744 \uc218 \uc5c6\ub294 \uc0c1\uc218\ub294?"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const JANUARY = 0;\nconst FEBRUARY = 1;\n...\nconst DECEMBER = 11;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\uc774\ub807\uac8c \ubcc0\uc218\ub97c \ub530\ub85c \ub530\ub85c \ub9cc\ub4e4\uc5b4\uc918\uc57c\ud560\uae4c? \ud83d\ude2f"}),"\n",(0,t.jsxs)(n.p,{children:["\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \ucd5c\ub300\ud55c ",(0,t.jsx)(n.code,{children:"enum"}),"\uacfc \ube44\uc2b7\ud558\uac8c \ud45c\ud604\ud558\ub824\uba74 \uc774\ub807\uac8c \ud560 \uc218\ub3c4 \uc788\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const MONTHS = Object.freeze({\n  JANUARY: 0,\n  FEBRUARY: 1,\n  ...\n});\nconst firstMonth = MONTHS.JANUARY;\nconsole.log(firstMonth) // 0\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze",children:"Object.freeze()"})})," \uba54\uc11c\ub4dc\ub294 \uac1d\uccb4\ub97c ",(0,t.jsx)(n.strong,{children:"\ub3d9\uacb0"}),"\ud569\ub2c8\ub2e4. \ub3d9\uacb0\ub41c \uac1d\uccb4\ub294 \ub354 \uc774\uc0c1 \ubcc0\uacbd\ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc989, \ub3d9\uacb0\ub41c \uac1d\uccb4\ub294 \uc0c8\ub85c\uc6b4 \uc18d\uc131\uc744 \ucd94\uac00\ud558\uac70\ub098 \uc874\uc7ac\ud558\ub294 \uc18d\uc131\uc744 \uc81c\uac70\ud558\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\uba70 \uc874\uc7ac\ud558\ub294 \uc18d\uc131\uc758 \ubd88\ubcc0\uc131, \uc124\uc815 \uac00\ub2a5\uc131(configurability), \uc791\uc131 \uac00\ub2a5\uc131\uc774 \ubcc0\uacbd\ub418\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\uace0, \uc874\uc7ac\ud558\ub294 \uc18d\uc131\uc758 \uac12\uc774 \ubcc0\uacbd\ub418\ub294 \uac83\ub3c4 \ubc29\uc9c0\ud569\ub2c8\ub2e4. \ub610\ud55c, \ub3d9\uacb0 \uac1d\uccb4\ub294 \uadf8 \ud504\ub85c\ud1a0\ud0c0\uc785\uc774 \ubcc0\uacbd\ub418\ub294\uac83\ub3c4 \ubc29\uc9c0\ud569\ub2c8\ub2e4. freeze()\ub294 \uc804\ub2ec\ub41c \ub3d9\uc77c\ud55c \uac1d\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c-enum-\uc0ac\uc6a9\ubc95-",children:(0,t.jsxs)(n.strong,{children:["\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:"enum"})," \uc0ac\uc6a9\ubc95! \ud83e\udd13"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"enum Months { // enum\uc5d0\uc11c\ub294 \uc81c\uc77c \uc55e \uae00\uc790\ub9cc \ub300\ubb38\uc790\ub85c \uc801\ub294 \uac83\uc774 \uc77c\ubc18\uc801\uc774\ub2e4.\n  January,\n  February,\n  ...\n}\nconsole.log(MONTHS.January); // 0\nconsole.log(MONTHS.February); // 1\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\uc22b\uc790-\uc5f4\uac70\ud615-numeric-enums",children:"\uc22b\uc790 \uc5f4\uac70\ud615 (Numeric enums)"}),"\n",(0,t.jsxs)(n.p,{children:["\ub9cc\uc57d ",(0,t.jsx)(n.code,{children:"January"}),"\uc758 \uac12\uc740 1, ",(0,t.jsx)(n.code,{children:"February"}),"\ub294 2 ... \ub85c \ud558\ub824\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"enum Months {\n  January = 1,\n  February,\n  ...\n}\nconsole.log(MONTHS.January); // 1\nconsole.log(MONTHS.February); // 2\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\uc22b\uc790\ub85c \ud560\ub2f9\ud560 \uacbd\uc6b0 ",(0,t.jsx)(n.code,{children:"January"}),"\uc5d0\ub9cc \ud560\ub2f9\ud558\uac8c \ub418\uba74 ",(0,t.jsx)(n.code,{children:"February"}),"\ubd80\ud130\ub294 \uc790\ub3d9\uc73c\ub85c 1\uc529 \ud070 \uc218\uac00 \ud560\ub2f9\ub41c\ub2e4."]}),"\n",(0,t.jsx)(n.h3,{id:"\ubb38\uc790\uc5f4-\uc5f4\uac70\ud615-string-enums",children:"\ubb38\uc790\uc5f4 \uc5f4\uac70\ud615 (String enums)"}),"\n",(0,t.jsxs)(n.p,{children:["\uc704\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:"TypeScript\ub294 \uc22b\uc790\uc640 \ubb38\uc790\uc5f4-\uae30\ubc18 \uc5f4\uac70\ud615\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."})," \ub77c\uace0 \ud588\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\uc22b\uc790 \ub9d0\uace0 \ubb38\uc790\ub3c4 \ud560\ub2f9\uc774 \uac00\ub2a5\ud558\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"enum Months {\n  January = '1\uc6d4',\n  February = '2\uc6d4',\n  ...\n}\nconsole.log(MONTHS.January); // 1\uc6d4\nconsole.log(MONTHS.February); // 2\uc6d4\n``\n"})}),"\n",(0,t.jsx)(n.p,{children:"\uc22b\uc790\uc5d0\uc11c\ub294 \uc790\ub3d9\uc73c\ub85c 1\uc529 \ud070 \uc218\uac00 \ud560\ub2f9\ub418\uc5c8\uc9c0\ub9cc \ubb38\uc790\uc5f4\uc5d0\uc11c\ub294 \uc790\ub3d9\uc73c\ub85c \ud560\ub2f9\ub418\uc9c0 \uc54a\uc73c\ubbc0\ub85c \ubaa8\ub4e0 \uba64\ubc84\uc5d0 \uac12\uc744 \ud560\ub2f9\ud574\uc57c\ud55c\ub2e4."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\uc22b\uc790 \uc5f4\uac70\ud615\uc740 \uacc4\uc0b0\ub41c \uba64\ubc84\uc640 \uc0c1\uc218 \uba64\ubc84 (\uc544\ub798 \ucc38\uc870)\ub97c \uc11e\uc5b4\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac04\ub2e8\ud788 \ub9d0\ud574, \ucd08\uae30\ud654\ub418\uc9c0 \uc54a\uc740 \uc5f4\uac70\ud615\uc774 \uba3c\uc800 \ub098\uc624\uac70\ub098, \uc22b\uc790 \uc0c1\uc218 \ud639\uc740 \ub2e4\ub978 \uc0c1\uc218 \uc5f4\uac70\ud615 \uba64\ubc84\uc640 \ud568\uaed8 \ucd08\uae30\ud654\ub41c \uc22b\uc790 \uc5f4\uac70\ud615 \uc774\ud6c4\uc5d0 \uc640\uc57c \ud569\ub2c8\ub2e4. \uc989 \uc544\ub798 \ubc29\uc2dd\uc740 \ud5c8\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"enum E {\n  A = getSomeValue(),\n  B, // \uc624\ub958! \uc55e\uc5d0 \ub098\uc628 A\uac00 \uacc4\uc0b0\ub41c \uba64\ubc84\uc774\ubbc0\ub85c \ucd08\uae30\ud654\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\uadf8\ub798\uc11c-\uc5b8\uc81c-\uc5b4\ub5bb\uac8c-\uc4f0\uc8e0-",children:"\uadf8\ub798\uc11c \uc5b8\uc81c \uc5b4\ub5bb\uac8c \uc4f0\uc8e0?? \ud83e\udd28"}),"\n",(0,t.jsx)(n.p,{children:"\ub2e4\ub978 \uc5b8\uc5b4\uc5d0\uc11c\ub294 \uc720\uc6a9\ud558\uac8c \uc4f0\uc77c\uc9c0 \ubaa8\ub974\uc9c0\ub9cc \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\ub294 \ub418\ub3c4\ub85d\uc774\uba74 \uc4f0\uc9c0 \uc54a\ub294 \uac83\uc774 \uc88b\ub2e4\uace0 \ud55c\ub2e4..!"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://jjalbang.today/jjv1nt.gif",alt:"what..?"}),"\n",(0,t.jsx)(n.em,{children:"\uc544\ub2c8.. \uadf8\ub7fc \ubb50.. \uc65c.. \ubb58.. \uc368\uc57c\ud558\uc8e0?"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/67283770/141263485-3d514a37-5119-4150-9b7a-1d6a067cccb9.png",alt:"image"}),"\n",(0,t.jsx)(n.em,{children:"IDE\uc5d0\uc11c \uc790\ub3d9\uc73c\ub85c \ud0c0\uc785\uc774 \ucd94\ub860\ub418\ub294 \ubaa8\uc2b5"})]}),"\n",(0,t.jsx)(n.p,{children:"\uc790\ub3d9\uc73c\ub85c \ud0c0\uc785\ucd94\ub860\uc774 \ub418\uba74 \uc704\uc640 \uac19\uc774 \ub41c\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"enum Months {\n  January,\n  February,\n}\n\nlet firstMonth: Months = Months.January;\nfirstMonth = 2;\nfirstMonth = 999999; // \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294\ub2e4....? \ud83e\udd26\ud83c\udffb\u200d\u2642\ufe0f\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\uc704\uc758 \ucf54\ub4dc\uc5d0\uc11c \ucc98\ub7fc \ud0c0\uc785\uc744 ",(0,t.jsx)(n.code,{children:"Months"}),"\ub85c \uc9c0\uc815\ud574\uc8fc\uc5c8\uc9c0\ub9cc 999999\uac19\uc740 \uc774\uc0c1\ud55c \uc22b\uc790\ub97c \ub123\uc5b4\ub3c4 \uc544\ubb34\ub7f0 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294\ub2e4.\n\uc774\ub807\uac8c ",(0,t.jsx)(n.code,{children:"enum"}),"\uc744 \uc0ac\uc6a9\ud558\uba74 \ud0c0\uc785\uc774 \uc815\ud655\ud788 \ubcf4\uc7a5\ub418\uc9c0 \uc54a\ub294\ub2e4."]}),"\n",(0,t.jsx)(n.h3,{id:"\uadf8\ub7fc-\ubb58-\uc368\uc57c\ud558\ub0d0-",children:"\uadf8\ub7fc \ubb58 \uc368\uc57c\ud558\ub0d0..! \ud83e\udd2f"}),"\n",(0,t.jsxs)(n.p,{children:["\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\ub294 \uc0c1\uc218\ub97c \ubb36\uc744 \uc218 \uc788\ub294 \ubc29\ubc95\uc774 ",(0,t.jsx)(n.code,{children:"enum"})," \ub9d0\uace0\ub3c4 \ud55c \uac00\uc9c0 \ub354 \uc788\ub2e4!\n",(0,t.jsx)(n.code,{children:"type"})," alias\uc758 union \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type Months = 'January' | 'February' | 'March' | ...\nlet firstMonth:Months = 'January';\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/67283770/141265470-5cf81fec-efd5-4a6e-bf8f-fe3c7356cd8d.png",alt:"image"}),"\n",(0,t.jsx)(n.em,{children:"IDE\uc5d0\uc11c \uc790\ub3d9\uc644\uc131\ub3c4 \uc798 \ub41c\ub2e4."})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/67283770/141265851-acd276da-ae86-4422-92e2-88333689f36f.png",alt:"image"}),"\n",(0,t.jsx)(n.em,{children:"\uc5c9\ub6b1\ud55c \ubb38\uc790\uc5f4\uc744 \ud560\ub2f9\ud558\uba74 \uc5d0\ub7ec\ub97c \ubc1c\uc0dd\uc2dc\ud0a8\ub2e4."})]}),"\n",(0,t.jsxs)(n.p,{children:["\uc774\ub807\uac8c \uac00\ub2a5\ud558\uba74 ",(0,t.jsx)(n.code,{children:"enum"}),"\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294\uac8c \uc88b\uace0, \ub2e4\ub978 \ubaa8\ubc14\uc77c \ud074\ub77c\uc774\uc5b8\ud2b8(\ucf54\ud2c0\ub9b0, \uc2a4\uc704\ud504\ud2b8)\uc640 \uc758\uc0ac\uc18c\ud1b5\uc744 \ud574\uc57c\ud558\ub294 \uacbd\uc6b0\uac00 \uc544\ub2c8\ub77c\uba74 ",(0,t.jsx)(n.code,{children:"enum"}),"\uc744 \uc0ac\uc6a9\ud574\uc57c\ud560 \ud2b9\uc774\ud55c \uacbd\uc6b0\ub294 \uc5c6\uc744 \uac83 \uac19\ub2e4."]}),"\n",(0,t.jsx)(n.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"enum"}),"\uc740 \uaf2d \ud544\uc694\ud55c \uacbd\uc6b0\uac00 \uc544\ub2c8\ub77c\uba74 ",(0,t.jsx)(n.code,{children:"type"})," alias\uc758 union\ud0c0\uc785\uc744 \uc4f0\uc790!"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://ww.namu.la/s/2b38937bb1ead788420b12c0f2f31d441cfc8af59d3fba718c03085bd37cacece7eaae2bc0e47717d99177eb018bd48b66075acf90a58840228eeb6fa02eeca1007e6df2caeb0816f1a9d14cd30b13ea",alt:"no more explanation"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(6540);const r={},c=t.createContext(r);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);