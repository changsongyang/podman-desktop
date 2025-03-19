"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87577],{26414:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"interfaces/Webview","title":"Interface: Webview","description":"Defined in1936","source":"@site/api/interfaces/Webview.md","sourceDirName":"interfaces","slug":"/interfaces/Webview","permalink":"/api/interfaces/Webview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"VolumeListInfo","permalink":"/api/interfaces/VolumeListInfo"},"next":{"title":"WebviewInfo","permalink":"/api/interfaces/WebviewInfo"}}');var c=n(62540),r=n(43023);const t={},o="Interface: Webview",d={},a=[{value:"Properties",id:"properties",level:2},{value:"cspSource",id:"cspsource",level:3},{value:"html",id:"html",level:3},{value:"onDidReceiveMessage",id:"ondidreceivemessage",level:3},{value:"options",id:"options",level:3},{value:"Methods",id:"methods",level:2},{value:"asWebviewUri()",id:"aswebviewuri",level:3},{value:"Parameters",id:"parameters",level:4},{value:"localResource",id:"localresource",level:5},{value:"Returns",id:"returns",level:4},{value:"postMessage()",id:"postmessage",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"message",id:"message",level:5},{value:"Returns",id:"returns-1",level:4}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.header,{children:(0,c.jsx)(s.h1,{id:"interface-webview",children:"Interface: Webview"})}),"\n",(0,c.jsxs)(s.p,{children:["Defined in: ",(0,c.jsx)(s.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/856ece9a7279972c69fbbd78cdccdffa6e2452f9/packages/extension-api/src/extension-api.d.ts#L1936",children:"packages/extension-api/src/extension-api.d.ts:1936"})]}),"\n",(0,c.jsx)(s.p,{children:"Displays html content, similarly to an iframe."}),"\n",(0,c.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,c.jsx)(s.h3,{id:"cspsource",children:"cspSource"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"readonly"})," ",(0,c.jsx)(s.strong,{children:"cspSource"}),": ",(0,c.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["Defined in: ",(0,c.jsx)(s.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/856ece9a7279972c69fbbd78cdccdffa6e2452f9/packages/extension-api/src/extension-api.d.ts#L1971",children:"packages/extension-api/src/extension-api.d.ts:1971"})]}),"\n",(0,c.jsx)(s.p,{children:"Content security policy source for webview resources."}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"html",children:"html"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"html"}),": ",(0,c.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["Defined in: ",(0,c.jsx)(s.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/856ece9a7279972c69fbbd78cdccdffa6e2452f9/packages/extension-api/src/extension-api.d.ts#L1948",children:"packages/extension-api/src/extension-api.d.ts:1948"})]}),"\n",(0,c.jsx)(s.p,{children:"HTML contents of the webview."}),"\n",(0,c.jsx)(s.p,{children:"This should be a complete, valid html document. Changing this property causes the webview to be reloaded."}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"ondidreceivemessage",children:"onDidReceiveMessage"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"readonly"})," ",(0,c.jsx)(s.strong,{children:"onDidReceiveMessage"}),": ",(0,c.jsx)(s.a,{href:"/api/interfaces/Event",children:(0,c.jsx)(s.code,{children:"Event"})}),"<",(0,c.jsx)(s.code,{children:"unknown"}),">"]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["Defined in: ",(0,c.jsx)(s.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/856ece9a7279972c69fbbd78cdccdffa6e2452f9/packages/extension-api/src/extension-api.d.ts#L1955",children:"packages/extension-api/src/extension-api.d.ts:1955"})]}),"\n",(0,c.jsx)(s.p,{children:"Fired when the webview content posts a message."}),"\n",(0,c.jsx)(s.p,{children:"Webview content can post strings or json serializable objects back to an extension."}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"options",children:"options"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"options"}),": ",(0,c.jsx)(s.a,{href:"/api/interfaces/WebviewOptions",children:(0,c.jsx)(s.code,{children:"WebviewOptions"})})]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["Defined in: ",(0,c.jsx)(s.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/856ece9a7279972c69fbbd78cdccdffa6e2452f9/packages/extension-api/src/extension-api.d.ts#L1940",children:"packages/extension-api/src/extension-api.d.ts:1940"})]}),"\n",(0,c.jsx)(s.p,{children:"Content settings for the webview."}),"\n",(0,c.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,c.jsx)(s.h3,{id:"aswebviewuri",children:"asWebviewUri()"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"asWebviewUri"}),"(",(0,c.jsx)(s.code,{children:"localResource"}),"): ",(0,c.jsx)(s.a,{href:"/api/classes/Uri",children:(0,c.jsx)(s.code,{children:"Uri"})})]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["Defined in: ",(0,c.jsx)(s.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/856ece9a7279972c69fbbd78cdccdffa6e2452f9/packages/extension-api/src/extension-api.d.ts#L1965",children:"packages/extension-api/src/extension-api.d.ts:1965"})]}),"\n",(0,c.jsx)(s.p,{children:"Convert a uri for the local file system to one that can be used inside webviews."}),"\n",(0,c.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsx)(s.h5,{id:"localresource",children:"localResource"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"/api/classes/Uri",children:(0,c.jsx)(s.code,{children:"Uri"})})}),"\n",(0,c.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"/api/classes/Uri",children:(0,c.jsx)(s.code,{children:"Uri"})})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"postmessage",children:"postMessage()"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"postMessage"}),"(",(0,c.jsx)(s.code,{children:"message"}),"): ",(0,c.jsx)(s.code,{children:"Promise"}),"<",(0,c.jsx)(s.code,{children:"boolean"}),">"]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["Defined in: ",(0,c.jsx)(s.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/856ece9a7279972c69fbbd78cdccdffa6e2452f9/packages/extension-api/src/extension-api.d.ts#L1960",children:"packages/extension-api/src/extension-api.d.ts:1960"})]}),"\n",(0,c.jsx)(s.p,{children:"Post a message to the webview content."}),"\n",(0,c.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,c.jsx)(s.h5,{id:"message",children:"message"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.code,{children:"unknown"})}),"\n",(0,c.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"Promise"}),"<",(0,c.jsx)(s.code,{children:"boolean"}),">"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},43023:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>o});var i=n(63696);const c={},r=i.createContext(c);function t(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);