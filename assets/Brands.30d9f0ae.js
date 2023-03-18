var se=Object.defineProperty,de=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var H=(o,s,e)=>s in o?se(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,R=(o,s)=>{for(var e in s||(s={}))G.call(s,e)&&H(o,e,s[e]);if(x)for(var e of x(s))O.call(s,e)&&H(o,e,s[e]);return o},q=(o,s)=>de(o,ce(s));var I=(o,s)=>{var e={};for(var m in o)G.call(o,m)&&s.indexOf(m)<0&&(e[m]=o[m]);if(o!=null&&x)for(var m of x(o))s.indexOf(m)<0&&O.call(o,m)&&(e[m]=o[m]);return e};import{M as ue,C as ie,a as me,F as fe}from"./Field.332442d5.js";import{g as pe,r as A,_ as be,u as _e,s as K,h as F,c as P,i as Be,a as y,b as c,d as l,j as i,e as v,k as a,F as h,l as ge,o as B,J as S,p as Q,t as V,y as W,z as ye,n as ve,A as he,B as Ve,C as we}from"./index.d6cdf4ce.js";import{b as Ce,a as ke,c as Me,d as xe,M as T}from"./velocity.min.376a00d7.js";const Pe=pe("brand",()=>{const o=A([]);return{brands:o,createBrand:async u=>{try{return await Ce(u)}catch(r){throw r}},getBrands:async()=>{try{const u=await ke(),r=Object.keys(u).map(p=>q(R({},u[p]),{id:p}));o.value=r}catch(u){throw u}},updateBrand:async({id:u,data:r})=>{try{return await Me(u,r)}catch(p){throw p}},deleteBrand:async u=>{try{return await xe(u)}catch(r){throw r}}}}),Se={class:"border-t border-b border-gray-100 bg-white p-6 dark:border-gray-900 dark:bg-gray-900/70 dark:text-white"},Ue=c("h1",{class:"text-3xl font-semibold leading-tight"},"Brands",-1),je=c("thead",null,[c("tr",null,[c("th",null,"\u54C1\u724C\u540D\u7A31"),c("th",null,"\u54C1\u724C\u5168\u540D"),c("th")])],-1),Ne={"data-label":"\u54C1\u724C\u540D\u7A31"},De={"data-label":"\u54C1\u724C\u5168\u540D"},Fe={class:"actions-cell"},Te={class:"border-t border-gray-100 p-3 dark:border-gray-800 lg:px-6"},Ae=W(" \u78BA\u5B9A\u8981\u522A\u9664"),Je=W("\uFF1F "),Le={setup(o){const s=_e(),e=Pe(),{darkMode:m,notificationState:U}=K(s),{brands:u}=K(e),r=F({id:"",data:{}}),p=(d,n)=>{U.value={type:d,message:n},setTimeout(()=>{U.value={}},2e3)},g=()=>{r.id="",r.data={}},X=d=>{b.value=d,Velocity(document.documentElement,"scroll",{offset:0,mobileHA:!1})},j=A(10),b=A(0),J=P(()=>u.value.slice(j.value*b.value,j.value*(b.value+1))),L=P(()=>Math.ceil(u.value.length/j.value)),Y=P(()=>b.value+1),Z=P(()=>{const d=[];for(let n=0;n<L.value;n++)d.push(n);return d}),f=F({create:!1,info:!1,delete:!1}),$=async(N,w)=>{var C=N,{id:d}=C,n=I(C,["id"]);try{f[w]=!0,r.id=d,r.data=n}catch(D){console.error(D)}},_=F({brand:"",fullBrand:""}),ee=()=>{f.create=!0},te=async()=>{try{await e.createBrand(_),await e.getBrands(),p("success","\u65B0\u589E\u54C1\u724C\u6210\u529F"),g(),z()}catch(d){console.error(d)}},ae=()=>{g(),z()},z=()=>{_.brand="",_.fullBrand=""},ne=async()=>{try{await e.getBrands()}catch(d){console.log(d)}},oe=async()=>{try{await e.updateBrand(r),await e.getBrands(),p("success","\u4FEE\u6539\u54C1\u724C\u6210\u529F"),g()}catch(d){console.error(d)}},le=async()=>{try{await e.deleteBrand(r.id),await e.getBrands(),J.value.length===0&&b.value>0&&(b.value=b.value-1),p("success","\u522A\u9664\u54C1\u724C\u6210\u529F"),g()}catch(d){console.error(d)}};return Be(()=>{ne()}),(d,n)=>{const w=ge,N=ye,C=ie,D=ue,k=me,M=fe;return B(),y(h,null,[c("section",Se,[l(w,null,{default:i(()=>[Ue,l(S,{color:"white",label:"\u65B0\u589E\u54C1\u724C",onClick:ee})]),_:1})]),l(D,null,{default:i(()=>[l(C,{class:"mb-6","has-table":""},{default:i(()=>[c("table",null,[je,c("tbody",null,[(B(!0),y(h,null,Q(a(J),(t,E)=>(B(),y("tr",{key:t.id,class:ve(["lg:hover:bg-gray-100",E%2===0?"lg:bg-gray-50":""])},[c("td",Ne,V(t.brand),1),c("td",De,V(t.fullBrand),1),c("td",Fe,[l(N,{type:"justify-start lg:justify-end","no-wrap":""},{default:i(()=>[l(S,{color:"info",icon:a(he),small:"",onClick:re=>$(t,"info")},null,8,["icon","onClick"]),l(S,{color:"danger",icon:a(Ve),small:"",onClick:re=>$(t,"delete")},null,8,["icon","onClick"])]),_:2},1024)])],2))),128))])]),v(" pagination "),c("div",Te,[l(w,null,{default:i(()=>[l(N,null,{default:i(()=>[(B(!0),y(h,null,Q(a(Z),t=>(B(),we(S,{key:t,active:t===b.value,label:t+1,outline:a(m),small:"",onClick:E=>X(t)},null,8,["active","label","outline","onClick"]))),128))]),_:1}),c("small",null,"Page "+V(a(Y))+" of "+V(a(L)),1)]),_:1})])]),_:1})]),_:1}),v(" \u65B0\u589E\u54C1\u724C "),l(T,{modelValue:a(f).create,"onUpdate:modelValue":n[2]||(n[2]=t=>a(f).create=t),title:"\u65B0\u589E\u54C1\u724C",onConfirm:te,onCancel:ae},{default:i(()=>[a(f).create?(B(),y(h,{key:0},[l(M,{label:"\u54C1\u724C\u540D\u7A31",class:"mb-0"},{default:i(()=>[l(k,{modelValue:a(_).brand,"onUpdate:modelValue":n[0]||(n[0]=t=>a(_).brand=t),modelModifiers:{trim:!0},type:"text"},null,8,["modelValue"])]),_:1}),l(M,{label:"\u54C1\u724C\u5168\u540D"},{default:i(()=>[l(k,{modelValue:a(_).fullBrand,"onUpdate:modelValue":n[1]||(n[1]=t=>a(_).fullBrand=t),modelModifiers:{trim:!0},type:"text"},null,8,["modelValue"])]),_:1})],64)):v("v-if",!0)]),_:1},8,["modelValue"]),v(" \u4FEE\u6539\u54C1\u724C "),l(T,{modelValue:a(f).info,"onUpdate:modelValue":n[5]||(n[5]=t=>a(f).info=t),title:"\u4FEE\u6539\u54C1\u724C",onConfirm:oe,onCancel:g},{default:i(()=>[a(f).info?(B(),y(h,{key:0},[l(M,{label:"\u540D\u7A31",class:"mb-0"},{default:i(()=>[l(k,{modelValue:a(r).data.brand,"onUpdate:modelValue":n[3]||(n[3]=t=>a(r).data.brand=t),modelModifiers:{trim:!0},type:"text"},null,8,["modelValue"])]),_:1}),l(M,{label:"\u5168\u540D"},{default:i(()=>[l(k,{modelValue:a(r).data.fullBrand,"onUpdate:modelValue":n[4]||(n[4]=t=>a(r).data.fullBrand=t),modelModifiers:{trim:!0},type:"text"},null,8,["modelValue"])]),_:1})],64)):v("v-if",!0)]),_:1},8,["modelValue"]),v(" \u522A\u9664\u54C1\u724C "),l(T,{modelValue:a(f).delete,"onUpdate:modelValue":n[6]||(n[6]=t=>a(f).delete=t),"large-title":"Please confirm",button:"danger","has-cancel":"",onConfirm:le,onCancel:g},{default:i(()=>[c("p",null,[Ae,c("strong",null,"\u300C"+V(a(r).data.fullBrand)+"\u300D",1),Je])]),_:1},8,["modelValue"])],64)}}};var Ge=be(Le,[["__file","/Users/kenge/Documents/code/side-project/watch-store-admin/src/views/Brands.vue"]]);export{Ge as default};