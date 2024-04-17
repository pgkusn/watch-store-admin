import{M as I,C as K}from"./CardComponent.090bf16a.js";import{c as O,k as m,f as Q,u as A,g as ee,r as T,_ as te,s as N,h as E,i as oe,a as v,b as o,d as _,j as p,e as R,F as H,l as ne,o as b,p as L,t as h,y as z,z as re,n as ae,J as F,B as se,C as le}from"./index.25c2e62e.js";import{M as ce}from"./velocity.min.bd433040.js";import{f as ie}from"./formatPrice.580d6332.js";function G(e){return typeof e=="function"?e():m(e)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ue=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,de=/[YMDHhms]o|\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function me(e,t,n,r){let a=e<12?"AM":"PM";return r&&(a=a.split("").reduce((l,u)=>l+=`${u}.`,"")),n?a.toLowerCase():a}function S(e){const t=["th","st","nd","rd"],n=e%100;return e+(t[(n-20)%10]||t[n]||t[0])}function fe(e,t,n={}){var r;const a=e.getFullYear(),l=e.getMonth(),u=e.getDate(),d=e.getHours(),g=e.getMinutes(),M=e.getSeconds(),$=e.getMilliseconds(),D=e.getDay(),i=(r=n.customMeridiem)!=null?r:me,w={Yo:()=>S(a),YY:()=>String(a).slice(-2),YYYY:()=>a,M:()=>l+1,Mo:()=>S(l+1),MM:()=>`${l+1}`.padStart(2,"0"),MMM:()=>e.toLocaleDateString(n.locales,{month:"short"}),MMMM:()=>e.toLocaleDateString(n.locales,{month:"long"}),D:()=>String(u),Do:()=>S(u),DD:()=>`${u}`.padStart(2,"0"),H:()=>String(d),Ho:()=>S(d),HH:()=>`${d}`.padStart(2,"0"),h:()=>`${d%12||12}`.padStart(1,"0"),ho:()=>S(d%12||12),hh:()=>`${d%12||12}`.padStart(2,"0"),m:()=>String(g),mo:()=>S(g),mm:()=>`${g}`.padStart(2,"0"),s:()=>String(M),so:()=>S(M),ss:()=>`${M}`.padStart(2,"0"),SSS:()=>`${$}`.padStart(3,"0"),d:()=>D,dd:()=>e.toLocaleDateString(n.locales,{weekday:"narrow"}),ddd:()=>e.toLocaleDateString(n.locales,{weekday:"short"}),dddd:()=>e.toLocaleDateString(n.locales,{weekday:"long"}),A:()=>i(d,g),AA:()=>i(d,g,!1,!0),a:()=>i(d,g,!0),aa:()=>i(d,g,!0,!0)};return t.replace(de,(k,C)=>{var Y,y;return(y=C!=null?C:(Y=w[k])==null?void 0:Y.call(w))!=null?y:k})}function ge(e){if(e===null)return new Date(Number.NaN);if(e===void 0)return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){const t=e.match(ue);if(t){const n=t[2]-1||0,r=(t[7]||"0").substring(0,3);return new Date(t[1],n,t[3]||1,t[4]||0,t[5]||0,t[6]||0,r)}}return new Date(e)}function he(e,t="HH:mm:ss",n={}){return O(()=>fe(ge(G(e)),G(t),n))}const P=Q.create({baseURL:"https://perfume-8b21d-default-rtdb.firebaseio.com"});P.interceptors.request.use(function(e){return e},function(e){const t=A();return t.notificationState.type="error",t.notificationState.message="\u51FA\u73FE\u932F\u8AA4\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002",Promise.reject(e)});P.interceptors.response.use(function(e){return e},function(e){const t=A();return t.notificationState.type="error",t.notificationState.message="\u51FA\u73FE\u932F\u8AA4\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002",Promise.reject(e)});const _e=()=>P.get("/orders.json").then(e=>e.data),pe=e=>P.delete(`/orders/${e}.json`).then(t=>t.data),be=ee("order",()=>{const e=T([]);return{orders:e,getOrders:async()=>{try{const r=await _e(),a=Object.keys(r).map(l=>({...r[l],id:l}));e.value=a.sort((l,u)=>u.createTime-l.createTime)}catch(r){throw r}},deleteOrder:async r=>{try{return await pe(r)}catch(a){throw a}}}}),Se={class:"border-t border-b border-gray-100 bg-white p-6 dark:border-gray-900 dark:bg-gray-900/70 dark:text-white"},ye=o("h1",{class:"text-3xl font-semibold leading-tight"},"Orders",-1),ve=o("thead",null,[o("tr",null,[o("th",null,"\u8A02\u55AE\u7DE8\u865F"),o("th",null,"\u6703\u54E1\u7DE8\u865F"),o("th",null,"\u8A02\u55AE\u5167\u5BB9"),o("th",null,"\u8A02\u55AE\u91D1\u984D"),o("th",null,"\u5EFA\u7ACB\u6642\u9593"),o("th")])],-1),Me={"data-label":"\u8A02\u55AE\u7DE8\u865F"},De={"data-label":"\u6703\u54E1\u7DE8\u865F"},we={"data-label":"\u8A02\u55AE\u5167\u5BB9"},ke={"data-label":"\u8A02\u55AE\u91D1\u984D"},Oe={"data-label":"\u5EFA\u7ACB\u6642\u9593"},Ce={class:"actions-cell"},Ye={class:"border-t border-gray-100 p-3 dark:border-gray-800 lg:px-6"},xe=z(" \u78BA\u5B9A\u8981\u522A\u9664\u8A02\u55AE\u7DE8\u865F "),He=z("\uFF1F "),Pe={setup(e){const t=A(),n=be(),{darkMode:r,notificationState:a}=N(t),{orders:l}=N(n),u=E({id:""}),d=s=>he(s,"YYYY-MM-DD HH:mm:ss").value,g=(s,f)=>{a.value={type:s,message:f},setTimeout(()=>{a.value={}},2e3)},M=()=>{u.id=""},$=s=>{i.value=s,Velocity(document.documentElement,"scroll",{offset:0,mobileHA:!1})},D=T(10),i=T(0),w=O(()=>l.value.slice(D.value*i.value,D.value*(i.value+1))),k=O(()=>Math.ceil(l.value.length/D.value)),C=O(()=>i.value+1),Y=O(()=>{const s=[];for(let f=0;f<k.value;f++)s.push(f);return s}),y=E({delete:!1}),J=(s,f)=>{try{y[f]=!0,u.id=s}catch(x){console.error(x)}},U=async()=>{try{await n.getOrders()}catch(s){console.error(s)}},q=async()=>{try{await n.deleteOrder(u.id),await n.getOrders(),w.value.length===0&&i.value>0&&(i.value=i.value-1),g("success","\u522A\u9664\u6210\u529F"),M()}catch(s){console.error(s)}};return oe(()=>{l.value.length||U()}),(s,f)=>{const x=ne,V=re,W=K,X=I;return b(),v(H,null,[o("section",Se,[_(x,null,{default:p(()=>[ye]),_:1})]),_(X,null,{default:p(()=>[_(W,{class:"mb-6","has-table":""},{default:p(()=>[o("table",null,[ve,o("tbody",null,[(b(!0),v(H,null,L(m(w),(c,B)=>(b(),v("tr",{key:c.id,class:ae(["lg:hover:bg-gray-100",B%2===0?"lg:bg-gray-50":""])},[o("td",Me,h(c.id),1),o("td",De,h(c.memberID),1),o("td",we,[o("ul",null,[(b(!0),v(H,null,L(c.content,(j,Z)=>(b(),v("li",{key:Z},h(j.name)+" x"+h(j.amount),1))),128))])]),o("td",ke,h(m(ie)(c.total)),1),o("td",Oe,h(d(c.createTime)),1),o("td",Ce,[_(V,{type:"justify-start lg:justify-end","no-wrap":""},{default:p(()=>[_(F,{color:"danger",icon:m(se),small:"",onClick:j=>J(c.id,"delete")},null,8,["icon","onClick"])]),_:2},1024)])],2))),128))])]),R(" pagination "),o("div",Ye,[_(x,null,{default:p(()=>[_(V,null,{default:p(()=>[(b(!0),v(H,null,L(m(Y),c=>(b(),le(F,{key:c,active:c===i.value,label:c+1,outline:m(r),small:"",onClick:B=>$(c)},null,8,["active","label","outline","onClick"]))),128))]),_:1}),o("small",null,"Page "+h(m(C))+" of "+h(m(k)),1)]),_:1})])]),_:1})]),_:1}),R(" \u522A\u9664\u8A02\u55AE "),_(ce,{modelValue:m(y).delete,"onUpdate:modelValue":f[0]||(f[0]=c=>m(y).delete=c),"large-title":"Please confirm",button:"danger","has-cancel":"",onConfirm:q},{default:p(()=>[o("p",null,[xe,o("strong",null,h(m(u).id),1),He])]),_:1},8,["modelValue"])],64)}}},Ae=te(Pe,[["__file","/Users/kenge/Documents/code/side-project/watch-store-admin/src/views/Orders.vue"]]);export{Ae as default};