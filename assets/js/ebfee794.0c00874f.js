(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[305],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6973:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={},l="A Framework For Building IOTA Nodes, Clients, and Applications in Rust",c={unversionedId:"welcome",id:"welcome",isDocsHomePage:!1,title:"welcome",description:"{@include: ../../README.md}",source:"@site/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/welcome",editUrl:"https://github.com/iotaledger/bee/tree/main/docs/docs/welcome.md",version:"current",frontMatter:{},sidebar:"mySidebar",next:{title:"Getting Started",permalink:"/getting_started/getting_started"}},p=[{value:"Design",id:"design",children:[]},{value:"Supporting the Project",id:"supporting-the-project",children:[]},{value:"Joining the Discussion",id:"joining-the-discussion",children:[]}],d={toc:p};function u(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"a-framework-for-building-iota-nodes-clients-and-applications-in-rust"},"A Framework For Building IOTA Nodes, Clients, and Applications in Rust"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Badge",src:n(7840).Z,title:"Badge"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://discord.iota.org/%22"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Discord-9cf.svg?logo=discord",alt:"Discord",title:"Discord"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://iota.stackexchange.com/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/StackExchange-9cf.svg?logo=stackexchange",alt:"StackExchange",title:"StackExchange"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/bee/blob/master/LICENSE"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/github/license/iotaledger/bee.svg",alt:"Apache 2.0 license",title:"Apache 2.0 license"}))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/iotaledger/bee/workflows/Format/badge.svg",alt:"Format Badge",title:"Format Badge"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/iotaledger/bee/workflows/Audit/badge.svg",alt:"Audit Badge",title:"Audit Badge"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/iotaledger/bee/workflows/Clippy/badge.svg",alt:"Clippy Badge",title:"Clippy Badge"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/iotaledger/bee/workflows/Build/badge.svg",alt:"BuildBadge",title:"Build Badge"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/iotaledger/bee/workflows/Test/badge.svg",alt:"Test Badge",title:"Test Badge"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://coveralls.io/repos/github/iotaledger/bee/badge.svg?branch=dev",alt:"Coverage Badge",title:"Coverage Badge"})),(0,a.kt)("h1",{id:"about"},"About"),(0,a.kt)("p",null,"The IOTA Foundation aims to allow machines of all performance levels to contribute to the IOTA network, from microcontrollers to phones, web browsers, and servers."),(0,a.kt)("p",null,"Therefore, we are developing Bee as a modular collection of extendable crates, which expose foreign function interfaces (FFIs) for the next iteration of client libraries."),(0,a.kt)("p",null,"::info\nYou can find details about future development plans in our ",(0,a.kt)("a",{parentName:"p",href:"https://roadmap.iota.org"},"roadmap"),".\n:::"),(0,a.kt)("h2",{id:"design"},"Design"),(0,a.kt)("p",null,"Bee will be a central reference implementation for the most important\ndata structures and algorithms. This implementation will be verified during a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/bee-rfcs/"},"Request for Comments")," (RFC) process, and eventually certified."),(0,a.kt)("p",null,"By using this approach, we hope that improvements to core components will quickly propagate to all other client libraries, rather than\nhaving to fix each one individually."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"We have chosen the Rust programming language for Bee because of its C/C++ like performance, and its strong memory safety guarantees. ",(0,a.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Learn more about Rust"),"."))),(0,a.kt)("h2",{id:"supporting-the-project"},"Supporting the Project"),(0,a.kt)("p",null,"If you want to discuss Bee, or have some questions about it, join us on the\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.iota.org/"},"IOTA Discord server")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"#bee-dev")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"#bee-discussion")," channels."),(0,a.kt)("p",null,"If you want to be a part of development, please see the ",(0,a.kt)("a",{parentName:"p",href:"/contribute/contribute"},"contributing guidelines")," for information on how to contribute."),(0,a.kt)("h2",{id:"joining-the-discussion"},"Joining the Discussion"),(0,a.kt)("p",null,"If you want to get involved in the community, need help getting started, have any issues related to the repository, or just want to discuss blockchain, distributed ledgers, and IoT with other people, feel free to join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.iota.org/"},"Discord"),"."))}u.isMDXComponent=!0},7840:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Bee-c5c2d9376877a8ac566aae835d69568f.png"}}]);