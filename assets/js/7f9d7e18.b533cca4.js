"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9554],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var g=r.createContext({}),p=function(t){var e=r.useContext(g),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(g.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,g=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(n),s=a,h=c["".concat(g,".").concat(s)]||c[s]||m[s]||l;return n?r.createElement(h,i(i({ref:e},u),{},{components:n})):r.createElement(h,i({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var g in e)hasOwnProperty.call(e,g)&&(o[g]=e[g]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},752:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return g},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={slug:"oh-my-zsh-git-plugin-cheatsheet",title:"oh-my-zsh git plugin cheatsheet",authors:"seob",tags:["zsh","terminal","oh-my-zsh","git"]},g=void 0,p={permalink:"/blog/oh-my-zsh-git-plugin-cheatsheet",editUrl:"https://github.com/seobie/seobie.github.io/blog/2021-11-15-oh-my-zsh-git-plugin-cheatsheet.md",source:"@site/blog/2021-11-15-oh-my-zsh-git-plugin-cheatsheet.md",title:"oh-my-zsh git plugin cheatsheet",description:"oh-my-zsh\uc758 git plugin\uc740 \ub9ce\uc740 \uae43 \ub2e8\ucd95\uc5b4\ub97c \uc81c\uacf5\ud55c\ub2e4.",date:"2021-11-15T00:00:00.000Z",formattedDate:"November 15, 2021",tags:[{label:"zsh",permalink:"/blog/tags/zsh"},{label:"terminal",permalink:"/blog/tags/terminal"},{label:"oh-my-zsh",permalink:"/blog/tags/oh-my-zsh"},{label:"git",permalink:"/blog/tags/git"}],readingTime:.825,truncated:!0,authors:[{name:"\uc774\uc601\uc12d",title:"Frontend Engineer",url:"https://github.com/seobie",imageURL:"https://avatars.githubusercontent.com/u/67283770?v=4",key:"seob"}],frontMatter:{slug:"oh-my-zsh-git-plugin-cheatsheet",title:"oh-my-zsh git plugin cheatsheet",authors:"seob",tags:["zsh","terminal","oh-my-zsh","git"]},prevItem:{title:"[\ud504\ub85c\uadf8\ub798\uba38\uc2a4 lv1] [1\ucc28] \ube44\ubc00\uc9c0\ub3c4",permalink:"/blog/[\ud504\ub85c\uadf8\ub798\uba38\uc2a4-lv1]-[1\ucc28]-\ube44\ubc00\uc9c0\ub3c4"},nextItem:{title:"[\ud504\ub85c\uadf8\ub798\uba38\uc2a4 lv1] \ub450 \uac1c \ubf51\uc544\uc11c \ub354\ud558\uae30",permalink:"/blog/[\ud504\ub85c\uadf8\ub798\uba38\uc2a4-lv1]-\ub450-\uac1c-\ubf51\uc544\uc11c-\ub354\ud558\uae30"}},u={authorsImageUrls:[void 0]},m=[],c={toc:m};function s(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"oh-my-zsh\uc758 git plugin\uc740 \ub9ce\uc740 \uae43 \ub2e8\ucd95\uc5b4\ub97c \uc81c\uacf5\ud55c\ub2e4."),(0,l.kt)("p",null,"\ubaa8\ub4e0 \ub2e8\ucd95\uc5b4\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git#aliases"},"\uc5ec\uae30"),"\uc5d0 \uc798 \uc815\ub9ac\ub418\uc5b4\uc788\ub2e4."),(0,l.kt)("p",null,"\uc774 \uc911 \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 \ub2e8\ucd95\uc5b4\ub97c \uc815\ub9ac\ud574\ub450\ub824\uace0 \ud55c\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Alias"),(0,l.kt)("th",{parentName:"tr",align:null},"Command"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gst"),(0,l.kt)("td",{parentName:"tr",align:null},"git state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ga"),(0,l.kt)("td",{parentName:"tr",align:null},"git add")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gaa"),(0,l.kt)("td",{parentName:"tr",align:null},"git add -all")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gl"),(0,l.kt)("td",{parentName:"tr",align:null},"git pull")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ggl"),(0,l.kt)("td",{parentName:"tr",align:null},"git pull origin $(current branch)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gp"),(0,l.kt)("td",{parentName:"tr",align:null},"git push")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ggp"),(0,l.kt)("td",{parentName:"tr",align:null},"git push origin $(current branch)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gco"),(0,l.kt)("td",{parentName:"tr",align:null},"git checkout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gco -"),(0,l.kt)("td",{parentName:"tr",align:null},"(git checkout to previous branch)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gcb"),(0,l.kt)("td",{parentName:"tr",align:null},"git checkout -b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"glgga"),(0,l.kt)("td",{parentName:"tr",align:null},"git log --graph --decorate --all")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"glola"),(0,l.kt)("td",{parentName:"tr",align:null},"git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset' --all")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gd"),(0,l.kt)("td",{parentName:"tr",align:null},"git diff")))))}s.isMDXComponent=!0}}]);