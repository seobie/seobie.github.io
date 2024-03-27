"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3249],{6977:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var s=n(6540),i=n(4164),r=n(9024),o=n(7559),a=n(9512),l=n(6535),c=n(8258),d=n(1312),u=n(9022),m=n(4848);function g(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(u.A,{...n,subLabel:(0,m.jsx)(d.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,m.jsx)(u.A,{...t,subLabel:(0,m.jsx)(d.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}var h=n(5293);const f=function(){const e=(0,s.useRef)(null),t=(0,s.useRef)(null),{colorMode:n}=(0,h.G)(),i="dark"===n?"github-dark":"github-light",r=(0,s.useCallback)((()=>{const n=document.createElement("script");n.src="https://utteranc.es/client.js",n.setAttribute("repo","seobie/seobie.github.io"),n.setAttribute("issue-term","title"),n.setAttribute("label","comment"),n.setAttribute("theme",i),n.crossOrigin="anonymous",n.async=!0,n.onload=()=>{t.current=document.querySelector(".utterances-frame")},e.current?.appendChild(n)}),[i]);return(0,s.useEffect)((()=>{r()}),[r]),(0,s.useEffect)((()=>{if(!t.current)return;const e={type:"set-theme",theme:i};t.current.contentWindow?.postMessage(e,"https://utteranc.es")}),[i]),(0,m.jsx)("div",{ref:e})};function p(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(g,{...e}),(0,m.jsx)(f,{})]})}function v(){const{assets:e,metadata:t}=(0,a.e)(),{title:n,description:s,date:i,tags:o,authors:l,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(r.be,{title:n,description:s,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:i}),l.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var x=n(7763),b=n(996);function j(e){let{sidebar:t,children:n}=e;const{metadata:s,toc:i}=(0,a.e)(),{nextItem:r,prevItem:o,frontMatter:d,unlisted:u}=s,{hide_table_of_contents:g,toc_min_heading_level:h,toc_max_heading_level:f}=d;return(0,m.jsxs)(l.A,{sidebar:t,toc:!g&&i.length>0?(0,m.jsx)(x.A,{toc:i,minHeadingLevel:h,maxHeadingLevel:f}):void 0,children:[u&&(0,m.jsx)(b.A,{}),(0,m.jsx)(c.A,{children:n}),(r||o)&&(0,m.jsx)(p,{nextItem:r,prevItem:o})]})}function L(e){const t=e.content;return(0,m.jsx)(a.i,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(r.e3,{className:(0,i.A)(o.G.wrapper.blogPages,o.G.page.blogPostPage),children:[(0,m.jsx)(v,{}),(0,m.jsx)(j,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},7763:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var s=n(4164),i=n(5195);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var o=n(4848);const a="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,o.jsx)("div",{className:(0,s.A)(r.tableOfContents,"thin-scrollbar",t),children:(0,o.jsx)(i.A,{...n,linkClassName:a,linkActiveClassName:l})})}},5195:(e,t,n)=>{n.d(t,{A:()=>f});var s=n(6540),i=n(6342);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)})),s}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function a(e){const t=e.getBoundingClientRect();return t.top===t.bottom?a(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>a(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:r,maxHeadingLevel:o}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),a=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let i=t;i<=n;i+=1)s.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=l(a,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,n])}var u=n(8774),m=n(4848);function g(e){let{toc:t,className:n,linkClassName:s,isChild:i}=e;return t.length?(0,m.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const h=s.memo(g);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...g}=e;const f=(0,i.p)(),p=c??f.tableOfContents.minHeadingLevel,v=u??f.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>o({toc:r(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:p,maxHeadingLevel:v});return d((0,s.useMemo)((()=>{if(a&&l)return{linkClassName:a,linkActiveClassName:l,minHeadingLevel:p,maxHeadingLevel:v}}),[a,l,p,v])),(0,m.jsx)(h,{toc:x,className:n,linkClassName:a,...g})}},996:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var s=n(4164),i=n(1312),r=n(5260),o=n(4848);function a(){return(0,o.jsx)(i.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,o.jsx)(i.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(r.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(7559),u=n(7293);function m(e){let{className:t}=e;return(0,o.jsx)(u.A,{type:"caution",title:(0,o.jsx)(a,{}),className:(0,s.A)(t,d.G.common.unlistedBanner),children:(0,o.jsx)(l,{})})}function g(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,{...e})]})}}}]);