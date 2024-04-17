import{_ as S,u as l,c as p,o as w,C as _,j as n,K as y,n as h,k as a,Q as v,R as x,S as C,U as D,f as L,V as P,h as V,W as B,d as s,X as I,Y as M,z as U,J as j,M as A}from"./index.25c2e62e.js";import{M as F,D as R,C as q}from"./CardComponent.090bf16a.js";import{F as f,C as g}from"./Field.e1e626a4.js";const E={props:{bg:{type:String,required:!0,validator:e=>["login","error"].includes(e)}},setup(e){const o=e,t=l(),c=p(()=>t.darkMode),u=p(()=>{switch(o.bg){case"login":return c.value?C:D;case"error":return c.value?v:x}return""});return(r,i)=>(w(),_(F,{class:h(["flex h-screen items-center justify-center",a(u)])},{default:n(()=>[y(r.$slots,"default",{cardClass:"w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl",cardRounded:"rounded-lg"})]),_:3},8,["class"]))}},N=S(E,[["__file","/Users/kenge/Documents/code/side-project/watch-store-admin/src/components/FullScreenSection.vue"]]),m=L.create({baseURL:"https://identitytoolkit.googleapis.com/v1",params:{key:"AIzaSyCe0etdPskhxSxGh0w_IdZt3FDqcDQWbOo"}});m.interceptors.request.use(function(e){return e},function(e){const o=l();return o.notificationState.type="error",o.notificationState.message="\u51FA\u73FE\u932F\u8AA4\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002",Promise.reject(e)});m.interceptors.response.use(function(e){return e},function(e){const o=l();o.notificationState.type="error";let t="";if(e.response.status===400)switch(e.response.data.error.message){case"EMAIL_NOT_FOUND":t="Email \u4E0D\u5B58\u5728";break;case"INVALID_PASSWORD":t="\u5BC6\u78BC\u932F\u8AA4";break}return e.response.status===401&&(t="\u767B\u5165\u903E\u6642\uFF0C\u8ACB\u91CD\u65B0\u767B\u5165\uFF01",localStorage.removeItem("idToken"),P.push({name:"login"})),o.notificationState.message=t||"\u51FA\u73FE\u932F\u8AA4\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002",Promise.reject(e)});const O=e=>m.post("/accounts:signInWithPassword",e).then(o=>o.data),T={setup(e){const o=V({email:"email@example.com",password:"Password"}),t=B(),c=l(),u=async()=>{try{const{idToken:r}=await O(o);localStorage.setItem("idToken",r),c.notificationState={},t.push({name:"products"})}catch(r){console.error(r)}};return(r,i)=>(w(),_(N,{bg:"login"},{default:n(({cardClass:k,cardRounded:b})=>[s(q,{class:h(k),rounded:b,form:"",onSubmit:A(u,["prevent"])},{default:n(()=>[s(f,{label:"Login",help:"Please enter your login"},{default:n(()=>[s(g,{modelValue:a(o).email,"onUpdate:modelValue":i[0]||(i[0]=d=>a(o).email=d),icon:a(I),name:"email",autocomplete:"email"},null,8,["modelValue","icon"])]),_:1}),s(f,{label:"Password",help:"Please enter your password"},{default:n(()=>[s(g,{modelValue:a(o).password,"onUpdate:modelValue":i[1]||(i[1]=d=>a(o).password=d),icon:a(M),type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),s(R),s(U,null,{default:n(()=>[s(j,{type:"submit",color:"info",label:"Login"})]),_:1})]),_:2},1032,["class","rounded","onSubmit"])]),_:1}))}},Q=S(T,[["__file","/Users/kenge/Documents/code/side-project/watch-store-admin/src/views/Login.vue"]]);export{Q as default};