import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CoYqT830.js";import{d as t,l as i,r as a,o as l,i as o,w as r,e as s,a as p}from"./index-ubEX2FhK.js";import{_ as m}from"./Table.vue_vue_type_script_lang-D1Qh8XyS.js";import{a as d}from"./index-CrvEN7e-.js";import"./el-card-BeFjUUyC.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-BDTZ23-W.js";import"./el-checkbox-BTlumLVj.js";import"./useInput-DtyvbpoF.js";import"./debounce-BVe-Ub-q.js";import"./el-tag-BH3jtqzv.js";import"./el-pagination-qAkOkq_g.js";import"./el-image-viewer-B2EERH4x.js";import"./tsxHelper-B2w2bZm3.js";import"./el-dropdown-item-DKIl88b7.js";import"./castArray-QVB7Iual.js";import"./refs-BBDhzfVg.js";import"./index-CsSHR5aA.js";import"./raf-t7Eg7mSF.js";import"./index-CZZ6X4Zq.js";const n=t({__name:"TableVideoPreview",setup(t){const{t:n}=i(),u=[{field:"title",label:n("tableDemo.title")},{field:"video_uri",label:n("tableDemo.videoPreview")},{field:"author",label:n("tableDemo.author")},{field:"display_time",label:n("tableDemo.displayTime")},{field:"pageviews",label:n("tableDemo.pageviews")}],j=a(!0);let _=a([]);return(async e=>{const t=await d(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{j.value=!1}));t&&(_.value=t.data.list)})(),(t,i)=>(l(),o(p(e),{title:p(n)("router.PicturePreview")},{default:r((()=>[s(p(m),{columns:u,data:p(_),loading:j.value,preview:["image_uri","video_uri"]},null,8,["data","loading"])])),_:1},8,["title"]))}});export{n as default};