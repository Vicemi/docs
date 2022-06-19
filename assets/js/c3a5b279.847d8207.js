"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[291],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3873:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(7294),a=n(6010),r="tableOfContentsInline_0DDH";function i(e){var t=e.toc,n=e.isChild;return t.length?o.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(i,{isChild:!0,toc:e.children}))}))):null}var l=function(e){var t=e.toc;return o.createElement("div",{className:(0,a.Z)(r)},o.createElement(i,{toc:t}))}},235:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=n(3873),l=["components"],s={sidebar_position:3},c="Additional Configuration",u={unversionedId:"Installation/additional-configuration",id:"Installation/additional-configuration",isDocsHomePage:!1,title:"Additional Configuration",description:'Users, folders and filenames have been renamed from "dashboard" \u21d2 "controlpanel". Be aware that the provided commands may not fit your installation. Please change the users, folder and filenames for the commands corresponding to your installation.',source:"@site/docs/Installation/additional-configuration.md",sourceDirName:"Installation",slug:"/Installation/additional-configuration",permalink:"/docs/Installation/additional-configuration",editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/docs/Installation/additional-configuration.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/Installation/getting-started"},next:{title:"Troubleshooting",permalink:"/docs/Installation/troubleshooting"}},p=[{value:"Misc Configuration",id:"misc-configuration",children:[{value:"Discord Auth",id:"discord-auth",children:[]},{value:"reCAPTCHA v2",id:"recaptcha-v2",children:[]},{value:"Manual Mail Configuration",id:"manual-mail-configuration",children:[]},{value:"Payment Configuration",id:"payment-configuration",children:[]}]}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"additional-configuration"},"Additional Configuration"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'Users, folders and filenames have been renamed from "dashboard" \u21d2 "controlpanel". Be aware that the provided commands may not fit your installation. Please change the users, folder and filenames for the commands corresponding to your installation.'))),(0,r.kt)(i.Z,{toc:p,mdxType:"TOCInline"}),(0,r.kt)("h2",{id:"misc-configuration"},"Misc Configuration"),(0,r.kt)("h3",{id:"discord-auth"},"Discord Auth"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<your.controlpanel.gg>/admin/settings#misc")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Setting up Auth"),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"http://faq.demostoreprestashop.com/faq.php?fid=133&pid=41"},"How")," to get CLIENT_ID and CLIENT_SECRET ",(0,r.kt)("br",null),"\nfor the redirect URI, you have to use YOUR_WEBSITE_URL + /auth/callback (example: ",(0,r.kt)("a",{parentName:"p",href:"https://bitsec.dev/auth/callback"},"https://bitsec.dev/auth/callback"),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Adding the Discord Bot"),(0,r.kt)("br",null),"\nIf you would like to automatically force new users to join your Discord server after they have verified, you will need to set up a Discord bot. This can be an already existing Discord bot in your server."),(0,r.kt)("p",null,"Add your Discord..."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Bot to your server and give him the appropriate permissions."),(0,r.kt)("li",{parentName:"ol"},"Bot token on the webpage."),(0,r.kt)("li",{parentName:"ol"},"Guild ID on the webpage."),(0,r.kt)("li",{parentName:"ol"},'Then press the "Submit" button.')),(0,r.kt)("p",null,"That's it! The Dashboard can now use your bot to make API calls to Discord to place new users into your Discord server. Your bot will not come online as we only use it to make API calls when someone verifies, you can still use your bot as you normally would :)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Custom Role Reward"),(0,r.kt)("br",null),"\nIf you would like to give your users a custom role automatically when they verify their Discord account, you have to copy the ID of an existing role from your Discord server and place it on the webpage as well."),(0,r.kt)("h3",{id:"recaptcha-v2"},"reCAPTCHA v2"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<your.controlpanel.gg>/admin/settings#misc")),(0,r.kt)("p",null,"Controlpanel uses visible reCAPTCHA to secure the login page from brute-force attacks. If the login attempt is considered suspicious, users may be required to perform a reCAPTCHA challenge."),(0,r.kt)("p",null,"You can generate your own keys in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.google.com/recaptcha/admin/create"},"admin console")),(0,r.kt)("p",null,"To add your keys, you need to add them on the webpage."),(0,r.kt)("h3",{id:"manual-mail-configuration"},"Manual Mail Configuration"),(0,r.kt)("p",null,"To send out notifications and mails, you will need to configure your mail variables correctly.\nYou can use a free mail server; for example, from ",(0,r.kt)("a",{parentName:"p",href:"https://www.mailjet.com/"},"Mailjet"),". You can also install your own mail server using, for example, ",(0,r.kt)("a",{parentName:"p",href:"https://mailcow.email/"},"mailcow")),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<your.controlpanel.gg>/admin/settings#misc")," and enter your mail credentials."),(0,r.kt)("p",null,"Ensure you clear the config cache and restart the queue workers when making changes to the email details.",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan config:clear")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan queue:restart")),(0,r.kt)("p",null,"To test the mail configuration, you can go to the users tab and click the notify button top right.\nSelect a user and choose to send via email, write some text and click submit."),(0,r.kt)("h3",{id:"payment-configuration"},"Payment Configuration"),(0,r.kt)("h4",{id:"paypal"},"PayPal"),(0,r.kt)("p",null,"To use the PayPal payment gateway, you have to set up an application at the PayPal developer dashboard ",(0,r.kt)("inlineCode",{parentName:"p"},"https://developer.paypal.com/developer/accounts/"),"."),(0,r.kt)("p",null,'Go to "My Apps & Credentials" and choose either "Live" for production use or "Sandbox" for testing use of PayPal.'),(0,r.kt)("p",null,"Create an App, give it any name you want, and copy the Client ID and the Secret into the Settings of Controlpanel."),(0,r.kt)("p",null,'The only "App feature option" that Controlpanel needs is "Accept Payments".'),(0,r.kt)("h4",{id:"stripe"},"Stripe"),(0,r.kt)("p",null,'To use the Stripe payment gateway, you have to create a "company" at the Stripe dashboard and activate it ',(0,r.kt)("inlineCode",{parentName:"p"},"https://dashboard.stripe.com/account/onboarding/business-structure"),"."),(0,r.kt)("p",null,"Go to the developer page and click on API-Keys. You only need the Secret key in order to use Stripe at your Controlpanel. Copy it to the Payment Settings."),(0,r.kt)("p",null,"You will need to add a Webhook for Stripe in order to accept payments that are not 100% instantly confirmed by stripe (Klarna, Bank-Transfer etc.).\nClick on Webhooks and add an endpoint.\nEnter the Endpoint route: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<your.controlpanel.gg>/payment/StripeWebhooks"),'.\nChoose the "payment_intent.succeded" event to be sent to your WebhookRoute.\nAfter the webhook creation, you need to add the endpoint secret (Signing secret) to your Controlpanel settings. It can be found at the webhooks overview.'),(0,r.kt)("p",null,"At the Controlpanel settings, you need to provide a comma separated list of payment methods you want to support via Stripe.\nCheck which payment method is available for your currency: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://stripe.com/docs/payments/payment-methods/integration-options"),"."),(0,r.kt)("p",null,"You can change the mode between Test and Live, just like PayPal."))}m.isMDXComponent=!0},6010:function(e,t,n){function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);