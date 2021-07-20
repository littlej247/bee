(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[350],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3591:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),o=["components"],i={},s="Setup a Node",u={unversionedId:"setup_a_node",id:"setup_a_node",isDocsHomePage:!1,title:"Setup a Node",description:"You can find the source code for Bee in the official Bee repository.  Before you can install Bee from source, you will need to install some required dependencies.",source:"@site/docs/setup_a_node.md",sourceDirName:".",slug:"/setup_a_node",permalink:"/setup_a_node",editUrl:"https://github.com/iotaledger/bee/tree/main/docs/docs/setup_a_node.md",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Configuration",permalink:"/configuration"},next:{title:"Overview",permalink:"/crate_overview"}},c=[{value:"Installing from Source",id:"installing-from-source",children:[{value:"Dependency Packages",id:"dependency-packages",children:[]},{value:"Installing Rust",id:"installing-rust",children:[]},{value:"Updating Rust",id:"updating-rust",children:[]}]},{value:"Compiling the Bee Node",id:"compiling-the-bee-node",children:[{value:"Download the Source",id:"download-the-source",children:[]},{value:"With Dashboard",id:"with-dashboard",children:[]},{value:"Without dashboard",id:"without-dashboard",children:[]},{value:"Running",id:"running",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"setup-a-node"},"Setup a Node"),(0,l.kt)("p",null,"You can find the source code for Bee in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/bee"},"official Bee repository"),".  Before you can install Bee from source, you will need to install some required dependencies.  "),(0,l.kt)("h2",{id:"installing-from-source"},"Installing from Source"),(0,l.kt)("h3",{id:"dependency-packages"},"Dependency Packages"),(0,l.kt)("p",null,"Before starting the installation process, you should make sure your system has all the required dependencies. "),(0,l.kt)("h4",{id:"debian"},"Debian"),(0,l.kt)("p",null,"To run a Bee node in a Debian base system you will need to install the following packages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://packages.debian.org/sid/build-essential"},"build-essential")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cmake.org/"},"cmake")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://packages.debian.org/sid/pkg-config"},"pkg-config")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://packages.debian.org/sid/librocksdb-dev"},"librocksdb-dev")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apt.llvm.org/"},"llvm")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://packages.debian.org/search?keywords=clang"},"clang")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://packages.debian.org/unstable/libclang-dev"},"libclang-dev")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://packages.debian.org/jessie/libssl-dev"},"libssl-dev"))),(0,l.kt)("p",null,"To install all of these packages, you can run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get update\napt-get upgrade\napt-get install git npm build-essential cmake pkg-config librocksdb-dev llvm clang libclang-dev libssl-dev\n")),(0,l.kt)("h4",{id:"macos"},"macOS"),(0,l.kt)("p",null,"To run a bee node in a macOS system, you will need to install the following packages using the ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"brew")," package manager:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cmake.org/"},"cmake")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm"))),(0,l.kt)("p",null,"You can run the following command to install brew:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,l.kt)("p",null,"After the installer finishes, you can use brew to install the required packages by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew install cmake npm\n")),(0,l.kt)("h4",{id:"windows"},"Windows"),(0,l.kt)("p",null,"To run a bee node in a Windows system, you will need to install the following packages using the ",(0,l.kt)("a",{parentName:"p",href:"https://chocolatey.org"},"chocolatey")," package manager:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cmake.org/"},"cmake")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"nodejs-lts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git"))),(0,l.kt)("p",null,"To install chocolatey, open Powershell and execute the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))\n")),(0,l.kt)("p",null,"After the installer finishes, you can use chocolatey to install the required packages by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"choco install git --params '/NoAutoCrlf' nodejs-lts cmake --installargs 'ADD_CMAKE_TO_PATH=System' llvm\n")),(0,l.kt)("p",null,"::info\nYou will need to restart Powershell for your changes to take effect.\n:::"),(0,l.kt)("h3",{id:"installing-rust"},"Installing Rust"),(0,l.kt)("p",null,"You will need to install ",(0,l.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," in order to run a Bee node.  You should install version is ",(0,l.kt)("a",{parentName:"p",href:"https://blog.rust-lang.org/2021/03/25/Rust-1.51.0.html"},"1.51"),", or above."),(0,l.kt)("h4",{id:"debianmacos"},"Debian/macOS"),(0,l.kt)("p",null,"You can install Rust in a Debian/macOS system by running the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nsource $HOME/.cargo/env\n")),(0,l.kt)("h4",{id:"windows-1"},"Windows"),(0,l.kt)("p",null,"You can find installation instructions for the Windows system ",(0,l.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/learn/get-started"},"in the official Rust documentation"),"."),(0,l.kt)("h3",{id:"updating-rust"},"Updating Rust"),(0,l.kt)("p",null,"You can use ",(0,l.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"rustup")," to update your Rust version by running the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"rustup update\n")),(0,l.kt)("h2",{id:"compiling-the-bee-node"},"Compiling the Bee Node"),(0,l.kt)("h3",{id:"download-the-source"},"Download the Source"),(0,l.kt)("p",null,"Once you have installed all the required dependencies, you can start compiling the Bee Node.  To do so, you can simply clone the source code by running the following command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/iotaledger/bee.git --branch chrysalis-pt-2\n")),(0,l.kt)("h4",{id:"compiling"},"Compiling"),(0,l.kt)("p",null,"Before you start compiling Bee, you should change your current directory to ",(0,l.kt)("inlineCode",{parentName:"p"},"bee/bee-node"),".  You can do so by running the following command from the same directory where you downloaded the source:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd bee/bee-node\n")),(0,l.kt)("p",null,"You can compile Bee in two manners:"),(0,l.kt)("h3",{id:"with-dashboard"},"With Dashboard"),(0,l.kt)("p",null,"If you want to build Bee with its Dashboard, you should run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git submodule update --init\ncd src/plugins/dashboard/frontend\nnpm install\nnpm run build-bee\ncd ../../../../\ncargo build --release --features dashboard\n")),(0,l.kt)("h3",{id:"without-dashboard"},"Without dashboard"),(0,l.kt)("p",null,"If you want to build Bee without its Dashboard, you should run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cargo build --release\n")),(0,l.kt)("h3",{id:"running"},"Running"),(0,l.kt)("p",null,"Once you have downloaded and compiled Bee, you should copy make a copy of the example config file.  Be sure to review and update your configuration.  You can find more information on configuring bee in the ",(0,l.kt)("a",{parentName:"p",href:"/configuration"},"configuration section"),"."),(0,l.kt)("p",null,"To copy the example configuration file, you should run the following command: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cp config.example.toml config.toml\n")),(0,l.kt)("p",null,"Once you have copied and updated the configuration, you can run your Bee node by executing the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"../target/release/bee\n")))}d.isMDXComponent=!0}}]);