(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Change~Home~Login~Register~Vol~WatchList~Yld"],{"0829":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ja})),n.d(t,"b",(function(){return xa})),n.d(t,"c",(function(){return Ua})),n.d(t,"d",(function(){return Va})),n.d(t,"e",(function(){return tc})),n.d(t,"f",(function(){return Pa}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class u{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
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
let h="9.6.7";
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const l=new s["b"]("@firebase/firestore");function d(){return l.logLevel}function f(e,...t){if(l.logLevel<=s["a"].DEBUG){const n=t.map(m);l.debug(`Firestore (${h}): ${e}`,...n)}}function p(e,...t){if(l.logLevel<=s["a"].ERROR){const n=t.map(m);l.error(`Firestore (${h}): ${e}`,...n)}}function g(e,...t){if(l.logLevel<=s["a"].WARN){const n=t.map(m);l.warn(`Firestore (${h}): ${e}`,...n)}}function m(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function y(e="Unexpected state"){const t=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+e;throw p(t),new Error(t)}function v(e,t){e||y()}function w(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends o["c"]{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class T{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class E{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class _{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(u.UNAUTHENTICATED))}shutdown(){}}class S{constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(v("string"==typeof t.accessToken),new E(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return v(null===e||"string"==typeof e),new u(e)}}class k{constructor(e,t,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class C{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new k(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class A{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message);const n=e.token!==this.p;return this.p=e.token,f("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(v("string"==typeof e.token),this.p=e.token,new A(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
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
class O{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function x(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */O.A=-1;class D{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=x(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function R(e,t){return e<t?-1:e>t?1:0}function P(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function L(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class M{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new I(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new I(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new I(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return M.fromMillis(Date.now())}static fromDate(e){return M.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new M(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new M(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function F(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function V(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function j(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class B{constructor(e,t,n){void 0===t?t=0:t>e.length&&y(),void 0===n?n=e.length-t:n>e.length-t&&y(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===B.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof B?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class q extends B{construct(e,t,n){return new q(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new I(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new q(t)}static emptyPath(){return new q([])}}const K=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends B{construct(e,t,n){return new z(e,t,n)}static isValidIdentifier(e){return K.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new z(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new I(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new I(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new I(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new I(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new z(t)}static emptyPath(){return new z([])}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class G{constructor(e){this.fields=e,e.sort(z.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return P(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 * Copyright 2020 Google LLC
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
class H{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new H(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new H(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}H.EMPTY_BYTE_STRING=new H("");const $=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function W(e){if(v(!!e),"string"==typeof e){let t=0;const n=$.exec(e);if(v(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Q(e.seconds),nanos:Q(e.nanos)}}function Q(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function J(e){return"string"==typeof e?H.fromBase64String(e):H.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function X(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Y(e){const t=e.mapValue.fields.__previous_value__;return X(t)?Y(t):t}function Z(e){const t=W(e.mapValue.fields.__local_write_time__.timestampValue);return new M(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ee{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class te{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new te("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof te&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ne(e){return null==e}function re(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
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
class ie{constructor(e){this.path=e}static fromPath(e){return new ie(q.fromString(e))}static fromName(e){return new ie(q.fromString(e).popFirst(5))}static empty(){return new ie(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===q.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new q(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const se={mapValue:{fields:{__type__:{stringValue:"__max___"}}}};function oe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?X(e)?4:10:y()}function ae(e,t){if(e===t)return!0;const n=oe(e);if(n!==oe(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Z(e).isEqual(Z(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=W(e.timestampValue),r=W(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return J(e.bytesValue).isEqual(J(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Q(e.geoPointValue.latitude)===Q(t.geoPointValue.latitude)&&Q(e.geoPointValue.longitude)===Q(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Q(e.integerValue)===Q(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Q(e.doubleValue),r=Q(t.doubleValue);return n===r?re(n)===re(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return P(e.arrayValue.values||[],t.arrayValue.values||[],ae);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(F(n)!==F(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ae(n[i],r[i])))return!1;return!0}(e,t);default:return y()}}function ce(e,t){return void 0!==(e.values||[]).find(e=>ae(e,t))}function ue(e,t){if(e===t)return 0;const n=oe(e),r=oe(t);if(n!==r)return R(n,r);switch(n){case 0:return 0;case 1:return R(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Q(e.integerValue||e.doubleValue),r=Q(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return he(e.timestampValue,t.timestampValue);case 4:return he(Z(e),Z(t));case 5:return R(e.stringValue,t.stringValue);case 6:return function(e,t){const n=J(e),r=J(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=R(n[i],r[i]);if(0!==e)return e}return R(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=R(Q(e.latitude),Q(t.latitude));return 0!==n?n:R(Q(e.longitude),Q(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=ue(n[i],r[i]);if(e)return e}return R(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=R(r[o],s[o]);if(0!==e)return e;const t=ue(n[r[o]],i[s[o]]);if(0!==t)return t}return R(r.length,s.length)}(e.mapValue,t.mapValue);default:throw y()}}function he(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return R(e,t);const n=W(e),r=W(t),i=R(n.seconds,r.seconds);return 0!==i?i:R(n.nanos,r.nanos)}function le(e){return de(e)}function de(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=W(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?J(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ie.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=de(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${de(e.fields[i])}`;return n+"}"}(e.mapValue):y();var t,n}function fe(e){return!!e&&"integerValue"in e}function pe(e){return!!e&&"arrayValue"in e}function ge(e){return!!e&&"nullValue"in e}function me(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ye(e){return!!e&&"mapValue"in e}function ve(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return V(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=ve(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ve(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class we{constructor(e){this.value=e}static empty(){return new we({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ye(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ve(t)}setAll(e){let t=z.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=ve(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());ye(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ae(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ye(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){V(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new we(ve(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
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
class be{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new be(e,0,U.min(),U.min(),we.empty(),0)}static newFoundDocument(e,t,n){return new be(e,1,t,U.min(),n,0)}static newNoDocument(e,t){return new be(e,2,t,U.min(),we.empty(),0)}static newUnknownDocument(e,t){return new be(e,3,t,U.min(),we.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=we.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=we.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Ie{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Ie.UNKNOWN_ID=-1;class Te{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ee{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ee(0,_e.min())}}class _e{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new _e(U.min(),ie.empty(),-1)}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Se{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.P=null}}function ke(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Se(e,t,n,r,i,s,o)}function Ce(e){const t=w(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>{return(t=e).field.canonicalString()+t.op.toString()+le(t.value);var t}).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),ne(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>le(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>le(e)).join(",")),t.P=e}return t.P}function Ae(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>{return`${(t=e).field.canonicalString()} ${t.op} ${le(t.value)}`;var t}).join(", ")}]`),ne(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>le(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>le(e)).join(",")),`Target(${t})`}function Ne(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!qe(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!ae(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ze(e.startAt,t.startAt)&&ze(e.endAt,t.endAt)}function Oe(e){return ie.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class xe extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.v(e,t,n):new De(e,t,n):"array-contains"===t?new Me(e,n):"in"===t?new Ue(e,n):"not-in"===t?new Fe(e,n):"array-contains-any"===t?new Ve(e,n):new xe(e,t,n)}static v(e,t,n){return"in"===t?new Re(e,n):new Pe(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.V(ue(t,this.value)):null!==t&&oe(this.value)===oe(t)&&this.V(ue(t,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return y()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class De extends xe{constructor(e,t,n){super(e,t,n),this.key=ie.fromName(n.referenceValue)}matches(e){const t=ie.comparator(e.key,this.key);return this.V(t)}}class Re extends xe{constructor(e,t){super(e,"in",t),this.keys=Le("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Pe extends xe{constructor(e,t){super(e,"not-in",t),this.keys=Le("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Le(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>ie.fromName(e.referenceValue))}class Me extends xe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pe(t)&&ce(t.arrayValue,this.value)}}class Ue extends xe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ce(this.value.arrayValue,t)}}class Fe extends xe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ce(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ce(this.value.arrayValue,t)}}class Ve extends xe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pe(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ce(this.value.arrayValue,e))}}class je{constructor(e,t){this.position=e,this.inclusive=t}}class Be{constructor(e,t="asc"){this.field=e,this.dir=t}}function qe(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ke(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ie.comparator(ie.fromName(o.referenceValue),n.key):ue(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ze(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ae(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ge{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function He(e,t,n,r,i,s,o,a){return new Ge(e,t,n,r,i,s,o,a)}function $e(e){return new Ge(e)}function We(e){return!ne(e.limit)&&"F"===e.limitType}function Qe(e){return!ne(e.limit)&&"L"===e.limitType}function Je(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Xe(e){for(const t of e.filters)if(t.S())return t.field;return null}function Ye(e){return null!==e.collectionGroup}function Ze(e){const t=w(e);if(null===t.D){t.D=[];const e=Xe(t),n=Je(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new Be(e)),t.D.push(new Be(z.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new Be(z.keyField(),e))}}}return t.D}function et(e){const t=w(e);if(!t.C)if("F"===t.limitType)t.C=ke(t.path,t.collectionGroup,Ze(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Ze(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Be(i.field,t))}const n=t.endAt?new je(t.endAt.position,!t.endAt.inclusive):null,r=t.startAt?new je(t.startAt.position,!t.startAt.inclusive):null;t.C=ke(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.C}function tt(e,t,n){return new Ge(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function nt(e,t){return Ne(et(e),et(t))&&e.limitType===t.limitType}function rt(e){return`${Ce(et(e))}|lt:${e.limitType}`}function it(e){return`Query(target=${Ae(et(e))}; limitType=${e.limitType})`}function st(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ie.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Ke(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Ze(e),t))&&!(e.endAt&&!function(e,t,n){const r=Ke(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Ze(e),t))}(e,t)}function ot(e){return(t,n)=>{let r=!1;for(const i of Ze(e)){const e=at(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function at(e,t,n){const r=e.field.isKeyField()?ie.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ue(r,i):y()}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ct(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:re(t)?"-0":t}}function ut(e){return{integerValue:""+e}}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ht{constructor(){this._=void 0}}function lt(e,t,n){return e instanceof pt?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof gt?mt(e,t):e instanceof yt?vt(e,t):function(e,t){const n=ft(e,t),r=bt(n)+bt(e.k);return fe(n)&&fe(e.k)?ut(r):ct(e.O,r)}(e,t)}function dt(e,t,n){return e instanceof gt?mt(e,t):e instanceof yt?vt(e,t):n}function ft(e,t){return e instanceof wt?fe(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class pt extends ht{}class gt extends ht{constructor(e){super(),this.elements=e}}function mt(e,t){const n=It(t);for(const r of e.elements)n.some(e=>ae(e,r))||n.push(r);return{arrayValue:{values:n}}}class yt extends ht{constructor(e){super(),this.elements=e}}function vt(e,t){let n=It(t);for(const r of e.elements)n=n.filter(e=>!ae(e,r));return{arrayValue:{values:n}}}class wt extends ht{constructor(e,t){super(),this.O=e,this.k=t}}function bt(e){return Q(e.integerValue||e.doubleValue)}function It(e){return pe(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Tt{constructor(e,t){this.field=e,this.transform=t}}function Et(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof gt&&t instanceof gt||e instanceof yt&&t instanceof yt?P(e.elements,t.elements,ae):e instanceof wt&&t instanceof wt?ae(e.k,t.k):e instanceof pt&&t instanceof pt}(e.transform,t.transform)}class _t{constructor(e,t){this.version=e,this.transformResults=t}}class St{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new St}static exists(e){return new St(void 0,e)}static updateTime(e){return new St(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kt(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ct{}function At(e,t,n){e instanceof Dt?function(e,t,n){const r=e.value.clone(),i=Lt(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Rt?function(e,t,n){if(!kt(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Lt(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Pt(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Nt(e,t,n){e instanceof Dt?function(e,t,n){if(!kt(e.precondition,t))return;const r=e.value.clone(),i=Mt(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(xt(t),r).setHasLocalMutations()}(e,t,n):e instanceof Rt?function(e,t,n){if(!kt(e.precondition,t))return;const r=Mt(e.fieldTransforms,n,t),i=t.data;i.setAll(Pt(e)),i.setAll(r),t.convertToFoundDocument(xt(t),i).setHasLocalMutations()}(e,t,n):function(e,t){kt(e.precondition,t)&&t.convertToNoDocument(U.min())}(e,t)}function Ot(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&P(e,t,(e,t)=>Et(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function xt(e){return e.isFoundDocument()?e.version:U.min()}class Dt extends Ct{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Rt extends Ct{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Pt(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Lt(e,t,n){const r=new Map;v(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,dt(o,a,n[i]))}return r}function Mt(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,lt(e,s,t))}return r}class Ut extends Ct{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Ft extends Ct{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Vt{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var jt,Bt;function qt(e){switch(e){default:return y();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Kt(e){if(void 0===e)return p("GRPC error has no .code"),b.UNKNOWN;switch(e){case jt.OK:return b.OK;case jt.CANCELLED:return b.CANCELLED;case jt.UNKNOWN:return b.UNKNOWN;case jt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case jt.INTERNAL:return b.INTERNAL;case jt.UNAVAILABLE:return b.UNAVAILABLE;case jt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case jt.NOT_FOUND:return b.NOT_FOUND;case jt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case jt.ABORTED:return b.ABORTED;case jt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case jt.DATA_LOSS:return b.DATA_LOSS;default:return y()}}(Bt=jt||(jt={}))[Bt.OK=0]="OK",Bt[Bt.CANCELLED=1]="CANCELLED",Bt[Bt.UNKNOWN=2]="UNKNOWN",Bt[Bt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bt[Bt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bt[Bt.NOT_FOUND=5]="NOT_FOUND",Bt[Bt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bt[Bt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bt[Bt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bt[Bt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bt[Bt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bt[Bt.ABORTED=10]="ABORTED",Bt[Bt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bt[Bt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bt[Bt.INTERNAL=13]="INTERNAL",Bt[Bt.UNAVAILABLE=14]="UNAVAILABLE",Bt[Bt.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
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
class zt{constructor(e,t){this.comparator=e,this.root=t||Ht.EMPTY}insert(e,t){return new zt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new zt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gt(this.root,e,this.comparator,!0)}}class Gt{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ht.RED,this.left=null!=r?r:Ht.EMPTY,this.right=null!=i?i:Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ht(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ht.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const e=this.left.check();if(e!==this.right.check())throw y();return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1,Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ht(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
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
class $t{constructor(e){this.comparator=e,this.data=new zt(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wt(this.data.getIterator())}getIteratorFrom(e){return new Wt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof $t))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new $t(this.comparator);return t.data=e,t}}class Wt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Qt(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Jt=new zt(ie.comparator);function Xt(){return Jt}const Yt=new zt(ie.comparator);function Zt(){return Yt}const en=new zt(ie.comparator),tn=new $t(ie.comparator);function nn(...e){let t=tn;for(const n of e)t=t.add(n);return t}const rn=new $t(R);function sn(){return rn}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class on{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,an.createSynthesizedTargetChangeForCurrentChange(e,t)),new on(U.min(),n,sn(),Xt(),nn())}}class an{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new an(H.EMPTY_BYTE_STRING,t,nn(),nn(),nn())}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class cn{constructor(e,t,n,r){this.M=e,this.removedTargetIds=t,this.key=n,this.$=r}}class un{constructor(e,t){this.targetId=e,this.F=t}}class hn{constructor(e,t,n=H.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ln{constructor(){this.B=0,this.L=pn(),this.U=H.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=nn(),t=nn(),n=nn();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:y()}}),new an(this.U,this.q,e,t,n)}J(){this.K=!1,this.L=pn()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class dn{constructor(e){this.nt=e,this.st=new Map,this.it=Xt(),this.rt=fn(),this.ot=new $t(R)}ct(e){for(const t of e.M)e.$&&e.$.isFoundDocument()?this.ut(t,e.$):this.at(t,e.key,e.$);for(const t of e.removedTargetIds)this.at(t,e.key,e.$)}ht(e){this.forEachTarget(e,t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:y()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach((e,n)=>{this.ft(n)&&t(n)})}_t(e){const t=e.targetId,n=e.F.count,r=this.wt(t);if(r){const e=r.target;if(Oe(e))if(0===n){const n=new ie(e.path);this.at(t,n,be.newNoDocument(n,U.min()))}else v(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Oe(i.target)){const t=new ie(i.target.path);null!==this.it.get(t)||this.It(r,t)||this.at(r,t,be.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}});let n=nn();this.rt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.it.forEach((t,n)=>n.setReadTime(e));const r=new on(e,t,this.ot,this.it,n);return this.it=Xt(),this.rt=fn(),this.ot=new $t(R),r}ut(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Et(t.key).add(e))}at(e,t,n){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Et(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new ln,this.st.set(e,t)),t}Et(e){let t=this.rt.get(e);return t||(t=new $t(R),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||f("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new ln),this.nt.getRemoteKeysForTarget(e).forEach(t=>{this.at(e,t,null)})}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function fn(){return new zt(ie.comparator)}function pn(){return new zt(ie.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const gn=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),mn=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class yn{constructor(e,t){this.databaseId=e,this.N=t}}function vn(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function wn(e,t){return e.N?t.toBase64():t.toUint8Array()}function bn(e,t){return vn(e,t.toTimestamp())}function In(e){return v(!!e),U.fromTimestamp(function(e){const t=W(e);return new M(t.seconds,t.nanos)}(e))}function Tn(e,t){return function(e){return new q(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function En(e){const t=q.fromString(e);return v(Wn(t)),t}function _n(e,t){return Tn(e.databaseId,t.path)}function Sn(e,t){const n=En(t);if(n.get(1)!==e.databaseId.projectId)throw new I(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new I(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ie(Nn(n))}function kn(e,t){return Tn(e.databaseId,t)}function Cn(e){const t=En(e);return 4===t.length?q.emptyPath():Nn(t)}function An(e){return new q(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Nn(e){return v(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function On(e,t,n){return{name:_n(e,t),fields:n.value.mapValue.fields}}function xn(e,t,n){const r=Sn(e,t.name),i=In(t.updateTime),s=new we({mapValue:{fields:t.fields}}),o=be.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Dn(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:y()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.N?(v(void 0===t||"string"==typeof t),H.fromBase64String(t||"")):(v(void 0===t||t instanceof Uint8Array),H.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?b.UNKNOWN:Kt(e.code);return new I(t,e.message||"")}(o);n=new hn(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Sn(e,r.document.name),s=In(r.document.updateTime),o=new we({mapValue:{fields:r.document.fields}}),a=be.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new cn(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Sn(e,r.document),s=r.readTime?In(r.readTime):U.min(),o=be.newNoDocument(i,s),a=r.removedTargetIds||[];n=new cn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Sn(e,r.document),s=r.removedTargetIds||[];n=new cn([],s,i,null)}else{if(!("filter"in t))return y();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Vt(r),s=e.targetId;n=new un(s,i)}}return n}function Rn(e,t){let n;if(t instanceof Dt)n={update:On(e,t.key,t.value)};else if(t instanceof Ut)n={delete:_n(e,t.key)};else if(t instanceof Rt)n={update:On(e,t.key,t.data),updateMask:$n(t.fieldMask)};else{if(!(t instanceof Ft))return y();n={verify:_n(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof pt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof gt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof yt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof wt)return{fieldPath:t.field.canonicalString(),increment:n.k};throw y()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:bn(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:y()}(e,t.precondition)),n}function Pn(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?St.updateTime(In(e.updateTime)):void 0!==e.exists?St.exists(e.exists):St.none()}(t.currentDocument):St.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)v("REQUEST_TIME"===t.setToServerValue),n=new pt;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new gt(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new yt(e)}else"increment"in t?n=new wt(e,t.increment):y();const r=z.fromServerFormat(t.fieldPath);return new Tt(r,n)}(e,t)):[];if(t.update){t.update.name;const i=Sn(e,t.update.name),s=new we({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new G(t.map(e=>z.fromServerFormat(e)))}(t.updateMask);return new Rt(i,s,e,n,r)}return new Dt(i,s,n,r)}if(t.delete){const r=Sn(e,t.delete);return new Ut(r,n)}if(t.verify){const r=Sn(e,t.verify);return new Ft(r,n)}return y()}function Ln(e,t){return e&&e.length>0?(v(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?In(e.updateTime):In(t);return n.isEqual(U.min())&&(n=In(t)),new _t(n,e.transformResults||[])}(e,t))):[]}function Mn(e,t){return{documents:[kn(e,t.path)]}}function Un(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=kn(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=kn(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map(e=>function(e){if("=="===e.op){if(me(e.value))return{unaryFilter:{field:Kn(e.field),op:"IS_NAN"}};if(ge(e.value))return{unaryFilter:{field:Kn(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(me(e.value))return{unaryFilter:{field:Kn(e.field),op:"IS_NOT_NAN"}};if(ge(e.value))return{unaryFilter:{field:Kn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kn(e.field),op:qn(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Kn(e.field),direction:Bn(e.dir)}}(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.N||ne(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Fn(e){let t=Cn(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){v(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=jn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>function(e){return new Be(zn(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ne(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new je(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new je(n,t)}(n.endAt)),He(t,i,o,s,a,"F",c,u)}function Vn(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function jn(e){return e?void 0!==e.unaryFilter?[Hn(e)]:void 0!==e.fieldFilter?[Gn(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>jn(e)).reduce((e,t)=>e.concat(t)):y():[]}function Bn(e){return gn[e]}function qn(e){return mn[e]}function Kn(e){return{fieldPath:e.canonicalString()}}function zn(e){return z.fromServerFormat(e.fieldPath)}function Gn(e){return xe.create(zn(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(e.fieldFilter.op),e.fieldFilter.value)}function Hn(e){switch(e.unaryFilter.op){case"IS_NAN":const t=zn(e.unaryFilter.field);return xe.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=zn(e.unaryFilter.field);return xe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=zn(e.unaryFilter.field);return xe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=zn(e.unaryFilter.field);return xe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function $n(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Wn(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Qn(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Xn(t)),t=Jn(e.get(n),t);return Xn(t)}function Jn(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Xn(e){return e+""}function Yn(e){const t=e.length;if(v(t>=2),2===t)return v(""===e.charAt(0)&&""===e.charAt(1)),q.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&y(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:y()}s=t+2}return new q(r)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Zn{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class er{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}er.store="owner",er.key="owner";class tr{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}tr.store="mutationQueues",tr.keyPath="userId";class nr{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}nr.store="mutations",nr.keyPath="batchId",nr.userMutationsIndex="userMutationsIndex",nr.userMutationsKeyPath=["userId","batchId"];class rr{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,Qn(t)]}static key(e,t,n){return[e,Qn(t),n]}}rr.store="documentMutations",rr.PLACEHOLDER=new rr;class ir{constructor(e,t){this.path=e,this.readTime=t}}class sr{constructor(e,t){this.path=e,this.version=t}}class or{constructor(e,t,n,r,i,s){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}or.store="remoteDocuments",or.readTimeIndex="readTimeIndex",or.readTimeIndexPath="readTime",or.collectionReadTimeIndex="collectionReadTimeIndex",or.collectionReadTimeIndexPath=["parentPath","readTime"];class ar{constructor(e){this.byteSize=e}}ar.store="remoteDocumentGlobal",ar.key="remoteDocumentGlobalKey";class cr{constructor(e,t,n,r,i,s,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}cr.store="targets",cr.keyPath="targetId",cr.queryTargetsIndexName="queryTargetsIndex",cr.queryTargetsKeyPath=["canonicalId","targetId"];class ur{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}ur.store="targetDocuments",ur.keyPath=["targetId","path"],ur.documentTargetsIndex="documentTargetsIndex",ur.documentTargetsKeyPath=["path","targetId"];class hr{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}hr.key="targetGlobalKey",hr.store="targetGlobal";class lr{constructor(e,t){this.collectionId=e,this.parent=t}}lr.store="collectionParents",lr.keyPath=["collectionId","parent"];class dr{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}dr.store="clientMetadata",dr.keyPath="clientId";class fr{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}fr.store="bundles",fr.keyPath="bundleId";class pr{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}pr.store="namedQueries",pr.keyPath="name";class gr{constructor(e,t,n){this.indexId=e,this.collectionGroup=t,this.fields=n}}gr.store="indexConfiguration",gr.keyPath="indexId",gr.collectionGroupIndex="collectionGroupIndex",gr.collectionGroupIndexPath="collectionGroup";class mr{constructor(e,t,n,r,i,s){this.indexId=e,this.uid=t,this.sequenceNumber=n,this.readTime=r,this.documentKey=i,this.largestBatchId=s}}mr.store="indexState",mr.keyPath=["indexId","uid"],mr.sequenceNumberIndex="sequenceNumberIndex",mr.sequenceNumberIndexPath=["uid","sequenceNumber"];class yr{constructor(e,t,n,r,i){this.indexId=e,this.uid=t,this.arrayValue=n,this.directionalValue=r,this.documentKey=i}}yr.store="indexEntries",yr.keyPath=["indexId","uid","arrayValue","directionalValue","documentKey"],yr.documentKeyIndex="documentKeyIndex",yr.documentKeyIndexPath=["indexId","uid","documentKey"];class vr{constructor(e,t,n,r,i,s){this.userId=e,this.collectionPath=t,this.documentId=n,this.collectionGroup=r,this.largestBatchId=i,this.overlayMutation=s}}vr.store="documentOverlays",vr.keyPath=["userId","collectionPath","documentId"],vr.collectionPathOverlayIndex="collectionPathOverlayIndex",vr.collectionPathOverlayIndexPath=["userId","collectionPath","largestBatchId"],vr.collectionGroupOverlayIndex="collectionGroupOverlayIndex",vr.collectionGroupOverlayIndexPath=["userId","collectionGroup","largestBatchId"];const wr=[tr.store,nr.store,rr.store,or.store,cr.store,er.store,hr.store,ur.store,dr.store,ar.store,lr.store,fr.store,pr.store],br=[...wr,vr.store],Ir=[...br,gr.store,mr.store,yr.store],Tr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Er{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _r{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new _r((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof _r?t:_r.resolve(t)}catch(e){return _r.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):_r.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):_r.reject(t)}static resolve(e){return new _r((t,n)=>{t(e)})}static reject(e){return new _r((t,n)=>{n(e)})}static waitFor(e){return new _r((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=_r.resolve(!1);for(const n of e)t=t.next(e=>e?_r.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Sr{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new T,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new Ar(e,t.error)):this.At.resolve()},this.transaction.onerror=t=>{const n=Rr(t.target.error);this.At.reject(new Ar(e,n))}}static open(e,t,n,r){try{return new Sr(t,e.transaction(r,n))}catch(e){throw new Ar(t,e)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(f("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}Pt(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Or(t)}}class kr{constructor(e,t,n){this.name=e,this.version=t,this.bt=n,12.2===kr.vt(Object(o["k"])())&&p("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return f("SimpleDb","Removing database:",e),xr(window.indexedDB.deleteDatabase(e)).toPromise()}static Vt(){if(!Object(o["p"])())return!1;if(kr.St())return!0;const e=Object(o["k"])(),t=kr.vt(e),n=0<t&&t<10,r=kr.Dt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static St(){var t;return"undefined"!=typeof e&&"YES"===(null===(t=Object({NODE_ENV:"production",BASE_URL:"/stock-data/"}))||void 0===t?void 0:t.Ct)}static Nt(e,t){return e.store(t)}static vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async xt(e){return this.db||(f("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Ar(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new I(b.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new I(b.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Ar(e,r))},r.onupgradeneeded=e=>{f("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.bt.kt(t,r.transaction,e.oldVersion,this.version).next(()=>{f("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Ot&&(this.db.onversionchange=e=>this.Ot(e)),this.db}Mt(e){this.Ot=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.xt(e);const t=Sr.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.Pt(),e)).catch(e=>(t.abort(e),_r.reject(e))).toPromise();return s.catch(()=>{}),await t.Rt,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(f("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Cr{constructor(e){this.$t=e,this.Ft=!1,this.Bt=null}get isDone(){return this.Ft}get Lt(){return this.Bt}set cursor(e){this.$t=e}done(){this.Ft=!0}Ut(e){this.Bt=e}delete(){return xr(this.$t.delete())}}class Ar extends I{constructor(e,t){super(b.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Nr(e){return"IndexedDbTransactionError"===e.name}class Or{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(f("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(f("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),xr(n)}add(e){return f("SimpleDb","ADD",this.store.name,e,e),xr(this.store.add(e))}get(e){return xr(this.store.get(e)).next(t=>(void 0===t&&(t=null),f("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return f("SimpleDb","DELETE",this.store.name,e),xr(this.store.delete(e))}count(){return f("SimpleDb","COUNT",this.store.name),xr(this.store.count())}qt(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.Kt(e,(e,n)=>{t.push(n)}).next(()=>t)}{const e=this.store.getAll(n.range);return new _r((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}Gt(e,t){f("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.jt=!1;const r=this.cursor(n);return this.Kt(r,(e,t,n)=>n.delete())}Qt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Kt(r,t)}Wt(e){const t=this.cursor({});return new _r((n,r)=>{t.onerror=e=>{const t=Rr(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}Kt(e,t){const n=[];return new _r((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Cr(i),o=t(i.primaryKey,i.value,s);if(o instanceof _r){const e=o.catch(e=>(s.done(),_r.reject(e)));n.push(e)}s.isDone?r():null===s.Lt?i.continue():i.continue(s.Lt)}}).next(()=>_r.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.jt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function xr(e){return new _r((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Rr(e.target.error);n(t)}})}let Dr=!1;function Rr(e){const t=kr.vt(Object(o["k"])());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Dr||(Dr=!0,setTimeout(()=>{throw e},0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Pr extends Er{constructor(e,t){super(),this.zt=e,this.currentSequenceNumber=t}}function Lr(e,t){const n=w(e);return kr.Nt(n.zt,t)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Mr{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&At(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Nt(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Nt(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(U.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),nn())}isEqual(e){return this.batchId===e.batchId&&P(this.mutations,e.mutations,(e,t)=>Ot(e,t))&&P(this.baseMutations,e.baseMutations,(e,t)=>Ot(e,t))}}class Ur{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){v(e.mutations.length===n.length);let r=en;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Ur(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Fr{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Vr{constructor(e,t,n,r,i=U.min(),s=U.min(),o=H.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class jr{constructor(e){this.Ht=e}}function Br(e,t){let n;if(t.document)n=xn(e.Ht,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=ie.fromSegments(t.noDocument.path),r=Hr(t.noDocument.readTime);n=be.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return y();{const e=ie.fromSegments(t.unknownDocument.path),r=Hr(t.unknownDocument.version);n=be.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(zr(t.readTime)),n}function qr(e,t){const n=Kr(t.readTime),r=t.key.path.popLast().toArray();if(t.isFoundDocument()){const i=function(e,t){return{name:_n(e,t.key),fields:t.data.value.mapValue.fields,updateTime:vn(e,t.version.toTimestamp())}}(e.Ht,t),s=t.hasCommittedMutations;return new or(null,null,i,s,n,r)}if(t.isNoDocument()){const e=t.key.path.toArray(),i=Gr(t.version),s=t.hasCommittedMutations;return new or(null,new ir(e,i),null,s,n,r)}if(t.isUnknownDocument()){const e=t.key.path.toArray(),i=Gr(t.version);return new or(new sr(e,i),null,null,!0,n,r)}return y()}function Kr(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function zr(e){const t=new M(e[0],e[1]);return U.fromTimestamp(t)}function Gr(e){const t=e.toTimestamp();return new Zn(t.seconds,t.nanoseconds)}function Hr(e){const t=new M(e.seconds,e.nanoseconds);return U.fromTimestamp(t)}function $r(e,t){const n=(t.baseMutations||[]).map(t=>Pn(e.Ht,t));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map(t=>Pn(e.Ht,t)),i=M.fromMillis(t.localWriteTimeMs);return new Mr(t.batchId,i,n,r)}function Wr(e){const t=Hr(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Hr(e.lastLimboFreeSnapshotVersion):U.min();let r;var i;return void 0!==e.query.documents?(v(1===(i=e.query).documents.length),r=et($e(Cn(i.documents[0])))):r=function(e){return et(Fn(e))}(e.query),new Vr(r,e.targetId,0,e.lastListenSequenceNumber,t,n,H.fromBase64String(e.resumeToken))}function Qr(e,t){const n=Gr(t.snapshotVersion),r=Gr(t.lastLimboFreeSnapshotVersion);let i;i=Oe(t.target)?Mn(e.Ht,t.target):Un(e.Ht,t.target);const s=t.resumeToken.toBase64();return new cr(t.targetId,Ce(t.target),n,s,t.sequenceNumber,r,i)}function Jr(e){const t=Fn({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?tt(t,t.limit,"L"):t}function Xr(e,t){return new Fr(t.largestBatchId,Pn(e.Ht,t.overlayMutation))}function Yr(e,t){const n=t.path.lastSegment();return[e,Qn(t.path.popLast()),n]}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Zr{getBundleMetadata(e,t){return ei(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:Hr(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return ei(e).put({bundleId:(n=t).id,createTime:Gr(In(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return ti(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:Jr(t.bundledQuery),readTime:Hr(t.readTime)};var t})}saveNamedQuery(e,t){return ti(e).put(function(e){return{name:e.name,readTime:Gr(In(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function ei(e){return Lr(e,fr.store)}function ti(e){return Lr(e,pr.store)}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class ni{constructor(e,t){this.O=e,this.userId=t}static Jt(e,t){const n=t.uid||"";return new ni(e,n)}getOverlay(e,t){return ri(e).get(Yr(this.userId,t)).next(e=>e?Xr(this.O,e):null)}saveOverlays(e,t,n){const r=[];return n.forEach(n=>{const i=new Fr(t,n);r.push(this.Yt(e,i))}),_r.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(e=>r.add(Qn(e.getCollectionPath())));const i=[];return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(ri(e).Gt(vr.collectionPathOverlayIndex,r))}),_r.waitFor(i)}getOverlaysForCollection(e,t,n){const r=new Map,i=Qn(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ri(e).qt(vr.collectionPathOverlayIndex,s).next(e=>{for(const t of e){const e=Xr(this.O,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const i=new Map;let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ri(e).Qt({index:vr.collectionGroupOverlayIndex,range:o},(e,t,n)=>{const o=Xr(this.O,t);i.size<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()}).next(()=>i)}Yt(e,t){return ri(e).put(function(e,t,n){const[r,i,s]=Yr(t,n.mutation.key);return new vr(t,i,s,n.mutation.key.getCollectionGroup(),n.largestBatchId,Rn(e.Ht,n.mutation))}(this.O,this.userId,t))}}function ri(e){return Lr(e,vr.store)}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */class ii{constructor(){}Xt(e,t){this.Zt(e,t),t.te()}Zt(e,t){if("nullValue"in e)this.ee(t,5);else if("booleanValue"in e)this.ee(t,10),t.ne(e.booleanValue?1:0);else if("integerValue"in e)this.ee(t,15),t.ne(Q(e.integerValue));else if("doubleValue"in e){const n=Q(e.doubleValue);isNaN(n)?this.ee(t,13):(this.ee(t,15),re(n)?t.ne(0):t.ne(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ee(t,20),"string"==typeof n?t.se(n):(t.se(""+(n.seconds||"")),t.ne(n.nanos||0))}else if("stringValue"in e)this.ie(e.stringValue,t),this.re(t);else if("bytesValue"in e)this.ee(t,30),t.oe(J(e.bytesValue)),this.re(t);else if("referenceValue"in e)this.ce(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ee(t,45),t.ne(n.latitude||0),t.ne(n.longitude||0)}else"mapValue"in e?ae(e,se)?this.ee(t,Number.MAX_SAFE_INTEGER):(this.ue(e.mapValue,t),this.re(t)):"arrayValue"in e?(this.ae(e.arrayValue,t),this.re(t)):y()}ie(e,t){this.ee(t,25),this.he(e,t)}he(e,t){t.se(e)}ue(e,t){const n=e.fields||{};this.ee(t,55);for(const r of Object.keys(n))this.ie(r,t),this.Zt(n[r],t)}ae(e,t){const n=e.values||[];this.ee(t,50);for(const r of n)this.Zt(r,t)}ce(e,t){this.ee(t,37),ie.fromName(e).path.forEach(e=>{this.ee(t,60),this.he(e,t)})}ee(e,t){e.ne(t)}re(e){e.ne(2)}}function si(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function oi(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=si(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}ii.le=new ii;class ai{constructor(){this.buffer=new Uint8Array(1024),this.position=0}fe(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.de(n.value),n=t.next();this._e()}we(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.me(n.value),n=t.next();this.ge()}ye(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.de(e);else if(e<2048)this.de(960|e>>>6),this.de(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.de(480|e>>>12),this.de(128|63&e>>>6),this.de(128|63&e);else{const e=t.codePointAt(0);this.de(240|e>>>18),this.de(128|63&e>>>12),this.de(128|63&e>>>6),this.de(128|63&e)}}this._e()}pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.me(e);else if(e<2048)this.me(960|e>>>6),this.me(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.me(480|e>>>12),this.me(128|63&e>>>6),this.me(128|63&e);else{const e=t.codePointAt(0);this.me(240|e>>>18),this.me(128|63&e>>>12),this.me(128|63&e>>>6),this.me(128|63&e)}}this.ge()}Ie(e){const t=this.Ee(e),n=oi(t);this.Te(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Ae(e){const t=this.Ee(e),n=oi(t);this.Te(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Re(){this.Pe(255),this.Pe(255)}be(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Te(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ve(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}de(e){const t=255&e;0===t?(this.Pe(0),this.Pe(255)):255===t?(this.Pe(255),this.Pe(0)):this.Pe(t)}me(e){const t=255&e;0===t?(this.ve(0),this.ve(255)):255===t?(this.ve(255),this.ve(0)):this.ve(e)}_e(){this.Pe(0),this.Pe(1)}ge(){this.ve(0),this.ve(1)}Pe(e){this.Te(1),this.buffer[this.position++]=e}ve(e){this.Te(1),this.buffer[this.position++]=~e}Te(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class ci{constructor(e){this.Se=e}oe(e){this.Se.fe(e)}se(e){this.Se.ye(e)}ne(e){this.Se.Ie(e)}te(){this.Se.Re()}}class ui{constructor(e){this.Se=e}oe(e){this.Se.we(e)}se(e){this.Se.pe(e)}ne(e){this.Se.Ae(e)}te(){this.Se.be()}}class hi{constructor(){this.Se=new ai,this.De=new ci(this.Se),this.Ce=new ui(this.Se)}seed(e){this.Se.seed(e)}Ne(e){return 0===e?this.De:this.Ce}Ve(){return this.Se.Ve()}reset(){this.Se.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class li{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}}function di(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=ie.comparator(e.documentKey,t.documentKey),0!==n?n:(n=fi(e.arrayValue,t.arrayValue),0!==n?n:fi(e.directionalValue,t.directionalValue)))}function fi(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class pi{constructor(){this.xe=new gi}addToCollectionParentIndex(e,t){return this.xe.add(t),_r.resolve()}getCollectionParents(e,t){return _r.resolve(this.xe.getEntries(t))}addFieldIndex(e,t){return _r.resolve()}deleteFieldIndex(e,t){return _r.resolve()}getDocumentsMatchingTarget(e,t,n){return _r.resolve(nn())}getFieldIndex(e,t){return _r.resolve(null)}getFieldIndexes(e,t){return _r.resolve([])}getNextCollectionGroupToUpdate(e){return _r.resolve(null)}updateCollectionGroup(e,t,n){return _r.resolve()}updateIndexEntries(e,t){return _r.resolve()}}class gi{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new $t(q.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new $t(q.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class mi{constructor(e){this.user=e,this.ke=new gi,this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.ke.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.ke.add(t)});const i={collectionId:n,parent:Qn(r)};return yi(e).put(i)}return _r.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[L(t),""],!1,!0);return yi(e).qt(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(Yn(r.parent))}return n})}addFieldIndex(e,t){const n=wi(e),r=function(e){return new gr(e.indexId,e.collectionGroup,e.fields.map(e=>[e.fieldPath.canonicalString(),e.kind]))}(t);return delete r.indexId,n.add(r).next()}deleteFieldIndex(e,t){const n=wi(e),r=bi(e),i=vi(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t,n){return _r.resolve(nn())}getFieldIndex(e,t){return _r.resolve(null)}Oe(e,t){const n=new hi;for(const r of function(e){return e.fields.filter(e=>2!==e.kind)}(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.Ne(r.kind);ii.le.Xt(e,i)}return n.Ve()}Me(e){const t=new hi;return ii.le.Xt(e,t.Ne(0)),t.Ve()}getFieldIndexes(e,t){const n=wi(e),r=bi(e);return(t?n.qt(gr.collectionGroupIndex,IDBKeyRange.bound(t,t)):n.qt()).next(e=>{const t=[];return _r.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){const n=t?new Ee(t.sequenceNumber,new _e(Hr(t.readTime),new ie(Yn(t.documentKey)),t.largestBatchId)):Ee.empty(),r=e.fields.map(([e,t])=>new Te(z.fromServerFormat(e),t));return new Ie(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>e.indexState.sequenceNumber-t.indexState.sequenceNumber),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=wi(e),i=bi(e);return this.$e(e).next(e=>r.qt(gr.collectionGroupIndex,IDBKeyRange.bound(t,t)).next(t=>_r.forEach(t,t=>i.put(function(e,t,n,r){return new mr(e,t.uid||"",n,Gr(r.readTime),Qn(r.documentKey.path),r.largestBatchId)}(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){const n=new Map;return _r.forEach(t,(t,r)=>{const i=n.get(t.collectionGroup);return(i?_r.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),_r.forEach(i,n=>this.Fe(e,t,n).next(t=>{const i=this.Be(r,n);return t.isEqual(i)?_r.resolve():this.Le(e,r,t,i)}))))})}Ue(e,t,n){return vi(e).put(new yr(n.indexId,this.uid,n.arrayValue,n.directionalValue,Qn(t.key.path)))}qe(e,t,n){return vi(e).delete([n.indexId,this.uid,n.arrayValue,n.directionalValue,Qn(t.key.path)])}Fe(e,t,n){const r=vi(e);let i=new $t(di);return r.Qt({index:yr.documentKeyIndex,range:IDBKeyRange.only([n.indexId,this.uid,Qn(t.path)])},(e,r)=>{i=i.add(new li(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}Be(e,t){let n=new $t(di);const r=this.Oe(t,e);if(null==r)return n;const i=function(e){return e.fields.find(e=>2===e.kind)}(t);if(null!=i){const s=e.data.field(i.fieldPath);if(pe(s))for(const i of s.arrayValue.values||[])n=n.add(new li(t.indexId,e.key,this.Me(i),r))}else n=n.add(new li(t.indexId,e.key,new Uint8Array,r));return n}Le(e,t,n,r){f("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=Qt(s),c=Qt(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Qt(o)):t?(i(a),a=Qt(s)):(a=Qt(s),c=Qt(o))}}(n,r,di,n=>{i.push(this.Ue(e,t,n))},n=>{i.push(this.qe(e,t,n))}),_r.waitFor(i)}$e(e){let t=1;return bi(e).Qt({index:mr.sequenceNumberIndex,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}}function yi(e){return Lr(e,lr.store)}function vi(e){return Lr(e,yr.store)}function wi(e){return Lr(e,gr.store)}function bi(e){return Lr(e,mr.store)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Ii={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ti{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Ti(e,Ti.DEFAULT_COLLECTION_PERCENTILE,Ti.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ei(e,t,n){const r=e.store(nr.store),i=e.store(rr.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Qt({range:o},(e,t,n)=>(a++,n.delete()));s.push(c.next(()=>{v(1===a)}));const u=[];for(const h of n.mutations){const e=rr.key(t,h.key.path,n.batchId);s.push(i.delete(e)),u.push(h.key)}return _r.waitFor(s).next(()=>u)}function _i(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw y();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */Ti.DEFAULT_COLLECTION_PERCENTILE=10,Ti.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ti.DEFAULT=new Ti(41943040,Ti.DEFAULT_COLLECTION_PERCENTILE,Ti.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ti.DISABLED=new Ti(-1,0,0);class Si{constructor(e,t,n,r){this.userId=e,this.O=t,this.indexManager=n,this.referenceDelegate=r,this.Ke={}}static Jt(e,t,n,r){v(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Si(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ci(e).Qt({index:nr.userMutationsIndex,range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const i=Ai(e),s=Ci(e);return s.add({}).next(o=>{v("number"==typeof o);const a=new Mr(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map(t=>Rn(e.Ht,t)),i=n.mutations.map(t=>Rn(e.Ht,t));return new nr(t,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.O,this.userId,a),u=[];let h=new $t((e,t)=>R(e.canonicalString(),t.canonicalString()));for(const e of r){const t=rr.key(this.userId,e.key.path,o);h=h.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,rr.PLACEHOLDER))}return h.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Ke[o]=a.keys()}),_r.waitFor(u).next(()=>a)})}lookupMutationBatch(e,t){return Ci(e).get(t).next(e=>e?(v(e.userId===this.userId),$r(this.O,e)):null)}Ge(e,t){return this.Ke[t]?_r.resolve(this.Ke[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.Ke[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Ci(e).Qt({index:nr.userMutationsIndex,range:r},(e,t,r)=>{t.userId===this.userId&&(v(t.batchId>=n),i=$r(this.O,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Ci(e).Qt({index:nr.userMutationsIndex,range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ci(e).qt(nr.userMutationsIndex,t).next(e=>e.map(e=>$r(this.O,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=rr.prefixForPath(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Ai(e).Qt({range:r},(n,r,s)=>{const[o,a,c]=n,u=Yn(a);if(o===this.userId&&t.path.isEqual(u))return Ci(e).get(c).next(e=>{if(!e)throw y();v(e.userId===this.userId),i.push($r(this.O,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $t(R);const r=[];return t.forEach(t=>{const i=rr.prefixForPath(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Ai(e).Qt({range:s},(e,r,i)=>{const[s,o,a]=e,c=Yn(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),_r.waitFor(r).next(()=>this.je(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=rr.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new $t(R);return Ai(e).Qt({range:s},(e,t,i)=>{const[s,a,c]=e,u=Yn(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.je(e,o))}je(e,t){const n=[],r=[];return t.forEach(t=>{r.push(Ci(e).get(t).next(e=>{if(null===e)throw y();v(e.userId===this.userId),n.push($r(this.O,e))}))}),_r.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return Ei(e.zt,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Qe(t.batchId)}),_r.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}Qe(e){delete this.Ke[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return _r.resolve();const n=IDBKeyRange.lowerBound(rr.prefixForUser(this.userId)),r=[];return Ai(e).Qt({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=Yn(e[1]);r.push(t)}else n.done()}).next(()=>{v(0===r.length)})})}containsKey(e,t){return ki(e,this.userId,t)}We(e){return Ni(e).get(this.userId).next(e=>e||new tr(this.userId,-1,""))}}function ki(e,t,n){const r=rr.prefixForPath(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ai(e).Qt({range:s,jt:!0},(e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()}).next(()=>o)}function Ci(e){return Lr(e,nr.store)}function Ai(e){return Lr(e,rr.store)}function Ni(e){return Lr(e,tr.store)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Oi{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new Oi(0)}static Je(){return new Oi(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xi{constructor(e,t){this.referenceDelegate=e,this.O=t}allocateTargetId(e){return this.Ye(e).next(t=>{const n=new Oi(t.highestTargetId);return t.highestTargetId=n.next(),this.Xe(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Ye(e).next(e=>U.fromTimestamp(new M(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Ye(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Ye(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Xe(e,r)))}addTargetData(e,t){return this.Ze(e,t).next(()=>this.Ye(e).next(n=>(n.targetCount+=1,this.tn(t,n),this.Xe(e,n))))}updateTargetData(e,t){return this.Ze(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Di(e).delete(t.targetId)).next(()=>this.Ye(e)).next(t=>(v(t.targetCount>0),t.targetCount-=1,this.Xe(e,t)))}removeTargets(e,t,n){let r=0;const i=[];return Di(e).Qt((s,o)=>{const a=Wr(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))}).next(()=>_r.waitFor(i)).next(()=>r)}forEachTarget(e,t){return Di(e).Qt((e,n)=>{const r=Wr(n);t(r)})}Ye(e){return Ri(e).get(hr.key).next(e=>(v(null!==e),e))}Xe(e,t){return Ri(e).put(hr.key,t)}Ze(e,t){return Di(e).put(Qr(this.O,t))}tn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Ye(e).next(e=>e.targetCount)}getTargetData(e,t){const n=Ce(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Di(e).Qt({range:r,index:cr.queryTargetsIndexName},(e,n,r)=>{const s=Wr(n);Ne(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){const r=[],i=Pi(e);return t.forEach(t=>{const s=Qn(t.path);r.push(i.put(new ur(n,s))),r.push(this.referenceDelegate.addReference(e,n,t))}),_r.waitFor(r)}removeMatchingKeys(e,t,n){const r=Pi(e);return _r.forEach(t,t=>{const i=Qn(t.path);return _r.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=Pi(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Pi(e);let i=nn();return r.Qt({range:n,jt:!0},(e,t,n)=>{const r=Yn(e[1]),s=new ie(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){const n=Qn(t.path),r=IDBKeyRange.bound([n],[L(n)],!1,!0);let i=0;return Pi(e).Qt({index:ur.documentTargetsIndex,jt:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}Tt(e,t){return Di(e).get(t).next(e=>e?Wr(e):null)}}function Di(e){return Lr(e,cr.store)}function Ri(e){return Lr(e,hr.store)}function Pi(e){return Lr(e,ur.store)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function Li(e){if(e.code!==b.FAILED_PRECONDITION||e.message!==Tr)throw e;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Mi([e,t],[n,r]){const i=R(e,n);return 0===i?R(t,r):i}class Ui{constructor(e){this.en=e,this.buffer=new $t(Mi),this.nn=0}sn(){return++this.nn}rn(e){const t=[e,this.sn()];if(this.buffer.size<this.en)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Mi(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Fi{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.on=!1,this.cn=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.un(e)}stop(){this.cn&&(this.cn.cancel(),this.cn=null)}get started(){return null!==this.cn}un(e){const t=this.on?3e5:6e4;f("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.cn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.cn=null,this.on=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){Nr(e)?f("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Li(e)}await this.un(e)})}}class Vi{constructor(e,t){this.an=e,this.params=t}calculateTargetCount(e,t){return this.an.hn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return _r.resolve(O.A);const n=new Ui(t);return this.an.forEachTarget(e,e=>n.rn(e.sequenceNumber)).next(()=>this.an.ln(e,e=>n.rn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.an.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.an.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(f("LruGarbageCollector","Garbage collection skipped; disabled"),_r.resolve(Ii)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(f("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ii):this.fn(e,t))}getCacheSize(e){return this.an.getCacheSize(e)}fn(e,t){let n,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(f("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,o=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),d()<=s["a"].DEBUG&&f("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-h}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-h}ms`),_r.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ji{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new Vi(e,t)}(this,t)}hn(e){const t=this.dn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}dn(e){let t=0;return this.ln(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}ln(e,t){return this._n(e,(e,n)=>t(n))}addReference(e,t,n){return Bi(e,n)}removeReference(e,t,n){return Bi(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Bi(e,t)}wn(e,t){return function(e,t){let n=!1;return Ni(e).Wt(r=>ki(e,r,t).next(e=>(e&&(n=!0),_r.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this._n(e,(s,o)=>{if(o<=t){const t=this.wn(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,U.min()),Pi(e).delete([0,Qn(s.path)])))});r.push(t)}}).next(()=>_r.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Bi(e,t)}_n(e,t){const n=Pi(e);let r,i=O.A;return n.Qt({index:ur.documentTargetsIndex},([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==O.A&&t(new ie(Yn(r)),i),i=o,r=s):i=O.A}).next(()=>{i!==O.A&&t(new ie(Yn(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Bi(e,t){return Pi(e).put(function(e,t){return new ur(0,Qn(e.path),t)}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){V(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return j(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ki{constructor(){this.changes=new qi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?_r.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class zi{constructor(e){this.O=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return $i(e).put(Wi(t),n)}removeEntry(e,t){const n=$i(e),r=Wi(t);return n.delete(r)}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.mn(e,n)))}getEntry(e,t){return $i(e).get(Wi(t)).next(e=>this.gn(t,e))}yn(e,t){return $i(e).get(Wi(t)).next(e=>({document:this.gn(t,e),size:_i(e)}))}getEntries(e,t){let n=Xt();return this.pn(e,t,(e,t)=>{const r=this.gn(e,t);n=n.insert(e,r)}).next(()=>n)}In(e,t){let n=Xt(),r=new zt(ie.comparator);return this.pn(e,t,(e,t)=>{const i=this.gn(e,t);n=n.insert(e,i),r=r.insert(e,_i(t))}).next(()=>({documents:n,En:r}))}pn(e,t,n){if(t.isEmpty())return _r.resolve();const r=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),i=t.getIterator();let s=i.getNext();return $i(e).Qt({range:r},(e,t,r)=>{const o=ie.fromSegments(e);for(;s&&ie.comparator(s,o)<0;)n(s,null),s=i.getNext();s&&s.isEqual(o)&&(n(s,t),s=i.hasNext()?i.getNext():null),s?r.Ut(s.path.toArray()):r.done()}).next(()=>{for(;s;)n(s,null),s=i.hasNext()?i.getNext():null})}getAll(e,t,n){let r=Xt();const i=t.length+1,s={};if(n.isEqual(U.min())){const e=t.toArray();s.range=IDBKeyRange.lowerBound(e)}else{const e=t.toArray(),r=Kr(n);s.range=IDBKeyRange.lowerBound([e,r],!0),s.index=or.collectionReadTimeIndex}return $i(e).Qt(s,(e,n,s)=>{if(e.length!==i)return;const o=this.gn(ie.fromSegments(e),n);t.isPrefixOf(o.key.path)?r=r.insert(o.key,o):s.done()}).next(()=>r)}newChangeBuffer(e){return new Gi(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return Hi(e).get(ar.key).next(e=>(v(!!e),e))}mn(e,t){return Hi(e).put(ar.key,t)}gn(e,t){if(t){const e=Br(this.O,t);if(!e.isNoDocument()||!e.version.isEqual(U.min()))return e}return be.newInvalidDocument(e)}}class Gi extends Ki{constructor(e,t){super(),this.Tn=e,this.trackRemovals=t,this.An=new qi(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new $t((e,t)=>R(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.An.get(i);if(s.isValidDocument()){const a=qr(this.Tn.O,s);r=r.add(i.path.popLast());const c=_i(a);n+=c-o,t.push(this.Tn.addEntry(e,i,a))}else if(n-=o,this.trackRemovals){const n=qr(this.Tn.O,s.convertToNoDocument(U.min()));t.push(this.Tn.addEntry(e,i,n))}else t.push(this.Tn.removeEntry(e,i))}),r.forEach(n=>{t.push(this.Tn.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Tn.updateMetadata(e,n)),_r.waitFor(t)}getFromCache(e,t){return this.Tn.yn(e,t).next(e=>(this.An.set(t,e.size),e.document))}getAllFromCache(e,t){return this.Tn.In(e,t).next(({documents:e,En:t})=>(t.forEach((e,t)=>{this.An.set(e,t)}),e))}}function Hi(e){return Lr(e,ar.store)}function $i(e){return Lr(e,or.store)}function Wi(e){return e.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Qi{constructor(e){this.O=e}kt(e,t,n,r){const i=new Sr("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore(er.store)}(e),function(e){e.createObjectStore(tr.store,{keyPath:tr.keyPath}),e.createObjectStore(nr.store,{keyPath:nr.keyPath,autoIncrement:!0}).createIndex(nr.userMutationsIndex,nr.userMutationsKeyPath,{unique:!0}),e.createObjectStore(rr.store)}(e),Ji(e),function(e){e.createObjectStore(or.store)}(e));let s=_r.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(ur.store),e.deleteObjectStore(cr.store),e.deleteObjectStore(hr.store)}(e),Ji(e)),s=s.next(()=>function(e){const t=e.store(hr.store),n=new hr(0,0,U.min().toTimestamp(),0);return t.put(hr.key,n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(e,t){return t.store(nr.store).qt().next(n=>{e.deleteObjectStore(nr.store),e.createObjectStore(nr.store,{keyPath:nr.keyPath,autoIncrement:!0}).createIndex(nr.userMutationsIndex,nr.userMutationsKeyPath,{unique:!0});const r=t.store(nr.store),i=n.map(e=>r.put(e));return _r.waitFor(i)})}(e,i))),s=s.next(()=>{!function(e){e.createObjectStore(dr.store,{keyPath:dr.keyPath})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Rn(i))),n<6&&r>=6&&(s=s.next(()=>(function(e){e.createObjectStore(ar.store)}(e),this.Pn(i)))),n<7&&r>=7&&(s=s.next(()=>this.bn(i))),n<8&&r>=8&&(s=s.next(()=>this.vn(e,i))),n<9&&r>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e),function(e){const t=e.objectStore(or.store);t.createIndex(or.readTimeIndex,or.readTimeIndexPath,{unique:!1}),t.createIndex(or.collectionReadTimeIndex,or.collectionReadTimeIndexPath,{unique:!1})}(t)})),n<10&&r>=10&&(s=s.next(()=>this.Vn(i))),n<11&&r>=11&&(s=s.next(()=>{!function(e){e.createObjectStore(fr.store,{keyPath:fr.keyPath})}(e),function(e){e.createObjectStore(pr.store,{keyPath:pr.keyPath})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){const t=e.createObjectStore(vr.store,{keyPath:vr.keyPath});t.createIndex(vr.collectionPathOverlayIndex,vr.collectionPathOverlayIndexPath,{unique:!1}),t.createIndex(vr.collectionGroupOverlayIndex,vr.collectionGroupOverlayIndexPath,{unique:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */(e)})),n<13&&r>=13&&(s=s.next(()=>{!function(e){e.createObjectStore(gr.store,{keyPath:gr.keyPath,autoIncrement:!0}).createIndex(gr.collectionGroupIndex,gr.collectionGroupIndexPath,{unique:!1}),e.createObjectStore(mr.store,{keyPath:mr.keyPath}).createIndex(mr.sequenceNumberIndex,mr.sequenceNumberIndexPath,{unique:!1}),e.createObjectStore(yr.store,{keyPath:yr.keyPath}).createIndex(yr.documentKeyIndex,yr.documentKeyIndexPath,{unique:!1})}(e)})),s}Pn(e){let t=0;return e.store(or.store).Qt((e,n)=>{t+=_i(n)}).next(()=>{const n=new ar(t);return e.store(ar.store).put(ar.key,n)})}Rn(e){const t=e.store(tr.store),n=e.store(nr.store);return t.qt().next(t=>_r.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.qt(nr.userMutationsIndex,r).next(n=>_r.forEach(n,n=>{v(n.userId===t.userId);const r=$r(this.O,n);return Ei(e,t.userId,r).next(()=>{})}))}))}bn(e){const t=e.store(ur.store),n=e.store(or.store);return e.store(hr.store).get(hr.key).next(e=>{const r=[];return n.Qt((n,i)=>{const s=new q(n),o=function(e){return[0,Qn(e)]}(s);r.push(t.get(o).next(n=>n?_r.resolve():(n=>t.put(new ur(0,Qn(n),e.highestListenSequenceNumber)))(s)))}).next(()=>_r.waitFor(r))})}vn(e,t){e.createObjectStore(lr.store,{keyPath:lr.keyPath});const n=t.store(lr.store),r=new gi,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:Qn(r)})}};return t.store(or.store).Qt({jt:!0},(e,t)=>{const n=new q(e);return i(n.popLast())}).next(()=>t.store(rr.store).Qt({jt:!0},([e,t,n],r)=>{const s=Yn(t);return i(s.popLast())}))}Vn(e){const t=e.store(cr.store);return t.Qt((e,n)=>{const r=Wr(n),i=Qr(this.O,r);return t.put(i)})}}function Ji(e){e.createObjectStore(ur.store,{keyPath:ur.keyPath}).createIndex(ur.documentTargetsIndex,ur.documentTargetsKeyPath,{unique:!0}),e.createObjectStore(cr.store,{keyPath:cr.keyPath}).createIndex(cr.queryTargetsIndexName,cr.queryTargetsKeyPath,{unique:!0}),e.createObjectStore(hr.store)}const Xi="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Yi{constructor(e,t,n,r,i,s,o,a,c,u,h=12){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Sn=i,this.window=s,this.document=o,this.Dn=c,this.Cn=u,this.schemaVersion=h,this.Nn=null,this.xn=!1,this.isPrimary=!1,this.networkEnabled=!0,this.kn=null,this.inForeground=!1,this.On=null,this.Mn=null,this.$n=Number.NEGATIVE_INFINITY,this.Fn=e=>Promise.resolve(),!Yi.Vt())throw new I(b.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ji(this,r),this.Bn=t+"main",this.O=new jr(a),this.Ln=new kr(this.Bn,this.schemaVersion,new Qi(this.O)),this.Un=new xi(this.referenceDelegate,this.O),this.qn=function(e){return new zi(e)}(this.O),this.Kn=new Zr,this.window&&this.window.localStorage?this.Gn=this.window.localStorage:(this.Gn=null,!1===u&&p("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.jn().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new I(b.FAILED_PRECONDITION,Xi);return this.Qn(),this.Wn(),this.zn(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Un.getHighestSequenceNumber(e))}).then(e=>{this.Nn=new O(e,this.Dn)}).then(()=>{this.xn=!0}).catch(e=>(this.Ln&&this.Ln.close(),Promise.reject(e)))}Hn(e){return this.Fn=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ln.Mt(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Sn.enqueueAndForget(async()=>{this.started&&await this.jn()}))}jn(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>es(e).put(new dr(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.Jn(e).next(e=>{e||(this.isPrimary=!1,this.Sn.enqueueRetryable(()=>this.Fn(!1)))})}).next(()=>this.Yn(e)).next(t=>this.isPrimary&&!t?this.Xn(e).next(()=>!1):!!t&&this.Zn(e).next(()=>!0))).catch(e=>{if(Nr(e))return f("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return f("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Sn.enqueueRetryable(()=>this.Fn(e)),this.isPrimary=e})}Jn(e){return Zi(e).get(er.key).next(e=>_r.resolve(this.ts(e)))}es(e){return es(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.ss(this.$n,18e5)){this.$n=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=Lr(e,dr.store);return t.qt().next(e=>{const n=this.rs(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return _r.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Gn)for(const t of e)this.Gn.removeItem(this.os(t.clientId))}}zn(){this.Mn=this.Sn.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.jn().then(()=>this.ns()).then(()=>this.zn()))}ts(e){return!!e&&e.ownerId===this.clientId}Yn(e){return this.Cn?_r.resolve(!0):Zi(e).get(er.key).next(t=>{if(null!==t&&this.ss(t.leaseTimestampMs,5e3)&&!this.cs(t.ownerId)){if(this.ts(t)&&this.networkEnabled)return!0;if(!this.ts(t)){if(!t.allowTabSynchronization)throw new I(b.FAILED_PRECONDITION,Xi);return!1}}return!(!this.networkEnabled||!this.inForeground)||es(e).qt().next(e=>void 0===this.rs(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&f("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.xn=!1,this.us(),this.Mn&&(this.Mn.cancel(),this.Mn=null),this.hs(),this.ls(),await this.Ln.runTransaction("shutdown","readwrite",[er.store,dr.store],e=>{const t=new Pr(e,O.A);return this.Xn(t).next(()=>this.es(t))}),this.Ln.close(),this.fs()}rs(e,t){return e.filter(e=>this.ss(e.updateTimeMs,t)&&!this.cs(e.clientId))}ds(){return this.runTransaction("getActiveClients","readonly",e=>es(e).qt().next(e=>this.rs(e,18e5).map(e=>e.clientId)))}get started(){return this.xn}getMutationQueue(e,t){return Si.Jt(e,this.O,t,this.referenceDelegate)}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getIndexManager(e){return new mi(e)}getDocumentOverlayCache(e){return ni.Jt(this.O,e)}getBundleCache(){return this.Kn}runTransaction(e,t,n){f("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=13===(s=this.schemaVersion)?Ir:12===s?br:11===s?wr:void y();var s;let o;return this.Ln.runTransaction(e,r,i,r=>(o=new Pr(r,this.Nn?this.Nn.next():O.A),"readwrite-primary"===t?this.Jn(o).next(e=>!!e||this.Yn(o)).next(t=>{if(!t)throw p(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Sn.enqueueRetryable(()=>this.Fn(!1)),new I(b.FAILED_PRECONDITION,Tr);return n(o)}).next(e=>this.Zn(o).next(()=>e)):this._s(o).next(()=>n(o)))).then(e=>(o.raiseOnCommittedEvent(),e))}_s(e){return Zi(e).get(er.key).next(e=>{if(null!==e&&this.ss(e.leaseTimestampMs,5e3)&&!this.cs(e.ownerId)&&!this.ts(e)&&!(this.Cn||this.allowTabSynchronization&&e.allowTabSynchronization))throw new I(b.FAILED_PRECONDITION,Xi)})}Zn(e){const t=new er(this.clientId,this.allowTabSynchronization,Date.now());return Zi(e).put(er.key,t)}static Vt(){return kr.Vt()}Xn(e){const t=Zi(e);return t.get(er.key).next(e=>this.ts(e)?(f("IndexedDbPersistence","Releasing primary lease."),t.delete(er.key)):_r.resolve())}ss(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(p(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Qn(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.On=()=>{this.Sn.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.jn()))},this.document.addEventListener("visibilitychange",this.On),this.inForeground="visible"===this.document.visibilityState)}hs(){this.On&&(this.document.removeEventListener("visibilitychange",this.On),this.On=null)}Wn(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.kn=()=>{this.us(),Object(o["s"])()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Sn.enterRestrictedMode(!0),this.Sn.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.kn))}ls(){this.kn&&(this.window.removeEventListener("pagehide",this.kn),this.kn=null)}cs(e){var t;try{const n=null!==(null===(t=this.Gn)||void 0===t?void 0:t.getItem(this.os(e)));return f("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return p("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}us(){if(this.Gn)try{this.Gn.setItem(this.os(this.clientId),String(Date.now()))}catch(e){p("Failed to set zombie client id.",e)}}fs(){if(this.Gn)try{this.Gn.removeItem(this.os(this.clientId))}catch(e){}}os(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Zi(e){return Lr(e,er.store)}function es(e){return Lr(e,dr.store)}function ts(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
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
 */}
/**
 * @license
 * Copyright 2017 Google LLC
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
class ns{constructor(e,t,n){this.qn=e,this.gs=t,this.indexManager=n}ys(e,t){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,t).next(n=>this.ps(e,t,n))}ps(e,t,n){return this.qn.getEntry(e,t).next(e=>{for(const t of n)t.applyToLocalView(e);return e})}Is(e,t){e.forEach((e,n)=>{for(const r of t)r.applyToLocalView(n)})}Es(e,t){return this.qn.getEntries(e,t).next(t=>this.Ts(e,t).next(()=>t))}Ts(e,t){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.Is(t,e))}As(e,t,n){return function(e){return ie.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Rs(e,t.path):Ye(t)?this.Ps(e,t,n):this.bs(e,t,n)}Rs(e,t){return this.ys(e,new ie(t)).next(e=>{let t=Zt();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}Ps(e,t,n){const r=t.collectionGroup;let i=Zt();return this.indexManager.getCollectionParents(e,r).next(s=>_r.forEach(s,s=>{const o=function(e,t){return new Ge(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.bs(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}bs(e,t,n){let r;return this.qn.getAll(e,t.path,n).next(n=>(r=n,this.gs.getAllMutationBatchesAffectingQuery(e,t))).next(e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=be.newInvalidDocument(n),r=r.insert(n,i)),Nt(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}).next(()=>(r.forEach((e,n)=>{st(t,n)||(r=r.remove(e))}),r))}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class rs{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.vs=n,this.Vs=r}static Ss(e,t){let n=nn(),r=nn();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new rs(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class is{Ds(e){this.Cs=e}As(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(U.min())?this.Ns(e,t):this.Cs.Es(e,r).next(i=>{const o=this.xs(t,i);return(We(t)||Qe(t))&&this.ks(t.limitType,o,r,n)?this.Ns(e,t):(d()<=s["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),it(t)),this.Cs.As(e,t,n).next(e=>(o.forEach(t=>{e=e.insert(t.key,t)}),e)))})}xs(e,t){let n=new $t(ot(e));return t.forEach((t,r)=>{st(e,r)&&(n=n.add(r))}),n}ks(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ns(e,t){return d()<=s["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",it(t)),this.Cs.As(e,t,U.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ss{constructor(e,t,n,r){this.persistence=e,this.Os=t,this.O=r,this.Ms=new zt(R),this.$s=new qi(e=>Ce(e),Ne),this.Fs=U.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(n)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new ns(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function os(e,t,n,r){return new ss(e,t,n,r)}async function as(e,t){const n=w(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.gs.getAllMutationBatches(e).next(i=>(r=i,n.Ls(t),n.gs.getAllMutationBatches(e))).next(t=>{const i=[],s=[];let o=nn();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.Us.Es(e,o).next(e=>({qs:e,removedBatchIds:i,addedBatchIds:s}))})})}function cs(e,t){const n=w(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=_r.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);v(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.gs.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.gs.performConsistencyCheck(e)).next(()=>n.Us.Es(e,r))})}function us(e){const t=w(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Un.getLastRemoteSnapshotVersion(e))}function hs(e,t){const n=w(e),r=t.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.Ms;const o=[];t.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Un.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.Un.addMatchingKeys(e,s.addedDocuments,a)));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(H.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Un.updateTargetData(e,u))});let a=Xt();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(ls(e,s,t.documentUpdates).next(e=>{a=e})),!r.isEqual(U.min())){const t=n.Un.getLastRemoteSnapshotVersion(e).next(t=>n.Un.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return _r.waitFor(o).next(()=>s.apply(e)).next(()=>n.Us.Ts(e,a)).next(()=>a)}).then(e=>(n.Ms=i,e))}function ls(e,t,n){let r=nn();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=Xt();return n.forEach((n,i)=>{const s=e.get(n);i.isNoDocument()&&i.version.isEqual(U.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",i.version)}),r})}function ds(e,t){const n=w(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.gs.getNextMutationBatchAfterBatchId(e,t)))}function fs(e,t){const n=w(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Un.getTargetData(e,t).next(i=>i?(r=i,_r.resolve(r)):n.Un.allocateTargetId(e).next(i=>(r=new Vr(t,i,0,e.currentSequenceNumber),n.Un.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.Ms.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(e.targetId,e),n.$s.set(t,e.targetId)),e})}async function ps(e,t,n){const r=w(e),i=r.Ms.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!Nr(e))throw e;f("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ms=r.Ms.remove(t),r.$s.delete(i.target)}function gs(e,t,n){const r=w(e);let i=U.min(),s=nn();return r.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const r=w(e),i=r.$s.get(n);return void 0!==i?_r.resolve(r.Ms.get(i)):r.Un.getTargetData(t,n)}(r,e,et(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Un.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.Os.As(e,t,n?i:U.min(),n?s:nn())).next(e=>({documents:e,Ks:s})))}async function ms(e){const t=w(e);return t.persistence.runTransaction("Synchronize last document change read time","readonly",e=>function(e){const t=$i(e);let n=U.min();return t.Qt({index:or.readTimeIndex,reverse:!0},(e,t,r)=>{t.readTime&&(n=zr(t.readTime)),r.done()}).next(()=>n)}(e)).then(e=>{t.Fs=e})}
/**
 * @license
 * Copyright 2020 Google LLC
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
class ys{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,t){return _r.resolve(this.Ws.get(t))}saveBundleMetadata(e,t){var n;return this.Ws.set(t.id,{id:(n=t).id,version:n.version,createTime:In(n.createTime)}),_r.resolve()}getNamedQuery(e,t){return _r.resolve(this.zs.get(t))}saveNamedQuery(e,t){return this.zs.set(t.name,function(e){return{name:e.name,query:Jr(e.bundledQuery),readTime:In(e.readTime)}}(t)),_r.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class vs{constructor(){this.overlays=new zt(ie.comparator),this.Hs=new Map}getOverlay(e,t){return _r.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach(n=>{this.Yt(e,t,n)}),_r.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Hs.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Hs.delete(n)),_r.resolve()}getOverlaysForCollection(e,t,n){const r=new Map,i=t.length+1,s=new ie(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return _r.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new zt((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=new Map,i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=new Map,a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((e,t)=>o.set(t,e)),o.size>=r)break;return _r.resolve(o)}Yt(e,t,n){if(null===n)return;const r=this.overlays.get(n.key);null!==r&&this.Hs.get(r.largestBatchId).delete(n.key),this.overlays=this.overlays.insert(n.key,new Fr(t,n));let i=this.Hs.get(t);void 0===i&&(i=new Set,this.Hs.set(t,i)),i.add(n.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ws{constructor(){this.Js=new $t(bs.Ys),this.Xs=new $t(bs.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,t){const n=new bs(e,t);this.Js=this.Js.add(n),this.Xs=this.Xs.add(n)}ti(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.ei(new bs(e,t))}ni(e,t){e.forEach(e=>this.removeReference(e,t))}si(e){const t=new ie(new q([])),n=new bs(t,e),r=new bs(t,e+1),i=[];return this.Xs.forEachInRange([n,r],e=>{this.ei(e),i.push(e.key)}),i}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const t=new ie(new q([])),n=new bs(t,e),r=new bs(t,e+1);let i=nn();return this.Xs.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new bs(e,0),n=this.Js.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class bs{constructor(e,t){this.key=e,this.oi=t}static Ys(e,t){return ie.comparator(e.key,t.key)||R(e.oi,t.oi)}static Zs(e,t){return R(e.oi,t.oi)||ie.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Is{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.gs=[],this.ci=1,this.ui=new $t(bs.Ys)}checkEmpty(e){return _r.resolve(0===this.gs.length)}addMutationBatch(e,t,n,r){const i=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const s=new Mr(i,t,n,r);this.gs.push(s);for(const o of r)this.ui=this.ui.add(new bs(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return _r.resolve(s)}lookupMutationBatch(e,t){return _r.resolve(this.ai(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.hi(n),i=r<0?0:r;return _r.resolve(this.gs.length>i?this.gs[i]:null)}getHighestUnacknowledgedBatchId(){return _r.resolve(0===this.gs.length?-1:this.ci-1)}getAllMutationBatches(e){return _r.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new bs(t,0),r=new bs(t,Number.POSITIVE_INFINITY),i=[];return this.ui.forEachInRange([n,r],e=>{const t=this.ai(e.oi);i.push(t)}),_r.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $t(R);return t.forEach(e=>{const t=new bs(e,0),r=new bs(e,Number.POSITIVE_INFINITY);this.ui.forEachInRange([t,r],e=>{n=n.add(e.oi)})}),_r.resolve(this.li(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ie.isDocumentKey(i)||(i=i.child(""));const s=new bs(new ie(i),0);let o=new $t(R);return this.ui.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.oi)),!0)},s),_r.resolve(this.li(o))}li(e){const t=[];return e.forEach(e=>{const n=this.ai(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){v(0===this.fi(t.batchId,"removed")),this.gs.shift();let n=this.ui;return _r.forEach(t.mutations,r=>{const i=new bs(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ui=n})}Qe(e){}containsKey(e,t){const n=new bs(t,0),r=this.ui.firstAfterOrEqual(n);return _r.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.gs.length,_r.resolve()}fi(e,t){return this.hi(e)}hi(e){return 0===this.gs.length?0:e-this.gs[0].batchId}ai(e){const t=this.hi(e);return t<0||t>=this.gs.length?null:this.gs[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ts{constructor(e){this.di=e,this.docs=new zt(ie.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.di(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return _r.resolve(n?n.document.mutableCopy():be.newInvalidDocument(t))}getEntries(e,t){let n=Xt();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():be.newInvalidDocument(e))}),_r.resolve(n)}getAll(e,t,n){let r=Xt();const i=new ie(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||i.readTime.compareTo(n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return _r.resolve(r)}_i(e,t){return _r.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Es(this)}getSize(e){return _r.resolve(this.size)}}class Es extends Ki{constructor(e){super(),this.Tn=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Tn.addEntry(e,r)):this.Tn.removeEntry(n)}),_r.waitFor(t)}getFromCache(e,t){return this.Tn.getEntry(e,t)}getAllFromCache(e,t){return this.Tn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _s{constructor(e){this.persistence=e,this.wi=new qi(e=>Ce(e),Ne),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.mi=0,this.gi=new ws,this.targetCount=0,this.yi=Oi.He()}forEachTarget(e,t){return this.wi.forEach((e,n)=>t(n)),_r.resolve()}getLastRemoteSnapshotVersion(e){return _r.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _r.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),_r.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.mi&&(this.mi=t),_r.resolve()}Ze(e){this.wi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.yi=new Oi(t),this.highestTargetId=t),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,t){return this.Ze(t),this.targetCount+=1,_r.resolve()}updateTargetData(e,t){return this.Ze(t),_r.resolve()}removeTargetData(e,t){return this.wi.delete(t.target),this.gi.si(t.targetId),this.targetCount-=1,_r.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.wi.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.wi.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),_r.waitFor(i).next(()=>r)}getTargetCount(e){return _r.resolve(this.targetCount)}getTargetData(e,t){const n=this.wi.get(t)||null;return _r.resolve(n)}addMatchingKeys(e,t,n){return this.gi.ti(t,n),_r.resolve()}removeMatchingKeys(e,t,n){this.gi.ni(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),_r.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.gi.si(t),_r.resolve()}getMatchingKeysForTargetId(e,t){const n=this.gi.ri(t);return _r.resolve(n)}containsKey(e,t){return _r.resolve(this.gi.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ss{constructor(e,t){this.pi={},this.overlays={},this.Nn=new O(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new _s(this),this.indexManager=new pi,this.qn=function(e){return new Ts(e)}(e=>this.referenceDelegate.Ii(e)),this.O=new jr(t),this.Kn=new ys(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vs,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.pi[e.toKey()];return n||(n=new Is(t,this.referenceDelegate),this.pi[e.toKey()]=n),n}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,t,n){f("MemoryPersistence","Starting transaction:",e);const r=new ks(this.Nn.next());return this.referenceDelegate.Ei(),n(r).next(e=>this.referenceDelegate.Ti(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ai(e,t){return _r.or(Object.values(this.pi).map(n=>()=>n.containsKey(e,t)))}}class ks extends Er{constructor(e){super(),this.currentSequenceNumber=e}}class Cs{constructor(e){this.persistence=e,this.Ri=new ws,this.Pi=null}static bi(e){return new Cs(e)}get vi(){if(this.Pi)return this.Pi;throw y()}addReference(e,t,n){return this.Ri.addReference(n,t),this.vi.delete(n.toString()),_r.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.vi.add(n.toString()),_r.resolve()}markPotentiallyOrphaned(e,t){return this.vi.add(t.toString()),_r.resolve()}removeTarget(e,t){this.Ri.si(t.targetId).forEach(e=>this.vi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.vi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Pi=new Set}Ti(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _r.forEach(this.vi,n=>{const r=ie.fromPath(n);return this.Vi(e,r).next(e=>{e||t.removeEntry(r,U.min())})}).next(()=>(this.Pi=null,t.apply(e)))}updateLimboDocument(e,t){return this.Vi(e,t).next(e=>{e?this.vi.delete(t.toString()):this.vi.add(t.toString())})}Ii(e){return 0}Vi(e,t){return _r.or([()=>_r.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class As{constructor(){this.activeTargetIds=sn()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ns{constructor(){this._r=new As,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,t,n){this.wr[e]=t}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new As,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Os{mr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class xs{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Ds={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Rs{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ps extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.kr=t+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,t,n,r,i){const s=this.$r(e,t);f("RestConnection","Sending: ",s,n);const o={};return this.Fr(o,r,i),this.Br(e,s,o,n).then(e=>(f("RestConnection","Received: ",e),e),t=>{throw g("RestConnection",e+" failed with error: ",t,"url: ",s,"request:",n),t})}Lr(e,t,n,r,i){return this.Mr(e,t,n,r,i)}Fr(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+h,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}$r(e,t){const n=Ds[e];return`${this.kr}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,t,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const t=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(t)),i(t);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+e+'" timed out'),s(new I(b.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(t)>=0?t:b.UNKNOWN}(e.status);s(new I(t,e.message))}else s(new I(b.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new I(b.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);o.send(t,"POST",c,n,15)})}Ur(e,t,n){const r=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Object(a["h"])(),s=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.Fr(c.initMessageHeaders,t,n),Object(o["q"])()||Object(o["r"])()||Object(o["m"])()||Object(o["o"])()||Object(o["t"])()||Object(o["l"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");f("Connection","Creating WebChannel: "+u,c);const h=i.createWebChannel(u,c);let l=!1,d=!1;const p=new Rs({Ar:e=>{d?f("Connection","Not sending because WebChannel is closed:",e):(l||(f("Connection","Opening WebChannel transport."),h.open(),l=!0),f("Connection","WebChannel sending:",e),h.send(e))},Rr:()=>h.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(h,a["f"].EventType.OPEN,()=>{d||f("Connection","WebChannel transport opened.")}),m(h,a["f"].EventType.CLOSE,()=>{d||(d=!0,f("Connection","WebChannel transport closed"),p.Cr())}),m(h,a["f"].EventType.ERROR,e=>{d||(d=!0,g("Connection","WebChannel transport errored:",e),p.Cr(new I(b.UNAVAILABLE,"The operation could not be completed")))}),m(h,a["f"].EventType.MESSAGE,e=>{var t;if(!d){const n=e.data[0];v(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){f("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=jt[e];if(void 0!==t)return Kt(t)}(e),n=i.message;void 0===t&&(t=b.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),d=!0,p.Cr(new I(t,n)),h.close()}else f("Connection","WebChannel received:",n),p.Nr(n)}}),m(s,a["b"].STAT_EVENT,e=>{e.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):e.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Dr()},0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 * Copyright 2020 Google LLC
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
 */function Ls(){return"undefined"!=typeof window?window:null}function Ms(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Us(e){return new yn(e,!0)}class Fs{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Sn=e,this.timerId=t,this.qr=n,this.Kr=r,this.Gr=i,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const t=Math.floor(this.jr+this.Jr()),n=Math.max(0,Date.now()-this.Wr),r=Math.max(0,t-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.jr} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,r,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){null!==this.Qr&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){null!==this.Qr&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Vs{constructor(e,t,n,r,i,s,o,a){this.Sn=e,this.Xr=n,this.Zr=r,this.eo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new Fs(e,t)}oo(){return 1===this.state||5===this.state||this.co()}co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&null===this.so&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,t){this._o(),this.wo(),this.ro.cancel(),this.no++,4!==e?this.ro.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):t&&t.code===b.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(t)}mo(){}auth(){this.state=1;const e=this.yo(this.no),t=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.no===t&&this.po(e,n)},t=>{e(()=>{const e=new I(b.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Io(e)})})}po(e,t){const n=this.yo(this.no);this.stream=this.Eo(e,t),this.stream.Pr(()=>{n(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(e=>{n(()=>this.Io(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return f("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}yo(e){return t=>{this.Sn.enqueueAndForget(()=>this.no===e?t():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class js extends Vs{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.O=i}Eo(e,t){return this.eo.Ur("Listen",e,t)}onMessage(e){this.ro.reset();const t=Dn(this.O,e),n=function(e){if(!("targetChange"in e))return U.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?U.min():t.readTime?In(t.readTime):U.min()}(e);return this.listener.To(t,n)}Ao(e){const t={};t.database=An(this.O),t.addTarget=function(e,t){let n;const r=t.target;return n=Oe(r)?{documents:Mn(e,r)}:{query:Un(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=wn(e,t.resumeToken):t.snapshotVersion.compareTo(U.min())>0&&(n.readTime=vn(e,t.snapshotVersion.toTimestamp())),n}(this.O,e);const n=Vn(this.O,e);n&&(t.labels=n),this.fo(t)}Ro(e){const t={};t.database=An(this.O),t.removeTarget=e,this.fo(t)}}class Bs extends Vs{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.O=i,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,t){return this.eo.Ur("Write",e,t)}onMessage(e){if(v(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const t=Ln(e.writeResults,e.commitTime),n=In(e.commitTime);return this.listener.Vo(n,t)}return v(!e.writeResults||0===e.writeResults.length),this.Po=!0,this.listener.So()}Do(){const e={};e.database=An(this.O),this.fo(e)}vo(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Rn(this.O,e))};this.fo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qs extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.eo=n,this.O=r,this.Co=!1}No(){if(this.Co)throw new I(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,t,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.eo.Mr(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new I(b.UNKNOWN,e.toString())})}Lr(e,t,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.eo.Lr(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new I(b.UNKNOWN,e.toString())})}terminate(){this.Co=!0}}class Ks{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){0===this.xo&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){"Online"===this.state?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo("Connection failed 1 times. Most recent error: "+e.toString()),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,"Online"===e&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(p(t),this.Oo=!1):f("OnlineStateTracker",t)}Lo(){null!==this.ko&&(this.ko.cancel(),this.ko=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class zs{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=i,this.jo.mr(e=>{n.enqueueAndForget(async()=>{Zs(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=w(e);t.Ko.add(4),await Hs(t),t.Qo.set("Unknown"),t.Ko.delete(4),await Gs(t)}(this))})}),this.Qo=new Ks(n,r)}}async function Gs(e){if(Zs(e))for(const t of e.Go)await t(!0)}async function Hs(e){for(const t of e.Go)await t(!1)}function $s(e,t){const n=w(e);n.qo.has(t.targetId)||(n.qo.set(t.targetId,t),Ys(n)?Xs(n):vo(n).co()&&Qs(n,t))}function Ws(e,t){const n=w(e),r=vo(n);n.qo.delete(t),r.co()&&Js(n,t),0===n.qo.size&&(r.co()?r.ho():Zs(n)&&n.Qo.set("Unknown"))}function Qs(e,t){e.Wo.Z(t.targetId),vo(e).Ao(t)}function Js(e,t){e.Wo.Z(t),vo(e).Ro(t)}function Xs(e){e.Wo=new dn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Tt:t=>e.qo.get(t)||null}),vo(e).start(),e.Qo.Mo()}function Ys(e){return Zs(e)&&!vo(e).oo()&&e.qo.size>0}function Zs(e){return 0===w(e).Ko.size}function eo(e){e.Wo=void 0}async function to(e){e.qo.forEach((t,n)=>{Qs(e,t)})}async function no(e,t){eo(e),Ys(e)?(e.Qo.Bo(t),Xs(e)):e.Qo.set("Unknown")}async function ro(e,t,n){if(e.Qo.set("Online"),t instanceof hn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.qo.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.qo.delete(r),e.Wo.removeTarget(r))}(e,t)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await io(e,n)}else if(t instanceof cn?e.Wo.ct(t):t instanceof un?e.Wo._t(t):e.Wo.ht(t),!n.isEqual(U.min()))try{const t=await us(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Wo.yt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.qo.get(r);i&&e.qo.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e.qo.get(t);if(!n)return;e.qo.set(t,n.withResumeToken(H.EMPTY_BYTE_STRING,n.snapshotVersion)),Js(e,t);const r=new Vr(n.target,t,1,n.sequenceNumber);Qs(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){f("RemoteStore","Failed to raise snapshot:",t),await io(e,t)}}async function io(e,t,n){if(!Nr(t))throw t;e.Ko.add(1),await Hs(e),e.Qo.set("Offline"),n||(n=()=>us(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),e.Ko.delete(1),await Gs(e)})}function so(e,t){return t().catch(n=>io(e,n,t))}async function oo(e){const t=w(e),n=wo(t);let r=t.Uo.length>0?t.Uo[t.Uo.length-1].batchId:-1;for(;ao(t);)try{const e=await ds(t.localStore,r);if(null===e){0===t.Uo.length&&n.ho();break}r=e.batchId,co(t,e)}catch(e){await io(t,e)}uo(t)&&ho(t)}function ao(e){return Zs(e)&&e.Uo.length<10}function co(e,t){e.Uo.push(t);const n=wo(e);n.co()&&n.bo&&n.vo(t.mutations)}function uo(e){return Zs(e)&&!wo(e).oo()&&e.Uo.length>0}function ho(e){wo(e).start()}async function lo(e){wo(e).Do()}async function fo(e){const t=wo(e);for(const n of e.Uo)t.vo(n.mutations)}async function po(e,t,n){const r=e.Uo.shift(),i=Ur.from(r,t,n);await so(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await oo(e)}async function go(e,t){t&&wo(e).bo&&await async function(e,t){if(n=t.code,qt(n)&&n!==b.ABORTED){const n=e.Uo.shift();wo(e).ao(),await so(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await oo(e)}var n}(e,t),uo(e)&&ho(e)}async function mo(e,t){const n=w(e);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=Zs(n);n.Ko.add(3),await Hs(n),r&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ko.delete(3),await Gs(n)}async function yo(e,t){const n=w(e);t?(n.Ko.delete(2),await Gs(n)):t||(n.Ko.add(2),await Hs(n),n.Qo.set("Unknown"))}function vo(e){return e.zo||(e.zo=function(e,t,n){const r=w(e);return r.No(),new js(t,r.eo,r.authCredentials,r.appCheckCredentials,r.O,n)
/**
 * @license
 * Copyright 2018 Google LLC
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
 */}(e.datastore,e.asyncQueue,{Pr:to.bind(null,e),vr:no.bind(null,e),To:ro.bind(null,e)}),e.Go.push(async t=>{t?(e.zo.ao(),Ys(e)?Xs(e):e.Qo.set("Unknown")):(await e.zo.stop(),eo(e))})),e.zo}function wo(e){return e.Ho||(e.Ho=function(e,t,n){const r=w(e);return r.No(),new Bs(t,r.eo,r.authCredentials,r.appCheckCredentials,r.O,n)}(e.datastore,e.asyncQueue,{Pr:lo.bind(null,e),vr:go.bind(null,e),So:fo.bind(null,e),Vo:po.bind(null,e)}),e.Go.push(async t=>{t?(e.Ho.ao(),await oo(e)):(await e.Ho.stop(),e.Uo.length>0&&(f("RemoteStore",`Stopping write stream with ${e.Uo.length} pending writes`),e.Uo=[]))})),e.Ho
/**
 * @license
 * Copyright 2017 Google LLC
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
 */}class bo{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new bo(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new I(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Io(e,t){if(p("AsyncQueue",`${t}: ${e}`),Nr(e))return new I(b.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class To{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ie.comparator(t.key,n.key):(e,t)=>ie.comparator(e.key,t.key),this.keyedMap=Zt(),this.sortedSet=new zt(this.comparator)}static emptySet(e){return new To(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof To))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new To;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Eo{constructor(){this.Jo=new zt(ie.comparator)}track(e){const t=e.doc.key,n=this.Jo.get(t);n?0!==e.type&&3===n.type?this.Jo=this.Jo.insert(t,e):3===e.type&&1!==n.type?this.Jo=this.Jo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Jo=this.Jo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Jo=this.Jo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Jo=this.Jo.remove(t):1===e.type&&2===n.type?this.Jo=this.Jo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Jo=this.Jo.insert(t,{type:2,doc:e.doc}):y():this.Jo=this.Jo.insert(t,e)}Yo(){const e=[];return this.Jo.inorderTraversal((t,n)=>{e.push(n)}),e}}class _o{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new _o(e,t,To.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class So{constructor(){this.Xo=void 0,this.listeners=[]}}class ko{constructor(){this.queries=new qi(e=>rt(e),nt),this.onlineState="Unknown",this.Zo=new Set}}async function Co(e,t){const n=w(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new So),i)try{s.Xo=await n.onListen(r)}catch(e){const n=Io(e,`Initialization of query '${it(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.tc(n.onlineState),s.Xo&&t.ec(s.Xo)&&xo(n)}async function Ao(e,t){const n=w(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function No(e,t){const n=w(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.ec(i)&&(r=!0);t.Xo=i}}r&&xo(n)}function Oo(e,t,n){const r=w(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function xo(e){e.Zo.forEach(e=>{e.next()})}class Do{constructor(e,t,n){this.query=e,this.nc=t,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=n||{}}ec(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new _o(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.sc?this.rc(e)&&(this.nc.next(e),t=!0):this.oc(e,this.onlineState)&&(this.cc(e),t=!0),this.ic=e,t}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let t=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),t=!0),t}oc(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.uc||!n)&&(!e.docs.isEmpty()||"Offline"===t)}rc(e){if(e.docChanges.length>0)return!0;const t=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}cc(e){e=_o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 * Copyright 2017 Google LLC
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
class Ro{constructor(e){this.key=e}}class Po{constructor(e){this.key=e}}class Lo{constructor(e,t){this.query=e,this.dc=t,this._c=null,this.current=!1,this.wc=nn(),this.mutatedKeys=nn(),this.mc=ot(e),this.gc=new To(this.mc)}get yc(){return this.dc}Ic(e,t){const n=t?t.Ec:new Eo,r=t?t.gc:this.gc;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=We(this.query)&&r.size===this.query.limit?r.last():null,c=Qe(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),h=st(this.query,t)?t:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Tc(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.mc(h,a)>0||c&&this.mc(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),We(this.query)||Qe(this.query))for(;s.size>this.query.limit;){const e=We(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{gc:s,Ec:n,ks:o,mutatedKeys:i}}Tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const i=e.Ec.Yo();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */(e.type,t.type)||this.mc(e.doc,t.doc)),this.Ac(n);const s=t?this.Rc():[],o=0===this.wc.size&&this.current?1:0,a=o!==this._c;return this._c=o,0!==i.length||a?{snapshot:new _o(this.query,e.gc,r,i,e.mutatedKeys,0===o,a,!1),Pc:s}:{Pc:s}}tc(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Eo,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach(e=>this.dc=this.dc.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.dc=this.dc.delete(e)),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=nn(),this.gc.forEach(e=>{this.bc(e.key)&&(this.wc=this.wc.add(e.key))});const t=[];return e.forEach(e=>{this.wc.has(e)||t.push(new Po(e))}),this.wc.forEach(n=>{e.has(n)||t.push(new Ro(n))}),t}vc(e){this.dc=e.Ks,this.wc=nn();const t=this.Ic(e.documents);return this.applyChanges(t,!0)}Vc(){return _o.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,0===this._c)}}class Mo{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Uo{constructor(e){this.key=e,this.Sc=!1}}class Fo{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Dc={},this.Cc=new qi(e=>rt(e),nt),this.Nc=new Map,this.xc=new Set,this.kc=new zt(ie.comparator),this.Oc=new Map,this.Mc=new ws,this.$c={},this.Fc=new Map,this.Bc=Oi.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return!0===this.Lc}}async function Vo(e,t){const n=ra(e);let r,i;const s=n.Cc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Vc();else{const e=await fs(n.localStore,et(t));n.isPrimaryClient&&$s(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await jo(n,t,r,"current"===s)}return i}async function jo(e,t,n,r){e.Uc=(t,n,r)=>async function(e,t,n,r){let i=t.view.Ic(n);i.ks&&(i=await gs(e.localStore,t.query,!1).then(({documents:e})=>t.view.Ic(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Xo(e,t.targetId,o.Pc),o.snapshot}(e,t,n,r);const i=await gs(e.localStore,t,!0),s=new Lo(t,i.Ks),o=s.Ic(i.documents),a=an.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);Xo(e,n,c.Pc);const u=new Mo(t,n,s);return e.Cc.set(t,u),e.Nc.has(n)?e.Nc.get(n).push(t):e.Nc.set(n,[t]),c.snapshot}async function Bo(e,t){const n=w(e),r=n.Cc.get(t),i=n.Nc.get(r.targetId);if(i.length>1)return n.Nc.set(r.targetId,i.filter(e=>!nt(e,t))),void n.Cc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ps(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ws(n.remoteStore,r.targetId),Qo(n,r.targetId)}).catch(Li)):(Qo(n,r.targetId),await ps(n.localStore,r.targetId,!0))}async function qo(e,t){const n=w(e);try{const e=await hs(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Oc.get(t);r&&(v(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Sc=!0:e.modifiedDocuments.size>0?v(r.Sc):e.removedDocuments.size>0&&(v(r.Sc),r.Sc=!1))}),await ea(n,e,t)}catch(e){await Li(e)}}function Ko(e,t,n){const r=w(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Cc.forEach((n,r)=>{const i=r.view.tc(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=w(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.listeners)i.tc(t)&&(r=!0)}),r&&xo(n)}(r.eventManager,t),e.length&&r.Dc.To(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function zo(e,t,n){const r=w(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Oc.get(t),s=i&&i.key;if(s){let e=new zt(ie.comparator);e=e.insert(s,be.newNoDocument(s,U.min()));const n=nn().add(s),i=new on(U.min(),new Map,new $t(R),e,n);await qo(r,i),r.kc=r.kc.remove(s),r.Oc.delete(t),Zo(r)}else await ps(r.localStore,t,!1).then(()=>Qo(r,t,n)).catch(Li)}async function Go(e,t){const n=w(e),r=t.batch.batchId;try{const e=await cs(n.localStore,t);Wo(n,r,null),$o(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ea(n,e)}catch(e){await Li(e)}}async function Ho(e,t,n){const r=w(e);try{const e=await function(e,t){const n=w(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.gs.lookupMutationBatch(e,t).next(t=>(v(null!==t),r=t.keys(),n.gs.removeMutationBatch(e,t))).next(()=>n.gs.performConsistencyCheck(e)).next(()=>n.Us.Es(e,r))})}(r.localStore,t);Wo(r,t,n),$o(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ea(r,e)}catch(n){await Li(n)}}function $o(e,t){(e.Fc.get(t)||[]).forEach(e=>{e.resolve()}),e.Fc.delete(t)}function Wo(e,t,n){const r=w(e);let i=r.$c[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.$c[r.currentUser.toKey()]=i}}function Qo(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Nc.get(t))e.Cc.delete(r),n&&e.Dc.qc(r,n);e.Nc.delete(t),e.isPrimaryClient&&e.Mc.si(t).forEach(t=>{e.Mc.containsKey(t)||Jo(e,t)})}function Jo(e,t){e.xc.delete(t.path.canonicalString());const n=e.kc.get(t);null!==n&&(Ws(e.remoteStore,n),e.kc=e.kc.remove(t),e.Oc.delete(n),Zo(e))}function Xo(e,t,n){for(const r of n)r instanceof Ro?(e.Mc.addReference(r.key,t),Yo(e,r)):r instanceof Po?(f("SyncEngine","Document no longer in limbo: "+r.key),e.Mc.removeReference(r.key,t),e.Mc.containsKey(r.key)||Jo(e,r.key)):y()}function Yo(e,t){const n=t.key,r=n.path.canonicalString();e.kc.get(n)||e.xc.has(r)||(f("SyncEngine","New document in limbo: "+n),e.xc.add(r),Zo(e))}function Zo(e){for(;e.xc.size>0&&e.kc.size<e.maxConcurrentLimboResolutions;){const t=e.xc.values().next().value;e.xc.delete(t);const n=new ie(q.fromString(t)),r=e.Bc.next();e.Oc.set(r,new Uo(n)),e.kc=e.kc.insert(n,r),$s(e.remoteStore,new Vr(et($e(n.path)),r,2,O.A))}}async function ea(e,t,n){const r=w(e),i=[],s=[],o=[];r.Cc.isEmpty()||(r.Cc.forEach((e,a)=>{o.push(r.Uc(a,t,n).then(e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=rs.Ss(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.Dc.To(i),await async function(e,t){const n=w(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>_r.forEach(t,t=>_r.forEach(t.vs,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>_r.forEach(t.Vs,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Nr(e))throw e;f("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ms.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ms=n.Ms.insert(e,i)}}}(r.localStore,s))}async function ta(e,t){const n=w(e);if(!n.currentUser.isEqual(t)){f("SyncEngine","User change. New user:",t.toKey());const e=await as(n.localStore,t);n.currentUser=t,function(e,t){e.Fc.forEach(e=>{e.forEach(e=>{e.reject(new I(b.CANCELLED,t))})}),e.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ea(n,e.qs)}}function na(e,t){const n=w(e),r=n.Oc.get(t);if(r&&r.Sc)return nn().add(r.key);{let e=nn();const r=n.Nc.get(t);if(!r)return e;for(const t of r){const r=n.Cc.get(t);e=e.unionWith(r.view.yc)}return e}}function ra(e){const t=w(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=qo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=na.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=zo.bind(null,t),t.Dc.To=No.bind(null,t.eventManager),t.Dc.qc=Oo.bind(null,t.eventManager),t}function ia(e){const t=w(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Go.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ho.bind(null,t),t}class sa{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=Us(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return os(this.persistence,new is,e.initialUser,this.O)}jc(e){return new Ss(Cs.bi,this.O)}Gc(e){return new Ns}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oa extends sa{constructor(e,t,n){super(),this.zc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await ms(this.localStore),await this.zc.initialize(this,e),await ia(this.zc.syncEngine),await oo(this.zc.remoteStore),await this.persistence.Hn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Wc(e){return os(this.persistence,new is,e.initialUser,this.O)}Qc(e){const t=this.persistence.referenceDelegate.garbageCollector;return new Fi(t,e.asyncQueue)}jc(e){const t=ts(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Ti.withCacheSize(this.cacheSizeBytes):Ti.DEFAULT;return new Yi(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Ls(),Ms(),this.O,this.sharedClientState,!!this.forceOwnership)}Gc(e){return new Ns}}class aa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Ko(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ta.bind(null,this.syncEngine),await yo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ko}createDatastore(e){const t=Us(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Ps(r));var r;return function(e,t,n,r){return new qs(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Ko(this.syncEngine,e,0),s=xs.Vt()?new xs:new Os,new zs(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Fo(e,t,n,r,i,s);return o&&(a.Lc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=w(e);f("RemoteStore","RemoteStore shutting down."),t.Ko.add(5),await Hs(t),t.jo.shutdown(),t.Qo.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 * Copyright 2020 Google LLC
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
 * Copyright 2017 Google LLC
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
class ca{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 * Copyright 2017 Google LLC
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
class ua{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=D.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{f("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(f("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Io(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function ha(e,t){e.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await as(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function la(e,t){e.asyncQueue.verifyOperationInProgress();const n=await da(e);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>mo(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>mo(t.remoteStore,n)),e.onlineComponents=t}async function da(e){return e.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await ha(e,new sa)),e.offlineComponents}async function fa(e){return e.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await la(e,new aa)),e.onlineComponents}function pa(e){return da(e).then(e=>e.persistence)}function ga(e){return fa(e).then(e=>e.remoteStore)}async function ma(e){const t=await fa(e),n=t.eventManager;return n.onListen=Vo.bind(null,t.syncEngine),n.onUnlisten=Bo.bind(null,t.syncEngine),n}function ya(e){return e.asyncQueue.enqueue(async()=>{const t=await pa(e),n=await ga(e);return t.setNetworkEnabled(!0),function(e){const t=w(e);return t.Ko.delete(0),Gs(t)}(n)})}function va(e){return e.asyncQueue.enqueue(async()=>{const t=await pa(e),n=await ga(e);return t.setNetworkEnabled(!1),async function(e){const t=w(e);t.Ko.add(0),await Hs(t),t.Qo.set("Offline")}(n)})}function wa(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new ca({next:s=>{t.enqueueAndForget(()=>Ao(e,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new I(b.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new I(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Do($e(n.path),s,{includeMetadataChanges:!0,uc:!0});return Co(e,o)}(await ma(e),e.asyncQueue,t,n,r)),r.promise}const ba=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ia(e,t,n){if(!n)throw new I(b.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ta(e,t,n,r){if(!0===t&&!0===r)throw new I(b.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ea(e){if(!ie.isDocumentKey(e))throw new I(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function _a(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":y()}function Sa(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new I(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_a(e);throw new I(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
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
class ka{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new I(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new I(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Ta("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ca{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ka({}),this._settingsFrozen=!1,e instanceof te?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new I(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new te(e.options.projectId)}(e))}get app(){if(!this._app)throw new I(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new I(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ka(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new _;switch(e.type){case"gapi":const t=e.client;return v(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new C(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new I(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ba.get(e);t&&(f("ComponentProvider","Removing Datastore"),ba.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Aa{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Oa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Aa(this.firestore,e,this._key)}}class Na{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Na(this.firestore,e,this._query)}}class Oa extends Na{constructor(e,t,n){super(e,t,$e(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Aa(this.firestore,null,new ie(e))}withConverter(e){return new Oa(this.firestore,e,this._path)}}function xa(e,t,...n){if(e=Object(o["j"])(e),1===arguments.length&&(t=D.R()),Ia("doc","path",t),e instanceof Ca){const r=q.fromString(t,...n);return Ea(r),new Aa(e,null,new ie(r))}{if(!(e instanceof Aa||e instanceof Oa))throw new I(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(q.fromString(t,...n));return Ea(r),new Aa(e.firestore,e instanceof Oa?e.converter:null,new ie(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Da{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new Fs(this,"async_queue_retry"),this.yu=()=>{const e=Ms();e&&f("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ro.Yr()};const e=Ms();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const t=Ms();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const t=new T;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(0!==this.lu.length){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!Nr(e))throw e;f("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const t=this.hu.then(()=>(this.wu=!0,e().catch(e=>{this._u=e,this.wu=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */(e);throw p("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.wu=!1,e))));return this.hu=t,t}enqueueAfterDelay(e,t,n){this.pu(),this.gu.indexOf(e)>-1&&(t=0);const r=bo.createAndSchedule(this,e,t,n,e=>this.Tu(e));return this.du.push(r),r}pu(){this._u&&y()}verifyOperationInProgress(){}async Au(){let e;do{e=this.hu,await e}while(e!==this.hu)}Ru(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.du)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class Ra extends Ca{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Da,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ma(this),this._firestoreClient.terminate()}}function Pa(e=Object(r["e"])()){return Object(r["b"])(e,"firestore").getImmediate()}function La(e){return e._firestoreClient||Ma(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ma(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new ee(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new ua(e._authCredentials,e._appCheckCredentials,e._queue,r)}function Ua(e,t){Ba(e=Sa(e,Ra));const n=La(e),r=e._freezeSettings(),i=new aa;return Fa(n,i,new oa(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Fa(e,t,n){const r=new T;return e.asyncQueue.enqueue(async()=>{try{await ha(e,n),await la(e,t),r.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===b.FAILED_PRECONDITION||e.code===b.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}}).then(()=>r.promise)}function Va(e){return ya(La(e=Sa(e,Ra)))}function ja(e){return va(La(e=Sa(e,Ra)))}function Ba(e){if(e._initialized||e._terminated)throw new I(b.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
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
 * Copyright 2020 Google LLC
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
 */class qa{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new I(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Ka{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ka(H.fromBase64String(e))}catch(e){throw new I(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Ka(H.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 * Copyright 2017 Google LLC
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
class za{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new I(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new I(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ga=new RegExp("[~\\*/\\[\\]]");function Ha(e,t,n){if(t.search(Ga)>=0)throw $a(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new qa(...t.split("."))._internalPath}catch(r){throw $a(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function $a(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new I(b.INVALID_ARGUMENT,a+e+c)}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Wa{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Aa(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Qa(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ja("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Qa extends Wa{data(){return super.data()}}function Ja(e,t){return"string"==typeof t?Ha(e,t):t instanceof qa?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Xa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ya extends Wa{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Za(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ja("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Za extends Ya{data(e={}){return super.data(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
class ec{convertValue(e,t="none"){switch(oe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Q(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(J(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw y()}}convertObject(e,t){const n={};return V(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new za(Q(e.latitude),Q(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Y(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Z(e));default:return null}}convertTimestamp(e){const t=W(e);return new M(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=q.fromString(e);v(Wn(n));const r=new te(n.get(1),n.get(3)),i=new ie(n.popFirst(5));return r.isEqual(t)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 * Copyright 2020 Google LLC
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
 * Copyright 2020 Google LLC
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
function tc(e){e=Sa(e,Aa);const t=Sa(e.firestore,Ra);return wa(La(t),e._key).then(n=>rc(t,e,n))}class nc extends ec{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ka(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Aa(this.firestore,null,t)}}function rc(e,t,n){const r=n.docs.get(t._key),i=new nc(e);return new Ya(e,i,t._key,r,new Xa(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */!function(e,t=!0){!function(e){h=e}(r["a"]),Object(r["c"])(new i["a"]("firestore",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new Ra(r,new S(e.getProvider("auth-internal")),new N(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i},"PUBLIC")),Object(r["h"])(c,"3.4.5",e),Object(r["h"])(c,"3.4.5","esm2017")}()}).call(this,n("4362"))},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var o=e.apply(t,n);function a(e){r(o,i,s,a,c,"next",e)}function c(e){r(o,i,s,a,c,"throw",e)}a(void 0)}))}}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return R})),n.d(t,"h",(function(){return A})),n.d(t,"i",(function(){return D})),n.d(t,"j",(function(){return U})),n.d(t,"k",(function(){return l})),n.d(t,"l",(function(){return p})),n.d(t,"m",(function(){return m})),n.d(t,"n",(function(){return C})),n.d(t,"o",(function(){return y})),n.d(t,"p",(function(){return b})),n.d(t,"q",(function(){return d})),n.d(t,"r",(function(){return g})),n.d(t,"s",(function(){return w})),n.d(t,"t",(function(){return v})),n.d(t,"u",(function(){return O})),n.d(t,"v",(function(){return x})),n.d(t,"w",(function(){return I}));
/**
 * @license
 * Copyright 2017 Google LLC
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
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,h=(3&t)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,h=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==h)throw Error();const l=t<<2|o>>4;if(r.push(l),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==h){const e=c<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
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
 * Copyright 2017 Google LLC
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
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */function h(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function f(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function p(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function g(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function m(){return l().indexOf("Electron/")>=0}function y(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function v(){return l().indexOf("MSAppHost/")>=0}function w(){return!f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function b(){return"object"===typeof indexedDB}function I(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
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
const T="FirebaseError";class E extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=T,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?S(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new E(r,o,n);return a}}function S(e,t){return e.replace(k,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const k=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function C(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function A(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(N(n)&&N(s)){if(!A(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function N(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function O(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function x(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function D(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function R(e,t){const n=new P(e,t);return n.subscribe.bind(n)}class P{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=L(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=M),void 0===r.error&&(r.error=M),void 0===r.complete&&(r.complete=M);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function M(){}
/**
 * @license
 * Copyright 2017 Google LLC
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
 * Copyright 2021 Google LLC
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
function U(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return W})),n.d(t,"b",(function(){return K})),n.d(t,"c",(function(){return q})),n.d(t,"d",(function(){return z})),n.d(t,"e",(function(){return J})),n.d(t,"f",(function(){return X})),n.d(t,"g",(function(){return Q})),n.d(t,"h",(function(){return Y}));var r=n("22e5"),i=n("e691"),s=n("1fd5"),o=n("9dbb");
/**
 * @license
 * Copyright 2019 Google LLC
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
class a{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(c(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function c(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const u="@firebase/app",h="0.7.18",l=new i["b"]("@firebase/app"),d="@firebase/app-compat",f="@firebase/analytics-compat",p="@firebase/analytics",g="@firebase/app-check-compat",m="@firebase/app-check",y="@firebase/auth",v="@firebase/auth-compat",w="@firebase/database",b="@firebase/database-compat",I="@firebase/functions",T="@firebase/functions-compat",E="@firebase/installations",_="@firebase/installations-compat",S="@firebase/messaging",k="@firebase/messaging-compat",C="@firebase/performance",A="@firebase/performance-compat",N="@firebase/remote-config",O="@firebase/remote-config-compat",x="@firebase/storage",D="@firebase/storage-compat",R="@firebase/firestore",P="@firebase/firestore-compat",L="firebase",M="9.6.8",U="[DEFAULT]",F={[u]:"fire-core",[d]:"fire-core-compat",[p]:"fire-analytics",[f]:"fire-analytics-compat",[m]:"fire-app-check",[g]:"fire-app-check-compat",[y]:"fire-auth",[v]:"fire-auth-compat",[w]:"fire-rtdb",[b]:"fire-rtdb-compat",[I]:"fire-fn",[T]:"fire-fn-compat",[E]:"fire-iid",[_]:"fire-iid-compat",[S]:"fire-fcm",[k]:"fire-fcm-compat",[C]:"fire-perf",[A]:"fire-perf-compat",[N]:"fire-rc",[O]:"fire-rc-compat",[x]:"fire-gcs",[D]:"fire-gcs-compat",[R]:"fire-fst",[P]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},V=new Map,j=new Map;function B(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function q(e){const t=e.name;if(j.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;j.set(t,e);for(const n of V.values())B(n,e);return!0}function K(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function z(e,t,n=U){K(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
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
const G={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},H=new s["b"]("app","Firebase",G);
/**
 * @license
 * Copyright 2019 Google LLC
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
class ${constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */const W=M;function Q(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:U,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw H.create("bad-app-name",{appName:String(i)});const o=V.get(i);if(o){if(Object(s["h"])(e,o.options)&&Object(s["h"])(n,o.config))return o;throw H.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of j.values())a.addComponent(r);const c=new $(e,n,a);return V.set(i,c),c}function J(e=U){const t=V.get(e);if(!t)throw H.create("no-app",{appName:e});return t}function X(){return Array.from(V.values())}function Y(e,t,n){var i;let s=null!==(i=F[e])&&void 0!==i?i:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}q(new r["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
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
const Z="firebase-heartbeat-database",ee=1,te="firebase-heartbeat-store";let ne=null;function re(){return ne||(ne=Object(o["openDb"])(Z,ee,e=>{switch(e.oldVersion){case 0:e.createObjectStore(te)}}).catch(e=>{throw H.create("storage-open",{originalErrorMessage:e.message})})),ne}async function ie(e){try{const t=await re();return t.transaction(te).objectStore(te).get(ae(e))}catch(t){throw H.create("storage-get",{originalErrorMessage:t.message})}}async function se(e,t){try{const n=await re(),r=n.transaction(te,"readwrite"),i=r.objectStore(te);return await i.put(t,ae(e)),r.complete}catch(n){throw H.create("storage-set",{originalErrorMessage:n.message})}}async function oe(e){try{const t=await re(),n=t.transaction(te,"readwrite");return await n.objectStore(te).delete(ae(e)),n.complete}catch(t){throw H.create("storage-delete",{originalErrorMessage:t.message})}}function ae(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */const ce=1024,ue=2592e6;class he{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fe(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=le();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(e=>e.date===n))return this._heartbeatsCache.push({date:n,userAgent:t}),this._heartbeatsCache=this._heartbeatsCache.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=ue}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache)return"";const{heartbeatsToSend:e,unsentEntries:t}=de(this._heartbeatsCache),n=Object(s["e"])(JSON.stringify({version:2,heartbeats:e}));return t.length>0?(this._heartbeatsCache=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),n}}function le(){const e=new Date;return e.toISOString().substring(0,10)}function de(e,t=ce){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.userAgent===i.userAgent);if(e){if(e.dates.push(i.date),pe(n)>t){e.dates.pop();break}}else if(n.push({userAgent:i.userAgent,dates:[i.date]}),pe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s["p"])()&&Object(s["w"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ie(this.app);return(null===e||void 0===e?void 0:e.heartbeats)||[]}return[]}async overwrite(e){const t=await this._canUseIndexedDBPromise;return t?se(this.app,{heartbeats:e}):void 0}async add(e){const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return se(this.app,{heartbeats:[...t,...e]})}}async delete(e){const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return se(this.app,{heartbeats:t.filter(t=>!e.includes(t))})}}async deleteAll(){const e=await this._canUseIndexedDBPromise;return e?oe(this.app):void 0}}function pe(e){return Object(s["e"])(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function ge(e){q(new r["a"]("platform-logger",e=>new a(e),"PRIVATE")),q(new r["a"]("heartbeat",e=>new he(e),"PRIVATE")),Y(u,h,e),Y(u,h,"esm2017"),Y("fire-js","")}ge("")},"6e3c":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return h}));var r=n("589b"),i="firebase",s="9.6.8";
/**
 * @license
 * Copyright 2020 Google LLC
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
Object(r["h"])(i,s,"app");var o=n("e71f"),a=n("ea7b"),c={apiKey:"AIzaSyDZruBaWmxzFprY3cC6Uew7iCKeZQ-XQ5s",authDomain:"stock-data-5b61e.firebaseapp.com",projectId:"stock-data-5b61e"};0===Object(r["f"])().length?Object(r["g"])(c):Object(r["e"])();var u=Object(o["f"])(),h=Object(a["b"])();Object(o["c"])(u).catch((function(e){"failed-precondition"==e.code||e.code}))},"8f6b":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Ar})),n.d(t,"b",(function(){return Or})),n.d(t,"c",(function(){return Nr})),n.d(t,"d",(function(){return Dr})),n.d(t,"e",(function(){return xr})),n.d(t,"f",(function(){return Rr})),n.d(t,"g",(function(){return Pr})),n.d(t,"h",(function(){return kr})),n.d(t,"i",(function(){return Cr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function h(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function l(e){return Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function g(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function m(e,t,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function y(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function v(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function w(){this.s=this.s,this.o=this.o}var b=0,I={};w.prototype.s=!1,w.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=b)){var e=l(this);delete I[e]}},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},E=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function _(e){e:{var t=qn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function S(e){return Array.prototype.concat.apply([],arguments)}function k(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function C(e){return/^[\s\xa0]*$/.test(e)}var A,N=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function O(e,t){return-1!=e.indexOf(t)}function x(e,t){return e<t?-1:e>t?1:0}e:{var D=a.navigator;if(D){var R=D.userAgent;if(R){A=R;break e}}A=""}function P(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function L(e){const t={};for(const n in e)t[n]=e[n];return t}var M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function U(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<M.length;t++)n=M[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function F(e){return F[" "](e),e}function V(e){var t=Y;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}F[" "]=c;var j,B=O(A,"Opera"),q=O(A,"Trident")||O(A,"MSIE"),K=O(A,"Edge"),z=K||q,G=O(A,"Gecko")&&!(O(A.toLowerCase(),"webkit")&&!O(A,"Edge"))&&!(O(A,"Trident")||O(A,"MSIE"))&&!O(A,"Edge"),H=O(A.toLowerCase(),"webkit")&&!O(A,"Edge");function $(){var e=a.document;return e?e.documentMode:void 0}e:{var W="",Q=function(){var e=A;return G?/rv:([^\);]+)(\)|;)/.exec(e):K?/Edge\/([\d\.]+)/.exec(e):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):H?/WebKit\/(\S+)/.exec(e):B?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Q&&(W=Q?Q[1]:""),q){var J=$();if(null!=J&&J>parseFloat(W)){j=String(J);break e}}j=W}var X,Y={};function Z(){return V((function(){let e=0;const t=N(String(j)).split("."),n=N("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=x(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||x(0==i[2].length,0==s[2].length)||x(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(a.document&&q){var ee=$();X=ee||(parseInt(j,10)||void 0)}else X=void 0;var te=X,ne=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",c,t),a.removeEventListener("test",c,t)}catch(n){}return e}();function re(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ie(e,t){if(re.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(G){e:{try{F(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:se[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ie.Z.h.call(this)}}re.prototype.h=function(){this.defaultPrevented=!0},v(ie,re);var se={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),ae=0;function ce(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++ae,this.ca=this.fa=!1}function ue(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function he(e){this.src=e,this.g={},this.h=0}function le(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=T(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ue(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}he.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=de(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new ce(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function ge(e,t,n,r,i){if(r&&r.once)return ve(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ge(e,t[s],n,r,i);return null}return n=Se(n),e&&e[oe]?e.N(t,n,h(r)?!!r.capture:!!r,i):me(e,t,n,!1,r,i)}function me(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=h(i)?!!i.capture:!!i,a=Ee(e);if(a||(e[fe]=a=new he(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ye(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ne||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ie(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ye(){function e(n){return t.call(e.src,e.listener,n)}var t=Te;return e}function ve(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ve(e,t[s],n,r,i);return null}return n=Se(n),e&&e[oe]?e.O(t,n,h(r)?!!r.capture:!!r,i):me(e,t,n,!0,r,i)}function we(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)we(e,t[s],n,r,i);else r=h(r)?!!r.capture:!!r,n=Se(n),e&&e[oe]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=de(s,n,r,i),-1<n&&(ue(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ee(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,r,i)),(n=-1<e?t[e]:null)&&be(n))}function be(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[oe])le(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ie(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ee(t))?(le(n,e),0==n.h&&(n.src=null,t[fe]=null)):ue(e)}}}function Ie(e){return e in pe?pe[e]:pe[e]="on"+e}function Te(e,t){if(e.ca)e=!0;else{t=new ie(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&be(e),e=n.call(r,t)}return e}function Ee(e){return e=e[fe],e instanceof he?e:null}var _e="__closure_events_fn_"+(1e9*Math.random()>>>0);function Se(e){return"function"===typeof e?e:(e[_e]||(e[_e]=function(t){return e.handleEvent(t)}),e[_e])}function ke(){w.call(this),this.i=new he(this),this.P=this,this.I=null}function Ce(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new re(t,e);else if(t instanceof re)t.target=t.target||e;else{var i=t;t=new re(r,e),U(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ae(o,r,!0,t)&&i}if(o=t.g=e,i=Ae(o,r,!0,t)&&i,i=Ae(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ae(o,r,!1,t)&&i}function Ae(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&le(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(ke,w),ke.prototype[oe]=!0,ke.prototype.removeEventListener=function(e,t,n,r){we(this,e,t,n,r)},ke.prototype.M=function(){if(ke.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ue(n[r]);delete t.g[e],t.h--}}this.I=null},ke.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ke.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ne=a.JSON.stringify;function Oe(){var e=Ve;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class xe{constructor(){this.h=this.g=null}add(e,t){const n=Re.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var De,Re=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Pe,e=>e.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Le(e){a.setTimeout(()=>{throw e},0)}function Me(e,t){De||Ue(),Fe||(De(),Fe=!0),Ve.add(e,t)}function Ue(){var e=a.Promise.resolve(void 0);De=function(){e.then(je)}}var Fe=!1,Ve=new xe;function je(){for(var e;e=Oe();){try{e.h.call(e.g)}catch(n){Le(n)}var t=Re;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1}function Be(e,t){ke.call(this),this.h=e||1,this.g=t||a,this.j=m(this.kb,this),this.l=Date.now()}function qe(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Ke(e,t,n){if("function"===typeof e)n&&(e=m(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=m(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function ze(e){e.g=Ke(()=>{e.g=null,e.i&&(e.i=!1,ze(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}v(Be,ke),r=Be.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ce(this,"tick"),this.da&&(qe(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Be.Z.M.call(this),qe(this),delete this.g};class Ge extends w{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ze(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(e){w.call(this),this.h=e,this.g={}}v(He,w);var $e=[];function We(e,t,n,r){Array.isArray(n)||(n&&($e[0]=n.toString()),n=$e);for(var i=0;i<n.length;i++){var s=ge(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Qe(e){P(e.g,(function(e,t){this.g.hasOwnProperty(t)&&be(e)}),e),e.g={}}function Je(){this.g=!0}function Xe(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Ye(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(r?" "+r:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ne(n)}catch(a){return t}}He.prototype.M=function(){He.Z.M.call(this),Qe(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Je.prototype.Aa=function(){this.g=!1},Je.prototype.info=function(){};var nt={},rt=null;function it(){return rt=rt||new ke}function st(e){re.call(this,nt.Ma,e)}function ot(e){const t=it();Ce(t,new st(t,e))}function at(e,t){re.call(this,nt.STAT_EVENT,e),this.stat=t}function ct(e){const t=it();Ce(t,new at(t,e))}function ut(e,t){re.call(this,nt.Na,e),this.size=t}function ht(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}nt.Ma="serverreachability",v(st,re),nt.STAT_EVENT="statevent",v(at,re),nt.Na="timingevent",v(ut,re);var lt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},dt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function gt(){}ft.prototype.h=null;var mt,yt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function vt(){re.call(this,"d")}function wt(){re.call(this,"c")}function bt(){}function It(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new He(this),this.P=Et,e=z?125:void 0,this.W=new Be(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Tt}function Tt(){this.i=null,this.g="",this.h=!1}v(vt,re),v(wt,re),v(bt,ft),bt.prototype.g=function(){return new XMLHttpRequest},bt.prototype.i=function(){return{}},mt=new bt;var Et=45e3,_t={},St={};function kt(e,t,n){e.K=1,e.v=Xt(Gt(t)),e.s=n,e.U=!0,Ct(e,null)}function Ct(e,t){e.F=Date.now(),xt(e),e.A=Gt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Tt,e.g=wr(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Ge(m(e.Ia,e,e.g),e.O)),We(e.V,e.g,"readystatechange",e.gb),t=e.H?L(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ot(1),Xe(e.j,e.u,e.A,e.m,e.X,e.s)}function At(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Nt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Ot(e,n),r==St){4==t&&(e.o=4,ct(14),i=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==_t){e.o=4,ct(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ze(e.j,e.m,r,null),Mt(e,r)}At(e)&&r!=St&&r!=_t&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ct(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),lr(t),t.L=!0,ct(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Lt(e),Pt(e))}function Ot(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?St:(n=Number(t.substring(n,r)),isNaN(n)?_t:(r+=1,r+n>t.length?St:(t=t.substr(r,n),e.C=r+n,t)))}function xt(e){e.Y=Date.now()+e.P,Dt(e,e.P)}function Dt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ht(m(e.eb,e),t)}function Rt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function Pt(e){0==e.l.G||e.I||pr(e.l,e)}function Lt(e){Rt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,qe(e.W),Qe(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Mt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||In(n.i,e)))if(n.I=e.N,!e.J&&In(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;fr(n),tr(n)}hr(n),ct(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=ht(m(n.ab,n),6e3));if(1>=bn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mr(n,11)}else if((e.J||n.g==e)&&fr(n),!C(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(r=1.5*h,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=e.g;if(l){const e=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(O(e,"spdy")||O(e,"quic")||O(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Tn(s,s.h),s.h=null))}if(r.D){const e=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Jt(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=vr(r,r.H?r.la:null,r.W),o.J){En(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Rt(a),xt(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mr(n,7):er(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ot(4)}catch(u){}}function Ut(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ft(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"===typeof e)E(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(u(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=Ut(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Vt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Vt)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function jt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Bt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],Bt(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Bt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=It.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Wn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const l=Wn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>l)&&(3!=l||z||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=l||7==t||ot(8==t||0>=d?3:2),Rt(this);var n=this.g.ba();this.N=n;t:if(At(this)){var r=Qn(this.g);e="";var i=r.length,s=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Lt(this),Pt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Ye(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(c)){var h=c;break t}}h=null}if(!(n=h)){this.i=!1,this.o=3,ct(12),Lt(this),Pt(this);break e}Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Mt(this,n)}this.U?(Nt(this,l,o),z&&this.i&&3==l&&(We(this.V,this.W,"tick",this.fb),this.W.start())):(Ze(this.j,this.m,o,null),Mt(this,o)),4==l&&Lt(this),this.i&&!this.I&&(4==l?pr(this.l,this):(this.i=!1,xt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Lt(this),Pt(this)}}}catch(l){}},r.fb=function(){if(this.g){var e=Wn(this.g),t=this.g.ga();this.C<t.length&&(Rt(this),Nt(this,e,t),this.i&&4!=e&&xt(this))}},r.cancel=function(){this.I=!0,Lt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(et(this.j,this.A),2!=this.K&&(ot(3),ct(17)),Lt(this),this.o=2,Pt(this)):Dt(this,this.Y-e)},r=Vt.prototype,r.R=function(){jt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return jt(this),this.g.concat()},r.get=function(e,t){return Bt(this.h,e)?this.h[e]:t},r.set=function(e,t){Bt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var qt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Kt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function zt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof zt){this.g=void 0!==t?t:e.g,Ht(this,e.j),this.s=e.s,$t(this,e.i),Wt(this,e.m),this.l=e.l,t=e.h;var n=new un;n.i=t.i,t.g&&(n.g=new Vt(t.g),n.h=t.h),Qt(this,n),this.o=e.o}else e&&(n=String(e).match(qt))?(this.g=!!t,Ht(this,n[1]||"",!0),this.s=en(n[2]||""),$t(this,n[3]||"",!0),Wt(this,n[4]),this.l=en(n[5]||"",!0),Qt(this,n[6]||"",!0),this.o=en(n[7]||"")):(this.g=!!t,this.h=new un(null,this.g))}function Gt(e){return new zt(e)}function Ht(e,t,n){e.j=n?en(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function $t(e,t,n){e.i=n?en(t,!0):t}function Wt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Qt(e,t,n){t instanceof un?(e.h=t,gn(e.h,e.g)):(n||(t=tn(t,an)),e.h=new un(t,e.g))}function Jt(e,t,n){e.h.set(t,n)}function Xt(e){return Jt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Yt(e){return e instanceof zt?Gt(e):new zt(e,void 0)}function Zt(e,t,n,r){var i=new zt(null,void 0);return e&&Ht(i,e),t&&$t(i,t),n&&Wt(i,n),r&&(i.l=r),i}function en(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tn(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,nn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}zt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tn(t,rn,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tn(t,rn,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(tn(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tn(n,cn)),e.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function hn(e){e.g||(e.g=new Vt,e.h=0,e.i&&Kt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function ln(e,t){hn(e),t=pn(e,t),Bt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Bt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&jt(e)))}function dn(e,t){return hn(e),t=pn(e,t),Bt(e.g.h,t)}function fn(e,t,n){ln(e,t),0<n.length&&(e.i=null,e.g.set(pn(e,t),k(n)),e.h+=n.length)}function pn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function gn(e,t){t&&!e.j&&(hn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(ln(this,t),fn(this,n,e))}),e)),e.j=t}r=un.prototype,r.add=function(e,t){hn(this),this.i=null,e=pn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){hn(this),this.g.forEach((function(n,r){E(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){hn(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){hn(this);var t=[];if("string"===typeof e)dn(this,e)&&(t=S(t,this.g.get(pn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=S(t,e[n])}return t},r.set=function(e,t){return hn(this),this.i=null,e=pn(this,e),dn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var mn=class{constructor(e,t){this.h=e,this.g=t}};function yn(e){this.l=e||vn,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vn=10;function wn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function bn(e){return e.h?1:e.g?e.g.size:0}function In(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Tn(e,t){e.g?e.g.add(t):e.h=t}function En(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function _n(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return k(e.i)}function Sn(){}function kn(){this.g=new Sn}function Cn(e,t,n){const r=n||"";try{Ft(e,(function(e,n){let i=e;h(e)&&(i=Ne(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function An(e,t){const n=new Je;if(a.Image){const r=new Image;r.onload=y(Nn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=y(Nn,n,r,"TestLoadImage: error",!1,t),r.onabort=y(Nn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=y(Nn,n,r,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Nn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function On(e){this.l=e.$b||null,this.j=e.ib||!1}function xn(e,t){ke.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Dn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=_n(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Sn.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},Sn.prototype.parse=function(e){return a.JSON.parse(e,void 0)},v(On,ft),On.prototype.g=function(){return new xn(this.l,this.j)},On.prototype.i=function(e){return function(){return e}}({}),v(xn,ke);var Dn=0;function Rn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Pn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ln(e)}function Ln(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=xn.prototype,r.open=function(e,t){if(this.readyState!=Dn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ln(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Pn(this)),this.readyState=Dn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Pn(this):Ln(this),3==this.readyState&&Rn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,Pn(this))},r.Ta=function(e){this.g&&(this.response=e,Pn(this))},r.ha=function(){this.g&&Pn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Mn=a.JSON.parse;function Un(e){ke.call(this),this.headers=new Vt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}v(Un,ke);var Fn="",Vn=/^https?$/i,jn=["POST","PUT"];function Bn(e){return q&&Z()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function qn(e){return"content-type"==e.toLowerCase()}function Kn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,zn(e),Hn(e)}function zn(e){e.D||(e.D=!0,Ce(e,"complete"),Ce(e,"error"))}function Gn(e){if(e.h&&"undefined"!=typeof o&&(!e.C[1]||4!=Wn(e)||2!=e.ba()))if(e.v&&4==Wn(e))Ke(e.Fa,0,e);else if(Ce(e,"readystatechange"),4==Wn(e)){e.h=!1;try{const o=e.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.H).match(qt)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Vn.test(i?i.toLowerCase():"")}n=r}if(n)Ce(e,"complete"),Ce(e,"success");else{e.m=6;try{var c=2<Wn(e)?e.g.statusText:""}catch(u){c=""}e.j=c+" ["+e.ba()+"]",zn(e)}}finally{Hn(e)}}}function Hn(e,t){if(e.g){$n(e);const r=e.g,i=e.C[0]?c:null;e.g=null,e.C=null,t||Ce(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function $n(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function Wn(e){return e.g?e.g.readyState:0}function Qn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Fn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Jn(e){let t="";return P(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Xn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Jn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Jt(e,t,n))}function Yn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zn(e){this.za=0,this.l=[],this.h=new Je,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Yn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Yn("baseRetryDelayMs",5e3,e),this.$a=Yn("retryDelaySeedMs",1e4,e),this.Ya=Yn("forwardChannelMaxRetries",2,e),this.ra=Yn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(e&&e.concurrentRequestLimit),this.Ca=new kn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function er(e){if(nr(e),3==e.G){var t=e.V++,n=Gt(e.F);Jt(n,"SID",e.J),Jt(n,"RID",t),Jt(n,"TYPE","terminate"),ar(e,n),t=new It(e,e.h,t,void 0),t.K=2,t.v=Xt(Gt(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=wr(t.l,null),t.g.ea(t.v)),t.F=Date.now(),xt(t)}yr(e)}function tr(e){e.g&&(lr(e),e.g.cancel(),e.g=null)}function nr(e){tr(e),e.u&&(a.clearTimeout(e.u),e.u=null),fr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&a.clearTimeout(e.m),e.m=null)}function rr(e,t){e.l.push(new mn(e.Za++,t)),3==e.G&&ir(e)}function ir(e){wn(e.i)||e.m||(e.m=!0,Me(e.Ha,e),e.C=0)}function sr(e,t){return!(bn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=ht(m(e.Ha,e,t),gr(e,e.C)),e.C++,!0))}function or(e,t){var n;n=t?t.m:e.V++;const r=Gt(e.F);Jt(r,"SID",e.J),Jt(r,"RID",n),Jt(r,"AID",e.U),ar(e,r),e.o&&e.s&&Xn(r,e.o,e.s),n=new It(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=cr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Tn(e.i,n),kt(n,r,t)}function ar(e,t){e.j&&Ft({},(function(e,n){Jt(t,n,e)}))}function cr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?m(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),o=!1;else try{Cn(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function ur(e){e.g||e.u||(e.Y=1,Me(e.Ga,e),e.A=0)}function hr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=ht(m(e.Ga,e),gr(e,e.A)),e.A++,!0)}function lr(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function dr(e){e.g=new It(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Gt(e.oa);Jt(t,"RID","rpc"),Jt(t,"SID",e.J),Jt(t,"CI",e.N?"0":"1"),Jt(t,"AID",e.U),ar(e,t),Jt(t,"TYPE","xmlhttp"),e.o&&e.s&&Xn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Xt(Gt(t)),n.s=null,n.U=!0,Ct(n,e)}function fr(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function pr(e,t){var n=null;if(e.g==t){fr(e),lr(e),e.g=null;var r=2}else{if(!In(e.i,t))return;n=t.D,En(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=it(),Ce(r,new ut(r,n,t,i)),ir(e)}else ur(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&sr(e,t)||2==r&&hr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:mr(e,5);break;case 4:mr(e,10);break;case 3:mr(e,6);break;default:mr(e,2)}}function gr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function mr(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=m(e.jb,e);n||(n=new zt("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ht(n,"https"),Xt(n)),An(n.toString(),r)}else ct(2);e.G=0,e.j&&e.j.va(t),yr(e),nr(e)}function yr(e){e.G=0,e.I=-1,e.j&&(0==_n(e.i).length&&0==e.l.length||(e.i.i.length=0,k(e.l),e.l.length=0),e.j.ua())}function vr(e,t,n){let r=Yt(n);if(""!=r.i)t&&$t(r,t+"."+r.i),Wt(r,r.m);else{const e=a.location;r=Zt(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&P(e.aa,(function(e,t){Jt(r,t,e)})),t=e.D,n=e.sa,t&&n&&Jt(r,t,n),Jt(r,"VER",e.ma),ar(e,r),r}function wr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Un(new On({ib:!0})):new Un(e.qa),t.L=e.H,t}function br(){}function Ir(){if(q&&!(10<=Number(te)))throw Error("Environmental error: no available transport.")}function Tr(e,t){ke.call(this),this.g=new Zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!C(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!C(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Sr(this)}function Er(e){vt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function _r(){wt.call(this),this.status=1}function Sr(e){this.g=e}r=Un.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mt.g(),this.C=this.u?pt(this.u):pt(mt),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Kn(this,s)}e=n||"";const i=new Vt(this.headers);r&&Ft(r,(function(e,t){i.set(t,e)})),r=_(i.T()),n=a.FormData&&e instanceof a.FormData,!(0<=T(jn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$n(this),0<this.B&&((this.K=Bn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Ke(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Kn(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ce(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ce(this,"complete"),Ce(this,"abort"),Hn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hn(this,!0)),Un.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Gn(this):this.cb())},r.cb=function(){Gn(this)},r.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Mn(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new It(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=L(s),U(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=cr(this,i,t),n=Gt(this.F),Jt(n,"RID",e),Jt(n,"CVER",22),this.D&&Jt(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Xn(n,this.o,s),Tn(this.i,i),this.Ra&&Jt(n,"TYPE","init"),this.ja?(Jt(n,"$req",t),Jt(n,"SID","null"),i.$=!0,kt(i,n,null)):kt(i,n,t),this.G=2}}else 3==this.G&&(e?or(this,e):0==this.l.length||wn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=ht(m(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ct(10),tr(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,tr(this),hr(this),ct(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ct(2)):(this.h.info("Failed to ping google.com"),ct(1))},r=br.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Ir.prototype.g=function(e,t){return new Tr(e,t)},v(Tr,ke),Tr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Me(m(e.hb,e,t))),ct(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=vr(e,null,e.W),ir(e)},Tr.prototype.close=function(){er(this.g)},Tr.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,rr(this.g,t)}else this.v?(t={},t.__data__=Ne(e),rr(this.g,t)):rr(this.g,e)},Tr.prototype.M=function(){this.g.j=null,delete this.j,er(this.g),delete this.g,Tr.Z.M.call(this)},v(Er,vt),v(_r,wt),v(Sr,br),Sr.prototype.xa=function(){Ce(this.g,"a")},Sr.prototype.wa=function(e){Ce(this.g,new Er(e))},Sr.prototype.va=function(e){Ce(this.g,new _r(e))},Sr.prototype.ua=function(){Ce(this.g,"b")},Ir.prototype.createWebChannel=Ir.prototype.g,Tr.prototype.send=Tr.prototype.u,Tr.prototype.open=Tr.prototype.m,Tr.prototype.close=Tr.prototype.close,lt.NO_ERROR=0,lt.TIMEOUT=8,lt.HTTP_ERROR=6,dt.COMPLETE="complete",gt.EventType=yt,yt.OPEN="a",yt.CLOSE="b",yt.ERROR="c",yt.MESSAGE="d",ke.prototype.listen=ke.prototype.N,Un.prototype.listenOnce=Un.prototype.O,Un.prototype.getLastError=Un.prototype.La,Un.prototype.getLastErrorCode=Un.prototype.Da,Un.prototype.getStatus=Un.prototype.ba,Un.prototype.getResponseJson=Un.prototype.Qa,Un.prototype.getResponseText=Un.prototype.ga,Un.prototype.send=Un.prototype.ea;var kr=s.createWebChannelTransport=function(){return new Ir},Cr=s.getStatEventTarget=function(){return it()},Ar=s.ErrorCode=lt,Nr=s.EventType=dt,Or=s.Event=nt,xr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Dr=s.FetchXmlHttpFactory=On,Rr=s.WebChannel=gt,Pr=s.XhrIo=Un}).call(this,n("c8ba"))},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(D){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,s=Object.create(i.prototype),o=new N(r||[]);return s._invoke=S(e,n,o),s}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(D){return{type:"throw",arg:D}}}e.wrap=u;var l="suspendedStart",d="suspendedYield",f="executing",p="completed",g={};function m(){}function y(){}function v(){}var w={};w[s]=function(){return this};var b=Object.getPrototypeOf,I=b&&b(b(O([])));I&&I!==n&&r.call(I,s)&&(w=I);var T=v.prototype=m.prototype=Object.create(w);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function n(i,s,o,a){var c=h(e[i],e,s);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"===typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,o,a)}),(function(e){n("throw",e,o,a)})):t.resolve(l).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,a)}))}a(c.arg)}var i;function s(e,r){function s(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(s,s):s()}this._invoke=s}function S(e,t,n){var r=l;return function(i,s){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw s;return x()}n.method=i,n.arg=s;while(1){var o=n.delegate;if(o){var a=k(o,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=h(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function k(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=h(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var s=i.arg;return s?s.done?(n[e.resultName]=s.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function O(e){if(e){var n=e[s];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:x}}function x(){return{value:t,done:!0}}return y.prototype=T.constructor=v,v.constructor=y,y.displayName=c(v,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,a,"GeneratorFunction")),e.prototype=Object.create(T),e},e.awrap=function(e){return{__await:e}},E(_.prototype),_.prototype[o]=function(){return this},e.AsyncIterator=_,e.async=function(t,n,r,i,s){void 0===s&&(s=Promise);var o=new _(u(t,n,r,i),s);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(T),c(T,a,"Generator"),T[s]=function(){return this},T.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=e,o.arg=t,s?(this.method="next",this.next=s.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:O(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},"9dbb":function(e,t,n){(function(e,n){n(t)})(0,(function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,s=new Promise((function(s,o){i=e[t].apply(e,r),n(i).then(s,o)}));return s.request=i,s}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new h(e,i.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function o(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function a(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function c(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function u(e){this._index=e}function h(e,t){this._cursor=e,this._request=t}function l(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}function g(e,t,n){var i=r(indexedDB,"open",[e,t]),s=i.request;return s&&(s.onupgradeneeded=function(e){n&&n(new f(s.result,e.oldVersion,s.transaction))}),i.then((function(e){return new p(e)}))}function m(e){return r(indexedDB,"deleteDatabase",[e])}s(u,"_index",["name","keyPath","multiEntry","unique"]),o(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(h,"_cursor",["direction","key","primaryKey","value"]),o(h,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(h.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new h(e,t._request)}))}))})})),l.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},s(l,"_store",["name","keyPath","indexNames","autoIncrement"]),o(l,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(l,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(l,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new l(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new l(this._db.createObjectStore.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[l,u].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,s=i[e].apply(i,n.slice(0,-1));s.onsuccess=function(){r(s.result)}})}))})),[u,l].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=g,e.deleteDb=m,Object.defineProperty(e,"__esModule",{value:!0})}))},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r="/"===o.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),o="/"===s(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!i){n=o+1;break}}return-1===t||-1===r||0===s||1===s&&t===r-1&&t===n+1?"":e.slice(t,r)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return l}));
/**
 * @license
 * Copyright 2017 Google LLC
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
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function h(e){r.forEach(t=>{t.setLogLevel(e)})}function l(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},e71f:function(e,t,n){"use strict";var r=n("0829");n.d(t,"a",(function(){return r["a"]})),n.d(t,"b",(function(){return r["b"]})),n.d(t,"c",(function(){return r["c"]})),n.d(t,"d",(function(){return r["d"]})),n.d(t,"e",(function(){return r["e"]})),n.d(t,"f",(function(){return r["f"]}))},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return at})),n.d(t,"b",(function(){return ar})),n.d(t,"c",(function(){return ct})),n.d(t,"d",(function(){return ut}));var r=n("1fd5"),i=n("589b");function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,h=new r["b"]("auth","Firebase",c()),l=new o["b"]("@firebase/auth");function d(e,...t){l.logLevel<=o["a"].ERROR&&l.error(`Auth (${i["a"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function f(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function g(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),s=new r["b"]("auth","Firebase",i);return s.create(t,{appName:e.name})}function m(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return h.create(e,...t)}function y(e,t,...n){if(!e)throw m(t,...n)}function v(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function w(e,t){e||v(t)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const b=new Map;function I(e){w(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function T(e,t){const n=Object(i["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r["h"])(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function E(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(I);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function _(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function S(){return"http:"===k()||"https:"===k()}function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||Object(r["l"])()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class N{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["q"])()||Object(r["r"])()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function O(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class x{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const D={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},R=new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function P(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,i,s={}){return M(e,s,async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=Object(r["u"])(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),x.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},D),t);try{const t=new V(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw j(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);f(e,a)}}catch(s){if(s instanceof r["c"])throw s;f(e,"network-request-failed")}}async function U(e,t,n,r,i={}){const s=await L(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function F(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?O(e.config,i):`${e.config.apiScheme}://${i}`}class V{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),R.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function B(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function K(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function z(e,t=!1){const n=Object(r["j"])(e),i=await n.getIdToken(t),s=H(i);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:K(G(s.auth_time)),issuedAtTime:K(G(s.iat)),expirationTime:K(G(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function G(e){return 1e3*Number(e)}function H(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",s),null}}function $(e){const t=H(e);return y(t,"internal-error"),y("undefined"!==typeof t.exp,"internal-error"),y("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function W(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&Q(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Q({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Y(e){var t;const n=e.auth,r=await e.getIdToken(),i=await W(e,q(n,{idToken:r}));y(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?te(s.providerUserInfo):[],a=ee(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),h=!!c&&u,l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new X(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,l)}async function Z(e){const t=Object(r["j"])(e);await Y(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function ne(e,t){const n=await M(e,{},async()=>{const n=Object(r["u"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=F(e,i,"/v1/token","key="+s),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y("undefined"!==typeof e.idToken,"internal-error"),y("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):$(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new re;return n&&(y("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(y("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ie(e,t){y("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await W(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await W(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,l=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:b,isAnonymous:I,providerData:T,stsTokenManager:E}=t;y(w&&E,e,"internal-error");const _=re.fromJSON(this.name,E);y("string"===typeof w,e,"internal-error"),ie(h,e.name),ie(l,e.name),y("boolean"===typeof b,e,"internal-error"),y("boolean"===typeof I,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(g,e.name),ie(m,e.name),ie(v,e.name);const S=new se({uid:w,auth:e,email:l,emailVerified:b,displayName:h,isAnonymous:I,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:m,lastLoginAt:v});return T&&Array.isArray(T)&&(S.providerData=T.map(e=>Object.assign({},e))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new se({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Y(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ae=oe;
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(I(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||I(ae);const s=ce(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=se._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(c){}})),new ue(i,e,n)):new ue(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function he(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(le(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ye(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(ge(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function le(e=Object(r["k"])()){return/firefox\//i.test(e)}function de(e=Object(r["k"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=Object(r["k"])()){return/crios\//i.test(e)}function pe(e=Object(r["k"])()){return/iemobile/i.test(e)}function ge(e=Object(r["k"])()){return/android/i.test(e)}function me(e=Object(r["k"])()){return/blackberry/i.test(e)}function ye(e=Object(r["k"])()){return/webos/i.test(e)}function ve(e=Object(r["k"])()){return/iphone|ipad|ipod/i.test(e)}function we(e=Object(r["k"])()){var t;return ve(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return Object(r["o"])()&&10===document.documentMode}function Ie(e=Object(r["k"])()){return ve(e)||ge(e)||ye(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Te(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=he(Object(r["k"])());break;case"Worker":n=`${he(Object(r["k"])())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class _e{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ke(this),this.idTokenSubscription=new ke(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=I(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Y(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["j"])(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(I(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&I(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[I(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return y(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Se(e){return Object(r["j"])(e)}class ke{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["g"])(e=>this.observer=e)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Ce{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Ae(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function Ne(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function Oe(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}async function xe(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class De extends Ce{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new De(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new De(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ne(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Oe(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ae(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xe(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Re(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Pe="http://localhost";class Le extends Ce{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Le(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Le(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Re(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Re(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Re(e,t)}buildRequest(){const e={requestUri:Pe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["u"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Me(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",P(e,t))}async function Ue(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t))}async function Fe(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const Ve={["USER_NOT_FOUND"]:"user-not-found"};async function je(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return U(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,n),Ve)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Be extends Ce{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Be({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Be({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ue(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Fe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return je(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Be({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function qe(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ke(e){const t=Object(r["v"])(Object(r["i"])(e))["link"],n=t?Object(r["v"])(Object(r["i"])(t))["deep_link_id"]:null,i=Object(r["v"])(Object(r["i"])(e))["deep_link_id"],s=i?Object(r["v"])(Object(r["i"])(i))["link"]:null;return s||i||n||t||e}class ze{constructor(e){var t,n,i,s,o,a;const c=Object(r["v"])(Object(r["i"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,h=null!==(n=c["oobCode"])&&void 0!==n?n:null,l=qe(null!==(i=c["mode"])&&void 0!==i?i:null);y(u&&h&&l,"argument-error"),this.apiKey=u,this.operation=l,this.code=h,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Ke(e);try{return new ze(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Ge{constructor(){this.providerId=Ge.PROVIDER_ID}static credential(e,t){return De._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ze.parseLink(t);return y(n,"argument-error"),De._fromEmailAndCode(e,n.code,n.tenantId)}}Ge.PROVIDER_ID="password",Ge.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ge.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
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
class He{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class $e extends He{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
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
class We extends $e{constructor(){super("facebook.com")}static credential(e){return Le._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch(t){return null}}}We.FACEBOOK_SIGN_IN_METHOD="facebook.com",We.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
class Qe extends $e{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Le._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Qe.credential(t,n)}catch(r){return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com",Qe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
class Je extends $e{constructor(){super("github.com")}static credential(e){return Le._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.GITHUB_SIGN_IN_METHOD="github.com",Je.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
class Xe extends $e{constructor(){super("twitter.com")}static credential(e,t){return Le._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Xe.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function Ye(e,t){return U(e,"POST","/v1/accounts:signUp",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */Xe.TWITTER_SIGN_IN_METHOD="twitter.com",Xe.PROVIDER_ID="twitter.com";class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await se._fromIdTokenResponse(e,n,r),s=et(n),o=new Ze({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=et(n);return new Ze({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
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
 * Copyright 2020 Google LLC
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
class tt extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,tt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new tt(e,t,n,r)}}function nt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw tt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function rt(e,t,n=!1){const r=await W(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function it(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await W(e,nt(r,i,t,e),n);y(s.idToken,r,"internal-error");const o=H(s.idToken);y(o,r,"internal-error");const{sub:a}=o;return y(e.uid===a,r,"user-mismatch"),Ze._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function st(e,t,n=!1){const r="signIn",i=await nt(e,r,t),s=await Ze._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function ot(e,t){return st(Se(e),t)}async function at(e,t,n){const r=Se(e),i=await Ye(r,{returnSecureToken:!0,email:t,password:n}),s=await Ze._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function ct(e,t,n){return ot(Object(r["j"])(e),Ge.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ut(e){return Object(r["j"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
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
function ht(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",P(e,t))}function lt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",P(e,t))}new WeakMap;const dt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ft{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(dt,"1"),this.storage.removeItem(dt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function pt(){const e=Object(r["k"])();return de(e)||ve(e)}const gt=1e3,mt=10;class yt extends ft{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pt()&&Te(),this.fallbackToPolling=Ie(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);be()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,mt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},gt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yt.type="LOCAL";const vt=yt;
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class wt extends ft{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wt.type="SESSION";const bt=wt;
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function It(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Tt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Tt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await It(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
function Et(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */Tt.receivers=[];class _t{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Et("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function St(){return window}function kt(e){St().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Ct(){return"undefined"!==typeof St()["WorkerGlobalScope"]&&"function"===typeof St()["importScripts"]}async function At(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Nt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Ot(){return Ct()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */const xt="firebaseLocalStorageDb",Dt=1,Rt="firebaseLocalStorage",Pt="fbase_key";class Lt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mt(e,t){return e.transaction([Rt],t?"readwrite":"readonly").objectStore(Rt)}function Ut(){const e=indexedDB.deleteDatabase(xt);return new Lt(e).toPromise()}function Ft(){const e=indexedDB.open(xt,Dt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Rt,{keyPath:Pt})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Rt)?t(n):(n.close(),await Ut(),t(await Ft()))})})}async function Vt(e,t,n){const r=Mt(e,!0).put({[Pt]:t,value:n});return new Lt(r).toPromise()}async function jt(e,t){const n=Mt(e,!1).get(t),r=await new Lt(n).toPromise();return void 0===r?null:r.value}function Bt(e,t){const n=Mt(e,!0).delete(t);return new Lt(n).toPromise()}const qt=800,Kt=3;class zt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ft()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Kt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ct()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tt._getInstance(Ot()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await At(),!this.activeServiceWorker)return;this.sender=new _t(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Nt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ft();return await Vt(e,dt,"1"),await Bt(e,dt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>jt(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Mt(e,!1).getAll();return new Lt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}zt.type="LOCAL";const Gt=zt;
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ht(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",P(e,t))}function $t(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 * Copyright 2020 Google LLC
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
function Wt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Qt(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Wt().appendChild(r)})}function Jt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
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
 * Copyright 2020 Google LLC
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
Jt("rcb"),new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
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
const Xt="recaptcha";async function Yt(e,t,n){var r;const i=await n.verify();try{let s;if(y("string"===typeof i,e,"argument-error"),y(n.type===Xt,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){y("enroll"===t.type,e,"internal-error");const n=await ht(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;y(n,e,"missing-multi-factor-info");const o=await Ht(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Me(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Zt{constructor(e){this.providerId=Zt.PROVIDER_ID,this.auth=Se(e)}verifyPhoneNumber(e,t){return Yt(this.auth,e,Object(r["j"])(t))}static credential(e,t){return Be._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Zt.credentialFromTaggedObject(t)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Be._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
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
function en(e,t){return t?I(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */Zt.PROVIDER_ID="phone",Zt.PHONE_SIGN_IN_METHOD="phone";class tn extends Ce{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Re(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Re(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Re(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nn(e){return st(e.auth,new tn(e),e.bypassAuthState)}function rn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),it(n,new tn(e),e.bypassAuthState)}async function sn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),rt(n,new tn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class on{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nn;case"linkViaPopup":case"linkViaRedirect":return sn;case"reauthViaPopup":case"reauthViaRedirect":return rn;default:f(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const an=new N(2e3,1e4);class cn extends on{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=Et();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,an.get())};e()}}cn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
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
const un="pendingRedirect",hn=new Map;class ln extends on{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=hn.get(this.auth._key());if(!e){try{const t=await dn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}hn.set(this.auth._key(),e)}return this.bypassAuthState||hn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function dn(e,t){const n=pn(t),r=fn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function fn(e){return I(e._redirectPersistence)}function pn(e){return ce(un,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function gn(e,t,n=!1){const r=Se(e),i=en(r,t),s=new ln(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
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
const mn=6e5;class yn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!wn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mn&&this.cachedEventUids.clear(),this.cachedEventUids.has(vn(e))}saveEventToCache(e){this.cachedEventUids.add(vn(e)),this.lastProcessedEventTime=Date.now()}}function vn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function wn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function bn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function In(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Tn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,En=/^https?/;async function _n(e){if(e.config.emulator)return;const{authorizedDomains:t}=await In(e);for(const r of t)try{if(Sn(r))return}catch(n){}f(e,"unauthorized-domain")}function Sn(e){const t=_(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!En.test(n))return!1;if(Tn.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const kn=new N(3e4,6e4);function Cn(){const e=St().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function An(e){return new Promise((t,n)=>{var r,i,s;function o(){Cn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Cn(),n(p(e,"network-request-failed"))},timeout:kn.get()})}if(null===(i=null===(r=St().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=St().gapi)||void 0===s?void 0:s.load)){const t=Jt("iframefcb");return St()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},Qt("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw Nn=null,e})}let Nn=null;function On(e){return Nn=Nn||An(e),Nn}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const xn=new N(5e3,15e3),Dn="__/auth/iframe",Rn="emulator/auth/iframe",Pn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ln=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mn(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?O(t,Rn):`https://${e.config.authDomain}/${Dn}`,s={apiKey:t.apiKey,appName:e.name,v:i["a"]},o=Ln.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r["u"])(s).slice(1)}`}async function Un(e){const t=await On(e),n=St().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:Mn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pn,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),s=St().setTimeout(()=>{r(i)},xn.get());function o(){St().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Fn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vn=500,jn=600,Bn="_blank",qn="http://localhost";class Kn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function zn(e,t,n,i=Vn,s=jn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Fn),{width:i.toString(),height:s.toString(),top:o,left:a}),h=Object(r["k"])().toLowerCase();n&&(c=fe(h)?Bn:n),le(h)&&(t=t||qn,u.scrollbars="yes");const l=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(we(h)&&"_self"!==c)return Gn(t||"",c),new Kn(null);const d=window.open(t||"",c,l);y(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Kn(d)}function Gn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Hn="__/auth/handler",$n="emulator/auth/handler";function Wn(e,t,n,s,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i["a"],eventId:o};if(t instanceof He){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["n"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof $e){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Qn(e)}?${Object(r["u"])(u).slice(1)}`}function Qn({config:e}){return e.emulator?O(e,$n):`https://${e.authDomain}/${Hn}`}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Jn="webStorageSupport";class Xn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bt,this._completeRedirectFn=gn}async _openPopup(e,t,n,r){var i;w(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Wn(e,t,n,_(),r);return zn(e,s,Et())}async _openRedirect(e,t,n,r){return await this._originValidation(e),kt(Wn(e,t,n,_(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Un(e),n=new yn(e);return t.register("authEvent",t=>{y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Jn,{type:Jn},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Jn];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_n(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ie()||de()||ve()}}const Yn=Xn;class Zn{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class er extends Zn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new er(e)}_finalizeEnroll(e,t,n){return lt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return $t(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class tr{constructor(){}static assertion(e){return er._fromCredential(e)}}tr.FACTOR_ID="phone";var nr="@firebase/auth",rr="0.19.9";
/**
 * @license
 * Copyright 2020 Google LLC
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
class ir{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function sr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function or(e){Object(i["c"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(t=>{y(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),y(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},o=new _e(t,r);return E(o,n),o})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",e=>{const t=Se(e.getProvider("auth").getImmediate());return(e=>new ir(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["h"])(nr,rr,sr(e)),Object(i["h"])(nr,rr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */function ar(e=Object(i["e"])()){const t=Object(i["b"])(e,"auth");return t.isInitialized()?t.getImmediate():T(e,{popupRedirectResolver:Yn,persistence:[Gt,vt,bt]})}or("Browser")}}]);