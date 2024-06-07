import{P as e,g as t,U as a}from"./PanelGroup-Ca4akXxo.js";import{s,v as o,x as r,y as n,d as l,z as i,A as p,r as d,B as m,C as c,o as u,i as f,w as v,f as g,n as y,a as h,D as b,F as _,G as x,j as k,H as j,t as w,e as T,I as C,J as B,K as N,L as E,M as S,N as A,O as I,P as U,c as M,Q as F,l as P,_ as z}from"./index-L23m9uYc.js";import{E as $,a as H}from"./el-col-CqCGvnLt.js";import{E as R}from"./el-card-p0RPP4Vl.js";import{E as O}from"./el-progress-C04gXK2U.js";import{E as G}from"./el-text-C8_9zPli.js";import"./el-tooltip-l0sNRNKZ.js";import{u as K,E as L}from"./el-popper-DjtSnDGb.js";/* empty css                   */import{_ as Q}from"./Table.vue_vue_type_script_lang-DgGBRTuJ.js";import{E as q}from"./el-tag-JBxbeqhj.js";import{g as D}from"./index-Ch9CNaOE.js";import{g as J}from"./index-B8cRWP3e.js";import"./CountTo.vue_vue_type_script_setup_true_lang-4GAnycfT.js";import"./index-ANBIEAIq.js";import"./el-checkbox-CRKxDj92.js";import"./useInput-CcZ_P4u1.js";import"./debounce-DF1OOAfd.js";import"./el-pagination-CmiOWROU.js";import"./el-image-viewer-3OcW4yKJ.js";import"./tsxHelper-CS6f4kk9.js";import"./el-dropdown-item-DfSwk0Qe.js";import"./castArray-CmgHK4Wz.js";import"./refs-BmVXS0wr.js";import"./index-ktxO7qsf.js";import"./raf-CERu6KN3.js";const V=s({title:String,confirmButtonText:String,cancelButtonText:String,confirmButtonType:{type:String,values:o,default:"primary"},cancelButtonType:{type:String,values:o,default:"text"},icon:{type:r,default:()=>n},iconColor:{type:String,default:"#f90"},hideIcon:{type:Boolean,default:!1},hideAfter:{type:Number,default:200},teleported:K.teleported,persistent:K.persistent,width:{type:[String,Number],default:150}}),W={confirm:e=>e instanceof MouseEvent,cancel:e=>e instanceof MouseEvent},X=l({name:"ElPopconfirm"});const Y=S(E(l({...X,props:V,emits:W,setup(e,{emit:t}){const a=e,{t:s}=i(),o=p("popconfirm"),r=d(),n=()=>{var e,t;null==(t=null==(e=r.value)?void 0:e.onClose)||t.call(e)},l=m((()=>({width:c(a.width)}))),E=e=>{t("confirm",e),n()},S=e=>{t("cancel",e),n()},A=m((()=>a.confirmButtonText||s("el.popconfirm.confirmButtonText"))),I=m((()=>a.cancelButtonText||s("el.popconfirm.cancelButtonText")));return(e,t)=>(u(),f(h(L),N({ref_key:"tooltipRef",ref:r,trigger:"click",effect:"light"},e.$attrs,{"popper-class":`${h(o).namespace.value}-popover`,"popper-style":h(l),teleported:e.teleported,"fallback-placements":["bottom","top","right","left"],"hide-after":e.hideAfter,persistent:e.persistent}),{content:v((()=>[g("div",{class:y(h(o).b())},[g("div",{class:y(h(o).e("main"))},[!e.hideIcon&&e.icon?(u(),f(h(b),{key:0,class:y(h(o).e("icon")),style:_({color:e.iconColor})},{default:v((()=>[(u(),f(x(e.icon)))])),_:1},8,["class","style"])):k("v-if",!0),j(" "+w(e.title),1)],2),g("div",{class:y(h(o).e("action"))},[T(h(C),{size:"small",type:"text"===e.cancelButtonType?"":e.cancelButtonType,text:"text"===e.cancelButtonType,onClick:S},{default:v((()=>[j(w(h(I)),1)])),_:1},8,["type","text"]),T(h(C),{size:"small",type:"text"===e.confirmButtonType?"":e.confirmButtonType,text:"text"===e.confirmButtonType,onClick:E},{default:v((()=>[j(w(h(A)),1)])),_:1},8,["type","text"])],2)],2)])),default:v((()=>[e.$slots.reference?B(e.$slots,"reference",{key:0}):k("v-if",!0)])),_:3},16,["popper-class","popper-style","teleported","hide-after","persistent"]))}}),[["__file","popconfirm.vue"]])),Z=z(l({__name:"Analysis",setup(s){const{t:o}=P(),r=d(!0),n=A([{field:"nodeName",label:o("node.nodeName")},{field:"taskCount",label:o("node.taskCount"),formatter:(e,t,a)=>I(q,{round:!0,effect:"dark"},(()=>a))},{field:"nodeStatus",label:o("node.nodeStatus"),formatter:(e,t,a)=>I(q,{type:"1"===a?"success":"2"===a?"warning":"danger",effect:"dark"},(()=>o("1"==a?"node.statusRun":"2"==a?"node.statusStop":"node.statusError")))}]),l=A([{field:"name",label:o("task.taskName")},{field:"taskNum",label:o("task.taskCount"),formatter:(e,t,a)=>I(q,{round:!0,effect:"dark"},(()=>a))},{field:"progress",label:o("task.taskProgress"),formatter:(e,t,a)=>I(O,{percentage:a,type:"line",striped:!0,status:a<100?"":"success",stripedFlow:a<100})},{field:"creatTime",label:o("task.createTime")}]),i=A([{field:"nodeName",label:o("node.nodeName")},{field:"nodeUsageCpu",label:o("node.nodeUsageCpu"),formatter:(e,t,a)=>{let s=parseFloat(a);return s=parseFloat(s.toFixed(2)),I(O,{percentage:s,type:"dashboard",color:s<50?"#26a33f":s<=80?"#fe9900":"#df2800"})}},{field:"nodeUsageMemory",label:o("node.nodeUsageMemory"),formatter:(e,t,a)=>{let s=parseFloat(a);return s=parseFloat(s.toFixed(2)),I(O,{percentage:s,type:"dashboard",color:s<50?"#26a33f":s<80?"#fe9900":"#df2800"})}}]),p=A([{field:"name",label:o("common.name")},{field:"cversion",label:o("common.cversion")},{field:"lversion",label:o("common.lversion"),formatter:(e,t,a)=>{if(e.cversion!=e.lversion){S.value=!0;const t=e.msg.split("\\n");let s="";return t.forEach((e=>{s+=`<div>${e}</div>`})),I(L,{placement:"top",content:s,rawContent:!0},[I(G,{type:"danger"},a)])}return I(G,a)}}]);let m=d([]);const c=d([]),y=async()=>{try{const e=await D();e&&e.data&&Array.isArray(e.data.list)&&(c.value=e.data.list.map((e=>({nodeName:e.name,taskCount:e.running,nodeStatus:e.state,nodeUsageCpu:e.cpuNum,nodeUsageMemory:e.memNum}))),m.value=A(e.data.list.map((e=>({nodeName:e.name,nodeUsageCpu:e.cpuNum,nodeUsageMemory:e.memNum})))))}catch(e){}finally{r.value=!1}},b=d([]),_=async()=>{const e=await J("",1,10);b.value=A(e.data.list.map((e=>({name:e.name,taskNum:e.taskNum,progress:e.progress,creatTime:e.creatTime}))))},x=d([]),B=async()=>{await Promise.all([y(),_()]),r.value=!1};(async()=>{const e=await t();x.value=A(e.data.list.map((e=>({name:e.name,cversion:e.cversion,lversion:e.lversion,msg:e.msg}))))})(),B();const N=setInterval(B,1e4);U((()=>{clearInterval(N)}));const E=async()=>{await a()},S=d(!1);return(t,a)=>(u(),M(F,null,[T(e),T(h(H),{gutter:20,justify:"space-between"},{default:v((()=>[T(h($),{xl:12,lg:12,md:24,sm:24,xs:24},{default:v((()=>[T(h(R),{shadow:"hover",class:"mb-20px"},{header:v((()=>[g("span",null,w(h(o)("dashboard.nodeInfo")),1)])),default:v((()=>[T(h(Q),{columns:n,data:c.value,stripe:"",border:!1,height:250},null,8,["columns","data"])])),_:1})])),_:1}),T(h($),{xl:12,lg:12,md:24,sm:24,xs:24},{default:v((()=>[T(h(R),{shadow:"hover",class:"mb-20px"},{header:v((()=>[g("span",null,w(h(o)("dashboard.taskInfo")),1)])),default:v((()=>[T(h(Q),{columns:l,data:b.value,stripe:"",border:!1,height:250,"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!1,showAfter:0,popperOptions:{},popperClass:"test",placement:"bottom",hideAfter:0,disabled:!0}},null,8,["columns","data"])])),_:1})])),_:1}),T(h($),{span:12},{default:v((()=>[T(h(R),{shadow:"hover",class:"mb-25px"},{header:v((()=>[g("div",null,[g("span",null,w(h(o)("node.nodeUsageStatus")),1)])])),default:v((()=>[T(h(Q),{columns:i,data:h(m),highlightCurrentRow:!1,stripe:"",border:!1,height:600},null,8,["columns","data"])])),_:1})])),_:1}),T(h($),{span:12},{default:v((()=>[T(h(R),{shadow:"hover",class:"mb-25px"},{header:v((()=>[T(h(H),null,{default:v((()=>[T(h($),{span:12},{default:v((()=>[g("div",null,[g("span",null,w(h(o)("common.version")),1),S.value?(u(),f(h(G),{key:0,type:"danger",size:"small",style:{position:"relative",left:"1rem"}},{default:v((()=>[j("*"+w(h(o)("common.updatemsg")),1)])),_:1})):k("",!0)])])),_:1}),S.value?(u(),f(h($),{key:0,span:3,offset:8},{default:v((()=>[T(h(Y),{title:"Are you sure?",onConfirm:E},{reference:v((()=>[T(h(L),{content:h(o)("common.updateButtonMsg"),lacement:"top-start",effect:"dark"},{default:v((()=>[T(h(C),{color:"#626aef"},{default:v((()=>[j(w(h(o)("common.update")),1)])),_:1})])),_:1},8,["content"])])),_:1})])),_:1})):k("",!0)])),_:1})])),default:v((()=>[T(h(Q),{columns:p,data:x.value,stripe:"",border:!1,height:600},null,8,["columns","data"])])),_:1})])),_:1})])),_:1})],64))}}),[["__scopeId","data-v-2bfa06b6"]]);export{Z as default};