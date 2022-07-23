"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[3979],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,l(l({ref:e},u),{},{components:n})):a.createElement(g,l({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8309:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a,r=n(7462),i=n(3366),l=(n(7294),n(3905)),o=n(5108),p=["components"],s={id:"applications",title:"List Applications",description:"Interact with Microsoft Endpoint Manager applications.",slug:"/usingcipp/endpointmanagement/applications"},u=void 0,c={unversionedId:"usingcipp/endpointmanagement/applications",id:"usingcipp/endpointmanagement/applications",title:"List Applications",description:"Interact with Microsoft Endpoint Manager applications.",source:"@site/docs/user/usingcipp/endpointmanagement/applications.mdx",sourceDirName:"usingcipp/endpointmanagement",slug:"/usingcipp/endpointmanagement/applications",permalink:"/docs/user/usingcipp/endpointmanagement/applications",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/usingcipp/endpointmanagement/applications.mdx",tags:[],version:"current",lastUpdatedBy:"John Duprey",lastUpdatedAt:1658588630,formattedLastUpdatedAt:"23/07/2022",frontMatter:{id:"applications",title:"List Applications",description:"Interact with Microsoft Endpoint Manager applications.",slug:"/usingcipp/endpointmanagement/applications"},sidebar:"userSidebar",previous:{title:"Endpoint Management",permalink:"/docs/user/usingcipp/endpointmanagement"},next:{title:"List Application Queue",permalink:"/docs/user/usingcipp/endpointmanagement/applicationqueue"}},d={},m=[{value:"Details",id:"details",level:2},{value:"Actions",id:"actions",level:2},{value:"Known Issues / Limitations",id:"known-issues--limitations",level:2}],g=(a="NoKnownIssues",function(t){return o.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}),f={toc:m};function k(t){var e=t.components,n=(0,i.Z)(t,p);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The List Applications page shows a list of line-of-business applications configured for deployment in Microsoft Endpoint Manager / Intune."),(0,l.kt)("p",null,"You can assign the application to All Users / All Devices from the more button."),(0,l.kt)("h2",{id:"details"},"Details"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Published"),(0,l.kt)("td",{parentName:"tr",align:null},"The published status of the application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Install Command"),(0,l.kt)("td",{parentName:"tr",align:null},"The command to install the application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Uninstall Command"),(0,l.kt)("td",{parentName:"tr",align:null},"The command to uninstall the application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Install As"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the application should install as system or the user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Restart Behaviour"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the app installation may trigger a restart.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Assigned to Groups"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the app has active group assignments.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Created At"),(0,l.kt)("td",{parentName:"tr",align:null},"The creation date and time of the application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Modified At"),(0,l.kt)("td",{parentName:"tr",align:null},"The last modified date and time for the application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Featured App"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the app is a featured app in the portal.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"# of Dependent Apps"),(0,l.kt)("td",{parentName:"tr",align:null},"How many dependent apps exist for the application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Detection Type"),(0,l.kt)("td",{parentName:"tr",align:null},"Detection rule, if one exists.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Detection File/Folder Name"),(0,l.kt)("td",{parentName:"tr",align:null},"Detection Rule Folder Name Details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Detection File/Folder Path"),(0,l.kt)("td",{parentName:"tr",align:null},"Detection Rule Path details.")))),(0,l.kt)("h2",{id:"actions"},"Actions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Assign to All Users"),(0,l.kt)("li",{parentName:"ul"},"Assign to All Devices"),(0,l.kt)("li",{parentName:"ul"},"Assign Globally (All Users / All Devices)"),(0,l.kt)("li",{parentName:"ul"},"Delete Application")),(0,l.kt)("h2",{id:"known-issues--limitations"},"Known Issues / Limitations"),(0,l.kt)(g,{mdxType:"NoKnownIssues"}))}k.isMDXComponent=!0}}]);