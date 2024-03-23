"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7421],{8825:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=r(4848),i=r(5680);const l={slug:"[\ud504\ub85c\uadf8\ub798\uba38\uc2a4-lv1]-K\ubc88\uc9f8\uc218",title:"[\ud504\ub85c\uadf8\ub798\uba38\uc2a4 lv1] K\ubc88\uc9f8\uc218",authors:"seob",tags:["javascript","algorithm","programmers","level1"]},a=void 0,o={permalink:"/algorithms/[\ud504\ub85c\uadf8\ub798\uba38\uc2a4-lv1]-K\ubc88\uc9f8\uc218",editUrl:"https://github.com/seobie/seobie.github.io/tree/main/algorithms/2021/12/2021-12-14-kth-number.md",source:"@site/algorithms/2021/12/2021-12-14-kth-number.md",title:"[\ud504\ub85c\uadf8\ub798\uba38\uc2a4 lv1] K\ubc88\uc9f8\uc218",description:"\uc815\ub82c \\> K\ubc88\uc9f8\uc218",date:"2021-12-14T00:00:00.000Z",formattedDate:"December 14, 2021",tags:[{label:"javascript",permalink:"/algorithms/tags/javascript"},{label:"algorithm",permalink:"/algorithms/tags/algorithm"},{label:"programmers",permalink:"/algorithms/tags/programmers"},{label:"level1",permalink:"/algorithms/tags/level-1"}],readingTime:2.935,hasTruncateMarker:!0,authors:[{name:"\uc774\uc601\uc12d",title:"Frontend Engineer",url:"https://github.com/seobie",imageURL:"https://avatars.githubusercontent.com/u/67283770?v=4",key:"seob"}],frontMatter:{slug:"[\ud504\ub85c\uadf8\ub798\uba38\uc2a4-lv1]-K\ubc88\uc9f8\uc218",title:"[\ud504\ub85c\uadf8\ub798\uba38\uc2a4 lv1] K\ubc88\uc9f8\uc218",authors:"seob",tags:["javascript","algorithm","programmers","level1"]},unlisted:!1,prevItem:{title:"[\ud504\ub85c\uadf8\ub798\uba38\uc2a4 lv2] \uce74\ud3ab",permalink:"/algorithms/[\ud504\ub85c\uadf8\ub798\uba38\uc2a4-lv2]-\uce74\ud3ab"},nextItem:{title:"[\ud504\ub85c\uadf8\ub798\uba38\uc2a4 lv1] \uc644\uc8fc\ud558\uc9c0 \ubabb\ud55c \uc120\uc218",permalink:"/algorithms/[\ud504\ub85c\uadf8\ub798\uba38\uc2a4-lv1]-\uc644\uc8fc\ud558\uc9c0-\ubabb\ud55c-\uc120\uc218"}},s={authorsImageUrls:[void 0]},c=[{value:"\ubb38\uc81c \uc124\uba85",id:"\ubb38\uc81c-\uc124\uba85",level:2},{value:"\uc81c\ud55c \uc0ac\ud56d",id:"\uc81c\ud55c-\uc0ac\ud56d",level:2},{value:"\uc785\ucd9c\ub825 \uc608",id:"\uc785\ucd9c\ub825-\uc608",level:2},{value:"\uc785\ucd9c\ub825 \uc608\uc5d0 \ub300\ud55c \uc124\uba85",id:"\uc785\ucd9c\ub825-\uc608\uc5d0-\ub300\ud55c-\uc124\uba85",level:2},{value:"\ub0b4\uac00 \uc791\uc131\ud55c \ub2f5",id:"\ub0b4\uac00-\uc791\uc131\ud55c-\ub2f5",level:2},{value:"\uc88b\uc544\uc694\ub97c \ub9ce\uc774 \ubc1b\uc740 \ub2f5",id:"\uc88b\uc544\uc694\ub97c-\ub9ce\uc774-\ubc1b\uc740-\ub2f5",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.RP)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\uc815\ub82c > K\ubc88\uc9f8\uc218"}),"\n",(0,t.jsx)(n.h2,{id:"\ubb38\uc81c-\uc124\uba85",children:"\ubb38\uc81c \uc124\uba85"}),"\n",(0,t.jsx)(n.p,{children:"\ubc30\uc5f4 array\uc758 i\ubc88\uc9f8 \uc22b\uc790\ubd80\ud130 j\ubc88\uc9f8 \uc22b\uc790\uae4c\uc9c0 \uc790\ub974\uace0 \uc815\ub82c\ud588\uc744 \ub54c, k\ubc88\uc9f8\uc5d0 \uc788\ub294 \uc218\ub97c \uad6c\ud558\ub824 \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\uc608\ub97c \ub4e4\uc5b4 array\uac00 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3\uc774\ub77c\uba74"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"array\uc758 2\ubc88\uc9f8\ubd80\ud130 5\ubc88\uc9f8\uae4c\uc9c0 \uc790\ub974\uba74 [5, 2, 6, 3]\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"1\uc5d0\uc11c \ub098\uc628 \ubc30\uc5f4\uc744 \uc815\ub82c\ud558\uba74 [2, 3, 5, 6]\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"2\uc5d0\uc11c \ub098\uc628 \ubc30\uc5f4\uc758 3\ubc88\uc9f8 \uc22b\uc790\ub294 5\uc785\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\ubc30\uc5f4 array, [i, j, k]\ub97c \uc6d0\uc18c\ub85c \uac00\uc9c4 2\ucc28\uc6d0 \ubc30\uc5f4 commands\uac00 \ub9e4\uac1c\ubcc0\uc218\ub85c \uc8fc\uc5b4\uc9c8 \ub54c, commands\uc758 \ubaa8\ub4e0 \uc6d0\uc18c\uc5d0 \ub300\ud574 \uc55e\uc11c \uc124\uba85\ud55c \uc5f0\uc0b0\uc744 \uc801\uc6a9\ud588\uc744 \ub54c \ub098\uc628 \uacb0\uacfc\ub97c \ubc30\uc5f4\uc5d0 \ub2f4\uc544 return \ud558\ub3c4\ub85d solution \ud568\uc218\ub97c \uc791\uc131\ud574\uc8fc\uc138\uc694."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\uc81c\ud55c-\uc0ac\ud56d",children:"\uc81c\ud55c \uc0ac\ud56d"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"array\uc758 \uae38\uc774\ub294 1 \uc774\uc0c1 100 \uc774\ud558\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"array\uc758 \uac01 \uc6d0\uc18c\ub294 1 \uc774\uc0c1 100 \uc774\ud558\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"commands\uc758 \uae38\uc774\ub294 1 \uc774\uc0c1 50 \uc774\ud558\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"commands\uc758 \uac01 \uc6d0\uc18c\ub294 \uae38\uc774\uac00 3\uc785\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\uc785\ucd9c\ub825-\uc608",children:"\uc785\ucd9c\ub825 \uc608"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"array"}),(0,t.jsx)(n.th,{children:"commands"}),(0,t.jsx)(n.th,{children:"return"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[1, 5, 2, 6, 3, 7, 4]"}),(0,t.jsx)(n.td,{children:"[[2, 5, 3], [4, 4, 1], [1, 7, 3]]"}),(0,t.jsx)(n.td,{children:"[5, 6, 3]"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\uc785\ucd9c\ub825-\uc608\uc5d0-\ub300\ud55c-\uc124\uba85",children:"\uc785\ucd9c\ub825 \uc608\uc5d0 \ub300\ud55c \uc124\uba85"}),"\n",(0,t.jsx)(n.p,{children:"[1, 5, 2, 6, 3, 7, 4]\ub97c 2\ubc88\uc9f8\ubd80\ud130 5\ubc88\uc9f8\uae4c\uc9c0 \uc790\ub978 \ud6c4 \uc815\ub82c\ud569\ub2c8\ub2e4. [2, 3, 5, 6]\uc758 \uc138 \ubc88\uc9f8 \uc22b\uc790\ub294 5\uc785\ub2c8\ub2e4.\n[1, 5, 2, 6, 3, 7, 4]\ub97c 4\ubc88\uc9f8\ubd80\ud130 4\ubc88\uc9f8\uae4c\uc9c0 \uc790\ub978 \ud6c4 \uc815\ub82c\ud569\ub2c8\ub2e4. [6]\uc758 \uccab \ubc88\uc9f8 \uc22b\uc790\ub294 6\uc785\ub2c8\ub2e4.\n[1, 5, 2, 6, 3, 7, 4]\ub97c 1\ubc88\uc9f8\ubd80\ud130 7\ubc88\uc9f8\uae4c\uc9c0 \uc790\ub985\ub2c8\ub2e4. [1, 2, 3, 4, 5, 6, 7]\uc758 \uc138 \ubc88\uc9f8 \uc22b\uc790\ub294 3\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://neerc.ifmo.ru/subregions/northern.html",children:"\ucd9c\ucc98"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\ub0b4\uac00-\uc791\uc131\ud55c-\ub2f5",children:"\ub0b4\uac00 \uc791\uc131\ud55c \ub2f5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function solution(array, commands) {\n  return commands.map(\n    ([i, j, k]) => array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\uc88b\uc544\uc694\ub97c-\ub9ce\uc774-\ubc1b\uc740-\ub2f5",children:"\uc88b\uc544\uc694\ub97c \ub9ce\uc774 \ubc1b\uc740 \ub2f5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"var solution = (_, $) =>\n  _.find(\n    (_) => !$[_]--,\n    $.map((_) => ($[_] = ($[_] | 0) + 1))\n  );\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function solution(participant, completion) {\n  /*\n    for(let i in participant) {\n        if(completion.includes(participant[i]) == false) return participant[i];\n        completion.splice(completion.indexOf(participant[i]), 1);\n    }\n    */\n\n  participant.sort();\n  completion.sort();\n\n  for (let i in participant) {\n    if (participant[i] !== completion[i]) return participant[i];\n  }\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function solution(participant, completion) {\n  var dic = completion.reduce(\n    (obj, t) => ((obj[t] = obj[t] ? obj[t] + 1 : 1), obj),\n    {}\n  );\n  return participant.find((t) => {\n    if (dic[t]) dic[t] = dic[t] - 1;\n    else return true;\n  });\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.RP)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5680:(e,n,r)=>{r.d(n,{RP:()=>c});var t=r(6540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(r),m=i,u=h["".concat(s,".").concat(m)]||h[m]||d[m]||l;return r?t.createElement(u,a(a({ref:n},p),{},{components:r})):t.createElement(u,a({ref:n},p))}));p.displayName="MDXCreateElement"}}]);