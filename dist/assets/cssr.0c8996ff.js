import{A as L,s as G,j as S,w as P,q as z,k as J,m as Q,f as X}from"./vendor.60b159b2.js";import{i as Y}from"./utils.f3ff1089.js";import{C as Z}from"./use-rtl.0c8d05c2.js";globalThis&&globalThis.__awaiter;function de(n=8){return Math.random().toString(16).slice(2,2+n)}function fe(n,r=[],i){const o={};return r.forEach(u=>{o[u]=n[u]}),Object.assign(o,i)}const ce=(n,...r)=>typeof n=="function"?n(...r):typeof n=="string"?L(n):typeof n=="number"?L(String(n)):null;let I,O;const K=()=>{var n,r;I=Y?(r=(n=document)===null||n===void 0?void 0:n.fonts)===null||r===void 0?void 0:r.ready:void 0,O=!1,I!==void 0?I.then(()=>{O=!0}):O=!0};K();function le(n){if(O)return;let r=!1;G(()=>{O||I==null||I.then(()=>{r||n()})}),S(()=>{r=!0})}const R={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function ee(n,r,i){if(n==="mousemoveoutside"){const o=u=>{r.contains(u.target)||i(u)};return{mousemove:o,touchstart:o}}else if(n==="clickoutside"){let o=!1;const u=p=>{o=!r.contains(p.target)},a=p=>{!o||r.contains(p.target)||i(p)};return{mousedown:u,mouseup:a,touchstart:u,touchend:a}}return console.error(`[evtd/create-trap-handler]: name \`${n}\` is invalid. This could be a bug of evtd.`),{}}function N(n,r,i){const o=R[n];let u=o.get(r);u===void 0&&o.set(r,u=new WeakMap);let a=u.get(i);return a===void 0&&u.set(i,a=ee(n,r,i)),a}function ne(n,r,i,o){if(n==="mousemoveoutside"||n==="clickoutside"){const u=N(n,r,i);return Object.keys(u).forEach(a=>{ie(a,document,u[a],o)}),!0}return!1}function te(n,r,i,o){if(n==="mousemoveoutside"||n==="clickoutside"){const u=N(n,r,i);return Object.keys(u).forEach(a=>{oe(a,document,u[a],o)}),!0}return!1}function re(){if(typeof window=="undefined")return{on:()=>{},off:()=>{}};const n=new WeakMap,r=new WeakMap;function i(){n.set(this,!0)}function o(){n.set(this,!0),r.set(this,!0)}function u(t,e,s){const f=t[e];return t[e]=function(){return s.apply(t,arguments),f.apply(t,arguments)},t}function a(t,e){t[e]=Event.prototype[e]}const p=new WeakMap,T=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function M(){var t;return(t=p.get(this))!==null&&t!==void 0?t:null}function c(t,e){T!==void 0&&Object.defineProperty(t,"currentTarget",{configurable:!0,enumerable:!0,get:e!=null?e:T.get})}const d={bubble:{},capture:{}},l={};function A(){const t=function(e){const{type:s,eventPhase:f,target:w,bubbles:v}=e;if(f===2)return;const m=f===1?"capture":"bubble";let b=w;const h=[];for(;b===null&&(b=window),h.push(b),b!==window;)b=b.parentNode||null;const g=d.capture[s],E=d.bubble[s];if(u(e,"stopPropagation",i),u(e,"stopImmediatePropagation",o),c(e,M),m==="capture"){if(g===void 0)return;for(let H=h.length-1;H>=0&&!n.has(e);--H){const j=h[H],W=g.get(j);if(W!==void 0){p.set(e,j);for(const k of W){if(r.has(e))break;k(e)}}if(H===0&&!v&&E!==void 0){const k=E.get(j);if(k!==void 0)for(const y of k){if(r.has(e))break;y(e)}}}}else if(m==="bubble"){if(E===void 0)return;for(let H=0;H<h.length&&!n.has(e);++H){const j=h[H],W=E.get(j);if(W!==void 0){p.set(e,j);for(const k of W){if(r.has(e))break;k(e)}}}}a(e,"stopPropagation"),a(e,"stopImmediatePropagation"),c(e)};return t.displayName="evtdUnifiedHandler",t}function B(){const t=function(e){const{type:s,eventPhase:f}=e;if(f!==2)return;const w=l[s];w!==void 0&&w.forEach(v=>v(e))};return t.displayName="evtdUnifiedWindowEventHandler",t}const x=A(),C=B();function _(t,e){const s=d[t];return s[e]===void 0&&(s[e]=new Map,window.addEventListener(e,x,t==="capture")),s[e]}function F(t){return l[t]===void 0&&(l[t]=new Set,window.addEventListener(t,C)),l[t]}function U(t,e){let s=t.get(e);return s===void 0&&t.set(e,s=new Set),s}function q(t,e,s,f){const w=d[e][s];if(w!==void 0){const v=w.get(t);if(v!==void 0&&v.has(f))return!0}return!1}function V(t,e){const s=l[t];return!!(s!==void 0&&s.has(e))}function $(t,e,s,f){let w;if(typeof f=="object"&&f.once===!0?w=g=>{D(t,e,w,f),s(g)}:w=s,ne(t,e,w,f))return;const m=f===!0||typeof f=="object"&&f.capture===!0?"capture":"bubble",b=_(m,t),h=U(b,e);if(h.has(w)||h.add(w),e===window){const g=F(t);g.has(w)||g.add(w)}}function D(t,e,s,f){if(te(t,e,s,f))return;const v=f===!0||typeof f=="object"&&f.capture===!0,m=v?"capture":"bubble",b=_(m,t),h=U(b,e);if(e===window&&!q(e,v?"bubble":"capture",t,s)&&V(t,s)){const E=l[t];E.delete(s),E.size===0&&(window.removeEventListener(t,C),l[t]=void 0)}h.has(s)&&h.delete(s),h.size===0&&b.delete(e),b.size===0&&(window.removeEventListener(t,x,m==="capture"),d[m][t]=void 0)}return{on:$,off:D}}const{on:ie,off:oe}=re();function pe(n,r){return P(n,i=>{i!==void 0&&(r.value=i)}),z(()=>n.value===void 0?r.value:n.value)}function we(n,r){return z(()=>{for(const i of r)if(n[i]!==void 0)return n[i];return n[r[r.length-1]]})}function be(n,r,i){var o;const u=J(n,null);if(u===null)return;const a=(o=Q())===null||o===void 0?void 0:o.proxy;P(i,p),p(i.value),S(()=>{p(void 0,i.value)});function p(c,d){const l=u[r];d!==void 0&&T(l,d),c!==void 0&&M(l,c)}function T(c,d){c[d]||(c[d]=[]),c[d].splice(c[d].findIndex(l=>l===a),1)}function M(c,d){c[d]||(c[d]=[]),~c[d].findIndex(l=>l===a)||c[d].push(a)}}function he(n,r,i){if(!r)return n;const o=X(n.value);let u=null;return P(n,a=>{u!==null&&window.clearTimeout(u),a===!0?i&&!i.value?o.value=!0:u=window.setTimeout(()=>{o.value=!0},r):o.value=!1}),o}const{c:ve}=Z(),me="vueuc-style";export{ie as a,le as b,me as c,ve as d,de as e,we as f,he as g,be as h,fe as k,oe as o,ce as r,pe as u};
