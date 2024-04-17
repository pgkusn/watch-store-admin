import{_ as b,o as s,C as w,I as B,c as i,u as C,r as V,i as q,D,a as r,k as o,v as h,E,q as g,n as p,F as U,p as $,t as v,x as I,G as M,e as k,H as j,b as K,K as L}from"./index.25c2e62e.js";const R={props:{icon:{type:String,default:null},h:{type:String,default:null}},setup(e){return(d,l)=>(s(),w(B,{path:e.icon,w:"w-10",h:e.h,class:"absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-gray-400"},null,8,["path","h"]))}},H=b(R,[["__file","/Users/kenge/Documents/code/side-project/watch-store-admin/src/components/ControlIcon.vue"]]),N={class:"relative"},z=["id","name"],A=["value"],T=["id","name","placeholder","required"],G=["id","name","autocomplete","required","placeholder","type"],O={props:{name:{type:String,default:null},id:{type:String,default:null},autocomplete:{type:String,default:null},placeholder:{type:String,default:null},icon:{type:String,default:null},options:{type:Array,default:null},type:{type:String,default:"text"},modelValue:{type:[String,Number,Boolean,Array,Object],default:""},required:Boolean,borderless:Boolean,transparent:Boolean,ctrlKFocus:Boolean},emits:["update:modelValue","right-icon-click"],setup(e,{emit:d}){const l=e,t=i({get:()=>l.modelValue,set:u=>{d("update:modelValue",u)}}),c=i(()=>{const u=["px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full","dark:placeholder-gray-400",m.value==="textarea"?"h-24":"h-12",l.borderless?"border-0":"border",l.transparent?"bg-transparent":"bg-white dark:bg-gray-800"];return l.icon&&u.push("pl-10"),u}),m=i(()=>l.options?"select":l.type),F=i(()=>l.type==="textarea"?"h-full":"h-12"),f=C(),y=V(null);if(l.ctrlKFocus){const u=n=>{n.ctrlKey&&n.key==="k"?(n.preventDefault(),y.value.focus()):n.key==="Escape"&&y.value.blur()};q(()=>{f.isFieldFocusRegistered||(window.addEventListener("keydown",u),f.isFieldFocusRegistered=!0)}),D(()=>{window.removeEventListener("keydown",u),f.isFieldFocusRegistered=!1})}return(u,n)=>(s(),r("div",N,[o(m)==="select"?h((s(),r("select",{key:0,id:e.id,"onUpdate:modelValue":n[0]||(n[0]=a=>g(t)?t.value=a:null),name:e.name,class:p(o(c))},[(s(!0),r(U,null,$(e.options,a=>{var x,S;return s(),r("option",{key:(x=a.id)!=null?x:a,value:a},v((S=a.label)!=null?S:a),9,A)}),128))],10,z)),[[E,o(t)]]):o(m)==="textarea"?h((s(),r("textarea",{key:1,id:e.id,"onUpdate:modelValue":n[1]||(n[1]=a=>g(t)?t.value=a:null),class:p(o(c)),name:e.name,placeholder:e.placeholder,required:e.required},null,10,T)),[[I,o(t)]]):h((s(),r("input",{key:2,id:e.id,ref_key:"inputEl",ref:y,"onUpdate:modelValue":n[2]||(n[2]=a=>g(t)?t.value=a:null),name:e.name,autocomplete:e.autocomplete,required:e.required,placeholder:e.placeholder,type:o(m),class:p(o(c))},null,10,G)),[[M,o(t)]]),e.icon?(s(),w(H,{key:3,icon:e.icon,h:o(F)},null,8,["icon","h"])):k("v-if",!0)]))}},Y=b(O,[["__file","/Users/kenge/Documents/code/side-project/watch-store-admin/src/components/Control.vue"]]),J={class:"mb-6 last:mb-0"},P={key:0,class:"block font-bold mb-2"},Q={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},W={props:{label:{type:String,default:null},help:{type:String,default:null}},setup(e){const d=j(),l=i(()=>{const t=[],c=d.default().length;return c>1&&t.push("grid grid-cols-1 gap-3"),c===2&&t.push("md:grid-cols-2"),t});return(t,c)=>(s(),r("div",J,[e.label?(s(),r("label",P,v(e.label),1)):k("v-if",!0),K("div",{class:p(o(l))},[L(t.$slots,"default")],2),e.help?(s(),r("div",Q,v(e.help),1)):k("v-if",!0)]))}},Z=b(W,[["__file","/Users/kenge/Documents/code/side-project/watch-store-admin/src/components/Field.vue"]]);export{Y as C,Z as F};