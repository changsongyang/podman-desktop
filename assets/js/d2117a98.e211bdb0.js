"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9209],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39798:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(27378),a=r(38944);const i="tabItem_wHwb";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:r},t)}},23930:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(25773),a=r(27378),i=r(38944),o=r(83457),s=r(35331),l=r(30654),u=r(70784),c=r(71819);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=d(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,u]=g({queryString:r,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),y=(()=>{const e=l??p;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var y=r(74954);const h="tabList_J5MA",k="tabItem_l0OV";function b(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==s&&(p(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",k,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=f(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",h)},a.createElement(b,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,y.Z)();return a.createElement(v,(0,n.Z)({key:String(t)},e))}},99343:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(25773),a=(r(27378),r(35318)),i=r(23930),o=r(39798);const s={sidebar_position:10,title:"Adding an insecure registry",description:"Modifying Podman for an insecure registry",keywords:["podman desktop","podman","containers","registry","podman machine"],tags:["pods"]},l="Adding an Insecure Registry to Podman Desktop",u={unversionedId:"working-with-containers/registries/insecure-registry",id:"working-with-containers/registries/insecure-registry",title:"Adding an insecure registry",description:"Modifying Podman for an insecure registry",source:"@site/docs/working-with-containers/registries/insecure-registry.md",sourceDirName:"working-with-containers/registries",slug:"/working-with-containers/registries/insecure-registry",permalink:"/docs/working-with-containers/registries/insecure-registry",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/working-with-containers/registries/insecure-registry.md",tags:[{label:"pods",permalink:"/docs/tags/pods"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Adding an insecure registry",description:"Modifying Podman for an insecure registry",keywords:["podman desktop","podman","containers","registry","podman machine"],tags:["pods"]},sidebar:"mySidebar",previous:{title:"Authenticating to a registry",permalink:"/docs/working-with-containers/registries/authenticating-to-a-preconfigured-registry"},next:{title:"Images",permalink:"/docs/working-with-containers/images/"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4}],d={toc:p};function m(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adding-an-insecure-registry-to-podman-desktop"},"Adding an Insecure Registry to Podman Desktop"),(0,a.kt)("p",null,"In this guide, you will learn how to add an insecure registry to Podman Desktop. An insecure registry allows you to pull and push container images either over an unencrypted HTTP connection, or a HTTPS connection with a self-signed unverified certificate. Please note that using an insecure registry can expose your data to security risks, so it's recommended to use secure connections with a verifiable certificate whenever possible."),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Podman installed and running (VM if on macOS or Windows).")),(0,a.kt)("h4",{id:"procedure"},"Procedure"),(0,a.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"macwin",label:"macOS & Windows",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add your insecure registry within ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Registries"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click "Yes" to the insecure registry warning.'))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Podman Desktop Registry Warning",src:r(72792).Z,width:"556",height:"206"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"SSH into the Podman Machine to edit ",(0,a.kt)("inlineCode",{parentName:"li"},"registries.conf"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ podman machine ssh [optional-machine-name]\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("inlineCode",{parentName:"li"},"registries.conf"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo vi /etc/containers/registries.conf\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Add the insecure registry: Add a new [","[registry]","] section for the URL of the insecure registry you want to use. For example, if your insecure registry is located at ",(0,a.kt)("a",{parentName:"li",href:"http://registry.example.com"},"http://registry.example.com"),", add the following lines:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"[[registry]]\nlocation = registry.example.com\ninsecure = true\n")),(0,a.kt)("p",null,"If you have multiple registries, you can add one [","[registry]","] block per registry."),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save and exit the file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart Podman by the CLI or through Podman Desktop."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ podman machine stop\n$ podman machine start\n")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"Pull or push container images: You can now use Podman Desktop to pull or push container images from/to the insecure registry you added."))),(0,a.kt)(o.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add your insecure registry within ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Registries"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click "Yes" to the insecure registry warning.'))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Podman Desktop Registry Warning",src:r(72792).Z,width:"556",height:"206"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("inlineCode",{parentName:"li"},"registries.conf"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo vi /etc/containers/registries.conf\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Add the insecure registry: Add a new [","[registry]","] section for the URL of the insecure registry you want to use. For example, if your insecure registry is located at ",(0,a.kt)("a",{parentName:"li",href:"http://registry.example.com"},"http://registry.example.com"),", add the following lines:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"[[registry]]\nlocation = registry.example.com\ninsecure = true\n")),(0,a.kt)("p",null,"If you have multiple registries, you can add one [","[registry]","] block per registry:"),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save and exit the file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart Podman."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo systemctl restart podman\n")),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Pull or push container images: You can now use Podman Desktop to pull or push container images from/to the insecure registry you added.")))))}m.isMDXComponent=!0},72792:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/registry-warning-insecure-245d7254807b5939c082f47e5d538d80.png"}}]);