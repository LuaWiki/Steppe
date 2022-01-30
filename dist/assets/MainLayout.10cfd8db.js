import{_ as Me}from"./index.2fbbb0cb.js";import{f as Be,g as je,h as He,i as Ge,w as ve,d as T,j as y,k as W,l as A,m as J,p as ae,T as We,n as ye,F as ge,t as q,o as be,q as me,s as X,u as F,v as D,x as N,y as U,r as qe}from"./vendor.586c8904.js";import{p as Ue,V as Ve,a as Ze,b as Je,r as Qe,N as Xe,c as we}from"./Popover.9ad47c84.js";import{u as Ye,r as Y}from"./index.74016cb3.js";import{c as V,a as et,b as tt,d as nt,e as ot,u as ee,f as se,w as rt,g as E,h as O,i as xe,j as H,k as it,l as ke,m as Se,n as G}from"./use-rtl.037a8fff.js";import{N as at,a as st}from"./Space.8399cc86.js";import{o as te,a as ne,u as lt,k as dt}from"./cssr.ac91d8a0.js";import{h as ut}from"./utils.728d4021.js";import{N as Z}from"./Button.f056ffbf.js";function ct(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function ft(e){return n=>{n?e.value=n.$el:e.value=null}}function pt(e={},n){const t=Be({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:o,keyup:r}=e,a=l=>{switch(l.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}o!==void 0&&Object.keys(o).forEach(u=>{if(u!==l.key)return;const c=o[u];if(typeof c=="function")c(l);else{const{stop:h=!1,prevent:x=!1}=c;h&&l.stopPropagation(),x&&l.preventDefault(),c.handler(l)}})},i=l=>{switch(l.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(u=>{if(u!==l.key)return;const c=r[u];if(typeof c=="function")c(l);else{const{stop:h=!1,prevent:x=!1}=c;h&&l.stopPropagation(),x&&l.preventDefault(),c.handler(l)}})},s=()=>{(n===void 0||n.value)&&(ne("keydown",document,a),ne("keyup",document,i)),n!==void 0&&ve(n,l=>{l?(ne("keydown",document,a),ne("keyup",document,i)):(te("keydown",document,a),te("keyup",document,i))})};return ut()?(je(s),He(()=>{(n===void 0||n.value)&&(te("keydown",document,a),te("keyup",document,i))})):s(),Ge(t)}var ht=T({name:"ChevronRight",render(){return y("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function Ce(e){return Array.isArray(e)?e:[e]}const le={STOP:"STOP"};function Ne(e,n){const t=n(e);e.children!==void 0&&t!==le.STOP&&e.children.forEach(o=>Ne(o,n))}function vt(e,n={}){const{preserveGroup:t=!1}=n,o=[],r=t?i=>{i.isLeaf||(o.push(i.key),a(i.children))}:i=>{i.isLeaf||(i.isGroup||o.push(i.key),a(i.children))};function a(i){i.forEach(r)}return a(e),o}function yt(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function gt(e){return e.children}function bt(e){return e.key}function mt(){return!1}function wt(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function xt(e){return e.disabled===!0}function kt(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function de(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function ue(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function St(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function Ct(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function Nt(e){return(e==null?void 0:e.type)==="group"}class _t extends Error{constructor(){super();this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Pt(e,n,t){return oe(n.concat(e),t)}function Kt(e,n){const t=new Set;return e.forEach(o=>{const r=n.treeNodeMap.get(o);if(r!==void 0){let a=r.parent;for(;a!==null&&!(a.disabled||t.has(a.key));)t.add(a.key),a=a.parent}}),t}function It(e,n,t){const o=oe(n,t),r=oe(e,t,!0),a=Kt(e,t),i=[];return o.forEach(s=>{(r.has(s)||a.has(s))&&i.push(s)}),i.forEach(s=>o.delete(s)),o}function ce(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:r,indeterminateKeys:a,cascade:i,leafOnly:s,checkStrategy:l}=e;if(!i)return o!==void 0?{checkedKeys:St(t,o),indeterminateKeys:Array.from(a)}:r!==void 0?{checkedKeys:Ct(t,r),indeterminateKeys:Array.from(a)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(a)};const{levelTreeNodeMap:u}=n;let c;r!==void 0?c=It(r,t,n):o!==void 0?c=Pt(o,t,n):c=oe(t,n);const h=l==="parent",x=l==="child"||s,C=c,_=new Set,L=Math.max.apply(null,Array.from(u.keys()));for(let R=L;R>=0;R-=1){const $=R===0,M=u.get(R);for(const P of M){if(P.isLeaf)continue;const{key:f,shallowLoaded:p}=P;if(x&&p&&P.children.forEach(d=>{!d.disabled&&!d.isLeaf&&d.shallowLoaded&&C.has(d.key)&&C.delete(d.key)}),P.disabled||!p)continue;let k=!0,I=!1,K=!0;for(const d of P.children){const w=d.key;if(!d.disabled){if(K&&(K=!1),C.has(w))I=!0;else if(_.has(w)){I=!0,k=!1;break}else if(k=!1,I)break}}k&&!K?(h&&P.children.forEach(d=>{!d.disabled&&C.has(d.key)&&C.delete(d.key)}),C.add(f)):I&&_.add(f),$&&x&&C.has(f)&&C.delete(f)}}return{checkedKeys:Array.from(C),indeterminateKeys:Array.from(_)}}function oe(e,n,t=!1){const{treeNodeMap:o,getChildren:r}=n,a=new Set,i=new Set(e);return e.forEach(s=>{const l=o.get(s);l!==void 0&&Ne(l,u=>{if(u.disabled)return le.STOP;const{key:c}=u;if(!a.has(c)&&(a.add(c),i.add(c),kt(u.rawNode,r))){if(t)return le.STOP;throw new _t}})}),i}function At(e,{includeGroup:n=!1,includeSelf:t=!0},o){var r;const a=o.treeNodeMap;let i=e==null?null:(r=a.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:i};if(i==null?void 0:i.ignored)return s.treeNode=null,s;for(;i;)!i.ignored&&(n||!i.isGroup)&&s.treeNodePath.push(i),i=i.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(l=>l.key),s}function Rt(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function Ft(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r+1)%o]:r===t.length-1?null:t[r+1]}function _e(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const r=n==="prev"?Lt:Ft,a={reverse:n==="prev"};let i=!1,s=null;function l(u){if(u!==null){if(u===e){if(!i)i=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!u.disabled||o)&&!u.ignored&&!u.isGroup){s=u;return}if(u.isGroup){const c=fe(u,a);c!==null?s=c:l(r(u,t))}else{const c=r(u,!1);if(c!==null)l(c);else{const h=Dt(u);(h==null?void 0:h.isGroup)?l(r(h,t)):t&&l(r(u,!0))}}}}return l(e),s}function Lt(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r-1+o)%o]:r===0?null:t[r-1]}function Dt(e){return e.parent}function fe(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:r}=o,a=t?r-1:0,i=t?-1:r,s=t?-1:1;for(let l=a;l!==i;l+=s){const u=o[l];if(!u.disabled&&!u.ignored)if(u.isGroup){const c=fe(u,n);if(c!==null)return c}else return u}}return null}const $t={getChild(){return this.ignored?null:fe(this)},getParent(){const{parent:e}=this;return(e==null?void 0:e.isGroup)?e.getParent():e},getNext(e={}){return _e(this,"next",e)},getPrev(e={}){return _e(this,"prev",e)}};function zt(e,n){const t=n?new Set(n):void 0,o=[];function r(a){a.forEach(i=>{o.push(i),!(i.isLeaf||!i.children||i.ignored)&&(i.isGroup||t===void 0||t.has(i.key))&&r(i.children)})}return r(e),o}function Tt(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function Pe(e,n,t,o,r,a=null,i=0){const s=[];return e.forEach((l,u)=>{var c;const h=Object.create(o);if(h.rawNode=l,h.siblings=s,h.level=i,h.index=u,h.isFirstChild=u===0,h.isLastChild=u+1===e.length,h.parent=a,!h.ignored){const x=r(l);Array.isArray(x)&&(h.children=Pe(x,n,t,o,r,h,i+1))}s.push(h),n.set(h.key,h),t.has(i)||t.set(i,[]),(c=t.get(i))===null||c===void 0||c.push(h)}),s}function Et(e,n={}){var t;const o=new Map,r=new Map,{getDisabled:a=xt,getIgnored:i=mt,getIsGroup:s=Nt,getKey:l=bt}=n,u=(t=n.getChildren)!==null&&t!==void 0?t:gt,c=n.ignoreEmptyChildren?f=>{const p=u(f);return Array.isArray(p)?p.length?p:null:p}:u,h=Object.assign({get key(){return l(this.rawNode)},get disabled(){return a(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return yt(this.rawNode,c)},get shallowLoaded(){return wt(this.rawNode,c)},get ignored(){return i(this.rawNode)},contains(f){return Tt(this,f)}},$t),x=Pe(e,o,r,h,c);function C(f){if(f==null)return null;const p=o.get(f);return p&&!p.isGroup&&!p.ignored?p:null}function _(f){if(f==null)return null;const p=o.get(f);return p&&!p.ignored?p:null}function L(f,p){const k=_(f);return k?k.getPrev(p):null}function R(f,p){const k=_(f);return k?k.getNext(p):null}function $(f){const p=_(f);return p?p.getParent():null}function M(f){const p=_(f);return p?p.getChild():null}const P={treeNodes:x,treeNodeMap:o,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:c,getFlattenedNodes(f){return zt(x,f)},getNode:C,getPrev:L,getNext:R,getParent:$,getChild:M,getFirstAvailableNode(){return Rt(x)},getPath(f,p={}){return At(f,p,P)},getCheckedKeys(f,p={}){const{cascade:k=!0,leafOnly:I=!1,checkStrategy:K="all"}=p;return ce({checkedKeys:de(f),indeterminateKeys:ue(f),cascade:k,leafOnly:I,checkStrategy:K},P)},check(f,p,k={}){const{cascade:I=!0,leafOnly:K=!1,checkStrategy:d="all"}=k;return ce({checkedKeys:de(p),indeterminateKeys:ue(p),keysToCheck:f==null?[]:Ce(f),cascade:I,leafOnly:K,checkStrategy:d},P)},uncheck(f,p,k={}){const{cascade:I=!0,leafOnly:K=!1,checkStrategy:d="all"}=k;return ce({checkedKeys:de(p),indeterminateKeys:ue(p),keysToUncheck:f==null?[]:Ce(f),cascade:I,leafOnly:K,checkStrategy:d},P)},getNonLeafKeys(f={}){return vt(x,f)}};return P}const{cubicBezierEaseIn:Ke,cubicBezierEaseOut:Ie,transformDebounceScale:Ot}=et;function Mt({transformOrigin:e="inherit",duration:n=".2s",enterScale:t=".9",originalTransform:o="",originalTransition:r=""}={}){return[V("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${n} ${Ke}, transform ${n} ${Ke} ${r&&","+r}`}),V("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${n} ${Ie}, transform ${n} ${Ie} ${r&&","+r}`}),V("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${o} scale(${t})`}),V("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${o} scale(${Ot})`})]}var Bt={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"};const jt=e=>{const{primaryColor:n,textColor2:t,dividerColor:o,hoverColor:r,popoverColor:a,invertedColor:i,borderRadius:s,fontSizeSmall:l,fontSizeMedium:u,fontSizeLarge:c,fontSizeHuge:h,heightSmall:x,heightMedium:C,heightLarge:_,heightHuge:L,textColor3:R,opacityDisabled:$}=e;return Object.assign(Object.assign({},Bt),{optionHeightSmall:x,optionHeightMedium:C,optionHeightLarge:_,optionHeightHuge:L,borderRadius:s,fontSizeSmall:l,fontSizeMedium:u,fontSizeLarge:c,fontSizeHuge:h,optionTextColor:t,optionTextColorHover:t,optionTextColorActive:n,optionTextColorChildActive:n,color:a,dividerColor:o,suffixColor:t,prefixColor:t,optionColorHover:r,optionColorActive:ot(n,{alpha:.1}),groupHeaderTextColor:R,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:i,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:n,optionColorActiveInverted:n,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:$})},Ht=tt({name:"Dropdown",common:nt,peers:{Popover:Ue},self:jt});var Gt=Ht;function pe(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function Wt(e){return e.type==="group"}function Ae(e){return e.type==="divider"}function qt(e){return e.type==="render"}const Re=se("n-dropdown-option");var Fe=T({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object},setup(e){const n=W(re),{hoverKeyRef:t,keyboardKeyRef:o,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:a,activeKeyPathRef:i,animatedRef:s,mergedShowRef:l,renderLabelRef:u,renderIconRef:c,labelFieldRef:h,childrenFieldRef:x}=n,C=W(Re,null),_=W(he),L=A(()=>e.tmNode.rawNode),R=A(()=>{const{value:v}=x;return pe(e.tmNode.rawNode,v)}),$=A(()=>{const{disabled:v}=e.tmNode;return v}),M=A(()=>{if(!R.value)return!1;const{key:v,disabled:b}=e.tmNode;if(b)return!1;const{value:z}=t,{value:B}=o,{value:ie}=r,{value:j}=a;return z!==null?j.includes(v):B!==null?j.includes(v)&&j[j.length-1]!==v:ie!==null?j.includes(v):!1}),P=A(()=>o.value===null&&!s.value),f=Ye(M,300,P),p=A(()=>!!(C==null?void 0:C.enteringSubmenuRef.value)),k=J(!1);ae(Re,{enteringSubmenuRef:k});function I(){k.value=!0}function K(){k.value=!1}function d(){const{parentKey:v,tmNode:b}=e;!l.value||(r.value=v,o.value=null,t.value=b.key)}function w(){const{tmNode:v}=e;!l.value||t.value!==v.key&&d()}function m(v){if(!l.value)return;const{relatedTarget:b}=v;b&&!ct({target:b},"dropdownOption")&&(t.value=null)}function g(){const{value:v}=R,{tmNode:b}=e;!l.value||!v&&!b.disabled&&(n.doSelect(b.key,b.rawNode),n.doUpdateShow(!1))}return{labelField:h,renderLabel:u,renderIcon:c,siblingHasIcon:_.showIconRef,siblingHasSubmenu:_.hasSubmenuRef,animated:s,mergedShowSubmenu:A(()=>f.value&&!p.value),rawNode:L,hasSubmenu:R,pending:ee(()=>{const{value:v}=a,{key:b}=e.tmNode;return v.includes(b)}),childActive:ee(()=>{const{value:v}=i,{key:b}=e.tmNode,z=v.findIndex(B=>b===B);return z===-1?!1:z<v.length-1}),active:ee(()=>{const{value:v}=i,{key:b}=e.tmNode,z=v.findIndex(B=>b===B);return z===-1?!1:z===v.length-1}),mergedDisabled:$,handleClick:g,handleMouseMove:w,handleMouseEnter:d,handleMouseLeave:m,handleSubmenuBeforeEnter:I,handleSubmenuAfterEnter:K}},render(){var e;const{animated:n,rawNode:t,mergedShowSubmenu:o,clsPrefix:r,siblingHasIcon:a,siblingHasSubmenu:i,renderLabel:s,renderIcon:l,props:u}=this,c=o?y(De,{clsPrefix:r,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}):null,h={class:[`${r}-dropdown-option-body`,this.pending&&`${r}-dropdown-option-body--pending`,this.active&&`${r}-dropdown-option-body--active`,this.childActive&&`${r}-dropdown-option-body--child-active`,this.mergedDisabled&&`${r}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick};return y("div",{class:`${r}-dropdown-option`},y("div",ye(h,u),[y("div",{"data-dropdown-option":!0,class:[`${r}-dropdown-option-body__prefix`,a&&`${r}-dropdown-option-body__prefix--show-icon`]},[l?l(t):Y(t.icon)]),y("div",{"data-dropdown-option":!0,class:`${r}-dropdown-option-body__label`},s?s(t):Y((e=t[this.labelField])!==null&&e!==void 0?e:t.title)),y("div",{"data-dropdown-option":!0,class:[`${r}-dropdown-option-body__suffix`,i&&`${r}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?y(at,null,{default:()=>y(ht,null)}):null)]),this.hasSubmenu?y(Ve,null,{default:()=>[y(Ze,null,{default:()=>y("div",{class:`${r}-dropdown-offset-container`},y(Je,{show:this.mergedShowSubmenu,placement:this.placement,teleportDisabled:!0},{default:()=>y("div",{class:`${r}-dropdown-menu-wrapper`},n?y(We,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>c}):c)}))})]}):null)}}),Le=T({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return y("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Ut=T({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=W(he),{renderLabelRef:t,labelFieldRef:o}=W(re);return{labelField:o,showIcon:e,hasSubmenu:n,renderLabel:t}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:o,renderLabel:r}=this,{rawNode:a}=this.tmNode;return y("div",{class:`${n}-dropdown-option`},y("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},y("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,o&&`${n}-dropdown-option-body__prefix--show-icon`]},Y(a.icon)),y("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},r?r(a):Y((e=a.title)!==null&&e!==void 0?e:a[this.labelField])),y("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})))}}),Vt=T({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:o}=e;return y(ge,null,y(Ut,{clsPrefix:t,tmNode:e,key:e.key}),o==null?void 0:o.map(r=>Ae(r.rawNode)?y(Le,{clsPrefix:t,key:r.key}):r.isGroup?(rt("dropdown","`group` node is not allowed to be put in `group` node."),null):y(Fe,{clsPrefix:t,tmNode:r,parentKey:n,key:r.key})))}}),Zt=T({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return y("div",n,[e==null?void 0:e()])}});const he=se("n-dropdown-menu");var De=T({name:"DropdownMenu",props:{showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=W(re);ae(he,{showIconRef:A(()=>{const o=n.value;return e.tmNodes.some(r=>{var a;if(r.isGroup)return(a=r.children)===null||a===void 0?void 0:a.some(({rawNode:s})=>o?o(s):s.icon);const{rawNode:i}=r;return o?o(i):i.icon})}),hasSubmenuRef:A(()=>{const{value:o}=t;return e.tmNodes.some(r=>{var a;if(r.isGroup)return(a=r.children)===null||a===void 0?void 0:a.some(({rawNode:s})=>pe(s,o));const{rawNode:i}=r;return pe(i,o)})})})},render(){const{parentKey:e,clsPrefix:n}=this;return y("div",{class:`${n}-dropdown-menu`},this.tmNodes.map(t=>{const{rawNode:o}=t;return qt(o)?y(Zt,{tmNode:t,key:t.key}):Ae(o)?y(Le,{clsPrefix:n,key:t.key}):Wt(o)?y(Vt,{clsPrefix:n,tmNode:t,parentKey:e,key:t.key}):y(Fe,{clsPrefix:n,tmNode:t,parentKey:e,key:t.key,props:o.props})}),this.showArrow?Qe({clsPrefix:n,arrowStyle:this.arrowStyle}):null)}}),Jt=E("dropdown-menu",`
 transform-origin: inherit;
 padding: var(--n-padding);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Mt(),E("dropdown-option",`
 position: relative;
 `,[V("a",`
 text-decoration: none;
 color: inherit;
 `,[V("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),E("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[O("pending",[xe("disabled",{color:"var(--n-option-text-color-hover)",backgroundColor:"var(--n-option-color-hover)"}),H("prefix, suffix",{color:"var(--n-option-text-color-hover)"})]),O("active",[xe("disabled",{color:"var(--n-option-text-color-active)",backgroundColor:"var(--n-option-color-active)"}),H("prefix, suffix",{color:"var(--n-option-text-color-active)"})]),O("disabled",{cursor:"not-allowed",opacity:"var(--n-option-opacity-disabled)"}),O("child-active",{color:"var(--n-option-text-color-child-active)"},[H("prefix, suffix",{color:"var(--n-option-text-color-child-active)"})]),O("group",{fontSize:"calc(var(--n-font-size) - 1px)",color:"var(--n-group-header-text-color)"},[H("prefix",{width:"calc(var(--n-option-prefix-width) / 2)"},[O("show-icon",{width:"calc(var(--n-option-icon-prefix-width) / 2)"})])]),H("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 `,[O("show-icon",{width:"var(--n-option-icon-prefix-width)"}),E("icon",{fontSize:"var(--n-option-icon-size)"})]),H("label",{whiteSpace:"nowrap",flex:1}),H("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 `,[O("has-submenu",{width:"var(--n-option-icon-suffix-width)"}),E("icon",{fontSize:"var(--n-option-icon-size)"})]),E("dropdown-menu",{pointerEvents:"all"})]),E("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),E("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),E("dropdown-menu-wrapper",`
 transform-origin: inherit;
 width: fit-content;
 `)]);const re=se("n-dropdown"),Qt={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},showArrow:Boolean,renderLabel:Function,renderIcon:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Xt=Object.keys(we),Yt=Object.assign(Object.assign(Object.assign({},we),Qt),ke.props);var Q=T({name:"Dropdown",inheritAttrs:!1,props:Yt,setup(e){const n=J(!1),t=lt(q(e,"show"),n),o=A(()=>{const{keyField:d,childrenField:w}=e;return Et(e.options,{getKey(m){return m[d]},getDisabled(m){return m.disabled===!0},getIgnored(m){return m.type==="divider"||m.type==="render"},getChildren(m){return m[w]}})}),r=A(()=>o.value.treeNodes),a=J(null),i=J(null),s=J(null),l=A(()=>{var d,w,m;return(m=(w=(d=a.value)!==null&&d!==void 0?d:i.value)!==null&&w!==void 0?w:s.value)!==null&&m!==void 0?m:null}),u=A(()=>o.value.getPath(l.value).keyPath),c=A(()=>o.value.getPath(e.value).keyPath),h=ee(()=>e.keyboard&&t.value);pt({keydown:{ArrowUp:{prevent:!0,handler:f},ArrowRight:{prevent:!0,handler:P},ArrowDown:{prevent:!0,handler:p},ArrowLeft:{prevent:!0,handler:M},Escape:$},keyup:{Enter:k}},h);const{mergedClsPrefixRef:x}=it(e),C=ke("Dropdown","Dropdown",Jt,Gt,e,x);ae(re,{labelFieldRef:q(e,"labelField"),childrenFieldRef:q(e,"childrenField"),renderLabelRef:q(e,"renderLabel"),renderIconRef:q(e,"renderIcon"),hoverKeyRef:a,keyboardKeyRef:i,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:u,activeKeyPathRef:c,animatedRef:q(e,"animated"),mergedShowRef:t,doSelect:_,doUpdateShow:L}),ve(t,d=>{d||R()});function _(d,w){const{onSelect:m}=e;m&&Se(m,d,w)}function L(d){const{"onUpdate:show":w}=e;w&&Se(w,d),n.value=d}function R(){a.value=null,i.value=null,s.value=null}function $(){L(!1)}function M(){K("left")}function P(){K("right")}function f(){K("up")}function p(){K("down")}function k(){const d=I();(d==null?void 0:d.isLeaf)&&(_(d.key,d.rawNode),L(!1))}function I(){var d;const{value:w}=o,{value:m}=l;return!w||m===null?null:(d=w.getNode(m))!==null&&d!==void 0?d:null}function K(d){const{value:w}=l,{value:{getFirstAvailableNode:m}}=o;let g=null;if(w===null){const v=m();v!==null&&(g=v.key)}else{const v=I();if(v){let b;switch(d){case"down":b=v.getNext();break;case"up":b=v.getPrev();break;case"right":b=v.getChild();break;case"left":b=v.getParent();break}b&&(g=b.key)}}g!==null&&(a.value=null,i.value=g)}return{mergedClsPrefix:x,mergedTheme:C,tmNodes:r,mergedShow:t,doUpdateShow:L,cssVars:A(()=>{const{size:d,inverted:w}=e,{common:{cubicBezierEaseInOut:m},self:g}=C.value,{padding:v,dividerColor:b,borderRadius:z,optionOpacityDisabled:B,[G("optionIconSuffixWidth",d)]:ie,[G("optionSuffixWidth",d)]:j,[G("optionIconPrefixWidth",d)]:$e,[G("optionPrefixWidth",d)]:ze,[G("fontSize",d)]:Te,[G("optionHeight",d)]:Ee,[G("optionIconSize",d)]:Oe}=g,S={"--n-bezier":m,"--n-font-size":Te,"--n-padding":v,"--n-border-radius":z,"--n-option-height":Ee,"--n-option-prefix-width":ze,"--n-option-icon-prefix-width":$e,"--n-option-suffix-width":j,"--n-option-icon-suffix-width":ie,"--n-option-icon-size":Oe,"--n-divider-color":b,"--n-option-opacity-disabled":B};return w?(S["--n-color"]=g.colorInverted,S["--n-option-color-hover"]=g.optionColorHoverInverted,S["--n-option-color-active"]=g.optionColorActiveInverted,S["--n-option-text-color"]=g.optionTextColorInverted,S["--n-option-text-color-hover"]=g.optionTextColorHoverInverted,S["--n-option-text-color-active"]=g.optionTextColorActiveInverted,S["--n-option-text-color-child-active"]=g.optionTextColorChildActiveInverted,S["--n-prefix-color"]=g.prefixColorInverted,S["--n-suffix-color"]=g.suffixColorInverted,S["--n-group-header-text-color"]=g.groupHeaderTextColorInverted):(S["--n-color"]=g.color,S["--n-option-color-hover"]=g.optionColorHover,S["--n-option-color-active"]=g.optionColorActive,S["--n-option-text-color"]=g.optionTextColor,S["--n-option-text-color-hover"]=g.optionTextColorHover,S["--n-option-text-color-active"]=g.optionTextColorActive,S["--n-option-text-color-child-active"]=g.optionTextColorChildActive,S["--n-prefix-color"]=g.prefixColor,S["--n-suffix-color"]=g.suffixColor,S["--n-group-header-text-color"]=g.groupHeaderTextColor),S})}},render(){const e=(o,r,a,i,s)=>{const{mergedClsPrefix:l}=this,u={ref:ft(r),class:[o,`${l}-dropdown`,this.showArrow&&`${l}-popover--show-arrow`],clsPrefix:l,tmNodes:this.tmNodes,style:[a,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,onMouseenter:i,onMouseleave:s};return y(De,ye(this.$attrs,u))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalRenderBody:e,onUpdateShow:this.doUpdateShow};return y(Xe,Object.assign({},dt(this.$props,Xt),t),{trigger:this.$slots.default,_:1})}}),en=[{label:"\u5206\u7C7B\u641C\u5F15",key:"test1"},{label:"\u7279\u8272\u5185\u5BB9",key:"test2"},{label:"\u65B0\u95FB\u52A8\u6001",key:"test3"},{label:"\u6700\u8FD1\u66F4\u6539",key:"test4"},{label:"\u968F\u673A\u6761\u76EE",key:"test5"}],tn=[{label:"\u8054\u7EDC\u6211\u4EEC",key:"test1"},{label:"\u5173\u4E8ESteppe",key:"test2"},{label:"\u53C2\u4E0ESteppe",key:"test3"},{label:"\u8D44\u52A9Steppe",key:"test4"}],nn=[{label:"\u94FE\u5165\u9875\u9762",key:"test1"},{label:"\u76F8\u5173\u66F4\u6539",key:"test2"},{label:"\u4E0A\u4F20\u6587\u4EF6",key:"test3"},{label:"\u7279\u6B8A\u9875\u9762",key:"test4"},{label:"\u56FA\u5B9A\u94FE\u63A5",key:"test5"},{label:"\u9875\u9762\u4FE1\u606F",key:"test6"},{label:"\u6DF1\u8272\u4E3B\u9898",key:"test7"},{label:"\u77ED\u94FE\u63A5",key:"test8"}],on=[{label:"\u5E2E\u52A9",key:"test0"},{label:"Steppe\u793E\u7FA4",key:"test1"},{label:"\u7279\u8272\u5185\u5BB9",key:"test2"},{label:"\u65B9\u9488\u4E0E\u6307\u5F15",key:"test3"},{label:"\u4E92\u52A9\u5BA2\u6808",key:"test4"},{label:"\u77E5\u8BC6\u95EE\u7B54",key:"test5"},{label:"\u5B57\u8BCD\u8F6C\u6362",key:"test5"},{label:"IRC\u5373\u65F6\u804A\u5929",key:"test6"}],rn=[{label:"\u4E2D\u6587",key:"test0"},{label:"English",key:"test1"},{label:"\u65E5\u672C\u8A9E",key:"test2"},{label:"\u6587\u8A00",key:"test3"},{label:"\u7CB5\u8A9E",key:"test4"},{label:"\u8BED\u8A00\u5217\u8868",key:"test5"}];const an={class:"nav"},sn={class:"nav-left"},ln={class:"nav-right"},dn={class:"nav-right-buttons"},un=U("\u968F\u4FBF\u770B\u770B"),cn=U("\u8BA4\u8BC6 Steppe"),fn=U("\u5E38\u7528\u5DE5\u5177"),pn=U("\u5E2E\u52A9"),hn=U("Language"),vn=U("\u767B\u5F55"),yn={setup(e){const n=()=>{},t=()=>{},o=()=>{},r=()=>{},a=()=>{};return(i,s)=>(be(),me("div",an,[X("div",sn,[X("div",{class:"nav-left-title",onClick:s[0]||(s[0]=l=>i.$router.push("/"))},"Steppe")]),X("div",ln,[X("div",dn,[F(N(st),null,{default:D(()=>[F(N(Q),{onSelect:n,trigger:"hover",options:N(en)},{default:D(()=>[F(N(Z),{quaternary:"",color:"#FFF",style:{"font-size":"28px"},size:"large"},{default:D(()=>[un]),_:1})]),_:1},8,["options"]),F(N(Q),{onSelect:t,trigger:"hover",options:N(tn)},{default:D(()=>[F(N(Z),{quaternary:"",color:"#FFF",style:{"font-size":"28px"},size:"large"},{default:D(()=>[cn]),_:1})]),_:1},8,["options"]),F(N(Q),{onSelect:o,trigger:"hover",options:N(nn)},{default:D(()=>[F(N(Z),{quaternary:"",color:"#FFF",style:{"font-size":"28px"},size:"large"},{default:D(()=>[fn]),_:1})]),_:1},8,["options"]),F(N(Q),{onSelect:r,trigger:"hover",options:N(on)},{default:D(()=>[F(N(Z),{quaternary:"",color:"#FFF",style:{"font-size":"28px"},size:"large"},{default:D(()=>[pn]),_:1})]),_:1},8,["options"]),F(N(Q),{onSelect:a,trigger:"hover",options:N(rn)},{default:D(()=>[F(N(Z),{quaternary:"",color:"#FFF",style:{"font-size":"28px"},size:"large"},{default:D(()=>[hn]),_:1})]),_:1},8,["options"]),F(N(Z),{quaternary:"",color:"#FFF",style:{"font-size":"28px"},size:"large",onClick:s[1]||(s[1]=l=>i.$router.push("/login"))},{default:D(()=>[vn]),_:1})]),_:1})])])]))}};var gn=Me(yn,[["__scopeId","data-v-0ae505ec"]]);const bn=T({name:"MainLayout"}),Kn=Object.assign(bn,{setup(e){return(n,t)=>{const o=qe("router-view");return be(),me(ge,null,[F(gn),F(o)],64)}}});export{Kn as default};