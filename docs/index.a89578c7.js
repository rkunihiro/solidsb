const e={};function t(t){e.context=t}const n=(e,t)=>e===t,o=(Symbol("solid-proxy"),Symbol("solid-track")),r=(Symbol("solid-dev-component"),{equals:n});let s=null,l=F;const i={},u={owned:null,cleanups:null,context:null,owner:null},[a,c]=x(!1);var f=null;let d,p=null,h=null,g=null,m=null,b=null,v=null,y=null,w=0;function S(e,t){const n=m,o=f,r=0===e.length?u:{owned:null,cleanups:null,context:null,owner:t||o};f=r,m=null;try{return I((()=>e((()=>R(r)))),!0)}finally{m=n,f=o}}function x(e,t){t=t?Object.assign({},r,t):r;const n={value:e,observers:null,observerSlots:null,pending:i,comparator:t.equals||void 0};return[V.bind(n),e=>("function"==typeof e&&(e=p&&p.running&&p.sources.has(n)?e(n.pending!==i?n.pending:n.tValue):e(n.pending!==i?n.pending:n.value)),D(n,e))]}function k(e,t,n){const o=j(e,t,!0,1);h&&p&&p.running?v.push(o):L(o)}function A(e,t,n){const o=j(e,t,!1,1);h&&p&&p.running?v.push(o):L(o)}function C(e,t,n){n=n?Object.assign({},r,n):r;const o=j(e,t,!0,0);return o.pending=i,o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,h&&p&&p.running?(o.tState=1,v.push(o)):L(o),V.bind(o)}function N(e){if(b)return e();let t;const n=b=[];try{t=e()}finally{b=null}return I((()=>{for(let e=0;e<n.length;e+=1){const t=n[e];if(t.pending!==i){const e=t.pending;t.pending=i,D(t,e)}}}),!1),t}function O(e){let t,n=m;return m=null,t=e(),m=n,t}function M(e){!function(e,t,n){l=_;const o=j(e,t,!1,1),r=d&&K(f,d.id);r&&(o.suspense=r),o.user=!0,y?y.push(o):L(o)}((()=>O(e)))}function q(e){return null===f||(null===f.cleanups?f.cleanups=[e]:f.cleanups.push(e)),e}function T(e){s||(s=Symbol("error")),null===f||(null===f.context?f.context={[s]:[e]}:f.context[s]?f.context[s].push(e):f.context[s]=[e])}function E(e){if(p&&p.running)return e(),p.done;const t=m,n=f;return Promise.resolve().then((()=>{let o;return m=t,f=n,(h||d)&&(o=p||(p={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),o.done||(o.done=new Promise((e=>o.resolve=e))),o.running=!0),N(e),m=f=null,o?o.done:void 0}))}function B(e){const t=Symbol("context");return{id:t,Provider:U(t),defaultValue:e}}function $(e){const t=C(e);return C((()=>Q(t())))}function V(){const e=p&&p.running;if(this.sources&&(!e&&this.state||e&&this.tState)){const t=v;v=null,!e&&1===this.state||e&&1===this.tState?L(this):z(this),v=t}if(m){const e=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(e)):(m.sources=[this],m.sourceSlots=[e]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return e&&p.sources.has(this)?this.tValue:this.value}function D(e,t,n){if(b)return e.pending===i&&b.push(e),e.pending=t,t;if(e.comparator)if(p&&p.running&&p.sources.has(e)){if(e.comparator(e.tValue,t))return t}else if(e.comparator(e.value,t))return t;let o=!1;return p?(o=p.running,(o||!n&&p.sources.has(e))&&(p.sources.add(e),e.tValue=t),o||(e.value=t)):e.value=t,e.observers&&e.observers.length&&I((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];o&&p.disposed.has(n)||((o&&!n.tState||!o&&!n.state)&&(n.pure?v.push(n):y.push(n),n.observers&&H(n)),o?n.tState=1:n.state=1)}if(v.length>1e6)throw v=[],new Error}),!1),t}function L(e){if(!e.fn)return;R(e);const t=f,n=m,o=w;m=f=e,P(e,p&&p.running&&p.sources.has(e)?e.tValue:e.value,o),p&&!p.running&&p.sources.has(e)&&queueMicrotask((()=>{I((()=>{p&&(p.running=!0),P(e,e.tValue,o)}),!1)})),m=n,f=t}function P(e,t,n){let o;try{o=e.fn(t)}catch(e){J(e)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?D(e,o,!0):p&&p.running&&e.pure?(p.sources.add(e),e.tValue=o):e.value=o,e.updatedAt=n)}function j(e,t,n,o=1,r){const s={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:f,context:null,pure:n};if(p&&p.running&&(s.state=0,s.tState=o),null===f||f!==u&&(p&&p.running&&f.pure?f.tOwned?f.tOwned.push(s):f.tOwned=[s]:f.owned?f.owned.push(s):f.owned=[s]),g){const[e,t]=x(void 0,{equals:!1}),n=g(s.fn,t);q((()=>n.dispose()));const o=()=>E(t).then((()=>r.dispose())),r=g(s.fn,o);s.fn=t=>(e(),p&&p.running?r.track(t):n.track(t))}return s}function G(e){const t=p&&p.running;if(!t&&0===e.state||t&&0===e.tState)return;if(!t&&2===e.state||t&&2===e.tState)return z(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<w);){if(t&&p.disposed.has(e))return;(!t&&e.state||t&&e.tState)&&n.push(e)}for(let o=n.length-1;o>=0;o--){if(e=n[o],t){let t=e,r=n[o+1];for(;(t=t.owner)&&t!==r;)if(p.disposed.has(t))return}if(!t&&1===e.state||t&&1===e.tState)L(e);else if(!t&&2===e.state||t&&2===e.tState){const t=v;v=null,z(e,n[0]),v=t}}}function I(e,t){if(v)return e();let n=!1;t||(v=[]),y?n=!0:y=[],w++;try{const t=e();return function(e){v&&(h&&p&&p.running?function(e){for(let t=0;t<e.length;t++){const n=e[t],o=p.queue;o.has(n)||(o.add(n),h((()=>{o.delete(n),I((()=>{p.running=!0,G(n),o.size||(y.push.apply(y,p.effects),p.effects=[])}),!1),p&&(p.running=!1)})))}}(v):F(v),v=null);if(e)return;let t;if(p&&p.running){if(p.promises.size||p.queue.size)return p.running=!1,p.effects.push.apply(p.effects,y),y=null,void c(!0);const e=p.sources;t=p.resolve,y.forEach((e=>{"tState"in e&&(e.state=e.tState),delete e.tState})),p=null,N((()=>{e.forEach((e=>{if(e.value=e.tValue,e.owned)for(let t=0,n=e.owned.length;t<n;t++)R(e.owned[t]);e.tOwned&&(e.owned=e.tOwned),delete e.tValue,delete e.tOwned,e.tState=0})),c(!1)}))}y.length?N((()=>{l(y),y=null})):y=null;t&&t()}(n),t}catch(e){J(e)}finally{v=null,n||(y=null)}}function F(e){for(let t=0;t<e.length;t++)G(e[t])}function _(n){let o,r=0;for(o=0;o<n.length;o++){const e=n[o];e.user?n[r++]=e:G(e)}e.context&&t();const s=n.length;for(o=0;o<r;o++)G(n[o]);for(o=s;o<n.length;o++)G(n[o])}function z(e,t){const n=p&&p.running;n?e.tState=0:e.state=0;for(let o=0;o<e.sources.length;o+=1){const r=e.sources[o];r.sources&&(!n&&1===r.state||n&&1===r.tState?r!==t&&G(r):(!n&&2===r.state||n&&2===r.tState)&&z(r,t))}}function H(e){const t=p&&p.running;for(let n=0;n<e.observers.length;n+=1){const o=e.observers[n];(!t&&!o.state||t&&!o.tState)&&(t?o.tState=2:o.state=2,o.pure?v.push(o):y.push(o),o.observers&&H(o))}}function R(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),o=t.observers;if(o&&o.length){const e=o.pop(),r=t.observerSlots.pop();n<o.length&&(e.sourceSlots[r]=n,o[n]=e,t.observerSlots[n]=r)}}if(p&&p.running&&e.pure){if(e.tOwned){for(t=0;t<e.tOwned.length;t++)R(e.tOwned[t]);delete e.tOwned}X(e,!0)}else if(e.owned){for(t=0;t<e.owned.length;t++)R(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}p&&p.running?e.tState=0:e.state=0,e.context=null}function X(e,t){if(t||(e.tState=0,p.disposed.add(e)),e.owned)for(let t=0;t<e.owned.length;t++)X(e.owned[t])}function J(e){const t=s&&K(f,s);if(!t)throw e;t.forEach((t=>t(e)))}function K(e,t){return e?e.context&&void 0!==e.context[t]?e.context[t]:K(e.owner,t):void 0}function Q(e){if("function"==typeof e&&!e.length)return Q(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const o=Q(e[n]);Array.isArray(o)?t.push.apply(t,o):t.push(o)}return t}return e}function U(e){return function(t){let n;return k((()=>n=O((()=>(f.context={[e]:t.value},$((()=>t.children))))))),n}}const W=Symbol("fallback");function Y(e){for(let t=0;t<e.length;t++)e[t]()}let Z=!1;function ee(n,o){if(Z&&e.context){const r=e.context;t({...e.context,id:`${e.context.id}${e.context.count++}-`,count:0});const s=O((()=>n(o||{})));return t(r),s}return O((()=>n(o||{})))}function te(e){const t="fallback"in e&&{fallback:()=>e.fallback};return C(function(e,t,n={}){let r=[],s=[],l=[],i=0,u=t.length>1?[]:null;return q((()=>Y(l))),()=>{let a,c,f=e()||[];return f[o],O((()=>{let e,t,o,p,h,g,m,b,v,y=f.length;if(0===y)0!==i&&(Y(l),l=[],r=[],s=[],i=0,u&&(u=[])),n.fallback&&(r=[W],s[0]=S((e=>(l[0]=e,n.fallback()))),i=1);else if(0===i){for(s=new Array(y),c=0;c<y;c++)r[c]=f[c],s[c]=S(d);i=y}else{for(o=new Array(y),p=new Array(y),u&&(h=new Array(y)),g=0,m=Math.min(i,y);g<m&&r[g]===f[g];g++);for(m=i-1,b=y-1;m>=g&&b>=g&&r[m]===f[b];m--,b--)o[b]=s[m],p[b]=l[m],u&&(h[b]=u[m]);for(e=new Map,t=new Array(b+1),c=b;c>=g;c--)v=f[c],a=e.get(v),t[c]=void 0===a?-1:a,e.set(v,c);for(a=g;a<=m;a++)v=r[a],c=e.get(v),void 0!==c&&-1!==c?(o[c]=s[a],p[c]=l[a],u&&(h[c]=u[a]),c=t[c],e.set(v,c)):l[a]();for(c=g;c<y;c++)c in o?(s[c]=o[c],l[c]=p[c],u&&(u[c]=h[c],u[c](c))):s[c]=S(d);s=s.slice(0,i=y),r=f.slice(0)}return s}));function d(e){if(l[c]=e,u){const[e,n]=x(c);return u[c]=n,t(f[c],e)}return t(f[c])}}}((()=>e.each),e.children,t||void 0))}B();new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline","allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"]),new Set(["innerHTML","textContent","innerText","children"]),new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),new Set(["html","base","head","link","meta","style","title","body","address","article","aside","footer","header","main","nav","section","body","blockquote","dd","div","dl","dt","figcaption","figure","hr","li","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","img","map","track","video","embed","iframe","object","param","picture","portal","source","svg","math","canvas","noscript","script","del","ins","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","menu","summary","details","slot","template","acronym","applet","basefont","bgsound","big","blink","center","content","dir","font","frame","frameset","hgroup","image","keygen","marquee","menuitem","nobr","noembed","noframes","plaintext","rb","rtc","shadow","spacer","strike","tt","xmp","a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","portal","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp","input"]);function ne(e,t,n){let o;return S((r=>{o=r,t===document?e():se(t,e(),t.firstChild?null:void 0,n)})),()=>{o(),t.textContent=""}}function oe(e,t,n){const o=document.createElement("template");o.innerHTML=e;let r=o.content.firstChild;return n&&(r=r.firstChild),r}function re(e,t=window.document){const n=t._$DX_DELEGATE||(t._$DX_DELEGATE=new Set);for(let o=0,r=e.length;o<r;o++){const r=e[o];n.has(r)||(n.add(r),t.addEventListener(r,le))}}function se(e,t,n,o){if(void 0===n||o||(o=[]),"function"!=typeof t)return ie(e,t,o,n);A((o=>ie(e,t(),o,n)),o)}function le(t){const n=`$$${t.type}`;let o=t.composedPath&&t.composedPath()[0]||t.target;for(t.target!==o&&Object.defineProperty(t,"target",{configurable:!0,value:o}),Object.defineProperty(t,"currentTarget",{configurable:!0,get:()=>o||document}),e.registry&&!e.done&&(e.done=!0,document.querySelectorAll("[id^=pl-]").forEach((e=>e.remove())));null!==o;){const e=o[n];if(e&&!o.disabled){const r=o[`${n}Data`];if(void 0!==r?e(r,t):e(t),t.cancelBubble)return}o=o.host&&o.host!==o&&o.host instanceof Node?o.host:o.parentNode}}function ie(t,n,o,r,s){for(e.context&&!o&&(o=[...t.childNodes]);"function"==typeof o;)o=o();if(n===o)return o;const l=typeof n,i=void 0!==r;if(t=i&&o[0]&&o[0].parentNode||t,"string"===l||"number"===l){if(e.context)return o;if("number"===l&&(n=n.toString()),i){let e=o[0];e&&3===e.nodeType?e.data=n:e=document.createTextNode(n),o=ce(t,o,r,e)}else o=""!==o&&"string"==typeof o?t.firstChild.data=n:t.textContent=n}else if(null==n||"boolean"===l){if(e.context)return o;o=ce(t,o,r)}else{if("function"===l)return A((()=>{let e=n();for(;"function"==typeof e;)e=e();o=ie(t,e,o,r)})),()=>o;if(Array.isArray(n)){const l=[];if(ue(l,n,s))return A((()=>o=ie(t,l,o,r,!0))),()=>o;if(e.context)for(let e=0;e<l.length;e++)if(l[e].parentNode)return o=l;if(0===l.length){if(o=ce(t,o,r),i)return o}else Array.isArray(o)?0===o.length?ae(t,l,r):function(e,t,n){let o=n.length,r=t.length,s=o,l=0,i=0,u=t[r-1].nextSibling,a=null;for(;l<r||i<s;)if(t[l]!==n[i]){for(;t[r-1]===n[s-1];)r--,s--;if(r===l){const t=s<o?i?n[i-1].nextSibling:n[s-i]:u;for(;i<s;)e.insertBefore(n[i++],t)}else if(s===i)for(;l<r;)a&&a.has(t[l])||t[l].remove(),l++;else if(t[l]===n[s-1]&&n[i]===t[r-1]){const o=t[--r].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],o),t[r]=n[s]}else{if(!a){a=new Map;let e=i;for(;e<s;)a.set(n[e],e++)}const o=a.get(t[l]);if(null!=o)if(i<o&&o<s){let u,c=l,f=1;for(;++c<r&&c<s&&null!=(u=a.get(t[c]))&&u===o+f;)f++;if(f>o-i){const r=t[l];for(;i<o;)e.insertBefore(n[i++],r)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}else l++,i++}(t,o,l):(o&&ce(t),ae(t,l));o=l}else if(n instanceof Node){if(e.context&&n.parentNode)return o=i?[n]:n;if(Array.isArray(o)){if(i)return o=ce(t,o,r,n);ce(t,o,null,n)}else null!=o&&""!==o&&t.firstChild?t.replaceChild(n,t.firstChild):t.appendChild(n);o=n}}return o}function ue(e,t,n){let o=!1;for(let r=0,s=t.length;r<s;r++){let s,l=t[r];if(l instanceof Node)e.push(l);else if(null==l||!0===l||!1===l);else if(Array.isArray(l))o=ue(e,l)||o;else if("string"==(s=typeof l))e.push(document.createTextNode(l));else if("function"===s)if(n){for(;"function"==typeof l;)l=l();o=ue(e,Array.isArray(l)?l:[l])||o}else e.push(l),o=!0;else e.push(document.createTextNode(l.toString()))}return o}function ae(e,t,n){for(let o=0,r=t.length;o<r;o++)e.insertBefore(t[o],n)}function ce(e,t,n,o){if(void 0===n)return e.textContent="";const r=o||document.createTextNode("");if(t.length){let o=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(r!==l){const t=l.parentNode===e;o||s?t&&l.remove():t?e.replaceChild(r,l):e.insertBefore(r,n)}else o=!0}}else e.insertBefore(r,n);return[r]}const fe=oe("<div></div>");function de({value:e}){return M((()=>{console.log("Item#onMount")})),q((()=>{console.log("Item#onCleanup")})),T((e=>{console.error(e)})),console.log("Item#render"),(()=>{const t=fe.cloneNode(!0);return se(t,e),t})()}const pe=oe('<header><h1>Solid.JS sandbox</h1><div><a href="https://www.solidjs.com/">https://www.solidjs.com/</a></div></header>'),he=oe("<main><div><button>add</button><button>clear</button></div></main>");function ge(){const[e,t]=x([]);M((()=>{console.log("App#onMount")})),q((()=>{console.log("App#onCleanup")})),T((e=>{console.error(e)}));return console.log("App#render"),[pe.cloneNode(!0),(()=>{const n=he.cloneNode(!0),o=n.firstChild.firstChild,r=o.nextSibling;return o.$$click=()=>{return e=(new Date).toISOString(),void t((t=>[e,...t]));var e},r.$$click=()=>t([]),se(n,ee(te,{get each(){return e()},fallback:null,children:e=>ee(de,{value:e})}),null),n})()]}re(["click"]);const me=document.getElementById("container");me&&ne((()=>ee(ge,{})),me);
//# sourceMappingURL=index.a89578c7.js.map