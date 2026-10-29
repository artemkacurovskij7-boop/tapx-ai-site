(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Gg={exports:{}},bu={},Wg={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),j0=Symbol.for("react.portal"),K0=Symbol.for("react.fragment"),Z0=Symbol.for("react.strict_mode"),J0=Symbol.for("react.profiler"),Q0=Symbol.for("react.provider"),ex=Symbol.for("react.context"),tx=Symbol.for("react.forward_ref"),nx=Symbol.for("react.suspense"),ix=Symbol.for("react.memo"),rx=Symbol.for("react.lazy"),dp=Symbol.iterator;function sx(t){return t===null||typeof t!="object"?null:(t=dp&&t[dp]||t["@@iterator"],typeof t=="function"?t:null)}var Xg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yg=Object.assign,$g={};function _o(t,e,n){this.props=t,this.context=e,this.refs=$g,this.updater=n||Xg}_o.prototype.isReactComponent={};_o.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_o.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qg(){}qg.prototype=_o.prototype;function sh(t,e,n){this.props=t,this.context=e,this.refs=$g,this.updater=n||Xg}var oh=sh.prototype=new qg;oh.constructor=sh;Yg(oh,_o.prototype);oh.isPureReactComponent=!0;var hp=Array.isArray,jg=Object.prototype.hasOwnProperty,ah={current:null},Kg={key:!0,ref:!0,__self:!0,__source:!0};function Zg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jg.call(e,i)&&!Kg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ba,type:t,key:s,ref:o,props:r,_owner:ah.current}}function ox(t,e){return{$$typeof:ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ba}function ax(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pp=/\/+/g;function Ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ax(""+t.key):e.toString(36)}function bl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ba:case j0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ju(o,0):i,hp(r)?(n="",t!=null&&(n=t.replace(pp,"$&/")+"/"),bl(r,e,n,"",function(u){return u})):r!=null&&(lh(r)&&(r=ox(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(pp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",hp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ju(s,a);o+=bl(s,e,n,l,r)}else if(l=sx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ju(s,a++),o+=bl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ha(t,e,n){if(t==null)return t;var i=[],r=0;return bl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function lx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},Dl={transition:null},ux={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:Dl,ReactCurrentOwner:ah};function Jg(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!lh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=_o;qe.Fragment=K0;qe.Profiler=J0;qe.PureComponent=sh;qe.StrictMode=Z0;qe.Suspense=nx;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ux;qe.act=Jg;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Yg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ah.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jg.call(e,l)&&!Kg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ba,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:ex,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Q0,_context:t},t.Consumer=t};qe.createElement=Zg;qe.createFactory=function(t){var e=Zg.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:tx,render:t}};qe.isValidElement=lh;qe.lazy=function(t){return{$$typeof:rx,_payload:{_status:-1,_result:t},_init:lx}};qe.memo=function(t,e){return{$$typeof:ix,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Dl.transition;Dl.transition={};try{t()}finally{Dl.transition=e}};qe.unstable_act=Jg;qe.useCallback=function(t,e){return cn.current.useCallback(t,e)};qe.useContext=function(t){return cn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return cn.current.useEffect(t,e)};qe.useId=function(){return cn.current.useId()};qe.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return cn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};qe.useRef=function(t){return cn.current.useRef(t)};qe.useState=function(t){return cn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return cn.current.useTransition()};qe.version="18.3.1";Wg.exports=qe;var xi=Wg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cx=xi,fx=Symbol.for("react.element"),dx=Symbol.for("react.fragment"),hx=Object.prototype.hasOwnProperty,px=cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mx={key:!0,ref:!0,__self:!0,__source:!0};function Qg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)hx.call(e,i)&&!mx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:fx,type:t,key:s,ref:o,props:r,_owner:px.current}}bu.Fragment=dx;bu.jsx=Qg;bu.jsxs=Qg;Gg.exports=bu;var An=Gg.exports,lf={},ev={exports:{}},In={},tv={exports:{}},nv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,Y){var K=b.length;b.push(Y);e:for(;0<K;){var ne=K-1>>>1,me=b[ne];if(0<r(me,Y))b[ne]=Y,b[K]=me,K=ne;else break e}}function n(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var Y=b[0],K=b.pop();if(K!==Y){b[0]=K;e:for(var ne=0,me=b.length,Fe=me>>>1;ne<Fe;){var $=2*(ne+1)-1,Q=b[$],ve=$+1,ie=b[ve];if(0>r(Q,K))ve<me&&0>r(ie,Q)?(b[ne]=ie,b[ve]=K,ne=ve):(b[ne]=Q,b[$]=K,ne=$);else if(ve<me&&0>r(ie,K))b[ne]=ie,b[ve]=K,ne=ve;else break e}}return Y}function r(b,Y){var K=b.sortIndex-Y.sortIndex;return K!==0?K:b.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(b){for(var Y=n(u);Y!==null;){if(Y.callback===null)i(u);else if(Y.startTime<=b)i(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function x(b){if(y=!1,_(b),!g)if(n(l)!==null)g=!0,H(C);else{var Y=n(u);Y!==null&&q(x,Y.startTime-b)}}function C(b,Y){g=!1,y&&(y=!1,f(P),P=-1),p=!0;var K=d;try{for(_(Y),h=n(l);h!==null&&(!(h.expirationTime>Y)||b&&!L());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,d=h.priorityLevel;var me=ne(h.expirationTime<=Y);Y=t.unstable_now(),typeof me=="function"?h.callback=me:h===n(l)&&i(l),_(Y)}else i(l);h=n(l)}if(h!==null)var Fe=!0;else{var $=n(u);$!==null&&q(x,$.startTime-Y),Fe=!1}return Fe}finally{h=null,d=K,p=!1}}var w=!1,A=null,P=-1,T=5,S=-1;function L(){return!(t.unstable_now()-S<T)}function G(){if(A!==null){var b=t.unstable_now();S=b;var Y=!0;try{Y=A(!0,b)}finally{Y?z():(w=!1,A=null)}}else w=!1}var z;if(typeof v=="function")z=function(){v(G)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,D=W.port2;W.port1.onmessage=G,z=function(){D.postMessage(null)}}else z=function(){m(G,0)};function H(b){A=b,w||(w=!0,z())}function q(b,Y){P=m(function(){b(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,H(C))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var K=d;d=Y;try{return b()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,Y){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var K=d;d=b;try{return Y()}finally{d=K}},t.unstable_scheduleCallback=function(b,Y,K){var ne=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ne+K:ne):K=ne,b){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=K+me,b={id:c++,callback:Y,priorityLevel:b,startTime:K,expirationTime:me,sortIndex:-1},K>ne?(b.sortIndex=K,e(u,b),n(l)===null&&b===n(u)&&(y?(f(P),P=-1):y=!0,q(x,K-ne))):(b.sortIndex=me,e(l,b),g||p||(g=!0,H(C))),b},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(b){var Y=d;return function(){var K=d;d=Y;try{return b.apply(this,arguments)}finally{d=K}}}})(nv);tv.exports=nv;var gx=tv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vx=xi,Dn=gx;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iv=new Set,ua={};function os(t,e){to(t,e),to(t+"Capture",e)}function to(t,e){for(ua[t]=e,t=0;t<e.length;t++)iv.add(e[t])}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uf=Object.prototype.hasOwnProperty,_x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mp={},gp={};function xx(t){return uf.call(gp,t)?!0:uf.call(mp,t)?!1:_x.test(t)?gp[t]=!0:(mp[t]=!0,!1)}function yx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Sx(t,e,n,i){if(e===null||typeof e>"u"||yx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var uh=/[\-:]([a-z])/g;function ch(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uh,ch);jt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uh,ch);jt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uh,ch);jt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function fh(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Sx(e,n,r,i)&&(n=null),i||r===null?xx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ji=vx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),dh=Symbol.for("react.strict_mode"),cf=Symbol.for("react.profiler"),rv=Symbol.for("react.provider"),sv=Symbol.for("react.context"),hh=Symbol.for("react.forward_ref"),ff=Symbol.for("react.suspense"),df=Symbol.for("react.suspense_list"),ph=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),ov=Symbol.for("react.offscreen"),vp=Symbol.iterator;function wo(t){return t===null||typeof t!="object"?null:(t=vp&&t[vp]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,Qu;function Ho(t){if(Qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qu=e&&e[1]||""}return`
`+Qu+t}var ec=!1;function tc(t,e){if(!t||ec)return"";ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ho(t):""}function Mx(t){switch(t.tag){case 5:return Ho(t.type);case 16:return Ho("Lazy");case 13:return Ho("Suspense");case 19:return Ho("SuspenseList");case 0:case 2:case 15:return t=tc(t.type,!1),t;case 11:return t=tc(t.type.render,!1),t;case 1:return t=tc(t.type,!0),t;default:return""}}function hf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bs:return"Fragment";case Ls:return"Portal";case cf:return"Profiler";case dh:return"StrictMode";case ff:return"Suspense";case df:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sv:return(t.displayName||"Context")+".Consumer";case rv:return(t._context.displayName||"Context")+".Provider";case hh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ph:return e=t.displayName||null,e!==null?e:hf(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return hf(t(e))}catch{}}return null}function Ex(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hf(e);case 8:return e===dh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function av(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Tx(t){var e=av(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=Tx(t))}function lv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=av(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pf(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _p(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uv(t,e){e=e.checked,e!=null&&fh(t,"checked",e,!1)}function mf(t,e){uv(t,e);var n=Er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gf(t,e.type,n):e.hasOwnProperty("defaultValue")&&gf(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gf(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vo=Array.isArray;function Ys(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function vf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Vo(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function cv(t,e){var n=Er(e.value),i=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Sp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _f(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wa,dv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wa=Wa||document.createElement("div"),Wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wx=["Webkit","ms","Moz","O"];Object.keys(Jo).forEach(function(t){wx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Jo[e]=Jo[t]})});function hv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Jo.hasOwnProperty(t)&&Jo[t]?(""+e).trim():e+"px"}function pv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=hv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ax=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xf(t,e){if(e){if(Ax[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function yf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sf=null;function mh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mf=null,$s=null,qs=null;function Mp(t){if(t=Ua(t)){if(typeof Mf!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Fu(e),Mf(t.stateNode,t.type,e))}}function mv(t){$s?qs?qs.push(t):qs=[t]:$s=t}function gv(){if($s){var t=$s,e=qs;if(qs=$s=null,Mp(t),e)for(t=0;t<e.length;t++)Mp(e[t])}}function vv(t,e){return t(e)}function _v(){}var nc=!1;function xv(t,e,n){if(nc)return t(e,n);nc=!0;try{return vv(t,e,n)}finally{nc=!1,($s!==null||qs!==null)&&(_v(),gv())}}function fa(t,e){var n=t.stateNode;if(n===null)return null;var i=Fu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Ef=!1;if(Vi)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){Ef=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{Ef=!1}function Cx(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Qo=!1,Zl=null,Jl=!1,Tf=null,Rx={onError:function(t){Qo=!0,Zl=t}};function Px(t,e,n,i,r,s,o,a,l){Qo=!1,Zl=null,Cx.apply(Rx,arguments)}function Lx(t,e,n,i,r,s,o,a,l){if(Px.apply(this,arguments),Qo){if(Qo){var u=Zl;Qo=!1,Zl=null}else throw Error(re(198));Jl||(Jl=!0,Tf=u)}}function as(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ep(t){if(as(t)!==t)throw Error(re(188))}function bx(t){var e=t.alternate;if(!e){if(e=as(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ep(r),t;if(s===i)return Ep(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Sv(t){return t=bx(t),t!==null?Mv(t):null}function Mv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mv(t);if(e!==null)return e;t=t.sibling}return null}var Ev=Dn.unstable_scheduleCallback,Tp=Dn.unstable_cancelCallback,Dx=Dn.unstable_shouldYield,Ix=Dn.unstable_requestPaint,Lt=Dn.unstable_now,Ux=Dn.unstable_getCurrentPriorityLevel,gh=Dn.unstable_ImmediatePriority,Tv=Dn.unstable_UserBlockingPriority,Ql=Dn.unstable_NormalPriority,Nx=Dn.unstable_LowPriority,wv=Dn.unstable_IdlePriority,Du=null,Mi=null;function Fx(t){if(Mi&&typeof Mi.onCommitFiberRoot=="function")try{Mi.onCommitFiberRoot(Du,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:Bx,Ox=Math.log,zx=Math.LN2;function Bx(t){return t>>>=0,t===0?32:31-(Ox(t)/zx|0)|0}var Xa=64,Ya=4194304;function Go(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Go(a):(s&=o,s!==0&&(i=Go(s)))}else o=n&~r,o!==0?i=Go(o):s!==0&&(i=Go(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function kx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=kx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function wf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Av(){var t=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),t}function ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function Vx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function vh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ft=0;function Cv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Rv,_h,Pv,Lv,bv,Af=!1,$a=[],hr=null,pr=null,mr=null,da=new Map,ha=new Map,lr=[],Gx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wp(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(e.pointerId)}}function Co(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ua(e),e!==null&&_h(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Wx(t,e,n,i,r){switch(e){case"focusin":return hr=Co(hr,t,e,n,i,r),!0;case"dragenter":return pr=Co(pr,t,e,n,i,r),!0;case"mouseover":return mr=Co(mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return da.set(s,Co(da.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ha.set(s,Co(ha.get(s)||null,t,e,n,i,r)),!0}return!1}function Dv(t){var e=Gr(t.target);if(e!==null){var n=as(e);if(n!==null){if(e=n.tag,e===13){if(e=yv(n),e!==null){t.blockedOn=e,bv(t.priority,function(){Pv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Sf=i,n.target.dispatchEvent(i),Sf=null}else return e=Ua(n),e!==null&&_h(e),t.blockedOn=n,!1;e.shift()}return!0}function Ap(t,e,n){Il(t)&&n.delete(e)}function Xx(){Af=!1,hr!==null&&Il(hr)&&(hr=null),pr!==null&&Il(pr)&&(pr=null),mr!==null&&Il(mr)&&(mr=null),da.forEach(Ap),ha.forEach(Ap)}function Ro(t,e){t.blockedOn===e&&(t.blockedOn=null,Af||(Af=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,Xx)))}function pa(t){function e(r){return Ro(r,t)}if(0<$a.length){Ro($a[0],t);for(var n=1;n<$a.length;n++){var i=$a[n];i.blockedOn===t&&(i.blockedOn=null)}}for(hr!==null&&Ro(hr,t),pr!==null&&Ro(pr,t),mr!==null&&Ro(mr,t),da.forEach(e),ha.forEach(e),n=0;n<lr.length;n++)i=lr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)Dv(n),n.blockedOn===null&&lr.shift()}var js=ji.ReactCurrentBatchConfig,tu=!0;function Yx(t,e,n,i){var r=ft,s=js.transition;js.transition=null;try{ft=1,xh(t,e,n,i)}finally{ft=r,js.transition=s}}function $x(t,e,n,i){var r=ft,s=js.transition;js.transition=null;try{ft=4,xh(t,e,n,i)}finally{ft=r,js.transition=s}}function xh(t,e,n,i){if(tu){var r=Cf(t,e,n,i);if(r===null)hc(t,e,i,nu,n),wp(t,i);else if(Wx(r,t,e,n,i))i.stopPropagation();else if(wp(t,i),e&4&&-1<Gx.indexOf(t)){for(;r!==null;){var s=Ua(r);if(s!==null&&Rv(s),s=Cf(t,e,n,i),s===null&&hc(t,e,i,nu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else hc(t,e,i,null,n)}}var nu=null;function Cf(t,e,n,i){if(nu=null,t=mh(i),t=Gr(t),t!==null)if(e=as(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nu=t,null}function Iv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ux()){case gh:return 1;case Tv:return 4;case Ql:case Nx:return 16;case wv:return 536870912;default:return 16}default:return 16}}var fr=null,yh=null,Ul=null;function Uv(){if(Ul)return Ul;var t,e=yh,n=e.length,i,r="value"in fr?fr.value:fr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ul=r.slice(t,1<i?1-i:void 0)}function Nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function Cp(){return!1}function Un(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:Cp,this.isPropagationStopped=Cp,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sh=Un(xo),Ia=Rt({},xo,{view:0,detail:0}),qx=Un(Ia),rc,sc,Po,Iu=Rt({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Po&&(Po&&t.type==="mousemove"?(rc=t.screenX-Po.screenX,sc=t.screenY-Po.screenY):sc=rc=0,Po=t),rc)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),Rp=Un(Iu),jx=Rt({},Iu,{dataTransfer:0}),Kx=Un(jx),Zx=Rt({},Ia,{relatedTarget:0}),oc=Un(Zx),Jx=Rt({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),Qx=Un(Jx),ey=Rt({},xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ty=Un(ey),ny=Rt({},xo,{data:0}),Pp=Un(ny),iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sy[t])?!!e[t]:!1}function Mh(){return oy}var ay=Rt({},Ia,{key:function(t){if(t.key){var e=iy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ry[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mh,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ly=Un(ay),uy=Rt({},Iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=Un(uy),cy=Rt({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mh}),fy=Un(cy),dy=Rt({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),hy=Un(dy),py=Rt({},Iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),my=Un(py),gy=[9,13,27,32],Eh=Vi&&"CompositionEvent"in window,ea=null;Vi&&"documentMode"in document&&(ea=document.documentMode);var vy=Vi&&"TextEvent"in window&&!ea,Nv=Vi&&(!Eh||ea&&8<ea&&11>=ea),bp=" ",Dp=!1;function Fv(t,e){switch(t){case"keyup":return gy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ov(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function _y(t,e){switch(t){case"compositionend":return Ov(e);case"keypress":return e.which!==32?null:(Dp=!0,bp);case"textInput":return t=e.data,t===bp&&Dp?null:t;default:return null}}function xy(t,e){if(Ds)return t==="compositionend"||!Eh&&Fv(t,e)?(t=Uv(),Ul=yh=fr=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nv&&e.locale!=="ko"?null:e.data;default:return null}}var yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yy[t.type]:e==="textarea"}function zv(t,e,n,i){mv(i),e=iu(e,"onChange"),0<e.length&&(n=new Sh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ta=null,ma=null;function Sy(t){jv(t,0)}function Uu(t){var e=Ns(t);if(lv(e))return t}function My(t,e){if(t==="change")return e}var Bv=!1;if(Vi){var ac;if(Vi){var lc="oninput"in document;if(!lc){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),lc=typeof Up.oninput=="function"}ac=lc}else ac=!1;Bv=ac&&(!document.documentMode||9<document.documentMode)}function Np(){ta&&(ta.detachEvent("onpropertychange",kv),ma=ta=null)}function kv(t){if(t.propertyName==="value"&&Uu(ma)){var e=[];zv(e,ma,t,mh(t)),xv(Sy,e)}}function Ey(t,e,n){t==="focusin"?(Np(),ta=e,ma=n,ta.attachEvent("onpropertychange",kv)):t==="focusout"&&Np()}function Ty(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uu(ma)}function wy(t,e){if(t==="click")return Uu(e)}function Ay(t,e){if(t==="input"||t==="change")return Uu(e)}function Cy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fi=typeof Object.is=="function"?Object.is:Cy;function ga(t,e){if(fi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!uf.call(e,r)||!fi(t[r],e[r]))return!1}return!0}function Fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Op(t,e){var n=Fp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fp(n)}}function Hv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vv(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function Th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ry(t){var e=Vv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hv(n.ownerDocument.documentElement,n)){if(i!==null&&Th(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Op(n,s);var o=Op(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Py=Vi&&"documentMode"in document&&11>=document.documentMode,Is=null,Rf=null,na=null,Pf=!1;function zp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pf||Is==null||Is!==Kl(i)||(i=Is,"selectionStart"in i&&Th(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),na&&ga(na,i)||(na=i,i=iu(Rf,"onSelect"),0<i.length&&(e=new Sh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Is)))}function ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Us={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},uc={},Gv={};Vi&&(Gv=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Nu(t){if(uc[t])return uc[t];if(!Us[t])return t;var e=Us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gv)return uc[t]=e[n];return t}var Wv=Nu("animationend"),Xv=Nu("animationiteration"),Yv=Nu("animationstart"),$v=Nu("transitionend"),qv=new Map,Bp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(t,e){qv.set(t,e),os(e,[t])}for(var cc=0;cc<Bp.length;cc++){var fc=Bp[cc],Ly=fc.toLowerCase(),by=fc[0].toUpperCase()+fc.slice(1);Cr(Ly,"on"+by)}Cr(Wv,"onAnimationEnd");Cr(Xv,"onAnimationIteration");Cr(Yv,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr($v,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function kp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Lx(i,e,void 0,t),t.currentTarget=null}function jv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;kp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;kp(r,a,u),s=l}}}if(Jl)throw t=Tf,Jl=!1,Tf=null,t}function yt(t,e){var n=e[Uf];n===void 0&&(n=e[Uf]=new Set);var i=t+"__bubble";n.has(i)||(Kv(e,t,2,!1),n.add(i))}function dc(t,e,n){var i=0;e&&(i|=4),Kv(n,t,i,e)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function va(t){if(!t[Ka]){t[Ka]=!0,iv.forEach(function(n){n!=="selectionchange"&&(Dy.has(n)||dc(n,!1,t),dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ka]||(e[Ka]=!0,dc("selectionchange",!1,e))}}function Kv(t,e,n,i){switch(Iv(e)){case 1:var r=Yx;break;case 4:r=$x;break;default:r=xh}n=r.bind(null,e,n,t),r=void 0,!Ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function hc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}xv(function(){var u=s,c=mh(n),h=[];e:{var d=qv.get(t);if(d!==void 0){var p=Sh,g=t;switch(t){case"keypress":if(Nl(n)===0)break e;case"keydown":case"keyup":p=ly;break;case"focusin":g="focus",p=oc;break;case"focusout":g="blur",p=oc;break;case"beforeblur":case"afterblur":p=oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Kx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fy;break;case Wv:case Xv:case Yv:p=Qx;break;case $v:p=hy;break;case"scroll":p=qx;break;case"wheel":p=my;break;case"copy":case"cut":case"paste":p=ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Lp}var y=(e&4)!==0,m=!y&&t==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var v=u,_;v!==null;){_=v;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,f!==null&&(x=fa(v,f),x!=null&&y.push(_a(v,x,_)))),m)break;v=v.return}0<y.length&&(d=new p(d,g,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Sf&&(g=n.relatedTarget||n.fromElement)&&(Gr(g)||g[Gi]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Gr(g):null,g!==null&&(m=as(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=Rp,x="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Lp,x="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?d:Ns(p),_=g==null?d:Ns(g),d=new y(x,v+"leave",p,n,c),d.target=m,d.relatedTarget=_,x=null,Gr(c)===u&&(y=new y(f,v+"enter",g,n,c),y.target=_,y.relatedTarget=m,x=y),m=x,p&&g)t:{for(y=p,f=g,v=0,_=y;_;_=fs(_))v++;for(_=0,x=f;x;x=fs(x))_++;for(;0<v-_;)y=fs(y),v--;for(;0<_-v;)f=fs(f),_--;for(;v--;){if(y===f||f!==null&&y===f.alternate)break t;y=fs(y),f=fs(f)}y=null}else y=null;p!==null&&Hp(h,d,p,y,!1),g!==null&&m!==null&&Hp(h,m,g,y,!0)}}e:{if(d=u?Ns(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=My;else if(Ip(d))if(Bv)C=Ay;else{C=Ty;var w=Ey}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=wy);if(C&&(C=C(t,u))){zv(h,C,n,c);break e}w&&w(t,d,u),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&gf(d,"number",d.value)}switch(w=u?Ns(u):window,t){case"focusin":(Ip(w)||w.contentEditable==="true")&&(Is=w,Rf=u,na=null);break;case"focusout":na=Rf=Is=null;break;case"mousedown":Pf=!0;break;case"contextmenu":case"mouseup":case"dragend":Pf=!1,zp(h,n,c);break;case"selectionchange":if(Py)break;case"keydown":case"keyup":zp(h,n,c)}var A;if(Eh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ds?Fv(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Nv&&n.locale!=="ko"&&(Ds||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ds&&(A=Uv()):(fr=c,yh="value"in fr?fr.value:fr.textContent,Ds=!0)),w=iu(u,P),0<w.length&&(P=new Pp(P,t,null,n,c),h.push({event:P,listeners:w}),A?P.data=A:(A=Ov(n),A!==null&&(P.data=A)))),(A=vy?_y(t,n):xy(t,n))&&(u=iu(u,"onBeforeInput"),0<u.length&&(c=new Pp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}jv(h,e)})}function _a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function iu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fa(t,n),s!=null&&i.unshift(_a(t,s,r)),s=fa(t,e),s!=null&&i.push(_a(t,s,r))),t=t.return}return i}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=fa(n,s),l!=null&&o.unshift(_a(n,l,a))):r||(l=fa(n,s),l!=null&&o.push(_a(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Iy=/\r\n?/g,Uy=/\u0000|\uFFFD/g;function Vp(t){return(typeof t=="string"?t:""+t).replace(Iy,`
`).replace(Uy,"")}function Za(t,e,n){if(e=Vp(e),Vp(t)!==e&&n)throw Error(re(425))}function ru(){}var Lf=null,bf=null;function Df(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var If=typeof setTimeout=="function"?setTimeout:void 0,Ny=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,Fy=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(t){return Gp.resolve(null).then(t).catch(Oy)}:If;function Oy(t){setTimeout(function(){throw t})}function pc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),pa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);pa(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var yo=Math.random().toString(36).slice(2),gi="__reactFiber$"+yo,xa="__reactProps$"+yo,Gi="__reactContainer$"+yo,Uf="__reactEvents$"+yo,zy="__reactListeners$"+yo,By="__reactHandles$"+yo;function Gr(t){var e=t[gi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gi]||n[gi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wp(t);t!==null;){if(n=t[gi])return n;t=Wp(t)}return e}t=n,n=t.parentNode}return null}function Ua(t){return t=t[gi]||t[Gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Fu(t){return t[xa]||null}var Nf=[],Fs=-1;function Rr(t){return{current:t}}function St(t){0>Fs||(t.current=Nf[Fs],Nf[Fs]=null,Fs--)}function mt(t,e){Fs++,Nf[Fs]=t.current,t.current=e}var Tr={},nn=Rr(Tr),vn=Rr(!1),Zr=Tr;function no(t,e){var n=t.type.contextTypes;if(!n)return Tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function su(){St(vn),St(nn)}function Xp(t,e,n){if(nn.current!==Tr)throw Error(re(168));mt(nn,e),mt(vn,n)}function Zv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,Ex(t)||"Unknown",r));return Rt({},n,i)}function ou(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,Zr=nn.current,mt(nn,t),mt(vn,vn.current),!0}function Yp(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Zv(t,e,Zr),i.__reactInternalMemoizedMergedChildContext=t,St(vn),St(nn),mt(nn,t)):St(vn),mt(vn,n)}var Ui=null,Ou=!1,mc=!1;function Jv(t){Ui===null?Ui=[t]:Ui.push(t)}function ky(t){Ou=!0,Jv(t)}function Pr(){if(!mc&&Ui!==null){mc=!0;var t=0,e=ft;try{var n=Ui;for(ft=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,Ou=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),Ev(gh,Pr),r}finally{ft=e,mc=!1}}return null}var Os=[],zs=0,au=null,lu=0,Hn=[],Vn=0,Jr=null,Oi=1,zi="";function Or(t,e){Os[zs++]=lu,Os[zs++]=au,au=t,lu=e}function Qv(t,e,n){Hn[Vn++]=Oi,Hn[Vn++]=zi,Hn[Vn++]=Jr,Jr=t;var i=Oi;t=zi;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Oi=1<<32-li(e)+r|n<<r|i,zi=s+t}else Oi=1<<s|n<<r|i,zi=t}function wh(t){t.return!==null&&(Or(t,1),Qv(t,1,0))}function Ah(t){for(;t===au;)au=Os[--zs],Os[zs]=null,lu=Os[--zs],Os[zs]=null;for(;t===Jr;)Jr=Hn[--Vn],Hn[Vn]=null,zi=Hn[--Vn],Hn[Vn]=null,Oi=Hn[--Vn],Hn[Vn]=null}var Rn=null,Cn=null,Et=!1,si=null;function e_(t,e){var n=Xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $p(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:Oi,overflow:zi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,Cn=null,!0):!1;default:return!1}}function Ff(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Of(t){if(Et){var e=Cn;if(e){var n=e;if(!$p(t,e)){if(Ff(t))throw Error(re(418));e=gr(n.nextSibling);var i=Rn;e&&$p(t,e)?e_(i,n):(t.flags=t.flags&-4097|2,Et=!1,Rn=t)}}else{if(Ff(t))throw Error(re(418));t.flags=t.flags&-4097|2,Et=!1,Rn=t}}}function qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Ja(t){if(t!==Rn)return!1;if(!Et)return qp(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Df(t.type,t.memoizedProps)),e&&(e=Cn)){if(Ff(t))throw t_(),Error(re(418));for(;e;)e_(t,e),e=gr(e.nextSibling)}if(qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Rn?gr(t.stateNode.nextSibling):null;return!0}function t_(){for(var t=Cn;t;)t=gr(t.nextSibling)}function io(){Cn=Rn=null,Et=!1}function Ch(t){si===null?si=[t]:si.push(t)}var Hy=ji.ReactCurrentBatchConfig;function Lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Qa(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jp(t){var e=t._init;return e(t._payload)}function n_(t){function e(f,v){if(t){var _=f.deletions;_===null?(f.deletions=[v],f.flags|=16):_.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=yr(f,v),f.index=0,f.sibling=null,f}function s(f,v,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<v?(f.flags|=2,v):_):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,v,_,x){return v===null||v.tag!==6?(v=Mc(_,f.mode,x),v.return=f,v):(v=r(v,_),v.return=f,v)}function l(f,v,_,x){var C=_.type;return C===bs?c(f,v,_.props.children,x,_.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===or&&jp(C)===v.type)?(x=r(v,_.props),x.ref=Lo(f,v,_),x.return=f,x):(x=Vl(_.type,_.key,_.props,null,f.mode,x),x.ref=Lo(f,v,_),x.return=f,x)}function u(f,v,_,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Ec(_,f.mode,x),v.return=f,v):(v=r(v,_.children||[]),v.return=f,v)}function c(f,v,_,x,C){return v===null||v.tag!==7?(v=Kr(_,f.mode,x,C),v.return=f,v):(v=r(v,_),v.return=f,v)}function h(f,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Mc(""+v,f.mode,_),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return _=Vl(v.type,v.key,v.props,null,f.mode,_),_.ref=Lo(f,null,v),_.return=f,_;case Ls:return v=Ec(v,f.mode,_),v.return=f,v;case or:var x=v._init;return h(f,x(v._payload),_)}if(Vo(v)||wo(v))return v=Kr(v,f.mode,_,null),v.return=f,v;Qa(f,v)}return null}function d(f,v,_,x){var C=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(f,v,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Va:return _.key===C?l(f,v,_,x):null;case Ls:return _.key===C?u(f,v,_,x):null;case or:return C=_._init,d(f,v,C(_._payload),x)}if(Vo(_)||wo(_))return C!==null?null:c(f,v,_,x,null);Qa(f,_)}return null}function p(f,v,_,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(_)||null,a(v,f,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Va:return f=f.get(x.key===null?_:x.key)||null,l(v,f,x,C);case Ls:return f=f.get(x.key===null?_:x.key)||null,u(v,f,x,C);case or:var w=x._init;return p(f,v,_,w(x._payload),C)}if(Vo(x)||wo(x))return f=f.get(_)||null,c(v,f,x,C,null);Qa(v,x)}return null}function g(f,v,_,x){for(var C=null,w=null,A=v,P=v=0,T=null;A!==null&&P<_.length;P++){A.index>P?(T=A,A=null):T=A.sibling;var S=d(f,A,_[P],x);if(S===null){A===null&&(A=T);break}t&&A&&S.alternate===null&&e(f,A),v=s(S,v,P),w===null?C=S:w.sibling=S,w=S,A=T}if(P===_.length)return n(f,A),Et&&Or(f,P),C;if(A===null){for(;P<_.length;P++)A=h(f,_[P],x),A!==null&&(v=s(A,v,P),w===null?C=A:w.sibling=A,w=A);return Et&&Or(f,P),C}for(A=i(f,A);P<_.length;P++)T=p(A,f,P,_[P],x),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?P:T.key),v=s(T,v,P),w===null?C=T:w.sibling=T,w=T);return t&&A.forEach(function(L){return e(f,L)}),Et&&Or(f,P),C}function y(f,v,_,x){var C=wo(_);if(typeof C!="function")throw Error(re(150));if(_=C.call(_),_==null)throw Error(re(151));for(var w=C=null,A=v,P=v=0,T=null,S=_.next();A!==null&&!S.done;P++,S=_.next()){A.index>P?(T=A,A=null):T=A.sibling;var L=d(f,A,S.value,x);if(L===null){A===null&&(A=T);break}t&&A&&L.alternate===null&&e(f,A),v=s(L,v,P),w===null?C=L:w.sibling=L,w=L,A=T}if(S.done)return n(f,A),Et&&Or(f,P),C;if(A===null){for(;!S.done;P++,S=_.next())S=h(f,S.value,x),S!==null&&(v=s(S,v,P),w===null?C=S:w.sibling=S,w=S);return Et&&Or(f,P),C}for(A=i(f,A);!S.done;P++,S=_.next())S=p(A,f,P,S.value,x),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?P:S.key),v=s(S,v,P),w===null?C=S:w.sibling=S,w=S);return t&&A.forEach(function(G){return e(f,G)}),Et&&Or(f,P),C}function m(f,v,_,x){if(typeof _=="object"&&_!==null&&_.type===bs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Va:e:{for(var C=_.key,w=v;w!==null;){if(w.key===C){if(C=_.type,C===bs){if(w.tag===7){n(f,w.sibling),v=r(w,_.props.children),v.return=f,f=v;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===or&&jp(C)===w.type){n(f,w.sibling),v=r(w,_.props),v.ref=Lo(f,w,_),v.return=f,f=v;break e}n(f,w);break}else e(f,w);w=w.sibling}_.type===bs?(v=Kr(_.props.children,f.mode,x,_.key),v.return=f,f=v):(x=Vl(_.type,_.key,_.props,null,f.mode,x),x.ref=Lo(f,v,_),x.return=f,f=x)}return o(f);case Ls:e:{for(w=_.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(f,v.sibling),v=r(v,_.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=Ec(_,f.mode,x),v.return=f,f=v}return o(f);case or:return w=_._init,m(f,v,w(_._payload),x)}if(Vo(_))return g(f,v,_,x);if(wo(_))return y(f,v,_,x);Qa(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,_),v.return=f,f=v):(n(f,v),v=Mc(_,f.mode,x),v.return=f,f=v),o(f)):n(f,v)}return m}var ro=n_(!0),i_=n_(!1),uu=Rr(null),cu=null,Bs=null,Rh=null;function Ph(){Rh=Bs=cu=null}function Lh(t){var e=uu.current;St(uu),t._currentValue=e}function zf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ks(t,e){cu=t,Rh=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(Rh!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(cu===null)throw Error(re(308));Bs=t,cu.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var Wr=null;function bh(t){Wr===null?Wr=[t]:Wr.push(t)}function r_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,bh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Wi(t,i)}function Wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function Dh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Wi(t,n)}return r=i.interleaved,r===null?(e.next=e,bh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Wi(t,n)}function Fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vh(t,n)}}function Kp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fu(t,e,n,i){var r=t.updateQueue;ar=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(d=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=Rt({},h,d);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);es|=o,t.lanes=o,t.memoizedState=h}}function Zp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Na={},Ei=Rr(Na),ya=Rr(Na),Sa=Rr(Na);function Xr(t){if(t===Na)throw Error(re(174));return t}function Ih(t,e){switch(mt(Sa,e),mt(ya,t),mt(Ei,Na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_f(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_f(e,t)}St(Ei),mt(Ei,e)}function so(){St(Ei),St(ya),St(Sa)}function o_(t){Xr(Sa.current);var e=Xr(Ei.current),n=_f(e,t.type);e!==n&&(mt(ya,t),mt(Ei,n))}function Uh(t){ya.current===t&&(St(Ei),St(ya))}var wt=Rr(0);function du(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gc=[];function Nh(){for(var t=0;t<gc.length;t++)gc[t]._workInProgressVersionPrimary=null;gc.length=0}var Ol=ji.ReactCurrentDispatcher,vc=ji.ReactCurrentBatchConfig,Qr=0,Ct=null,Ot=null,Gt=null,hu=!1,ia=!1,Ma=0,Vy=0;function Kt(){throw Error(re(321))}function Fh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fi(t[n],e[n]))return!1;return!0}function Oh(t,e,n,i,r,s){if(Qr=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ol.current=t===null||t.memoizedState===null?Yy:$y,t=n(i,r),ia){s=0;do{if(ia=!1,Ma=0,25<=s)throw Error(re(301));s+=1,Gt=Ot=null,e.updateQueue=null,Ol.current=qy,t=n(i,r)}while(ia)}if(Ol.current=pu,e=Ot!==null&&Ot.next!==null,Qr=0,Gt=Ot=Ct=null,hu=!1,e)throw Error(re(300));return t}function zh(){var t=Ma!==0;return Ma=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Ct.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Kn(){if(Ot===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Gt===null?Ct.memoizedState:Gt.next;if(e!==null)Gt=e,Ot=t;else{if(t===null)throw Error(re(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Gt===null?Ct.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function Ea(t,e){return typeof e=="function"?e(t):e}function _c(t){var e=Kn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Qr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Ct.lanes|=c,es|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,fi(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,es|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xc(t){var e=Kn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);fi(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function a_(){}function l_(t,e){var n=Ct,i=Kn(),r=e(),s=!fi(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,Bh(f_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,Ta(9,c_.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(re(349));Qr&30||u_(n,e,r)}return r}function u_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function c_(t,e,n,i){e.value=n,e.getSnapshot=i,d_(e)&&h_(t)}function f_(t,e,n){return n(function(){d_(e)&&h_(t)})}function d_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fi(t,n)}catch{return!0}}function h_(t){var e=Wi(t,1);e!==null&&ui(e,t,1,-1)}function Jp(t){var e=pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e.queue=t,t=t.dispatch=Xy.bind(null,Ct,t),[e.memoizedState,t]}function Ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function p_(){return Kn().memoizedState}function zl(t,e,n,i){var r=pi();Ct.flags|=t,r.memoizedState=Ta(1|e,n,void 0,i===void 0?null:i)}function zu(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&Fh(i,o.deps)){r.memoizedState=Ta(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=Ta(1|e,n,s,i)}function Qp(t,e){return zl(8390656,8,t,e)}function Bh(t,e){return zu(2048,8,t,e)}function m_(t,e){return zu(4,2,t,e)}function g_(t,e){return zu(4,4,t,e)}function v_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function __(t,e,n){return n=n!=null?n.concat([t]):null,zu(4,4,v_.bind(null,e,t),n)}function kh(){}function x_(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Fh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function y_(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Fh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function S_(t,e,n){return Qr&21?(fi(n,e)||(n=Av(),Ct.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function Gy(t,e){var n=ft;ft=n!==0&&4>n?n:4,t(!0);var i=vc.transition;vc.transition={};try{t(!1),e()}finally{ft=n,vc.transition=i}}function M_(){return Kn().memoizedState}function Wy(t,e,n){var i=xr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},E_(t))T_(e,n);else if(n=r_(t,e,n,i),n!==null){var r=un();ui(n,t,i,r),w_(n,e,i)}}function Xy(t,e,n){var i=xr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(E_(t))T_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,fi(a,o)){var l=e.interleaved;l===null?(r.next=r,bh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=r_(t,e,r,i),n!==null&&(r=un(),ui(n,t,i,r),w_(n,e,i))}}function E_(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function T_(t,e){ia=hu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function w_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vh(t,n)}}var pu={readContext:jn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},Yy={readContext:jn,useCallback:function(t,e){return pi().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:Qp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zl(4194308,4,v_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return zl(4,2,t,e)},useMemo:function(t,e){var n=pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Wy.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=pi();return t={current:t},e.memoizedState=t},useState:Jp,useDebugValue:kh,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=Jp(!1),e=t[0];return t=Gy.bind(null,t[1]),pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=pi();if(Et){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Xt===null)throw Error(re(349));Qr&30||u_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Qp(f_.bind(null,i,s,t),[t]),i.flags|=2048,Ta(9,c_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pi(),e=Xt.identifierPrefix;if(Et){var n=zi,i=Oi;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Vy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$y={readContext:jn,useCallback:x_,useContext:jn,useEffect:Bh,useImperativeHandle:__,useInsertionEffect:m_,useLayoutEffect:g_,useMemo:y_,useReducer:_c,useRef:p_,useState:function(){return _c(Ea)},useDebugValue:kh,useDeferredValue:function(t){var e=Kn();return S_(e,Ot.memoizedState,t)},useTransition:function(){var t=_c(Ea)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:a_,useSyncExternalStore:l_,useId:M_,unstable_isNewReconciler:!1},qy={readContext:jn,useCallback:x_,useContext:jn,useEffect:Bh,useImperativeHandle:__,useInsertionEffect:m_,useLayoutEffect:g_,useMemo:y_,useReducer:xc,useRef:p_,useState:function(){return xc(Ea)},useDebugValue:kh,useDeferredValue:function(t){var e=Kn();return Ot===null?e.memoizedState=t:S_(e,Ot.memoizedState,t)},useTransition:function(){var t=xc(Ea)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:a_,useSyncExternalStore:l_,useId:M_,unstable_isNewReconciler:!1};function ii(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bu={isMounted:function(t){return(t=t._reactInternals)?as(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=xr(t),s=ki(i,r);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,r),e!==null&&(ui(e,t,r,i),Fl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=xr(t),s=ki(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,r),e!==null&&(ui(e,t,r,i),Fl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=xr(t),r=ki(n,i);r.tag=2,e!=null&&(r.callback=e),e=vr(t,r,i),e!==null&&(ui(e,t,i,n),Fl(e,t,i))}};function em(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ga(n,i)||!ga(r,s):!0}function A_(t,e,n){var i=!1,r=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(r=_n(e)?Zr:nn.current,i=e.contextTypes,s=(i=i!=null)?no(t,r):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function tm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Bu.enqueueReplaceState(e,e.state,null)}function kf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Dh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=jn(s):(s=_n(e)?Zr:nn.current,r.context=no(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Bu.enqueueReplaceState(r,r.state,null),fu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function oo(t,e){try{var n="",i=e;do n+=Mx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jy=typeof WeakMap=="function"?WeakMap:Map;function C_(t,e,n){n=ki(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){gu||(gu=!0,Zf=i),Hf(t,e)},n}function R_(t,e,n){n=ki(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Hf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hf(t,e),typeof i!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function nm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new jy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=uS.bind(null,t,e,n),e.then(t,t))}function im(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ki(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var Ky=ji.ReactCurrentOwner,gn=!1;function ln(t,e,n,i){e.child=t===null?i_(e,null,n,i):ro(e,t.child,n,i)}function sm(t,e,n,i,r){n=n.render;var s=e.ref;return Ks(e,r),i=Oh(t,e,n,i,s,r),n=zh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(Et&&n&&wh(e),e.flags|=1,ln(t,e,i,r),e.child)}function om(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!qh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,P_(t,e,s,i,r)):(t=Vl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(o,i)&&t.ref===e.ref)return Xi(t,e,r)}return e.flags|=1,t=yr(s,i),t.ref=e.ref,t.return=e,e.child=t}function P_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ga(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Xi(t,e,r)}return Vf(t,e,n,i,r)}function L_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(Hs,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,mt(Hs,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,mt(Hs,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,mt(Hs,wn),wn|=i;return ln(t,e,r,n),e.child}function b_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vf(t,e,n,i,r){var s=_n(n)?Zr:nn.current;return s=no(e,s),Ks(e,r),n=Oh(t,e,n,i,s,r),i=zh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(Et&&i&&wh(e),e.flags|=1,ln(t,e,n,r),e.child)}function am(t,e,n,i,r){if(_n(n)){var s=!0;ou(e)}else s=!1;if(Ks(e,r),e.stateNode===null)Bl(t,e),A_(e,n,i),kf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=jn(u):(u=_n(n)?Zr:nn.current,u=no(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&tm(e,o,i,u),ar=!1;var d=e.memoizedState;o.state=d,fu(e,i,o,r),l=e.memoizedState,a!==i||d!==l||vn.current||ar?(typeof c=="function"&&(Bf(e,n,c,i),l=e.memoizedState),(a=ar||em(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,s_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ii(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=_n(n)?Zr:nn.current,l=no(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&tm(e,o,i,l),ar=!1,d=e.memoizedState,o.state=d,fu(e,i,o,r);var g=e.memoizedState;a!==h||d!==g||vn.current||ar?(typeof p=="function"&&(Bf(e,n,p,i),g=e.memoizedState),(u=ar||em(e,n,u,i,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Gf(t,e,n,i,s,r)}function Gf(t,e,n,i,r,s){b_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Yp(e,n,!1),Xi(t,e,s);i=e.stateNode,Ky.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ro(e,t.child,null,s),e.child=ro(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&Yp(e,n,!0),e.child}function D_(t){var e=t.stateNode;e.pendingContext?Xp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xp(t,e.context,!1),Ih(t,e.containerInfo)}function lm(t,e,n,i,r){return io(),Ch(r),e.flags|=256,ln(t,e,n,i),e.child}var Wf={dehydrated:null,treeContext:null,retryLane:0};function Xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function I_(t,e,n){var i=e.pendingProps,r=wt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),mt(wt,r&1),t===null)return Of(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Vu(o,i,0,null),t=Kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xf(n),e.memoizedState=Wf,t):Hh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Zy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=yr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=yr(a,s):(s=Kr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Xf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wf,i}return s=t.child,t=s.sibling,i=yr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Hh(t,e){return e=Vu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function el(t,e,n,i){return i!==null&&Ch(i),ro(e,t.child,null,n),t=Hh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Zy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=yc(Error(re(422))),el(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Vu({mode:"visible",children:i.children},r,0,null),s=Kr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ro(e,t.child,null,o),e.child.memoizedState=Xf(o),e.memoizedState=Wf,s);if(!(e.mode&1))return el(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=yc(s,i,void 0),el(t,e,o,i)}if(a=(o&t.childLanes)!==0,gn||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Wi(t,r),ui(i,t,r,-1))}return $h(),i=yc(Error(re(421))),el(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=cS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=gr(r.nextSibling),Rn=e,Et=!0,si=null,t!==null&&(Hn[Vn++]=Oi,Hn[Vn++]=zi,Hn[Vn++]=Jr,Oi=t.id,zi=t.overflow,Jr=e),e=Hh(e,i.children),e.flags|=4096,e)}function um(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),zf(t.return,e,n)}function Sc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function U_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&um(t,n,e);else if(t.tag===19)um(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(mt(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&du(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Sc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&du(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Sc(e,!0,n,null,s);break;case"together":Sc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jy(t,e,n){switch(e.tag){case 3:D_(e),io();break;case 5:o_(e);break;case 1:_n(e.type)&&ou(e);break;case 4:Ih(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;mt(uu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(mt(wt,wt.current&1),e.flags|=128,null):n&e.child.childLanes?I_(t,e,n):(mt(wt,wt.current&1),t=Xi(t,e,n),t!==null?t.sibling:null);mt(wt,wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return U_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),mt(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,L_(t,e,n)}return Xi(t,e,n)}var N_,Yf,F_,O_;N_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yf=function(){};F_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Xr(Ei.current);var s=null;switch(n){case"input":r=pf(t,r),i=pf(t,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=vf(t,r),i=vf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ru)}xf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ua.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ua.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&yt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};O_=function(t,e,n,i){n!==i&&(e.flags|=4)};function bo(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Qy(t,e,n){var i=e.pendingProps;switch(Ah(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return _n(e.type)&&su(),Zt(e),null;case 3:return i=e.stateNode,so(),St(vn),St(nn),Nh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,si!==null&&(ed(si),si=null))),Yf(t,e),Zt(e),null;case 5:Uh(e);var r=Xr(Sa.current);if(n=e.type,t!==null&&e.stateNode!=null)F_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Zt(e),null}if(t=Xr(Ei.current),Ja(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[xa]=s,t=(e.mode&1)!==0,n){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<Wo.length;r++)yt(Wo[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":_p(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":yp(i,s),yt("invalid",i)}xf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Za(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Za(i.textContent,a,t),r=["children",""+a]):ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&yt("scroll",i)}switch(n){case"input":Ga(i),xp(i,s,!0);break;case"textarea":Ga(i),Sp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ru)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[gi]=e,t[xa]=i,N_(t,e,!1,!1),e.stateNode=t;e:{switch(o=yf(n,i),n){case"dialog":yt("cancel",t),yt("close",t),r=i;break;case"iframe":case"object":case"embed":yt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Wo.length;r++)yt(Wo[r],t);r=i;break;case"source":yt("error",t),r=i;break;case"img":case"image":case"link":yt("error",t),yt("load",t),r=i;break;case"details":yt("toggle",t),r=i;break;case"input":_p(t,i),r=pf(t,i),yt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),yt("invalid",t);break;case"textarea":yp(t,i),r=vf(t,i),yt("invalid",t);break;default:r=i}xf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?pv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ca(t,l):typeof l=="number"&&ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",t):l!=null&&fh(t,s,l,o))}switch(n){case"input":Ga(t),xp(t,i,!1);break;case"textarea":Ga(t),Sp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ys(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ys(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ru)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)O_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Xr(Sa.current),Xr(Ei.current),Ja(e)){if(i=e.stateNode,n=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:Za(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Za(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return Zt(e),null;case 13:if(St(wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&Cn!==null&&e.mode&1&&!(e.flags&128))t_(),io(),e.flags|=98560,s=!1;else if(s=Ja(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[gi]=e}else io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else si!==null&&(ed(si),si=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||wt.current&1?zt===0&&(zt=3):$h())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return so(),Yf(t,e),t===null&&va(e.stateNode.containerInfo),Zt(e),null;case 10:return Lh(e.type._context),Zt(e),null;case 17:return _n(e.type)&&su(),Zt(e),null;case 19:if(St(wt),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)bo(s,!1);else{if(zt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=du(t),o!==null){for(e.flags|=128,bo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return mt(wt,wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>ao&&(e.flags|=128,i=!0,bo(s,!1),e.lanes=4194304)}else{if(!i)if(t=du(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Et)return Zt(e),null}else 2*Lt()-s.renderingStartTime>ao&&n!==1073741824&&(e.flags|=128,i=!0,bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=wt.current,mt(wt,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return Yh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function eS(t,e){switch(Ah(e),e.tag){case 1:return _n(e.type)&&su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return so(),St(vn),St(nn),Nh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uh(e),null;case 13:if(St(wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));io()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return St(wt),null;case 4:return so(),null;case 10:return Lh(e.type._context),null;case 22:case 23:return Yh(),null;case 24:return null;default:return null}}var tl=!1,en=!1,tS=typeof WeakSet=="function"?WeakSet:Set,xe=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Pt(t,e,i)}else n.current=null}function $f(t,e,n){try{n()}catch(i){Pt(t,e,i)}}var cm=!1;function nS(t,e){if(Lf=tu,t=Vv(),Th(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bf={focusedElem:t,selectionRange:n},tu=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:ii(e.type,y),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(x){Pt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return g=cm,cm=!1,g}function ra(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&$f(e,n,s)}r=r.next}while(r!==i)}}function ku(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function qf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function z_(t){var e=t.alternate;e!==null&&(t.alternate=null,z_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gi],delete e[xa],delete e[Uf],delete e[zy],delete e[By])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function B_(t){return t.tag===5||t.tag===3||t.tag===4}function fm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||B_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ru));else if(i!==4&&(t=t.child,t!==null))for(jf(t,e,n),t=t.sibling;t!==null;)jf(t,e,n),t=t.sibling}function Kf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Kf(t,e,n),t=t.sibling;t!==null;)Kf(t,e,n),t=t.sibling}var $t=null,ri=!1;function Qi(t,e,n){for(n=n.child;n!==null;)k_(t,e,n),n=n.sibling}function k_(t,e,n){if(Mi&&typeof Mi.onCommitFiberUnmount=="function")try{Mi.onCommitFiberUnmount(Du,n)}catch{}switch(n.tag){case 5:en||ks(n,e);case 6:var i=$t,r=ri;$t=null,Qi(t,e,n),$t=i,ri=r,$t!==null&&(ri?(t=$t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$t.removeChild(n.stateNode));break;case 18:$t!==null&&(ri?(t=$t,n=n.stateNode,t.nodeType===8?pc(t.parentNode,n):t.nodeType===1&&pc(t,n),pa(t)):pc($t,n.stateNode));break;case 4:i=$t,r=ri,$t=n.stateNode.containerInfo,ri=!0,Qi(t,e,n),$t=i,ri=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$f(n,e,o),r=r.next}while(r!==i)}Qi(t,e,n);break;case 1:if(!en&&(ks(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Pt(n,e,a)}Qi(t,e,n);break;case 21:Qi(t,e,n);break;case 22:n.mode&1?(en=(i=en)||n.memoizedState!==null,Qi(t,e,n),en=i):Qi(t,e,n);break;default:Qi(t,e,n)}}function dm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tS),e.forEach(function(i){var r=fS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:$t=a.stateNode,ri=!1;break e;case 3:$t=a.stateNode.containerInfo,ri=!0;break e;case 4:$t=a.stateNode.containerInfo,ri=!0;break e}a=a.return}if($t===null)throw Error(re(160));k_(s,o,r),$t=null,ri=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Pt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)H_(e,t),e=e.sibling}function H_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(e,t),hi(t),i&4){try{ra(3,t,t.return),ku(3,t)}catch(y){Pt(t,t.return,y)}try{ra(5,t,t.return)}catch(y){Pt(t,t.return,y)}}break;case 1:Qn(e,t),hi(t),i&512&&n!==null&&ks(n,n.return);break;case 5:if(Qn(e,t),hi(t),i&512&&n!==null&&ks(n,n.return),t.flags&32){var r=t.stateNode;try{ca(r,"")}catch(y){Pt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&uv(r,s),yf(a,o);var u=yf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?pv(r,h):c==="dangerouslySetInnerHTML"?dv(r,h):c==="children"?ca(r,h):fh(r,c,h,u)}switch(a){case"input":mf(r,s);break;case"textarea":cv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ys(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ys(r,!!s.multiple,s.defaultValue,!0):Ys(r,!!s.multiple,s.multiple?[]:"",!1))}r[xa]=s}catch(y){Pt(t,t.return,y)}}break;case 6:if(Qn(e,t),hi(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Pt(t,t.return,y)}}break;case 3:if(Qn(e,t),hi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(y){Pt(t,t.return,y)}break;case 4:Qn(e,t),hi(t);break;case 13:Qn(e,t),hi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Wh=Lt())),i&4&&dm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(en=(u=en)||c,Qn(e,t),en=u):Qn(e,t),hi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(xe=t,c=t.child;c!==null;){for(h=xe=c;xe!==null;){switch(d=xe,p=d.child,d.tag){case 0:case 11:case 14:case 15:ra(4,d,d.return);break;case 1:ks(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){Pt(i,n,y)}}break;case 5:ks(d,d.return);break;case 22:if(d.memoizedState!==null){pm(h);continue}}p!==null?(p.return=d,xe=p):pm(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hv("display",o))}catch(y){Pt(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){Pt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Qn(e,t),hi(t),i&4&&dm(t);break;case 21:break;default:Qn(e,t),hi(t)}}function hi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(B_(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ca(r,""),i.flags&=-33);var s=fm(t);Kf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=fm(t);jf(t,a,o);break;default:throw Error(re(161))}}catch(l){Pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iS(t,e,n){xe=t,V_(t)}function V_(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||tl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||en;a=tl;var u=en;if(tl=o,(en=l)&&!u)for(xe=r;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?mm(r):l!==null?(l.return=o,xe=l):mm(r);for(;s!==null;)xe=s,V_(s),s=s.sibling;xe=r,tl=a,en=u}hm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):hm(t)}}function hm(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||ku(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ii(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&pa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}en||e.flags&512&&qf(e)}catch(d){Pt(e,e.return,d)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function pm(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function mm(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ku(4,e)}catch(l){Pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var s=e.return;try{qf(e)}catch(l){Pt(e,s,l)}break;case 5:var o=e.return;try{qf(e)}catch(l){Pt(e,o,l)}}}catch(l){Pt(e,e.return,l)}if(e===t){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var rS=Math.ceil,mu=ji.ReactCurrentDispatcher,Vh=ji.ReactCurrentOwner,qn=ji.ReactCurrentBatchConfig,it=0,Xt=null,Nt=null,qt=0,wn=0,Hs=Rr(0),zt=0,wa=null,es=0,Hu=0,Gh=0,sa=null,mn=null,Wh=0,ao=1/0,Di=null,gu=!1,Zf=null,_r=null,nl=!1,dr=null,vu=0,oa=0,Jf=null,kl=-1,Hl=0;function un(){return it&6?Lt():kl!==-1?kl:kl=Lt()}function xr(t){return t.mode&1?it&2&&qt!==0?qt&-qt:Hy.transition!==null?(Hl===0&&(Hl=Av()),Hl):(t=ft,t!==0||(t=window.event,t=t===void 0?16:Iv(t.type)),t):1}function ui(t,e,n,i){if(50<oa)throw oa=0,Jf=null,Error(re(185));Da(t,n,i),(!(it&2)||t!==Xt)&&(t===Xt&&(!(it&2)&&(Hu|=n),zt===4&&ur(t,qt)),xn(t,i),n===1&&it===0&&!(e.mode&1)&&(ao=Lt()+500,Ou&&Pr()))}function xn(t,e){var n=t.callbackNode;Hx(t,e);var i=eu(t,t===Xt?qt:0);if(i===0)n!==null&&Tp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Tp(n),e===1)t.tag===0?ky(gm.bind(null,t)):Jv(gm.bind(null,t)),Fy(function(){!(it&6)&&Pr()}),n=null;else{switch(Cv(i)){case 1:n=gh;break;case 4:n=Tv;break;case 16:n=Ql;break;case 536870912:n=wv;break;default:n=Ql}n=K_(n,G_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function G_(t,e){if(kl=-1,Hl=0,it&6)throw Error(re(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var i=eu(t,t===Xt?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=_u(t,i);else{e=i;var r=it;it|=2;var s=X_();(Xt!==t||qt!==e)&&(Di=null,ao=Lt()+500,jr(t,e));do try{aS();break}catch(a){W_(t,a)}while(!0);Ph(),mu.current=s,it=r,Nt!==null?e=0:(Xt=null,qt=0,e=zt)}if(e!==0){if(e===2&&(r=wf(t),r!==0&&(i=r,e=Qf(t,r))),e===1)throw n=wa,jr(t,0),ur(t,i),xn(t,Lt()),n;if(e===6)ur(t,i);else{if(r=t.current.alternate,!(i&30)&&!sS(r)&&(e=_u(t,i),e===2&&(s=wf(t),s!==0&&(i=s,e=Qf(t,s))),e===1))throw n=wa,jr(t,0),ur(t,i),xn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:zr(t,mn,Di);break;case 3:if(ur(t,i),(i&130023424)===i&&(e=Wh+500-Lt(),10<e)){if(eu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=If(zr.bind(null,t,mn,Di),e);break}zr(t,mn,Di);break;case 4:if(ur(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*rS(i/1960))-i,10<i){t.timeoutHandle=If(zr.bind(null,t,mn,Di),i);break}zr(t,mn,Di);break;case 5:zr(t,mn,Di);break;default:throw Error(re(329))}}}return xn(t,Lt()),t.callbackNode===n?G_.bind(null,t):null}function Qf(t,e){var n=sa;return t.current.memoizedState.isDehydrated&&(jr(t,e).flags|=256),t=_u(t,e),t!==2&&(e=mn,mn=n,e!==null&&ed(e)),t}function ed(t){mn===null?mn=t:mn.push.apply(mn,t)}function sS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!fi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~Gh,e&=~Hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function gm(t){if(it&6)throw Error(re(327));Zs();var e=eu(t,0);if(!(e&1))return xn(t,Lt()),null;var n=_u(t,e);if(t.tag!==0&&n===2){var i=wf(t);i!==0&&(e=i,n=Qf(t,i))}if(n===1)throw n=wa,jr(t,0),ur(t,e),xn(t,Lt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,mn,Di),xn(t,Lt()),null}function Xh(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(ao=Lt()+500,Ou&&Pr())}}function ts(t){dr!==null&&dr.tag===0&&!(it&6)&&Zs();var e=it;it|=1;var n=qn.transition,i=ft;try{if(qn.transition=null,ft=1,t)return t()}finally{ft=i,qn.transition=n,it=e,!(it&6)&&Pr()}}function Yh(){wn=Hs.current,St(Hs)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ny(n)),Nt!==null)for(n=Nt.return;n!==null;){var i=n;switch(Ah(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&su();break;case 3:so(),St(vn),St(nn),Nh();break;case 5:Uh(i);break;case 4:so();break;case 13:St(wt);break;case 19:St(wt);break;case 10:Lh(i.type._context);break;case 22:case 23:Yh()}n=n.return}if(Xt=t,Nt=t=yr(t.current,null),qt=wn=e,zt=0,wa=null,Gh=Hu=es=0,mn=sa=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Wr=null}return t}function W_(t,e){do{var n=Nt;try{if(Ph(),Ol.current=pu,hu){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hu=!1}if(Qr=0,Gt=Ot=Ct=null,ia=!1,Ma=0,Vh.current=null,n===null||n.return===null){zt=1,wa=e,Nt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=im(o);if(p!==null){p.flags&=-257,rm(p,o,a,s,e),p.mode&1&&nm(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){nm(s,u,e),$h();break e}l=Error(re(426))}}else if(Et&&a.mode&1){var m=im(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),rm(m,o,a,s,e),Ch(oo(l,a));break e}}s=l=oo(l,a),zt!==4&&(zt=2),sa===null?sa=[s]:sa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=C_(s,l,e);Kp(s,f);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(_r===null||!_r.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=R_(s,a,e);Kp(s,x);break e}}s=s.return}while(s!==null)}$_(n)}catch(C){e=C,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(!0)}function X_(){var t=mu.current;return mu.current=pu,t===null?pu:t}function $h(){(zt===0||zt===3||zt===2)&&(zt=4),Xt===null||!(es&268435455)&&!(Hu&268435455)||ur(Xt,qt)}function _u(t,e){var n=it;it|=2;var i=X_();(Xt!==t||qt!==e)&&(Di=null,jr(t,e));do try{oS();break}catch(r){W_(t,r)}while(!0);if(Ph(),it=n,mu.current=i,Nt!==null)throw Error(re(261));return Xt=null,qt=0,zt}function oS(){for(;Nt!==null;)Y_(Nt)}function aS(){for(;Nt!==null&&!Dx();)Y_(Nt)}function Y_(t){var e=j_(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?$_(t):Nt=e,Vh.current=null}function $_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eS(n,e),n!==null){n.flags&=32767,Nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{zt=6,Nt=null;return}}else if(n=Qy(n,e,wn),n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);zt===0&&(zt=5)}function zr(t,e,n){var i=ft,r=qn.transition;try{qn.transition=null,ft=1,lS(t,e,n,i)}finally{qn.transition=r,ft=i}return null}function lS(t,e,n,i){do Zs();while(dr!==null);if(it&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Vx(t,s),t===Xt&&(Nt=Xt=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nl||(nl=!0,K_(Ql,function(){return Zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var o=ft;ft=1;var a=it;it|=4,Vh.current=null,nS(t,n),H_(n,t),Ry(bf),tu=!!Lf,bf=Lf=null,t.current=n,iS(n),Ix(),it=a,ft=o,qn.transition=s}else t.current=n;if(nl&&(nl=!1,dr=t,vu=r),s=t.pendingLanes,s===0&&(_r=null),Fx(n.stateNode),xn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(gu)throw gu=!1,t=Zf,Zf=null,t;return vu&1&&t.tag!==0&&Zs(),s=t.pendingLanes,s&1?t===Jf?oa++:(oa=0,Jf=t):oa=0,Pr(),null}function Zs(){if(dr!==null){var t=Cv(vu),e=qn.transition,n=ft;try{if(qn.transition=null,ft=16>t?16:t,dr===null)var i=!1;else{if(t=dr,dr=null,vu=0,it&6)throw Error(re(331));var r=it;for(it|=4,xe=t.current;xe!==null;){var s=xe,o=s.child;if(xe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(xe=u;xe!==null;){var c=xe;switch(c.tag){case 0:case 11:case 15:ra(8,c,s)}var h=c.child;if(h!==null)h.return=c,xe=h;else for(;xe!==null;){c=xe;var d=c.sibling,p=c.return;if(z_(c),c===u){xe=null;break}if(d!==null){d.return=p,xe=d;break}xe=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}xe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ra(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,xe=f;break e}xe=s.return}}var v=t.current;for(xe=v;xe!==null;){o=xe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,xe=_;else e:for(o=v;xe!==null;){if(a=xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ku(9,a)}}catch(C){Pt(a,a.return,C)}if(a===o){xe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,xe=x;break e}xe=a.return}}if(it=r,Pr(),Mi&&typeof Mi.onPostCommitFiberRoot=="function")try{Mi.onPostCommitFiberRoot(Du,t)}catch{}i=!0}return i}finally{ft=n,qn.transition=e}}return!1}function vm(t,e,n){e=oo(n,e),e=C_(t,e,1),t=vr(t,e,1),e=un(),t!==null&&(Da(t,1,e),xn(t,e))}function Pt(t,e,n){if(t.tag===3)vm(t,t,n);else for(;e!==null;){if(e.tag===3){vm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_r===null||!_r.has(i))){t=oo(n,t),t=R_(e,t,1),e=vr(e,t,1),t=un(),e!==null&&(Da(e,1,t),xn(e,t));break}}e=e.return}}function uS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(qt&n)===n&&(zt===4||zt===3&&(qt&130023424)===qt&&500>Lt()-Wh?jr(t,0):Gh|=n),xn(t,e)}function q_(t,e){e===0&&(t.mode&1?(e=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):e=1);var n=un();t=Wi(t,e),t!==null&&(Da(t,e,n),xn(t,n))}function cS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),q_(t,n)}function fS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),q_(t,n)}var j_;j_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,Jy(t,e,n);gn=!!(t.flags&131072)}else gn=!1,Et&&e.flags&1048576&&Qv(e,lu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Bl(t,e),t=e.pendingProps;var r=no(e,nn.current);Ks(e,n),r=Oh(null,e,i,t,r,n);var s=zh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,ou(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Dh(e),r.updater=Bu,e.stateNode=r,r._reactInternals=e,kf(e,i,t,n),e=Gf(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&wh(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Bl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=hS(i),t=ii(i,t),r){case 0:e=Vf(null,e,i,t,n);break e;case 1:e=am(null,e,i,t,n);break e;case 11:e=sm(null,e,i,t,n);break e;case 14:e=om(null,e,i,ii(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Vf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),am(t,e,i,r,n);case 3:e:{if(D_(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,s_(t,e),fu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=oo(Error(re(423)),e),e=lm(t,e,i,n,r);break e}else if(i!==r){r=oo(Error(re(424)),e),e=lm(t,e,i,n,r);break e}else for(Cn=gr(e.stateNode.containerInfo.firstChild),Rn=e,Et=!0,si=null,n=i_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(io(),i===r){e=Xi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return o_(e),t===null&&Of(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Df(i,r)?o=null:s!==null&&Df(i,s)&&(e.flags|=32),b_(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&Of(e),null;case 13:return I_(t,e,n);case 4:return Ih(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ro(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),sm(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,mt(uu,i._currentValue),i._currentValue=o,s!==null)if(fi(s.value,o)){if(s.children===r.children&&!vn.current){e=Xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ki(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ks(e,n),r=jn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=ii(i,e.pendingProps),r=ii(i.type,r),om(t,e,i,r,n);case 15:return P_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Bl(t,e),e.tag=1,_n(i)?(t=!0,ou(e)):t=!1,Ks(e,n),A_(e,i,r),kf(e,i,r,n),Gf(null,e,i,!0,t,n);case 19:return U_(t,e,n);case 22:return L_(t,e,n)}throw Error(re(156,e.tag))};function K_(t,e){return Ev(t,e)}function dS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,n,i){return new dS(t,e,n,i)}function qh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hS(t){if(typeof t=="function")return qh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hh)return 11;if(t===ph)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=Xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")qh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bs:return Kr(n.children,r,s,e);case dh:o=8,r|=8;break;case cf:return t=Xn(12,n,e,r|2),t.elementType=cf,t.lanes=s,t;case ff:return t=Xn(13,n,e,r),t.elementType=ff,t.lanes=s,t;case df:return t=Xn(19,n,e,r),t.elementType=df,t.lanes=s,t;case ov:return Vu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rv:o=10;break e;case sv:o=9;break e;case hh:o=11;break e;case ph:o=14;break e;case or:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Xn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Kr(t,e,n,i){return t=Xn(7,t,i,e),t.lanes=n,t}function Vu(t,e,n,i){return t=Xn(22,t,i,e),t.elementType=ov,t.lanes=n,t.stateNode={isHidden:!1},t}function Mc(t,e,n){return t=Xn(6,t,null,e),t.lanes=n,t}function Ec(t,e,n){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ic(0),this.expirationTimes=ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ic(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jh(t,e,n,i,r,s,o,a,l){return t=new pS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dh(s),t}function mS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Z_(t){if(!t)return Tr;t=t._reactInternals;e:{if(as(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(_n(n))return Zv(t,n,e)}return e}function J_(t,e,n,i,r,s,o,a,l){return t=jh(n,i,!0,t,r,s,o,a,l),t.context=Z_(null),n=t.current,i=un(),r=xr(n),s=ki(i,r),s.callback=e??null,vr(n,s,r),t.current.lanes=r,Da(t,r,i),xn(t,i),t}function Gu(t,e,n,i){var r=e.current,s=un(),o=xr(r);return n=Z_(n),e.context===null?e.context=n:e.pendingContext=n,e=ki(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=vr(r,e,o),t!==null&&(ui(t,r,o,s),Fl(t,r,o)),o}function xu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kh(t,e){_m(t,e),(t=t.alternate)&&_m(t,e)}function gS(){return null}var Q_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zh(t){this._internalRoot=t}Wu.prototype.render=Zh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Gu(t,e,null,null)};Wu.prototype.unmount=Zh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){Gu(null,t,null,null)}),e[Gi]=null}};function Wu(t){this._internalRoot=t}Wu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&Dv(t)}};function Jh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xm(){}function vS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=xu(o);s.call(u)}}var o=J_(e,i,t,0,null,!1,!1,"",xm);return t._reactRootContainer=o,t[Gi]=o.current,va(t.nodeType===8?t.parentNode:t),ts(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=xu(l);a.call(u)}}var l=jh(t,0,!1,null,null,!1,!1,"",xm);return t._reactRootContainer=l,t[Gi]=l.current,va(t.nodeType===8?t.parentNode:t),ts(function(){Gu(e,l,n,i)}),l}function Yu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=xu(o);a.call(l)}}Gu(e,o,t,r)}else o=vS(n,e,t,r,i);return xu(o)}Rv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Go(e.pendingLanes);n!==0&&(vh(e,n|1),xn(e,Lt()),!(it&6)&&(ao=Lt()+500,Pr()))}break;case 13:ts(function(){var i=Wi(t,1);if(i!==null){var r=un();ui(i,t,1,r)}}),Kh(t,1)}};_h=function(t){if(t.tag===13){var e=Wi(t,134217728);if(e!==null){var n=un();ui(e,t,134217728,n)}Kh(t,134217728)}};Pv=function(t){if(t.tag===13){var e=xr(t),n=Wi(t,e);if(n!==null){var i=un();ui(n,t,e,i)}Kh(t,e)}};Lv=function(){return ft};bv=function(t,e){var n=ft;try{return ft=t,e()}finally{ft=n}};Mf=function(t,e,n){switch(e){case"input":if(mf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Fu(i);if(!r)throw Error(re(90));lv(i),mf(i,r)}}}break;case"textarea":cv(t,n);break;case"select":e=n.value,e!=null&&Ys(t,!!n.multiple,e,!1)}};vv=Xh;_v=ts;var _S={usingClientEntryPoint:!1,Events:[Ua,Ns,Fu,mv,gv,Xh]},Do={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xS={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sv(t),t===null?null:t.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||gS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Du=il.inject(xS),Mi=il}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_S;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jh(e))throw Error(re(200));return mS(t,e,null,n)};In.createRoot=function(t,e){if(!Jh(t))throw Error(re(299));var n=!1,i="",r=Q_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jh(t,1,!1,null,null,n,!1,i,r),t[Gi]=e.current,va(t.nodeType===8?t.parentNode:t),new Zh(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Sv(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return ts(t)};In.hydrate=function(t,e,n){if(!Xu(e))throw Error(re(200));return Yu(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!Jh(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Q_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=J_(e,null,t,1,n??null,r,!1,s,o),t[Gi]=e.current,va(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Wu(e)};In.render=function(t,e,n){if(!Xu(e))throw Error(re(200));return Yu(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!Xu(t))throw Error(re(40));return t._reactRootContainer?(ts(function(){Yu(null,null,t,!1,function(){t._reactRootContainer=null,t[Gi]=null})}),!0):!1};In.unstable_batchedUpdates=Xh;In.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Xu(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Yu(t,e,n,!1,i)};In.version="18.3.1-next-f1338f8080-20240426";function e0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e0)}catch(t){console.error(t)}}e0(),ev.exports=In;var yS=ev.exports,ym=yS;lf.createRoot=ym.createRoot,lf.hydrateRoot=ym.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qh="171",SS=0,Sm=1,MS=2,t0=1,ES=2,bi=3,wr=0,yn=1,Ni=2,Sr=0,Js=1,Mm=2,Em=3,Tm=4,TS=5,Hr=100,wS=101,AS=102,CS=103,RS=104,PS=200,LS=201,bS=202,DS=203,td=204,nd=205,IS=206,US=207,NS=208,FS=209,OS=210,zS=211,BS=212,kS=213,HS=214,id=0,rd=1,sd=2,lo=3,od=4,ad=5,ld=6,ud=7,n0=0,VS=1,GS=2,Mr=0,WS=1,XS=2,YS=3,$S=4,qS=5,jS=6,KS=7,i0=300,uo=301,co=302,cd=303,fd=304,$u=306,dd=1e3,Yr=1001,hd=1002,Pn=1003,ZS=1004,rl=1005,yi=1006,Tc=1007,$r=1008,Yi=1009,r0=1010,s0=1011,Aa=1012,ep=1013,ns=1014,Si=1015,Fa=1016,tp=1017,np=1018,fo=1020,o0=35902,a0=1021,l0=1022,ai=1023,u0=1024,c0=1025,Qs=1026,ho=1027,ip=1028,rp=1029,f0=1030,sp=1031,op=1033,Gl=33776,Wl=33777,Xl=33778,Yl=33779,pd=35840,md=35841,gd=35842,vd=35843,_d=36196,xd=37492,yd=37496,Sd=37808,Md=37809,Ed=37810,Td=37811,wd=37812,Ad=37813,Cd=37814,Rd=37815,Pd=37816,Ld=37817,bd=37818,Dd=37819,Id=37820,Ud=37821,$l=36492,Nd=36494,Fd=36495,d0=36283,Od=36284,zd=36285,Bd=36286,JS=3200,QS=3201,eM=0,tM=1,cr="",kn="srgb",po="srgb-linear",yu="linear",ht="srgb",ds=7680,wm=519,nM=512,iM=513,rM=514,h0=515,sM=516,oM=517,aM=518,lM=519,Am=35044,Cm="300 es",Bi=2e3,Su=2001;class So{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=Math.PI/180,kd=180/Math.PI;function Oa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function uM(t,e){return(t%e+e)%e}function Ac(t,e,n){return(1-n)*t+n*e}function Io(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,s,o,a,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],p=i[5],g=i[8],y=r[0],m=r[3],f=r[6],v=r[1],_=r[4],x=r[7],C=r[2],w=r[5],A=r[8];return s[0]=o*y+a*v+l*C,s[3]=o*m+a*_+l*w,s[6]=o*f+a*x+l*A,s[1]=u*y+c*v+h*C,s[4]=u*m+c*_+h*w,s[7]=u*f+c*x+h*A,s[2]=d*y+p*v+g*C,s[5]=d*m+p*_+g*w,s[8]=d*f+p*x+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*s,p=u*s-o*l,g=n*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(c*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Cc.makeScale(e,n)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cc=new Be;function p0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Mu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function cM(){const t=Mu("canvas");return t.style.display="block",t}const Rm={};function Rs(t){t in Rm||(Rm[t]=!0,console.warn(t))}function fM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function dM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function hM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pm=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lm=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pM(){const t={enabled:!0,workingColorSpace:po,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ht&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(r.r=eo(r.r),r.g=eo(r.g),r.b=eo(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===cr?yu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[po]:{primaries:e,whitePoint:i,transfer:yu,toXYZ:Pm,fromXYZ:Lm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:Pm,fromXYZ:Lm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),t}const ot=pM();function Hi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function eo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let hs;class mM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hs===void 0&&(hs=Mu("canvas")),hs.width=e.width,hs.height=e.height;const i=hs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=hs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Mu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hi(n[i]/255)*255):n[i]=Hi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gM=0;class m0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Oa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rc(r[o].image)):s.push(Rc(r[o]))}else s=Rc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Rc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?mM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vM=0;class tn extends So{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=Yr,r=Yr,s=yi,o=$r,a=ai,l=Yi,u=tn.DEFAULT_ANISOTROPY,c=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Oa(),this.name="",this.source=new m0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==i0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dd:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dd:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=i0;tn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,x=(p+1)/2,C=(f+1)/2,w=(c+d)/4,A=(h+y)/4,P=(g+m)/4;return _>x&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=A/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-y)/v,this.z=(d-c)/v,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _M extends So{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new m0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends _M{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class g0 extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xM extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class za{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=y;return}if(h!==y||l!==d||u!==p||c!==g){let m=1-a;const f=l*d+u*p+c*g+h*y,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const C=Math.sqrt(_),w=Math.atan2(C,f*v);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const x=a*v;if(l=l*m+d*x,u=u*m+p*x,c=c*m+g*x,h=h*m+y*x,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=C,u*=C,c*=C,h*=C}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+c*h+l*p-u*d,e[n+1]=l*g+c*d+u*h-a*p,e[n+2]=u*g+c*p+a*d-l*h,e[n+3]=c*g-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*c*h+u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h-d*p*g;break;case"YXZ":this._x=d*c*h+u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h+d*p*g;break;case"ZXY":this._x=d*c*h-u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h-d*p*g;break;case"ZYX":this._x=d*c*h-u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h+d*p*g;break;case"YZX":this._x=d*c*h+u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h-d*p*g;break;case"XZY":this._x=d*c*h-u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pc=new O,bm=new za;class ls{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sl.copy(i.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),ol.subVectors(this.max,Uo),ps.subVectors(e.a,Uo),ms.subVectors(e.b,Uo),gs.subVectors(e.c,Uo),er.subVectors(ms,ps),tr.subVectors(gs,ms),br.subVectors(ps,gs);let n=[0,-er.z,er.y,0,-tr.z,tr.y,0,-br.z,br.y,er.z,0,-er.x,tr.z,0,-tr.x,br.z,0,-br.x,-er.y,er.x,0,-tr.y,tr.x,0,-br.y,br.x,0];return!Lc(n,ps,ms,gs,ol)||(n=[1,0,0,0,1,0,0,0,1],!Lc(n,ps,ms,gs,ol))?!1:(al.crossVectors(er,tr),n=[al.x,al.y,al.z],Lc(n,ps,ms,gs,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new O,new O,new O,new O,new O,new O,new O,new O],ei=new O,sl=new ls,ps=new O,ms=new O,gs=new O,er=new O,tr=new O,br=new O,Uo=new O,ol=new O,al=new O,Dr=new O;function Lc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Dr.fromArray(t,s);const a=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),l=e.dot(Dr),u=n.dot(Dr),c=i.dot(Dr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const yM=new ls,No=new O,bc=new O;class Ba{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):yM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const n=No.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(No,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(bc)),this.expandByPoint(No.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new O,Dc=new O,ll=new O,nr=new O,Ic=new O,ul=new O,Uc=new O;class v0{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,n),Ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Dc.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),nr.copy(this.origin).sub(Dc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ll),a=nr.dot(this.direction),l=-nr.dot(ll),u=nr.lengthSq(),c=Math.abs(1-o*o);let h,d,p,g;if(c>0)if(h=o*l-a,d=o*a-l,g=s*c,h>=0)if(d>=-g)if(d<=g){const y=1/c;h*=y,d*=y,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Dc).addScaledVector(ll,d),p}intersectSphere(e,n){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,n,i,r,s){Ic.subVectors(n,e),ul.subVectors(i,e),Uc.crossVectors(Ic,ul);let o=this.direction.dot(Uc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;nr.subVectors(this.origin,e);const l=a*this.direction.dot(ul.crossVectors(nr,ul));if(l<0)return null;const u=a*this.direction.dot(Ic.cross(nr));if(u<0||l+u>o)return null;const c=-a*nr.dot(Uc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,o,a,l,u,c,h,d,p,g,y,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,h,d,p,g,y,m)}set(e,n,i,r,s,o,a,l,u,c,h,d,p,g,y,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*h,g=a*c,y=a*h;n[0]=l*c,n[4]=-l*h,n[8]=u,n[1]=p+g*u,n[5]=d-y*u,n[9]=-a*l,n[2]=y-d*u,n[6]=g+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*h,g=u*c,y=u*h;n[0]=d+y*a,n[4]=g*a-p,n[8]=o*u,n[1]=o*h,n[5]=o*c,n[9]=-a,n[2]=p*a-g,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*h,g=u*c,y=u*h;n[0]=d-y*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*c,n[9]=y-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*h,g=a*c,y=a*h;n[0]=l*c,n[4]=g*u-p,n[8]=d*u+y,n[1]=l*h,n[5]=y*u+d,n[9]=p*u-g,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,g=a*l,y=a*u;n[0]=l*c,n[4]=y-d*h,n[8]=g*h+p,n[1]=h,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*h+g,n[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,p=o*u,g=a*l,y=a*u;n[0]=l*c,n[4]=-h,n[8]=u*c,n[1]=d*h+y,n[5]=o*c,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*c,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SM,e,MM)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),ir.crossVectors(i,Mn),ir.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),ir.crossVectors(i,Mn)),ir.normalize(),cl.crossVectors(Mn,ir),r[0]=ir.x,r[4]=cl.x,r[8]=Mn.x,r[1]=ir.y,r[5]=cl.y,r[9]=Mn.y,r[2]=ir.z,r[6]=cl.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],v=i[3],_=i[7],x=i[11],C=i[15],w=r[0],A=r[4],P=r[8],T=r[12],S=r[1],L=r[5],G=r[9],z=r[13],W=r[2],D=r[6],H=r[10],q=r[14],b=r[3],Y=r[7],K=r[11],ne=r[15];return s[0]=o*w+a*S+l*W+u*b,s[4]=o*A+a*L+l*D+u*Y,s[8]=o*P+a*G+l*H+u*K,s[12]=o*T+a*z+l*q+u*ne,s[1]=c*w+h*S+d*W+p*b,s[5]=c*A+h*L+d*D+p*Y,s[9]=c*P+h*G+d*H+p*K,s[13]=c*T+h*z+d*q+p*ne,s[2]=g*w+y*S+m*W+f*b,s[6]=g*A+y*L+m*D+f*Y,s[10]=g*P+y*G+m*H+f*K,s[14]=g*T+y*z+m*q+f*ne,s[3]=v*w+_*S+x*W+C*b,s[7]=v*A+_*L+x*D+C*Y,s[11]=v*P+_*G+x*H+C*K,s[15]=v*T+_*z+x*q+C*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*p-i*l*p)+y*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+n*u*h-n*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-n*l*h+n*a*d+r*o*h-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],v=h*m*u-y*d*u+y*l*p-a*m*p-h*l*f+a*d*f,_=g*d*u-c*m*u-g*l*p+o*m*p+c*l*f-o*d*f,x=c*y*u-g*h*u+g*a*p-o*y*p-c*a*f+o*h*f,C=g*h*l-c*y*l-g*a*d+o*y*d+c*a*m-o*h*m,w=n*v+i*_+r*x+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=v*A,e[1]=(y*d*s-h*m*s-y*r*p+i*m*p+h*r*f-i*d*f)*A,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*f+i*l*f)*A,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*p-i*l*p)*A,e[4]=_*A,e[5]=(c*m*s-g*d*s+g*r*p-n*m*p-c*r*f+n*d*f)*A,e[6]=(g*l*s-o*m*s-g*r*u+n*m*u+o*r*f-n*l*f)*A,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*p+n*l*p)*A,e[8]=x*A,e[9]=(g*h*s-c*y*s-g*i*p+n*y*p+c*i*f-n*h*f)*A,e[10]=(o*y*s-g*a*s+g*i*u-n*y*u-o*i*f+n*a*f)*A,e[11]=(c*a*s-o*h*s-c*i*u+n*h*u+o*i*p-n*a*p)*A,e[12]=C*A,e[13]=(c*y*r-g*h*r+g*i*d-n*y*d-c*i*m+n*h*m)*A,e[14]=(g*a*r-o*y*r-g*i*l+n*y*l+o*i*m-n*a*m)*A,e[15]=(o*h*r-c*a*r+c*i*l-n*h*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,h=a+a,d=s*u,p=s*c,g=s*h,y=o*c,m=o*h,f=a*h,v=l*u,_=l*c,x=l*h,C=i.x,w=i.y,A=i.z;return r[0]=(1-(y+f))*C,r[1]=(p+x)*C,r[2]=(g-_)*C,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(d+f))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+_)*A,r[9]=(m-v)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=vs.set(r[0],r[1],r[2]).length();const o=vs.set(r[4],r[5],r[6]).length(),a=vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const u=1/s,c=1/o,h=1/a;return ti.elements[0]*=u,ti.elements[1]*=u,ti.elements[2]*=u,ti.elements[4]*=c,ti.elements[5]*=c,ti.elements[6]*=c,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,n.setFromRotationMatrix(ti),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Bi){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===Bi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Su)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Bi){const l=this.elements,u=1/(n-e),c=1/(i-r),h=1/(o-s),d=(n+e)*u,p=(i+r)*c;let g,y;if(a===Bi)g=(o+s)*h,y=-2*h;else if(a===Su)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vs=new O,ti=new vt,SM=new O(0,0,0),MM=new O(1,1,1),ir=new O,cl=new O,Mn=new O,Dm=new vt,Im=new za;class $i{constructor(e=0,n=0,i=0,r=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Im.setFromEuler(this),this.setFromQuaternion(Im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class ap{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let EM=0;const Um=new O,_s=new za,Ci=new vt,fl=new O,Fo=new O,TM=new O,wM=new za,Nm=new O(1,0,0),Fm=new O(0,1,0),Om=new O(0,0,1),zm={type:"added"},AM={type:"removed"},xs={type:"childadded",child:null},Nc={type:"childremoved",child:null};class Ln extends So{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new O,n=new $i,i=new za,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Be}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Nm,e)}rotateY(e){return this.rotateOnAxis(Fm,e)}rotateZ(e){return this.rotateOnAxis(Om,e)}translateOnAxis(e,n){return Um.copy(e).applyQuaternion(this.quaternion),this.position.add(Um.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Nm,e)}translateY(e){return this.translateOnAxis(Fm,e)}translateZ(e){return this.translateOnAxis(Om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?fl.copy(e):fl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Fo,fl,this.up):Ci.lookAt(fl,Fo,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),_s.setFromRotationMatrix(Ci),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zm),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(AM),Nc.child=e,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zm),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,TM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,wM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ln.DEFAULT_UP=new O(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new O,Ri=new O,Fc=new O,Pi=new O,ys=new O,Ss=new O,Bm=new O,Oc=new O,zc=new O,Bc=new O,kc=new It,Hc=new It,Vc=new It;class oi{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ni.subVectors(e,n),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ni.subVectors(r,n),Ri.subVectors(i,n),Fc.subVectors(e,n);const o=ni.dot(ni),a=ni.dot(Ri),l=ni.dot(Fc),u=Ri.dot(Ri),c=Ri.dot(Fc),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(u*l-a*c)*d,g=(o*c-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return kc.setScalar(0),Hc.setScalar(0),Vc.setScalar(0),kc.fromBufferAttribute(e,n),Hc.fromBufferAttribute(e,i),Vc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(kc,s.x),o.addScaledVector(Hc,s.y),o.addScaledVector(Vc,s.z),o}static isFrontFacing(e,n,i,r){return ni.subVectors(i,n),Ri.subVectors(e,n),ni.cross(Ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ni.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ys.subVectors(r,i),Ss.subVectors(s,i),Oc.subVectors(e,i);const l=ys.dot(Oc),u=Ss.dot(Oc);if(l<=0&&u<=0)return n.copy(i);zc.subVectors(e,r);const c=ys.dot(zc),h=Ss.dot(zc);if(c>=0&&h<=c)return n.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(ys,o);Bc.subVectors(e,s);const p=ys.dot(Bc),g=Ss.dot(Bc);if(g>=0&&p<=g)return n.copy(s);const y=p*u-l*g;if(y<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(Ss,a);const m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return Bm.subVectors(s,r),a=(h-c)/(h-c+(p-g)),n.copy(r).addScaledVector(Bm,a);const f=1/(m+y+d);return o=y*f,a=d*f,n.copy(i).addScaledVector(ys,o).addScaledVector(Ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Gc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=uM(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Gc(o,s,e+1/3),this.g=Gc(o,s,e),this.b=Gc(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=_0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return ot.fromWorkingColorSpace(Qt.copy(this),e),Math.round($e(Qt.r*255,0,255))*65536+Math.round($e(Qt.g*255,0,255))*256+Math.round($e(Qt.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=kn){ot.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+n,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(rr),e.getHSL(dl);const i=Ac(rr.h,dl.h,n),r=Ac(rr.s,dl.s,n),s=Ac(rr.l,dl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new We;We.NAMES=_0;let CM=0;class qu extends So{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Oa(),this.name="",this.type="Material",this.blending=Js,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=td,this.blendDst=nd,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==wr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==td&&(i.blendSrc=this.blendSrc),this.blendDst!==nd&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ii extends qu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=n0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new O,hl=new Ne;class ci{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Am,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Io(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Io(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Io(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Io(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Io(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Am&&(e.usage=this.usage),e}}class x0 extends ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class y0 extends ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class bn extends ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}let RM=0;const Bn=new vt,Wc=new Ln,Ms=new O,En=new ls,Oo=new ls,Vt=new O;class Ki extends So{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p0(e)?y0:x0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return Wc.lookAt(e),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ba);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Oo.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(En.min,Oo.min),En.expandByPoint(Vt),Vt.addVectors(En.max,Oo.max),En.expandByPoint(Vt)):(En.expandByPoint(Oo.min),En.expandByPoint(Oo.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Vt.fromBufferAttribute(a,u),l&&(Ms.fromBufferAttribute(e,u),Vt.add(Ms)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new O,l[P]=new O;const u=new O,c=new O,h=new O,d=new Ne,p=new Ne,g=new Ne,y=new O,m=new O;function f(P,T,S){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,S),c.sub(u),h.sub(u),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(y.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(L),a[P].add(y),a[T].add(y),a[S].add(y),l[P].add(m),l[T].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,T=v.length;P<T;++P){const S=v[P],L=S.start,G=S.count;for(let z=L,W=L+G;z<W;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const _=new O,x=new O,C=new O,w=new O;function A(P){C.fromBufferAttribute(r,P),w.copy(C);const T=a[P];_.copy(T),_.sub(C.multiplyScalar(C.dot(T))).normalize(),x.crossVectors(w,T);const L=x.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,L)}for(let P=0,T=v.length;P<T;++P){const S=v[P],L=S.start,G=S.count;for(let z=L,W=L+G;z<W;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,u=new O,c=new O,h=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let f=0;f<c;f++)d[g++]=u[p++]}return new ci(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ki,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,p=h.length;d<p;d++)c.push(h[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const km=new vt,Ir=new v0,pl=new Ba,Hm=new O,ml=new O,gl=new O,vl=new O,Xc=new O,_l=new O,Vm=new O,xl=new O;class Wt extends Ln{constructor(e=new Ki,n=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_l.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(Xc.fromBufferAttribute(h,e),o?_l.addScaledVector(Xc,c):_l.addScaledVector(Xc.sub(n),c))}n.add(_l)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(pl.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(pl,Hm)===null||Ir.origin.distanceToSquared(Hm)>(e.far-e.near)**2))&&(km.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(km),!(i.boundingBox!==null&&Ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,C=_;x<C;x+=3){const w=a.getX(x),A=a.getX(x+1),P=a.getX(x+2);r=yl(this,f,e,i,u,c,h,w,A,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const v=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);r=yl(this,o,e,i,u,c,h,v,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,C=_;x<C;x+=3){const w=x,A=x+1,P=x+2;r=yl(this,f,e,i,u,c,h,w,A,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const v=m,_=m+1,x=m+2;r=yl(this,o,e,i,u,c,h,v,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function PM(t,e,n,i,r,s,o,a){let l;if(e.side===yn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===wr,a),l===null)return null;xl.copy(a),xl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(xl);return u<n.near||u>n.far?null:{distance:u,point:xl.clone(),object:t}}function yl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,ml),t.getVertexPosition(l,gl),t.getVertexPosition(u,vl);const c=PM(t,e,n,i,ml,gl,vl,Vm);if(c){const h=new O;oi.getBarycoord(Vm,ml,gl,vl,h),r&&(c.uv=oi.getInterpolatedAttribute(r,a,l,u,h,new Ne)),s&&(c.uv1=oi.getInterpolatedAttribute(s,a,l,u,h,new Ne)),o&&(c.normal=oi.getInterpolatedAttribute(o,a,l,u,h,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new O,materialIndex:0};oi.getNormal(ml,gl,vl,d.normal),c.face=d,c.barycoord=h}return c}class ka extends Ki{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bn(u,3)),this.setAttribute("normal",new bn(c,3)),this.setAttribute("uv",new bn(h,2));function g(y,m,f,v,_,x,C,w,A,P,T){const S=x/A,L=C/P,G=x/2,z=C/2,W=w/2,D=A+1,H=P+1;let q=0,b=0;const Y=new O;for(let K=0;K<H;K++){const ne=K*L-z;for(let me=0;me<D;me++){const Fe=me*S-G;Y[y]=Fe*v,Y[m]=ne*_,Y[f]=W,u.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[f]=w>0?1:-1,c.push(Y.x,Y.y,Y.z),h.push(me/A),h.push(1-K/P),q+=1}}for(let K=0;K<P;K++)for(let ne=0;ne<A;ne++){const me=d+ne+D*K,Fe=d+ne+D*(K+1),$=d+(ne+1)+D*(K+1),Q=d+(ne+1)+D*K;l.push(me,Fe,Q),l.push(Fe,$,Q),b+=6}a.addGroup(p,b,T),p+=b,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=mo(t[n]);for(const r in i)e[r]=i[r]}return e}function LM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function S0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const bM={clone:mo,merge:an};var DM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends qu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DM,this.fragmentShader=IM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=LM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class M0 extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new O,Gm=new Ne,Wm=new Ne;class Gn extends M0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=kd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kd*2*Math.atan(Math.tan(wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,n){return this.getViewBounds(e,Gm,Wm),n.subVectors(Wm,Gm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Es=-90,Ts=1;class UM extends Ln{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(Es,Ts,e,n);r.layers=this.layers,this.add(r);const s=new Gn(Es,Ts,e,n);s.layers=this.layers,this.add(s);const o=new Gn(Es,Ts,e,n);o.layers=this.layers,this.add(o);const a=new Gn(Es,Ts,e,n);a.layers=this.layers,this.add(a);const l=new Gn(Es,Ts,e,n);l.layers=this.layers,this.add(l);const u=new Gn(Es,Ts,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Su)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class E0 extends tn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:uo,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class NM extends is{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new E0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ka(5,5,5),s=new Ar({name:"CubemapFromEquirect",uniforms:mo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Sr});s.uniforms.tEquirect.value=n;const o=new Wt(r,s),a=n.minFilter;return n.minFilter===$r&&(n.minFilter=yi),new UM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class FM extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class OM extends tn{constructor(e=null,n=1,i=1,r,s,o,a,l,u=Pn,c=Pn,h,d){super(null,o,a,l,u,c,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xm extends ci{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ws=new vt,Ym=new vt,Sl=[],$m=new ls,zM=new vt,zo=new Wt,Bo=new Ba;class BM extends Wt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Xm(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,zM)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ls),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ws),$m.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union($m)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ba),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ws),Bo.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(Bo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(zo.geometry=this.geometry,zo.material=this.material,zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bo.copy(this.boundingSphere),Bo.applyMatrix4(i),e.ray.intersectsSphere(Bo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ws),Ym.multiplyMatrices(i,ws),zo.matrixWorld=Ym,zo.raycast(e,Sl);for(let o=0,a=Sl.length;o<a;o++){const l=Sl[o];l.instanceId=s,l.object=this,n.push(l)}Sl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Xm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new OM(new Float32Array(r*this.count),r,this.count,ip,Si));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Yc=new O,kM=new O,HM=new Be;class Br{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yc.subVectors(i,n).cross(kM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||HM.getNormalMatrix(e),r=this.coplanarPoint(Yc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Ba,Ml=new O;class T0{constructor(e=new Br,n=new Br,i=new Br,r=new Br,s=new Br,o=new Br){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Bi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],p=r[8],g=r[9],y=r[10],m=r[11],f=r[12],v=r[13],_=r[14],x=r[15];if(i[0].setComponents(l-s,d-u,m-p,x-f).normalize(),i[1].setComponents(l+s,d+u,m+p,x+f).normalize(),i[2].setComponents(l+o,d+c,m+g,x+v).normalize(),i[3].setComponents(l-o,d-c,m-g,x-v).normalize(),i[4].setComponents(l-a,d-h,m-y,x-_).normalize(),n===Bi)i[5].setComponents(l+a,d+h,m+y,x+_).normalize();else if(n===Su)i[5].setComponents(a,h,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ml.x=r.normal.x>0?e.max.x:e.min.x,Ml.y=r.normal.y>0?e.max.y:e.min.y,Ml.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qr extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}class VM extends tn{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class w0 extends tn{constructor(e,n,i,r,s,o,a,l,u,c=Qs){if(c!==Qs&&c!==ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Qs&&(i=ns),i===void 0&&c===ho&&(i=fo),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Zi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],d=i[r+1]-c,p=(o-c)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ne:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new O,r=[],s=[],o=[],a=new O,l=new vt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new O)}s[0]=new O,o[0]=new O;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($e(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos($e(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class A0 extends Zi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ne){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=u-this.aY;l=d*c-p*h+this.aX,u=d*h+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class GM extends A0{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function lp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,h){let d=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+h)+(l-a)/h;d*=c,p*=c,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const El=new O,$c=new lp,qc=new lp,jc=new lp;class Xo extends Zi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new O){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(El.subVectors(r[0],r[1]).add(r[0]),u=El);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(El.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=El),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(c),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),$c.initNonuniformCatmullRom(u.x,h.x,d.x,c.x,g,y,m),qc.initNonuniformCatmullRom(u.y,h.y,d.y,c.y,g,y,m),jc.initNonuniformCatmullRom(u.z,h.z,d.z,c.z,g,y,m)}else this.curveType==="catmullrom"&&($c.initCatmullRom(u.x,h.x,d.x,c.x,this.tension),qc.initCatmullRom(u.y,h.y,d.y,c.y,this.tension),jc.initCatmullRom(u.z,h.z,d.z,c.z,this.tension));return i.set($c.calc(l),qc.calc(l),jc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function qm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function WM(t,e){const n=1-t;return n*n*e}function XM(t,e){return 2*(1-t)*t*e}function YM(t,e){return t*t*e}function aa(t,e,n,i){return WM(t,e)+XM(t,n)+YM(t,i)}function $M(t,e){const n=1-t;return n*n*n*e}function qM(t,e){const n=1-t;return 3*n*n*t*e}function jM(t,e){return 3*(1-t)*t*t*e}function KM(t,e){return t*t*t*e}function la(t,e,n,i,r){return $M(t,e)+qM(t,n)+jM(t,i)+KM(t,r)}class ZM extends Zi{constructor(e=new Ne,n=new Ne,i=new Ne,r=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ne){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(la(e,r.x,s.x,o.x,a.x),la(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class JM extends Zi{constructor(e=new O,n=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(la(e,r.x,s.x,o.x,a.x),la(e,r.y,s.y,o.y,a.y),la(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class QM extends Zi{constructor(e=new Ne,n=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ne){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ne){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eE extends Zi{constructor(e=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new O){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tE extends Zi{constructor(e=new Ne,n=new Ne,i=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ne){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(aa(e,r.x,s.x,o.x),aa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C0 extends Zi{constructor(e=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(aa(e,r.x,s.x,o.x),aa(e,r.y,s.y,o.y),aa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nE extends Zi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ne){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(qm(a,l.x,u.x,c.x,h.x),qm(a,l.y,u.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ne().fromArray(r))}return this}}var iE=Object.freeze({__proto__:null,ArcCurve:GM,CatmullRomCurve3:Xo,CubicBezierCurve:ZM,CubicBezierCurve3:JM,EllipseCurve:A0,LineCurve:QM,LineCurve3:eE,QuadraticBezierCurve:tE,QuadraticBezierCurve3:C0,SplineCurve:nE});class ju extends Ki{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=n/l,p=[],g=[],y=[],m=[];for(let f=0;f<c;f++){const v=f*d-o;for(let _=0;_<u;_++){const x=_*h-s;g.push(x,-v,0),y.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const _=v+u*f,x=v+u*(f+1),C=v+1+u*(f+1),w=v+1+u*f;p.push(_,x,w),p.push(x,C,w)}this.setIndex(p),this.setAttribute("position",new bn(g,3)),this.setAttribute("normal",new bn(y,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vs extends Ki{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new O,d=new O,p=[],g=[],y=[],m=[];for(let f=0;f<=i;f++){const v=[],_=f/i;let x=0;f===0&&o===0?x=.5/n:f===i&&l===Math.PI&&(x=-.5/n);for(let C=0;C<=n;C++){const w=C/n;h.x=-e*Math.cos(r+w*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+w*s)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(w+x,1-_),v.push(u++)}c.push(v)}for(let f=0;f<i;f++)for(let v=0;v<n;v++){const _=c[f][v+1],x=c[f][v],C=c[f+1][v],w=c[f+1][v+1];(f!==0||o>0)&&p.push(_,x,w),(f!==i-1||l<Math.PI)&&p.push(x,C,w)}this.setIndex(p),this.setAttribute("position",new bn(g,3)),this.setAttribute("normal",new bn(y,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gs extends Ki{constructor(e=new C0(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new O,l=new O,u=new Ne;let c=new O;const h=[],d=[],p=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new bn(h,3)),this.setAttribute("normal",new bn(d,3)),this.setAttribute("uv",new bn(p,2));function y(){for(let _=0;_<n;_++)m(_);m(s===!1?n:0),v(),f()}function m(_){c=e.getPointAt(_/n,c);const x=o.normals[_],C=o.binormals[_];for(let w=0;w<=r;w++){const A=w/r*Math.PI*2,P=Math.sin(A),T=-Math.cos(A);l.x=T*x.x+P*C.x,l.y=T*x.y+P*C.y,l.z=T*x.z+P*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=c.x+i*l.x,a.y=c.y+i*l.y,a.z=c.z+i*l.z,h.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=n;_++)for(let x=1;x<=r;x++){const C=(r+1)*(_-1)+(x-1),w=(r+1)*_+(x-1),A=(r+1)*_+x,P=(r+1)*(_-1)+x;g.push(C,w,P),g.push(w,A,P)}}function v(){for(let _=0;_<=n;_++)for(let x=0;x<=r;x++)u.x=_/n,u.y=x/r,p.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Gs(new iE[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class rE extends qu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sE extends qu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class oE extends M0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class aE extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const jm=new vt;class lE{constructor(e,n,i=0,r=1/0){this.ray=new v0(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ap,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return jm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jm),this}intersectObject(e,n=!0,i=[]){return Hd(e,this,i,n),i.sort(Km),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Hd(e[r],this,i,n);return i.sort(Km),i}}function Km(t,e){return t.distance-e.distance}function Hd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Hd(s[o],e,n,!0)}}function Zm(t,e,n,i){const r=uE(i);switch(n){case a0:return t*e;case u0:return t*e;case c0:return t*e*2;case ip:return t*e/r.components*r.byteLength;case rp:return t*e/r.components*r.byteLength;case f0:return t*e*2/r.components*r.byteLength;case sp:return t*e*2/r.components*r.byteLength;case l0:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case op:return t*e*4/r.components*r.byteLength;case Gl:case Wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xl:case Yl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case md:case vd:return Math.max(t,16)*Math.max(e,8)/4;case pd:case gd:return Math.max(t,8)*Math.max(e,8)/2;case _d:case xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Md:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Td:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case wd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case bd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Id:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case $l:case Nd:case Fd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case d0:case Od:return Math.ceil(t/4)*Math.ceil(e/4)*8;case zd:case Bd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function uE(t){switch(t){case Yi:case r0:return{byteLength:1,components:1};case Aa:case s0:case Fa:return{byteLength:2,components:1};case tp:case np:return{byteLength:2,components:4};case ns:case ep:case Si:return{byteLength:4,components:1};case o0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function R0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function cE(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,h=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(t.bindBuffer(u,a),h.length===0)t.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const y=h[p];t.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var fE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dE=`#ifdef USE_ALPHAHASH
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
#endif`,hE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vE=`#ifdef USE_AOMAP
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
#endif`,_E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xE=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ME=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TE=`#ifdef USE_IRIDESCENCE
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
#endif`,wE=`#ifdef USE_BUMPMAP
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
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,UE=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,NE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,FE=`vec3 transformedNormal = objectNormal;
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
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HE="gl_FragColor = linearToOutputTexel( gl_FragColor );",VE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GE=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,WE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XE=`#ifdef USE_ENVMAP
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
#endif`,YE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
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
#endif`,qE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JE=`#ifdef USE_GRADIENTMAP
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
}`,QE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n1=`uniform bool receiveShadow;
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
#endif`,i1=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,r1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,u1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,c1=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,f1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y1=`#if defined( USE_POINTS_UV )
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
#endif`,S1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A1=`#ifdef USE_MORPHTARGETS
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
#endif`,C1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I1=`#ifdef USE_NORMALMAP
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
#endif`,U1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,k1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j1=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,K1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z1=`#ifdef USE_SKINNING
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
#endif`,J1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q1=`#ifdef USE_SKINNING
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
#endif`,eT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rT=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sT=`#ifdef USE_TRANSMISSION
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
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fT=`uniform sampler2D t2D;
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
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`#include <common>
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
}`,vT=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_T=`#define DISTANCE
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
}`,xT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ST=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`uniform float scale;
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
}`,ET=`uniform vec3 diffuse;
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
}`,TT=`#include <common>
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
}`,wT=`uniform vec3 diffuse;
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
}`,AT=`#define LAMBERT
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
}`,CT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,RT=`#define MATCAP
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
}`,PT=`#define MATCAP
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
}`,LT=`#define NORMAL
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
}`,bT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DT=`#define PHONG
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
}`,IT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,UT=`#define STANDARD
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
}`,NT=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,FT=`#define TOON
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
}`,OT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,zT=`uniform float size;
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
}`,BT=`uniform vec3 diffuse;
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
}`,kT=`#include <common>
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
}`,HT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,VT=`uniform float rotation;
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
}`,GT=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:fE,alphahash_pars_fragment:dE,alphamap_fragment:hE,alphamap_pars_fragment:pE,alphatest_fragment:mE,alphatest_pars_fragment:gE,aomap_fragment:vE,aomap_pars_fragment:_E,batching_pars_vertex:xE,batching_vertex:yE,begin_vertex:SE,beginnormal_vertex:ME,bsdfs:EE,iridescence_fragment:TE,bumpmap_pars_fragment:wE,clipping_planes_fragment:AE,clipping_planes_pars_fragment:CE,clipping_planes_pars_vertex:RE,clipping_planes_vertex:PE,color_fragment:LE,color_pars_fragment:bE,color_pars_vertex:DE,color_vertex:IE,common:UE,cube_uv_reflection_fragment:NE,defaultnormal_vertex:FE,displacementmap_pars_vertex:OE,displacementmap_vertex:zE,emissivemap_fragment:BE,emissivemap_pars_fragment:kE,colorspace_fragment:HE,colorspace_pars_fragment:VE,envmap_fragment:GE,envmap_common_pars_fragment:WE,envmap_pars_fragment:XE,envmap_pars_vertex:YE,envmap_physical_pars_fragment:i1,envmap_vertex:$E,fog_vertex:qE,fog_pars_vertex:jE,fog_fragment:KE,fog_pars_fragment:ZE,gradientmap_pars_fragment:JE,lightmap_pars_fragment:QE,lights_lambert_fragment:e1,lights_lambert_pars_fragment:t1,lights_pars_begin:n1,lights_toon_fragment:r1,lights_toon_pars_fragment:s1,lights_phong_fragment:o1,lights_phong_pars_fragment:a1,lights_physical_fragment:l1,lights_physical_pars_fragment:u1,lights_fragment_begin:c1,lights_fragment_maps:f1,lights_fragment_end:d1,logdepthbuf_fragment:h1,logdepthbuf_pars_fragment:p1,logdepthbuf_pars_vertex:m1,logdepthbuf_vertex:g1,map_fragment:v1,map_pars_fragment:_1,map_particle_fragment:x1,map_particle_pars_fragment:y1,metalnessmap_fragment:S1,metalnessmap_pars_fragment:M1,morphinstance_vertex:E1,morphcolor_vertex:T1,morphnormal_vertex:w1,morphtarget_pars_vertex:A1,morphtarget_vertex:C1,normal_fragment_begin:R1,normal_fragment_maps:P1,normal_pars_fragment:L1,normal_pars_vertex:b1,normal_vertex:D1,normalmap_pars_fragment:I1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:N1,clearcoat_pars_fragment:F1,iridescence_pars_fragment:O1,opaque_fragment:z1,packing:B1,premultiplied_alpha_fragment:k1,project_vertex:H1,dithering_fragment:V1,dithering_pars_fragment:G1,roughnessmap_fragment:W1,roughnessmap_pars_fragment:X1,shadowmap_pars_fragment:Y1,shadowmap_pars_vertex:$1,shadowmap_vertex:q1,shadowmask_pars_fragment:j1,skinbase_vertex:K1,skinning_pars_vertex:Z1,skinning_vertex:J1,skinnormal_vertex:Q1,specularmap_fragment:eT,specularmap_pars_fragment:tT,tonemapping_fragment:nT,tonemapping_pars_fragment:iT,transmission_fragment:rT,transmission_pars_fragment:sT,uv_pars_fragment:oT,uv_pars_vertex:aT,uv_vertex:lT,worldpos_vertex:uT,background_vert:cT,background_frag:fT,backgroundCube_vert:dT,backgroundCube_frag:hT,cube_vert:pT,cube_frag:mT,depth_vert:gT,depth_frag:vT,distanceRGBA_vert:_T,distanceRGBA_frag:xT,equirect_vert:yT,equirect_frag:ST,linedashed_vert:MT,linedashed_frag:ET,meshbasic_vert:TT,meshbasic_frag:wT,meshlambert_vert:AT,meshlambert_frag:CT,meshmatcap_vert:RT,meshmatcap_frag:PT,meshnormal_vert:LT,meshnormal_frag:bT,meshphong_vert:DT,meshphong_frag:IT,meshphysical_vert:UT,meshphysical_frag:NT,meshtoon_vert:FT,meshtoon_frag:OT,points_vert:zT,points_frag:BT,shadow_vert:kT,shadow_frag:HT,sprite_vert:VT,sprite_frag:GT},de={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},mi={basic:{uniforms:an([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:an([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:an([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:an([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:an([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:an([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:an([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:an([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:an([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:an([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:an([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:an([de.common,de.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:an([de.lights,de.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};mi.physical={uniforms:an([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Tl={r:0,b:0,g:0},Nr=new $i,WT=new vt;function XT(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,u,c,h=null,d=0,p=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?n:e).get(x)),x}function y(_){let x=!1;const C=g(_);C===null?f(a,l):C&&C.isColor&&(f(C,1),x=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,x){const C=g(x);C&&(C.isCubeTexture||C.mapping===$u)?(c===void 0&&(c=new Wt(new ka(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:mo(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Nr.copy(x.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),c.material.uniforms.envMap.value=C,c.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(WT.makeRotationFromEuler(Nr)),c.material.toneMapped=ot.getTransfer(C.colorSpace)!==ht,(h!==C||d!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=C,d=C.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):C&&C.isTexture&&(u===void 0&&(u=new Wt(new ju(2,2),new Ar({name:"BackgroundMaterial",uniforms:mo(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=C,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=ot.getTransfer(C.colorSpace)!==ht,C.matrixAutoUpdate===!0&&C.updateMatrix(),u.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=C,d=C.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function f(_,x){_.getRGB(Tl,S0(t)),i.buffers.color.setClear(Tl.r,Tl.g,Tl.b,x,o)}function v(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:y,addToRenderList:m,dispose:v}}function YT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,L,G,z,W){let D=!1;const H=h(z,G,L);s!==H&&(s=H,u(s.object)),D=p(S,z,G,W),D&&g(S,z,G,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,x(S,L,G,z),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function c(S){return t.deleteVertexArray(S)}function h(S,L,G){const z=G.wireframe===!0;let W=i[S.id];W===void 0&&(W={},i[S.id]=W);let D=W[L.id];D===void 0&&(D={},W[L.id]=D);let H=D[z];return H===void 0&&(H=d(l()),D[z]=H),H}function d(S){const L=[],G=[],z=[];for(let W=0;W<n;W++)L[W]=0,G[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,L,G,z){const W=s.attributes,D=L.attributes;let H=0;const q=G.getAttributes();for(const b in q)if(q[b].location>=0){const K=W[b];let ne=D[b];if(ne===void 0&&(b==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),b==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),K===void 0||K.attribute!==ne||ne&&K.data!==ne.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function g(S,L,G,z){const W={},D=L.attributes;let H=0;const q=G.getAttributes();for(const b in q)if(q[b].location>=0){let K=D[b];K===void 0&&(b==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),b==="instanceColor"&&S.instanceColor&&(K=S.instanceColor));const ne={};ne.attribute=K,K&&K.data&&(ne.data=K.data),W[b]=ne,H++}s.attributes=W,s.attributesNum=H,s.index=z}function y(){const S=s.newAttributes;for(let L=0,G=S.length;L<G;L++)S[L]=0}function m(S){f(S,0)}function f(S,L){const G=s.newAttributes,z=s.enabledAttributes,W=s.attributeDivisors;G[S]=1,z[S]===0&&(t.enableVertexAttribArray(S),z[S]=1),W[S]!==L&&(t.vertexAttribDivisor(S,L),W[S]=L)}function v(){const S=s.newAttributes,L=s.enabledAttributes;for(let G=0,z=L.length;G<z;G++)L[G]!==S[G]&&(t.disableVertexAttribArray(G),L[G]=0)}function _(S,L,G,z,W,D,H){H===!0?t.vertexAttribIPointer(S,L,G,W,D):t.vertexAttribPointer(S,L,G,z,W,D)}function x(S,L,G,z){y();const W=z.attributes,D=G.getAttributes(),H=L.defaultAttributeValues;for(const q in D){const b=D[q];if(b.location>=0){let Y=W[q];if(Y===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),Y!==void 0){const K=Y.normalized,ne=Y.itemSize,me=e.get(Y);if(me===void 0)continue;const Fe=me.buffer,$=me.type,Q=me.bytesPerElement,ve=$===t.INT||$===t.UNSIGNED_INT||Y.gpuType===ep;if(Y.isInterleavedBufferAttribute){const ie=Y.data,be=ie.stride,Pe=Y.offset;if(ie.isInstancedInterleavedBuffer){for(let we=0;we<b.locationSize;we++)f(b.location+we,ie.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let we=0;we<b.locationSize;we++)m(b.location+we);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let we=0;we<b.locationSize;we++)_(b.location+we,ne/b.locationSize,$,K,be*Q,(Pe+ne/b.locationSize*we)*Q,ve)}else{if(Y.isInstancedBufferAttribute){for(let ie=0;ie<b.locationSize;ie++)f(b.location+ie,Y.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ie=0;ie<b.locationSize;ie++)m(b.location+ie);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let ie=0;ie<b.locationSize;ie++)_(b.location+ie,ne/b.locationSize,$,K,ne*Q,ne/b.locationSize*ie*Q,ve)}}else if(H!==void 0){const K=H[q];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(b.location,K);break;case 3:t.vertexAttrib3fv(b.location,K);break;case 4:t.vertexAttrib4fv(b.location,K);break;default:t.vertexAttrib1fv(b.location,K)}}}}v()}function C(){P();for(const S in i){const L=i[S];for(const G in L){const z=L[G];for(const W in z)c(z[W].object),delete z[W];delete L[G]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const G in L){const z=L[G];for(const W in z)c(z[W].object),delete z[W];delete L[G]}delete i[S.id]}function A(S){for(const L in i){const G=i[L];if(G[S.id]===void 0)continue;const z=G[S.id];for(const W in z)c(z[W].object),delete z[W];delete G[S.id]}}function P(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function $T(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,h){h!==0&&(t.drawArraysInstanced(i,u,c,h),n.update(c,i,h))}function a(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let p=0;for(let g=0;g<h;g++)p+=c[g];n.update(p,i,1)}function l(u,c,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=c[y]*d[y];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ai&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Yi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Si&&!P)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:C,maxSamples:w}}function jT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Br,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=c(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,_=v*4;let x=f.clippingState||null;l.value=x,x=c(g,d,_,p);for(let C=0;C!==_;++C)x[C]=n[C];f.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,p,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const f=p+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,x=p;_!==y;++_,x+=4)o.copy(h[_]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function KT(t){let e=new WeakMap;function n(o,a){return a===cd?o.mapping=uo:a===fd&&(o.mapping=co),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===cd||a===fd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new NM(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ws=4,Jm=[.125,.215,.35,.446,.526,.582],Vr=20,Kc=new oE,Qm=new We;let Zc=null,Jc=0,Qc=0,ef=!1;const kr=(1+Math.sqrt(5))/2,As=1/kr,eg=[new O(-kr,As,0),new O(kr,As,0),new O(-As,0,kr),new O(As,0,kr),new O(0,kr,-As),new O(0,kr,As),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class tg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Jc,Qc),this._renderer.xr.enabled=ef,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===uo||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Fa,format:ai,colorSpace:po,depthBuffer:!1},r=ng(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ng(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZT(s)),this._blurMaterial=JT(s,e,n)}return r}_compileMaterial(e){const n=new Wt(this._lodPlanes[0],e);this._renderer.compile(n,Kc)}_sceneToCubeUV(e,n,i,r){const a=new Gn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(Qm),c.toneMapping=Mr,c.autoClear=!1;const p=new Ii({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new Wt(new ka,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Qm),y=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const _=this._cubeSize;wl(r,v*_,f>2?_:0,_,_),c.setRenderTarget(r),y&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===uo||e.mapping===co;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ig());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Kc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=eg[(r-s-1)%eg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Wt(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vr-1),y=s/g,m=isFinite(s)?1+Math.floor(c*y):Vr;m>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vr}`);const f=[];let v=0;for(let A=0;A<Vr;++A){const P=A/y,T=Math.exp(-P*P/2);f.push(T),A===0?v+=T:A<m&&(v+=2*T)}for(let A=0;A<f.length;A++)f[A]=f[A]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const x=this._sizeLods[r],C=3*x*(r>_-Ws?r-_+Ws:0),w=4*(this._cubeSize-x);wl(n,C,w,3*x,2*x),l.setRenderTarget(n),l.render(h,Kc)}}function ZT(t){const e=[],n=[],i=[];let r=t;const s=t-Ws+1+Jm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ws?l=Jm[o-t+Ws-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,y=3,m=2,f=1,v=new Float32Array(y*g*p),_=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,P=w>2?0:-1,T=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];v.set(T,y*g*w),_.set(d,m*g*w);const S=[w,w,w,w,w,w];x.set(S,f*g*w)}const C=new Ki;C.setAttribute("position",new ci(v,y)),C.setAttribute("uv",new ci(_,m)),C.setAttribute("faceIndex",new ci(x,f)),e.push(C),r>Ws&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ng(t,e,n){const i=new is(t,e,n);return i.texture.mapping=$u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function JT(t,e,n){const i=new Float32Array(Vr),r=new O(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:up(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function ig(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:up(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function rg(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function up(){return`

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
	`}function QT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===cd||l===fd,c=l===uo||l===co;if(u||c){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new tg(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new tg(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ew(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Rs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tw(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function u(h){const d=[],p=h.index,g=h.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let _=0,x=v.length;_<x;_+=3){const C=v[_+0],w=v[_+1],A=v[_+2];d.push(C,w,w,A,A,C)}}else if(g!==void 0){const v=g.array;y=g.version;for(let _=0,x=v.length/3-1;_<x;_+=3){const C=_+0,w=_+1,A=_+2;d.push(C,w,w,A,A,C)}}else return;const m=new(p0(d)?y0:x0)(d,1);m.version=y;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function c(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function nw(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function u(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function c(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];n.update(m,i,1)}function h(d,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)u(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*y[v];n.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function iw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function rw(t,e,n){const i=new WeakMap,r=new It;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*w*4*h),P=new g0(A,C,w,h);P.type=Si,P.needsUpdate=!0;const T=x*4;for(let L=0;L<h;L++){const G=f[L],z=v[L],W=_[L],D=C*w*4*L;for(let H=0;H<G.count;H++){const q=H*T;g===!0&&(r.fromBufferAttribute(G,H),A[D+q+0]=r.x,A[D+q+1]=r.y,A[D+q+2]=r.z,A[D+q+3]=0),y===!0&&(r.fromBufferAttribute(z,H),A[D+q+4]=r.x,A[D+q+5]=r.y,A[D+q+6]=r.z,A[D+q+7]=0),m===!0&&(r.fromBufferAttribute(W,H),A[D+q+8]=r.x,A[D+q+9]=r.y,A[D+q+10]=r.z,A[D+q+11]=W.itemSize===4?r.w:1)}}d={count:h,texture:P,size:new Ne(C,w)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function sw(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const P0=new tn,sg=new w0(1,1),L0=new g0,b0=new xM,D0=new E0,og=[],ag=[],lg=new Float32Array(16),ug=new Float32Array(9),cg=new Float32Array(4);function Mo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=og[r];if(s===void 0&&(s=new Float32Array(r),og[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ku(t,e){let n=ag[e];n===void 0&&(n=new Int32Array(e),ag[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ow(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function cw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;cg.set(i),t.uniformMatrix2fv(this.addr,!1,cg),kt(n,i)}}function fw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;ug.set(i),t.uniformMatrix3fv(this.addr,!1,ug),kt(n,i)}}function dw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;lg.set(i),t.uniformMatrix4fv(this.addr,!1,lg),kt(n,i)}}function hw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function vw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function Sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(sg.compareFunction=h0,s=sg):s=P0,n.setTexture2D(e||s,r)}function Mw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||b0,r)}function Ew(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||D0,r)}function Tw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||L0,r)}function ww(t){switch(t){case 5126:return ow;case 35664:return aw;case 35665:return lw;case 35666:return uw;case 35674:return cw;case 35675:return fw;case 35676:return dw;case 5124:case 35670:return hw;case 35667:case 35671:return pw;case 35668:case 35672:return mw;case 35669:case 35673:return gw;case 5125:return vw;case 36294:return _w;case 36295:return xw;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return Mw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return Tw}}function Aw(t,e){t.uniform1fv(this.addr,e)}function Cw(t,e){const n=Mo(e,this.size,2);t.uniform2fv(this.addr,n)}function Rw(t,e){const n=Mo(e,this.size,3);t.uniform3fv(this.addr,n)}function Pw(t,e){const n=Mo(e,this.size,4);t.uniform4fv(this.addr,n)}function Lw(t,e){const n=Mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function bw(t,e){const n=Mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Dw(t,e){const n=Mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Iw(t,e){t.uniform1iv(this.addr,e)}function Uw(t,e){t.uniform2iv(this.addr,e)}function Nw(t,e){t.uniform3iv(this.addr,e)}function Fw(t,e){t.uniform4iv(this.addr,e)}function Ow(t,e){t.uniform1uiv(this.addr,e)}function zw(t,e){t.uniform2uiv(this.addr,e)}function Bw(t,e){t.uniform3uiv(this.addr,e)}function kw(t,e){t.uniform4uiv(this.addr,e)}function Hw(t,e,n){const i=this.cache,r=e.length,s=Ku(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||P0,s[o])}function Vw(t,e,n){const i=this.cache,r=e.length,s=Ku(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||b0,s[o])}function Gw(t,e,n){const i=this.cache,r=e.length,s=Ku(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||D0,s[o])}function Ww(t,e,n){const i=this.cache,r=e.length,s=Ku(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||L0,s[o])}function Xw(t){switch(t){case 5126:return Aw;case 35664:return Cw;case 35665:return Rw;case 35666:return Pw;case 35674:return Lw;case 35675:return bw;case 35676:return Dw;case 5124:case 35670:return Iw;case 35667:case 35671:return Uw;case 35668:case 35672:return Nw;case 35669:case 35673:return Fw;case 5125:return Ow;case 36294:return zw;case 36295:return Bw;case 36296:return kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Hw;case 35679:case 36299:case 36307:return Vw;case 35680:case 36300:case 36308:case 36293:return Gw;case 36289:case 36303:case 36311:case 36292:return Ww}}class Yw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ww(n.type)}}class $w{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Xw(n.type)}}class qw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function fg(t,e){t.seq.push(e),t.map[e.id]=e}function jw(t,e,n){const i=t.name,r=i.length;for(tf.lastIndex=0;;){const s=tf.exec(i),o=tf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){fg(n,u===void 0?new Yw(a,t,e):new $w(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new qw(a),fg(n,h)),n=h}}}class ql{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);jw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function dg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Kw=37297;let Zw=0;function Jw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const hg=new Be;function Qw(t){ot._getMatrix(hg,ot.workingColorSpace,t);const e=`mat3( ${hg.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(t)){case yu:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function pg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Jw(t.getShaderSource(e),o)}else return r}function eA(t,e){const n=Qw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function tA(t,e){let n;switch(e){case WS:n="Linear";break;case XS:n="Reinhard";break;case YS:n="Cineon";break;case $S:n="ACESFilmic";break;case jS:n="AgX";break;case KS:n="Neutral";break;case qS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Al=new O;function nA(){ot.getLuminanceCoefficients(Al);const t=Al.x.toFixed(4),e=Al.y.toFixed(4),n=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function rA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Yo(t){return t!==""}function mg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(t){return t.replace(oA,lA)}const aA=new Map;function lA(t,e){let n=Ve[e];if(n===void 0){const i=aA.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vd(n)}const uA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vg(t){return t.replace(uA,cA)}function cA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _g(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function fA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===t0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ES?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function dA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case uo:case co:e="ENVMAP_TYPE_CUBE";break;case $u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function pA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case n0:e="ENVMAP_BLENDING_MULTIPLY";break;case VS:e="ENVMAP_BLENDING_MIX";break;case GS:e="ENVMAP_BLENDING_ADD";break}return e}function mA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function gA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=fA(n),u=dA(n),c=hA(n),h=pA(n),d=mA(n),p=iA(n),g=rA(s),y=r.createProgram();let m,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Yo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Yo).join(`
`),f.length>0&&(f+=`
`)):(m=[_g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),f=[_g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Mr?tA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,eA("linearToOutputTexel",n.outputColorSpace),nA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Yo).join(`
`)),o=Vd(o),o=mg(o,n),o=gg(o,n),a=Vd(a),a=mg(a,n),a=gg(a,n),o=vg(o),a=vg(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=v+m+o,x=v+f+a,C=dg(r,r.VERTEX_SHADER,_),w=dg(r,r.FRAGMENT_SHADER,x);r.attachShader(y,C),r.attachShader(y,w),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(L){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(y).trim(),z=r.getShaderInfoLog(C).trim(),W=r.getShaderInfoLog(w).trim();let D=!0,H=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,w);else{const q=pg(r,C,"vertex"),b=pg(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+q+`
`+b)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||W==="")&&(H=!1);H&&(L.diagnostics={runnable:D,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:W,prefix:f}})}r.deleteShader(C),r.deleteShader(w),P=new ql(r,y),T=sA(r,y)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,Kw)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Zw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=w,this}let vA=0;class _A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new xA(e),n.set(e,i)),i}}class xA{constructor(e){this.id=vA++,this.code=e,this.usedTimes=0}}function yA(t,e,n,i,r,s,o){const a=new ap,l=new _A,u=new Set,c=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,S,L,G,z){const W=G.fog,D=z.geometry,H=T.isMeshStandardMaterial?G.environment:null,q=(T.isMeshStandardMaterial?n:e).get(T.envMap||H),b=q&&q.mapping===$u?q.image.height:null,Y=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const K=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ne=K!==void 0?K.length:0;let me=0;D.morphAttributes.position!==void 0&&(me=1),D.morphAttributes.normal!==void 0&&(me=2),D.morphAttributes.color!==void 0&&(me=3);let Fe,$,Q,ve;if(Y){const rt=mi[Y];Fe=rt.vertexShader,$=rt.fragmentShader}else Fe=T.vertexShader,$=T.fragmentShader,l.update(T),Q=l.getVertexShaderID(T),ve=l.getFragmentShaderID(T);const ie=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),Pe=z.isInstancedMesh===!0,we=z.isBatchedMesh===!0,pt=!!T.map,Xe=!!T.matcap,_t=!!q,I=!!T.aoMap,Yt=!!T.lightMap,je=!!T.bumpMap,Ge=!!T.normalMap,ye=!!T.displacementMap,lt=!!T.emissiveMap,Me=!!T.metalnessMap,R=!!T.roughnessMap,M=T.anisotropy>0,V=T.clearcoat>0,J=T.dispersion>0,ee=T.iridescence>0,j=T.sheen>0,Se=T.transmission>0,le=M&&!!T.anisotropyMap,pe=V&&!!T.clearcoatMap,Je=V&&!!T.clearcoatNormalMap,se=V&&!!T.clearcoatRoughnessMap,ge=ee&&!!T.iridescenceMap,Ce=ee&&!!T.iridescenceThicknessMap,Ae=j&&!!T.sheenColorMap,ce=j&&!!T.sheenRoughnessMap,De=!!T.specularMap,Ie=!!T.specularColorMap,ut=!!T.specularIntensityMap,N=Se&&!!T.transmissionMap,ue=Se&&!!T.thicknessMap,X=!!T.gradientMap,Z=!!T.alphaMap,he=T.alphaTest>0,oe=!!T.alphaHash,Oe=!!T.extensions;let xt=Mr;T.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(xt=t.toneMapping);const Ft={shaderID:Y,shaderType:T.type,shaderName:T.name,vertexShader:Fe,fragmentShader:$,defines:T.defines,customVertexShaderID:Q,customFragmentShaderID:ve,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:we,batchingColor:we&&z._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&z.instanceColor!==null,instancingMorph:Pe&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:po,alphaToCoverage:!!T.alphaToCoverage,map:pt,matcap:Xe,envMap:_t,envMapMode:_t&&q.mapping,envMapCubeUVHeight:b,aoMap:I,lightMap:Yt,bumpMap:je,normalMap:Ge,displacementMap:d&&ye,emissiveMap:lt,normalMapObjectSpace:Ge&&T.normalMapType===tM,normalMapTangentSpace:Ge&&T.normalMapType===eM,metalnessMap:Me,roughnessMap:R,anisotropy:M,anisotropyMap:le,clearcoat:V,clearcoatMap:pe,clearcoatNormalMap:Je,clearcoatRoughnessMap:se,dispersion:J,iridescence:ee,iridescenceMap:ge,iridescenceThicknessMap:Ce,sheen:j,sheenColorMap:Ae,sheenRoughnessMap:ce,specularMap:De,specularColorMap:Ie,specularIntensityMap:ut,transmission:Se,transmissionMap:N,thicknessMap:ue,gradientMap:X,opaque:T.transparent===!1&&T.blending===Js&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:he,alphaHash:oe,combine:T.combine,mapUv:pt&&y(T.map.channel),aoMapUv:I&&y(T.aoMap.channel),lightMapUv:Yt&&y(T.lightMap.channel),bumpMapUv:je&&y(T.bumpMap.channel),normalMapUv:Ge&&y(T.normalMap.channel),displacementMapUv:ye&&y(T.displacementMap.channel),emissiveMapUv:lt&&y(T.emissiveMap.channel),metalnessMapUv:Me&&y(T.metalnessMap.channel),roughnessMapUv:R&&y(T.roughnessMap.channel),anisotropyMapUv:le&&y(T.anisotropyMap.channel),clearcoatMapUv:pe&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Je&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:ce&&y(T.sheenRoughnessMap.channel),specularMapUv:De&&y(T.specularMap.channel),specularColorMapUv:Ie&&y(T.specularColorMap.channel),specularIntensityMapUv:ut&&y(T.specularIntensityMap.channel),transmissionMapUv:N&&y(T.transmissionMap.channel),thicknessMapUv:ue&&y(T.thicknessMap.channel),alphaMapUv:Z&&y(T.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ge||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!D.attributes.uv&&(pt||Z),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:be,skinning:z.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,decodeVideoTexture:pt&&T.map.isVideoTexture===!0&&ot.getTransfer(T.map.colorSpace)===ht,decodeVideoTextureEmissive:lt&&T.emissiveMap.isVideoTexture===!0&&ot.getTransfer(T.emissiveMap.colorSpace)===ht,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ni,flipSided:T.side===yn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Oe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&T.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ft.vertexUv1s=u.has(1),Ft.vertexUv2s=u.has(2),Ft.vertexUv3s=u.has(3),u.clear(),Ft}function f(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)S.push(L),S.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(v(S,T),_(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function v(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function _(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const S=g[T.type];let L;if(S){const G=mi[S];L=bM.clone(G.uniforms)}else L=T.uniforms;return L}function C(T,S){let L;for(let G=0,z=c.length;G<z;G++){const W=c[G];if(W.cacheKey===S){L=W,++L.usedTimes;break}}return L===void 0&&(L=new gA(t,S,T,s),c.push(L)),L}function w(T){if(--T.usedTimes===0){const S=c.indexOf(T);c[S]=c[c.length-1],c.pop(),T.destroy()}}function A(T){l.remove(T)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:P}}function SA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function MA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function xg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function yg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,g,y,m){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=y,f.group=m),e++,f}function a(h,d,p,g,y,m){const f=o(h,d,p,g,y,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,g,y,m){const f=o(h,d,p,g,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(h,d){n.length>1&&n.sort(h||MA),i.length>1&&i.sort(d||xg),r.length>1&&r.sort(d||xg)}function c(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function EA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new yg,t.set(i,[o])):r>=s.length?(o=new yg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function TA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new We};break;case"SpotLight":n={position:new O,direction:new O,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function wA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let AA=0;function CA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RA(t){const e=new TA,n=wA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,s=new vt,o=new vt;function a(u){let c=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,v=0,_=0,x=0,C=0,w=0,A=0;u.sort(CA);for(let T=0,S=u.length;T<S;T++){const L=u[T],G=L.color,z=L.intensity,W=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=G.r*z,h+=G.g*z,d+=G.b*z;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],z);A++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const q=L.shadow,b=n.get(L);b.shadowIntensity=q.intensity,b.shadowBias=q.bias,b.shadowNormalBias=q.normalBias,b.shadowRadius=q.radius,b.shadowMapSize=q.mapSize,i.directionalShadow[p]=b,i.directionalShadowMap[p]=D,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=H,p++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(G).multiplyScalar(z),H.distance=W,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[y]=H;const q=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,q.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[y]=q.matrix,L.castShadow){const b=n.get(L);b.shadowIntensity=q.intensity,b.shadowBias=q.bias,b.shadowNormalBias=q.normalBias,b.shadowRadius=q.radius,b.shadowMapSize=q.mapSize,i.spotShadow[y]=b,i.spotShadowMap[y]=D,x++}y++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(G).multiplyScalar(z),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=H,m++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const q=L.shadow,b=n.get(L);b.shadowIntensity=q.intensity,b.shadowBias=q.bias,b.shadowNormalBias=q.normalBias,b.shadowRadius=q.radius,b.shadowMapSize=q.mapSize,b.shadowCameraNear=q.camera.near,b.shadowCameraFar=q.camera.far,i.pointShadow[g]=b,i.pointShadowMap[g]=D,i.pointShadowMatrix[g]=L.shadow.matrix,_++}i.point[g]=H,g++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(z),H.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[f]=H,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==x||P.numSpotMaps!==C||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=x,P.numSpotMaps=C,P.numLightProbes=A,i.version=AA++)}function l(u,c){let h=0,d=0,p=0,g=0,y=0;const m=c.matrixWorldInverse;for(let f=0,v=u.length;f<v;f++){const _=u[f];if(_.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(_.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Sg(t){const e=new RA(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function PA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Sg(t),e.set(r,[a])):s>=o.length?(a=new Sg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const LA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DA(t,e,n){let i=new T0;const r=new Ne,s=new Ne,o=new It,a=new rE({depthPacking:QS}),l=new sE,u={},c=n.maxTextureSize,h={[wr]:yn,[yn]:wr,[Ni]:Ni},d=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:LA,fragmentShader:bA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ki;g.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Wt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=t0;let f=this.type;this.render=function(w,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),G=t.state;G.setBlending(Sr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=f!==bi&&this.type===bi,W=f===bi&&this.type!==bi;for(let D=0,H=w.length;D<H;D++){const q=w[D],b=q.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;r.copy(b.mapSize);const Y=b.getFrameExtents();if(r.multiply(Y),s.copy(b.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/Y.x),r.x=s.x*Y.x,b.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/Y.y),r.y=s.y*Y.y,b.mapSize.y=s.y)),b.map===null||z===!0||W===!0){const ne=this.type!==bi?{minFilter:Pn,magFilter:Pn}:{};b.map!==null&&b.map.dispose(),b.map=new is(r.x,r.y,ne),b.map.texture.name=q.name+".shadowMap",b.camera.updateProjectionMatrix()}t.setRenderTarget(b.map),t.clear();const K=b.getViewportCount();for(let ne=0;ne<K;ne++){const me=b.getViewport(ne);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),G.viewport(o),b.updateMatrices(q,ne),i=b.getFrustum(),x(A,P,b.camera,q,this.type)}b.isPointLightShadow!==!0&&this.type===bi&&v(b,P),b.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(T,S,L)};function v(w,A){const P=e.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new is(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,P,d,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,P,p,y,null)}function _(w,A,P,T){let S=null;const L=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=S.uuid,z=A.uuid;let W=u[G];W===void 0&&(W={},u[G]=W);let D=W[z];D===void 0&&(D=S.clone(),W[z]=D,A.addEventListener("dispose",C)),S=D}if(S.visible=A.visible,S.wireframe=A.wireframe,T===bi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=t.properties.get(S);G.light=P}return S}function x(w,A,P,T,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===bi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const z=e.update(w),W=w.material;if(Array.isArray(W)){const D=z.groups;for(let H=0,q=D.length;H<q;H++){const b=D[H],Y=W[b.materialIndex];if(Y&&Y.visible){const K=_(w,Y,T,S);w.onBeforeShadow(t,w,A,P,z,K,b),t.renderBufferDirect(P,null,z,K,w,b),w.onAfterShadow(t,w,A,P,z,K,b)}}}else if(W.visible){const D=_(w,W,T,S);w.onBeforeShadow(t,w,A,P,z,D,null),t.renderBufferDirect(P,null,z,D,w,null),w.onAfterShadow(t,w,A,P,z,D,null)}}const G=w.children;for(let z=0,W=G.length;z<W;z++)x(G[z],A,P,T,S)}function C(w){w.target.removeEventListener("dispose",C);for(const P in u){const T=u[P],S=w.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const IA={[id]:rd,[sd]:ld,[od]:ud,[lo]:ad,[rd]:id,[ld]:sd,[ud]:od,[ad]:lo};function UA(t,e){function n(){let N=!1;const ue=new It;let X=null;const Z=new It(0,0,0,0);return{setMask:function(he){X!==he&&!N&&(t.colorMask(he,he,he,he),X=he)},setLocked:function(he){N=he},setClear:function(he,oe,Oe,xt,Ft){Ft===!0&&(he*=xt,oe*=xt,Oe*=xt),ue.set(he,oe,Oe,xt),Z.equals(ue)===!1&&(t.clearColor(he,oe,Oe,xt),Z.copy(ue))},reset:function(){N=!1,X=null,Z.set(-1,0,0,0)}}}function i(){let N=!1,ue=!1,X=null,Z=null,he=null;return{setReversed:function(oe){if(ue!==oe){const Oe=e.get("EXT_clip_control");ue?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const xt=he;he=null,this.setClear(xt)}ue=oe},getReversed:function(){return ue},setTest:function(oe){oe?ie(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(oe){X!==oe&&!N&&(t.depthMask(oe),X=oe)},setFunc:function(oe){if(ue&&(oe=IA[oe]),Z!==oe){switch(oe){case id:t.depthFunc(t.NEVER);break;case rd:t.depthFunc(t.ALWAYS);break;case sd:t.depthFunc(t.LESS);break;case lo:t.depthFunc(t.LEQUAL);break;case od:t.depthFunc(t.EQUAL);break;case ad:t.depthFunc(t.GEQUAL);break;case ld:t.depthFunc(t.GREATER);break;case ud:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=oe}},setLocked:function(oe){N=oe},setClear:function(oe){he!==oe&&(ue&&(oe=1-oe),t.clearDepth(oe),he=oe)},reset:function(){N=!1,X=null,Z=null,he=null,ue=!1}}}function r(){let N=!1,ue=null,X=null,Z=null,he=null,oe=null,Oe=null,xt=null,Ft=null;return{setTest:function(rt){N||(rt?ie(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(rt){ue!==rt&&!N&&(t.stencilMask(rt),ue=rt)},setFunc:function(rt,rn,Nn){(X!==rt||Z!==rn||he!==Nn)&&(t.stencilFunc(rt,rn,Nn),X=rt,Z=rn,he=Nn)},setOp:function(rt,rn,Nn){(oe!==rt||Oe!==rn||xt!==Nn)&&(t.stencilOp(rt,rn,Nn),oe=rt,Oe=rn,xt=Nn)},setLocked:function(rt){N=rt},setClear:function(rt){Ft!==rt&&(t.clearStencil(rt),Ft=rt)},reset:function(){N=!1,ue=null,X=null,Z=null,he=null,oe=null,Oe=null,xt=null,Ft=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},h={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,v=null,_=null,x=null,C=null,w=null,A=new We(0,0,0),P=0,T=!1,S=null,L=null,G=null,z=null,W=null;const D=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const b=t.getParameter(t.VERSION);b.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(b)[1]),H=q>=1):b.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(b)[1]),H=q>=2);let Y=null,K={};const ne=t.getParameter(t.SCISSOR_BOX),me=t.getParameter(t.VIEWPORT),Fe=new It().fromArray(ne),$=new It().fromArray(me);function Q(N,ue,X,Z){const he=new Uint8Array(4),oe=t.createTexture();t.bindTexture(N,oe),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<X;Oe++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ue+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return oe}const ve={};ve[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),ve[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ve[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(t.DEPTH_TEST),o.setFunc(lo),je(!1),Ge(Sm),ie(t.CULL_FACE),I(Sr);function ie(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function be(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function Pe(N,ue){return h[N]!==ue?(t.bindFramebuffer(N,ue),h[N]=ue,N===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ue),N===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function we(N,ue){let X=p,Z=!1;if(N){X=d.get(ue),X===void 0&&(X=[],d.set(ue,X));const he=N.textures;if(X.length!==he.length||X[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,Oe=he.length;oe<Oe;oe++)X[oe]=t.COLOR_ATTACHMENT0+oe;X.length=he.length,Z=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,Z=!0);Z&&t.drawBuffers(X)}function pt(N){return g!==N?(t.useProgram(N),g=N,!0):!1}const Xe={[Hr]:t.FUNC_ADD,[wS]:t.FUNC_SUBTRACT,[AS]:t.FUNC_REVERSE_SUBTRACT};Xe[CS]=t.MIN,Xe[RS]=t.MAX;const _t={[PS]:t.ZERO,[LS]:t.ONE,[bS]:t.SRC_COLOR,[td]:t.SRC_ALPHA,[OS]:t.SRC_ALPHA_SATURATE,[NS]:t.DST_COLOR,[IS]:t.DST_ALPHA,[DS]:t.ONE_MINUS_SRC_COLOR,[nd]:t.ONE_MINUS_SRC_ALPHA,[FS]:t.ONE_MINUS_DST_COLOR,[US]:t.ONE_MINUS_DST_ALPHA,[zS]:t.CONSTANT_COLOR,[BS]:t.ONE_MINUS_CONSTANT_COLOR,[kS]:t.CONSTANT_ALPHA,[HS]:t.ONE_MINUS_CONSTANT_ALPHA};function I(N,ue,X,Z,he,oe,Oe,xt,Ft,rt){if(N===Sr){y===!0&&(be(t.BLEND),y=!1);return}if(y===!1&&(ie(t.BLEND),y=!0),N!==TS){if(N!==m||rt!==T){if((f!==Hr||x!==Hr)&&(t.blendEquation(t.FUNC_ADD),f=Hr,x=Hr),rt)switch(N){case Js:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mm:t.blendFunc(t.ONE,t.ONE);break;case Em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,_=null,C=null,w=null,A.set(0,0,0),P=0,m=N,T=rt}return}he=he||ue,oe=oe||X,Oe=Oe||Z,(ue!==f||he!==x)&&(t.blendEquationSeparate(Xe[ue],Xe[he]),f=ue,x=he),(X!==v||Z!==_||oe!==C||Oe!==w)&&(t.blendFuncSeparate(_t[X],_t[Z],_t[oe],_t[Oe]),v=X,_=Z,C=oe,w=Oe),(xt.equals(A)===!1||Ft!==P)&&(t.blendColor(xt.r,xt.g,xt.b,Ft),A.copy(xt),P=Ft),m=N,T=!1}function Yt(N,ue){N.side===Ni?be(t.CULL_FACE):ie(t.CULL_FACE);let X=N.side===yn;ue&&(X=!X),je(X),N.blending===Js&&N.transparent===!1?I(Sr):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Z=N.stencilWrite;a.setTest(Z),Z&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),lt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(N){S!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),S=N)}function Ge(N){N!==SS?(ie(t.CULL_FACE),N!==L&&(N===Sm?t.cullFace(t.BACK):N===MS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),L=N}function ye(N){N!==G&&(H&&t.lineWidth(N),G=N)}function lt(N,ue,X){N?(ie(t.POLYGON_OFFSET_FILL),(z!==ue||W!==X)&&(t.polygonOffset(ue,X),z=ue,W=X)):be(t.POLYGON_OFFSET_FILL)}function Me(N){N?ie(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function R(N){N===void 0&&(N=t.TEXTURE0+D-1),Y!==N&&(t.activeTexture(N),Y=N)}function M(N,ue,X){X===void 0&&(Y===null?X=t.TEXTURE0+D-1:X=Y);let Z=K[X];Z===void 0&&(Z={type:void 0,texture:void 0},K[X]=Z),(Z.type!==N||Z.texture!==ue)&&(Y!==X&&(t.activeTexture(X),Y=X),t.bindTexture(N,ue||ve[N]),Z.type=N,Z.texture=ue)}function V(){const N=K[Y];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Je(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(N){Fe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Fe.copy(N))}function ce(N){$.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),$.copy(N))}function De(N,ue){let X=u.get(ue);X===void 0&&(X=new WeakMap,u.set(ue,X));let Z=X.get(N);Z===void 0&&(Z=t.getUniformBlockIndex(ue,N.name),X.set(N,Z))}function Ie(N,ue){const Z=u.get(ue).get(N);l.get(ue)!==Z&&(t.uniformBlockBinding(ue,Z,N.__bindingPointIndex),l.set(ue,Z))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},Y=null,K={},h={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,v=null,_=null,x=null,C=null,w=null,A=new We(0,0,0),P=0,T=!1,S=null,L=null,G=null,z=null,W=null,Fe.set(0,0,t.canvas.width,t.canvas.height),$.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:be,bindFramebuffer:Pe,drawBuffers:we,useProgram:pt,setBlending:I,setMaterial:Yt,setFlipSided:je,setCullFace:Ge,setLineWidth:ye,setPolygonOffset:lt,setScissorTest:Me,activeTexture:R,bindTexture:M,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:ee,texImage2D:ge,texImage3D:Ce,updateUBOMapping:De,uniformBlockBinding:Ie,texStorage2D:Je,texStorage3D:se,texSubImage2D:j,texSubImage3D:Se,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:Ae,viewport:ce,reset:ut}}function NA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ne,c=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):Mu("canvas")}function y(R,M,V){let J=1;const ee=Me(R);if((ee.width>V||ee.height>V)&&(J=V/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(J*ee.width),Se=Math.floor(J*ee.height);h===void 0&&(h=g(j,Se));const le=M?g(j,Se):h;return le.width=j,le.height=Se,le.getContext("2d").drawImage(R,0,0,j,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+Se+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){t.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,M,V,J,ee=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=M;if(M===t.RED&&(V===t.FLOAT&&(j=t.R32F),V===t.HALF_FLOAT&&(j=t.R16F),V===t.UNSIGNED_BYTE&&(j=t.R8)),M===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(j=t.R8UI),V===t.UNSIGNED_SHORT&&(j=t.R16UI),V===t.UNSIGNED_INT&&(j=t.R32UI),V===t.BYTE&&(j=t.R8I),V===t.SHORT&&(j=t.R16I),V===t.INT&&(j=t.R32I)),M===t.RG&&(V===t.FLOAT&&(j=t.RG32F),V===t.HALF_FLOAT&&(j=t.RG16F),V===t.UNSIGNED_BYTE&&(j=t.RG8)),M===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(j=t.RG8UI),V===t.UNSIGNED_SHORT&&(j=t.RG16UI),V===t.UNSIGNED_INT&&(j=t.RG32UI),V===t.BYTE&&(j=t.RG8I),V===t.SHORT&&(j=t.RG16I),V===t.INT&&(j=t.RG32I)),M===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(j=t.RGB8UI),V===t.UNSIGNED_SHORT&&(j=t.RGB16UI),V===t.UNSIGNED_INT&&(j=t.RGB32UI),V===t.BYTE&&(j=t.RGB8I),V===t.SHORT&&(j=t.RGB16I),V===t.INT&&(j=t.RGB32I)),M===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),V===t.UNSIGNED_INT&&(j=t.RGBA32UI),V===t.BYTE&&(j=t.RGBA8I),V===t.SHORT&&(j=t.RGBA16I),V===t.INT&&(j=t.RGBA32I)),M===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),M===t.RGBA){const Se=ee?yu:ot.getTransfer(J);V===t.FLOAT&&(j=t.RGBA32F),V===t.HALF_FLOAT&&(j=t.RGBA16F),V===t.UNSIGNED_BYTE&&(j=Se===ht?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(R,M){let V;return R?M===null||M===ns||M===fo?V=t.DEPTH24_STENCIL8:M===Si?V=t.DEPTH32F_STENCIL8:M===Aa&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ns||M===fo?V=t.DEPTH_COMPONENT24:M===Si?V=t.DEPTH_COMPONENT32F:M===Aa&&(V=t.DEPTH_COMPONENT16),V}function C(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Pn&&R.minFilter!==yi?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function w(R){const M=R.target;M.removeEventListener("dispose",w),P(M),M.isVideoTexture&&c.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),S(M)}function P(R){const M=i.get(R);if(M.__webglInit===void 0)return;const V=R.source,J=d.get(V);if(J){const ee=J[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(R),Object.keys(J).length===0&&d.delete(V)}i.remove(R)}function T(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const V=R.source,J=d.get(V);delete J[M.__cacheKey],o.memory.textures--}function S(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let ee=0;ee<M.__webglFramebuffer[J].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[J][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)t.deleteFramebuffer(M.__webglFramebuffer[J]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=R.textures;for(let J=0,ee=V.length;J<ee;J++){const j=i.get(V[J]);j.__webglTexture&&(t.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(V[J])}i.remove(R)}let L=0;function G(){L=0}function z(){const R=L;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function W(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function D(R,M){const V=i.get(R);if(R.isVideoTexture&&ye(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(V,R,M);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+M)}function H(R,M){const V=i.get(R);if(R.version>0&&V.__version!==R.version){$(V,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+M)}function q(R,M){const V=i.get(R);if(R.version>0&&V.__version!==R.version){$(V,R,M);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+M)}function b(R,M){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Q(V,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+M)}const Y={[dd]:t.REPEAT,[Yr]:t.CLAMP_TO_EDGE,[hd]:t.MIRRORED_REPEAT},K={[Pn]:t.NEAREST,[ZS]:t.NEAREST_MIPMAP_NEAREST,[rl]:t.NEAREST_MIPMAP_LINEAR,[yi]:t.LINEAR,[Tc]:t.LINEAR_MIPMAP_NEAREST,[$r]:t.LINEAR_MIPMAP_LINEAR},ne={[nM]:t.NEVER,[lM]:t.ALWAYS,[iM]:t.LESS,[h0]:t.LEQUAL,[rM]:t.EQUAL,[aM]:t.GEQUAL,[sM]:t.GREATER,[oM]:t.NOTEQUAL};function me(R,M){if(M.type===Si&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===yi||M.magFilter===Tc||M.magFilter===rl||M.magFilter===$r||M.minFilter===yi||M.minFilter===Tc||M.minFilter===rl||M.minFilter===$r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,Y[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Y[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Y[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,K[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==rl&&M.minFilter!==$r||M.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Fe(R,M){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",w));const J=M.source;let ee=d.get(J);ee===void 0&&(ee={},d.set(J,ee));const j=W(M);if(j!==R.__cacheKey){ee[j]===void 0&&(ee[j]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ee[j].usedTimes++;const Se=ee[R.__cacheKey];Se!==void 0&&(ee[R.__cacheKey].usedTimes--,Se.usedTimes===0&&T(M)),R.__cacheKey=j,R.__webglTexture=ee[j].texture}return V}function $(R,M,V){let J=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=t.TEXTURE_3D);const ee=Fe(R,M),j=M.source;n.bindTexture(J,R.__webglTexture,t.TEXTURE0+V);const Se=i.get(j);if(j.version!==Se.__version||ee===!0){n.activeTexture(t.TEXTURE0+V);const le=ot.getPrimaries(ot.workingColorSpace),pe=M.colorSpace===cr?null:ot.getPrimaries(M.colorSpace),Je=M.colorSpace===cr||le===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let se=y(M.image,!1,r.maxTextureSize);se=lt(M,se);const ge=s.convert(M.format,M.colorSpace),Ce=s.convert(M.type);let Ae=_(M.internalFormat,ge,Ce,M.colorSpace,M.isVideoTexture);me(J,M);let ce;const De=M.mipmaps,Ie=M.isVideoTexture!==!0,ut=Se.__version===void 0||ee===!0,N=j.dataReady,ue=C(M,se);if(M.isDepthTexture)Ae=x(M.format===ho,M.type),ut&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,Ae,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Ae,se.width,se.height,0,ge,Ce,null));else if(M.isDataTexture)if(De.length>0){Ie&&ut&&n.texStorage2D(t.TEXTURE_2D,ue,Ae,De[0].width,De[0].height);for(let X=0,Z=De.length;X<Z;X++)ce=De[X],Ie?N&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ce.width,ce.height,ge,Ce,ce.data):n.texImage2D(t.TEXTURE_2D,X,Ae,ce.width,ce.height,0,ge,Ce,ce.data);M.generateMipmaps=!1}else Ie?(ut&&n.texStorage2D(t.TEXTURE_2D,ue,Ae,se.width,se.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,ge,Ce,se.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,se.width,se.height,0,ge,Ce,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ie&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,Ae,De[0].width,De[0].height,se.depth);for(let X=0,Z=De.length;X<Z;X++)if(ce=De[X],M.format!==ai)if(ge!==null)if(Ie){if(N)if(M.layerUpdates.size>0){const he=Zm(ce.width,ce.height,M.format,M.type);for(const oe of M.layerUpdates){const Oe=ce.data.subarray(oe*he/ce.data.BYTES_PER_ELEMENT,(oe+1)*he/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,oe,ce.width,ce.height,1,ge,Oe)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ce.width,ce.height,se.depth,ge,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Ae,ce.width,ce.height,se.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ce.width,ce.height,se.depth,ge,Ce,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Ae,ce.width,ce.height,se.depth,0,ge,Ce,ce.data)}else{Ie&&ut&&n.texStorage2D(t.TEXTURE_2D,ue,Ae,De[0].width,De[0].height);for(let X=0,Z=De.length;X<Z;X++)ce=De[X],M.format!==ai?ge!==null?Ie?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,ce.width,ce.height,ge,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Ae,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?N&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ce.width,ce.height,ge,Ce,ce.data):n.texImage2D(t.TEXTURE_2D,X,Ae,ce.width,ce.height,0,ge,Ce,ce.data)}else if(M.isDataArrayTexture)if(Ie){if(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,Ae,se.width,se.height,se.depth),N)if(M.layerUpdates.size>0){const X=Zm(se.width,se.height,M.format,M.type);for(const Z of M.layerUpdates){const he=se.data.subarray(Z*X/se.data.BYTES_PER_ELEMENT,(Z+1)*X/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,ge,Ce,he)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ge,Ce,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,se.width,se.height,se.depth,0,ge,Ce,se.data);else if(M.isData3DTexture)Ie?(ut&&n.texStorage3D(t.TEXTURE_3D,ue,Ae,se.width,se.height,se.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ge,Ce,se.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,se.width,se.height,se.depth,0,ge,Ce,se.data);else if(M.isFramebufferTexture){if(ut)if(Ie)n.texStorage2D(t.TEXTURE_2D,ue,Ae,se.width,se.height);else{let X=se.width,Z=se.height;for(let he=0;he<ue;he++)n.texImage2D(t.TEXTURE_2D,he,Ae,X,Z,0,ge,Ce,null),X>>=1,Z>>=1}}else if(De.length>0){if(Ie&&ut){const X=Me(De[0]);n.texStorage2D(t.TEXTURE_2D,ue,Ae,X.width,X.height)}for(let X=0,Z=De.length;X<Z;X++)ce=De[X],Ie?N&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ge,Ce,ce):n.texImage2D(t.TEXTURE_2D,X,Ae,ge,Ce,ce);M.generateMipmaps=!1}else if(Ie){if(ut){const X=Me(se);n.texStorage2D(t.TEXTURE_2D,ue,Ae,X.width,X.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ce,se)}else n.texImage2D(t.TEXTURE_2D,0,Ae,ge,Ce,se);m(M)&&f(J),Se.__version=j.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Q(R,M,V){if(M.image.length!==6)return;const J=Fe(R,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);const j=i.get(ee);if(ee.version!==j.__version||J===!0){n.activeTexture(t.TEXTURE0+V);const Se=ot.getPrimaries(ot.workingColorSpace),le=M.colorSpace===cr?null:ot.getPrimaries(M.colorSpace),pe=M.colorSpace===cr||Se===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Je=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let Z=0;Z<6;Z++)!Je&&!se?ge[Z]=y(M.image[Z],!0,r.maxCubemapSize):ge[Z]=se?M.image[Z].image:M.image[Z],ge[Z]=lt(M,ge[Z]);const Ce=ge[0],Ae=s.convert(M.format,M.colorSpace),ce=s.convert(M.type),De=_(M.internalFormat,Ae,ce,M.colorSpace),Ie=M.isVideoTexture!==!0,ut=j.__version===void 0||J===!0,N=ee.dataReady;let ue=C(M,Ce);me(t.TEXTURE_CUBE_MAP,M);let X;if(Je){Ie&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,De,Ce.width,Ce.height);for(let Z=0;Z<6;Z++){X=ge[Z].mipmaps;for(let he=0;he<X.length;he++){const oe=X[he];M.format!==ai?Ae!==null?Ie?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,oe.width,oe.height,Ae,oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,De,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,oe.width,oe.height,Ae,ce,oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,De,oe.width,oe.height,0,Ae,ce,oe.data)}}}else{if(X=M.mipmaps,Ie&&ut){X.length>0&&ue++;const Z=Me(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,De,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){Ie?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ge[Z].width,ge[Z].height,Ae,ce,ge[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,De,ge[Z].width,ge[Z].height,0,Ae,ce,ge[Z].data);for(let he=0;he<X.length;he++){const Oe=X[he].image[Z].image;Ie?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Oe.width,Oe.height,Ae,ce,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,De,Oe.width,Oe.height,0,Ae,ce,Oe.data)}}else{Ie?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae,ce,ge[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,De,Ae,ce,ge[Z]);for(let he=0;he<X.length;he++){const oe=X[he];Ie?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Ae,ce,oe.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,De,Ae,ce,oe.image[Z])}}}m(M)&&f(t.TEXTURE_CUBE_MAP),j.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ve(R,M,V,J,ee,j){const Se=s.convert(V.format,V.colorSpace),le=s.convert(V.type),pe=_(V.internalFormat,Se,le,V.colorSpace),Je=i.get(M),se=i.get(V);if(se.__renderTarget=M,!Je.__hasExternalTextures){const ge=Math.max(1,M.width>>j),Ce=Math.max(1,M.height>>j);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,j,pe,ge,Ce,M.depth,0,Se,le,null):n.texImage2D(ee,j,pe,ge,Ce,0,Se,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ge(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ee,se.__webglTexture,0,je(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ee,se.__webglTexture,j),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(R,M,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const J=M.depthTexture,ee=J&&J.isDepthTexture?J.type:null,j=x(M.stencilBuffer,ee),Se=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=je(M);Ge(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,j,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,j,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,j,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,R)}else{const J=M.textures;for(let ee=0;ee<J.length;ee++){const j=J[ee],Se=s.convert(j.format,j.colorSpace),le=s.convert(j.type),pe=_(j.internalFormat,Se,le,j.colorSpace),Je=je(M);V&&Ge(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Je,pe,M.width,M.height):Ge(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Je,pe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,pe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D(M.depthTexture,0);const ee=J.__webglTexture,j=je(M);if(M.depthTexture.format===Qs)Ge(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===ho)Ge(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Pe(R){const M=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=J}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");be(M.__webglFramebuffer,R)}else if(V){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=t.createRenderbuffer(),ie(M.__webglDepthbuffer[J],R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,j)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ie(M.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(R,M,V){const J=i.get(R);M!==void 0&&ve(J.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Pe(R)}function pt(R){const M=R.texture,V=i.get(R),J=i.get(M);R.addEventListener("dispose",A);const ee=R.textures,j=R.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=M.version,o.memory.textures++),j){V.__webglFramebuffer=[];for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[le]=[];for(let pe=0;pe<M.mipmaps.length;pe++)V.__webglFramebuffer[le][pe]=t.createFramebuffer()}else V.__webglFramebuffer[le]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)V.__webglFramebuffer[le]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Se)for(let le=0,pe=ee.length;le<pe;le++){const Je=i.get(ee[le]);Je.__webglTexture===void 0&&(Je.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ge(R)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const pe=ee[le];V.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[le]);const Je=s.convert(pe.format,pe.colorSpace),se=s.convert(pe.type),ge=_(pe.internalFormat,Je,se,pe.colorSpace,R.isXRRenderTarget===!0),Ce=je(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ge,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,V.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),me(t.TEXTURE_CUBE_MAP,M);for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)ve(V.__webglFramebuffer[le][pe],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else ve(V.__webglFramebuffer[le],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let le=0,pe=ee.length;le<pe;le++){const Je=ee[le],se=i.get(Je);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),me(t.TEXTURE_2D,Je),ve(V.__webglFramebuffer,R,Je,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m(Je)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,J.__webglTexture),me(le,M),M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)ve(V.__webglFramebuffer[pe],R,M,t.COLOR_ATTACHMENT0,le,pe);else ve(V.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,le,0);m(M)&&f(le),n.unbindTexture()}R.depthBuffer&&Pe(R)}function Xe(R){const M=R.textures;for(let V=0,J=M.length;V<J;V++){const ee=M[V];if(m(ee)){const j=v(R),Se=i.get(ee).__webglTexture;n.bindTexture(j,Se),f(j),n.unbindTexture()}}}const _t=[],I=[];function Yt(R){if(R.samples>0){if(Ge(R)===!1){const M=R.textures,V=R.width,J=R.height;let ee=t.COLOR_BUFFER_BIT;const j=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(R),le=M.length>1;if(le)for(let pe=0;pe<M.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);const Je=i.get(M[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Je,0)}t.blitFramebuffer(0,0,V,J,0,0,V,J,ee,t.NEAREST),l===!0&&(_t.length=0,I.length=0,_t.push(t.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(_t.push(j),I.push(j),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,I)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,_t))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let pe=0;pe<M.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);const Je=i.get(M[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function je(R){return Math.min(r.maxSamples,R.samples)}function Ge(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ye(R){const M=o.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function lt(R,M){const V=R.colorSpace,J=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==po&&V!==cr&&(ot.getTransfer(V)===ht?(J!==ai||ee!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function Me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=D,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=b,this.rebindTextures=we,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Ge}function FA(t,e){function n(i,r=cr){let s;const o=ot.getTransfer(r);if(i===Yi)return t.UNSIGNED_BYTE;if(i===tp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===np)return t.UNSIGNED_SHORT_5_5_5_1;if(i===o0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===r0)return t.BYTE;if(i===s0)return t.SHORT;if(i===Aa)return t.UNSIGNED_SHORT;if(i===ep)return t.INT;if(i===ns)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===Fa)return t.HALF_FLOAT;if(i===a0)return t.ALPHA;if(i===l0)return t.RGB;if(i===ai)return t.RGBA;if(i===u0)return t.LUMINANCE;if(i===c0)return t.LUMINANCE_ALPHA;if(i===Qs)return t.DEPTH_COMPONENT;if(i===ho)return t.DEPTH_STENCIL;if(i===ip)return t.RED;if(i===rp)return t.RED_INTEGER;if(i===f0)return t.RG;if(i===sp)return t.RG_INTEGER;if(i===op)return t.RGBA_INTEGER;if(i===Gl||i===Wl||i===Xl||i===Yl)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Gl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Gl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pd||i===md||i===gd||i===vd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===pd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===md)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_d||i===xd||i===yd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_d||i===xd)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yd)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sd||i===Md||i===Ed||i===Td||i===wd||i===Ad||i===Cd||i===Rd||i===Pd||i===Ld||i===bd||i===Dd||i===Id||i===Ud)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sd)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Md)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ed)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Td)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wd)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ad)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cd)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rd)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pd)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ld)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bd)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dd)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Id)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ud)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$l||i===Nd||i===Fd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$l)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===d0||i===Od||i===zd||i===Bd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===$l)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Od)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const OA={type:"move"};class nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),f=this._getHandJoint(u,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(OA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const zA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BA=`
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

}`;class kA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new tn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ar({vertexShader:zA,fragmentShader:BA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wt(new ju(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HA extends So{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,p=null,g=null;const y=new kA,m=n.getContextAttributes();let f=null,v=null;const _=[],x=[],C=new Ne;let w=null;const A=new Gn;A.viewport=new It;const P=new Gn;P.viewport=new It;const T=[A,P],S=new aE;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=_[$];return Q===void 0&&(Q=new nf,_[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=_[$];return Q===void 0&&(Q=new nf,_[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=_[$];return Q===void 0&&(Q=new nf,_[$]=Q),Q.getHandSpace()};function z($){const Q=x.indexOf($.inputSource);if(Q===-1)return;const ve=_[Q];ve!==void 0&&(ve.update($.inputSource,$.frame,u||o),ve.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",D);for(let $=0;$<_.length;$++){const Q=x[$];Q!==null&&(x[$]=null,_[$].disconnect(Q))}L=null,G=null,y.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,v=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",W),r.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new is(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ve=null,ie=null;m.depth&&(ie=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=m.stencil?ho:Qs,ve=m.stencil?fo:ns);const be={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new is(d.textureWidth,d.textureHeight,{format:ai,type:Yi,depthTexture:new w0(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function D($){for(let Q=0;Q<$.removed.length;Q++){const ve=$.removed[Q],ie=x.indexOf(ve);ie>=0&&(x[ie]=null,_[ie].disconnect(ve))}for(let Q=0;Q<$.added.length;Q++){const ve=$.added[Q];let ie=x.indexOf(ve);if(ie===-1){for(let Pe=0;Pe<_.length;Pe++)if(Pe>=x.length){x.push(ve),ie=Pe;break}else if(x[Pe]===null){x[Pe]=ve,ie=Pe;break}if(ie===-1)break}const be=_[ie];be&&be.connect(ve)}}const H=new O,q=new O;function b($,Q,ve){H.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(ve.matrixWorld);const ie=H.distanceTo(q),be=Q.projectionMatrix.elements,Pe=ve.projectionMatrix.elements,we=be[14]/(be[10]-1),pt=be[14]/(be[10]+1),Xe=(be[9]+1)/be[5],_t=(be[9]-1)/be[5],I=(be[8]-1)/be[0],Yt=(Pe[8]+1)/Pe[0],je=we*I,Ge=we*Yt,ye=ie/(-I+Yt),lt=ye*-I;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(lt),$.translateZ(ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),be[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Me=we+ye,R=pt+ye,M=je-lt,V=Ge+(ie-lt),J=Xe*pt/R*Me,ee=_t*pt/R*Me;$.projectionMatrix.makePerspective(M,V,J,ee,Me,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Y($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let Q=$.near,ve=$.far;y.texture!==null&&(y.depthNear>0&&(Q=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),S.near=P.near=A.near=Q,S.far=P.far=A.far=ve,(L!==S.near||G!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,G=S.far),A.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,S.layers.mask=A.layers.mask|P.layers.mask;const ie=$.parent,be=S.cameras;Y(S,ie);for(let Pe=0;Pe<be.length;Pe++)Y(be[Pe],ie);be.length===2?b(S,A,P):S.projectionMatrix.copy(A.projectionMatrix),K($,S,ie)};function K($,Q,ve){ve===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(ve.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=kd*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let ne=null;function me($,Q){if(c=Q.getViewerPose(u||o),g=Q,c!==null){const ve=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ie=!1;ve.length!==S.cameras.length&&(S.cameras.length=0,ie=!0);for(let Pe=0;Pe<ve.length;Pe++){const we=ve[Pe];let pt=null;if(p!==null)pt=p.getViewport(we);else{const _t=h.getViewSubImage(d,we);pt=_t.viewport,Pe===0&&(e.setRenderTargetTextures(v,_t.colorTexture,d.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(v))}let Xe=T[Pe];Xe===void 0&&(Xe=new Gn,Xe.layers.enable(Pe),Xe.viewport=new It,T[Pe]=Xe),Xe.matrix.fromArray(we.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(we.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(pt.x,pt.y,pt.width,pt.height),Pe===0&&(S.matrix.copy(Xe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ie===!0&&S.cameras.push(Xe)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Pe=h.getDepthInformation(ve[0]);Pe&&Pe.isValid&&Pe.texture&&y.init(e,Pe,r.renderState)}}for(let ve=0;ve<_.length;ve++){const ie=x[ve],be=_[ve];ie!==null&&be!==void 0&&be.update(ie,Q,u||o)}ne&&ne($,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Fe=new R0;Fe.setAnimationLoop(me),this.setAnimationLoop=function($){ne=$},this.dispose=function(){}}}const Fr=new $i,VA=new vt;function GA(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,S0(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,_,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,_):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===yn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===yn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),_=v.envMap,x=v.envMapRotation;_&&(m.envMap.value=_,Fr.copy(x),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),m.envMapRotation.value.setFromMatrix4(VA.makeRotationFromEuler(Fr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=_*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const x=_.program;i.uniformBlockBinding(v,x)}function u(v,_){let x=r[v.id];x===void 0&&(g(v),x=c(v),r[v.id]=x,v.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(v,C);const w=e.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function c(v){const _=h();v.__bindingPointIndex=_;const x=t.createBuffer(),C=v.__size,w=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,C,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],x=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let w=0,A=x.length;w<A;w++){const P=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,S=P.length;T<S;T++){const L=P[T];if(p(L,w,T,C)===!0){const G=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let D=0;D<z.length;D++){const H=z[D],q=y(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,G+W,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,W),W+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,x,C){const w=v.value,A=_+"_"+x;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const P=C[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return C[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(v){const _=v.uniforms;let x=0;const C=16;for(let A=0,P=_.length;A<P;A++){const T=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,L=T.length;S<L;S++){const G=T[S],z=Array.isArray(G.value)?G.value:[G.value];for(let W=0,D=z.length;W<D;W++){const H=z[W],q=y(H),b=x%C,Y=b%q.boundary,K=b+Y;x+=Y,K!==0&&C-K<q.storage&&(x+=C-K),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=q.storage}}}const w=x%C;return w>0&&(x+=C-w),v.__size=x,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class XA{constructor(e={}){const{canvas:n=cM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),y=new Int32Array(4);let m=null,f=null;const v=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kn,this.toneMapping=Mr,this.toneMappingExposure=1;const x=this;let C=!1,w=0,A=0,P=null,T=-1,S=null;const L=new It,G=new It;let z=null;const W=new We(0);let D=0,H=n.width,q=n.height,b=1,Y=null,K=null;const ne=new It(0,0,H,q),me=new It(0,0,H,q);let Fe=!1;const $=new T0;let Q=!1,ve=!1;const ie=new vt,be=new vt,Pe=new O,we=new It,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function _t(){return P===null?b:1}let I=i;function Yt(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qh}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",oe,!1),I===null){const U="webgl2";if(I=Yt(U,E),I===null)throw Yt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let je,Ge,ye,lt,Me,R,M,V,J,ee,j,Se,le,pe,Je,se,ge,Ce,Ae,ce,De,Ie,ut,N;function ue(){je=new ew(I),je.init(),Ie=new FA(I,je),Ge=new qT(I,je,e,Ie),ye=new UA(I,je),Ge.reverseDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),lt=new iw(I),Me=new SA,R=new NA(I,je,ye,Me,Ge,Ie,lt),M=new KT(x),V=new QT(x),J=new cE(I),ut=new YT(I,J),ee=new tw(I,J,lt,ut),j=new sw(I,ee,J,lt),Ae=new rw(I,Ge,R),se=new jT(Me),Se=new yA(x,M,V,je,Ge,ut,se),le=new GA(x,Me),pe=new EA,Je=new PA(je),Ce=new XT(x,M,V,ye,j,p,l),ge=new DA(x,j,Ge),N=new WA(I,lt,Ge,ye),ce=new $T(I,je,lt),De=new nw(I,je,lt),lt.programs=Se.programs,x.capabilities=Ge,x.extensions=je,x.properties=Me,x.renderLists=pe,x.shadowMap=ge,x.state=ye,x.info=lt}ue();const X=new HA(x,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return b},this.setPixelRatio=function(E){E!==void 0&&(b=E,this.setSize(H,q,!1))},this.getSize=function(E){return E.set(H,q)},this.setSize=function(E,U,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,q=U,n.width=Math.floor(E*b),n.height=Math.floor(U*b),B===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(H*b,q*b).floor()},this.setDrawingBufferSize=function(E,U,B){H=E,q=U,b=B,n.width=Math.floor(E*B),n.height=Math.floor(U*B),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(ne)},this.setViewport=function(E,U,B,k){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,U,B,k),ye.viewport(L.copy(ne).multiplyScalar(b).round())},this.getScissor=function(E){return E.copy(me)},this.setScissor=function(E,U,B,k){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,U,B,k),ye.scissor(G.copy(me).multiplyScalar(b).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(E){ye.setScissorTest(Fe=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(E=!0,U=!0,B=!0){let k=0;if(E){let F=!1;if(P!==null){const te=P.texture.format;F=te===op||te===sp||te===rp}if(F){const te=P.texture.type,ae=te===Yi||te===ns||te===Aa||te===fo||te===tp||te===np,fe=Ce.getClearColor(),_e=Ce.getClearAlpha(),Re=fe.r,Le=fe.g,Ee=fe.b;ae?(g[0]=Re,g[1]=Le,g[2]=Ee,g[3]=_e,I.clearBufferuiv(I.COLOR,0,g)):(y[0]=Re,y[1]=Le,y[2]=Ee,y[3]=_e,I.clearBufferiv(I.COLOR,0,y))}else k|=I.COLOR_BUFFER_BIT}U&&(k|=I.DEPTH_BUFFER_BIT),B&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),Ce.dispose(),pe.dispose(),Je.dispose(),Me.dispose(),M.dispose(),V.dispose(),j.dispose(),ut.dispose(),N.dispose(),Se.dispose(),X.dispose(),X.removeEventListener("sessionstart",Eo),X.removeEventListener("sessionend",st),Ke.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=lt.autoReset,U=ge.enabled,B=ge.autoUpdate,k=ge.needsUpdate,F=ge.type;ue(),lt.autoReset=E,ge.enabled=U,ge.autoUpdate=B,ge.needsUpdate=k,ge.type=F}function oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Oe(E){const U=E.target;U.removeEventListener("dispose",Oe),xt(U)}function xt(E){Ft(E),Me.remove(E)}function Ft(E){const U=Me.get(E).programs;U!==void 0&&(U.forEach(function(B){Se.releaseProgram(B)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,B,k,F,te){U===null&&(U=pt);const ae=F.isMesh&&F.matrixWorld.determinant()<0,fe=di(E,U,B,k,F);ye.setMaterial(k,ae);let _e=B.index,Re=1;if(k.wireframe===!0){if(_e=ee.getWireframeAttribute(B),_e===void 0)return;Re=2}const Le=B.drawRange,Ee=B.attributes.position;let ze=Le.start*Re,Ze=(Le.start+Le.count)*Re;te!==null&&(ze=Math.max(ze,te.start*Re),Ze=Math.min(Ze,(te.start+te.count)*Re)),_e!==null?(ze=Math.max(ze,0),Ze=Math.min(Ze,_e.count)):Ee!=null&&(ze=Math.max(ze,0),Ze=Math.min(Ze,Ee.count));const at=Ze-ze;if(at<0||at===1/0)return;ut.setup(F,k,fe,B,_e);let Ye,Ue=ce;if(_e!==null&&(Ye=J.get(_e),Ue=De,Ue.setIndex(Ye)),F.isMesh)k.wireframe===!0?(ye.setLineWidth(k.wireframeLinewidth*_t()),Ue.setMode(I.LINES)):Ue.setMode(I.TRIANGLES);else if(F.isLine){let Te=k.linewidth;Te===void 0&&(Te=1),ye.setLineWidth(Te*_t()),F.isLineSegments?Ue.setMode(I.LINES):F.isLineLoop?Ue.setMode(I.LINE_LOOP):Ue.setMode(I.LINE_STRIP)}else F.isPoints?Ue.setMode(I.POINTS):F.isSprite&&Ue.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ue.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))Ue.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Te=F._multiDrawStarts,Tt=F._multiDrawCounts,tt=F._multiDrawCount,Jn=_e?J.get(_e).bytesPerElement:1,cs=Me.get(k).currentProgram.getUniforms();for(let Sn=0;Sn<tt;Sn++)cs.setValue(I,"_gl_DrawID",Sn),Ue.render(Te[Sn]/Jn,Tt[Sn])}else if(F.isInstancedMesh)Ue.renderInstances(ze,at,F.count);else if(B.isInstancedBufferGeometry){const Te=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Tt=Math.min(B.instanceCount,Te);Ue.renderInstances(ze,at,Tt)}else Ue.render(ze,at)};function rt(E,U,B){E.transparent===!0&&E.side===Ni&&E.forceSinglePass===!1?(E.side=yn,E.needsUpdate=!0,ct(E,U,B),E.side=wr,E.needsUpdate=!0,ct(E,U,B),E.side=Ni):ct(E,U,B)}this.compile=function(E,U,B=null){B===null&&(B=E),f=Je.get(B),f.init(U),_.push(f),B.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),E!==B&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const k=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const te=F.material;if(te)if(Array.isArray(te))for(let ae=0;ae<te.length;ae++){const fe=te[ae];rt(fe,B,F),k.add(fe)}else rt(te,B,F),k.add(te)}),_.pop(),f=null,k},this.compileAsync=function(E,U,B=null){const k=this.compile(E,U,B);return new Promise(F=>{function te(){if(k.forEach(function(ae){Me.get(ae).currentProgram.isReady()&&k.delete(ae)}),k.size===0){F(E);return}setTimeout(te,10)}je.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let rn=null;function Nn(E){rn&&rn(E)}function Eo(){Ke.stop()}function st(){Ke.start()}const Ke=new R0;Ke.setAnimationLoop(Nn),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(E){rn=E,X.setAnimationLoop(E),E===null?Ke.stop():Ke.start()},X.addEventListener("sessionstart",Eo),X.addEventListener("sessionend",st),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,P),f=Je.get(E,_.length),f.init(U),_.push(f),be.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(be),ve=this.localClippingEnabled,Q=se.init(this.clippingPlanes,ve),m=pe.get(E,v.length),m.init(),v.push(m),X.enabled===!0&&X.isPresenting===!0){const te=x.xr.getDepthSensingMesh();te!==null&&et(te,U,-1/0,x.sortObjects)}et(E,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Y,K),Xe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Xe&&Ce.addToRenderList(m,E),this.info.render.frame++,Q===!0&&se.beginShadows();const B=f.state.shadowsArray;ge.render(B,E,U),Q===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,F=m.transmissive;if(f.setupLights(),U.isArrayCamera){const te=U.cameras;if(F.length>0)for(let ae=0,fe=te.length;ae<fe;ae++){const _e=te[ae];He(k,F,E,_e)}Xe&&Ce.render(E);for(let ae=0,fe=te.length;ae<fe;ae++){const _e=te[ae];ke(m,E,_e,_e.viewport)}}else F.length>0&&He(k,F,E,U),Xe&&Ce.render(E),ke(m,E,U);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(x,E,U),ut.resetDefaultState(),T=-1,S=null,_.pop(),_.length>0?(f=_[_.length-1],Q===!0&&se.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function et(E,U,B,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){k&&we.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);const ae=j.update(E),fe=E.material;fe.visible&&m.push(E,ae,fe,B,we.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const ae=j.update(E),fe=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),we.copy(E.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),we.copy(ae.boundingSphere.center)),we.applyMatrix4(E.matrixWorld).applyMatrix4(be)),Array.isArray(fe)){const _e=ae.groups;for(let Re=0,Le=_e.length;Re<Le;Re++){const Ee=_e[Re],ze=fe[Ee.materialIndex];ze&&ze.visible&&m.push(E,ae,ze,B,we.z,Ee)}}else fe.visible&&m.push(E,ae,fe,B,we.z,null)}}const te=E.children;for(let ae=0,fe=te.length;ae<fe;ae++)et(te[ae],U,B,k)}function ke(E,U,B,k){const F=E.opaque,te=E.transmissive,ae=E.transparent;f.setupLightsView(B),Q===!0&&se.setGlobalState(x.clippingPlanes,B),k&&ye.viewport(L.copy(k)),F.length>0&&dt(F,U,B),te.length>0&&dt(te,U,B),ae.length>0&&dt(ae,U,B),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function He(E,U,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new is(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Fa:Yi,minFilter:$r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const te=f.state.transmissionRenderTarget[k.id],ae=k.viewport||L;te.setSize(ae.z,ae.w);const fe=x.getRenderTarget();x.setRenderTarget(te),x.getClearColor(W),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear(),Xe&&Ce.render(B);const _e=x.toneMapping;x.toneMapping=Mr;const Re=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),Q===!0&&se.setGlobalState(x.clippingPlanes,k),dt(E,B,k),R.updateMultisampleRenderTarget(te),R.updateRenderTargetMipmap(te),je.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Ee=0,ze=U.length;Ee<ze;Ee++){const Ze=U[Ee],at=Ze.object,Ye=Ze.geometry,Ue=Ze.material,Te=Ze.group;if(Ue.side===Ni&&at.layers.test(k.layers)){const Tt=Ue.side;Ue.side=yn,Ue.needsUpdate=!0,Qe(at,B,k,Ye,Ue,Te),Ue.side=Tt,Ue.needsUpdate=!0,Le=!0}}Le===!0&&(R.updateMultisampleRenderTarget(te),R.updateRenderTargetMipmap(te))}x.setRenderTarget(fe),x.setClearColor(W,D),Re!==void 0&&(k.viewport=Re),x.toneMapping=_e}function dt(E,U,B){const k=U.isScene===!0?U.overrideMaterial:null;for(let F=0,te=E.length;F<te;F++){const ae=E[F],fe=ae.object,_e=ae.geometry,Re=k===null?ae.material:k,Le=ae.group;fe.layers.test(B.layers)&&Qe(fe,U,B,_e,Re,Le)}}function Qe(E,U,B,k,F,te){E.onBeforeRender(x,U,B,k,F,te),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,U,B,k,E,te),F.transparent===!0&&F.side===Ni&&F.forceSinglePass===!1?(F.side=yn,F.needsUpdate=!0,x.renderBufferDirect(B,U,k,F,E,te),F.side=wr,F.needsUpdate=!0,x.renderBufferDirect(B,U,k,F,E,te),F.side=Ni):x.renderBufferDirect(B,U,k,F,E,te),E.onAfterRender(x,U,B,k,F,te)}function ct(E,U,B){U.isScene!==!0&&(U=pt);const k=Me.get(E),F=f.state.lights,te=f.state.shadowsArray,ae=F.state.version,fe=Se.getParameters(E,F.state,te,U,B),_e=Se.getProgramCacheKey(fe);let Re=k.programs;k.environment=E.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(E.isMeshStandardMaterial?V:M).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Re===void 0&&(E.addEventListener("dispose",Oe),Re=new Map,k.programs=Re);let Le=Re.get(_e);if(Le!==void 0){if(k.currentProgram===Le&&k.lightsStateVersion===ae)return Ji(E,fe),Le}else fe.uniforms=Se.getUniforms(E),E.onBeforeCompile(fe,x),Le=Se.acquireProgram(fe,_e),Re.set(_e,Le),k.uniforms=fe.uniforms;const Ee=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ee.clippingPlanes=se.uniform),Ji(E,fe),k.needsLights=Ti(E),k.lightsStateVersion=ae,k.needsLights&&(Ee.ambientLightColor.value=F.state.ambient,Ee.lightProbe.value=F.state.probe,Ee.directionalLights.value=F.state.directional,Ee.directionalLightShadows.value=F.state.directionalShadow,Ee.spotLights.value=F.state.spot,Ee.spotLightShadows.value=F.state.spotShadow,Ee.rectAreaLights.value=F.state.rectArea,Ee.ltc_1.value=F.state.rectAreaLTC1,Ee.ltc_2.value=F.state.rectAreaLTC2,Ee.pointLights.value=F.state.point,Ee.pointLightShadows.value=F.state.pointShadow,Ee.hemisphereLights.value=F.state.hemi,Ee.directionalShadowMap.value=F.state.directionalShadowMap,Ee.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ee.spotShadowMap.value=F.state.spotShadowMap,Ee.spotLightMatrix.value=F.state.spotLightMatrix,Ee.spotLightMap.value=F.state.spotLightMap,Ee.pointShadowMap.value=F.state.pointShadowMap,Ee.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Le,k.uniformsList=null,Le}function sn(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=ql.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ji(E,U){const B=Me.get(E);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function di(E,U,B,k,F){U.isScene!==!0&&(U=pt),R.resetTextureUnits();const te=U.fog,ae=k.isMeshStandardMaterial?U.environment:null,fe=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:po,_e=(k.isMeshStandardMaterial?V:M).get(k.envMap||ae),Re=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ee=!!B.morphAttributes.position,ze=!!B.morphAttributes.normal,Ze=!!B.morphAttributes.color;let at=Mr;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(at=x.toneMapping);const Ye=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ue=Ye!==void 0?Ye.length:0,Te=Me.get(k),Tt=f.state.lights;if(Q===!0&&(ve===!0||E!==S)){const on=E===S&&k.id===T;se.setState(k,E,on)}let tt=!1;k.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Tt.state.version||Te.outputColorSpace!==fe||F.isBatchedMesh&&Te.batching===!1||!F.isBatchedMesh&&Te.batching===!0||F.isBatchedMesh&&Te.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Te.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Te.instancing===!1||!F.isInstancedMesh&&Te.instancing===!0||F.isSkinnedMesh&&Te.skinning===!1||!F.isSkinnedMesh&&Te.skinning===!0||F.isInstancedMesh&&Te.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Te.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Te.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Te.instancingMorph===!1&&F.morphTexture!==null||Te.envMap!==_e||k.fog===!0&&Te.fog!==te||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==se.numPlanes||Te.numIntersection!==se.numIntersection)||Te.vertexAlphas!==Re||Te.vertexTangents!==Le||Te.morphTargets!==Ee||Te.morphNormals!==ze||Te.morphColors!==Ze||Te.toneMapping!==at||Te.morphTargetsCount!==Ue)&&(tt=!0):(tt=!0,Te.__version=k.version);let Jn=Te.currentProgram;tt===!0&&(Jn=ct(k,U,F));let cs=!1,Sn=!1,To=!1;const Mt=Jn.getUniforms(),On=Te.uniforms;if(ye.useProgram(Jn.program)&&(cs=!0,Sn=!0,To=!0),k.id!==T&&(T=k.id,Sn=!0),cs||S!==E){ye.buffers.depth.getReversed()?(ie.copy(E.projectionMatrix),dM(ie),hM(ie),Mt.setValue(I,"projectionMatrix",ie)):Mt.setValue(I,"projectionMatrix",E.projectionMatrix),Mt.setValue(I,"viewMatrix",E.matrixWorldInverse);const hn=Mt.map.cameraPosition;hn!==void 0&&hn.setValue(I,Pe.setFromMatrixPosition(E.matrixWorld)),Ge.logarithmicDepthBuffer&&Mt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Mt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Sn=!0,To=!0)}if(F.isSkinnedMesh){Mt.setOptional(I,F,"bindMatrix"),Mt.setOptional(I,F,"bindMatrixInverse");const on=F.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Mt.setValue(I,"boneTexture",on.boneTexture,R))}F.isBatchedMesh&&(Mt.setOptional(I,F,"batchingTexture"),Mt.setValue(I,"batchingTexture",F._matricesTexture,R),Mt.setOptional(I,F,"batchingIdTexture"),Mt.setValue(I,"batchingIdTexture",F._indirectTexture,R),Mt.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&Mt.setValue(I,"batchingColorTexture",F._colorsTexture,R));const zn=B.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Ae.update(F,B,Jn),(Sn||Te.receiveShadow!==F.receiveShadow)&&(Te.receiveShadow=F.receiveShadow,Mt.setValue(I,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(On.envMap.value=_e,On.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(On.envMapIntensity.value=U.environmentIntensity),Sn&&(Mt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Te.needsLights&&dn(On,To),te&&k.fog===!0&&le.refreshFogUniforms(On,te),le.refreshMaterialUniforms(On,k,b,q,f.state.transmissionRenderTarget[E.id]),ql.upload(I,sn(Te),On,R)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ql.upload(I,sn(Te),On,R),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Mt.setValue(I,"center",F.center),Mt.setValue(I,"modelViewMatrix",F.modelViewMatrix),Mt.setValue(I,"normalMatrix",F.normalMatrix),Mt.setValue(I,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const on=k.uniformsGroups;for(let hn=0,Zu=on.length;hn<Zu;hn++){const Lr=on[hn];N.update(Lr,Jn),N.bind(Lr,Jn)}}return Jn}function dn(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Ti(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,U,B){Me.get(E.texture).__webglTexture=U,Me.get(E.depthTexture).__webglTexture=B;const k=Me.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const B=Me.get(E);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,B=0){P=E,w=U,A=B;let k=!0,F=null,te=!1,ae=!1;if(E){const _e=Me.get(E);if(_e.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(I.FRAMEBUFFER,null),k=!1;else if(_e.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(_e.__hasExternalTextures)R.rebindTextures(E,Me.get(E.texture).__webglTexture,Me.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ee=E.depthTexture;if(_e.__boundDepthTexture!==Ee){if(Ee!==null&&Me.has(Ee)&&(E.width!==Ee.image.width||E.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ae=!0);const Le=Me.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?F=Le[U][B]:F=Le[U],te=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?F=Me.get(E).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[B]:F=Le,L.copy(E.viewport),G.copy(E.scissor),z=E.scissorTest}else L.copy(ne).multiplyScalar(b).floor(),G.copy(me).multiplyScalar(b).floor(),z=Fe;if(ye.bindFramebuffer(I.FRAMEBUFFER,F)&&k&&ye.drawBuffers(E,F),ye.viewport(L),ye.scissor(G),ye.setScissorTest(z),te){const _e=Me.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,_e.__webglTexture,B)}else if(ae){const _e=Me.get(E.texture),Re=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,_e.__webglTexture,B||0,Re)}T=-1},this.readRenderTargetPixels=function(E,U,B,k,F,te,ae){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ae!==void 0&&(fe=fe[ae]),fe){ye.bindFramebuffer(I.FRAMEBUFFER,fe);try{const _e=E.texture,Re=_e.format,Le=_e.type;if(!Ge.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&B>=0&&B<=E.height-F&&I.readPixels(U,B,k,F,Ie.convert(Re),Ie.convert(Le),te)}finally{const _e=P!==null?Me.get(P).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(E,U,B,k,F,te,ae){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ae!==void 0&&(fe=fe[ae]),fe){const _e=E.texture,Re=_e.format,Le=_e.type;if(!Ge.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-k&&B>=0&&B<=E.height-F){ye.bindFramebuffer(I.FRAMEBUFFER,fe);const Ee=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ee),I.bufferData(I.PIXEL_PACK_BUFFER,te.byteLength,I.STREAM_READ),I.readPixels(U,B,k,F,Ie.convert(Re),Ie.convert(Le),0);const ze=P!==null?Me.get(P).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,ze);const Ze=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await fM(I,Ze,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ee),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,te),I.deleteBuffer(Ee),I.deleteSync(Ze),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,B=0){E.isTexture!==!0&&(Rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const k=Math.pow(2,-B),F=Math.floor(E.image.width*k),te=Math.floor(E.image.height*k),ae=U!==null?U.x:0,fe=U!==null?U.y:0;R.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,ae,fe,F,te),ye.unbindTexture()};const Ht=I.createFramebuffer(),Fn=I.createFramebuffer();this.copyTextureToTexture=function(E,U,B=null,k=null,F=0,te=null){E.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],U=arguments[2],te=arguments[3]||0,B=null),te===null&&(F!==0?(Rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=F,F=0):te=0);let ae,fe,_e,Re,Le,Ee,ze,Ze,at;const Ye=E.isCompressedTexture?E.mipmaps[te]:E.image;if(B!==null)ae=B.max.x-B.min.x,fe=B.max.y-B.min.y,_e=B.isBox3?B.max.z-B.min.z:1,Re=B.min.x,Le=B.min.y,Ee=B.isBox3?B.min.z:0;else{const zn=Math.pow(2,-F);ae=Math.floor(Ye.width*zn),fe=Math.floor(Ye.height*zn),E.isDataArrayTexture?_e=Ye.depth:E.isData3DTexture?_e=Math.floor(Ye.depth*zn):_e=1,Re=0,Le=0,Ee=0}k!==null?(ze=k.x,Ze=k.y,at=k.z):(ze=0,Ze=0,at=0);const Ue=Ie.convert(U.format),Te=Ie.convert(U.type);let Tt;U.isData3DTexture?(R.setTexture3D(U,0),Tt=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Tt=I.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Tt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const tt=I.getParameter(I.UNPACK_ROW_LENGTH),Jn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),cs=I.getParameter(I.UNPACK_SKIP_PIXELS),Sn=I.getParameter(I.UNPACK_SKIP_ROWS),To=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ye.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ye.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),I.pixelStorei(I.UNPACK_SKIP_ROWS,Le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ee);const Mt=E.isDataArrayTexture||E.isData3DTexture,On=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const zn=Me.get(E),on=Me.get(U),hn=Me.get(zn.__renderTarget),Zu=Me.get(on.__renderTarget);ye.bindFramebuffer(I.READ_FRAMEBUFFER,hn.__webglFramebuffer),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,Zu.__webglFramebuffer);for(let Lr=0;Lr<_e;Lr++)Mt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(E).__webglTexture,F,Ee+Lr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(U).__webglTexture,te,at+Lr)),I.blitFramebuffer(Re,Le,ae,fe,ze,Ze,ae,fe,I.DEPTH_BUFFER_BIT,I.NEAREST);ye.bindFramebuffer(I.READ_FRAMEBUFFER,null),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||Me.has(E)){const zn=Me.get(E),on=Me.get(U);ye.bindFramebuffer(I.READ_FRAMEBUFFER,Ht),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,Fn);for(let hn=0;hn<_e;hn++)Mt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,zn.__webglTexture,F,Ee+hn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zn.__webglTexture,F),On?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,on.__webglTexture,te,at+hn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,on.__webglTexture,te),F!==0?I.blitFramebuffer(Re,Le,ae,fe,ze,Ze,ae,fe,I.COLOR_BUFFER_BIT,I.NEAREST):On?I.copyTexSubImage3D(Tt,te,ze,Ze,at+hn,Re,Le,ae,fe):I.copyTexSubImage2D(Tt,te,ze,Ze,Re,Le,ae,fe);ye.bindFramebuffer(I.READ_FRAMEBUFFER,null),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else On?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Tt,te,ze,Ze,at,ae,fe,_e,Ue,Te,Ye.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Tt,te,ze,Ze,at,ae,fe,_e,Ue,Ye.data):I.texSubImage3D(Tt,te,ze,Ze,at,ae,fe,_e,Ue,Te,Ye):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,te,ze,Ze,ae,fe,Ue,Te,Ye.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,te,ze,Ze,Ye.width,Ye.height,Ue,Ye.data):I.texSubImage2D(I.TEXTURE_2D,te,ze,Ze,ae,fe,Ue,Te,Ye);I.pixelStorei(I.UNPACK_ROW_LENGTH,tt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Jn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,cs),I.pixelStorei(I.UNPACK_SKIP_ROWS,Sn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,To),te===0&&U.generateMipmaps&&I.generateMipmap(Tt),ye.unbindTexture()},this.copyTextureToTexture3D=function(E,U,B=null,k=null,F=0){return E.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,E=arguments[2],U=arguments[3],F=arguments[4]||0),Rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,B,k,F)},this.initRenderTarget=function(E){Me.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),ye.unbindTexture()},this.resetState=function(){w=0,A=0,P=null,ye.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=ot._getUnpackColorSpace()}}class rs{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const n=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const s=n[r],o=e+s,a=Math.abs(e)<Math.abs(s)?e-(o-s):s-(o-e);a&&(n[i++]=a),e=o}return n[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let n=this._n,i,r,s,o=0;if(n>0){for(o=e[--n];n>0&&(i=o,r=e[--n],o=i+r,s=r-(o-i),!s););n>0&&(s<0&&e[n-1]<0||s>0&&e[n-1]>0)&&(r=s*2,i=o+r,r==i-o&&(o=i))}return o}}function*YA(t){for(const e of t)yield*e}function I0(t){return Array.from(YA(t))}var gt=1e-6,nt=Math.PI,Yn=nt/2,Mg=nt/4,Zn=nt*2,Li=180/nt,Tn=nt/180,At=Math.abs,$A=Math.atan,Ca=Math.atan2,bt=Math.cos,Dt=Math.sin,qA=Math.sign||function(t){return t>0?1:t<0?-1:0},us=Math.sqrt;function jA(t){return t>1?0:t<-1?nt:Math.acos(t)}function Ra(t){return t>1?Yn:t<-1?-Yn:Math.asin(t)}function $n(){}function Eu(t,e){t&&Tg.hasOwnProperty(t.type)&&Tg[t.type](t,e)}var Eg={Feature:function(t,e){Eu(t.geometry,e)},FeatureCollection:function(t,e){for(var n=t.features,i=-1,r=n.length;++i<r;)Eu(n[i].geometry,e)}},Tg={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)t=n[i],e.point(t[0],t[1],t[2])},LineString:function(t,e){Gd(t.coordinates,e,0)},MultiLineString:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)Gd(n[i],e,0)},Polygon:function(t,e){wg(t.coordinates,e)},MultiPolygon:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)wg(n[i],e)},GeometryCollection:function(t,e){for(var n=t.geometries,i=-1,r=n.length;++i<r;)Eu(n[i],e)}};function Gd(t,e,n){var i=-1,r=t.length-n,s;for(e.lineStart();++i<r;)s=t[i],e.point(s[0],s[1],s[2]);e.lineEnd()}function wg(t,e){var n=-1,i=t.length;for(e.polygonStart();++n<i;)Gd(t[n],e,1);e.polygonEnd()}function Ps(t,e){t&&Eg.hasOwnProperty(t.type)?Eg[t.type](t,e):Eu(t,e)}function Wd(t){return[Ca(t[1],t[0]),Ra(t[2])]}function go(t){var e=t[0],n=t[1],i=bt(n);return[i*bt(e),i*Dt(e),Dt(n)]}function Cl(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Tu(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function rf(t,e){t[0]+=e[0],t[1]+=e[1],t[2]+=e[2]}function Rl(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function Xd(t){var e=us(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=e,t[1]/=e,t[2]/=e}function Yd(t,e){function n(i,r){return i=t(i,r),e(i[0],i[1])}return t.invert&&e.invert&&(n.invert=function(i,r){return i=e.invert(i,r),i&&t.invert(i[0],i[1])}),n}function $d(t,e){return At(t)>nt&&(t-=Math.round(t/Zn)*Zn),[t,e]}$d.invert=$d;function KA(t,e,n){return(t%=Zn)?e||n?Yd(Cg(t),Rg(e,n)):Cg(t):e||n?Rg(e,n):$d}function Ag(t){return function(e,n){return e+=t,At(e)>nt&&(e-=Math.round(e/Zn)*Zn),[e,n]}}function Cg(t){var e=Ag(t);return e.invert=Ag(-t),e}function Rg(t,e){var n=bt(t),i=Dt(t),r=bt(e),s=Dt(e);function o(a,l){var u=bt(l),c=bt(a)*u,h=Dt(a)*u,d=Dt(l),p=d*n+c*i;return[Ca(h*r-p*s,c*n-d*i),Ra(p*r+h*s)]}return o.invert=function(a,l){var u=bt(l),c=bt(a)*u,h=Dt(a)*u,d=Dt(l),p=d*r-h*s;return[Ca(h*r+d*s,c*n+p*i),Ra(p*n-c*i)]},o}function ZA(t,e,n,i,r,s){if(n){var o=bt(e),a=Dt(e),l=i*n;r==null?(r=e+i*Zn,s=e-l/2):(r=Pg(o,r),s=Pg(o,s),(i>0?r<s:r>s)&&(r+=i*Zn));for(var u,c=r;i>0?c>s:c<s;c-=l)u=Wd([o,-a*bt(c),-a*Dt(c)]),t.point(u[0],u[1])}}function Pg(t,e){e=go(e),e[0]-=t,Xd(e);var n=jA(-e[1]);return((-e[2]<0?-n:n)+Zn-gt)%Zn}function U0(){var t=[],e;return{point:function(n,i,r){e.push([n,i,r])},lineStart:function(){t.push(e=[])},lineEnd:$n,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var n=t;return t=[],e=null,n}}}function jl(t,e){return At(t[0]-e[0])<gt&&At(t[1]-e[1])<gt}function Pl(t,e,n,i){this.x=t,this.z=e,this.o=n,this.e=i,this.v=!1,this.n=this.p=null}function N0(t,e,n,i,r){var s=[],o=[],a,l;if(t.forEach(function(g){if(!((y=g.length-1)<=0)){var y,m=g[0],f=g[y],v;if(jl(m,f)){if(!m[2]&&!f[2]){for(r.lineStart(),a=0;a<y;++a)r.point((m=g[a])[0],m[1]);r.lineEnd();return}f[0]+=2*gt}s.push(v=new Pl(m,g,null,!0)),o.push(v.o=new Pl(m,null,v,!1)),s.push(v=new Pl(f,g,null,!1)),o.push(v.o=new Pl(f,null,v,!0))}}),!!s.length){for(o.sort(e),Lg(s),Lg(o),a=0,l=o.length;a<l;++a)o[a].e=n=!n;for(var u=s[0],c,h;;){for(var d=u,p=!0;d.v;)if((d=d.n)===u)return;c=d.z,r.lineStart();do{if(d.v=d.o.v=!0,d.e){if(p)for(a=0,l=c.length;a<l;++a)r.point((h=c[a])[0],h[1]);else i(d.x,d.n.x,1,r);d=d.n}else{if(p)for(c=d.p.z,a=c.length-1;a>=0;--a)r.point((h=c[a])[0],h[1]);else i(d.x,d.p.x,-1,r);d=d.p}d=d.o,c=d.z,p=!p}while(!d.v);r.lineEnd()}}}function Lg(t){if(e=t.length){for(var e,n=0,i=t[0],r;++n<e;)i.n=r=t[n],r.p=i,i=r;i.n=r=t[0],r.p=i}}function sf(t){return At(t[0])<=nt?t[0]:qA(t[0])*((At(t[0])+nt)%Zn-nt)}function JA(t,e){var n=sf(e),i=e[1],r=Dt(i),s=[Dt(n),-bt(n),0],o=0,a=0,l=new rs;r===1?i=Yn+gt:r===-1&&(i=-Yn-gt);for(var u=0,c=t.length;u<c;++u)if(d=(h=t[u]).length)for(var h,d,p=h[d-1],g=sf(p),y=p[1]/2+Mg,m=Dt(y),f=bt(y),v=0;v<d;++v,g=x,m=w,f=A,p=_){var _=h[v],x=sf(_),C=_[1]/2+Mg,w=Dt(C),A=bt(C),P=x-g,T=P>=0?1:-1,S=T*P,L=S>nt,G=m*w;if(l.add(Ca(G*T*Dt(S),f*A+G*bt(S))),o+=L?P+T*Zn:P,L^g>=n^x>=n){var z=Tu(go(p),go(_));Xd(z);var W=Tu(s,z);Xd(W);var D=(L^P>=0?-1:1)*Ra(W[2]);(i>D||i===D&&(z[0]||z[1]))&&(a+=L^P>=0?1:-1)}}return(o<-gt||o<gt&&l<-1e-12)^a&1}function F0(t,e,n,i){return function(r){var s=e(r),o=U0(),a=e(o),l=!1,u,c,h,d={point:p,lineStart:y,lineEnd:m,polygonStart:function(){d.point=f,d.lineStart=v,d.lineEnd=_,c=[],u=[]},polygonEnd:function(){d.point=p,d.lineStart=y,d.lineEnd=m,c=I0(c);var x=JA(u,i);c.length?(l||(r.polygonStart(),l=!0),N0(c,eC,x,n,r)):x&&(l||(r.polygonStart(),l=!0),r.lineStart(),n(null,null,1,r),r.lineEnd()),l&&(r.polygonEnd(),l=!1),c=u=null},sphere:function(){r.polygonStart(),r.lineStart(),n(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function p(x,C){t(x,C)&&r.point(x,C)}function g(x,C){s.point(x,C)}function y(){d.point=g,s.lineStart()}function m(){d.point=p,s.lineEnd()}function f(x,C){h.push([x,C]),a.point(x,C)}function v(){a.lineStart(),h=[]}function _(){f(h[0][0],h[0][1]),a.lineEnd();var x=a.clean(),C=o.result(),w,A=C.length,P,T,S;if(h.pop(),u.push(h),h=null,!!A){if(x&1){if(T=C[0],(P=T.length-1)>0){for(l||(r.polygonStart(),l=!0),r.lineStart(),w=0;w<P;++w)r.point((S=T[w])[0],S[1]);r.lineEnd()}return}A>1&&x&2&&C.push(C.pop().concat(C.shift())),c.push(C.filter(QA))}}return d}}function QA(t){return t.length>1}function eC(t,e){return((t=t.x)[0]<0?t[1]-Yn-gt:Yn-t[1])-((e=e.x)[0]<0?e[1]-Yn-gt:Yn-e[1])}const bg=F0(function(){return!0},tC,iC,[-nt,-Yn]);function tC(t){var e=NaN,n=NaN,i=NaN,r;return{lineStart:function(){t.lineStart(),r=1},point:function(s,o){var a=s>0?nt:-nt,l=At(s-e);At(l-nt)<gt?(t.point(e,n=(n+o)/2>0?Yn:-Yn),t.point(i,n),t.lineEnd(),t.lineStart(),t.point(a,n),t.point(s,n),r=0):i!==a&&l>=nt&&(At(e-i)<gt&&(e-=i*gt),At(s-a)<gt&&(s-=a*gt),n=nC(e,n,s,o),t.point(i,n),t.lineEnd(),t.lineStart(),t.point(a,n),r=0),t.point(e=s,n=o),i=a},lineEnd:function(){t.lineEnd(),e=n=NaN},clean:function(){return 2-r}}}function nC(t,e,n,i){var r,s,o=Dt(t-n);return At(o)>gt?$A((Dt(e)*(s=bt(i))*Dt(n)-Dt(i)*(r=bt(e))*Dt(t))/(r*s*o)):(e+i)/2}function iC(t,e,n,i){var r;if(t==null)r=n*Yn,i.point(-nt,r),i.point(0,r),i.point(nt,r),i.point(nt,0),i.point(nt,-r),i.point(0,-r),i.point(-nt,-r),i.point(-nt,0),i.point(-nt,r);else if(At(t[0]-e[0])>gt){var s=t[0]<e[0]?nt:-nt;r=n*s/2,i.point(-s,r),i.point(0,r),i.point(s,r)}else i.point(e[0],e[1])}function rC(t){var e=bt(t),n=2*Tn,i=e>0,r=At(e)>gt;function s(c,h,d,p){ZA(p,t,n,d,c,h)}function o(c,h){return bt(c)*bt(h)>e}function a(c){var h,d,p,g,y;return{lineStart:function(){g=p=!1,y=1},point:function(m,f){var v=[m,f],_,x=o(m,f),C=i?x?0:u(m,f):x?u(m+(m<0?nt:-nt),f):0;if(!h&&(g=p=x)&&c.lineStart(),x!==p&&(_=l(h,v),(!_||jl(h,_)||jl(v,_))&&(v[2]=1)),x!==p)y=0,x?(c.lineStart(),_=l(v,h),c.point(_[0],_[1])):(_=l(h,v),c.point(_[0],_[1],2),c.lineEnd()),h=_;else if(r&&h&&i^x){var w;!(C&d)&&(w=l(v,h,!0))&&(y=0,i?(c.lineStart(),c.point(w[0][0],w[0][1]),c.point(w[1][0],w[1][1]),c.lineEnd()):(c.point(w[1][0],w[1][1]),c.lineEnd(),c.lineStart(),c.point(w[0][0],w[0][1],3)))}x&&(!h||!jl(h,v))&&c.point(v[0],v[1]),h=v,p=x,d=C},lineEnd:function(){p&&c.lineEnd(),h=null},clean:function(){return y|(g&&p)<<1}}}function l(c,h,d){var p=go(c),g=go(h),y=[1,0,0],m=Tu(p,g),f=Cl(m,m),v=m[0],_=f-v*v;if(!_)return!d&&c;var x=e*f/_,C=-e*v/_,w=Tu(y,m),A=Rl(y,x),P=Rl(m,C);rf(A,P);var T=w,S=Cl(A,T),L=Cl(T,T),G=S*S-L*(Cl(A,A)-1);if(!(G<0)){var z=us(G),W=Rl(T,(-S-z)/L);if(rf(W,A),W=Wd(W),!d)return W;var D=c[0],H=h[0],q=c[1],b=h[1],Y;H<D&&(Y=D,D=H,H=Y);var K=H-D,ne=At(K-nt)<gt,me=ne||K<gt;if(!ne&&b<q&&(Y=q,q=b,b=Y),me?ne?q+b>0^W[1]<(At(W[0]-D)<gt?q:b):q<=W[1]&&W[1]<=b:K>nt^(D<=W[0]&&W[0]<=H)){var Fe=Rl(T,(-S+z)/L);return rf(Fe,A),[W,Wd(Fe)]}}}function u(c,h){var d=i?t:nt-t,p=0;return c<-d?p|=1:c>d&&(p|=2),h<-d?p|=4:h>d&&(p|=8),p}return F0(o,a,s,i?[0,-t]:[-nt,t-nt])}function sC(t,e,n,i,r,s){var o=t[0],a=t[1],l=e[0],u=e[1],c=0,h=1,d=l-o,p=u-a,g;if(g=n-o,!(!d&&g>0)){if(g/=d,d<0){if(g<c)return;g<h&&(h=g)}else if(d>0){if(g>h)return;g>c&&(c=g)}if(g=r-o,!(!d&&g<0)){if(g/=d,d<0){if(g>h)return;g>c&&(c=g)}else if(d>0){if(g<c)return;g<h&&(h=g)}if(g=i-a,!(!p&&g>0)){if(g/=p,p<0){if(g<c)return;g<h&&(h=g)}else if(p>0){if(g>h)return;g>c&&(c=g)}if(g=s-a,!(!p&&g<0)){if(g/=p,p<0){if(g>h)return;g>c&&(c=g)}else if(p>0){if(g<c)return;g<h&&(h=g)}return c>0&&(t[0]=o+c*d,t[1]=a+c*p),h<1&&(e[0]=o+h*d,e[1]=a+h*p),!0}}}}}var $o=1e9,Ll=-$o;function oC(t,e,n,i){function r(u,c){return t<=u&&u<=n&&e<=c&&c<=i}function s(u,c,h,d){var p=0,g=0;if(u==null||(p=o(u,h))!==(g=o(c,h))||l(u,c)<0^h>0)do d.point(p===0||p===3?t:n,p>1?i:e);while((p=(p+h+4)%4)!==g);else d.point(c[0],c[1])}function o(u,c){return At(u[0]-t)<gt?c>0?0:3:At(u[0]-n)<gt?c>0?2:1:At(u[1]-e)<gt?c>0?1:0:c>0?3:2}function a(u,c){return l(u.x,c.x)}function l(u,c){var h=o(u,1),d=o(c,1);return h!==d?h-d:h===0?c[1]-u[1]:h===1?u[0]-c[0]:h===2?u[1]-c[1]:c[0]-u[0]}return function(u){var c=u,h=U0(),d,p,g,y,m,f,v,_,x,C,w,A={point:P,lineStart:G,lineEnd:z,polygonStart:S,polygonEnd:L};function P(D,H){r(D,H)&&c.point(D,H)}function T(){for(var D=0,H=0,q=p.length;H<q;++H)for(var b=p[H],Y=1,K=b.length,ne=b[0],me,Fe,$=ne[0],Q=ne[1];Y<K;++Y)me=$,Fe=Q,ne=b[Y],$=ne[0],Q=ne[1],Fe<=i?Q>i&&($-me)*(i-Fe)>(Q-Fe)*(t-me)&&++D:Q<=i&&($-me)*(i-Fe)<(Q-Fe)*(t-me)&&--D;return D}function S(){c=h,d=[],p=[],w=!0}function L(){var D=T(),H=w&&D,q=(d=I0(d)).length;(H||q)&&(u.polygonStart(),H&&(u.lineStart(),s(null,null,1,u),u.lineEnd()),q&&N0(d,a,D,s,u),u.polygonEnd()),c=u,d=p=g=null}function G(){A.point=W,p&&p.push(g=[]),C=!0,x=!1,v=_=NaN}function z(){d&&(W(y,m),f&&x&&h.rejoin(),d.push(h.result())),A.point=P,x&&c.lineEnd()}function W(D,H){var q=r(D,H);if(p&&g.push([D,H]),C)y=D,m=H,f=q,C=!1,q&&(c.lineStart(),c.point(D,H));else if(q&&x)c.point(D,H);else{var b=[v=Math.max(Ll,Math.min($o,v)),_=Math.max(Ll,Math.min($o,_))],Y=[D=Math.max(Ll,Math.min($o,D)),H=Math.max(Ll,Math.min($o,H))];sC(b,Y,t,e,n,i)?(x||(c.lineStart(),c.point(b[0],b[1])),c.point(Y[0],Y[1]),q||c.lineEnd(),w=!1):q&&(c.lineStart(),c.point(D,H),w=!1)}v=D,_=H,x=q}return A}}const qd=t=>t;var of=new rs,jd=new rs,O0,z0,Kd,Zd,Fi={point:$n,lineStart:$n,lineEnd:$n,polygonStart:function(){Fi.lineStart=aC,Fi.lineEnd=uC},polygonEnd:function(){Fi.lineStart=Fi.lineEnd=Fi.point=$n,of.add(At(jd)),jd=new rs},result:function(){var t=of/2;return of=new rs,t}};function aC(){Fi.point=lC}function lC(t,e){Fi.point=B0,O0=Kd=t,z0=Zd=e}function B0(t,e){jd.add(Zd*t-Kd*e),Kd=t,Zd=e}function uC(){B0(O0,z0)}var vo=1/0,wu=vo,Pa=-vo,Au=Pa,Cu={point:cC,lineStart:$n,lineEnd:$n,polygonStart:$n,polygonEnd:$n,result:function(){var t=[[vo,wu],[Pa,Au]];return Pa=Au=-(wu=vo=1/0),t}};function cC(t,e){t<vo&&(vo=t),t>Pa&&(Pa=t),e<wu&&(wu=e),e>Au&&(Au=e)}var Jd=0,Qd=0,qo=0,Ru=0,Pu=0,Xs=0,eh=0,th=0,jo=0,k0,H0,vi,_i,Wn={point:ss,lineStart:Dg,lineEnd:Ig,polygonStart:function(){Wn.lineStart=hC,Wn.lineEnd=pC},polygonEnd:function(){Wn.point=ss,Wn.lineStart=Dg,Wn.lineEnd=Ig},result:function(){var t=jo?[eh/jo,th/jo]:Xs?[Ru/Xs,Pu/Xs]:qo?[Jd/qo,Qd/qo]:[NaN,NaN];return Jd=Qd=qo=Ru=Pu=Xs=eh=th=jo=0,t}};function ss(t,e){Jd+=t,Qd+=e,++qo}function Dg(){Wn.point=fC}function fC(t,e){Wn.point=dC,ss(vi=t,_i=e)}function dC(t,e){var n=t-vi,i=e-_i,r=us(n*n+i*i);Ru+=r*(vi+t)/2,Pu+=r*(_i+e)/2,Xs+=r,ss(vi=t,_i=e)}function Ig(){Wn.point=ss}function hC(){Wn.point=mC}function pC(){V0(k0,H0)}function mC(t,e){Wn.point=V0,ss(k0=vi=t,H0=_i=e)}function V0(t,e){var n=t-vi,i=e-_i,r=us(n*n+i*i);Ru+=r*(vi+t)/2,Pu+=r*(_i+e)/2,Xs+=r,r=_i*t-vi*e,eh+=r*(vi+t),th+=r*(_i+e),jo+=r*3,ss(vi=t,_i=e)}function G0(t){this._context=t}G0.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(t,e){switch(this._point){case 0:{this._context.moveTo(t,e),this._point=1;break}case 1:{this._context.lineTo(t,e);break}default:{this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,Zn);break}}},result:$n};var nh=new rs,af,W0,X0,Ko,Zo,La={point:$n,lineStart:function(){La.point=gC},lineEnd:function(){af&&Y0(W0,X0),La.point=$n},polygonStart:function(){af=!0},polygonEnd:function(){af=null},result:function(){var t=+nh;return nh=new rs,t}};function gC(t,e){La.point=Y0,W0=Ko=t,X0=Zo=e}function Y0(t,e){Ko-=t,Zo-=e,nh.add(us(Ko*Ko+Zo*Zo)),Ko=t,Zo=e}let Ug,Lu,Ng,Fg;class Og{constructor(e){this._append=e==null?$0:vC(e),this._radius=4.5,this._=""}pointRadius(e){return this._radius=+e,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(e,n){switch(this._point){case 0:{this._append`M${e},${n}`,this._point=1;break}case 1:{this._append`L${e},${n}`;break}default:{if(this._append`M${e},${n}`,this._radius!==Ng||this._append!==Lu){const i=this._radius,r=this._;this._="",this._append`m0,${i}a${i},${i} 0 1,1 0,${-2*i}a${i},${i} 0 1,1 0,${2*i}z`,Ng=i,Lu=this._append,Fg=this._,this._=r}this._+=Fg;break}}}result(){const e=this._;return this._="",e.length?e:null}}function $0(t){let e=1;this._+=t[0];for(const n=t.length;e<n;++e)this._+=arguments[e]+t[e]}function vC(t){const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);if(e>15)return $0;if(e!==Ug){const n=10**e;Ug=e,Lu=function(r){let s=1;this._+=r[0];for(const o=r.length;s<o;++s)this._+=Math.round(arguments[s]*n)/n+r[s]}}return Lu}function zg(t,e){let n=3,i=4.5,r,s;function o(a){return a&&(typeof i=="function"&&s.pointRadius(+i.apply(this,arguments)),Ps(a,r(s))),s.result()}return o.area=function(a){return Ps(a,r(Fi)),Fi.result()},o.measure=function(a){return Ps(a,r(La)),La.result()},o.bounds=function(a){return Ps(a,r(Cu)),Cu.result()},o.centroid=function(a){return Ps(a,r(Wn)),Wn.result()},o.projection=function(a){return arguments.length?(r=a==null?(t=null,qd):(t=a).stream,o):t},o.context=function(a){return arguments.length?(s=a==null?(e=null,new Og(n)):new G0(e=a),typeof i!="function"&&s.pointRadius(i),o):e},o.pointRadius=function(a){return arguments.length?(i=typeof a=="function"?a:(s.pointRadius(+a),+a),o):i},o.digits=function(a){if(!arguments.length)return n;if(a==null)n=null;else{const l=Math.floor(a);if(!(l>=0))throw new RangeError(`invalid digits: ${a}`);n=l}return e===null&&(s=new Og(n)),o},o.projection(t).digits(n).context(e)}function cp(t){return function(e){var n=new ih;for(var i in t)n[i]=t[i];return n.stream=e,n}}function ih(){}ih.prototype={constructor:ih,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function fp(t,e,n){var i=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),i!=null&&t.clipExtent(null),Ps(n,t.stream(Cu)),e(Cu.result()),i!=null&&t.clipExtent(i),t}function q0(t,e,n){return fp(t,function(i){var r=e[1][0]-e[0][0],s=e[1][1]-e[0][1],o=Math.min(r/(i[1][0]-i[0][0]),s/(i[1][1]-i[0][1])),a=+e[0][0]+(r-o*(i[1][0]+i[0][0]))/2,l=+e[0][1]+(s-o*(i[1][1]+i[0][1]))/2;t.scale(150*o).translate([a,l])},n)}function _C(t,e,n){return q0(t,[[0,0],e],n)}function xC(t,e,n){return fp(t,function(i){var r=+e,s=r/(i[1][0]-i[0][0]),o=(r-s*(i[1][0]+i[0][0]))/2,a=-s*i[0][1];t.scale(150*s).translate([o,a])},n)}function yC(t,e,n){return fp(t,function(i){var r=+e,s=r/(i[1][1]-i[0][1]),o=-s*i[0][0],a=(r-s*(i[1][1]+i[0][1]))/2;t.scale(150*s).translate([o,a])},n)}var Bg=16,SC=bt(30*Tn);function kg(t,e){return+e?EC(t,e):MC(t)}function MC(t){return cp({point:function(e,n){e=t(e,n),this.stream.point(e[0],e[1])}})}function EC(t,e){function n(i,r,s,o,a,l,u,c,h,d,p,g,y,m){var f=u-i,v=c-r,_=f*f+v*v;if(_>4*e&&y--){var x=o+d,C=a+p,w=l+g,A=us(x*x+C*C+w*w),P=Ra(w/=A),T=At(At(w)-1)<gt||At(s-h)<gt?(s+h)/2:Ca(C,x),S=t(T,P),L=S[0],G=S[1],z=L-i,W=G-r,D=v*z-f*W;(D*D/_>e||At((f*z+v*W)/_-.5)>.3||o*d+a*p+l*g<SC)&&(n(i,r,s,o,a,l,L,G,T,x/=A,C/=A,w,y,m),m.point(L,G),n(L,G,T,x,C,w,u,c,h,d,p,g,y,m))}}return function(i){var r,s,o,a,l,u,c,h,d,p,g,y,m={point:f,lineStart:v,lineEnd:x,polygonStart:function(){i.polygonStart(),m.lineStart=C},polygonEnd:function(){i.polygonEnd(),m.lineStart=v}};function f(P,T){P=t(P,T),i.point(P[0],P[1])}function v(){h=NaN,m.point=_,i.lineStart()}function _(P,T){var S=go([P,T]),L=t(P,T);n(h,d,c,p,g,y,h=L[0],d=L[1],c=P,p=S[0],g=S[1],y=S[2],Bg,i),i.point(h,d)}function x(){m.point=f,i.lineEnd()}function C(){v(),m.point=w,m.lineEnd=A}function w(P,T){_(r=P,T),s=h,o=d,a=p,l=g,u=y,m.point=_}function A(){n(h,d,c,p,g,y,s,o,r,a,l,u,Bg,i),m.lineEnd=x,x()}return m}}var TC=cp({point:function(t,e){this.stream.point(t*Tn,e*Tn)}});function wC(t){return cp({point:function(e,n){var i=t(e,n);return this.stream.point(i[0],i[1])}})}function AC(t,e,n,i,r){function s(o,a){return o*=i,a*=r,[e+t*o,n-t*a]}return s.invert=function(o,a){return[(o-e)/t*i,(n-a)/t*r]},s}function Hg(t,e,n,i,r,s){if(!s)return AC(t,e,n,i,r);var o=bt(s),a=Dt(s),l=o*t,u=a*t,c=o/t,h=a/t,d=(a*n-o*e)/t,p=(a*e+o*n)/t;function g(y,m){return y*=i,m*=r,[l*y-u*m+e,n-u*y-l*m]}return g.invert=function(y,m){return[i*(c*y-h*m+d),r*(p-h*y-c*m)]},g}function CC(t){return RC(function(){return t})()}function RC(t){var e,n=150,i=480,r=250,s=0,o=0,a=0,l=0,u=0,c,h=0,d=1,p=1,g=null,y=bg,m=null,f,v,_,x=qd,C=.5,w,A,P,T,S;function L(D){return P(D[0]*Tn,D[1]*Tn)}function G(D){return D=P.invert(D[0],D[1]),D&&[D[0]*Li,D[1]*Li]}L.stream=function(D){return T&&S===D?T:T=TC(wC(c)(y(w(x(S=D)))))},L.preclip=function(D){return arguments.length?(y=D,g=void 0,W()):y},L.postclip=function(D){return arguments.length?(x=D,m=f=v=_=null,W()):x},L.clipAngle=function(D){return arguments.length?(y=+D?rC(g=D*Tn):(g=null,bg),W()):g*Li},L.clipExtent=function(D){return arguments.length?(x=D==null?(m=f=v=_=null,qd):oC(m=+D[0][0],f=+D[0][1],v=+D[1][0],_=+D[1][1]),W()):m==null?null:[[m,f],[v,_]]},L.scale=function(D){return arguments.length?(n=+D,z()):n},L.translate=function(D){return arguments.length?(i=+D[0],r=+D[1],z()):[i,r]},L.center=function(D){return arguments.length?(s=D[0]%360*Tn,o=D[1]%360*Tn,z()):[s*Li,o*Li]},L.rotate=function(D){return arguments.length?(a=D[0]%360*Tn,l=D[1]%360*Tn,u=D.length>2?D[2]%360*Tn:0,z()):[a*Li,l*Li,u*Li]},L.angle=function(D){return arguments.length?(h=D%360*Tn,z()):h*Li},L.reflectX=function(D){return arguments.length?(d=D?-1:1,z()):d<0},L.reflectY=function(D){return arguments.length?(p=D?-1:1,z()):p<0},L.precision=function(D){return arguments.length?(w=kg(A,C=D*D),W()):us(C)},L.fitExtent=function(D,H){return q0(L,D,H)},L.fitSize=function(D,H){return _C(L,D,H)},L.fitWidth=function(D,H){return xC(L,D,H)},L.fitHeight=function(D,H){return yC(L,D,H)};function z(){var D=Hg(n,0,0,d,p,h).apply(null,e(s,o)),H=Hg(n,i-D[0],r-D[1],d,p,h);return c=KA(a,l,u),A=Yd(e,H),P=Yd(c,A),w=kg(A,C),W()}function W(){return T=S=null,L}return function(){return e=t.apply(this,arguments),L.invert=e.invert&&G,z()}}function rh(t,e){return[t,e]}rh.invert=rh;function Vg(){return CC(rh).scale(152.63)}function Cs(t){if(!t||t.trim()==="")return{r:0,g:0,b:0,a:0};const e=t.trim(),n=e.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)/i);if(n){const r=Math.max(0,Math.min(255,parseFloat(n[1])))/255,s=Math.max(0,Math.min(255,parseFloat(n[2])))/255,o=Math.max(0,Math.min(255,parseFloat(n[3])))/255,a=n[4]!==void 0?Math.max(0,Math.min(1,parseFloat(n[4]))):1;return{r,g:s,b:o,a}}const i=e.replace(/^#/,"");return i.length===8?{r:parseInt(i.slice(0,2),16)/255,g:parseInt(i.slice(2,4),16)/255,b:parseInt(i.slice(4,6),16)/255,a:parseInt(i.slice(6,8),16)/255}:i.length===6?{r:parseInt(i.slice(0,2),16)/255,g:parseInt(i.slice(2,4),16)/255,b:parseInt(i.slice(4,6),16)/255,a:1}:i.length===4?{r:parseInt(i[0]+i[0],16)/255,g:parseInt(i[1]+i[1],16)/255,b:parseInt(i[2]+i[2],16)/255,a:parseInt(i[3]+i[3],16)/255}:i.length===3?{r:parseInt(i[0]+i[0],16)/255,g:parseInt(i[1]+i[1],16)/255,b:parseInt(i[2]+i[2],16)/255,a:1}:{r:0,g:0,b:0,a:1}}function qi(t,e,n,i,r){if(n===e)return i;const s=(t-e)/(n-e);return i+s*(r-i)}function PC(t){if(t===0)return 0;const e=Math.max(0,Math.min(10,t));return qi(e,0,10,0,.9)}function LC(t){const e=Math.max(1,Math.min(10,t));return qi(e,1,10,24,8)}function bC(t){const e=Math.max(1,Math.min(20,t));return qi(e,1,20,.2,2)}function DC(t){const e=Math.max(1,Math.min(10,t));return qi(e,1,10,.1,.5)}function IC(t){const e=Math.max(0,Math.min(100,t));return qi(e,0,100,.1,2.5)}function UC(t){return Math.max(0,Math.min(1,t/10))}function NC(t){return qi(Math.max(0,Math.min(10,t)),0,10,.001,.02)}function FC(t){const e=Math.max(1,Math.min(10,t));return qi(e,1,10,10,1)}function OC(t,e){if(t.length<2||e>=10)return t;const n=Math.max(1,Math.floor(FC(e))),i=[];i.push(t[0]);for(let a=n;a<t.length-1;a+=n){const l=Math.min(a,t.length-1);i.push(t[l])}const r=t[t.length-1],s=t[0];return Math.abs(r[0]-s[0])<1e-4&&Math.abs(r[1]-s[1])<1e-4||i.push(r),i.length>=2?i:t}function ko(t,e){const n=t*(Math.PI/180),i=e*(Math.PI/180),r=Math.cos(n)*Math.sin(i),s=Math.sin(n),o=Math.cos(n)*Math.cos(i);return{x:r,y:s,z:o}}function zC({speed:t=2,smoothing:e=8,dots:n={color:"#ffffff",size:5,density:8,allDots:!1},fill:i="dots",fillColor:r="#ffffff",scale:s=8,stopOnHover:o=!0,markerConfig:a={markers:[],color:"#00f7ff",size:40},direction:l="left",initialLatitude:u=23,initialLongitude:c=-23,oceanColor:h="#000000",outlineColor:d="#ffffff",showOutline:p=!0,graticuleColor:g="#D4D4D4",showGrid:y=!0,outlineWidth:m=1,dragSpeed:f=5,detail:v=5,style:_}){const x=xi.useRef(null),[,C]=xi.useState(!0),[w,A]=xi.useState(null),P=n.color,T=n.size,S=n.density,L=n.allDots,G=1,z=UC(e),W=PC(t),D=l==="left"?-W:W,H=LC(S),q=DC(T),b=IC(a.size),Y=bC(s);xi.useEffect(()=>{if(!x.current)return;const ne=x.current,me=ne.clientWidth||ne.offsetWidth||800,Fe=ne.clientHeight||ne.offsetHeight||600,$=new FM,Q=new Gn(50,me/Fe,.1,1e3),ie=1*Y,be=2.5/Y;Q.position.set(0,0,be),Q.lookAt(0,0,0);const Pe=new XA({antialias:!0,alpha:!0});Pe.setSize(me,Fe),Pe.setPixelRatio(Math.min(window.devicePixelRatio,2)),Pe.outputColorSpace="srgb";const we=Pe.domElement;we.style.position="absolute",we.style.inset="0",we.style.width="100%",we.style.height="100%",we.style.display="block",we.style.opacity="0",we.style.visibility="hidden",ne.appendChild(we);const pt=h,Xe=d,_t=P,I=a.color,Yt=g,je=r,Ge=Cs(pt),ye=Cs(Xe),lt=Cs(_t);Cs(I);const Me=Cs(Yt),R=Cs(je),M=new Vs(ie,64,64),V=pt?new We(pt):new We(0,0,0),J=new Ii({color:V,transparent:Ge.a<1||Ge.a===0,opacity:Ge.a}),ee=new Wt(M,J);if($.add(ee),p&&d&&ye.a>0){const st=[];for(let ke=0;ke<=128;ke++){const He=ke/128*Math.PI*2,dt=Math.cos(He)*ie,Qe=Math.sin(He)*ie;st.push(dt,Qe,0)}const et=[];for(let ke=0;ke<st.length;ke+=3)et.push(new O(st[ke],st[ke+1],st[ke+2]));if(et.length>=2){et.push(et[0].clone());const ke=new We(Xe),He=new Ii({color:ke,transparent:ye.a<1,opacity:ye.a}),dt=new Xo(et),Qe=m/10*.01,ct=new Gs(dt,et.length*2,Qe,8,!1);new Wt(ct,He)}}const j=new qr,Se=new qr;if(y&&Yt&&Me.a>0){const st=Yt?new We(Yt):new We(1,1,1),Ke=new Ii({color:st,transparent:Me.a<1||Me.a===0,opacity:Me.a}),et=15;for(let ke=-90;ke<=90;ke+=et){const He=[];for(let Qe=0;Qe<=64;Qe++){const ct=Qe/64*360-180,sn=ko(ke,ct);He.push(sn.x*ie,sn.y*ie,sn.z*ie)}if(He&&He.length>=6){const Qe=[];for(let ct=0;ct<He.length;ct+=3)Qe.push(new O(He[ct],He[ct+1],He[ct+2]));if(Qe.length>=2){const ct=new Xo(Qe),sn=G/10*.01,Ji=new Gs(ct,Qe.length*2,sn,8,!1),di=new Wt(Ji,Ke);di.renderOrder=0,Se.add(di)}}}for(let ke=-180;ke<180;ke+=et){const He=[];for(let Qe=0;Qe<=64;Qe++){const ct=Qe/64*180-90,sn=ko(ct,ke);He.push(sn.x*ie,sn.y*ie,sn.z*ie)}if(He&&He.length>=6){const Qe=[];for(let ct=0;ct<He.length;ct+=3)Qe.push(new O(He[ct],He[ct+1],He[ct+2]));if(Qe.length>=2){const ct=new Xo(Qe),sn=G/10*.01,Ji=new Gs(ct,Qe.length*2,sn,8,!1),di=new Wt(Ji,Ke);di.renderOrder=0,Se.add(di)}}}}let le=null,pe=[];const Je=async()=>{try{C(!0);const st=await fetch("land.json");if(!st.ok)throw new Error("Failed to load land data");const Ke=await st.json();for(;j.children.length>0;)j.remove(j.children[0]);if(p&&d&&ye.a>0){const dn=new We(Xe),Ti=new Ii({color:dn,transparent:ye.a<1,opacity:ye.a,depthTest:!0,depthWrite:!0}),Ht=Vg(),Fn=zg().projection(Ht);let E=0,U=0;Ke.features.forEach(B=>{var Re,Le,Ee;const k=((Re=B.properties)==null?void 0:Re.featurecla)||((Le=B.properties)==null?void 0:Le.type)||"",F=((Ee=B.properties)==null?void 0:Ee.name)||"";if(k.toLowerCase().includes("graticule")||k.toLowerCase().includes("grid")||k.toLowerCase().includes("line")||F.toLowerCase().includes("graticule")||F.toLowerCase().includes("grid")||F.toLowerCase().includes("line")){U++;return}E++;const te=Fn(B);if(!te||(te.match(/[ML][^MLZ]*/g)||[]).length===0)return;const fe=B.geometry;if(!fe||!fe.coordinates)return;const _e=ze=>{if(ze.length<2)return;const Ze=OC(ze,v),at=[];if(Ze.forEach(Ye=>{const[Ue,Te]=Ye,Tt=ko(Te,Ue);at.push(Tt.x*ie,Tt.y*ie,Tt.z*ie)}),at&&at.length>=6){const Ye=[];for(let Ue=0;Ue<at.length;Ue+=3)Ye.push(new O(at[Ue],at[Ue+1],at[Ue+2]));if(Ye.length>0&&Ye[0].distanceTo(Ye[Ye.length-1])>.001&&Ye.push(Ye[0].clone()),Ye.length>=2){const Ue=new Xo(Ye),Te=m/10*.01,Tt=new Gs(Ue,Ye.length*2,Te,8,!1),tt=new Wt(Tt,Ti);tt.renderOrder=0,j.add(tt)}}};fe.type==="Polygon"&&fe.coordinates.length>0?_e(fe.coordinates[0]):fe.type==="MultiPolygon"&&fe.coordinates.forEach(ze=>{ze.length>0&&_e(ze[0])})}),console.log(`[Globe] Processed ${E} land features, skipped ${U} grid features`)}const et=2048,ke=1024,He=document.createElement("canvas");He.width=et,He.height=ke;const dt=He.getContext("2d",{willReadFrequently:!0});if(!dt)throw new Error("Canvas not supported");const Qe=Vg().fitSize([et,ke],{type:"Sphere"}),ct=zg().projection(Qe).context(dt);dt.fillStyle="#000",dt.fillRect(0,0,et,ke),dt.fillStyle="#fff",dt.beginPath(),Ke.features.forEach(dn=>{ct(dn)}),dt.fill();const Ji=dt.getImageData(0,0,et,ke).data,di=(dn,Ti)=>{const Ht=Math.round((dn+180)/360*et)%et,Fn=Math.round((90-Ti)/180*ke),U=(Math.max(0,Math.min(ke-1,Fn))*et+Ht)*4;return Ji[U]>128};if(i==="solid"){const Ht=document.createElement("canvas");Ht.width=1024,Ht.height=512;const Fn=Ht.getContext("2d"),E=Fn.createImageData(1024,512),U=E.data,B=Math.round(R.r*255),k=Math.round(R.g*255),F=Math.round(R.b*255),te=Math.round((R.a||1)*255);for(let Re=0;Re<512;Re++)for(let Le=0;Le<1024;Le++){const Ee=Le/1024,ze=Re/512;let Ze=(Ee-.25)*360;Ze=((Ze+180)%360+360)%360-180;const at=(ze-.5)*180,Ye=L||di(Ze,at),Ue=(Re*1024+Le)*4;Ye?(U[Ue]=B,U[Ue+1]=k,U[Ue+2]=F,U[Ue+3]=te):U[Ue+3]=0}Fn.putImageData(E,0,0);const ae=new VM(Ht);ae.flipY=!1,ae.needsUpdate=!0;const fe=new Vs(ie*1.002,64,64),_e=new Ii({map:ae,transparent:!0});le=new Wt(fe,_e),oe.add(le)}else{const dn=[],Ti=H*.08;for(let Ht=-90;Ht<=90;Ht+=Ti){const Fn=Math.abs(Ht)*Math.PI/180,E=Math.cos(Fn),U=E>.01?Ti/Math.max(.3,E):360;for(let B=-180;B<180;B+=U)(L||di(B,Ht))&&dn.push([B,Ht])}if(dn.length>0){const Ht=new Vs(.01*q,4,4),Fn=_t?new We(_t):new We(.6,.6,.6),E=new Ii({color:Fn,transparent:lt.a<1||lt.a===0,opacity:lt.a}),U=new BM(Ht,E,dn.length),B=new vt;for(let k=0;k<dn.length;k++){const[F,te]=dn[k],ae=ko(te,F);B.makeScale(1,1,1),B.setPosition(ae.x*ie,ae.y*ie,ae.z*ie),U.setMatrixAt(k,B)}U.instanceMatrix.needsUpdate=!0,le=U,oe.add(le)}}se(),Pe.render($,Q),we.style.opacity="1",we.style.visibility="visible",C(!1)}catch{A("Failed to load land map data"),C(!1)}},se=()=>{if(pe.forEach(st=>oe.remove(st)),pe=[],a.markers&&a.markers.length>0){const st=.01*b,Ke=new Vs(st,16,16),et=I?new We(I):new We(1,1,1),ke=new Ii({color:et});a.markers.forEach(He=>{if(!He||typeof He.lat!="number"||typeof He.lng!="number")return;const dt=ko(He.lat,He.lng),Qe=new Wt(Ke,ke.clone());Qe.position.set(dt.x*ie,dt.y*ie,dt.z*ie),oe.add(Qe),pe.push(Qe)})}},ge=c*Math.PI/180,Ce=u*Math.PI/180,Ae={x:ge,y:Ce},ce={x:ge,y:Ce},De={x:0,y:0};let Ie=!1,ut=!1,N=0,ue=0,X=null;const Z=z===0?1:qi(z,0,1,.4,.03),he=qi(z,0,1,.7,.96),oe=new qr;oe.rotation.y=ge,oe.rotation.x=Ce,$.add(oe),oe.add(ee),y&&g&&Me.a>0&&oe.add(Se),oe.add(j),pe.forEach(st=>oe.add(st));const Oe=()=>{let st=!1;const Ke=.01;!Ie&&D!==0&&(!o||!ut)&&(ce.x+=D*.01),!Ie&&z>0&&(Math.abs(De.x)>Ke||Math.abs(De.y)>Ke?(ce.x+=De.x,ce.y+=De.y,ce.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,ce.y)),De.x*=he,De.y*=he):(De.x=0,De.y=0));const et=ce.x-Ae.x,ke=ce.y-Ae.y;(Math.abs(et)>Ke||Math.abs(ke)>Ke||D!==0||Ie)&&(Ae.x+=et*Z,Ae.y+=ke*Z,Ae.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,Ae.y)),st=!0),(st||D!==0||Ie)&&(oe.rotation.y=Ae.x,oe.rotation.x=Ae.y,Pe.render($,Q));const He=Math.abs(De.x)>Ke||Math.abs(De.y)>Ke,dt=Math.abs(et)>Ke||Math.abs(ke)>Ke;Ie||D!==0||He||dt?X=requestAnimationFrame(Oe):X=null},xt=()=>{X===null&&(X=requestAnimationFrame(Oe))};D!==0&&xt();const Ft=st=>{Ie=!0,De.x=0,De.y=0,N=st.clientX,ue=st.clientY,xt();const Ke=ke=>{const He=NC(f),dt=ke.clientX-N,Qe=ke.clientY-ue;ce.x+=dt*He,ce.y+=Qe*He,ce.y=Math.max(-Math.PI/2,Math.min(Math.PI/2,ce.y)),De.x=dt*He*.3,De.y=Qe*He*.3,N=ke.clientX,ue=ke.clientY},et=()=>{document.removeEventListener("mousemove",Ke),document.removeEventListener("mouseup",et),Ie=!1};document.addEventListener("mousemove",Ke),document.addEventListener("mouseup",et)};we.addEventListener("mousedown",Ft);const rt=new lE,rn=new Ne,Nn=st=>{if(!o)return;const Ke=we.getBoundingClientRect();rn.x=(st.clientX-Ke.left)/Ke.width*2-1,rn.y=-((st.clientY-Ke.top)/Ke.height)*2+1,rt.setFromCamera(rn,Q),ut=rt.intersectObject(ee).length>0};we.addEventListener("mousemove",Nn);const Eo=new ResizeObserver(()=>{const st=ne.clientWidth||ne.offsetWidth||800,Ke=ne.clientHeight||ne.offsetHeight||600;Q.aspect=st/Ke,Q.updateProjectionMatrix(),Pe.setSize(st,Ke);const et=2.5/Y;Q.position.set(0,0,et),Q.lookAt(0,0,0),Pe.render($,Q)});return Eo.observe(ne),Je(),()=>{X!==null&&cancelAnimationFrame(X),we.removeEventListener("mousedown",Ft),we.removeEventListener("mousemove",Nn),Eo.disconnect(),Pe.dispose(),ne.removeChild(we)}},[t,e,n,i,r,L,S,T,P,s,o,a,l,u,c,h,d,p,g,y,m,f,v,D,H,q,b,Y]);const K={..._,position:"relative",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"};return w?An.jsx("div",{style:K,children:An.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minWidth:0,minHeight:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#ffffff",textAlign:"center",padding:"16px",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},children:[An.jsx("div",{style:{fontSize:"16px",fontWeight:600},children:"Error loading Earth visualization"}),An.jsx("div",{style:{fontSize:"13px",opacity:.7,marginTop:"4px"},children:w})]})}):An.jsx("div",{ref:x,style:K})}const BC={fill:"dots",scale:8,speed:2,showGrid:!0,direction:"left",fillColor:"#ffffff",oceanColor:"#000000",showOutline:!0,stopOnHover:!0,outlineColor:"#ffffff",graticuleColor:"#D4D4D4",initialLatitude:23,initialLongitude:-23};function kC(t){return An.jsx(zC,{...BC,...t})}const HC={color:"#6df7c1",size:4.2,density:7,allDots:!1},VC={markers:[],color:"#ffc857",size:40},GC={width:"100%",height:"100%"};function WC(){const[t,e]=xi.useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches),[n,i]=xi.useState(()=>window.matchMedia("(max-width: 600px)").matches);return xi.useEffect(()=>{var o;const r=window.matchMedia("(prefers-reduced-motion: reduce)"),s=a=>e(a.matches);return(o=r.addEventListener)==null||o.call(r,"change",s),()=>{var a;return(a=r.removeEventListener)==null?void 0:a.call(r,"change",s)}},[]),xi.useEffect(()=>{var o;const r=window.matchMedia("(max-width: 600px)"),s=a=>i(a.matches);return(o=r.addEventListener)==null||o.call(r,"change",s),()=>{var a;return(a=r.removeEventListener)==null?void 0:a.call(r,"change",s)}},[]),An.jsxs("main",{className:"globe-stage","aria-label":"Интерактивный 3D-глобус TapX AI",children:[An.jsx("p",{className:"sr-only",children:"Интерактивный 3D-глобус: точки суши, координатная сетка и медленное вращение. Перетаскивание мышью или пальцем вращает глобус; при уменьшении движения вращение остановлено."}),An.jsx("div",{className:"globe-wrap",children:An.jsx(kC,{fill:"dots",fillColor:"#6df7c1",dots:HC,markerConfig:VC,oceanColor:"#030807",outlineColor:"#2d6b56",outlineWidth:1,showOutline:!0,graticuleColor:"#12352a",showGrid:!0,scale:n?6.4:8,speed:t?0:1.4,smoothing:8,direction:"left",stopOnHover:!0,initialLatitude:23,initialLongitude:-23,detail:5,dragSpeed:6,style:GC})}),An.jsx("span",{className:"globe__brand","aria-hidden":"true",children:"TAPX / ORBITAL GLOBE"}),An.jsx("span",{className:"globe__hint","aria-hidden":"true",children:"drag to rotate"})]})}lf.createRoot(document.getElementById("root")).render(An.jsx(WC,{}));
