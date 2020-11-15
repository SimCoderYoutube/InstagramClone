!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).firebase=t()}(this,(function(){"use strict";
/**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(const r in n)n.hasOwnProperty(r)&&(t[r]=e(t[r],n[r]));return t}
/**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class t{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const n="FirebaseError";class r extends Error{constructor(e,t){super(t),this.code=e,this.name=n,Object.setPrototypeOf(this,r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,i.prototype.create)}}class i{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?function(e,t){return e.replace(o,(e,n)=>{const r=t[n];return null!=r?r.toString():`<${n}?>`})}(s,n):"Error",c=`${this.serviceName}: ${a} (${i}).`,u=new r(i,c);for(const e of Object.keys(n))"_"!==e.slice(-1)&&(e in u&&console.warn(`Overwriting FirebaseError base field "${e}" can cause unexpected behavior.`),u[e]=n[e]);return u}}const o=/\{\$([^}]+)}/g;
/**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function s(e,t){return Object.prototype.hasOwnProperty.call(e,t)}class a{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const c="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class u{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}get(e=c){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const e=new t;this.instancesDeferred.set(n,e);try{const t=this.getOrInitializeService(n);t&&e.resolve(t)}catch(e){}}return this.instancesDeferred.get(n).promise}getImmediate(e){const{identifier:t,optional:n}=Object.assign({identifier:c,optional:!1},e),r=this.normalizeInstanceIdentifier(t);try{const e=this.getOrInitializeService(r);if(!e){if(n)return null;throw Error(`Service ${this.name} is not available`)}return e}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,function(e){return"EAGER"===e.instantiationMode}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))try{this.getOrInitializeService(c)}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService(n);t.resolve(e)}catch(e){}}}clearInstance(e=c){this.instancesDeferred.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all(e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()))}isComponentSet(){return null!=this.component}getOrInitializeService(e){let t=this.instances.get(e);return!t&&this.component&&(t=this.component.instanceFactory(this.container,function(e){return e===c?void 0:e}(e)),this.instances.set(e,t)),t||null}normalizeInstanceIdentifier(e){return this.component?this.component.multipleInstances?e:c:e}}class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new u(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var p;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(p||(p={}));const f=p.INFO,h=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString();switch(t){case p.DEBUG:case p.VERBOSE:console.log(`[${r}]  ${e.name}:`,...n);break;case p.INFO:console.info(`[${r}]  ${e.name}:`,...n);break;case p.WARN:console.warn(`[${r}]  ${e.name}:`,...n);break;case p.ERROR:console.error(`[${r}]  ${e.name}:`,...n);break;default:throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)}};class d{constructor(e){this.name=e,this._logLevel=f,this._logHandler=h}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in p))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}debug(...e){this._logHandler(this,p.DEBUG,...e)}log(...e){this._logHandler(this,p.VERBOSE,...e)}info(...e){this._logHandler(this,p.INFO,...e)}warn(...e){this._logHandler(this,p.WARN,...e)}error(...e){this._logHandler(this,p.ERROR,...e)}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const m=new i("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."}),g="@firebase/app",b="0.5.4",w="[DEFAULT]",v={[g]:"fire-core","@firebase/analytics":"fire-analytics","@firebase/auth":"fire-auth","@firebase/database":"fire-rtdb","@firebase/functions":"fire-fn","@firebase/installations":"fire-iid","@firebase/messaging":"fire-fcm","@firebase/performance":"fire-perf","@firebase/remote-config":"fire-rc","@firebase/storage":"fire-gcs","@firebase/firestore":"fire-fst","fire-js":"fire-js","firebase-wrapper":"fire-js-all"};
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class y{constructor(t,n,r){this.firebase_=r,this.isDeleted_=!1,this.INTERNAL={},this.name_=n.name,this.automaticDataCollectionEnabled_=n.automaticDataCollectionEnabled||!1,this.options_=e(void 0,t),this.container=new l(n.name),this.container.addComponent(new a("app",()=>this,"PUBLIC"));for(const e of this.firebase_.INTERNAL.components.values())this.container.addComponent(e)}get automaticDataCollectionEnabled(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_}set automaticDataCollectionEnabled(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e}get name(){return this.checkDestroyed_(),this.name_}get options(){return this.checkDestroyed_(),this.options_}delete(){return new Promise(e=>{this.checkDestroyed_(),e()}).then(()=>(this.firebase_.INTERNAL.removeApp(this.name_),Promise.all(this.container.getProviders().map(e=>e.delete())))).then(()=>{this.isDeleted_=!0})}_getService(e,t=w){return this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})}checkDestroyed_(){if(this.isDeleted_)throw m.create("app-deleted",{appName:this.name_})}}const _="7.9.0",I=new d("@firebase/app");
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class E{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){var t;const n=e.getComponent();return"VERSION"===(null===(t=n)||void 0===t?void 0:t.type)}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const S=
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(){const t=
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(t){const n={},r=new Map,i={__esModule:!0,initializeApp:function(e,r={}){if("object"!=typeof r||null===r){r={name:r}}const o=r;void 0===o.name&&(o.name=w);const{name:a}=o;if("string"!=typeof a||!a)throw m.create("bad-app-name",{appName:String(a)});if(s(n,a))throw m.create("duplicate-app",{appName:a});const c=new t(e,o,i);return n[a]=c,c},app:o,registerVersion:function(e,t,n){var r;let i=null!==(r=v[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void I.warn(e.join(" "))}c(new a(`${i}-version`,()=>({library:i,version:t}),"VERSION"))},apps:null,SDK_VERSION:_,INTERNAL:{registerComponent:c,removeApp:function(e){delete n[e]},components:r,useAsService:function(e,t){if("serverAuth"===t)return null;return t}}};function o(e){if(!s(n,e=e||w))throw m.create("no-app",{appName:e});return n[e]}function c(s){const a=s.name;if(r.has(a))return I.debug(`There were multiple attempts to register component ${a}.`),"PUBLIC"===s.type?i[a]:null;if(r.set(a,s),"PUBLIC"===s.type){const n=(e=o())=>{if("function"!=typeof e[a])throw m.create("invalid-app-argument",{appName:a});return e[a]()};void 0!==s.serviceProps&&e(n,s.serviceProps),i[a]=n,t.prototype[a]=function(...e){return this._getService.bind(this,a).apply(this,s.multipleInstances?e:[])}}for(const e of Object.keys(n))n[e]._addComponent(s);return"PUBLIC"===s.type?i[a]:null}return(i.default=i,Object.defineProperty(i,"apps",{get:function(){return Object.keys(n).map(e=>n[e])}}),o.App=t,i)}(y);t.SDK_VERSION=`${t.SDK_VERSION}_LITE`;const n=t.INTERNAL.registerComponent;return t.INTERNAL.registerComponent=function(e){if("PUBLIC"===e.type&&"performance"!==e.name&&"installations"!==e.name)throw Error(`${name} cannot register with the standalone perf instance`);return n(e)},t}();function T(e){return Array.prototype.slice.call(e)}function A(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function N(e,t,n){var r,i=new Promise((function(i,o){A(r=e[t].apply(e,n)).then(i,o)}));return i.request=r,i}function O(e,t,n){var r=N(e,t,n);return r.then((function(e){if(e)return new j(e,r.request)}))}function k(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function C(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return N(this[t],r,arguments)})}))}function P(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function $(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return O(this[t],r,arguments)})}))}function D(e){this._index=e}function j(e,t){this._cursor=e,this._request=t}function R(e){this._store=e}function M(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function L(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new M(n)}function B(e){this._db=e}!function(e,t){e.INTERNAL.registerComponent(new a("platform-logger",e=>new E(e),"PRIVATE")),e.registerVersion(g,b,t),e.registerVersion("fire-js","")}(S,"lite"),k(D,"_index",["name","keyPath","multiEntry","unique"]),C(D,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),$(D,"_index",IDBIndex,["openCursor","openKeyCursor"]),k(j,"_cursor",["direction","key","primaryKey","value"]),C(j,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(j.prototype[e]=function(){var t=this,n=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,n),A(t._request).then((function(e){if(e)return new j(e,t._request)}))}))})})),R.prototype.createIndex=function(){return new D(this._store.createIndex.apply(this._store,arguments))},R.prototype.index=function(){return new D(this._store.index.apply(this._store,arguments))},k(R,"_store",["name","keyPath","indexNames","autoIncrement"]),C(R,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),$(R,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),P(R,"_store",IDBObjectStore,["deleteIndex"]),M.prototype.objectStore=function(){return new R(this._tx.objectStore.apply(this._tx,arguments))},k(M,"_tx",["objectStoreNames","mode"]),P(M,"_tx",IDBTransaction,["abort"]),L.prototype.createObjectStore=function(){return new R(this._db.createObjectStore.apply(this._db,arguments))},k(L,"_db",["name","version","objectStoreNames"]),P(L,"_db",IDBDatabase,["deleteObjectStore","close"]),B.prototype.transaction=function(){return new M(this._db.transaction.apply(this._db,arguments))},k(B,"_db",["name","version","objectStoreNames"]),P(B,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[R,D].forEach((function(t){e in t.prototype&&(t.prototype[e.replace("open","iterate")]=function(){var t=T(arguments),n=t[t.length-1],r=this._store||this._index,i=r[e].apply(r,t.slice(0,-1));i.onsuccess=function(){n(i.result)}})}))})),[D,R].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})}));const U="@firebase/installations",F="0.4.2",q=1e4,x=`w:${F}`,V="FIS_v2",K="https://firebaseinstallations.googleapis.com/v1",z=36e5,H=new i("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function W(e){return e instanceof r&&e.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function J({projectId:e}){return`${K}/projects/${e}/installations`}function G(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Z(e,t){const n=(await t.json()).error;return H.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Y({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Q(e,{refreshToken:t}){const n=Y(e);return n.append("Authorization",function(e){return`${V} ${e}`}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)),n}async function X(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function ee(e){return new Promise(t=>{setTimeout(t,e)})}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const te=/^[cdef][\w-]{21}$/,ne="";function re(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);return te.test(t)?t:ne}catch(e){return ne}}function ie(e){return`${e.appName}!${e.appId}`}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const oe=new Map;function se(e,t){const n=ie(e);ae(n,t),function(e,t){const n=ue();n&&n.postMessage({key:e,fid:t});le()}(n,t)}function ae(e,t){const n=oe.get(e);if(n)for(const e of n)e(t)}let ce=null;function ue(){return!ce&&"BroadcastChannel"in self&&((ce=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{ae(e.data.key,e.data.fid)}),ce}function le(){0===oe.size&&ce&&(ce.close(),ce=null)}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const pe="firebase-installations-database",fe=1,he="firebase-installations-store";let de=null;function me(){return de||(de=function(e,t,n){var r=N(indexedDB,"open",[e,t]),i=r.request;return i&&(i.onupgradeneeded=function(e){n&&n(new L(i.result,e.oldVersion,i.transaction))}),r.then((function(e){return new B(e)}))}(pe,fe,e=>{switch(e.oldVersion){case 0:e.createObjectStore(he)}})),de}async function ge(e,t){const n=ie(e),r=(await me()).transaction(he,"readwrite"),i=r.objectStore(he),o=await i.get(n);return await i.put(t,n),await r.complete,o&&o.fid===t.fid||se(e,t.fid),t}async function be(e){const t=ie(e),n=(await me()).transaction(he,"readwrite");await n.objectStore(he).delete(t),await n.complete}async function we(e,t){const n=ie(e),r=(await me()).transaction(he,"readwrite"),i=r.objectStore(he),o=await i.get(n),s=t(o);return void 0===s?await i.delete(n):await i.put(s,n),await r.complete,!s||o&&o.fid===s.fid||se(e,s.fid),s}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function ve(e){let t;const n=await we(e,n=>{const r=function(e){return Ie(e||{fid:re(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(H.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function(e,{fid:t}){const n=J(e),r=Y(e),i={fid:t,authVersion:V,appId:e.appId,sdkVersion:x},o={method:"POST",headers:r,body:JSON.stringify(i)},s=await X(()=>fetch(n,o));if(s.ok){const e=await s.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:G(e.authToken)}}throw await Z("Create Installation",s)}(e,t);return ge(e,n)}catch(n){throw W(n)&&409===n.serverCode?await be(e):await ge(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:ye(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry});return n.fid===ne?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function ye(e){let t=await _e(e);for(;1===t.registrationStatus;)await ee(100),t=await _e(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await ve(e);return n||t}return t}function _e(e){return we(e,e=>{if(!e)throw H.create("installation-not-found");return Ie(e)})}function Ie(e){return 1===(t=e).registrationStatus&&t.registrationTime+q<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}async function Ee({appConfig:e,platformLoggerProvider:t},n){const r=function(e,{fid:t}){return`${J(e)}/${t}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,n),i=Q(e,n),o=t.getImmediate({optional:!0});o&&i.append("x-firebase-client",o.getPlatformInfoString());const s={installation:{sdkVersion:x}},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await X(()=>fetch(r,a));if(c.ok){return G(await c.json())}throw await Z("Generate Auth Token",c)}async function Se(e,t=!1){let n;const r=await we(e.appConfig,r=>{if(!Ae(r))throw H.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+z}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await Te(e.appConfig);for(;1===n.authToken.requestStatus;)await ee(100),n=await Te(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Se(e,t):r}(e,t),r;{if(!navigator.onLine)throw H.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await Ee(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ge(e.appConfig,r),n}catch(n){if(!W(n)||401!==n.serverCode&&404!==n.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ge(e.appConfig,n)}else await be(e.appConfig);throw n}}(e,t),t}});return n?await n:r.authToken}function Te(e){return we(e,e=>{if(!Ae(e))throw H.create("not-registered");return function(e){return 1===e.requestStatus&&e.requestTime+q<Date.now()}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e.authToken)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}function Ae(e){return void 0!==e&&2===e.registrationStatus}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Ne(e,t=!1){return await async function(e){const{registrationPromise:t}=await ve(e);t&&await t}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e.appConfig),(await Se(e,t)).token}async function Oe(e,t){const n=function(e,{fid:t}){return`${J(e)}/${t}`}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,t),r={method:"DELETE",headers:Q(e,t)},i=await X(()=>fetch(n,r));if(!i.ok)throw await Z("Delete Installation",i)}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function ke({appConfig:e},t){return function(e,t){ue();const n=ie(e);let r=oe.get(n);r||(r=new Set,oe.set(n,r)),r.add(t)}(e,t),()=>{!function(e,t){const n=ie(e),r=oe.get(n);r&&(r.delete(t),0===r.size&&oe.delete(n),le())}(e,t)}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ce(e){return H.create("missing-app-config-values",{valueName:e})}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Pe;(Pe=S).INTERNAL.registerComponent(new a("installations",e=>{const t=e.getProvider("app").getImmediate(),n={appConfig:function(e){if(!e||!e.options)throw Ce("App Configuration");if(!e.name)throw Ce("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ce(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:()=>(async function(e){const{installationEntry:t,registrationPromise:n}=await ve(e.appConfig);return n?n.catch(console.error):Se(e).catch(console.error),t.fid})(n),getToken:e=>Ne(n,e),delete:()=>(async function(e){const{appConfig:t}=e,n=await we(t,e=>{if(!e||0!==e.registrationStatus)return e});if(n){if(1===n.registrationStatus)throw H.create("delete-pending-registration");if(2===n.registrationStatus){if(!navigator.onLine)throw H.create("app-offline");await Oe(t,n),await be(t)}}})(n),onIdChange:e=>ke(n,e)}},"PUBLIC")),Pe.registerVersion(U,F);const $e="@firebase/performance",De="0.2.32",je=De,Re="FB-PERF-TRACE-START",Me="FB-PERF-TRACE-STOP",Le="FB-PERF-TRACE-MEASURE",Be="_wt_",Ue="_fp",Fe="_fcp",qe="_fid",xe="@firebase/performance/config",Ve="@firebase/performance/configexpire",Ke=new i("performance","Performance",{"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalide custom metric name":"Custom metric name {$customMetricName} is invalid"});
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let ze,He,We,Je;class Ge{constructor(e){if(this.window=e,!e)throw Ke.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){this.performance&&this.performance.mark&&this.performance.mark(e)}measure(e,t,n){this.performance&&this.performance.measure&&this.performance.measure(e,t,n)}getEntriesByType(e){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(e):[]}getEntriesByName(e){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(e):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!!(fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled)}setupObserver(e,t){if(!this.PerformanceObserver)return;new this.PerformanceObserver(e=>{for(const n of e.getEntries())t(n)}).observe({entryTypes:[e]})}static getInstance(){return void 0===ze&&(ze=new Ge(He)),ze}}class Ze{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getAppId(){const e=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId;if(!e)throw Ke.create("no app id");return e}getProjectId(){const e=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId;if(!e)throw Ke.create("no project id");return e}getApiKey(){const e=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey;if(!e)throw Ke.create("no api key");return e}static getInstance(){return void 0===We&&(We=new Ze),We}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ye(){return Je}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
var Qe;!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.VISIBLE=1]="VISIBLE",e[e.HIDDEN=2]="HIDDEN"}(Qe||(Qe={}));const Xe=["firebase_","google_","ga_"],et=new RegExp("^[a-zA-Z]\\w*$"),tt=40,nt=100;function rt(){const e=Ge.getInstance().navigator;return"serviceWorker"in e?e.serviceWorker.controller?2:3:1}function it(){switch(Ge.getInstance().document.visibilityState){case"visible":return Qe.VISIBLE;case"hidden":return Qe.HIDDEN;default:return Qe.UNKNOWN}}function ot(){const e=Ge.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const st=new d("Performance");st.logLevel=p.INFO;
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const at="0.0.1",ct={loggingEnabled:!0},ut="FIREBASE_INSTALLATIONS_AUTH";function lt(e){const t=function(){const e=Ge.getInstance().localStorage;if(!e)return;const t=e.getItem(Ve);if(!(t&&(n=t,Number(n)>Date.now())))return;var n;const r=e.getItem(xe);if(!r)return;try{return JSON.parse(r)}catch(e){return}}();return t?(ft(t),Promise.resolve()):function(e){return function(){const e=Ze.getInstance().installationsService.getToken();return e.then(e=>{}),e}().then(t=>{const n=`https://firebaseremoteconfig.googleapis.com/v1/projects/${Ze.getInstance().getProjectId()}/namespaces/fireperf:fetch?key=${Ze.getInstance().getApiKey()}`,r=new Request(n,{method:"POST",headers:{Authorization:`${ut} ${t}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:t,app_id:Ze.getInstance().getAppId(),app_version:je,sdk_version:at})});return fetch(r).then(e=>{if(e.ok)return e.json();throw Ke.create("RC response not ok")})}).catch(()=>{st.info(pt)})}(e).then(e=>ft(e)).then(e=>(function(e){const t=Ge.getInstance().localStorage;if(!e||!t)return;t.setItem(xe,JSON.stringify(e)),t.setItem(Ve,String(Date.now()+60*Ze.getInstance().configTimeToLive*60*1e3))})(e),()=>{})}const pt="Could not fetch config, will use default configs";function ft(e){if(!e)return e;const t=Ze.getInstance(),n=e.entries||{};return void 0!==n.fpr_enabled?t.loggingEnabled="true"===String(n.fpr_enabled):t.loggingEnabled=ct.loggingEnabled,n.fpr_log_source&&(t.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(t.logEndPointUrl=n.fpr_log_endpoint_url),void 0!==n.fpr_vc_network_request_sampling_rate&&(t.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(t.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),t.logTraceAfterSampling=ht(t.tracesSamplingRate),t.logNetworkAfterSampling=ht(t.networkRequestsSamplingRate),e}function ht(e){return Math.random()<=e}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let dt,mt=1;function gt(){return mt=2,dt=dt||function(){const e=Ge.getInstance().document;return new Promise(t=>{if(e&&"complete"!==e.readyState){const n=()=>{"complete"===e.readyState&&(e.removeEventListener("readystatechange",n),t())};e.addEventListener("readystatechange",n)}else t()})}().then(()=>(function(){const e=Ze.getInstance().installationsService.getId();return e.then(e=>{Je=e}),e})()).then(e=>lt(e)).then(()=>bt(),()=>bt())}function bt(){mt=3}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const wt=1e4,vt=5500,yt=3;let _t,It=yt,Et=[],St=!1;function Tt(){St||(!function e(t){setTimeout(()=>{if(0===It)return;if(!Et.length)return e(wt);const t=[...Et];Et=[];const n=t.map(e=>({source_extension_json_proto3:e.message,event_time_ms:String(e.eventTime)})),r={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:Ze.getInstance().logSource,log_event:n};fetch(Ze.getInstance().logEndPointUrl,{method:"POST",body:JSON.stringify(r)}).then(e=>(e.ok||st.info("Call to Firebase backend failed."),e.json())).then(t=>{const n=Number(t.next_request_wait_millis),r=isNaN(n)?wt:Math.max(wt,n);It=yt,e(r)}).catch(()=>{Et=[...t,...Et],It--,st.info(`Tries left: ${It}.`),e(wt)})},t)}(vt),St=!0)}function At(e){return(...t)=>{!function(e){if(!e.eventTime||!e.message)throw Ke.create("invalid cc log");Et=[...Et,e]}({message:e(...t),eventTime:Date.now()})}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Nt(e,t){_t||(_t=At(Ct)),_t(e,t)}function Ot(e){const t=Ze.getInstance();!t.instrumentationEnabled&&e.isAuto||(t.dataCollectionEnabled||e.isAuto)&&Ge.getInstance().requiredApisAvailable()&&(e.isAuto&&it()!==Qe.VISIBLE||t.loggingEnabled&&t.logTraceAfterSampling&&(3===mt?kt(e):gt().then(()=>kt(e),()=>kt(e))))}function kt(e){Ye()&&setTimeout(()=>Nt(e,1),0)}function Ct(e,t){return 0===t?function(e){const t={url:e.url,http_method:e.httpMethod||0,http_response_code:200,response_payload_bytes:e.responsePayloadBytes,client_start_time_us:e.startTimeUs,time_to_response_initiated_us:e.timeToResponseInitiatedUs,time_to_response_completed_us:e.timeToResponseCompletedUs},n={application_info:Pt(),network_request_metric:t};return JSON.stringify(n)}(e):function(e){const t={name:e.name,is_auto:e.isAuto,client_start_time_us:e.startTimeUs,duration_us:e.durationUs};0!==Object.keys(e.counters).length&&(t.counters=e.counters);const n=e.getAttributes();0!==Object.keys(n).length&&(t.custom_attributes=n);const r={application_info:Pt(),trace_metric:t};return JSON.stringify(r)}(e)}function Pt(){return{google_app_id:Ze.getInstance().getAppId(),app_instance_id:Ye(),web_app_info:{sdk_version:je,page_url:Ge.getInstance().getUrl(),service_worker_status:rt(),visibility_state:it(),effective_connection_type:ot()},application_process_state:0}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const $t=100,Dt="_",jt=[Ue,Fe,qe];
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Rt{constructor(e,t=!1,n){this.name=e,this.isAuto=t,this.state=1,this.customAttributes={},this.counters={},this.api=Ge.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=`${Re}-${this.randomId}-${this.name}`,this.traceStopMark=`${Me}-${this.randomId}-${this.name}`,this.traceMeasure=n||`${Le}-${this.randomId}-${this.name}`,n&&this.calculateTraceMetrics())}start(){if(1!==this.state)throw Ke.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(2!==this.state)throw Ke.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Ot(this)}record(e,t,n){if(this.durationUs=Math.floor(1e3*t),this.startTimeUs=Math.floor(1e3*e),n&&n.attributes&&(this.customAttributes=Object.assign({},n.attributes)),n&&n.metrics)for(const e of Object.keys(n.metrics))isNaN(Number(n.metrics[e]))||(this.counters[e]=Number(Math.floor(n.metrics[e])));Ot(this)}incrementMetric(e,t=1){void 0===this.counters[e]&&this.putMetric(e,0),this.counters[e]+=t}putMetric(e,t){if(!function(e,t){return!(0===e.length||e.length>$t)&&(t&&t.startsWith(Be)&&jt.indexOf(e)>-1||!e.startsWith(Dt))}(e,this.name))throw Ke.create("invalide custom metric name",{customMetricName:e});this.counters[e]=t}getMetric(e){return this.counters[e]||0}putAttribute(e,t){const n=function(e){return!(0===e.length||e.length>tt)&&(!Xe.some(t=>e.startsWith(t))&&!!e.match(et))}(e),r=function(e){return 0!==e.length&&e.length<=nt}(t);if(n&&r)this.customAttributes[e]=t;else{if(!n)throw Ke.create("invalid attribute name",{attributeName:e});if(!r)throw Ke.create("invalid attribute value",{attributeValue:t})}}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){void 0!==this.customAttributes[e]&&delete this.customAttributes[e]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),t=e&&e[0];t&&(this.durationUs=Math.floor(1e3*t.duration),this.startTimeUs=Math.floor(1e3*(t.startTime+this.api.getTimeOrigin())))}static createOobTrace(e,t,n){const r=Ge.getInstance().getUrl();if(!r)return;const i=new Rt(Be+r,!0),o=Math.floor(1e3*Ge.getInstance().getTimeOrigin());i.setStartTime(o),e&&e[0]&&(i.setDuration(Math.floor(1e3*e[0].duration)),i.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),i.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),i.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd)));if(t){const e=t.find(e=>"first-paint"===e.name);e&&e.startTime&&i.putMetric(Ue,Math.floor(1e3*e.startTime));const r=t.find(e=>"first-contentful-paint"===e.name);r&&r.startTime&&i.putMetric(Fe,Math.floor(1e3*r.startTime)),n&&i.putMetric(qe,Math.floor(1e3*n))}Ot(i)}static createUserTimingTrace(e){Ot(new Rt(e,!1,e))}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Mt(e){const t=e;if(!t||void 0===t.responseStart)return;const n=Ge.getInstance().getTimeOrigin(),r=Math.floor(1e3*(t.startTime+n)),i=t.responseStart?Math.floor(1e3*(t.responseStart-t.startTime)):void 0,o=Math.floor(1e3*(t.responseEnd-t.startTime));!function(e){const t=Ze.getInstance();t.instrumentationEnabled&&e.url!==t.logEndPointUrl.split("?")[0]&&t.loggingEnabled&&t.logNetworkAfterSampling&&setTimeout(()=>Nt(e,0),0)}({url:t.name&&t.name.split("?")[0],responsePayloadBytes:t.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o})}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Lt=5e3;function Bt(){Ye()&&(setTimeout(()=>(function(){const e=Ge.getInstance(),t=e.getEntriesByType("navigation"),n=e.getEntriesByType("paint");if(e.onFirstInputDelay){let r=setTimeout(()=>{Rt.createOobTrace(t,n),r=void 0},Lt);e.onFirstInputDelay(e=>{r&&(clearTimeout(r),Rt.createOobTrace(t,n,e))})}else Rt.createOobTrace(t,n)})(),0),setTimeout(()=>(function(){const e=Ge.getInstance(),t=e.getEntriesByType("resource");for(const e of t)Mt(e);e.setupObserver("resource",Mt)})(),0),setTimeout(()=>(function(){const e=Ge.getInstance(),t=e.getEntriesByType("measure");for(const e of t)Ut(e);e.setupObserver("measure",Ut)})(),0))}function Ut(e){const t=e.name;t.substring(0,Le.length)!==Le&&Rt.createUserTimingTrace(t)}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ft{constructor(e){this.app=e,Ge.getInstance().requiredApisAvailable()?(Tt(),gt().then(Bt,Bt)):st.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.")}trace(e){return new Rt(e)}set instrumentationEnabled(e){Ze.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return Ze.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){Ze.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return Ze.getInstance().dataCollectionEnabled}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const qt="[DEFAULT]";!function(e){const t=(e,t)=>{if(e.name!==qt)throw Ke.create("FB not default");if("undefined"==typeof window)throw Ke.create("no window");return function(e){He=e}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(window),Ze.getInstance().firebaseAppInstance=e,Ze.getInstance().installationsService=t,new Ft(e)};e.INTERNAL.registerComponent(new a("performance",e=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations").getImmediate();return t(n,r)},"PUBLIC")),e.registerVersion($e,De)}(S);
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return S.registerVersion("firebase","7.9.0","lite"),S}));
//# sourceMappingURL=firebase-performance-standalone.es2017.js.map
