!function(e){function n(n){for(var r,i,l=n[0],u=n[1],c=n[2],f=0,p=[];f<l.length;f++)i=l[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(n);p.length;)p.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,l=1;l<t.length;l++){var u=t[l];0!==o[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={1:0},a=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var s=u;a.push([8,0]),t()}([,function(e,n,t){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,i,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in t=Object(arguments[u]))o.call(t,c)&&(l[c]=t[c]);if(r){i=r(t);for(var s=0;s<i.length;s++)a.call(t,i[s])&&(l[i[s]]=t[i[s]])}}return l}},,,,function(e,n,t){"use strict";e.exports=t(6)},function(e,n,t){"use strict";(function(e){
/** @license React v0.13.4
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(n,"__esModule",{value:!0});var t=null,r=!1,o=3,a=-1,i=-1,l=!1,u=!1;function c(){if(!l){var e=t.expirationTime;u?S():u=!0,x(p,e)}}function s(){var e=t,n=t.next;if(t===n)t=null;else{var r=t.previous;t=r.next=n,n.previous=r}e.next=e.previous=null,r=e.callback,n=e.expirationTime,e=e.priorityLevel;var a=o,l=i;o=e,i=n;try{var u=r()}finally{o=a,i=l}if("function"==typeof u)if(u={callback:u,priorityLevel:e,expirationTime:n,next:null,previous:null},null===t)t=u.next=u.previous=u;else{r=null,e=t;do{if(e.expirationTime>=n){r=e;break}e=e.next}while(e!==t);null===r?r=t:r===t&&(t=u,c()),(n=r.previous).next=r.previous=u,u.next=r,u.previous=n}}function f(){if(-1===a&&null!==t&&1===t.priorityLevel){l=!0;try{do{s()}while(null!==t&&1===t.priorityLevel)}finally{l=!1,null!==t?c():u=!1}}}function p(e){l=!0;var o=r;r=e;try{if(e)for(;null!==t;){var a=n.unstable_now();if(!(t.expirationTime<=a))break;do{s()}while(null!==t&&t.expirationTime<=a)}else if(null!==t)do{s()}while(null!==t&&!E())}finally{l=!1,r=o,null!==t?c():u=!1,f()}}var h,b,d=Date,m="function"==typeof setTimeout?setTimeout:void 0,v="function"==typeof clearTimeout?clearTimeout:void 0,y="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,g="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function w(e){h=y(function(n){v(b),e(n)}),b=m(function(){g(h),e(n.unstable_now())},100)}if("object"==typeof performance&&"function"==typeof performance.now){var k=performance;n.unstable_now=function(){return k.now()}}else n.unstable_now=function(){return d.now()};var x,S,E,O=null;if("undefined"!=typeof window?O=window:void 0!==e&&(O=e),O&&O._schedMock){var _=O._schedMock;x=_[0],S=_[1],E=_[2],n.unstable_now=_[3]}else if("undefined"==typeof window||"function"!=typeof MessageChannel){var P=null,j=function(e){if(null!==P)try{P(e)}finally{P=null}};x=function(e){null!==P?setTimeout(x,0,e):(P=e,setTimeout(j,0,!1))},S=function(){P=null},E=function(){return!1}}else{"undefined"!=typeof console&&("function"!=typeof y&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof g&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var N=null,C=!1,T=-1,A=!1,M=!1,U=0,I=33,L=33;E=function(){return U<=n.unstable_now()};var F=new MessageChannel,J=F.port2;F.port1.onmessage=function(){C=!1;var e=N,t=T;N=null,T=-1;var r=n.unstable_now(),o=!1;if(0>=U-r){if(!(-1!==t&&t<=r))return A||(A=!0,w(q)),N=e,void(T=t);o=!0}if(null!==e){M=!0;try{e(o)}finally{M=!1}}};var q=function(e){if(null!==N){w(q);var n=e-U+L;n<L&&I<L?(8>n&&(n=8),L=n<I?I:n):I=n,U=e+L,C||(C=!0,J.postMessage(void 0))}else A=!1};x=function(e,n){N=e,T=n,M||0>n?J.postMessage(void 0):A||(A=!0,w(q))},S=function(){N=null,C=!1,T=-1}}n.unstable_ImmediatePriority=1,n.unstable_UserBlockingPriority=2,n.unstable_NormalPriority=3,n.unstable_IdlePriority=5,n.unstable_LowPriority=4,n.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=o,i=a;o=e,a=n.unstable_now();try{return t()}finally{o=r,a=i,f()}},n.unstable_next=function(e){switch(o){case 1:case 2:case 3:var t=3;break;default:t=o}var r=o,i=a;o=t,a=n.unstable_now();try{return e()}finally{o=r,a=i,f()}},n.unstable_scheduleCallback=function(e,r){var i=-1!==a?a:n.unstable_now();if("object"==typeof r&&null!==r&&"number"==typeof r.timeout)r=i+r.timeout;else switch(o){case 1:r=i+-1;break;case 2:r=i+250;break;case 5:r=i+1073741823;break;case 4:r=i+1e4;break;default:r=i+5e3}if(e={callback:e,priorityLevel:o,expirationTime:r,next:null,previous:null},null===t)t=e.next=e.previous=e,c();else{i=null;var l=t;do{if(l.expirationTime>r){i=l;break}l=l.next}while(l!==t);null===i?i=t:i===t&&(t=e,c()),(r=i.previous).next=i.previous=e,e.next=i,e.previous=r}return e},n.unstable_cancelCallback=function(e){var n=e.next;if(null!==n){if(n===e)t=null;else{e===t&&(t=n);var r=e.previous;r.next=n,n.previous=r}e.next=e.previous=null}},n.unstable_wrapCallback=function(e){var t=o;return function(){var r=o,i=a;o=t,a=n.unstable_now();try{return e.apply(this,arguments)}finally{o=r,a=i,f()}}},n.unstable_getCurrentPriorityLevel=function(){return o},n.unstable_shouldYield=function(){return!r&&(null!==t&&t.expirationTime<i||E())},n.unstable_continueExecution=function(){null!==t&&c()},n.unstable_pauseExecution=function(){},n.unstable_getFirstCallbackNode=function(){return t}}).call(this,t(7))},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(2),i=t.n(a),l=function(e,n,t,r){return new(t||(t=Promise))(function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function l(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){e.done?o(e.value):new t(function(n){n(e.value)}).then(i,l)}u((r=r.apply(e,n||[])).next())})},u=function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},c=function(){function e(){}return e.search=function(e,n){return l(this,void 0,Promise,function(){return u(this,function(e){return[2,{totalcount:0,page:1,perpage:1,totalpage:1,data:[]}]})})},e.search2=function(e,n){return l(this,void 0,Promise,function(){return u(this,function(e){return console.log("request search!"),console.log(n),[2,{totalcount:10,page:1,perpage:4,totalpage:3,data:[{hoge:"aa",fuga:"AA"},{hoge:"bb",fuga:"BB"},{hoge:"cc",fuga:"CC"},{hoge:"dd",fuga:"DD"}]}]})})},e}(),s=function(){function e(){}return e.calcPagingNumber=function(e,n){var t={close:1,hasNext:!1,hasNextSibling:!(e===n),hasPrev:!1,hasPrevSibling:!(1===e),open:1,numberArray:[]},r=e%10;t.open=0===r?e-9:e-r+1,0===r?t.close=e:(t.close=e+(10-r),t.close>n&&(t.close=n)),t.open>=11&&(t.hasPrev=!0),0===t.close%10&&t.close+1<=n&&(t.hasNext=!0);for(var o=t.open;o<=t.close;o++)t.numberArray.push(o);return t},e.calcPrevNextPage=function(e,n,t){var r=1;return(r=e+t)<=0&&(r=1),r>n&&(r=n),r},e}(),f=function(e){var n=e.params,t=e.handleClickPage,o=function(e,r){e.preventDefault();var o=s.calcPrevNextPage(n.page,n.totalpage,r);t(e,o)},a=s.calcPagingNumber(n.page,n.totalpage),i={prev:a.hasPrev?"page-item":"page-item disabled",prevSibling:a.hasPrevSibling?"page-item":"page-item disabled",nextSibling:a.hasNextSibling?"page-item":"page-item disabled",next:a.hasNext?"page-item":"page-item disabled"};return r.createElement("div",{className:"d-flex justify-content-between"},r.createElement("div",null,r.createElement("ul",{className:"pagination"},r.createElement("li",{className:i.prev},r.createElement("a",{href:"#",className:"page-link",onClick:function(e){o(e,-10)}},"«")),r.createElement("li",{className:i.prevSibling},r.createElement("a",{href:"#",className:"page-link",onClick:function(e){o(e,-1)}},"<")),a.numberArray.map(function(e){return r.createElement("li",{key:e,className:n.page===e?"page-item active":"page-item"},r.createElement("a",{href:"#",className:"page-link isnum",onClick:function(n){!function(e,n){e.preventDefault(),t(e,n)}(n,e)}},e.toString()))}),r.createElement("li",{className:i.nextSibling},r.createElement("a",{href:"#",className:"page-link",onClick:function(e){o(e,1)}},">")),r.createElement("li",{className:i.next},r.createElement("a",{href:"#",className:"page-link",onClick:function(e){o(e,10)}},"»")))),r.createElement("div",null,"全 "+n.totalcount+" 件 ("+n.page+" / "+n.totalpage+" ページ) "+n.perpage+" 件ずつ表示"))},p=function(){function e(e,n){void 0===n&&(n=!0),this.ss=window.sessionStorage,this.key="",this.canUseSS=!1,this.key=e;try{this.ss=n?window.sessionStorage:window.localStorage;this.ss.length;this.canUseSS=!0}catch(e){}}return Object.defineProperty(e.prototype,"CanUseSS",{get:function(){return this.canUseSS},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this.canUseSS&&this.ss.removeItem(this.key)},e.prototype.save=function(e){if(this.canUseSS)try{this.ss.setItem(this.key,e)}catch(e){console.dir(e)}},e.prototype.restore=function(){if(this.canUseSS){var e=this.ss.getItem(this.key);return null===e?"":e}return""},e}(),h=function(){return(h=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},b=function(e,n,t,r){return new(t||(t=Promise))(function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function l(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){e.done?o(e.value):new t(function(n){n(e.value)}).then(i,l)}u((r=r.apply(e,n||[])).next())})},d=function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},m=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&(t[r[o]]=e[r[o]])}return t},v={totalcount:0,page:1,perpage:10,totalpage:1};var y,g={cond1:"",cond2:"",forcheck:[]},w=function(e){var n=function(e,n,t){var o=this,a=new p(e),i=r.useState(JSON.parse(JSON.stringify(n))),l=i[0],u=i[1],c=r.useState(h({},v)),s=c[0],f=c[1],y=r.useState([]),g=y[0],w=y[1],k=function(e){return b(o,void 0,void 0,function(){var e,n,r,o;return d(this,function(i){switch(i.label){case 0:return a.CanUseSS&&(e=JSON.stringify(l),a.save(e)),[4,t(l,s.page)];case 1:return n=i.sent(),r=n.data,o=m(n,["data"]),w(r),f(o),[2]}})})};return r.useEffect(function(){if(a.CanUseSS){var e=a.restore();if(""!==e){var n=JSON.parse(e);u(h({},n))}}k()},[]),{handleChangeInput:function(e,n){void 0===n&&(n=!1);var t=e.target,r=t.name,o=t.value;if(r in l)if(n){var a=l[r];if(!Array.isArray(a))return;var i=a.indexOf(o);-1===i?a.push(o):a.splice(i,1),l[r]=a.slice(),u(h({},l))}else l[r]=o,u(h({},l))},handleSearch:k,handleReset:function(e){u(JSON.parse(JSON.stringify(n)))},handleClickPage:function(e,n){return b(o,void 0,void 0,function(){var e,r,o;return d(this,function(a){switch(a.label){case 0:return[4,t(l,n)];case 1:return e=a.sent(),r=e.data,o=m(e,["data"]),w(r),f(o),[2]}})})},condition:l,pageObj:s,records:g}}("searchwithhook",g,c.search2),t=n.handleChangeInput,o=n.handleSearch,a=n.handleReset,i=n.handleClickPage,l=n.condition,u=n.pageObj,s=n.records;return r.createElement("div",{className:"p-3"},r.createElement("div",null,r.createElement("div",null,"search"),r.createElement("div",null,"条件1 :"," ",r.createElement("input",{type:"text",name:"cond1",value:l.cond1,onChange:t,className:"form-control"})),r.createElement("div",null,"条件2 :"," ",r.createElement("input",{type:"text",name:"cond2",value:l.cond2,onChange:t,className:"form-control"})),r.createElement("div",null,"条件3 :"," ",r.createElement("input",{type:"checkbox",name:"forcheck",value:"abc",checked:l.forcheck.some(function(e){return"abc"===e}),onChange:function(e){t(e,!0)}}),"ABC",r.createElement("input",{type:"checkbox",name:"forcheck",value:"xyz",checked:l.forcheck.some(function(e){return"xyz"===e}),onChange:function(e){t(e,!0)}}),"XYZ"),r.createElement("div",null,r.createElement("button",{type:"button",className:"btn btn-secondary",onClick:o},"検索"),r.createElement("button",{type:"button",className:"btn btn-secondary",onClick:a},"リセット"))),r.createElement("div",null,r.createElement(f,{params:u,handleClickPage:i})),r.createElement("div",null,r.createElement("table",{className:"table table-striped table-bordered table-sm"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{style:{width:"8em"}},"column1"),r.createElement("th",null,"column2"))),r.createElement("tbody",null,s.map(function(e,n){return r.createElement("tr",{key:n},r.createElement("td",null,e.fuga),r.createElement("td",null,e.hoge))})))))},k=(y=function(e,n){return(y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}y(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),x=function(e){function n(n){return e.call(this,n)||this}return k(n,e),n.prototype.render=function(){return r.createElement(w,null)},n}(r.Component);document.addEventListener("DOMContentLoaded",function(){console.log("here");var e=document.getElementById("app");if(null===e)throw new Error("app not found");i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),e)},!1)}]);