import{cR as e,s as a,a7 as s,a8 as n,ab as t,d as l,bu as o,dk as i,dl as c,z as u,A as r,ca as d,r as f,dm as v,bc as m,B as p,a3 as b,aO as g,Y as k,o as x,i as w,e as y,w as I,f as _,n as h,a as z,F as C,aj as O,j as N,D as T,bi as A,c as L,Q as R,bo as Y,ah as E,dn as S,bF as X,G as F,dp as j,dq as B,a4 as $,W as D,ak as M,J as W,h as G,cc as P,L as V,bv as q,aT as H,dr as J,M as Q}from"./index-CbsoNNgc.js";import{d as Z}from"./debounce-wcc1GRYs.js";function K(a,s,n){var t=!0,l=!0;if("function"!=typeof a)throw new TypeError("Expected a function");return e(n)&&(t="leading"in n?!!n.leading:t,l="trailing"in n?!!n.trailing:l),Z(a,s,{leading:t,maxWait:s,trailing:l})}const U=a({urlList:{type:s(Array),default:()=>n([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:s(String)}}),ee={close:()=>!0,switch:e=>t(e),rotate:e=>t(e)},ae=["src","crossorigin"],se=l({name:"ElImageViewer"});const ne=Q(V(l({...se,props:U,emits:ee,setup(e,{expose:a,emit:s}){var n;const t=e,l={CONTAIN:{name:"contain",icon:o(i)},ORIGINAL:{name:"original",icon:o(c)}},{t:V}=u(),Q=r("image-viewer"),{nextZIndex:Z}=d(),U=f(),ee=f([]),se=v(),ne=f(!0),te=f(t.initialIndex),le=m(l.CONTAIN),oe=f({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),ie=f(null!=(n=t.zIndex)?n:Z()),ce=p((()=>{const{urlList:e}=t;return e.length<=1})),ue=p((()=>0===te.value)),re=p((()=>te.value===t.urlList.length-1)),de=p((()=>t.urlList[te.value])),fe=p((()=>[Q.e("btn"),Q.e("prev"),Q.is("disabled",!t.infinite&&ue.value)])),ve=p((()=>[Q.e("btn"),Q.e("next"),Q.is("disabled",!t.infinite&&re.value)])),me=p((()=>{const{scale:e,deg:a,offsetX:s,offsetY:n,enableTransition:t}=oe.value;let o=s/e,i=n/e;switch(a%360){case 90:case-270:[o,i]=[i,-o];break;case 180:case-180:[o,i]=[-o,-i];break;case 270:case-90:[o,i]=[-i,o]}const c={transform:`scale(${e}) rotate(${a}deg) translate(${o}px, ${i}px)`,transition:t?"transform .3s":""};return le.value.name===l.CONTAIN.name&&(c.maxWidth=c.maxHeight="100%"),c}));function pe(){se.stop(),s("close")}function be(){ne.value=!1}function ge(e){ne.value=!1,e.target.alt=V("el.image.error")}function ke(e){if(ne.value||0!==e.button||!U.value)return;oe.value.enableTransition=!1;const{offsetX:a,offsetY:s}=oe.value,n=e.pageX,t=e.pageY,l=K((e=>{oe.value={...oe.value,offsetX:a+e.pageX-n,offsetY:s+e.pageY-t}})),o=q(document,"mousemove",l);q(document,"mouseup",(()=>{o()})),e.preventDefault()}function xe(){oe.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function we(){if(ne.value)return;const e=J(l),a=Object.values(l),s=le.value.name,n=(a.findIndex((e=>e.name===s))+1)%e.length;le.value=l[e[n]],xe()}function ye(e){const a=t.urlList.length;te.value=(e+a)%a}function Ie(){ue.value&&!t.infinite||ye(te.value-1)}function _e(){re.value&&!t.infinite||ye(te.value+1)}function he(e,a={}){if(ne.value)return;const{minScale:n,maxScale:l}=t,{zoomRate:o,rotateDeg:i,enableTransition:c}={zoomRate:t.zoomRate,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":oe.value.scale>n&&(oe.value.scale=Number.parseFloat((oe.value.scale/o).toFixed(3)));break;case"zoomIn":oe.value.scale<l&&(oe.value.scale=Number.parseFloat((oe.value.scale*o).toFixed(3)));break;case"clockwise":oe.value.deg+=i,s("rotate",oe.value.deg);break;case"anticlockwise":oe.value.deg-=i,s("rotate",oe.value.deg)}oe.value.enableTransition=c}return b(de,(()=>{g((()=>{const e=ee.value[0];(null==e?void 0:e.complete)||(ne.value=!0)}))})),b(te,(e=>{xe(),s("switch",e)})),k((()=>{var e,a;!function(){const e=K((e=>{switch(e.code){case H.esc:t.closeOnPressEscape&&pe();break;case H.space:we();break;case H.left:Ie();break;case H.up:he("zoomIn");break;case H.right:_e();break;case H.down:he("zoomOut")}})),a=K((e=>{he((e.deltaY||e.deltaX)<0?"zoomIn":"zoomOut",{zoomRate:t.zoomRate,enableTransition:!1})}));se.run((()=>{q(document,"keydown",e),q(document,"wheel",a)}))}(),null==(a=null==(e=U.value)?void 0:e.focus)||a.call(e)})),a({setActiveItem:ye}),(e,a)=>(x(),w(P,{to:"body",disabled:!e.teleported},[y(G,{name:"viewer-fade",appear:""},{default:I((()=>[_("div",{ref_key:"wrapper",ref:U,tabindex:-1,class:h(z(Q).e("wrapper")),style:C({zIndex:ie.value})},[_("div",{class:h(z(Q).e("mask")),onClick:a[0]||(a[0]=O((a=>e.hideOnClickModal&&pe()),["self"]))},null,2),N(" CLOSE "),_("span",{class:h([z(Q).e("btn"),z(Q).e("close")]),onClick:pe},[y(z(T),null,{default:I((()=>[y(z(A))])),_:1})],2),N(" ARROW "),z(ce)?N("v-if",!0):(x(),L(R,{key:0},[_("span",{class:h(z(fe)),onClick:Ie},[y(z(T),null,{default:I((()=>[y(z(Y))])),_:1})],2),_("span",{class:h(z(ve)),onClick:_e},[y(z(T),null,{default:I((()=>[y(z(E))])),_:1})],2)],64)),N(" ACTIONS "),_("div",{class:h([z(Q).e("btn"),z(Q).e("actions")])},[_("div",{class:h(z(Q).e("actions__inner"))},[y(z(T),{onClick:a[1]||(a[1]=e=>he("zoomOut"))},{default:I((()=>[y(z(S))])),_:1}),y(z(T),{onClick:a[2]||(a[2]=e=>he("zoomIn"))},{default:I((()=>[y(z(X))])),_:1}),_("i",{class:h(z(Q).e("actions__divider"))},null,2),y(z(T),{onClick:we},{default:I((()=>[(x(),w(F(z(le).icon)))])),_:1}),_("i",{class:h(z(Q).e("actions__divider"))},null,2),y(z(T),{onClick:a[3]||(a[3]=e=>he("anticlockwise"))},{default:I((()=>[y(z(j))])),_:1}),y(z(T),{onClick:a[4]||(a[4]=e=>he("clockwise"))},{default:I((()=>[y(z(B))])),_:1})],2)],2),N(" CANVAS "),_("div",{class:h(z(Q).e("canvas"))},[(x(!0),L(R,null,$(e.urlList,((a,s)=>D((x(),L("img",{ref_for:!0,ref:e=>ee.value[s]=e,key:a,src:a,style:C(z(me)),class:h(z(Q).e("img")),crossorigin:e.crossorigin,onLoad:be,onError:ge,onMousedown:ke},null,46,ae)),[[M,s===te.value]]))),128))],2),W(e.$slots,"default")],6)])),_:3})],8,["disabled"]))}}),[["__file","image-viewer.vue"]]));export{ne as E};
