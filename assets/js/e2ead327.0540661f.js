"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[2517],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=u(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(g,r(r({ref:e},c),{},{components:n})):a.createElement(g,r({ref:e},c))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5025:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={id:"postinstall",title:"Post-Install Configuration",description:"How to configure CIPP after you've completed installation.",slug:"/gettingstarted/postinstall"},l=void 0,u={unversionedId:"gettingstarted/postinstall/postinstall",id:"gettingstarted/postinstall/postinstall",title:"Post-Install Configuration",description:"How to configure CIPP after you've completed installation.",source:"@site/docs/user/gettingstarted/postinstall/index.md",sourceDirName:"gettingstarted/postinstall",slug:"/gettingstarted/postinstall",permalink:"/docs/user/gettingstarted/postinstall",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/gettingstarted/postinstall/index.md",tags:[],version:"current",lastUpdatedBy:"John Duprey",lastUpdatedAt:1658588630,formattedLastUpdatedAt:"23/07/2022",frontMatter:{id:"postinstall",title:"Post-Install Configuration",description:"How to configure CIPP after you've completed installation.",slug:"/gettingstarted/postinstall"},sidebar:"userSidebar",previous:{title:"Installation",permalink:"/docs/user/gettingstarted/installation"},next:{title:"Roles",permalink:"/docs/user/gettingstarted/roles"}},c={},p=[{value:"Adding Users",id:"adding-users",level:2},{value:"Setting up access to tenants",id:"setting-up-access-to-tenants",level:2},{value:"It&#39;s Not Working",id:"its-not-working",level:2},{value:"Adding a Custom Domain Name",id:"adding-a-custom-domain-name",level:2},{value:"I want to manage my own tenant",id:"i-want-to-manage-my-own-tenant",level:2}],d={toc:p};function m(t){var e=t.components,n=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"At this point you should have completed all the steps in ",(0,i.kt)("a",{parentName:"p",href:"../installation/"},"manual installation or click-to-deploy installation")," and your deployment has succeeded. Any Red cross means your deployment has failed and you should retry, following all the steps."),(0,i.kt)("h2",{id:"adding-users"},"Adding Users"),(0,i.kt)("p",null,"After deployment, go to your resource group in Azure and select your Static Web Application (",(0,i.kt)("inlineCode",{parentName:"p"},"cipp-swa-xxxx")," if using click-to-deploy). Select ",(0,i.kt)("strong",{parentName:"p"},"Role Management")," and invite the users you want. Currently CIPP supports three roles, ",(0,i.kt)("inlineCode",{parentName:"p"},"reader"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"editor"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),". Further information on the roles and how to assign these is on the ",(0,i.kt)("a",{parentName:"p",href:"../roles/"},"Roles")," page."),(0,i.kt)("p",null,"You should now be able to browse to the custom domain or the default domain, and use the CIPP control panel."),(0,i.kt)("h2",{id:"setting-up-access-to-tenants"},"Setting up access to tenants"),(0,i.kt)("p",null,"If you are logged in, you'll be greeted by the Dashboard that will most likely tell you to setup your SAM application. You can do this by going to Settings -> SAM Wizard and following the instructions."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Secure Application Model account")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is ",(0,i.kt)("strong",{parentName:"p"},"strongly")," recommended that you use a separate global administrator account for each Secure Application Model application you create. This avoids conflicts that occur when using existing accounts which may be in customer tenants as guest users and provides better tracing in audit logs."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"This service account should be a Global Admin (in your tenant) and given Admin Agent permissions in partner Center. This account must have MFA enforced"),"."))),(0,i.kt)("h2",{id:"its-not-working"},"It's Not Working"),(0,i.kt)("p",null,"If you have waited for at least 30 minutes and things are still not working restart the Function App (",(0,i.kt)("strong",{parentName:"p"},"Azure Portal > CIPP Resource Group > Function App > Overview > Restart"),"). This solves 99.9% of all issues. Turn it off, turn it on again."),(0,i.kt)("p",null,"If you're still stuck, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/general/faq/"},"FAQ")," or ",(0,i.kt)("a",{parentName:"p",href:"/troubleshooting"},"Troubleshooting")," pages and if needed - create an issue ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KelvinTegelaar/CIPP/issues"},"on GitHub")," or seek help ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/cyberdrain"},"on the CIPP Discord")),(0,i.kt)("h2",{id:"adding-a-custom-domain-name"},"Adding a Custom Domain Name"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Why setup a custom domain?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"The automatically generated domain uses azurewebsites.net which is often blocked by web filtering products as it's often used by spammers and phishing sites due to the ease of obtaining an azurewebsites.net subdomain."),(0,i.kt)("li",{parentName:"ol"},"Your bookmark stays the same if you redeploy."),(0,i.kt)("li",{parentName:"ol"},"Easier to communicate internally and looks better for your team.")))),(0,i.kt)("p",null,"At the moment of deployment, the application uses a generated domain name. To change this, go to your Resource Group in Azure, select your Static Web App (",(0,i.kt)("inlineCode",{parentName:"p"},"cipp-swa-xxxx")," if using click-to-deploy) and select Custom Domains. You can add your own domain name here. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/custom-domain?tabs=azure-dns"},"Microsoft Docs - Set up a custom domain with free certificate in Azure Static Web Apps")),(0,i.kt)("h2",{id:"i-want-to-manage-my-own-tenant"},"I want to manage my own tenant"),(0,i.kt)("p",null,"If you want to manage your own tenant, or if you are not a Microsoft Partner but still want to use CIPP you can set a flag in the configuration for this. Be warned that anyone with access to CIPP can then manage your internal tenant too."),(0,i.kt)("p",null,"It is not recommended to use this functionality, and this might break at any point in time. "),(0,i.kt)("p",null,"To set the flag follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to your CIPP instance"),(0,i.kt)("li",{parentName:"ol"},"Go the the settings menu"),(0,i.kt)("li",{parentName:"ol"},"Go to the Backend tab."),(0,i.kt)("li",{parentName:"ol"},"Go to Function App (Configuration)"),(0,i.kt)("li",{parentName:"ol"},'Add a new variable called "PartnerTenantAvailable" and set this to "True"'),(0,i.kt)("li",{parentName:"ol"},"Clear the tenant cache. Users of CIPP now have access to the CSP Partner tenant.")))}m.isMDXComponent=!0}}]);