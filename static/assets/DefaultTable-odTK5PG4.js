import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-B4sinkeh.js";import{d as t,l as a,O as o,e as l,X as i,r as s,o as r,i as p,w as m,a as n,a0 as d}from"./index-CbsoNNgc.js";import{_ as c}from"./Table.vue_vue_type_script_lang-DVJWTuWi.js";import{a as b}from"./index-CFMGy_6e.js";import{E as u}from"./el-tag-7Tafez-0.js";import"./el-card-Bu1pgq7H.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-_HbrF1jO.js";import"./el-checkbox-BX9zfJQq.js";import"./useInput-Kf9RVEEH.js";import"./debounce-wcc1GRYs.js";import"./el-pagination-B4Yv1h_7.js";import"./el-image-viewer-BySdG1W0.js";import"./tsxHelper-Cn8_hiAG.js";import"./el-dropdown-item-DPuD6G3N.js";import"./castArray-DuA9ouXu.js";import"./refs-Bj8u2PxR.js";import"./index-Dh6wrwZi.js";import"./raf-C-vZNDhD.js";import"./index-pyCy64cM.js";const j=t({__name:"DefaultTable",setup(t){const{t:j}=a(),f=[{field:"title",label:j("tableDemo.title")},{field:"author",label:j("tableDemo.author")},{field:"display_time",label:j("tableDemo.displayTime"),sortable:!0},{field:"importance",label:j("tableDemo.importance"),formatter:(e,t,a)=>o(u,{type:1===a?"success":2===a?"warning":"danger"},(()=>j(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:j("tableDemo.pageviews")},{field:"action",label:j("tableDemo.action"),slots:{default:e=>{let t;return l(i,{type:"primary",onClick:()=>y(e)},"function"==typeof(a=t=j("tableDemo.action"))||"[object Object]"===Object.prototype.toString.call(a)&&!d(a)?t:{default:()=>[t]});var a}}}],g=s(!0);let _=s([]);(async e=>{const t=await b(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{g.value=!1}));t&&(_.value=t.data.list)})();const y=e=>{};return(t,a)=>(r(),p(n(e),{title:n(j)("tableDemo.table"),message:n(j)("tableDemo.tableDes")},{default:m((()=>[l(n(c),{columns:f,data:n(_),loading:g.value,defaultSort:{prop:"display_time",order:"descending"}},null,8,["data","loading"])])),_:1},8,["title","message"]))}});export{j as default};
