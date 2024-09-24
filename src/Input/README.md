---
title: Input
subGroup: data-display
---

# Input

## Demos

<Demo src="./demos/demo1.tsx" />

## Extract Type info from Typescript code

You can extract Typescript type info and render it into page. This is very useful for API documentation.

### Render Interface

The following markdown

```tsx
<TsInfo src="./types.ts" name="ButtonProps" />
```

> The `name` should be the export name of the Typescript interface.

will result in:

<TsInfo src="./types.ts" name="ButtonProps" />

### Render Type Alias

Besides interface, TsInfo API also support type alias.

SomeObjectLiteralType (Object Literal):
<TsInfo src="./types.ts" name="SomeObjectLiteralType" />

SomeComplexType (Complex Type):
<TsInfo src="./types.ts" name="SomeComplexType" />

### Using TsInfo API in JS files

In jsx page, You can import and render tsInfo like this:

```tsx
import tsInfoData from './types.ts?tsInfo=ButtonProps';
import { TsInfo } from 'vite-pages-theme-doc';

export default function Page() {
  return <TsInfo {...tsInfoData} />;
}
```

## Render text from files

You can also render text from any files. So that these files can be both "code" and "documentation".

The following markdown

```tsx
<FileText src="./types.ts" syntax="ts" />
```

will result in:

<FileText src="./types.ts" syntax="ts" />

In jsx page, You can render file text like this:

```tsx
// https://vitejs.dev/guide/assets.html#importing-asset-as-string
import text from './types.ts?raw';
import { FileText } from 'vite-pages-theme-doc';

export default function Page() {
  return <FileText text={text} syntax="ts" />;
}
```
