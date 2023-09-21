"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2609],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39798:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(27378),a=r(38944);const o="tabItem_wHwb";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},23930:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(25773),a=r(27378),o=r(38944),i=r(83457),l=r(35331),s=r(30654),c=r(70784),u=r(71819);function m(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:r,groupId:n}),[m,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),v=(()=>{const e=s??m;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var v=r(74954);const b="tabList_J5MA",k="tabItem_l0OV";function h(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),n=c[r].value;n!==l&&(m(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},i,{className:(0,o.Z)("tabs__item",k,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(h,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},56472:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=r(25773),a=(r(27378),r(35318)),o=r(23930),i=r(39798);const l={sidebar_position:1,title:"Importing saved containers",description:"Import saved containers to migrate transparently to Podman, and continue using familiar containers.",keywords:["podman desktop","podman","containers","importing"],tags:["migrating-from-docker"]},s="Importing saved containers to Podman",c={unversionedId:"migrating-from-docker/importing-saved-containers",id:"migrating-from-docker/importing-saved-containers",title:"Importing saved containers",description:"Import saved containers to migrate transparently to Podman, and continue using familiar containers.",source:"@site/docs/migrating-from-docker/importing-saved-containers.md",sourceDirName:"migrating-from-docker",slug:"/migrating-from-docker/importing-saved-containers",permalink:"/docs/migrating-from-docker/importing-saved-containers",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/migrating-from-docker/importing-saved-containers.md",tags:[{label:"migrating-from-docker",permalink:"/docs/tags/migrating-from-docker"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Importing saved containers",description:"Import saved containers to migrate transparently to Podman, and continue using familiar containers.",keywords:["podman desktop","podman","containers","importing"],tags:["migrating-from-docker"]},sidebar:"mySidebar",previous:{title:"Migrating from Docker",permalink:"/docs/migrating-from-docker/"},next:{title:"Using the `DOCKER_HOST` environment variable",permalink:"/docs/migrating-from-docker/using-the-docker_host-environment-variable"}},u={},m=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Additional resources",id:"additional-resources",level:4}],d={toc:m};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"importing-saved-containers-to-podman"},"Importing saved containers to Podman"),(0,a.kt)("p",null,"Consider importing saved containers to continue using familiar containers."),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Podman")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You saved your existing containers by running the command:"),(0,a.kt)(o.Z,{groupId:"container-engines",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"podman",label:"Podman",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ podman save <your_container> > <your_container_archive>.tar\n"))),(0,a.kt)(i.Z,{value:"docker",label:"Docker",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ docker export <your_container> > <your_container_archive>.tar\n")))))),(0,a.kt)("h4",{id:"procedure"},"Procedure"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Import your existing containers into Podman.\nRun the command for each container archive:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ podman import <your_container_archive>.tar\n")))),(0,a.kt)("h4",{id:"verification"},"Verification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your imported containers appear in the Podman Desktop ",(0,a.kt)("em",{parentName:"li"},"Images")," section.")),(0,a.kt)("h4",{id:"additional-resources"},"Additional resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/save/"},(0,a.kt)("inlineCode",{parentName:"a"},"docker save")," reference documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.podman.io/en/latest/markdown/podman-save.1.html"},(0,a.kt)("inlineCode",{parentName:"a"},"podman save")," reference documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.podman.io/en/latest/markdown/podman-import.1.html"},(0,a.kt)("inlineCode",{parentName:"a"},"podman import")," reference documentation"))))}p.isMDXComponent=!0}}]);