"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74238],{53210:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>g,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"containers/images/pushing-an-image-to-a-registry","title":"Pushing an image to a registry","description":"Pushing an image to a registry.","source":"@site/docs/containers/images/pushing-an-image-to-a-registry.md","sourceDirName":"containers/images","slug":"/containers/images/pushing-an-image-to-a-registry","permalink":"/docs/containers/images/pushing-an-image-to-a-registry","draft":false,"unlisted":false,"editUrl":"https://github.com/podman-desktop/podman-desktop/tree/main/website/docs/containers/images/pushing-an-image-to-a-registry.md","tags":[{"inline":true,"label":"images","permalink":"/docs/tags/images"},{"inline":true,"label":"pushing-an-image","permalink":"/docs/tags/pushing-an-image"}],"version":"current","sidebarPosition":21,"frontMatter":{"sidebar_position":21,"title":"Pushing an image to a registry","description":"Pushing an image to a registry.","keywords":["podman desktop","podman","containers","image","registry","registries"],"tags":["images","pushing-an-image"]},"sidebar":"mySidebar","previous":{"title":"Building an image","permalink":"/docs/containers/images/building-an-image"},"next":{"title":"Pulling an image","permalink":"/docs/containers/images/pulling-an-image"}}');var t=n(62540),r=n(43023);const a={sidebar_position:21,title:"Pushing an image to a registry",description:"Pushing an image to a registry.",keywords:["podman desktop","podman","containers","image","registry","registries"],tags:["images","pushing-an-image"]},o="Pushing an image to a registry",g={},c=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function d(e){const i={code:"code",h1:"h1",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Icon:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"pushing-an-image-to-a-registry",children:"Pushing an image to a registry"})}),"\n",(0,t.jsx)(i.p,{children:"With Podman Desktop, you can push an image to registries."}),"\n",(0,t.jsx)(i.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["You have configured your registry ",(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(s,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Registries"]}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["You have built an image with the fully qualified name required for your registry, such as ",(0,t.jsx)(i.code,{children:"quay.io/my-repository/my-image"}),", ",(0,t.jsx)(i.code,{children:"ghcr.io/my-repository/my-image"}),", or ",(0,t.jsx)(i.code,{children:"docker.io/my-repository/my-image"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Ensure that the image name includes the registry where to publish the image. To publish on ",(0,t.jsx)(i.code,{children:"quay.io/repository"})," the image ",(0,t.jsx)(i.code,{children:"my-image"}),", the FQN image name should be ",(0,t.jsx)(i.code,{children:"quay.io/repository/my-image"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"procedure",children:"Procedure"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Go to ",(0,t.jsx)(i.strong,{children:"Images"})," from the left navigation pane."]}),"\n",(0,t.jsxs)(i.li,{children:["Click the ",(0,t.jsx)(i.strong,{children:"overflow menu"})," icon corresponding to the image you want to push and select ",(0,t.jsx)(i.strong,{children:"Push Image"}),". The image tag is auto-selected.\n",(0,t.jsx)(i.img,{alt:"pushing an image",src:n(11314).A+"",width:"1852",height:"670"})]}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.strong,{children:"Push image"}),".\n",(0,t.jsx)(i.img,{alt:"image tag selected",src:n(68524).A+"",width:"1190",height:"558"})]}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.strong,{children:"Done"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"verification",children:"Verification"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Go to your container registry."}),"\n",(0,t.jsx)(i.li,{children:"Find your image."}),"\n"]})]})}function l(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},68524:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/image-tag-selected-ddd1078d412baaee11d0bbaa101ae4c2.png"},11314:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/pushing-an-image-85eb503e179ad14544d583c99511f8ab.png"},43023:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>o});var s=n(63696);const t={},r=s.createContext(t);function a(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);