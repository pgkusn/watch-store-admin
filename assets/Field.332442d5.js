import{_ as y,u as B,c as u,o as a,a as s,n as m,k as l,C as v,I as w,r as V,i as M,D as U,v as x,E as _,q as S,F as j,p as I,t as b,x as q,G as E,e as h,H as C,K as N,j as L,b as $,y as T,L as H,d as K,M as R,N as z}from"./index.d6cdf4ce.js";const A={props:{navBar:Boolean},setup(e){const c=e,o=B(),n=u(()=>o.lightBorderStyle);return(i,f)=>(a(),s("hr",{class:m([[l(n),c.navBar?"hidden lg:block lg:my-0.5 dark:border-gray-700":"my-6 -mx-6 dark:border-gray-800"],"border-t"])},null,2))}};var me=y(A,[["__file","/Users/kenge/Documents/code/side-project/watch-store-admin/src/components/Divider.vue"]]);const G={props:{icon:{type:String,default:null},h:{type:String,default:null}},setup(e){return(c,o)=>(a(),v(w,{path:e.icon,w:"w-10",h:e.h,class:"absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-gray-400"},null,8,["path","h"]))}};var O=y(G,[["__file","/Users/kenge/Documents/code/side-project/watch-store-admin/src/components/ControlIcon.vue"]]);const J={class:"relative"},P=["id","name"],Q=["value"],W=["id","name","placeholder","required"],X=["id","name","autocomplete","required","placeholder","type"],Y={props:{name:{type:String,default:null},id:{type:String,default:null},autocomplete:{type:String,default:null},placeholder:{type:String,default:null},icon:{type:String,default:null},options:{type:Array,default:null},type:{type:String,default:"text"},modelValue:{type:[String,Number,Boolean,Array,Object],default:""},required:Boolean,borderless:Boolean,transparent:Boolean,ctrlKFocus:Boolean},emits:["update:modelValue","right-icon-click"],setup(e,{emit:c}){const o=e,n=u({get:()=>o.modelValue,set:d=>{c("update:modelValue",d)}}),i=u(()=>{const d=["px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full","dark:placeholder-gray-400",f.value==="textarea"?"h-24":"h-12",o.borderless?"border-0":"border",o.transparent?"bg-transparent":"bg-white dark:bg-gray-800"];return o.icon&&d.push("pl-10"),d}),f=u(()=>o.options?"select":o.type),k=u(()=>o.type==="textarea"?"h-full":"h-12"),p=B(),g=V(null);if(o.ctrlKFocus){const d=t=>{t.ctrlKey&&t.key==="k"?(t.preventDefault(),g.value.focus()):t.key==="Escape"&&g.value.blur()};M(()=>{p.isFieldFocusRegistered||(window.addEventListener("keydown",d),p.isFieldFocusRegistered=!0)}),U(()=>{window.removeEventListener("keydown",d),p.isFieldFocusRegistered=!1})}return(d,t)=>(a(),s("div",J,[l(f)==="select"?x((a(),s("select",{key:0,id:e.id,"onUpdate:modelValue":t[0]||(t[0]=r=>S(n)?n.value=r:null),name:e.name,class:m(l(i))},[(a(!0),s(j,null,I(e.options,r=>{var D,F;return a(),s("option",{key:(D=r.id)!=null?D:r,value:r},b((F=r.label)!=null?F:r),9,Q)}),128))],10,P)),[[_,l(n)]]):l(f)==="textarea"?x((a(),s("textarea",{key:1,id:e.id,"onUpdate:modelValue":t[1]||(t[1]=r=>S(n)?n.value=r:null),class:m(l(i)),name:e.name,placeholder:e.placeholder,required:e.required},null,10,W)),[[q,l(n)]]):x((a(),s("input",{key:2,id:e.id,ref_key:"inputEl",ref:g,"onUpdate:modelValue":t[2]||(t[2]=r=>S(n)?n.value=r:null),name:e.name,autocomplete:e.autocomplete,required:e.required,placeholder:e.placeholder,type:l(f),class:m(l(i))},null,10,X)),[[E,l(n)]]),e.icon?(a(),v(O,{key:3,icon:e.icon,h:l(k)},null,8,["icon","h"])):h("v-if",!0)]))}};var fe=y(Y,[["__file","/Users/kenge/Documents/code/side-project/watch-store-admin/src/components/Control.vue"]]);const Z={},ee={class:"px-0 md:px-6 py-6"};function te(e,c){return a(),s("section",ee,[C(e.$slots,"default")])}var pe=y(Z,[["render",te],["__file","/Users/kenge/Documents/code/side-project/watch-store-admin/src/components/MainSection.vue"]]);const oe=["onClick"],ne={key:1,class:"text-center py-24 text-gray-500 dark:text-gray-400"},ae=$("p",null,"Nothing's here\u2026",-1),le=[ae],se={props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},rounded:{type:String,default:"md:rounded"},hasTable:Boolean,empty:Boolean,form:Boolean,hoverable:Boolean,modal:Boolean},emits:["header-icon-click","submit"],setup(e,{emit:c}){const o=e,n=u(()=>o.form?"form":"div"),i=B(),f=u(()=>i.lightBorderStyle),k=u(()=>{const t=[o.rounded,f.value,o.modal?"dark:bg-gray-900":"dark:bg-gray-900/70"];return o.hoverable&&t.push("hover:shadow-lg transition-shadow duration-500"),t}),p=u(()=>{var t;return(t=o.headerIcon)!=null?t:N}),g=()=>{c("header-icon-click")},d=t=>{c("submit",t)};return(t,r)=>(a(),v(R(l(n)),{class:m([l(k),"bg-white border dark:border-gray-800 flex flex-col"]),onSubmit:d},{default:L(()=>[e.title?(a(),s("header",{key:0,class:m([l(f),"flex items-stretch border-b dark:border-gray-800"])},[$("p",{class:m(["flex items-center py-3 grow font-bold",[e.icon?"px-4":"px-6"]])},[e.icon?(a(),v(w,{key:0,path:e.icon,class:"mr-3"},null,8,["path"])):h("v-if",!0),T(" "+b(e.title),1)],2),l(p)?(a(),s("a",{key:0,href:"#",class:"flex items-center py-3 px-4 justify-center ring-blue-700 focus:ring","aria-label":"more options",onClick:H(g,["prevent"])},[K(w,{path:l(p)},null,8,["path"])],8,oe)):h("v-if",!0)],2)):h("v-if",!0),e.empty?(a(),s("div",ne,le)):(a(),s("div",{key:2,class:m([{"p-6":!e.hasTable},"flex-grow overflow-auto"])},[C(t.$slots,"default")],2))]),_:3},8,["class"]))}};var he=y(se,[["__file","/Users/kenge/Documents/code/side-project/watch-store-admin/src/components/CardComponent.vue"]]);const re={class:"mb-6 last:mb-0"},ce={key:0,class:"block font-bold mb-2"},ie={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},de={props:{label:{type:String,default:null},help:{type:String,default:null}},setup(e){const c=z(),o=u(()=>{const n=[],i=c.default().length;return i>1&&n.push("grid grid-cols-1 gap-3"),i===2&&n.push("md:grid-cols-2"),n});return(n,i)=>(a(),s("div",re,[e.label?(a(),s("label",ce,b(e.label),1)):h("v-if",!0),$("div",{class:m(l(o))},[C(n.$slots,"default")],2),e.help?(a(),s("div",ie,b(e.help),1)):h("v-if",!0)]))}};var ye=y(de,[["__file","/Users/kenge/Documents/code/side-project/watch-store-admin/src/components/Field.vue"]]);export{he as C,me as D,ye as F,pe as M,fe as a};