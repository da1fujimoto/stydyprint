var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function i(n){return n&&o(n.destroy)?n.destroy:t}function l(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function f(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function m(){return p("")}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function $(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}let v;function y(t){v=t}function x(){if(!v)throw new Error("Function called outside component initialization");return v}function b(){const t=x();return(n,e)=>{const r=t.$$.callbacks[n];if(r){const o=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);r.slice().forEach(n=>{n.call(t,o)})}}}function w(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(t=>t(n))}const k=[],E=[],M=[],_=[],A=Promise.resolve();let L=!1;function T(){L||(L=!0,A.then(C))}function H(t){M.push(t)}let N=!1;const R=new Set;function C(){if(!N){N=!0;do{for(let t=0;t<k.length;t+=1){const n=k[t];y(n),j(n.$$)}for(k.length=0;E.length;)E.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];R.has(n)||(R.add(n),n())}M.length=0}while(k.length);for(;_.length;)_.pop()();L=!1,N=!1,R.clear()}}function j(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}const O=new Set;let I;function S(){I={r:0,c:[],p:I}}function q(){I.r||r(I.c),I=I.p}function D(t,n){t&&t.i&&(O.delete(t),t.i(n))}function P(t,n,e,r){if(t&&t.o){if(O.has(t))return;O.add(t),I.c.push(()=>{O.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function z(t){t&&t.c()}function B(t,e,c){const{fragment:s,on_mount:i,on_destroy:l,after_update:a}=t.$$;s&&s.m(e,c),H(()=>{const e=i.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]}),a.forEach(H)}function F(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function W(n,o,c,s,i,l,a=[-1]){const f=v;y(n);const d=o.props||{},p=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:a};let h=!1;if(p.ctx=c?c(n,d,(t,e,...r)=>{const o=r.length?r[0]:e;return p.ctx&&i(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),h&&function(t,n){-1===t.$$.dirty[0]&&(k.push(t),T(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e}):[],p.update(),h=!0,r(p.before_update),p.fragment=!!s&&s(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();o.intro&&D(n.$$.fragment),B(n,o.target,o.anchor),C()}y(f)}class Y{$destroy(){F(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}const G=[];function J(t,n){return{subscribe:K(t,n).subscribe}}function K(n,e=t){let r;const o=[];function s(t){if(c(n,t)&&(n=t,r)){const t=!G.length;for(let t=0;t<o.length;t+=1){const e=o[t];e[1](),G.push(e,n)}if(t){for(let t=0;t<G.length;t+=2)G[t][0](G[t+1]);G.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,i=t){const l=[c,i];return o.push(l),1===o.length&&(r=e(s)||t),c(n),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function Q(n,e,c){const i=!Array.isArray(n),l=i?[n]:n,a=e.length<2;return J(c,n=>{let c=!1;const u=[];let f=0,d=t;const p=()=>{if(f)return;d();const r=e(i?u[0]:u,n);a?n(r):d=o(r)?r:t},h=l.map((t,n)=>s(t,t=>{u[n]=t,f&=~(1<<n),c&&p()},()=>{f|=1<<n}));return c=!0,p(),function(){r(h),d()}})}function U(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,r,o,c,s=[],i="",l=t.split("/");for(l[0]||l.shift();o=l.shift();)"*"===(e=o[0])?(s.push("wild"),i+="/(.*)"):":"===e?(r=o.indexOf("?",1),c=o.indexOf(".",1),s.push(o.substring(1,~r?r:~c?c:o.length)),i+=~r&&!~c?"(?:/([^/]+?))?":"/([^/]+?)",~c&&(i+=(~r?"?":"")+"\\"+o.substring(c))):i+="/"+o;return{keys:s,pattern:new RegExp("^"+i+(n?"(?=$|/)":"/?$"),"i")}}function V(t){let n,e,r;var o=t[0];return o&&(n=new o({}),n.$on("routeEvent",t[5])),{c(){n&&z(n.$$.fragment),e=m()},m(t,o){n&&B(n,t,o),a(t,e,o),r=!0},p(t,r){if(o!==(o=t[0])){if(n){S();const t=n;P(t.$$.fragment,1,0,()=>{F(t,1)}),q()}o?(n=new o({}),n.$on("routeEvent",t[5]),z(n.$$.fragment),D(n.$$.fragment,1),B(n,e.parentNode,e)):n=null}},i(t){r||(n&&D(n.$$.fragment,t),r=!0)},o(t){n&&P(n.$$.fragment,t),r=!1},d(t){t&&u(e),n&&F(n,t)}}}function X(t){let n,e,r;var o=t[0];function c(t){return{props:{params:t[1]}}}return o&&(n=new o(c(t)),n.$on("routeEvent",t[4])),{c(){n&&z(n.$$.fragment),e=m()},m(t,o){n&&B(n,t,o),a(t,e,o),r=!0},p(t,r){const s={};if(2&r&&(s.params=t[1]),o!==(o=t[0])){if(n){S();const t=n;P(t.$$.fragment,1,0,()=>{F(t,1)}),q()}o?(n=new o(c(t)),n.$on("routeEvent",t[4]),z(n.$$.fragment),D(n.$$.fragment,1),B(n,e.parentNode,e)):n=null}else o&&n.$set(s)},i(t){r||(n&&D(n.$$.fragment,t),r=!0)},o(t){n&&P(n.$$.fragment,t),r=!1},d(t){t&&u(e),n&&F(n,t)}}}function Z(t){let n,e,r,o;const c=[X,V],s=[];function i(t,n){return t[1]?0:1}return n=i(t),e=s[n]=c[n](t),{c(){e.c(),r=m()},m(t,e){s[n].m(t,e),a(t,r,e),o=!0},p(t,[o]){let l=n;n=i(t),n===l?s[n].p(t,o):(S(),P(s[l],1,1,()=>{s[l]=null}),q(),e=s[n],e||(e=s[n]=c[n](t),e.c()),D(e,1),e.m(r.parentNode,r))},i(t){o||(D(e),o=!0)},o(t){P(e),o=!1},d(t){s[n].d(t),t&&u(r)}}}function tt(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let r="";return e>-1&&(r=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:r}}const nt=J(null,(function(t){t(tt());const n=()=>{t(tt())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));Q(nt,t=>t.location),Q(nt,t=>t.querystring);function et(t,n){if(!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return rt(t,n||t.getAttribute("href")),{update(n){rt(t,n)}}}function rt(t,n){if(!n||n.length<1||"/"!=n.charAt(0))throw Error('Invalid value for "href" attribute');t.setAttribute("href","#"+n)}function ot(n,e,r){let o,c=t;!function(t,n,e){t.$$.on_destroy.push(s(n,e))}(n,nt,t=>r(6,o=t)),n.$$.on_destroy.push(()=>c());let{routes:i={}}=e,{prefix:l=""}=e;class a{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:e,keys:r}=U(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.route,this.conditions=n.conditions||[],this.userData=n.userData):(this.component=n,this.conditions=[],this.userData=void 0),this._pattern=e,this._keys=r}match(t){l&&t.startsWith(l)&&(t=t.substr(l.length)||"/");const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let r=0;for(;r<this._keys.length;)e[this._keys[r]]=n[++r]||null;return e}checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!this.conditions[n](t))return!1;return!0}}const u=[];i instanceof Map?i.forEach((t,n)=>{u.push(new a(n,t))}):Object.keys(i).forEach(t=>{u.push(new a(t,i[t]))});let f=null,d=null;const p=b(),h=(t,n)=>{(T(),A).then(()=>{p(t,n)})};return n.$set=t=>{"routes"in t&&r(2,i=t.routes),"prefix"in t&&r(3,l=t.prefix)},n.$$.update=()=>{if(65&n.$$.dirty){r(0,f=null);let t=0;for(;!f&&t<u.length;){const n=u[t].match(o.location);if(n){const e={component:u[t].component,name:u[t].component.name,location:o.location,querystring:o.querystring,userData:u[t].userData};if(!u[t].checkConditions(e)){h("conditionsFailed",e);break}r(0,f=u[t].component),n&&"object"==typeof n&&Object.keys(n).length?r(1,d=n):r(1,d=null),h("routeLoaded",e)}t++}}},[f,d,i,l,function(t){w(n,t)},function(t){w(n,t)}]}class ct extends Y{constructor(t){super(),W(this,t,ot,Z,c,{routes:2,prefix:3})}}function st(n){let e;return{c(){e=d("div"),g(e,"class","clock-chart"),g(e,"id",n[0])},m(t,n){a(t,e,n)},p(t,[n]){1&n&&g(e,"id",t[0])},i:t,o:t,d(t){t&&u(e)}}}function it(t,n,e){let{clockid:r="clock-id"}=n,{dt:o=new Date("2000-01-01T00:00:00")}=n,{dateRandom:c=!1}=n;const s=(t,n)=>(t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t))+t);if(c){const t=("00"+s(0,12).toString()).slice(-2),n=("00"+s(0,60).toString()).slice(-2);o=new Date(`2000-01-01T${t}:${n}:00`)}var i;return i=()=>{const t=Math.min(300,300)/2,n=d3.scaleLinear().domain([0,60]).range([0,360]),e=d3.scaleLinear().domain([0,12]).range([0,360]),c=d3.select("#"+r).append("svg").attr("viewBox",`${-t} ${-t} ${2*t} ${2*t}`).attr("preserveAspectRatio","xMidYMid");c.append("circle").classed("background",!0).attr("cx",0).attr("cy",0).attr("r",t),c.append("g").classed("axis",!0).call(d3.axisRadialInner(e.copy().range([0,2*Math.PI]),t-1).ticks(12).tickSize(12)),c.append("g").classed("minor-ticks",!0).call(d3.axisRadialInner(n.copy().range([0,2*Math.PI]),t-1).ticks(60).tickSize(6)),c.append("g").classed("pointers",!0).attr("transform",`scale(${t})`).selectAll("rect").data([{class:"hour",width:.06,height:.55},{class:"min",width:.05,height:.85},{class:"sec",width:.02,height:.85}]).enter().append("rect").attr("class",t=>t.class).attr("x",t=>-t.width/2).attr("y",t=>-t.height+t.width/2).attr("width",t=>t.width).attr("height",t=>t.height).attr("rx",.02).attr("ry",.03),c.select(".pointers").append("circle").classed("center",!0).attr("x",150).attr("y",150).attr("r",.05),(t=>{const o=t.getMilliseconds(),c=t.getSeconds()+o/1e3,s=t.getMinutes()+c/60,i=t.getHours()%12+s/60;d3.select(`#${r} .pointers .hour`).attr("transform",`rotate(${e(i)})`),d3.select(`#${r} .pointers .min`).attr("transform",`rotate(${n(s)})`),d3.select(`#${r} .pointers .sec`).attr("transform",`rotate(${n(c)})`)})(o)},x().$$.on_mount.push(i),t.$set=t=>{"clockid"in t&&e(0,r=t.clockid),"dt"in t&&e(1,o=t.dt),"dateRandom"in t&&e(2,c=t.dateRandom)},[r,o,c]}class lt extends Y{constructor(t){super(),W(this,t,it,st,c,{clockid:0,dt:1,dateRandom:2})}}function at(t){let n,e,r,o,c,s,i,f,m,$;return i=new lt({props:{clockid:"clock-"+t[0],dateRandom:!0}}),{c(){n=d("div"),e=d("div"),r=d("div"),o=d("div"),c=p(t[0]),s=h(),z(i.$$.fragment),f=h(),m=d("div"),m.innerHTML='<input type="text" value="">',g(o,"class","card-title svelte-1av6w0t"),g(r,"class","card-content"),g(m,"class","card-action"),g(e,"class","card"),g(n,"class","col s3 m3 l3")},m(t,u){a(t,n,u),l(n,e),l(e,r),l(r,o),l(o,c),l(r,s),B(i,r,null),l(e,f),l(e,m),$=!0},p(t,[n]){(!$||1&n)&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(c,t[0]);const e={};1&n&&(e.clockid="clock-"+t[0]),i.$set(e)},i(t){$||(D(i.$$.fragment,t),$=!0)},o(t){P(i.$$.fragment,t),$=!1},d(t){t&&u(n),F(i)}}}function ut(t,n,e){let{idx:r=0}=n;return t.$set=t=>{"idx"in t&&e(0,r=t.idx)},[r]}class ft extends Y{constructor(t){super(),W(this,t,ut,at,c,{idx:0})}}function dt(t,n,e){const r=t.slice();return r[1]=n[e],r}function pt(n){let e,r;return e=new ft({props:{idx:n[1]}}),{c(){z(e.$$.fragment)},m(t,n){B(e,t,n),r=!0},p:t,i(t){r||(D(e.$$.fragment,t),r=!0)},o(t){P(e.$$.fragment,t),r=!1},d(t){F(e,t)}}}function ht(t){let n,e,r,o,c,s,i,p,m,$=t[0],v=[];for(let n=0;n<$.length;n+=1)v[n]=pt(dt(t,$,n));const y=t=>P(v[t],1,1,()=>{v[t]=null});return{c(){n=d("div"),e=d("div"),r=d("div"),r.innerHTML='<input type="text" placeholder="ひづけ">',o=h(),c=d("div"),c.innerHTML='<input type="text" placeholder="なまえ">',s=h(),i=d("div"),i.innerHTML='<input type="text" placeholder="てん">',p=h();for(let t=0;t<v.length;t+=1)v[t].c();g(r,"class","col s4 m4 l4"),g(c,"class","col s6 m6 l6"),g(i,"class","col s2 m2 l2"),g(e,"class","row svelte-lekd29"),g(n,"class","container")},m(t,u){a(t,n,u),l(n,e),l(e,r),l(e,o),l(e,c),l(e,s),l(e,i),l(e,p);for(let t=0;t<v.length;t+=1)v[t].m(e,null);m=!0},p(t,[n]){if(1&n){let r;for($=t[0],r=0;r<$.length;r+=1){const o=dt(t,$,r);v[r]?(v[r].p(o,n),D(v[r],1)):(v[r]=pt(o),v[r].c(),D(v[r],1),v[r].m(e,null))}for(S(),r=$.length;r<v.length;r+=1)y(r);q()}},i(t){if(!m){for(let t=0;t<$.length;t+=1)D(v[t]);m=!0}},o(t){v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)P(v[t]);m=!1},d(t){t&&u(n),f(v,t)}}}function mt(t){return[[...Array(12)].map((t,n)=>n+1)]}class gt extends Y{constructor(t){super(),W(this,t,mt,ht,c,{})}}function $t(t,n,e){const r=t.slice();return r[1]=n[e],r}function vt(t,n,e){const r=t.slice();return r[1]=n[e],r}function yt(n){let e,r,o,c,s,i,f,m=n[1]+"";return{c(){e=d("div"),r=d("div"),o=d("div"),c=p(m),s=h(),i=d("div"),i.innerHTML='\n              1 + 1 =\n              <div class="input-field inline" style="width: 3em"><input type="text" value=""></div>',f=h(),g(o,"class","card-title svelte-137ting"),g(i,"class","mulcon svelte-137ting"),$(i,"margin-top","-2.5em"),$(i,"margin-bottom","-1em"),g(r,"class","card-content"),g(e,"class","card")},m(t,n){a(t,e,n),l(e,r),l(r,o),l(o,c),l(r,s),l(r,i),l(e,f)},p:t,d(t){t&&u(e)}}}function xt(n){let e,r,o,c,s,i,f,m=n[1]+"";return{c(){e=d("div"),r=d("div"),o=d("div"),c=p(m),s=h(),i=d("div"),i.innerHTML='\n              1 + 1 =\n              <div class="input-field inline" style="width: 3em"><input type="text" value=""></div>',f=h(),g(o,"class","card-title svelte-137ting"),g(i,"class","mulcon svelte-137ting"),$(i,"margin-top","-2.5em"),$(i,"margin-bottom","-1em"),g(r,"class","card-content"),g(e,"class","card")},m(t,n){a(t,e,n),l(e,r),l(r,o),l(o,c),l(r,s),l(r,i),l(e,f)},p:t,d(t){t&&u(e)}}}function bt(n){let e,r,o,c,s,i,p,m,$,v,y,x=n[0],b=[];for(let t=0;t<x.length;t+=1)b[t]=yt(vt(n,x,t));let w=n[0],k=[];for(let t=0;t<w.length;t+=1)k[t]=xt($t(n,w,t));return{c(){e=d("div"),r=d("div"),o=d("div"),o.innerHTML='<input type="text" placeholder="ひづけ">',c=h(),s=d("div"),s.innerHTML='<input type="text" placeholder="なまえ">',i=h(),p=d("div"),p.innerHTML='<input type="text" placeholder="てん">',m=h(),$=d("div");for(let t=0;t<b.length;t+=1)b[t].c();v=h(),y=d("div");for(let t=0;t<k.length;t+=1)k[t].c();g(o,"class","col s4 m4 l4"),g(s,"class","col s6 m6 l6"),g(p,"class","col s2 m2 l2"),g($,"class","col s6 m6 l6"),g(y,"class","col s6 m6 l6"),g(r,"class","row svelte-137ting"),g(e,"class","container")},m(t,n){a(t,e,n),l(e,r),l(r,o),l(r,c),l(r,s),l(r,i),l(r,p),l(r,m),l(r,$);for(let t=0;t<b.length;t+=1)b[t].m($,null);l(r,v),l(r,y);for(let t=0;t<k.length;t+=1)k[t].m(y,null)},p(t,[n]){if(1&n){let e;for(x=t[0],e=0;e<x.length;e+=1){const r=vt(t,x,e);b[e]?b[e].p(r,n):(b[e]=yt(r),b[e].c(),b[e].m($,null))}for(;e<b.length;e+=1)b[e].d(1);b.length=x.length}if(1&n){let e;for(w=t[0],e=0;e<w.length;e+=1){const r=$t(t,w,e);k[e]?k[e].p(r,n):(k[e]=xt(r),k[e].c(),k[e].m(y,null))}for(;e<k.length;e+=1)k[e].d(1);k.length=w.length}},i:t,o:t,d(t){t&&u(e),f(b,t),f(k,t)}}}function wt(t){return[[...Array(10)].map((t,n)=>n+1)]}class kt extends Y{constructor(t){super(),W(this,t,wt,bt,c,{})}}function Et(n){let e;return{c(){e=d("div"),e.innerHTML="<p>MainPage</p>",g(e,"class","container")},m(t,n){a(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}class Mt extends Y{constructor(t){super(),W(this,t,null,Et,c,{})}}function _t(n){let e;return{c(){e=d("div"),e.innerHTML="<p>About</p>",g(e,"class","container")},m(t,n){a(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}class At extends Y{constructor(t){super(),W(this,t,null,_t,c,{})}}const Lt=[];let Tt;function Ht(t){(t.className||"").split(" ").forEach(n=>{n&&(t.node.classList.remove(n),t.pattern.test(Tt)&&t.node.classList.add(n))})}function Nt(t,n){if(!(n=n&&("string"==typeof n||"object"==typeof n&&n instanceof RegExp)?{path:n}:n||{}).path&&t.hasAttribute("href")&&(n.path=t.getAttribute("href"),n.path&&n.path.length>1&&"#"==n.path.charAt(0)&&(n.path=n.path.substring(1))),n.className||(n.className="active"),!n.path||"string"==typeof n.path&&(n.path.length<1||"/"!=n.path.charAt(0)&&"*"!=n.path.charAt(0)))throw Error('Invalid value for "path" argument');const{pattern:e}="string"==typeof n.path?U(n.path):{pattern:n.path},r={node:t,className:n.className,pattern:e};return Lt.push(r),Ht(r),{destroy(){Lt.splice(Lt.indexOf(r),1)}}}function Rt(n){let e,o,c,s,f,p,m,$,v,y,x,b,w,k,E,M,_,A,L,T,H,N,R;return{c(){e=d("nav"),o=d("div"),c=d("div"),s=d("a"),s.textContent="Let's Study",p=h(),m=d("ul"),$=d("li"),v=d("a"),v.textContent="とけい",b=h(),w=d("li"),k=d("a"),k.textContent="かけざん",_=h(),A=d("li"),L=d("a"),L.textContent="About",g(s,"href","/"),g(s,"class","brand-logo"),g(v,"href","/clock"),g(k,"href","/multi"),g(L,"href","/about"),g(m,"id","nav-mobile"),g(m,"class","right hide-on-med-and-down"),g(c,"class","nav-wrapper "),g(o,"class","container"),g(e,"class","svelte-1p88t02")},m(t,n){a(t,e,n),l(e,o),l(o,c),l(c,s),l(c,p),l(c,m),l(m,$),l($,v),l(m,b),l(m,w),l(w,k),l(m,_),l(m,A),l(A,L),N||(R=[i(f=et.call(null,s)),i(y=et.call(null,v)),i(x=Nt.call(null,v)),i(E=et.call(null,k)),i(M=Nt.call(null,k)),i(T=et.call(null,L)),i(H=Nt.call(null,L))],N=!0)},p:t,i:t,o:t,d(t){t&&u(e),N=!1,r(R)}}}nt.subscribe(t=>{Tt=t.location+(t.querystring?"?"+t.querystring:""),Lt.map(Ht)});class Ct extends Y{constructor(t){super(),W(this,t,null,Rt,c,{})}}function jt(n){let e;return{c(){e=d("div"),e.innerHTML="<p>Test Page</p>",g(e,"class","container")},m(t,n){a(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}class Ot extends Y{constructor(t){super(),W(this,t,null,jt,c,{})}}function It(n){let e,r,o,c,s;return e=new Ct({}),c=new ct({props:{routes:n[0]}}),{c(){z(e.$$.fragment),r=h(),o=d("main"),z(c.$$.fragment),g(o,"class","svelte-1excuz9")},m(t,n){B(e,t,n),a(t,r,n),a(t,o,n),B(c,o,null),s=!0},p:t,i(t){s||(D(e.$$.fragment,t),D(c.$$.fragment,t),s=!0)},o(t){P(e.$$.fragment,t),P(c.$$.fragment,t),s=!1},d(t){F(e,t),t&&u(r),t&&u(o),F(c)}}}function St(t){return[{"/":Mt,"/clock":gt,"/multi":kt,"/about":At,"/test":Ot}]}return new class extends Y{constructor(t){super(),W(this,t,St,It,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
