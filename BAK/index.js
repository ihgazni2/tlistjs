'use strict';

var util = require('util');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var util__default = /*#__PURE__*/_interopDefaultLegacy(util);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var elist = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){const n=r(1);function i(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=i,u=e[i],l=(0, t[i])(o,u,...r[i]);n.push(l);}return n}function o(e,t,r){return void 0===r&&(r=[]),i(e,t,Array(e.length).fill(r))}function u(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let e=i,o=(0, t[i])(e,...r[i]);n.push(o);}return n}function l(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=e[i],u=(0, t[i])(o,...r[i]);n.push(u);}return n}function f(e,t,r){return l(e,t,Array(e.length).fill(r))}function c(e,t,r){return i(e,Array(e.length).fill(t),r)}function a(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let e=i,o=(0, t[i])(e,...r);n.push(o);}return n}function p(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let e=(0, t[i])(...r[i]);n.push(e);}return n}function s(e,t,r){return o(e,Array(e.length).fill(t),r)}function y(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let e=t(i,...r[i]);n.push(e);}return n}function v(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=t(e[i],...r[i]);n.push(o);}return n}function h(e,t,r){void 0===r&&(r=[]);let n=Array(e.length).fill(r),i=[];for(var o=0;o<e.length;o++){let e=(0, t[o])(...n[o]);i.push(e);}return i}function b(e,t,r){let n=[];for(var i=0;i<e.length;i++){let e=t(i,...oargs);n.push(e);}return n}function m(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let o=t(e[i],...r);n.push(o);}return n}function d(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let e=t(i,...r[i]);n.push(e);}return n}function g(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=i,u=e[i],l=(0, t[i])(o,u,...r[i]),f={i:i,v:e[i]};l&&n.push(f);}return n}function O(e,t,r){return g(e,t,r).map(e=>e.i)}function w(e,t,r){return void 0===r&&(r=[]),g(e,t,Array(e.length).fill(r))}function A(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=i,u=(0, t[i])(o,...r[i]),l={i:i,v:e[i]};u&&n.push(l);}return n}function j(e,t,r){return j().map(e=>e.i)}function P(e,t,r){return O(e,Array(e.length).fill(t),r)}function x(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let o=i,u=(0, t[i])(o,...r),l={i:i,v:e[i]};u&&n.push(l);}return n}function S(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=(0, t[i])(...r[i]),u={i:i,v:e[i]};o&&n.push(u);}return n}function T(e,t,r){return void 0===r&&(r=[]),g(e,Array(e.length).fill(t),Array(e.length).fill(r))}function _(e,t,r){return T(e,t,r).map(e=>e.i)}function F(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=t(i,...r[i]),u={i:i,v:e[i]};o&&n.push(u);}return n}function I(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=t(e[i],...r[i]),u={i:i,v:e[i]};o&&n.push(u);}return n}function E(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let o=(0, t[i])(...r),u={i:i,v:e[i]};o&&n.push(u);}return n}function z(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let o=t(i,...r),u={i:i,v:e[i]};o&&n.push(u);}return n}function N(e,t,r){void 0===r&&(r=[]);let n=[];for(var i=0;i<e.length;i++){let o=t(e[i],...r),u={i:i,v:e[i]};o&&n.push(u);}return n}function D(e,t,r){return N(e,t,r).map(e=>e.i)}function k(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=t(...r[i]),u={i:i,v:e[i]};o&&n.push(u);}return n}function J(e){return void 0===e&&(e=!1),e?(e,t,r)=>e[r]===t[r]:(e,t,r)=>t.includes(e[r])}function M(e,t){let r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat(n,r)}function R(e,t){let r=e%t,n=parseInt((e-r)/t);return 0===r||(n+=1),n}function V(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r];for(let e=0;e<n.length;e++)t.push(n[e]);}return t}function L(e){return e[0].map((t,r)=>e.map((t,n)=>e[n][r]))}function q(e,t){let r=e.length,n=[];for(let i=0;i<r;i+=t){let r=e.slice(i,i+t);n.push(r);}return n}function U(e){let t=e.entries();return Array.from(t)}function H(e,t){let r=U(e);return r=r.filter(e=>e[1]==t),r=r.map(e=>e[0]),r}function $(e,t){return new(Object.getPrototypeOf(e).constructor)(...t)}function C(e,t){let r=[];for(let n=0;n<t.length;n++)r.push(e[t[n]]);return r}function B(e){let t=function(e){e.length;let t=e.map(e=>e.length);return Math.min(...t)}(e);return [e.map(e=>e.slice(0,t)),e.map(e=>e.slice(t)).filter(e=>e.length>0)]}function G(e){let t,r=[],n=e;for(;n.length>0;)[t,n]=B(n),r.push(t);return r}function Z(...e){let t;[e,t]=function(e){let t,r=e.length-1;return n.isArray(e[r])?t=1:(t=parseInt(e[r]),e=e.slice(0,r)),t=void 0===t||t<1?1:t,[e,t]}(e),e=m(e,(e,t)=>q(e,t),[t]);let r=function(...e){let t=G(e);return tmats=t.map(L),wfsmat=tmats.map(V),V(wfsmat)}(...e);return r=V(r),r}function W(e,t,r){var n,i;return n=t,i=[1,0,2],_(e,t=function(...e){let t=C(e,i);return n(...t)},r)}function K(e,t){for(let r=0;r<e.length;r++){let n=e[r];for(let i=0;i<n.length;i++){let o=n[i];e[r][i]=t(r,i,o);}}return e}function Q(e,t,r){return {_ox:e,_oy:t,_v:r}}function X(e){return K(e,Q)}function Y(e,t){let r=te(e,t);return r[r.length-1]}function ee(e,t,r){return te(t,r)[e]}function te(e,t){let r=U(t);return r=r.filter(e=>e[1]==value),r=r.map(e=>e[0]),r}Object.defineProperty(Array.prototype,"mapfivo",{value:function(e,t){return i(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfiv",{value:function(e,t){return o(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfio",{value:function(e,t){return u(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfvo",{value:function(e,t){return l(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfv",{value:function(e,t){return f(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapivo",{value:function(e,t){return c(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfi",{value:function(e,t){return a(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapfo",{value:function(e,t){return p(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapiv",{value:function(e,t){return s(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapio",{value:function(e,t){return y(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapvo",{value:function(e,t){return v(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapf",{value:function(e,t){return h(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapi",{value:function(e,t){return b(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapv",{value:function(e,t){return m(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"mapo",{value:function(e,t){return d(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"slctivFivo",{value:function(e,t){return g(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"slctiIv",{value:function(e,t){return _(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"slctiV",{value:function(e,t){return D(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"uniqualize",{value:function(){let e=new Set(this);return Array.from(e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"flat",{value:function(){let e=this;for(;e.some(e=>Array.isArray(e));)e=[].concat(...e);return e},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"tlist",{value:U,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"allIndexesOf",{value:function(e){return H(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"last",{value:function(){return this[this.length-1]},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"insert",{value:function(e,t){return Array.prototype.splice.call(this,t,0,e),this},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"insertArray",{value:function(e,t){return Array.prototype.splice.call(this,t,0,...e),this},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"seqs",{value:function(e){return C(this,e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"seqsNot",{value:function(e){return this.filter((t,r)=>!e.includes(r))},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"evens",{value:function(){return this.filter((e,t)=>t%2==0)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"odds",{value:function(){return this.filter((e,t)=>t%2==1)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"interleave",{value:function(...e){return e.unshift(this),Z(...e)},writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(Array.prototype,"findAllIndexes",{value:function(e,t){return W(this,e,t)},writable:!0,enumerable:!1,configurable:!0}),e.exports={mapfivo:i,mapfiv:o,mapfio:u,mapfvo:l,mapivo:c,mapfi:a,mapfv:f,mapfo:p,mapiv:s,mapio:y,mapvo:v,mapf:h,mapi:b,mapv:m,mapo:d,slctivFivo:g,slctiFivo:O,slctvFivo:function(e,t,r){return g(e,t,r).map(e=>e.v)},slctivFiv:w,slctiFiv:function(e,t,r){return w(e,t,r).map(e=>e.i)},slctvFiv:function(e,t,r){return w(e,t,r).map(e=>e.v)},slctivFio:A,slctiFio:function(e,t,r){return A(e,t,r).map(e=>e.i)},slctvFio:function(e,t,r){return A(e,t,r).map(e=>e.v)},slctivFvo:function(e,t,r){void 0===r&&(r=Array(e.length).fill([]));let n=[];for(var i=0;i<e.length;i++){let o=e[i],u=(0, t[i])(o,...r[i]),l={i:i,v:e[i]};u&&n.push(l);}return n},slctiFvo:j,slctvFvo:function(e,t,r){return j().map(e=>e.v)},slctivIvo:P,slctiIvo:function(e,t,r){return P(e,t,r).map(e=>e.i)},slctvIvo:function(e,t,r){return P(e,t,r).map(e=>e.v)},slctivFi:x,slctiFi:function(e,t,r){return x(e,t,r).map(e=>e.i)},slctvFi:function(e,t,r){return x(e,t,r).map(e=>e.v)},slctivFo:S,slctiFo:function(e,t,r){return S(e,t,r).map(e=>e.i)},slctvFo:function(e,t,r){return S(e,t,r).map(e=>e.v)},slctivIv:T,slctiIv:_,slctvIv:function(e,t,r){return T(e,t,r).map(e=>e.v)},slctivIo:F,slctiIo:function(e,t,r){return F(e,t,r).map(e=>e.i)},slctvIo:function(e,t,r){return F(e,t,r).map(e=>e.v)},slctivVo:I,slctiVo:function(e,t,r){return I(e,t,r).map(e=>e.i)},slctvVo:function(e,t,r){return I(e,t,r).map(e=>e.v)},slctivF:E,slctiF:function(e,t,r){return E(e,t,r).map(e=>e.i)},slctvF:function(e,t,r){return E(e,t,r).map(e=>e.v)},slctivI:z,slctiI:function(e,t,r){return z(e,t,r).map(e=>e.i)},slctvI:function(e,t,r){return z(e,t,r).map(e=>e.v)},slctivV:N,slctiV:D,slctvV:function(e,t,r){return N(e,t,r).map(e=>e.v)},slctivO:k,slctiO:function(e,t,r){return k(e,t,r).map(e=>e.i)},slctvO:function(e,t,r){return k(e,t,r).map(e=>e.v)},replfivo:function(e,t,r,n){let i=O(e,r,n),o=Array.from(e);for(let e of i)o[e]=t;return o},replace:function(e,t,r){let n=Array.from(e);for(let e=0;e<n.length;e++)n[e]===t&&(n[e]=r);return n},diffi:function(e,t,r,n){void 0===n&&(n=J(r));let i=[];for(var o in e)n(e,t,o)||i.push(e[o]);return i},diffv:function(e,t,r,n){void 0===n&&(n=J(r));let i=[];for(var o in e)n(e,t,o)||i.push(e[o]);return i},diffiv:function(e,t,r,n){void 0===n&&(n=J(r));let i=[];for(var o in e)n(e,t,o)||i.push({index:o,value:e[o]});return i},init:function(e,t){return Array.apply(null,Array(e)).map(e=>t)},divide:q,kvlist2d:function(e,t){let r={};for(let n=0;n<e.length;n++)r[e[n]]=t[n];return r},d2kvlist:function(e){let t=Object.keys(e);return [t,m(t,t=>e[t])]},reheadI:M,reheadV:function(e,t){let r=e.indexOf(t);return M(e,r)},getRowNumsViaLength:R,matRc2index:function(e,t,r){return e*r+t},matIndex2rc:function(e,t){let r=e%t;return [(e-r)/t,r]},list2mat:function(e,t){let r=e.length,n=R(r,t),i=[],o=0;for(var u=0;u<n;u++){let n=[];for(var l=0;l<t;l++)o<r&&n.push(e[o]),o+=1;i.push(n);}return i},list2mat2:function(e,t,r){let n=[],i=0;for(var o=0;o<r;o++){let r=[];for(var u=0;u<t;u++)r.push(e[i]),i+=1;n.push(r);}return n},mat2list:V,transpose:L,batmap:function(e,t,r){let n=[];r=L(r);for(var i=0;i<e.length;i++){let o=t(e[i],...r[i]);n.push(o);}return n},index1dto2d:function(e,t){return [(e-e%t)/t,e%t]},index2dto1d:function(e,t,r){return r*e+t},initMat:function(e,t,r){var n=Array(e).fill(r);for(let e=0;e<n.length;e++)n[e]=Array(t).fill(r);return n},extendWithOneValue:function(e,t,r){let n=Array(r).fill(t);return Array.prototype.concat(e,n)},uniqualize:function(e){let t=new Set(e);return Array.from(t)},tlist:U,allIndexesOf:H,last:function(e){return e[e.length-1]},insert:function(e,t,r,n=!0){if(!0===n);else {e=$(e,e=JSON.parse(JSON.stringify(e)));}return Array.prototype.splice.call(e,r,0,t),e},insertArray:function(e,t,r,n=!0){if(!0===n);else {e=$(e,e=JSON.parse(JSON.stringify(e)));}return Array.prototype.splice.call(e,r,0,...t),e},seqs:C,seqsNot:function(e,t){return e.filter((e,r)=>!t.includes(r))},evens:function(e){return e.filter((e,t)=>t%2==0)},odds:function(e){return e.filter((e,t)=>t%2==1)},dmat2mats:G,interleave:Z,findAllIndexes:W,decltype:$,rcrdize:function(e){return e.map((e,t)=>({_oi:t,_v:e}))},matRcrdize:X,matInplaceMapv:function(e,t){for(let r=0;r<e.length;r++){let n=e[r];for(let i=0;i<n.length;i++){let o=n[i];e[r][i]=t(o);}}return e},matInplaceMapxyv:K,matRcrdize:X,rmfst:function(e,t){return t.splice(t.findIndex(t=>t===e),1),t},rmlst:function(e,t){let r=Y(e,t);return t.splice(r,1),t},rm_which:function(e,t,r){let n=ee(e,t,r);return r.splice(n,1),r},rmall:function(e,t){return t=t.filter(t=>t!==e)},fst_index_of:function(e,t){return te(e,t)[0]},lst_index_of:Y,which_index_of:ee,all_indexes_of:te,list_inter_list:function(e,t){if(0===t.length)return !0;for(let r of t){if(e.includes(r))return !0}return !1},list_includes_list:function(e,t){for(let r of t){if(!e.includes(r))return !1}return !0}};},function(e,t,r){(function(e){var n=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},i=/%[sdj%]/g;t.format=function(e){if(!m(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(l(arguments[r]));return t.join(" ")}r=1;for(var n=arguments,o=n.length,u=String(e).replace(i,(function(e){if("%%"===e)return "%";if(r>=o)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return "[Circular]"}default:return e}})),f=n[r];r<o;f=n[++r])h(f)||!O(f)?u+=" "+f:u+=" "+l(f);return u},t.deprecate=function(r,n){if(void 0!==e&&!0===e.noDeprecation)return r;if(void 0===e)return function(){return t.deprecate(r,n).apply(this,arguments)};var i=!1;return function(){if(!i){if(e.throwDeprecation)throw new Error(n);e.traceDeprecation?console.trace(n):console.error(n),i=!0;}return r.apply(this,arguments)}};var o,u={};function l(e,r){var n={seen:[],stylize:c};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),v(r)?n.showHidden=r:r&&t._extend(n,r),d(n.showHidden)&&(n.showHidden=!1),d(n.depth)&&(n.depth=2),d(n.colors)&&(n.colors=!1),d(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=f),a(n,e,n.depth)}function f(e,t){var r=l.styles[t];return r?"["+l.colors[r][0]+"m"+e+"["+l.colors[r][1]+"m":e}function c(e,t){return e}function a(e,r,n){if(e.customInspect&&r&&j(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,e);return m(i)||(i=a(e,i,n)),i}var o=function(e,t){if(d(t))return e.stylize("undefined","undefined");if(m(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(b(t))return e.stylize(""+t,"number");if(v(t))return e.stylize(""+t,"boolean");if(h(t))return e.stylize("null","null")}(e,r);if(o)return o;var u=Object.keys(r),l=function(e){var t={};return e.forEach((function(e,r){t[e]=!0;})),t}(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(r)),A(r)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return p(r);if(0===u.length){if(j(r)){var f=r.name?": "+r.name:"";return e.stylize("[Function"+f+"]","special")}if(g(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(w(r))return e.stylize(Date.prototype.toString.call(r),"date");if(A(r))return p(r)}var c,O="",P=!1,x=["{","}"];(y(r)&&(P=!0,x=["[","]"]),j(r))&&(O=" [Function"+(r.name?": "+r.name:"")+"]");return g(r)&&(O=" "+RegExp.prototype.toString.call(r)),w(r)&&(O=" "+Date.prototype.toUTCString.call(r)),A(r)&&(O=" "+p(r)),0!==u.length||P&&0!=r.length?n<0?g(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special"):(e.seen.push(r),c=P?function(e,t,r,n,i){for(var o=[],u=0,l=t.length;u<l;++u)_(t,String(u))?o.push(s(e,t,r,n,String(u),!0)):o.push("");return i.forEach((function(i){i.match(/^\d+$/)||o.push(s(e,t,r,n,i,!0));})),o}(e,r,n,l,u):u.map((function(t){return s(e,r,n,l,t,P)})),e.seen.pop(),function(e,t,r){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(c,O,x)):x[0]+O+x[1]}function p(e){return "["+Error.prototype.toString.call(e)+"]"}function s(e,t,r,n,i,o){var u,l,f;if((f=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?l=f.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):f.set&&(l=e.stylize("[Setter]","special")),_(n,i)||(u="["+i+"]"),l||(e.seen.indexOf(f.value)<0?(l=h(r)?a(e,f.value,null):a(e,f.value,r-1)).indexOf("\n")>-1&&(l=o?l.split("\n").map((function(e){return "  "+e})).join("\n").substr(2):"\n"+l.split("\n").map((function(e){return "   "+e})).join("\n")):l=e.stylize("[Circular]","special")),d(u)){if(o&&i.match(/^\d+$/))return l;(u=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"));}return u+": "+l}function y(e){return Array.isArray(e)}function v(e){return "boolean"==typeof e}function h(e){return null===e}function b(e){return "number"==typeof e}function m(e){return "string"==typeof e}function d(e){return void 0===e}function g(e){return O(e)&&"[object RegExp]"===P(e)}function O(e){return "object"==typeof e&&null!==e}function w(e){return O(e)&&"[object Date]"===P(e)}function A(e){return O(e)&&("[object Error]"===P(e)||e instanceof Error)}function j(e){return "function"==typeof e}function P(e){return Object.prototype.toString.call(e)}function x(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(r){if(d(o)&&(o=e.env.NODE_DEBUG||""),r=r.toUpperCase(),!u[r])if(new RegExp("\\b"+r+"\\b","i").test(o)){var n=e.pid;u[r]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",r,n,e);};}else u[r]=function(){};return u[r]},t.inspect=l,l.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},l.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=y,t.isBoolean=v,t.isNull=h,t.isNullOrUndefined=function(e){return null==e},t.isNumber=b,t.isString=m,t.isSymbol=function(e){return "symbol"==typeof e},t.isUndefined=d,t.isRegExp=g,t.isObject=O,t.isDate=w,t.isError=A,t.isFunction=j,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=r(3);var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function T(){var e=new Date,t=[x(e.getHours()),x(e.getMinutes()),x(e.getSeconds())].join(":");return [e.getDate(),S[e.getMonth()],t].join(" ")}function _(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",T(),t.format.apply(t,arguments));},t.inherits=r(4),t._extend=function(e,t){if(!t||!O(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};var F="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function I(e,t){if(!e){var r=new Error("Promise was rejected with a falsy value");r.reason=e,e=r;}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(F&&e[F]){var t;if("function"!=typeof(t=e[F]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,F,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,r,n=new Promise((function(e,n){t=e,r=n;})),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push((function(e,n){e?r(e):t(n);}));try{e.apply(this,i);}catch(e){r(e);}return n}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),F&&Object.defineProperty(t,F,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,n(e))},t.promisify.custom=F,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);var i=r.pop();if("function"!=typeof i)throw new TypeError("The last argument must be of type Function");var o=this,u=function(){return i.apply(o,arguments)};t.apply(this,r).then((function(t){e.nextTick(u,null,t);}),(function(t){e.nextTick(I,t,u);}));}return Object.setPrototypeOf(r,Object.getPrototypeOf(t)),Object.defineProperties(r,n(t)),r};}).call(this,r(2));},function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o;}catch(e){r=o;}try{n="function"==typeof clearTimeout?clearTimeout:u;}catch(e){n=u;}}();var f,c=[],a=!1,p=-1;function s(){a&&f&&(a=!1,f.length?c=f.concat(c):p=-1,c.length&&y());}function y(){if(!a){var e=l(s);a=!0;for(var t=c.length;t;){for(f=c,c=[];++p<t;)f&&f[p].run();p=-1,t=c.length;}f=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e);}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e);}}function v(e,t){this.fun=e,this.array=t;}function h(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new v(e,t)),1!==c.length||a||l(y);},v.prototype.run=function(){this.fun.apply(null,this.array);},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return []},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return "/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0};},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8};},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e;};}])}));
//# sourceMappingURL=elist.js.map
});

function constructor_(items) {
    if(isTlist(items)) ; else if(items.length>1) {
        items = l2tl(items);
    } else if(Object.entries(items[0]).length>0) {
        items = d2tl(items[0]);
    } else {
        items = [];
    }
    return(items)
}

/**
 * Tlist
 *
 *
 *
 */

class Tlist  extends Array {
    /**
     * constructor
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     var tl0 = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
     *     tl0
     *     var tl1 = new Tlist(0,'a',1,'b',2,'c',0,'a',1,'b',2,'c')
     *     tl1
     *     var tl2 = new Tlist({
     *         0:'a',
     *         1:'b',
     *         2:'c'
     *     })
     *     tl2
     *     ////
     *     > var tl0 = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
     *     undefined
     *     > tl0
     *     Tlist [
     *       [ 0, 'a' ],
     *       [ 1, 'b' ],
     *       [ 2, 'c' ],
     *       [ 0, 'a' ],
     *       [ 1, 'b' ],
     *       [ 2, 'c' ] ]
     *     > var tl1 = new Tlist(0,'a',1,'b',2,'c',0,'a',1,'b',2,'c')
     *     undefined
     *     > tl1
     *     Tlist [
     *       [ 0, 'a' ],
     *       [ 1, 'b' ],
     *       [ 2, 'c' ],
     *       [ 0, 'a' ],
     *       [ 1, 'b' ],
     *       [ 2, 'c' ] ]
     *     > var tl2 = new Tlist({
     *     ...     0:'a',
     *     ...     1:'b',
     *     ...     2:'c'
     *     ... })
     *     undefined
     *     > tl2
     *     Tlist [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]
     *     >
     *
     *     //function
     *
     *    ////
     *
     *
     *
     * @param {Object|Array} items - even_length_array or dict_object or tuple_array
     * @return {Array} tlist - tuple list
     *
     */
    constructor(...items) {
        super(...constructor_(items));
    }

}




/**
 * isTuple
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *     var tlist = require("tlist")
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     var t = ['a',0]
 *     tlist.isTuple(t)
 *     var t = ['a']
 *     tlist.isTuple(t)
 *     var t = ['a',0,'b']
 *     tlist.isTuple(t)
 *     ////
 *     > var t = ['a',0]
 *     undefined
 *     > tlist.isTuple(t)
 *     true
 *     > var t = ['a']
 *     undefined
 *     > tlist.isTuple(t)
 *     false
 *     > var t = ['a',0,'b']
 *     undefined
 *     > tlist.isTuple(t)
 *     false
 *     >
 * @param {Object} obj - object
 * @return {Boolean} rslt - rslt
 */


function isTuple(obj) {
    let rslt = util__default['default'].isArray(obj) ? (obj.length  === 2):false;
    return(rslt)
}

/**
 * isTlist
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *     var tlist = require("tlist")
 *     //prototype
 *
 *     ////
 *
 *     //function
 *     tlist.isTlist(tl)
 *     var tl = [['a',0] ,'b',['a',2]]
 *     tlist.isTlist(tl)
 *     ////
 *     > var tl = [['a',0] ,['b',1],['a',2]]
 *     undefined
 *     > tlist.isTlist(tl)
 *     true
 *     > var tl = [['a',0] ,'b',['a',2]]
 *     undefined
 *     > tlist.isTlist(tl)
 *     false
 *     >
 *
 * @param {Object} obj - object
 * @return {Boolean} rslt - rslt
 */

function isTlist(obj) {
    let rslt = util__default['default'].isArray(obj) ?
        obj.filter(isTuple).length === obj.length ?
            true:false
        : false;
    return(rslt)
}

/**
 * t2d
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     tlist.t2d(['a',1])
 *     ////
 *     > tlist.t2d(['a',1])
 *     { a: 1 }
 *
 * @param {Object} t - tuple
 * @return {Object} d - dict
 */

function t2d(t) {
    return({
        [t[0]]:t[1]
    })
}

/**
 * d2t
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     tlist.d2t({ a: 1 })
 *     ////
 *     > tlist.d2t({ a: 1 })
 *     [ 'a', 1 ]
 *
 * @param {Object} d - dict
 * @return {Array} t - tuple
 */

function d2t(d) {
    return(Object.entries(d)[0])
}

/**
 * kvl2tl
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *      var tlist = require("tlist")
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     var kl =[0,1,2,3]
 *     var vl =['a','b','a','b']
 *     tlist.kvl2tl(kl,vl)
 *     ////
 *     > tlist.kvl2tl(kl,vl)
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'a' ], [ 3, 'b' ] ]
 *
 * @param {Array} kl - key list
 * @param {Array} vl - value list
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */


function kvl2tl(kl,vl) {
    return(elist.mapiv(kl,(i,v,o)=>([v,o[i]]),[vl]))
}


/**
 * deepcopy
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *      var tlist = require("tlist")
 *      //prototype
 *      var  tl=new Tlist([ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'a' ], [ 3, 'b' ] ])
 *      tl.deepcopy()
 *     ////
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'a' ], [ 3, 'b' ] ]
 *     tlist.deepcopy(tl)
 *     ////
 *     > tlist.deepcopy(tl)
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'a' ], [ 3, 'b' ] ]
 *
 * @return {Array} tl - [t0,t1,...tk...,tn]
 * @return {Array} ntl - new tlist
 */

function deepcopy(tl) {
    let old = tl;
    let ntl = JSON.parse(JSON.stringify(tl));
    ntl = elist.decltype(old,tl);
    return(ntl)
}

function _deepcopy() {
    return(deepcopy(this))
}

Object.defineProperty(Tlist.prototype, "deepcopy", {
    value: _deepcopy,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * tl2kvl 
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *      var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *      tl2.kvl()
 *      [ [ '0', '1', '2' ], [ 'a', 'b', 'c' ] ]
 *     ////
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'a' ], [ 3, 'b' ] ]
 *     var [kl,vl] = tlist.tl2kvl(tl)
 *     kl
 *     vl
 *     ////
 *     > kl
 *     [ 0, 1, 2, 3 ]
 *     > vl
 *     [ 'a', 'b', 'a', 'b' ]
 *     >
 *
 * @param {Array} tl - tlist
 * @return {Array} kvl - [kl,vl]
 */

function tl2kvl(tl) {
    let kl = tl.map((r)=>(r[0]));
    let vl = tl.map((r)=>(r[1]));
    return([kl,vl])
}

function _kvl() {
    return(tl2kvl(this).map((l)=>(Array.from(l))))
}

Object.defineProperty(Tlist.prototype, "kvl", {
    value: _kvl,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * tl2d
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist(0,'a',1,'b',2,'c')
 *     tl.dict()
 *     ////
 *     { '0': 'a', '1': 'b', '2': 'c' }
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 0, 'b' ], [ 1, 'a' ], [ 1, 'b' ] ]
 *     tlist.tl2d(tl)
 *     ////
 *     > tlist.tl2d(tl)
 *     { '0': 'b', '1': 'b' }
 *
 * @param {Array} tl - tlist
 * @return {Object} d - dict
 */

function tl2d(tl,priority) {
    let d = {};
    let [kl,vl] = tl2kvl(tl);
    for(let i=0;i<kl.length;i++) {
        d[kl[i]] = vl[i];
    }
    return(d)
}

function _dict(priority) {
    return(tl2d(this))
}

Object.defineProperty(Tlist.prototype, "dict", {
    value: _dict,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * d2tl
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     var d = { '0': 'b', '1': 'b' }
 *     tlist.d2tl(d)
 *     ////
 *     > tlist.d2tl(d)
 *     [ [ '0', 'b' ], [ '1', 'b' ] ]
 *
 * @param {Object} d - dict
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function d2tl(d) {
    return(Object.entries(d))
}

/**
 * extend
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *      var tl0 = new Tlist([ 0, 'a' ], [ 0, 'b' ])
 *      var tl1 = new Tlist([ 1, 'a' ], [ 1, 'b' ])
 *      tl0.extend(tl1)
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 0, 'b' ], [ 1, 'a' ], [ 1, 'b' ] ]
 *
 *     //function
 *     var tl0 = [ [ 0, 'a' ], [ 0, 'b' ] ]
 *     var tl1 = [ [ 1, 'a' ], [ 1, 'b' ] ]
 *     tlist.extend(tl0,tl1)
 *     ////
 *     > tlist.extend(tl0,tl1)
 *     [ [ 0, 'a' ], [ 0, 'b' ], [ 1, 'a' ], [ 1, 'b' ] ]
 *
 * @param {Array} tl0 - tlist
 * @param {Array} tl1 - tlist
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function extend(tl0,tl1) {
    return(tl0.concat(tl1))
}

function _extend(tl) {
    return(extend(this,tl))
}

Object.defineProperty(Tlist.prototype, "extend", {
    value: _extend,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * preextend
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl0 = new Tlist([ 0, 'a' ], [ 0, 'b' ])
 *     var tl1 = new Tlist([ 1, 'a' ], [ 1, 'b' ])
 *     tl0.prextend(tl1)
 *     ////
 *     Tlist [ [ 1, 'a' ], [ 1, 'b' ], [ 0, 'a' ], [ 0, 'b' ] ]
 *
 *     //function
 *     var tl0 = [ [ 0, 'a' ], [ 0, 'b' ] ]
 *     var tl1 = [ [ 1, 'a' ], [ 1, 'b' ] ]
 *     tlist.prextend(tl0,tl1)
 *     ////
 *     > tlist.prextend(tl0,tl1)
 *     [ [ 1, 'a' ], [ 1, 'b' ], [ 0, 'a' ], [ 0, 'b' ] ]
 *
 * @param {Array} tl0 - tlist
 * @param {Array} tl1 - tlist
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function prextend(tl0,tl1) {
    return(tl1.concat(tl0))
}

function _prextend(tl) {
    return(prextend(this,tl))
}

Object.defineProperty(Tlist.prototype, "prextend", {
    value: _prextend,
    writable: true,
    enumerable: false,
    configurable: true
});



/**
 * allIndexesOfK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0,'a' ], [ 1,'b' ],[2,'c'], [ 0,'a' ], [ 1,'b' ],[2,'c'])
 *     tl.allIndexesOfK(0)
 *     tl[0]
 *     tl[3]
 *     ////
 *     > tl.allIndexesOfK(0)
 *     [ 0, 3 ]
 *     > tl[0]
 *     [ 0, 'a' ]
 *     > tl[3]
 *     [ 0, 'a' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.allIndexesOfK(tl,0)
 *     ////
 *     > tlist.allIndexesOfK(tl,0)
 *     [ 0, 3 ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Array} indexes - indexes
 */

function allIndexesOfK(tl,key) {
    let [kl,vl] = tl2kvl(tl);
    return(elist.allIndexesOf(kl,key))
}

function _allIndexesOfK(key) {
    return(allIndexesOfK(this,key))
}

Object.defineProperty(Tlist.prototype, "allIndexesOfK", {
    value: _allIndexesOfK,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * allIndexesOfV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.allIndexesOfV('b')
 *     tl[1]
 *     tl[4]
 *     ////
 *     > tl.allIndexesOfV('b')
 *     [ 1, 4 ]
 *     > tl[1]
 *     [ 1, 'b' ]
 *     > tl[4]
 *     [ 1, 'b' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.allIndexesOfV(tl,'b')
 *     ////
 *     > tlist.allIndexesOfV(tl,'b')
 *     [ 1, 4 ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} indexes - indexes
 */

function allIndexesOfV(tl,value) {
    let [kl,vl] = tl2kvl(tl);
    return(elist.allIndexesOf(vl,value))
}


function _allIndexesOfV(value) {
    return(allIndexesOfV(this,value))
}

Object.defineProperty(Tlist.prototype, "allIndexesOfV", {
    value: _allIndexesOfV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * allIndexesOfKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.allIndexesOfKV(2,'c')
 *     tl[2]
 *     tl[5]
 *     ////
 *     > tl.allIndexesOfKV(2,'c')
 *     [ 2, 5 ]
 *     > tl[2]
 *     [ 2, 'c' ]
 *     > tl[5]
 *     [ 2, 'c' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.allIndexesOfKV(tl,0,'a')
 *     ////
 *     >tlist.allIndexesOfKV(tl,0,'a')
 *     [0,3]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} indexes - indexes
 */

function allIndexesOfKV(tl,key,value) {
    let [kl,vl] = tl2kvl(tl);
    let indexesK = elist.allIndexesOf(kl,key);
    let indexesV = elist.allIndexesOf(vl,value);
    return(elist.slctvIv(indexesK,(i,v,o)=>(v==o[i]),[indexesV]))
}


function _allIndexesOfKV(key,value) {
    return(allIndexesOfKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "allIndexesOfKV", {
    value: _allIndexesOfKV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * firstIndexOfK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.firstIndexOfK(1)
 *     ////
 *     1
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.firstIndexOfK(tl,0)
 *     ////
 *     > tlist.firstIndexOfK(tl,0)
 *     0
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Number} index - index
 */

function firstIndexOfK(tl,key) {
    return(allIndexesOfK(tl,key)[0])
}

function _firstIndexOfK(key) {
    return(firstIndexOfK(this,key))
}

Object.defineProperty(Tlist.prototype, "firstIndexOfK", {
    value: _firstIndexOfK,
    writable: true,
    enumerable: false,
    configurable: true
});




/**
 * firstIndexOfV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.firstIndexOfV('b')
 *     ////
 *     1
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     firstIndexOfV(tl,'b')
 *     ////
 *     1
 *     
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Number} index - index
 *
 */

function firstIndexOfV(tl,value) {
    return(allIndexesOfV(tl,value)[0])
}


function _firstIndexOfV(value) {
    return(firstIndexOfV(this,value))
}

Object.defineProperty(Tlist.prototype, "firstIndexOfV", {
    value: _firstIndexOfV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * firstIndexOfKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.firstIndexOfKV(2,'c')
 *     ////
 *     2
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.firstIndexOfKV(tl,2,'c')
 *     ////
 *     > tlist.firstIndexOfKV(tl,2,'c')
 *     2
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Number} index - index
 *
 */

function firstIndexOfKV(tl,key,value) {
    return(allIndexesOfKV(tl,key,value)[0])
}

function _firstIndexOfKV(key,value) {
    return(firstIndexOfKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "firstIndexOfKV", {
    value: _firstIndexOfKV,
    writable: true,
    enumerable: false,
    configurable: true
});



/**
 * lastIndexOfK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.lastIndexOfK(0)
 *     ////
 *     3
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.lastIndexOfK(tl,0)
 *     ////
 *     > tlist.lastIndexOfK(tl,0)
 *     3
 * 
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Number} index - index
 *
 */

function lastIndexOfK(tl,key) {
    return(allIndexesOfK(tl,key).last())
}

function _lastIndexOfK(key) {
    return(lastIndexOfK(this,key))
}

Object.defineProperty(Tlist.prototype, "lastIndexOfK", {
    value: _lastIndexOfK,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * lastIndexOfV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.lastIndexOfV('b')
 *     ////
 *     4
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.lastIndexOfV(tl,'b')
 *     ////
 *     4
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 *
 */

function lastIndexOfV(tl,value) {
    return(allIndexesOfV(tl,value).last())
}

function _lastIndexOfV(value) {
    return(lastIndexOfV(this,value))
}

Object.defineProperty(Tlist.prototype, "lastIndexOfV", {
    value: _lastIndexOfV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * lastIndexOfKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.lastIndexOfKV(2,'c')
 *     ////
 *     5
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.lastIndexOfKV(tl,2,'c')
 *     ////
 *     5
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Number} index - index
 * 
 */

function lastIndexOfKV(tl,key,value) {
    return(allIndexesOfKV(tl,key,value).last())
}

function _lastIndexOfKV(key,value) {
    return(lastIndexOfKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "lastIndexOfKV", {
    value: _lastIndexOfKV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * insert
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     //to avoid name conflict with prototype insert added by elist to Array
 *     //insertOne
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.insertOne('k','v',2) 
 *     ////
 *     > tl.insertOne('k','v',2)
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 'k', 'v' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.insert(tl,'k','v',2)
 *     ////
 *     > tlist.insert(tl,'k','v',2)
 *     [ [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 'k', 'v' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @param {Number} position - index
 * @return {Array} tl - tlist
 */

function insert(tl,key,value,position,inplace=true) {
    //to avoid re trigger constructor, when using customer defined constructor
    tl = elist.insert(tl,[key,value],position,inplace);
    return(tl)
}

function insertOne(tl,key,value,position,inplace=true) {
    return(insert(tl,key,value,position,inplace))
}

function _insert(key,value,position,inplace=true) {
    return(insert(this,key,value,position,inplace))
}

Object.defineProperty(Tlist.prototype, "insert", {
    value: _insert,
    writable: true,
    enumerable: false,
    configurable: true
});


Object.defineProperty(Tlist.prototype, "insertOne", {
    value: _insert,
    writable: true,
    enumerable: false,
    configurable: true
});



/**
 * append
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.append('k','v')
 *     ////
 *     > tl.append('k','v')
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 'k', 'v' ]]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.append(tl,'k','v')
 *     ////
 *     > tlist.append(tl,'k','v')
 *     [ [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 'k', 'v' ]]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - tlist
 */

function append(tl,key,value,inplace=true) {
    return(insert(tl,key,value,tl.length,inplace))
}

function _append(key,value,inplace=true) {
    return(append(this,key,value,inplace))
}

Object.defineProperty(Tlist.prototype, "append", {
    value: _append,
    writable: true,
    enumerable: false,
    configurable: true
});

/**
 * prepend
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.prepend('k','v')
 *     ////
 *     > tl.prepend('k','v')
 *     Tlist [
 *       ['k', 'v'],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ]]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.prepend(tl,'k','v')
 *     ////
 *     > tlist.prepend(tl,'k','v')
 *     [ 
 *       ['k', 'v'],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ]]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - tlist
 */


function prepend(tl,key,value,inplace=true) {
    return(insert(tl,key,value,0,inplace))
}

function _prepend(key,value,inplace=true) {
    return(prepend(this,key,value,inplace))
}

Object.defineProperty(Tlist.prototype, "prepend", {
    value: _prepend,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * insertTl
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *      var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *      var tl1 = new Tlist(['k','v'],['k','v'])
 *      tl.insertTl(tl1,2)
 *     ////
 *     > tl.insertTl(tl1,2)
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 'k', 'v' ],
 *       [ 'k', 'v' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     var tl1 = [ ['k','v'],['k','v']]
 *     tlist.insertTl(tl,tl1,2)
 *     tl
 *     ////
 *     > tlist.insertTl(tl,tl1,2)
 *     [ [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 'k', 'v' ],
 *       [ 'k', 'v' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *     > tl1
 *     [ [ 'k', 'v' ], [ 'k', 'v' ] ]
 *     >
 *     > tl
 *     [ [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 * @param {Array} tl - tlist
 * @param {Array} tl1 - tlist
 * @param {Number} position - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function insertTl(tl,tl1,position,inplace=true) {
    tl = elist.insertArray(tl,tl1,position,inplace);
    return(tl)
}

function _insertTl(tl1,position,inplace=true) {
    return(insertTl(this,tl1,position,inplace))
}

Object.defineProperty(Tlist.prototype, "insertTl", {
    value: _insertTl,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * includesK 
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.includesK(1)
 *     tl.includesK(200)
 *     ////
 *     > tl.includesK(1)
 *     true
 *     > tl.includesK(200)
 *     false
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.includesK(tl,1)
 *     tlist.includesK(tl,200)
 *     ////
 *     > tlist.includesK(tl,1)
 *     true
 *     > tlist.includesK(tl,200)
 *     false
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Boolean} rslt - rslt
 */

function includesK(tl,key) {
    return(allIndexesOfK(tl,key).length>0)
}

function _includesK(key) {
    return(includesK(this,key))
}

Object.defineProperty(Tlist.prototype, "includesK", {
    value: _includesK,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * includesV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.includesV('b')
 *     tl.includesV('e')
 *     ////
 *     >tl.includesV('b')
 *     true
 *     >tl.includesV('e')
 *     false
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.includesV(tl,'b')
 *     tlist.includesV(tl,'e')
 *     ////
 *     > tlist.includesV(tl,'b')
 *     true
 *     > tlist.includesV(tl,'e')
 *     false
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Boolean} rslt - rslt
 */

function includesV(tl,value) {
    return(allIndexesOfV(tl,value).length>0)
}

function _includesV(value) {
    return(includesV(this,value))
}

Object.defineProperty(Tlist.prototype, "includesV", {
    value: _includesV,
    writable: true,
    enumerable: false,
    configurable: true
});



/**
 * includesKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.includesKV(0,'a')
 *     tl.includesKV(0,'c')
 *     ////
 *     >tl.includesKV(0,'a')
 *     true
 *     >tl.includesKV(0,'c')
 *     false
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.includesKV(tl,0,'a')
 *     tlist.includesKV(tl,0,'c')
 *     ////
 *     > tlist.includesKV(tl,0,'a')
 *     true
 *     > tlist.includesKV(tl,0,'c')
 *     false
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Boolean} rslt - rslt
 *
 */

function includesKV(tl,key,value) {
    return(allIndexesOfKV(tl,key,value).length>0)
}

function _includesKV(key,value) {
    return(includesKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "includesKV", {
    value: _includesKV,
    writable: true,
    enumerable: false,
    configurable: true
});



/**
 * countK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.countK(1)
 *     ////
 *     2
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.countK(tl,1)
 *     ////
 *     2
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Number} count - count
 *
 */

function countK(tl,key) {
    return(allIndexesOfK(tl,key).length)
}

function _countK(key) {
    return(countK(this,key))
}

Object.defineProperty(Tlist.prototype, "countK", {
    value: _countK,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * countV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.countV('c')
 *     ////
 *     2
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.countV(tl,'c')
 *     ////
 *     > tlist.countV(tl,'c')
 *     2
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Number} count - count
 *
 */

function countV(tl,value) {
    return(allIndexesOfV(tl,value).length)
}

function _countV(value) {
    return(countV(this,value))
}

Object.defineProperty(Tlist.prototype, "countV", {
    value: _countV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * countKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.countKV(2,'c')
 *     ////
 *     2
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.countKV(tl,2,'c')
 *     ////
 *     > tlist.countKV(tl,2,'c')
 *     2
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Number} count - count
 *
 */

function countKV(tl,key,value) {
    return(allIndexesOfKV(tl,key,value).length)
}

function _countKV(key,value) {
    return(countKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "countKV", {
    value: _countKV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * rmK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     var tl1 = tl.rmK(1,1)
 *     tl1
 *     var tl2 = tl.rmK(1,0)
 *     tl2
 *     ////
 *     >tl1
 *     Tlist [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 0, 'a' ], [ 2, 'c' ] ]
 *     >tl2
 *     Tlist [ [ 0, 'a' ], [ 2, 'c' ], [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmK(tl,1,1)
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 *
 */

function rmK(tl,key,which) {
    let indexes = allIndexesOfK(tl,key);
    let index = indexes[which];
    return(tl.seqsNot([index]))
}

function _rmK(key,which) {
    return(rmK(this,key,which))
}

Object.defineProperty(Tlist.prototype, "rmK", {
    value: _rmK,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * rmV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     var tl1 = tl.rmV('a',1)
 *     tl1
 *     var tl2 = tl.rmV('a',0)
 *     tl2
 *     ////
 *     > tl1
 *     Tlist [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *     > tl2
 *     Tlist [ [ 1, 'b' ], [ 2, 'c' ], [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmV(tl,'a',1)
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmV(tl,value,which) {
    let indexes = allIndexesOfV(tl,value);
    let index = indexes[which];
    return(tl.seqsNot([index]))
}

function _rmV(value,which) {
    return(rmV(this,value,which))
}

Object.defineProperty(Tlist.prototype, "rmV", {
    value: _rmV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * rmKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     var tl1 = tl.rmKV(1,'b',1)
 *     tl1
 *     var tl2 = tl.rmKV(1,'b',0)
 *     tl2
 *     ////
 *     >tl1
 *     Tlist [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 0, 'a' ], [ 2, 'c' ] ]
 *     >tl2
 *     Tlist [ [ 0, 'a' ], [ 2, 'c' ], [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmKV(tl,1,'b',1)
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmKV(tl,key,value,which) {
    let indexes = allIndexesOfKV(tl,key,value);
    let index = indexes[which];
    return(tl.seqsNot([index]))
}

function _rmKV(key,value,which) {
    return(rmKV(this,key,value,which))
}

Object.defineProperty(Tlist.prototype, "rmKV", {
    value: _rmKV,
    writable: true,
    enumerable: false,
    configurable: true
});



/**
 * rmFirstK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmFirstK(1)
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 2, 'c' ], [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmFirstK(tl,1)
 *     tl
 *     ////
 *     [ [ 0, 'a' ], [ 2, 'c' ], [ 3, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 * 
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmFirstK(tl,key) {
    return(rmK(tl,key,0))
}

function _rmFirstK(key) {
    return(rmFirstK(this,key))
}

Object.defineProperty(Tlist.prototype, "rmFirstK", {
    value: _rmFirstK,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * rmFirstV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmFirstV('b')
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 2, 'c' ], [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmFirstV(tl,'c')
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 3, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmFirstV(tl,value) {
    return(rmV(tl,value,0))
}

function _rmFirstV(value) {
    return(rmFirstV(this,value))
}

Object.defineProperty(Tlist.prototype, "rmFirstV", {
    value: _rmFirstV,
    writable: true,
    enumerable: false,
    configurable: true
});

/**
 * rmFirstKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmFirstKV(2,'c')
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 1, 'b' ], [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmFirstKV(tl,2,'c')
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 3, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmFirstKV(tl,key,value) {
    return(rmKV(tl,key,value,0))
}

function _rmFirstKV(key,value) {
    return(rmFirstKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "rmFirstKV", {
    value: _rmFirstKV,
    writable: true,
    enumerable: false,
    configurable: true
});



/**
 * rmLastK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmLastK(1)
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 0, 'a' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmLastK(tl,1)
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Array} tl - [t0,t1,...tk...,tn
 */

function rmLastK(tl,key) {
    let which = allIndexesOfK(tl,key).length - 1; 
    return(rmK(tl,key,which))
}

function _rmLastK(key) {
    return(rmLastK(this,key))
}

Object.defineProperty(Tlist.prototype, "rmLastK", {
    value: _rmLastK,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * rmLastV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmLastV('c')
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 0, 'a' ], [ 1, 'b' ] ]
 *
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmLastV(tl,'c')
 *     tl
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ], [ 1, 'b' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmLastV(tl,value) {
    let which = allIndexesOfV(tl,value).length - 1;
    return(rmV(tl,value,which))
}

function _rmLastV(value) {
    return(rmLastV(this,value))
}

Object.defineProperty(Tlist.prototype, "rmLastV", {
    value: _rmLastV,
    writable: true,
    enumerable: false,
    configurable: true
});

/**
 * rmLastKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmLastKV(2,'c')
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 0, 'a' ], [ 1, 'b' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmLastKV(tl,2,'c')
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ], [ 1, 'b' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmLastKV(tl,key,value) {
    let which = allIndexesOfKV(tl,key,value).length - 1;
    return(rmKV(tl,key,value,which))
}

function _rmLastKV(key,value) {
    return(rmLastKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "rmLastKV", {
    value: _rmLastKV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * rmAllK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmAllK(2)
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 1, 'b' ], [ 0, 'a' ], [ 1, 'b' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmAllK(tl,2)
 *     tl
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 3, 'a' ], [ 1, 'b' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmAllK(tl,key) {
    let indexes = allIndexesOfK(tl,key);
    return(tl.seqsNot(indexes))
}

function _rmAllK(key) {
    return(rmAllK(this,key))
}

Object.defineProperty(Tlist.prototype, "rmAllK", {
    value: _rmAllK,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * rmAllV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmAllV('a')
 *     ////
 *     Tlist [ [ 1, 'b' ], [ 2, 'c' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmAllV(tl,'a')
 *     tl
 *     ////
 *     [ [ 1, 'b' ], [ 2, 'c' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmAllV(tl,value) {
    let indexes = allIndexesOfV(tl,value);
    return(tl.seqsNot(indexes))
}

function _rmAllV(value) {
    return(rmAllV(this,value))
}

Object.defineProperty(Tlist.prototype, "rmAllV", {
    value: _rmAllV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * rmAllKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmAllKV(1,'b')
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 2, 'c' ], [ 0, 'a' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmAllKV(tl,1,'b')
 *     ////
 *     [ [ 0, 'a' ], [ 2, 'c' ], [ 3, 'a' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmAllKV(tl,key,value) {
    let indexes = allIndexesOfKV(tl,key,value);
    return(tl.seqsNot(indexes))
}

function _rmAllKV(key,value) {
    return(rmAllKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "rmAllKV", {
    value: _rmAllKV,
    writable: true,
    enumerable: false,
    configurable: true
});



/**
 * getK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 11, 'b' ],[2,'d'])
 *     tl.getK(2,0)
 *     tl.getK(2,1)
 *     ////
 *     > tl.getK(2,0)
 *     [ 2, 'c' ]
 *     > tl.getK(2,1)
 *     [ 2, 'd' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 11, 'b' ],[2,'d'] ]
 *     tlist.getK(tl,2,1)
 *     ////
 *     [ 2, 'd']
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getK(tl,key,which) {
    let indexes = allIndexesOfK(tl,key);
    let index = indexes[which];
    return(tl.seqs([index])[0])
}

function _getK(key,which) {
    return(getK(this,key,which))
}

Object.defineProperty(Tlist.prototype, "getK", {
    value: _getK,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * getV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 11, 'b' ],[2,'d'])
 *     tl.getV('b',0)
 *     tl.getV('b',1)
 *     ////
 *     > tl.getV('b',0)
 *     [ 1, 'b' ]
 *     > tl.getV('b',1)
 *     [ 11, 'b' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 11, 'b' ],[2,'d'] ]
 *     tlist.getV(tl,'b',1)
 *     ////
 *     [ 11, 'b' ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getV(tl,value,which) {
    let indexes = allIndexesOfV(tl,value);
    let index = indexes[which];
    return(tl.seqs([index])[0])
}

function _getV(value,which) {
    return(getV(this,value,which))
}

Object.defineProperty(Tlist.prototype, "getV", {
    value: _getV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * getKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.getKV(tl,1,'b',1)
 *     ////
 *     > tl.getKV(1,'b',0)
 *     [ 1, 'b' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.getKV(tl,1,'b',1)
 *     ////
 *     [ 1, 'b' ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getKV(tl,key,value,which) {
    let indexes = allIndexesOfKV(tl,key,value);
    let index = indexes[which];
    return(tl.seqs([index])[0])
}

function _getKV(key,value,which) {
    return(getKV(this,key,value,which))
}

Object.defineProperty(Tlist.prototype, "getKV", {
    value: _getKV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * getFirstK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'])
 *     tl.getFirstK(2)
 *     ////
 *     [ 2, 'c' ]
 *
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'] ]
 *     tlist.getFirstK(tl,2)
 *     ////
 *     [ 2, 'c']
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getFirstK(tl,key) {
    return(getK(tl,key,0))
}

function _getFirstK(key) {
    return(getFirstK(this,key))
}

Object.defineProperty(Tlist.prototype, "getFirstK", {
    value: _getFirstK,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * getFirstV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'])
 *     tl.getFirstV('a')
 *     ////
 *     [ 0, 'a' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.getFirstV(tl,'a')
 *     ////
 *     [ 0, 'a' ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getFirstV(tl,value) {
    return(getV(tl,value,0))
}

function _getFirstV(value) {
    return(getFirstV(this,value))
}

Object.defineProperty(Tlist.prototype, "getFirstV", {
    value: _getFirstV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * getFirstKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.getFirstKV(0,'a')
 *     ////
 *     [ 0, 'a' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.getFirstKV(tl,0,'a')
 *     ////
 *     [ 0, 'a' ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getFirstKV(tl,key,value) {
    return(getKV(tl,key,value,0))
}

function _getFirstKV(key,value) {
    return(getFirstKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "getFirstKV", {
    value: _getFirstKV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * getLastK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'])
 *     tl.getLastK(2)
 *     ////
 *     [ 2, 'd' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'] ]
 *     tlist.getLastK(tl,2)
 *     ////
 *     [ 2, 'd' ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getLastK(tl,key) {
    let which = allIndexesOfK(tl,key).length - 1;
    return(getK(tl,key,which))
}

function _getLastK(key) {
    return(getLastK(this,key))
}

Object.defineProperty(Tlist.prototype, "getLastK", {
    value: _getLastK,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * getLastV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'])
 *     tl.getLastV('a')
 *     ////
 *     [ 3, 'a' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'] ]
 *     tlist.getLastV(tl,'a')
 *     ////
 *     [ 3, 'a' ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getLastV(tl,value) {
    let which = allIndexesOfV(tl,value).length - 1;
    return(getV(tl,value,which))
}

function _getLastV(value) {
    return(getLastV(this,value))
}

Object.defineProperty(Tlist.prototype, "getLastV", {
    value: _getLastV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * getLastKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'])
 *     tl.getLastKV(2,'c')
 *     ////
 *     [ 2, 'c']
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.getLastKV(tl,2,'c')
 *     ////
 *     [ 2, 'c' ]
 *
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getLastKV(tl,key,value) {
    let which = allIndexesOfKV(tl,key,value).length - 1;
    return(getKV(tl,key,value,which))
}

function _getLastKV(key,value) {
    return(getLastKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "getLastKV", {
    value: _getLastKV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * getAllK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'])
 *     tl.getAllK(2)
 *     ////
 *     Tlist [ [ 2, 'c' ], [ 2, 'd' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'] ]
 *     tlist.getAllK(tl,2)
 *     ////
 *     [ [ 2, 'c' ], [ 2, 'd' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getAllK(tl,key) {
    let indexes = allIndexesOfK(tl,key);
    return(tl.seqs(indexes))
}

function _getAllK(key) {
    return(getAllK(this,key))
}

Object.defineProperty(Tlist.prototype, "getAllK", {
    value: _getAllK,
    writable: true,
    enumerable: false,
    configurable: true
});



/**
 * getAllV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'])
 *     tl.getAllV('a')
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 3, 'a' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 11, 'b' ],[2,'c'] ]
 *     tlist.getAllV(tl,'a')
 *     ////
 *     [ [ 0, 'a' ], [ 3, 'a' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getAllV(tl,value) {
    let indexes = allIndexesOfV(tl,value);
    return(tl.seqs(indexes))
}

function _getAllV(value) {
    return(getAllV(this,value))
}

Object.defineProperty(Tlist.prototype, "getAllV", {
    value: _getAllV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * getAllKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'])
 *     tlist.getAllKV(1,'b')
 *     ////
 *     [ [ 1, 'b' ], [ 1, 'b' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.getAllKV(tl,1,'b')
 *     ////
 *     [ [ 1, 'b' ], [ 1, 'b' ] ]
 *
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getAllKV(tl,key,value) {
    let indexes = allIndexesOfKV(tl,key,value);
    return(tl.seqs(indexes))
}

function _getAllKV(key,value) {
    return(getAllKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "getAllKV", {
    value: _getAllKV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * set
 *
 * <pre>
 *     this will change the original tlist
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 'k', 'b' ],[2, 'c'], [ 3, 'a' ], [ 'k', 'b' ],[2,'c'])
 *     tl.set('k','vv',1)
 *     tl.set('k','vvv',0)
 *     ////
 *     > tl.set('k','vv',1)
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ] ]
 *     >
 *     > tl.set('k','vvv',0)
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 'k', 'vvv' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 'k', 'b' ],[2, 'c'], [ 3, 'a' ], [ 'k', 'b' ],[2,'c'] ]
 *     tlist.set(tl,'k','vv',1)
 *     tl
 *     ////
 *     > tlist.set(tl,'k','vv',1)
 *     [ [ 0, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ] ]
 *     > tl
 *     [ [ 0, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function set(tl,key,value,which) {
    let indexes = allIndexesOfK(tl,key);
    let index = indexes[which];
    tl[index][1] = value;
    return(tl)
}

function _set(key,value,which) {
    return(set(this,key,value,which))
}

Object.defineProperty(Tlist.prototype, "set", {
    value: _set,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * setFirst
 *
 * <pre>
 *     this will change the original tlist
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 'k', 'b' ],[2, 'c'], [ 3, 'a' ], [ 'k', 'b' ],[2,'c'])
 *     tl.setFirst('k','vv')
 *     ////
 *     > tl.setFirst('k','vv')
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 'k', 'b' ],[2, 'c'], [ 3, 'a' ], [ 'k', 'b' ],[2,'c'] ]
 *     tlist.setFirst(tl,'k','vv')
 *     tl
 *     ////
 *     > tlist.setFirst(tl,'k','vv')
 *     [ [ 0, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ] ]
 *     > tl
 *     [ [ 0, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function setFirst(tl,key,value) {
    return(set(tl,key,value,0))
}

function _setFirst(key,value) {
    return(setFirst(this,key,value))
}

Object.defineProperty(Tlist.prototype, "setFirst", {
    value: _setFirst,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * setLast
 *
 * <pre>
 *     this will change the original tlist
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 'k', 'b' ],[2, 'c'], [ 3, 'a' ], [ 'k', 'b' ],[2,'c'])
 *     tl.setLast('k','vv')
 *     ////
 *     [ [ 0, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 'k', 'b' ],[2, 'c'], [ 3, 'a' ], [ 'k', 'b' ],[2,'c'] ]
 *     tlist.setLast(tl,'k','vv')
 *     tl
 *     ////
 *     > tlist.setLast(tl,'k','vv')
 *     [ [ 0, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ] ]
 *     > tl
 *     [ [ 0, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function setLast(tl,key,value) {
    let lngth = countK(tl,key); 
    return(set(tl,key,value,lngth-1))
}

function _setLast(key,value) {
    return(setLast(this,key,value))
}

Object.defineProperty(Tlist.prototype, "setLast", {
    value: _setLast,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * setAll
 *
 * <pre>
 *     this will change the original tlist
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 'k', 'b' ],[2, 'c'], [ 3, 'a' ], [ 'k', 'b' ],[2,'c'])
 *     tl.setAll('k','vv')
 *     ////
 *     > tl.setAll('k','vv')
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.setAll(tl,1,'xx')
 *     tl
 *     ////
 *
 *    > tlist.setAll(tl,1,'xx')
 *    [ [ 0, 'a' ],
 *      [ 1, 'xx' ],
 *      [ 2, 'c' ],
 *      [ 3, 'a' ],
 *      [ 1, 'xx' ],
 *      [ 2, 'c' ] ]
 *    >
 *    > tl
 *    [ [ 0, 'a' ],
 *      [ 1, 'xx' ],
 *      [ 2, 'c' ],
 *      [ 3, 'a' ],
 *      [ 1, 'xx' ],
 *      [ 2, 'c' ] ]
 *    >
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function setAll(tl,key,value) {
    let indexes = allIndexesOfK(tl,key);
    for(let i of indexes){
        tl[i][1] = value;
    }
    return(tl)
}

function _setAll(key,value) {
    return(setAll(this,key,value))
}

Object.defineProperty(Tlist.prototype, "setAll", {
    value: _setAll,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * tupleEqK
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     if(k0===k1) then t0===t1
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 *
 */

function tupleEqK(t0,t1) {
    return(t0[0]===t1[0])
}

/**
 * tupleEqV
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     if(v0 === v1) then t0===t1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleEqV(t0,t1) {
    return(t0[1]===t1[1])
}

/**
 * tupleEqKV
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     if(k0===k1 && v0 === v1) then t0===t1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleEqKV(t0,t1)  {
    return(tupleEqK(t0,t1) && tupleEqV(t0,t1))
}

/**
 * tupleEq
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     if(k0===k1 && v0 === v1) then t0===t1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleEq(t0,t1)  {
    return(tupleEqKV(t0,t1))
}

/**
 * tupleLtK
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     if(k0 < k1) then t0<t1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleLtK(t0,t1) {
    return(t0[0]<t1[0])
}

/**
 * tupleLtV
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     if(v0 < v1) then t0<t1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleLtV(t0,t1) {
    return(t0[1]<t1[1])
}

/**
 * tupleGtK
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     if(k0 > k1) then t0>t1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleGtK(t0,t1) {
    return(t0[0]>t1[0])
}

/**
 * tupleGtV
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     if(v0 > v1) then t0>t1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleGtV(t0,t1) {
    return(t0[1]>t1[1])
}

/**
 * tupleCmpK
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     compare k0,k1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleCmpK(t0,t1) {
    if(tupleLtK(t0,t1)){
        return(-1)
    } else if(tupleEqK(t0,t1)) {
        return(0)
    } else {
        return(1)
    }
}

/**
 * tupleCmpV
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     compare v0,v1 
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleCmpV(t0,t1) {
    if(tupleLtV(t0,t1)){
        return(-1)
    } else if(tupleEqV(t0,t1)) {
        return(0)
    } else {
        return(1)
    }
}

/**
 * @funcname@
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     first compare k0,k1, then compare v0,v1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleCmpKV(t0,t1) {
    if(tupleLtK(t0,t1)){
        return(-1)
    } else if(tupleEqK(t0,t1)) {
        return(tupleCmpV(t0,t1))
    } else {
        return(1)
    }
}

/**
 * tupleCmpVK
 *
 * <pre>
 *     t0 =[k0,v0]
 *     t1 =[k1,v1]
 *     first compare v0,v1, then compare k0,k1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     tlist.tupleCmpVK(['a',2],['b',1])
 *     tlist.tupleCmpVK(['a',2],['b',3]
 *     tlist.tupleCmpVK(['a',2],['b',2])
 *     tlist.tupleCmpVK(['a',2],['a',2])
 *     ////
 *
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleCmpVK(t0,t1) {
    if(tupleLtV(t0,t1)){
        return(-1)
    } else if(tupleEqV(t0,t1)) {
        return(tupleCmpK(t0,t1))
    } else {
        return(1)
    }
}

/**
 * sortk
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.sortk()
 *     tl
 *     ////
 *     > tl.sortk()
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ] ]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.sortk(tl)
 *     ////
 *    > tlist.sortk(tl)
 *    [ [ 0, 'a' ],
 *      [ 1, 'b' ],
 *      [ 1, 'b' ],
 *      [ 2, 'c' ],
 *      [ 2, 'c' ],
 *      [ 3, 'a' ] ]
 *
 * @param {Array} tl - tlist
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function sortk(tl) {
    tl = JSON.parse(JSON.stringify(tl));
    tl.sort(tupleCmpK);
    return(tl)
}

function _sortk() {
    return(sortk(this))
}

Object.defineProperty(Tlist.prototype, "sortk", {
    value: _sortk,
    writable: true,
    enumerable: false,
    configurable: true
});

/**
 * sortv
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.sortv()
 *     tl
 *     ////
 *     > tl.sortv()
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 3, 'a' ],
 *       [ 1, 'b' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 2, 'c' ] ]
 *     >
 *     > tl
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.sortv(tl)
 *     ////
 *    > tlist.sortv(tl)
 *    [ [ 0, 'a' ],
 *      [ 3, 'a' ],
 *      [ 1, 'b' ],
 *      [ 1, 'b' ],
 *      [ 2, 'c' ],
 *      [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function sortv(tl) {
    tl = JSON.parse(JSON.stringify(tl));
    tl.sort(tupleCmpV);
    return(tl)
}

function _sortv() {
    return(sortv(this))
}

Object.defineProperty(Tlist.prototype, "sortv", {
    value: _sortv,
    writable: true,
    enumerable: false,
    configurable: true
});



/**
 * sortkv
 *
 * <pre>
 *     sort will first compare key, and then compare value
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.sortkv()
 *     tl
 *     ////
 *     > tl.sortkv()
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ] ]
 *     >
 *     > tl
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.sortkv(tl)
 *     ////
 *    > tlist.sortkv(tl)
 *    [ [ 0, 'a' ],
 *      [ 1, 'b' ],
 *      [ 1, 'b' ],
 *      [ 2, 'c' ],
 *      [ 2, 'c' ],
 *      [ 3, 'a' ] ]
 *
 * @param {Array} tl - tlist
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function sortkv(tl) {
    tl = JSON.parse(JSON.stringify(tl));
    tl.sort(tupleCmpKV);
    return(tl)
}

function _sortkv() {
    return(sortkv(this))
}

Object.defineProperty(Tlist.prototype, "sortkv", {
    value: _sortkv,
    writable: true,
    enumerable: false,
    configurable: true
});



/**
 * sortvk
 *
 * <pre>
 *     sort will first compare value, and then compare key
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.sortvk()
 *     tl
 *     ////
 *     > tl.sortvk()
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 3, 'a' ],
 *       [ 1, 'b' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 2, 'c' ] ]
 *     > tl
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.sortvk(tl)
 *     ////
 *    [ [ 0, 'a' ],
 *      [ 3, 'a' ],
 *      [ 1, 'b' ],
 *      [ 1, 'b' ],
 *      [ 2, 'c' ],
 *      [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function sortvk(tl) {
    tl = JSON.parse(JSON.stringify(tl));
    tl.sort(tupleCmpVK);
    return(tl)
}

function _sortvk() {
    return(sortvk(this))
}

Object.defineProperty(Tlist.prototype, "sortvk", {
    value: _sortvk,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * uniqualizeK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.uniqualizeK(1)
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.uniqualizeK(tl,1)
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function uniqualizeK(tl,key) {
    let ntl = [];
    for(let i=0;i<tl.length;i++){
        let t = tl[i];
        let k = t[0];
        let v = t[1];
        if(includesK(ntl,k) && (k===key)) {
            ntl = set(ntl,k,v,0);
        } else {
            ntl.push([k,v]);
        }
    }
    return(ntl)
}

function _uniqualizeK(key) {
    return(uniqualizeK(this,key))
}

Object.defineProperty(Tlist.prototype, "uniqualizeK", {
    value: _uniqualizeK,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * uniqualizeAllK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.uniqualizeAllK()
 *     ////
 *     [[ 0, 'a' ], [ 1, 'b' ],[2, 'c']]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.uniqualizeAllK(tl)
 *     ////
 *     > tlist.uniqualizeAllK(tl)
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ] ]
 *
 * @param {Array} tl - tlist
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function uniqualizeAllK(tl) {
    let ntl = [];
    for(let i=0;i<tl.length;i++){
        let t = tl[i];
        let k = t[0];
        let v = t[1];
        if(includesK(ntl,k)) {
            ntl = set(ntl,k,v,0);
        } else {
            ntl.push([k,v]);
        }
    }
    return(ntl)
}

function _uniqualizeAllK() {
    return(uniqualizeAllK(this))
}

Object.defineProperty(Tlist.prototype, "uniqualizeAllK", {
    value: _uniqualizeAllK,
    writable: true,
    enumerable: false,
    configurable: true
});



/**
 * uniqualizeV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.uniqualizeV('a')
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.uniqualizeV(tl,'a')
 *     ////
 *     > tlist.uniqualizeV(tl,'a')
 *     [ [ 3, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function uniqualizeV(tl,value) {
    let ntl = [];
    for(let i=0;i<tl.length;i++){
        let t = tl[i];
        let k = t[0];
        let v = t[1];
        if(includesV(ntl,v) && (v===value)) {
            let i = firstIndexOfV(ntl,v);
            ntl[i] = [k,v];
        } else {
            ntl.push([k,v]);
        }
    }
    return(ntl)
}

function _uniqualizeV(value) {
    return(uniqualizeV(this,value))
}

Object.defineProperty(Tlist.prototype, "uniqualizeV", {
    value: _uniqualizeV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * uniqualizeAllV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.uniqualizeAllV()
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.uniqualizeAllV(tl)
 *     ////
 *     > tlist.uniqualizeAllV(tl)
 *     [ [ 3, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function uniqualizeAllV(tl) {
    let ntl = [];
    for(let i=0;i<tl.length;i++){
        let t = tl[i];
        let k = t[0];
        let v = t[1];
        if(includesV(ntl,v)) {
            let i = firstIndexOfV(ntl,v);
            ntl[i] = [k,v];
        } else {
            ntl.push([k,v]);
        }
    }
    return(ntl)
}

function _uniqualizeAllV() {
    return(uniqualizeAllV(this))
}

Object.defineProperty(Tlist.prototype, "uniqualizeAllV", {
    value: _uniqualizeAllV,
    writable: true,
    enumerable: false,
    configurable: true
});

/**
 * uniqualizeKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.uniqualizeKV(0,'a')
 *     tl
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.uniqualizeKV(tl,1,'b')
 *     ////
 *     > tlist.uniqualizeKV(tl,1,'b')
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 0, 'a' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function uniqualizeKV(tl,key,value) {
    let ntl = [];
    for(let i=0;i<tl.length;i++){
        let t = tl[i];
        let k = t[0];
        let v = t[1];
        if(includesKV(ntl,k,v) && (k === key)  && (v===value)) {
            let i = firstIndexOfKV(ntl,k,v);
            ntl[i] = [k,v];
        } else {
            ntl.push([k,v]);
        }
    }
    return(ntl)
}

function _uniqualizeKV(key,value) {
    return(uniqualizeKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "uniqualizeKV", {
    value: _uniqualizeKV,
    writable: true,
    enumerable: false,
    configurable: true
});


/**
 * uniqualizeAllKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.uniqualizeAllKV()
 *     tl
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.uniqualizeAllKV(tl)
 *     ////
 *     > tlist.uniqualizeAllKV(tl)
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */


function uniqualizeAllKV(tl) {
    let ntl = [];
    for(let i=0;i<tl.length;i++){
        let t = tl[i];
        let k = t[0];
        let v = t[1];
        if(includesKV(ntl,k,v)) {
            let i = firstIndexOfKV(ntl,k,v);
            ntl[i] = [k,v];
        } else {
            ntl.push([k,v]);
        }
    }
    return(ntl)
}

function _uniqualizeAllKV() {
    return(uniqualizeAllKV(tl))
}

Object.defineProperty(Tlist.prototype, "uniqualizeAllKV", {
    value: _uniqualizeAllKV,
    writable: true,
    enumerable: false,
    configurable: true
});




/**
 * l2tl
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     var l = [ 0, 'a', 1, 'b', 2, 'c', 0, 'a', 1, 'b', 2, 'c' ]
 *     tlist.l2tl(l)
 *     ////
 *     > tlist.l2tl(l)
 *     [ [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 * @param {Array} l - list
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */


function l2tl(l) {
    if(l.length % 2 == 1) {
        l = l.slice(0,l.length-1);
    }
    if(l.length <2) {
        return([])
    } else {
        let kl = l.evens();
        let vl = l.odds();
        return(kvl2tl(kl,vl))
    }
}

/**
 * tl2l
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.list()
 *     ////
 *     [ 0, 'a', 1, 'b', 2, 'c', 0, 'a', 1, 'b', 2, 'c' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.tl2l(tl)
 *     ////
 *     > tlist.tl2l(tl)
 *     [ 0, 'a', 1, 'b', 2, 'c', 0, 'a', 1, 'b', 2, 'c' ]
 *
 * @param {Array} tl - tlist
 * @return {Array} l - list
 */


function tl2l(tl) {
    let [kl,vl] = tl2kvl(tl);
    let l = elist.interleave(kl,vl,1);
    return(l)
}

function _list() {
    return(Array.from(tl2l(tl)))
}

Object.defineProperty(Tlist.prototype, "list", {
    value: _list,
    writable: true,
    enumerable: false,
    configurable: true
});

//////
function dele2tuple(d) {
    return(Object.entries(d)[0])
}

function tuple2dele(t) {
    return({[t[0]]:t[1]})
}

function dl2tl(dl) {
    return(dl.map(dele2tuple))
}

function tl2dl(tl) {
    return(tl.map(tuple2dele))
}
//////

var tlist = {
     Tlist,
     isTuple,
     isTlist,
     t2d,
     d2t,
     kvl2tl,
     tl2kvl,
     tl2d,
     d2tl,
     l2tl,
     tl2l,
     extend,
     prextend,
     allIndexesOfK,
     allIndexesOfV,
     allIndexesOfKV,
     firstIndexOfK,
     firstIndexOfV,
     firstIndexOfKV,
     lastIndexOfK,
     lastIndexOfV,
     lastIndexOfKV,
     insert,
     insertOne,
     append,
     prepend,
     insertTl,
     includesK,
     includesV,
     includesKV,
     countK,
     countV,
     countKV,
     rmK,
     rmV,
     rmKV,
     rmFirstK,
     rmFirstV,
     rmFirstKV,
     rmLastK,
     rmLastV,
     rmLastKV,
     rmAllK,
     rmAllV,
     rmAllKV,
     getK,
     getV,
     getKV,
     getFirstK,
     getFirstV,
     getFirstKV,
     getLastK,
     getLastV,
     getLastKV,
     getAllK,
     getAllV,
     getAllKV,
     set,
     setFirst,
     setLast,
     setAll,
     tupleEqK,
     tupleEqV,
     tupleEqKV,
     tupleEq,
     tupleLtK,
     tupleLtV,
     tupleGtK,
     tupleGtV,
     tupleCmpK,
     tupleCmpV,
     tupleCmpKV,
     tupleCmpVK,
     sortk,
     sortv,
     sortkv,
     sortvk,
     uniqualizeK,
     uniqualizeAllK,
     uniqualizeV,
     uniqualizeAllV,
     uniqualizeKV,
     uniqualizeAllKV,
     ////
     dele2tuple,
     tuple2dele,
     dl2tl,
     tl2dl
};

module.exports = tlist;
