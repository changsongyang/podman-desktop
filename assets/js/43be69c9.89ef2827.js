"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76228],{58886:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>l,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"interfaces/QuickPickItem","title":"Interface: QuickPickItem","description":"Defined in1551","source":"@site/api/interfaces/QuickPickItem.md","sourceDirName":"interfaces","slug":"/interfaces/QuickPickItem","permalink":"/api/interfaces/QuickPickItem","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"QuickInputButton","permalink":"/api/interfaces/QuickInputButton"},"next":{"title":"QuickPickOptions","permalink":"/api/interfaces/QuickPickOptions"}}');var t=i(62540),c=i(43023);const d={},a="Interface: QuickPickItem",r={},o=[{value:"Properties",id:"properties",level:2},{value:"alwaysShow?",id:"alwaysshow",level:3},{value:"buttons?",id:"buttons",level:3},{value:"description?",id:"description",level:3},{value:"detail?",id:"detail",level:3},{value:"kind?",id:"kind",level:3},{value:"label",id:"label",level:3},{value:"picked?",id:"picked",level:3},{value:"See",id:"see",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"interface-quickpickitem",children:"Interface: QuickPickItem"})}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/changsongyang/podman-desktop/blob/c40ad4e0ed46dfd8df27ee0f22c2662ad2ca8a03/packages/extension-api/src/extension-api.d.ts#L1551",children:"packages/extension-api/src/extension-api.d.ts:1551"})]}),"\n",(0,t.jsx)(n.p,{children:"Represents an item that can be selected from\na list of items."}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"alwaysshow",children:"alwaysShow?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"alwaysShow"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/changsongyang/podman-desktop/blob/c40ad4e0ed46dfd8df27ee0f22c2662ad2ca8a03/packages/extension-api/src/extension-api.d.ts#L1598",children:"packages/extension-api/src/extension-api.d.ts:1598"})]}),"\n",(0,t.jsx)(n.p,{children:"Always show this item."}),"\n",(0,t.jsxs)(n.p,{children:["Note: this property is ignored when ",(0,t.jsx)(n.a,{href:"#kind",children:"kind"})," is set to ",(0,t.jsx)(n.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"buttons",children:"buttons?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"buttons"}),": readonly ",(0,t.jsx)(n.a,{href:"/api/interfaces/QuickInputButton",children:(0,t.jsx)(n.code,{children:"QuickInputButton"})}),"[]"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/changsongyang/podman-desktop/blob/c40ad4e0ed46dfd8df27ee0f22c2662ad2ca8a03/packages/extension-api/src/extension-api.d.ts#L1608",children:"packages/extension-api/src/extension-api.d.ts:1608"})]}),"\n",(0,t.jsxs)(n.p,{children:["Optional buttons that will be rendered on this particular item. These buttons will trigger\nan QuickPickItemButtonEvent when clicked. Buttons are only rendered when using a quickpick\ncreated by the window.createQuickPick createQuickPick() API. Buttons are not rendered when using\nthe ",(0,t.jsx)(n.a,{href:"/api/@podman-desktop/namespaces/window/functions/showQuickPick",children:"showQuickPick()"})," API."]}),"\n",(0,t.jsxs)(n.p,{children:["Note: this property is ignored when ",(0,t.jsx)(n.a,{href:"#kind",children:"kind"})," is set to ",(0,t.jsx)(n.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"description"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/changsongyang/podman-desktop/blob/c40ad4e0ed46dfd8df27ee0f22c2662ad2ca8a03/packages/extension-api/src/extension-api.d.ts#L1570",children:"packages/extension-api/src/extension-api.d.ts:1570"})]}),"\n",(0,t.jsxs)(n.p,{children:["A human-readable string which is rendered less prominent in the same line. Supports rendering of\nThemeIcon theme icons via the ",(0,t.jsx)(n.code,{children:"$(<name>)"}),"-syntax."]}),"\n",(0,t.jsxs)(n.p,{children:["Note: this property is ignored when ",(0,t.jsx)(n.a,{href:"#kind",children:"kind"})," is set to ",(0,t.jsx)(n.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"detail",children:"detail?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"detail"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/changsongyang/podman-desktop/blob/c40ad4e0ed46dfd8df27ee0f22c2662ad2ca8a03/packages/extension-api/src/extension-api.d.ts#L1578",children:"packages/extension-api/src/extension-api.d.ts:1578"})]}),"\n",(0,t.jsxs)(n.p,{children:["A human-readable string which is rendered less prominent in a separate line. Supports rendering of\nThemeIcon theme icons via the ",(0,t.jsx)(n.code,{children:"$(<name>)"}),"-syntax."]}),"\n",(0,t.jsxs)(n.p,{children:["Note: this property is ignored when ",(0,t.jsx)(n.a,{href:"#kind",children:"kind"})," is set to ",(0,t.jsx)(n.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"kind",children:"kind?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"kind"}),": ",(0,t.jsx)(n.a,{href:"/api/enumerations/QuickPickItemKind",children:(0,t.jsx)(n.code,{children:"QuickPickItemKind"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/changsongyang/podman-desktop/blob/c40ad4e0ed46dfd8df27ee0f22c2662ad2ca8a03/packages/extension-api/src/extension-api.d.ts#L1562",children:"packages/extension-api/src/extension-api.d.ts:1562"})]}),"\n",(0,t.jsxs)(n.p,{children:["The kind of QuickPickItem that will determine how this item is rendered in the quick pick. When not specified,\nthe default is ",(0,t.jsx)(n.a,{href:"/api/enumerations/QuickPickItemKind#default",children:"QuickPickItemKind.Default"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"label",children:"label"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"label"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/changsongyang/podman-desktop/blob/c40ad4e0ed46dfd8df27ee0f22c2662ad2ca8a03/packages/extension-api/src/extension-api.d.ts#L1556",children:"packages/extension-api/src/extension-api.d.ts:1556"})]}),"\n",(0,t.jsxs)(n.p,{children:["A human-readable string which is rendered prominent. Supports rendering of ThemeIcon theme icons via\nthe ",(0,t.jsx)(n.code,{children:"$(<name>)"}),"-syntax."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"picked",children:"picked?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"picked"}),": ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/changsongyang/podman-desktop/blob/c40ad4e0ed46dfd8df27ee0f22c2662ad2ca8a03/packages/extension-api/src/extension-api.d.ts#L1591",children:"packages/extension-api/src/extension-api.d.ts:1591"})]}),"\n",(0,t.jsxs)(n.p,{children:["Optional flag indicating if this item is picked initially. This is only honored when using\nthe ",(0,t.jsx)(n.a,{href:"/api/@podman-desktop/namespaces/window/functions/showQuickPick",children:"showQuickPick()"})," API. To do the same thing with\nthe window.createQuickPick createQuickPick() API, simply set the QuickPick.selectedItems\nto the items you want picked initially.\n(",(0,t.jsx)(n.em,{children:"Note:"})," This is only honored when the picker allows multiple selections.)"]}),"\n",(0,t.jsx)(n.h4,{id:"see",children:"See"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/api/interfaces/QuickPickOptions#canpickmany",children:"QuickPickOptions.canPickMany"})}),"\n",(0,t.jsxs)(n.p,{children:["Note: this property is ignored when ",(0,t.jsx)(n.a,{href:"#kind",children:"kind"})," is set to ",(0,t.jsx)(n.a,{href:"/api/enumerations/QuickPickItemKind#separator",children:"QuickPickItemKind.Separator"})]})]})}function l(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>a});var s=i(63696);const t={},c=s.createContext(t);function d(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);