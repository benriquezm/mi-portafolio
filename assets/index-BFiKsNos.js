(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){for(var t=[],n=0;n<e.length;){var r=e[n];if(r===`*`||r===`+`||r===`?`){t.push({type:`MODIFIER`,index:n,value:e[n++]});continue}if(r===`\\`){t.push({type:`ESCAPED_CHAR`,index:n++,value:e[n++]});continue}if(r===`{`){t.push({type:`OPEN`,index:n,value:e[n++]});continue}if(r===`}`){t.push({type:`CLOSE`,index:n,value:e[n++]});continue}if(r===`:`){for(var i=``,a=n+1;a<e.length;){var o=e.charCodeAt(a);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){i+=e[a++];continue}break}if(!i)throw TypeError(`Missing parameter name at ${n}`);t.push({type:`NAME`,index:n,value:i}),n=a;continue}if(r===`(`){var s=1,c=``,a=n+1;if(e[a]===`?`)throw TypeError(`Pattern cannot start with "?" at ${a}`);for(;a<e.length;){if(e[a]===`\\`){c+=e[a++]+e[a++];continue}if(e[a]===`)`){if(s--,s===0){a++;break}}else if(e[a]===`(`&&(s++,e[a+1]!==`?`))throw TypeError(`Capturing groups are not allowed at ${a}`);c+=e[a++]}if(s)throw TypeError(`Unbalanced pattern at ${n}`);if(!c)throw TypeError(`Missing pattern at ${n}`);t.push({type:`PATTERN`,index:n,value:c}),n=a;continue}t.push({type:`CHAR`,index:n,value:e[n++]})}return t.push({type:`END`,index:n,value:``}),t}function t(t,n){n===void 0&&(n={});for(var r=e(t),a=n.prefixes,o=a===void 0?`./`:a,s=n.delimiter,c=s===void 0?`/#?`:s,l=[],u=0,d=0,f=``,p=function(e){if(d<r.length&&r[d].type===e)return r[d++].value},m=function(e){var t=p(e);if(t!==void 0)return t;var n=r[d],i=n.type,a=n.index;throw TypeError(`Unexpected ${i} at ${a}, expected ${e}`)},h=function(){for(var e=``,t;t=p(`CHAR`)||p(`ESCAPED_CHAR`);)e+=t;return e},g=function(e){for(var t=0,n=c;t<n.length;t++){var r=n[t];if(e.indexOf(r)>-1)return!0}return!1},_=function(e){var t=l[l.length-1],n=e||(t&&typeof t==`string`?t:``);if(t&&!n)throw TypeError(`Must have text between two parameters, missing text after "${t.name}"`);return!n||g(n)?`[^${i(c)}]+?`:`(?:(?!${i(n)})[^${i(c)}])+?`};d<r.length;){var v=p(`CHAR`),y=p(`NAME`),b=p(`PATTERN`);if(y||b){var x=v||``;o.indexOf(x)===-1&&(f+=x,x=``),f&&=(l.push(f),``),l.push({name:y||u++,prefix:x,suffix:``,pattern:b||_(x),modifier:p(`MODIFIER`)||``});continue}var S=v||p(`ESCAPED_CHAR`);if(S){f+=S;continue}if(f&&=(l.push(f),``),p(`OPEN`)){var x=h(),C=p(`NAME`)||``,w=p(`PATTERN`)||``,T=h();m(`CLOSE`),l.push({name:C||(w?u++:``),pattern:C&&!w?_(x):w,prefix:x,suffix:T,modifier:p(`MODIFIER`)||``});continue}m(`END`)}return l}function n(e,n){return r(t(e,n),n)}function r(e,t){t===void 0&&(t={});var n=a(t),r=t.encode,i=r===void 0?function(e){return e}:r,o=t.validate,s=o===void 0||o,c=e.map(function(e){if(typeof e==`object`)return RegExp(`^(?:${e.pattern})$`,n)});return function(t){for(var n=``,r=0;r<e.length;r++){var a=e[r];if(typeof a==`string`){n+=a;continue}var o=t?t[a.name]:void 0,l=a.modifier===`?`||a.modifier===`*`,u=a.modifier===`*`||a.modifier===`+`;if(Array.isArray(o)){if(!u)throw TypeError(`Expected "${a.name}" to not repeat, but got an array`);if(o.length===0){if(l)continue;throw TypeError(`Expected "${a.name}" to not be empty`)}for(var d=0;d<o.length;d++){var f=i(o[d],a);if(s&&!c[r].test(f))throw TypeError(`Expected all "${a.name}" to match "${a.pattern}", but got "${f}"`);n+=a.prefix+f+a.suffix}continue}if(typeof o==`string`||typeof o==`number`){var f=i(String(o),a);if(s&&!c[r].test(f))throw TypeError(`Expected "${a.name}" to match "${a.pattern}", but got "${f}"`);n+=a.prefix+f+a.suffix;continue}if(!l){var p=u?`an array`:`a string`;throw TypeError(`Expected "${a.name}" to be ${p}`)}}return n}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,`\\$1`)}function a(e){return e&&e.sensitive?``:`i`}function o(e,t){if(!t)return e;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,r=0,i=n.exec(e.source);i;)t.push({name:i[1]||r++,prefix:``,suffix:``,modifier:``,pattern:``}),i=n.exec(e.source);return e}function s(e,t,n){var r=e.map(function(e){return u(e,t,n).source});return RegExp(`(?:${r.join(`|`)})`,a(n))}function c(e,n,r){return l(t(e,r),n,r)}function l(e,t,n){n===void 0&&(n={});for(var r=n.strict,o=r!==void 0&&r,s=n.start,c=s===void 0||s,l=n.end,u=l===void 0||l,d=n.encode,f=d===void 0?function(e){return e}:d,p=n.delimiter,m=p===void 0?`/#?`:p,h=n.endsWith,g=`[${i(h===void 0?``:h)}]|$`,_=`[${i(m)}]`,v=c?`^`:``,y=0,b=e;y<b.length;y++){var x=b[y];if(typeof x==`string`)v+=i(f(x));else{var S=i(f(x.prefix)),C=i(f(x.suffix));if(x.pattern){if(t&&t.push(x),S||C){if(x.modifier===`+`||x.modifier===`*`){var w=x.modifier===`*`?`?`:``;v+=`(?:${S}((?:${x.pattern})(?:${C}${S}(?:${x.pattern}))*)${C})${w}`}else v+=`(?:${S}(${x.pattern})${C})${x.modifier}`}else{if(x.modifier===`+`||x.modifier===`*`)throw TypeError(`Can not repeat "${x.name}" without a prefix and suffix`);v+=`(${x.pattern})${x.modifier}`}}else v+=`(?:${S}${C})${x.modifier}`}}if(u)o||(v+=`${_}?`),v+=n.endsWith?`(?=${g})`:`$`;else{var T=e[e.length-1],ee=typeof T==`string`?_.indexOf(T[T.length-1])>-1:T===void 0;o||(v+=`(?:${_}(?=${g}))?`),ee||(v+=`(?=${_}|${g})`)}return new RegExp(v,a(n))}function u(e,t,n){return e instanceof RegExp?o(e,t):Array.isArray(e)?s(e,t,n):c(e,t,n)}var d=Symbol(`NotFoundResult`),f=class extends Error{code;context;constructor(e){super(_(`Page not found (${e.pathname})`)),this.context=e,this.code=404}};function p(e){return typeof e==`object`&&!!e}function m(e){return typeof e==`function`}function h(e){return typeof e==`string`}function g(e=[]){return Array.isArray(e)?e:[e]}function _(e){return`[Vaadin.Router] ${e}`}function v(e){return new f(e)}function y(e){return(Array.isArray(e)?e[0]:e)??``}function b(e){return y(e?.path)}function x(e){return Array.isArray(e)&&e.length>0?e:void 0}var S=new Map;S.set(`|false`,{keys:[],pattern:/(?:)/u});function C(e){try{return decodeURIComponent(e)}catch{return e}}function w(e,t,n=!1,r=[],i){let a=`${e}|${String(n)}`,o=y(t),s=S.get(a);if(!s){let t=[];s={keys:t,pattern:u(e,t,{end:n,strict:e===``})},S.set(a,s)}let c=s.pattern.exec(o);if(!c)return null;let l={...i};for(let e=1;e<c.length;e++){let t=s.keys[e-1],n=t.name,r=c[e];(r!==void 0||!Object.prototype.hasOwnProperty.call(l,n))&&(l[n]=t.modifier===`+`||t.modifier===`*`?r?r.split(/[/?#]/u).map(C):[]:r&&C(r))}return{keys:[...r,...s.keys],params:l,path:c[0]}}var T=w;function ee(e,t,n,r,i){let a,o,s=0,c=b(e);return c.startsWith(`/`)&&(n&&(c=c.substring(1)),n=!0),{next(l){if(e===l)return{done:!0,value:void 0};e.__children??=x(e.children);let u=e.__children??[],d=!e.__children&&!e.children;if(!a&&(a=T(c,t,d,r,i),a))return{value:{keys:a.keys,params:a.params,path:a.path,route:e}};if(a&&u.length>0)for(;s<u.length;){if(!o){let r=u[s];r.parent=e;let i=a.path.length;i>0&&t.charAt(i)===`/`&&(i+=1),o=ee(r,t.substring(i),n,a.keys,a.params)}let r=o.next(l);if(!r.done)return{done:!1,value:r.value};o=null,s+=1}return{done:!0,value:void 0}}}}var te=ee;function ne(e){if(m(e.route.action))return e.route.action(e)}function re(e,t){let n=e;for(;n;)if(n=n.parent,n===t)return!0;return!1}function ie(e){return!!e&&typeof e==`object`&&`next`in e&&`params`in e&&`result`in e&&`route`in e}var ae=class extends Error{cause;code;context;constructor(e,t){let n=`Path '${e.pathname}' is not properly resolved due to an error.`,r=b(e.route);r&&(n+=` Resolution had failed on route: '${r}'`),super(n),this.cause=t?.cause,this.code=t?.code,this.context=e}warn(){console.warn(this.message)}};function oe(e,t){let{path:n,route:r}=t;if(r&&!r.__synthetic){let t={path:n,route:r};if(r.parent&&e.chain)for(let t=e.chain.length-1;t>=0&&e.chain[t].route!==r.parent;t--)e.chain.pop();e.chain?.push(t)}}var se=class{baseUrl;#e;errorHandler;resolveRoute;#t;constructor(e,{baseUrl:t=``,context:n,errorHandler:r,resolveRoute:i=ne}={}){if(Object(e)!==e)throw TypeError(`Invalid routes`);this.baseUrl=t,this.errorHandler=r,this.resolveRoute=i,this.#t=Array.isArray(e)?{__children:e,__synthetic:!0,action:()=>void 0,path:``}:{...e,parent:void 0},this.#e={...n,hash:``,async next(){return d},params:{},pathname:``,resolver:this,route:this.#t,search:``,chain:[]}}get root(){return this.#t}get context(){return this.#e}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,``):``}getRoutes(){return[...this.#t.__children??[]]}removeRoutes(){this.#t.__children=[]}async resolve(e){let t=this,n={...this.#e,...h(e)?{pathname:e}:e,next:c},r=te(this.#t,this.__normalizePathname(n.pathname)??n.pathname,!!this.baseUrl),i=this.resolveRoute,a=null,o=null,s=n;async function c(e=!1,l=a?.value?.route,u){let f=u===null?a?.value?.route:void 0;if(a=o??r.next(f),o=null,!e&&(a.done||!re(a.value.route,l)))return o=a,d;if(a.done)throw v(n);s={...n,params:a.value.params,route:a.value.route,chain:s.chain?.slice()},oe(s,a.value);let p=await i(s);return p!=null&&p!==d?(s.result=ie(p)?p.result:p,t.#e=s,s):await c(e,l,p)}try{return await c(!0,this.#t)}catch(e){let t=e instanceof f?e:new ae(s,{code:500,cause:e});if(this.errorHandler)return s.result=this.errorHandler(t),s;throw e}}setRoutes(e){return this.#t.__children=[...g(e)],{}}__normalizePathname(e){if(!this.baseUrl)return e;let t=this.__effectiveBaseUrl,n=e.startsWith(`/`)?new URL(t).origin+e:`./${e}`,r=new URL(n,t).href;if(r.startsWith(t))return r.slice(t.length)}addRoutes(e){return this.#t.__children=[...this.#t.__children??[],...g(e)],this.getRoutes()}};function ce(e,t,n,r){let i=t.name??r?.(t);if(i&&(e.has(i)?e.get(i)?.push(t):e.set(i,[t])),Array.isArray(n))for(let i of n)i.parent=t,ce(e,i,i.__children??i.children,r)}function le(e,t){let n=e.get(t);if(n){if(n.length>1)throw Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n[0]}}function ue(e,n={}){if(!(e instanceof se))throw TypeError(`An instance of Resolver is expected`);let i=new Map,a=new Map;return(o,s)=>{let c=le(a,o);if(!c&&(a.clear(),ce(a,e.root,e.root.__children,n.cacheKeyProvider),c=le(a,o),!c))throw Error(`Route "${o}" not found`);let l=c.fullPath?i.get(c.fullPath):void 0;if(!l){let e=b(c),n=c.parent;for(;n;){let t=b(n);t&&(e=`${t.replace(/\/$/u,``)}/${e.replace(/^\//u,``)}`),n=n.parent}let r=t(e),a=Object.create(null);for(let e of r)h(e)||(a[e.name]=!0);l={keys:a,tokens:r},i.set(e,l),c.fullPath=e}let u=r(l.tokens,{encode:encodeURIComponent,...n})(s)||`/`;if(n.stringifyQueryParams&&s){let e={};for(let[t,n]of Object.entries(s))!(t in l.keys)&&n&&(e[t]=n);let t=n.stringifyQueryParams(e);t&&(u+=t.startsWith(`?`)?t:`?${t}`)}return u}}var de=ue,fe=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,E=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function pe(){function e(){return!0}return ve(e)}function me(){try{return he()?!0:ge()?E?!_e():!pe():!1}catch{return!1}}function he(){return localStorage.getItem(`vaadin.developmentmode.force`)}function ge(){return[`localhost`,`127.0.0.1`].indexOf(window.location.hostname)>=0}function _e(){return!!(E&&Object.keys(E).map(e=>E[e]).filter(e=>e.productionMode).length>0)}function ve(e,t){if(typeof e!=`function`)return;let n=fe.exec(e.toString());if(n)try{e=Function(n[1])}catch(e){console.log(`vaadin-development-mode-detector: uncommentAndRun() failed`,e)}return e(t)}window.Vaadin=window.Vaadin||{};var ye=function(e,t){if(window.Vaadin.developmentMode)return ve(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=me());function be(){}var xe=function(){if(typeof ye==`function`)return ye(be)};function Se(e,t=window.Vaadin??={}){t.registrations??=[],t.registrations.push({is:e?`@vaadin/router/${e}`:`@vaadin/router`,version:`2.0.1`})}Se(),xe();var Ce=e=>{let t=getComputedStyle(e).getPropertyValue(`animation-name`);return t&&t!==`none`},we=(e,t)=>{let n=()=>{e.removeEventListener(`animationend`,n),t()};e.addEventListener(`animationend`,n)};async function Te(e,t){return e.classList.add(t),await new Promise(n=>{if(Ce(e)){let r=e.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute(`style`,`position: absolute; ${i}`),we(e,()=>{e.classList.remove(t),e.removeAttribute(`style`),n()})}else e.classList.remove(t),n()})}var Ee=Te;function De(e){if(!e||!h(e.path))throw Error(_(`Expected route config to be an object with a "path" string property, or an array of such objects`));if(!m(e.action)&&!Array.isArray(e.children)&&!m(e.children)&&!h(e.component)&&!h(e.redirect))throw Error(_(`Expected route config "${e.path}" to include either "component, redirect" or "action" function but none found.`));e.redirect&&[`bundle`,`component`].forEach(t=>{t in e&&console.warn(_(`Route config "${String(e.path)}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function Oe(e){g(e).forEach(e=>De(e))}function ke({next:e,...t}){return t}function D(e,t){let n=t.__effectiveBaseUrl;return n?new URL(e.replace(/^\//u,``),n).pathname:e}function Ae(e){return e.map(e=>e.path).reduce((e,t)=>t.length?`${e.replace(/\/$/u,``)}/${t.replace(/^\//u,``)}`:e,``)}function je(e){return Ae(e.map(e=>e.route))}function O({chain:e=[],hash:t=``,params:r={},pathname:i=``,redirectFrom:a,resolver:o,search:s=``},c){let l=e.map(e=>e.route);return{baseUrl:o?.baseUrl??``,getUrl:(t={})=>o?D(n(je(e))({...r,...t}),o):``,hash:t,params:r,pathname:i,redirectFrom:a,route:c??(Array.isArray(l)?l.at(-1):void 0)??null,routes:l,search:s,searchParams:new URLSearchParams(s)}}function Me(e,t){let n={...e.params};return{redirect:{from:e.pathname,params:n,pathname:t}}}function Ne(e,t){if(t.location=O(e),e.chain){let n=e.chain.map(e=>e.route).indexOf(e.route);e.chain[n].element=t}return t}function k(e,t,...n){if(typeof e==`function`)return e.apply(t,n)}function Pe(e,t,...n){return r=>r&&p(r)&&(`cancel`in r||`redirect`in r)?r:k(t?.[e],t,...n)}function Fe(e,t){if(!Array.isArray(e)&&!p(e))throw Error(_(`Incorrect "children" value for the route ${String(t.path)}: expected array or object, but got ${String(e)}`));let n=g(e);n.forEach(e=>De(e)),t.__children=n}function A(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e===`go`,detail:t}))}function Ie(e){if(typeof e!=`object`)return String(e);let[t=`Unknown`]=/ (.*)\]$/u.exec(String(e))??[];return t===`Object`||t===`Array`?`${t} ${JSON.stringify(e)}`:t}function Le(e){let{port:t,protocol:n}=e;return`${n}//${n===`http:`&&t===`80`||n===`https:`&&t===`443`?e.hostname:e.host}`}function Re(e){if(e instanceof Element)return e.nodeName.toLowerCase()}function ze(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target,n=e instanceof MouseEvent?e.composedPath():e.path??[];for(let e=0;e<n.length;e++){let r=n[e];if(`nodeName`in r&&r.nodeName.toLowerCase()===`a`){t=r;break}}for(;t&&t instanceof Node&&Re(t)!==`a`;)t=t.parentNode;if(!t||Re(t)!==`a`)return;let r=t;if(r.target&&r.target.toLowerCase()!==`_self`||r.hasAttribute(`download`)||r.hasAttribute(`router-ignore`)||r.pathname===window.location.pathname&&r.hash!==``||(r.origin||Le(r))!==window.location.origin)return;let{hash:i,pathname:a,search:o}=r;A(`go`,{hash:i,pathname:a,search:o})&&e instanceof MouseEvent&&(e.preventDefault(),e.type===`click`&&window.scrollTo(0,0))}var Be={activate(){window.document.addEventListener(`click`,ze)},inactivate(){window.document.removeEventListener(`click`,ze)}};function Ve(e){if(e.state===`vaadin-router-ignore`)return;let{hash:t,pathname:n,search:r}=window.location;A(`go`,{hash:t,pathname:n,search:r})}var He={activate(){window.addEventListener(`popstate`,Ve)},inactivate(){window.removeEventListener(`popstate`,Ve)}},Ue=[],We={CLICK:Be,POPSTATE:He};function Ge(e=[]){Ue.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),Ue=e}var Ke=256;function j(){return{cancel:!0}}var qe={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:``,action(){}},pathname:``,async next(){return d}},Je=class extends se{location=O({resolver:this});ready=Promise.resolve(this.location);#e=new WeakSet;#t=new WeakSet;#n=this.#O.bind(this);#r=0;#i;__previousContext;#a;#o=null;#s=null;constructor(e,t){let n=document.head.querySelector(`base`)?.getAttribute(`href`);super([],{baseUrl:n?new URL(n,document.URL).href.replace(/[^/]*$/u,``):void 0,...t,resolveRoute:async e=>await this.#c(e)}),Ge(Object.values(We)),this.setOutlet(e),this.subscribe()}async#c(e){let{route:t}=e;if(m(t.children)){let n=await t.children(ke(e));m(t.children)||({children:n}=t),Fe(n,t)}let n={component:e=>{let t=document.createElement(e);return this.#t.add(t),t},prevent:j,redirect:t=>Me(e,t)};return await Promise.resolve().then(async()=>{if(this.#_(e))return await k(t.action,t,e,n)}).then(e=>{if(e!=null&&(typeof e==`object`||typeof e==`symbol`)&&(e instanceof HTMLElement||e===d||p(e)&&`redirect`in e))return e;if(h(t.redirect))return n.redirect(t.redirect)}).then(e=>{if(e!=null)return e;if(h(t.component))return n.component(t.component)})}setOutlet(e){e&&this.#y(e),this.#i=e}getOutlet(){return this.#i}async setRoutes(e,t=!1){return this.__previousContext=void 0,this.#a=void 0,Oe(e),super.setRoutes(e),t||this.#O(),await this.ready}addRoutes(e){return Oe(e),super.addRoutes(e)}async render(e,t=!1){this.#r+=1;let n=this.#r,r={...qe,...h(e)?{hash:``,search:``,pathname:e}:e,__renderId:n};return this.ready=this.#l(r,t),await this.ready}async#l(e,t){let{__renderId:n}=e;try{let r=await this.resolve(e),i=await this.#u(r);if(!this.#_(i))return this.location;let a=this.__previousContext;if(i===a)return this.#b(a,!0),this.location;if(this.location=O(i),t&&this.#b(i,n===1),A(`location-changed`,{router:this,location:this.location}),i.__skipAttach)return this.#x(i,a),this.__previousContext=i,this.location;this.#S(i,a);let o=this.#D(i);if(this.#E(i),this.#T(i,a),await o,this.#_(i))return this.#C(),this.__previousContext=i,this.location}catch(r){if(n===this.#r){t&&this.#b(this.context);for(let e of this.#i?.children??[])e.remove();throw this.location=O(Object.assign(e,{resolver:this})),A(`error`,{router:this,error:r,...e}),r}}return this.location}async#u(e,t=e){let n=await this.#d(t),r=n===t?e:n,i=D(Ae(n.chain??[]),this)===n.pathname,a=async(e,t=e.route,n)=>{let r=await e.next(!1,t,n);return r===null||r===d?i?e:t.parent==null?r:await a(e,t.parent,r):r},o=await a(n);if(o==null||o===d)throw v(r);return o===n?await this.#f(n):await this.#u(r,o)}async#d(e){let{result:t}=e;if(t instanceof HTMLElement)return Ne(e,t),e;if(t&&`redirect`in t){let n=await this.#v(t.redirect,e.__redirectCount,e.__renderId);return await this.#d(n)}throw t instanceof Error?t:Error(_(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Ie(t)}". Double check the action return value for the route.`))}async#f(e){return await this.#p(e).then(async t=>t===this.__previousContext||t===e?t:await this.#u(t))}async#p(e){let t=this.__previousContext??{},n=t.chain??[],r=e.chain??[],i=Promise.resolve(void 0),a=t=>Me(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&!(n[t].route!==r[t].route||n[t].path!==r[t].path&&n[t].element!==r[t].element||!this.#g(n[t].element,r[t].element));e.__divergedChainIndex++,t++);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex===r.length&&this.#g(e.result,t.result),e.__skipAttach){for(let t=r.length-1;t>=0;t--)i=this.#m(i,e,{prevent:j},n[t]);for(let t=0;t<r.length;t++)i=this.#h(i,e,{prevent:j,redirect:a},r[t]),n[t].element.location=O(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)i=this.#m(i,e,{prevent:j},n[t])}if(!e.__skipAttach)for(let t=0;t<r.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=O(e,n[t].route)):(i=this.#h(i,e,{prevent:j,redirect:a},r[t]),r[t].element&&(r[t].element.location=O(e,r[t].route)));return await i.then(async t=>{if(t&&p(t)){if(`cancel`in t&&this.__previousContext)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(`redirect`in t)return await this.#v(t.redirect,e.__redirectCount,e.__renderId)}return e})}async#m(e,t,n,r){let i=O(t),a=await e;if(this.#_(t)&&(a=Pe(`onBeforeLeave`,r.element,i,n,this)(a)),!(p(a)&&`redirect`in a))return a}async#h(e,t,n,r){let i=O(t,r.route),a=await e;if(this.#_(t))return Pe(`onBeforeEnter`,r.element,i,n,this)(a)}#g(e,t){return e instanceof Element&&t instanceof Element?this.#t.has(e)&&this.#t.has(t)?e.localName===t.localName:e===t:!1}#_(e){return e.__renderId===this.#r}async#v(e,t=0,n=0){if(t>Ke)throw Error(_(`Too many redirects when rendering ${e.from}`));return await this.resolve({...qe,pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:t+1,__renderId:n})}#y(e=this.#i){if(!(e instanceof Element||e instanceof DocumentFragment))throw TypeError(_(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${e})`))}#b({pathname:e,search:t=``,hash:n=``},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){let i=r?`replaceState`:`pushState`;window.history[i](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent(`popstate`,{state:`vaadin-router-ignore`}))}}#x(e,t){let n=this.#i;for(let r=0;r<(e.__divergedChainIndex??0);r++){let i=t?.chain?.[r].element;if(i){if(i.parentNode===n)e.chain[r].element=i,n=i;else break}}return n}#S(e,t){this.#y(),this.#w();let n=this.#x(e,t);this.#o=[],this.#s=Array.from(n?.children??[]).filter(t=>this.#e.has(t)&&t!==e.result);let r=n;for(let t=e.__divergedChainIndex??0;t<(e.chain?.length??0);t++){let i=e.chain[t].element;i&&(r?.appendChild(i),this.#e.add(i),r===n&&this.#o.push(i),r=i)}}#C(){if(this.#s)for(let e of this.#s)e.remove();this.#s=null,this.#o=null}#w(){if(this.#s&&this.#o){for(let e of this.#o)e.remove();this.#s=null,this.#o=null}}#T(e,t){if(t?.chain&&e.__divergedChainIndex!=null)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.#_(e);n--){let r=t.chain[n].element;if(r)try{let t=O(e);k(r.onAfterLeave,r,t,{},this)}finally{if(this.#s?.includes(r))for(let e of r.children)e.remove()}}}#E(e){if(e.chain&&e.__divergedChainIndex!=null)for(let t=e.__divergedChainIndex;t<e.chain.length&&this.#_(e);t++){let n=e.chain[t].element;if(n){let r=O(e,e.chain[t].route);k(n.onAfterEnter,n,r,{},this)}}}async#D(e){let t=this.#s?.[0],n=this.#o?.[0],r=[],{chain:i=[]}=e,a;for(let e=i.length-1;e>=0;e--)if(i[e].route.animate){a=i[e].route.animate;break}if(t&&n&&a){let e=p(a)&&a.leave?a.leave:`leaving`,i=p(a)&&a.enter?a.enter:`entering`;r.push(Ee(t,e)),r.push(Ee(n,i))}return await Promise.all(r),e}subscribe(){window.addEventListener(`vaadin-router-go`,this.#n)}unsubscribe(){window.removeEventListener(`vaadin-router-go`,this.#n)}#O(e){let{pathname:t,search:n,hash:r}=e instanceof CustomEvent?e.detail:window.location;h(this.__normalizePathname(t))&&(e?.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){Ge(e)}urlForName(e,t){return this.#a||=de(this,{cacheKeyProvider(e){return`component`in e&&typeof e.component==`string`?e.component:void 0}}),D(this.#a(e,t??void 0),this)}urlForPath(e,t){return D(n(e)(t??void 0),this)}static go(e){let{pathname:t,search:n,hash:r}=h(e)?new URL(e,`http://a`):e;return A(`go`,{pathname:t,search:n,hash:r})}},M=globalThis,Ye=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,Xe=Symbol(),Ze=new WeakMap,Qe=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Xe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ye&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ze.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ze.set(t,e))}return e}toString(){return this.cssText}},$e=e=>new Qe(typeof e==`string`?e:e+``,void 0,Xe),N=(e,...t)=>new Qe(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,Xe),et=(e,t)=>{if(Ye)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=M.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},tt=Ye?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return $e(t)})(e):e,{is:nt,defineProperty:rt,getOwnPropertyDescriptor:it,getOwnPropertyNames:at,getOwnPropertySymbols:ot,getPrototypeOf:st}=Object,P=globalThis,ct=P.trustedTypes,lt=ct?ct.emptyScript:``,ut=P.reactiveElementPolyfillSupport,F=(e,t)=>e,I={toAttribute(e,t){switch(t){case Boolean:e=e?lt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},dt=(e,t)=>!nt(e,t),ft={attribute:!0,type:String,converter:I,reflect:!1,useDefault:!1,hasChanged:dt};Symbol.metadata??=Symbol(`metadata`),P.litPropertyMetadata??=new WeakMap;var L=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ft){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&rt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=it(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ft}static _$Ei(){if(this.hasOwnProperty(F(`elementProperties`)))return;let e=st(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(F(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F(`properties`))){let e=this.properties,t=[...at(e),...ot(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(tt(e))}else e!==void 0&&t.push(tt(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return et(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?I:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?I:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??dt)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};L.elementStyles=[],L.shadowRootOptions={mode:`open`},L[F(`elementProperties`)]=new Map,L[F(`finalized`)]=new Map,ut?.({ReactiveElement:L}),(P.reactiveElementVersions??=[]).push(`2.1.2`);var R=globalThis,pt=e=>e,z=R.trustedTypes,mt=z?z.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ht=`$lit$`,B=`lit$${Math.random().toFixed(9).slice(2)}$`,gt=`?`+B,_t=`<${gt}>`,V=document,H=()=>V.createComment(``),U=e=>e===null||typeof e!=`object`&&typeof e!=`function`,vt=Array.isArray,yt=e=>vt(e)||typeof e?.[Symbol.iterator]==`function`,bt=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xt=/-->/g,St=/>/g,G=RegExp(`>|${bt}(?:([^\\s"'>=/]+)(${bt}*=${bt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ct=/'/g,wt=/"/g,Tt=/^(?:script|style|textarea|title)$/i,K=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),q=Symbol.for(`lit-noChange`),J=Symbol.for(`lit-nothing`),Et=new WeakMap,Y=V.createTreeWalker(V,129);function Dt(e,t){if(!vt(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return mt===void 0?t:mt.createHTML(t)}var Ot=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=W;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===W?c[1]===`!--`?o=xt:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=G):(Tt.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=G):o=St:o===G?c[0]===`>`?(o=i??W,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?G:c[3]===`"`?wt:Ct):o===wt||o===Ct?o=G:o===xt||o===St?o=W:(o=G,i=void 0);let d=o===G&&e[t+1].startsWith(`/>`)?` `:``;a+=o===W?n+_t:l>=0?(r.push(s),n.slice(0,l)+ht+n.slice(l)+B+d):n+B+(l===-2?t:d)}return[Dt(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},kt=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ot(t,n);if(this.el=e.createElement(l,r),Y.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Y.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ht)){let t=u[o++],n=i.getAttribute(e).split(B),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Mt:r[1]===`?`?Nt:r[1]===`@`?Pt:Z}),i.removeAttribute(e)}else e.startsWith(B)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Tt.test(i.tagName)){let e=i.textContent.split(B),t=e.length-1;if(t>0){i.textContent=z?z.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],H()),Y.nextNode(),c.push({type:2,index:++a});i.append(e[t],H())}}}else if(i.nodeType===8){if(i.data===gt)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(B,e+1))!==-1;)c.push({type:7,index:a}),e+=B.length-1}}a++}}static createElement(e,t){let n=V.createElement(`template`);return n.innerHTML=e,n}};function X(e,t,n=e,r){if(t===q)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=U(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=X(e,i._$AS(e,t.values),i,r)),t}var At=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??V).importNode(t,!0);Y.currentNode=r;let i=Y.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new jt(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ft(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Y.nextNode(),a++)}return Y.currentNode=V,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},jt=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),U(e)?e===J||e==null||e===``?(this._$AH!==J&&this._$AR(),this._$AH=J):e!==this._$AH&&e!==q&&this._(e):e._$litType$===void 0?e.nodeType===void 0?yt(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==J&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(V.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=kt.createElement(Dt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new At(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Et.get(e.strings);return t===void 0&&Et.set(e.strings,t=new kt(e)),t}k(t){vt(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(H()),this.O(H()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=pt(e).nextSibling;pt(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Z=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=J,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=J}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=X(this,e,t,0),a=!U(e)||e!==this._$AH&&e!==q,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=X(this,r[n+o],t,o),s===q&&(s=this._$AH[o]),a||=!U(s)||s!==this._$AH[o],s===J?e=J:e!==J&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Mt=class extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===J?void 0:e}},Nt=class extends Z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==J)}},Pt=class extends Z{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??J)===q)return;let n=this._$AH,r=e===J&&n!==J||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==J&&(n===J||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ft=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}},It=R.litHtmlPolyfillSupport;It?.(kt,jt),(R.litHtmlVersions??=[]).push(`3.3.3`);var Lt=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new jt(t.insertBefore(H(),e),e,void 0,n??{})}return i._$AI(e),i},Rt=globalThis,Q=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Lt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};Q._$litElement$=!0,Q.finalized=!0,Rt.litElementHydrateSupport?.({LitElement:Q});var zt=Rt.litElementPolyfillSupport;zt?.({LitElement:Q}),(Rt.litElementVersions??=[]).push(`4.2.2`);var Bt=class extends Q{static styles=N`
    :host {
      position: fixed;
      top: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      width: 90%;
      max-width: 600px;
    }
    
    nav {
      background: rgba(30, 41, 59, 0.7);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 0.75rem 1.5rem;
      border-radius: 9999px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
    }
    
    a {
      color: #94a3b8;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
      transition: all 0.2s ease-in-out;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    
    a:hover { 
      color: #3b82f6;
      text-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
    }
  `;render(){return K`
      <nav>
        <a href="#/">Inicio</a>
        <a href="#filosofia">Mi Filosofía</a>
        <a href="#/casos">Casos de Estudio</a>
      </nav>
    `}};customElements.define(`app-navbar`,Bt);var $=N`
  :host {
    /* Colores Base y Profundidad */
    --bg-main: #0b0f19;         /* Un oscuro más profundo y premium */
    --bg-surface: #1e293b70;    /* Superficie translúcida para tarjetas */
    --border-color: rgba(255, 255, 255, 0.06); /* Bordes sutiles de software premium */
    
    /* Textos */
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    
    /* Acentos */
    --accent-blue: #3b82f6;
    --accent-ai: #06b6d4;
    --accent-emerald: #10b981;
    
    /* Fuentes */
    --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }
`,Vt=class extends Q{static styles=[$,N`
      :host {
        display: block;
        background-color: #0b0f19;
        min-height: 100vh;
        color: #f8fafc;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      
      main { 
        max-width: 1200px;
        margin: 0 auto;
        padding: 7rem 2rem 4rem 2rem; /* Margen superior amplio para librar la Navbar */
        box-sizing: border-box;
      }
    `];render(){return K`
      <app-navbar></app-navbar>
      <main>
        <slot></slot>
      </main>
    `}};customElements.define(`app-layout`,Vt);var Ht=class extends Q{static styles=[$,N`
      :host {
        display: block;
        margin-bottom: 4rem;
      }

      /* Contenedor Bento Grid Responsivo */
      .bento-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
      }

      @media (max-width: 768px) {
        .bento-grid {
          grid-template-columns: 1fr;
        }
      }

      /* Estilo base para las tarjetas Bento */
      .bento-card {
        background: var(--bg-surface);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid var(--border-color);
        border-radius: 1.5rem;
        padding: 2rem;
        box-sizing: border-box;
        transition: transform 0.2s ease, border-color 0.2s ease;
      }

      .bento-card:hover {
        border-color: rgba(59, 130, 246, 0.3);
        transform: translateY(-2px);
      }

      /* Tarjeta Principal (Ocupa dos columnas) */
      .main-profile {
        grid-column: span 2;
      }

      @media (max-width: 768px) {
        .main-profile {
          grid-column: span 1;
        }
      }

      /* Tipografías y Textos Formateados */
      h1 {
        font-family: var(--font-sans);
        font-size: 2.5rem;
        font-weight: 800;
        margin: 0 0 0.5rem 0;
        background: linear-gradient(135deg, #fff 60%, var(--accent-blue));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      h2 {
        font-family: var(--font-sans);
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--accent-blue);
        margin: 0 0 1.5rem 0;
      }

      p {
        font-family: var(--font-sans);
        font-size: 1rem;
        color: var(--text-secondary);
        line-height: 1.6;
        margin: 0 0 1.5rem 0;
      }

      /* Badge / Etiquetas Técnicas */
      .badge-container {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;
      }

      .badge {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        background: rgba(59, 130, 246, 0.1);
        color: var(--accent-blue);
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        border: 1px solid rgba(59, 130, 246, 0.2);
      }

      /* Gráfica Interactiva Híbrida (70/30) */
      .hybrid-metric {
        margin: 1.5rem 0;
      }

      .metric-labels {
        display: flex;
        justify-content: space-between;
        font-family: var(--font-mono);
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
      }

      .progress-bar-container {
        display: flex;
        height: 12px;
        border-radius: 9999px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--border-color);
      }

      .progress-dev {
        background: linear-gradient(90deg, var(--accent-blue), #4f46e5);
        width: 70%;
        height: 100%;
      }

      .progress-scrum {
        background: linear-gradient(90deg, var(--accent-emerald), #059669);
        width: 30%;
        height: 100%;
      }

      /* Botones de Acción Estilizados */
      .action-buttons {
        display: flex;
        gap: 1rem;
      }

      .btn {
        font-family: var(--font-sans);
        font-weight: 600;
        font-size: 0.9rem;
        padding: 0.75rem 1.5rem;
        border-radius: 0.75rem;
        text-decoration: none;
        transition: all 0.2s ease;
        display: inline-flex;
        align-items: center;
      }

      .btn-primary {
        background: var(--accent-blue);
        color: #fff;
        box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
      }

      .btn-primary:hover {
        background: #1d4ed8;
        box-shadow: 0 6px 20px rgba(37, 99, 235, 0.6);
      }

      .btn-secondary {
        background: rgba(255, 255, 255, 0.03);
        color: var(--text-primary);
        border: 1px solid var(--border-color);
      }

      .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.08);
      }
    `];render(){return K`
      <div class="bento-grid">
        <!-- Bloque Principal de Presentación -->
        <div class="bento-card main-profile">
          <div class="badge-container">
            <span class="badge">VITE + LIT</span>
            <span class="badge">2026 ARCHITECTURE</span>
          </div>
          <h1>¡Hola! Soy Benito Enríquez Mora</h1>
          <h2>Senior Full Stack Developer / Tech Lead Ops / Scrum Master</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <div class="action-buttons">
            <a href="#" class="btn btn-primary">Descargar CV (PDF)</a>
            <a href="#" class="btn btn-secondary">LinkedIn</a>
          </div>
        </div>

        <!-- Bloque Lateral Metodológico (Balance Híbrido) -->
        <div class="bento-card">
          <h1>Enfoque Híbrido</h1>
          <p>
            Lorem ipsum dolor sit amet, enfoque metodológico y estratégico optimizado para la entrega de software continuo de alta calidad.
          </p>
          
          <div class="hybrid-metric">
            <div class="metric-labels">
              <span style="color: var(--accent-blue)">70% Dev / Tech Lead</span>
              <span style="color: var(--accent-emerald)">30% Scrum</span>
            </div>
            <div class="progress-bar-container">
              <div class="progress-dev" title="70% Dev / Tech Lead Operations"></div>
              <div class="progress-scrum" title="30% Scrum Master"></div>
            </div>
          </div>
        </div>
      </div>
    `}};customElements.define(`hero-section`,Ht);var Ut=class extends Q{static styles=[$,N`
      :host {
        display: block;
        margin-bottom: 5rem;
        scroll-margin-top: 7rem; /* Para que al hacer scroll con el Navbar no se tape el título */
      }

      .section-header {
        margin-bottom: 2.5rem;
      }

      .section-tag {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--accent-emerald);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        display: block;
        margin-bottom: 0.5rem;
      }

      h2 {
        font-family: var(--font-sans);
        font-size: 2rem;
        font-weight: 800;
        margin: 0;
        color: var(--text-primary);
      }

      /* Contenedor de Hitos de Filosofía */
      .timeline-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      /* Tarjeta de Filosofía Estilo Premium (Contraste Alto) */
      .philosophy-card {
        background: var(--bg-surface);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid var(--border-color);
        border-radius: 1.25rem;
        padding: 2rem;
        display: flex;
        gap: 2rem;
        align-items: flex-start;
        transition: all 0.2s ease-in-out;
      }

      .philosophy-card:hover {
        border-color: rgba(16, 185, 129, 0.3); /* Destello verde esmeralda al pasar el mouse */
        background: rgba(30, 41, 59, 0.5);
        transform: scale(1.01);
      }

      /* Indicador Numérico / Icono Técnico */
      .card-index {
        font-family: var(--font-mono);
        font-size: 1rem;
        font-weight: 600;
        color: var(--accent-emerald);
        background: rgba(16, 185, 129, 0.1);
        border: 1px solid rgba(16, 185, 129, 0.2);
        width: 40px;
        height: 40px;
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .card-content {
        flex-grow: 1;
      }

      h3 {
        font-family: var(--font-sans);
        font-size: 1.25rem;
        font-weight: 700;
        margin: 0 0 0.5rem 0;
        color: var(--text-primary);
      }

      p {
        font-family: var(--font-sans);
        font-size: 0.95rem;
        color: var(--text-secondary);
        line-height: 1.6;
        margin: 0;
      }

      @media (max-width: 640px) {
        .philosophy-card {
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
        }
      }
    `];render(){return K`
      <!-- El ID 'filosofia' ya se encuentra mapeado en el contenedor superior para el scroll automático -->
      <div class="section-header">
        <span class="section-tag">// Leadership & Frameworks</span>
        <h2>Mi Filosofía de Trabajo</h2>
      </div>

      <div class="timeline-container">
        <!-- Pilar 1: Entrega de Valor Continua -->
        <div class="philosophy-card">
          <div class="card-index">01</div>
          <div class="card-content">
            <h3>Arquitectura Limpia & Código Sostenible</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <!-- Pilar 2: Agilidad Real, No de Manual -->
        <div class="philosophy-card">
          <div class="card-index">02</div>
          <div class="card-content">
            <h3>Agilidad Empática y Gestión de Bloqueos (Scrum)</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mánagers e ingenieros colaborando bajo métricas claras. Automatizando procesos operativos para enfocar el 100% de la energía del equipo en liberar features estables en producción.
            </p>
          </div>
        </div>

        <!-- Pilar 3: Operaciones y Tech Lead Ops -->
        <div class="philosophy-card">
          <div class="card-index">03</div>
          <div class="card-content">
            <h3>Cultura DevOps y Automatización</h3>
            <p>
              Lorem ipsum dolor sit amet, el software no termina cuando el código compila. Diseñar con observabilidad, pipelines de integración eficientes y un enfoque sólido en mitigar riesgos antes de que impacten al usuario final.
            </p>
          </div>
        </div>
      </div>
    `}};customElements.define(`filosofia-section`,Ut);var Wt=class extends Q{static styles=[$,N`
      :host {
        display: block;
        margin-bottom: 5rem;
      }

      /* Contenedor Principal con Borde de Gradiente Neón */
      .ai-container {
        position: relative;
        background: rgba(15, 23, 42, 0.6);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-radius: 1.5rem;
        padding: 2.5rem;
        border: 1px solid rgba(6, 182, 212, 0.15);
        box-shadow: 0 20px 40px -15px rgba(6, 182, 212, 0.1);
        overflow: hidden;
      }

      /* Efecto de resplandor de fondo */
      .ai-container::before {
        content: '';
        position: absolute;
        top: -20%;
        right: -10%;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
        z-index: 0;
        pointer-events: none;
      }

      .ai-content {
        position: relative;
        z-index: 1;
      }

      .section-tag {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--accent-ai);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        display: block;
        margin-bottom: 0.5rem;
      }

      h2 {
        font-family: var(--font-sans);
        font-size: 2rem;
        font-weight: 800;
        margin: 0 0 1rem 0;
        color: var(--text-primary);
      }

      .description {
        font-family: var(--font-sans);
        color: var(--text-secondary);
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 2.5rem;
        max-width: 800px;
      }

      /* Consola del Repositorio de Prompts */
      .prompt-box {
        background: #020617;
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 1rem;
        overflow: hidden;
      }

      .prompt-header {
        background: #0f172a;
        padding: 0.75rem 1.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      }

      .window-dots {
        display: flex;
        gap: 6px;
      }

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
      }
      .dot-active { background: var(--accent-ai); }

      .prompt-lang {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-secondary);
      }

      .prompt-body {
        padding: 1.5rem;
        font-family: var(--font-mono);
        font-size: 0.9rem;
        line-height: 1.6;
        color: #e2e8f0;
      }

      .keyword { color: var(--accent-ai); }
      .string { color: var(--accent-emerald); }
      .comment { color: #64748b; font-style: italic; }

      /* Tarjetas de Métricas de Impacto Co-Pilot/Gemini */
      .ai-metrics {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        margin-top: 2rem;
      }

      @media (max-width: 768px) {
        .ai-metrics { grid-template-columns: 1fr; }
      }

      .metric-card {
        background: rgba(30, 41, 59, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.03);
        border-radius: 0.75rem;
        padding: 1.25rem;
      }

      .metric-num {
        font-family: var(--font-sans);
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 0.25rem;
      }

      .metric-title {
        font-family: var(--font-sans);
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--accent-ai);
        margin-bottom: 0.5rem;
      }

      .metric-desc {
        font-family: var(--font-sans);
        font-size: 0.8rem;
        color: var(--text-secondary);
        line-height: 1.4;
      }
    `];render(){return K`
      <div class="ai-container">
        <div class="ai-content">
          <span class="section-tag">// AI Leverage & Efficiency</span>
          <h2>Repositorio de Prompts Personales</h2>
          <p class="description">
            Lorem ipsum dolor sit amet, ingenieros que saben apalancarse de Copilot y Gemini para acelerar los entregables de la empresa de manera óptima y automatizada.
          </p>

          <!-- Consola Visual del Prompt -->
          <div class="prompt-box">
            <div class="prompt-header">
              <div class="window-dots">
                <div class="dot dot-active"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
              <span class="prompt-lang">architecture-prompt.md</span>
            </div>
            <div class="prompt-body">
              <span class="comment"># Contexto: Actúa como un experto en Web Components y Lit v3...</span><br>
              <span class="keyword">Genera</span> una estructura de componente reactivo que implemente <span class="string">"Shadow DOM"</span> y herede los tokens de diseño globales.<br>
              <span class="keyword">Restricciones:</span> Evita librerías pesadas de terceros, optimiza el ciclo de vida actualizado e integra un tipado limpio.<br>
              <span class="comment">// Objetivo: Reducir el boilerplate operativo del equipo en un 40%</span>
            </div>
          </div>

          <!-- Bloque de Impacto de IA -->
          <div class="ai-metrics">
            <div class="metric-card">
              <div class="metric-num">-40%</div>
              <div class="metric-title">Tiempo de Boilerplate</div>
              <div class="metric-desc">Lorem ipsum dolor sit amet, reducción drástica de tiempos operativos en configuraciones iniciales.</div>
            </div>
            <div class="metric-card">
              <div class="metric-num">2.5x</div>
              <div class="metric-title">Velocidad de Feature Delivery</div>
              <div class="metric-desc">Lorem ipsum dolor sit amet, aceleración de entregables críticos mediante flujos de prompts validados.</div>
            </div>
            <div class="metric-card">
              <div class="metric-num">100%</div>
              <div class="metric-title">Estandarización de Código</div>
              <div class="metric-desc">Lorem ipsum dolor sit amet, generación de código consistente alineado a guías de diseño de la empresa.</div>
            </div>
          </div>
        </div>
      </div>
    `}};customElements.define(`ai-section`,Wt);var Gt=class extends Q{render(){return K`
      <hero-section></hero-section>
      <filosofia-section id="filosofia"></filosofia-section>
      <ai-section></ai-section>
    `}};customElements.define(`page-home`,Gt);var Kt=class extends Q{render(){return K`
      <p>Page Cases</p>
    `}};customElements.define(`page-cases`,Kt);var qt=new Je(document.getElementById(`app`));qt.setRoutes([{path:`/`,component:`app-layout`,children:[{path:`/`,component:`page-home`},{path:`casos`,component:`page-cases`}]}]);var Jt=()=>{let e=window.location.hash;if(e===`#filosofia`){window.location.pathname.includes(`casos`)&&Je.go(`/`),setTimeout(()=>{let e=(document.querySelector(`app-layout`)?.shadowRoot?.querySelector(`page-home`))?.shadowRoot?.getElementById(`filosofia`);e&&e.scrollIntoView({behavior:`smooth`,block:`start`})},150);return}let t=e.replace(/^#\/?/,`/`)||`/`;!e.includes(`filosofia`)&&qt.baseUrl+t!==window.location.pathname&&Je.go(t)};window.addEventListener(`hashchange`,Jt),window.addEventListener(`load`,Jt);