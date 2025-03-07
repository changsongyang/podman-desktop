"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75315],{51095:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>l,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"interfaces/ContainerEngineInfo","title":"Interface: ContainerEngineInfo","description":"Defined in3623","source":"@site/api/interfaces/ContainerEngineInfo.md","sourceDirName":"interfaces","slug":"/interfaces/ContainerEngineInfo","permalink":"/api/interfaces/ContainerEngineInfo","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"ContainerCreateResult","permalink":"/api/interfaces/ContainerCreateResult"},"next":{"title":"ContainerInfo","permalink":"/api/interfaces/ContainerInfo"}}');var o=i(62540),d=i(43023);const t={},a="Interface: ContainerEngineInfo",r={},c=[{value:"Properties",id:"properties",level:2},{value:"cpuIdle?",id:"cpuidle",level:3},{value:"cpus?",id:"cpus",level:3},{value:"diskSize?",id:"disksize",level:3},{value:"diskUsed?",id:"diskused",level:3},{value:"engineId",id:"engineid",level:3},{value:"engineName",id:"enginename",level:3},{value:"engineType",id:"enginetype",level:3},{value:"memory?",id:"memory",level:3},{value:"memoryUsed?",id:"memoryused",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",strong:"strong",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"interface-containerengineinfo",children:"Interface: ContainerEngineInfo"})}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/480aa648264f42f8634d419ea2a007368bcd6973/packages/extension-api/src/extension-api.d.ts#L3623",children:"packages/extension-api/src/extension-api.d.ts:3623"})]}),"\n",(0,o.jsx)(n.p,{children:"Resources information about a container engine"}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(n.h3,{id:"cpuidle",children:"cpuIdle?"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"optional"})," ",(0,o.jsx)(n.strong,{children:"cpuIdle"}),": ",(0,o.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/480aa648264f42f8634d419ea2a007368bcd6973/packages/extension-api/src/extension-api.d.ts#L3643",children:"packages/extension-api/src/extension-api.d.ts:3643"})]}),"\n",(0,o.jsx)(n.p,{children:"Percentage of idle CPUs (for Podman engines only)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"cpus",children:"cpus?"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"optional"})," ",(0,o.jsx)(n.strong,{children:"cpus"}),": ",(0,o.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/480aa648264f42f8634d419ea2a007368bcd6973/packages/extension-api/src/extension-api.d.ts#L3639",children:"packages/extension-api/src/extension-api.d.ts:3639"})]}),"\n",(0,o.jsx)(n.p,{children:"number of CPUs available for the container engine"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"disksize",children:"diskSize?"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"optional"})," ",(0,o.jsx)(n.strong,{children:"diskSize"}),": ",(0,o.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/480aa648264f42f8634d419ea2a007368bcd6973/packages/extension-api/src/extension-api.d.ts#L3655",children:"packages/extension-api/src/extension-api.d.ts:3655"})]}),"\n",(0,o.jsx)(n.p,{children:"Quantity of disk space available for the container engine (for Podman engines only)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"diskused",children:"diskUsed?"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"optional"})," ",(0,o.jsx)(n.strong,{children:"diskUsed"}),": ",(0,o.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/480aa648264f42f8634d419ea2a007368bcd6973/packages/extension-api/src/extension-api.d.ts#L3659",children:"packages/extension-api/src/extension-api.d.ts:3659"})]}),"\n",(0,o.jsx)(n.p,{children:"Quantity of disk space used by the container engine (for Podman engines only)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"engineid",children:"engineId"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"engineId"}),": ",(0,o.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/480aa648264f42f8634d419ea2a007368bcd6973/packages/extension-api/src/extension-api.d.ts#L3627",children:"packages/extension-api/src/extension-api.d.ts:3627"})]}),"\n",(0,o.jsx)(n.p,{children:"unique id identifying the container engine"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"enginename",children:"engineName"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"engineName"}),": ",(0,o.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/480aa648264f42f8634d419ea2a007368bcd6973/packages/extension-api/src/extension-api.d.ts#L3631",children:"packages/extension-api/src/extension-api.d.ts:3631"})]}),"\n",(0,o.jsx)(n.p,{children:"name of the container engine"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"enginetype",children:"engineType"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"engineType"}),": ",(0,o.jsx)(n.code,{children:'"docker"'})," | ",(0,o.jsx)(n.code,{children:'"podman"'})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/480aa648264f42f8634d419ea2a007368bcd6973/packages/extension-api/src/extension-api.d.ts#L3635",children:"packages/extension-api/src/extension-api.d.ts:3635"})]}),"\n",(0,o.jsx)(n.p,{children:"engine type, either 'podman' or 'docker'"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"memory",children:"memory?"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"optional"})," ",(0,o.jsx)(n.strong,{children:"memory"}),": ",(0,o.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/480aa648264f42f8634d419ea2a007368bcd6973/packages/extension-api/src/extension-api.d.ts#L3647",children:"packages/extension-api/src/extension-api.d.ts:3647"})]}),"\n",(0,o.jsx)(n.p,{children:"Quantity of memory available for the container engine"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"memoryused",children:"memoryUsed?"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"optional"})," ",(0,o.jsx)(n.strong,{children:"memoryUsed"}),": ",(0,o.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/480aa648264f42f8634d419ea2a007368bcd6973/packages/extension-api/src/extension-api.d.ts#L3651",children:"packages/extension-api/src/extension-api.d.ts:3651"})]}),"\n",(0,o.jsx)(n.p,{children:"Quantity of memory used by the container engine (for Podman engines only)"})]})}function l(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var s=i(63696);const o={},d=s.createContext(o);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);