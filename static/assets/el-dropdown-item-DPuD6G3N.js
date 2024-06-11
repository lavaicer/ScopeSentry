import{s as e,a7 as o,aT as n,L as t,d as l,r,af as a,B as i,ae as s,bZ as d,bm as u,a as c,a3 as p,bv as f,J as v,U as m,o as g,i as b,w,e as h,b_ as I,b$ as y,aC as E,aO as F,I as C,E as R,D as k,aW as T,aZ as _,A as S,z as x,C as B,P as D,aS as $,c as P,aF as K,K as M,n as L,j as G,f as O,G as z,aj as A,Q as j,c0 as H,F as N,M as U,al as J}from"./index-CbsoNNgc.js";import{c as W,E as Y,O as Z,w as Q}from"./el-popper-_HbrF1jO.js";import{d as V,e as q,f as X,g as ee,C as oe,h as ne,i as te,j as le,k as re,F as ae,L as ie}from"./el-pagination-B4Yv1h_7.js";import{c as se}from"./castArray-DuA9ouXu.js";import{c as de}from"./refs-Bj8u2PxR.js";const ue=e({style:{type:o([String,Array,Object])},currentTabId:{type:o(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:o(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:ce,ElCollectionItem:pe,COLLECTION_INJECTION_KEY:fe,COLLECTION_ITEM_INJECTION_KEY:ve}=V("RovingFocusGroup"),me=Symbol("elRovingFocusGroup"),ge=Symbol("elRovingFocusGroupItem"),be={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},we=(e,o,t)=>{const l=((e,o)=>{if("rtl"!==o)return e;switch(e){case n.right:return n.left;case n.left:return n.right;default:return e}})(e.key,t);if(!("vertical"===o&&[n.left,n.right].includes(l)||"horizontal"===o&&[n.up,n.down].includes(l)))return be[l]},he=e=>{const{activeElement:o}=document;for(const n of e){if(n===o)return;if(n.focus(),o!==document.activeElement)return}},Ie="currentTabIdChange",ye="rovingFocusGroup.entryFocus",Ee={bubbles:!1,cancelable:!0},Fe=l({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:ue,emits:[Ie,"entryFocus"],setup(e,{emit:o}){var n;const t=r(null!=(n=e.currentTabId||e.defaultCurrentTabId)?n:null),l=r(!1),v=r(!1),m=r(null),{getItems:g}=a(fe,void 0),b=i((()=>[{outline:"none"},e.style])),w=W((o=>{var n;null==(n=e.onMousedown)||n.call(e,o)}),(()=>{v.value=!0})),h=W((o=>{var n;null==(n=e.onFocus)||n.call(e,o)}),(e=>{const o=!c(v),{target:n,currentTarget:r}=e;if(n===r&&o&&!c(l)){const e=new Event(ye,Ee);if(null==r||r.dispatchEvent(e),!e.defaultPrevented){const e=g().filter((e=>e.focusable)),o=[e.find((e=>e.active)),e.find((e=>e.id===c(t))),...e].filter(Boolean).map((e=>e.ref));he(o)}}v.value=!1})),I=W((o=>{var n;null==(n=e.onBlur)||n.call(e,o)}),(()=>{l.value=!1}));s(me,{currentTabbedId:d(t),loop:u(e,"loop"),tabIndex:i((()=>c(l)?-1:0)),rovingFocusGroupRef:m,rovingFocusGroupRootStyle:b,orientation:u(e,"orientation"),dir:u(e,"dir"),onItemFocus:e=>{o(Ie,e)},onItemShiftTab:()=>{l.value=!0},onBlur:I,onFocus:h,onMousedown:w}),p((()=>e.currentTabId),(e=>{t.value=null!=e?e:null})),f(m,ye,((...e)=>{o("entryFocus",...e)}))}});var Ce=t(l({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:ce,ElRovingFocusGroupImpl:t(Fe,[["render",function(e,o,n,t,l,r){return v(e.$slots,"default")}],["__file","roving-focus-group-impl.vue"]])}}),[["render",function(e,o,n,t,l,r){const a=m("el-roving-focus-group-impl"),i=m("el-focus-group-collection");return g(),b(i,null,{default:w((()=>[h(a,I(y(e.$attrs)),{default:w((()=>[v(e.$slots,"default")])),_:3},16)])),_:3})}],["__file","roving-focus-group.vue"]]);var Re=t(l({components:{ElRovingFocusCollectionItem:pe},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:t,loop:l,onItemFocus:d,onItemShiftTab:u}=a(me,void 0),{getItems:p}=a(fe,void 0),f=E(),v=r(null),m=W((e=>{o("mousedown",e)}),(o=>{e.focusable?d(c(f)):o.preventDefault()})),g=W((e=>{o("focus",e)}),(()=>{d(c(f))})),b=W((e=>{o("keydown",e)}),(e=>{const{key:o,shiftKey:t,target:r,currentTarget:a}=e;if(o===n.tab&&t)return void u();if(r!==a)return;const i=we(e);if(i){e.preventDefault();let o=p().filter((e=>e.focusable)).map((e=>e.ref));switch(i){case"last":o.reverse();break;case"prev":case"next":{"prev"===i&&o.reverse();const e=o.indexOf(a);o=l.value?(d=e+1,(s=o).map(((e,o)=>s[(o+d)%s.length]))):o.slice(e+1);break}}F((()=>{he(o)}))}var s,d})),w=i((()=>t.value===c(f)));return s(ge,{rovingFocusGroupItemRef:v,tabIndex:i((()=>c(w)?0:-1)),handleMousedown:m,handleFocus:g,handleKeydown:b}),{id:f,handleKeydown:b,handleFocus:g,handleMousedown:m}}}),[["render",function(e,o,n,t,l,r){const a=m("el-roving-focus-collection-item");return g(),b(a,{id:e.id,focusable:e.focusable,active:e.active},{default:w((()=>[v(e.$slots,"default")])),_:3},8,["id","focusable","active"])}],["__file","roving-focus-item.vue"]]);const ke=Symbol("elDropdown"),{ButtonGroup:Te}=C;var _e=t(l({name:"ElDropdown",components:{ElButton:C,ElButtonGroup:Te,ElScrollbar:R,ElDropdownCollection:q,ElTooltip:Y,ElRovingFocusGroup:Ce,ElOnlyChild:Z,ElIcon:k,ArrowDown:T},props:X,emits:["visible-change","click","command"],setup(e,{emit:o}){const t=_(),l=S("dropdown"),{t:a}=x(),d=r(),f=r(),v=r(null),m=r(null),g=r(null),b=r(null),w=r(!1),h=[n.enter,n.space,n.down],I=i((()=>({maxHeight:B(e.maxHeight)}))),y=i((()=>[l.m(T.value)])),F=i((()=>se(e.trigger))),C=E().value,R=i((()=>e.id||C));function k(){var e;null==(e=v.value)||e.onClose()}p([d,F],(([e,o],[n])=>{var t,l,r;(null==(t=null==n?void 0:n.$el)?void 0:t.removeEventListener)&&n.$el.removeEventListener("pointerenter",P),(null==(l=null==e?void 0:e.$el)?void 0:l.removeEventListener)&&e.$el.removeEventListener("pointerenter",P),(null==(r=null==e?void 0:e.$el)?void 0:r.addEventListener)&&o.includes("hover")&&e.$el.addEventListener("pointerenter",P)}),{immediate:!0}),D((()=>{var e,o;(null==(o=null==(e=d.value)?void 0:e.$el)?void 0:o.removeEventListener)&&d.value.$el.removeEventListener("pointerenter",P)}));const T=$();function P(){var e,o;null==(o=null==(e=d.value)?void 0:e.$el)||o.focus()}s(ke,{contentRef:m,role:i((()=>e.role)),triggerId:R,isUsingKeyboard:w,onItemEnter:function(){},onItemLeave:function(){const e=c(m);F.value.includes("hover")&&(null==e||e.focus()),b.value=null}}),s("elDropdown",{instance:t,dropdownSize:T,handleClick:function(){k()},commandHandler:function(...e){o("command",...e)},trigger:u(e,"trigger"),hideOnClick:u(e,"hideOnClick")});return{t:a,ns:l,scrollbar:g,wrapStyle:I,dropdownTriggerKls:y,dropdownSize:T,triggerId:R,triggerKeys:h,currentTabId:b,handleCurrentTabIdChange:function(e){b.value=e},handlerMainButtonClick:e=>{o("click",e)},handleEntryFocus:function(e){w.value||(e.preventDefault(),e.stopImmediatePropagation())},handleClose:k,handleOpen:function(){var e;null==(e=v.value)||e.onOpen()},handleBeforeShowTooltip:function(){o("visible-change",!0)},handleShowTooltip:function(e){"keydown"===(null==e?void 0:e.type)&&m.value.focus()},handleBeforeHideTooltip:function(){o("visible-change",!1)},onFocusAfterTrapped:e=>{var o,n;e.preventDefault(),null==(n=null==(o=m.value)?void 0:o.focus)||n.call(o,{preventScroll:!0})},popperRef:v,contentRef:m,triggeringElementRef:d,referenceElementRef:f}}}),[["render",function(e,o,n,t,l,r){var a;const i=m("el-dropdown-collection"),s=m("el-roving-focus-group"),d=m("el-scrollbar"),u=m("el-only-child"),c=m("el-tooltip"),p=m("el-button"),f=m("arrow-down"),I=m("el-icon"),y=m("el-button-group");return g(),P("div",{class:L([e.ns.b(),e.ns.is("disabled",e.disabled)])},[h(c,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":"hover"===e.trigger?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":null==(a=e.referenceElementRef)?void 0:a.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":"hover"===e.trigger?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},K({content:w((()=>[h(d,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:w((()=>[h(s,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:w((()=>[h(i,null,{default:w((()=>[v(e.$slots,"dropdown")])),_:3})])),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])])),_:3},8,["wrap-style","view-class"])])),_:2},[e.splitButton?void 0:{name:"default",fn:w((()=>[h(u,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:w((()=>[v(e.$slots,"default")])),_:3},8,["id","tabindex"])]))}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(g(),b(y,{key:0},{default:w((()=>[h(p,M({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:w((()=>[v(e.$slots,"default")])),_:3},16,["size","type","disabled","tabindex","onClick"]),h(p,M({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:w((()=>[h(I,{class:L(e.ns.e("icon"))},{default:w((()=>[h(f)])),_:1},8,["class"])])),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])])),_:3})):G("v-if",!0)],2)}],["__file","dropdown.vue"]]);const Se=l({name:"DropdownItemImpl",components:{ElIcon:k},props:ee,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const t=S("dropdown"),{role:l}=a(ke,void 0),{collectionItemRef:r}=a(oe,void 0),{collectionItemRef:s}=a(ve,void 0),{rovingFocusGroupItemRef:d,tabIndex:u,handleFocus:c,handleKeydown:p,handleMousedown:f}=a(ge,void 0),v=de(r,s,d),m=i((()=>"menu"===l.value?"menuitem":"navigation"===l.value?"link":"button")),g=W((e=>{const{code:t}=e;if(t===n.enter||t===n.space)return e.preventDefault(),e.stopImmediatePropagation(),o("clickimpl",e),!0}),p);return{ns:t,itemRef:v,dataset:{[ne]:""},role:m,tabIndex:u,handleFocus:c,handleKeydown:g,handleMousedown:f}}}),xe=["aria-disabled","tabindex","role"];const Be=()=>{const e=a("elDropdown",{}),o=i((()=>null==e?void 0:e.dropdownSize));return{elDropdown:e,_elDropdownSize:o}};var De=t(l({name:"ElDropdownItem",components:{ElDropdownCollectionItem:te,ElRovingFocusItem:Re,ElDropdownItemImpl:t(Se,[["render",function(e,o,n,t,l,r){const a=m("el-icon");return g(),P(j,null,[e.divided?(g(),P("li",M({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):G("v-if",!0),O("li",M({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=o=>e.$emit("clickimpl",o)),onFocus:o[1]||(o[1]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onKeydown:o[2]||(o[2]=A(((...o)=>e.handleKeydown&&e.handleKeydown(...o)),["self"])),onMousedown:o[3]||(o[3]=(...o)=>e.handleMousedown&&e.handleMousedown(...o)),onPointermove:o[4]||(o[4]=o=>e.$emit("pointermove",o)),onPointerleave:o[5]||(o[5]=o=>e.$emit("pointerleave",o))}),[e.icon?(g(),b(a,{key:0},{default:w((()=>[(g(),b(z(e.icon)))])),_:1})):G("v-if",!0),v(e.$slots,"default")],16,xe)],64)}],["__file","dropdown-item-impl.vue"]])},inheritAttrs:!1,props:ee,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:n}){const{elDropdown:t}=Be(),l=_(),s=r(null),d=i((()=>{var e,o;return null!=(o=null==(e=c(s))?void 0:e.textContent)?o:""})),{onItemEnter:u,onItemLeave:p}=a(ke,void 0),f=W((e=>(o("pointermove",e),e.defaultPrevented)),Q((o=>{if(e.disabled)return void p(o);const n=o.currentTarget;n===document.activeElement||n.contains(document.activeElement)||(u(o),o.defaultPrevented||null==n||n.focus())}))),v=W((e=>(o("pointerleave",e),e.defaultPrevented)),Q((e=>{p(e)})));return{handleClick:W((n=>{if(!e.disabled)return o("click",n),"keydown"!==n.type&&n.defaultPrevented}),(o=>{var n,r,a;e.disabled?o.stopImmediatePropagation():((null==(n=null==t?void 0:t.hideOnClick)?void 0:n.value)&&(null==(r=t.handleClick)||r.call(t)),null==(a=t.commandHandler)||a.call(t,e.command,l,o))})),handlePointerMove:f,handlePointerLeave:v,textContent:d,propsAndAttrs:i((()=>({...e,...n})))}}}),[["render",function(e,o,n,t,l,r){var a;const i=m("el-dropdown-item-impl"),s=m("el-roving-focus-item"),d=m("el-dropdown-collection-item");return g(),b(d,{disabled:e.disabled,"text-value":null!=(a=e.textValue)?a:e.textContent},{default:w((()=>[h(s,{focusable:!e.disabled},{default:w((()=>[h(i,M(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:w((()=>[v(e.$slots,"default")])),_:3},16,["onPointerleave","onPointermove","onClickimpl"])])),_:3},8,["focusable"])])),_:3},8,["disabled","text-value"])}],["__file","dropdown-item.vue"]]);const $e=l({name:"ElDropdownMenu",props:le,setup(e){const o=S("dropdown"),{_elDropdownSize:t}=Be(),l=t.value,{focusTrapRef:r,onKeydown:s}=a(H,void 0),{contentRef:d,role:u,triggerId:p}=a(ke,void 0),{collectionRef:f,getItems:v}=a(re,void 0),{rovingFocusGroupRef:m,rovingFocusGroupRootStyle:g,tabIndex:b,onBlur:w,onFocus:h,onMousedown:I}=a(me,void 0),{collectionRef:y}=a(fe,void 0),E=i((()=>[o.b("menu"),o.bm("menu",null==l?void 0:l.value)])),F=de(d,f,r,m,y),C=W((o=>{var n;null==(n=e.onKeydown)||n.call(e,o)}),(e=>{const{currentTarget:o,code:t,target:l}=e;if(o.contains(l),n.tab===t&&e.stopImmediatePropagation(),e.preventDefault(),l!==c(d))return;if(!ae.includes(t))return;const r=v().filter((e=>!e.disabled)).map((e=>e.ref));ie.includes(t)&&r.reverse(),he(r)}));return{size:l,rovingFocusGroupRootStyle:g,tabIndex:b,dropdownKls:E,role:u,triggerId:p,dropdownListWrapperRef:F,handleKeydown:e=>{C(e),s(e)},onBlur:w,onFocus:h,onMousedown:I}}}),Pe=["role","aria-labelledby"];var Ke=t($e,[["render",function(e,o,n,t,l,r){return g(),P("ul",{ref:e.dropdownListWrapperRef,class:L(e.dropdownKls),style:N(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...o)=>e.onBlur&&e.onBlur(...o)),onFocus:o[1]||(o[1]=(...o)=>e.onFocus&&e.onFocus(...o)),onKeydown:o[2]||(o[2]=A(((...o)=>e.handleKeydown&&e.handleKeydown(...o)),["self"])),onMousedown:o[3]||(o[3]=A(((...o)=>e.onMousedown&&e.onMousedown(...o)),["self"]))},[v(e.$slots,"default")],46,Pe)}],["__file","dropdown-menu.vue"]]);const Me=U(_e,{DropdownItem:De,DropdownMenu:Ke}),Le=J(De),Ge=J(Ke);export{Ge as E,Me as a,Le as b};
