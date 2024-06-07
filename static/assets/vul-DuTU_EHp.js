import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-DrNfIFWG.js";import{d as l,af as t,dv as a,C as r,A as s,W as o,O as i,bd as n,s as p,a7 as u,a as c,o as d,c as m,f as h,Q as g,a4 as f,i as b,e as v,L as y,aM as _,aS as x,bl as j,ae as w,B as S,n as k,J as H,H as R,t as z,j as E,cZ as I,M as U,al as C,N as L,a1 as N,I as P,r as V,X as W,Y as q,U as D,w as A,$ as M,a0 as $,l as T,_ as B}from"./index-CD5z-L2p.js";import{_ as O}from"./Search.vue_vue_type_script_setup_true_lang-CqrtnVOU.js";import{u as F}from"./useSearch-jWOz0iC8.js";import{u as J}from"./useTable-CD6z3NBi.js";import{E as Q}from"./el-card-BSi8b6QZ.js";import{E as X}from"./el-pagination-D8F1T4Jn.js";import"./el-tag-l9P6F3bC.js";import"./el-popper-DZWDgZ8T.js";import{E as Y,a as G}from"./el-col-Cat2GRqi.js";import{_ as K,E as Z,a as ee}from"./Table.vue_vue_type_script_lang-kikzg7Gy.js";import"./el-checkbox-CSYOfx66.js";import"./el-tooltip-l0sNRNKZ.js";import{E as le}from"./el-text-CilhT5JB.js";import{E as te}from"./el-divider-BqiFvRo_.js";import{_ as ae}from"./Dialog.vue_vue_type_style_index_0_lang-GTofo2ER.js";import{u as re}from"./useCrudSchemas-CWvY0jyW.js";import{r as se}from"./index-BZommXV1.js";import"./useForm-CVfhRhuH.js";import"./el-form-item-DMczFwFk.js";import"./castArray-mNLLonyd.js";import"./el-radio-group-eBjY_ehg.js";/* empty css                          */import"./el-input-number-CPg7IL_L.js";import"./el-select-v2-6RS1ZV2R.js";import"./raf-CfzBOZZn.js";import"./useInput-C5WeYUR4.js";import"./debounce-BQFtq4AG.js";import"./el-switch-CfMEB_VU.js";import"./el-progress-4HyxI6zy.js";import"./InputPassword-CPKzskjm.js";import"./style.css_vue_type_style_index_0_src_true_lang-K49hou3T.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-CG0C05Im.js";import"./IconPicker-BMb7ROPk.js";/* empty css                   */import"./el-tab-pane-RgcbHr8c.js";import"./tsxHelper-CG14TR21.js";import"./index-DPLKM-Z5.js";import"./useIcon-D8J_96up.js";import"./el-image-viewer-Cro4p8GN.js";import"./el-dropdown-item-DuGKGSIn.js";import"./refs-Cpmhc2B7.js";import"./index-ajI7YjOc.js";import"./tree-BfZhwLPs.js";const oe=Symbol("elDescriptions");var ie=l({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String,default:"td"},type:{type:String}},setup:()=>({descriptions:t(oe,{})}),render(){var e,l,t,p,u,c,d;const m=a(this.cell),h=((null==(e=this.cell)?void 0:e.dirs)||[]).map((e=>{const{dir:l,arg:t,modifiers:a,value:r}=e;return[l,r,t,a]})),{border:g,direction:f}=this.descriptions,b="vertical"===f,v=(null==(p=null==(t=null==(l=this.cell)?void 0:l.children)?void 0:t.label)?void 0:p.call(t))||m.label,y=null==(d=null==(c=null==(u=this.cell)?void 0:u.children)?void 0:c.default)?void 0:d.call(c),_=m.span,x=m.align?`is-${m.align}`:"",j=m.labelAlign?`is-${m.labelAlign}`:x,w=m.className,S=m.labelClassName,k={width:r(m.width),minWidth:r(m.minWidth)},H=s("descriptions");switch(this.type){case"label":return o(i(this.tag,{style:k,class:[H.e("cell"),H.e("label"),H.is("bordered-label",g),H.is("vertical-label",b),j,S],colSpan:b?_:1},v),h);case"content":return o(i(this.tag,{style:k,class:[H.e("cell"),H.e("content"),H.is("bordered-content",g),H.is("vertical-content",b),x,w],colSpan:b?_:2*_-1},y),h);default:return o(i("td",{style:k,class:[H.e("cell"),x],colSpan:_},[n(v)?void 0:i("span",{class:[H.e("label"),S]},v),i("span",{class:[H.e("content"),w]},y)]),h)}}});const ne=p({row:{type:u(Array),default:()=>[]}}),pe={key:1},ue=l({name:"ElDescriptionsRow"});var ce=y(l({...ue,props:ne,setup(e){const l=t(oe,{});return(e,t)=>"vertical"===c(l).direction?(d(),m(g,{key:0},[h("tr",null,[(d(!0),m(g,null,f(e.row,((e,l)=>(d(),b(c(ie),{key:`tr1-${l}`,cell:e,tag:"th",type:"label"},null,8,["cell"])))),128))]),h("tr",null,[(d(!0),m(g,null,f(e.row,((e,l)=>(d(),b(c(ie),{key:`tr2-${l}`,cell:e,tag:"td",type:"content"},null,8,["cell"])))),128))])],64)):(d(),m("tr",pe,[(d(!0),m(g,null,f(e.row,((e,t)=>(d(),m(g,{key:`tr3-${t}`},[c(l).border?(d(),m(g,{key:0},[v(c(ie),{cell:e,tag:"td",type:"label"},null,8,["cell"]),v(c(ie),{cell:e,tag:"td",type:"content"},null,8,["cell"])],64)):(d(),b(c(ie),{key:1,cell:e,tag:"td",type:"both"},null,8,["cell"]))],64)))),128))]))}}),[["__file","descriptions-row.vue"]]);const de=p({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:_,title:{type:String,default:""},extra:{type:String,default:""}}),me=l({name:"ElDescriptions"});var he=y(l({...me,props:de,setup(e){const l=e,t=s("descriptions"),a=x(),r=j();w(oe,l);const o=S((()=>[t.b(),t.m(a.value)])),i=(e,l,t,a=!1)=>(e.props||(e.props={}),l>t&&(e.props.span=t),a&&(e.props.span=l),e),n=()=>{if(!r.default)return[];const e=I(r.default()).filter((e=>{var l;return"ElDescriptionsItem"===(null==(l=null==e?void 0:e.type)?void 0:l.name)})),t=[];let a=[],s=l.column,o=0;return e.forEach(((r,n)=>{var p;const u=(null==(p=r.props)?void 0:p.span)||1;if(n<e.length-1&&(o+=u>s?s:u),n===e.length-1){const e=l.column-o%l.column;return a.push(i(r,e,s,!0)),void t.push(a)}u<s?(s-=u,a.push(r)):(a.push(i(r,u,s)),t.push(a),s=l.column,a=[])})),t};return(e,l)=>(d(),m("div",{class:k(c(o))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(d(),m("div",{key:0,class:k(c(t).e("header"))},[h("div",{class:k(c(t).e("title"))},[H(e.$slots,"title",{},(()=>[R(z(e.title),1)]))],2),h("div",{class:k(c(t).e("extra"))},[H(e.$slots,"extra",{},(()=>[R(z(e.extra),1)]))],2)],2)):E("v-if",!0),h("div",{class:k(c(t).e("body"))},[h("table",{class:k([c(t).e("table"),c(t).is("bordered",e.border)])},[h("tbody",null,[(d(!0),m(g,null,f(n(),((e,l)=>(d(),b(ce,{key:l,row:e},null,8,["row"])))),128))])],2)],2)],2))}}),[["__file","description.vue"]]);const ge=l({name:"ElDescriptionsItem",props:p({label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}})}),fe=U(he,{DescriptionsItem:ge}),be=C(ge),ve={style:{whiteSpace:"pre-line",width:"500px"}},ye={style:{whiteSpace:"pre-line"}};function _e(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!$(e)}const xe=B(l({__name:"vul",setup(l){const{t:t}=T(),{searchRegister:a}=F(),r=L([{field:"search",label:t("form.input"),component:"Input",formItemProps:{size:"large",style:{width:"100%"}},componentProps:{clearable:!1,slots:{suffix:()=>v(P,{class:"icon-button",onClick:n,text:!0,style:"outline: none;background-color: transparent !important; color: inherit !important; box-shadow: none !important;position: relative;left: 24%"},{default:()=>[v(N,{icon:"tdesign:chat-bubble-help"},null)]})}}}]),s=[{operator:"=",meaning:t("searchHelp.like")},{operator:"!=",meaning:t("searchHelp.notIn")},{operator:"==",meaning:t("searchHelp.equal")},{operator:"&&",meaning:t("searchHelp.and")},{operator:"||",meaning:t("searchHelp.or")},{operator:"()",meaning:t("searchHelp.brackets")}],o=[{keyword:"url",example:'url="http://example.com"',explain:t("searchHelp.url")},{keyword:"vulname",example:'vulname="nginxwebui-runcmd-rce"',explain:t("searchHelp.vulname")},{keyword:"level",example:'level="info',explain:t("searchHelp.level")},{keyword:"matched",example:'matched="https://example.com"',explain:t("searchHelp.matched")},{keyword:"request",example:'request="cmd=whoami"',explain:t("searchHelp.vulRequest")},{keyword:"response",example:'response="root"',explain:t("searchHelp.response")},{keyword:"project",example:'project="Hackerone"',explain:t("searchHelp.project")}],i=V(!1),n=()=>{i.value=!0},p=V(!0),u=V("inline"),f=V("left"),b=V(""),y=e=>{b.value=e.search,$()},_=V(!1),x=L([{field:"index",label:t("tableDemo.index"),type:"index",minWidth:10},{field:"url",label:"URL",minWidth:30},{field:"vulnerability",label:"Vulnerability",minWidth:20},{field:"level",label:"Level",minWidth:10,formatter:(e,l,a)=>{if(null==a)return v("div",null,null);let r="",s="";return 6===a?(r="red",s=t("poc.critical")):5===a?(r="orange",s=t("poc.high")):4===a?(r="yellow",s=t("poc.medium")):3===a?(r="blue",s=t("poc.low")):2===a?(r="green",s=t("poc.info")):1===a&&(r="gray",s=t("poc.unknown")),v(G,{gutter:20,style:"width: 80%"},{default:()=>[v(Y,{span:1},{default:()=>[v(N,{icon:"clarity:circle-solid",color:r},null)]}),v(Y,{span:5},{default:()=>[v(le,{type:"info"},_e(s)?s:{default:()=>[s]})]})]})}},{field:"matched",label:"Matched",minWidth:30},{field:"time",label:t("asset.time"),minWidth:20},{field:"action",label:t("tableDemo.action"),formatter:(e,l,a)=>{let r;return v(g,null,[v(W,{type:"primary",onClick:()=>ce(e)},_e(r=t("asset.detail"))?r:{default:()=>[r]})])},minWidth:10}]),{allSchemas:j}=re(x),{tableRegister:w,tableState:S,tableMethods:k}=J({fetchDataApi:async()=>{const{currentPage:e,pageSize:l}=S,t=await((e,l,t)=>se.post({url:"/api/vul/data",data:{search:e,pageIndex:l,pageSize:t}}))(b.value,e.value,l.value);return{list:t.data.list,total:t.data.total}},immediate:!1}),{loading:H,dataList:E,total:I,currentPage:U,pageSize:C}=S,{getList:$}=k;function B(){return{background:"var(--el-fill-color-light)"}}C.value=20,q((()=>{ie(),window.addEventListener("resize",ie)}));const oe=V(0),ie=()=>{const e=window.innerHeight||document.documentElement.clientHeight;oe.value=.7*e},ne=L({URL:"",Vulnerability:"",Level:"",Matched:"",Time:"",Request:"",Response:""}),pe=V(""),ue=V(!1),ce=e=>{const l=e.level;pe.value="";let a="";6===l?(pe.value="red",a=t("poc.critical")):5===l?(pe.value="orange",a=t("poc.high")):4===l?(pe.value="yellow",a=t("poc.medium")):3===l?(pe.value="blue",a=t("poc.low")):2===l?(pe.value="green",a=t("poc.info")):1===l&&(pe.value="gray",a=t("poc.unknown")),ne.Level=a,ne.Vulnerability=e.vulnerability,ne.Matched=e.matched,ne.Time=e.time,ne.URL=e.url,ne.Request=e.request,ne.Response=e.response,ue.value=!0};return(l,n)=>{const b=D("ElScrollbar");return d(),m(g,null,[v(c(e),{style:{height:"80px"}},{default:A((()=>[v(c(O),{schema:r,"is-col":p.value,layout:u.value,"show-reset":!1,"button-position":f.value,"search-loading":_.value,onSearch:y,onReset:y,onRegister:c(a)},null,8,["schema","is-col","layout","button-position","search-loading","onRegister"])])),_:1}),v(c(G),null,{default:A((()=>[v(c(Y),null,{default:A((()=>[v(c(Q),null,{default:A((()=>[v(c(K),{pageSize:c(C),"onUpdate:pageSize":n[0]||(n[0]=e=>M(C)?C.value=e:null),currentPage:c(U),"onUpdate:currentPage":n[1]||(n[1]=e=>M(U)?U.value=e:null),columns:c(j).tableColumns,data:c(E),stripe:"",border:!0,"max-height":oe.value,loading:c(H),resizable:!0,onRegister:c(w),headerCellStyle:B,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),v(c(Y),{":span":24},{default:A((()=>[v(c(Q),null,{default:A((()=>[v(c(X),{pageSize:c(C),"onUpdate:pageSize":n[2]||(n[2]=e=>M(C)?C.value=e:null),currentPage:c(U),"onUpdate:currentPage":n[3]||(n[3]=e=>M(U)?U.value=e:null),"page-sizes":[20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:c(I)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1}),v(c(ae),{modelValue:ue.value,"onUpdate:modelValue":n[4]||(n[4]=e=>ue.value=e),title:c(t)("asset.detail"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},width:"70%","max-height":oe.value},{default:A((()=>[v(c(fe),{border:!0,column:2},{default:A((()=>[v(c(be),{label:"URL"},{default:A((()=>[R(z(ne.URL),1)])),_:1}),v(c(be),{label:"Level"},{default:A((()=>[v(c(G),{gutter:20,style:{width:"80%"}},{default:A((()=>[v(c(Y),{span:1},{default:A((()=>[v(c(N),{icon:"clarity:circle-solid",color:pe.value},null,8,["color"])])),_:1}),v(c(Y),{span:5},{default:A((()=>[v(c(le),{type:"info"},{default:A((()=>[R(z(ne.Level),1)])),_:1})])),_:1})])),_:1})])),_:1}),v(c(be),{label:"Vulnerability"},{default:A((()=>[R(z(ne.Vulnerability),1)])),_:1}),v(c(be),{label:"Matched"},{default:A((()=>[R(z(ne.Matched),1)])),_:1}),v(c(be),{label:"Time",span:2},{default:A((()=>[R(z(ne.Time),1)])),_:1}),v(c(be),{label:"Request"},{default:A((()=>[v(b,{"max-height":oe.value,"max-width":"maxHeight"},{default:A((()=>[h("div",ve,z(ne.Request),1)])),_:1},8,["max-height"])])),_:1}),v(c(be),{label:"Response"},{default:A((()=>[v(b,{"max-height":oe.value},{default:A((()=>[h("div",ye,z(ne.Response),1)])),_:1},8,["max-height"])])),_:1})])),_:1})])),_:1},8,["modelValue","title","max-height"]),v(c(ae),{modelValue:i.value,"onUpdate:modelValue":n[5]||(n[5]=e=>i.value=e),title:c(t)("common.querysyntax"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:A((()=>[v(c(G),null,{default:A((()=>[v(c(Y),null,{default:A((()=>[v(c(le),{tag:"b",size:"small"},{default:A((()=>[R(z(c(t)("searchHelp.operator")),1)])),_:1}),v(c(te),{direction:"vertical"}),v(c(le),{size:"small",type:"danger"},{default:A((()=>[R(z(c(t)("searchHelp.notice")),1)])),_:1})])),_:1}),v(c(Y),{style:{"margin-top":"10px"}},{default:A((()=>[v(c(Z),{headerCellStyle:B,data:s},{default:A((()=>[v(c(ee),{prop:"operator",label:c(t)("searchHelp.operator"),width:"300"},null,8,["label"]),v(c(ee),{prop:"meaning",label:c(t)("searchHelp.meaning")},null,8,["label"])])),_:1})])),_:1}),v(c(Y),{style:{"margin-top":"15px"}},{default:A((()=>[v(c(le),{tag:"b",size:"small"},{default:A((()=>[R(z(c(t)("searchHelp.keywords")),1)])),_:1})])),_:1}),v(c(Y),{style:{"margin-top":"10px"}},{default:A((()=>[v(c(Z),{headerCellStyle:B,data:o},{default:A((()=>[v(c(ee),{prop:"keyword",label:c(t)("searchHelp.keywords")},null,8,["label"]),v(c(ee),{prop:"example",label:c(t)("searchHelp.example")},null,8,["label"]),v(c(ee),{prop:"explain",label:c(t)("searchHelp.explain")},null,8,["label"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","title"])],64)}}}),[["__scopeId","data-v-4f537307"]]);export{xe as default};