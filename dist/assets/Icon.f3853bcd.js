import{d as f,g,h as a,c as l,l as p,k as y,w as v}from"./use-rtl.a873a0ca.js";import{f as b}from"./utils.5ef80674.js";import{d as C,l as m,j as h,n as _}from"./vendor.a9c6e360.js";let r=[];const d=new WeakMap;function $(){r.forEach(e=>e(...d.get(e))),r=[]}function S(e,...t){d.set(e,t),!r.includes(e)&&r.push(e)===1&&requestAnimationFrame($)}const j=e=>{const{textColorBase:t,opacity1:i,opacity2:o,opacity3:n,opacity4:s,opacity5:c}=e;return{color:t,opacity1Depth:i,opacity2Depth:o,opacity3Depth:n,opacity4Depth:s,opacity5Depth:c}},z={name:"Icon",common:f,self:j};var x=z,O=g("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[a("color-transition",{transition:"color .3s var(--n-bezier)"}),a("depth",{color:"var(--n-color)"},[l("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),l("svg",{height:"1em",width:"1em"})]),N=C({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Object.assign(Object.assign({},p.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),setup(e){const{mergedClsPrefixRef:t}=y(e),i=p("Icon","Icon",O,x,e,t);return{mergedClsPrefix:t,mergedStyle:m(()=>{const{size:o,color:n}=e;return{fontSize:b(o),color:n}}),cssVars:m(()=>{const{depth:o}=e,{common:{cubicBezierEaseInOut:n},self:s}=i.value;if(o!==void 0){const{color:c,[`opacity${o}Depth`]:u}=s;return{"--n-bezier":n,"--n-color":c,"--n-opacity":u}}return{"--n-bezier":n}})}},render(){var e;const{$parent:t,depth:i,mergedClsPrefix:o,component:n}=this;return((e=t==null?void 0:t.$options)===null||e===void 0?void 0:e._n_icon__)&&v("icon","don't wrap `n-icon` inside `n-icon`"),h("i",_(this.$attrs,{role:"img",class:[`${o}-icon`,{[`${o}-icon--depth`]:i,[`${o}-icon--color-transition`]:i!==void 0}],style:Object.assign(this.cssVars,this.mergedStyle)}),n?h(n):this.$slots)}});export{N,S as b};
