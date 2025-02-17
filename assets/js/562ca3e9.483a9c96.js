"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37709],{66085:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"kind/creating-a-kind-cluster","title":"Creating a cluster","description":"Creating a local Kind-powered Kubernetes cluster.","source":"@site/docs/kind/creating-a-kind-cluster.md","sourceDirName":"kind","slug":"/kind/creating-a-kind-cluster","permalink":"/docs/kind/creating-a-kind-cluster","draft":false,"unlisted":false,"editUrl":"https://github.com/podman-desktop/podman-desktop/tree/main/website/docs/kind/creating-a-kind-cluster.md","tags":[{"inline":true,"label":"creating-a-kind-cluster","permalink":"/docs/tags/creating-a-kind-cluster"},{"inline":true,"label":"kind","permalink":"/docs/tags/kind"}],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Creating a cluster","description":"Creating a local Kind-powered Kubernetes cluster.","keywords":["podman desktop","podman","containers","creating a cluster","kubernetes","kind"],"tags":["creating-a-kind-cluster","kind"]},"sidebar":"mySidebar","previous":{"title":"Configuring Podman","permalink":"/docs/kind/configuring-podman-for-kind-on-windows"},"next":{"title":"Restarting a cluster","permalink":"/docs/kind/restarting-your-kind-cluster"}}');var s=i(62540),r=i(43023);const o={sidebar_position:4,title:"Creating a cluster",description:"Creating a local Kind-powered Kubernetes cluster.",keywords:["podman desktop","podman","containers","creating a cluster","kubernetes","kind"],tags:["creating-a-kind-cluster","kind"]},c="Creating a local Kind-powered Kubernetes cluster",d={},l=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Icon:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"creating-a-local-kind-powered-kubernetes-cluster",children:"Creating a local Kind-powered Kubernetes cluster"})}),"\n",(0,s.jsx)(n.p,{children:"You can create multiple local Kind-powered Kubernetes clusters."}),"\n",(0,s.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/kind/configuring-podman-for-kind-on-windows",children:"On Windows, you configured Podman"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/kind/installing",children:"You installed Kind"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If you have not installed the Kind CLI, you will be prompted to install it when you create a Kind cluster."})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(t,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the Kind tile, click the ",(0,s.jsx)(n.strong,{children:"Create new ..."})," button."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Perform one of the following steps:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a Kind cluster with a ",(0,s.jsx)(n.em,{children:"customized"})," configuration by providing a path to the configuration file. The Kind cluster is created based on the values specified in the configuration file.\n",(0,s.jsx)(n.img,{alt:"creating a Kind cluster with custom configuration",src:i(62956).A+"",width:"1216",height:"1458"})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"When you provide the configuration file, the values specified in that file take precedence over the default values."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a Kind cluster with the ",(0,s.jsx)(n.em,{children:"default"})," configuration. However, you can edit the default configuration, if needed. For example, you can edit the port number or any other configuration details.\n",(0,s.jsx)(n.img,{alt:"creating a Kind cluster with default configuration",src:i(11300).A+"",width:"1246",height:"1464"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Create"})," button."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Optional: Click the ",(0,s.jsx)(n.strong,{children:"Show logs"})," button to view the logs."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["After successful creation, click the ",(0,s.jsx)(n.strong,{children:"Go back to resources"})," button."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(t,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"]}),", and view your running ",(0,s.jsx)(n.code,{children:"<kind-cluster>"})," instance in the ",(0,s.jsx)(n.strong,{children:"Kind"})," tile.\n",(0,s.jsx)(n.img,{alt:"running Kind cluster instance",src:i(96060).A+"",width:"1416",height:"340"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the Podman Desktop tray, select the ",(0,s.jsx)(n.strong,{children:"Kubernetes"})," menu; you can set the context to your Kind cluster: ",(0,s.jsx)(n.code,{children:"kind-<kind-cluster>"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Alternatively, use the status bar or the Podman Desktop ",(0,s.jsx)(n.strong,{children:"Settings"})," to set your Kubernetes context. For more details, see ",(0,s.jsx)(n.a,{href:"/docs/kubernetes/viewing-and-selecting-current-kubernetes-context",children:"Viewing and selecting the current Kubernetes context"}),"."]})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},96060:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/kind-cluster-running-c33337d4c7789e38d78778b0739d4353.png"},62956:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/kind-cluster-with-custom-configuration-99825896bccdb3c5c7f45714111b8ce0.png"},11300:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/kind-cluster-with-default-configuration-6d30e07c2f27eba341b8d9e894cc0302.png"},43023:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(63696);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);