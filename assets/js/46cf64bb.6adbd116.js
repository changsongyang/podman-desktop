(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45974],{62260:(e,t,a)=>{"use strict";a.d(t,{Z:()=>$});var n=a(27378),s=a(7980),o=a(40624),i=a(59899),l=a(58340),r=a(7419),c=a(10686);const d={collapseSidebarButton:"collapseSidebarButton_oTwn",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_pMEX"};var u=a(24246);function m(e){let{onClick:t}=e;return(0,u.jsx)("button",{type:"button",title:(0,r.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,r.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",d.collapseSidebarButton),onClick:t,children:(0,u.jsx)(c.Z,{className:d.collapseSidebarButtonIcon})})}var b=a(55854),p=a(14234),h=a(9169),x=a(58499),v=a(13879);const f=Symbol("EmptyContext"),y=n.createContext(f);function k(e){let{children:t}=e;const[a,s]=(0,n.useState)(null),o=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:s})),[a]);return(0,u.jsx)(y.Provider,{value:o,children:t})}var _=a(74229),g=a(76440),j=a(35237),C=a(90362);function I(e){let{collapsed:t,categoryLabel:a,onClick:n}=e;return(0,u.jsx)("button",{"aria-label":t?(0,r.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:a}):(0,r.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:a}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:n})}function S(e){let{item:t,onItemClick:a,activePath:s,level:l,index:r,...c}=e;const{items:d,label:m,collapsible:p,className:h,href:k}=t,{docs:{sidebar:{autoCollapseCategories:S}}}=(0,i.L)(),L=function(e){const t=(0,C.Z)();return(0,n.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,x.LM)(e):void 0),[e,t])}(t),Z=(0,x._F)(t,s),A=(0,g.Mg)(k,s),{collapsed:N,setCollapsed:w}=(0,_.u)({initialState:()=>!!p&&(!Z&&t.collapsed)}),{expandedItem:E,setExpandedItem:B}=function(){const e=(0,n.useContext)(y);if(e===f)throw new v.i6("DocSidebarItemsExpandedStateProvider");return e}(),H=function(e){void 0===e&&(e=!N),B(e?null:r),w(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:s}=e;const o=(0,v.D9)(t);(0,n.useEffect)((()=>{t&&!o&&a&&s(!1)}),[t,o,a,s])}({isActive:Z,collapsed:N,updateCollapsed:H}),(0,n.useEffect)((()=>{p&&null!=E&&E!==r&&S&&w(!0)}),[p,E,r,w,S]),(0,u.jsxs)("li",{className:(0,o.Z)(b.k.docs.docSidebarItemCategory,b.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":N},h),children:[(0,u.jsxs)("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":A}),children:[(0,u.jsx)(j.Z,{className:(0,o.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!k&&p,"menu__link--active":Z}),onClick:p?e=>{a?.(t),k?H(!1):(e.preventDefault(),H())}:()=>{a?.(t)},"aria-current":A?"page":void 0,role:p&&!k?"button":void 0,"aria-expanded":p&&!k?!N:void 0,href:p?L??"#":L,...c,children:m}),k&&p&&(0,u.jsx)(I,{collapsed:N,categoryLabel:m,onClick:e=>{e.preventDefault(),H()}})]}),(0,u.jsx)(_.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:N,children:(0,u.jsx)(M,{items:d,tabIndex:N?-1:0,onItemClick:a,activePath:s,level:l+1})})]})}var L=a(34715),Z=a(91858);const A={menuExternalLink:"menuExternalLink_BiEj"};function N(e){let{item:t,onItemClick:a,activePath:n,level:s,index:i,...l}=e;const{href:r,label:c,className:d,autoAddBaseUrl:m}=t,p=(0,x._F)(t,n),h=(0,L.Z)(r);return(0,u.jsx)("li",{className:(0,o.Z)(b.k.docs.docSidebarItemLink,b.k.docs.docSidebarItemLinkLevel(s),"menu__list-item",d),children:(0,u.jsxs)(j.Z,{className:(0,o.Z)("menu__link",!h&&A.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:m,"aria-current":p?"page":void 0,to:r,...h&&{onClick:a?()=>a(t):void 0},...l,children:[c,!h&&(0,u.jsx)(Z.Z,{})]})},c)}const w={menuHtmlItem:"menuHtmlItem_OniL"};function E(e){let{item:t,level:a,index:n}=e;const{value:s,defaultStyle:i,className:l}=t;return(0,u.jsx)("li",{className:(0,o.Z)(b.k.docs.docSidebarItemLink,b.k.docs.docSidebarItemLinkLevel(a),i&&[w.menuHtmlItem,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:s}},n)}function B(e){let{item:t,...a}=e;switch(t.type){case"category":return(0,u.jsx)(S,{item:t,...a});case"html":return(0,u.jsx)(E,{item:t,...a});default:return(0,u.jsx)(N,{item:t,...a})}}function H(e){let{items:t,...a}=e;const n=(0,x.f)(t,a.activePath);return(0,u.jsx)(k,{children:n.map(((e,t)=>(0,u.jsx)(B,{item:e,index:t,...a},t)))})}const M=(0,n.memo)(H),R={menu:"menu_jmj1",menuWithAnnouncementBar:"menuWithAnnouncementBar_YufC"};function D(e){let{path:t,sidebar:a,className:s}=e;const i=function(){const{isActive:e}=(0,p.n)(),[t,a]=(0,n.useState)(e);return(0,h.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return(0,u.jsx)("nav",{"aria-label":(0,r.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",R.menu,i&&R.menuWithAnnouncementBar,s),children:(0,u.jsx)("ul",{className:(0,o.Z)(b.k.docs.docSidebarMenu,"menu__list"),children:(0,u.jsx)(M,{items:a,activePath:t,level:1})})})}const T="sidebar_CUen",P="sidebarWithHideableNavbar_w4KB",O="sidebarHidden_k6VE",W="sidebarLogo_CYvI";function z(e){let{path:t,sidebar:a,onCollapse:n,isHidden:s}=e;const{navbar:{hideOnScroll:r},docs:{sidebar:{hideable:c}}}=(0,i.L)();return(0,u.jsxs)("div",{className:(0,o.Z)(T,r&&P,s&&O),children:[r&&(0,u.jsx)(l.Z,{tabIndex:-1,className:W}),(0,u.jsx)(D,{path:t,sidebar:a}),c&&(0,u.jsx)(m,{onClick:n})]})}const F=n.memo(z);var U=a(70197),J=a(9067);const K=e=>{let{sidebar:t,path:a}=e;const n=(0,J.e)();return(0,u.jsx)("ul",{className:(0,o.Z)(b.k.docs.docSidebarMenu,"menu__list"),children:(0,u.jsx)(M,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1})})};function V(e){return(0,u.jsx)(U.Zo,{component:K,props:e})}const Y=n.memo(V);function $(e){const t=(0,s.i)(),a="desktop"===t||"ssr"===t,n="mobile"===t;return(0,u.jsxs)(u.Fragment,{children:[a&&(0,u.jsx)(F,{...e}),n&&(0,u.jsx)(Y,{...e})]})}},10686:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});a(27378);var n=a(24246);function s(e){return(0,n.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,n.jsxs)("g",{fill:"#7a7a7a",children:[(0,n.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,n.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}},49107:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var n=a(48165),s=a(44561),o=a(55854),i=a(62260),l=a(1175),r=a(40624),c=a(27378),d=a(76702),u=a.n(d);const m={docSidebarContainer:"docSidebarContainer_JCC2",docSidebarContainerHidden:"docSidebarContainerHidden_PAws",sidebarViewport:"sidebarViewport_KdtS",storybookRoot:"storybookRoot_nsIy"};var b=a(24246);function p(){const e=(0,c.useRef)(null),{isDarkTheme:t}=(0,s.I)(),{search:a}=(0,n.TH)(),[l,d]=c.useState(void 0);(0,c.useEffect)((()=>{const e=new URLSearchParams(a).get("id");e&&d(e)}),[a]);const p=u().map((e=>({type:"link",href:`/storybook?id=${e.id}`,label:e.label}))),h=()=>{e?.current?.contentWindow?.postMessage(JSON.stringify({key:"storybook-channel",event:{type:"DARK_MODE",args:[t]}}))};return(0,c.useEffect)((()=>{h()}),[t]),(0,b.jsxs)("div",{className:(0,r.Z)(m.storybookRoot),children:[(0,b.jsx)("aside",{className:(0,r.Z)(o.k.docs.docSidebarContainer,m.docSidebarContainer),children:(0,b.jsx)(i.Z,{isHidden:!1,onCollapse:()=>{},sidebar:p,path:"/storybook"})}),l&&(0,b.jsx)("iframe",{ref:e,onLoad:t=>{!function(e){const t=e.contentDocument?.body;if(!t)return;new ResizeObserver((a=>{window.requestAnimationFrame((()=>{Array.isArray(a)&&a.length&&(e.style.height=`${t.scrollHeight}px`)}))})).observe(t)}(t.currentTarget),window.addEventListener("message",(t=>{if(t.source!==e?.current?.contentWindow)return;const a=JSON.parse(t.data);"key"in a&&"storybook-channel"===a.key&&"event"in a&&"object"==typeof a.event&&"docsRendered"===a.event.type&&h()}))},src:`/storybook-iframe?id=${l}`,style:{width:"100%",height:"100%"}})]})}function h(){return(0,b.jsx)(l.Z,{title:"Storybook",children:(0,b.jsx)(p,{})})}},76702:e=>{e.exports=[{type:"doc",id:"example-button--docs",label:"example-button--docs"},{type:"doc",id:"example-button--primary",label:"example-button--primary"},{type:"doc",id:"example-button--secondary",label:"example-button--secondary"},{type:"doc",id:"example-button--danger",label:"example-button--danger"},{type:"doc",id:"example-button--with-icon",label:"example-button--with-icon"},{type:"doc",id:"example-button--disabled",label:"example-button--disabled"},{type:"doc",id:"example-button--loading",label:"example-button--loading"}]}}]);