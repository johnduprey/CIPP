"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[5098],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,v=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(v,i(i({ref:t},s),{},{components:r})):n.createElement(v,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},176:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"CIPP - v1.4.3",date:"11/26/2021 13:36:58",tags:["CIPP"],slug:"CIPP/v1-4-3"},u=void 0,l={permalink:"/releases/CIPP/v1-4-3",source:"@site/releases/CIPP/v1-4-3.md",title:"CIPP - v1.4.3",description:"Security release",date:"2021-11-26T13:36:58.000Z",formattedDate:"26 November 2021",tags:[{label:"CIPP",permalink:"/releases/tags/cipp"}],truncated:!0,authors:[],frontMatter:{title:"CIPP - v1.4.3",date:"11/26/2021 13:36:58",tags:["CIPP"],slug:"CIPP/v1-4-3"},prevItem:{title:"CIPP - v1.5.0",permalink:"/releases/CIPP/v1-5-0"},nextItem:{title:"CIPP - v1.4.2",permalink:"/releases/CIPP/v1-4-2"}},s={authorsImageUrls:[]},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"version-subtitle"},"Security release"),(0,a.kt)("p",null,"Hi all,"),(0,a.kt)("p",null,"During routine code scanning that we introduced thanks to our security auditor, we've found that there were a couple of minor security issues with user input we needed to touch on. We have a potential for cross-side-scripting with user input in two files. This release resolves that for the UserMobileDevice page and the UserView page. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KelvinTegelaar/CIPP/compare/v1.4.2...v1.4.3"},"https://github.com/KelvinTegelaar/CIPP/compare/v1.4.2...v1.4.3")))}m.isMDXComponent=!0}}]);