import{r as a}from"./index-pyCy64cM.js";const e=(e,s,t)=>a.post({url:"/api/asset/data",data:{search:e,pageIndex:s,pageSize:t}}),s=e=>a.post({url:"/api/asset/statistics2",data:{search:e}}),t=e=>a.post({url:"/api/asset/detail",data:{id:e}}),p=(e,s,t)=>a.post({url:"/api/subdomain/data",data:{search:e,pageIndex:s,pageSize:t}}),i=(e,s,t)=>a.post({url:"/api/url/data",data:{search:e,pageIndex:s,pageSize:t}}),d=(e,s,t)=>a.post({url:"/api/crawler/data",data:{search:e,pageIndex:s,pageSize:t}}),r=(e,s,t)=>a.post({url:"/api/sensitive/result/data",data:{search:e,pageIndex:s,pageSize:t}}),o=e=>a.post({url:"/api/sensitive/result/body",data:{id:e}}),g=(e,s,t)=>a.post({url:"/api/dirscan/result/data",data:{search:e,pageIndex:s,pageSize:t}}),l=(e,s,t)=>a.post({url:"/api/page/monitoring/result",data:{search:e,pageIndex:s,pageSize:t}}),n=(e,s)=>a.post({url:"/api/page/monitoring/response",data:{id:e,flag:s}}),u=e=>a.post({url:"/api/page/monitoring/history/diff",data:{id:e}}),c=(e,s,t)=>a.post({url:"/api/subdomaintaker/data",data:{search:e,pageIndex:s,pageSize:t}});export{e as a,s as b,d as c,g as d,n as e,u as f,t as g,l as h,o as i,r as j,p as k,c as l,i as m};
