"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8618],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),b=o,g=m["".concat(u,".").concat(b)]||m[b]||p[b]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2398:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return c},toc:function(){return p},default:function(){return b}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={slug:"what-is-enum-and-is-it-good",title:"[TypeScript] enum\uc740 \ubb50\uc9c0? \uc368\uc57c\ud560\uae4c?",authors:"seob",tags:["typescript","basics","enum","javascript","ts","js"]},u=void 0,s={permalink:"/blog/what-is-enum-and-is-it-good",editUrl:"https://github.com/seobie/seobie.github.io/blog/2021-11-11-what-is-enum-and-is-it-good.md",source:"@site/blog/2021-11-11-what-is-enum-and-is-it-good.md",title:"[TypeScript] enum\uc740 \ubb50\uc9c0? \uc368\uc57c\ud560\uae4c?",description:"Enum? \uc774\uac8c \ubb58\uae4c?\ud83e\udd37\ud83c\udffb\u200d\u2642\ufe0f",date:"2021-11-11T00:00:00.000Z",formattedDate:"November 11, 2021",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"basics",permalink:"/blog/tags/basics"},{label:"enum",permalink:"/blog/tags/enum"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"ts",permalink:"/blog/tags/ts"},{label:"js",permalink:"/blog/tags/js"}],readingTime:6.47,truncated:!0,authors:[{name:"\uc774\uc601\uc12d",title:"Frontend Engineer",url:"https://github.com/seobie",imageURL:"https://avatars.githubusercontent.com/u/67283770?v=4",key:"seob"}],frontMatter:{slug:"what-is-enum-and-is-it-good",title:"[TypeScript] enum\uc740 \ubb50\uc9c0? \uc368\uc57c\ud560\uae4c?",authors:"seob",tags:["typescript","basics","enum","javascript","ts","js"]},prevItem:{title:"[\ud504\ub85c\uadf8\ub798\uba38\uc2a4 lv1] \uc22b\uc790 \ubb38\uc790\uc5f4\uacfc \uc601\ub2e8\uc5b4",permalink:"/blog/[\ud504\ub85c\uadf8\ub798\uba38\uc2a4-lv1]-\uc22b\uc790-\ubb38\uc790\uc5f4\uacfc-\uc601\ub2e8\uc5b4"},nextItem:{title:"[\ud504\ub85c\uadf8\ub798\uba38\uc2a4 lv1] \ub85c\ub610\uc758 \ucd5c\uace0 \uc21c\uc704\uc640 \ucd5c\uc800 \uc21c\uc704",permalink:"/blog/[\ud504\ub85c\uadf8\ub798\uba38\uc2a4-lv1]-\ub85c\ub610\uc758-\ucd5c\uace0-\uc21c\uc704\uc640-\ucd5c\uc800-\uc21c\uc704"}},c={authorsImageUrls:[void 0]},p=[{value:"Enum? \uc774\uac8c \ubb58\uae4c?\ud83e\udd37\ud83c\udffb\u200d\u2642\ufe0f",id:"enum-\uc774\uac8c-\ubb58\uae4c\ufe0f",level:2}],m={toc:p};function b(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"enum-\uc774\uac8c-\ubb58\uae4c\ufe0f"},"Enum? \uc774\uac8c \ubb58\uae4c?\ud83e\udd37\ud83c\udffb\u200d\u2642\ufe0f"),(0,a.kt)("p",null,"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"enum"),"\uc774\ub77c\ub294 \uac83\uc774 \uc788\ub2e4. ",(0,a.kt)("a",{parentName:"p",href:"https://typescript-kr.github.io/pages/enums.html"},"\ud55c\uad6d\uc5b4 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 \ud578\ub4dc\ubd81"),"\uc5d0\uc11c\ub294 \uc5f4\uac70\ud615\uc774\ub77c\uace0 \ud45c\ud604\ud558\uace0 \uc788\uc73c\uba70, \ub2e4\uc74c\uacfc \uac19\uc774 \uc815\uc758\ud55c\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\uc5f4\uac70\ud615\uc73c\ub85c \uc774\ub984\uc774 \uc788\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\uc0c1\uc218\ub4e4\uc758 \uc9d1\ud569\uc744 \uc815\uc758"),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5f4\uac70\ud615\uc744 \uc0ac\uc6a9\ud558\uba74 \uc758\ub3c4\ub97c \ubb38\uc11c\ud654 \ud558\uac70\ub098 \uad6c\ubd84\ub418\ub294 \uc0ac\ub840 \uc9d1\ud569\uc744 \ub354 \uc27d\uac8c \ub9cc\ub4e4\uc218 \uc788\uc2b5\ub2c8\ub2e4. TypeScript\ub294 \uc22b\uc790\uc640 \ubb38\uc790\uc5f4-\uae30\ubc18 \uc5f4\uac70\ud615\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.")))}b.isMDXComponent=!0}}]);