import{s as e,x as s,d as a,A as t,B as i,o as n,c as l,i as d,w as o,G as r,a as f,D as c,j as u,n as p,J as y,L as g,M as k}from"./index-5vcJ2QQZ.js";const b=e({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:s}}),v={click:e=>e instanceof MouseEvent},m=["href","target"],h=a({name:"ElLink"});const $=k(g(a({...h,props:b,emits:v,setup(e,{emit:s}){const a=e,g=t("link"),k=i((()=>[g.b(),g.m(a.type),g.is("disabled",a.disabled),g.is("underline",a.underline&&!a.disabled)]));function b(e){a.disabled||s("click",e)}return(e,s)=>(n(),l("a",{class:p(f(k)),href:e.disabled||!e.href?void 0:e.href,target:e.disabled||!e.href?void 0:e.target,onClick:b},[e.icon?(n(),d(f(c),{key:0},{default:o((()=>[(n(),d(r(e.icon)))])),_:1})):u("v-if",!0),e.$slots.default?(n(),l("span",{key:1,class:p(f(g).e("inner"))},[y(e.$slots,"default")],2)):u("v-if",!0),e.$slots.icon?y(e.$slots,"icon",{key:2}):u("v-if",!0)],10,m))}}),[["__file","link.vue"]]));export{$ as E};