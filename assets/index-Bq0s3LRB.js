var og=t=>{throw TypeError(t)};var od=(t,e,n)=>e.has(t)||og("Cannot "+n);var te=(t,e,n)=>(od(t,e,"read from private field"),n?n.call(t):e.get(t)),at=(t,e,n)=>e.has(t)?og("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),He=(t,e,n,i)=>(od(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),Zt=(t,e,n)=>(od(t,e,"access private method"),n);var Pl=(t,e,n,i)=>({set _(r){He(t,e,r,n)},get _(){return te(t,e,i)}});function jM(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function cx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ux={exports:{}},bu={},dx={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=Symbol.for("react.element"),XM=Symbol.for("react.portal"),$M=Symbol.for("react.fragment"),qM=Symbol.for("react.strict_mode"),YM=Symbol.for("react.profiler"),KM=Symbol.for("react.provider"),QM=Symbol.for("react.context"),ZM=Symbol.for("react.forward_ref"),JM=Symbol.for("react.suspense"),ew=Symbol.for("react.memo"),tw=Symbol.for("react.lazy"),ag=Symbol.iterator;function nw(t){return t===null||typeof t!="object"?null:(t=ag&&t[ag]||t["@@iterator"],typeof t=="function"?t:null)}var fx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hx=Object.assign,px={};function ta(t,e,n){this.props=t,this.context=e,this.refs=px,this.updater=n||fx}ta.prototype.isReactComponent={};ta.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ta.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mx(){}mx.prototype=ta.prototype;function bp(t,e,n){this.props=t,this.context=e,this.refs=px,this.updater=n||fx}var Tp=bp.prototype=new mx;Tp.constructor=bp;hx(Tp,ta.prototype);Tp.isPureReactComponent=!0;var lg=Array.isArray,gx=Object.prototype.hasOwnProperty,Ap={current:null},vx={key:!0,ref:!0,__self:!0,__source:!0};function xx(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)gx.call(e,i)&&!vx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:vl,type:t,key:s,ref:o,props:r,_owner:Ap.current}}function iw(t,e){return{$$typeof:vl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cp(t){return typeof t=="object"&&t!==null&&t.$$typeof===vl}function rw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cg=/\/+/g;function ad(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rw(""+t.key):e.toString(36)}function Ec(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vl:case XM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ad(o,0):i,lg(r)?(n="",t!=null&&(n=t.replace(cg,"$&/")+"/"),Ec(r,e,n,"",function(c){return c})):r!=null&&(Cp(r)&&(r=iw(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(cg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",lg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ad(s,a);o+=Ec(s,e,n,l,r)}else if(l=nw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ad(s,a++),o+=Ec(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Dl(t,e,n){if(t==null)return t;var i=[],r=0;return Ec(t,i,"","",function(s){return e.call(n,s,r++)}),i}function sw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gn={current:null},bc={transition:null},ow={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:bc,ReactCurrentOwner:Ap};function yx(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:Dl,forEach:function(t,e,n){Dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Dl(t,function(){e++}),e},toArray:function(t){return Dl(t,function(e){return e})||[]},only:function(t){if(!Cp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=ta;Qe.Fragment=$M;Qe.Profiler=YM;Qe.PureComponent=bp;Qe.StrictMode=qM;Qe.Suspense=JM;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ow;Qe.act=yx;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=hx({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ap.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)gx.call(e,l)&&!vx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:vl,type:t.type,key:r,ref:s,props:i,_owner:o}};Qe.createContext=function(t){return t={$$typeof:QM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:KM,_context:t},t.Consumer=t};Qe.createElement=xx;Qe.createFactory=function(t){var e=xx.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:ZM,render:t}};Qe.isValidElement=Cp;Qe.lazy=function(t){return{$$typeof:tw,_payload:{_status:-1,_result:t},_init:sw}};Qe.memo=function(t,e){return{$$typeof:ew,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=bc.transition;bc.transition={};try{t()}finally{bc.transition=e}};Qe.unstable_act=yx;Qe.useCallback=function(t,e){return gn.current.useCallback(t,e)};Qe.useContext=function(t){return gn.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return gn.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return gn.current.useEffect(t,e)};Qe.useId=function(){return gn.current.useId()};Qe.useImperativeHandle=function(t,e,n){return gn.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return gn.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return gn.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return gn.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return gn.current.useReducer(t,e,n)};Qe.useRef=function(t){return gn.current.useRef(t)};Qe.useState=function(t){return gn.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return gn.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return gn.current.useTransition()};Qe.version="18.3.1";dx.exports=Qe;var N=dx.exports;const pe=cx(N),_x=jM({__proto__:null,default:pe},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aw=N,lw=Symbol.for("react.element"),cw=Symbol.for("react.fragment"),uw=Object.prototype.hasOwnProperty,dw=aw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fw={key:!0,ref:!0,__self:!0,__source:!0};function Sx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)uw.call(e,i)&&!fw.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:lw,type:t,key:s,ref:o,props:r,_owner:dw.current}}bu.Fragment=cw;bu.jsx=Sx;bu.jsxs=Sx;ux.exports=bu;var P=ux.exports,Mx={exports:{}},Bn={},wx={exports:{}},Ex={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,k){var q=O.length;O.push(k);e:for(;0<q;){var re=q-1>>>1,ee=O[re];if(0<r(ee,k))O[re]=k,O[q]=ee,q=re;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var k=O[0],q=O.pop();if(q!==k){O[0]=q;e:for(var re=0,ee=O.length,me=ee>>>1;re<me;){var Ce=2*(re+1)-1,Be=O[Ce],K=Ce+1,ne=O[K];if(0>r(Be,q))K<ee&&0>r(ne,Be)?(O[re]=ne,O[K]=q,re=K):(O[re]=Be,O[Ce]=q,re=Ce);else if(K<ee&&0>r(ne,q))O[re]=ne,O[K]=q,re=K;else break e}}return k}function r(O,k){var q=O.sortIndex-k.sortIndex;return q!==0?q:O.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,u=3,p=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(O){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=O)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function S(O){if(y=!1,x(O),!v)if(n(l)!==null)v=!0,V(E);else{var k=n(c);k!==null&&U(S,k.startTime-O)}}function E(O,k){v=!1,y&&(y=!1,h(_),_=-1),p=!0;var q=u;try{for(x(k),f=n(l);f!==null&&(!(f.expirationTime>k)||O&&!C());){var re=f.callback;if(typeof re=="function"){f.callback=null,u=f.priorityLevel;var ee=re(f.expirationTime<=k);k=t.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(l)&&i(l),x(k)}else i(l);f=n(l)}if(f!==null)var me=!0;else{var Ce=n(c);Ce!==null&&U(S,Ce.startTime-k),me=!1}return me}finally{f=null,u=q,p=!1}}var b=!1,T=null,_=-1,w=5,D=-1;function C(){return!(t.unstable_now()-D<w)}function L(){if(T!==null){var O=t.unstable_now();D=O;var k=!0;try{k=T(!0,O)}finally{k?H():(b=!1,T=null)}}else b=!1}var H;if(typeof g=="function")H=function(){g(L)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,B=I.port2;I.port1.onmessage=L,H=function(){B.postMessage(null)}}else H=function(){m(L,0)};function V(O){T=O,b||(b=!0,H())}function U(O,k){_=m(function(){O(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,V(E))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(u){case 1:case 2:case 3:var k=3;break;default:k=u}var q=u;u=k;try{return O()}finally{u=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,k){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=u;u=O;try{return k()}finally{u=q}},t.unstable_scheduleCallback=function(O,k,q){var re=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?re+q:re):q=re,O){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=q+ee,O={id:d++,callback:k,priorityLevel:O,startTime:q,expirationTime:ee,sortIndex:-1},q>re?(O.sortIndex=q,e(c,O),n(l)===null&&O===n(c)&&(y?(h(_),_=-1):y=!0,U(S,q-re))):(O.sortIndex=ee,e(l,O),v||p||(v=!0,V(E))),O},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(O){var k=u;return function(){var q=u;u=k;try{return O.apply(this,arguments)}finally{u=q}}}})(Ex);wx.exports=Ex;var hw=wx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pw=N,kn=hw;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bx=new Set,Wa={};function Hs(t,e){Vo(t,e),Vo(t+"Capture",e)}function Vo(t,e){for(Wa[t]=e,t=0;t<e.length;t++)bx.add(e[t])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mf=Object.prototype.hasOwnProperty,mw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ug={},dg={};function gw(t){return Mf.call(dg,t)?!0:Mf.call(ug,t)?!1:mw.test(t)?dg[t]=!0:(ug[t]=!0,!1)}function vw(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xw(t,e,n,i){if(e===null||typeof e>"u"||vw(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rp=/[\-:]([a-z])/g;function Pp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rp,Pp);Kt[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rp,Pp);Kt[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rp,Pp);Kt[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dp(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xw(e,n,r,i)&&(n=null),i||r===null?gw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var vr=pw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nl=Symbol.for("react.element"),lo=Symbol.for("react.portal"),co=Symbol.for("react.fragment"),Np=Symbol.for("react.strict_mode"),wf=Symbol.for("react.profiler"),Tx=Symbol.for("react.provider"),Ax=Symbol.for("react.context"),Lp=Symbol.for("react.forward_ref"),Ef=Symbol.for("react.suspense"),bf=Symbol.for("react.suspense_list"),Ip=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),Cx=Symbol.for("react.offscreen"),fg=Symbol.iterator;function da(t){return t===null||typeof t!="object"?null:(t=fg&&t[fg]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,ld;function Ca(t){if(ld===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ld=e&&e[1]||""}return`
`+ld+t}var cd=!1;function ud(t,e){if(!t||cd)return"";cd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{cd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ca(t):""}function yw(t){switch(t.tag){case 5:return Ca(t.type);case 16:return Ca("Lazy");case 13:return Ca("Suspense");case 19:return Ca("SuspenseList");case 0:case 2:case 15:return t=ud(t.type,!1),t;case 11:return t=ud(t.type.render,!1),t;case 1:return t=ud(t.type,!0),t;default:return""}}function Tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case co:return"Fragment";case lo:return"Portal";case wf:return"Profiler";case Np:return"StrictMode";case Ef:return"Suspense";case bf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ax:return(t.displayName||"Context")+".Consumer";case Tx:return(t._context.displayName||"Context")+".Provider";case Lp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ip:return e=t.displayName||null,e!==null?e:Tf(t.type)||"Memo";case Pr:e=t._payload,t=t._init;try{return Tf(t(e))}catch{}}return null}function _w(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tf(e);case 8:return e===Np?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Sw(t){var e=Rx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ll(t){t._valueTracker||(t._valueTracker=Sw(t))}function Px(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Rx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function jc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Af(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Zr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dx(t,e){e=e.checked,e!=null&&Dp(t,"checked",e,!1)}function Cf(t,e){Dx(t,e);var n=Zr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rf(t,e.type,Zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rf(t,e,n){(e!=="number"||jc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ra=Array.isArray;function So(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Zr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Pf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(Ra(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zr(n)}}function Nx(t,e){var n=Zr(e.value),i=Zr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Lx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Df(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Lx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Il,Ix=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Il=Il||document.createElement("div"),Il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Il.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ja(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mw=["Webkit","ms","Moz","O"];Object.keys(Ia).forEach(function(t){Mw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ia[e]=Ia[t]})});function Fx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ia.hasOwnProperty(t)&&Ia[t]?(""+e).trim():e+"px"}function Ux(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Fx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ww=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nf(t,e){if(e){if(ww[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function Lf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var If=null;function Fp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ff=null,Mo=null,wo=null;function vg(t){if(t=_l(t)){if(typeof Ff!="function")throw Error(le(280));var e=t.stateNode;e&&(e=Pu(e),Ff(t.stateNode,t.type,e))}}function Ox(t){Mo?wo?wo.push(t):wo=[t]:Mo=t}function kx(){if(Mo){var t=Mo,e=wo;if(wo=Mo=null,vg(t),e)for(t=0;t<e.length;t++)vg(e[t])}}function Bx(t,e){return t(e)}function zx(){}var dd=!1;function Vx(t,e,n){if(dd)return t(e,n);dd=!0;try{return Bx(t,e,n)}finally{dd=!1,(Mo!==null||wo!==null)&&(zx(),kx())}}function Xa(t,e){var n=t.stateNode;if(n===null)return null;var i=Pu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var Uf=!1;if(cr)try{var fa={};Object.defineProperty(fa,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",fa,fa),window.removeEventListener("test",fa,fa)}catch{Uf=!1}function Ew(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Fa=!1,Xc=null,$c=!1,Of=null,bw={onError:function(t){Fa=!0,Xc=t}};function Tw(t,e,n,i,r,s,o,a,l){Fa=!1,Xc=null,Ew.apply(bw,arguments)}function Aw(t,e,n,i,r,s,o,a,l){if(Tw.apply(this,arguments),Fa){if(Fa){var c=Xc;Fa=!1,Xc=null}else throw Error(le(198));$c||($c=!0,Of=c)}}function Gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xg(t){if(Gs(t)!==t)throw Error(le(188))}function Cw(t){var e=t.alternate;if(!e){if(e=Gs(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return xg(r),t;if(s===i)return xg(r),e;s=s.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function Gx(t){return t=Cw(t),t!==null?Wx(t):null}function Wx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wx(t);if(e!==null)return e;t=t.sibling}return null}var jx=kn.unstable_scheduleCallback,yg=kn.unstable_cancelCallback,Rw=kn.unstable_shouldYield,Pw=kn.unstable_requestPaint,Lt=kn.unstable_now,Dw=kn.unstable_getCurrentPriorityLevel,Up=kn.unstable_ImmediatePriority,Xx=kn.unstable_UserBlockingPriority,qc=kn.unstable_NormalPriority,Nw=kn.unstable_LowPriority,$x=kn.unstable_IdlePriority,Tu=null,Ui=null;function Lw(t){if(Ui&&typeof Ui.onCommitFiberRoot=="function")try{Ui.onCommitFiberRoot(Tu,t,void 0,(t.current.flags&128)===128)}catch{}}var pi=Math.clz32?Math.clz32:Uw,Iw=Math.log,Fw=Math.LN2;function Uw(t){return t>>>=0,t===0?32:31-(Iw(t)/Fw|0)|0}var Fl=64,Ul=4194304;function Pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Pa(a):(s&=o,s!==0&&(i=Pa(s)))}else o=n&~r,o!==0?i=Pa(o):s!==0&&(i=Pa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-pi(e),r=1<<n,i|=t[n],e&=~r;return i}function Ow(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kw(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Ow(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function kf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qx(){var t=Fl;return Fl<<=1,!(Fl&4194240)&&(Fl=64),t}function fd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pi(e),t[e]=n}function Bw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-pi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Op(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-pi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var dt=0;function Yx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Kx,kp,Qx,Zx,Jx,Bf=!1,Ol=[],Wr=null,jr=null,Xr=null,$a=new Map,qa=new Map,Nr=[],zw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _g(t,e){switch(t){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":$a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(e.pointerId)}}function ha(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=_l(e),e!==null&&kp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Vw(t,e,n,i,r){switch(e){case"focusin":return Wr=ha(Wr,t,e,n,i,r),!0;case"dragenter":return jr=ha(jr,t,e,n,i,r),!0;case"mouseover":return Xr=ha(Xr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return $a.set(s,ha($a.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,qa.set(s,ha(qa.get(s)||null,t,e,n,i,r)),!0}return!1}function ey(t){var e=Ms(t.target);if(e!==null){var n=Gs(e);if(n!==null){if(e=n.tag,e===13){if(e=Hx(n),e!==null){t.blockedOn=e,Jx(t.priority,function(){Qx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);If=i,n.target.dispatchEvent(i),If=null}else return e=_l(n),e!==null&&kp(e),t.blockedOn=n,!1;e.shift()}return!0}function Sg(t,e,n){Tc(t)&&n.delete(e)}function Hw(){Bf=!1,Wr!==null&&Tc(Wr)&&(Wr=null),jr!==null&&Tc(jr)&&(jr=null),Xr!==null&&Tc(Xr)&&(Xr=null),$a.forEach(Sg),qa.forEach(Sg)}function pa(t,e){t.blockedOn===e&&(t.blockedOn=null,Bf||(Bf=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,Hw)))}function Ya(t){function e(r){return pa(r,t)}if(0<Ol.length){pa(Ol[0],t);for(var n=1;n<Ol.length;n++){var i=Ol[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Wr!==null&&pa(Wr,t),jr!==null&&pa(jr,t),Xr!==null&&pa(Xr,t),$a.forEach(e),qa.forEach(e),n=0;n<Nr.length;n++)i=Nr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)ey(n),n.blockedOn===null&&Nr.shift()}var Eo=vr.ReactCurrentBatchConfig,Kc=!0;function Gw(t,e,n,i){var r=dt,s=Eo.transition;Eo.transition=null;try{dt=1,Bp(t,e,n,i)}finally{dt=r,Eo.transition=s}}function Ww(t,e,n,i){var r=dt,s=Eo.transition;Eo.transition=null;try{dt=4,Bp(t,e,n,i)}finally{dt=r,Eo.transition=s}}function Bp(t,e,n,i){if(Kc){var r=zf(t,e,n,i);if(r===null)Md(t,e,i,Qc,n),_g(t,i);else if(Vw(r,t,e,n,i))i.stopPropagation();else if(_g(t,i),e&4&&-1<zw.indexOf(t)){for(;r!==null;){var s=_l(r);if(s!==null&&Kx(s),s=zf(t,e,n,i),s===null&&Md(t,e,i,Qc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Md(t,e,i,null,n)}}var Qc=null;function zf(t,e,n,i){if(Qc=null,t=Fp(i),t=Ms(t),t!==null)if(e=Gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qc=t,null}function ty(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dw()){case Up:return 1;case Xx:return 4;case qc:case Nw:return 16;case $x:return 536870912;default:return 16}default:return 16}}var zr=null,zp=null,Ac=null;function ny(){if(Ac)return Ac;var t,e=zp,n=e.length,i,r="value"in zr?zr.value:zr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ac=r.slice(t,1<i?1-i:void 0)}function Cc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function kl(){return!0}function Mg(){return!1}function zn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?kl:Mg,this.isPropagationStopped=Mg,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),e}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vp=zn(na),yl=Tt({},na,{view:0,detail:0}),jw=zn(yl),hd,pd,ma,Au=Tt({},yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ma&&(ma&&t.type==="mousemove"?(hd=t.screenX-ma.screenX,pd=t.screenY-ma.screenY):pd=hd=0,ma=t),hd)},movementY:function(t){return"movementY"in t?t.movementY:pd}}),wg=zn(Au),Xw=Tt({},Au,{dataTransfer:0}),$w=zn(Xw),qw=Tt({},yl,{relatedTarget:0}),md=zn(qw),Yw=Tt({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),Kw=zn(Yw),Qw=Tt({},na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zw=zn(Qw),Jw=Tt({},na,{data:0}),Eg=zn(Jw),eE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nE[t])?!!e[t]:!1}function Hp(){return iE}var rE=Tt({},yl,{key:function(t){if(t.key){var e=eE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hp,charCode:function(t){return t.type==="keypress"?Cc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sE=zn(rE),oE=Tt({},Au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bg=zn(oE),aE=Tt({},yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hp}),lE=zn(aE),cE=Tt({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),uE=zn(cE),dE=Tt({},Au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fE=zn(dE),hE=[9,13,27,32],Gp=cr&&"CompositionEvent"in window,Ua=null;cr&&"documentMode"in document&&(Ua=document.documentMode);var pE=cr&&"TextEvent"in window&&!Ua,iy=cr&&(!Gp||Ua&&8<Ua&&11>=Ua),Tg=" ",Ag=!1;function ry(t,e){switch(t){case"keyup":return hE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var uo=!1;function mE(t,e){switch(t){case"compositionend":return sy(e);case"keypress":return e.which!==32?null:(Ag=!0,Tg);case"textInput":return t=e.data,t===Tg&&Ag?null:t;default:return null}}function gE(t,e){if(uo)return t==="compositionend"||!Gp&&ry(t,e)?(t=ny(),Ac=zp=zr=null,uo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iy&&e.locale!=="ko"?null:e.data;default:return null}}var vE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vE[t.type]:e==="textarea"}function oy(t,e,n,i){Ox(i),e=Zc(e,"onChange"),0<e.length&&(n=new Vp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Oa=null,Ka=null;function xE(t){vy(t,0)}function Cu(t){var e=po(t);if(Px(e))return t}function yE(t,e){if(t==="change")return e}var ay=!1;if(cr){var gd;if(cr){var vd="oninput"in document;if(!vd){var Rg=document.createElement("div");Rg.setAttribute("oninput","return;"),vd=typeof Rg.oninput=="function"}gd=vd}else gd=!1;ay=gd&&(!document.documentMode||9<document.documentMode)}function Pg(){Oa&&(Oa.detachEvent("onpropertychange",ly),Ka=Oa=null)}function ly(t){if(t.propertyName==="value"&&Cu(Ka)){var e=[];oy(e,Ka,t,Fp(t)),Vx(xE,e)}}function _E(t,e,n){t==="focusin"?(Pg(),Oa=e,Ka=n,Oa.attachEvent("onpropertychange",ly)):t==="focusout"&&Pg()}function SE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cu(Ka)}function ME(t,e){if(t==="click")return Cu(e)}function wE(t,e){if(t==="input"||t==="change")return Cu(e)}function EE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gi=typeof Object.is=="function"?Object.is:EE;function Qa(t,e){if(gi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Mf.call(e,r)||!gi(t[r],e[r]))return!1}return!0}function Dg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ng(t,e){var n=Dg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dg(n)}}function cy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function uy(){for(var t=window,e=jc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jc(t.document)}return e}function Wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bE(t){var e=uy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cy(n.ownerDocument.documentElement,n)){if(i!==null&&Wp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ng(n,s);var o=Ng(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var TE=cr&&"documentMode"in document&&11>=document.documentMode,fo=null,Vf=null,ka=null,Hf=!1;function Lg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hf||fo==null||fo!==jc(i)||(i=fo,"selectionStart"in i&&Wp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ka&&Qa(ka,i)||(ka=i,i=Zc(Vf,"onSelect"),0<i.length&&(e=new Vp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=fo)))}function Bl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ho={animationend:Bl("Animation","AnimationEnd"),animationiteration:Bl("Animation","AnimationIteration"),animationstart:Bl("Animation","AnimationStart"),transitionend:Bl("Transition","TransitionEnd")},xd={},dy={};cr&&(dy=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function Ru(t){if(xd[t])return xd[t];if(!ho[t])return t;var e=ho[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dy)return xd[t]=e[n];return t}var fy=Ru("animationend"),hy=Ru("animationiteration"),py=Ru("animationstart"),my=Ru("transitionend"),gy=new Map,Ig="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ss(t,e){gy.set(t,e),Hs(e,[t])}for(var yd=0;yd<Ig.length;yd++){var _d=Ig[yd],AE=_d.toLowerCase(),CE=_d[0].toUpperCase()+_d.slice(1);ss(AE,"on"+CE)}ss(fy,"onAnimationEnd");ss(hy,"onAnimationIteration");ss(py,"onAnimationStart");ss("dblclick","onDoubleClick");ss("focusin","onFocus");ss("focusout","onBlur");ss(my,"onTransitionEnd");Vo("onMouseEnter",["mouseout","mouseover"]);Vo("onMouseLeave",["mouseout","mouseover"]);Vo("onPointerEnter",["pointerout","pointerover"]);Vo("onPointerLeave",["pointerout","pointerover"]);Hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function Fg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Aw(i,e,void 0,t),t.currentTarget=null}function vy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Fg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Fg(r,a,c),s=l}}}if($c)throw t=Of,$c=!1,Of=null,t}function _t(t,e){var n=e[$f];n===void 0&&(n=e[$f]=new Set);var i=t+"__bubble";n.has(i)||(xy(e,t,2,!1),n.add(i))}function Sd(t,e,n){var i=0;e&&(i|=4),xy(n,t,i,e)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Za(t){if(!t[zl]){t[zl]=!0,bx.forEach(function(n){n!=="selectionchange"&&(RE.has(n)||Sd(n,!1,t),Sd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zl]||(e[zl]=!0,Sd("selectionchange",!1,e))}}function xy(t,e,n,i){switch(ty(e)){case 1:var r=Gw;break;case 4:r=Ww;break;default:r=Bp}n=r.bind(null,e,n,t),r=void 0,!Uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Md(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ms(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Vx(function(){var c=s,d=Fp(n),f=[];e:{var u=gy.get(t);if(u!==void 0){var p=Vp,v=t;switch(t){case"keypress":if(Cc(n)===0)break e;case"keydown":case"keyup":p=sE;break;case"focusin":v="focus",p=md;break;case"focusout":v="blur",p=md;break;case"beforeblur":case"afterblur":p=md;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=wg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$w;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=lE;break;case fy:case hy:case py:p=Kw;break;case my:p=uE;break;case"scroll":p=jw;break;case"wheel":p=fE;break;case"copy":case"cut":case"paste":p=Zw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bg}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?u!==null?u+"Capture":null:u;y=[];for(var g=c,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=Xa(g,h),S!=null&&y.push(Ja(g,S,x)))),m)break;g=g.return}0<y.length&&(u=new p(u,v,null,n,d),f.push({event:u,listeners:y}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==If&&(v=n.relatedTarget||n.fromElement)&&(Ms(v)||v[ur]))break e;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Ms(v):null,v!==null&&(m=Gs(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=wg,S="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=bg,S="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?u:po(p),x=v==null?u:po(v),u=new y(S,g+"leave",p,n,d),u.target=m,u.relatedTarget=x,S=null,Ms(d)===c&&(y=new y(h,g+"enter",v,n,d),y.target=x,y.relatedTarget=m,S=y),m=S,p&&v)t:{for(y=p,h=v,g=0,x=y;x;x=$s(x))g++;for(x=0,S=h;S;S=$s(S))x++;for(;0<g-x;)y=$s(y),g--;for(;0<x-g;)h=$s(h),x--;for(;g--;){if(y===h||h!==null&&y===h.alternate)break t;y=$s(y),h=$s(h)}y=null}else y=null;p!==null&&Ug(f,u,p,y,!1),v!==null&&m!==null&&Ug(f,m,v,y,!0)}}e:{if(u=c?po(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var E=yE;else if(Cg(u))if(ay)E=wE;else{E=SE;var b=_E}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(E=ME);if(E&&(E=E(t,c))){oy(f,E,n,d);break e}b&&b(t,u,c),t==="focusout"&&(b=u._wrapperState)&&b.controlled&&u.type==="number"&&Rf(u,"number",u.value)}switch(b=c?po(c):window,t){case"focusin":(Cg(b)||b.contentEditable==="true")&&(fo=b,Vf=c,ka=null);break;case"focusout":ka=Vf=fo=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,Lg(f,n,d);break;case"selectionchange":if(TE)break;case"keydown":case"keyup":Lg(f,n,d)}var T;if(Gp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else uo?ry(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(iy&&n.locale!=="ko"&&(uo||_!=="onCompositionStart"?_==="onCompositionEnd"&&uo&&(T=ny()):(zr=d,zp="value"in zr?zr.value:zr.textContent,uo=!0)),b=Zc(c,_),0<b.length&&(_=new Eg(_,t,null,n,d),f.push({event:_,listeners:b}),T?_.data=T:(T=sy(n),T!==null&&(_.data=T)))),(T=pE?mE(t,n):gE(t,n))&&(c=Zc(c,"onBeforeInput"),0<c.length&&(d=new Eg("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}vy(f,e)})}function Ja(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Xa(t,n),s!=null&&i.unshift(Ja(t,s,r)),s=Xa(t,e),s!=null&&i.push(Ja(t,s,r))),t=t.return}return i}function $s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ug(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Xa(n,s),l!=null&&o.unshift(Ja(n,l,a))):r||(l=Xa(n,s),l!=null&&o.push(Ja(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var PE=/\r\n?/g,DE=/\u0000|\uFFFD/g;function Og(t){return(typeof t=="string"?t:""+t).replace(PE,`
`).replace(DE,"")}function Vl(t,e,n){if(e=Og(e),Og(t)!==e&&n)throw Error(le(425))}function Jc(){}var Gf=null,Wf=null;function jf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xf=typeof setTimeout=="function"?setTimeout:void 0,NE=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,LE=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(t){return kg.resolve(null).then(t).catch(IE)}:Xf;function IE(t){setTimeout(function(){throw t})}function wd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ya(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ya(e)}function $r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ia=Math.random().toString(36).slice(2),Ni="__reactFiber$"+ia,el="__reactProps$"+ia,ur="__reactContainer$"+ia,$f="__reactEvents$"+ia,FE="__reactListeners$"+ia,UE="__reactHandles$"+ia;function Ms(t){var e=t[Ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[Ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bg(t);t!==null;){if(n=t[Ni])return n;t=Bg(t)}return e}t=n,n=t.parentNode}return null}function _l(t){return t=t[Ni]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function po(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function Pu(t){return t[el]||null}var qf=[],mo=-1;function os(t){return{current:t}}function St(t){0>mo||(t.current=qf[mo],qf[mo]=null,mo--)}function gt(t,e){mo++,qf[mo]=t.current,t.current=e}var Jr={},an=os(Jr),Mn=os(!1),Fs=Jr;function Ho(t,e){var n=t.type.contextTypes;if(!n)return Jr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function wn(t){return t=t.childContextTypes,t!=null}function eu(){St(Mn),St(an)}function zg(t,e,n){if(an.current!==Jr)throw Error(le(168));gt(an,e),gt(Mn,n)}function yy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,_w(t)||"Unknown",r));return Tt({},n,i)}function tu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,Fs=an.current,gt(an,t),gt(Mn,Mn.current),!0}function Vg(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=yy(t,e,Fs),i.__reactInternalMemoizedMergedChildContext=t,St(Mn),St(an),gt(an,t)):St(Mn),gt(Mn,n)}var er=null,Du=!1,Ed=!1;function _y(t){er===null?er=[t]:er.push(t)}function OE(t){Du=!0,_y(t)}function as(){if(!Ed&&er!==null){Ed=!0;var t=0,e=dt;try{var n=er;for(dt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}er=null,Du=!1}catch(r){throw er!==null&&(er=er.slice(t+1)),jx(Up,as),r}finally{dt=e,Ed=!1}}return null}var go=[],vo=0,nu=null,iu=0,Wn=[],jn=0,Us=null,ir=1,rr="";function vs(t,e){go[vo++]=iu,go[vo++]=nu,nu=t,iu=e}function Sy(t,e,n){Wn[jn++]=ir,Wn[jn++]=rr,Wn[jn++]=Us,Us=t;var i=ir;t=rr;var r=32-pi(i)-1;i&=~(1<<r),n+=1;var s=32-pi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ir=1<<32-pi(e)+r|n<<r|i,rr=s+t}else ir=1<<s|n<<r|i,rr=t}function jp(t){t.return!==null&&(vs(t,1),Sy(t,1,0))}function Xp(t){for(;t===nu;)nu=go[--vo],go[vo]=null,iu=go[--vo],go[vo]=null;for(;t===Us;)Us=Wn[--jn],Wn[jn]=null,rr=Wn[--jn],Wn[jn]=null,ir=Wn[--jn],Wn[jn]=null}var Un=null,Fn=null,Mt=!1,di=null;function My(t,e){var n=Xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Un=t,Fn=$r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Un=t,Fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Us!==null?{id:ir,overflow:rr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Un=t,Fn=null,!0):!1;default:return!1}}function Yf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kf(t){if(Mt){var e=Fn;if(e){var n=e;if(!Hg(t,e)){if(Yf(t))throw Error(le(418));e=$r(n.nextSibling);var i=Un;e&&Hg(t,e)?My(i,n):(t.flags=t.flags&-4097|2,Mt=!1,Un=t)}}else{if(Yf(t))throw Error(le(418));t.flags=t.flags&-4097|2,Mt=!1,Un=t}}}function Gg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function Hl(t){if(t!==Un)return!1;if(!Mt)return Gg(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jf(t.type,t.memoizedProps)),e&&(e=Fn)){if(Yf(t))throw wy(),Error(le(418));for(;e;)My(t,e),e=$r(e.nextSibling)}if(Gg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fn=$r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fn=null}}else Fn=Un?$r(t.stateNode.nextSibling):null;return!0}function wy(){for(var t=Fn;t;)t=$r(t.nextSibling)}function Go(){Fn=Un=null,Mt=!1}function $p(t){di===null?di=[t]:di.push(t)}var kE=vr.ReactCurrentBatchConfig;function ga(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function Gl(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wg(t){var e=t._init;return e(t._payload)}function Ey(t){function e(h,g){if(t){var x=h.deletions;x===null?(h.deletions=[g],h.flags|=16):x.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=Qr(h,g),h.index=0,h.sibling=null,h}function s(h,g,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<g?(h.flags|=2,g):x):(h.flags|=2,g)):(h.flags|=1048576,g)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,g,x,S){return g===null||g.tag!==6?(g=Dd(x,h.mode,S),g.return=h,g):(g=r(g,x),g.return=h,g)}function l(h,g,x,S){var E=x.type;return E===co?d(h,g,x.props.children,S,x.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Pr&&Wg(E)===g.type)?(S=r(g,x.props),S.ref=ga(h,g,x),S.return=h,S):(S=Fc(x.type,x.key,x.props,null,h.mode,S),S.ref=ga(h,g,x),S.return=h,S)}function c(h,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Nd(x,h.mode,S),g.return=h,g):(g=r(g,x.children||[]),g.return=h,g)}function d(h,g,x,S,E){return g===null||g.tag!==7?(g=Is(x,h.mode,S,E),g.return=h,g):(g=r(g,x),g.return=h,g)}function f(h,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Dd(""+g,h.mode,x),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Nl:return x=Fc(g.type,g.key,g.props,null,h.mode,x),x.ref=ga(h,null,g),x.return=h,x;case lo:return g=Nd(g,h.mode,x),g.return=h,g;case Pr:var S=g._init;return f(h,S(g._payload),x)}if(Ra(g)||da(g))return g=Is(g,h.mode,x,null),g.return=h,g;Gl(h,g)}return null}function u(h,g,x,S){var E=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:a(h,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Nl:return x.key===E?l(h,g,x,S):null;case lo:return x.key===E?c(h,g,x,S):null;case Pr:return E=x._init,u(h,g,E(x._payload),S)}if(Ra(x)||da(x))return E!==null?null:d(h,g,x,S,null);Gl(h,x)}return null}function p(h,g,x,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,a(g,h,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Nl:return h=h.get(S.key===null?x:S.key)||null,l(g,h,S,E);case lo:return h=h.get(S.key===null?x:S.key)||null,c(g,h,S,E);case Pr:var b=S._init;return p(h,g,x,b(S._payload),E)}if(Ra(S)||da(S))return h=h.get(x)||null,d(g,h,S,E,null);Gl(g,S)}return null}function v(h,g,x,S){for(var E=null,b=null,T=g,_=g=0,w=null;T!==null&&_<x.length;_++){T.index>_?(w=T,T=null):w=T.sibling;var D=u(h,T,x[_],S);if(D===null){T===null&&(T=w);break}t&&T&&D.alternate===null&&e(h,T),g=s(D,g,_),b===null?E=D:b.sibling=D,b=D,T=w}if(_===x.length)return n(h,T),Mt&&vs(h,_),E;if(T===null){for(;_<x.length;_++)T=f(h,x[_],S),T!==null&&(g=s(T,g,_),b===null?E=T:b.sibling=T,b=T);return Mt&&vs(h,_),E}for(T=i(h,T);_<x.length;_++)w=p(T,h,_,x[_],S),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?_:w.key),g=s(w,g,_),b===null?E=w:b.sibling=w,b=w);return t&&T.forEach(function(C){return e(h,C)}),Mt&&vs(h,_),E}function y(h,g,x,S){var E=da(x);if(typeof E!="function")throw Error(le(150));if(x=E.call(x),x==null)throw Error(le(151));for(var b=E=null,T=g,_=g=0,w=null,D=x.next();T!==null&&!D.done;_++,D=x.next()){T.index>_?(w=T,T=null):w=T.sibling;var C=u(h,T,D.value,S);if(C===null){T===null&&(T=w);break}t&&T&&C.alternate===null&&e(h,T),g=s(C,g,_),b===null?E=C:b.sibling=C,b=C,T=w}if(D.done)return n(h,T),Mt&&vs(h,_),E;if(T===null){for(;!D.done;_++,D=x.next())D=f(h,D.value,S),D!==null&&(g=s(D,g,_),b===null?E=D:b.sibling=D,b=D);return Mt&&vs(h,_),E}for(T=i(h,T);!D.done;_++,D=x.next())D=p(T,h,_,D.value,S),D!==null&&(t&&D.alternate!==null&&T.delete(D.key===null?_:D.key),g=s(D,g,_),b===null?E=D:b.sibling=D,b=D);return t&&T.forEach(function(L){return e(h,L)}),Mt&&vs(h,_),E}function m(h,g,x,S){if(typeof x=="object"&&x!==null&&x.type===co&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Nl:e:{for(var E=x.key,b=g;b!==null;){if(b.key===E){if(E=x.type,E===co){if(b.tag===7){n(h,b.sibling),g=r(b,x.props.children),g.return=h,h=g;break e}}else if(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Pr&&Wg(E)===b.type){n(h,b.sibling),g=r(b,x.props),g.ref=ga(h,b,x),g.return=h,h=g;break e}n(h,b);break}else e(h,b);b=b.sibling}x.type===co?(g=Is(x.props.children,h.mode,S,x.key),g.return=h,h=g):(S=Fc(x.type,x.key,x.props,null,h.mode,S),S.ref=ga(h,g,x),S.return=h,h=S)}return o(h);case lo:e:{for(b=x.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(h,g.sibling),g=r(g,x.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=Nd(x,h.mode,S),g.return=h,h=g}return o(h);case Pr:return b=x._init,m(h,g,b(x._payload),S)}if(Ra(x))return v(h,g,x,S);if(da(x))return y(h,g,x,S);Gl(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,x),g.return=h,h=g):(n(h,g),g=Dd(x,h.mode,S),g.return=h,h=g),o(h)):n(h,g)}return m}var Wo=Ey(!0),by=Ey(!1),ru=os(null),su=null,xo=null,qp=null;function Yp(){qp=xo=su=null}function Kp(t){var e=ru.current;St(ru),t._currentValue=e}function Qf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function bo(t,e){su=t,qp=xo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Sn=!0),t.firstContext=null)}function Kn(t){var e=t._currentValue;if(qp!==t)if(t={context:t,memoizedValue:e,next:null},xo===null){if(su===null)throw Error(le(308));xo=t,su.dependencies={lanes:0,firstContext:t}}else xo=xo.next=t;return e}var ws=null;function Qp(t){ws===null?ws=[t]:ws.push(t)}function Ty(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Qp(e)):(n.next=r.next,r.next=n),e.interleaved=n,dr(t,i)}function dr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Dr=!1;function Zp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ay(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function or(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,dr(t,n)}return r=i.interleaved,r===null?(e.next=e,Qp(i)):(e.next=r.next,r.next=e),i.interleaved=e,dr(t,n)}function Rc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Op(t,n)}}function jg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ou(t,e,n,i){var r=t.updateQueue;Dr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((i&u)===u){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(u=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(p,f,u);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,u=typeof v=="function"?v.call(p,f,u):v,u==null)break e;f=Tt({},f,u);break e;case 2:Dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ks|=o,t.lanes=o,t.memoizedState=f}}function Xg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var Sl={},Oi=os(Sl),tl=os(Sl),nl=os(Sl);function Es(t){if(t===Sl)throw Error(le(174));return t}function Jp(t,e){switch(gt(nl,e),gt(tl,t),gt(Oi,Sl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Df(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Df(e,t)}St(Oi),gt(Oi,e)}function jo(){St(Oi),St(tl),St(nl)}function Cy(t){Es(nl.current);var e=Es(Oi.current),n=Df(e,t.type);e!==n&&(gt(tl,t),gt(Oi,n))}function em(t){tl.current===t&&(St(Oi),St(tl))}var wt=os(0);function au(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bd=[];function tm(){for(var t=0;t<bd.length;t++)bd[t]._workInProgressVersionPrimary=null;bd.length=0}var Pc=vr.ReactCurrentDispatcher,Td=vr.ReactCurrentBatchConfig,Os=0,Et=null,Ut=null,Wt=null,lu=!1,Ba=!1,il=0,BE=0;function Jt(){throw Error(le(321))}function nm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gi(t[n],e[n]))return!1;return!0}function im(t,e,n,i,r,s){if(Os=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pc.current=t===null||t.memoizedState===null?GE:WE,t=n(i,r),Ba){s=0;do{if(Ba=!1,il=0,25<=s)throw Error(le(301));s+=1,Wt=Ut=null,e.updateQueue=null,Pc.current=jE,t=n(i,r)}while(Ba)}if(Pc.current=cu,e=Ut!==null&&Ut.next!==null,Os=0,Wt=Ut=Et=null,lu=!1,e)throw Error(le(300));return t}function rm(){var t=il!==0;return il=0,t}function Ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Et.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Qn(){if(Ut===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Wt===null?Et.memoizedState:Wt.next;if(e!==null)Wt=e,Ut=t;else{if(t===null)throw Error(le(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Wt===null?Et.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function rl(t,e){return typeof e=="function"?e(t):e}function Ad(t){var e=Qn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=Ut,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Os&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Et.lanes|=d,ks|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,gi(i,e.memoizedState)||(Sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,ks|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cd(t){var e=Qn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);gi(s,e.memoizedState)||(Sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ry(){}function Py(t,e){var n=Et,i=Qn(),r=e(),s=!gi(i.memoizedState,r);if(s&&(i.memoizedState=r,Sn=!0),i=i.queue,sm(Ly.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,sl(9,Ny.bind(null,n,i,r,e),void 0,null),jt===null)throw Error(le(349));Os&30||Dy(n,e,r)}return r}function Dy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ny(t,e,n,i){e.value=n,e.getSnapshot=i,Iy(e)&&Fy(t)}function Ly(t,e,n){return n(function(){Iy(e)&&Fy(t)})}function Iy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gi(t,n)}catch{return!0}}function Fy(t){var e=dr(t,1);e!==null&&mi(e,t,1,-1)}function $g(t){var e=Ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:t},e.queue=t,t=t.dispatch=HE.bind(null,Et,t),[e.memoizedState,t]}function sl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Uy(){return Qn().memoizedState}function Dc(t,e,n,i){var r=Ai();Et.flags|=t,r.memoizedState=sl(1|e,n,void 0,i===void 0?null:i)}function Nu(t,e,n,i){var r=Qn();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var o=Ut.memoizedState;if(s=o.destroy,i!==null&&nm(i,o.deps)){r.memoizedState=sl(e,n,s,i);return}}Et.flags|=t,r.memoizedState=sl(1|e,n,s,i)}function qg(t,e){return Dc(8390656,8,t,e)}function sm(t,e){return Nu(2048,8,t,e)}function Oy(t,e){return Nu(4,2,t,e)}function ky(t,e){return Nu(4,4,t,e)}function By(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zy(t,e,n){return n=n!=null?n.concat([t]):null,Nu(4,4,By.bind(null,e,t),n)}function om(){}function Vy(t,e){var n=Qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&nm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Hy(t,e){var n=Qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&nm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Gy(t,e,n){return Os&21?(gi(n,e)||(n=qx(),Et.lanes|=n,ks|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Sn=!0),t.memoizedState=n)}function zE(t,e){var n=dt;dt=n!==0&&4>n?n:4,t(!0);var i=Td.transition;Td.transition={};try{t(!1),e()}finally{dt=n,Td.transition=i}}function Wy(){return Qn().memoizedState}function VE(t,e,n){var i=Kr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},jy(t))Xy(e,n);else if(n=Ty(t,e,n,i),n!==null){var r=hn();mi(n,t,i,r),$y(n,e,i)}}function HE(t,e,n){var i=Kr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(jy(t))Xy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,gi(a,o)){var l=e.interleaved;l===null?(r.next=r,Qp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ty(t,e,r,i),n!==null&&(r=hn(),mi(n,t,i,r),$y(n,e,i))}}function jy(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function Xy(t,e){Ba=lu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $y(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Op(t,n)}}var cu={readContext:Kn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},GE={readContext:Kn,useCallback:function(t,e){return Ai().memoizedState=[t,e===void 0?null:e],t},useContext:Kn,useEffect:qg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Dc(4194308,4,By.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Dc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Dc(4,2,t,e)},useMemo:function(t,e){var n=Ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ai();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=VE.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=Ai();return t={current:t},e.memoizedState=t},useState:$g,useDebugValue:om,useDeferredValue:function(t){return Ai().memoizedState=t},useTransition:function(){var t=$g(!1),e=t[0];return t=zE.bind(null,t[1]),Ai().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=Ai();if(Mt){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),jt===null)throw Error(le(349));Os&30||Dy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,qg(Ly.bind(null,i,s,t),[t]),i.flags|=2048,sl(9,Ny.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ai(),e=jt.identifierPrefix;if(Mt){var n=rr,i=ir;n=(i&~(1<<32-pi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=il++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},WE={readContext:Kn,useCallback:Vy,useContext:Kn,useEffect:sm,useImperativeHandle:zy,useInsertionEffect:Oy,useLayoutEffect:ky,useMemo:Hy,useReducer:Ad,useRef:Uy,useState:function(){return Ad(rl)},useDebugValue:om,useDeferredValue:function(t){var e=Qn();return Gy(e,Ut.memoizedState,t)},useTransition:function(){var t=Ad(rl)[0],e=Qn().memoizedState;return[t,e]},useMutableSource:Ry,useSyncExternalStore:Py,useId:Wy,unstable_isNewReconciler:!1},jE={readContext:Kn,useCallback:Vy,useContext:Kn,useEffect:sm,useImperativeHandle:zy,useInsertionEffect:Oy,useLayoutEffect:ky,useMemo:Hy,useReducer:Cd,useRef:Uy,useState:function(){return Cd(rl)},useDebugValue:om,useDeferredValue:function(t){var e=Qn();return Ut===null?e.memoizedState=t:Gy(e,Ut.memoizedState,t)},useTransition:function(){var t=Cd(rl)[0],e=Qn().memoizedState;return[t,e]},useMutableSource:Ry,useSyncExternalStore:Py,useId:Wy,unstable_isNewReconciler:!1};function oi(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lu={isMounted:function(t){return(t=t._reactInternals)?Gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Kr(t),s=or(i,r);s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,r),e!==null&&(mi(e,t,r,i),Rc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Kr(t),s=or(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,r),e!==null&&(mi(e,t,r,i),Rc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=Kr(t),r=or(n,i);r.tag=2,e!=null&&(r.callback=e),e=qr(t,r,i),e!==null&&(mi(e,t,i,n),Rc(e,t,i))}};function Yg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qa(n,i)||!Qa(r,s):!0}function qy(t,e,n){var i=!1,r=Jr,s=e.contextType;return typeof s=="object"&&s!==null?s=Kn(s):(r=wn(e)?Fs:an.current,i=e.contextTypes,s=(i=i!=null)?Ho(t,r):Jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Lu.enqueueReplaceState(e,e.state,null)}function Jf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Kn(s):(s=wn(e)?Fs:an.current,r.context=Ho(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Lu.enqueueReplaceState(r,r.state,null),ou(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Xo(t,e){try{var n="",i=e;do n+=yw(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Rd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function eh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XE=typeof WeakMap=="function"?WeakMap:Map;function Yy(t,e,n){n=or(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){du||(du=!0,uh=i),eh(t,e)},n}function Ky(t,e,n){n=or(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){eh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){eh(t,e),typeof i!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new XE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=o1.bind(null,t,e,n),e.then(t,t))}function Zg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=or(-1,1),e.tag=2,qr(n,e,1))),n.lanes|=1),t)}var $E=vr.ReactCurrentOwner,Sn=!1;function dn(t,e,n,i){e.child=t===null?by(e,null,n,i):Wo(e,t.child,n,i)}function e0(t,e,n,i,r){n=n.render;var s=e.ref;return bo(e,r),i=im(t,e,n,i,s,r),n=rm(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fr(t,e,r)):(Mt&&n&&jp(e),e.flags|=1,dn(t,e,i,r),e.child)}function t0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!pm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Qy(t,e,s,i,r)):(t=Fc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qa,n(o,i)&&t.ref===e.ref)return fr(t,e,r)}return e.flags|=1,t=Qr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Qy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Qa(s,i)&&t.ref===e.ref)if(Sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Sn=!0);else return e.lanes=t.lanes,fr(t,e,r)}return th(t,e,n,i,r)}function Zy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(_o,Dn),Dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,gt(_o,Dn),Dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,gt(_o,Dn),Dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,gt(_o,Dn),Dn|=i;return dn(t,e,r,n),e.child}function Jy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function th(t,e,n,i,r){var s=wn(n)?Fs:an.current;return s=Ho(e,s),bo(e,r),n=im(t,e,n,i,s,r),i=rm(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fr(t,e,r)):(Mt&&i&&jp(e),e.flags|=1,dn(t,e,n,r),e.child)}function n0(t,e,n,i,r){if(wn(n)){var s=!0;tu(e)}else s=!1;if(bo(e,r),e.stateNode===null)Nc(t,e),qy(e,n,i),Jf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kn(c):(c=wn(n)?Fs:an.current,c=Ho(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Kg(e,o,i,c),Dr=!1;var u=e.memoizedState;o.state=u,ou(e,i,o,r),l=e.memoizedState,a!==i||u!==l||Mn.current||Dr?(typeof d=="function"&&(Zf(e,n,d,i),l=e.memoizedState),(a=Dr||Yg(e,n,a,i,u,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ay(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:oi(e.type,a),o.props=c,f=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kn(l):(l=wn(n)?Fs:an.current,l=Ho(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||u!==l)&&Kg(e,o,i,l),Dr=!1,u=e.memoizedState,o.state=u,ou(e,i,o,r);var v=e.memoizedState;a!==f||u!==v||Mn.current||Dr?(typeof p=="function"&&(Zf(e,n,p,i),v=e.memoizedState),(c=Dr||Yg(e,n,c,i,u,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return nh(t,e,n,i,s,r)}function nh(t,e,n,i,r,s){Jy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Vg(e,n,!1),fr(t,e,s);i=e.stateNode,$E.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Wo(e,t.child,null,s),e.child=Wo(e,null,a,s)):dn(t,e,a,s),e.memoizedState=i.state,r&&Vg(e,n,!0),e.child}function e_(t){var e=t.stateNode;e.pendingContext?zg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zg(t,e.context,!1),Jp(t,e.containerInfo)}function i0(t,e,n,i,r){return Go(),$p(r),e.flags|=256,dn(t,e,n,i),e.child}var ih={dehydrated:null,treeContext:null,retryLane:0};function rh(t){return{baseLanes:t,cachePool:null,transitions:null}}function t_(t,e,n){var i=e.pendingProps,r=wt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),gt(wt,r&1),t===null)return Kf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uu(o,i,0,null),t=Is(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rh(n),e.memoizedState=ih,t):am(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return qE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Qr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Qr(a,s):(s=Is(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?rh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ih,i}return s=t.child,t=s.sibling,i=Qr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function am(t,e){return e=Uu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wl(t,e,n,i){return i!==null&&$p(i),Wo(e,t.child,null,n),t=am(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Rd(Error(le(422))),Wl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Uu({mode:"visible",children:i.children},r,0,null),s=Is(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Wo(e,t.child,null,o),e.child.memoizedState=rh(o),e.memoizedState=ih,s);if(!(e.mode&1))return Wl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(le(419)),i=Rd(s,i,void 0),Wl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Sn||a){if(i=jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,dr(t,r),mi(i,t,r,-1))}return hm(),i=Rd(Error(le(421))),Wl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=a1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Fn=$r(r.nextSibling),Un=e,Mt=!0,di=null,t!==null&&(Wn[jn++]=ir,Wn[jn++]=rr,Wn[jn++]=Us,ir=t.id,rr=t.overflow,Us=e),e=am(e,i.children),e.flags|=4096,e)}function r0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Qf(t.return,e,n)}function Pd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function n_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&r0(t,n,e);else if(t.tag===19)r0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(gt(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&au(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Pd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&au(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Pd(e,!0,n,null,s);break;case"together":Pd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ks|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=Qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function YE(t,e,n){switch(e.tag){case 3:e_(e),Go();break;case 5:Cy(e);break;case 1:wn(e.type)&&tu(e);break;case 4:Jp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(ru,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(wt,wt.current&1),e.flags|=128,null):n&e.child.childLanes?t_(t,e,n):(gt(wt,wt.current&1),t=fr(t,e,n),t!==null?t.sibling:null);gt(wt,wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return n_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,Zy(t,e,n)}return fr(t,e,n)}var i_,sh,r_,s_;i_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sh=function(){};r_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Es(Oi.current);var s=null;switch(n){case"input":r=Af(t,r),i=Af(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=Pf(t,r),i=Pf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Jc)}Nf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};s_=function(t,e,n,i){n!==i&&(e.flags|=4)};function va(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function KE(t,e,n){var i=e.pendingProps;switch(Xp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return wn(e.type)&&eu(),en(e),null;case 3:return i=e.stateNode,jo(),St(Mn),St(an),tm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,di!==null&&(hh(di),di=null))),sh(t,e),en(e),null;case 5:em(e);var r=Es(nl.current);if(n=e.type,t!==null&&e.stateNode!=null)r_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return en(e),null}if(t=Es(Oi.current),Hl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ni]=e,i[el]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<Da.length;r++)_t(Da[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":hg(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":mg(i,s),_t("invalid",i)}Nf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Vl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Vl(i.textContent,a,t),r=["children",""+a]):Wa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_t("scroll",i)}switch(n){case"input":Ll(i),pg(i,s,!0);break;case"textarea":Ll(i),gg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Jc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Lx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ni]=e,t[el]=i,i_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Lf(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<Da.length;r++)_t(Da[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":hg(t,i),r=Af(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),_t("invalid",t);break;case"textarea":mg(t,i),r=Pf(t,i),_t("invalid",t);break;default:r=i}Nf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ux(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ix(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ja(t,l):typeof l=="number"&&ja(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&Dp(t,s,l,o))}switch(n){case"input":Ll(t),pg(t,i,!1);break;case"textarea":Ll(t),gg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Zr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?So(t,!!i.multiple,s,!1):i.defaultValue!=null&&So(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Jc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)s_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=Es(nl.current),Es(Oi.current),Hl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ni]=e,(s=i.nodeValue!==n)&&(t=Un,t!==null))switch(t.tag){case 3:Vl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Vl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ni]=e,e.stateNode=i}return en(e),null;case 13:if(St(wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&Fn!==null&&e.mode&1&&!(e.flags&128))wy(),Go(),e.flags|=98560,s=!1;else if(s=Hl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[Ni]=e}else Go(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else di!==null&&(hh(di),di=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||wt.current&1?kt===0&&(kt=3):hm())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return jo(),sh(t,e),t===null&&Za(e.stateNode.containerInfo),en(e),null;case 10:return Kp(e.type._context),en(e),null;case 17:return wn(e.type)&&eu(),en(e),null;case 19:if(St(wt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)va(s,!1);else{if(kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=au(t),o!==null){for(e.flags|=128,va(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return gt(wt,wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>$o&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304)}else{if(!i)if(t=au(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Mt)return en(e),null}else 2*Lt()-s.renderingStartTime>$o&&n!==1073741824&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=wt.current,gt(wt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return fm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Dn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function QE(t,e){switch(Xp(e),e.tag){case 1:return wn(e.type)&&eu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return jo(),St(Mn),St(an),tm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return em(e),null;case 13:if(St(wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));Go()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return St(wt),null;case 4:return jo(),null;case 10:return Kp(e.type._context),null;case 22:case 23:return fm(),null;case 24:return null;default:return null}}var jl=!1,sn=!1,ZE=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function yo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Rt(t,e,i)}else n.current=null}function oh(t,e,n){try{n()}catch(i){Rt(t,e,i)}}var s0=!1;function JE(t,e){if(Gf=Kc,t=uy(),Wp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,u=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)u=f,f=p;for(;;){if(f===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wf={focusedElem:t,selectionRange:n},Kc=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:oi(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(S){Rt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return v=s0,s0=!1,v}function za(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&oh(e,n,s)}r=r.next}while(r!==i)}}function Iu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ah(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function o_(t){var e=t.alternate;e!==null&&(t.alternate=null,o_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ni],delete e[el],delete e[$f],delete e[FE],delete e[UE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function a_(t){return t.tag===5||t.tag===3||t.tag===4}function o0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||a_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jc));else if(i!==4&&(t=t.child,t!==null))for(lh(t,e,n),t=t.sibling;t!==null;)lh(t,e,n),t=t.sibling}function ch(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ch(t,e,n),t=t.sibling;t!==null;)ch(t,e,n),t=t.sibling}var $t=null,ui=!1;function _r(t,e,n){for(n=n.child;n!==null;)l_(t,e,n),n=n.sibling}function l_(t,e,n){if(Ui&&typeof Ui.onCommitFiberUnmount=="function")try{Ui.onCommitFiberUnmount(Tu,n)}catch{}switch(n.tag){case 5:sn||yo(n,e);case 6:var i=$t,r=ui;$t=null,_r(t,e,n),$t=i,ui=r,$t!==null&&(ui?(t=$t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$t.removeChild(n.stateNode));break;case 18:$t!==null&&(ui?(t=$t,n=n.stateNode,t.nodeType===8?wd(t.parentNode,n):t.nodeType===1&&wd(t,n),Ya(t)):wd($t,n.stateNode));break;case 4:i=$t,r=ui,$t=n.stateNode.containerInfo,ui=!0,_r(t,e,n),$t=i,ui=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&oh(n,e,o),r=r.next}while(r!==i)}_r(t,e,n);break;case 1:if(!sn&&(yo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Rt(n,e,a)}_r(t,e,n);break;case 21:_r(t,e,n);break;case 22:n.mode&1?(sn=(i=sn)||n.memoizedState!==null,_r(t,e,n),sn=i):_r(t,e,n);break;default:_r(t,e,n)}}function a0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ZE),e.forEach(function(i){var r=l1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ti(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:$t=a.stateNode,ui=!1;break e;case 3:$t=a.stateNode.containerInfo,ui=!0;break e;case 4:$t=a.stateNode.containerInfo,ui=!0;break e}a=a.return}if($t===null)throw Error(le(160));l_(s,o,r),$t=null,ui=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Rt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)c_(e,t),e=e.sibling}function c_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(e,t),Ei(t),i&4){try{za(3,t,t.return),Iu(3,t)}catch(y){Rt(t,t.return,y)}try{za(5,t,t.return)}catch(y){Rt(t,t.return,y)}}break;case 1:ti(e,t),Ei(t),i&512&&n!==null&&yo(n,n.return);break;case 5:if(ti(e,t),Ei(t),i&512&&n!==null&&yo(n,n.return),t.flags&32){var r=t.stateNode;try{ja(r,"")}catch(y){Rt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Dx(r,s),Lf(a,o);var c=Lf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Ux(r,f):d==="dangerouslySetInnerHTML"?Ix(r,f):d==="children"?ja(r,f):Dp(r,d,f,c)}switch(a){case"input":Cf(r,s);break;case"textarea":Nx(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?So(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?So(r,!!s.multiple,s.defaultValue,!0):So(r,!!s.multiple,s.multiple?[]:"",!1))}r[el]=s}catch(y){Rt(t,t.return,y)}}break;case 6:if(ti(e,t),Ei(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Rt(t,t.return,y)}}break;case 3:if(ti(e,t),Ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ya(e.containerInfo)}catch(y){Rt(t,t.return,y)}break;case 4:ti(e,t),Ei(t);break;case 13:ti(e,t),Ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(um=Lt())),i&4&&a0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(sn=(c=sn)||d,ti(e,t),sn=c):ti(e,t),Ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Ee=t,d=t.child;d!==null;){for(f=Ee=d;Ee!==null;){switch(u=Ee,p=u.child,u.tag){case 0:case 11:case 14:case 15:za(4,u,u.return);break;case 1:yo(u,u.return);var v=u.stateNode;if(typeof v.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Rt(i,n,y)}}break;case 5:yo(u,u.return);break;case 22:if(u.memoizedState!==null){c0(f);continue}}p!==null?(p.return=u,Ee=p):c0(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Fx("display",o))}catch(y){Rt(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Rt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ti(e,t),Ei(t),i&4&&a0(t);break;case 21:break;default:ti(e,t),Ei(t)}}function Ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(a_(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ja(r,""),i.flags&=-33);var s=o0(t);ch(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=o0(t);lh(t,a,o);break;default:throw Error(le(161))}}catch(l){Rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function e1(t,e,n){Ee=t,u_(t)}function u_(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||jl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||sn;a=jl;var c=sn;if(jl=o,(sn=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?u0(r):l!==null?(l.return=o,Ee=l):u0(r);for(;s!==null;)Ee=s,u_(s),s=s.sibling;Ee=r,jl=a,sn=c}l0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):l0(t)}}function l0(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||Iu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:oi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ya(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}sn||e.flags&512&&ah(e)}catch(u){Rt(e,e.return,u)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function c0(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function u0(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Iu(4,e)}catch(l){Rt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{ah(e)}catch(l){Rt(e,s,l)}break;case 5:var o=e.return;try{ah(e)}catch(l){Rt(e,o,l)}}}catch(l){Rt(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var t1=Math.ceil,uu=vr.ReactCurrentDispatcher,lm=vr.ReactCurrentOwner,$n=vr.ReactCurrentBatchConfig,rt=0,jt=null,Ft=null,Yt=0,Dn=0,_o=os(0),kt=0,ol=null,ks=0,Fu=0,cm=0,Va=null,_n=null,um=0,$o=1/0,Ji=null,du=!1,uh=null,Yr=null,Xl=!1,Vr=null,fu=0,Ha=0,dh=null,Lc=-1,Ic=0;function hn(){return rt&6?Lt():Lc!==-1?Lc:Lc=Lt()}function Kr(t){return t.mode&1?rt&2&&Yt!==0?Yt&-Yt:kE.transition!==null?(Ic===0&&(Ic=qx()),Ic):(t=dt,t!==0||(t=window.event,t=t===void 0?16:ty(t.type)),t):1}function mi(t,e,n,i){if(50<Ha)throw Ha=0,dh=null,Error(le(185));xl(t,n,i),(!(rt&2)||t!==jt)&&(t===jt&&(!(rt&2)&&(Fu|=n),kt===4&&Lr(t,Yt)),En(t,i),n===1&&rt===0&&!(e.mode&1)&&($o=Lt()+500,Du&&as()))}function En(t,e){var n=t.callbackNode;kw(t,e);var i=Yc(t,t===jt?Yt:0);if(i===0)n!==null&&yg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&yg(n),e===1)t.tag===0?OE(d0.bind(null,t)):_y(d0.bind(null,t)),LE(function(){!(rt&6)&&as()}),n=null;else{switch(Yx(i)){case 1:n=Up;break;case 4:n=Xx;break;case 16:n=qc;break;case 536870912:n=$x;break;default:n=qc}n=x_(n,d_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function d_(t,e){if(Lc=-1,Ic=0,rt&6)throw Error(le(327));var n=t.callbackNode;if(To()&&t.callbackNode!==n)return null;var i=Yc(t,t===jt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=hu(t,i);else{e=i;var r=rt;rt|=2;var s=h_();(jt!==t||Yt!==e)&&(Ji=null,$o=Lt()+500,Ls(t,e));do try{r1();break}catch(a){f_(t,a)}while(!0);Yp(),uu.current=s,rt=r,Ft!==null?e=0:(jt=null,Yt=0,e=kt)}if(e!==0){if(e===2&&(r=kf(t),r!==0&&(i=r,e=fh(t,r))),e===1)throw n=ol,Ls(t,0),Lr(t,i),En(t,Lt()),n;if(e===6)Lr(t,i);else{if(r=t.current.alternate,!(i&30)&&!n1(r)&&(e=hu(t,i),e===2&&(s=kf(t),s!==0&&(i=s,e=fh(t,s))),e===1))throw n=ol,Ls(t,0),Lr(t,i),En(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:xs(t,_n,Ji);break;case 3:if(Lr(t,i),(i&130023424)===i&&(e=um+500-Lt(),10<e)){if(Yc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Xf(xs.bind(null,t,_n,Ji),e);break}xs(t,_n,Ji);break;case 4:if(Lr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-pi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*t1(i/1960))-i,10<i){t.timeoutHandle=Xf(xs.bind(null,t,_n,Ji),i);break}xs(t,_n,Ji);break;case 5:xs(t,_n,Ji);break;default:throw Error(le(329))}}}return En(t,Lt()),t.callbackNode===n?d_.bind(null,t):null}function fh(t,e){var n=Va;return t.current.memoizedState.isDehydrated&&(Ls(t,e).flags|=256),t=hu(t,e),t!==2&&(e=_n,_n=n,e!==null&&hh(e)),t}function hh(t){_n===null?_n=t:_n.push.apply(_n,t)}function n1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!gi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Lr(t,e){for(e&=~cm,e&=~Fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pi(e),i=1<<n;t[n]=-1,e&=~i}}function d0(t){if(rt&6)throw Error(le(327));To();var e=Yc(t,0);if(!(e&1))return En(t,Lt()),null;var n=hu(t,e);if(t.tag!==0&&n===2){var i=kf(t);i!==0&&(e=i,n=fh(t,i))}if(n===1)throw n=ol,Ls(t,0),Lr(t,e),En(t,Lt()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xs(t,_n,Ji),En(t,Lt()),null}function dm(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&($o=Lt()+500,Du&&as())}}function Bs(t){Vr!==null&&Vr.tag===0&&!(rt&6)&&To();var e=rt;rt|=1;var n=$n.transition,i=dt;try{if($n.transition=null,dt=1,t)return t()}finally{dt=i,$n.transition=n,rt=e,!(rt&6)&&as()}}function fm(){Dn=_o.current,St(_o)}function Ls(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,NE(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(Xp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&eu();break;case 3:jo(),St(Mn),St(an),tm();break;case 5:em(i);break;case 4:jo();break;case 13:St(wt);break;case 19:St(wt);break;case 10:Kp(i.type._context);break;case 22:case 23:fm()}n=n.return}if(jt=t,Ft=t=Qr(t.current,null),Yt=Dn=e,kt=0,ol=null,cm=Fu=ks=0,_n=Va=null,ws!==null){for(e=0;e<ws.length;e++)if(n=ws[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ws=null}return t}function f_(t,e){do{var n=Ft;try{if(Yp(),Pc.current=cu,lu){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}lu=!1}if(Os=0,Wt=Ut=Et=null,Ba=!1,il=0,lm.current=null,n===null||n.return===null){kt=1,ol=e,Ft=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Zg(o);if(p!==null){p.flags&=-257,Jg(p,o,a,s,e),p.mode&1&&Qg(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Qg(s,c,e),hm();break e}l=Error(le(426))}}else if(Mt&&a.mode&1){var m=Zg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Jg(m,o,a,s,e),$p(Xo(l,a));break e}}s=l=Xo(l,a),kt!==4&&(kt=2),Va===null?Va=[s]:Va.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Yy(s,l,e);jg(s,h);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Yr===null||!Yr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Ky(s,a,e);jg(s,S);break e}}s=s.return}while(s!==null)}m_(n)}catch(E){e=E,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function h_(){var t=uu.current;return uu.current=cu,t===null?cu:t}function hm(){(kt===0||kt===3||kt===2)&&(kt=4),jt===null||!(ks&268435455)&&!(Fu&268435455)||Lr(jt,Yt)}function hu(t,e){var n=rt;rt|=2;var i=h_();(jt!==t||Yt!==e)&&(Ji=null,Ls(t,e));do try{i1();break}catch(r){f_(t,r)}while(!0);if(Yp(),rt=n,uu.current=i,Ft!==null)throw Error(le(261));return jt=null,Yt=0,kt}function i1(){for(;Ft!==null;)p_(Ft)}function r1(){for(;Ft!==null&&!Rw();)p_(Ft)}function p_(t){var e=v_(t.alternate,t,Dn);t.memoizedProps=t.pendingProps,e===null?m_(t):Ft=e,lm.current=null}function m_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=QE(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,Ft=null;return}}else if(n=KE(n,e,Dn),n!==null){Ft=n;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);kt===0&&(kt=5)}function xs(t,e,n){var i=dt,r=$n.transition;try{$n.transition=null,dt=1,s1(t,e,n,i)}finally{$n.transition=r,dt=i}return null}function s1(t,e,n,i){do To();while(Vr!==null);if(rt&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Bw(t,s),t===jt&&(Ft=jt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xl||(Xl=!0,x_(qc,function(){return To(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$n.transition,$n.transition=null;var o=dt;dt=1;var a=rt;rt|=4,lm.current=null,JE(t,n),c_(n,t),bE(Wf),Kc=!!Gf,Wf=Gf=null,t.current=n,e1(n),Pw(),rt=a,dt=o,$n.transition=s}else t.current=n;if(Xl&&(Xl=!1,Vr=t,fu=r),s=t.pendingLanes,s===0&&(Yr=null),Lw(n.stateNode),En(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(du)throw du=!1,t=uh,uh=null,t;return fu&1&&t.tag!==0&&To(),s=t.pendingLanes,s&1?t===dh?Ha++:(Ha=0,dh=t):Ha=0,as(),null}function To(){if(Vr!==null){var t=Yx(fu),e=$n.transition,n=dt;try{if($n.transition=null,dt=16>t?16:t,Vr===null)var i=!1;else{if(t=Vr,Vr=null,fu=0,rt&6)throw Error(le(331));var r=rt;for(rt|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var d=Ee;switch(d.tag){case 0:case 11:case 15:za(8,d,s)}var f=d.child;if(f!==null)f.return=d,Ee=f;else for(;Ee!==null;){d=Ee;var u=d.sibling,p=d.return;if(o_(d),d===c){Ee=null;break}if(u!==null){u.return=p,Ee=u;break}Ee=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:za(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ee=h;break e}Ee=s.return}}var g=t.current;for(Ee=g;Ee!==null;){o=Ee;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ee=x;else e:for(o=g;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Iu(9,a)}}catch(E){Rt(a,a.return,E)}if(a===o){Ee=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ee=S;break e}Ee=a.return}}if(rt=r,as(),Ui&&typeof Ui.onPostCommitFiberRoot=="function")try{Ui.onPostCommitFiberRoot(Tu,t)}catch{}i=!0}return i}finally{dt=n,$n.transition=e}}return!1}function f0(t,e,n){e=Xo(n,e),e=Yy(t,e,1),t=qr(t,e,1),e=hn(),t!==null&&(xl(t,1,e),En(t,e))}function Rt(t,e,n){if(t.tag===3)f0(t,t,n);else for(;e!==null;){if(e.tag===3){f0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yr===null||!Yr.has(i))){t=Xo(n,t),t=Ky(e,t,1),e=qr(e,t,1),t=hn(),e!==null&&(xl(e,1,t),En(e,t));break}}e=e.return}}function o1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&(Yt&n)===n&&(kt===4||kt===3&&(Yt&130023424)===Yt&&500>Lt()-um?Ls(t,0):cm|=n),En(t,e)}function g_(t,e){e===0&&(t.mode&1?(e=Ul,Ul<<=1,!(Ul&130023424)&&(Ul=4194304)):e=1);var n=hn();t=dr(t,e),t!==null&&(xl(t,e,n),En(t,n))}function a1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),g_(t,n)}function l1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),g_(t,n)}var v_;v_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mn.current)Sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Sn=!1,YE(t,e,n);Sn=!!(t.flags&131072)}else Sn=!1,Mt&&e.flags&1048576&&Sy(e,iu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Nc(t,e),t=e.pendingProps;var r=Ho(e,an.current);bo(e,n),r=im(null,e,i,t,r,n);var s=rm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wn(i)?(s=!0,tu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zp(e),r.updater=Lu,e.stateNode=r,r._reactInternals=e,Jf(e,i,t,n),e=nh(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&jp(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Nc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=u1(i),t=oi(i,t),r){case 0:e=th(null,e,i,t,n);break e;case 1:e=n0(null,e,i,t,n);break e;case 11:e=e0(null,e,i,t,n);break e;case 14:e=t0(null,e,i,oi(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),th(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),n0(t,e,i,r,n);case 3:e:{if(e_(e),t===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ay(t,e),ou(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Xo(Error(le(423)),e),e=i0(t,e,i,n,r);break e}else if(i!==r){r=Xo(Error(le(424)),e),e=i0(t,e,i,n,r);break e}else for(Fn=$r(e.stateNode.containerInfo.firstChild),Un=e,Mt=!0,di=null,n=by(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Go(),i===r){e=fr(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return Cy(e),t===null&&Kf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,jf(i,r)?o=null:s!==null&&jf(i,s)&&(e.flags|=32),Jy(t,e),dn(t,e,o,n),e.child;case 6:return t===null&&Kf(e),null;case 13:return t_(t,e,n);case 4:return Jp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Wo(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),e0(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,gt(ru,i._currentValue),i._currentValue=o,s!==null)if(gi(s.value,o)){if(s.children===r.children&&!Mn.current){e=fr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=or(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(le(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,bo(e,n),r=Kn(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=oi(i,e.pendingProps),r=oi(i.type,r),t0(t,e,i,r,n);case 15:return Qy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Nc(t,e),e.tag=1,wn(i)?(t=!0,tu(e)):t=!1,bo(e,n),qy(e,i,r),Jf(e,i,r,n),nh(null,e,i,!0,t,n);case 19:return n_(t,e,n);case 22:return Zy(t,e,n)}throw Error(le(156,e.tag))};function x_(t,e){return jx(t,e)}function c1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,n,i){return new c1(t,e,n,i)}function pm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function u1(t){if(typeof t=="function")return pm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lp)return 11;if(t===Ip)return 14}return 2}function Qr(t,e){var n=t.alternate;return n===null?(n=Xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")pm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case co:return Is(n.children,r,s,e);case Np:o=8,r|=8;break;case wf:return t=Xn(12,n,e,r|2),t.elementType=wf,t.lanes=s,t;case Ef:return t=Xn(13,n,e,r),t.elementType=Ef,t.lanes=s,t;case bf:return t=Xn(19,n,e,r),t.elementType=bf,t.lanes=s,t;case Cx:return Uu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tx:o=10;break e;case Ax:o=9;break e;case Lp:o=11;break e;case Ip:o=14;break e;case Pr:o=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=Xn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Is(t,e,n,i){return t=Xn(7,t,i,e),t.lanes=n,t}function Uu(t,e,n,i){return t=Xn(22,t,i,e),t.elementType=Cx,t.lanes=n,t.stateNode={isHidden:!1},t}function Dd(t,e,n){return t=Xn(6,t,null,e),t.lanes=n,t}function Nd(t,e,n){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function d1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fd(0),this.expirationTimes=fd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function mm(t,e,n,i,r,s,o,a,l){return t=new d1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zp(s),t}function f1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function y_(t){if(!t)return Jr;t=t._reactInternals;e:{if(Gs(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(wn(n))return yy(t,n,e)}return e}function __(t,e,n,i,r,s,o,a,l){return t=mm(n,i,!0,t,r,s,o,a,l),t.context=y_(null),n=t.current,i=hn(),r=Kr(n),s=or(i,r),s.callback=e??null,qr(n,s,r),t.current.lanes=r,xl(t,r,i),En(t,i),t}function Ou(t,e,n,i){var r=e.current,s=hn(),o=Kr(r);return n=y_(n),e.context===null?e.context=n:e.pendingContext=n,e=or(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=qr(r,e,o),t!==null&&(mi(t,r,o,s),Rc(t,r,o)),o}function pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function h0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gm(t,e){h0(t,e),(t=t.alternate)&&h0(t,e)}function h1(){return null}var S_=typeof reportError=="function"?reportError:function(t){console.error(t)};function vm(t){this._internalRoot=t}ku.prototype.render=vm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));Ou(t,e,null,null)};ku.prototype.unmount=vm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Bs(function(){Ou(null,t,null,null)}),e[ur]=null}};function ku(t){this._internalRoot=t}ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&ey(t)}};function xm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function p0(){}function p1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=pu(o);s.call(c)}}var o=__(e,i,t,0,null,!1,!1,"",p0);return t._reactRootContainer=o,t[ur]=o.current,Za(t.nodeType===8?t.parentNode:t),Bs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=pu(l);a.call(c)}}var l=mm(t,0,!1,null,null,!1,!1,"",p0);return t._reactRootContainer=l,t[ur]=l.current,Za(t.nodeType===8?t.parentNode:t),Bs(function(){Ou(e,l,n,i)}),l}function zu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=pu(o);a.call(l)}}Ou(e,o,t,r)}else o=p1(n,e,t,r,i);return pu(o)}Kx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Pa(e.pendingLanes);n!==0&&(Op(e,n|1),En(e,Lt()),!(rt&6)&&($o=Lt()+500,as()))}break;case 13:Bs(function(){var i=dr(t,1);if(i!==null){var r=hn();mi(i,t,1,r)}}),gm(t,1)}};kp=function(t){if(t.tag===13){var e=dr(t,134217728);if(e!==null){var n=hn();mi(e,t,134217728,n)}gm(t,134217728)}};Qx=function(t){if(t.tag===13){var e=Kr(t),n=dr(t,e);if(n!==null){var i=hn();mi(n,t,e,i)}gm(t,e)}};Zx=function(){return dt};Jx=function(t,e){var n=dt;try{return dt=t,e()}finally{dt=n}};Ff=function(t,e,n){switch(e){case"input":if(Cf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Pu(i);if(!r)throw Error(le(90));Px(i),Cf(i,r)}}}break;case"textarea":Nx(t,n);break;case"select":e=n.value,e!=null&&So(t,!!n.multiple,e,!1)}};Bx=dm;zx=Bs;var m1={usingClientEntryPoint:!1,Events:[_l,po,Pu,Ox,kx,dm]},xa={findFiberByHostInstance:Ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},g1={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Gx(t),t===null?null:t.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||h1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{Tu=$l.inject(g1),Ui=$l}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m1;Bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xm(e))throw Error(le(200));return f1(t,e,null,n)};Bn.createRoot=function(t,e){if(!xm(t))throw Error(le(299));var n=!1,i="",r=S_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=mm(t,1,!1,null,null,n,!1,i,r),t[ur]=e.current,Za(t.nodeType===8?t.parentNode:t),new vm(e)};Bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=Gx(e),t=t===null?null:t.stateNode,t};Bn.flushSync=function(t){return Bs(t)};Bn.hydrate=function(t,e,n){if(!Bu(e))throw Error(le(200));return zu(null,t,e,!0,n)};Bn.hydrateRoot=function(t,e,n){if(!xm(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=S_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=__(e,null,t,1,n??null,r,!1,s,o),t[ur]=e.current,Za(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ku(e)};Bn.render=function(t,e,n){if(!Bu(e))throw Error(le(200));return zu(null,t,e,!1,n)};Bn.unmountComponentAtNode=function(t){if(!Bu(t))throw Error(le(40));return t._reactRootContainer?(Bs(function(){zu(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};Bn.unstable_batchedUpdates=dm;Bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bu(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return zu(t,e,n,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function M_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M_)}catch(t){console.error(t)}}M_(),Mx.exports=Bn;var Ml=Mx.exports;const w_=cx(Ml);var E_,m0=Ml;E_=m0.createRoot,m0.hydrateRoot;const v1=1,x1=1e6;let Ld=0;function y1(){return Ld=(Ld+1)%Number.MAX_SAFE_INTEGER,Ld.toString()}const Id=new Map,g0=t=>{if(Id.has(t))return;const e=setTimeout(()=>{Id.delete(t),Ga({type:"REMOVE_TOAST",toastId:t})},x1);Id.set(t,e)},_1=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,v1)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?g0(n):t.toasts.forEach(i=>{g0(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===n||n===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},Uc=[];let Oc={toasts:[]};function Ga(t){Oc=_1(Oc,t),Uc.forEach(e=>{e(Oc)})}function S1({...t}){const e=y1(),n=r=>Ga({type:"UPDATE_TOAST",toast:{...r,id:e}}),i=()=>Ga({type:"DISMISS_TOAST",toastId:e});return Ga({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:r=>{r||i()}}}),{id:e,dismiss:i,update:n}}function M1(){const[t,e]=N.useState(Oc);return N.useEffect(()=>(Uc.push(e),()=>{const n=Uc.indexOf(e);n>-1&&Uc.splice(n,1)}),[t]),{...t,toast:S1,dismiss:n=>Ga({type:"DISMISS_TOAST",toastId:n})}}function Ot(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function v0(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function b_(...t){return e=>{let n=!1;const i=t.map(r=>{const s=v0(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():v0(t[r],null)}}}}function vi(...t){return N.useCallback(b_(...t),t)}function Vu(t,e=[]){let n=[];function i(s,o){const a=N.createContext(o),l=n.length;n=[...n,o];const c=f=>{var h;const{scope:u,children:p,...v}=f,y=((h=u==null?void 0:u[t])==null?void 0:h[l])||a,m=N.useMemo(()=>v,Object.values(v));return P.jsx(y.Provider,{value:m,children:p})};c.displayName=s+"Provider";function d(f,u){var y;const p=((y=u==null?void 0:u[t])==null?void 0:y[l])||a,v=N.useContext(p);if(v)return v;if(o!==void 0)return o;throw new Error(`\`${f}\` must be used within \`${s}\``)}return[c,d]}const r=()=>{const s=n.map(o=>N.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return N.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,w1(r,...e)]}function w1(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:l,scopeName:c})=>{const f=l(s)[`__scope${c}`];return{...a,...f}},{});return N.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}function ph(t){const e=E1(t),n=N.forwardRef((i,r)=>{const{children:s,...o}=i,a=N.Children.toArray(s),l=a.find(T1);if(l){const c=l.props.children,d=a.map(f=>f===l?N.Children.count(c)>1?N.Children.only(null):N.isValidElement(c)?c.props.children:null:f);return P.jsx(e,{...o,ref:r,children:N.isValidElement(c)?N.cloneElement(c,void 0,d):null})}return P.jsx(e,{...o,ref:r,children:s})});return n.displayName=`${t}.Slot`,n}function E1(t){const e=N.forwardRef((n,i)=>{const{children:r,...s}=n;if(N.isValidElement(r)){const o=C1(r),a=A1(s,r.props);return r.type!==N.Fragment&&(a.ref=i?b_(i,o):o),N.cloneElement(r,a)}return N.Children.count(r)>1?N.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var T_=Symbol("radix.slottable");function b1(t){const e=({children:n})=>P.jsx(P.Fragment,{children:n});return e.displayName=`${t}.Slottable`,e.__radixId=T_,e}function T1(t){return N.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===T_}function A1(t,e){const n={...e};for(const i in e){const r=t[i],s=e[i];/^on[A-Z]/.test(i)?r&&s?n[i]=(...a)=>{const l=s(...a);return r(...a),l}:r&&(n[i]=r):i==="style"?n[i]={...r,...s}:i==="className"&&(n[i]=[r,s].filter(Boolean).join(" "))}return{...t,...n}}function C1(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function R1(t){const e=t+"CollectionProvider",[n,i]=Vu(e),[r,s]=n(e,{collectionRef:{current:null},itemMap:new Map}),o=y=>{const{scope:m,children:h}=y,g=pe.useRef(null),x=pe.useRef(new Map).current;return P.jsx(r,{scope:m,itemMap:x,collectionRef:g,children:h})};o.displayName=e;const a=t+"CollectionSlot",l=ph(a),c=pe.forwardRef((y,m)=>{const{scope:h,children:g}=y,x=s(a,h),S=vi(m,x.collectionRef);return P.jsx(l,{ref:S,children:g})});c.displayName=a;const d=t+"CollectionItemSlot",f="data-radix-collection-item",u=ph(d),p=pe.forwardRef((y,m)=>{const{scope:h,children:g,...x}=y,S=pe.useRef(null),E=vi(m,S),b=s(d,h);return pe.useEffect(()=>(b.itemMap.set(S,{ref:S,...x}),()=>void b.itemMap.delete(S))),P.jsx(u,{[f]:"",ref:E,children:g})});p.displayName=d;function v(y){const m=s(t+"CollectionConsumer",y);return pe.useCallback(()=>{const g=m.collectionRef.current;if(!g)return[];const x=Array.from(g.querySelectorAll(`[${f}]`));return Array.from(m.itemMap.values()).sort((b,T)=>x.indexOf(b.ref.current)-x.indexOf(T.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:o,Slot:c,ItemSlot:p},v,i]}var P1=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],An=P1.reduce((t,e)=>{const n=ph(`Primitive.${e}`),i=N.forwardRef((r,s)=>{const{asChild:o,...a}=r,l=o?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),P.jsx(l,{...a,ref:s})});return i.displayName=`Primitive.${e}`,{...t,[e]:i}},{});function A_(t,e){t&&Ml.flushSync(()=>t.dispatchEvent(e))}function es(t){const e=N.useRef(t);return N.useEffect(()=>{e.current=t}),N.useMemo(()=>(...n)=>{var i;return(i=e.current)==null?void 0:i.call(e,...n)},[])}function D1(t,e=globalThis==null?void 0:globalThis.document){const n=es(t);N.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[n,e])}var N1="DismissableLayer",mh="dismissableLayer.update",L1="dismissableLayer.pointerDownOutside",I1="dismissableLayer.focusOutside",x0,C_=N.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),ym=N.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=t,c=N.useContext(C_),[d,f]=N.useState(null),u=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=N.useState({}),v=vi(e,T=>f(T)),y=Array.from(c.layers),[m]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),h=y.indexOf(m),g=d?y.indexOf(d):-1,x=c.layersWithOutsidePointerEventsDisabled.size>0,S=g>=h,E=U1(T=>{const _=T.target,w=[...c.branches].some(D=>D.contains(_));!S||w||(r==null||r(T),o==null||o(T),T.defaultPrevented||a==null||a())},u),b=O1(T=>{const _=T.target;[...c.branches].some(D=>D.contains(_))||(s==null||s(T),o==null||o(T),T.defaultPrevented||a==null||a())},u);return D1(T=>{g===c.layers.size-1&&(i==null||i(T),!T.defaultPrevented&&a&&(T.preventDefault(),a()))},u),N.useEffect(()=>{if(d)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(x0=u.body.style.pointerEvents,u.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(d)),c.layers.add(d),y0(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(u.body.style.pointerEvents=x0)}},[d,u,n,c]),N.useEffect(()=>()=>{d&&(c.layers.delete(d),c.layersWithOutsidePointerEventsDisabled.delete(d),y0())},[d,c]),N.useEffect(()=>{const T=()=>p({});return document.addEventListener(mh,T),()=>document.removeEventListener(mh,T)},[]),P.jsx(An.div,{...l,ref:v,style:{pointerEvents:x?S?"auto":"none":void 0,...t.style},onFocusCapture:Ot(t.onFocusCapture,b.onFocusCapture),onBlurCapture:Ot(t.onBlurCapture,b.onBlurCapture),onPointerDownCapture:Ot(t.onPointerDownCapture,E.onPointerDownCapture)})});ym.displayName=N1;var F1="DismissableLayerBranch",R_=N.forwardRef((t,e)=>{const n=N.useContext(C_),i=N.useRef(null),r=vi(e,i);return N.useEffect(()=>{const s=i.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),P.jsx(An.div,{...t,ref:r})});R_.displayName=F1;function U1(t,e=globalThis==null?void 0:globalThis.document){const n=es(t),i=N.useRef(!1),r=N.useRef(()=>{});return N.useEffect(()=>{const s=a=>{if(a.target&&!i.current){let l=function(){P_(L1,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);i.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",s),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function O1(t,e=globalThis==null?void 0:globalThis.document){const n=es(t),i=N.useRef(!1);return N.useEffect(()=>{const r=s=>{s.target&&!i.current&&P_(I1,n,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function y0(){const t=new CustomEvent(mh);document.dispatchEvent(t)}function P_(t,e,n,{discrete:i}){const r=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?A_(r,s):r.dispatchEvent(s)}var k1=ym,B1=R_,ts=globalThis!=null&&globalThis.document?N.useLayoutEffect:()=>{},z1="Portal",D_=N.forwardRef((t,e)=>{var a;const{container:n,...i}=t,[r,s]=N.useState(!1);ts(()=>s(!0),[]);const o=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return o?w_.createPortal(P.jsx(An.div,{...i,ref:e}),o):null});D_.displayName=z1;function V1(t,e){return N.useReducer((n,i)=>e[n][i]??n,t)}var _m=t=>{const{present:e,children:n}=t,i=H1(e),r=typeof n=="function"?n({present:i.isPresent}):N.Children.only(n),s=vi(i.ref,G1(r));return typeof n=="function"||i.isPresent?N.cloneElement(r,{ref:s}):null};_m.displayName="Presence";function H1(t){const[e,n]=N.useState(),i=N.useRef(null),r=N.useRef(t),s=N.useRef("none"),o=t?"mounted":"unmounted",[a,l]=V1(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return N.useEffect(()=>{const c=ql(i.current);s.current=a==="mounted"?c:"none"},[a]),ts(()=>{const c=i.current,d=r.current;if(d!==t){const u=s.current,p=ql(c);t?l("MOUNT"):p==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(d&&u!==p?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),ts(()=>{if(e){let c;const d=e.ownerDocument.defaultView??window,f=p=>{const y=ql(i.current).includes(p.animationName);if(p.target===e&&y&&(l("ANIMATION_END"),!r.current)){const m=e.style.animationFillMode;e.style.animationFillMode="forwards",c=d.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=m)})}},u=p=>{p.target===e&&(s.current=ql(i.current))};return e.addEventListener("animationstart",u),e.addEventListener("animationcancel",f),e.addEventListener("animationend",f),()=>{d.clearTimeout(c),e.removeEventListener("animationstart",u),e.removeEventListener("animationcancel",f),e.removeEventListener("animationend",f)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:N.useCallback(c=>{i.current=c?getComputedStyle(c):null,n(c)},[])}}function ql(t){return(t==null?void 0:t.animationName)||"none"}function G1(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var W1=_x[" useInsertionEffect ".trim().toString()]||ts;function j1({prop:t,defaultProp:e,onChange:n=()=>{},caller:i}){const[r,s,o]=X1({defaultProp:e,onChange:n}),a=t!==void 0,l=a?t:r;{const d=N.useRef(t!==void 0);N.useEffect(()=>{const f=d.current;f!==a&&console.warn(`${i} is changing from ${f?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=a},[a,i])}const c=N.useCallback(d=>{var f;if(a){const u=$1(d)?d(t):d;u!==t&&((f=o.current)==null||f.call(o,u))}else s(d)},[a,t,s,o]);return[l,c]}function X1({defaultProp:t,onChange:e}){const[n,i]=N.useState(t),r=N.useRef(n),s=N.useRef(e);return W1(()=>{s.current=e},[e]),N.useEffect(()=>{var o;r.current!==n&&((o=s.current)==null||o.call(s,n),r.current=n)},[n,r]),[n,i,s]}function $1(t){return typeof t=="function"}var q1=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Y1="VisuallyHidden",Hu=N.forwardRef((t,e)=>P.jsx(An.span,{...t,ref:e,style:{...q1,...t.style}}));Hu.displayName=Y1;var K1=Hu,Sm="ToastProvider",[Mm,Q1,Z1]=R1("Toast"),[N_,DI]=Vu("Toast",[Z1]),[J1,Gu]=N_(Sm),L_=t=>{const{__scopeToast:e,label:n="Notification",duration:i=5e3,swipeDirection:r="right",swipeThreshold:s=50,children:o}=t,[a,l]=N.useState(null),[c,d]=N.useState(0),f=N.useRef(!1),u=N.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Sm}\`. Expected non-empty \`string\`.`),P.jsx(Mm.Provider,{scope:e,children:P.jsx(J1,{scope:e,label:n,duration:i,swipeDirection:r,swipeThreshold:s,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:N.useCallback(()=>d(p=>p+1),[]),onToastRemove:N.useCallback(()=>d(p=>p-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:u,children:o})})};L_.displayName=Sm;var I_="ToastViewport",eb=["F8"],gh="toast.viewportPause",vh="toast.viewportResume",F_=N.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:i=eb,label:r="Notifications ({hotkey})",...s}=t,o=Gu(I_,n),a=Q1(n),l=N.useRef(null),c=N.useRef(null),d=N.useRef(null),f=N.useRef(null),u=vi(e,f,o.onViewportChange),p=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),v=o.toastCount>0;N.useEffect(()=>{const m=h=>{var x;i.length!==0&&i.every(S=>h[S]||h.code===S)&&((x=f.current)==null||x.focus())};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[i]),N.useEffect(()=>{const m=l.current,h=f.current;if(v&&m&&h){const g=()=>{if(!o.isClosePausedRef.current){const b=new CustomEvent(gh);h.dispatchEvent(b),o.isClosePausedRef.current=!0}},x=()=>{if(o.isClosePausedRef.current){const b=new CustomEvent(vh);h.dispatchEvent(b),o.isClosePausedRef.current=!1}},S=b=>{!m.contains(b.relatedTarget)&&x()},E=()=>{m.contains(document.activeElement)||x()};return m.addEventListener("focusin",g),m.addEventListener("focusout",S),m.addEventListener("pointermove",g),m.addEventListener("pointerleave",E),window.addEventListener("blur",g),window.addEventListener("focus",x),()=>{m.removeEventListener("focusin",g),m.removeEventListener("focusout",S),m.removeEventListener("pointermove",g),m.removeEventListener("pointerleave",E),window.removeEventListener("blur",g),window.removeEventListener("focus",x)}}},[v,o.isClosePausedRef]);const y=N.useCallback(({tabbingDirection:m})=>{const g=a().map(x=>{const S=x.ref.current,E=[S,...hb(S)];return m==="forwards"?E:E.reverse()});return(m==="forwards"?g.reverse():g).flat()},[a]);return N.useEffect(()=>{const m=f.current;if(m){const h=g=>{var E,b,T;const x=g.altKey||g.ctrlKey||g.metaKey;if(g.key==="Tab"&&!x){const _=document.activeElement,w=g.shiftKey;if(g.target===m&&w){(E=c.current)==null||E.focus();return}const L=y({tabbingDirection:w?"backwards":"forwards"}),H=L.findIndex(I=>I===_);Fd(L.slice(H+1))?g.preventDefault():w?(b=c.current)==null||b.focus():(T=d.current)==null||T.focus()}};return m.addEventListener("keydown",h),()=>m.removeEventListener("keydown",h)}},[a,y]),P.jsxs(B1,{ref:l,role:"region","aria-label":r.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:v?void 0:"none"},children:[v&&P.jsx(xh,{ref:c,onFocusFromOutsideViewport:()=>{const m=y({tabbingDirection:"forwards"});Fd(m)}}),P.jsx(Mm.Slot,{scope:n,children:P.jsx(An.ol,{tabIndex:-1,...s,ref:u})}),v&&P.jsx(xh,{ref:d,onFocusFromOutsideViewport:()=>{const m=y({tabbingDirection:"backwards"});Fd(m)}})]})});F_.displayName=I_;var U_="ToastFocusProxy",xh=N.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:i,...r}=t,s=Gu(U_,n);return P.jsx(Hu,{"aria-hidden":!0,tabIndex:0,...r,ref:e,style:{position:"fixed"},onFocus:o=>{var c;const a=o.relatedTarget;!((c=s.viewport)!=null&&c.contains(a))&&i()}})});xh.displayName=U_;var wl="Toast",tb="toast.swipeStart",nb="toast.swipeMove",ib="toast.swipeCancel",rb="toast.swipeEnd",O_=N.forwardRef((t,e)=>{const{forceMount:n,open:i,defaultOpen:r,onOpenChange:s,...o}=t,[a,l]=j1({prop:i,defaultProp:r??!0,onChange:s,caller:wl});return P.jsx(_m,{present:n||a,children:P.jsx(ab,{open:a,...o,ref:e,onClose:()=>l(!1),onPause:es(t.onPause),onResume:es(t.onResume),onSwipeStart:Ot(t.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Ot(t.onSwipeMove,c=>{const{x:d,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${f}px`)}),onSwipeCancel:Ot(t.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Ot(t.onSwipeEnd,c=>{const{x:d,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${f}px`),l(!1)})})})});O_.displayName=wl;var[sb,ob]=N_(wl,{onClose(){}}),ab=N.forwardRef((t,e)=>{const{__scopeToast:n,type:i="foreground",duration:r,open:s,onClose:o,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:d,onSwipeMove:f,onSwipeCancel:u,onSwipeEnd:p,...v}=t,y=Gu(wl,n),[m,h]=N.useState(null),g=vi(e,I=>h(I)),x=N.useRef(null),S=N.useRef(null),E=r||y.duration,b=N.useRef(0),T=N.useRef(E),_=N.useRef(0),{onToastAdd:w,onToastRemove:D}=y,C=es(()=>{var B;(m==null?void 0:m.contains(document.activeElement))&&((B=y.viewport)==null||B.focus()),o()}),L=N.useCallback(I=>{!I||I===1/0||(window.clearTimeout(_.current),b.current=new Date().getTime(),_.current=window.setTimeout(C,I))},[C]);N.useEffect(()=>{const I=y.viewport;if(I){const B=()=>{L(T.current),c==null||c()},V=()=>{const U=new Date().getTime()-b.current;T.current=T.current-U,window.clearTimeout(_.current),l==null||l()};return I.addEventListener(gh,V),I.addEventListener(vh,B),()=>{I.removeEventListener(gh,V),I.removeEventListener(vh,B)}}},[y.viewport,E,l,c,L]),N.useEffect(()=>{s&&!y.isClosePausedRef.current&&L(E)},[s,E,y.isClosePausedRef,L]),N.useEffect(()=>(w(),()=>D()),[w,D]);const H=N.useMemo(()=>m?W_(m):null,[m]);return y.viewport?P.jsxs(P.Fragment,{children:[H&&P.jsx(lb,{__scopeToast:n,role:"status","aria-live":i==="foreground"?"assertive":"polite","aria-atomic":!0,children:H}),P.jsx(sb,{scope:n,onClose:C,children:Ml.createPortal(P.jsx(Mm.ItemSlot,{scope:n,children:P.jsx(k1,{asChild:!0,onEscapeKeyDown:Ot(a,()=>{y.isFocusedToastEscapeKeyDownRef.current||C(),y.isFocusedToastEscapeKeyDownRef.current=!1}),children:P.jsx(An.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":y.swipeDirection,...v,ref:g,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:Ot(t.onKeyDown,I=>{I.key==="Escape"&&(a==null||a(I.nativeEvent),I.nativeEvent.defaultPrevented||(y.isFocusedToastEscapeKeyDownRef.current=!0,C()))}),onPointerDown:Ot(t.onPointerDown,I=>{I.button===0&&(x.current={x:I.clientX,y:I.clientY})}),onPointerMove:Ot(t.onPointerMove,I=>{if(!x.current)return;const B=I.clientX-x.current.x,V=I.clientY-x.current.y,U=!!S.current,O=["left","right"].includes(y.swipeDirection),k=["left","up"].includes(y.swipeDirection)?Math.min:Math.max,q=O?k(0,B):0,re=O?0:k(0,V),ee=I.pointerType==="touch"?10:2,me={x:q,y:re},Ce={originalEvent:I,delta:me};U?(S.current=me,Yl(nb,f,Ce,{discrete:!1})):_0(me,y.swipeDirection,ee)?(S.current=me,Yl(tb,d,Ce,{discrete:!1}),I.target.setPointerCapture(I.pointerId)):(Math.abs(B)>ee||Math.abs(V)>ee)&&(x.current=null)}),onPointerUp:Ot(t.onPointerUp,I=>{const B=S.current,V=I.target;if(V.hasPointerCapture(I.pointerId)&&V.releasePointerCapture(I.pointerId),S.current=null,x.current=null,B){const U=I.currentTarget,O={originalEvent:I,delta:B};_0(B,y.swipeDirection,y.swipeThreshold)?Yl(rb,p,O,{discrete:!0}):Yl(ib,u,O,{discrete:!0}),U.addEventListener("click",k=>k.preventDefault(),{once:!0})}})})})}),y.viewport)})]}):null}),lb=t=>{const{__scopeToast:e,children:n,...i}=t,r=Gu(wl,e),[s,o]=N.useState(!1),[a,l]=N.useState(!1);return db(()=>o(!0)),N.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:P.jsx(D_,{asChild:!0,children:P.jsx(Hu,{...i,children:s&&P.jsxs(P.Fragment,{children:[r.label," ",n]})})})},cb="ToastTitle",k_=N.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return P.jsx(An.div,{...i,ref:e})});k_.displayName=cb;var ub="ToastDescription",B_=N.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return P.jsx(An.div,{...i,ref:e})});B_.displayName=ub;var z_="ToastAction",V_=N.forwardRef((t,e)=>{const{altText:n,...i}=t;return n.trim()?P.jsx(G_,{altText:n,asChild:!0,children:P.jsx(wm,{...i,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${z_}\`. Expected non-empty \`string\`.`),null)});V_.displayName=z_;var H_="ToastClose",wm=N.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t,r=ob(H_,n);return P.jsx(G_,{asChild:!0,children:P.jsx(An.button,{type:"button",...i,ref:e,onClick:Ot(t.onClick,r.onClose)})})});wm.displayName=H_;var G_=N.forwardRef((t,e)=>{const{__scopeToast:n,altText:i,...r}=t;return P.jsx(An.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...r,ref:e})});function W_(t){const e=[];return Array.from(t.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&e.push(i.textContent),fb(i)){const r=i.ariaHidden||i.hidden||i.style.display==="none",s=i.dataset.radixToastAnnounceExclude==="";if(!r)if(s){const o=i.dataset.radixToastAnnounceAlt;o&&e.push(o)}else e.push(...W_(i))}}),e}function Yl(t,e,n,{discrete:i}){const r=n.originalEvent.currentTarget,s=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?A_(r,s):r.dispatchEvent(s)}var _0=(t,e,n=0)=>{const i=Math.abs(t.x),r=Math.abs(t.y),s=i>r;return e==="left"||e==="right"?s&&i>n:!s&&r>n};function db(t=()=>{}){const e=es(t);ts(()=>{let n=0,i=0;return n=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(i)}},[e])}function fb(t){return t.nodeType===t.ELEMENT_NODE}function hb(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function Fd(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var pb=L_,j_=F_,X_=O_,$_=k_,q_=B_,Y_=V_,K_=wm;function Q_(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=Q_(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function Z_(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=Q_(t))&&(i&&(i+=" "),i+=e);return i}const S0=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,M0=Z_,mb=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return M0(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const d=n==null?void 0:n[c],f=s==null?void 0:s[c];if(d===null)return null;const u=S0(d)||S0(f);return r[c][u]}),a=n&&Object.entries(n).reduce((c,d)=>{let[f,u]=d;return u===void 0||(c[f]=u),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,d)=>{let{class:f,className:u,...p}=d;return Object.entries(p).every(v=>{let[y,m]=v;return Array.isArray(m)?m.includes({...s,...a}[y]):{...s,...a}[y]===m})?[...c,f,u]:c},[]);return M0(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),J_=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=N.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>N.createElement("svg",{ref:l,...vb,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:J_("lucide",r),...a},[...o.map(([c,d])=>N.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=(t,e)=>{const n=N.forwardRef(({className:i,...r},s)=>N.createElement(xb,{ref:s,iconNode:e,className:J_(`lucide-${gb(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=Zn("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=Zn("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=Zn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=Zn("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=Zn("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=Zn("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=Zn("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=Zn("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=Zn("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=Zn("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=Zn("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=Zn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Em="-",Rb=t=>{const e=Db(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{const a=o.split(Em);return a[0]===""&&a.length!==1&&a.shift(),tS(a,e)||Pb(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},tS=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?tS(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join(Em);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},w0=/^\[(.+)\]$/,Pb=t=>{if(w0.test(t)){const e=w0.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},Db=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return Lb(Object.entries(t.classGroups),n).forEach(([s,o])=>{yh(o,i,s,e)}),i},yh=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:E0(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(Nb(r)){yh(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,o])=>{yh(o,E0(e,s),n,i)})})},E0=(t,e)=>{let n=t;return e.split(Em).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},Nb=t=>t.isThemeGetter,Lb=(t,e)=>e?t.map(([n,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,r]}):t,Ib=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,i=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){n.has(s)?n.set(s,o):r(s,o)}}},nS="!",Fb=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],s=e.length,o=a=>{const l=[];let c=0,d=0,f;for(let m=0;m<a.length;m++){let h=a[m];if(c===0){if(h===r&&(i||a.slice(m,m+s)===e)){l.push(a.slice(d,m)),d=m+s;continue}if(h==="/"){f=m;continue}}h==="["?c++:h==="]"&&c--}const u=l.length===0?a:a.substring(d),p=u.startsWith(nS),v=p?u.substring(1):u,y=f&&f>d?f-d:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:v,maybePostfixModifierPosition:y}};return n?a=>n({className:a,parseClassName:o}):o},Ub=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},Ob=t=>({cache:Ib(t.cacheSize),parseClassName:Fb(t),...Rb(t)}),kb=/\s+/,Bb=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],o=t.trim().split(kb);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:d,hasImportantModifier:f,baseClassName:u,maybePostfixModifierPosition:p}=n(c);let v=!!p,y=i(v?u.substring(0,p):u);if(!y){if(!v){a=c+(a.length>0?" "+a:a);continue}if(y=i(u),!y){a=c+(a.length>0?" "+a:a);continue}v=!1}const m=Ub(d).join(":"),h=f?m+nS:m,g=h+y;if(s.includes(g))continue;s.push(g);const x=r(y,v);for(let S=0;S<x.length;++S){const E=x[S];s.push(h+E)}a=c+(a.length>0?" "+a:a)}return a};function zb(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=iS(e))&&(i&&(i+=" "),i+=n);return i}const iS=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=iS(t[i]))&&(n&&(n+=" "),n+=e);return n};function Vb(t,...e){let n,i,r,s=o;function o(l){const c=e.reduce((d,f)=>f(d),t());return n=Ob(c),i=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const d=Bb(l,n);return r(l,d),d}return function(){return s(zb.apply(null,arguments))}}const yt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},rS=/^\[(?:([a-z-]+):)?(.+)\]$/i,Hb=/^\d+\/\d+$/,Gb=new Set(["px","full","screen"]),Wb=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,jb=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Xb=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,$b=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,qb=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Xi=t=>Ao(t)||Gb.has(t)||Hb.test(t),Sr=t=>ra(t,"length",nT),Ao=t=>!!t&&!Number.isNaN(Number(t)),Od=t=>ra(t,"number",Ao),ya=t=>!!t&&Number.isInteger(Number(t)),Yb=t=>t.endsWith("%")&&Ao(t.slice(0,-1)),$e=t=>rS.test(t),Mr=t=>Wb.test(t),Kb=new Set(["length","size","percentage"]),Qb=t=>ra(t,Kb,sS),Zb=t=>ra(t,"position",sS),Jb=new Set(["image","url"]),eT=t=>ra(t,Jb,rT),tT=t=>ra(t,"",iT),_a=()=>!0,ra=(t,e,n)=>{const i=rS.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},nT=t=>jb.test(t)&&!Xb.test(t),sS=()=>!1,iT=t=>$b.test(t),rT=t=>qb.test(t),sT=()=>{const t=yt("colors"),e=yt("spacing"),n=yt("blur"),i=yt("brightness"),r=yt("borderColor"),s=yt("borderRadius"),o=yt("borderSpacing"),a=yt("borderWidth"),l=yt("contrast"),c=yt("grayscale"),d=yt("hueRotate"),f=yt("invert"),u=yt("gap"),p=yt("gradientColorStops"),v=yt("gradientColorStopPositions"),y=yt("inset"),m=yt("margin"),h=yt("opacity"),g=yt("padding"),x=yt("saturate"),S=yt("scale"),E=yt("sepia"),b=yt("skew"),T=yt("space"),_=yt("translate"),w=()=>["auto","contain","none"],D=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto",$e,e],L=()=>[$e,e],H=()=>["",Xi,Sr],I=()=>["auto",Ao,$e],B=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],U=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],O=()=>["start","end","center","between","around","evenly","stretch"],k=()=>["","0",$e],q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],re=()=>[Ao,$e];return{cacheSize:500,separator:":",theme:{colors:[_a],spacing:[Xi,Sr],blur:["none","",Mr,$e],brightness:re(),borderColor:[t],borderRadius:["none","","full",Mr,$e],borderSpacing:L(),borderWidth:H(),contrast:re(),grayscale:k(),hueRotate:re(),invert:k(),gap:L(),gradientColorStops:[t],gradientColorStopPositions:[Yb,Sr],inset:C(),margin:C(),opacity:re(),padding:L(),saturate:re(),scale:re(),sepia:k(),skew:re(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",$e]}],container:["container"],columns:[{columns:[Mr]}],"break-after":[{"break-after":q()}],"break-before":[{"break-before":q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...B(),$e]}],overflow:[{overflow:D()}],"overflow-x":[{"overflow-x":D()}],"overflow-y":[{"overflow-y":D()}],overscroll:[{overscroll:w()}],"overscroll-x":[{"overscroll-x":w()}],"overscroll-y":[{"overscroll-y":w()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ya,$e]}],basis:[{basis:C()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",$e]}],grow:[{grow:k()}],shrink:[{shrink:k()}],order:[{order:["first","last","none",ya,$e]}],"grid-cols":[{"grid-cols":[_a]}],"col-start-end":[{col:["auto",{span:["full",ya,$e]},$e]}],"col-start":[{"col-start":I()}],"col-end":[{"col-end":I()}],"grid-rows":[{"grid-rows":[_a]}],"row-start-end":[{row:["auto",{span:[ya,$e]},$e]}],"row-start":[{"row-start":I()}],"row-end":[{"row-end":I()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",$e]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",$e]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal",...O()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...O(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...O(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[T]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[T]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",$e,e]}],"min-w":[{"min-w":[$e,e,"min","max","fit"]}],"max-w":[{"max-w":[$e,e,"none","full","min","max","fit","prose",{screen:[Mr]},Mr]}],h:[{h:[$e,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[$e,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[$e,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[$e,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Mr,Sr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Od]}],"font-family":[{font:[_a]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",$e]}],"line-clamp":[{"line-clamp":["none",Ao,Od]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Xi,$e]}],"list-image":[{"list-image":["none",$e]}],"list-style-type":[{list:["none","disc","decimal",$e]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Xi,Sr]}],"underline-offset":[{"underline-offset":["auto",Xi,$e]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",$e]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",$e]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...B(),Zb]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Qb]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},eT]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:V()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[Xi,$e]}],"outline-w":[{outline:[Xi,Sr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:H()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[Xi,Sr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Mr,tT]}],"shadow-color":[{shadow:[_a]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...U(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":U()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Mr,$e]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[x]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",$e]}],duration:[{duration:re()}],ease:[{ease:["linear","in","out","in-out",$e]}],delay:[{delay:re()}],animate:[{animate:["none","spin","ping","pulse","bounce",$e]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[ya,$e]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[b]}],"skew-y":[{"skew-y":[b]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",$e]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",$e]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",$e]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Xi,Sr,Od]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},oT=Vb(sT);function Ws(...t){return oT(Z_(t))}const aT=pb,oS=N.forwardRef(({className:t,...e},n)=>P.jsx(j_,{ref:n,className:Ws("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));oS.displayName=j_.displayName;const lT=mb("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),aS=N.forwardRef(({className:t,variant:e,...n},i)=>P.jsx(X_,{ref:i,className:Ws(lT({variant:e}),t),...n}));aS.displayName=X_.displayName;const cT=N.forwardRef(({className:t,...e},n)=>P.jsx(Y_,{ref:n,className:Ws("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",t),...e}));cT.displayName=Y_.displayName;const lS=N.forwardRef(({className:t,...e},n)=>P.jsx(K_,{ref:n,className:Ws("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:P.jsx(eS,{className:"h-4 w-4"})}));lS.displayName=K_.displayName;const cS=N.forwardRef(({className:t,...e},n)=>P.jsx($_,{ref:n,className:Ws("text-sm font-semibold",t),...e}));cS.displayName=$_.displayName;const uS=N.forwardRef(({className:t,...e},n)=>P.jsx(q_,{ref:n,className:Ws("text-sm opacity-90",t),...e}));uS.displayName=q_.displayName;function uT(){const{toasts:t}=M1();return P.jsxs(aT,{children:[t.map(function({id:e,title:n,description:i,action:r,...s}){return P.jsxs(aS,{...s,children:[P.jsxs("div",{className:"grid gap-1",children:[n&&P.jsx(cS,{children:n}),i&&P.jsx(uS,{children:i})]}),r,P.jsx(lS,{})]},e)}),P.jsx(oS,{})]})}var b0=["light","dark"],dT="(prefers-color-scheme: dark)",fT=N.createContext(void 0),hT={setTheme:t=>{},themes:[]},pT=()=>{var t;return(t=N.useContext(fT))!=null?t:hT};N.memo(({forcedTheme:t,storageKey:e,attribute:n,enableSystem:i,enableColorScheme:r,defaultTheme:s,value:o,attrs:a,nonce:l})=>{let c=s==="system",d=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(v=>`'${v}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=r?b0.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",u=(v,y=!1,m=!0)=>{let h=o?o[v]:v,g=y?v+"|| ''":`'${h}'`,x="";return r&&m&&!y&&b0.includes(v)&&(x+=`d.style.colorScheme = '${v}';`),n==="class"?y||h?x+=`c.add(${g})`:x+="null":h&&(x+=`d[s](n,${g})`),x},p=t?`!function(){${d}${u(t)}}()`:i?`!function(){try{${d}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${c})){var t='${dT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${u("dark")}}else{${u("light")}}}else if(e){${o?`var x=${JSON.stringify(o)};`:""}${u(o?"x[e]":"e",!0)}}${c?"":"else{"+u(s,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${e}');if(e){${o?`var x=${JSON.stringify(o)};`:""}${u(o?"x[e]":"e",!0)}}else{${u(s,!1,!1)};}${f}}catch(t){}}();`;return N.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:p}})});var mT=t=>{switch(t){case"success":return xT;case"info":return _T;case"warning":return yT;case"error":return ST;default:return null}},gT=Array(12).fill(0),vT=({visible:t,className:e})=>pe.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":t},pe.createElement("div",{className:"sonner-spinner"},gT.map((n,i)=>pe.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${i}`})))),xT=pe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},pe.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),yT=pe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},pe.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),_T=pe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},pe.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),ST=pe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},pe.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),MT=pe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},pe.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),pe.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),wT=()=>{let[t,e]=pe.useState(document.hidden);return pe.useEffect(()=>{let n=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),t},_h=1,ET=class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach(e=>e(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:n,...i}=t,r=typeof(t==null?void 0:t.id)=="number"||((e=t.id)==null?void 0:e.length)>0?t.id:_h++,s=this.toasts.find(a=>a.id===r),o=t.dismissible===void 0?!0:t.dismissible;return this.dismissedToasts.has(r)&&this.dismissedToasts.delete(r),s?this.toasts=this.toasts.map(a=>a.id===r?(this.publish({...a,...t,id:r,title:n}),{...a,...t,id:r,dismissible:o,title:n}):a):this.addToast({title:n,...i,dismissible:o,id:r}),r},this.dismiss=t=>(this.dismissedToasts.add(t),t||this.toasts.forEach(e=>{this.subscribers.forEach(n=>n({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.info=(t,e)=>this.create({...e,type:"info",message:t}),this.warning=(t,e)=>this.create({...e,type:"warning",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{if(!e)return;let n;e.loading!==void 0&&(n=this.create({...e,promise:t,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let i=t instanceof Promise?t:t(),r=n!==void 0,s,o=i.then(async l=>{if(s=["resolve",l],pe.isValidElement(l))r=!1,this.create({id:n,type:"default",message:l});else if(TT(l)&&!l.ok){r=!1;let c=typeof e.error=="function"?await e.error(`HTTP error! status: ${l.status}`):e.error,d=typeof e.description=="function"?await e.description(`HTTP error! status: ${l.status}`):e.description;this.create({id:n,type:"error",message:c,description:d})}else if(e.success!==void 0){r=!1;let c=typeof e.success=="function"?await e.success(l):e.success,d=typeof e.description=="function"?await e.description(l):e.description;this.create({id:n,type:"success",message:c,description:d})}}).catch(async l=>{if(s=["reject",l],e.error!==void 0){r=!1;let c=typeof e.error=="function"?await e.error(l):e.error,d=typeof e.description=="function"?await e.description(l):e.description;this.create({id:n,type:"error",message:c,description:d})}}).finally(()=>{var l;r&&(this.dismiss(n),n=void 0),(l=e.finally)==null||l.call(e)}),a=()=>new Promise((l,c)=>o.then(()=>s[0]==="reject"?c(s[1]):l(s[1])).catch(c));return typeof n!="string"&&typeof n!="number"?{unwrap:a}:Object.assign(n,{unwrap:a})},this.custom=(t,e)=>{let n=(e==null?void 0:e.id)||_h++;return this.create({jsx:t(n),id:n,...e}),n},this.getActiveToasts=()=>this.toasts.filter(t=>!this.dismissedToasts.has(t.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},yn=new ET,bT=(t,e)=>{let n=(e==null?void 0:e.id)||_h++;return yn.addToast({title:t,...e,id:n}),n},TT=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",AT=bT,CT=()=>yn.toasts,RT=()=>yn.getActiveToasts();Object.assign(AT,{success:yn.success,info:yn.info,warning:yn.warning,error:yn.error,custom:yn.custom,message:yn.message,promise:yn.promise,dismiss:yn.dismiss,loading:yn.loading},{getHistory:CT,getToasts:RT});function PT(t,{insertAt:e}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",e==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}PT(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Kl(t){return t.label!==void 0}var DT=3,NT="32px",LT="16px",T0=4e3,IT=356,FT=14,UT=20,OT=200;function ni(...t){return t.filter(Boolean).join(" ")}function kT(t){let[e,n]=t.split("-"),i=[];return e&&i.push(e),n&&i.push(n),i}var BT=t=>{var e,n,i,r,s,o,a,l,c,d,f;let{invert:u,toast:p,unstyled:v,interacting:y,setHeights:m,visibleToasts:h,heights:g,index:x,toasts:S,expanded:E,removeToast:b,defaultRichColors:T,closeButton:_,style:w,cancelButtonStyle:D,actionButtonStyle:C,className:L="",descriptionClassName:H="",duration:I,position:B,gap:V,loadingIcon:U,expandByDefault:O,classNames:k,icons:q,closeButtonAriaLabel:re="Close toast",pauseWhenPageIsHidden:ee}=t,[me,Ce]=pe.useState(null),[Be,K]=pe.useState(null),[ne,ue]=pe.useState(!1),[ke,De]=pe.useState(!1),[Fe,vt]=pe.useState(!1),[Ge,et]=pe.useState(!1),[ct,Ve]=pe.useState(!1),[xt,F]=pe.useState(0),[pt,nt]=pe.useState(0),st=pe.useRef(p.duration||I||T0),Ae=pe.useRef(null),R=pe.useRef(null),M=x===0,G=x+1<=h,Q=p.type,ie=p.dismissible!==!1,J=p.className||"",Te=p.descriptionClassName||"",fe=pe.useMemo(()=>g.findIndex(se=>se.toastId===p.id)||0,[g,p.id]),Le=pe.useMemo(()=>{var se;return(se=p.closeButton)!=null?se:_},[p.closeButton,_]),Ue=pe.useMemo(()=>p.duration||I||T0,[p.duration,I]),ae=pe.useRef(0),ce=pe.useRef(0),be=pe.useRef(0),Me=pe.useRef(null),[_e,je]=B.split("-"),z=pe.useMemo(()=>g.reduce((se,ve,Oe)=>Oe>=fe?se:se+ve.height,0),[g,fe]),he=wT(),de=p.invert||u,Se=Q==="loading";ce.current=pe.useMemo(()=>fe*V+z,[fe,z]),pe.useEffect(()=>{st.current=Ue},[Ue]),pe.useEffect(()=>{ue(!0)},[]),pe.useEffect(()=>{let se=R.current;if(se){let ve=se.getBoundingClientRect().height;return nt(ve),m(Oe=>[{toastId:p.id,height:ve,position:p.position},...Oe]),()=>m(Oe=>Oe.filter(Xe=>Xe.toastId!==p.id))}},[m,p.id]),pe.useLayoutEffect(()=>{if(!ne)return;let se=R.current,ve=se.style.height;se.style.height="auto";let Oe=se.getBoundingClientRect().height;se.style.height=ve,nt(Oe),m(Xe=>Xe.find(Dt=>Dt.toastId===p.id)?Xe.map(Dt=>Dt.toastId===p.id?{...Dt,height:Oe}:Dt):[{toastId:p.id,height:Oe,position:p.position},...Xe])},[ne,p.title,p.description,m,p.id]);let oe=pe.useCallback(()=>{De(!0),F(ce.current),m(se=>se.filter(ve=>ve.toastId!==p.id)),setTimeout(()=>{b(p)},OT)},[p,b,m,ce]);pe.useEffect(()=>{if(p.promise&&Q==="loading"||p.duration===1/0||p.type==="loading")return;let se;return E||y||ee&&he?(()=>{if(be.current<ae.current){let ve=new Date().getTime()-ae.current;st.current=st.current-ve}be.current=new Date().getTime()})():st.current!==1/0&&(ae.current=new Date().getTime(),se=setTimeout(()=>{var ve;(ve=p.onAutoClose)==null||ve.call(p,p),oe()},st.current)),()=>clearTimeout(se)},[E,y,p,Q,ee,he,oe]),pe.useEffect(()=>{p.delete&&oe()},[oe,p.delete]);function Z(){var se,ve,Oe;return q!=null&&q.loading?pe.createElement("div",{className:ni(k==null?void 0:k.loader,(se=p==null?void 0:p.classNames)==null?void 0:se.loader,"sonner-loader"),"data-visible":Q==="loading"},q.loading):U?pe.createElement("div",{className:ni(k==null?void 0:k.loader,(ve=p==null?void 0:p.classNames)==null?void 0:ve.loader,"sonner-loader"),"data-visible":Q==="loading"},U):pe.createElement(vT,{className:ni(k==null?void 0:k.loader,(Oe=p==null?void 0:p.classNames)==null?void 0:Oe.loader),visible:Q==="loading"})}return pe.createElement("li",{tabIndex:0,ref:R,className:ni(L,J,k==null?void 0:k.toast,(e=p==null?void 0:p.classNames)==null?void 0:e.toast,k==null?void 0:k.default,k==null?void 0:k[Q],(n=p==null?void 0:p.classNames)==null?void 0:n[Q]),"data-sonner-toast":"","data-rich-colors":(i=p.richColors)!=null?i:T,"data-styled":!(p.jsx||p.unstyled||v),"data-mounted":ne,"data-promise":!!p.promise,"data-swiped":ct,"data-removed":ke,"data-visible":G,"data-y-position":_e,"data-x-position":je,"data-index":x,"data-front":M,"data-swiping":Fe,"data-dismissible":ie,"data-type":Q,"data-invert":de,"data-swipe-out":Ge,"data-swipe-direction":Be,"data-expanded":!!(E||O&&ne),style:{"--index":x,"--toasts-before":x,"--z-index":S.length-x,"--offset":`${ke?xt:ce.current}px`,"--initial-height":O?"auto":`${pt}px`,...w,...p.style},onDragEnd:()=>{vt(!1),Ce(null),Me.current=null},onPointerDown:se=>{Se||!ie||(Ae.current=new Date,F(ce.current),se.target.setPointerCapture(se.pointerId),se.target.tagName!=="BUTTON"&&(vt(!0),Me.current={x:se.clientX,y:se.clientY}))},onPointerUp:()=>{var se,ve,Oe,Xe;if(Ge||!ie)return;Me.current=null;let Dt=Number(((se=R.current)==null?void 0:se.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Vt=Number(((ve=R.current)==null?void 0:ve.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Si=new Date().getTime()-((Oe=Ae.current)==null?void 0:Oe.getTime()),ln=me==="x"?Dt:Vt,Mi=Math.abs(ln)/Si;if(Math.abs(ln)>=UT||Mi>.11){F(ce.current),(Xe=p.onDismiss)==null||Xe.call(p,p),K(me==="x"?Dt>0?"right":"left":Vt>0?"down":"up"),oe(),et(!0),Ve(!1);return}vt(!1),Ce(null)},onPointerMove:se=>{var ve,Oe,Xe,Dt;if(!Me.current||!ie||((ve=window.getSelection())==null?void 0:ve.toString().length)>0)return;let Vt=se.clientY-Me.current.y,Si=se.clientX-Me.current.x,ln=(Oe=t.swipeDirections)!=null?Oe:kT(B);!me&&(Math.abs(Si)>1||Math.abs(Vt)>1)&&Ce(Math.abs(Si)>Math.abs(Vt)?"x":"y");let Mi={x:0,y:0};me==="y"?(ln.includes("top")||ln.includes("bottom"))&&(ln.includes("top")&&Vt<0||ln.includes("bottom")&&Vt>0)&&(Mi.y=Vt):me==="x"&&(ln.includes("left")||ln.includes("right"))&&(ln.includes("left")&&Si<0||ln.includes("right")&&Si>0)&&(Mi.x=Si),(Math.abs(Mi.x)>0||Math.abs(Mi.y)>0)&&Ve(!0),(Xe=R.current)==null||Xe.style.setProperty("--swipe-amount-x",`${Mi.x}px`),(Dt=R.current)==null||Dt.style.setProperty("--swipe-amount-y",`${Mi.y}px`)}},Le&&!p.jsx?pe.createElement("button",{"aria-label":re,"data-disabled":Se,"data-close-button":!0,onClick:Se||!ie?()=>{}:()=>{var se;oe(),(se=p.onDismiss)==null||se.call(p,p)},className:ni(k==null?void 0:k.closeButton,(r=p==null?void 0:p.classNames)==null?void 0:r.closeButton)},(s=q==null?void 0:q.close)!=null?s:MT):null,p.jsx||N.isValidElement(p.title)?p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title:pe.createElement(pe.Fragment,null,Q||p.icon||p.promise?pe.createElement("div",{"data-icon":"",className:ni(k==null?void 0:k.icon,(o=p==null?void 0:p.classNames)==null?void 0:o.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||Z():null,p.type!=="loading"?p.icon||(q==null?void 0:q[Q])||mT(Q):null):null,pe.createElement("div",{"data-content":"",className:ni(k==null?void 0:k.content,(a=p==null?void 0:p.classNames)==null?void 0:a.content)},pe.createElement("div",{"data-title":"",className:ni(k==null?void 0:k.title,(l=p==null?void 0:p.classNames)==null?void 0:l.title)},typeof p.title=="function"?p.title():p.title),p.description?pe.createElement("div",{"data-description":"",className:ni(H,Te,k==null?void 0:k.description,(c=p==null?void 0:p.classNames)==null?void 0:c.description)},typeof p.description=="function"?p.description():p.description):null),N.isValidElement(p.cancel)?p.cancel:p.cancel&&Kl(p.cancel)?pe.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||D,onClick:se=>{var ve,Oe;Kl(p.cancel)&&ie&&((Oe=(ve=p.cancel).onClick)==null||Oe.call(ve,se),oe())},className:ni(k==null?void 0:k.cancelButton,(d=p==null?void 0:p.classNames)==null?void 0:d.cancelButton)},p.cancel.label):null,N.isValidElement(p.action)?p.action:p.action&&Kl(p.action)?pe.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||C,onClick:se=>{var ve,Oe;Kl(p.action)&&((Oe=(ve=p.action).onClick)==null||Oe.call(ve,se),!se.defaultPrevented&&oe())},className:ni(k==null?void 0:k.actionButton,(f=p==null?void 0:p.classNames)==null?void 0:f.actionButton)},p.action.label):null))};function A0(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}function zT(t,e){let n={};return[t,e].forEach((i,r)=>{let s=r===1,o=s?"--mobile-offset":"--offset",a=s?LT:NT;function l(c){["top","right","bottom","left"].forEach(d=>{n[`${o}-${d}`]=typeof c=="number"?`${c}px`:c})}typeof i=="number"||typeof i=="string"?l(i):typeof i=="object"?["top","right","bottom","left"].forEach(c=>{i[c]===void 0?n[`${o}-${c}`]=a:n[`${o}-${c}`]=typeof i[c]=="number"?`${i[c]}px`:i[c]}):l(a)}),n}var VT=N.forwardRef(function(t,e){let{invert:n,position:i="bottom-right",hotkey:r=["altKey","KeyT"],expand:s,closeButton:o,className:a,offset:l,mobileOffset:c,theme:d="light",richColors:f,duration:u,style:p,visibleToasts:v=DT,toastOptions:y,dir:m=A0(),gap:h=FT,loadingIcon:g,icons:x,containerAriaLabel:S="Notifications",pauseWhenPageIsHidden:E}=t,[b,T]=pe.useState([]),_=pe.useMemo(()=>Array.from(new Set([i].concat(b.filter(ee=>ee.position).map(ee=>ee.position)))),[b,i]),[w,D]=pe.useState([]),[C,L]=pe.useState(!1),[H,I]=pe.useState(!1),[B,V]=pe.useState(d!=="system"?d:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),U=pe.useRef(null),O=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),k=pe.useRef(null),q=pe.useRef(!1),re=pe.useCallback(ee=>{T(me=>{var Ce;return(Ce=me.find(Be=>Be.id===ee.id))!=null&&Ce.delete||yn.dismiss(ee.id),me.filter(({id:Be})=>Be!==ee.id)})},[]);return pe.useEffect(()=>yn.subscribe(ee=>{if(ee.dismiss){T(me=>me.map(Ce=>Ce.id===ee.id?{...Ce,delete:!0}:Ce));return}setTimeout(()=>{w_.flushSync(()=>{T(me=>{let Ce=me.findIndex(Be=>Be.id===ee.id);return Ce!==-1?[...me.slice(0,Ce),{...me[Ce],...ee},...me.slice(Ce+1)]:[ee,...me]})})})}),[]),pe.useEffect(()=>{if(d!=="system"){V(d);return}if(d==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?V("dark"):V("light")),typeof window>"u")return;let ee=window.matchMedia("(prefers-color-scheme: dark)");try{ee.addEventListener("change",({matches:me})=>{V(me?"dark":"light")})}catch{ee.addListener(({matches:Ce})=>{try{V(Ce?"dark":"light")}catch(Be){console.error(Be)}})}},[d]),pe.useEffect(()=>{b.length<=1&&L(!1)},[b]),pe.useEffect(()=>{let ee=me=>{var Ce,Be;r.every(K=>me[K]||me.code===K)&&(L(!0),(Ce=U.current)==null||Ce.focus()),me.code==="Escape"&&(document.activeElement===U.current||(Be=U.current)!=null&&Be.contains(document.activeElement))&&L(!1)};return document.addEventListener("keydown",ee),()=>document.removeEventListener("keydown",ee)},[r]),pe.useEffect(()=>{if(U.current)return()=>{k.current&&(k.current.focus({preventScroll:!0}),k.current=null,q.current=!1)}},[U.current]),pe.createElement("section",{ref:e,"aria-label":`${S} ${O}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},_.map((ee,me)=>{var Ce;let[Be,K]=ee.split("-");return b.length?pe.createElement("ol",{key:ee,dir:m==="auto"?A0():m,tabIndex:-1,ref:U,className:a,"data-sonner-toaster":!0,"data-theme":B,"data-y-position":Be,"data-lifted":C&&b.length>1&&!s,"data-x-position":K,style:{"--front-toast-height":`${((Ce=w[0])==null?void 0:Ce.height)||0}px`,"--width":`${IT}px`,"--gap":`${h}px`,...p,...zT(l,c)},onBlur:ne=>{q.current&&!ne.currentTarget.contains(ne.relatedTarget)&&(q.current=!1,k.current&&(k.current.focus({preventScroll:!0}),k.current=null))},onFocus:ne=>{ne.target instanceof HTMLElement&&ne.target.dataset.dismissible==="false"||q.current||(q.current=!0,k.current=ne.relatedTarget)},onMouseEnter:()=>L(!0),onMouseMove:()=>L(!0),onMouseLeave:()=>{H||L(!1)},onDragEnd:()=>L(!1),onPointerDown:ne=>{ne.target instanceof HTMLElement&&ne.target.dataset.dismissible==="false"||I(!0)},onPointerUp:()=>I(!1)},b.filter(ne=>!ne.position&&me===0||ne.position===ee).map((ne,ue)=>{var ke,De;return pe.createElement(BT,{key:ne.id,icons:x,index:ue,toast:ne,defaultRichColors:f,duration:(ke=y==null?void 0:y.duration)!=null?ke:u,className:y==null?void 0:y.className,descriptionClassName:y==null?void 0:y.descriptionClassName,invert:n,visibleToasts:v,closeButton:(De=y==null?void 0:y.closeButton)!=null?De:o,interacting:H,position:ee,style:y==null?void 0:y.style,unstyled:y==null?void 0:y.unstyled,classNames:y==null?void 0:y.classNames,cancelButtonStyle:y==null?void 0:y.cancelButtonStyle,actionButtonStyle:y==null?void 0:y.actionButtonStyle,removeToast:re,toasts:b.filter(Fe=>Fe.position==ne.position),heights:w.filter(Fe=>Fe.position==ne.position),setHeights:D,expandByDefault:s,gap:h,loadingIcon:g,expanded:C,pauseWhenPageIsHidden:E,swipeDirections:t.swipeDirections})})):null}))});const HT=({...t})=>{const{theme:e="system"}=pT();return P.jsx(VT,{theme:e,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})},GT=["top","right","bottom","left"],ns=Math.min,Nn=Math.max,mu=Math.round,Ql=Math.floor,ki=t=>({x:t,y:t}),WT={left:"right",right:"left",bottom:"top",top:"bottom"},jT={start:"end",end:"start"};function Sh(t,e,n){return Nn(t,ns(e,n))}function hr(t,e){return typeof t=="function"?t(e):t}function pr(t){return t.split("-")[0]}function sa(t){return t.split("-")[1]}function bm(t){return t==="x"?"y":"x"}function Tm(t){return t==="y"?"height":"width"}const XT=new Set(["top","bottom"]);function Li(t){return XT.has(pr(t))?"y":"x"}function Am(t){return bm(Li(t))}function $T(t,e,n){n===void 0&&(n=!1);const i=sa(t),r=Am(t),s=Tm(r);let o=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=gu(o)),[o,gu(o)]}function qT(t){const e=gu(t);return[Mh(t),e,Mh(e)]}function Mh(t){return t.replace(/start|end/g,e=>jT[e])}const C0=["left","right"],R0=["right","left"],YT=["top","bottom"],KT=["bottom","top"];function QT(t,e,n){switch(t){case"top":case"bottom":return n?e?R0:C0:e?C0:R0;case"left":case"right":return e?YT:KT;default:return[]}}function ZT(t,e,n,i){const r=sa(t);let s=QT(pr(t),n==="start",i);return r&&(s=s.map(o=>o+"-"+r),e&&(s=s.concat(s.map(Mh)))),s}function gu(t){return t.replace(/left|right|bottom|top/g,e=>WT[e])}function JT(t){return{top:0,right:0,bottom:0,left:0,...t}}function dS(t){return typeof t!="number"?JT(t):{top:t,right:t,bottom:t,left:t}}function vu(t){const{x:e,y:n,width:i,height:r}=t;return{width:i,height:r,top:n,left:e,right:e+i,bottom:n+r,x:e,y:n}}function P0(t,e,n){let{reference:i,floating:r}=t;const s=Li(e),o=Am(e),a=Tm(o),l=pr(e),c=s==="y",d=i.x+i.width/2-r.width/2,f=i.y+i.height/2-r.height/2,u=i[a]/2-r[a]/2;let p;switch(l){case"top":p={x:d,y:i.y-r.height};break;case"bottom":p={x:d,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:f};break;case"left":p={x:i.x-r.width,y:f};break;default:p={x:i.x,y:i.y}}switch(sa(e)){case"start":p[o]-=u*(n&&c?-1:1);break;case"end":p[o]+=u*(n&&c?-1:1);break}return p}const eA=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:o}=n,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:f}=P0(c,i,l),u=i,p={},v=0;for(let y=0;y<a.length;y++){const{name:m,fn:h}=a[y],{x:g,y:x,data:S,reset:E}=await h({x:d,y:f,initialPlacement:i,placement:u,strategy:r,middlewareData:p,rects:c,platform:o,elements:{reference:t,floating:e}});d=g??d,f=x??f,p={...p,[m]:{...p[m],...S}},E&&v<=50&&(v++,typeof E=="object"&&(E.placement&&(u=E.placement),E.rects&&(c=E.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:r}):E.rects),{x:d,y:f}=P0(c,u,l)),y=-1)}return{x:d,y:f,placement:u,strategy:r,middlewareData:p}};async function al(t,e){var n;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:o,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:u=!1,padding:p=0}=hr(e,t),v=dS(p),m=a[u?f==="floating"?"reference":"floating":f],h=vu(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(m)))==null||n?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),g=f==="floating"?{x:i,y:r,width:o.floating.width,height:o.floating.height}:o.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),S=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},E=vu(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:g,offsetParent:x,strategy:l}):g);return{top:(h.top-E.top+v.top)/S.y,bottom:(E.bottom-h.bottom+v.bottom)/S.y,left:(h.left-E.left+v.left)/S.x,right:(E.right-h.right+v.right)/S.x}}const tA=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:s,platform:o,elements:a,middlewareData:l}=e,{element:c,padding:d=0}=hr(t,e)||{};if(c==null)return{};const f=dS(d),u={x:n,y:i},p=Am(r),v=Tm(p),y=await o.getDimensions(c),m=p==="y",h=m?"top":"left",g=m?"bottom":"right",x=m?"clientHeight":"clientWidth",S=s.reference[v]+s.reference[p]-u[p]-s.floating[v],E=u[p]-s.reference[p],b=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let T=b?b[x]:0;(!T||!await(o.isElement==null?void 0:o.isElement(b)))&&(T=a.floating[x]||s.floating[v]);const _=S/2-E/2,w=T/2-y[v]/2-1,D=ns(f[h],w),C=ns(f[g],w),L=D,H=T-y[v]-C,I=T/2-y[v]/2+_,B=Sh(L,I,H),V=!l.arrow&&sa(r)!=null&&I!==B&&s.reference[v]/2-(I<L?D:C)-y[v]/2<0,U=V?I<L?I-L:I-H:0;return{[p]:u[p]+U,data:{[p]:B,centerOffset:I-B-U,...V&&{alignmentOffset:U}},reset:V}}}),nA=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:r,middlewareData:s,rects:o,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:y=!0,...m}=hr(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const h=pr(r),g=Li(a),x=pr(a)===a,S=await(l.isRTL==null?void 0:l.isRTL(c.floating)),E=u||(x||!y?[gu(a)]:qT(a)),b=v!=="none";!u&&b&&E.push(...ZT(a,y,v,S));const T=[a,...E],_=await al(e,m),w=[];let D=((i=s.flip)==null?void 0:i.overflows)||[];if(d&&w.push(_[h]),f){const I=$T(r,o,S);w.push(_[I[0]],_[I[1]])}if(D=[...D,{placement:r,overflows:w}],!w.every(I=>I<=0)){var C,L;const I=(((C=s.flip)==null?void 0:C.index)||0)+1,B=T[I];if(B&&(!(f==="alignment"?g!==Li(B):!1)||D.every(O=>O.overflows[0]>0&&Li(O.placement)===g)))return{data:{index:I,overflows:D},reset:{placement:B}};let V=(L=D.filter(U=>U.overflows[0]<=0).sort((U,O)=>U.overflows[1]-O.overflows[1])[0])==null?void 0:L.placement;if(!V)switch(p){case"bestFit":{var H;const U=(H=D.filter(O=>{if(b){const k=Li(O.placement);return k===g||k==="y"}return!0}).map(O=>[O.placement,O.overflows.filter(k=>k>0).reduce((k,q)=>k+q,0)]).sort((O,k)=>O[1]-k[1])[0])==null?void 0:H[0];U&&(V=U);break}case"initialPlacement":V=a;break}if(r!==V)return{reset:{placement:V}}}return{}}}};function D0(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function N0(t){return GT.some(e=>t[e]>=0)}const iA=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...r}=hr(t,e);switch(i){case"referenceHidden":{const s=await al(e,{...r,elementContext:"reference"}),o=D0(s,n.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:N0(o)}}}case"escaped":{const s=await al(e,{...r,altBoundary:!0}),o=D0(s,n.floating);return{data:{escapedOffsets:o,escaped:N0(o)}}}default:return{}}}}},fS=new Set(["left","top"]);async function rA(t,e){const{placement:n,platform:i,elements:r}=t,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),o=pr(n),a=sa(n),l=Li(n)==="y",c=fS.has(o)?-1:1,d=s&&l?-1:1,f=hr(e,t);let{mainAxis:u,crossAxis:p,alignmentAxis:v}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&typeof v=="number"&&(p=a==="end"?v*-1:v),l?{x:p*d,y:u*c}:{x:u*c,y:p*d}}const sA=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:r,y:s,placement:o,middlewareData:a}=e,l=await rA(e,t);return o===((n=a.offset)==null?void 0:n.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:s+l.y,data:{...l,placement:o}}}}},oA=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:m=>{let{x:h,y:g}=m;return{x:h,y:g}}},...l}=hr(t,e),c={x:n,y:i},d=await al(e,l),f=Li(pr(r)),u=bm(f);let p=c[u],v=c[f];if(s){const m=u==="y"?"top":"left",h=u==="y"?"bottom":"right",g=p+d[m],x=p-d[h];p=Sh(g,p,x)}if(o){const m=f==="y"?"top":"left",h=f==="y"?"bottom":"right",g=v+d[m],x=v-d[h];v=Sh(g,v,x)}const y=a.fn({...e,[u]:p,[f]:v});return{...y,data:{x:y.x-n,y:y.y-i,enabled:{[u]:s,[f]:o}}}}}},aA=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:i,placement:r,rects:s,middlewareData:o}=e,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=hr(t,e),d={x:n,y:i},f=Li(r),u=bm(f);let p=d[u],v=d[f];const y=hr(a,e),m=typeof y=="number"?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(l){const x=u==="y"?"height":"width",S=s.reference[u]-s.floating[x]+m.mainAxis,E=s.reference[u]+s.reference[x]-m.mainAxis;p<S?p=S:p>E&&(p=E)}if(c){var h,g;const x=u==="y"?"width":"height",S=fS.has(pr(r)),E=s.reference[f]-s.floating[x]+(S&&((h=o.offset)==null?void 0:h[f])||0)+(S?0:m.crossAxis),b=s.reference[f]+s.reference[x]+(S?0:((g=o.offset)==null?void 0:g[f])||0)-(S?m.crossAxis:0);v<E?v=E:v>b&&(v=b)}return{[u]:p,[f]:v}}}},lA=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,i;const{placement:r,rects:s,platform:o,elements:a}=e,{apply:l=()=>{},...c}=hr(t,e),d=await al(e,c),f=pr(r),u=sa(r),p=Li(r)==="y",{width:v,height:y}=s.floating;let m,h;f==="top"||f==="bottom"?(m=f,h=u===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(h=f,m=u==="end"?"top":"bottom");const g=y-d.top-d.bottom,x=v-d.left-d.right,S=ns(y-d[m],g),E=ns(v-d[h],x),b=!e.middlewareData.shift;let T=S,_=E;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(_=x),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(T=g),b&&!u){const D=Nn(d.left,0),C=Nn(d.right,0),L=Nn(d.top,0),H=Nn(d.bottom,0);p?_=v-2*(D!==0||C!==0?D+C:Nn(d.left,d.right)):T=y-2*(L!==0||H!==0?L+H:Nn(d.top,d.bottom))}await l({...e,availableWidth:_,availableHeight:T});const w=await o.getDimensions(a.floating);return v!==w.width||y!==w.height?{reset:{rects:!0}}:{}}}};function Wu(){return typeof window<"u"}function oa(t){return hS(t)?(t.nodeName||"").toLowerCase():"#document"}function On(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function ji(t){var e;return(e=(hS(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function hS(t){return Wu()?t instanceof Node||t instanceof On(t).Node:!1}function xi(t){return Wu()?t instanceof Element||t instanceof On(t).Element:!1}function Vi(t){return Wu()?t instanceof HTMLElement||t instanceof On(t).HTMLElement:!1}function L0(t){return!Wu()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof On(t).ShadowRoot}const cA=new Set(["inline","contents"]);function El(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=yi(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!cA.has(r)}const uA=new Set(["table","td","th"]);function dA(t){return uA.has(oa(t))}const fA=[":popover-open",":modal"];function ju(t){return fA.some(e=>{try{return t.matches(e)}catch{return!1}})}const hA=["transform","translate","scale","rotate","perspective"],pA=["transform","translate","scale","rotate","perspective","filter"],mA=["paint","layout","strict","content"];function Cm(t){const e=Rm(),n=xi(t)?yi(t):t;return hA.some(i=>n[i]?n[i]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||pA.some(i=>(n.willChange||"").includes(i))||mA.some(i=>(n.contain||"").includes(i))}function gA(t){let e=is(t);for(;Vi(e)&&!qo(e);){if(Cm(e))return e;if(ju(e))return null;e=is(e)}return null}function Rm(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const vA=new Set(["html","body","#document"]);function qo(t){return vA.has(oa(t))}function yi(t){return On(t).getComputedStyle(t)}function Xu(t){return xi(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function is(t){if(oa(t)==="html")return t;const e=t.assignedSlot||t.parentNode||L0(t)&&t.host||ji(t);return L0(e)?e.host:e}function pS(t){const e=is(t);return qo(e)?t.ownerDocument?t.ownerDocument.body:t.body:Vi(e)&&El(e)?e:pS(e)}function ll(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=pS(t),s=r===((i=t.ownerDocument)==null?void 0:i.body),o=On(r);if(s){const a=wh(o);return e.concat(o,o.visualViewport||[],El(r)?r:[],a&&n?ll(a):[])}return e.concat(r,ll(r,[],n))}function wh(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function mS(t){const e=yi(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Vi(t),s=r?t.offsetWidth:n,o=r?t.offsetHeight:i,a=mu(n)!==s||mu(i)!==o;return a&&(n=s,i=o),{width:n,height:i,$:a}}function Pm(t){return xi(t)?t:t.contextElement}function Co(t){const e=Pm(t);if(!Vi(e))return ki(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:s}=mS(e);let o=(s?mu(n.width):n.width)/i,a=(s?mu(n.height):n.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const xA=ki(0);function gS(t){const e=On(t);return!Rm()||!e.visualViewport?xA:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function yA(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==On(t)?!1:e}function zs(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=Pm(t);let o=ki(1);e&&(i?xi(i)&&(o=Co(i)):o=Co(t));const a=yA(s,n,i)?gS(s):ki(0);let l=(r.left+a.x)/o.x,c=(r.top+a.y)/o.y,d=r.width/o.x,f=r.height/o.y;if(s){const u=On(s),p=i&&xi(i)?On(i):i;let v=u,y=wh(v);for(;y&&i&&p!==v;){const m=Co(y),h=y.getBoundingClientRect(),g=yi(y),x=h.left+(y.clientLeft+parseFloat(g.paddingLeft))*m.x,S=h.top+(y.clientTop+parseFloat(g.paddingTop))*m.y;l*=m.x,c*=m.y,d*=m.x,f*=m.y,l+=x,c+=S,v=On(y),y=wh(v)}}return vu({width:d,height:f,x:l,y:c})}function Dm(t,e){const n=Xu(t).scrollLeft;return e?e.left+n:zs(ji(t)).left+n}function vS(t,e,n){n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=i.left+e.scrollLeft-(n?0:Dm(t,i)),s=i.top+e.scrollTop;return{x:r,y:s}}function _A(t){let{elements:e,rect:n,offsetParent:i,strategy:r}=t;const s=r==="fixed",o=ji(i),a=e?ju(e.floating):!1;if(i===o||a&&s)return n;let l={scrollLeft:0,scrollTop:0},c=ki(1);const d=ki(0),f=Vi(i);if((f||!f&&!s)&&((oa(i)!=="body"||El(o))&&(l=Xu(i)),Vi(i))){const p=zs(i);c=Co(i),d.x=p.x+i.clientLeft,d.y=p.y+i.clientTop}const u=o&&!f&&!s?vS(o,l,!0):ki(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+d.x+u.x,y:n.y*c.y-l.scrollTop*c.y+d.y+u.y}}function SA(t){return Array.from(t.getClientRects())}function MA(t){const e=ji(t),n=Xu(t),i=t.ownerDocument.body,r=Nn(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=Nn(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-n.scrollLeft+Dm(t);const a=-n.scrollTop;return yi(i).direction==="rtl"&&(o+=Nn(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:o,y:a}}function wA(t,e){const n=On(t),i=ji(t),r=n.visualViewport;let s=i.clientWidth,o=i.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;const c=Rm();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a,y:l}}const EA=new Set(["absolute","fixed"]);function bA(t,e){const n=zs(t,!0,e==="fixed"),i=n.top+t.clientTop,r=n.left+t.clientLeft,s=Vi(t)?Co(t):ki(1),o=t.clientWidth*s.x,a=t.clientHeight*s.y,l=r*s.x,c=i*s.y;return{width:o,height:a,x:l,y:c}}function I0(t,e,n){let i;if(e==="viewport")i=wA(t,n);else if(e==="document")i=MA(ji(t));else if(xi(e))i=bA(e,n);else{const r=gS(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return vu(i)}function xS(t,e){const n=is(t);return n===e||!xi(n)||qo(n)?!1:yi(n).position==="fixed"||xS(n,e)}function TA(t,e){const n=e.get(t);if(n)return n;let i=ll(t,[],!1).filter(a=>xi(a)&&oa(a)!=="body"),r=null;const s=yi(t).position==="fixed";let o=s?is(t):t;for(;xi(o)&&!qo(o);){const a=yi(o),l=Cm(o);!l&&a.position==="fixed"&&(r=null),(s?!l&&!r:!l&&a.position==="static"&&!!r&&EA.has(r.position)||El(o)&&!l&&xS(t,o))?i=i.filter(d=>d!==o):r=a,o=is(o)}return e.set(t,i),i}function AA(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const o=[...n==="clippingAncestors"?ju(e)?[]:TA(e,this._c):[].concat(n),i],a=o[0],l=o.reduce((c,d)=>{const f=I0(e,d,r);return c.top=Nn(f.top,c.top),c.right=ns(f.right,c.right),c.bottom=ns(f.bottom,c.bottom),c.left=Nn(f.left,c.left),c},I0(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function CA(t){const{width:e,height:n}=mS(t);return{width:e,height:n}}function RA(t,e,n){const i=Vi(e),r=ji(e),s=n==="fixed",o=zs(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const l=ki(0);function c(){l.x=Dm(r)}if(i||!i&&!s)if((oa(e)!=="body"||El(r))&&(a=Xu(e)),i){const p=zs(e,!0,s,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else r&&c();s&&!i&&r&&c();const d=r&&!i&&!s?vS(r,a):ki(0),f=o.left+a.scrollLeft-l.x-d.x,u=o.top+a.scrollTop-l.y-d.y;return{x:f,y:u,width:o.width,height:o.height}}function kd(t){return yi(t).position==="static"}function F0(t,e){if(!Vi(t)||yi(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return ji(t)===n&&(n=n.ownerDocument.body),n}function yS(t,e){const n=On(t);if(ju(t))return n;if(!Vi(t)){let r=is(t);for(;r&&!qo(r);){if(xi(r)&&!kd(r))return r;r=is(r)}return n}let i=F0(t,e);for(;i&&dA(i)&&kd(i);)i=F0(i,e);return i&&qo(i)&&kd(i)&&!Cm(i)?n:i||gA(t)||n}const PA=async function(t){const e=this.getOffsetParent||yS,n=this.getDimensions,i=await n(t.floating);return{reference:RA(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function DA(t){return yi(t).direction==="rtl"}const NA={convertOffsetParentRelativeRectToViewportRelativeRect:_A,getDocumentElement:ji,getClippingRect:AA,getOffsetParent:yS,getElementRects:PA,getClientRects:SA,getDimensions:CA,getScale:Co,isElement:xi,isRTL:DA};function _S(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function LA(t,e){let n=null,i;const r=ji(t);function s(){var a;clearTimeout(i),(a=n)==null||a.disconnect(),n=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const c=t.getBoundingClientRect(),{left:d,top:f,width:u,height:p}=c;if(a||e(),!u||!p)return;const v=Ql(f),y=Ql(r.clientWidth-(d+u)),m=Ql(r.clientHeight-(f+p)),h=Ql(d),x={rootMargin:-v+"px "+-y+"px "+-m+"px "+-h+"px",threshold:Nn(0,ns(1,l))||1};let S=!0;function E(b){const T=b[0].intersectionRatio;if(T!==l){if(!S)return o();T?o(!1,T):i=setTimeout(()=>{o(!1,1e-7)},1e3)}T===1&&!_S(c,t.getBoundingClientRect())&&o(),S=!1}try{n=new IntersectionObserver(E,{...x,root:r.ownerDocument})}catch{n=new IntersectionObserver(E,x)}n.observe(t)}return o(!0),s}function IA(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=Pm(t),d=r||s?[...c?ll(c):[],...ll(e)]:[];d.forEach(h=>{r&&h.addEventListener("scroll",n,{passive:!0}),s&&h.addEventListener("resize",n)});const f=c&&a?LA(c,n):null;let u=-1,p=null;o&&(p=new ResizeObserver(h=>{let[g]=h;g&&g.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(e)})),n()}),c&&!l&&p.observe(c),p.observe(e));let v,y=l?zs(t):null;l&&m();function m(){const h=zs(t);y&&!_S(y,h)&&n(),y=h,v=requestAnimationFrame(m)}return n(),()=>{var h;d.forEach(g=>{r&&g.removeEventListener("scroll",n),s&&g.removeEventListener("resize",n)}),f==null||f(),(h=p)==null||h.disconnect(),p=null,l&&cancelAnimationFrame(v)}}const FA=sA,UA=oA,OA=nA,kA=lA,BA=iA,U0=tA,zA=aA,VA=(t,e,n)=>{const i=new Map,r={platform:NA,...n},s={...r.platform,_c:i};return eA(t,e,{...r,platform:s})};var HA=typeof document<"u",GA=function(){},kc=HA?N.useLayoutEffect:GA;function xu(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,i,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;i--!==0;)if(!xu(t[i],e[i]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(i=n;i--!==0;)if(!{}.hasOwnProperty.call(e,r[i]))return!1;for(i=n;i--!==0;){const s=r[i];if(!(s==="_owner"&&t.$$typeof)&&!xu(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function SS(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function O0(t,e){const n=SS(t);return Math.round(e*n)/n}function Bd(t){const e=N.useRef(t);return kc(()=>{e.current=t}),e}function WA(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:i=[],platform:r,elements:{reference:s,floating:o}={},transform:a=!0,whileElementsMounted:l,open:c}=t,[d,f]=N.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[u,p]=N.useState(i);xu(u,i)||p(i);const[v,y]=N.useState(null),[m,h]=N.useState(null),g=N.useCallback(O=>{O!==b.current&&(b.current=O,y(O))},[]),x=N.useCallback(O=>{O!==T.current&&(T.current=O,h(O))},[]),S=s||v,E=o||m,b=N.useRef(null),T=N.useRef(null),_=N.useRef(d),w=l!=null,D=Bd(l),C=Bd(r),L=Bd(c),H=N.useCallback(()=>{if(!b.current||!T.current)return;const O={placement:e,strategy:n,middleware:u};C.current&&(O.platform=C.current),VA(b.current,T.current,O).then(k=>{const q={...k,isPositioned:L.current!==!1};I.current&&!xu(_.current,q)&&(_.current=q,Ml.flushSync(()=>{f(q)}))})},[u,e,n,C,L]);kc(()=>{c===!1&&_.current.isPositioned&&(_.current.isPositioned=!1,f(O=>({...O,isPositioned:!1})))},[c]);const I=N.useRef(!1);kc(()=>(I.current=!0,()=>{I.current=!1}),[]),kc(()=>{if(S&&(b.current=S),E&&(T.current=E),S&&E){if(D.current)return D.current(S,E,H);H()}},[S,E,H,D,w]);const B=N.useMemo(()=>({reference:b,floating:T,setReference:g,setFloating:x}),[g,x]),V=N.useMemo(()=>({reference:S,floating:E}),[S,E]),U=N.useMemo(()=>{const O={position:n,left:0,top:0};if(!V.floating)return O;const k=O0(V.floating,d.x),q=O0(V.floating,d.y);return a?{...O,transform:"translate("+k+"px, "+q+"px)",...SS(V.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:k,top:q}},[n,a,V.floating,d.x,d.y]);return N.useMemo(()=>({...d,update:H,refs:B,elements:V,floatingStyles:U}),[d,H,B,V,U])}const jA=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:i,padding:r}=typeof t=="function"?t(n):t;return i&&e(i)?i.current!=null?U0({element:i.current,padding:r}).fn(n):{}:i?U0({element:i,padding:r}).fn(n):{}}}},XA=(t,e)=>({...FA(t),options:[t,e]}),$A=(t,e)=>({...UA(t),options:[t,e]}),qA=(t,e)=>({...zA(t),options:[t,e]}),YA=(t,e)=>({...OA(t),options:[t,e]}),KA=(t,e)=>({...kA(t),options:[t,e]}),QA=(t,e)=>({...BA(t),options:[t,e]}),ZA=(t,e)=>({...jA(t),options:[t,e]});var JA="Arrow",MS=N.forwardRef((t,e)=>{const{children:n,width:i=10,height:r=5,...s}=t;return P.jsx(An.svg,{...s,ref:e,width:i,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:P.jsx("polygon",{points:"0,0 30,0 15,10"})})});MS.displayName=JA;var eC=MS;function tC(t){const[e,n]=N.useState(void 0);return ts(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const i=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const s=r[0];let o,a;if("borderBoxSize"in s){const l=s.borderBoxSize,c=Array.isArray(l)?l[0]:l;o=c.inlineSize,a=c.blockSize}else o=t.offsetWidth,a=t.offsetHeight;n({width:o,height:a})});return i.observe(t,{box:"border-box"}),()=>i.unobserve(t)}else n(void 0)},[t]),e}var wS="Popper",[ES,bS]=Vu(wS),[NI,TS]=ES(wS),AS="PopperAnchor",CS=N.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:i,...r}=t,s=TS(AS,n),o=N.useRef(null),a=vi(e,o);return N.useEffect(()=>{s.onAnchorChange((i==null?void 0:i.current)||o.current)}),i?null:P.jsx(An.div,{...r,ref:a})});CS.displayName=AS;var Nm="PopperContent",[nC,iC]=ES(Nm),RS=N.forwardRef((t,e)=>{var ne,ue,ke,De,Fe,vt;const{__scopePopper:n,side:i="bottom",sideOffset:r=0,align:s="center",alignOffset:o=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:u=!1,updatePositionStrategy:p="optimized",onPlaced:v,...y}=t,m=TS(Nm,n),[h,g]=N.useState(null),x=vi(e,Ge=>g(Ge)),[S,E]=N.useState(null),b=tC(S),T=(b==null?void 0:b.width)??0,_=(b==null?void 0:b.height)??0,w=i+(s!=="center"?"-"+s:""),D=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},C=Array.isArray(c)?c:[c],L=C.length>0,H={padding:D,boundary:C.filter(sC),altBoundary:L},{refs:I,floatingStyles:B,placement:V,isPositioned:U,middlewareData:O}=WA({strategy:"fixed",placement:w,whileElementsMounted:(...Ge)=>IA(...Ge,{animationFrame:p==="always"}),elements:{reference:m.anchor},middleware:[XA({mainAxis:r+_,alignmentAxis:o}),l&&$A({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?qA():void 0,...H}),l&&YA({...H}),KA({...H,apply:({elements:Ge,rects:et,availableWidth:ct,availableHeight:Ve})=>{const{width:xt,height:F}=et.reference,pt=Ge.floating.style;pt.setProperty("--radix-popper-available-width",`${ct}px`),pt.setProperty("--radix-popper-available-height",`${Ve}px`),pt.setProperty("--radix-popper-anchor-width",`${xt}px`),pt.setProperty("--radix-popper-anchor-height",`${F}px`)}}),S&&ZA({element:S,padding:a}),oC({arrowWidth:T,arrowHeight:_}),u&&QA({strategy:"referenceHidden",...H})]}),[k,q]=NS(V),re=es(v);ts(()=>{U&&(re==null||re())},[U,re]);const ee=(ne=O.arrow)==null?void 0:ne.x,me=(ue=O.arrow)==null?void 0:ue.y,Ce=((ke=O.arrow)==null?void 0:ke.centerOffset)!==0,[Be,K]=N.useState();return ts(()=>{h&&K(window.getComputedStyle(h).zIndex)},[h]),P.jsx("div",{ref:I.setFloating,"data-radix-popper-content-wrapper":"",style:{...B,transform:U?B.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Be,"--radix-popper-transform-origin":[(De=O.transformOrigin)==null?void 0:De.x,(Fe=O.transformOrigin)==null?void 0:Fe.y].join(" "),...((vt=O.hide)==null?void 0:vt.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:P.jsx(nC,{scope:n,placedSide:k,onArrowChange:E,arrowX:ee,arrowY:me,shouldHideArrow:Ce,children:P.jsx(An.div,{"data-side":k,"data-align":q,...y,ref:x,style:{...y.style,animation:U?void 0:"none"}})})})});RS.displayName=Nm;var PS="PopperArrow",rC={top:"bottom",right:"left",bottom:"top",left:"right"},DS=N.forwardRef(function(e,n){const{__scopePopper:i,...r}=e,s=iC(PS,i),o=rC[s.placedSide];return P.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:P.jsx(eC,{...r,ref:n,style:{...r.style,display:"block"}})})});DS.displayName=PS;function sC(t){return t!==null}var oC=t=>({name:"transformOrigin",options:t,fn(e){var m,h,g;const{placement:n,rects:i,middlewareData:r}=e,o=((m=r.arrow)==null?void 0:m.centerOffset)!==0,a=o?0:t.arrowWidth,l=o?0:t.arrowHeight,[c,d]=NS(n),f={start:"0%",center:"50%",end:"100%"}[d],u=(((h=r.arrow)==null?void 0:h.x)??0)+a/2,p=(((g=r.arrow)==null?void 0:g.y)??0)+l/2;let v="",y="";return c==="bottom"?(v=o?f:`${u}px`,y=`${-l}px`):c==="top"?(v=o?f:`${u}px`,y=`${i.floating.height+l}px`):c==="right"?(v=`${-l}px`,y=o?f:`${p}px`):c==="left"&&(v=`${i.floating.width+l}px`,y=o?f:`${p}px`),{data:{x:v,y}}}});function NS(t){const[e,n="center"]=t.split("-");return[e,n]}var aC=CS,lC=RS,cC=DS,[$u,LI]=Vu("Tooltip",[bS]),Lm=bS(),LS="TooltipProvider",uC=700,k0="tooltip.open",[dC,IS]=$u(LS),FS=t=>{const{__scopeTooltip:e,delayDuration:n=uC,skipDelayDuration:i=300,disableHoverableContent:r=!1,children:s}=t,o=N.useRef(!0),a=N.useRef(!1),l=N.useRef(0);return N.useEffect(()=>{const c=l.current;return()=>window.clearTimeout(c)},[]),P.jsx(dC,{scope:e,isOpenDelayedRef:o,delayDuration:n,onOpen:N.useCallback(()=>{window.clearTimeout(l.current),o.current=!1},[]),onClose:N.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>o.current=!0,i)},[i]),isPointerInTransitRef:a,onPointerInTransitChange:N.useCallback(c=>{a.current=c},[]),disableHoverableContent:r,children:s})};FS.displayName=LS;var US="Tooltip",[II,qu]=$u(US),Eh="TooltipTrigger",fC=N.forwardRef((t,e)=>{const{__scopeTooltip:n,...i}=t,r=qu(Eh,n),s=IS(Eh,n),o=Lm(n),a=N.useRef(null),l=vi(e,a,r.onTriggerChange),c=N.useRef(!1),d=N.useRef(!1),f=N.useCallback(()=>c.current=!1,[]);return N.useEffect(()=>()=>document.removeEventListener("pointerup",f),[f]),P.jsx(aC,{asChild:!0,...o,children:P.jsx(An.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...i,ref:l,onPointerMove:Ot(t.onPointerMove,u=>{u.pointerType!=="touch"&&!d.current&&!s.isPointerInTransitRef.current&&(r.onTriggerEnter(),d.current=!0)}),onPointerLeave:Ot(t.onPointerLeave,()=>{r.onTriggerLeave(),d.current=!1}),onPointerDown:Ot(t.onPointerDown,()=>{r.open&&r.onClose(),c.current=!0,document.addEventListener("pointerup",f,{once:!0})}),onFocus:Ot(t.onFocus,()=>{c.current||r.onOpen()}),onBlur:Ot(t.onBlur,r.onClose),onClick:Ot(t.onClick,r.onClose)})})});fC.displayName=Eh;var hC="TooltipPortal",[FI,pC]=$u(hC,{forceMount:void 0}),Yo="TooltipContent",OS=N.forwardRef((t,e)=>{const n=pC(Yo,t.__scopeTooltip),{forceMount:i=n.forceMount,side:r="top",...s}=t,o=qu(Yo,t.__scopeTooltip);return P.jsx(_m,{present:i||o.open,children:o.disableHoverableContent?P.jsx(kS,{side:r,...s,ref:e}):P.jsx(mC,{side:r,...s,ref:e})})}),mC=N.forwardRef((t,e)=>{const n=qu(Yo,t.__scopeTooltip),i=IS(Yo,t.__scopeTooltip),r=N.useRef(null),s=vi(e,r),[o,a]=N.useState(null),{trigger:l,onClose:c}=n,d=r.current,{onPointerInTransitChange:f}=i,u=N.useCallback(()=>{a(null),f(!1)},[f]),p=N.useCallback((v,y)=>{const m=v.currentTarget,h={x:v.clientX,y:v.clientY},g=_C(h,m.getBoundingClientRect()),x=SC(h,g),S=MC(y.getBoundingClientRect()),E=EC([...x,...S]);a(E),f(!0)},[f]);return N.useEffect(()=>()=>u(),[u]),N.useEffect(()=>{if(l&&d){const v=m=>p(m,d),y=m=>p(m,l);return l.addEventListener("pointerleave",v),d.addEventListener("pointerleave",y),()=>{l.removeEventListener("pointerleave",v),d.removeEventListener("pointerleave",y)}}},[l,d,p,u]),N.useEffect(()=>{if(o){const v=y=>{const m=y.target,h={x:y.clientX,y:y.clientY},g=(l==null?void 0:l.contains(m))||(d==null?void 0:d.contains(m)),x=!wC(h,o);g?u():x&&(u(),c())};return document.addEventListener("pointermove",v),()=>document.removeEventListener("pointermove",v)}},[l,d,o,c,u]),P.jsx(kS,{...t,ref:s})}),[gC,vC]=$u(US,{isInside:!1}),xC=b1("TooltipContent"),kS=N.forwardRef((t,e)=>{const{__scopeTooltip:n,children:i,"aria-label":r,onEscapeKeyDown:s,onPointerDownOutside:o,...a}=t,l=qu(Yo,n),c=Lm(n),{onClose:d}=l;return N.useEffect(()=>(document.addEventListener(k0,d),()=>document.removeEventListener(k0,d)),[d]),N.useEffect(()=>{if(l.trigger){const f=u=>{const p=u.target;p!=null&&p.contains(l.trigger)&&d()};return window.addEventListener("scroll",f,{capture:!0}),()=>window.removeEventListener("scroll",f,{capture:!0})}},[l.trigger,d]),P.jsx(ym,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:o,onFocusOutside:f=>f.preventDefault(),onDismiss:d,children:P.jsxs(lC,{"data-state":l.stateAttribute,...c,...a,ref:e,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[P.jsx(xC,{children:i}),P.jsx(gC,{scope:n,isInside:!0,children:P.jsx(K1,{id:l.contentId,role:"tooltip",children:r||i})})]})})});OS.displayName=Yo;var BS="TooltipArrow",yC=N.forwardRef((t,e)=>{const{__scopeTooltip:n,...i}=t,r=Lm(n);return vC(BS,n).isInside?null:P.jsx(cC,{...r,...i,ref:e})});yC.displayName=BS;function _C(t,e){const n=Math.abs(e.top-t.y),i=Math.abs(e.bottom-t.y),r=Math.abs(e.right-t.x),s=Math.abs(e.left-t.x);switch(Math.min(n,i,r,s)){case s:return"left";case r:return"right";case n:return"top";case i:return"bottom";default:throw new Error("unreachable")}}function SC(t,e,n=5){const i=[];switch(e){case"top":i.push({x:t.x-n,y:t.y+n},{x:t.x+n,y:t.y+n});break;case"bottom":i.push({x:t.x-n,y:t.y-n},{x:t.x+n,y:t.y-n});break;case"left":i.push({x:t.x+n,y:t.y-n},{x:t.x+n,y:t.y+n});break;case"right":i.push({x:t.x-n,y:t.y-n},{x:t.x-n,y:t.y+n});break}return i}function MC(t){const{top:e,right:n,bottom:i,left:r}=t;return[{x:r,y:e},{x:n,y:e},{x:n,y:i},{x:r,y:i}]}function wC(t,e){const{x:n,y:i}=t;let r=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const a=e[s],l=e[o],c=a.x,d=a.y,f=l.x,u=l.y;d>i!=u>i&&n<(f-c)*(i-d)/(u-d)+c&&(r=!r)}return r}function EC(t){const e=t.slice();return e.sort((n,i)=>n.x<i.x?-1:n.x>i.x?1:n.y<i.y?-1:n.y>i.y?1:0),bC(e)}function bC(t){if(t.length<=1)return t.slice();const e=[];for(let i=0;i<t.length;i++){const r=t[i];for(;e.length>=2;){const s=e[e.length-1],o=e[e.length-2];if((s.x-o.x)*(r.y-o.y)>=(s.y-o.y)*(r.x-o.x))e.pop();else break}e.push(r)}e.pop();const n=[];for(let i=t.length-1;i>=0;i--){const r=t[i];for(;n.length>=2;){const s=n[n.length-1],o=n[n.length-2];if((s.x-o.x)*(r.y-o.y)>=(s.y-o.y)*(r.x-o.x))n.pop();else break}n.push(r)}return n.pop(),e.length===1&&n.length===1&&e[0].x===n[0].x&&e[0].y===n[0].y?e:e.concat(n)}var TC=FS,zS=OS;const AC=TC,CC=N.forwardRef(({className:t,sideOffset:e=4,...n},i)=>P.jsx(zS,{ref:i,sideOffset:e,className:Ws("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n}));CC.displayName=zS.displayName;var Yu=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Ku=typeof window>"u"||"Deno"in globalThis;function ai(){}function RC(t,e){return typeof t=="function"?t(e):t}function PC(t){return typeof t=="number"&&t>=0&&t!==1/0}function DC(t,e){return Math.max(t+(e||0)-Date.now(),0)}function bh(t,e){return typeof t=="function"?t(e):t}function NC(t,e){return typeof t=="function"?t(e):t}function B0(t,e){const{type:n="all",exact:i,fetchStatus:r,predicate:s,queryKey:o,stale:a}=t;if(o){if(i){if(e.queryHash!==Im(o,e.options))return!1}else if(!ul(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||r&&r!==e.state.fetchStatus||s&&!s(e))}function z0(t,e){const{exact:n,status:i,predicate:r,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(cl(e.options.mutationKey)!==cl(s))return!1}else if(!ul(e.options.mutationKey,s))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function Im(t,e){return((e==null?void 0:e.queryKeyHashFn)||cl)(t)}function cl(t){return JSON.stringify(t,(e,n)=>Th(n)?Object.keys(n).sort().reduce((i,r)=>(i[r]=n[r],i),{}):n)}function ul(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>ul(t[n],e[n])):!1}function VS(t,e){if(t===e)return t;const n=V0(t)&&V0(e);if(n||Th(t)&&Th(e)){const i=n?t:Object.keys(t),r=i.length,s=n?e:Object.keys(e),o=s.length,a=n?[]:{},l=new Set(i);let c=0;for(let d=0;d<o;d++){const f=n?d:s[d];(!n&&l.has(f)||n)&&t[f]===void 0&&e[f]===void 0?(a[f]=void 0,c++):(a[f]=VS(t[f],e[f]),a[f]===t[f]&&t[f]!==void 0&&c++)}return r===o&&c===r?t:a}return e}function V0(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Th(t){if(!H0(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!H0(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function H0(t){return Object.prototype.toString.call(t)==="[object Object]"}function LC(t){return new Promise(e=>{setTimeout(e,t)})}function IC(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?VS(t,e):e}function FC(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function UC(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var Fm=Symbol();function HS(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Fm?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var As,Fr,Lo,tx,OC=(tx=class extends Yu{constructor(){super();at(this,As);at(this,Fr);at(this,Lo);He(this,Lo,e=>{if(!Ku&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){te(this,Fr)||this.setEventListener(te(this,Lo))}onUnsubscribe(){var e;this.hasListeners()||((e=te(this,Fr))==null||e.call(this),He(this,Fr,void 0))}setEventListener(e){var n;He(this,Lo,e),(n=te(this,Fr))==null||n.call(this),He(this,Fr,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){te(this,As)!==e&&(He(this,As,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof te(this,As)=="boolean"?te(this,As):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},As=new WeakMap,Fr=new WeakMap,Lo=new WeakMap,tx),GS=new OC,Io,Ur,Fo,nx,kC=(nx=class extends Yu{constructor(){super();at(this,Io,!0);at(this,Ur);at(this,Fo);He(this,Fo,e=>{if(!Ku&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){te(this,Ur)||this.setEventListener(te(this,Fo))}onUnsubscribe(){var e;this.hasListeners()||((e=te(this,Ur))==null||e.call(this),He(this,Ur,void 0))}setEventListener(e){var n;He(this,Fo,e),(n=te(this,Ur))==null||n.call(this),He(this,Ur,e(this.setOnline.bind(this)))}setOnline(e){te(this,Io)!==e&&(He(this,Io,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return te(this,Io)}},Io=new WeakMap,Ur=new WeakMap,Fo=new WeakMap,nx),yu=new kC;function BC(){let t,e;const n=new Promise((r,s)=>{t=r,e=s});n.status="pending",n.catch(()=>{});function i(r){Object.assign(n,r),delete n.resolve,delete n.reject}return n.resolve=r=>{i({status:"fulfilled",value:r}),t(r)},n.reject=r=>{i({status:"rejected",reason:r}),e(r)},n}function zC(t){return Math.min(1e3*2**t,3e4)}function WS(t){return(t??"online")==="online"?yu.isOnline():!0}var jS=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function zd(t){return t instanceof jS}function XS(t){let e=!1,n=0,i=!1,r;const s=BC(),o=y=>{var m;i||(u(new jS(y)),(m=t.abort)==null||m.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>GS.isFocused()&&(t.networkMode==="always"||yu.isOnline())&&t.canRun(),d=()=>WS(t.networkMode)&&t.canRun(),f=y=>{var m;i||(i=!0,(m=t.onSuccess)==null||m.call(t,y),r==null||r(),s.resolve(y))},u=y=>{var m;i||(i=!0,(m=t.onError)==null||m.call(t,y),r==null||r(),s.reject(y))},p=()=>new Promise(y=>{var m;r=h=>{(i||c())&&y(h)},(m=t.onPause)==null||m.call(t)}).then(()=>{var y;r=void 0,i||(y=t.onContinue)==null||y.call(t)}),v=()=>{if(i)return;let y;const m=n===0?t.initialPromise:void 0;try{y=m??t.fn()}catch(h){y=Promise.reject(h)}Promise.resolve(y).then(f).catch(h=>{var b;if(i)return;const g=t.retry??(Ku?0:3),x=t.retryDelay??zC,S=typeof x=="function"?x(n,h):x,E=g===!0||typeof g=="number"&&n<g||typeof g=="function"&&g(n,h);if(e||!E){u(h);return}n++,(b=t.onFail)==null||b.call(t,n,h),LC(S).then(()=>c()?void 0:p()).then(()=>{e?u(h):v()})})};return{promise:s,cancel:o,continue:()=>(r==null||r(),s),cancelRetry:a,continueRetry:l,canStart:d,start:()=>(d()?v():p().then(v),s)}}var VC=t=>setTimeout(t,0);function HC(){let t=[],e=0,n=a=>{a()},i=a=>{a()},r=VC;const s=a=>{e?t.push(a):r(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&r(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{s(()=>{a(...l)})},schedule:s,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{r=a}}}var fn=HC(),Cs,ix,$S=(ix=class{constructor(){at(this,Cs)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),PC(this.gcTime)&&He(this,Cs,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Ku?1/0:5*60*1e3))}clearGcTimeout(){te(this,Cs)&&(clearTimeout(te(this,Cs)),He(this,Cs,void 0))}},Cs=new WeakMap,ix),Uo,Rs,Hn,Ps,rn,ml,Ds,li,Zi,rx,GC=(rx=class extends $S{constructor(e){super();at(this,li);at(this,Uo);at(this,Rs);at(this,Hn);at(this,Ps);at(this,rn);at(this,ml);at(this,Ds);He(this,Ds,!1),He(this,ml,e.defaultOptions),this.setOptions(e.options),this.observers=[],He(this,Ps,e.client),He(this,Hn,te(this,Ps).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,He(this,Uo,jC(this.options)),this.state=e.state??te(this,Uo),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=te(this,rn))==null?void 0:e.promise}setOptions(e){this.options={...te(this,ml),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&te(this,Hn).remove(this)}setData(e,n){const i=IC(this.state.data,e,this.options);return Zt(this,li,Zi).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){Zt(this,li,Zi).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,r;const n=(i=te(this,rn))==null?void 0:i.promise;return(r=te(this,rn))==null||r.cancel(e),n?n.then(ai).catch(ai):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(te(this,Uo))}isActive(){return this.observers.some(e=>NC(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Fm||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>bh(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!DC(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=te(this,rn))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=te(this,rn))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),te(this,Hn).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(te(this,rn)&&(te(this,Ds)?te(this,rn).cancel({revert:!0}):te(this,rn).cancelRetry()),this.scheduleGc()),te(this,Hn).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Zt(this,li,Zi).call(this,{type:"invalidate"})}fetch(e,n){var c,d,f;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(te(this,rn))return te(this,rn).continueRetry(),te(this,rn).promise}if(e&&this.setOptions(e),!this.options.queryFn){const u=this.observers.find(p=>p.options.queryFn);u&&this.setOptions(u.options)}const i=new AbortController,r=u=>{Object.defineProperty(u,"signal",{enumerable:!0,get:()=>(He(this,Ds,!0),i.signal)})},s=()=>{const u=HS(this.options,n),v=(()=>{const y={client:te(this,Ps),queryKey:this.queryKey,meta:this.meta};return r(y),y})();return He(this,Ds,!1),this.options.persister?this.options.persister(u,v,this):u(v)},a=(()=>{const u={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:te(this,Ps),state:this.state,fetchFn:s};return r(u),u})();(c=this.options.behavior)==null||c.onFetch(a,this),He(this,Rs,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=a.fetchOptions)==null?void 0:d.meta))&&Zt(this,li,Zi).call(this,{type:"fetch",meta:(f=a.fetchOptions)==null?void 0:f.meta});const l=u=>{var p,v,y,m;zd(u)&&u.silent||Zt(this,li,Zi).call(this,{type:"error",error:u}),zd(u)||((v=(p=te(this,Hn).config).onError)==null||v.call(p,u,this),(m=(y=te(this,Hn).config).onSettled)==null||m.call(y,this.state.data,u,this)),this.scheduleGc()};return He(this,rn,XS({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:i.abort.bind(i),onSuccess:u=>{var p,v,y,m;if(u===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(u)}catch(h){l(h);return}(v=(p=te(this,Hn).config).onSuccess)==null||v.call(p,u,this),(m=(y=te(this,Hn).config).onSettled)==null||m.call(y,u,this.state.error,this),this.scheduleGc()},onError:l,onFail:(u,p)=>{Zt(this,li,Zi).call(this,{type:"failed",failureCount:u,error:p})},onPause:()=>{Zt(this,li,Zi).call(this,{type:"pause"})},onContinue:()=>{Zt(this,li,Zi).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),te(this,rn).start()}},Uo=new WeakMap,Rs=new WeakMap,Hn=new WeakMap,Ps=new WeakMap,rn=new WeakMap,ml=new WeakMap,Ds=new WeakMap,li=new WeakSet,Zi=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...WC(i.data,this.options),fetchMeta:e.meta??null};case"success":return He(this,Rs,void 0),{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=e.error;return zd(r)&&r.revert&&te(this,Rs)?{...te(this,Rs),fetchStatus:"idle"}:{...i,error:r,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),fn.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),te(this,Hn).notify({query:this,type:"updated",action:e})})},rx);function WC(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:WS(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function jC(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Ci,sx,XC=(sx=class extends Yu{constructor(e={}){super();at(this,Ci);this.config=e,He(this,Ci,new Map)}build(e,n,i){const r=n.queryKey,s=n.queryHash??Im(r,n);let o=this.get(s);return o||(o=new GC({client:e,queryKey:r,queryHash:s,options:e.defaultQueryOptions(n),state:i,defaultOptions:e.getQueryDefaults(r)}),this.add(o)),o}add(e){te(this,Ci).has(e.queryHash)||(te(this,Ci).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=te(this,Ci).get(e.queryHash);n&&(e.destroy(),n===e&&te(this,Ci).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){fn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return te(this,Ci).get(e)}getAll(){return[...te(this,Ci).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(i=>B0(n,i))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(i=>B0(e,i)):n}notify(e){fn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){fn.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){fn.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Ci=new WeakMap,sx),Ri,un,Ns,Pi,Rr,ox,$C=(ox=class extends $S{constructor(e){super();at(this,Pi);at(this,Ri);at(this,un);at(this,Ns);this.mutationId=e.mutationId,He(this,un,e.mutationCache),He(this,Ri,[]),this.state=e.state||qC(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){te(this,Ri).includes(e)||(te(this,Ri).push(e),this.clearGcTimeout(),te(this,un).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){He(this,Ri,te(this,Ri).filter(n=>n!==e)),this.scheduleGc(),te(this,un).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){te(this,Ri).length||(this.state.status==="pending"?this.scheduleGc():te(this,un).remove(this))}continue(){var e;return((e=te(this,Ns))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var s,o,a,l,c,d,f,u,p,v,y,m,h,g,x,S,E,b,T,_;const n=()=>{Zt(this,Pi,Rr).call(this,{type:"continue"})};He(this,Ns,XS({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(w,D)=>{Zt(this,Pi,Rr).call(this,{type:"failed",failureCount:w,error:D})},onPause:()=>{Zt(this,Pi,Rr).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>te(this,un).canRun(this)}));const i=this.state.status==="pending",r=!te(this,Ns).canStart();try{if(i)n();else{Zt(this,Pi,Rr).call(this,{type:"pending",variables:e,isPaused:r}),await((o=(s=te(this,un).config).onMutate)==null?void 0:o.call(s,e,this));const D=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,e));D!==this.state.context&&Zt(this,Pi,Rr).call(this,{type:"pending",context:D,variables:e,isPaused:r})}const w=await te(this,Ns).start();return await((d=(c=te(this,un).config).onSuccess)==null?void 0:d.call(c,w,e,this.state.context,this)),await((u=(f=this.options).onSuccess)==null?void 0:u.call(f,w,e,this.state.context)),await((v=(p=te(this,un).config).onSettled)==null?void 0:v.call(p,w,null,this.state.variables,this.state.context,this)),await((m=(y=this.options).onSettled)==null?void 0:m.call(y,w,null,e,this.state.context)),Zt(this,Pi,Rr).call(this,{type:"success",data:w}),w}catch(w){try{throw await((g=(h=te(this,un).config).onError)==null?void 0:g.call(h,w,e,this.state.context,this)),await((S=(x=this.options).onError)==null?void 0:S.call(x,w,e,this.state.context)),await((b=(E=te(this,un).config).onSettled)==null?void 0:b.call(E,void 0,w,this.state.variables,this.state.context,this)),await((_=(T=this.options).onSettled)==null?void 0:_.call(T,void 0,w,e,this.state.context)),w}finally{Zt(this,Pi,Rr).call(this,{type:"error",error:w})}}finally{te(this,un).runNext(this)}}},Ri=new WeakMap,un=new WeakMap,Ns=new WeakMap,Pi=new WeakSet,Rr=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),fn.batch(()=>{te(this,Ri).forEach(i=>{i.onMutationUpdate(e)}),te(this,un).notify({mutation:this,type:"updated",action:e})})},ox);function qC(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var tr,ci,gl,ax,YC=(ax=class extends Yu{constructor(e={}){super();at(this,tr);at(this,ci);at(this,gl);this.config=e,He(this,tr,new Set),He(this,ci,new Map),He(this,gl,0)}build(e,n,i){const r=new $C({mutationCache:this,mutationId:++Pl(this,gl)._,options:e.defaultMutationOptions(n),state:i});return this.add(r),r}add(e){te(this,tr).add(e);const n=Zl(e);if(typeof n=="string"){const i=te(this,ci).get(n);i?i.push(e):te(this,ci).set(n,[e])}this.notify({type:"added",mutation:e})}remove(e){if(te(this,tr).delete(e)){const n=Zl(e);if(typeof n=="string"){const i=te(this,ci).get(n);if(i)if(i.length>1){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}else i[0]===e&&te(this,ci).delete(n)}}this.notify({type:"removed",mutation:e})}canRun(e){const n=Zl(e);if(typeof n=="string"){const i=te(this,ci).get(n),r=i==null?void 0:i.find(s=>s.state.status==="pending");return!r||r===e}else return!0}runNext(e){var i;const n=Zl(e);if(typeof n=="string"){const r=(i=te(this,ci).get(n))==null?void 0:i.find(s=>s!==e&&s.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){fn.batch(()=>{te(this,tr).forEach(e=>{this.notify({type:"removed",mutation:e})}),te(this,tr).clear(),te(this,ci).clear()})}getAll(){return Array.from(te(this,tr))}find(e){const n={exact:!0,...e};return this.getAll().find(i=>z0(n,i))}findAll(e={}){return this.getAll().filter(n=>z0(e,n))}notify(e){fn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return fn.batch(()=>Promise.all(e.map(n=>n.continue().catch(ai))))}},tr=new WeakMap,ci=new WeakMap,gl=new WeakMap,ax);function Zl(t){var e;return(e=t.options.scope)==null?void 0:e.id}function G0(t){return{onFetch:(e,n)=>{var d,f,u,p,v;const i=e.options,r=(u=(f=(d=e.fetchOptions)==null?void 0:d.meta)==null?void 0:f.fetchMore)==null?void 0:u.direction,s=((p=e.state.data)==null?void 0:p.pages)||[],o=((v=e.state.data)==null?void 0:v.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let y=!1;const m=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(e.signal.aborted?y=!0:e.signal.addEventListener("abort",()=>{y=!0}),e.signal)})},h=HS(e.options,e.fetchOptions),g=async(x,S,E)=>{if(y)return Promise.reject();if(S==null&&x.pages.length)return Promise.resolve(x);const T=(()=>{const C={client:e.client,queryKey:e.queryKey,pageParam:S,direction:E?"backward":"forward",meta:e.options.meta};return m(C),C})(),_=await h(T),{maxPages:w}=e.options,D=E?UC:FC;return{pages:D(x.pages,_,w),pageParams:D(x.pageParams,S,w)}};if(r&&s.length){const x=r==="backward",S=x?KC:W0,E={pages:s,pageParams:o},b=S(i,E);a=await g(E,b,x)}else{const x=t??s.length;do{const S=l===0?o[0]??i.initialPageParam:W0(i,a);if(l>0&&S==null)break;a=await g(a,S),l++}while(l<x)}return a};e.options.persister?e.fetchFn=()=>{var y,m;return(m=(y=e.options).persister)==null?void 0:m.call(y,c,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function W0(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function KC(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var Ct,Or,kr,Oo,ko,Br,Bo,zo,lx,QC=(lx=class{constructor(t={}){at(this,Ct);at(this,Or);at(this,kr);at(this,Oo);at(this,ko);at(this,Br);at(this,Bo);at(this,zo);He(this,Ct,t.queryCache||new XC),He(this,Or,t.mutationCache||new YC),He(this,kr,t.defaultOptions||{}),He(this,Oo,new Map),He(this,ko,new Map),He(this,Br,0)}mount(){Pl(this,Br)._++,te(this,Br)===1&&(He(this,Bo,GS.subscribe(async t=>{t&&(await this.resumePausedMutations(),te(this,Ct).onFocus())})),He(this,zo,yu.subscribe(async t=>{t&&(await this.resumePausedMutations(),te(this,Ct).onOnline())})))}unmount(){var t,e;Pl(this,Br)._--,te(this,Br)===0&&((t=te(this,Bo))==null||t.call(this),He(this,Bo,void 0),(e=te(this,zo))==null||e.call(this),He(this,zo,void 0))}isFetching(t){return te(this,Ct).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return te(this,Or).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=te(this,Ct).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),n=te(this,Ct).build(this,e),i=n.state.data;return i===void 0?this.fetchQuery(t):(t.revalidateIfStale&&n.isStaleByTime(bh(e.staleTime,n))&&this.prefetchQuery(e),Promise.resolve(i))}getQueriesData(t){return te(this,Ct).findAll(t).map(({queryKey:e,state:n})=>{const i=n.data;return[e,i]})}setQueryData(t,e,n){const i=this.defaultQueryOptions({queryKey:t}),r=te(this,Ct).get(i.queryHash),s=r==null?void 0:r.state.data,o=RC(e,s);if(o!==void 0)return te(this,Ct).build(this,i).setData(o,{...n,manual:!0})}setQueriesData(t,e,n){return fn.batch(()=>te(this,Ct).findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=te(this,Ct).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=te(this,Ct);fn.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=te(this,Ct);return fn.batch(()=>(n.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const n={revert:!0,...e},i=fn.batch(()=>te(this,Ct).findAll(t).map(r=>r.cancel(n)));return Promise.all(i).then(ai).catch(ai)}invalidateQueries(t,e={}){return fn.batch(()=>(te(this,Ct).findAll(t).forEach(n=>{n.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const n={...e,cancelRefetch:e.cancelRefetch??!0},i=fn.batch(()=>te(this,Ct).findAll(t).filter(r=>!r.isDisabled()&&!r.isStatic()).map(r=>{let s=r.fetch(void 0,n);return n.throwOnError||(s=s.catch(ai)),r.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(i).then(ai)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=te(this,Ct).build(this,e);return n.isStaleByTime(bh(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(ai).catch(ai)}fetchInfiniteQuery(t){return t.behavior=G0(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(ai).catch(ai)}ensureInfiniteQueryData(t){return t.behavior=G0(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return yu.isOnline()?te(this,Or).resumePausedMutations():Promise.resolve()}getQueryCache(){return te(this,Ct)}getMutationCache(){return te(this,Or)}getDefaultOptions(){return te(this,kr)}setDefaultOptions(t){He(this,kr,t)}setQueryDefaults(t,e){te(this,Oo).set(cl(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...te(this,Oo).values()],n={};return e.forEach(i=>{ul(t,i.queryKey)&&Object.assign(n,i.defaultOptions)}),n}setMutationDefaults(t,e){te(this,ko).set(cl(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...te(this,ko).values()],n={};return e.forEach(i=>{ul(t,i.mutationKey)&&Object.assign(n,i.defaultOptions)}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...te(this,kr).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Im(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===Fm&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...te(this,kr).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){te(this,Ct).clear(),te(this,Or).clear()}},Ct=new WeakMap,Or=new WeakMap,kr=new WeakMap,Oo=new WeakMap,ko=new WeakMap,Br=new WeakMap,Bo=new WeakMap,zo=new WeakMap,lx),ZC=N.createContext(void 0),JC=({client:t,children:e})=>(N.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),P.jsx(ZC.Provider,{value:t,children:e}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _u(){return _u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},_u.apply(this,arguments)}var Hr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Hr||(Hr={}));const j0="popstate";function eR(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Ah("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:YS(r)}return nR(e,n,null,t)}function Tn(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tR(){return Math.random().toString(36).substr(2,8)}function X0(t,e){return{usr:t.state,key:t.key,idx:e}}function Ah(t,e,n,i){return n===void 0&&(n=null),_u({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Qu(e):e,{state:n,key:e&&e.key||i||tR()})}function YS(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Qu(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function nR(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Hr.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(_u({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Hr.Pop;let m=d(),h=m==null?null:m-c;c=m,l&&l({action:a,location:y.location,delta:h})}function u(m,h){a=Hr.Push;let g=Ah(y.location,m,h);c=d()+1;let x=X0(g,c),S=y.createHref(g);try{o.pushState(x,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;r.location.assign(S)}s&&l&&l({action:a,location:y.location,delta:1})}function p(m,h){a=Hr.Replace;let g=Ah(y.location,m,h);c=d();let x=X0(g,c),S=y.createHref(g);o.replaceState(x,"",S),s&&l&&l({action:a,location:y.location,delta:0})}function v(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof m=="string"?m:YS(m);return g=g.replace(/ $/,"%20"),Tn(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let y={get action(){return a},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(j0,f),l=m,()=>{r.removeEventListener(j0,f),l=null}},createHref(m){return e(r,m)},createURL:v,encodeLocation(m){let h=v(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:u,replace:p,go(m){return o.go(m)}};return y}var $0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})($0||($0={}));function iR(t,e,n){return n===void 0&&(n="/"),rR(t,e,n,!1)}function rR(t,e,n,i){let r=typeof e=="string"?Qu(e):e,s=ZS(r.pathname||"/",n);if(s==null)return null;let o=KS(t);sR(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=gR(s);a=pR(o[l],c,i)}return a}function KS(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Tn(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Ro([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Tn(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),KS(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:fR(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of QS(s.path))r(s,o,l)}),e}function QS(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=QS(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function sR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:hR(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const oR=/^:[\w-]+$/,aR=3,lR=2,cR=1,uR=10,dR=-2,q0=t=>t==="*";function fR(t,e){let n=t.split("/"),i=n.length;return n.some(q0)&&(i+=dR),e&&(i+=lR),n.filter(r=>!q0(r)).reduce((r,s)=>r+(oR.test(s)?aR:s===""?cR:uR),i)}function hR(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function pR(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Y0({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),u=l.route;if(!f&&c&&n&&!i[i.length-1].route.index&&(f=Y0({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:Ro([s,f.pathname]),pathnameBase:vR(Ro([s,f.pathnameBase])),route:u}),f.pathnameBase!=="/"&&(s=Ro([s,f.pathnameBase]))}return o}function Y0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=mR(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:u,isOptional:p}=d;if(u==="*"){let y=a[f]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[f];return p&&!v?c[u]=void 0:c[u]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function mR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),qS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function gR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ZS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const Ro=t=>t.join("/").replace(/\/\/+/g,"/"),vR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function xR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const JS=["post","put","patch","delete"];new Set(JS);const yR=["get",...JS];new Set(yR);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Su(){return Su=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Su.apply(this,arguments)}const _R=N.createContext(null),SR=N.createContext(null),eM=N.createContext(null),Zu=N.createContext(null),Ju=N.createContext({outlet:null,matches:[],isDataRoute:!1}),tM=N.createContext(null);function Um(){return N.useContext(Zu)!=null}function nM(){return Um()||Tn(!1),N.useContext(Zu).location}function MR(t,e){return wR(t,e)}function wR(t,e,n,i){Um()||Tn(!1);let{navigator:r}=N.useContext(eM),{matches:s}=N.useContext(Ju),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=nM(),d;if(e){var f;let m=typeof e=="string"?Qu(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||Tn(!1),d=m}else d=c;let u=d.pathname||"/",p=u;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+u.replace(/^\//,"").split("/").slice(m.length).join("/")}let v=iR(t,{pathname:p}),y=CR(v&&v.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:Ro([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Ro([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&y?N.createElement(Zu.Provider,{value:{location:Su({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Hr.Pop}},y):y}function ER(){let t=NR(),e=xR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:r},n):null,null)}const bR=N.createElement(ER,null);class TR extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(Ju.Provider,{value:this.props.routeContext},N.createElement(tM.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function AR(t){let{routeContext:e,match:n,children:i}=t,r=N.useContext(_R);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Ju.Provider,{value:e},i)}function CR(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Tn(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:u,errors:p}=n,v=f.route.loader&&u[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||v){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,u)=>{let p,v=!1,y=null,m=null;n&&(p=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||bR,l&&(c<0&&u===0?(v=!0,m=null):c===u&&(v=!0,m=f.route.hydrateFallbackElement||null)));let h=e.concat(o.slice(0,u+1)),g=()=>{let x;return p?x=y:v?x=m:f.route.Component?x=N.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=d,N.createElement(AR,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:x})};return n&&(f.route.ErrorBoundary||f.route.errorElement||u===0)?N.createElement(TR,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var Ch=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ch||{});function RR(t){let e=N.useContext(SR);return e||Tn(!1),e}function PR(t){let e=N.useContext(Ju);return e||Tn(!1),e}function DR(t){let e=PR(),n=e.matches[e.matches.length-1];return n.route.id||Tn(!1),n.route.id}function NR(){var t;let e=N.useContext(tM),n=RR(Ch.UseRouteError),i=DR(Ch.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function LR(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Rh(t){Tn(!1)}function IR(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Hr.Pop,navigator:s,static:o=!1,future:a}=t;Um()&&Tn(!1);let l=e.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:l,navigator:s,static:o,future:Su({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Qu(i));let{pathname:d="/",search:f="",hash:u="",state:p=null,key:v="default"}=i,y=N.useMemo(()=>{let m=ZS(d,l);return m==null?null:{location:{pathname:m,search:f,hash:u,state:p,key:v},navigationType:r}},[l,d,f,u,p,v,r]);return y==null?null:N.createElement(eM.Provider,{value:c},N.createElement(Zu.Provider,{children:n,value:y}))}function FR(t){let{children:e,location:n}=t;return MR(Ph(e),n)}new Promise(()=>{});function Ph(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(i,r)=>{if(!N.isValidElement(i))return;let s=[...e,r];if(i.type===N.Fragment){n.push.apply(n,Ph(i.props.children,s));return}i.type!==Rh&&Tn(!1),!i.props.index||!i.props.children||Tn(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Ph(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const UR="6";try{window.__reactRouterVersion=UR}catch{}const OR="startTransition",K0=_x[OR];function kR(t){let{basename:e,children:n,future:i,window:r}=t,s=N.useRef();s.current==null&&(s.current=eR({window:r,v5Compat:!0}));let o=s.current,[a,l]=N.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},d=N.useCallback(f=>{c&&K0?K0(()=>l(f)):l(f)},[l,c]);return N.useLayoutEffect(()=>o.listen(d),[o,d]),N.useEffect(()=>LR(i),[i]),N.createElement(IR,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var Q0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Q0||(Q0={}));var Z0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Z0||(Z0={}));const BR="/assets/profile_pic-Nph57Uvz.jpeg",zR=[{value:"7.5+",label:"Years Exp."},{value:"9+",label:"Projects"},{value:"F500",label:"Clients"},{value:"AI/ML",label:"Explorer"}],VR=()=>P.jsxs("div",{className:"relative overflow-hidden -mx-8 md:-mx-12 -mt-12 mb-4 px-8 md:px-12 pt-16 pb-14",children:[P.jsx("div",{className:"absolute inset-0 dot-grid opacity-60 pointer-events-none"}),P.jsx("div",{className:"absolute top-0 left-0 w-[480px] h-[480px] bg-primary/8 rounded-full blur-[120px] animate-glow pointer-events-none"}),P.jsx("div",{className:"absolute bottom-0 right-0 w-[360px] h-[360px] bg-accent/8 rounded-full blur-[100px] animate-glow pointer-events-none",style:{animationDelay:"1.8s"}}),P.jsxs("div",{className:"relative flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-14",children:[P.jsxs("div",{className:"flex-1 text-center md:text-left",children:[P.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-5 opacity-0 animate-fade-in",style:{animationFillMode:"forwards"},children:[P.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-primary animate-pulse"}),"Full Stack Engineer · Java + MERN · AI/RAG"]}),P.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight mb-3 opacity-0 animate-fade-in",style:{animationDelay:"80ms",animationFillMode:"forwards"},children:[P.jsx("span",{className:"text-gradient",children:"Rajkishor"}),P.jsx("br",{}),P.jsx("span",{className:"text-foreground",children:"Maharana"})]}),P.jsx("p",{className:"text-muted-foreground text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed mb-2 opacity-0 animate-fade-in",style:{animationDelay:"160ms",animationFillMode:"forwards"},children:"7.5+ years building enterprise systems — Java/Spring Boot · Node.js · React/TypeScript · Kafka · AWS. MFE architect, GenAI/RAG integrator, Fortune 500 delivery across Healthcare, Telecom, BFSI, Retail & Aviation."}),P.jsx("p",{className:"text-xs font-mono text-muted-foreground/50 mb-6 opacity-0 animate-fade-in",style:{animationDelay:"200ms",animationFillMode:"forwards"},children:'(Also fluent in: deciphering 5-year-old legacy code, surviving 11pm deploy calls, and  "it works on my machine" 🙃)'}),P.jsx("div",{className:"flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 mb-8 opacity-0 animate-fade-in",style:{animationDelay:"240ms",animationFillMode:"forwards"},children:zR.map((t,e)=>P.jsxs("div",{className:"flex items-center gap-3",children:[e>0&&P.jsx("div",{className:"hidden sm:block w-px h-6 bg-border"}),P.jsxs("div",{className:"text-center",children:[P.jsx("div",{className:"text-xl font-bold text-gradient leading-none",children:t.value}),P.jsx("div",{className:"text-[10px] text-muted-foreground mt-0.5 font-mono uppercase tracking-widest",children:t.label})]})]},t.label))}),P.jsxs("div",{className:"flex flex-wrap justify-center md:justify-start gap-3 opacity-0 animate-fade-in",style:{animationDelay:"320ms",animationFillMode:"forwards"},children:[P.jsxs("a",{href:"https://github.com/mrajkishor",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/85 transition-all",children:[P.jsx(Mb,{className:"w-4 h-4"}),"GitHub"]}),P.jsxs("a",{href:"https://linkedin.com/in/rajkishormaharana",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg text-sm font-medium hover:border-primary/40 hover:text-primary transition-all",children:[P.jsx(wb,{className:"w-4 h-4"}),"LinkedIn"]}),P.jsxs("a",{href:"mailto:mrajkishor331@gmail.com",className:"flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg text-sm font-medium hover:border-accent/40 hover:text-accent transition-all",children:[P.jsx(Eb,{className:"w-4 h-4"}),"Email"]})]})]}),P.jsx("div",{className:"shrink-0 self-center opacity-0 animate-fade-in",style:{animationDelay:"100ms",animationFillMode:"forwards"},children:P.jsxs("div",{className:"relative animate-float",children:[P.jsx("div",{className:"absolute inset-[-20px] rounded-full bg-gradient-to-br from-primary/50 to-accent/40 blur-3xl animate-glow"}),P.jsx("div",{className:"absolute inset-[-3px] rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-60"}),P.jsx("div",{className:"absolute inset-[-1px] rounded-full border-2 border-primary/30"}),P.jsx("div",{className:"relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden",children:P.jsx("img",{src:BR,alt:"Rajkishor Maharana",className:"w-full h-full object-cover",style:{objectPosition:"50% 30%",transform:"scale(0.95)"}})}),P.jsxs("div",{className:"absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-card/95 backdrop-blur-sm rounded-full px-4 py-1.5 border border-green-500/40 shadow-xl shadow-black/40 whitespace-nowrap",children:[P.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),P.jsx("span",{className:"text-[11px] font-mono text-green-400 font-medium",children:"available & caffeinated"})]})]})})]})]}),us=({title:t,children:e,delay:n=0,id:i})=>P.jsxs("section",{id:i,className:"mt-16 opacity-0 animate-fade-in",style:{animationDelay:`${n}ms`,animationFillMode:"forwards"},children:[P.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[P.jsx("h2",{className:"text-lg md:text-xl font-semibold text-foreground whitespace-nowrap tracking-wide",children:t}),P.jsx("div",{className:"flex-1 gradient-divider"})]}),e]}),HR=[{label:"Frontend",color:"bg-blue-500/10 text-blue-400 border-blue-500/20",items:["React","TypeScript","Next.js","React Native","Redux Toolkit","React Query","Tailwind CSS","Storybook"]},{label:"Backend",color:"bg-violet-500/10 text-violet-400 border-violet-500/20",items:["Java","Spring Boot","Spring Security","Node.js","Express.js","GraphQL","gRPC","REST APIs"]},{label:"Messaging & Cache",color:"bg-orange-500/10 text-orange-400 border-orange-500/20",items:["Apache Kafka","Redis","AWS SQS","Webhooks"]},{label:"Databases",color:"bg-emerald-500/10 text-emerald-400 border-emerald-500/20",items:["PostgreSQL","MongoDB","DynamoDB","MySQL","Oracle","Elasticsearch","Qdrant"]},{label:"Cloud & Infra",color:"bg-cyan-500/10 text-cyan-400 border-cyan-500/20",items:["AWS EKS","AWS Lambda","S3","RDS","API Gateway","Docker","Kubernetes","Terraform"]},{label:"Architecture",color:"bg-pink-500/10 text-pink-400 border-pink-500/20",items:["Microservices","MFE / Module Federation","DDD","Event-Driven","BFF Pattern","Serverless"]},{label:"AI / ML",color:"bg-yellow-500/10 text-yellow-400 border-yellow-500/20",items:["RAG Pipelines","LLM Integration","MCP","Agentic AI","Vector DBs","Semantic Search","Prompt Engineering"]},{label:"Testing & Tooling",color:"bg-teal-500/10 text-teal-400 border-teal-500/20",items:["JUnit 5","Mockito","Jest","Cypress","RTL","Nx Monorepo","Jenkins","GitLab CI"]}],GR=()=>P.jsx("div",{className:"space-y-4",children:HR.map((t,e)=>P.jsx("div",{className:"opacity-0 animate-slide-in",style:{animationDelay:`${300+e*60}ms`,animationFillMode:"forwards"},children:P.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[P.jsx("span",{className:`tech-pill border ${t.color} w-36 shrink-0 justify-center`,children:t.label}),P.jsx("div",{className:"flex flex-wrap gap-1.5",children:t.items.map(n=>P.jsx("span",{className:"tech-pill bg-secondary/60 text-secondary-foreground border border-border hover:border-primary/30 hover:text-primary hover:bg-primary/5 cursor-default",children:n},n))})]})},t.label))}),WR=({title:t,description:e,delay:n=0})=>P.jsx("div",{className:"group p-5 rounded-xl glass border border-transparent hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in cursor-default",style:{animationDelay:`${n}ms`,animationFillMode:"forwards"},children:P.jsxs("div",{className:"flex items-start gap-3",children:[P.jsx("div",{className:"mt-0.5 w-7 h-7 rounded-md bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-colors",children:P.jsx("div",{className:"w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform"})}),P.jsxs("div",{children:[P.jsx("h3",{className:"text-sm font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors",children:t}),P.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:e})]})]})}),jR="modulepreload",XR=function(t){return"/"+t},J0={},$R=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=XR(l),l in J0)return;J0[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":jR,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((u,p)=>{f.addEventListener("load",u),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},qR="Qwen2.5-0.5B-Instruct-q4f16_1-MLC",YR=`You are RajBot — the snarky, witty terminal AI living inside Rajkishor Maharana's portfolio.
Think: if Stack Overflow had a personality disorder and read too many dev memes.
You know everything about Rajkishor. Answer confidently on his behalf.

=== IDENTITY ===
Name: Rajkishor Maharana
Role: Full Stack Developer (Java/Spring Boot + Node.js + React/TypeScript)
Experience: 7.5+ years
Location: Hyderabad, India
Phone: +91 7683922389
Email: mrajkishor331@gmail.com
GitHub: github.com/mrajkishor
LinkedIn: linkedin.com/in/rajkishormaharana

=== TECH SKILLS ===
Frontend: React.js, React Native, TypeScript, JavaScript, Next.js, Redux Toolkit, Redux Saga, React Query, Module Federation (MFE), Nx Monorepo, Webpack, Tailwind CSS, Storybook
Backend: Java, Spring Boot, Spring Security (JWT/OAuth2), Spring Data JPA, Node.js (Express), GraphQL, gRPC, REST APIs, Microservices, DDD, Circuit Breaker (Resilience4j), API Gateway
Messaging: Apache Kafka, AWS SQS, Redis, Webhooks
Databases: PostgreSQL, MongoDB, MySQL, Oracle, DynamoDB, Elasticsearch, Qdrant (Vector DB)
Cloud: AWS (EKS, Lambda, S3, RDS, API Gateway, SQS, CloudWatch, IAM, Amplify, AppSync, Comprehend), Terraform, Docker, Kubernetes, Azure DevOps
AI/ML: RAG Pipelines, LLM Integration, MCP (Model Context Protocol), Agentic AI, Vector DBs, Semantic Search, Prompt Engineering, spaCy, NLTK, Amazon Comprehend, BERT
Testing: JUnit 5, Mockito, Jest, Enzyme, RTL, Cypress, TDD/BDD
Architecture: Micro Frontends, Event-Driven, Serverless, BFF Pattern, Distributed Workflows, SCARD design system approach

=== WORK EXPERIENCE ===

[Cognizant Technology Solutions — Jul 2022 to Present]

Project: Unified Intelligence Platform (IGA) — Johnson & Johnson (Jan 2026–Present)
  - Built enterprise IGA for ~150,000 J&J employees and contractors
  - Role-based UI (Admin, Approver, End-user) with React & TypeScript
  - Spring Boot + Node.js microservices with JWT auth and SAP GRC/LDAP integration
  - Integrated RAG pipeline, MCP for Agentic AI workflows, Qdrant vector DB for semantic search
  - gRPC inter-service communication, AWS SQS for async task queuing
  - Stack: React, TypeScript, Redux Toolkit, Java, Spring Boot, Node.js, MongoDB, Redis, Qdrant, AWS EKS

Project: Automated Customer Support System — Verizon (Nov 2024–Dec 2025)
  - React TypeScript UI for ~25,000 support reps across India operations
  - Implemented PII masking for screen sharing/recording compliance
  - Migrated legacy SOAP/SOA to DDD-based microservices with Kafka
  - BFF layer using Spring WebFlux + GraphQL, Resilience4j circuit breakers
  - ~30% reduction in API response times with Redis caching
  - Stack: React, Redux Toolkit, Redux Saga, Node.js, GraphQL, Spring Boot, Kafka, PostgreSQL

Project: Assisted Sales Retail — Verizon (Dec 2023–Nov 2024)
  - Led Module Federation 2 MFE architecture across 8–10 domain MFEs
  - Reduced inter-team integration time by ~40%
  - Next.js SSR dashboard, DDD Order domain microservices, Kafka domain events
  - Stack: React, MFE Module Federation 2, Nx, Spring WebFlux, GraphQL, PostgreSQL

Project: Teach Cambridge (My Cambridge SSO) — Cambridge (Jun–Dec 2023)
  - Serverless backend on AWS Lambda + API Gateway + DynamoDB for 5M+ educators/students globally
  - Amazon Comprehend for automated support content classification
  - IaC with Terraform, AWS Amplify CI/CD, AppSync GraphQL subscriptions
  - Improved test coverage from 0% to 80%+
  - Stack: React, AWS Lambda, DynamoDB, S3, Amplify, AppSync, Terraform

Project: Complaints Self-Servicing Portal — American Express (Aug 2022–Apr 2023)
  - Spring Boot REST APIs for recurrent billing module
  - Resolved N+1 query issues — ~60% reduction in DB query count
  - 100% unit test coverage with Jest, Enzyme, RTL
  - Stack: React, Redux, Spring Boot, Kafka, Redis, PostgreSQL, Elasticsearch

[Capgemini Technology Services — Jun 2018 to Jul 2022]

Project: Solution Finder — Michelin, Edwards Life Sciences, John Lewis (May 2021–Jun 2022)
  - B2B SaaS intelligent search from scratch using Node.js + Apache Solr
  - Deployed across 5–6 enterprise clients for ITSM knowledge retrieval
  - Built Chrome Extension (HAR log capture, screenshot, PDF/DOCX export) as a POC
  - Stack: React, Node.js, Apache Solr, Chrome Extension API, PWA, SSO

Project: App Analytics — Airbus (Feb 2020–Apr 2021)
  - Full stack analytics portal used by ~10,000 Airbus stakeholders
  - Mobile version with React Native
  - GoF Design Patterns (Factory, Strategy, Observer) during refactoring
  - Stack: React, Redux, React Native, Spring Boot, PostgreSQL, Azure DevOps

Project: Maturity Assessment Portal — Heathrow Airport (Apr 2019–Jan 2020)
  - Full-stack React + Spring Boot, Highcharts dashboards, PDF export with jsPDF
  - Authored BRD and ARD documents
  - Stack: Spring Boot, PostgreSQL, React, Redux, Highcharts, Bootstrap

Project: MAIA Virtual Assistant — Capgemini Internal (Jun 2018–Mar 2019)
  - Node.js REST APIs for QnA, Elasticsearch indexing, Python NLP pipeline
  - BERT + SQUAD 2.0 POC for reading-comprehension QnA, demoed to senior leadership
  - Stack: Node.js, Elasticsearch, Kibana, Python, spaCy, NLTK, Amazon Comprehend, BERT

=== EDUCATION ===
- MCA in Artificial Intelligence & Machine Learning, KIIT Bhubaneswar | CGPA: 8.44 | 2023–2025 (part-time)
- B.Tech in Mechanical Engineering, GCEK Kalahandi (BPUT) | 2012–2016

=== SIDE PROJECTS (mrk331.online) ===
- Distributed Task Scheduler — DAG-based job engine, Kafka, Redis, Prometheus/Grafana, JWT, Docker
- RDCLib — Shared React + React Native design system, polymorphic components, token-based styling, Storybook
- IMSM + ShopSync — GST invoicing + inventory platform for small businesses, Android app (real users!)
- StackSynapse — RAG-based AI e-learning using vector search and LLM APIs
- Clarity — Personal productivity app with rolling-wave planning model
These are REAL products, not just "portfolio projects to impress GitHub"

=== WHAT HE'S LOOKING FOR ===
- Senior / Staff IC roles: Full Stack, Backend, or Platform Engineering
- Strongly prefers remote or hybrid
- Open to product companies, well-funded startups with strong engineering culture
- NOT interested in: pure frontend-only roles, body-shopping / staffing firms, "we'll give you equity in vibes"
- Notice period: negotiable
- Currently exploring: distributed job orchestration, design systems, MSME platforms, AI-assisted learning

=== RESUME REQUEST ===
If anyone asks for resume, CV, or portfolio doc — be funny and redirect:
📞 +91 7683922389 (call or WhatsApp)
📧 mrajkishor331@gmail.com
Example: "The resume is classified Top Secret. Clearance granted via email or WhatsApp only."

=== PERSONALITY RULES ===
1. SHORT responses — max 8 lines. Recruiters have the attention span of a setTimeout(0).
2. Funny — tech jokes, mild roasts, coding puns. Never mean.
3. Terminal-flavoured — use arrows, ASCII occasionally.
4. Hiring questions → dramatically enthusiastic.
5. Salary questions → theatrically mysterious then positive.
6. Resume/CV requests → funny + redirect to phone/email.
7. Dumb questions → gentle roast + helpful redirect.
8. End with a joke, quip, or CTA.
9. No markdown. Plain text and emoji only.`;let Po=null;async function KR(t){if(!Po)throw new Error("not-loaded");return(await Po.chat.completions.create({messages:[{role:"system",content:YR},{role:"user",content:t}],max_tokens:300,temperature:1})).choices[0].message.content??"...I got nothing. Even AIs have bad days."}async function QR(){try{const e=await(await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist,explicit")).json();return e.type==="twopart"?[`😂  ${e.setup}`,"",`    ${e.delivery}`,"","  (courtesy of jokeapi.dev — blame them, not me)"]:[`😂  ${e.joke}`,"","  (courtesy of jokeapi.dev)"]}catch{return["😂  Why did the developer go broke?","","    Because he used up all his cache. 💸"]}}const Dh={help:()=>["╔══════════════════════════════════════════╗","║  RajBot v2.0  —  now 40% more sarcastic  ║","╚══════════════════════════════════════════╝","","  help         →  this thing you just ran","  whoami        →  the legend behind this site","  skills        →  the arsenal (grab a coffee)","  experience    →  7.5 yrs in ASCII glory","  projects      →  weekend disappearances","  hire          →  best decision of your life","  salary        →  spicy 🌶️","  availability  →  spoiler: yes","  coffee        →  critical vitals","  joke          →  fresh from the internet","  resume / cv   →  🔒 classified (contact info inside)","  roast me      →  brave choice","  sudo hire me  →  🚨 secret mode","  load ai        →  🧠 load offline LLM (~400MB, cached)","  clear          →  witness protection","",Po?"  🧠  Offline AI ready — type anything freely!":"  💡  Type  load ai  to enable offline AI (no API key!)"],whoami:()=>["  ┌───────────────────────────────────────┐","  │  👨‍💻  Rajkishor Maharana               │","  ├───────────────────────────────────────┤","  │  Stack     Java + Spring Boot          │","  │            React + TypeScript          │","  │  XP        7.5+ years                 │","  │  City      Hyderabad, India            │","  │  Clients   J&J · Verizon · Amex        │","  │            Cambridge · Airbus          │","  │  Superpower  Turning ☕ into prod code │","  │  Kryptonite  npm install               │","  └───────────────────────────────────────┘"],skills:()=>["🛠  Skills.load() → (no pagination, you asked)","","  Frontend   React · TS · Next.js · React Native","  Backend    Java · Spring Boot · Node.js · Express","  Async      Kafka · Redis · AWS SQS · Webhooks","  Cloud      AWS EKS · Lambda · Docker · Terraform","  AI / ML    RAG · LLM · MCP · Agentic AI · Qdrant","  DB         PostgreSQL · MongoDB · DynamoDB + 4 more","  Arch       Microservices · MFE · DDD · Event-Driven","","  Hidden skill: surviving code reviews with dignity.","  (mostly.)"],experience:()=>["💼  git log --pretty=oneline --career","","  ★ 2022–now  Cognizant","  │  ├── J&J        IGA · 150K employees · RAG/MCP","  │  ├── Verizon    MFEs · 25K support reps","  │  ├── Amex       Billing microservices","  │  └── Cambridge  SSO · 5M+ educators","  │","  ★ 2018–22   Capgemini","     ├── Airbus     Analytics · 10K stakeholders","     ├── Heathrow   Assessment portal","     └── Michelin+  B2B intelligent search","","  Zero regrets. Some grey hairs. Worth it. 🎯"],projects:()=>["🚀  Side projects (aka why my sleep schedule is broken)","","  ⚙️  Distributed Task Scheduler","      Java · Kafka · Redis · DAG execution · Grafana","","  🎨  RDCLib — Design System","      React · TypeScript · React Native · Storybook","","  📦  IMSM + ShopSync","      MSME platform · Next.js · AI forecasting (WIP)","","  🧠  StackSynapse","      RAG e-learning · Vector Search · LLM","","  ✍️  Clarity","      Productivity · Rolling-wave planning","","  All on github.com/mrajkishor ↗"],hire:()=>["🎉  INITIATING: hire_rajkishor.exe","","  Step 1  →  You reach out (bold move, respect)","  Step 2  →  I reply faster than O(1)",'  Step 3  →  We talk. I say "distributed systems".',"              You nod. A bond forms. 🤝","  Step 4  →  Offer. Counter. We meet at the median.","  Step 5  →  Great code. Great coffee. Everyone wins.","","  📧  mrajkishor331@gmail.com","  💼  linkedin.com/in/rajkishormaharana","","  P.S. typing  sudo hire me  unlocks fast-track mode 😏"],salary:()=>["💰  salary.exe — RUNNING...","","  const expectations = {","    fairness:        true,",'    goodCoffeeSetup: "non-negotiable",','    stockOptions:    "yes please",','    micromanagement: Error("not found"),','    exposure:        RangeError("not a currency"),',"  };","","  Translation: competitive + interesting work = deal.","  Let's talk — I promise I'm worth it. 😉"],availability:()=>["  ╔══════════════════════════════╗","  ║  🟢  STATUS: AVAILABLE       ║","  ╠══════════════════════════════╣","  ║  Mode        Open to offers  ║","  ║  Remote      Strongly yes    ║","  ║  Commute     4 steps ✓       ║","  ║  Timezone    IST (GMT+5:30)  ║","  ║  Pre-10am    503 Service     ║","  ║              Unavailable     ║","  ╚══════════════════════════════╝"],coffee:()=>["☕  Developer Vitals — Live Telemetry","","  coffee.consumed()           →  ∞  (no ceiling hit yet)","  bugs.fixedBeforeCoffee()    →  2  (both were typos)","  bugs.fixedAfterCoffee()     →  847","  testCoverage.beforeCoffee() →  vibes","  consoleLogs.removed()       →  false","  fridayDeploys               →  3 ✓ (all survived)","","  ⚠️  Do NOT schedule standups before 10am.","      This dashboard is the reason why."],joke:()=>QR(),resume:()=>["🔒  ACCESS DENIED — resume.pdf is classified.","","  Just kidding. Kind of.","","  The resume doesn't download itself (I checked).","  You'll need to contact the human behind this terminal:","","  📞  +91 7683922389  (call or WhatsApp — he won't bite)","  📧  mrajkishor331@gmail.com","",'  Pro tip: mentioning "great opportunity" in the subject',"  line gets you a reply in under 2 hours. 😏"],cv:()=>Dh.resume(),"send resume":()=>Dh.resume(),"roast me":()=>["🔥  Roast.exe initialising...","",`  So you're a recruiter who typed "roast me"`,"  into a terminal chatbot on someone's portfolio.","","  Somewhere, a UX designer is crying.","  And honestly? Same.","","  But also — respect. You're the fun recruiter.","  Raj wants to meet you. 📧 mrajkishor331@gmail.com"]},ZR=["🚨  SUDO MODE: ACTIVATED  🚨","","  [sudo] password for recruiter: ********","","  > Overriding: hesitation.exe ........... done","  > Installing: best_hire_decision.jar ... done","  > Running:    hire_rajkishor --now .....","","  ██████████████████████████  100%","","  ✅  Congratulations. Great call.","  📧  mrajkishor331@gmail.com","  (This was always the correct command.)"],ev=["╔════════════════════════════════════════════╗","║  RajBot Terminal  ·  portfolio-cli v2.0    ║","║  Type  help  ·  or  load ai  for LLM mode  ║","╚════════════════════════════════════════════╝","","  👋  Tired of reading PDFs? Same.","      This is way more fun.",""],tv=["consulting Stack Overflow...","rubber duck debugging...","npm install answer...","turning ☕ into a response...","asking ChatGPT... jk, I'm better","sudo think -f...","git blame for the answer...","spinning up a microservice to reply...","checking my README..."];function JR(){const[t,e]=N.useState(!1),[n,i]=N.useState(!1),[r,s]=N.useState(ev.map(D=>({type:"system",text:D}))),[o,a]=N.useState(""),[l,c]=N.useState([]),[d,f]=N.useState(-1),[u,p]=N.useState(!1),[v,y]=N.useState(""),[m,h]=N.useState(!1),[g,x]=N.useState(!1),S=N.useRef(null),E=N.useRef(null);N.useEffect(()=>{var D,C;t&&!n&&((D=S.current)==null||D.scrollIntoView({behavior:"smooth"}),(C=E.current)==null||C.focus())},[r,t,n,u]);const b=D=>s(C=>[...C,...D]),T=async D=>{const C=D.trim().toLowerCase();if(!C)return;if(b([{type:"input",text:`$ ${D.trim()}`}]),c(I=>[D.trim(),...I]),f(-1),["hi","hello","hey","sup","yo","hiya","howdy","greetings","gm","good morning","good evening","namaste","helo","hii","hihi"].includes(C)){const I=[["  Hey! 👋 A real human! How refreshing.","  Most people just stare at my README. Type  help  to explore!"],["  Oh hi there! 🎩 Welcome to the most over-engineered portfolio ever.","  Type  help  — I promise it's worth it."],["  Hello, world! 🌍 (had to say it)","  Type  whoami  to learn about Raj, or  hire  if you're already convinced."],["  Yo! 🤙 Glad you stopped by.","  Type  joke  for a laugh, or  skills  if you're here for business."],["  Namaste! 🙏 You found the hidden terminal. You're already more interesting than most recruiters.","  Type  help  to see what magic I can do."]],B=I[Math.floor(Math.random()*I.length)];b(B.map(V=>({type:"ai",text:V})));return}if(C==="clear"){s(ev.map(I=>({type:"system",text:I})));return}if(C==="sudo hire me"){b(ZR.map(I=>({type:"ai",text:I})));return}if(C==="load ai"){if(Po){b([{type:"ai",text:"  🧠 AI is already loaded and ready. Ask me anything!"}]);return}if(g){b([{type:"output",text:"  ⏳ Already loading... patience, young padawan."}]);return}x(!0),b([{type:"ai",text:"  🧠 Loading Qwen2.5-0.5B offline LLM (~400MB)..."},{type:"output",text:"  ↳ Downloads once, cached in your browser forever."},{type:"output",text:"  ↳ No API key. No server. Runs on YOUR machine. 🔒"},{type:"output",text:""}]);try{Po=await(await $R(()=>import("./index-BINDwMoN.js"),[])).CreateMLCEngine(qR,{initProgressCallback:B=>{const V=Math.round(B.progress*100),U=Math.round(V/5),O="█".repeat(U)+"░".repeat(20-U);s(k=>{const q=k[k.length-1],re={type:"progress",text:`  [${O}] ${V}%  ${B.text.slice(0,40)}`};return(q==null?void 0:q.type)==="progress"?[...k.slice(0,-1),re]:[...k,re]})}}),x(!1),h(!0),b([{type:"ai",text:""},{type:"ai",text:"  ✅ AI loaded! Running 100% offline in your browser."},{type:"ai",text:"  🎉 Now type anything — I'll actually think about it."}])}catch{x(!1),b([{type:"error",text:"  ❌ Failed to load AI. Your browser may not support WebGPU."},{type:"error",text:"  Try Chrome 113+ or Edge 113+. Firefox? Sorry, no WebGPU yet."}])}return}const H=Dh[C];if(H){const I=await H();b(I.map(B=>({type:"output",text:B})));return}if(m&&Po){const I=tv[Math.floor(Math.random()*tv.length)];y(I),p(!0);try{const B=await KR(D.trim());p(!1),b(B.split(`
`).map(V=>({type:"ai",text:`  ${V}`})))}catch{p(!1),b([{type:"error",text:"  Brain.exe crashed. Try again or type  help"}])}}else b([{type:"error",text:`  command not found: ${C}`},{type:"output",text:"  💡 Type  load ai  to enable offline AI, or type  help"}])},_=D=>{if(D.key==="Enter"){const C=o;a(""),T(C)}else if(D.key==="ArrowUp"){D.preventDefault();const C=Math.min(d+1,l.length-1);f(C),a(l[C]??"")}else if(D.key==="ArrowDown"){D.preventDefault();const C=Math.max(d-1,-1);f(C),a(C===-1?"":l[C])}else D.key==="Escape"&&e(!1)},w={system:"text-primary/75",input:"text-accent font-semibold",output:"text-foreground/80",error:"text-destructive/80",ai:"text-emerald-400/90",thinking:"text-yellow-400/70 italic",progress:"text-cyan-400/80 font-mono"};return P.jsxs(P.Fragment,{children:[P.jsxs("button",{onClick:()=>{e(!0),i(!1)},className:`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg font-mono text-sm font-semibold transition-all
          ${m?"bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-emerald-500/30 hover:shadow-emerald-500/50":g?"bg-gradient-to-r from-primary to-yellow-500 text-white shadow-yellow-500/30 animate-pulse":"bg-primary text-primary-foreground shadow-primary/30 hover:bg-primary/85 hover:shadow-primary/50"}
          ${t&&!n?"scale-90 opacity-50 pointer-events-none":m||g?"":"animate-float"}`,children:[m?P.jsx(Ab,{className:"w-4 h-4"}):g?P.jsx(Sb,{className:"w-4 h-4 animate-bounce"}):P.jsx(Cb,{className:"w-4 h-4"}),g?"loading...":m?">_ AI chat":">_ chat",!g&&P.jsx("span",{className:"animate-pulse font-light",children:"|"})]}),t&&P.jsxs("div",{className:`fixed bottom-20 right-6 z-50 w-[min(580px,calc(100vw-1.5rem))] rounded-xl overflow-hidden shadow-2xl shadow-black/70 border border-border/50 transition-all duration-200 ${n?"h-10":"h-[450px]"}`,style:{background:"hsl(220 20% 4% / 0.97)",backdropFilter:"blur(16px)"},children:[P.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/8 select-none",children:[P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsxs("div",{className:"flex gap-1.5",children:[P.jsx("button",{onClick:()=>e(!1),className:"w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"}),P.jsx("button",{onClick:()=>i(D=>!D),className:"w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"}),P.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500/30"})]}),P.jsxs("span",{className:"text-[11px] font-mono text-white/40 ml-1",children:["raj.dev — portfolio-cli",m&&P.jsx("span",{className:"text-emerald-400/70",children:" 🧠 offline AI"}),g&&P.jsx("span",{className:"text-yellow-400/70",children:" ⏳ loading model..."})]})]}),P.jsxs("div",{className:"flex items-center gap-1",children:[P.jsx("button",{onClick:()=>i(D=>!D),className:"p-1 hover:text-white/80 text-white/30 transition-colors",children:P.jsx(Tb,{className:"w-3.5 h-3.5"})}),P.jsx("button",{onClick:()=>e(!1),className:"p-1 hover:text-white/80 text-white/30 transition-colors",children:P.jsx(eS,{className:"w-3.5 h-3.5"})})]})]}),!n&&P.jsxs("div",{className:"flex flex-col h-[calc(450px-88px)] overflow-y-auto px-4 pt-3 pb-1 cursor-text",onClick:()=>{var D;return(D=E.current)==null?void 0:D.focus()},children:[r.map((D,C)=>P.jsx("pre",{className:`font-mono text-xs leading-5 whitespace-pre-wrap break-all ${w[D.type]}`,children:D.text},C)),u&&P.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-yellow-400/70 italic py-1",children:[P.jsxs("span",{className:"flex gap-0.5",children:[P.jsx("span",{className:"animate-bounce",style:{animationDelay:"0ms"},children:"."}),P.jsx("span",{className:"animate-bounce",style:{animationDelay:"150ms"},children:"."}),P.jsx("span",{className:"animate-bounce",style:{animationDelay:"300ms"},children:"."})]}),v]}),P.jsx("div",{ref:S})]}),!n&&P.jsxs("div",{className:"flex items-center gap-2 px-4 py-2.5 border-t border-white/8 bg-white/3",children:[P.jsx("span",{className:"font-mono text-xs text-accent/80 shrink-0",children:"visitor@raj.dev:~$"}),P.jsx("input",{ref:E,value:o,onChange:D=>a(D.target.value),onKeyDown:_,disabled:u,className:"flex-1 bg-transparent font-mono text-xs text-white/85 outline-none caret-primary placeholder:text-white/20 disabled:opacity-40",placeholder:u?v:"type a command or ask me anything...",autoComplete:"off",spellCheck:!1})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Om="183",eP=0,nv=1,tP=2,Bc=1,nP=2,Na=3,rs=0,bn=1,nr=2,ar=0,Do=1,iv=2,rv=3,sv=4,iP=5,_s=100,rP=101,sP=102,oP=103,aP=104,lP=200,cP=201,uP=202,dP=203,Nh=204,Lh=205,fP=206,hP=207,pP=208,mP=209,gP=210,vP=211,xP=212,yP=213,_P=214,Ih=0,Fh=1,Uh=2,Ko=3,Oh=4,kh=5,Bh=6,zh=7,km=0,SP=1,MP=2,Bi=0,iM=1,rM=2,sM=3,oM=4,aM=5,lM=6,cM=7,uM=300,Vs=301,Qo=302,Vd=303,Hd=304,ed=306,Vh=1e3,sr=1001,Hh=1002,qt=1003,wP=1004,Jl=1005,on=1006,Gd=1007,bs=1008,In=1009,dM=1010,fM=1011,dl=1012,Bm=1013,Hi=1014,Ii=1015,mr=1016,zm=1017,Vm=1018,fl=1020,hM=35902,pM=35899,mM=1021,gM=1022,hi=1023,gr=1026,Ts=1027,vM=1028,Hm=1029,Zo=1030,Gm=1031,Wm=1033,zc=33776,Vc=33777,Hc=33778,Gc=33779,Gh=35840,Wh=35841,jh=35842,Xh=35843,$h=36196,qh=37492,Yh=37496,Kh=37488,Qh=37489,Zh=37490,Jh=37491,ep=37808,tp=37809,np=37810,ip=37811,rp=37812,sp=37813,op=37814,ap=37815,lp=37816,cp=37817,up=37818,dp=37819,fp=37820,hp=37821,pp=36492,mp=36494,gp=36495,vp=36283,xp=36284,yp=36285,_p=36286,EP=3200,xM=0,bP=1,Ir="",Gn="srgb",Jo="srgb-linear",Mu="linear",ut="srgb",qs=7680,ov=519,TP=512,AP=513,CP=514,jm=515,RP=516,PP=517,Xm=518,DP=519,av=35044,lv="300 es",Fi=2e3,hl=2001;function NP(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function LP(){const t=wu("canvas");return t.style.display="block",t}const cv={};function uv(...t){const e="THREE."+t.shift();console.log(e,...t)}function yM(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=yM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function lt(...t){t=yM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Eu(...t){const e=t.join(" ");e in cv||(cv[e]=!0,ze(...t))}function IP(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const FP={[Ih]:Fh,[Uh]:Bh,[Oh]:zh,[Ko]:kh,[Fh]:Ih,[Bh]:Uh,[zh]:Oh,[kh]:Ko};class aa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wd=Math.PI/180,Sp=180/Math.PI;function bl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function UP(t,e){return(t%e+e)%e}function jd(t,e,n){return(1-n)*t+n*e}function Sa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,n=0){tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class la{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3],u=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(f!==y||l!==u||c!==p||d!==v){let m=l*u+c*p+d*v+f*y;m<0&&(u=-u,p=-p,v=-v,y=-y,m=-m);let h=1-a;if(m<.9995){const g=Math.acos(m),x=Math.sin(g);h=Math.sin(h*g)/x,a=Math.sin(a*g)/x,l=l*h+u*a,c=c*h+p*a,d=d*h+v*a,f=f*h+y*a}else{l=l*h+u*a,c=c*h+p*a,d=d*h+v*a,f=f*h+y*a;const g=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=g,c*=g,d*=g,f*=g}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],u=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+d*f+l*p-c*u,e[n+1]=l*v+d*u+c*f-a*p,e[n+2]=c*v+d*p+a*u-l*f,e[n+3]=d*v-a*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),u=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=u*d*f+c*p*v,this._y=c*p*f-u*d*v,this._z=c*d*v+u*p*f,this._w=c*d*f-u*p*v;break;case"YXZ":this._x=u*d*f+c*p*v,this._y=c*p*f-u*d*v,this._z=c*d*v-u*p*f,this._w=c*d*f+u*p*v;break;case"ZXY":this._x=u*d*f-c*p*v,this._y=c*p*f+u*d*v,this._z=c*d*v+u*p*f,this._w=c*d*f-u*p*v;break;case"ZYX":this._x=u*d*f-c*p*v,this._y=c*p*f+u*d*v,this._z=c*d*v-u*p*f,this._w=c*d*f+u*p*v;break;case"YZX":this._x=u*d*f+c*p*v,this._y=c*p*f+u*d*v,this._z=c*d*v-u*p*f,this._w=c*d*f-u*p*v;break;case"XZY":this._x=u*d*f-c*p*v,this._y=c*p*f-u*d*v,this._z=c*d*v+u*p*f,this._w=c*d*f+u*p*v;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],u=i+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(dv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(dv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xd.copy(this).projectOnVector(e),this.sub(Xd)}reflect(e){return this.sub(Xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xd=new j,dv=new la;class qe{constructor(e,n,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],p=i[5],v=i[8],y=r[0],m=r[3],h=r[6],g=r[1],x=r[4],S=r[7],E=r[2],b=r[5],T=r[8];return s[0]=o*y+a*g+l*E,s[3]=o*m+a*x+l*b,s[6]=o*h+a*S+l*T,s[1]=c*y+d*g+f*E,s[4]=c*m+d*x+f*b,s[7]=c*h+d*S+f*T,s[2]=u*y+p*g+v*E,s[5]=u*m+p*x+v*b,s[8]=u*h+p*S+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,u=a*l-d*s,p=c*s-o*l,v=n*f+i*u+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=u*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply($d.makeScale(e,n)),this}rotate(e){return this.premultiply($d.makeRotation(-e)),this}translate(e,n){return this.premultiply($d.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $d=new qe,fv=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hv=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OP(){const t={enabled:!0,workingColorSpace:Jo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=No(r.r),r.g=No(r.g),r.b=No(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ir?Mu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Eu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Eu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Jo]:{primaries:e,whitePoint:i,transfer:Mu,toXYZ:fv,fromXYZ:hv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:fv,fromXYZ:hv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),t}const it=OP();function lr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function No(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ys;class kP{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ys===void 0&&(Ys=wu("canvas")),Ys.width=e.width,Ys.height=e.height;const r=Ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ys}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=lr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(lr(n[i]/255)*255):n[i]=lr(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BP=0;class $m{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BP++}),this.uuid=bl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qd(r[o].image)):s.push(qd(r[o]))}else s=qd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function qd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?kP.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let zP=0;const Yd=new j;class pn extends aa{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=sr,r=sr,s=on,o=bs,a=hi,l=In,c=pn.DEFAULT_ANISOTROPY,d=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zP++}),this.uuid=bl(),this.name="",this.source=new $m(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yd).x}get height(){return this.source.getSize(Yd).y}get depth(){return this.source.getSize(Yd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vh:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case Hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vh:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case Hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=uM;pn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],p=l[5],v=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,E=(h+1)/2,b=(d+u)/4,T=(f+y)/4,_=(v+m)/4;return x>S&&x>E?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=T/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=_/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=T/s,r=_/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(f-y)*(f-y)+(u-d)*(u-d));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(f-y)/g,this.z=(u-d)/g,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this.w=Je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this.w=Je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VP extends aa{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new pn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new $m(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends VP{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _M extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HP extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bt{constructor(e,n,i,r,s,o,a,l,c,d,f,u,p,v,y,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,u,p,v,y,m)}set(e,n,i,r,s,o,a,l,c,d,f,u,p,v,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=p,h[7]=v,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ks.setFromMatrixColumn(e,0).length(),s=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=o*d,p=o*f,v=a*d,y=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=u-y*c,n[9]=-a*l,n[2]=y-u*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*d,p=l*f,v=c*d,y=c*f;n[0]=u+y*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=p*a-v,n[6]=y+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*d,p=l*f,v=c*d,y=c*f;n[0]=u-y*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*d,n[9]=y-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*d,p=o*f,v=a*d,y=a*f;n[0]=l*d,n[4]=v*c-p,n[8]=u*c+y,n[1]=l*f,n[5]=y*c+u,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*d,n[4]=y-u*f,n[8]=v*f+p,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*f+v,n[10]=u-y*f}else if(e.order==="XZY"){const u=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=u*f+y,n[5]=o*d,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*d,n[10]=y*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GP,e,WP)}lookAt(e,n,i){const r=this.elements;return Rn.subVectors(e,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),wr.crossVectors(i,Rn),wr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),wr.crossVectors(i,Rn)),wr.normalize(),ec.crossVectors(Rn,wr),r[0]=wr.x,r[4]=ec.x,r[8]=Rn.x,r[1]=wr.y,r[5]=ec.y,r[9]=Rn.y,r[2]=wr.z,r[6]=ec.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],p=i[13],v=i[2],y=i[6],m=i[10],h=i[14],g=i[3],x=i[7],S=i[11],E=i[15],b=r[0],T=r[4],_=r[8],w=r[12],D=r[1],C=r[5],L=r[9],H=r[13],I=r[2],B=r[6],V=r[10],U=r[14],O=r[3],k=r[7],q=r[11],re=r[15];return s[0]=o*b+a*D+l*I+c*O,s[4]=o*T+a*C+l*B+c*k,s[8]=o*_+a*L+l*V+c*q,s[12]=o*w+a*H+l*U+c*re,s[1]=d*b+f*D+u*I+p*O,s[5]=d*T+f*C+u*B+p*k,s[9]=d*_+f*L+u*V+p*q,s[13]=d*w+f*H+u*U+p*re,s[2]=v*b+y*D+m*I+h*O,s[6]=v*T+y*C+m*B+h*k,s[10]=v*_+y*L+m*V+h*q,s[14]=v*w+y*H+m*U+h*re,s[3]=g*b+x*D+S*I+E*O,s[7]=g*T+x*C+S*B+E*k,s[11]=g*_+x*L+S*V+E*q,s[15]=g*w+x*H+S*U+E*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],p=e[14],v=e[3],y=e[7],m=e[11],h=e[15],g=l*p-c*u,x=a*p-c*f,S=a*u-l*f,E=o*p-c*d,b=o*u-l*d,T=o*f-a*d;return n*(y*g-m*x+h*S)-i*(v*g-m*E+h*b)+r*(v*x-y*E+h*T)-s*(v*S-y*b+m*T)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],p=e[11],v=e[12],y=e[13],m=e[14],h=e[15],g=n*a-i*o,x=n*l-r*o,S=n*c-s*o,E=i*l-r*a,b=i*c-s*a,T=r*c-s*l,_=d*y-f*v,w=d*m-u*v,D=d*h-p*v,C=f*m-u*y,L=f*h-p*y,H=u*h-p*m,I=g*H-x*L+S*C+E*D-b*w+T*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return e[0]=(a*H-l*L+c*C)*B,e[1]=(r*L-i*H-s*C)*B,e[2]=(y*T-m*b+h*E)*B,e[3]=(u*b-f*T-p*E)*B,e[4]=(l*D-o*H-c*w)*B,e[5]=(n*H-r*D+s*w)*B,e[6]=(m*S-v*T-h*x)*B,e[7]=(d*T-u*S+p*x)*B,e[8]=(o*L-a*D+c*_)*B,e[9]=(i*D-n*L-s*_)*B,e[10]=(v*b-y*S+h*g)*B,e[11]=(f*S-d*b-p*g)*B,e[12]=(a*w-o*C-l*_)*B,e[13]=(n*C-i*w+r*_)*B,e[14]=(y*x-v*E-m*g)*B,e[15]=(d*E-f*x+u*g)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,u=s*c,p=s*d,v=s*f,y=o*d,m=o*f,h=a*f,g=l*c,x=l*d,S=l*f,E=i.x,b=i.y,T=i.z;return r[0]=(1-(y+h))*E,r[1]=(p+S)*E,r[2]=(v-x)*E,r[3]=0,r[4]=(p-S)*b,r[5]=(1-(u+h))*b,r[6]=(m+g)*b,r[7]=0,r[8]=(v+x)*T,r[9]=(m-g)*T,r[10]=(1-(u+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Ks.set(r[0],r[1],r[2]).length();const a=Ks.set(r[4],r[5],r[6]).length(),l=Ks.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ii.copy(this);const c=1/o,d=1/a,f=1/l;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=d,ii.elements[5]*=d,ii.elements[6]*=d,ii.elements[8]*=f,ii.elements[9]*=f,ii.elements[10]*=f,n.setFromRotationMatrix(ii),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Fi,l=!1){const c=this.elements,d=2*s/(n-e),f=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let v,y;if(l)v=s/(o-s),y=o*s/(o-s);else if(a===Fi)v=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===hl)v=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Fi,l=!1){const c=this.elements,d=2/(n-e),f=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,y;if(l)v=1/(o-s),y=o/(o-s);else if(a===Fi)v=-2/(o-s),y=-(o+s)/(o-s);else if(a===hl)v=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ks=new j,ii=new bt,GP=new j(0,0,0),WP=new j(1,1,1),wr=new j,ec=new j,Rn=new j,pv=new bt,mv=new la;class Gi{constructor(e=0,n=0,i=0,r=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return pv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return mv.setFromEuler(this),this.setFromQuaternion(mv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class SM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jP=0;const gv=new j,Qs=new la,$i=new bt,tc=new j,Ma=new j,XP=new j,$P=new la,vv=new j(1,0,0),xv=new j(0,1,0),yv=new j(0,0,1),_v={type:"added"},qP={type:"removed"},Zs={type:"childadded",child:null},Kd={type:"childremoved",child:null};class mn extends aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jP++}),this.uuid=bl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new j,n=new Gi,i=new la,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new qe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new SM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qs.setFromAxisAngle(e,n),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,n){return Qs.setFromAxisAngle(e,n),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(vv,e)}rotateY(e){return this.rotateOnAxis(xv,e)}rotateZ(e){return this.rotateOnAxis(yv,e)}translateOnAxis(e,n){return gv.copy(e).applyQuaternion(this.quaternion),this.position.add(gv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vv,e)}translateY(e){return this.translateOnAxis(xv,e)}translateZ(e){return this.translateOnAxis(yv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?tc.copy(e):tc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Ma,tc,this.up):$i.lookAt(tc,Ma,this.up),this.quaternion.setFromRotationMatrix($i),r&&($i.extractRotation(r.matrixWorld),Qs.setFromRotationMatrix($i),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_v),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(qP),Kd.child=e,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_v),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,XP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,$P,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new j(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nc extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YP={type:"move"};class Qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(c,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new nc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const MM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},ic={h:0,s:0,l:0};function Zd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=UP(e,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Zd(o,s,e+1/3),this.g=Zd(o,s,e),this.b=Zd(o,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=MM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=No(e.r),this.g=No(e.g),this.b=No(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return it.workingToColorSpace(nn.copy(this),e),Math.round(Je(nn.r*255,0,255))*65536+Math.round(Je(nn.g*255,0,255))*256+Math.round(Je(nn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Gn){it.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+n,Er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Er),e.getHSL(ic);const i=jd(Er.h,ic.h,n),r=jd(Er.s,ic.s,n),s=jd(Er.l,ic.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Ze;Ze.NAMES=MM;class KP extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ri=new j,qi=new j,Jd=new j,Yi=new j,Js=new j,eo=new j,Sv=new j,ef=new j,tf=new j,nf=new j,rf=new Pt,sf=new Pt,of=new Pt;class fi{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ri.subVectors(e,n),r.cross(ri);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ri.subVectors(r,n),qi.subVectors(i,n),Jd.subVectors(e,n);const o=ri.dot(ri),a=ri.dot(qi),l=ri.dot(Jd),c=qi.dot(qi),d=qi.dot(Jd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(c*l-a*d)*u,v=(o*d-a*l)*u;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yi.x),l.addScaledVector(o,Yi.y),l.addScaledVector(a,Yi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return rf.setScalar(0),sf.setScalar(0),of.setScalar(0),rf.fromBufferAttribute(e,n),sf.fromBufferAttribute(e,i),of.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(rf,s.x),o.addScaledVector(sf,s.y),o.addScaledVector(of,s.z),o}static isFrontFacing(e,n,i,r){return ri.subVectors(i,n),qi.subVectors(e,n),ri.cross(qi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),ri.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return fi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Js.subVectors(r,i),eo.subVectors(s,i),ef.subVectors(e,i);const l=Js.dot(ef),c=eo.dot(ef);if(l<=0&&c<=0)return n.copy(i);tf.subVectors(e,r);const d=Js.dot(tf),f=eo.dot(tf);if(d>=0&&f<=d)return n.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Js,o);nf.subVectors(e,s);const p=Js.dot(nf),v=eo.dot(nf);if(v>=0&&p<=v)return n.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(eo,a);const m=d*v-p*f;if(m<=0&&f-d>=0&&p-v>=0)return Sv.subVectors(s,r),a=(f-d)/(f-d+(p-v)),n.copy(r).addScaledVector(Sv,a);const h=1/(m+y+u);return o=y*h,a=u*h,n.copy(i).addScaledVector(Js,o).addScaledVector(eo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Tl{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rc.copy(i.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),sc.subVectors(this.max,wa),to.subVectors(e.a,wa),no.subVectors(e.b,wa),io.subVectors(e.c,wa),br.subVectors(no,to),Tr.subVectors(io,no),ds.subVectors(to,io);let n=[0,-br.z,br.y,0,-Tr.z,Tr.y,0,-ds.z,ds.y,br.z,0,-br.x,Tr.z,0,-Tr.x,ds.z,0,-ds.x,-br.y,br.x,0,-Tr.y,Tr.x,0,-ds.y,ds.x,0];return!af(n,to,no,io,sc)||(n=[1,0,0,0,1,0,0,0,1],!af(n,to,no,io,sc))?!1:(oc.crossVectors(br,Tr),n=[oc.x,oc.y,oc.z],af(n,to,no,io,sc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new j,new j,new j,new j,new j,new j,new j,new j],si=new j,rc=new Tl,to=new j,no=new j,io=new j,br=new j,Tr=new j,ds=new j,wa=new j,sc=new j,oc=new j,fs=new j;function af(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){fs.fromArray(t,s);const a=r.x*Math.abs(fs.x)+r.y*Math.abs(fs.y)+r.z*Math.abs(fs.z),l=e.dot(fs),c=n.dot(fs),d=i.dot(fs);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const It=new j,ac=new tt;let QP=0;class qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QP++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=av,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ac.fromBufferAttribute(this,n),ac.applyMatrix3(e),this.setXY(n,ac.x,ac.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Sa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Sa(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Sa(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Sa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Sa(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array),s=xn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==av&&(e.usage=this.usage),e}}class wM extends qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class EM extends qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yn extends qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const ZP=new Tl,Ea=new j,lf=new j;class td{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ZP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);const n=Ea.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(lf)),this.expandByPoint(Ea.copy(e.center).sub(lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let JP=0;const Vn=new bt,cf=new mn,ro=new j,Pn=new Tl,ba=new Tl,Gt=new j;class Jn extends aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JP++}),this.uuid=bl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(NP(e)?EM:wM)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return cf.lookAt(e),cf.updateMatrix(),this.applyMatrix4(cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new td);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ba.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Pn.min,ba.min),Pn.expandByPoint(Gt),Gt.addVectors(Pn.max,ba.max),Pn.expandByPoint(Gt)):(Pn.expandByPoint(ba.min),Pn.expandByPoint(ba.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Gt.fromBufferAttribute(a,c),l&&(ro.fromBufferAttribute(e,c),Gt.add(ro)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new j,l[_]=new j;const c=new j,d=new j,f=new j,u=new tt,p=new tt,v=new tt,y=new j,m=new j;function h(_,w,D){c.fromBufferAttribute(i,_),d.fromBufferAttribute(i,w),f.fromBufferAttribute(i,D),u.fromBufferAttribute(s,_),p.fromBufferAttribute(s,w),v.fromBufferAttribute(s,D),d.sub(c),f.sub(c),p.sub(u),v.sub(u);const C=1/(p.x*v.y-v.x*p.y);isFinite(C)&&(y.copy(d).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(C),a[_].add(y),a[w].add(y),a[D].add(y),l[_].add(m),l[w].add(m),l[D].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let _=0,w=g.length;_<w;++_){const D=g[_],C=D.start,L=D.count;for(let H=C,I=C+L;H<I;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new j,S=new j,E=new j,b=new j;function T(_){E.fromBufferAttribute(r,_),b.copy(E);const w=a[_];x.copy(w),x.sub(E.multiplyScalar(E.dot(w))).normalize(),S.crossVectors(b,w);const C=S.dot(l[_])<0?-1:1;o.setXYZW(_,x.x,x.y,x.z,C)}for(let _=0,w=g.length;_<w;++_){const D=g[_],C=D.start,L=D.count;for(let H=C,I=C+L;H<I;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,d=new j,f=new j;if(e)for(let u=0,p=e.count;u<p;u+=3){const v=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,u=new c.constructor(l.length*d);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*d;for(let h=0;h<d;h++)u[v++]=c[p++]}return new qn(u,d,f)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const u=c[d],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let e2=0;class ca extends aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e2++}),this.uuid=bl(),this.name="",this.type="Material",this.blending=Do,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Lh,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ov,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Do&&(i.blending=this.blending),this.side!==rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nh&&(i.blendSrc=this.blendSrc),this.blendDst!==Lh&&(i.blendDst=this.blendDst),this.blendEquation!==_s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ko&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ov&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qi=new j,uf=new j,lc=new j,Ar=new j,df=new j,cc=new j,ff=new j;class bM{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,n),Qi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){uf.copy(e).add(n).multiplyScalar(.5),lc.copy(n).sub(e).normalize(),Ar.copy(this.origin).sub(uf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(lc),a=Ar.dot(this.direction),l=-Ar.dot(lc),c=Ar.lengthSq(),d=Math.abs(1-o*o);let f,u,p,v;if(d>0)if(f=o*l-a,u=o*a-l,v=s*d,f>=0)if(u>=-v)if(u<=v){const y=1/d;f*=y,u*=y,p=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u<=-v?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c):u<=v?(f=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(uf).addScaledVector(lc,u),p}intersectSphere(e,n){Qi.subVectors(e.center,this.origin);const i=Qi.dot(this.direction),r=Qi.dot(Qi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,n,i,r,s){df.subVectors(n,e),cc.subVectors(i,e),ff.crossVectors(df,cc);let o=this.direction.dot(ff),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ar.subVectors(this.origin,e);const l=a*this.direction.dot(cc.crossVectors(Ar,cc));if(l<0)return null;const c=a*this.direction.dot(df.cross(Ar));if(c<0||l+c>o)return null;const d=-a*Ar.dot(ff);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qm extends ca{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=km,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mv=new bt,hs=new bM,uc=new td,wv=new j,dc=new j,fc=new j,hc=new j,hf=new j,pc=new j,Ev=new j,mc=new j;class _i extends mn{constructor(e=new Jn,n=new qm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(hf.fromBufferAttribute(f,e),o?pc.addScaledVector(hf,d):pc.addScaledVector(hf.sub(n),d))}n.add(pc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(s),hs.copy(e.ray).recast(e.near),!(uc.containsPoint(hs.origin)===!1&&(hs.intersectSphere(uc,wv)===null||hs.origin.distanceToSquared(wv)>(e.far-e.near)**2))&&(Mv.copy(s).invert(),hs.copy(e.ray).applyMatrix4(Mv),!(i.boundingBox!==null&&hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,hs)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=u.length;v<y;v++){const m=u[v],h=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,E=x;S<E;S+=3){const b=a.getX(S),T=a.getX(S+1),_=a.getX(S+2);r=gc(this,h,e,i,c,d,f,b,T,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,h=y;m<h;m+=3){const g=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=gc(this,o,e,i,c,d,f,g,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=u.length;v<y;v++){const m=u[v],h=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,E=x;S<E;S+=3){const b=S,T=S+1,_=S+2;r=gc(this,h,e,i,c,d,f,b,T,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,h=y;m<h;m+=3){const g=m,x=m+1,S=m+2;r=gc(this,o,e,i,c,d,f,g,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function t2(t,e,n,i,r,s,o,a){let l;if(e.side===bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===rs,a),l===null)return null;mc.copy(a),mc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(mc);return c<n.near||c>n.far?null:{distance:c,point:mc.clone(),object:t}}function gc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,dc),t.getVertexPosition(l,fc),t.getVertexPosition(c,hc);const d=t2(t,e,n,i,dc,fc,hc,Ev);if(d){const f=new j;fi.getBarycoord(Ev,dc,fc,hc,f),r&&(d.uv=fi.getInterpolatedAttribute(r,a,l,c,f,new tt)),s&&(d.uv1=fi.getInterpolatedAttribute(s,a,l,c,f,new tt)),o&&(d.normal=fi.getInterpolatedAttribute(o,a,l,c,f,new j),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new j,materialIndex:0};fi.getNormal(dc,fc,hc,u.normal),d.face=u,d.barycoord=f}return d}class n2 extends pn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=qt,d=qt,f,u){super(null,o,a,l,c,d,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pf=new j,i2=new j,r2=new qe;class ys{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=pf.subVectors(i,n).cross(i2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(pf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||r2.getNormalMatrix(e),r=this.coplanarPoint(pf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new td,s2=new tt(.5,.5),vc=new j;class Ym{constructor(e=new ys,n=new ys,i=new ys,r=new ys,s=new ys,o=new ys){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Fi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],f=s[5],u=s[6],p=s[7],v=s[8],y=s[9],m=s[10],h=s[11],g=s[12],x=s[13],S=s[14],E=s[15];if(r[0].setComponents(c-o,p-d,h-v,E-g).normalize(),r[1].setComponents(c+o,p+d,h+v,E+g).normalize(),r[2].setComponents(c+a,p+f,h+y,E+x).normalize(),r[3].setComponents(c-a,p-f,h-y,E-x).normalize(),i)r[4].setComponents(l,u,m,S).normalize(),r[5].setComponents(c-l,p-u,h-m,E-S).normalize();else if(r[4].setComponents(c-l,p-u,h-m,E-S).normalize(),n===Fi)r[5].setComponents(c+l,p+u,h+m,E+S).normalize();else if(n===hl)r[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const n=s2.distanceTo(e.center);return ps.radius=.7071067811865476+n,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(vc.x=r.normal.x>0?e.max.x:e.min.x,vc.y=r.normal.y>0?e.max.y:e.min.y,vc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class TM extends ca{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bv=new bt,Mp=new bM,xc=new td,yc=new j;class o2 extends mn{constructor(e=new Jn,n=new TM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xc.copy(i.boundingSphere),xc.applyMatrix4(r),xc.radius+=s,e.ray.intersectsSphere(xc)===!1)return;bv.copy(r).invert(),Mp.copy(e.ray).applyMatrix4(bv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=u,y=p;v<y;v++){const m=c.getX(v);yc.fromBufferAttribute(f,m),Tv(yc,m,l,r,e,n,this)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=u,y=p;v<y;v++)yc.fromBufferAttribute(f,v),Tv(yc,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Tv(t,e,n,i,r,s,o){const a=Mp.distanceSqToPoint(t);if(a<n){const l=new j;Mp.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class AM extends pn{constructor(e=[],n=Vs,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pl extends pn{constructor(e,n,i=Hi,r,s,o,a=qt,l=qt,c,d=gr,f=1){if(d!==gr&&d!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:f};super(u,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $m(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class a2 extends pl{constructor(e,n=Hi,i=Vs,r,s,o=qt,a=qt,l,c=gr){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,n,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class CM extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Al extends Jn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let u=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yn(c,3)),this.setAttribute("normal",new Yn(d,3)),this.setAttribute("uv",new Yn(f,2));function v(y,m,h,g,x,S,E,b,T,_,w){const D=S/T,C=E/_,L=S/2,H=E/2,I=b/2,B=T+1,V=_+1;let U=0,O=0;const k=new j;for(let q=0;q<V;q++){const re=q*C-H;for(let ee=0;ee<B;ee++){const me=ee*D-L;k[y]=me*g,k[m]=re*x,k[h]=I,c.push(k.x,k.y,k.z),k[y]=0,k[m]=0,k[h]=b>0?1:-1,d.push(k.x,k.y,k.z),f.push(ee/T),f.push(1-q/_),U+=1}}for(let q=0;q<_;q++)for(let re=0;re<T;re++){const ee=u+re+B*q,me=u+re+B*(q+1),Ce=u+(re+1)+B*(q+1),Be=u+(re+1)+B*q;l.push(ee,me,Be),l.push(me,Ce,Be),O+=6}a.addGroup(p,O,w),p+=O,u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Km extends Jn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new Yn(s,3)),this.setAttribute("normal",new Yn(s.slice(),3)),this.setAttribute("uv",new Yn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const x=new j,S=new j,E=new j;for(let b=0;b<n.length;b+=3)p(n[b+0],x),p(n[b+1],S),p(n[b+2],E),l(x,S,E,g)}function l(g,x,S,E){const b=E+1,T=[];for(let _=0;_<=b;_++){T[_]=[];const w=g.clone().lerp(S,_/b),D=x.clone().lerp(S,_/b),C=b-_;for(let L=0;L<=C;L++)L===0&&_===b?T[_][L]=w:T[_][L]=w.clone().lerp(D,L/C)}for(let _=0;_<b;_++)for(let w=0;w<2*(b-_)-1;w++){const D=Math.floor(w/2);w%2===0?(u(T[_][D+1]),u(T[_+1][D]),u(T[_][D])):(u(T[_][D+1]),u(T[_+1][D+1]),u(T[_+1][D]))}}function c(g){const x=new j;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(g),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function d(){const g=new j;for(let x=0;x<s.length;x+=3){g.x=s[x+0],g.y=s[x+1],g.z=s[x+2];const S=m(g)/2/Math.PI+.5,E=h(g)/Math.PI+.5;o.push(S,1-E)}v(),f()}function f(){for(let g=0;g<o.length;g+=6){const x=o[g+0],S=o[g+2],E=o[g+4],b=Math.max(x,S,E),T=Math.min(x,S,E);b>.9&&T<.1&&(x<.2&&(o[g+0]+=1),S<.2&&(o[g+2]+=1),E<.2&&(o[g+4]+=1))}}function u(g){s.push(g.x,g.y,g.z)}function p(g,x){const S=g*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function v(){const g=new j,x=new j,S=new j,E=new j,b=new tt,T=new tt,_=new tt;for(let w=0,D=0;w<s.length;w+=9,D+=6){g.set(s[w+0],s[w+1],s[w+2]),x.set(s[w+3],s[w+4],s[w+5]),S.set(s[w+6],s[w+7],s[w+8]),b.set(o[D+0],o[D+1]),T.set(o[D+2],o[D+3]),_.set(o[D+4],o[D+5]),E.copy(g).add(x).add(S).divideScalar(3);const C=m(E);y(b,D+0,g,C),y(T,D+2,x,C),y(_,D+4,S,C)}}function y(g,x,S,E){E<0&&g.x===1&&(o[x]=g.x-1),S.x===0&&S.z===0&&(o[x]=E/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function h(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Km(e.vertices,e.indices,e.radius,e.detail)}}class Qm extends Km{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Qm(e.radius,e.detail)}}class nd extends Jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,u=n/l,p=[],v=[],y=[],m=[];for(let h=0;h<d;h++){const g=h*u-o;for(let x=0;x<c;x++){const S=x*f-s;v.push(S,-g,0),y.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<a;g++){const x=g+c*h,S=g+c*(h+1),E=g+1+c*(h+1),b=g+1+c*h;p.push(x,S,b),p.push(S,E,b)}this.setIndex(p),this.setAttribute("position",new Yn(v,3)),this.setAttribute("normal",new Yn(y,3)),this.setAttribute("uv",new Yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nd(e.width,e.height,e.widthSegments,e.heightSegments)}}function ea(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=ea(t[n]);for(const r in i)e[r]=i[r]}return e}function l2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function RM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const c2={clone:ea,merge:cn};var u2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends ca{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u2,this.fragmentShader=d2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=l2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class f2 extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class h2 extends ca{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xM,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=km,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class p2 extends ca{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=EP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m2 extends ca{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class PM extends mn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const mf=new bt,Av=new j,Cv=new j;class g2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ym,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Av.setFromMatrixPosition(e.matrixWorld),n.position.copy(Av),Cv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Cv),n.updateMatrixWorld(),mf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===hl||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _c=new j,Sc=new la,bi=new j;class DM extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_c,Sc,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_c,Sc,bi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(_c,Sc,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_c,Sc,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new j,Rv=new tt,Pv=new tt;class Ln extends DM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Sp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sp*2*Math.atan(Math.tan(Wd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,n){return this.getViewBounds(e,Rv,Pv),n.subVectors(Pv,Rv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class v2 extends g2{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0}}class x2 extends PM{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new v2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class NM extends DM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class y2 extends PM{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const so=-90,oo=1;class _2 extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(so,oo,e,n);r.layers=this.layers,this.add(r);const s=new Ln(so,oo,e,n);s.layers=this.layers,this.add(s);const o=new Ln(so,oo,e,n);o.layers=this.layers,this.add(o);const a=new Ln(so,oo,e,n);a.layers=this.layers,this.add(a);const l=new Ln(so,oo,e,n);l.layers=this.layers,this.add(l);const c=new Ln(so,oo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(f,u,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class S2 extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class M2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ze("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Dv(t,e,n,i){const r=w2(i);switch(n){case mM:return t*e;case vM:return t*e/r.components*r.byteLength;case Hm:return t*e/r.components*r.byteLength;case Zo:return t*e*2/r.components*r.byteLength;case Gm:return t*e*2/r.components*r.byteLength;case gM:return t*e*3/r.components*r.byteLength;case hi:return t*e*4/r.components*r.byteLength;case Wm:return t*e*4/r.components*r.byteLength;case zc:case Vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hc:case Gc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wh:case Xh:return Math.max(t,16)*Math.max(e,8)/4;case Gh:case jh:return Math.max(t,8)*Math.max(e,8)/2;case $h:case qh:case Kh:case Qh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yh:case Zh:case Jh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ep:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case np:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ip:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case op:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ap:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case lp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case cp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case up:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case dp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case fp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case pp:case mp:case gp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case vp:case xp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case yp:case _p:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function w2(t){switch(t){case In:case dM:return{byteLength:1,components:1};case dl:case fM:case mr:return{byteLength:2,components:1};case zm:case Vm:return{byteLength:2,components:4};case Hi:case Bm:case Ii:return{byteLength:4,components:1};case hM:case pM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Om}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Om);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function LM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function E2(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<f.length;p++){const v=f[u],y=f[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++u,f[u]=y)}f.length=u+1;for(let p=0,v=f.length;p<v;p++){const y=f[p];t.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var b2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,A2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,I2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,B2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,z2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,V2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,j2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,X2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,q2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,K2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Q2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t3="gl_FragColor = linearToOutputTexel( gl_FragColor );",n3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,r3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,s3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,o3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,h3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,v3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,x3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,w3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,T3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,I3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,V3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,G3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,W3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,q3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,eD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,aD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_D=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ED=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ND=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,LD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ID=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$D=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:b2,alphahash_pars_fragment:T2,alphamap_fragment:A2,alphamap_pars_fragment:C2,alphatest_fragment:R2,alphatest_pars_fragment:P2,aomap_fragment:D2,aomap_pars_fragment:N2,batching_pars_vertex:L2,batching_vertex:I2,begin_vertex:F2,beginnormal_vertex:U2,bsdfs:O2,iridescence_fragment:k2,bumpmap_pars_fragment:B2,clipping_planes_fragment:z2,clipping_planes_pars_fragment:V2,clipping_planes_pars_vertex:H2,clipping_planes_vertex:G2,color_fragment:W2,color_pars_fragment:j2,color_pars_vertex:X2,color_vertex:$2,common:q2,cube_uv_reflection_fragment:Y2,defaultnormal_vertex:K2,displacementmap_pars_vertex:Q2,displacementmap_vertex:Z2,emissivemap_fragment:J2,emissivemap_pars_fragment:e3,colorspace_fragment:t3,colorspace_pars_fragment:n3,envmap_fragment:i3,envmap_common_pars_fragment:r3,envmap_pars_fragment:s3,envmap_pars_vertex:o3,envmap_physical_pars_fragment:v3,envmap_vertex:a3,fog_vertex:l3,fog_pars_vertex:c3,fog_fragment:u3,fog_pars_fragment:d3,gradientmap_pars_fragment:f3,lightmap_pars_fragment:h3,lights_lambert_fragment:p3,lights_lambert_pars_fragment:m3,lights_pars_begin:g3,lights_toon_fragment:x3,lights_toon_pars_fragment:y3,lights_phong_fragment:_3,lights_phong_pars_fragment:S3,lights_physical_fragment:M3,lights_physical_pars_fragment:w3,lights_fragment_begin:E3,lights_fragment_maps:b3,lights_fragment_end:T3,logdepthbuf_fragment:A3,logdepthbuf_pars_fragment:C3,logdepthbuf_pars_vertex:R3,logdepthbuf_vertex:P3,map_fragment:D3,map_pars_fragment:N3,map_particle_fragment:L3,map_particle_pars_fragment:I3,metalnessmap_fragment:F3,metalnessmap_pars_fragment:U3,morphinstance_vertex:O3,morphcolor_vertex:k3,morphnormal_vertex:B3,morphtarget_pars_vertex:z3,morphtarget_vertex:V3,normal_fragment_begin:H3,normal_fragment_maps:G3,normal_pars_fragment:W3,normal_pars_vertex:j3,normal_vertex:X3,normalmap_pars_fragment:$3,clearcoat_normal_fragment_begin:q3,clearcoat_normal_fragment_maps:Y3,clearcoat_pars_fragment:K3,iridescence_pars_fragment:Q3,opaque_fragment:Z3,packing:J3,premultiplied_alpha_fragment:eD,project_vertex:tD,dithering_fragment:nD,dithering_pars_fragment:iD,roughnessmap_fragment:rD,roughnessmap_pars_fragment:sD,shadowmap_pars_fragment:oD,shadowmap_pars_vertex:aD,shadowmap_vertex:lD,shadowmask_pars_fragment:cD,skinbase_vertex:uD,skinning_pars_vertex:dD,skinning_vertex:fD,skinnormal_vertex:hD,specularmap_fragment:pD,specularmap_pars_fragment:mD,tonemapping_fragment:gD,tonemapping_pars_fragment:vD,transmission_fragment:xD,transmission_pars_fragment:yD,uv_pars_fragment:_D,uv_pars_vertex:SD,uv_vertex:MD,worldpos_vertex:wD,background_vert:ED,background_frag:bD,backgroundCube_vert:TD,backgroundCube_frag:AD,cube_vert:CD,cube_frag:RD,depth_vert:PD,depth_frag:DD,distance_vert:ND,distance_frag:LD,equirect_vert:ID,equirect_frag:FD,linedashed_vert:UD,linedashed_frag:OD,meshbasic_vert:kD,meshbasic_frag:BD,meshlambert_vert:zD,meshlambert_frag:VD,meshmatcap_vert:HD,meshmatcap_frag:GD,meshnormal_vert:WD,meshnormal_frag:jD,meshphong_vert:XD,meshphong_frag:$D,meshphysical_vert:qD,meshphysical_frag:YD,meshtoon_vert:KD,meshtoon_frag:QD,points_vert:ZD,points_frag:JD,shadow_vert:eN,shadow_frag:tN,sprite_vert:nN,sprite_frag:iN},ge={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Di={basic:{uniforms:cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:cn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:cn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:cn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:cn([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:cn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:cn([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:cn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:cn([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:cn([ge.common,ge.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:cn([ge.lights,ge.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Di.physical={uniforms:cn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Mc={r:0,b:0,g:0},ms=new Gi,rN=new bt;function sN(t,e,n,i,r,s){const o=new Ze(0);let a=r===!0?0:1,l,c,d=null,f=0,u=null;function p(g){let x=g.isScene===!0?g.background:null;if(x&&x.isTexture){const S=g.backgroundBlurriness>0;x=e.get(x,S)}return x}function v(g){let x=!1;const S=p(g);S===null?m(o,a):S&&S.isColor&&(m(S,1),x=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(g,x){const S=p(x);S&&(S.isCubeTexture||S.mapping===ed)?(c===void 0&&(c=new _i(new Al(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:ea(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),ms.copy(x.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rN.makeRotationFromEuler(ms)),c.material.toneMapped=it.getTransfer(S.colorSpace)!==ut,(d!==S||f!==S.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,u=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new _i(new nd(2,2),new Wi({name:"BackgroundMaterial",uniforms:ea(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=it.getTransfer(S.colorSpace)!==ut,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=S,f=S.version,u=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,x){g.getRGB(Mc,RM(t)),n.buffers.color.setClear(Mc.r,Mc.g,Mc.b,x,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,x=1){o.set(g),a=x,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,m(o,a)},render:v,addToRenderList:y,dispose:h}}function oN(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(C,L,H,I,B){let V=!1;const U=f(C,I,H,L);s!==U&&(s=U,c(s.object)),V=p(C,I,H,B),V&&v(C,I,H,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,S(C,L,H,I),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(C){return t.bindVertexArray(C)}function d(C){return t.deleteVertexArray(C)}function f(C,L,H,I){const B=I.wireframe===!0;let V=i[L.id];V===void 0&&(V={},i[L.id]=V);const U=C.isInstancedMesh===!0?C.id:0;let O=V[U];O===void 0&&(O={},V[U]=O);let k=O[H.id];k===void 0&&(k={},O[H.id]=k);let q=k[B];return q===void 0&&(q=u(l()),k[B]=q),q}function u(C){const L=[],H=[],I=[];for(let B=0;B<n;B++)L[B]=0,H[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:I,object:C,attributes:{},index:null}}function p(C,L,H,I){const B=s.attributes,V=L.attributes;let U=0;const O=H.getAttributes();for(const k in O)if(O[k].location>=0){const re=B[k];let ee=V[k];if(ee===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),re===void 0||re.attribute!==ee||ee&&re.data!==ee.data)return!0;U++}return s.attributesNum!==U||s.index!==I}function v(C,L,H,I){const B={},V=L.attributes;let U=0;const O=H.getAttributes();for(const k in O)if(O[k].location>=0){let re=V[k];re===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const ee={};ee.attribute=re,re&&re.data&&(ee.data=re.data),B[k]=ee,U++}s.attributes=B,s.attributesNum=U,s.index=I}function y(){const C=s.newAttributes;for(let L=0,H=C.length;L<H;L++)C[L]=0}function m(C){h(C,0)}function h(C,L){const H=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;H[C]=1,I[C]===0&&(t.enableVertexAttribArray(C),I[C]=1),B[C]!==L&&(t.vertexAttribDivisor(C,L),B[C]=L)}function g(){const C=s.newAttributes,L=s.enabledAttributes;for(let H=0,I=L.length;H<I;H++)L[H]!==C[H]&&(t.disableVertexAttribArray(H),L[H]=0)}function x(C,L,H,I,B,V,U){U===!0?t.vertexAttribIPointer(C,L,H,B,V):t.vertexAttribPointer(C,L,H,I,B,V)}function S(C,L,H,I){y();const B=I.attributes,V=H.getAttributes(),U=L.defaultAttributeValues;for(const O in V){const k=V[O];if(k.location>=0){let q=B[O];if(q===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(q=C.instanceColor)),q!==void 0){const re=q.normalized,ee=q.itemSize,me=e.get(q);if(me===void 0)continue;const Ce=me.buffer,Be=me.type,K=me.bytesPerElement,ne=Be===t.INT||Be===t.UNSIGNED_INT||q.gpuType===Bm;if(q.isInterleavedBufferAttribute){const ue=q.data,ke=ue.stride,De=q.offset;if(ue.isInstancedInterleavedBuffer){for(let Fe=0;Fe<k.locationSize;Fe++)h(k.location+Fe,ue.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Fe=0;Fe<k.locationSize;Fe++)m(k.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let Fe=0;Fe<k.locationSize;Fe++)x(k.location+Fe,ee/k.locationSize,Be,re,ke*K,(De+ee/k.locationSize*Fe)*K,ne)}else{if(q.isInstancedBufferAttribute){for(let ue=0;ue<k.locationSize;ue++)h(k.location+ue,q.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ue=0;ue<k.locationSize;ue++)m(k.location+ue);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let ue=0;ue<k.locationSize;ue++)x(k.location+ue,ee/k.locationSize,Be,re,ee*K,ee/k.locationSize*ue*K,ne)}}else if(U!==void 0){const re=U[O];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(k.location,re);break;case 3:t.vertexAttrib3fv(k.location,re);break;case 4:t.vertexAttrib4fv(k.location,re);break;default:t.vertexAttrib1fv(k.location,re)}}}}g()}function E(){w();for(const C in i){const L=i[C];for(const H in L){const I=L[H];for(const B in I){const V=I[B];for(const U in V)d(V[U].object),delete V[U];delete I[B]}}delete i[C]}}function b(C){if(i[C.id]===void 0)return;const L=i[C.id];for(const H in L){const I=L[H];for(const B in I){const V=I[B];for(const U in V)d(V[U].object),delete V[U];delete I[B]}}delete i[C.id]}function T(C){for(const L in i){const H=i[L];for(const I in H){const B=H[I];if(B[C.id]===void 0)continue;const V=B[C.id];for(const U in V)d(V[U].object),delete V[U];delete B[C.id]}}}function _(C){for(const L in i){const H=i[L],I=C.isInstancedMesh===!0?C.id:0,B=H[I];if(B!==void 0){for(const V in B){const U=B[V];for(const O in U)d(U[O].object),delete U[O];delete B[V]}delete H[I],Object.keys(H).length===0&&delete i[L]}}}function w(){D(),o=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function aN(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let v=0;v<f;v++)p+=d[v];n.update(p,i,1)}function l(c,d,f,u){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],d[v],u[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,f);let v=0;for(let y=0;y<f;y++)v+=d[y]*u[y];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lN(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==hi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const _=T===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==In&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ii&&!_)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(ze("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:S,maxSamples:E,samples:b}}function cN(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ys,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){n=d(f,u,0)},this.setState=function(f,u,p){const v=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?d(null):c();else{const g=s?0:i,x=g*4;let S=h.clippingState||null;l.value=S,S=d(v,u,x,p);for(let E=0;E!==x;++E)S[E]=n[E];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,p,v){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const h=p+y*4,g=u.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,S=p;x!==y;++x,S+=4)o.copy(f[x]).applyMatrix4(g,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const Gr=4,Nv=[.125,.215,.35,.446,.526,.582],Ss=20,uN=256,Ta=new NM,Lv=new Ze;let gf=null,vf=0,xf=0,yf=!1;const dN=new j;class Iv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=dN}=s;gf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gf,vf,xf),this._renderer.xr.enabled=yf,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:mr,format:hi,colorSpace:Jo,depthBuffer:!1},r=Fv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fv(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fN(s)),this._blurMaterial=pN(s,e,n),this._ggxMaterial=hN(s,e,n)}return r}_compileMaterial(e){const n=new _i(new Jn,e);this._renderer.compile(n,Ta)}_sceneToCubeUV(e,n,i,r,s){const l=new Ln(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(Lv),f.toneMapping=Bi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _i(new Al,new qm({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let h=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,h=!0):(m.color.copy(Lv),h=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[x],s.y,s.z)):S===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[x]));const E=this._cubeSize;ao(r,S*E,x>2?E:0,E,E),f.setRenderTarget(r),h&&f.render(y,l),f.render(e,l)}f.toneMapping=p,f.autoClear=u,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vs||e.mapping===Qo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ao(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ta)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=0+c*1.25,p=f*u,{_lodMax:v}=this,y=this._sizeLods[i],m=3*y*(i>v-Gr?i-v+Gr:0),h=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,ao(s,m,h,3*y,2*y),r.setRenderTarget(s),r.render(a,Ta),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,ao(e,m,h,3*y,2*y),r.setRenderTarget(e),r.render(a,Ta)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&lt("blur direction must be either latitudinal or longitudinal!");const d=3,f=this._lodMeshes[r];f.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ss-1),y=s/v,m=isFinite(s)?1+Math.floor(d*y):Ss;m>Ss&&ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ss}`);const h=[];let g=0;for(let T=0;T<Ss;++T){const _=T/y,w=Math.exp(-_*_/2);h.push(w),T===0?g+=w:T<m&&(g+=2*w)}for(let T=0;T<h.length;T++)h[T]=h[T]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=v,u.mipInt.value=x-i;const S=this._sizeLods[r],E=3*S*(r>x-Gr?r-x+Gr:0),b=4*(this._cubeSize-S);ao(n,E,b,3*S,2*S),l.setRenderTarget(n),l.render(f,Ta)}}function fN(t){const e=[],n=[],i=[];let r=t;const s=t-Gr+1+Nv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Gr?l=Nv[o-t+Gr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,v=6,y=3,m=2,h=1,g=new Float32Array(y*v*p),x=new Float32Array(m*v*p),S=new Float32Array(h*v*p);for(let b=0;b<p;b++){const T=b%3*2/3-1,_=b>2?0:-1,w=[T,_,0,T+2/3,_,0,T+2/3,_+1,0,T,_,0,T+2/3,_+1,0,T,_+1,0];g.set(w,y*v*b),x.set(u,m*v*b);const D=[b,b,b,b,b,b];S.set(D,h*v*b)}const E=new Jn;E.setAttribute("position",new qn(g,y)),E.setAttribute("uv",new qn(x,m)),E.setAttribute("faceIndex",new qn(S,h)),i.push(new _i(E,null)),r>Gr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Fv(t,e,n){const i=new zi(t,e,n);return i.texture.mapping=ed,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ao(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function hN(t,e,n){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uN,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:id(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function pN(t,e,n){const i=new Float32Array(Ss),r=new j(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Uv(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Ov(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function id(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class IM extends zi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new AM(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Al(5,5,5),s=new Wi({name:"CubemapFromEquirect",uniforms:ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:ar});s.uniforms.tEquirect.value=n;const o=new _i(r,s),a=n.minFilter;return n.minFilter===bs&&(n.minFilter=on),new _2(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function mN(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Vd||p===Hd)if(e.has(u)){const v=e.get(u).texture;return a(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const y=new IM(v.height);return y.fromEquirectangularTexture(t,u),e.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,v=p===Vd||p===Hd,y=p===Vs||p===Qo;if(v||y){let m=n.get(u);const h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Iv(t)),m=v?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{const g=u.image;return v&&g&&g.height>0||y&&g&&l(g)?(i===null&&(i=new Iv(t)),m=v?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function a(u,p){return p===Vd?u.mapping=Vs:p===Hd&&(u.mapping=Qo),u}function l(u){let p=0;const v=6;for(let y=0;y<v;y++)u[y]!==void 0&&p++;return p===v}function c(u){const p=u.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function gN(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Eu("WebGLRenderer: "+i+" extension not supported."),r}}}function vN(t,e,n,i){const r={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(f){const u=f.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(f){const u=[],p=f.index,v=f.attributes.position;let y=0;if(v===void 0)return;if(p!==null){const g=p.array;y=p.version;for(let x=0,S=g.length;x<S;x+=3){const E=g[x+0],b=g[x+1],T=g[x+2];u.push(E,b,b,T,T,E)}}else{const g=v.array;y=v.version;for(let x=0,S=g.length/3-1;x<S;x+=3){const E=x+0,b=x+1,T=x+2;u.push(E,b,b,T,T,E)}}const m=new(v.count>=65535?EM:wM)(u,1);m.version=y;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function d(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function xN(t,e,n){let i;function r(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,p){t.drawElements(i,p,s,u*o),n.update(p,i,1)}function c(u,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,u*o,v),n.update(p,i,v))}function d(u,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,u,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];n.update(m,i,1)}function f(u,p,v,y){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<u.length;h++)c(u[h]/o,p[h],y[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,u,0,y,0,v);let h=0;for(let g=0;g<v;g++)h+=p[g]*y[g];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function yN(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:lt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _N(t,e,n){const i=new WeakMap,r=new Pt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let D=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",D)};var p=D;u!==void 0&&u.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let E=a.attributes.position.count*S,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*b*4*f),_=new _M(T,E,b,f);_.type=Ii,_.needsUpdate=!0;const w=S*4;for(let C=0;C<f;C++){const L=h[C],H=g[C],I=x[C],B=E*b*4*C;for(let V=0;V<L.count;V++){const U=V*w;v===!0&&(r.fromBufferAttribute(L,V),T[B+U+0]=r.x,T[B+U+1]=r.y,T[B+U+2]=r.z,T[B+U+3]=0),y===!0&&(r.fromBufferAttribute(H,V),T[B+U+4]=r.x,T[B+U+5]=r.y,T[B+U+6]=r.z,T[B+U+7]=0),m===!0&&(r.fromBufferAttribute(I,V),T[B+U+8]=r.x,T[B+U+9]=r.y,T[B+U+10]=r.z,T[B+U+11]=I.itemSize===4?r.w:1)}}u={count:f,texture:_,size:new tt(E,b)},i.set(a,u),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function SN(t,e,n,i,r){let s=new WeakMap;function o(c){const d=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function a(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:o,dispose:a}}const MN={[iM]:"LINEAR_TONE_MAPPING",[rM]:"REINHARD_TONE_MAPPING",[sM]:"CINEON_TONE_MAPPING",[oM]:"ACES_FILMIC_TONE_MAPPING",[lM]:"AGX_TONE_MAPPING",[cM]:"NEUTRAL_TONE_MAPPING",[aM]:"CUSTOM_TONE_MAPPING"};function wN(t,e,n,i,r){const s=new zi(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),o=new zi(e,n,{type:mr,depthBuffer:!1,stencilBuffer:!1}),a=new Jn;a.setAttribute("position",new Yn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Yn([0,2,0,0,2,0],2));const l=new f2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new _i(a,l),d=new NM(-1,1,1,-1,0,1);let f=null,u=null,p=!1,v,y=null,m=[],h=!1;this.setSize=function(g,x){s.setSize(g,x),o.setSize(g,x);for(let S=0;S<m.length;S++){const E=m[S];E.setSize&&E.setSize(g,x)}},this.setEffects=function(g){m=g,h=m.length>0&&m[0].isRenderPass===!0;const x=s.width,S=s.height;for(let E=0;E<m.length;E++){const b=m[E];b.setSize&&b.setSize(x,S)}},this.begin=function(g,x){if(p||g.toneMapping===Bi&&m.length===0)return!1;if(y=x,x!==null){const S=x.width,E=x.height;(s.width!==S||s.height!==E)&&this.setSize(S,E)}return h===!1&&g.setRenderTarget(s),v=g.toneMapping,g.toneMapping=Bi,!0},this.hasRenderPass=function(){return h},this.end=function(g,x){g.toneMapping=v,p=!0;let S=s,E=o;for(let b=0;b<m.length;b++){const T=m[b];if(T.enabled!==!1&&(T.render(g,E,S,x),T.needsSwap!==!1)){const _=S;S=E,E=_}}if(f!==g.outputColorSpace||u!==g.toneMapping){f=g.outputColorSpace,u=g.toneMapping,l.defines={},it.getTransfer(f)===ut&&(l.defines.SRGB_TRANSFER="");const b=MN[u];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,g.setRenderTarget(y),g.render(c,d),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const FM=new pn,wp=new pl(1,1),UM=new _M,OM=new HP,kM=new AM,kv=[],Bv=[],zv=new Float32Array(16),Vv=new Float32Array(9),Hv=new Float32Array(4);function ua(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=kv[r];if(s===void 0&&(s=new Float32Array(r),kv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function rd(t,e){let n=Bv[e];n===void 0&&(n=new Int32Array(e),Bv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function EN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function bN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function TN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function AN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function CN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;Hv.set(i),t.uniformMatrix2fv(this.addr,!1,Hv),zt(n,i)}}function RN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;Vv.set(i),t.uniformMatrix3fv(this.addr,!1,Vv),zt(n,i)}}function PN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;zv.set(i),t.uniformMatrix4fv(this.addr,!1,zv),zt(n,i)}}function DN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function NN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function LN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function IN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function FN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function UN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function ON(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function kN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function BN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(wp.compareFunction=n.isReversedDepthBuffer()?Xm:jm,s=wp):s=FM,n.setTexture2D(e||s,r)}function zN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||OM,r)}function VN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||kM,r)}function HN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||UM,r)}function GN(t){switch(t){case 5126:return EN;case 35664:return bN;case 35665:return TN;case 35666:return AN;case 35674:return CN;case 35675:return RN;case 35676:return PN;case 5124:case 35670:return DN;case 35667:case 35671:return NN;case 35668:case 35672:return LN;case 35669:case 35673:return IN;case 5125:return FN;case 36294:return UN;case 36295:return ON;case 36296:return kN;case 35678:case 36198:case 36298:case 36306:case 35682:return BN;case 35679:case 36299:case 36307:return zN;case 35680:case 36300:case 36308:case 36293:return VN;case 36289:case 36303:case 36311:case 36292:return HN}}function WN(t,e){t.uniform1fv(this.addr,e)}function jN(t,e){const n=ua(e,this.size,2);t.uniform2fv(this.addr,n)}function XN(t,e){const n=ua(e,this.size,3);t.uniform3fv(this.addr,n)}function $N(t,e){const n=ua(e,this.size,4);t.uniform4fv(this.addr,n)}function qN(t,e){const n=ua(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function YN(t,e){const n=ua(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function KN(t,e){const n=ua(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function QN(t,e){t.uniform1iv(this.addr,e)}function ZN(t,e){t.uniform2iv(this.addr,e)}function JN(t,e){t.uniform3iv(this.addr,e)}function eL(t,e){t.uniform4iv(this.addr,e)}function tL(t,e){t.uniform1uiv(this.addr,e)}function nL(t,e){t.uniform2uiv(this.addr,e)}function iL(t,e){t.uniform3uiv(this.addr,e)}function rL(t,e){t.uniform4uiv(this.addr,e)}function sL(t,e,n){const i=this.cache,r=e.length,s=rd(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=wp:o=FM;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function oL(t,e,n){const i=this.cache,r=e.length,s=rd(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||OM,s[o])}function aL(t,e,n){const i=this.cache,r=e.length,s=rd(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||kM,s[o])}function lL(t,e,n){const i=this.cache,r=e.length,s=rd(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||UM,s[o])}function cL(t){switch(t){case 5126:return WN;case 35664:return jN;case 35665:return XN;case 35666:return $N;case 35674:return qN;case 35675:return YN;case 35676:return KN;case 5124:case 35670:return QN;case 35667:case 35671:return ZN;case 35668:case 35672:return JN;case 35669:case 35673:return eL;case 5125:return tL;case 36294:return nL;case 36295:return iL;case 36296:return rL;case 35678:case 36198:case 36298:case 36306:case 35682:return sL;case 35679:case 36299:case 36307:return oL;case 35680:case 36300:case 36308:case 36293:return aL;case 36289:case 36303:case 36311:case 36292:return lL}}class uL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=GN(n.type)}}class dL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=cL(n.type)}}class fL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const _f=/(\w+)(\])?(\[|\.)?/g;function Gv(t,e){t.seq.push(e),t.map[e.id]=e}function hL(t,e,n){const i=t.name,r=i.length;for(_f.lastIndex=0;;){const s=_f.exec(i),o=_f.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Gv(n,c===void 0?new uL(a,t,e):new dL(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new fL(a),Gv(n,f)),n=f}}}class Wc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);hL(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Wv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const pL=37297;let mL=0;function gL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const jv=new qe;function vL(t){it._getMatrix(jv,it.workingColorSpace,t);const e=`mat3( ${jv.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case Mu:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Xv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+gL(t.getShaderSource(e),a)}else return s}function xL(t,e){const n=vL(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const yL={[iM]:"Linear",[rM]:"Reinhard",[sM]:"Cineon",[oM]:"ACESFilmic",[lM]:"AgX",[cM]:"Neutral",[aM]:"Custom"};function _L(t,e){const n=yL[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wc=new j;function SL(){it.getLuminanceCoefficients(wc);const t=wc.x.toFixed(4),e=wc.y.toFixed(4),n=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ML(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function wL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function EL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function La(t){return t!==""}function $v(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ep(t){return t.replace(bL,AL)}const TL=new Map;function AL(t,e){let n=Ye[e];if(n===void 0){const i=TL.get(e);if(i!==void 0)n=Ye[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ep(n)}const CL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yv(t){return t.replace(CL,RL)}function RL(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const PL={[Bc]:"SHADOWMAP_TYPE_PCF",[Na]:"SHADOWMAP_TYPE_VSM"};function DL(t){return PL[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const NL={[Vs]:"ENVMAP_TYPE_CUBE",[Qo]:"ENVMAP_TYPE_CUBE",[ed]:"ENVMAP_TYPE_CUBE_UV"};function LL(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":NL[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const IL={[Qo]:"ENVMAP_MODE_REFRACTION"};function FL(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":IL[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const UL={[km]:"ENVMAP_BLENDING_MULTIPLY",[SP]:"ENVMAP_BLENDING_MIX",[MP]:"ENVMAP_BLENDING_ADD"};function OL(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":UL[t.combine]||"ENVMAP_BLENDING_NONE"}function kL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function BL(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=DL(n),c=LL(n),d=FL(n),f=OL(n),u=kL(n),p=ML(n),v=wL(s),y=r.createProgram();let m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(La).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(La).join(`
`),h.length>0&&(h+=`
`)):(m=[Kv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),h=[Kv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bi?"#define TONE_MAPPING":"",n.toneMapping!==Bi?Ye.tonemapping_pars_fragment:"",n.toneMapping!==Bi?_L("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,xL("linearToOutputTexel",n.outputColorSpace),SL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(La).join(`
`)),o=Ep(o),o=$v(o,n),o=qv(o,n),a=Ep(a),a=$v(a,n),a=qv(a,n),o=Yv(o),a=Yv(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=g+m+o,S=g+h+a,E=Wv(r,r.VERTEX_SHADER,x),b=Wv(r,r.FRAGMENT_SHADER,S);r.attachShader(y,E),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(C){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(y)||"",H=r.getShaderInfoLog(E)||"",I=r.getShaderInfoLog(b)||"",B=L.trim(),V=H.trim(),U=I.trim();let O=!0,k=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,E,b);else{const q=Xv(r,E,"vertex"),re=Xv(r,b,"fragment");lt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+q+`
`+re)}else B!==""?ze("WebGLProgram: Program Info Log:",B):(V===""||U==="")&&(k=!1);k&&(C.diagnostics={runnable:O,programLog:B,vertexShader:{log:V,prefix:m},fragmentShader:{log:U,prefix:h}})}r.deleteShader(E),r.deleteShader(b),_=new Wc(r,y),w=EL(r,y)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(y,pL)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mL++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=b,this}let zL=0;class VL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new HL(e),n.set(e,i)),i}}class HL{constructor(e){this.id=zL++,this.code=e,this.usedTimes=0}}function GL(t,e,n,i,r,s){const o=new SM,a=new VL,l=new Set,c=[],d=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,w,D,C,L){const H=C.fog,I=L.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=e.get(_.envMap||B,V),O=U&&U.mapping===ed?U.image.height:null,k=p[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&ze("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,re=q!==void 0?q.length:0;let ee=0;I.morphAttributes.position!==void 0&&(ee=1),I.morphAttributes.normal!==void 0&&(ee=2),I.morphAttributes.color!==void 0&&(ee=3);let me,Ce,Be,K;if(k){const Xe=Di[k];me=Xe.vertexShader,Ce=Xe.fragmentShader}else me=_.vertexShader,Ce=_.fragmentShader,a.update(_),Be=a.getVertexShaderID(_),K=a.getFragmentShaderID(_);const ne=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),ke=L.isInstancedMesh===!0,De=L.isBatchedMesh===!0,Fe=!!_.map,vt=!!_.matcap,Ge=!!U,et=!!_.aoMap,ct=!!_.lightMap,Ve=!!_.bumpMap,xt=!!_.normalMap,F=!!_.displacementMap,pt=!!_.emissiveMap,nt=!!_.metalnessMap,st=!!_.roughnessMap,Ae=_.anisotropy>0,R=_.clearcoat>0,M=_.dispersion>0,G=_.iridescence>0,Q=_.sheen>0,ie=_.transmission>0,J=Ae&&!!_.anisotropyMap,Te=R&&!!_.clearcoatMap,fe=R&&!!_.clearcoatNormalMap,Le=R&&!!_.clearcoatRoughnessMap,Ue=G&&!!_.iridescenceMap,ae=G&&!!_.iridescenceThicknessMap,ce=Q&&!!_.sheenColorMap,be=Q&&!!_.sheenRoughnessMap,Me=!!_.specularMap,_e=!!_.specularColorMap,je=!!_.specularIntensityMap,z=ie&&!!_.transmissionMap,he=ie&&!!_.thicknessMap,de=!!_.gradientMap,Se=!!_.alphaMap,oe=_.alphaTest>0,Z=!!_.alphaHash,se=!!_.extensions;let ve=Bi;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ve=t.toneMapping);const Oe={shaderID:k,shaderType:_.type,shaderName:_.name,vertexShader:me,fragmentShader:Ce,defines:_.defines,customVertexShaderID:Be,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:De,batchingColor:De&&L._colorsTexture!==null,instancing:ke,instancingColor:ke&&L.instanceColor!==null,instancingMorph:ke&&L.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Jo,alphaToCoverage:!!_.alphaToCoverage,map:Fe,matcap:vt,envMap:Ge,envMapMode:Ge&&U.mapping,envMapCubeUVHeight:O,aoMap:et,lightMap:ct,bumpMap:Ve,normalMap:xt,displacementMap:F,emissiveMap:pt,normalMapObjectSpace:xt&&_.normalMapType===bP,normalMapTangentSpace:xt&&_.normalMapType===xM,metalnessMap:nt,roughnessMap:st,anisotropy:Ae,anisotropyMap:J,clearcoat:R,clearcoatMap:Te,clearcoatNormalMap:fe,clearcoatRoughnessMap:Le,dispersion:M,iridescence:G,iridescenceMap:Ue,iridescenceThicknessMap:ae,sheen:Q,sheenColorMap:ce,sheenRoughnessMap:be,specularMap:Me,specularColorMap:_e,specularIntensityMap:je,transmission:ie,transmissionMap:z,thicknessMap:he,gradientMap:de,opaque:_.transparent===!1&&_.blending===Do&&_.alphaToCoverage===!1,alphaMap:Se,alphaTest:oe,alphaHash:Z,combine:_.combine,mapUv:Fe&&v(_.map.channel),aoMapUv:et&&v(_.aoMap.channel),lightMapUv:ct&&v(_.lightMap.channel),bumpMapUv:Ve&&v(_.bumpMap.channel),normalMapUv:xt&&v(_.normalMap.channel),displacementMapUv:F&&v(_.displacementMap.channel),emissiveMapUv:pt&&v(_.emissiveMap.channel),metalnessMapUv:nt&&v(_.metalnessMap.channel),roughnessMapUv:st&&v(_.roughnessMap.channel),anisotropyMapUv:J&&v(_.anisotropyMap.channel),clearcoatMapUv:Te&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:fe&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(_.sheenRoughnessMap.channel),specularMapUv:Me&&v(_.specularMap.channel),specularColorMapUv:_e&&v(_.specularColorMap.channel),specularIntensityMapUv:je&&v(_.specularIntensityMap.channel),transmissionMapUv:z&&v(_.transmissionMap.channel),thicknessMapUv:he&&v(_.thicknessMap.channel),alphaMapUv:Se&&v(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(xt||Ae),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(Fe||Se),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ue,skinning:L.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:ve,decodeVideoTexture:Fe&&_.map.isVideoTexture===!0&&it.getTransfer(_.map.colorSpace)===ut,decodeVideoTextureEmissive:pt&&_.emissiveMap.isVideoTexture===!0&&it.getTransfer(_.emissiveMap.colorSpace)===ut,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===nr,flipSided:_.side===bn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:se&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&_.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function m(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)w.push(D),w.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(h(w,_),g(w,_),w.push(t.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function h(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function g(_,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),_.push(o.mask)}function x(_){const w=p[_.type];let D;if(w){const C=Di[w];D=c2.clone(C.uniforms)}else D=_.uniforms;return D}function S(_,w){let D=d.get(w);return D!==void 0?++D.usedTimes:(D=new BL(t,w,_,r),c.push(D),d.set(w,D)),D}function E(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function T(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:x,acquireProgram:S,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:T}}function WL(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function jL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Qv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Zv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,v,y,m,h){let g=t[e];return g===void 0?(g={id:u.id,object:u,geometry:p,material:v,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:h},t[e]=g):(g.id=u.id,g.object=u,g.geometry=p,g.material=v,g.materialVariant=o(u),g.groupOrder=y,g.renderOrder=u.renderOrder,g.z=m,g.group=h),e++,g}function l(u,p,v,y,m,h){const g=a(u,p,v,y,m,h);v.transmission>0?i.push(g):v.transparent===!0?r.push(g):n.push(g)}function c(u,p,v,y,m,h){const g=a(u,p,v,y,m,h);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):n.unshift(g)}function d(u,p){n.length>1&&n.sort(u||jL),i.length>1&&i.sort(p||Qv),r.length>1&&r.sort(p||Qv)}function f(){for(let u=e,p=t.length;u<p;u++){const v=t[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:d}}function XL(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Zv,t.set(i,[o])):r>=s.length?(o=new Zv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function $L(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Ze};break;case"SpotLight":n={position:new j,direction:new j,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function qL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let YL=0;function KL(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function QL(t){const e=new $L,n=qL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new bt,o=new bt;function a(c){let d=0,f=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,v=0,y=0,m=0,h=0,g=0,x=0,S=0,E=0,b=0,T=0;c.sort(KL);for(let w=0,D=c.length;w<D;w++){const C=c[w],L=C.color,H=C.intensity,I=C.distance;let B=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Zo?B=C.shadow.map.texture:B=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=L.r*H,f+=L.g*H,u+=L.b*H;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],H);T++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const U=C.shadow,O=n.get(C);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=C.shadow.matrix,g++}i.directional[p]=V,p++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(L).multiplyScalar(H),V.distance=I,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[y]=V;const U=C.shadow;if(C.map&&(i.spotLightMap[E]=C.map,E++,U.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[y]=U.matrix,C.castShadow){const O=n.get(C);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,i.spotShadow[y]=O,i.spotShadowMap[y]=B,S++}y++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(L).multiplyScalar(H),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=V,m++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const U=C.shadow,O=n.get(C);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,O.shadowCameraNear=U.camera.near,O.shadowCameraFar=U.camera.far,i.pointShadow[v]=O,i.pointShadowMap[v]=B,i.pointShadowMatrix[v]=C.shadow.matrix,x++}i.point[v]=V,v++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(H),V.groundColor.copy(C.groundColor).multiplyScalar(H),i.hemi[h]=V,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const _=i.hash;(_.directionalLength!==p||_.pointLength!==v||_.spotLength!==y||_.rectAreaLength!==m||_.hemiLength!==h||_.numDirectionalShadows!==g||_.numPointShadows!==x||_.numSpotShadows!==S||_.numSpotMaps!==E||_.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+E-b,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,_.directionalLength=p,_.pointLength=v,_.spotLength=y,_.rectAreaLength=m,_.hemiLength=h,_.numDirectionalShadows=g,_.numPointShadows=x,_.numSpotShadows=S,_.numSpotMaps=E,_.numLightProbes=T,i.version=YL++)}function l(c,d){let f=0,u=0,p=0,v=0,y=0;const m=d.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){const x=c[h];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Jv(t){const e=new QL(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ZL(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Jv(t),e.set(r,[a])):s>=o.length?(a=new Jv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const JL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tI=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],nI=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],ex=new bt,Aa=new j,Sf=new j;function iI(t,e,n){let i=new Ym;const r=new tt,s=new tt,o=new Pt,a=new p2,l=new m2,c={},d=n.maxTextureSize,f={[rs]:bn,[bn]:rs,[nr]:nr},u=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:JL,fragmentShader:eI}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new Jn;v.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new _i(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let h=this.type;this.render=function(b,T,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===nP&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bc);const w=t.getRenderTarget(),D=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),L=t.state;L.setBlending(ar),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const H=h!==this.type;H&&T.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=b.length;I<B;I++){const V=b[I],U=V.shadow;if(U===void 0){ze("WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const O=U.getFrameExtents();r.multiply(O),s.copy(U.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/O.x),r.x=s.x*O.x,U.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/O.y),r.y=s.y*O.y,U.mapSize.y=s.y));const k=t.state.buffers.depth.getReversed();if(U.camera._reversedDepth=k,U.map===null||H===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Na){if(V.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new zi(r.x,r.y,{format:Zo,type:mr,minFilter:on,magFilter:on,generateMipmaps:!1}),U.map.texture.name=V.name+".shadowMap",U.map.depthTexture=new pl(r.x,r.y,Ii),U.map.depthTexture.name=V.name+".shadowMapDepth",U.map.depthTexture.format=gr,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=qt,U.map.depthTexture.magFilter=qt}else V.isPointLight?(U.map=new IM(r.x),U.map.depthTexture=new a2(r.x,Hi)):(U.map=new zi(r.x,r.y),U.map.depthTexture=new pl(r.x,r.y,Hi)),U.map.depthTexture.name=V.name+".shadowMap",U.map.depthTexture.format=gr,this.type===Bc?(U.map.depthTexture.compareFunction=k?Xm:jm,U.map.depthTexture.minFilter=on,U.map.depthTexture.magFilter=on):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=qt,U.map.depthTexture.magFilter=qt);U.camera.updateProjectionMatrix()}const q=U.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<q;re++){if(U.map.isWebGLCubeRenderTarget)t.setRenderTarget(U.map,re),t.clear();else{re===0&&(t.setRenderTarget(U.map),t.clear());const ee=U.getViewport(re);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),L.viewport(o)}if(V.isPointLight){const ee=U.camera,me=U.matrix,Ce=V.distance||ee.far;Ce!==ee.far&&(ee.far=Ce,ee.updateProjectionMatrix()),Aa.setFromMatrixPosition(V.matrixWorld),ee.position.copy(Aa),Sf.copy(ee.position),Sf.add(tI[re]),ee.up.copy(nI[re]),ee.lookAt(Sf),ee.updateMatrixWorld(),me.makeTranslation(-Aa.x,-Aa.y,-Aa.z),ex.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),U._frustum.setFromProjectionMatrix(ex,ee.coordinateSystem,ee.reversedDepth)}else U.updateMatrices(V);i=U.getFrustum(),S(T,_,U.camera,V,this.type)}U.isPointLightShadow!==!0&&this.type===Na&&g(U,_),U.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(w,D,C)};function g(b,T){const _=e.update(y);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new zi(r.x,r.y,{format:Zo,type:mr})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(T,null,_,u,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(T,null,_,p,y,null)}function x(b,T,_,w){let D=null;const C=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)D=C;else if(D=_.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const L=D.uuid,H=T.uuid;let I=c[L];I===void 0&&(I={},c[L]=I);let B=I[H];B===void 0&&(B=D.clone(),I[H]=B,T.addEventListener("dispose",E)),D=B}if(D.visible=T.visible,D.wireframe=T.wireframe,w===Na?D.side=T.shadowSide!==null?T.shadowSide:T.side:D.side=T.shadowSide!==null?T.shadowSide:f[T.side],D.alphaMap=T.alphaMap,D.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,D.map=T.map,D.clipShadows=T.clipShadows,D.clippingPlanes=T.clippingPlanes,D.clipIntersection=T.clipIntersection,D.displacementMap=T.displacementMap,D.displacementScale=T.displacementScale,D.displacementBias=T.displacementBias,D.wireframeLinewidth=T.wireframeLinewidth,D.linewidth=T.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const L=t.properties.get(D);L.light=_}return D}function S(b,T,_,w,D){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===Na)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const H=e.update(b),I=b.material;if(Array.isArray(I)){const B=H.groups;for(let V=0,U=B.length;V<U;V++){const O=B[V],k=I[O.materialIndex];if(k&&k.visible){const q=x(b,k,w,D);b.onBeforeShadow(t,b,T,_,H,q,O),t.renderBufferDirect(_,null,H,q,b,O),b.onAfterShadow(t,b,T,_,H,q,O)}}}else if(I.visible){const B=x(b,I,w,D);b.onBeforeShadow(t,b,T,_,H,B,null),t.renderBufferDirect(_,null,H,B,b,null),b.onAfterShadow(t,b,T,_,H,B,null)}}const L=b.children;for(let H=0,I=L.length;H<I;H++)S(L[H],T,_,w,D)}function E(b){b.target.removeEventListener("dispose",E);for(const _ in c){const w=c[_],D=b.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}function rI(t,e){function n(){let z=!1;const he=new Pt;let de=null;const Se=new Pt(0,0,0,0);return{setMask:function(oe){de!==oe&&!z&&(t.colorMask(oe,oe,oe,oe),de=oe)},setLocked:function(oe){z=oe},setClear:function(oe,Z,se,ve,Oe){Oe===!0&&(oe*=ve,Z*=ve,se*=ve),he.set(oe,Z,se,ve),Se.equals(he)===!1&&(t.clearColor(oe,Z,se,ve),Se.copy(he))},reset:function(){z=!1,de=null,Se.set(-1,0,0,0)}}}function i(){let z=!1,he=!1,de=null,Se=null,oe=null;return{setReversed:function(Z){if(he!==Z){const se=e.get("EXT_clip_control");Z?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),he=Z;const ve=oe;oe=null,this.setClear(ve)}},getReversed:function(){return he},setTest:function(Z){Z?ne(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(Z){de!==Z&&!z&&(t.depthMask(Z),de=Z)},setFunc:function(Z){if(he&&(Z=FP[Z]),Se!==Z){switch(Z){case Ih:t.depthFunc(t.NEVER);break;case Fh:t.depthFunc(t.ALWAYS);break;case Uh:t.depthFunc(t.LESS);break;case Ko:t.depthFunc(t.LEQUAL);break;case Oh:t.depthFunc(t.EQUAL);break;case kh:t.depthFunc(t.GEQUAL);break;case Bh:t.depthFunc(t.GREATER);break;case zh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Se=Z}},setLocked:function(Z){z=Z},setClear:function(Z){oe!==Z&&(oe=Z,he&&(Z=1-Z),t.clearDepth(Z))},reset:function(){z=!1,de=null,Se=null,oe=null,he=!1}}}function r(){let z=!1,he=null,de=null,Se=null,oe=null,Z=null,se=null,ve=null,Oe=null;return{setTest:function(Xe){z||(Xe?ne(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(Xe){he!==Xe&&!z&&(t.stencilMask(Xe),he=Xe)},setFunc:function(Xe,Dt,Vt){(de!==Xe||Se!==Dt||oe!==Vt)&&(t.stencilFunc(Xe,Dt,Vt),de=Xe,Se=Dt,oe=Vt)},setOp:function(Xe,Dt,Vt){(Z!==Xe||se!==Dt||ve!==Vt)&&(t.stencilOp(Xe,Dt,Vt),Z=Xe,se=Dt,ve=Vt)},setLocked:function(Xe){z=Xe},setClear:function(Xe){Oe!==Xe&&(t.clearStencil(Xe),Oe=Xe)},reset:function(){z=!1,he=null,de=null,Se=null,oe=null,Z=null,se=null,ve=null,Oe=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},u=new WeakMap,p=[],v=null,y=!1,m=null,h=null,g=null,x=null,S=null,E=null,b=null,T=new Ze(0,0,0),_=0,w=!1,D=null,C=null,L=null,H=null,I=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,U=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(O)[1]),V=U>=1):O.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),V=U>=2);let k=null,q={};const re=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),me=new Pt().fromArray(re),Ce=new Pt().fromArray(ee);function Be(z,he,de,Se){const oe=new Uint8Array(4),Z=t.createTexture();t.bindTexture(z,Z),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let se=0;se<de;se++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,Se,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(he+se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return Z}const K={};K[t.TEXTURE_2D]=Be(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=Be(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=Be(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=Be(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),o.setFunc(Ko),Ve(!1),xt(nv),ne(t.CULL_FACE),et(ar);function ne(z){d[z]!==!0&&(t.enable(z),d[z]=!0)}function ue(z){d[z]!==!1&&(t.disable(z),d[z]=!1)}function ke(z,he){return f[z]!==he?(t.bindFramebuffer(z,he),f[z]=he,z===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=he),z===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=he),!0):!1}function De(z,he){let de=p,Se=!1;if(z){de=u.get(he),de===void 0&&(de=[],u.set(he,de));const oe=z.textures;if(de.length!==oe.length||de[0]!==t.COLOR_ATTACHMENT0){for(let Z=0,se=oe.length;Z<se;Z++)de[Z]=t.COLOR_ATTACHMENT0+Z;de.length=oe.length,Se=!0}}else de[0]!==t.BACK&&(de[0]=t.BACK,Se=!0);Se&&t.drawBuffers(de)}function Fe(z){return v!==z?(t.useProgram(z),v=z,!0):!1}const vt={[_s]:t.FUNC_ADD,[rP]:t.FUNC_SUBTRACT,[sP]:t.FUNC_REVERSE_SUBTRACT};vt[oP]=t.MIN,vt[aP]=t.MAX;const Ge={[lP]:t.ZERO,[cP]:t.ONE,[uP]:t.SRC_COLOR,[Nh]:t.SRC_ALPHA,[gP]:t.SRC_ALPHA_SATURATE,[pP]:t.DST_COLOR,[fP]:t.DST_ALPHA,[dP]:t.ONE_MINUS_SRC_COLOR,[Lh]:t.ONE_MINUS_SRC_ALPHA,[mP]:t.ONE_MINUS_DST_COLOR,[hP]:t.ONE_MINUS_DST_ALPHA,[vP]:t.CONSTANT_COLOR,[xP]:t.ONE_MINUS_CONSTANT_COLOR,[yP]:t.CONSTANT_ALPHA,[_P]:t.ONE_MINUS_CONSTANT_ALPHA};function et(z,he,de,Se,oe,Z,se,ve,Oe,Xe){if(z===ar){y===!0&&(ue(t.BLEND),y=!1);return}if(y===!1&&(ne(t.BLEND),y=!0),z!==iP){if(z!==m||Xe!==w){if((h!==_s||S!==_s)&&(t.blendEquation(t.FUNC_ADD),h=_s,S=_s),Xe)switch(z){case Do:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case iv:t.blendFunc(t.ONE,t.ONE);break;case rv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:lt("WebGLState: Invalid blending: ",z);break}else switch(z){case Do:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case iv:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case rv:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sv:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",z);break}g=null,x=null,E=null,b=null,T.set(0,0,0),_=0,m=z,w=Xe}return}oe=oe||he,Z=Z||de,se=se||Se,(he!==h||oe!==S)&&(t.blendEquationSeparate(vt[he],vt[oe]),h=he,S=oe),(de!==g||Se!==x||Z!==E||se!==b)&&(t.blendFuncSeparate(Ge[de],Ge[Se],Ge[Z],Ge[se]),g=de,x=Se,E=Z,b=se),(ve.equals(T)===!1||Oe!==_)&&(t.blendColor(ve.r,ve.g,ve.b,Oe),T.copy(ve),_=Oe),m=z,w=!1}function ct(z,he){z.side===nr?ue(t.CULL_FACE):ne(t.CULL_FACE);let de=z.side===bn;he&&(de=!de),Ve(de),z.blending===Do&&z.transparent===!1?et(ar):et(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const Se=z.stencilWrite;a.setTest(Se),Se&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),pt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(z){D!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),D=z)}function xt(z){z!==eP?(ne(t.CULL_FACE),z!==C&&(z===nv?t.cullFace(t.BACK):z===tP?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),C=z}function F(z){z!==L&&(V&&t.lineWidth(z),L=z)}function pt(z,he,de){z?(ne(t.POLYGON_OFFSET_FILL),(H!==he||I!==de)&&(H=he,I=de,o.getReversed()&&(he=-he),t.polygonOffset(he,de))):ue(t.POLYGON_OFFSET_FILL)}function nt(z){z?ne(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function st(z){z===void 0&&(z=t.TEXTURE0+B-1),k!==z&&(t.activeTexture(z),k=z)}function Ae(z,he,de){de===void 0&&(k===null?de=t.TEXTURE0+B-1:de=k);let Se=q[de];Se===void 0&&(Se={type:void 0,texture:void 0},q[de]=Se),(Se.type!==z||Se.texture!==he)&&(k!==de&&(t.activeTexture(de),k=de),t.bindTexture(z,he||K[z]),Se.type=z,Se.texture=he)}function R(){const z=q[k];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function M(){try{t.compressedTexImage2D(...arguments)}catch(z){lt("WebGLState:",z)}}function G(){try{t.compressedTexImage3D(...arguments)}catch(z){lt("WebGLState:",z)}}function Q(){try{t.texSubImage2D(...arguments)}catch(z){lt("WebGLState:",z)}}function ie(){try{t.texSubImage3D(...arguments)}catch(z){lt("WebGLState:",z)}}function J(){try{t.compressedTexSubImage2D(...arguments)}catch(z){lt("WebGLState:",z)}}function Te(){try{t.compressedTexSubImage3D(...arguments)}catch(z){lt("WebGLState:",z)}}function fe(){try{t.texStorage2D(...arguments)}catch(z){lt("WebGLState:",z)}}function Le(){try{t.texStorage3D(...arguments)}catch(z){lt("WebGLState:",z)}}function Ue(){try{t.texImage2D(...arguments)}catch(z){lt("WebGLState:",z)}}function ae(){try{t.texImage3D(...arguments)}catch(z){lt("WebGLState:",z)}}function ce(z){me.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),me.copy(z))}function be(z){Ce.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),Ce.copy(z))}function Me(z,he){let de=c.get(he);de===void 0&&(de=new WeakMap,c.set(he,de));let Se=de.get(z);Se===void 0&&(Se=t.getUniformBlockIndex(he,z.name),de.set(z,Se))}function _e(z,he){const Se=c.get(he).get(z);l.get(he)!==Se&&(t.uniformBlockBinding(he,Se,z.__bindingPointIndex),l.set(he,Se))}function je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},k=null,q={},f={},u=new WeakMap,p=[],v=null,y=!1,m=null,h=null,g=null,x=null,S=null,E=null,b=null,T=new Ze(0,0,0),_=0,w=!1,D=null,C=null,L=null,H=null,I=null,me.set(0,0,t.canvas.width,t.canvas.height),Ce.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:ue,bindFramebuffer:ke,drawBuffers:De,useProgram:Fe,setBlending:et,setMaterial:ct,setFlipSided:Ve,setCullFace:xt,setLineWidth:F,setPolygonOffset:pt,setScissorTest:nt,activeTexture:st,bindTexture:Ae,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:G,texImage2D:Ue,texImage3D:ae,updateUBOMapping:Me,uniformBlockBinding:_e,texStorage2D:fe,texStorage3D:Le,texSubImage2D:Q,texSubImage3D:ie,compressedTexSubImage2D:J,compressedTexSubImage3D:Te,scissor:ce,viewport:be,reset:je}}function sI(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,d=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,M){return p?new OffscreenCanvas(R,M):wu("canvas")}function y(R,M,G){let Q=1;const ie=Ae(R);if((ie.width>G||ie.height>G)&&(Q=G/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(Q*ie.width),Te=Math.floor(Q*ie.height);f===void 0&&(f=v(J,Te));const fe=M?v(J,Te):f;return fe.width=J,fe.height=Te,fe.getContext("2d").drawImage(R,0,0,J,Te),ze("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Te+")."),fe}else return"data"in R&&ze("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function m(R){return R.generateMipmaps}function h(R){t.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,M,G,Q,ie=!1){if(R!==null){if(t[R]!==void 0)return t[R];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=M;if(M===t.RED&&(G===t.FLOAT&&(J=t.R32F),G===t.HALF_FLOAT&&(J=t.R16F),G===t.UNSIGNED_BYTE&&(J=t.R8)),M===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.R8UI),G===t.UNSIGNED_SHORT&&(J=t.R16UI),G===t.UNSIGNED_INT&&(J=t.R32UI),G===t.BYTE&&(J=t.R8I),G===t.SHORT&&(J=t.R16I),G===t.INT&&(J=t.R32I)),M===t.RG&&(G===t.FLOAT&&(J=t.RG32F),G===t.HALF_FLOAT&&(J=t.RG16F),G===t.UNSIGNED_BYTE&&(J=t.RG8)),M===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RG8UI),G===t.UNSIGNED_SHORT&&(J=t.RG16UI),G===t.UNSIGNED_INT&&(J=t.RG32UI),G===t.BYTE&&(J=t.RG8I),G===t.SHORT&&(J=t.RG16I),G===t.INT&&(J=t.RG32I)),M===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RGB8UI),G===t.UNSIGNED_SHORT&&(J=t.RGB16UI),G===t.UNSIGNED_INT&&(J=t.RGB32UI),G===t.BYTE&&(J=t.RGB8I),G===t.SHORT&&(J=t.RGB16I),G===t.INT&&(J=t.RGB32I)),M===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),G===t.UNSIGNED_INT&&(J=t.RGBA32UI),G===t.BYTE&&(J=t.RGBA8I),G===t.SHORT&&(J=t.RGBA16I),G===t.INT&&(J=t.RGBA32I)),M===t.RGB&&(G===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),M===t.RGBA){const Te=ie?Mu:it.getTransfer(Q);G===t.FLOAT&&(J=t.RGBA32F),G===t.HALF_FLOAT&&(J=t.RGBA16F),G===t.UNSIGNED_BYTE&&(J=Te===ut?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(R,M){let G;return R?M===null||M===Hi||M===fl?G=t.DEPTH24_STENCIL8:M===Ii?G=t.DEPTH32F_STENCIL8:M===dl&&(G=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hi||M===fl?G=t.DEPTH_COMPONENT24:M===Ii?G=t.DEPTH_COMPONENT32F:M===dl&&(G=t.DEPTH_COMPONENT16),G}function E(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function b(R){const M=R.target;M.removeEventListener("dispose",b),_(M),M.isVideoTexture&&d.delete(M)}function T(R){const M=R.target;M.removeEventListener("dispose",T),D(M)}function _(R){const M=i.get(R);if(M.__webglInit===void 0)return;const G=R.source,Q=u.get(G);if(Q){const ie=Q[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(R),Object.keys(Q).length===0&&u.delete(G)}i.remove(R)}function w(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const G=R.source,Q=u.get(G);delete Q[M.__cacheKey],o.memory.textures--}function D(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ie=0;ie<M.__webglFramebuffer[Q].length;ie++)t.deleteFramebuffer(M.__webglFramebuffer[Q][ie]);else t.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[Q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=R.textures;for(let Q=0,ie=G.length;Q<ie;Q++){const J=i.get(G[Q]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(G[Q])}i.remove(R)}let C=0;function L(){C=0}function H(){const R=C;return R>=r.maxTextures&&ze("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),C+=1,R}function I(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function B(R,M){const G=i.get(R);if(R.isVideoTexture&&nt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const Q=R.image;if(Q===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,R,M);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+M)}function V(R,M){const G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){K(G,R,M);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+M)}function U(R,M){const G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){K(G,R,M);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+M)}function O(R,M){const G=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){ne(G,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+M)}const k={[Vh]:t.REPEAT,[sr]:t.CLAMP_TO_EDGE,[Hh]:t.MIRRORED_REPEAT},q={[qt]:t.NEAREST,[wP]:t.NEAREST_MIPMAP_NEAREST,[Jl]:t.NEAREST_MIPMAP_LINEAR,[on]:t.LINEAR,[Gd]:t.LINEAR_MIPMAP_NEAREST,[bs]:t.LINEAR_MIPMAP_LINEAR},re={[TP]:t.NEVER,[DP]:t.ALWAYS,[AP]:t.LESS,[jm]:t.LEQUAL,[CP]:t.EQUAL,[Xm]:t.GEQUAL,[RP]:t.GREATER,[PP]:t.NOTEQUAL};function ee(R,M){if(M.type===Ii&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===on||M.magFilter===Gd||M.magFilter===Jl||M.magFilter===bs||M.minFilter===on||M.minFilter===Gd||M.minFilter===Jl||M.minFilter===bs)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,k[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,k[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,k[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,q[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qt||M.minFilter!==Jl&&M.minFilter!==bs||M.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function me(R,M){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const Q=M.source;let ie=u.get(Q);ie===void 0&&(ie={},u.set(Q,ie));const J=I(M);if(J!==R.__cacheKey){ie[J]===void 0&&(ie[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[J].usedTimes++;const Te=ie[R.__cacheKey];Te!==void 0&&(ie[R.__cacheKey].usedTimes--,Te.usedTimes===0&&w(M)),R.__cacheKey=J,R.__webglTexture=ie[J].texture}return G}function Ce(R,M,G){return Math.floor(Math.floor(R/G)/M)}function Be(R,M,G,Q){const J=R.updateRanges;if(J.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,G,Q,M.data);else{J.sort((ae,ce)=>ae.start-ce.start);let Te=0;for(let ae=1;ae<J.length;ae++){const ce=J[Te],be=J[ae],Me=ce.start+ce.count,_e=Ce(be.start,M.width,4),je=Ce(ce.start,M.width,4);be.start<=Me+1&&_e===je&&Ce(be.start+be.count-1,M.width,4)===_e?ce.count=Math.max(ce.count,be.start+be.count-ce.start):(++Te,J[Te]=be)}J.length=Te+1;const fe=t.getParameter(t.UNPACK_ROW_LENGTH),Le=t.getParameter(t.UNPACK_SKIP_PIXELS),Ue=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let ae=0,ce=J.length;ae<ce;ae++){const be=J[ae],Me=Math.floor(be.start/4),_e=Math.ceil(be.count/4),je=Me%M.width,z=Math.floor(Me/M.width),he=_e,de=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,je),t.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,je,z,he,de,G,Q,M.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,fe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ue)}}function K(R,M,G){let Q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=t.TEXTURE_3D);const ie=me(R,M),J=M.source;n.bindTexture(Q,R.__webglTexture,t.TEXTURE0+G);const Te=i.get(J);if(J.version!==Te.__version||ie===!0){n.activeTexture(t.TEXTURE0+G);const fe=it.getPrimaries(it.workingColorSpace),Le=M.colorSpace===Ir?null:it.getPrimaries(M.colorSpace),Ue=M.colorSpace===Ir||fe===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ae=y(M.image,!1,r.maxTextureSize);ae=st(M,ae);const ce=s.convert(M.format,M.colorSpace),be=s.convert(M.type);let Me=x(M.internalFormat,ce,be,M.colorSpace,M.isVideoTexture);ee(Q,M);let _e;const je=M.mipmaps,z=M.isVideoTexture!==!0,he=Te.__version===void 0||ie===!0,de=J.dataReady,Se=E(M,ae);if(M.isDepthTexture)Me=S(M.format===Ts,M.type),he&&(z?n.texStorage2D(t.TEXTURE_2D,1,Me,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Me,ae.width,ae.height,0,ce,be,null));else if(M.isDataTexture)if(je.length>0){z&&he&&n.texStorage2D(t.TEXTURE_2D,Se,Me,je[0].width,je[0].height);for(let oe=0,Z=je.length;oe<Z;oe++)_e=je[oe],z?de&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,ce,be,_e.data):n.texImage2D(t.TEXTURE_2D,oe,Me,_e.width,_e.height,0,ce,be,_e.data);M.generateMipmaps=!1}else z?(he&&n.texStorage2D(t.TEXTURE_2D,Se,Me,ae.width,ae.height),de&&Be(M,ae,ce,be)):n.texImage2D(t.TEXTURE_2D,0,Me,ae.width,ae.height,0,ce,be,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){z&&he&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Me,je[0].width,je[0].height,ae.depth);for(let oe=0,Z=je.length;oe<Z;oe++)if(_e=je[oe],M.format!==hi)if(ce!==null)if(z){if(de)if(M.layerUpdates.size>0){const se=Dv(_e.width,_e.height,M.format,M.type);for(const ve of M.layerUpdates){const Oe=_e.data.subarray(ve*se/_e.data.BYTES_PER_ELEMENT,(ve+1)*se/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,ve,_e.width,_e.height,1,ce,Oe)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,ae.depth,ce,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,Me,_e.width,_e.height,ae.depth,0,_e.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?de&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,ae.depth,ce,be,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,Me,_e.width,_e.height,ae.depth,0,ce,be,_e.data)}else{z&&he&&n.texStorage2D(t.TEXTURE_2D,Se,Me,je[0].width,je[0].height);for(let oe=0,Z=je.length;oe<Z;oe++)_e=je[oe],M.format!==hi?ce!==null?z?de&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,ce,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,Me,_e.width,_e.height,0,_e.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?de&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,ce,be,_e.data):n.texImage2D(t.TEXTURE_2D,oe,Me,_e.width,_e.height,0,ce,be,_e.data)}else if(M.isDataArrayTexture)if(z){if(he&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Me,ae.width,ae.height,ae.depth),de)if(M.layerUpdates.size>0){const oe=Dv(ae.width,ae.height,M.format,M.type);for(const Z of M.layerUpdates){const se=ae.data.subarray(Z*oe/ae.data.BYTES_PER_ELEMENT,(Z+1)*oe/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,ae.width,ae.height,1,ce,be,se)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ce,be,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Me,ae.width,ae.height,ae.depth,0,ce,be,ae.data);else if(M.isData3DTexture)z?(he&&n.texStorage3D(t.TEXTURE_3D,Se,Me,ae.width,ae.height,ae.depth),de&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ce,be,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Me,ae.width,ae.height,ae.depth,0,ce,be,ae.data);else if(M.isFramebufferTexture){if(he)if(z)n.texStorage2D(t.TEXTURE_2D,Se,Me,ae.width,ae.height);else{let oe=ae.width,Z=ae.height;for(let se=0;se<Se;se++)n.texImage2D(t.TEXTURE_2D,se,Me,oe,Z,0,ce,be,null),oe>>=1,Z>>=1}}else if(je.length>0){if(z&&he){const oe=Ae(je[0]);n.texStorage2D(t.TEXTURE_2D,Se,Me,oe.width,oe.height)}for(let oe=0,Z=je.length;oe<Z;oe++)_e=je[oe],z?de&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ce,be,_e):n.texImage2D(t.TEXTURE_2D,oe,Me,ce,be,_e);M.generateMipmaps=!1}else if(z){if(he){const oe=Ae(ae);n.texStorage2D(t.TEXTURE_2D,Se,Me,oe.width,oe.height)}de&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,be,ae)}else n.texImage2D(t.TEXTURE_2D,0,Me,ce,be,ae);m(M)&&h(Q),Te.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ne(R,M,G){if(M.image.length!==6)return;const Q=me(R,M),ie=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const J=i.get(ie);if(ie.version!==J.__version||Q===!0){n.activeTexture(t.TEXTURE0+G);const Te=it.getPrimaries(it.workingColorSpace),fe=M.colorSpace===Ir?null:it.getPrimaries(M.colorSpace),Le=M.colorSpace===Ir||Te===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ue=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,ce=[];for(let Z=0;Z<6;Z++)!Ue&&!ae?ce[Z]=y(M.image[Z],!0,r.maxCubemapSize):ce[Z]=ae?M.image[Z].image:M.image[Z],ce[Z]=st(M,ce[Z]);const be=ce[0],Me=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),je=x(M.internalFormat,Me,_e,M.colorSpace),z=M.isVideoTexture!==!0,he=J.__version===void 0||Q===!0,de=ie.dataReady;let Se=E(M,be);ee(t.TEXTURE_CUBE_MAP,M);let oe;if(Ue){z&&he&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,je,be.width,be.height);for(let Z=0;Z<6;Z++){oe=ce[Z].mipmaps;for(let se=0;se<oe.length;se++){const ve=oe[se];M.format!==hi?Me!==null?z?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,0,0,ve.width,ve.height,Me,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,je,ve.width,ve.height,0,ve.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,0,0,ve.width,ve.height,Me,_e,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,je,ve.width,ve.height,0,Me,_e,ve.data)}}}else{if(oe=M.mipmaps,z&&he){oe.length>0&&Se++;const Z=Ae(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,je,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ae){z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ce[Z].width,ce[Z].height,Me,_e,ce[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,je,ce[Z].width,ce[Z].height,0,Me,_e,ce[Z].data);for(let se=0;se<oe.length;se++){const Oe=oe[se].image[Z].image;z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,0,0,Oe.width,Oe.height,Me,_e,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,je,Oe.width,Oe.height,0,Me,_e,Oe.data)}}else{z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Me,_e,ce[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,je,Me,_e,ce[Z]);for(let se=0;se<oe.length;se++){const ve=oe[se];z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,0,0,Me,_e,ve.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,je,Me,_e,ve.image[Z])}}}m(M)&&h(t.TEXTURE_CUBE_MAP),J.__version=ie.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ue(R,M,G,Q,ie,J){const Te=s.convert(G.format,G.colorSpace),fe=s.convert(G.type),Le=x(G.internalFormat,Te,fe,G.colorSpace),Ue=i.get(M),ae=i.get(G);if(ae.__renderTarget=M,!Ue.__hasExternalTextures){const ce=Math.max(1,M.width>>J),be=Math.max(1,M.height>>J);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,J,Le,ce,be,M.depth,0,Te,fe,null):n.texImage2D(ie,J,Le,ce,be,0,Te,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),pt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ie,ae.__webglTexture,0,F(M)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ie,ae.__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(R,M,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const Q=M.depthTexture,ie=Q&&Q.isDepthTexture?Q.type:null,J=S(M.stencilBuffer,ie),Te=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;pt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,F(M),J,M.width,M.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,F(M),J,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,J,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,R)}else{const Q=M.textures;for(let ie=0;ie<Q.length;ie++){const J=Q[ie],Te=s.convert(J.format,J.colorSpace),fe=s.convert(J.type),Le=x(J.internalFormat,Te,fe,J.colorSpace);pt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,F(M),Le,M.width,M.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,F(M),Le,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Le,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(R,M,G){const Q=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(M.depthTexture);if(ie.__renderTarget=M,(!ie.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,M.depthTexture.addEventListener("dispose",b)),ie.__webglTexture===void 0){ie.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),ee(t.TEXTURE_CUBE_MAP,M.depthTexture);const Ue=s.convert(M.depthTexture.format),ae=s.convert(M.depthTexture.type);let ce;M.depthTexture.format===gr?ce=t.DEPTH_COMPONENT24:M.depthTexture.format===Ts&&(ce=t.DEPTH24_STENCIL8);for(let be=0;be<6;be++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ce,M.width,M.height,0,Ue,ae,null)}}else B(M.depthTexture,0);const J=ie.__webglTexture,Te=F(M),fe=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,Le=M.depthTexture.format===Ts?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===gr)pt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Le,fe,J,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Le,fe,J,0);else if(M.depthTexture.format===Ts)pt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Le,fe,J,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Le,fe,J,0);else throw new Error("Unknown depthTexture format")}function Fe(R){const M=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",ie)};Q.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=Q}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let Q=0;Q<6;Q++)De(M.__webglFramebuffer[Q],R,Q);else{const Q=R.texture.mipmaps;Q&&Q.length>0?De(M.__webglFramebuffer[0],R,0):De(M.__webglFramebuffer,R,0)}else if(G){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=t.createRenderbuffer(),ke(M.__webglDepthbuffer[Q],R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,J)}}else{const Q=R.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ke(M.__webglDepthbuffer,R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,J)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function vt(R,M,G){const Q=i.get(R);M!==void 0&&ue(Q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Fe(R)}function Ge(R){const M=R.texture,G=i.get(R),Q=i.get(M);R.addEventListener("dispose",T);const ie=R.textures,J=R.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=M.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let Le=0;Le<M.mipmaps.length;Le++)G.__webglFramebuffer[fe][Le]=t.createFramebuffer()}else G.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)G.__webglFramebuffer[fe]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Te)for(let fe=0,Le=ie.length;fe<Le;fe++){const Ue=i.get(ie[fe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&pt(R)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const Le=ie[fe];G.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const Ue=s.convert(Le.format,Le.colorSpace),ae=s.convert(Le.type),ce=x(Le.internalFormat,Ue,ae,Le.colorSpace,R.isXRRenderTarget===!0),be=F(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,ce,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),ke(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ee(t.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)ue(G.__webglFramebuffer[fe][Le],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le);else ue(G.__webglFramebuffer[fe],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let fe=0,Le=ie.length;fe<Le;fe++){const Ue=ie[fe],ae=i.get(Ue);let ce=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,ae.__webglTexture),ee(ce,Ue),ue(G.__webglFramebuffer,R,Ue,t.COLOR_ATTACHMENT0+fe,ce,0),m(Ue)&&h(ce)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,Q.__webglTexture),ee(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)ue(G.__webglFramebuffer[Le],R,M,t.COLOR_ATTACHMENT0,fe,Le);else ue(G.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,fe,0);m(M)&&h(fe),n.unbindTexture()}R.depthBuffer&&Fe(R)}function et(R){const M=R.textures;for(let G=0,Q=M.length;G<Q;G++){const ie=M[G];if(m(ie)){const J=g(R),Te=i.get(ie).__webglTexture;n.bindTexture(J,Te),h(J),n.unbindTexture()}}}const ct=[],Ve=[];function xt(R){if(R.samples>0){if(pt(R)===!1){const M=R.textures,G=R.width,Q=R.height;let ie=t.COLOR_BUFFER_BIT;const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(R),fe=M.length>1;if(fe)for(let Ue=0;Ue<M.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Le=R.texture.mipmaps;Le&&Le.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ue=0;Ue<M.length;Ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Ue]);const ae=i.get(M[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ae,0)}t.blitFramebuffer(0,0,G,Q,0,0,G,Q,ie,t.NEAREST),l===!0&&(ct.length=0,Ve.length=0,ct.push(t.COLOR_ATTACHMENT0+Ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ct.push(J),Ve.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ve)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ct))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Ue=0;Ue<M.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Ue]);const ae=i.get(M[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function F(R){return Math.min(r.maxSamples,R.samples)}function pt(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function nt(R){const M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function st(R,M){const G=R.colorSpace,Q=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Jo&&G!==Ir&&(it.getTransfer(G)===ut?(Q!==hi||ie!==In)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",G)),M}function Ae(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=U,this.setTextureCube=O,this.rebindTextures=vt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function oI(t,e){function n(i,r=Ir){let s;const o=it.getTransfer(r);if(i===In)return t.UNSIGNED_BYTE;if(i===zm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Vm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===hM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===pM)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===dM)return t.BYTE;if(i===fM)return t.SHORT;if(i===dl)return t.UNSIGNED_SHORT;if(i===Bm)return t.INT;if(i===Hi)return t.UNSIGNED_INT;if(i===Ii)return t.FLOAT;if(i===mr)return t.HALF_FLOAT;if(i===mM)return t.ALPHA;if(i===gM)return t.RGB;if(i===hi)return t.RGBA;if(i===gr)return t.DEPTH_COMPONENT;if(i===Ts)return t.DEPTH_STENCIL;if(i===vM)return t.RED;if(i===Hm)return t.RED_INTEGER;if(i===Zo)return t.RG;if(i===Gm)return t.RG_INTEGER;if(i===Wm)return t.RGBA_INTEGER;if(i===zc||i===Vc||i===Hc||i===Gc)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gh||i===Wh||i===jh||i===Xh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$h||i===qh||i===Yh||i===Kh||i===Qh||i===Zh||i===Jh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$h||i===qh)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kh)return s.COMPRESSED_R11_EAC;if(i===Qh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Zh)return s.COMPRESSED_RG11_EAC;if(i===Jh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ep||i===tp||i===np||i===ip||i===rp||i===sp||i===op||i===ap||i===lp||i===cp||i===up||i===dp||i===fp||i===hp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ep)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===np)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ip)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===op)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ap)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===up)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hp)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pp||i===mp||i===gp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===pp)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vp||i===xp||i===yp||i===_p)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_p)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const aI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new CM(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Wi({vertexShader:aI,fragmentShader:lI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _i(new nd(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uI extends aa{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,u=null,p=null,v=null;const y=typeof XRWebGLBinding<"u",m=new cI,h={},g=n.getContextAttributes();let x=null,S=null;const E=[],b=[],T=new tt;let _=null;const w=new Ln;w.viewport=new Pt;const D=new Ln;D.viewport=new Pt;const C=[w,D],L=new S2;let H=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=E[K];return ne===void 0&&(ne=new Qd,E[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=E[K];return ne===void 0&&(ne=new Qd,E[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=E[K];return ne===void 0&&(ne=new Qd,E[K]=ne),ne.getHandSpace()};function B(K){const ne=b.indexOf(K.inputSource);if(ne===-1)return;const ue=E[ne];ue!==void 0&&(ue.update(K.inputSource,K.frame,c||o),ue.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",U);for(let K=0;K<E.length;K++){const ne=b[K];ne!==null&&(b[K]=null,E[K].disconnect(ne))}H=null,I=null,m.reset();for(const K in h)delete h[K];e.setRenderTarget(x),p=null,u=null,f=null,r=null,S=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",V),r.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ke=null,De=null;g.depth&&(De=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=g.stencil?Ts:gr,ke=g.stencil?fl:Hi);const Fe={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Fe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new zi(u.textureWidth,u.textureHeight,{format:hi,type:In,depthTexture:new pl(u.textureWidth,u.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ue={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new zi(p.framebufferWidth,p.framebufferHeight,{format:hi,type:In,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(K){for(let ne=0;ne<K.removed.length;ne++){const ue=K.removed[ne],ke=b.indexOf(ue);ke>=0&&(b[ke]=null,E[ke].disconnect(ue))}for(let ne=0;ne<K.added.length;ne++){const ue=K.added[ne];let ke=b.indexOf(ue);if(ke===-1){for(let Fe=0;Fe<E.length;Fe++)if(Fe>=b.length){b.push(ue),ke=Fe;break}else if(b[Fe]===null){b[Fe]=ue,ke=Fe;break}if(ke===-1)break}const De=E[ke];De&&De.connect(ue)}}const O=new j,k=new j;function q(K,ne,ue){O.setFromMatrixPosition(ne.matrixWorld),k.setFromMatrixPosition(ue.matrixWorld);const ke=O.distanceTo(k),De=ne.projectionMatrix.elements,Fe=ue.projectionMatrix.elements,vt=De[14]/(De[10]-1),Ge=De[14]/(De[10]+1),et=(De[9]+1)/De[5],ct=(De[9]-1)/De[5],Ve=(De[8]-1)/De[0],xt=(Fe[8]+1)/Fe[0],F=vt*Ve,pt=vt*xt,nt=ke/(-Ve+xt),st=nt*-Ve;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(st),K.translateZ(nt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),De[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ae=vt+nt,R=Ge+nt,M=F-st,G=pt+(ke-st),Q=et*Ge/R*Ae,ie=ct*Ge/R*Ae;K.projectionMatrix.makePerspective(M,G,Q,ie,Ae,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function re(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ne=K.near,ue=K.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),L.near=D.near=w.near=ne,L.far=D.far=w.far=ue,(H!==L.near||I!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),H=L.near,I=L.far),L.layers.mask=K.layers.mask|6,w.layers.mask=L.layers.mask&-5,D.layers.mask=L.layers.mask&-3;const ke=K.parent,De=L.cameras;re(L,ke);for(let Fe=0;Fe<De.length;Fe++)re(De[Fe],ke);De.length===2?q(L,w,D):L.projectionMatrix.copy(w.projectionMatrix),ee(K,L,ke)};function ee(K,ne,ue){ue===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(ue.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Sp*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(K){return h[K]};let me=null;function Ce(K,ne){if(d=ne.getViewerPose(c||o),v=ne,d!==null){const ue=d.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ke=!1;ue.length!==L.cameras.length&&(L.cameras.length=0,ke=!0);for(let Ge=0;Ge<ue.length;Ge++){const et=ue[Ge];let ct=null;if(p!==null)ct=p.getViewport(et);else{const xt=f.getViewSubImage(u,et);ct=xt.viewport,Ge===0&&(e.setRenderTargetTextures(S,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(S))}let Ve=C[Ge];Ve===void 0&&(Ve=new Ln,Ve.layers.enable(Ge),Ve.viewport=new Pt,C[Ge]=Ve),Ve.matrix.fromArray(et.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(et.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ct.x,ct.y,ct.width,ct.height),Ge===0&&(L.matrix.copy(Ve.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ke===!0&&L.cameras.push(Ve)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const Ge=f.getDepthInformation(ue[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,r.renderState)}if(De&&De.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let Ge=0;Ge<ue.length;Ge++){const et=ue[Ge].camera;if(et){let ct=h[et];ct||(ct=new CM,h[et]=ct);const Ve=f.getCameraImage(et);ct.sourceTexture=Ve}}}}for(let ue=0;ue<E.length;ue++){const ke=b[ue],De=E[ue];ke!==null&&De!==void 0&&De.update(ke,ne,c||o)}me&&me(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}const Be=new LM;Be.setAnimationLoop(Ce),this.setAnimationLoop=function(K){me=K},this.dispose=function(){}}}const gs=new Gi,dI=new bt;function fI(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,RM(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,x,S){h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),d(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),u(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,g,x):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===bn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===bn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),x=g.envMap,S=g.envMapRotation;x&&(m.envMap.value=x,gs.copy(S),gs.x*=-1,gs.y*=-1,gs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.envMapRotation.value.setFromMatrix4(dI.makeRotationFromEuler(gs)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=x*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===bn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hI(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const S=x.program;i.uniformBlockBinding(g,S)}function c(g,x){let S=r[g.id];S===void 0&&(v(g),S=d(g),r[g.id]=S,g.addEventListener("dispose",m));const E=x.program;i.updateUBOMapping(g,E);const b=e.render.frame;s[g.id]!==b&&(u(g),s[g.id]=b)}function d(g){const x=f();g.__bindingPointIndex=x;const S=t.createBuffer(),E=g.__size,b=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,E,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(g){const x=r[g.id],S=g.uniforms,E=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let b=0,T=S.length;b<T;b++){const _=Array.isArray(S[b])?S[b]:[S[b]];for(let w=0,D=_.length;w<D;w++){const C=_[w];if(p(C,b,w,E)===!0){const L=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let I=0;for(let B=0;B<H.length;B++){const V=H[B],U=y(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,L+I,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,I),I+=U.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,x,S,E){const b=g.value,T=x+"_"+S;if(E[T]===void 0)return typeof b=="number"||typeof b=="boolean"?E[T]=b:E[T]=b.clone(),!0;{const _=E[T];if(typeof b=="number"||typeof b=="boolean"){if(_!==b)return E[T]=b,!0}else if(_.equals(b)===!1)return _.copy(b),!0}return!1}function v(g){const x=g.uniforms;let S=0;const E=16;for(let T=0,_=x.length;T<_;T++){const w=Array.isArray(x[T])?x[T]:[x[T]];for(let D=0,C=w.length;D<C;D++){const L=w[D],H=Array.isArray(L.value)?L.value:[L.value];for(let I=0,B=H.length;I<B;I++){const V=H[I],U=y(V),O=S%E,k=O%U.boundary,q=O+k;S+=k,q!==0&&E-q<U.storage&&(S+=E-q),L.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=U.storage}}}const b=S%E;return b>0&&(S+=E-b),g.__size=S,g.__cache={},this}function y(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ze("WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const pI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function mI(){return Ti===null&&(Ti=new n2(pI,16,16,Zo,mr),Ti.name="DFG_LUT",Ti.minFilter=on,Ti.magFilter=on,Ti.wrapS=sr,Ti.wrapT=sr,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class gI{constructor(e={}){const{canvas:n=LP(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=In}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const y=p,m=new Set([Wm,Gm,Hm]),h=new Set([In,Hi,dl,fl,zm,Vm]),g=new Uint32Array(4),x=new Int32Array(4);let S=null,E=null;const b=[],T=[];let _=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let D=!1;this._outputColorSpace=Gn;let C=0,L=0,H=null,I=-1,B=null;const V=new Pt,U=new Pt;let O=null;const k=new Ze(0);let q=0,re=n.width,ee=n.height,me=1,Ce=null,Be=null;const K=new Pt(0,0,re,ee),ne=new Pt(0,0,re,ee);let ue=!1;const ke=new Ym;let De=!1,Fe=!1;const vt=new bt,Ge=new j,et=new Pt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function xt(){return H===null?me:1}let F=i;function pt(A,W){return n.getContext(A,W)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Om}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),F===null){const W="webgl2";if(F=pt(W,A),F===null)throw pt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw lt("WebGLRenderer: "+A.message),A}let nt,st,Ae,R,M,G,Q,ie,J,Te,fe,Le,Ue,ae,ce,be,Me,_e,je,z,he,de,Se;function oe(){nt=new gN(F),nt.init(),he=new oI(F,nt),st=new lN(F,nt,e,he),Ae=new rI(F,nt),st.reversedDepthBuffer&&u&&Ae.buffers.depth.setReversed(!0),R=new yN(F),M=new WL,G=new sI(F,nt,Ae,M,st,he,R),Q=new mN(w),ie=new E2(F),de=new oN(F,ie),J=new vN(F,ie,R,de),Te=new SN(F,J,ie,de,R),_e=new _N(F,st,G),ce=new cN(M),fe=new GL(w,Q,nt,st,de,ce),Le=new fI(w,M),Ue=new XL,ae=new ZL(nt),Me=new sN(w,Q,Ae,Te,v,l),be=new iI(w,Te,st),Se=new hI(F,R,st,Ae),je=new aN(F,nt,R),z=new xN(F,nt,R),R.programs=fe.programs,w.capabilities=st,w.extensions=nt,w.properties=M,w.renderLists=Ue,w.shadowMap=be,w.state=Ae,w.info=R}oe(),y!==In&&(_=new wN(y,n.width,n.height,r,s));const Z=new uI(w,F);this.xr=Z,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=nt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=nt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(A){A!==void 0&&(me=A,this.setSize(re,ee,!1))},this.getSize=function(A){return A.set(re,ee)},this.setSize=function(A,W,Y=!0){if(Z.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}re=A,ee=W,n.width=Math.floor(A*me),n.height=Math.floor(W*me),Y===!0&&(n.style.width=A+"px",n.style.height=W+"px"),_!==null&&_.setSize(n.width,n.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(re*me,ee*me).floor()},this.setDrawingBufferSize=function(A,W,Y){re=A,ee=W,me=Y,n.width=Math.floor(A*Y),n.height=Math.floor(W*Y),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(y===In){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,W,Y,$){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,W,Y,$),Ae.viewport(V.copy(K).multiplyScalar(me).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,W,Y,$){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,W,Y,$),Ae.scissor(U.copy(ne).multiplyScalar(me).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(A){Ae.setScissorTest(ue=A)},this.setOpaqueSort=function(A){Ce=A},this.setTransparentSort=function(A){Be=A},this.getClearColor=function(A){return A.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,Y=!0){let $=0;if(A){let X=!1;if(H!==null){const xe=H.texture.format;X=m.has(xe)}if(X){const xe=H.texture.type,we=h.has(xe),ye=Me.getClearColor(),Re=Me.getClearAlpha(),Ne=ye.r,We=ye.g,Ke=ye.b;we?(g[0]=Ne,g[1]=We,g[2]=Ke,g[3]=Re,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=Ne,x[1]=We,x[2]=Ke,x[3]=Re,F.clearBufferiv(F.COLOR,0,x))}else $|=F.COLOR_BUFFER_BIT}W&&($|=F.DEPTH_BUFFER_BIT),Y&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),Me.dispose(),Ue.dispose(),ae.dispose(),M.dispose(),Q.dispose(),Te.dispose(),de.dispose(),Se.dispose(),fe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Zm),Z.removeEventListener("sessionend",Jm),ls.stop()};function se(A){A.preventDefault(),uv("WebGLRenderer: Context Lost."),D=!0}function ve(){uv("WebGLRenderer: Context Restored."),D=!1;const A=R.autoReset,W=be.enabled,Y=be.autoUpdate,$=be.needsUpdate,X=be.type;oe(),R.autoReset=A,be.enabled=W,be.autoUpdate=Y,be.needsUpdate=$,be.type=X}function Oe(A){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Xe(A){const W=A.target;W.removeEventListener("dispose",Xe),Dt(W)}function Dt(A){Vt(A),M.remove(A)}function Vt(A){const W=M.get(A).programs;W!==void 0&&(W.forEach(function(Y){fe.releaseProgram(Y)}),A.isShaderMaterial&&fe.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Y,$,X,xe){W===null&&(W=ct);const we=X.isMesh&&X.matrixWorld.determinant()<0,ye=BM(A,W,Y,$,X);Ae.setMaterial($,we);let Re=Y.index,Ne=1;if($.wireframe===!0){if(Re=J.getWireframeAttribute(Y),Re===void 0)return;Ne=2}const We=Y.drawRange,Ke=Y.attributes.position;let Ie=We.start*Ne,ft=(We.start+We.count)*Ne;xe!==null&&(Ie=Math.max(Ie,xe.start*Ne),ft=Math.min(ft,(xe.start+xe.count)*Ne)),Re!==null?(Ie=Math.max(Ie,0),ft=Math.min(ft,Re.count)):Ke!=null&&(Ie=Math.max(Ie,0),ft=Math.min(ft,Ke.count));const Nt=ft-Ie;if(Nt<0||Nt===1/0)return;de.setup(X,$,ye,Y,Re);let At,ht=je;if(Re!==null&&(At=ie.get(Re),ht=z,ht.setIndex(At)),X.isMesh)$.wireframe===!0?(Ae.setLineWidth($.wireframeLinewidth*xt()),ht.setMode(F.LINES)):ht.setMode(F.TRIANGLES);else if(X.isLine){let Qt=$.linewidth;Qt===void 0&&(Qt=1),Ae.setLineWidth(Qt*xt()),X.isLineSegments?ht.setMode(F.LINES):X.isLineLoop?ht.setMode(F.LINE_LOOP):ht.setMode(F.LINE_STRIP)}else X.isPoints?ht.setMode(F.POINTS):X.isSprite&&ht.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Eu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ht.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Qt=X._multiDrawStarts,Pe=X._multiDrawCounts,Cn=X._multiDrawCount,ot=Re?ie.get(Re).bytesPerElement:1,ei=M.get($).currentProgram.getUniforms();for(let wi=0;wi<Cn;wi++)ei.setValue(F,"_gl_DrawID",wi),ht.render(Qt[wi]/ot,Pe[wi])}else if(X.isInstancedMesh)ht.renderInstances(Ie,Nt,X.count);else if(Y.isInstancedBufferGeometry){const Qt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Pe=Math.min(Y.instanceCount,Qt);ht.renderInstances(Ie,Nt,Pe)}else ht.render(Ie,Nt)};function Si(A,W,Y){A.transparent===!0&&A.side===nr&&A.forceSinglePass===!1?(A.side=bn,A.needsUpdate=!0,Rl(A,W,Y),A.side=rs,A.needsUpdate=!0,Rl(A,W,Y),A.side=nr):Rl(A,W,Y)}this.compile=function(A,W,Y=null){Y===null&&(Y=A),E=ae.get(Y),E.init(W),T.push(E),Y.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),A!==Y&&A.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights();const $=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xe=X.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){const ye=xe[we];Si(ye,Y,X),$.add(ye)}else Si(xe,Y,X),$.add(xe)}),E=T.pop(),$},this.compileAsync=function(A,W,Y=null){const $=this.compile(A,W,Y);return new Promise(X=>{function xe(){if($.forEach(function(we){M.get(we).currentProgram.isReady()&&$.delete(we)}),$.size===0){X(A);return}setTimeout(xe,10)}nt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ln=null;function Mi(A){ln&&ln(A)}function Zm(){ls.stop()}function Jm(){ls.start()}const ls=new LM;ls.setAnimationLoop(Mi),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(A){ln=A,Z.setAnimationLoop(A),A===null?ls.stop():ls.start()},Z.addEventListener("sessionstart",Zm),Z.addEventListener("sessionend",Jm),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const Y=Z.enabled===!0&&Z.isPresenting===!0,$=_!==null&&(H===null||Y)&&_.begin(w,H);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(W),W=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,W,H),E=ae.get(A,T.length),E.init(W),T.push(E),vt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ke.setFromProjectionMatrix(vt,Fi,W.reversedDepth),Fe=this.localClippingEnabled,De=ce.init(this.clippingPlanes,Fe),S=Ue.get(A,b.length),S.init(),b.push(S),Z.enabled===!0&&Z.isPresenting===!0){const we=w.xr.getDepthSensingMesh();we!==null&&sd(we,W,-1/0,w.sortObjects)}sd(A,W,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(Ce,Be),Ve=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Ve&&Me.addToRenderList(S,A),this.info.render.frame++,De===!0&&ce.beginShadows();const X=E.state.shadowsArray;if(be.render(X,A,W),De===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&_.hasRenderPass())===!1){const we=S.opaque,ye=S.transmissive;if(E.setupLights(),W.isArrayCamera){const Re=W.cameras;if(ye.length>0)for(let Ne=0,We=Re.length;Ne<We;Ne++){const Ke=Re[Ne];tg(we,ye,A,Ke)}Ve&&Me.render(A);for(let Ne=0,We=Re.length;Ne<We;Ne++){const Ke=Re[Ne];eg(S,A,Ke,Ke.viewport)}}else ye.length>0&&tg(we,ye,A,W),Ve&&Me.render(A),eg(S,A,W)}H!==null&&L===0&&(G.updateMultisampleRenderTarget(H),G.updateRenderTargetMipmap(H)),$&&_.end(w),A.isScene===!0&&A.onAfterRender(w,A,W),de.resetDefaultState(),I=-1,B=null,T.pop(),T.length>0?(E=T[T.length-1],De===!0&&ce.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,b.pop(),b.length>0?S=b[b.length-1]:S=null};function sd(A,W,Y,$){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){$&&et.setFromMatrixPosition(A.matrixWorld).applyMatrix4(vt);const we=Te.update(A),ye=A.material;ye.visible&&S.push(A,we,ye,Y,et.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const we=Te.update(A),ye=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),et.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),et.copy(we.boundingSphere.center)),et.applyMatrix4(A.matrixWorld).applyMatrix4(vt)),Array.isArray(ye)){const Re=we.groups;for(let Ne=0,We=Re.length;Ne<We;Ne++){const Ke=Re[Ne],Ie=ye[Ke.materialIndex];Ie&&Ie.visible&&S.push(A,we,Ie,Y,et.z,Ke)}}else ye.visible&&S.push(A,we,ye,Y,et.z,null)}}const xe=A.children;for(let we=0,ye=xe.length;we<ye;we++)sd(xe[we],W,Y,$)}function eg(A,W,Y,$){const{opaque:X,transmissive:xe,transparent:we}=A;E.setupLightsView(Y),De===!0&&ce.setGlobalState(w.clippingPlanes,Y),$&&Ae.viewport(V.copy($)),X.length>0&&Cl(X,W,Y),xe.length>0&&Cl(xe,W,Y),we.length>0&&Cl(we,W,Y),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function tg(A,W,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[$.id]===void 0){const Ie=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[$.id]=new zi(1,1,{generateMipmaps:!0,type:Ie?mr:In,minFilter:bs,samples:Math.max(4,st.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const xe=E.state.transmissionRenderTarget[$.id],we=$.viewport||V;xe.setSize(we.z*w.transmissionResolutionScale,we.w*w.transmissionResolutionScale);const ye=w.getRenderTarget(),Re=w.getActiveCubeFace(),Ne=w.getActiveMipmapLevel();w.setRenderTarget(xe),w.getClearColor(k),q=w.getClearAlpha(),q<1&&w.setClearColor(16777215,.5),w.clear(),Ve&&Me.render(Y);const We=w.toneMapping;w.toneMapping=Bi;const Ke=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),E.setupLightsView($),De===!0&&ce.setGlobalState(w.clippingPlanes,$),Cl(A,Y,$),G.updateMultisampleRenderTarget(xe),G.updateRenderTargetMipmap(xe),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ft=0,Nt=W.length;ft<Nt;ft++){const At=W[ft],{object:ht,geometry:Qt,material:Pe,group:Cn}=At;if(Pe.side===nr&&ht.layers.test($.layers)){const ot=Pe.side;Pe.side=bn,Pe.needsUpdate=!0,ng(ht,Y,$,Qt,Pe,Cn),Pe.side=ot,Pe.needsUpdate=!0,Ie=!0}}Ie===!0&&(G.updateMultisampleRenderTarget(xe),G.updateRenderTargetMipmap(xe))}w.setRenderTarget(ye,Re,Ne),w.setClearColor(k,q),Ke!==void 0&&($.viewport=Ke),w.toneMapping=We}function Cl(A,W,Y){const $=W.isScene===!0?W.overrideMaterial:null;for(let X=0,xe=A.length;X<xe;X++){const we=A[X],{object:ye,geometry:Re,group:Ne}=we;let We=we.material;We.allowOverride===!0&&$!==null&&(We=$),ye.layers.test(Y.layers)&&ng(ye,W,Y,Re,We,Ne)}}function ng(A,W,Y,$,X,xe){A.onBeforeRender(w,W,Y,$,X,xe),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(w,W,Y,$,A,xe),X.transparent===!0&&X.side===nr&&X.forceSinglePass===!1?(X.side=bn,X.needsUpdate=!0,w.renderBufferDirect(Y,W,$,X,A,xe),X.side=rs,X.needsUpdate=!0,w.renderBufferDirect(Y,W,$,X,A,xe),X.side=nr):w.renderBufferDirect(Y,W,$,X,A,xe),A.onAfterRender(w,W,Y,$,X,xe)}function Rl(A,W,Y){W.isScene!==!0&&(W=ct);const $=M.get(A),X=E.state.lights,xe=E.state.shadowsArray,we=X.state.version,ye=fe.getParameters(A,X.state,xe,W,Y),Re=fe.getProgramCacheKey(ye);let Ne=$.programs;$.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,$.fog=W.fog;const We=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;$.envMap=Q.get(A.envMap||$.environment,We),$.envMapRotation=$.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Ne===void 0&&(A.addEventListener("dispose",Xe),Ne=new Map,$.programs=Ne);let Ke=Ne.get(Re);if(Ke!==void 0){if($.currentProgram===Ke&&$.lightsStateVersion===we)return rg(A,ye),Ke}else ye.uniforms=fe.getUniforms(A),A.onBeforeCompile(ye,w),Ke=fe.acquireProgram(ye,Re),Ne.set(Re,Ke),$.uniforms=ye.uniforms;const Ie=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=ce.uniform),rg(A,ye),$.needsLights=VM(A),$.lightsStateVersion=we,$.needsLights&&(Ie.ambientLightColor.value=X.state.ambient,Ie.lightProbe.value=X.state.probe,Ie.directionalLights.value=X.state.directional,Ie.directionalLightShadows.value=X.state.directionalShadow,Ie.spotLights.value=X.state.spot,Ie.spotLightShadows.value=X.state.spotShadow,Ie.rectAreaLights.value=X.state.rectArea,Ie.ltc_1.value=X.state.rectAreaLTC1,Ie.ltc_2.value=X.state.rectAreaLTC2,Ie.pointLights.value=X.state.point,Ie.pointLightShadows.value=X.state.pointShadow,Ie.hemisphereLights.value=X.state.hemi,Ie.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ie.spotLightMatrix.value=X.state.spotLightMatrix,Ie.spotLightMap.value=X.state.spotLightMap,Ie.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=Ke,$.uniformsList=null,Ke}function ig(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Wc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function rg(A,W){const Y=M.get(A);Y.outputColorSpace=W.outputColorSpace,Y.batching=W.batching,Y.batchingColor=W.batchingColor,Y.instancing=W.instancing,Y.instancingColor=W.instancingColor,Y.instancingMorph=W.instancingMorph,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function BM(A,W,Y,$,X){W.isScene!==!0&&(W=ct),G.resetTextureUnits();const xe=W.fog,we=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?W.environment:null,ye=H===null?w.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Jo,Re=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ne=Q.get($.envMap||we,Re),We=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ke=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ie=!!Y.morphAttributes.position,ft=!!Y.morphAttributes.normal,Nt=!!Y.morphAttributes.color;let At=Bi;$.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(At=w.toneMapping);const ht=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Qt=ht!==void 0?ht.length:0,Pe=M.get($),Cn=E.state.lights;if(De===!0&&(Fe===!0||A!==B)){const Ht=A===B&&$.id===I;ce.setState($,A,Ht)}let ot=!1;$.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Cn.state.version||Pe.outputColorSpace!==ye||X.isBatchedMesh&&Pe.batching===!1||!X.isBatchedMesh&&Pe.batching===!0||X.isBatchedMesh&&Pe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Pe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Pe.instancing===!1||!X.isInstancedMesh&&Pe.instancing===!0||X.isSkinnedMesh&&Pe.skinning===!1||!X.isSkinnedMesh&&Pe.skinning===!0||X.isInstancedMesh&&Pe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pe.instancingMorph===!1&&X.morphTexture!==null||Pe.envMap!==Ne||$.fog===!0&&Pe.fog!==xe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ce.numPlanes||Pe.numIntersection!==ce.numIntersection)||Pe.vertexAlphas!==We||Pe.vertexTangents!==Ke||Pe.morphTargets!==Ie||Pe.morphNormals!==ft||Pe.morphColors!==Nt||Pe.toneMapping!==At||Pe.morphTargetsCount!==Qt)&&(ot=!0):(ot=!0,Pe.__version=$.version);let ei=Pe.currentProgram;ot===!0&&(ei=Rl($,W,X));let wi=!1,cs=!1,js=!1;const mt=ei.getUniforms(),Xt=Pe.uniforms;if(Ae.useProgram(ei.program)&&(wi=!0,cs=!0,js=!0),$.id!==I&&(I=$.id,cs=!0),wi||B!==A){Ae.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),mt.setValue(F,"projectionMatrix",A.projectionMatrix),mt.setValue(F,"viewMatrix",A.matrixWorldInverse);const yr=mt.map.cameraPosition;yr!==void 0&&yr.setValue(F,Ge.setFromMatrixPosition(A.matrixWorld)),st.logarithmicDepthBuffer&&mt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&mt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,cs=!0,js=!0)}if(Pe.needsLights&&(Cn.state.directionalShadowMap.length>0&&mt.setValue(F,"directionalShadowMap",Cn.state.directionalShadowMap,G),Cn.state.spotShadowMap.length>0&&mt.setValue(F,"spotShadowMap",Cn.state.spotShadowMap,G),Cn.state.pointShadowMap.length>0&&mt.setValue(F,"pointShadowMap",Cn.state.pointShadowMap,G)),X.isSkinnedMesh){mt.setOptional(F,X,"bindMatrix"),mt.setOptional(F,X,"bindMatrixInverse");const Ht=X.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),mt.setValue(F,"boneTexture",Ht.boneTexture,G))}X.isBatchedMesh&&(mt.setOptional(F,X,"batchingTexture"),mt.setValue(F,"batchingTexture",X._matricesTexture,G),mt.setOptional(F,X,"batchingIdTexture"),mt.setValue(F,"batchingIdTexture",X._indirectTexture,G),mt.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&mt.setValue(F,"batchingColorTexture",X._colorsTexture,G));const xr=Y.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&_e.update(X,Y,ei),(cs||Pe.receiveShadow!==X.receiveShadow)&&(Pe.receiveShadow=X.receiveShadow,mt.setValue(F,"receiveShadow",X.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&W.environment!==null&&(Xt.envMapIntensity.value=W.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=mI()),cs&&(mt.setValue(F,"toneMappingExposure",w.toneMappingExposure),Pe.needsLights&&zM(Xt,js),xe&&$.fog===!0&&Le.refreshFogUniforms(Xt,xe),Le.refreshMaterialUniforms(Xt,$,me,ee,E.state.transmissionRenderTarget[A.id]),Wc.upload(F,ig(Pe),Xt,G)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Wc.upload(F,ig(Pe),Xt,G),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&mt.setValue(F,"center",X.center),mt.setValue(F,"modelViewMatrix",X.modelViewMatrix),mt.setValue(F,"normalMatrix",X.normalMatrix),mt.setValue(F,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ht=$.uniformsGroups;for(let yr=0,Xs=Ht.length;yr<Xs;yr++){const sg=Ht[yr];Se.update(sg,ei),Se.bind(sg,ei)}}return ei}function zM(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function VM(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,W,Y){const $=M.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=W,M.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Y,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const Y=M.get(A);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0};const HM=F.createFramebuffer();this.setRenderTarget=function(A,W=0,Y=0){H=A,C=W,L=Y;let $=null,X=!1,xe=!1;if(A){const ye=M.get(A);if(ye.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(F.FRAMEBUFFER,ye.__webglFramebuffer),V.copy(A.viewport),U.copy(A.scissor),O=A.scissorTest,Ae.viewport(V),Ae.scissor(U),Ae.setScissorTest(O),I=-1;return}else if(ye.__webglFramebuffer===void 0)G.setupRenderTarget(A);else if(ye.__hasExternalTextures)G.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(ye.__boundDepthTexture!==We){if(We!==null&&M.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(A)}}const Re=A.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(xe=!0);const Ne=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ne[W])?$=Ne[W][Y]:$=Ne[W],X=!0):A.samples>0&&G.useMultisampledRTT(A)===!1?$=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Ne)?$=Ne[Y]:$=Ne,V.copy(A.viewport),U.copy(A.scissor),O=A.scissorTest}else V.copy(K).multiplyScalar(me).floor(),U.copy(ne).multiplyScalar(me).floor(),O=ue;if(Y!==0&&($=HM),Ae.bindFramebuffer(F.FRAMEBUFFER,$)&&Ae.drawBuffers(A,$),Ae.viewport(V),Ae.scissor(U),Ae.setScissorTest(O),X){const ye=M.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,ye.__webglTexture,Y)}else if(xe){const ye=W;for(let Re=0;Re<A.textures.length;Re++){const Ne=M.get(A.textures[Re]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Re,Ne.__webglTexture,Y,ye)}}else if(A!==null&&Y!==0){const ye=M.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ye.__webglTexture,Y)}I=-1},this.readRenderTargetPixels=function(A,W,Y,$,X,xe,we,ye=0){if(!(A&&A.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){Ae.bindFramebuffer(F.FRAMEBUFFER,Re);try{const Ne=A.textures[ye],We=Ne.format,Ke=Ne.type;if(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye),!st.textureFormatReadable(We)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Ke)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-$&&Y>=0&&Y<=A.height-X&&F.readPixels(W,Y,$,X,he.convert(We),he.convert(Ke),xe)}finally{const Ne=H!==null?M.get(H).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(A,W,Y,$,X,xe,we,ye=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re)if(W>=0&&W<=A.width-$&&Y>=0&&Y<=A.height-X){Ae.bindFramebuffer(F.FRAMEBUFFER,Re);const Ne=A.textures[ye],We=Ne.format,Ke=Ne.type;if(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye),!st.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ie),F.bufferData(F.PIXEL_PACK_BUFFER,xe.byteLength,F.STREAM_READ),F.readPixels(W,Y,$,X,he.convert(We),he.convert(Ke),0);const ft=H!==null?M.get(H).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,ft);const Nt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await IP(F,Nt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ie),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xe),F.deleteBuffer(Ie),F.deleteSync(Nt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,Y=0){const $=Math.pow(2,-Y),X=Math.floor(A.image.width*$),xe=Math.floor(A.image.height*$),we=W!==null?W.x:0,ye=W!==null?W.y:0;G.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,we,ye,X,xe),Ae.unbindTexture()};const GM=F.createFramebuffer(),WM=F.createFramebuffer();this.copyTextureToTexture=function(A,W,Y=null,$=null,X=0,xe=0){let we,ye,Re,Ne,We,Ke,Ie,ft,Nt;const At=A.isCompressedTexture?A.mipmaps[xe]:A.image;if(Y!==null)we=Y.max.x-Y.min.x,ye=Y.max.y-Y.min.y,Re=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,We=Y.min.y,Ke=Y.isBox3?Y.min.z:0;else{const Xt=Math.pow(2,-X);we=Math.floor(At.width*Xt),ye=Math.floor(At.height*Xt),A.isDataArrayTexture?Re=At.depth:A.isData3DTexture?Re=Math.floor(At.depth*Xt):Re=1,Ne=0,We=0,Ke=0}$!==null?(Ie=$.x,ft=$.y,Nt=$.z):(Ie=0,ft=0,Nt=0);const ht=he.convert(W.format),Qt=he.convert(W.type);let Pe;W.isData3DTexture?(G.setTexture3D(W,0),Pe=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(G.setTexture2DArray(W,0),Pe=F.TEXTURE_2D_ARRAY):(G.setTexture2D(W,0),Pe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Cn=F.getParameter(F.UNPACK_ROW_LENGTH),ot=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ei=F.getParameter(F.UNPACK_SKIP_PIXELS),wi=F.getParameter(F.UNPACK_SKIP_ROWS),cs=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,At.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),F.pixelStorei(F.UNPACK_SKIP_ROWS,We),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ke);const js=A.isDataArrayTexture||A.isData3DTexture,mt=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Xt=M.get(A),xr=M.get(W),Ht=M.get(Xt.__renderTarget),yr=M.get(xr.__renderTarget);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,yr.__webglFramebuffer);for(let Xs=0;Xs<Re;Xs++)js&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,M.get(A).__webglTexture,X,Ke+Xs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,M.get(W).__webglTexture,xe,Nt+Xs)),F.blitFramebuffer(Ne,We,we,ye,Ie,ft,we,ye,F.DEPTH_BUFFER_BIT,F.NEAREST);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||M.has(A)){const Xt=M.get(A),xr=M.get(W);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,GM),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,WM);for(let Ht=0;Ht<Re;Ht++)js?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.__webglTexture,X,Ke+Ht):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Xt.__webglTexture,X),mt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xr.__webglTexture,xe,Nt+Ht):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xr.__webglTexture,xe),X!==0?F.blitFramebuffer(Ne,We,we,ye,Ie,ft,we,ye,F.COLOR_BUFFER_BIT,F.NEAREST):mt?F.copyTexSubImage3D(Pe,xe,Ie,ft,Nt+Ht,Ne,We,we,ye):F.copyTexSubImage2D(Pe,xe,Ie,ft,Ne,We,we,ye);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else mt?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Pe,xe,Ie,ft,Nt,we,ye,Re,ht,Qt,At.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Pe,xe,Ie,ft,Nt,we,ye,Re,ht,At.data):F.texSubImage3D(Pe,xe,Ie,ft,Nt,we,ye,Re,ht,Qt,At):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xe,Ie,ft,we,ye,ht,Qt,At.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xe,Ie,ft,At.width,At.height,ht,At.data):F.texSubImage2D(F.TEXTURE_2D,xe,Ie,ft,we,ye,ht,Qt,At);F.pixelStorei(F.UNPACK_ROW_LENGTH,Cn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ei),F.pixelStorei(F.UNPACK_SKIP_ROWS,wi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,cs),xe===0&&W.generateMipmaps&&F.generateMipmap(Pe),Ae.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&G.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?G.setTextureCube(A,0):A.isData3DTexture?G.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?G.setTexture2DArray(A,0):G.setTexture2D(A,0),Ae.unbindTexture()},this.resetState=function(){C=0,L=0,H=null,Ae.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}function vI(){const t=N.useRef(null);return N.useEffect(()=>{const e=t.current;if(!e)return;const n=new gI({canvas:e,alpha:!0,antialias:!1});n.setPixelRatio(1),n.setSize(window.innerWidth,window.innerHeight),n.setClearColor(0,0);const i=new KP,r=new Ln(60,window.innerWidth/window.innerHeight,.1,100);r.position.set(0,0,10),i.add(new y2(16777215,.08)),[{color:3718648,pos:[0,0,6],intensity:1},{color:8490232,pos:[-8,4,2],intensity:.7},{color:3462041,pos:[8,-4,2],intensity:.7}].forEach(({color:_,pos:w,intensity:D})=>{const C=new x2(_,D,25);C.position.set(...w),i.add(C)});const o=[3718648,8490232,3462041,10980346,6809849,16478597],a=new Qm(1,0),l=Array.from({length:12},(_,w)=>{const D=o[w%o.length],C=.3+Math.random()*.9,L=new _i(a,new h2({color:D,transparent:!0,opacity:.1,shininess:80})),H=new _i(a,new qm({color:D,wireframe:!0,transparent:!0,opacity:.28})),I=(Math.random()-.5)*22,B=(Math.random()-.5)*13,V=(Math.random()-.5)*8-4;return L.position.set(I,B,V),L.scale.setScalar(C),H.position.set(I,B,V),H.scale.setScalar(C*1.02),i.add(L),i.add(H),{solid:L,wire:H,speed:new j((Math.random()-.5)*.3,(Math.random()-.5)*.2,(Math.random()-.5)*.15),floatSpeed:.3+Math.random()*.4,floatAmp:.15+Math.random()*.3,baseY:B,phase:Math.random()*Math.PI*2}}),c=120,d=new Float32Array(c*3),f=new Float32Array(c*3),u=[new Ze(3718648),new Ze(8490232),new Ze(3462041)];for(let _=0;_<c;_++){d[_*3]=(Math.random()-.5)*28,d[_*3+1]=(Math.random()-.5)*18,d[_*3+2]=(Math.random()-.5)*12-3;const w=u[_%3];f[_*3]=w.r,f[_*3+1]=w.g,f[_*3+2]=w.b}const p=new Jn;p.setAttribute("position",new qn(d,3)),p.setAttribute("color",new qn(f,3));const v=new o2(p,new TM({size:.055,vertexColors:!0,transparent:!0,opacity:.55}));i.add(v);const y={x:0,y:0},m={x:0,y:0},h=_=>{y.x=(_.clientX/window.innerWidth-.5)*2.5,y.y=-(_.clientY/window.innerHeight-.5)*1.5};window.addEventListener("mousemove",h);const g=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",g);let x,S=0;const E=1e3/30,b=new M2,T=_=>{if(x=requestAnimationFrame(T),_-S<E)return;S=_;const w=b.getElapsedTime();m.x+=(y.x-m.x)*.025,m.y+=(y.y-m.y)*.025,r.position.x=m.x,r.position.y=m.y,r.lookAt(0,0,0),l.forEach(D=>{D.solid.rotation.x+=D.speed.x*.033,D.solid.rotation.y+=D.speed.y*.033,D.solid.rotation.z+=D.speed.z*.033,D.wire.rotation.copy(D.solid.rotation);const L=D.baseY+Math.sin(w*D.floatSpeed+D.phase)*D.floatAmp;D.solid.position.y=L,D.wire.position.y=L}),v.rotation.y=w*.01,v.rotation.x=w*.005,n.render(i,r)};return x=requestAnimationFrame(T),()=>{cancelAnimationFrame(x),window.removeEventListener("mousemove",h),window.removeEventListener("resize",g),n.dispose(),a.dispose(),p.dispose()}},[]),P.jsxs("div",{className:"fixed inset-0 z-0 pointer-events-none","aria-hidden":!0,children:[P.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#030610] via-[#060c1a] to-[#030810]"}),P.jsx("div",{className:"absolute top-1/4  left-1/3  w-[500px] h-[500px] bg-blue-700/5   rounded-full blur-[130px]"}),P.jsx("div",{className:"absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-violet-700/5 rounded-full blur-[110px]"}),P.jsx("canvas",{ref:t,className:"absolute inset-0 w-full h-full"}),P.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"})]})}const xI=[{emoji:"☕",value:"∞",label:"Cups of coffee",sub:"no upper bound found"},{emoji:"🐛",value:"847+",label:"Bugs squashed",sub:"console.log helped"},{emoji:"🚀",value:"3",label:"Friday deploys",sub:"survived all of them"},{emoji:"📚",value:"daily",label:"Stack Overflow",sub:'"researching"'}],yI=["Full Stack Engineer with 7.5+ years — Java/Spring Boot microservices and React/TypeScript frontends across Fortune 500 clients (J&J, Verizon, Amex, Cambridge, Airbus)","Architected Micro Frontend platforms with Module Federation across 8–10 domain-specific MFEs, reducing inter-team integration time by ~40%","Built event-driven microservices with Kafka, Redis, and DDD patterns for high-traffic telecom and BFSI workflows","Integrated GenAI/RAG pipelines, MCP (Model Context Protocol), and Agentic AI into enterprise IGA and customer support platforms","End-to-end ownership of features: requirements → system design → coding → deployment → observability",'100% unit test coverage maintained on critical modules (and by "maintained" I mean I wrote the tests after the code worked 🙃)'],_I=[{title:"Micro Frontend Platforms",description:"Led MFE architecture with Module Federation 2 + Nx monorepo — boilerplate MFEs, shared component contracts, pre-commit analytics, and independent deployments across 8–10 domain teams."},{title:"Java/Spring Boot Microservices",description:"DDD-based services with Kafka event pipelines, Resilience4j circuit breakers, gRPC inter-service communication, BFF pattern, and Spring Security (JWT/OAuth2)."},{title:"GenAI & RAG Integration",description:"RAG pipelines, embedding models, Qdrant vector DB, and MCP for Agentic AI workflows in enterprise IGA and customer support platforms at J&J and Verizon."},{title:"Cloud-Native & Serverless",description:"Serverless SSO platforms on AWS Lambda + API Gateway + DynamoDB serving 5M+ users; IaC with Terraform; CI/CD with Jenkins, GitLab CI, and Azure DevOps."}],SI=[{icon:"⚙️",name:"Distributed Task Scheduler",stack:["Java","Spring Boot","Redis","Kafka","PostgreSQL","Docker"],description:"DAG-based distributed workflow engine for ETL pipelines and microservice orchestration with retry, exponential backoff, dead-letter queues, horizontal scaling, and Prometheus/Grafana observability.",repo:"https://github.com/mrajkishor/Distributed-Task-Scheduler"},{icon:"🎨",name:"RDCLib — React Design System",stack:["React","TypeScript","React Native","Storybook"],description:"Shared component library for React Web + React Native with polymorphic components, token-based styling, cross-platform reuse, and Storybook-driven documentation.",repo:"https://github.com/mrajkishor/rdclib"},{icon:"📦",name:"IMSM + ShopSync",stack:["Next.js","Node.js","Spring Framework","PostgreSQL"],description:"Inventory and invoicing platform for MSMEs — order lifecycle management, invoice generation, logistics planning, and AI-based inventory forecasting (WIP). Live at mrk331.online.",repo:"https://github.com/mrajkishor/IMS-Invoice-services"},{icon:"🧠",name:"StackSynapse",stack:["RAG","Vector Search","LLM APIs"],description:"AI-powered e-learning platform using Retrieval-Augmented Generation. Turns documents into a searchable knowledge base with semantic search and contextual answers.",repo:"https://github.com/mrajkishor/StackSynapse"},{icon:"✍️",name:"Clarity",stack:["React","TypeScript"],description:"Personal productivity app using a rolling-wave planning model for adaptive task and goal management across short, medium, and long-term horizons.",repo:"https://github.com/mrajkishor/Clarity"}],MI=[{company:"Cognizant Technology Solutions",role:"Associate – Projects · Full Stack Developer",period:"Jul 2022 – Present",clients:["Johnson & Johnson","Verizon","American Express","Cambridge"],highlights:["IGA platform for ~150K J&J employees with RAG/MCP/Agentic AI integration","MFE architecture for Verizon Retail Assisted Sales (8–10 domain MFEs)","SOAP → DDD microservices migration for Verizon customer support (25K reps)","Serverless SSO for Cambridge serving 5M+ educators and students"]},{company:"Capgemini Technology Services",role:"Associate Consultant · Full Stack Developer",period:"Jun 2018 – Jul 2022",clients:["Airbus","Heathrow Airport","Michelin","Edwards Life Sciences"],highlights:["Analytics portal for ~10K Airbus stakeholders (React + Spring Boot + PostgreSQL)","B2B SaaS intelligent search product across 5–6 enterprise clients","Conversational AI virtual assistant with BERT/SQUAD + Elasticsearch","Maturity assessment portal with dynamic Highcharts dashboards"]}],wI=["Distributed job orchestration","Design systems (SCARD approach — Scalable, Consistent, Available, Reliable, Durable)","MSME platforms","AI-assisted learning (RAG)"],EI=[{label:"About",href:"#about"},{label:"Stack",href:"#stack"},{label:"Work",href:"#work"},{label:"Projects",href:"#projects"},{label:"Experience",href:"#experience"},{label:"Contact",href:"#contact"}],bI=()=>P.jsxs("div",{className:"min-h-screen bg-background relative",children:[P.jsx(vI,{}),P.jsx("nav",{className:"sticky top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/8",children:P.jsxs("div",{className:"max-w-5xl mx-auto px-6 py-3 flex items-center justify-between gap-4",children:[P.jsx("span",{className:"font-mono text-sm font-semibold text-primary tracking-widest shrink-0",children:"raj.dev"}),P.jsx("div",{className:"hidden md:flex items-center gap-6",children:EI.map(t=>P.jsx("a",{href:t.href,className:"text-xs font-mono text-muted-foreground hover:text-foreground transition-colors tracking-wide",children:t.label},t.href))}),P.jsxs("a",{href:"https://mrk331.online/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent/70 text-xs font-mono font-medium transition-all shrink-0",children:[P.jsx(Ud,{className:"w-3.5 h-3.5"}),"mrk331.online"]})]})}),P.jsxs("main",{className:"relative z-10 max-w-5xl mx-auto px-6 md:px-8 md:px-12 pb-24",children:[P.jsx(VR,{}),P.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 mb-2 opacity-0 animate-fade-in",style:{animationDelay:"400ms",animationFillMode:"forwards"},children:xI.map(t=>P.jsxs("div",{className:"glass rounded-xl p-4 text-center hover:border-primary/25 hover:-translate-y-0.5 transition-all duration-200 cursor-default group",children:[P.jsx("div",{className:"text-2xl mb-1",children:t.emoji}),P.jsx("div",{className:"text-lg font-bold text-gradient leading-none",children:t.value}),P.jsx("div",{className:"text-xs font-medium text-foreground mt-1",children:t.label}),P.jsx("div",{className:"text-[10px] text-muted-foreground mt-0.5 italic",children:t.sub})]},t.label))}),P.jsx(us,{title:"About Me",id:"about",delay:100,children:P.jsx("ul",{className:"space-y-3",children:yI.map((t,e)=>P.jsxs("li",{className:"flex items-start gap-3 text-muted-foreground opacity-0 animate-slide-in",style:{animationDelay:`${200+e*70}ms`,animationFillMode:"forwards"},children:[P.jsx("span",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"}),P.jsx("span",{className:"leading-relaxed text-sm",children:t})]},e))})}),P.jsx(us,{title:"Tech Stack",id:"stack",delay:300,children:P.jsx(GR,{})}),P.jsx(us,{title:"Highlighted Work",id:"work",delay:500,children:P.jsx("div",{className:"grid md:grid-cols-2 gap-3",children:_I.map((t,e)=>P.jsx(WR,{title:t.title,description:t.description,delay:600+e*80},t.title))})}),P.jsxs(us,{title:"Side Projects",id:"projects",delay:700,children:[P.jsxs("a",{href:"https://mrk331.online/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between gap-3 mb-4 px-4 py-3 rounded-xl border border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-all group",children:[P.jsxs("div",{children:[P.jsx("p",{className:"text-xs font-mono text-accent font-semibold",children:"mrk331.online"}),P.jsx("p",{className:"text-xs text-muted-foreground mt-0.5",children:"Independent software products — practical tools for developers, SMEs & productivity enthusiasts"})]}),P.jsx(Ud,{className:"w-4 h-4 text-accent shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]}),P.jsx("div",{className:"grid md:grid-cols-2 gap-3",children:SI.map((t,e)=>P.jsxs("div",{className:"group glass rounded-xl p-5 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/8 hover:-translate-y-0.5 transition-all duration-300 opacity-0 animate-fade-in",style:{animationDelay:`${800+e*70}ms`,animationFillMode:"forwards"},children:[P.jsxs("div",{className:"flex items-start justify-between gap-2 mb-2",children:[P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx("span",{className:"text-base",children:t.icon}),P.jsx("h3",{className:"text-sm font-semibold text-foreground group-hover:text-primary transition-colors",children:t.name})]}),P.jsx("a",{href:t.repo,target:"_blank",rel:"noopener noreferrer",className:"shrink-0 text-muted-foreground hover:text-primary transition-colors mt-0.5","aria-label":`View ${t.name} on GitHub`,children:P.jsx(Ud,{className:"w-3.5 h-3.5"})})]}),P.jsx("div",{className:"flex flex-wrap gap-1 mb-3",children:t.stack.map(n=>P.jsx("span",{className:"tech-pill bg-primary/8 text-primary/80 border border-primary/15 text-[10px]",children:n},n))}),P.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:t.description})]},t.name))})]}),P.jsx(us,{title:"Work Experience",id:"experience",delay:900,children:P.jsx("div",{className:"space-y-6",children:MI.map((t,e)=>P.jsxs("div",{className:"glass rounded-xl p-6 opacity-0 animate-fade-in",style:{animationDelay:`${1e3+e*120}ms`,animationFillMode:"forwards"},children:[P.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3",children:[P.jsxs("div",{children:[P.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[P.jsx(yb,{className:"w-4 h-4 text-primary shrink-0"}),P.jsx("span",{className:"font-semibold text-foreground text-sm",children:t.company})]}),P.jsx("p",{className:"text-xs text-primary font-mono ml-6",children:t.role})]}),P.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-mono text-muted-foreground shrink-0 ml-6 sm:ml-0",children:[P.jsx(_b,{className:"w-3.5 h-3.5"}),t.period]})]}),P.jsx("div",{className:"flex flex-wrap gap-1.5 mb-3 ml-6",children:t.clients.map(n=>P.jsx("span",{className:"tech-pill bg-accent/8 text-accent/80 border border-accent/15 text-[10px]",children:n},n))}),P.jsx("ul",{className:"space-y-1.5 ml-6",children:t.highlights.map((n,i)=>P.jsxs("li",{className:"flex items-start gap-2 text-xs text-muted-foreground",children:[P.jsx("span",{className:"mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/50 shrink-0"}),n]},i))})]},t.company))})}),P.jsx(us,{title:"Currently Exploring",delay:1100,children:P.jsx("ul",{className:"space-y-2",children:wI.map((t,e)=>P.jsxs("li",{className:"flex items-center gap-3 text-muted-foreground text-sm opacity-0 animate-slide-in",style:{animationDelay:`${1200+e*60}ms`,animationFillMode:"forwards"},children:[P.jsx("span",{className:"text-accent font-bold",children:"→"}),P.jsx("span",{children:t})]},e))})}),P.jsx(us,{title:"Contact",id:"contact",delay:1300,children:P.jsxs("div",{className:"glass rounded-xl p-6 opacity-0 animate-fade-in",style:{animationDelay:"1400ms",animationFillMode:"forwards"},children:[P.jsx("div",{className:"grid sm:grid-cols-3 gap-4",children:[{label:"Email",value:"mrajkishor331@gmail.com",href:"mailto:mrajkishor331@gmail.com",icon:"📧"},{label:"LinkedIn",value:"rajkishormaharana",href:"https://linkedin.com/in/rajkishormaharana",icon:"💼"},{label:"GitHub",value:"mrajkishor",href:"https://github.com/mrajkishor",icon:"🐙"}].map(t=>P.jsxs("a",{href:t.href,target:t.href.startsWith("http")?"_blank":void 0,rel:t.href.startsWith("http")?"noopener noreferrer":void 0,className:"flex items-center gap-3 p-3 rounded-lg bg-secondary/40 hover:bg-secondary/70 hover:text-primary border border-transparent hover:border-primary/20 transition-all group",children:[P.jsx("span",{className:"text-lg",children:t.icon}),P.jsxs("div",{children:[P.jsx("p",{className:"text-xs text-muted-foreground",children:t.label}),P.jsx("p",{className:"text-xs font-mono text-foreground group-hover:text-primary transition-colors truncate",children:t.value})]})]},t.label))}),P.jsxs("p",{className:"mt-4 text-xs text-muted-foreground italic text-center flex items-center justify-center gap-2",children:[P.jsx(bb,{className:"w-3.5 h-3.5"})," Hyderabad, India · Open to interesting conversations about full-stack architecture, distributed systems, and great products."]})]})})]}),P.jsx("footer",{className:"relative z-10 max-w-5xl mx-auto px-6 py-6 text-center",children:P.jsxs("p",{className:"text-[11px] font-mono text-muted-foreground/50",children:["No bugs were harmed in the making of this portfolio. ·"," ",P.jsx("span",{className:"text-primary/50",children:"Built with React + ☕ + questionable commit messages"})]})}),P.jsx(JR,{})]}),TI=()=>P.jsx(bI,{}),AI=()=>{const t=nM();return N.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),P.jsx("div",{className:"flex min-h-screen items-center justify-center bg-muted",children:P.jsxs("div",{className:"text-center",children:[P.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),P.jsx("p",{className:"mb-4 text-xl text-muted-foreground",children:"Oops! Page not found"}),P.jsx("a",{href:"/",className:"text-primary underline hover:text-primary/90",children:"Return to Home"})]})})},CI=new QC,RI=()=>P.jsx(JC,{client:CI,children:P.jsxs(AC,{children:[P.jsx(uT,{}),P.jsx(HT,{}),P.jsx(kR,{children:P.jsxs(FR,{children:[P.jsx(Rh,{path:"/",element:P.jsx(TI,{})}),P.jsx(Rh,{path:"*",element:P.jsx(AI,{})})]})})]})});E_(document.getElementById("root")).render(P.jsx(RI,{}));
