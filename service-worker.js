var at=Object.defineProperty,it=Object.defineProperties;var ot=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var ct=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable;var le=(p,u,h)=>u in p?at(p,u,{enumerable:!0,configurable:!0,writable:!0,value:h}):p[u]=h,he=(p,u)=>{for(var h in u||(u={}))ct.call(u,h)&&le(p,h,u[h]);if(ce)for(var h of ce(u))lt.call(u,h)&&le(p,h,u[h]);return p},ue=(p,u)=>it(p,ot(u));var c=(p,u,h)=>new Promise((V,g)=>{var C=x=>{try{k(h.next(x))}catch(v){g(v)}},T=x=>{try{k(h.throw(x))}catch(v){g(v)}},k=x=>x.done?V(x.value):Promise.resolve(x.value).then(C,T);k((h=h.apply(p,u)).next())});(function(){"use strict";var p={714:function(){try{self["workbox:core:6.5.2"]&&_()}catch(g){}},842:function(){try{self["workbox:expiration:6.5.2"]&&_()}catch(g){}},588:function(){try{self["workbox:precaching:6.5.2"]&&_()}catch(g){}},731:function(){try{self["workbox:routing:6.5.2"]&&_()}catch(g){}},817:function(){try{self["workbox:strategies:6.5.2"]&&_()}catch(g){}}},u={};function h(g){var C=u[g];if(C!==void 0)return C.exports;var T=u[g]={exports:{}};return p[g](T,T.exports,h),T.exports}var V={};(function(){var g=h(714);const C=null,T={"invalid-value":({paramName:r,validValueDescription:e,value:t})=>{if(!r||!e)throw new Error("Unexpected input to 'invalid-value' error.");return`The '${r}' parameter was given a value with an unexpected value. ${e} Received a value of ${JSON.stringify(t)}.`},"not-an-array":({moduleName:r,className:e,funcName:t,paramName:s})=>{if(!r||!e||!t||!s)throw new Error("Unexpected input to 'not-an-array' error.");return`The parameter '${s}' passed into '${r}.${e}.${t}()' must be an array.`},"incorrect-type":({expectedType:r,paramName:e,moduleName:t,className:s,funcName:n})=>{if(!r||!e||!t||!n)throw new Error("Unexpected input to 'incorrect-type' error.");const a=s?`${s}.`:"";return`The parameter '${e}' passed into '${t}.${a}${n}()' must be of type ${r}.`},"incorrect-class":({expectedClassName:r,paramName:e,moduleName:t,className:s,funcName:n,isReturnValueProblem:a})=>{if(!r||!t||!n)throw new Error("Unexpected input to 'incorrect-class' error.");const i=s?`${s}.`:"";return a?`The return value from '${t}.${i}${n}()' must be an instance of class ${r}.`:`The parameter '${e}' passed into '${t}.${i}${n}()' must be an instance of class ${r}.`},"missing-a-method":({expectedMethod:r,paramName:e,moduleName:t,className:s,funcName:n})=>{if(!r||!e||!t||!s||!n)throw new Error("Unexpected input to 'missing-a-method' error.");return`${t}.${s}.${n}() expected the '${e}' parameter to expose a '${r}' method.`},"add-to-cache-list-unexpected-type":({entry:r})=>`An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(r)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,"add-to-cache-list-conflicting-entries":({firstEntry:r,secondEntry:e})=>{if(!r||!e)throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");return`Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${r} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`},"plugin-error-request-will-fetch":({thrownErrorMessage:r})=>{if(!r)throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");return`An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${r}'.`},"invalid-cache-name":({cacheNameId:r,value:e})=>{if(!r)throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");return`You must provide a name containing at least one character for setCacheDetails({${r}: '...'}). Received a value of '${JSON.stringify(e)}'`},"unregister-route-but-not-found-with-method":({method:r})=>{if(!r)throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.");return`The route you're trying to unregister was not  previously registered for the method type '${r}'.`},"unregister-route-route-not-registered":()=>"The route you're trying to unregister was not previously registered.","queue-replay-failed":({name:r})=>`Replaying the background sync queue '${r}' failed.`,"duplicate-queue-name":({name:r})=>`The Queue name '${r}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,"expired-test-without-max-age":({methodName:r,paramName:e})=>`The '${r}()' method can only be used when the '${e}' is used in the constructor.`,"unsupported-route-type":({moduleName:r,className:e,funcName:t,paramName:s})=>`The supplied '${s}' parameter was an unsupported type. Please check the docs for ${r}.${e}.${t} for valid input types.`,"not-array-of-class":({value:r,expectedClass:e,moduleName:t,className:s,funcName:n,paramName:a})=>`The supplied '${a}' parameter must be an array of '${e}' objects. Received '${JSON.stringify(r)},'. Please check the call to ${t}.${s}.${n}() to fix the issue.`,"max-entries-or-age-required":({moduleName:r,className:e,funcName:t})=>`You must define either config.maxEntries or config.maxAgeSecondsin ${r}.${e}.${t}`,"statuses-or-headers-required":({moduleName:r,className:e,funcName:t})=>`You must define either config.statuses or config.headersin ${r}.${e}.${t}`,"invalid-string":({moduleName:r,funcName:e,paramName:t})=>{if(!t||!r||!e)throw new Error("Unexpected input to 'invalid-string' error.");return`When using strings, the '${t}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${r}.${e}() for more info.`},"channel-name-required":()=>"You must provide a channelName to construct a BroadcastCacheUpdate instance.","invalid-responses-are-same-args":()=>"The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.","expire-custom-caches-only":()=>"You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.","unit-must-be-bytes":({normalizedRangeHeader:r})=>{if(!r)throw new Error("Unexpected input to 'unit-must-be-bytes' error.");return`The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${r}"`},"single-range-only":({normalizedRangeHeader:r})=>{if(!r)throw new Error("Unexpected input to 'single-range-only' error.");return`Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${r}"`},"invalid-range-values":({normalizedRangeHeader:r})=>{if(!r)throw new Error("Unexpected input to 'invalid-range-values' error.");return`The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${r}"`},"no-range-header":()=>"No Range header was found in the Request provided.","range-not-satisfiable":({size:r,start:e,end:t})=>`The start (${e}) and end (${t}) values in the Range are not satisfiable by the cached response, which is ${r} bytes.`,"attempt-to-cache-non-get-request":({url:r,method:e})=>`Unable to cache '${r}' because it is a '${e}' request and only 'GET' requests can be cached.`,"cache-put-with-no-response":({url:r})=>`There was an attempt to cache '${r}' but the response was not defined.`,"no-response":({url:r,error:e})=>{let t=`The strategy could not generate a response for '${r}'.`;return e&&(t+=` The underlying error is ${e}.`),t},"bad-precaching-response":({url:r,status:e})=>`The precaching request for '${r}' failed`+(e?` with an HTTP status of ${e}.`:"."),"non-precached-url":({url:r})=>`createHandlerBoundToURL('${r}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,"add-to-cache-list-conflicting-integrities":({url:r})=>`Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${r} with different integrity values. Please remove one of them.`,"missing-precache-entry":({cacheName:r,url:e})=>`Unable to find a precached response in ${r} for ${e}.`,"cross-origin-copy-response":({origin:r})=>`workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${r}.`,"opaque-streams-source":({type:r})=>{const e=`One of the workbox-streams sources resulted in an '${r}' response.`;return r==="opaqueredirect"?`${e} Please do not use a navigation request that results in a redirect as a source.`:`${e} Please ensure your sources are CORS-enabled.`}},k=(r,...e)=>{let t=r;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t},x=(r,e={})=>{const t=messages[r];if(!t)throw new Error(`Unable to find message for code '${r}'.`);return t(e)},v=k;class f extends Error{constructor(e,t){const s=v(e,t);super(s),this.name=e,this.details=t}}const ht=(r,e)=>{if(!Array.isArray(r))throw new WorkboxError("not-an-array",e)},ut=(r,e,t)=>{if(typeof r[e]!=="function")throw t.expectedMethod=e,new WorkboxError("missing-a-method",t)},ft=(r,e,t)=>{if(typeof r!==e)throw t.expectedType=e,new WorkboxError("incorrect-type",t)},dt=(r,e,t)=>{if(!(r instanceof e))throw t.expectedClassName=e.name,new WorkboxError("incorrect-class",t)},pt=(r,e,t)=>{if(!e.includes(r))throw t.validValueDescription=`Valid values are ${JSON.stringify(e)}.`,new WorkboxError("invalid-value",t)},gt=(r,e,t)=>{const s=new WorkboxError("not-array-of-class",t);if(!Array.isArray(r))throw s;for(const n of r)if(!(n instanceof e))throw s},wt=null,G=new Set;function fe(r){G.add(r)}const w={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration!="undefined"?registration.scope:""},M=r=>[w.prefix,r,w.suffix].filter(e=>e&&e.length>0).join("-"),de=r=>{for(const e of Object.keys(w))r(e)},m={updateDetails:r=>{de(e=>{typeof r[e]=="string"&&(w[e]=r[e])})},getGoogleAnalyticsName:r=>r||M(w.googleAnalytics),getPrecacheName:r=>r||M(w.precache),getPrefix:()=>w.prefix,getRuntimeName:r=>r||M(w.runtime),getSuffix:()=>w.suffix};function J(r,e){const t=new URL(r);for(const s of e)t.searchParams.delete(s);return t.href}function pe(r,e,t,s){return c(this,null,function*(){const n=J(e.url,t);if(e.url===n)return r.match(e,s);const a=Object.assign(Object.assign({},s),{ignoreSearch:!0}),i=yield r.keys(e,a);for(const o of i){const l=J(o.url,t);if(n===l)return r.match(o,s)}})}let L;function mt(){if(L===void 0)try{new ReadableStream({start(){}}),L=!0}catch(r){L=!1}return L}let P;function ge(){if(P===void 0){const r=new Response("");if("body"in r)try{new Response(r.body),P=!0}catch(e){P=!1}P=!1}return P}function Y(r){r.then(()=>{})}class we{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}function me(){return c(this,null,function*(){for(const r of G)yield r()})}const Q=r=>new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),"");function ye(r){return new Promise(e=>setTimeout(e,r))}const _e=2e3;function yt(r){return c(this,null,function*(){if(!r)return;let e=yield self.clients.matchAll({type:"window"});const t=new Set(e.map(a=>a.id));let s;const n=performance.now();for(;performance.now()-n<_e&&(e=yield self.clients.matchAll({type:"window"}),s=e.find(a=>r?a.id===r:!t.has(a.id)),!s);)yield timeout(100);return s})}function X(r,e){const t=e();return r.waitUntil(t),t}const _t={get googleAnalytics(){return m.getGoogleAnalyticsName()},get precache(){return m.getPrecacheName()},get prefix(){return m.getPrefix()},get runtime(){return m.getRuntimeName()},get suffix(){return m.getSuffix()}};function be(r,e){return c(this,null,function*(){let t=null;if(r.url&&(t=new URL(r.url).origin),t!==self.location.origin)throw new f("cross-origin-copy-response",{origin:t});const s=r.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},a=e?e(n):n,i=ge()?s.body:yield s.blob();return new Response(i,a)})}function Re(){self.addEventListener("activate",()=>self.clients.claim())}function bt(r){cacheNames.updateDetails(r)}function Rt(){self.skipWaiting()}const Ce=(r,e)=>e.some(t=>r instanceof t);let Z,z;function xe(){return Z||(Z=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ee(){return z||(z=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ee=new WeakMap,N=new WeakMap,te=new WeakMap,I=new WeakMap,W=new WeakMap;function Te(r){const e=new Promise((t,s)=>{const n=()=>{r.removeEventListener("success",a),r.removeEventListener("error",i)},a=()=>{t(y(r.result)),n()},i=()=>{s(r.error),n()};r.addEventListener("success",a),r.addEventListener("error",i)});return e.then(t=>{t instanceof IDBCursor&&ee.set(t,r)}).catch(()=>{}),W.set(e,r),e}function ke(r){if(N.has(r))return;const e=new Promise((t,s)=>{const n=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",i),r.removeEventListener("abort",i)},a=()=>{t(),n()},i=()=>{s(r.error||new DOMException("AbortError","AbortError")),n()};r.addEventListener("complete",a),r.addEventListener("error",i),r.addEventListener("abort",i)});N.set(r,e)}let K={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return N.get(r);if(e==="objectStoreNames")return r.objectStoreNames||te.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return y(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ve(r){K=r(K)}function Pe(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(q(this),e,...t);return te.set(s,e.sort?e.sort():[e]),y(s)}:Ee().includes(r)?function(...e){return r.apply(q(this),e),y(ee.get(this))}:function(...e){return y(r.apply(q(this),e))}}function Ue(r){return typeof r=="function"?Pe(r):(r instanceof IDBTransaction&&ke(r),Ce(r,xe())?new Proxy(r,K):r)}function y(r){if(r instanceof IDBRequest)return Te(r);if(I.has(r))return I.get(r);const e=Ue(r);return e!==r&&(I.set(r,e),W.set(e,r)),e}const q=r=>W.get(r);function De(r,e,{blocked:t,upgrade:s,blocking:n,terminated:a}={}){const i=indexedDB.open(r,e),o=y(i);return s&&i.addEventListener("upgradeneeded",l=>{s(y(i.result),l.oldVersion,l.newVersion,y(i.transaction))}),t&&i.addEventListener("blocked",()=>t()),o.then(l=>{a&&l.addEventListener("close",()=>a()),n&&l.addEventListener("versionchange",()=>n())}).catch(()=>{}),o}function $e(r,{blocked:e}={}){const t=indexedDB.deleteDatabase(r);return e&&t.addEventListener("blocked",()=>e()),y(t).then(()=>{})}const Le=["get","getKey","getAll","getAllKeys","count"],Se=["put","add","delete","clear"],B=new Map;function re(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(B.get(e))return B.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,n=Se.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(n||Le.includes(t)))return;const a=function(i,...o){return c(this,null,function*(){const l=this.transaction(i,n?"readwrite":"readonly");let d=l.store;return s&&(d=d.index(o.shift())),(yield Promise.all([d[t](...o),n&&l.done]))[0]})};return B.set(e,a),a}ve(r=>ue(he({},r),{get:(e,t,s)=>re(e,t)||r.get(e,t,s),has:(e,t)=>!!re(e,t)||r.has(e,t)}));var Ct=h(842);const Oe="workbox-expiration",U="cache-entries",se=r=>{const e=new URL(r,location.href);return e.hash="",e.href};class Ae{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(U,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&$e(this._cacheName)}setTimestamp(e,t){return c(this,null,function*(){e=se(e);const s={url:e,timestamp:t,cacheName:this._cacheName,id:this._getId(e)},a=(yield this.getDb()).transaction(U,"readwrite",{durability:"relaxed"});yield a.store.put(s),yield a.done})}getTimestamp(e){return c(this,null,function*(){const s=yield(yield this.getDb()).get(U,this._getId(e));return s==null?void 0:s.timestamp})}expireEntries(e,t){return c(this,null,function*(){const s=yield this.getDb();let n=yield s.transaction(U).store.index("timestamp").openCursor(null,"prev");const a=[];let i=0;for(;n;){const l=n.value;l.cacheName===this._cacheName&&(e&&l.timestamp<e||t&&i>=t?a.push(n.value):i++),n=yield n.continue()}const o=[];for(const l of a)yield s.delete(U,l.id),o.push(l.url);return o})}_getId(e){return this._cacheName+"|"+se(e)}getDb(){return c(this,null,function*(){return this._db||(this._db=yield De(Oe,1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db})}}class Me{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new Ae(e)}expireEntries(){return c(this,null,function*(){if(this._isRunning){this._rerunRequested=!0;return}this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-this._maxAgeSeconds*1e3:0,t=yield this._timestampModel.expireEntries(e,this._maxEntries),s=yield self.caches.open(this._cacheName);for(const n of t)yield s.delete(n,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,Y(this.expireEntries()))})}updateTimestamp(e){return c(this,null,function*(){yield this._timestampModel.setTimestamp(e,Date.now())})}isURLExpired(e){return c(this,null,function*(){if(this._maxAgeSeconds){const t=yield this._timestampModel.getTimestamp(e),s=Date.now()-this._maxAgeSeconds*1e3;return t!==void 0?t<s:!0}else return!1})}delete(){return c(this,null,function*(){this._rerunRequested=!1,yield this._timestampModel.expireEntries(1/0)})}}class Ne{constructor(e={}){this.cachedResponseWillBeUsed=i=>c(this,[i],function*({event:t,request:s,cacheName:n,cachedResponse:a}){if(!a)return null;const o=this._isResponseDateFresh(a),l=this._getCacheExpiration(n);Y(l.expireEntries());const d=l.updateTimestamp(s.url);if(t)try{t.waitUntil(d)}catch(b){}return o?a:null}),this.cacheDidUpdate=n=>c(this,[n],function*({cacheName:t,request:s}){const a=this._getCacheExpiration(t);yield a.updateTimestamp(s.url),yield a.expireEntries()}),this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&fe(()=>this.deleteCacheAndMetadata())}_getCacheExpiration(e){if(e===m.getRuntimeName())throw new f("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new Me(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(t===null)return!0;const s=Date.now();return t>=s-this._maxAgeSeconds*1e3}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),n=new Date(t).getTime();return isNaN(n)?null:n}deleteCacheAndMetadata(){return c(this,null,function*(){for(const[e,t]of this._cacheExpirations)yield self.caches.delete(e),yield t.delete();this._cacheExpirations=new Map})}}var xt=h(588);const Ie="__WB_REVISION__";function We(r){if(!r)throw new f("add-to-cache-list-unexpected-type",{entry:r});if(typeof r=="string"){const a=new URL(r,location.href);return{cacheKey:a.href,url:a.href}}const{revision:e,url:t}=r;if(!t)throw new f("add-to-cache-list-unexpected-type",{entry:r});if(!e){const a=new URL(t,location.href);return{cacheKey:a.href,url:a.href}}const s=new URL(t,location.href),n=new URL(t,location.href);return s.searchParams.set(Ie,e),{cacheKey:s.href,url:n.href}}class Ke{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=s=>c(this,[s],function*({request:e,state:t}){t&&(t.originalRequest=e)}),this.cachedResponseWillBeUsed=n=>c(this,[n],function*({event:e,state:t,cachedResponse:s}){if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){const a=t.originalRequest.url;s?this.notUpdatedURLs.push(a):this.updatedURLs.push(a)}return s})}}class qe{constructor({precacheController:e}){this.cacheKeyWillBeUsed=n=>c(this,[n],function*({request:t,params:s}){const a=(s==null?void 0:s.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return a?new Request(a,{headers:t.headers}):t}),this._precacheController=e}}const Be=(r,e)=>{logger.groupCollapsed(r);for(const t of e)logger.log(t);logger.groupEnd()};function Et(r){const e=r.length;e>0&&(logger.groupCollapsed(`During precaching cleanup, ${e} cached request${e===1?" was":"s were"} deleted.`),Be("Deleted Cache Requests",r),logger.groupEnd())}function ne(r,e){if(e.length!==0){logger.groupCollapsed(r);for(const t of e)logger.log(t);logger.groupEnd()}}function Tt(r,e){const t=r.length,s=e.length;if(t||s){let n=`Precaching ${t} file${t===1?"":"s"}.`;s>0&&(n+=` ${s} file${s===1?" is":"s are"} already cached.`),logger.groupCollapsed(n),ne("View newly precached URLs.",r),ne("View previously precached URLs.",e),logger.groupEnd()}}var kt=h(817);function S(r){return typeof r=="string"?new Request(r):r}class Fe{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new we,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}fetch(e){return c(this,null,function*(){const{event:t}=this;let s=S(e);if(s.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const i=yield t.preloadResponse;if(i)return i}const n=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const i of this.iterateCallbacks("requestWillFetch"))s=yield i({request:s.clone(),event:t})}catch(i){if(i instanceof Error)throw new f("plugin-error-request-will-fetch",{thrownErrorMessage:i.message})}const a=s.clone();try{let i;i=yield fetch(s,s.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const o of this.iterateCallbacks("fetchDidSucceed"))i=yield o({event:t,request:a,response:i});return i}catch(i){throw n&&(yield this.runCallbacks("fetchDidFail",{error:i,event:t,originalRequest:n.clone(),request:a.clone()})),i}})}fetchAndCachePut(e){return c(this,null,function*(){const t=yield this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t})}cacheMatch(e){return c(this,null,function*(){const t=S(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,i=yield this.getCacheKey(t,"read"),o=Object.assign(Object.assign({},a),{cacheName:n});s=yield caches.match(i,o);for(const l of this.iterateCallbacks("cachedResponseWillBeUsed"))s=(yield l({cacheName:n,matchOptions:a,cachedResponse:s,request:i,event:this.event}))||void 0;return s})}cachePut(e,t){return c(this,null,function*(){const s=S(e);yield ye(0);const n=yield this.getCacheKey(s,"write");if(!t)throw new f("cache-put-with-no-response",{url:Q(n.url)});const a=yield this._ensureResponseSafeToCache(t);if(!a)return!1;const{cacheName:i,matchOptions:o}=this._strategy,l=yield self.caches.open(i),d=this.hasCallback("cacheDidUpdate"),b=d?yield pe(l,n.clone(),["__WB_REVISION__"],o):null;try{yield l.put(n,d?a.clone():a)}catch(R){if(R instanceof Error)throw R.name==="QuotaExceededError"&&(yield me()),R}for(const R of this.iterateCallbacks("cacheDidUpdate"))yield R({cacheName:i,oldResponse:b,newResponse:a.clone(),request:n,event:this.event});return!0})}getCacheKey(e,t){return c(this,null,function*(){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let n=e;for(const a of this.iterateCallbacks("cacheKeyWillBeUsed"))n=S(yield a({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]})}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}runCallbacks(e,t){return c(this,null,function*(){for(const s of this.iterateCallbacks(e))yield s(t)})}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const s=this._pluginStateMap.get(t);yield a=>{const i=Object.assign(Object.assign({},a),{state:s});return t[e](i)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}doneWaiting(){return c(this,null,function*(){let e;for(;e=this._extendLifetimePromises.shift();)yield e})}destroy(){this._handlerDeferred.resolve(null)}_ensureResponseSafeToCache(e){return c(this,null,function*(){let t=e,s=!1;for(const n of this.iterateCallbacks("cacheWillUpdate"))if(t=(yield n({request:this.request,response:t,event:this.event}))||void 0,s=!0,!t)break;return s||t&&t.status!==200&&(t=void 0),t})}}class ae{constructor(e={}){this.cacheName=m.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s=typeof e.request=="string"?new Request(e.request):e.request,n="params"in e?e.params:void 0,a=new Fe(this,{event:t,request:s,params:n}),i=this._getResponse(a,s,t),o=this._awaitComplete(i,a,s,t);return[i,o]}_getResponse(e,t,s){return c(this,null,function*(){yield e.runCallbacks("handlerWillStart",{event:s,request:t});let n;try{if(n=yield this._handle(t,e),!n||n.type==="error")throw new f("no-response",{url:t.url})}catch(a){if(a instanceof Error){for(const i of e.iterateCallbacks("handlerDidError"))if(n=yield i({error:a,event:s,request:t}),n)break}if(!n)throw a}for(const a of e.iterateCallbacks("handlerWillRespond"))n=yield a({event:s,request:t,response:n});return n})}_awaitComplete(e,t,s,n){return c(this,null,function*(){let a,i;try{a=yield e}catch(o){}try{yield t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),yield t.doneWaiting()}catch(o){o instanceof Error&&(i=o)}if(yield t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:i}),t.destroy(),i)throw i})}}class E extends ae{constructor(e={}){e.cacheName=m.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(E.copyRedirectedCacheableResponsesPlugin)}_handle(e,t){return c(this,null,function*(){const s=yield t.cacheMatch(e);return s||(t.event&&t.event.type==="install"?yield this._handleInstall(e,t):yield this._handleFetch(e,t))})}_handleFetch(e,t){return c(this,null,function*(){let s;const n=t.params||{};if(this._fallbackToNetwork){const a=n.integrity,i=e.integrity,o=!i||i===a;if(s=yield t.fetch(new Request(e,{integrity:i||a})),a&&o){this._useDefaultCacheabilityPluginIfNeeded();const l=yield t.cachePut(e,s.clone())}}else throw new f("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s})}_handleInstall(e,t){return c(this,null,function*(){this._useDefaultCacheabilityPluginIfNeeded();const s=yield t.fetch(e);if(!(yield t.cachePut(e,s.clone())))throw new f("bad-precaching-response",{url:e.url,status:s.status});return s})}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==E.copyRedirectedCacheableResponsesPlugin&&(n===E.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);t===0?this.plugins.push(E.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}E.defaultPrecacheCacheabilityPlugin={cacheWillUpdate(e){return c(this,arguments,function*({response:r}){return!r||r.status>=400?null:r})}},E.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate(e){return c(this,arguments,function*({response:r}){return r.redirected?yield be(r):r})}};class je{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new E({cacheName:m.getPrecacheName(e),plugins:[...t,new qe({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){typeof s=="string"?t.push(s):s&&s.revision===void 0&&t.push(s.url);const{cacheKey:n,url:a}=We(s),i=typeof s!="string"&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==n)throw new f("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:n});if(typeof s!="string"&&s.integrity){if(this._cacheKeysToIntegrities.has(n)&&this._cacheKeysToIntegrities.get(n)!==s.integrity)throw new f("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(n,s.integrity)}if(this._urlsToCacheKeys.set(a,n),this._urlsToCacheModes.set(a,i),t.length>0){const o=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(o)}}}install(e){return X(e,()=>c(this,null,function*(){const t=new Ke;this.strategy.plugins.push(t);for(const[a,i]of this._urlsToCacheKeys){const o=this._cacheKeysToIntegrities.get(i),l=this._urlsToCacheModes.get(a),d=new Request(a,{integrity:o,cache:l,credentials:"same-origin"});yield Promise.all(this.strategy.handleAll({params:{cacheKey:i},request:d,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return X(e,()=>c(this,null,function*(){const t=yield self.caches.open(this.strategy.cacheName),s=yield t.keys(),n=new Set(this._urlsToCacheKeys.values()),a=[];for(const i of s)n.has(i.url)||(yield t.delete(i),a.push(i.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}matchPrecache(e){return c(this,null,function*(){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(yield self.caches.open(this.strategy.cacheName)).match(s)})}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new f("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let F;const j=()=>(F||(F=new je),F);function vt(r){getOrCreatePrecacheController().strategy.plugins.push(...r)}var Pt=h(731);const ie="GET",Ut=null,O=r=>r&&typeof r=="object"?r:{handle:r};class D{constructor(e,t,s=ie){this.handler=O(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=O(e)}}class He extends D{constructor(e,t,s){const n=({url:a})=>{const i=e.exec(a.href);if(!!i&&!(a.origin!==location.origin&&i.index!==0))return i.slice(1)};super(n,t,s)}}class Ve{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(n=>{typeof n=="string"&&(n=[n]);const a=new Request(...n);return this.handleRequest({request:a,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:a,route:i}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let o=i&&i.handler;const l=[],d=e.method;if(!o&&this._defaultHandlerMap.has(d)&&(o=this._defaultHandlerMap.get(d)),!o)return;let b;try{b=o.handle({url:s,request:e,event:t,params:a})}catch(A){b=Promise.reject(A)}const R=i&&i.catchHandler;return b instanceof Promise&&(this._catchHandler||R)&&(b=b.catch(A=>c(this,null,function*(){if(R)try{return yield R.handle({url:s,request:e,event:t,params:a})}catch(oe){oe instanceof Error&&(A=oe)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw A}))),b}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const a=this._routes.get(s.method)||[];for(const i of a){let o;const l=i.match({url:e,sameOrigin:t,request:s,event:n});if(l)return o=l,(Array.isArray(o)&&o.length===0||l.constructor===Object&&Object.keys(l).length===0||typeof l=="boolean")&&(o=void 0),{route:i,params:o}}return{}}setDefaultHandler(e,t=ie){this._defaultHandlerMap.set(t,O(e))}setCatchHandler(e){this._catchHandler=O(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new f("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new f("unregister-route-route-not-registered")}}let $;const Ge=()=>($||($=new Ve,$.addFetchListener(),$.addCacheListener()),$);function H(r,e,t){let s;if(typeof r=="string"){const a=new URL(r,location.href),i=({url:o})=>o.href===a.href;s=new D(i,e,t)}else if(r instanceof RegExp)s=new He(r,e,t);else if(typeof r=="function")s=new D(r,e,t);else if(r instanceof D)s=r;else throw new f("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return Ge().registerRoute(s),s}function Je(r,e=[]){for(const t of[...r.searchParams.keys()])e.some(s=>s.test(t))&&r.searchParams.delete(t);return r}function*Ye(r,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={}){const a=new URL(r,location.href);a.hash="",yield a.href;const i=Je(a,e);if(yield i.href,t&&i.pathname.endsWith("/")){const o=new URL(i.href);o.pathname+=t,yield o.href}if(s){const o=new URL(i.href);o.pathname+=".html",yield o.href}if(n){const o=n({url:a});for(const l of o)yield l.href}}class Qe extends D{constructor(e,t){const s=({request:n})=>{const a=e.getURLsToCacheKeys();for(const i of Ye(n.url,t)){const o=a.get(i);if(o){const l=e.getIntegrityForCacheKey(o);return{cacheKey:o,integrity:l}}}};super(s,e.strategy)}}function Xe(r){const e=j(),t=new Qe(e,r);H(t)}const Ze="-precache-",Dt=(t,...s)=>c(this,[t,...s],function*(r,e=Ze){const a=(yield self.caches.keys()).filter(i=>i.includes(e)&&i.includes(self.registration.scope)&&i!==r);return yield Promise.all(a.map(i=>self.caches.delete(i))),a});function $t(){self.addEventListener("activate",r=>{const e=cacheNames.getPrecacheName();r.waitUntil(deleteOutdatedCaches(e).then(t=>{}))})}function ze(r){return j().createHandlerBoundToURL(r)}function Lt(r){return getOrCreatePrecacheController().getCacheKeyForURL(r)}function St(r){return getOrCreatePrecacheController().matchPrecache(r)}function et(r){j().precache(r)}function tt(r,e){et(r),Xe(e)}class Ot{constructor({fallbackURL:e,precacheController:t}){this.handlerDidError=()=>this._precacheController.matchPrecache(this._fallbackURL),this._fallbackURL=e,this._precacheController=t||getOrCreatePrecacheController()}}class At extends null{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){super(n=>this._match(n),e),this._allowlist=t,this._denylist=s}_match({url:e,request:t}){if(t&&t.mode!=="navigate")return!1;const s=e.pathname+e.search;for(const n of this._denylist)if(n.test(s))return!1;return!!this._allowlist.some(n=>n.test(s))}}function Mt(r){getOrCreateDefaultRouter().setCatchHandler(r)}function Nt(r){getOrCreateDefaultRouter().setDefaultHandler(r)}const It={strategyStart:(r,e)=>`Using ${r} to respond to '${Q(e.url)}'`,printFinalResponse:r=>{r&&(C.groupCollapsed("View the final response here."),C.log(r||"[No response returned]"),C.groupEnd())}};class Wt extends null{_handle(e,t){return c(this,null,function*(){const s=[];let n=yield t.cacheMatch(e),a;if(!n)try{n=yield t.fetchAndCachePut(e)}catch(i){i instanceof Error&&(a=i)}if(!n)throw new WorkboxError("no-response",{url:e.url,error:a});return n})}}class Kt extends null{_handle(e,t){return c(this,null,function*(){const s=yield t.cacheMatch(e);if(!s)throw new WorkboxError("no-response",{url:e.url});return s})}}const rt={cacheWillUpdate:e=>c(this,[e],function*({response:r}){return r.status===200||r.status===0?r:null})};class qt extends null{constructor(e={}){super(e),this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift(cacheOkAndOpaquePlugin),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}_handle(e,t){return c(this,null,function*(){const s=[],n=[];let a;if(this._networkTimeoutSeconds){const{id:l,promise:d}=this._getTimeoutPromise({request:e,logs:s,handler:t});a=l,n.push(d)}const i=this._getNetworkPromise({timeoutId:a,request:e,logs:s,handler:t});n.push(i);const o=yield t.waitUntil((()=>c(this,null,function*(){return(yield t.waitUntil(Promise.race(n)))||(yield i)}))());if(!o)throw new WorkboxError("no-response",{url:e.url});return o})}_getTimeoutPromise({request:e,logs:t,handler:s}){let n;return{promise:new Promise(i=>{n=setTimeout(()=>c(this,null,function*(){i(yield s.cacheMatch(e))}),this._networkTimeoutSeconds*1e3)}),id:n}}_getNetworkPromise(a){return c(this,arguments,function*({timeoutId:e,request:t,logs:s,handler:n}){let i,o;try{o=yield n.fetchAndCachePut(t)}catch(l){l instanceof Error&&(i=l)}return e&&clearTimeout(e),(i||!o)&&(o=yield n.cacheMatch(t)),o})}}class Bt extends null{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}_handle(e,t){return c(this,null,function*(){let s,n;try{const a=[t.fetch(e)];if(this._networkTimeoutSeconds){const i=timeout(this._networkTimeoutSeconds*1e3);a.push(i)}if(n=yield Promise.race(a),!n)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(a){a instanceof Error&&(s=a)}if(!n)throw new WorkboxError("no-response",{url:e.url,error:s});return n})}}class st extends ae{constructor(e={}){super(e),this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift(rt)}_handle(e,t){return c(this,null,function*(){const s=[],n=t.fetchAndCachePut(e).catch(()=>{});t.waitUntil(n);let a=yield t.cacheMatch(e),i;if(!a)try{a=yield n}catch(o){o instanceof Error&&(i=o)}if(!a)throw new f("no-response",{url:e.url,error:i});return a})}}Re(),tt([{'revision':'96b3cd6a66620a539910c6f256a2421c','url':'./index.html'},{'revision':null,'url':'./static/css/main.a2f7ae5e.css'},{'revision':null,'url':'./static/js/main.93096030.js'},{'revision':null,'url':'./static/media/SettingsIcons.05b3fe8c6c4599103d72.woff2'},{'revision':null,'url':'./static/media/server.99e1fcd21a4a9a3b736f.jpg'},{'revision':null,'url':'./static/media/spotify.add3c9225e28bf644f29.woff2'},{'revision':null,'url':'./static/media/spotify.e0e1dc5c97e13d79c9fd.ttf'}]);const nt=new RegExp("/[^/?]+\\.[^/]+$");H(({request:r,url:e})=>!(r.mode!=="navigate"||e.pathname.startsWith("/_")||e.pathname.match(nt)),ze("./index.html")),H(({url:r})=>r.origin===self.location.origin&&r.pathname.endsWith(".png"),new st({cacheName:"images",plugins:[new Ne({maxEntries:50})]})),self.addEventListener("message",r=>{r.data&&r.data.type==="SKIP_WAITING"&&self.skipWaiting()})})()})();

//# sourceMappingURL=service-worker.js.map