"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18609],{48419:(e,t,s)=>{s.d(t,{A:()=>r});var l=s(16655),a=s(63696),n=s(62540);const r=function(){function e(){if(!document?.documentElement)return;const e=document.documentElement;"dark"===e.dataset?.theme?(e.classList.add("dark"),setTimeout((()=>{e.classList.add("dark")}),100)):(e.classList.remove("dark"),setTimeout((()=>{e.classList.remove("dark")}),100))}return(0,a.useEffect)((()=>{l.A.canUseDOM&&e()}),[l.A.canUseDOM]),(0,a.useEffect)((()=>{if(!l.A.canUseDOM)return;const t=new MutationObserver((t=>{t.forEach((t=>{"attributes"!==t.type||"data-rh"!==t.attributeName&&"data-theme"!==t.attributeName||e()}))}));return t.observe(document.documentElement,{attributes:!0,childList:!1,subtree:!1}),()=>{t.disconnect()}}),[l.A.canUseDOM]),(0,n.jsx)("div",{})}},53750:(e,t,s)=>{s.r(t),s.d(t,{LinuxDownloads:()=>m,default:()=>u});var l=s(45968),a=s(67032),n=s(95601),r=s(65958),i=s(61836),o=s(48419),c=s(6072),d=s(63696),x=s(62540);function m(){const[e,t]=(0,d.useState)({version:"",binary:"",flatpak:""});return(0,d.useEffect)((()=>{(async function(e){const t=await fetch("https://api.github.com/repos/containers/podman-desktop/releases/latest"),s=await t.json(),l=s.assets,a=l.filter((e=>e.name.endsWith(".tar.gz")));if(1!==a.length)throw new Error("Unable to grab .tar.gz");const n=a[0],r=l.filter((e=>e.name.endsWith(".flatpak")));if(1!==r.length)throw new Error("Unable to grab .flatpak");const i=r[0];e({version:s.name,binary:n.browser_download_url,flatpak:i.browser_download_url})})(t).catch((e=>{console.error(e)}))}),[]),(0,x.jsxs)("div",{className:"basis-1/3 py-2 rounded-lg dark:text-gray-400 text-gray-900  bg-zinc-300/25 dark:bg-zinc-700/25 bg-blend-multiply text-center items-center",children:[(0,x.jsx)(i.g,{size:"4x",icon:n.M_V,className:"my-4"}),(0,x.jsx)("h2",{className:"w-full text-center text-4xl title-font font-medium pb-3 border-purple-500 border-b-2",children:"Linux"}),(0,x.jsx)("div",{className:"flex p-1 flex-col md:flex-col items-center align-top",children:(0,x.jsxs)("div",{className:"flex flex-col align-middle items-center",children:[(0,x.jsx)("h3",{className:"mt-0",children:"Podman Desktop for Linux"}),(0,x.jsxs)("div",{className:"pt-8",children:[(0,x.jsxs)(l.A,{className:"mt-auto no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-md font-semibold",to:e.flatpak,children:[(0,x.jsx)(i.g,{size:"1x",icon:r.cbP,className:"mr-2"}),"Download Now"]}),(0,x.jsxs)("caption",{className:"block w-full mt-1 text/50 dark:text-white/50",children:["Linux *.flatpak, version ",e.version]})]}),(0,x.jsxs)("div",{className:"mt-4",children:[(0,x.jsx)("div",{children:"Other Linux downloads:"}),(0,x.jsxs)(l.A,{className:"underline inline-flex dark:text-white text-purple-500 hover:text-purple-200 py-2 px-6 font-semibold text-md",to:e.binary,children:[(0,x.jsx)(i.g,{size:"1x",icon:r.cbP,className:"mr-2"}),"AMD64 binary (tar.gz)"]})]}),(0,x.jsx)("div",{className:"flex flex-col align-middle items-center",children:(0,x.jsxs)("div",{className:"items-center text-center pt-6",children:[(0,x.jsxs)("p",{className:"text-lg",children:["Using"," ",(0,x.jsx)("a",{className:"text-purple-500",href:"https://flathub.org/apps/details/io.podman_desktop.PodmanDesktop",children:"Flathub"})," ","? Install in one command:"]}),(0,x.jsxs)("div",{className:"flex flex-row pt-3 pb-7",children:[(0,x.jsx)("p",{className:"text-xl p-1 mx-1",children:(0,x.jsx)("svg",{width:"35px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:(0,x.jsx)("path",{d:"M12 2.604l-.43.283L0 10.459v6.752l6.393 4.184L12 17.725l5.607 3.671L24 17.211v-6.752L12 2.604zm0 .828l5.434 3.556-2.717 1.778L12 10.545l-2.717-1.78-2.717-1.777L12 3.432zM6.39 7.104l5.434 3.556-5.408 3.54-5.434-3.557 5.409-3.54zm11.22 0l5.431 3.554-5.434 3.557-5.433-3.555 5.435-3.556zM.925 10.867l5.379 3.52a.123.08 0 00.027.013v5.647l-5.406-3.54v-5.64zm11.213.115l5.408 3.54v5.664l-5.408-3.54v-5.664z"})})}),(0,x.jsxs)("div",{className:"dark:bg-charcoal-800/50 bg-zinc-300/50 p-1 text-xl dark:text-purple-200 text-purple-600 flex flex-row",children:[(0,x.jsxs)("div",{className:"w-72 truncate",children:[(0,x.jsx)(i.g,{size:"xs",icon:r.MNM,className:"mx-2 mt-3"}),"flatpak install flathub io.podman_desktop.PodmanDesktop"]}),(0,x.jsx)("div",{children:(0,x.jsxs)("button",{title:"Copy To Clipboard",className:"mr-2 p-1",children:[" ",(0,x.jsx)(i.g,{size:"xs",icon:r.R9T,className:"ml-3  cursor-pointer text-xl  text-white-500",onClick:()=>{(async()=>{await navigator.clipboard.writeText("flatpak install flathub io.podman_desktop.PodmanDesktop")})().catch((e=>{console.error("unable to copy instructions",e)}))}})]})})]})]})]})})]})})]})}function u(){const{siteConfig:e}=(0,a.A)();return(0,x.jsxs)(c.A,{title:e.title,description:"Downloads for macOS",children:[(0,x.jsx)(o.A,{}),(0,x.jsx)("section",{className:"container mx-auto flex justify-center flex-col",children:(0,x.jsxs)("div",{className:"w-full flex flex-col",children:[(0,x.jsx)("h1",{className:"title-font sm:text-3xl text-2xl lg:text-5xl mb-10 font-medium text-gray-900 dark:text-white",children:"Linux Downloads"}),(0,x.jsx)("main",{className:"h-screen",children:(0,x.jsx)(m,{})})]})})]})}}}]);