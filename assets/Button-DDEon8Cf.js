import{j as e,u as l}from"./index-BT2uq-qh.js";import{p as d}from"./README-CmixbLha.js";const c=`import type { MyImportedTypeAlias } from './typesUtils'
export type { ReExportedInterface } from './typesUtils'
export type MyExportedTypeAlias = { a: number }
type MyTypeAlias = { a: number }
export interface MyExportedInterface {
  a: number
}
interface MyInterface {
  a: number
}

/**
 * This is the description of the Button component's props
 */
export interface ButtonProps<TestGenerics extends string> extends Base {
  /**
   * the type of button
   * @defaultValue 'default'
   */
  type?: 'primary' | 'default' | 'text'
  /**
   * the size of button
   * @defaultValue 'middle'
   */
  size?: 'large' | 'middle' | 'small' | TestGenerics
  /**
   * loading state of button
   * @defaultValue false
   */
  loading?: boolean
  /**
   * click handler
   */
  onClick?: (event: React.MouseEvent) => void
  /** test method declaration */
  testMethod(param: MyExportedTypeAlias): MyTypeAlias
  /** test required property */
  testRequired: boolean
  myExportedTypeAlias: MyExportedTypeAlias
  myTypeAlias: MyTypeAlias
  myExportedInterface: MyExportedInterface
  myInterface: MyInterface
  myImportedTypeAlias: MyImportedTypeAlias
  /** test call signatures */
  (options?: { ignorePending?: true }): Array<string | Promise<string>>
  (options: { ignorePending: false }): string[]
  /** test construct signatures */
  new (options: string): MyInterface
  new (): MyInterface
}

interface Base {
  /**
   * children content
   */
  children: React.ReactNode
}

export type SomeObjectLiteralType<TestGenerics> = {
  /**
   * the type of button
   * @defaultValue 'default'
   */
  type?: 'primary' | 'default' | 'text'
  /**
   * the size of button
   * @defaultValue 'middle'
   */
  size?: 'large' | 'middle' | 'small' | TestGenerics
  /**
   * loading state of button
   * @defaultValue false
   */
  loading?: boolean
  /**
   * click handler
   */
  onClick?: (event: React.MouseEvent) => void
  /** test method declaration */
  testMethod(param: MyInterface): MyExportedInterface
  /** test required property */
  testRequired: boolean
  myExportedTypeAlias: MyExportedTypeAlias
  myTypeAlias: MyTypeAlias
  myExportedInterface: MyExportedInterface
  myInterface: MyInterface
  myImportedTypeAlias: MyImportedTypeAlias
  /** test call signatures */
  (options?: { ignorePending?: true }): Array<string | Promise<string>>
  (options: { ignorePending: false }): string[]
  /** test construct signatures */
  new (options: string): MyInterface
  new (): MyInterface
}

/**
 * Description of SomeComplexType ...
 */
export type SomeComplexType = 0 | 1 | 'a' | 'b' | { key: string }
`,u={type:"interface",name:"ButtonProps",description:"This is the description of the Button component's props",properties:[{name:"type",description:"the type of button",type:'"primary" | "default" | "text"',defaultValue:"'default'",optional:!0},{name:"size",description:"the size of button",type:'TestGenerics | "large" | "middle" | "small"',defaultValue:"'middle'",optional:!0},{name:"loading",description:"loading state of button",type:"boolean",defaultValue:"false",optional:!0},{name:"onClick",description:"click handler",type:"(event: React.MouseEvent) => void",defaultValue:"",optional:!0},{name:"testMethod",description:"test method declaration",type:"(param: MyExportedTypeAlias) => MyTypeAlias",defaultValue:"",optional:!1},{name:"testRequired",description:"test required property",type:"boolean",defaultValue:"",optional:!1},{name:"myExportedTypeAlias",description:"",type:"MyExportedTypeAlias",defaultValue:"",optional:!1},{name:"myTypeAlias",description:"",type:"MyTypeAlias",defaultValue:"",optional:!1},{name:"myExportedInterface",description:"",type:"MyExportedInterface",defaultValue:"",optional:!1},{name:"myInterface",description:"",type:"MyInterface",defaultValue:"",optional:!1},{name:"myImportedTypeAlias",description:"",type:"MyImportedTypeAlias",defaultValue:"",optional:!1},{name:"children",description:"children content",type:"React.ReactNode",defaultValue:"",optional:!1}],callSignatures:[{description:"test call signatures",type:"(options?: { ignorePending?: true }): Array<string | Promise<string>>"},{description:"",type:"(options: { ignorePending: false }): string[]"}],constructSignatures:[{description:"test construct signatures",type:"new (options: string): MyInterface"},{description:"",type:"new (): MyInterface"}]},y=Object.freeze(Object.defineProperty({__proto__:null,data:u},Symbol.toStringTag,{value:"Module"})),f={type:"object-literal",name:"SomeObjectLiteralType",description:"",properties:[{name:"type",description:"the type of button",type:'"primary" | "default" | "text"',defaultValue:"'default'",optional:!0},{name:"size",description:"the size of button",type:'TestGenerics | "large" | "middle" | "small"',defaultValue:"'middle'",optional:!0},{name:"loading",description:"loading state of button",type:"boolean",defaultValue:"false",optional:!0},{name:"onClick",description:"click handler",type:"(event: React.MouseEvent) => void",defaultValue:"",optional:!0},{name:"testMethod",description:"test method declaration",type:"(param: MyInterface) => MyExportedInterface",defaultValue:"",optional:!1},{name:"testRequired",description:"test required property",type:"boolean",defaultValue:"",optional:!1},{name:"myExportedTypeAlias",description:"",type:"MyExportedTypeAlias",defaultValue:"",optional:!1},{name:"myTypeAlias",description:"",type:"MyTypeAlias",defaultValue:"",optional:!1},{name:"myExportedInterface",description:"",type:"MyExportedInterface",defaultValue:"",optional:!1},{name:"myInterface",description:"",type:"MyInterface",defaultValue:"",optional:!1},{name:"myImportedTypeAlias",description:"",type:"MyImportedTypeAlias",defaultValue:"",optional:!1}],callSignatures:[{description:"test call signatures",type:"(options?: { ignorePending?: true }): Array<string | Promise<string>>"},{description:"",type:"(options: { ignorePending: false }): string[]"}],constructSignatures:[{description:"test construct signatures",type:"new (options: string): MyInterface"},{description:"",type:"new (): MyInterface"}]},m=Object.freeze(Object.defineProperty({__proto__:null,data:f},Symbol.toStringTag,{value:"Module"})),x={type:"other",name:"SomeComplexType",description:"Description of SomeComplexType ...",text:"0 | 1 | 'a' | 'b' | { key: string }"},h=Object.freeze(Object.defineProperty({__proto__:null,data:x},Symbol.toStringTag,{value:"Module"})),g="_button_19sx7_1",T={button:g},j=({className:n,...t})=>e.jsx("button",{...t,className:[T.button,n].filter(Boolean).join(" ")}),b=()=>e.jsx(j,{children:"demo1"}),I=`

import React from 'react'
import { Button } from 'my-lib'

const Demo1 = () => {
  return <Button>demo1</Button>
}

export default Demo1
`,M="Button Demo1 Title",A="Button demo1 description",_={code:I,title:M,desc:A},E=!0,V=Object.freeze(Object.defineProperty({__proto__:null,default:b,demoMeta:_,isDemo:E},Symbol.toStringTag,{value:"Module"}));function a(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...l(),...n.components},{Demo:i,FileText:s,TsInfo:o}=t;return i||r("Demo"),s||r("FileText"),o||r("TsInfo"),e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"button",children:"Button"}),`
`,e.jsxs(t.p,{children:["This is a ",e.jsx(t.strong,{children:"markdown"})," document of the ",e.jsx(t.code,{children:"Button"})," component."]}),`
`,e.jsxs(t.p,{children:["You can put this page in a subGroup of the side menu using ",e.jsx(t.code,{children:"staticData.subGroup"}),"."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsxs(t.p,{children:["Here are some examples of ",e.jsx(t.a,{href:"https://vitejs.github.io/vite-plugin-react-pages/library-documentation-tools",children:"library documentation tools"}),"."]}),`
`,e.jsx(t.h2,{id:"demos",children:"Demos"}),`
`,e.jsx(t.p,{children:"The following markdown"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Demo src="./demos/demo1.tsx" />
`})}),`
`,e.jsx(t.p,{children:"which will result in:"}),`
`,e.jsx(i,{...V}),`
`,e.jsx(t.h2,{id:"extract-type-info-from-typescript-code",children:"Extract Type info from Typescript code"}),`
`,e.jsx(t.p,{children:"You can extract Typescript type info and render it into page. This is very useful for API documentation."}),`
`,e.jsx(t.h3,{id:"render-interface",children:"Render Interface"}),`
`,e.jsx(t.p,{children:"The following markdown"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<TsInfo src="./types.ts" name="ButtonProps" />
`})}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"name"})," should be the export name of the Typescript interface."]}),`
`]}),`
`,e.jsx(t.p,{children:"will result in:"}),`
`,e.jsx(o,{...y}),`
`,e.jsx(t.h3,{id:"render-type-alias",children:"Render Type Alias"}),`
`,e.jsx(t.p,{children:"Besides interface, TsInfo API also support type alias."}),`
`,e.jsx(t.p,{children:"SomeObjectLiteralType (Object Literal):"}),`
`,e.jsx(o,{...m}),`
`,e.jsx(t.p,{children:"SomeComplexType (Complex Type):"}),`
`,e.jsx(o,{...h}),`
`,e.jsx(t.h3,{id:"using-tsinfo-api-in-js-files",children:"Using TsInfo API in JS files"}),`
`,e.jsx(t.p,{children:"In jsx page, You can import and render tsInfo like this:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import tsInfoData from './types.ts?tsInfo=ButtonProps'
import { TsInfo } from 'vite-pages-theme-doc'

export default function Page() {
  return <TsInfo {...tsInfoData} />
}
`})}),`
`,e.jsx(t.h2,{id:"render-text-from-files",children:"Render text from files"}),`
`,e.jsx(t.p,{children:'You can also render text from any files. So that these files can be both "code" and "documentation".'}),`
`,e.jsx(t.p,{children:"The following markdown"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<FileText src="./types.ts" syntax="ts" />
`})}),`
`,e.jsx(t.p,{children:"will result in:"}),`
`,e.jsx(s,{text:c,syntax:"ts"}),`
`,e.jsx(t.p,{children:"In jsx page, You can render file text like this:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`// https://vitejs.dev/guide/assets.html#importing-asset-as-string
import text from './types.ts?raw'
import { FileText } from 'vite-pages-theme-doc'

export default function Page() {
  return <FileText text={text} syntax="ts" />
}
`})})]})}function P(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}function r(n,t){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const v=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),p={};p.main=v;p.outlineInfo=d;export{p as default};
