"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[5508],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,g=d["".concat(c,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6908:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return f}});var r,o=n(7462),i=n(3366),s=(n(7294),n(3905)),a=n(5108),c=["components"],u={id:"backendaccess",title:"Backend Access",description:"Get information on and access to the backend services powering CIPP.",slug:"/usingcipp/settings/backendaccess"},p=void 0,l={unversionedId:"usingcipp/settings/backendaccess",id:"usingcipp/settings/backendaccess",title:"Backend Access",description:"Get information on and access to the backend services powering CIPP.",source:"@site/docs/user/usingcipp/settings/backendaccess.mdx",sourceDirName:"usingcipp/settings",slug:"/usingcipp/settings/backendaccess",permalink:"/docs/user/usingcipp/settings/backendaccess",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/usingcipp/settings/backendaccess.mdx",tags:[],version:"current",lastUpdatedBy:"John Duprey",lastUpdatedAt:1658588630,formattedLastUpdatedAt:"23/07/2022",frontMatter:{id:"backendaccess",title:"Backend Access",description:"Get information on and access to the backend services powering CIPP.",slug:"/usingcipp/settings/backendaccess"},sidebar:"userSidebar",previous:{title:"Settings",permalink:"/docs/user/usingcipp/settings/settings"},next:{title:"Notifications",permalink:"/docs/user/usingcipp/settings/notifications"}},d={},f=[{value:"Details",id:"details",level:2},{value:"Resource group",id:"resource-group",level:3},{value:"Key vault",id:"key-vault",level:3},{value:"Function application",id:"function-application",level:3},{value:"Static Web App",id:"static-web-app",level:3},{value:"Known Issues / Limitations",id:"known-issues--limitations",level:2}],g=(r="NoKnownIssues",function(e){return a.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),m={toc:f};function y(e){var t=e.components,n=(0,i.Z)(e,c);return(0,s.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can gain access to the Azure backend by browsing to your Azure Portal."),(0,s.kt)("p",null,"CIPP also includes a quicker way to jump to the correct locations via the Settings -> Backend."),(0,s.kt)("h2",{id:"details"},"Details"),(0,s.kt)("h3",{id:"resource-group"},"Resource group"),(0,s.kt)("p",null,"Takes you to the container which holds all your resources."),(0,s.kt)("h3",{id:"key-vault"},"Key vault"),(0,s.kt)("p",null,"Takes you to the password / token storage, if you want to change your keys manually you can do so here. CIPP rotates these keys automatically each Sunday."),(0,s.kt)("h3",{id:"function-application"},"Function application"),(0,s.kt)("p",null,"The overview page is where you can stop the API, or restart it.\nThe configuration page is where you can change settings. If you want to set the time zone, check out ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/faq-configuration-and-management#how-do-i-set-the-server-time-zone-for-my-web-app-"},"this Microsoft FAQ"),".\nThe deployment center is where you can sync the API to the latest version from your GitHub fork."),(0,s.kt)("h3",{id:"static-web-app"},"Static Web App"),(0,s.kt)("p",null,"Custom domains brings you to the location where you can change the custom domain.\nRole management is where you can invite users, and set the roles for users."),(0,s.kt)("h2",{id:"known-issues--limitations"},"Known Issues / Limitations"),(0,s.kt)(g,{mdxType:"NoKnownIssues"}))}y.isMDXComponent=!0}}]);