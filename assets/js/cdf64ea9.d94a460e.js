"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52065],{59868:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"interfaces/RunError","title":"Interface: RunError","description":"Defined in4343","source":"@site/api/interfaces/RunError.md","sourceDirName":"interfaces","slug":"/interfaces/RunError","permalink":"/api/interfaces/RunError","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"RegistrySuggestedProvider","permalink":"/api/interfaces/RegistrySuggestedProvider"},"next":{"title":"RunOptions","permalink":"/api/interfaces/RunOptions"}}');var r=s(62540),d=s(43023);const t={},c="Interface: RunError",o={},a=[{value:"Extends",id:"extends",level:2},{value:"Properties",id:"properties",level:2},{value:"cancelled",id:"cancelled",level:3},{value:"cause?",id:"cause",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"command",id:"command",level:3},{value:"exitCode",id:"exitcode",level:3},{value:"killed",id:"killed",level:3},{value:"message",id:"message",level:3},{value:"Overrides",id:"overrides",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"stack?",id:"stack",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"stderr",id:"stderr",level:3},{value:"stdout",id:"stdout",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"interface-runerror",children:"Interface: RunError"})}),"\n",(0,r.jsxs)(n.p,{children:["Defined in: ",(0,r.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/38ce9a72a54b90919ebf9581752567d3ebdeab4e/packages/extension-api/src/extension-api.d.ts#L4343",children:"packages/extension-api/src/extension-api.d.ts:4343"})]}),"\n",(0,r.jsx)(n.p,{children:"Represents an error that occurred during the execution of a command."}),"\n",(0,r.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Error"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"cancelled",children:"cancelled"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"cancelled"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Defined in: ",(0,r.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/38ce9a72a54b90919ebf9581752567d3ebdeab4e/packages/extension-api/src/extension-api.d.ts#L4372",children:"packages/extension-api/src/extension-api.d.ts:4372"})]}),"\n",(0,r.jsx)(n.p,{children:"Indicates whether the execution was cancelled."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"cause",children:"cause?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.strong,{children:"cause"}),": ",(0,r.jsx)(n.code,{children:"unknown"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Defined in: node_modules/typescript/lib/lib.es2022.error.d.ts:24"}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Error.cause"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"command",children:"command"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"command"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Defined in: ",(0,r.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/38ce9a72a54b90919ebf9581752567d3ebdeab4e/packages/extension-api/src/extension-api.d.ts#L4357",children:"packages/extension-api/src/extension-api.d.ts:4357"})]}),"\n",(0,r.jsx)(n.p,{children:"The command that was executed."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"exitcode",children:"exitCode"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"exitCode"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Defined in: ",(0,r.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/38ce9a72a54b90919ebf9581752567d3ebdeab4e/packages/extension-api/src/extension-api.d.ts#L4352",children:"packages/extension-api/src/extension-api.d.ts:4352"})]}),"\n",(0,r.jsx)(n.p,{children:"The exit code of the command."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"killed",children:"killed"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"killed"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Defined in: ",(0,r.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/38ce9a72a54b90919ebf9581752567d3ebdeab4e/packages/extension-api/src/extension-api.d.ts#L4377",children:"packages/extension-api/src/extension-api.d.ts:4377"})]}),"\n",(0,r.jsx)(n.p,{children:"Indicates whether the process was forcefully killed."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"message",children:"message"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"message"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Defined in: ",(0,r.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/38ce9a72a54b90919ebf9581752567d3ebdeab4e/packages/extension-api/src/extension-api.d.ts#L4347",children:"packages/extension-api/src/extension-api.d.ts:4347"})]}),"\n",(0,r.jsx)(n.p,{children:"The error message."}),"\n",(0,r.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Error.message"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"name"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Defined in: node_modules/typescript/lib/lib.es5.d.ts:1076"}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Error.name"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"stack",children:"stack?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.strong,{children:"stack"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Defined in: node_modules/typescript/lib/lib.es5.d.ts:1078"}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Error.stack"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"stderr",children:"stderr"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"stderr"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Defined in: ",(0,r.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/38ce9a72a54b90919ebf9581752567d3ebdeab4e/packages/extension-api/src/extension-api.d.ts#L4367",children:"packages/extension-api/src/extension-api.d.ts:4367"})]}),"\n",(0,r.jsx)(n.p,{children:"The standard error (stderr) content of the command."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"stdout",children:"stdout"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"stdout"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Defined in: ",(0,r.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/38ce9a72a54b90919ebf9581752567d3ebdeab4e/packages/extension-api/src/extension-api.d.ts#L4362",children:"packages/extension-api/src/extension-api.d.ts:4362"})]}),"\n",(0,r.jsx)(n.p,{children:"The standard output (stdout) content of the command."})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(63696);const r={},d=i.createContext(r);function t(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);