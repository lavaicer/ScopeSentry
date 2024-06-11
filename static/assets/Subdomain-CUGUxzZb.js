import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-B4sinkeh.js";import{d as a,N as t,e as l,a1 as o,I as r,r as s,Y as i,o as n,c as p,w as m,a as u,$ as d,H as c,t as g,Q as h,l as _,_ as f}from"./index-CbsoNNgc.js";import{_ as b}from"./Search.vue_vue_type_script_setup_true_lang-ChaJ0dKK.js";import{u as j}from"./useSearch-B7KyOfbH.js";import{u as x}from"./useTable-srm4bvKt.js";import{E as y}from"./el-card-Bu1pgq7H.js";import{E as v}from"./el-pagination-B4Yv1h_7.js";import"./el-tag-7Tafez-0.js";import"./el-popper-_HbrF1jO.js";import{E as H,a as S}from"./el-col-Dx3G6Gsk.js";import{_ as w,E as k,a as z}from"./Table.vue_vue_type_script_lang-DVJWTuWi.js";import"./el-checkbox-BX9zfJQq.js";import"./el-tooltip-l0sNRNKZ.js";import{E}from"./el-text-DlfLR9u9.js";import{E as I}from"./el-divider-CLgHEjVa.js";import{_ as P}from"./Dialog.vue_vue_type_style_index_0_lang-BiqtJw8z.js";import{u as C}from"./useCrudSchemas-BF5eLm3J.js";import{k as R}from"./index-Dr24QQr2.js";import"./useForm-DsUJ7Tn1.js";import"./el-form-item-4OkArQhq.js";import"./castArray-DuA9ouXu.js";import"./el-radio-group-D8MIitN0.js";/* empty css                          */import"./el-input-number-Bp7g6PFD.js";import"./el-select-v2-BfawHYzJ.js";import"./raf-C-vZNDhD.js";import"./useInput-Kf9RVEEH.js";import"./debounce-wcc1GRYs.js";import"./el-switch-CgsPf83W.js";import"./el-progress-CzAr_jmg.js";import"./InputPassword-DU4kh0H3.js";import"./style.css_vue_type_style_index_0_src_true_lang-ioP-pxAB.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-DCMqnrji.js";import"./IconPicker-DfOuf_af.js";/* empty css                   */import"./el-tab-pane-DlW0wfXF.js";import"./tsxHelper-Cn8_hiAG.js";import"./index-QCvozDUF.js";import"./useIcon-DZCueV0L.js";import"./el-image-viewer-BySdG1W0.js";import"./el-dropdown-item-DPuD6G3N.js";import"./refs-Bj8u2PxR.js";import"./index-Dh6wrwZi.js";import"./tree-BfZhwLPs.js";import"./index-pyCy64cM.js";const U=f(a({__name:"Subdomain",setup(a){const{t:f}=_(),{searchRegister:U}=j(),W=t([{field:"search",label:f("form.input"),component:"Input",formItemProps:{size:"large",style:{width:"100%"}},componentProps:{clearable:!1,slots:{suffix:()=>l(r,{class:"icon-button",onClick:T,text:!0,style:"outline: none;background-color: transparent !important; color: inherit !important; box-shadow: none !important;position: relative;left: 24%"},{default:()=>[l(o,{icon:"tdesign:chat-bubble-help"},null)]})}}}]),A=[{operator:"=",meaning:f("searchHelp.like")},{operator:"!=",meaning:f("searchHelp.notIn")},{operator:"==",meaning:f("searchHelp.equal")},{operator:"&&",meaning:f("searchHelp.and")},{operator:"||",meaning:f("searchHelp.or")},{operator:"()",meaning:f("searchHelp.brackets")}],N=[{keyword:"ip",example:'ip="192.168.2.1"',explain:f("searchHelp.ip")},{keyword:"domain",example:'domain="example.com"',explain:f("searchHelp.domain")},{keyword:"type",example:'type="CNAME"',explain:f("searchHelp.subdomainType")},{keyword:"value",example:'value="allcdn.example.com"',explain:f("searchHelp.subdoaminValue")},{keyword:"project",example:'project="Hackerone"',explain:f("searchHelp.project")}],V=s(!1),T=()=>{V.value=!0};i((()=>{M(),window.addEventListener("resize",M)}));const L=s(0),M=()=>{const e=window.innerHeight||document.documentElement.clientHeight;L.value=.7*e},q=s(!0),D=s("inline"),F=s("left"),$=s(""),B=e=>{$.value=e.search,le()},Q=s(!1),Y=t([{field:"index",label:f("tableDemo.index"),type:"index",minWidth:10},{field:"host",label:f("subdomain.subdomainName"),minWidth:50},{field:"type",label:f("subdomain.recordType"),minWidth:30},{field:"value",label:f("subdomain.recordValue"),minWidth:50,formatter:(e,a,t)=>{let l="";return t.forEach(((e,a)=>{l+=`${e}\r\n`})),l}},{field:"ip",label:"IP",minWidth:50,formatter:(e,a,t)=>{let l="";return t.forEach(((e,a)=>{l+=`${e}\r\n`})),l}},{field:"time",label:f("asset.time"),minWidth:60}]),{allSchemas:G}=C(Y),{tableRegister:J,tableState:K,tableMethods:X}=x({fetchDataApi:async()=>{const{currentPage:e,pageSize:a}=K,t=await R($.value,e.value,a.value);return{list:t.data.list,total:t.data.total}},immediate:!1}),{loading:Z,dataList:O,total:ee,currentPage:ae,pageSize:te}=K,{getList:le}=X;function oe(){return{background:"var(--el-fill-color-light)"}}return le(),(a,t)=>(n(),p(h,null,[l(u(e),{style:{height:"80px"}},{default:m((()=>[l(u(b),{schema:W,"is-col":q.value,layout:D.value,"show-reset":!1,"button-position":F.value,"search-loading":Q.value,onSearch:B,onReset:B,onRegister:u(U)},null,8,["schema","is-col","layout","button-position","search-loading","onRegister"])])),_:1}),l(u(S),null,{default:m((()=>[l(u(H),null,{default:m((()=>[l(u(y),{style:{height:"min-content"}},{default:m((()=>[l(u(w),{pageSize:u(te),"onUpdate:pageSize":t[0]||(t[0]=e=>d(te)?te.value=e:null),currentPage:u(ae),"onUpdate:currentPage":t[1]||(t[1]=e=>d(ae)?ae.value=e:null),columns:u(G).tableColumns,data:u(O),stripe:"","max-height":L.value,border:!0,loading:u(Z),resizable:!0,onRegister:u(J),headerCellStyle:oe,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),l(u(H),{":span":24},{default:m((()=>[l(u(y),null,{default:m((()=>[l(u(v),{pageSize:u(te),"onUpdate:pageSize":t[2]||(t[2]=e=>d(te)?te.value=e:null),currentPage:u(ae),"onUpdate:currentPage":t[3]||(t[3]=e=>d(ae)?ae.value=e:null),"page-sizes":[10,20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:u(ee)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1}),l(u(P),{modelValue:V.value,"onUpdate:modelValue":t[4]||(t[4]=e=>V.value=e),title:u(f)("common.querysyntax"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:m((()=>[l(u(S),null,{default:m((()=>[l(u(H),null,{default:m((()=>[l(u(E),{tag:"b",size:"small"},{default:m((()=>[c(g(u(f)("searchHelp.operator")),1)])),_:1}),l(u(I),{direction:"vertical"}),l(u(E),{size:"small",type:"danger"},{default:m((()=>[c(g(u(f)("searchHelp.notice")),1)])),_:1})])),_:1}),l(u(H),{style:{"margin-top":"10px"}},{default:m((()=>[l(u(k),{headerCellStyle:oe,data:A},{default:m((()=>[l(u(z),{prop:"operator",label:u(f)("searchHelp.operator"),width:"300"},null,8,["label"]),l(u(z),{prop:"meaning",label:u(f)("searchHelp.meaning")},null,8,["label"])])),_:1})])),_:1}),l(u(H),{style:{"margin-top":"15px"}},{default:m((()=>[l(u(E),{tag:"b",size:"small"},{default:m((()=>[c(g(u(f)("searchHelp.keywords")),1)])),_:1})])),_:1}),l(u(H),{style:{"margin-top":"10px"}},{default:m((()=>[l(u(k),{headerCellStyle:oe,data:N},{default:m((()=>[l(u(z),{prop:"keyword",label:u(f)("searchHelp.keywords")},null,8,["label"]),l(u(z),{prop:"example",label:u(f)("searchHelp.example")},null,8,["label"]),l(u(z),{prop:"explain",label:u(f)("searchHelp.explain")},null,8,["label"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","title"])],64))}}),[["__scopeId","data-v-8b64f57b"]]);export{U as default};
