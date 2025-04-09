"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21563],{84903:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"interfaces/ProviderConnectionShellAccess","title":"Interface: ProviderConnectionShellAccess","description":"Defined in838","source":"@site/api/interfaces/ProviderConnectionShellAccess.md","sourceDirName":"interfaces","slug":"/interfaces/ProviderConnectionShellAccess","permalink":"/api/interfaces/ProviderConnectionShellAccess","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"ProviderConnectionLifecycle","permalink":"/api/interfaces/ProviderConnectionLifecycle"},"next":{"title":"ProviderConnectionShellAccessData","permalink":"/api/interfaces/ProviderConnectionShellAccessData"}}');var i=o(62540),c=o(43023);const t={},r="Interface: ProviderConnectionShellAccess",l={},a=[{value:"Methods",id:"methods",level:2},{value:"open()",id:"open",level:3},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"interface-providerconnectionshellaccess",children:"Interface: ProviderConnectionShellAccess"})}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/changsongyang/podman-desktop/blob/c40ad4e0ed46dfd8df27ee0f22c2662ad2ca8a03/packages/extension-api/src/extension-api.d.ts#L838",children:"packages/extension-api/src/extension-api.d.ts:838"})]}),"\n",(0,i.jsx)(n.p,{children:"Callback for openning shell session"}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"open",children:"open()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"open"}),"(): ",(0,i.jsx)(n.a,{href:"/api/interfaces/ProviderConnectionShellAccessSession",children:(0,i.jsx)(n.code,{children:"ProviderConnectionShellAccessSession"})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/changsongyang/podman-desktop/blob/c40ad4e0ed46dfd8df27ee0f22c2662ad2ca8a03/packages/extension-api/src/extension-api.d.ts#L876",children:"packages/extension-api/src/extension-api.d.ts:876"})]}),"\n",(0,i.jsx)(n.p,{children:"Opens new session using ProviderConnectionShellAccessImpl class"}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/interfaces/ProviderConnectionShellAccessSession",children:(0,i.jsx)(n.code,{children:"ProviderConnectionShellAccessSession"})})}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import * as api from '@podman-desktop/api';\n\nclass ProviderConnectionShellAccessImpl implements ProviderConnectionShellAccess {\n open(): ProviderConnectionShellAccessSession {\n   // This is client that will connect to your shell\n   #client = new Client();\n\n   // You need to listen to events from client and forward them to the caller by using the object returned below\n\n   return {\n     onData,\n     onError,\n     onEnd,\n     write,\n     resize,\n     close,\n   };\n }\n}\n\nexport async function activate(extensionContext: api.ExtensionContext): Promise<void> {\n const providerConnectionShellAccess = new ProviderConnectionShellAccessImpl(machineInfo);\n\n // Create containerProviderConnection object\n const containerProviderConnection: extensionApi.ContainerProviderConnection = {\n   ...\n   shellAccess: providerConnectionShellAccess,\n   ...\n };\n\n const disposable = provider.registerContainerProviderConnection(containerProviderConnection);\n extensionContext.subscriptions.push(disposable);\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},43023:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>r});var s=o(63696);const i={},c=s.createContext(i);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);