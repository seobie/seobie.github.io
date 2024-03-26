"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3974],{1738:(t,e,n)=>{n.d(e,{S:()=>j,G:()=>C});var i=n(8774),r=n(9201),l=n(6540),s=n(7444);const c=(0,s.eU)({key:"counterState",default:0}),o=(0,s.gD)({key:"getCount",get:t=>{let{get:e}=t;return e(c)}});var u=n(4848);function d(){const t=(0,s.vc)(o);return(0,u.jsx)(u.Fragment,{children:t})}var a=n(1309);const x=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div:first-child {
    display: flex;
    align-items: center;
  }
`;function h(){const t=(0,s.lZ)(c);let e=null;const n=()=>t((t=>t+1));return(0,u.jsxs)(x,{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{onClick:()=>t((t=>t-1)),children:"-"}),(0,u.jsxs)("div",{children:["Count: ",(0,u.jsx)(d,{})]}),(0,u.jsx)("button",{onClick:n,children:"+"})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{onClick:()=>e=setInterval((()=>n()),1e3),children:"auto-increment start"}),(0,u.jsx)("button",{onClick:()=>clearInterval(e),children:"auto-increment stop"})]})]})}function j(){return(0,u.jsx)(s.bi,{children:(0,u.jsxs)(r.A,{children:[(0,u.jsx)(i.A,{to:"/playground",children:"\u2190 back"}),(0,u.jsx)("h1",{children:"Counter with Recoil"}),(0,u.jsx)(h,{})]})})}const p=(0,s.eU)({key:"todoState",default:[]}),f=(0,s.gD)({key:"getTodos",get:t=>{let{get:e}=t;return e(p)}}),g=a.Ay.li`
  display: flex;
`,b=(0,l.memo)((function(t){let{children:e}=t;return(0,u.jsxs)(g,{children:[(0,u.jsx)("input",{type:"checkbox"}),e,(0,u.jsx)("button",{type:"button",children:"edit"}),(0,u.jsx)("button",{type:"button",children:"remove"})]})}));function y(){const t=(0,s.vc)(f);return(0,u.jsx)("ul",{children:t.map(((t,e)=>{let{text:n}=t;return(0,u.jsx)(b,{children:n},e)}))})}const v=t=>{const[e,n]=(0,l.useState)(t);return{inputValue:e,setInputValue:n,onChange:t=>n(t.target.value)}},k=a.Ay.form`
  display: flex;
  align-items: center;
`;function m(){const{inputValue:t,setInputValue:e,onChange:n}=v(""),[i,r]=(0,s.L4)(p);return(0,u.jsxs)(k,{onSubmit:n=>{n.preventDefault(),r([{id:Date.now().toString(),createdAt:Date.now().toString(),isDone:!1,text:t},...i]),e("")},children:[(0,u.jsx)("input",{type:"text",value:t,onChange:n}),(0,u.jsx)("button",{type:"submit",children:"add"})]})}function C(){return(0,u.jsx)(s.bi,{children:(0,u.jsxs)(r.A,{children:[(0,u.jsx)(i.A,{to:"/playground",children:"\u2190 back"}),(0,u.jsx)("h1",{children:"Todo-list with Recoil"}),(0,u.jsx)(m,{}),(0,u.jsx)(y,{})]})})}},6390:(t,e,n)=>{n.r(e),n.d(e,{default:()=>l});n(6540);var i=n(1738),r=n(4848);function l(){return(0,r.jsx)(i.S,{})}}}]);