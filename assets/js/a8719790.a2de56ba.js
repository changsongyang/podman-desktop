"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14143],{21076:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=i(62540),s=i(43023);const o={title:"Podman Desktop 1.13 Release",description:"Podman Desktop 1.13 has been released!",slug:"podman-desktop-release-1.13",authors:"SoniaSandler",tags:["podman-desktop","release","podman"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-1.13/banner.png"},a=void 0,r={permalink:"/blog/podman-desktop-release-1.13",source:"@site/blog/2024-10-07-release-1.13.md",title:"Podman Desktop 1.13 Release",description:"Podman Desktop 1.13 has been released!",date:"2024-10-07T00:00:00.000Z",tags:[{inline:!0,label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{inline:!0,label:"release",permalink:"/blog/tags/release"},{inline:!0,label:"podman",permalink:"/blog/tags/podman"}],readingTime:5.465,hasTruncateMarker:!0,authors:[{name:"Sonia Sandler",title:"Associate Software Engineer",url:"https://github.com/SoniaSandler",imageURL:"https://github.com/SoniaSandler.png",key:"SoniaSandler",page:null}],frontMatter:{title:"Podman Desktop 1.13 Release",description:"Podman Desktop 1.13 has been released!",slug:"podman-desktop-release-1.13",authors:"SoniaSandler",tags:["podman-desktop","release","podman"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-1.13/banner.png"},unlisted:!1,prevItem:{title:"Introduction to Podman Desktop extensions",permalink:"/blog/extensions-introduction"},nextItem:{title:"Build your Kubernetes application with Podman Desktop",permalink:"/blog/2024/10/05/kubernetes-blog"}},l={authorsImageUrls:[void 0]},d=[{value:"Release Details",id:"release-details",level:2},{value:"Hyper-V support",id:"hyper-v-support",level:3},{value:"Search image feature",id:"search-image-feature",level:3},{value:"Updated empty state pages",id:"updated-empty-state-pages",level:3},{value:"New Kubernetes navigation",id:"new-kubernetes-navigation",level:3},{value:"Image layer explorer extension",id:"image-layer-explorer-extension",level:3},{value:"Docker compatibility mode page",id:"docker-compatibility-mode-page",level:3},{value:"Additional changes",id:"additional-changes",level:3},{value:"Other Notable Enhancements",id:"other-notable-enhancements",level:2},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:2},{value:"Community Thank You",id:"community-thank-you",level:2},{value:"Final notes",id:"final-notes",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Podman Desktop 1.13 Release! \ud83c\udf89"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"podman-desktop-hero-1.13",src:i(51584).A+"",width:"1196",height:"825"})}),"\n",(0,t.jsxs)(n.p,{children:["Podman Desktop 1.13 is now available. ",(0,t.jsx)(n.a,{href:"/downloads",children:"Click here to download it"}),"!"]}),"\n",(0,t.jsx)(n.p,{children:"This release includes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hyper-V support"}),": You can now create and manage Hyper-V Podman machines directly from Podman Desktop."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Search image feature"}),": Search for an image from Podman Desktop."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Updated empty state pages"}),": Start your journey in the containers, images, pods, and Kubernetes pages with a click of a button"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"New Kubernetes navigation"}),": All Kubernetes related pages have been moved to a separate sub menu for easier and less crowded navigation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Image Layer explorer extension"}),": With this new extension, you can explore the various layers of images."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Experimental Docker compatibility mode page"}),": You can now try out our experimental Docker compatibility mode page."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"release-details",children:"Release Details"}),"\n",(0,t.jsx)(n.h3,{id:"hyper-v-support",children:"Hyper-V support"}),"\n",(0,t.jsx)(n.p,{children:"Podman Desktop is now supporting the creation and modification of Hyper-V based Podman machines on Windows directly from the app.\nWhen creating a Podman machine in Windows, if both Hyper-V and WSL are enabled, you can choose either one of them as the provider from the dropdown menu."}),"\n",(0,t.jsx)(n.h3,{id:"search-image-feature",children:"Search image feature"}),"\n",(0,t.jsx)(n.p,{children:"As you type, a list of likely images is now shown to help you find the right one and reduce typing. If you would like to search for a specific tag, just add : to the name."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"search image",src:i(25076).A+"",width:"984",height:"624"})}),"\n",(0,t.jsx)(n.h3,{id:"updated-empty-state-pages",children:"Updated empty state pages"}),"\n",(0,t.jsx)(n.p,{children:"We have updated the empty state pages for images, containers, pods, and Kubernetes. You can now pull your first image, create your first container or pod, all with only one click."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"images empty page",src:i(34110).A+"",width:"984",height:"624"})}),"\n",(0,t.jsx)(n.h3,{id:"new-kubernetes-navigation",children:"New Kubernetes navigation"}),"\n",(0,t.jsx)(n.p,{children:"As we grew our Kubernetes section and added new Kubernetes related pages, the navigation was becoming a bit crowded. For a better user experience, this release includes a new Kubernetes submenu with all the relevant pages in it."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Kubernetes menu",src:i(82674).A+"",width:"984",height:"624"})}),"\n",(0,t.jsx)(n.h3,{id:"image-layer-explorer-extension",children:"Image layer explorer extension"}),"\n",(0,t.jsxs)(n.p,{children:["You can now see each layer of any image you have in Podman Desktop using the ",(0,t.jsx)(n.code,{children:"Image Layers Explorer"})," extension from the extensions catalog. After downloading the extension, choose any image from the available image list, go to the ",(0,t.jsx)(n.code,{children:"Files"})," tab in the ",(0,t.jsx)(n.code,{children:"Image Details"})," page, click on ",(0,t.jsx)(n.code,{children:"Fetch Layers"}),", and start exploring."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Layer explorer",src:i(78213).A+"",width:"984",height:"624"})}),"\n",(0,t.jsx)(n.h3,{id:"docker-compatibility-mode-page",children:"Docker compatibility mode page"}),"\n",(0,t.jsxs)(n.p,{children:["Try out our new experimental Docker compatibility page where you can view information about the Docker compatibility mode.\nGo to Settings -> Preferences, and enable the option in the ",(0,t.jsx)(n.code,{children:"Experimental (Docker Compatibility)"})," section. You'll then see the Docker compatibility page show up in the Settings menu."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Docker compatibility page",src:i(40010).A+"",width:"984",height:"624"})}),"\n",(0,t.jsx)(n.h3,{id:"additional-changes",children:"Additional changes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You can now control the zoom level of Podman Desktop in the Preferences page"}),"\n",(0,t.jsx)(n.li,{children:"When reopening Podman Desktop, the window will open in the same position it was closed"}),"\n",(0,t.jsx)(n.li,{children:"You can now see a summary of the release notes on the top of the Dashboard page"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"other-notable-enhancements",children:"Other Notable Enhancements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["chore: light mode for welcome page by @deboer-tim in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8401",children:"#8401"})]}),"\n",(0,t.jsxs)(n.li,{children:["chore: light icon support by @deboer-tim in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8359",children:"#8359"})]}),"\n",(0,t.jsxs)(n.li,{children:["chore: light mode for deploy pod to kube status by @deboer-tim in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8395",children:"#8395"})]}),"\n",(0,t.jsxs)(n.li,{children:["chore: update the list of guides to include ai lab by @gastoner in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8422",children:"#8422"})]}),"\n",(0,t.jsxs)(n.li,{children:["chore: allow windows titlebar icons change color dynamicaly by @gastoner in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8677",children:"#8677"})]}),"\n",(0,t.jsxs)(n.li,{children:["chore: publish prereleases to another repository by @benoitf in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8732",children:"#8732"})]}),"\n",(0,t.jsxs)(n.li,{children:["chore: generate summary of release notes with JSON format to the website by @SoniaSandler in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8790",children:"#8790"})]}),"\n",(0,t.jsxs)(n.li,{children:["chore: add release notes to dashboard page - renderer by @SoniaSandler in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/9190",children:"#9190"})]}),"\n",(0,t.jsxs)(n.li,{children:["feat: allow to upgrade/downgrade cli tool by @lstocchi in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8513",children:"#8513"})]}),"\n",(0,t.jsxs)(n.li,{children:["feat: remember window position and size of Podman Desktop window by @benoitf in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8511",children:"#8511"})]}),"\n",(0,t.jsxs)(n.li,{children:["feat: support cli tool installer by @lstocchi in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8534",children:"#8534"})]}),"\n",(0,t.jsxs)(n.li,{children:["feat: adding open release note to update confirmation dialog by @axel7083 in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8585",children:"#8585"})]}),"\n",(0,t.jsxs)(n.li,{children:["feat(configuration): allow to define the value of step for Input widget by @benoitf in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8700",children:"#8700"})]}),"\n",(0,t.jsxs)(n.li,{children:["feat: allow to set a zoom level by @benoitf in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8747",children:"#8747"})]}),"\n",(0,t.jsxs)(n.li,{children:["feat: add preflights check for HyperV by @jeffmaury in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8821",children:"#8821"})]}),"\n",(0,t.jsxs)(n.li,{children:["feat(renderer): enhance feedback form with github star link by @axel7083 in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8800",children:"#8800"})]}),"\n",(0,t.jsxs)(n.li,{children:["feat: add Preference to ask before fetching image layers by @feloy in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/9146",children:"#9146"})]}),"\n",(0,t.jsxs)(n.li,{children:["feat: bring docker compatibility page if flag is enabled by @benoitf in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/9183",children:"#9183"})]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"notable-bug-fixes",children:"Notable Bug Fixes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["fix: support light theme for auth provider in 'Logged In' state by @dgolovin in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8380",children:"#8380"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: update webview urls on change by @deboer-tim in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8456",children:"#8456"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: storybook svelte 5 by @axel7083 in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8495",children:"#8495"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: duplicated_indeterminate_progress_bar by @gastoner in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8238",children:"#8238"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: select first element of quickpick by @feloy in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8591",children:"#8591"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix(Tasks): task lifecycle managed in main by @axel7083 in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8144",children:"#8144"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: zoom level resets on window change after navigation by @dgolovin in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8489",children:"#8489"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: rename untagged image by @axel7083 in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8614",children:"#8614"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: number widget should accept float value for number type by @benoitf in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8685",children:"#8685"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: Fixed width of widget for inc/dec numbers by @gastoner in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8741",children:"#8741"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: input boxes are still using dark theme when PD is in light mode by @gastoner in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8549",children:"#8549"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: update native theme directly on config change by @deboer-tim in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8485",children:"#8485"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: floating precision when adding numbers by @benoitf in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8793",children:"#8793"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: track external changes when displaying configuration values by @benoitf in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8795",children:"#8795"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: configure certificates for secure proxy by @jeffmaury in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8704",children:"#8704"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: make terminal work after stopping and starting a container by @SoniaSandler in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8657",children:"#8657"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: use docker.io registry credentials for index.docker.io images by @feloy in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8892",children:"#8892"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: apply light theme on preflight checks box by @benoitf in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8991",children:"#8991"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: reflecting light and dark theme by AuditMessageBox by @gastoner in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/9040",children:"#9040"})]}),"\n",(0,t.jsxs)(n.li,{children:["fix: update input colors by @deboer-tim in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/9094",children:"#9094"})]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"community-thank-you",children:"Community Thank You"}),"\n",(0,t.jsx)(n.p,{children:"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped to make \ud83e\uddad Podman Desktop even better. In this\nrelease we received pull requests from the following new people:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/jingyuwa",children:"jingyuwa"})," in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/8455",children:"#8455 - doc: add section for using podman-desktop with Hyper-V"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/AshvG",children:"AshvG"})," in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/9131",children:"#9131 - docs: fix two typos on windows-install documentation"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/eddumelendez",children:"eddumelendez"})," in ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/9193",children:"#9193 - fix: Testcontainers name"})]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"final-notes",children:"Final notes"}),"\n",(0,t.jsxs)(n.p,{children:["The complete list of issues fixed in this release is available ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.13.0",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Get the latest release from the ",(0,t.jsx)(n.a,{href:"/downloads",children:"Downloads"})," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,t.jsx)(n.a,{href:"https://github.com/containers/podman-desktop",children:"GitHub repository"})," and see how you can help us make Podman Desktop better."]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},51584:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/banner-6aa0dbeecbf574fe8e500857a663542b.png"},40010:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/docker_comp_page-65f23988fc94abc069ebbb773414eacb.png"},34110:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/images_empty_page-390a1c3da42242887e82c42e42b54060.png"},82674:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/kubernetes_menu-24ed50e6fd8ddf48919520143f093438.png"},78213:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/layer_explorer-a2a7ed3ef117bc8679855045e31416cd.png"},25076:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/search_image-381c8623c02b590d6cf55616a217c72c.png"},43023:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(63696);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);