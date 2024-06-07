import{d as t,s as e,v as n,I as r,o as i,i as o,a,l as p}from"./index-KWTKF9N9.js";import{_ as l}from"./Table.vue_vue_type_script_lang-iUd8q4UT.js";import{f as s}from"./index-8Y4g3RH2.js";import{u as c}from"./useTable-CuwOU5m7.js";import{E as d}from"./el-tag-MzjVikBY.js";import"./el-tooltip-w40geAFS.js";import{E as m}from"./el-popper-pnFa2Ecw.js";const u=t({__name:"ProgressInfo",props:{closeDialog:{type:Function},getProgressInfoID:{},getProgressInfotype:{},getProgressInforunnerid:{}},setup(t){const{t:u}=p(),f=t,v=e([{field:"target",label:u("task.taskTarget"),minWidth:40},{field:"subdomain",label:u("subdomain.subdomainName"),minWidth:30,formatter:(t,e,i)=>{if(3==i.length)return n(r,{icon:"ph:prohibit"});if(""==i[0])return"-";let o="";return o+=`<div>Start:${i[0]}</div>`,o+=`<div>End:${i[1]}</div>`,""!=i[0]&&""!=i[1]?n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"success"},(()=>"Done")))):n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"primary"},(()=>"Running"))))}},{field:"subdomainTakeover",label:u("task.subdomainTakeover"),minWidth:30,formatter:(t,e,i)=>{if(3==i.length)return n(r,{icon:"ph:prohibit"});if(""==i[0])return"-";let o="";return o+=`<div>Start:${i[0]}</div>`,o+=`<div>End:${i[1]}</div>`,""!=i[0]&&""!=i[1]?n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"success"},(()=>"Done")))):n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"primary"},(()=>"Running"))))}},{field:"portScan",label:u("task.portScan"),minWidth:30,formatter:(t,e,i)=>{if(3==i.length)return n(r,{icon:"ph:prohibit"});if(""==i[0])return"-";let o="";return o+=`<div>Start:${i[0]}</div>`,o+=`<div>End:${i[1]}</div>`,""!=i[0]&&""!=i[1]?n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"success"},(()=>"Done")))):n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"primary"},(()=>"Running"))))}},{field:"assetMapping",label:u("task.assetMapping"),minWidth:30,formatter:(t,e,i)=>{if(3==i.length)return n(r,{icon:"ph:prohibit"});if(""==i[0])return"-";let o="";return o+=`<div>Start:${i[0]}</div>`,o+=`<div>End:${i[1]}</div>`,""!=i[0]&&""!=i[1]?n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"success"},(()=>"Done")))):n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"primary"},(()=>"Running"))))}},{field:"urlScan",label:u("task.url"),minWidth:30,formatter:(t,e,i)=>{if(3==i.length)return n(r,{icon:"ph:prohibit"});if(""==i[0])return"-";let o="";return o+=`<div>Start:${i[0]}</div>`,o+=`<div>End:${i[1]}</div>`,""!=i[0]&&""!=i[1]?n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"success"},(()=>"Done")))):n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"primary"},(()=>"Running"))))}},{field:"sensitive",label:u("sensitiveInformation.sensitiveInformationName"),minWidth:30,formatter:(t,e,i)=>{if(3==i.length)return n(r,{icon:"ph:prohibit"});if(""==i[0])return"-";let o="";return o+=`<div>Start:${i[0]}</div>`,o+=`<div>End:${i[1]}</div>`,""!=i[0]&&""!=i[1]?n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"success"},(()=>"Done")))):n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"primary"},(()=>"Running"))))}},{field:"crawler",label:u("crawler.crawlerName"),minWidth:30,formatter:(t,e,i)=>{if(3==i.length)return n(r,{icon:"ph:prohibit"});if(""==i[0])return"-";let o="";return o+=`<div>Start:${i[0]}</div>`,o+=`<div>End:${i[1]}</div>`,""!=i[0]&&""!=i[1]?n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"success"},(()=>"Done")))):n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"primary"},(()=>"Running"))))}},{field:"dirScan",label:u("dirScan.dirScanName"),minWidth:30,formatter:(t,e,i)=>{if(3==i.length)return n(r,{icon:"ph:prohibit"});if(""==i[0])return"-";let o="";return o+=`<div>Start:${i[0]}</div>`,o+=`<div>End:${i[1]}</div>`,""!=i[0]&&""!=i[1]?n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"success"},(()=>"Done")))):n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"primary"},(()=>"Running"))))}},{field:"vulnerability",label:u("task.vulScan"),minWidth:30,formatter:(t,e,i)=>{if(3==i.length)return n(r,{icon:"ph:prohibit"});if(""==i[0])return"-";let o="";return o+=`<div>Start:${i[0]}</div>`,o+=`<div>End:${i[1]}</div>`,""!=i[0]&&""!=i[1]?n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"success"},(()=>"Done")))):n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"primary"},(()=>"Running"))))}},{field:"all",label:"All",minWidth:30,formatter:(t,e,i)=>{if(3==i.length)return n(r,{icon:"ph:prohibit"});if(""==i[0])return"-";let o="";return o+=`<div>Start:${i[0]}</div>`,o+=`<div>End:${i[1]}</div>`,""!=i[0]&&""!=i[1]?n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"success"},(()=>"Done")))):n(m,{content:o,placement:"top",rawContent:!0},(()=>n(d,{type:"primary"},(()=>"Running"))))}}]),{tableRegister:g,tableState:h,tableMethods:y}=c({fetchDataApi:async()=>{const t=await s(f.getProgressInfoID,f.getProgressInfotype,f.getProgressInforunnerid);return{total:t.data.total,list:t.data.list}},immediate:!1}),{dataList:b}=h,{getList:w}=y;return w(),(t,e)=>(i(),o(a(l),{onRegister:a(g),columns:v,data:a(b),"max-height":"500",style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["onRegister","columns","data"]))}});export{u as _};