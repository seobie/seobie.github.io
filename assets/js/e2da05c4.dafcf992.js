"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1782],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(r),f=o,m=b["".concat(l,".").concat(f)]||b[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},9115:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var n=r(3117),o=(r(7294),r(3905));const a={slug:"[JavaScript]-\uc2e4\ud589\ucee8\ud0dd\uc2a4\ud2b8-Execution-Context-2",title:"[JavaScript] \uc2e4\ud589\ucee8\ud0dd\uc2a4\ud2b8 (Execution Context) - 2 (\ud638\uc774\uc2a4\ud305 \uc9c1\uc811 \ubcf4\uace0\ud83d\udc40 \uc774\ud574\ud558\uae30\ud83d\udca1)",authors:"seob",tags:["basics","javascript","js","\ucf54\uc5b4\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8","core-javascript"]},i=void 0,c={permalink:"/blog/[JavaScript]-\uc2e4\ud589\ucee8\ud0dd\uc2a4\ud2b8-Execution-Context-2",editUrl:"https://github.com/seobie/seobie.github.io/tree/main/blog/2021/02/2021-02-25-execution-context-2.md",source:"@site/blog/2021/02/2021-02-25-execution-context-2.md",title:"[JavaScript] \uc2e4\ud589\ucee8\ud0dd\uc2a4\ud2b8 (Execution Context) - 2 (\ud638\uc774\uc2a4\ud305 \uc9c1\uc811 \ubcf4\uace0\ud83d\udc40 \uc774\ud574\ud558\uae30\ud83d\udca1)",description:"\uc544\ub798 \ub0b4\uc6a9\uc740 \ucf54\uc5b4\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ucc38\uace0\ud558\uc5ec \uc815\ub9ac\ud55c \ub0b4\uc6a9\uc73c\ub85c, \uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc81c\uc678\ud55c \ub300\ubd80\ubd84\uc758 \ub0b4\uc6a9\uacfc \uc0ac\uc9c4\uc758 \ucd9c\ucc98\ub294 ``\uc785\ub2c8\ub2e4!",date:"2021-02-25T00:00:00.000Z",formattedDate:"February 25, 2021",tags:[{label:"basics",permalink:"/blog/tags/basics"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"js",permalink:"/blog/tags/js"},{label:"\ucf54\uc5b4\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8",permalink:"/blog/tags/\ucf54\uc5b4\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8"},{label:"core-javascript",permalink:"/blog/tags/core-javascript"}],readingTime:11.91,hasTruncateMarker:!0,authors:[{name:"\uc774\uc601\uc12d",title:"Frontend Engineer",url:"https://github.com/seobie",imageURL:"https://avatars.githubusercontent.com/u/67283770?v=4",key:"seob"}],frontMatter:{slug:"[JavaScript]-\uc2e4\ud589\ucee8\ud0dd\uc2a4\ud2b8-Execution-Context-2",title:"[JavaScript] \uc2e4\ud589\ucee8\ud0dd\uc2a4\ud2b8 (Execution Context) - 2 (\ud638\uc774\uc2a4\ud305 \uc9c1\uc811 \ubcf4\uace0\ud83d\udc40 \uc774\ud574\ud558\uae30\ud83d\udca1)",authors:"seob",tags:["basics","javascript","js","\ucf54\uc5b4\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8","core-javascript"]},prevItem:{title:"Mac \uc5d0\ub7ec \ud574\uacb0\uae30 (xcrun: error: invalid active developer path)",permalink:"/blog/Mac-\uc5d0\ub7ec-\ud574\uacb0\uae30-xcrun:-error:-invalid-active-developer-path"},nextItem:{title:"[JavaScript] \uc2e4\ud589\ucee8\ud0dd\uc2a4\ud2b8 (Execution Context) - 1",permalink:"/blog/[JavaScript]-\uc2e4\ud589\ucee8\ud0dd\uc2a4\ud2b8-Execution-Context-1"}},l={authorsImageUrls:[void 0]},u=[],p={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\uc544\ub798 \ub0b4\uc6a9\uc740 \ucf54\uc5b4\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ucc38\uace0\ud558\uc5ec \uc815\ub9ac\ud55c \ub0b4\uc6a9\uc73c\ub85c, \uc2a4\ud06c\ub9b0\uc0f7\uc744 \uc81c\uc678\ud55c \ub300\ubd80\ubd84\uc758 \ub0b4\uc6a9\uacfc \uc0ac\uc9c4\uc758 \ucd9c\ucc98\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"<\ucf54\uc5b4\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc800\uc790 \uc815\uc7ac\ub0a8 \ucd9c\ud310 \uc704\ud0a4\ubcf5\uc2a4>"),"\uc785\ub2c8\ub2e4!")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://velog.io/@seob/%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-Execution-Context"},"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8(Execution Context)"),"\uc5d0\uc11c \ucf5c \uc2a4\ud0dd\uc5d0 \ubb34\uc5c7\uc774 \ub2f4\uae30\ub294\uc9c0 \uc54c\uc544\ubcf4\uc558\ub2e4."))}s.isMDXComponent=!0}}]);