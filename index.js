!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Web3ExodusBridgeProvider=t():e.Web3ExodusBridgeProvider=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=(e,t)=>t[e],o=e=>t=>r("type",r("value",t))===e,u=o("CALL"),c=o("TAKE");var i=e=>{let t=e.next();const n=r=>{if(u(t)){const{fn:e,args:n}=t.value.payload;e(...n)}!1!==(t=e.next(r)).done||c(t)||n(r)};return n(),n},a=function(e){return"@@redux-saga/"+e},p=a("IO"),s=a("MULTICAST");var d=function(e){return null!=e},l=function(e){return"function"==typeof e},f=function(e){return"string"==typeof e},y=Array.isArray,b=function e(t){return t&&(f(t)||m(t)||l(t)||y(t)&&t.every(e))},v=function(e){return e&&l(e.take)&&l(e.close)},m=function(e){return Boolean(e)&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype},h=function(e){return v(e)&&e[s]};"function"==typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;var x="TAKE",g="CALL",A=function(e,t){var n;return(n={})[p]=!0,n.combinator=!1,n.type=e,n.payload=t,n};function P(e,t){return void 0===e&&(e="*"),b(e)?A(x,{pattern:e}):h(e)&&d(t)&&b(t)?A(x,{channel:e,pattern:t}):v(e)?A(x,{channel:e}):void 0}function E(e,t){var n,r=null;return l(e)?n=e:(y(e)?(r=e[0],n=e[1]):(r=e.context,n=e.fn),r&&f(n)&&l(r[n])&&(n=r[n])),{context:r,fn:n,args:t}}function S(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return A(g,E(e,n))}const j=e=>({type:j.type,payload:e});j.type="INJECTED_DAPP/requestAddresses";const I=e=>({type:I.type,payload:e});I.type="INJECTED_DAPP/addressesApproved";const T=()=>({type:T.type});T.type="INJECTED_DAPP/addressesDenied";const _=e=>({type:_.type,payload:e});_.type="ETH/getAccounts";class O{constructor({dappId:e,request:t}){this.dispatch=()=>{},this.send=(n,r)=>{const o={jsonrpc:"2.0",id:n.id};switch(n.method){case"eth_accounts":this.dispatch=i(function*({callback:e,dappId:t,dispatch:n,response:r}){yield S(n,j(t));const{type:o,payload:u}=yield P([I.type,T.type]);o===I.type?yield S(e,null,{...r,result:u}):o===T.type&&(yield S(e,{...r,error:"Permission denied."},null))}({callback:r,dappId:e,dispatch:t,response:o}));break;default:throw new Error(`[Warning!]: ${n.method} is not implemented.`)}}}}t.default=O}])}));
//# sourceMappingURL=web3-exodus-bridge-provider.bundle.js.map
