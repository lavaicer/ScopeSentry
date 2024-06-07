import{U as e,bo as o,d as l,aH as a,a5 as s,bY as t,a3 as n,du as r,o as i,c,f as d,R as u,n as f,a as p,t as v,e as y,w as m,i as g,aO as b,a8 as h,j as C,aw as x,a4 as k,dv as A,V as $,X as w,b2 as B,aV as F,c6 as I,au as R,r as _,dw as D,b9 as S,dx as H,O as L,aJ as O,H as E,dy as M,dz as T,a_ as z,bi as j,cg as P,a2 as V,a1 as q,D as N,dq as U,c7 as J,ay as K,az as Q,ab as X,h as Y,c8 as Z,dA as G,ac as W,Q as ee,cC as oe,B as le,as as ae,y as se,E as te}from"./index-KWTKF9N9.js";import{c as ne}from"./refs-WVQk01D0.js";import{i as re}from"./el-popper-pnFa2Ecw.js";const ie=Symbol("dialogInjectionKey"),ce=e({center:Boolean,alignCenter:Boolean,closeIcon:{type:o},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),de=["aria-level"],ue=["aria-label"],fe=["id"],pe=l({name:"ElDialogContent"});var ve=k(l({...pe,props:ce,emits:{close:()=>!0},setup(e){const o=e,{t:l}=a(),{Close:k}=A,{dialogRef:$,headerRef:w,bodyId:B,ns:F,style:I}=s(ie),{focusTrapRef:R}=s(t),_=n((()=>[F.b(),F.is("fullscreen",o.fullscreen),F.is("draggable",o.draggable),F.is("align-center",o.alignCenter),{[F.m("center")]:o.center},o.customClass])),D=ne(R,$),S=n((()=>o.draggable));return r($,w,S),(e,o)=>(i(),c("div",{ref:p(D),class:f(p(_)),style:x(p(I)),tabindex:"-1"},[d("header",{ref_key:"headerRef",ref:w,class:f(p(F).e("header"))},[u(e.$slots,"header",{},(()=>[d("span",{role:"heading","aria-level":e.ariaLevel,class:f(p(F).e("title"))},v(e.title),11,de)])),e.showClose?(i(),c("button",{key:0,"aria-label":p(l)("el.dialog.close"),class:f(p(F).e("headerbtn")),type:"button",onClick:o[0]||(o[0]=o=>e.$emit("close"))},[y(p(h),{class:f(p(F).e("close"))},{default:m((()=>[(i(),g(b(e.closeIcon||p(k))))])),_:1},8,["class"])],10,ue)):C("v-if",!0)],2),d("div",{id:p(B),class:f(p(F).e("body"))},[u(e.$slots,"default")],10,fe),e.$slots.footer?(i(),c("footer",{key:0,class:f(p(F).e("footer"))},[u(e.$slots,"footer")],2)):C("v-if",!0)],6))}}),[["__file","dialog-content.vue"]]);const ye=e({...ce,appendToBody:Boolean,appendTo:{type:$(String),default:"body"},beforeClose:{type:$(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),me={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[w]:e=>B(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},ge=(e,o)=>{var l;const a=F().emit,{nextZIndex:s}=I();let t="";const r=R(),i=R(),c=_(!1),d=_(!1),u=_(!1),f=_(null!=(l=e.zIndex)?l:s());let p,v;const y=D("namespace",M),m=n((()=>{const o={},l=`--${y.value}-dialog`;return e.fullscreen||(e.top&&(o[`${l}-margin-top`]=e.top),e.width&&(o[`${l}-width`]=S(e.width))),o})),g=n((()=>e.alignCenter?{display:"flex"}:{}));function b(){null==v||v(),null==p||p(),e.openDelay&&e.openDelay>0?({stop:p}=T((()=>x()),e.openDelay)):x()}function h(){null==p||p(),null==v||v(),e.closeDelay&&e.closeDelay>0?({stop:v}=T((()=>k()),e.closeDelay)):k()}function C(){e.beforeClose?e.beforeClose((function(e){e||(d.value=!0,c.value=!1)})):h()}function x(){z&&(c.value=!0)}function k(){c.value=!1}return e.lockScroll&&H(c),L((()=>e.modelValue),(l=>{l?(d.value=!1,b(),u.value=!0,f.value=re(e.zIndex)?s():f.value++,O((()=>{a("open"),o.value&&(o.value.scrollTop=0)}))):c.value&&h()})),L((()=>e.fullscreen),(e=>{o.value&&(e?(t=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=t)})),E((()=>{e.modelValue&&(c.value=!0,u.value=!0,b())})),{afterEnter:function(){a("opened")},afterLeave:function(){a("closed"),a(w,!1),e.destroyOnClose&&(u.value=!1)},beforeLeave:function(){a("close")},handleClose:C,onModalClick:function(){e.closeOnClickModal&&C()},close:h,doClose:k,onOpenAutoFocus:function(){a("openAutoFocus")},onCloseAutoFocus:function(){a("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&C()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:r,bodyId:i,closed:d,style:m,overlayDialogStyle:g,rendered:u,visible:c,zIndex:f}},be=["aria-label","aria-labelledby","aria-describedby"],he=l({name:"ElDialog",inheritAttrs:!1});const Ce=W(k(l({...he,props:ye,emits:me,setup(e,{expose:o}){const l=e,a=j();P({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},n((()=>!!a.title))),P({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},n((()=>!!l.customClass)));const s=V("dialog"),t=_(),r=_(),c=_(),{visible:v,titleId:b,bodyId:h,style:k,overlayDialogStyle:A,rendered:$,zIndex:w,afterEnter:B,afterLeave:F,beforeLeave:I,handleClose:R,onModalClick:D,onOpenAutoFocus:S,onCloseAutoFocus:H,onCloseRequested:L,onFocusoutPrevented:O}=ge(l,t);q(ie,{dialogRef:t,headerRef:r,bodyId:h,ns:s,rendered:$,style:k});const E=G(D),M=n((()=>l.draggable&&!l.fullscreen));return o({visible:v,dialogContentRef:c}),(e,o)=>(i(),g(Z,{to:e.appendTo,disabled:"body"===e.appendTo&&!e.appendToBody},[y(Y,{name:"dialog-fade",onAfterEnter:p(B),onAfterLeave:p(F),onBeforeLeave:p(I),persisted:""},{default:m((()=>[N(y(p(U),{"custom-mask-event":"",mask:e.modal,"overlay-class":e.modalClass,"z-index":p(w)},{default:m((()=>[d("div",{role:"dialog","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:p(b),"aria-describedby":p(h),class:f(`${p(s).namespace.value}-overlay-dialog`),style:x(p(A)),onClick:o[0]||(o[0]=(...e)=>p(E).onClick&&p(E).onClick(...e)),onMousedown:o[1]||(o[1]=(...e)=>p(E).onMousedown&&p(E).onMousedown(...e)),onMouseup:o[2]||(o[2]=(...e)=>p(E).onMouseup&&p(E).onMouseup(...e))},[y(p(J),{loop:"",trapped:p(v),"focus-start-el":"container",onFocusAfterTrapped:p(S),onFocusAfterReleased:p(H),onFocusoutPrevented:p(O),onReleaseRequested:p(L)},{default:m((()=>[p($)?(i(),g(ve,K({key:0,ref_key:"dialogContentRef",ref:c},e.$attrs,{"custom-class":e.customClass,center:e.center,"align-center":e.alignCenter,"close-icon":e.closeIcon,draggable:p(M),fullscreen:e.fullscreen,"show-close":e.showClose,title:e.title,"aria-level":e.headerAriaLevel,onClose:p(R)}),Q({header:m((()=>[e.$slots.title?u(e.$slots,"title",{key:1}):u(e.$slots,"header",{key:0,close:p(R),titleId:p(b),titleClass:p(s).e("title")})])),default:m((()=>[u(e.$slots,"default")])),_:2},[e.$slots.footer?{name:"footer",fn:m((()=>[u(e.$slots,"footer")]))}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","aria-level","onClose"])):C("v-if",!0)])),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,be)])),_:3},8,["mask","overlay-class","z-index"]),[[X,p(v)]])])),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}}),[["__file","dialog.vue"]])),xe={class:"flex justify-between items-center h-54px pl-15px pr-15px relative"},ke={class:"h-54px flex justify-between items-center absolute top-[50%] right-15px translate-y-[-50%]"},Ae=l({__name:"Dialog",props:{modelValue:ee.bool.def(!1),title:ee.string.def("Dialog"),fullscreen:ee.bool.def(!1),maxHeight:ee.oneOfType([String,Number]).def("600px")},setup(e){const o=j(),l=e,a=n((()=>{const e=["fullscreen","title","maxHeight"],o={...ae(),...l};for(const l in o)-1!==e.indexOf(l)&&delete o[l];return o})),s=_(!1),t=()=>{s.value=!p(s)},r=_(oe(l.maxHeight)?`${l.maxHeight}px`:l.maxHeight);L((()=>s.value),(async e=>{if(await O(),e){const e=document.documentElement.offsetHeight;r.value=e-55-60-(o.footer?63:0)+"px"}else r.value=oe(l.maxHeight)?`${l.maxHeight}px`:l.maxHeight}),{immediate:!0});const c=n((()=>({height:p(r)})));return(l,n)=>{const r=le("Icon");return i(),g(p(Ce),K(a.value,{fullscreen:s.value,"destroy-on-close":"","lock-scroll":"",draggable:"",top:"0","close-on-click-modal":!1,"show-close":!1}),Q({header:m((({close:o})=>[d("div",xe,[u(l.$slots,"title",{},(()=>[se(v(e.title),1)])),d("div",ke,[e.fullscreen?(i(),g(r,{key:0,class:"cursor-pointer is-hover !h-54px mr-10px",icon:s.value?"radix-icons:exit-full-screen":"radix-icons:enter-full-screen",color:"var(--el-color-info)","hover-color":"var(--el-color-primary)",onClick:t},null,8,["icon"])):C("",!0),y(r,{class:"cursor-pointer is-hover !h-54px",icon:"ep:close","hover-color":"var(--el-color-primary)",color:"var(--el-color-info)",onClick:o},null,8,["onClick"])])])])),default:m((()=>[y(p(te),{style:x(c.value)},{default:m((()=>[u(l.$slots,"default")])),_:3},8,["style"])])),_:2},[p(o).footer?{name:"footer",fn:m((()=>[u(l.$slots,"footer")])),key:"0"}:void 0]),1040,["fullscreen"])}}});export{Ae as _,me as a,ye as d,ge as u};