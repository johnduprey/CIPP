"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[180],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||a;return n?i.createElement(f,s(s({ref:t},u),{},{components:n})):i.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},722:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var i,r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=n(5108),c=["components"],p={id:"maintenance",title:"Maintenance",description:"Performs administrative tasks to maintain the CIPP function app.",slug:"/usingcipp/settings/maintenance"},u=void 0,l={unversionedId:"usingcipp/settings/maintenance",id:"usingcipp/settings/maintenance",title:"Maintenance",description:"Performs administrative tasks to maintain the CIPP function app.",source:"@site/docs/user/usingcipp/settings/maintenance.mdx",sourceDirName:"usingcipp/settings",slug:"/usingcipp/settings/maintenance",permalink:"/docs/user/usingcipp/settings/maintenance",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/usingcipp/settings/maintenance.mdx",tags:[],version:"current",lastUpdatedBy:"John Duprey",lastUpdatedAt:1659821623,formattedLastUpdatedAt:"06/08/2022",frontMatter:{id:"maintenance",title:"Maintenance",description:"Performs administrative tasks to maintain the CIPP function app.",slug:"/usingcipp/settings/maintenance"},sidebar:"userSidebar",previous:{title:"Notifications",permalink:"/docs/user/usingcipp/settings/notifications"},next:{title:"Updating",permalink:"/docs/user/updating"}},d={},m=[{value:"Maintenance Scripts",id:"maintenance-scripts",level:2},{value:"Clear-TokenCache.ps1",id:"clear-tokencacheps1",level:3},{value:"Grant-CippConditionalAccess.ps1",id:"grant-cippconditionalaccessps1",level:3},{value:"Migrate-CippStorage.ps1",id:"migrate-cippstorageps1",level:3},{value:"Known Issues / Limitations",id:"known-issues--limitations",level:2}],f=(i="NoKnownIssues",function(e){return o.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),g={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can use the scripts listed on this tab to streamline administrative tasks using PowerShell. We advice using Azure Cloud Shell to ensure that all the necessary pre-requisites are met. These scripts are tested for PowerShell 7.2."),(0,s.kt)("h2",{id:"maintenance-scripts"},"Maintenance Scripts"),(0,s.kt)("h3",{id:"clear-tokencacheps1"},"Clear-TokenCache.ps1"),(0,s.kt)("p",null,"This script automates the ",(0,s.kt)("a",{parentName:"p",href:"/docs/general/troubleshooting/#clear-token-cache"},"Clear Token Cache")," troubleshooting task."),(0,s.kt)("h3",{id:"grant-cippconditionalaccessps1"},"Grant-CippConditionalAccess.ps1"),(0,s.kt)("p",null,"This script assists with excluding CIPP from customer conditional access policies. A new named location is created in their Azure portal with all of the IP addresses that CIPP uses and is set to trusted. You can optionally add this location to existing policies."),(0,s.kt)("h3",{id:"migrate-cippstorageps1"},"Migrate-CippStorage.ps1"),(0,s.kt)("p",null,"This script will automate the process of converting the function app storage from v2 to v1 in accordance with ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-storage-providers#azure-storage"},"Microsoft's official recommendation"),". This script may need to be run multiple times to fully complete the migration, make sure to save the contents to a file before reloading the web page."),(0,s.kt)("h2",{id:"known-issues--limitations"},"Known Issues / Limitations"),(0,s.kt)(f,{mdxType:"NoKnownIssues"}))}h.isMDXComponent=!0}}]);