import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CoYqT830.js";import{d as o,l,N as t,r as a,U as i,o as r,c as s,e as n,w as m,H as p,t as c,a as u,Q as d,_ as f}from"./index-ubEX2FhK.js";import{_ as h}from"./Search.vue_vue_type_script_setup_true_lang-Cccs-j6f.js";import{g as v}from"./index-B7DM_q8o.js";import{u as b}from"./useSearch-2KwSp95m.js";import"./el-card-BeFjUUyC.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-BDTZ23-W.js";import"./useForm-BBW1aIz_.js";import"./el-form-item-D5Du7KCs.js";import"./castArray-QVB7Iual.js";import"./el-col-DkkgfGah.js";import"./el-tag-BH3jtqzv.js";import"./el-checkbox-BTlumLVj.js";import"./useInput-DtyvbpoF.js";import"./debounce-BVe-Ub-q.js";import"./el-radio-group-CsrhsQ2t.js";/* empty css                          */import"./el-input-number-Cx2WNOZJ.js";import"./el-pagination-qAkOkq_g.js";import"./el-select-v2-RVcLgOup.js";import"./raf-t7Eg7mSF.js";import"./el-switch-DvAokmWF.js";import"./el-divider-JTSpcwM1.js";import"./el-progress-DPxR-IZy.js";import"./InputPassword-BiW_HXnZ.js";import"./style.css_vue_type_style_index_0_src_true_lang-DkJA8ZlR.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-vm1MDFCV.js";import"./IconPicker-D7JyD5hI.js";/* empty css                   */import"./el-tab-pane-BOzRAf4Z.js";import"./tsxHelper-B2w2bZm3.js";import"./index-C1FRAfEi.js";import"./useIcon-NPotYW8F.js";import"./index-CZZ6X4Zq.js";const _=f(o({__name:"Search",setup(o){const{t:f}=l(),{searchRegister:_,searchMethods:D}=b(),{setSchema:j,setProps:g,setValues:k}=D,I=[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}],y=t([{field:"field1",label:f("formDemo.input"),component:"Input"},{field:"field2",label:f("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}],on:{change:e=>{}}}},{field:"field3",label:f("formDemo.radio"),component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field5",component:"DatePicker",label:f("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:f("formDemo.timeSelect")},{field:"field8",label:f("formDemo.input"),component:"Input"},{field:"field9",label:f("formDemo.input"),component:"Input"},{field:"field10",label:f("formDemo.input"),component:"Input"},{field:"field11",label:f("formDemo.input"),component:"Input"},{field:"field12",label:f("formDemo.input"),component:"Input"},{field:"field13",label:f("formDemo.input"),component:"Input"},{field:"field14",label:f("formDemo.input"),component:"Input"},{field:"field15",label:f("formDemo.input"),component:"Input"},{field:"field16",label:f("formDemo.input"),component:"Input"},{field:"field17",label:f("formDemo.input"),component:"Input"},{field:"field18",label:f("formDemo.input"),component:"Input"},{field:"field19",label:`${f("formDemo.treeSelect")}`,component:"TreeSelect",optionApi:async()=>await new Promise((e=>{setTimeout((()=>{e(I)}),3e3)}))}]),C=a(!1),w=e=>{g({isCol:e})},x=a("inline"),L=()=>{x.value="inline"===u(x)?"bottom":"inline"},S=a("left"),P=e=>{x.value="bottom",S.value=e},R=async()=>{const e=await v();e&&j([{field:"field2",path:"componentProps.options",value:e.data}])},T=e=>{},A=()=>{j([{field:"field3",path:"remove",value:!0}])},B=()=>{j([{field:"field3",path:"remove",value:!1}])},$=()=>{k({field1:"Joy"})},E=a(!1),G=()=>{E.value=!0,setTimeout((()=>{E.value=!1}),2e3)},H=a(!1),J=()=>{H.value=!0,setTimeout((()=>{H.value=!1}),2e3)};return(o,l)=>{const t=i("BaseButton");return r(),s(d,null,[n(u(e),{title:`${u(f)("searchDemo.search")} ${u(f)("searchDemo.operate")}`,style:{"margin-bottom":"20px"}},{default:m((()=>[n(t,{onClick:l[0]||(l[0]=e=>w(!0))},{default:m((()=>[p(c(u(f)("searchDemo.grid")),1)])),_:1}),n(t,{onClick:l[1]||(l[1]=e=>w(!1))},{default:m((()=>[p(c(u(f)("searchDemo.restore"))+" "+c(u(f)("searchDemo.grid")),1)])),_:1}),n(t,{onClick:L},{default:m((()=>[p(c(u(f)("searchDemo.button"))+" "+c(u(f)("searchDemo.position")),1)])),_:1}),n(t,{onClick:l[2]||(l[2]=e=>P("left"))},{default:m((()=>[p(c(u(f)("searchDemo.bottom"))+" "+c(u(f)("searchDemo.position"))+"-"+c(u(f)("searchDemo.left")),1)])),_:1}),n(t,{onClick:l[3]||(l[3]=e=>P("center"))},{default:m((()=>[p(c(u(f)("searchDemo.bottom"))+" "+c(u(f)("searchDemo.position"))+"-"+c(u(f)("searchDemo.center")),1)])),_:1}),n(t,{onClick:l[4]||(l[4]=e=>P("right"))},{default:m((()=>[p(c(u(f)("searchDemo.bottom"))+" "+c(u(f)("searchDemo.position"))+"-"+c(u(f)("searchDemo.right")),1)])),_:1}),n(t,{onClick:R},{default:m((()=>[p(c(u(f)("formDemo.select"))+" "+c(u(f)("searchDemo.dynamicOptions")),1)])),_:1}),n(t,{onClick:A},{default:m((()=>[p(c(u(f)("searchDemo.deleteRadio")),1)])),_:1}),n(t,{onClick:B},{default:m((()=>[p(c(u(f)("searchDemo.restoreRadio")),1)])),_:1}),n(t,{onClick:$},{default:m((()=>[p(c(u(f)("formDemo.setValue")),1)])),_:1}),n(t,{onClick:G},{default:m((()=>[p(c(u(f)("searchDemo.search"))+" "+c(u(f)("searchDemo.loading")),1)])),_:1}),n(t,{onClick:J},{default:m((()=>[p(c(u(f)("searchDemo.reset"))+" "+c(u(f)("searchDemo.loading")),1)])),_:1})])),_:1},8,["title"]),n(u(e),{title:u(f)("searchDemo.search"),message:u(f)("searchDemo.searchDes")},{default:m((()=>[n(u(h),{schema:y,"is-col":C.value,layout:x.value,"button-position":S.value,"search-loading":E.value,"reset-loading":H.value,"show-expand":"","expand-field":"field6",onSearch:T,onReset:T,onRegister:u(_)},null,8,["schema","is-col","layout","button-position","search-loading","reset-loading","onRegister"])])),_:1},8,["title","message"])],64)}}}),[["__scopeId","data-v-f1ee1ca7"]]);export{_ as default};