var Zt=Object.defineProperty,Qt=Object.defineProperties;var en=Object.getOwnPropertyDescriptors;var pe=Object.getOwnPropertySymbols;var Ye=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable;var Ke=(t,e,n)=>e in t?Zt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,X=(t,e)=>{for(var n in e||(e={}))Ye.call(e,n)&&Ke(t,n,e[n]);if(pe)for(var n of pe(e))Je.call(e,n)&&Ke(t,n,e[n]);return t},ae=(t,e)=>Qt(t,en(e));var Ze=(t,e)=>{var n={};for(var r in t)Ye.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&pe)for(var r of pe(t))e.indexOf(r)<0&&Je.call(t,r)&&(n[r]=t[r]);return n};import{_ as _t,m as tn,r as Q,c as W,w as nn,o as B,a as M,b as g,d as p,n as yt,J as ce,t as Y,e as J,f as rn,u as Me,g as on,s as Qe,h as Ce,i as sn,j as C,k as h,F as K,l as an,p as me,q as et,v as tt,x as nt,y as wt,z as cn,A as ln,B as un,C as dn}from"./index.d6cdf4ce.js";import{M as hn,C as fn,a as pn,F as mn}from"./Field.332442d5.js";import{a as gn,M as Ee}from"./velocity.min.376a00d7.js";const bn={class:"flex items-stretch justify-start relative"},_n={class:"inline-flex"},yn=["accept"],wn={key:0},vn={class:"inline-flex px-4 py-2 justify-center bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 border rounded-r"},Cn={props:{modelValue:{type:[Object,File,Array],default:null},label:{type:String,default:"Upload"},icon:{type:String,default:tn},accept:{type:String,default:null},color:{type:String,default:"info"}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,r=Q(null),o=Q(n.modelValue),s=W(()=>n.modelValue);nn(s,i=>{o.value=i,i||(r.value.input.value=null)});const a=i=>{const c=i.target.files||i.dataTransfer.files;o.value=c[0],e("update:modelValue",o.value)};return(i,c)=>(B(),M("div",bn,[g("label",_n,[p(ce,{as:"a",label:t.label,icon:t.icon,color:t.color,class:yt({"rounded-r-none":o.value})},null,8,["label","icon","color","class"]),g("input",{ref_key:"root",ref:r,type:"file",class:"absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1",accept:t.accept,onInput:a},null,40,yn)]),o.value?(B(),M("div",wn,[g("span",vn,Y(o.value.name),1)])):J("v-if",!0)]))}};var En=_t(Cn,[["__file","/Users/kenge/Documents/code/side-project/watch-store-admin/src/components/FilePicker.vue"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Sn=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const o=t[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const s=t[n++];e[r++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=t[n++],a=t[n++],i=t[n++],c=((o&7)<<18|(s&63)<<12|(a&63)<<6|i&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((o&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Rn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<t.length;o+=3){const s=t[o],a=o+1<t.length,i=a?t[o+1]:0,c=o+2<t.length,l=c?t[o+2]:0,m=s>>2,w=(s&3)<<4|i>>4;let y=(i&15)<<2|l>>6,_=l&63;c||(_=64,a||(y=64)),r.push(n[m],n[w],n[y],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sn(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<t.length;){const s=n[t.charAt(o++)],i=o<t.length?n[t.charAt(o)]:0;++o;const l=o<t.length?n[t.charAt(o)]:64;++o;const w=o<t.length?n[t.charAt(o)]:64;if(++o,s==null||i==null||l==null||w==null)throw Error();const y=s<<2|i>>4;if(r.push(y),l!==64){const _=i<<4&240|l>>2;if(r.push(_),w!==64){const D=l<<6&192|w;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},In=function(t){const e=vt(t);return Rn.encodeByteArray(e,!0)},Ct=function(t){return In(t).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function Pn(){return typeof indexedDB=="object"}function An(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var s;e(((s=o.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn="FirebaseError";class we extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Dn,Object.setPrototypeOf(this,we.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Et.prototype.create)}}class Et{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,s=this.errors[e],a=s?Tn(s,r):"Error",i=`${this.serviceName}: ${a} (${o}).`;return new we(o,i,r)}}function Tn(t,e){return t.replace(xn,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const xn=/\{\$([^}]+)}/g;function De(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const s=t[o],a=e[o];if(rt(s)&&rt(a)){if(!De(s,a))return!1}else if(s!==a)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function rt(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t){return t&&t._delegate?t._delegate:t}class ue{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(o)return null;throw s}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Un(e))try{this.getOrInitializeService({instanceIdentifier:Z})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:o});r.resolve(s)}catch{}}}}clearInstance(e=Z){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Z){return this.instances.has(e)}getOptions(e=Z){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(s);r===i&&a.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(o,s);const a=this.instances.get(o);return a&&e(a,o),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:On(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Z){return this.component?this.component.multipleInstances?e:Z:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function On(t){return t===Z?void 0:t}function Un(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bn(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const $n={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},Nn=b.INFO,Ln={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},Vn=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),o=Ln[e];if(o)console[o](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jn{constructor(e){this.name=e,this._logLevel=Nn,this._logHandler=Vn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$n[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const Hn=(t,e)=>e.some(n=>t instanceof n);let ot,st;function Fn(){return ot||(ot=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zn(){return st||(st=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const St=new WeakMap,Te=new WeakMap,Rt=new WeakMap,Se=new WeakMap,$e=new WeakMap;function Wn(t){const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(G(t.result)),o()},a=()=>{r(t.error),o()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&St.set(n,t)}).catch(()=>{}),$e.set(e,t),e}function qn(t){if(Te.has(t))return;const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),o()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Te.set(t,e)}let xe={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Te.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return G(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gn(t){xe=t(xe)}function Xn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Re(this),e,...n);return Rt.set(r,e.sort?e.sort():[e]),G(r)}:zn().includes(t)?function(...e){return t.apply(Re(this),e),G(St.get(this))}:function(...e){return G(t.apply(Re(this),e))}}function Kn(t){return typeof t=="function"?Xn(t):(t instanceof IDBTransaction&&qn(t),Hn(t,Fn())?new Proxy(t,xe):t)}function G(t){if(t instanceof IDBRequest)return Wn(t);if(Se.has(t))return Se.get(t);const e=Kn(t);return e!==t&&(Se.set(t,e),$e.set(e,t)),e}const Re=t=>$e.get(t);function Yn(t,e,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const a=indexedDB.open(t,e),i=G(a);return r&&a.addEventListener("upgradeneeded",c=>{r(G(a.result),c.oldVersion,c.newVersion,G(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),i.then(c=>{s&&c.addEventListener("close",()=>s()),o&&c.addEventListener("versionchange",()=>o())}).catch(()=>{}),i}const Jn=["get","getKey","getAll","getAllKeys","count"],Zn=["put","add","delete","clear"],Ie=new Map;function at(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ie.get(e))return Ie.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=Zn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Jn.includes(n)))return;const s=async function(a,...i){const c=this.transaction(a,o?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(i.shift())),(await Promise.all([l[n](...i),o&&c.done]))[0]};return Ie.set(e,s),s}Gn(t=>ae(X({},t),{get:(e,n,r)=>at(e,n)||t.get(e,n,r),has:(e,n)=>!!at(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(er(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function er(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Be="@firebase/app",it="0.7.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=new jn("@firebase/app"),tr="@firebase/app-compat",nr="@firebase/analytics-compat",rr="@firebase/analytics",or="@firebase/app-check-compat",sr="@firebase/app-check",ar="@firebase/auth",ir="@firebase/auth-compat",cr="@firebase/database",lr="@firebase/database-compat",ur="@firebase/functions",dr="@firebase/functions-compat",hr="@firebase/installations",fr="@firebase/installations-compat",pr="@firebase/messaging",mr="@firebase/messaging-compat",gr="@firebase/performance",br="@firebase/performance-compat",_r="@firebase/remote-config",yr="@firebase/remote-config-compat",wr="@firebase/storage",vr="@firebase/storage-compat",Cr="@firebase/firestore",Er="@firebase/firestore-compat",Sr="firebase",Rr="9.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="[DEFAULT]",Ir={[Be]:"fire-core",[tr]:"fire-core-compat",[rr]:"fire-analytics",[nr]:"fire-analytics-compat",[sr]:"fire-app-check",[or]:"fire-app-check-compat",[ar]:"fire-auth",[ir]:"fire-auth-compat",[cr]:"fire-rtdb",[lr]:"fire-rtdb-compat",[ur]:"fire-fn",[dr]:"fire-fn-compat",[hr]:"fire-iid",[fr]:"fire-iid-compat",[pr]:"fire-fcm",[mr]:"fire-fcm-compat",[gr]:"fire-perf",[br]:"fire-perf-compat",[_r]:"fire-rc",[yr]:"fire-rc-compat",[wr]:"fire-gcs",[vr]:"fire-gcs-compat",[Cr]:"fire-fst",[Er]:"fire-fst-compat","fire-js":"fire-js",[Sr]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=new Map,Oe=new Map;function kr(t,e){try{t.container.addComponent(e)}catch(n){Ne.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ye(t){const e=t.name;if(Oe.has(e))return Ne.debug(`There were multiple attempts to register component ${e}.`),!1;Oe.set(e,t);for(const n of _e.values())kr(n,t);return!0}function Pr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},te=new Et("app","Firebase",Ar);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=Rr;function xr(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:It,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw te.create("bad-app-name",{appName:String(r)});const o=_e.get(r);if(o){if(De(t,o.options)&&De(n,o.config))return o;throw te.create("duplicate-app",{appName:r})}const s=new Mn(r);for(const i of Oe.values())s.addComponent(i);const a=new Dr(t,n,s);return _e.set(r,a),a}function Br(t=It){const e=_e.get(t);if(!e)throw te.create("no-app",{appName:t});return e}function oe(t,e,n){var r;let o=(r=Ir[t])!==null&&r!==void 0?r:t;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const i=[`Unable to register library "${o}" with version "${e}":`];s&&i.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&i.push("and"),a&&i.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ne.warn(i.join(" "));return}ye(new ue(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="firebase-heartbeat-database",Ur=1,de="firebase-heartbeat-store";let ke=null;function kt(){return ke||(ke=Yn(Or,Ur,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(de)}}}).catch(t=>{throw te.create("storage-open",{originalErrorMessage:t.message})})),ke}async function Mr(t){var e;try{return(await kt()).transaction(de).objectStore(de).get(Pt(t))}catch(n){throw te.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function ct(t,e){var n;try{const o=(await kt()).transaction(de,"readwrite");return await o.objectStore(de).put(e,Pt(t)),o.done}catch(r){throw te.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function Pt(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=1024,Nr=30*24*60*60*1e3;class Lr{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=lt();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const s=new Date(o.date).valueOf();return Date.now()-s<=Nr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lt(),{heartbeatsToSend:n,unsentEntries:r}=Vr(this._heartbeatsCache.heartbeats),o=Ct(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function lt(){return new Date().toISOString().substring(0,10)}function Vr(t,e=$r){const n=[];let r=t.slice();for(const o of t){const s=n.find(a=>a.agent===o.agent);if(s){if(s.dates.push(o.date),ut(n)>e){s.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),ut(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pn()?An().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mr(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return ct(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return ct(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ut(t){return Ct(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t){ye(new ue("platform-logger",e=>new Qn(e),"PRIVATE")),ye(new ue("heartbeat",e=>new Lr(e),"PRIVATE")),oe(Be,it,t),oe(Be,it,"esm2017"),oe("fire-js","")}Hr("");var Fr="firebase",zr="9.8.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oe(Fr,zr,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="firebasestorage.googleapis.com",Dt="storageBucket",Wr=2*60*1e3,qr=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E extends we{constructor(e,n){super(Pe(e),`Firebase Storage: ${n} (${Pe(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,E.prototype)}_codeEquals(e){return Pe(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Pe(t){return"storage/"+t}function Le(){const t="An unknown error occurred, please check the error payload for server response.";return new E("unknown",t)}function Gr(t){return new E("object-not-found","Object '"+t+"' does not exist.")}function Xr(t){return new E("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Kr(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new E("unauthenticated",t)}function Yr(){return new E("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Jr(t){return new E("unauthorized","User does not have permission to access '"+t+"'.")}function Zr(){return new E("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Qr(){return new E("canceled","User canceled the upload/download.")}function eo(t){return new E("invalid-url","Invalid URL '"+t+"'.")}function to(t){return new E("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function no(){return new E("no-default-bucket","No default bucket found. Did you set the '"+Dt+"' property when initializing the app?")}function ro(){return new E("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function oo(){return new E("no-download-url","The given file does not have any download URLs.")}function Ue(t){return new E("invalid-argument",t)}function Tt(){return new E("app-deleted","The Firebase app was deleted.")}function so(t){return new E("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function le(t,e){return new E("invalid-format","String does not match format '"+t+"': "+e)}function ie(t){throw new E("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=O.makeFromUrl(e,n)}catch{return new O(e,"")}if(r.path==="")return r;throw to(e)}static makeFromUrl(e,n){let r=null;const o="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const a="(/(.*))?$",i=new RegExp("^gs://"+o+a,"i"),c={bucket:1,path:3};function l(v){v.path_=decodeURIComponent(v.path)}const m="v[A-Za-z0-9_]+",w=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",_=new RegExp(`^https?://${w}/${m}/b/${o}/o${y}`,"i"),D={bucket:1,path:3},V=n===At?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",F=new RegExp(`^https?://${V}/${o}/${I}`,"i"),T=[{regex:i,indices:c,postModify:s},{regex:_,indices:D,postModify:l},{regex:F,indices:{bucket:1,path:2},postModify:l}];for(let v=0;v<T.length;v++){const j=T[v],he=j.regex.exec(e);if(he){const fe=he[j.indices.bucket];let k=he[j.indices.path];k||(k=""),r=new O(fe,k),j.postModify(r);break}}if(r==null)throw eo(e);return r}}class ao{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t,e,n){let r=1,o=null,s=null,a=!1,i=0;function c(){return i===2}let l=!1;function m(...I){l||(l=!0,e.apply(null,I))}function w(I){o=setTimeout(()=>{o=null,t(_,c())},I)}function y(){s&&clearTimeout(s)}function _(I,...F){if(l){y();return}if(I){y(),m.call(null,I,...F);return}if(c()||a){y(),m.call(null,I,...F);return}r<64&&(r*=2);let T;i===1?(i=2,T=0):T=(r+Math.random())*1e3,w(T)}let D=!1;function V(I){D||(D=!0,y(),!l&&(o!==null?(I||(i=2),clearTimeout(o),w(0)):I||(i=1)))}return w(0),s=setTimeout(()=>{a=!0,V(!0)},n),V}function co(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){return t!==void 0}function uo(t){return typeof t=="object"&&!Array.isArray(t)}function Ve(t){return typeof t=="string"||t instanceof String}function dt(t){return je()&&t instanceof Blob}function je(){return typeof Blob!="undefined"}function ht(t,e,n,r){if(r<e)throw Ue(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ue(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function xt(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const o=e(r)+"="+e(t[r]);n=n+o+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ee||(ee={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n,r,o,s,a,i,c,l,m,w){this.url_=e,this.method_=n,this.headers_=r,this.body_=o,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=i,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=m,this.connectionFactory_=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,_)=>{this.resolve_=y,this.reject_=_,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new ge(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=i=>{const c=i.loaded,l=i.lengthComputable?i.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const i=s.getErrorCode()===ee.NO_ERROR,c=s.getStatus();if(!i||this.isRetryStatusCode_(c)){const m=s.getErrorCode()===ee.ABORT;r(!1,new ge(!1,null,m));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new ge(l,s))})},n=(r,o)=>{const s=this.resolve_,a=this.reject_,i=o.connection;if(o.wasSuccessCode)try{const c=this.callback_(i,i.getResponse());lo(c)?s(c):s()}catch(c){a(c)}else if(i!==null){const c=Le();c.serverResponse=i.getErrorText(),this.errorCallback_?a(this.errorCallback_(i,c)):a(c)}else if(o.canceled){const c=this.appDelete_?Tt():Qr();a(c)}else{const c=Zr();a(c)}};this.canceled_?n(!1,new ge(!1,null,!0)):this.backoffId_=io(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&co(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||o||s}}class ge{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function fo(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function po(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function mo(t,e){e&&(t["X-Firebase-GMPID"]=e)}function go(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function bo(t,e,n,r,o,s){const a=xt(t.urlParams),i=t.url+a,c=Object.assign({},t.headers);return mo(c,e),fo(c,n),po(c,s),go(c,r),new ho(i,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function yo(...t){const e=_o();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(je())return new Blob(t);throw new E("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function wo(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ae{constructor(e,n){this.data=e,this.contentType=n||null}}function Co(t,e){switch(t){case L.RAW:return new Ae(Bt(e));case L.BASE64:case L.BASE64URL:return new Ae(Ot(t,e));case L.DATA_URL:return new Ae(So(e),Ro(e))}throw Le()}function Bt(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,a=t.charCodeAt(++n);r=65536|(s&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Eo(t){let e;try{e=decodeURIComponent(t)}catch{throw le(L.DATA_URL,"Malformed data URL.")}return Bt(e)}function Ot(t,e){switch(t){case L.BASE64:{const o=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(o||s)throw le(t,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case L.BASE64URL:{const o=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(o||s)throw le(t,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=vo(e)}catch{throw le(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class Ut{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw le(L.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Io(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function So(t){const e=new Ut(t);return e.base64?Ot(L.BASE64,e.rest):Eo(e.rest)}function Ro(t){return new Ut(t).contentType}function Io(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,n){let r=0,o="";dt(e)?(this.data_=e,r=e.size,o=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,n){if(dt(this.data_)){const r=this.data_,o=wo(r,e,n);return o===null?null:new q(o)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new q(r,!0)}}static getBlob(...e){if(je()){const n=e.map(r=>r instanceof q?r.data_:r);return new q(yo.apply(null,n))}else{const n=e.map(a=>Ve(a)?Co(L.RAW,a).data:a.data_);let r=0;n.forEach(a=>{r+=a.byteLength});const o=new Uint8Array(r);let s=0;return n.forEach(a=>{for(let i=0;i<a.length;i++)o[s++]=a[i]}),new q(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t){let e;try{e=JSON.parse(t)}catch{return null}return uo(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Po(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function $t(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t,e){return e}class A{constructor(e,n,r,o){this.server=e,this.local=n||e,this.writable=!!r,this.xform=o||Ao}}let be=null;function Do(t){return!Ve(t)||t.length<2?t:$t(t)}function Nt(){if(be)return be;const t=[];t.push(new A("bucket")),t.push(new A("generation")),t.push(new A("metageneration")),t.push(new A("name","fullPath",!0));function e(s,a){return Do(a)}const n=new A("name");n.xform=e,t.push(n);function r(s,a){return a!==void 0?Number(a):a}const o=new A("size");return o.xform=r,t.push(o),t.push(new A("timeCreated")),t.push(new A("updated")),t.push(new A("md5Hash",null,!0)),t.push(new A("cacheControl",null,!0)),t.push(new A("contentDisposition",null,!0)),t.push(new A("contentEncoding",null,!0)),t.push(new A("contentLanguage",null,!0)),t.push(new A("contentType",null,!0)),t.push(new A("metadata","customMetadata",!0)),be=t,be}function To(t,e){function n(){const r=t.bucket,o=t.fullPath,s=new O(r,o);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function xo(t,e,n){const r={};r.type="file";const o=n.length;for(let s=0;s<o;s++){const a=n[s];r[a.local]=a.xform(r,e[a.server])}return To(r,t),r}function Lt(t,e,n){const r=Mt(e);return r===null?null:xo(t,r,n)}function Bo(t,e,n,r){const o=Mt(e);if(o===null||!Ve(o.downloadTokens))return null;const s=o.downloadTokens;if(s.length===0)return null;const a=encodeURIComponent;return s.split(",").map(l=>{const m=t.bucket,w=t.fullPath,y="/b/"+a(m)+"/o/"+a(w),_=He(y,n,r),D=xt({alt:"media",token:l});return _+D})[0]}function Oo(t,e){const n={},r=e.length;for(let o=0;o<r;o++){const s=e[o];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Vt{constructor(e,n,r,o){this.url=e,this.method=n,this.handler=r,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){if(!t)throw Le()}function Uo(t,e){function n(r,o){const s=Lt(t,o,e);return jt(s!==null),s}return n}function Mo(t,e){function n(r,o){const s=Lt(t,o,e);return jt(s!==null),Bo(s,o,t.host,t._protocol)}return n}function Ht(t){function e(n,r){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=Yr():o=Kr():n.getStatus()===402?o=Xr(t.bucket):n.getStatus()===403?o=Jr(t.path):o=r,o.serverResponse=r.serverResponse,o}return e}function $o(t){const e=Ht(t);function n(r,o){let s=e(r,o);return r.getStatus()===404&&(s=Gr(t.path)),s.serverResponse=o.serverResponse,s}return n}function No(t,e,n){const r=e.fullServerUrl(),o=He(r,t.host,t._protocol),s="GET",a=t.maxOperationRetryTime,i=new Vt(o,s,Mo(t,n),a);return i.errorHandler=$o(e),i}function Lo(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Vo(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Lo(null,e)),r}function jo(t,e,n,r,o){const s=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function i(){let T="";for(let v=0;v<2;v++)T=T+Math.random().toString().slice(2);return T}const c=i();a["Content-Type"]="multipart/related; boundary="+c;const l=Vo(e,r,o),m=Oo(l,n),w="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,y=`\r
--`+c+"--",_=q.getBlob(w,r,y);if(_===null)throw ro();const D={name:l.fullPath},V=He(s,t.host,t._protocol),I="POST",F=t.maxUploadRetryTime,S=new Vt(V,I,Uo(t,n),F);return S.urlParams=D,S.headers=a,S.body=_.uploadData(),S.errorHandler=Ht(e),S}class Ho{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ee.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ee.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ee.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,o){if(this.sent_)throw ie("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),o!==void 0)for(const s in o)o.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,o[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ie("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ie("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ie("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ie("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Fo extends Ho{initXhr(){this.xhr_.responseType="text"}}function Ft(){return new Fo}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,n){this._service=e,n instanceof O?this._location=n:this._location=O.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ne(e,n)}get root(){const e=new O(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $t(this._location.path)}get storage(){return this._service}get parent(){const e=ko(this._location.path);if(e===null)return null;const n=new O(this._location.bucket,e);return new ne(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw so(e)}}function zo(t,e,n){t._throwIfRoot("uploadBytes");const r=jo(t.storage,t._location,Nt(),new q(e,!0),n);return t.storage.makeRequestWithTokens(r,Ft).then(o=>({metadata:o,ref:t}))}function Wo(t){t._throwIfRoot("getDownloadURL");const e=No(t.storage,t._location,Nt());return t.storage.makeRequestWithTokens(e,Ft).then(n=>{if(n===null)throw oo();return n})}function qo(t,e){const n=Po(t._location.path,e),r=new O(t._location.bucket,n);return new ne(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t){return/^[A-Za-z]+:\/\//.test(t)}function Xo(t,e){return new ne(t,e)}function zt(t,e){if(t instanceof Fe){const n=t;if(n._bucket==null)throw no();const r=new ne(n,n._bucket);return e!=null?zt(r,e):r}else return e!==void 0?qo(t,e):t}function Ko(t,e){if(e&&Go(e)){if(t instanceof Fe)return Xo(t,e);throw Ue("To use ref(service, url), the first argument must be a Storage instance.")}else return zt(t,e)}function ft(t,e){const n=e==null?void 0:e[Dt];return n==null?null:O.makeFromBucketSpec(n,t)}class Fe{constructor(e,n,r,o,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=o,this._firebaseVersion=s,this._bucket=null,this._host=At,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Wr,this._maxUploadRetryTime=qr,this._requests=new Set,o!=null?this._bucket=O.makeFromBucketSpec(o,this._host):this._bucket=ft(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=O.makeFromBucketSpec(this._url,e):this._bucket=ft(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ht("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ht("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ne(this,e)}_makeRequest(e,n,r,o){if(this._deleted)return new ao(Tt());{const s=bo(e,this._appId,r,o,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,o).getPromise()}}const pt="@firebase/storage",mt="0.9.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="storage";function Yo(t,e,n){return t=ve(t),zo(t,e,n)}function Jo(t){return t=ve(t),Wo(t)}function gt(t,e){return t=ve(t),Ko(t,e)}function Zo(t=Br(),e){return t=ve(t),Pr(t,Wt).getImmediate({identifier:e})}function Qo(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new Fe(n,r,o,e,Tr)}function es(){ye(new ue(Wt,Qo,"PUBLIC").setMultipleInstances(!0)),oe(pt,mt,""),oe(pt,mt,"esm2017")}es();const H=rn.create({baseURL:"https://perfume-8b21d-default-rtdb.firebaseio.com"});H.interceptors.request.use(function(t){return t},function(t){const e=Me();return e.notificationState.type="error",e.notificationState.message="\u51FA\u73FE\u932F\u8AA4\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002",Promise.reject(t)});H.interceptors.response.use(function(t){return t},function(t){const e=Me();return e.notificationState.type="error",e.notificationState.message="\u51FA\u73FE\u932F\u8AA4\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002",Promise.reject(t)});const ts=t=>H.post("/products.json",t).then(e=>e.data),ns=()=>H.get("/products.json").then(t=>t.data),rs=t=>H.get(`/product/${t}.json`).then(e=>e.data),os=(t,e)=>H.patch(`/products/${t}.json`,e).then(n=>n.data),bt=(t,e)=>H.patch(`/product/${t}.json`,e).then(n=>n.data),ss=(t,e)=>H.delete(`/products/${t}.json`,e).then(n=>n.data),as=(t,e)=>H.delete(`/product/${t}.json`,e).then(n=>n.data),is=on("product",()=>{const t=Q([]),e=Q([]);return{brands:t,products:e,createProduct:async c=>{try{const l=X({},c);delete l.imageUrl;const{name:m}=await ts(l);return await bt(m,{description:c.description,imageUrl:c.imageUrl,name:c.name,price:c.price*c.discount})}catch(l){throw l}},getBrands:async()=>{try{const c=await gn(),l=Object.keys(c).map(m=>ae(X({},c[m]),{id:m}));t.value=l}catch(c){throw c}},getProducts:async()=>{try{const c=await ns(),l=Object.keys(c).map(m=>ae(X({},c[m]),{id:m}));e.value=l}catch(c){throw c}},getProduct:async c=>{try{return await rs(c)}catch(l){throw l}},updateProduct:async({id:c,data:l})=>{const m=X({},l);delete m.imageUrl;const w={description:l.description,imageUrl:l.imageUrl,name:l.name,price:Math.floor(l.price*l.discount)};try{return await Promise.all([os(c,m),bt(c,w)])}catch(y){throw y}},deleteProduct:async c=>{try{return await Promise.all([ss(c),as(c)])}catch(l){throw l}}}}),cs=t=>"NT$"+t.toLocaleString(),ls={class:"border-t border-b border-gray-100 bg-white p-6 dark:border-gray-900 dark:bg-gray-900/70 dark:text-white"},us=g("h1",{class:"text-3xl font-semibold leading-tight"},"Products",-1),ds=g("thead",null,[g("tr",null,[g("th",null,"\u5546\u54C1\u5716\u7247"),g("th",null,"\u5546\u54C1\u540D\u7A31"),g("th",null,"\u54C1\u724C"),g("th",null,"\u50F9\u9322"),g("th")])],-1),hs={"data-label":"\u5546\u54C1\u5716\u7247"},fs=["src","alt"],ps={"data-label":"\u5546\u54C1\u540D\u7A31"},ms={"data-label":"\u54C1\u724C"},gs={"data-label":"\u50F9\u9322"},bs={class:"actions-cell"},_s={class:"border-t border-gray-100 p-3 dark:border-gray-800 lg:px-6"},ys=["data-total"],ws=["src","alt"],vs=["data-total"],Cs=["src","alt"],Es=wt(" \u78BA\u5B9A\u8981\u522A\u9664"),Ss=wt("\uFF1F "),Rs={setup(t){const e=Me(),n=is(),{darkMode:r,notificationState:o}=Qe(e),{products:s,brands:a}=Qe(n),i=Ce({id:"",data:{}}),c=({price:f,discount:u=1})=>cs(u?Math.floor(f*u):0),l=(f,u)=>{o.value={type:f,message:u},setTimeout(()=>{o.value={}},2e3)},m=()=>{i.id="",i.data={},k.value.length=0},w=f=>{_.value=f,Velocity(document.documentElement,"scroll",{offset:0,mobileHA:!1})},y=Q(10),_=Q(0),D=W(()=>s.value.slice(y.value*_.value,y.value*(_.value+1))),V=W(()=>Math.ceil(s.value.length/y.value)),I=W(()=>_.value+1),F=W(()=>{const f=[];for(let u=0;u<V.value;u++)f.push(u);return f}),S=Ce({create:!1,info:!1,delete:!1}),T=async($,P)=>{var re=$,{id:f}=re,u=Ze(re,["id"]);try{const{description:z,imageUrl:x}=await n.getProduct(f);S[P]=!0,i.id=f,i.data=ae(X({},u),{description:z,imageUrl:x}),k.value=new Array(x.length).fill(null)}catch(z){console.error(z)}},v=W({get(){var f;return S.create?j.value[0]:{id:(f=a.value.find(u=>u.brand===i.data.brand))==null?void 0:f.id,label:i.data.fullBrand}},set({id:f}){const{brand:u,fullBrand:P}=a.value.find($=>$.id===f);S.create?(R.brand=u,R.fullBrand=P):(i.data.brand=u,i.data.fullBrand=P)}}),j=W(()=>a.value.map(f=>({id:f.id,label:f.fullBrand}))),fe=Zo(xr({apiKey:"AIzaSyCe0etdPskhxSxGh0w_IdZt3FDqcDQWbOo",authDomain:"perfume-8b21d.firebaseapp.com",databaseURL:"https://perfume-8b21d-default-rtdb.firebaseio.com",projectId:"perfume-8b21d",storageBucket:"perfume-8b21d.appspot.com",messagingSenderId:"597712973003",appId:"1:597712973003:web:de7dde8daa03a2d47c7f4e"})),k=Q([]),ze=W(()=>k.value.map(f=>f?URL.createObjectURL(f):null)),We=()=>{const f=k.value.map(u=>{if(!u)return null;const P=gt(fe,u.name);return Yo(P,u)});return Promise.all(f)},qe=()=>new Promise(f=>{let u=0;Array.from(k.value).forEach(async(P,$)=>{if(P){const re=gt(fe,P.name),z=await Jo(re).then(x=>x);i.data.imageUrl?(i.data.imageUrl[$]=z,i.data.url=imageUrl[0]):R.imageUrl[$]=z}u++,u===k.value.length&&f()})}),R=Ce({name:"",brand:"",fullBrand:"",description:"",price:"",discount:1,imageUrl:["https://fakeimg.pl/1080x1080/?text=photo","https://fakeimg.pl/1080x1080/?text=photo","https://fakeimg.pl/1080x1080/?text=photo","https://fakeimg.pl/1080x1080/?text=photo"],get url(){return this.imageUrl[0]}}),qt=()=>{var P;S.create=!0;const{id:f,label:u}=j.value[0];R.brand=(P=a.value.find($=>$.id===f))==null?void 0:P.brand,R.fullBrand=u},Gt=async()=>{try{k.value.length>0&&(await We(),await qe()),await n.createProduct(R),await n.getProducts(),l("success","\u65B0\u589E\u6210\u529F"),m(),Ge()}catch(f){console.error(f)}},Xt=()=>{m(),Ge()},Ge=()=>{Object.assign(R,{name:"",brand:"",fullBrand:"",description:"",price:"",discount:1,imageUrl:["https://fakeimg.pl/1080x1080/?text=photo","https://fakeimg.pl/1080x1080/?text=photo","https://fakeimg.pl/1080x1080/?text=photo","https://fakeimg.pl/1080x1080/?text=photo"]}),k.value.length=0},Kt=async()=>{try{await Promise.all([n.getBrands(),n.getProducts()])}catch(f){console.log(f)}},Yt=async()=>{try{await We(),await qe(),await n.updateProduct(i),await n.getProducts(),l("success","\u4FEE\u6539\u6210\u529F")}catch(f){console.error(f)}},Jt=async()=>{try{await n.deleteProduct(i.id),await n.getProducts(),D.value.length===0&&_.value>0&&(_.value=_.value-1),l("success","\u522A\u9664\u6210\u529F"),m()}catch(f){console.error(f)}};return sn(()=>{Kt()}),(f,u)=>{const P=an,$=cn,re=fn,z=hn,x=pn,U=mn,Xe=En;return B(),M(K,null,[g("section",ls,[p(P,null,{default:C(()=>[us,p(ce,{color:"white",label:"\u65B0\u589E\u5546\u54C1",onClick:qt})]),_:1})]),p(z,null,{default:C(()=>[p(re,{class:"mb-6","has-table":""},{default:C(()=>[g("table",null,[ds,g("tbody",null,[(B(!0),M(K,null,me(h(D),(d,N)=>(B(),M("tr",{key:d.id,class:yt(["lg:hover:bg-gray-100",N%2===0?"lg:bg-gray-50":""])},[g("td",hs,[g("img",{class:"h-24 w-24 object-cover",src:d.url,alt:d.name},null,8,fs)]),g("td",ps,Y(d.name),1),g("td",ms,Y(d.fullBrand),1),g("td",gs,Y(c(d)),1),g("td",bs,[p($,{type:"justify-start lg:justify-end","no-wrap":""},{default:C(()=>[p(ce,{color:"info",icon:h(ln),small:"",onClick:se=>T(d,"info")},null,8,["icon","onClick"]),p(ce,{color:"danger",icon:h(un),small:"",onClick:se=>T(d,"delete")},null,8,["icon","onClick"])]),_:2},1024)])],2))),128))])]),J(" pagination "),g("div",_s,[p(P,null,{default:C(()=>[p($,null,{default:C(()=>[(B(!0),M(K,null,me(h(F),d=>(B(),dn(ce,{key:d,active:d===_.value,label:d+1,outline:h(r),small:"",onClick:N=>w(d)},null,8,["active","label","outline","onClick"]))),128))]),_:1}),g("small",null,"Page "+Y(h(I))+" of "+Y(h(V)),1)]),_:1})])]),_:1})]),_:1}),J(" \u65B0\u589E\u5546\u54C1 "),p(Ee,{modelValue:h(S).create,"onUpdate:modelValue":u[5]||(u[5]=d=>h(S).create=d),title:"\u65B0\u589E\u5546\u54C1",onConfirm:Gt,onCancel:Xt},{default:C(()=>[h(S).create?(B(),M(K,{key:0},[p(U,{label:"\u540D\u7A31",class:"mb-0"},{default:C(()=>[p(x,{modelValue:h(R).name,"onUpdate:modelValue":u[0]||(u[0]=d=>h(R).name=d),modelModifiers:{trim:!0},type:"text"},null,8,["modelValue"])]),_:1}),p(U,{label:"\u54C1\u724C"},{default:C(()=>[p(x,{modelValue:h(v),"onUpdate:modelValue":u[1]||(u[1]=d=>et(v)?v.value=d:null),options:h(j)},null,8,["modelValue","options"])]),_:1}),p(U,{label:"\u63CF\u8FF0"},{default:C(()=>[p(x,{modelValue:h(R).description,"onUpdate:modelValue":u[2]||(u[2]=d=>h(R).description=d),modelModifiers:{trim:!0},type:"textarea"},null,8,["modelValue"])]),_:1}),g("div",{class:"flex items-center gap-4 after:self-end after:leading-[48px] after:content-['='attr(data-total)]","data-total":c(h(R))},[p(U,{label:"\u539F\u50F9",class:"mb-0"},{default:C(()=>[p(x,{modelValue:h(R).price,"onUpdate:modelValue":u[3]||(u[3]=d=>h(R).price=d),modelModifiers:{number:!0},type:"text"},null,8,["modelValue"])]),_:1}),p(U,{label:"\u6298\u6263",class:"mb-0"},{default:C(()=>[tt(g("input",{"onUpdate:modelValue":u[4]||(u[4]=d=>h(R).discount=d),type:"number",min:"0",max:"1",step:"0.01",class:"h-12 rounded border-gray-700 dark:bg-gray-800"},null,512),[[nt,h(R).discount]])]),_:1})],8,ys),p(U,{label:"\u4E0A\u50B3\u5716\u7247",class:"mb-0"},{default:C(()=>[(B(!0),M(K,null,me(h(R).imageUrl,(d,N)=>(B(),M("div",{key:d,class:"mt-4 flex items-center gap-4 first:mt-0"},[g("img",{src:h(ze)[N]||d,class:"h-20 w-20 object-cover",alt:h(R).name},null,8,ws),p(Xe,{modelValue:k.value[N],"onUpdate:modelValue":se=>k.value[N]=se,color:"white"},null,8,["modelValue","onUpdate:modelValue"])]))),128))]),_:1})],64)):J("v-if",!0)]),_:1},8,["modelValue"]),J(" \u4FEE\u6539\u5546\u54C1 "),p(Ee,{modelValue:h(S).info,"onUpdate:modelValue":u[11]||(u[11]=d=>h(S).info=d),title:"\u4FEE\u6539\u5546\u54C1",onConfirm:Yt,onCancel:m},{default:C(()=>[h(S).info?(B(),M(K,{key:0},[p(U,{label:"\u540D\u7A31",class:"mb-0"},{default:C(()=>[p(x,{modelValue:h(i).data.name,"onUpdate:modelValue":u[6]||(u[6]=d=>h(i).data.name=d),modelModifiers:{trim:!0},type:"text"},null,8,["modelValue"])]),_:1}),p(U,{label:"\u54C1\u724C"},{default:C(()=>[p(x,{modelValue:h(v),"onUpdate:modelValue":u[7]||(u[7]=d=>et(v)?v.value=d:null),options:h(j)},null,8,["modelValue","options"])]),_:1}),p(U,{label:"\u63CF\u8FF0"},{default:C(()=>[p(x,{modelValue:h(i).data.description,"onUpdate:modelValue":u[8]||(u[8]=d=>h(i).data.description=d),modelModifiers:{trim:!0},type:"textarea"},null,8,["modelValue"])]),_:1}),g("div",{class:"flex items-center gap-4 after:self-end after:leading-[48px] after:content-['='attr(data-total)]","data-total":c(h(i).data)},[p(U,{label:"\u539F\u50F9",class:"mb-0"},{default:C(()=>[p(x,{modelValue:h(i).data.price,"onUpdate:modelValue":u[9]||(u[9]=d=>h(i).data.price=d),modelModifiers:{number:!0},type:"text"},null,8,["modelValue"])]),_:1}),p(U,{label:"\u6298\u6263",class:"mb-0"},{default:C(()=>[tt(g("input",{"onUpdate:modelValue":u[10]||(u[10]=d=>h(i).data.discount=d),type:"number",min:"0",max:"1",step:"0.01",class:"h-12 rounded border-gray-700 dark:bg-gray-800"},null,512),[[nt,h(i).data.discount]])]),_:1})],8,vs),p(U,{label:"\u4E0A\u50B3\u5716\u7247",class:"mb-0"},{default:C(()=>[(B(!0),M(K,null,me(h(i).data.imageUrl,(d,N)=>(B(),M("div",{key:d,class:"mt-4 flex items-center gap-4 first:mt-0"},[g("img",{class:"h-20 w-20 object-cover",src:h(ze)[N]||d,alt:h(i).data.name},null,8,Cs),p(Xe,{modelValue:k.value[N],"onUpdate:modelValue":se=>k.value[N]=se,color:"white"},null,8,["modelValue","onUpdate:modelValue"])]))),128))]),_:1})],64)):J("v-if",!0)]),_:1},8,["modelValue"]),J(" \u522A\u9664\u5546\u54C1 "),p(Ee,{modelValue:h(S).delete,"onUpdate:modelValue":u[12]||(u[12]=d=>h(S).delete=d),"large-title":"Please confirm",button:"danger","has-cancel":"",onConfirm:Jt,onCancel:m},{default:C(()=>[g("p",null,[Es,g("strong",null,"\u300C"+Y(h(i).data.name)+"\u300D",1),Ss])]),_:1},8,["modelValue"])],64)}}};var Ds=_t(Rs,[["__file","/Users/kenge/Documents/code/side-project/watch-store-admin/src/views/Products.vue"]]);export{Ds as default};
