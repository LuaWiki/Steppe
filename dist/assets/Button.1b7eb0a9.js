import{f as fo,c as d,a as bo,g as G,j as b,n as xo,d as Lo,i as io,h as $,k as ho,l as po,u as Mo,m as i,e as U}from"./light.a036d10a.js";import{u as so,a as No,c as Oo}from"./use-rtl.b4b305b7.js";import{m as _,B as vo,i as _o,k as mo,p as go,l as V,h as yo,d as j,j as x,T as Co,C as jo,t as $o,D as Ao}from"./vendor.a9c6e360.js";function Ko(){const o=_(!1);return vo(()=>{o.value=!0}),_o(o)}const Po=fo("n-form-item");function Qo(o,{defaultSize:r="medium",mergedSize:c,mergedDisabled:l}={}){const a=mo(Po,null);go(Po,null);const u=V(c?()=>c(a):()=>{const{size:n}=o;if(n)return n;if(a){const{mergedSize:g}=a;if(g.value!==void 0)return g.value}return r}),k=V(l?()=>l(a):()=>{const{disabled:n}=o;return n!==void 0?n:a?a.disabled.value:!1});return yo(()=>{a&&a.restoreValidation()}),{mergedSizeRef:u,mergedDisabledRef:k,nTriggerFormBlur(){a&&a.handleContentBlur()},nTriggerFormChange(){a&&a.handleContentChange()},nTriggerFormFocus(){a&&a.handleContentFocus()},nTriggerFormInput(){a&&a.handleContentInput()}}}var So=j({name:"BaseIconSwitchTransition",setup(o,{slots:r}){const c=Ko();return()=>x(Co,{name:"icon-switch-transition",appear:c.value},r)}}),Vo=j({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(o,{slots:r}){function c(n){o.width?n.style.maxWidth=`${n.offsetWidth}px`:n.style.maxHeight=`${n.offsetHeight}px`,n.offsetWidth}function l(n){o.width?n.style.maxWidth="0":n.style.maxHeight="0",n.offsetWidth;const{onLeave:g}=o;g&&g()}function a(n){o.width?n.style.maxWidth="":n.style.maxHeight="";const{onAfterLeave:g}=o;g&&g()}function u(n){if(n.style.transition="none",o.width){const g=n.offsetWidth;n.style.maxWidth="0",n.offsetWidth,n.style.transition="",n.style.maxWidth=`${g}px`}else if(o.reverse)n.style.maxHeight=`${n.offsetHeight}px`,n.offsetHeight,n.style.transition="",n.style.maxHeight="0";else{const g=n.offsetHeight;n.style.maxHeight="0",n.offsetWidth,n.style.transition="",n.style.maxHeight=`${g}px`}n.offsetWidth}function k(n){var g;o.width?n.style.maxWidth="":o.reverse||(n.style.maxHeight=""),(g=o.onAfterEnter)===null||g===void 0||g.call(o)}return()=>{const n=o.group?jo:Co;return x(n,{name:o.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:o.mode,appear:o.appear,onEnter:u,onAfterEnter:k,onBeforeLeave:c,onLeave:l,onAfterLeave:a},r)}}});const{cubicBezierEaseInOut:qo,transformDebounceScale:Yo}=bo;function ao({originalTransform:o="",left:r=0,top:c=0,transition:l=`all .3s ${qo} !important`}={}){return[d("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:o+" scale(0.75)",left:r,top:c,opacity:0}),d("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`${Yo} ${o}`,left:r,top:c,opacity:1}),d("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:r,top:c,transition:l})]}var Xo=G("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
`,[b("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[ao({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),b("icon",`
 height: 1em;
 width: 1em;
 `,[ao()])]);const lo="1.6s";var Uo=j({name:"BaseLoading",props:{clsPrefix:{type:String,required:!0},scale:{type:Number,default:1},radius:{type:Number,default:100},strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},show:{type:Boolean,default:!0}},setup(o){so("BaseLoading",Xo,$o(o,"clsPrefix"))},render(){const{clsPrefix:o,radius:r,strokeWidth:c,stroke:l,scale:a}=this,u=r/a;return x("div",{class:`${o}-base-loading`,role:"img","aria-label":"loading"},x(So,null,{default:()=>this.show?x("svg",{class:`${o}-base-loading__icon`,viewBox:`0 0 ${2*u} ${2*u}`,xmlns:"http://www.w3.org/2000/svg",style:{color:l}},x("g",null,x("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${u} ${u};270 ${u} ${u}`,begin:"0s",dur:lo,fill:"freeze",repeatCount:"indefinite"}),x("circle",{fill:"none",stroke:"currentColor","stroke-width":c,"stroke-linecap":"round",cx:u,cy:u,r:r-c/2,"stroke-dasharray":5.67*r,"stroke-dashoffset":18.48*r},x("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${u} ${u};135 ${u} ${u};450 ${u} ${u}`,begin:"0s",dur:lo,fill:"freeze",repeatCount:"indefinite"}),x("animate",{attributeName:"stroke-dashoffset",values:`${5.67*r};${1.42*r};${5.67*r}`,begin:"0s",dur:lo,fill:"freeze",repeatCount:"indefinite"})))):x("div",{key:"placeholder",class:`${o}-base-loading__placeholder`},this.$slots)}))}}),Jo=G("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Zo=j({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(o){so("BaseWave",Jo,$o(o,"clsPrefix"));const r=_(null),c=_(!1);let l=null;return yo(()=>{l!==null&&window.clearTimeout(l)}),{active:c,selfRef:r,play(){l!==null&&(window.clearTimeout(l),c.value=!1,l=null),Ao(()=>{var a;(a=r.value)===null||a===void 0||a.offsetHeight,c.value=!0,l=window.setTimeout(()=>{c.value=!1,l=null},1e3)})}}},render(){const{clsPrefix:o}=this;return x("div",{ref:"selfRef","aria-hidden":!0,class:[`${o}-base-wave`,this.active&&`${o}-base-wave--active`]})}});const{cubicBezierEaseInOut:R}=bo;function oe({duration:o=".2s",delay:r=".1s"}={}){return[d("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),d("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),d("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${R},
 max-width ${o} ${R} ${r},
 margin-left ${o} ${R} ${r},
 margin-right ${o} ${R} ${r};
 `),d("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${R} ${r},
 max-width ${o} ${R},
 margin-left ${o} ${R},
 margin-right ${o} ${R};
 `)]}function M(o){return xo(o,[255,255,255,.16])}function J(o){return xo(o,[0,0,0,.12])}var ee={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"};const re=o=>{const{heightTiny:r,heightSmall:c,heightMedium:l,heightLarge:a,borderRadius:u,fontSizeTiny:k,fontSizeSmall:n,fontSizeMedium:g,fontSizeLarge:Z,opacityDisabled:oo,textColor2:T,textColor3:eo,primaryColorHover:y,primaryColorPressed:H,borderColor:q,primaryColor:z,baseColor:t,infoColor:f,infoColorHover:P,infoColorPressed:e,successColor:W,successColorHover:F,successColorPressed:N,warningColor:I,warningColorHover:S,warningColorPressed:O,errorColor:w,errorColorHover:D,errorColorPressed:B,fontWeight:p,buttonColor2:Q,buttonColor2Hover:L,buttonColor2Pressed:E,fontWeightStrong:ro}=o;return Object.assign(Object.assign({},ee),{heightTiny:r,heightSmall:c,heightMedium:l,heightLarge:a,borderRadiusTiny:u,borderRadiusSmall:u,borderRadiusMedium:u,borderRadiusLarge:u,fontSizeTiny:k,fontSizeSmall:n,fontSizeMedium:g,fontSizeLarge:Z,opacityDisabled:oo,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:Q,colorSecondaryHover:L,colorSecondaryPressed:E,colorTertiary:Q,colorTertiaryHover:L,colorTertiaryPressed:E,colorQuaternary:"#0000",colorQuaternaryHover:L,colorQuaternaryPressed:E,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:T,textColorTertiary:eo,textColorHover:y,textColorPressed:H,textColorFocus:y,textColorDisabled:T,textColorText:T,textColorTextHover:y,textColorTextPressed:H,textColorTextFocus:y,textColorTextDisabled:T,textColorGhost:T,textColorGhostHover:y,textColorGhostPressed:H,textColorGhostFocus:y,textColorGhostDisabled:T,border:`1px solid ${q}`,borderHover:`1px solid ${y}`,borderPressed:`1px solid ${H}`,borderFocus:`1px solid ${y}`,borderDisabled:`1px solid ${q}`,rippleColor:z,colorPrimary:z,colorHoverPrimary:y,colorPressedPrimary:H,colorFocusPrimary:y,colorDisabledPrimary:z,textColorPrimary:t,textColorHoverPrimary:t,textColorPressedPrimary:t,textColorFocusPrimary:t,textColorDisabledPrimary:t,textColorTextPrimary:z,textColorTextHoverPrimary:y,textColorTextPressedPrimary:H,textColorTextFocusPrimary:y,textColorTextDisabledPrimary:T,textColorGhostPrimary:z,textColorGhostHoverPrimary:y,textColorGhostPressedPrimary:H,textColorGhostFocusPrimary:y,textColorGhostDisabledPrimary:z,borderPrimary:`1px solid ${z}`,borderHoverPrimary:`1px solid ${y}`,borderPressedPrimary:`1px solid ${H}`,borderFocusPrimary:`1px solid ${y}`,borderDisabledPrimary:`1px solid ${z}`,rippleColorPrimary:z,colorInfo:f,colorHoverInfo:P,colorPressedInfo:e,colorFocusInfo:P,colorDisabledInfo:f,textColorInfo:t,textColorHoverInfo:t,textColorPressedInfo:t,textColorFocusInfo:t,textColorDisabledInfo:t,textColorTextInfo:f,textColorTextHoverInfo:P,textColorTextPressedInfo:e,textColorTextFocusInfo:P,textColorTextDisabledInfo:T,textColorGhostInfo:f,textColorGhostHoverInfo:P,textColorGhostPressedInfo:e,textColorGhostFocusInfo:P,textColorGhostDisabledInfo:f,borderInfo:`1px solid ${f}`,borderHoverInfo:`1px solid ${P}`,borderPressedInfo:`1px solid ${e}`,borderFocusInfo:`1px solid ${P}`,borderDisabledInfo:`1px solid ${f}`,rippleColorInfo:f,colorSuccess:W,colorHoverSuccess:F,colorPressedSuccess:N,colorFocusSuccess:F,colorDisabledSuccess:W,textColorSuccess:t,textColorHoverSuccess:t,textColorPressedSuccess:t,textColorFocusSuccess:t,textColorDisabledSuccess:t,textColorTextSuccess:W,textColorTextHoverSuccess:F,textColorTextPressedSuccess:N,textColorTextFocusSuccess:F,textColorTextDisabledSuccess:T,textColorGhostSuccess:W,textColorGhostHoverSuccess:F,textColorGhostPressedSuccess:N,textColorGhostFocusSuccess:F,textColorGhostDisabledSuccess:W,borderSuccess:`1px solid ${W}`,borderHoverSuccess:`1px solid ${F}`,borderPressedSuccess:`1px solid ${N}`,borderFocusSuccess:`1px solid ${F}`,borderDisabledSuccess:`1px solid ${W}`,rippleColorSuccess:W,colorWarning:I,colorHoverWarning:S,colorPressedWarning:O,colorFocusWarning:S,colorDisabledWarning:I,textColorWarning:t,textColorHoverWarning:t,textColorPressedWarning:t,textColorFocusWarning:t,textColorDisabledWarning:t,textColorTextWarning:I,textColorTextHoverWarning:S,textColorTextPressedWarning:O,textColorTextFocusWarning:S,textColorTextDisabledWarning:T,textColorGhostWarning:I,textColorGhostHoverWarning:S,textColorGhostPressedWarning:O,textColorGhostFocusWarning:S,textColorGhostDisabledWarning:I,borderWarning:`1px solid ${I}`,borderHoverWarning:`1px solid ${S}`,borderPressedWarning:`1px solid ${O}`,borderFocusWarning:`1px solid ${S}`,borderDisabledWarning:`1px solid ${I}`,rippleColorWarning:I,colorError:w,colorHoverError:D,colorPressedError:B,colorFocusError:D,colorDisabledError:w,textColorError:t,textColorHoverError:t,textColorPressedError:t,textColorFocusError:t,textColorDisabledError:t,textColorTextError:w,textColorTextHoverError:D,textColorTextPressedError:B,textColorTextFocusError:D,textColorTextDisabledError:T,textColorGhostError:w,textColorGhostHoverError:D,textColorGhostPressedError:B,textColorGhostFocusError:D,textColorGhostDisabledError:w,borderError:`1px solid ${w}`,borderHoverError:`1px solid ${D}`,borderPressedError:`1px solid ${B}`,borderFocusError:`1px solid ${D}`,borderDisabledError:`1px solid ${w}`,rippleColorError:w,waveOpacity:"0.6",fontWeight:p,fontWeightStrong:ro})},te={name:"Button",common:Lo,self:re};var ne=te;const h="0!important",wo="-1px!important";function A(o){return $(o+"-type",[d("& +",[G("button",{},[$(o+"-type",[b("border",{borderLeftWidth:h}),b("state-border",{left:wo})])])])])}function K(o){return $(o+"-type",[d("& +",[G("button",[$(o+"-type",[b("border",{borderTopWidth:h}),b("state-border",{top:wo})])])])])}var ie=G("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[io("vertical",{flexDirection:"row"},[G("button",[d("&:first-child:not(:last-child)",`
 margin-right: ${h};
 border-top-right-radius: ${h};
 border-bottom-right-radius: ${h};
 `),d("&:last-child:not(:first-child)",`
 margin-left: ${h};
 border-top-left-radius: ${h};
 border-bottom-left-radius: ${h};
 `),d("&:not(:first-child):not(:last-child)",`
 margin-left: ${h};
 margin-right: ${h};
 border-radius: ${h};
 `),A("default"),$("ghost",[A("primary"),A("info"),A("success"),A("warning"),A("error")])])]),$("vertical",{flexDirection:"column"},[G("button",[d("&:first-child:not(:last-child)",`
 margin-bottom: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-bottom-left-radius: ${h};
 border-bottom-right-radius: ${h};
 `),d("&:last-child:not(:first-child)",`
 margin-top: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-top-left-radius: ${h};
 border-top-right-radius: ${h};
 `),d("&:not(:first-child):not(:last-child)",`
 margin: ${h};
 border-radius: ${h};
 `),K("default"),$("ghost",[K("primary"),K("info"),K("success"),K("warning"),K("error")])])])]);const To=fo("n-button-group"),se={size:{type:String,default:void 0},vertical:Boolean};j({name:"ButtonGroup",props:se,setup(o){const{mergedClsPrefixRef:r}=ho(o);return so("ButtonGroup",ie,r),go(To,o),{mergedClsPrefix:r}},render(){const{mergedClsPrefix:o}=this;return x("div",{class:[`${o}-button-group`,this.vertical&&`${o}-button-group--vertical`],role:"group"},this.$slots)}});var ae=d([G("button",`
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[$("color",[b("border",{borderColor:"var(--n-border-color)"}),$("disabled",[b("border",{borderColor:"var(--n-border-color-disabled)"})]),io("disabled",[d("&:focus",[b("state-border",{borderColor:"var(--n-border-color-focus)"})]),d("&:hover",[b("state-border",{borderColor:"var(--n-border-color-hover)"})]),d("&:active",[b("state-border",{borderColor:"var(--n-border-color-pressed)"})]),$("pressed",[b("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),$("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[b("border",{border:"var(--n-border-disabled)"})]),io("disabled",[d("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[b("state-border",{border:"var(--n-border-focus)"})]),d("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[b("state-border",{border:"var(--n-border-hover)"})]),d("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[b("state-border",{border:"var(--n-border-pressed)"})]),$("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[b("state-border",{border:"var(--n-border-pressed)"})])]),$("loading",{"pointer-events":"none"}),G("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[$("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),typeof window!="undefined"&&"MozBoxSizing"in document.createElement("div").style?d("&::moz-focus-inner",{border:0}):null,b("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),b("border",{border:"var(--n-border)"}),b("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),b("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[G("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 `,[ao({top:"50%",originalTransform:"translateY(-50%)"})]),oe()]),b("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `,[d("~",[b("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),$("block",`
 display: flex;
 width: 100%;
 `),$("dashed",[b("border, state-border",{borderStyle:"dashed !important"})]),$("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),d("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),d("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]);const le=Object.assign(Object.assign({},po.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],internalAutoFocus:Boolean}),de=j({name:"Button",props:le,setup(o){const r=_(null),c=_(null),l=_(!1);vo(()=>{const{value:t}=r;t&&!o.disabled&&o.focusable&&o.internalAutoFocus&&t.focus({preventScroll:!0})});const a=Mo(()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered),u=mo(To,{}),{mergedSizeRef:k}=Qo({},{defaultSize:"medium",mergedSize:t=>{const{size:f}=o;if(f)return f;const{size:P}=u;if(P)return P;const{mergedSize:e}=t||{};return e?e.value:"medium"}}),n=V(()=>o.focusable&&!o.disabled),g=t=>{var f;t.preventDefault(),!o.disabled&&n.value&&((f=r.value)===null||f===void 0||f.focus({preventScroll:!0}))},Z=t=>{var f;if(!o.disabled&&!o.loading){const{onClick:P}=o;P&&Oo(P,t),o.text||(f=c.value)===null||f===void 0||f.play()}},oo=t=>{switch(t.code){case"Enter":case"NumpadEnter":if(!o.keyboard)return;l.value=!1}},T=t=>{switch(t.code){case"Enter":case"NumpadEnter":if(!o.keyboard||o.loading){t.preventDefault();return}l.value=!0}},eo=()=>{l.value=!1},{mergedClsPrefixRef:y,NConfigProvider:H}=ho(o),q=po("Button","Button",ae,ne,o,y),z=No("Button",H==null?void 0:H.mergedRtlRef,y);return{selfElRef:r,waveElRef:c,mergedClsPrefix:y,mergedFocusable:n,mergedSize:k,showBorder:a,enterPressed:l,rtlEnabled:z,handleMousedown:g,handleKeydown:T,handleBlur:eo,handleKeyup:oo,handleClick:Z,customColorCssVars:V(()=>{const{color:t}=o;if(!t)return null;const f=M(t);return{"--n-border-color":t,"--n-border-color-hover":f,"--n-border-color-pressed":J(t),"--n-border-color-focus":f,"--n-border-color-disabled":t}}),cssVars:V(()=>{const t=q.value,{common:{cubicBezierEaseInOut:f,cubicBezierEaseOut:P},self:e}=t,{rippleDuration:W,opacityDisabled:F,fontWeight:N,fontWeightStrong:I}=e,S=k.value,{dashed:O,type:w,ghost:D,text:B,color:p,round:Q,circle:L,textColor:E,secondary:ro,tertiary:co,quaternary:Ho,strong:zo}=o,Bo={fontWeight:zo?I:N};let v={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const Y=w==="tertiary",uo=w==="default",s=Y?"default":w;if(B){const m=E||p,C=m||e[i("textColorText",s)];v={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":C,"--n-text-color-hover":m?M(m):e[i("textColorTextHover",s)],"--n-text-color-pressed":m?J(m):e[i("textColorTextPressed",s)],"--n-text-color-focus":m?M(m):e[i("textColorTextHover",s)],"--n-text-color-disabled":m||e[i("textColorTextDisabled",s)]}}else if(D||O){const m=E||p;v={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":p||e[i("rippleColor",s)],"--n-text-color":m||e[i("textColorGhost",s)],"--n-text-color-hover":m?M(m):e[i("textColorGhostHover",s)],"--n-text-color-pressed":m?J(m):e[i("textColorGhostPressed",s)],"--n-text-color-focus":m?M(m):e[i("textColorGhostHover",s)],"--n-text-color-disabled":m||e[i("textColorGhostDisabled",s)]}}else if(ro){const m=uo?e.textColor:Y?e.textColorTertiary:e[i("color",s)],C=p||m,X=w!=="default"&&w!=="tertiary";v={"--n-color":X?U(C,{alpha:Number(e.colorOpacitySecondary)}):e.colorSecondary,"--n-color-hover":X?U(C,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-pressed":X?U(C,{alpha:Number(e.colorOpacitySecondaryPressed)}):e.colorSecondaryPressed,"--n-color-focus":X?U(C,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-disabled":e.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":C,"--n-text-color-hover":C,"--n-text-color-pressed":C,"--n-text-color-focus":C,"--n-text-color-disabled":C}}else if(co||Ho){const m=uo?e.textColor:Y?e.textColorTertiary:e[i("color",s)],C=p||m;co?(v["--n-color"]=e.colorTertiary,v["--n-color-hover"]=e.colorTertiaryHover,v["--n-color-pressed"]=e.colorTertiaryPressed,v["--n-color-focus"]=e.colorSecondaryHover,v["--n-color-disabled"]=e.colorTertiary):(v["--n-color"]=e.colorQuaternary,v["--n-color-hover"]=e.colorQuaternaryHover,v["--n-color-pressed"]=e.colorQuaternaryPressed,v["--n-color-focus"]=e.colorQuaternaryHover,v["--n-color-disabled"]=e.colorQuaternary),v["--n-ripple-color"]="#0000",v["--n-text-color"]=C,v["--n-text-color-hover"]=C,v["--n-text-color-pressed"]=C,v["--n-text-color-focus"]=C,v["--n-text-color-disabled"]=C}else v={"--n-color":p||e[i("color",s)],"--n-color-hover":p?M(p):e[i("colorHover",s)],"--n-color-pressed":p?J(p):e[i("colorPressed",s)],"--n-color-focus":p?M(p):e[i("colorFocus",s)],"--n-color-disabled":p||e[i("colorDisabled",s)],"--n-ripple-color":p||e[i("rippleColor",s)],"--n-text-color":E||(p?e.textColorPrimary:Y?e.textColorTertiary:e[i("textColor",s)]),"--n-text-color-hover":E||(p?e.textColorHoverPrimary:e[i("textColorHover",s)]),"--n-text-color-pressed":E||(p?e.textColorPressedPrimary:e[i("textColorPressed",s)]),"--n-text-color-focus":E||(p?e.textColorFocusPrimary:e[i("textColorFocus",s)]),"--n-text-color-disabled":E||(p?e.textColorDisabledPrimary:e[i("textColorDisabled",s)])};let to={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};B?to={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:to={"--n-border":e[i("border",s)],"--n-border-hover":e[i("borderHover",s)],"--n-border-pressed":e[i("borderPressed",s)],"--n-border-focus":e[i("borderFocus",s)],"--n-border-disabled":e[i("borderDisabled",s)]};const{[i("height",S)]:no,[i("fontSize",S)]:Eo,[i("padding",S)]:Wo,[i("paddingRound",S)]:Fo,[i("iconSize",S)]:Io,[i("borderRadius",S)]:Do,[i("iconMargin",S)]:Go,waveOpacity:ko}=e,Ro={"--n-width":L&&!B?no:"initial","--n-height":B?"initial":no,"--n-font-size":Eo,"--n-padding":L||B?"initial":Q?Fo:Wo,"--n-icon-size":Io,"--n-icon-margin":Go,"--n-border-radius":B?"initial":L||Q?no:Do};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":f,"--n-bezier-ease-out":P,"--n-ripple-duration":W,"--n-opacity-disabled":F,"--n-wave-opacity":ko},Bo),v),to),Ro)})}},render(){const{$slots:o,mergedClsPrefix:r,tag:c}=this;return x(c,{ref:"selfElRef",class:[`${r}-button`,`${r}-button--${this.type}-type`,`${r}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${r}-button--rtl`,this.disabled&&`${r}-button--disabled`,this.block&&`${r}-button--block`,this.enterPressed&&`${r}-button--pressed`,!this.text&&this.dashed&&`${r}-button--dashed`,this.color&&`${r}-button--color`,this.secondary&&`${r}-button--secondary`,this.loading&&`${r}-button--loading`,this.ghost&&`${r}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},o.default&&this.iconPlacement==="right"?x("span",{class:`${r}-button__content`},o):null,x(Vo,{width:!0},{default:()=>o.icon||this.loading?x("span",{class:`${r}-button__icon`,style:{margin:o.default?"":0}},x(So,null,{default:()=>{var l;return this.loading?x(Uo,{clsPrefix:r,key:"loading",class:`${r}-icon-slot`,strokeWidth:20}):x("div",{key:"icon",class:`${r}-icon-slot`,role:"none"},(l=o.icon)===null||l===void 0?void 0:l.call(o))}})):null}),o.default&&this.iconPlacement==="left"?x("span",{class:`${r}-button__content`},o):null,this.text?null:x(Zo,{ref:"waveElRef",clsPrefix:r}),this.showBorder?x("div",{"aria-hidden":!0,class:`${r}-button__border`,style:this.customColorCssVars}):null,this.showBorder?x("div",{"aria-hidden":!0,class:`${r}-button__state-border`,style:this.customColorCssVars}):null)}});var be=de;export{be as N,So as a,Uo as b,ao as c,Po as f,Ko as i,Qo as u};
