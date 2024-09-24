import{j as e,u as d}from"./index-B9vy-AFg.js";import{p as i}from"./README-ja20PUz3.js";const m="_card_1jvyd_1",a={card:m},s=({className:n,...o})=>e.jsx("div",{...o,className:[a.card,n].filter(Boolean).join(" ")}),l=()=>e.jsx(s,{children:"demo1"}),u=`

import React from 'react'
import { Card } from 'my-lib'

const Demo1 = () => {
  return <Card>demo1</Card>
}

export default Demo1
`,p="Card Demo1 Title",f="Card demo1 description",j={code:u,title:p,desc:f},h=!0,x=Object.freeze(Object.defineProperty({__proto__:null,default:l,demoMeta:j,isDemo:h},Symbol.toStringTag,{value:"Module"})),_=()=>e.jsx(s,{children:"demo2"}),D=`

import React from 'react'
import { Card } from 'my-lib'

const Demo2 = () => {
  return <Card>demo2</Card>
}

export default Demo2
`,C="Card Demo2 Title",g="Card demo2 description",b={code:D,title:C,desc:g},y=!0,M=Object.freeze(Object.defineProperty({__proto__:null,default:_,demoMeta:b,isDemo:y},Symbol.toStringTag,{value:"Module"}));function r(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...d(),...n.components},{Demo:t}=o;return t||v("Demo"),e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"card",children:"Card"}),`
`,e.jsxs(o.p,{children:["This is a ",e.jsx(o.strong,{children:"markdown"})," document of the ",e.jsx(o.code,{children:"Card"})," component."]}),`
`,e.jsxs(o.p,{children:["You can put this page in a subGroup of the side menu using ",e.jsx(o.code,{children:"staticData.subGroup"}),"."]}),`
`,e.jsx(o.h2,{id:"demos",children:"Demos"}),`
`,e.jsx(o.p,{children:"You can import demos like this:"}),`
`,e.jsx(t,{...x}),`
`,e.jsx(t,{...M})]})}function O(n={}){const{wrapper:o}={...d(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}function v(n,o){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const S=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),c={};c.main=S;c.outlineInfo=i;export{c as default};
