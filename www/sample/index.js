!function(e){function n(n){for(var r,l,i=n[0],u=n[1],c=n[2],f=0,p=[];f<i.length;f++)l=i[f],a[l]&&p.push(a[l][0]),a[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(n);p.length;)p.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,i=1;i<t.length;i++){var u=t[i];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),e=l(l.s=t[0]))}return e}var r={},a={1:0},o=[];function l(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=r,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)l.d(t,r,function(n){return e[n]}.bind(null,r));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var s=u;o.push([8,0]),t()}([,,function(e,n,t){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,l,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in t=Object(arguments[u]))a.call(t,c)&&(i[c]=t[c]);if(r){l=r(t);for(var s=0;s<l.length;s++)o.call(t,l[s])&&(i[l[s]]=t[l[s]])}}return i}},,,function(e,n,t){"use strict";e.exports=t(6)},function(e,n,t){"use strict";(function(e){
/** @license React v0.13.3
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(n,"__esModule",{value:!0});var t=null,r=!1,a=3,o=-1,l=-1,i=!1,u=!1;function c(){if(!i){var e=t.expirationTime;u?E():u=!0,x(p,e)}}function s(){var e=t,n=t.next;if(t===n)t=null;else{var r=t.previous;t=r.next=n,n.previous=r}e.next=e.previous=null,r=e.callback,n=e.expirationTime,e=e.priorityLevel;var o=a,i=l;a=e,l=n;try{var u=r()}finally{a=o,l=i}if("function"==typeof u)if(u={callback:u,priorityLevel:e,expirationTime:n,next:null,previous:null},null===t)t=u.next=u.previous=u;else{r=null,e=t;do{if(e.expirationTime>=n){r=e;break}e=e.next}while(e!==t);null===r?r=t:r===t&&(t=u,c()),(n=r.previous).next=r.previous=u,u.next=r,u.previous=n}}function f(){if(-1===o&&null!==t&&1===t.priorityLevel){i=!0;try{do{s()}while(null!==t&&1===t.priorityLevel)}finally{i=!1,null!==t?c():u=!1}}}function p(e){i=!0;var a=r;r=e;try{if(e)for(;null!==t;){var o=n.unstable_now();if(!(t.expirationTime<=o))break;do{s()}while(null!==t&&t.expirationTime<=o)}else if(null!==t)do{s()}while(null!==t&&!S())}finally{i=!1,r=a,null!==t?c():u=!1,f()}}var h,m,d=Date,b="function"==typeof setTimeout?setTimeout:void 0,v="function"==typeof clearTimeout?clearTimeout:void 0,y="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,g="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function w(e){h=y(function(n){v(m),e(n)}),m=b(function(){g(h),e(n.unstable_now())},100)}if("object"==typeof performance&&"function"==typeof performance.now){var k=performance;n.unstable_now=function(){return k.now()}}else n.unstable_now=function(){return d.now()};var x,E,S,O=null;if("undefined"!=typeof window?O=window:void 0!==e&&(O=e),O&&O._schedMock){var P=O._schedMock;x=P[0],E=P[1],S=P[2],n.unstable_now=P[3]}else if("undefined"==typeof window||"function"!=typeof MessageChannel){var _=null,j=function(e){if(null!==_)try{_(e)}finally{_=null}};x=function(e){null!==_?setTimeout(x,0,e):(_=e,setTimeout(j,0,!1))},E=function(){_=null},S=function(){return!1}}else{"undefined"!=typeof console&&("function"!=typeof y&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof g&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var N=null,C=!1,T=-1,M=!1,A=!1,I=0,F=33,U=33;S=function(){return I<=n.unstable_now()};var J=new MessageChannel,L=J.port2;J.port1.onmessage=function(){C=!1;var e=N,t=T;N=null,T=-1;var r=n.unstable_now(),a=!1;if(0>=I-r){if(!(-1!==t&&t<=r))return M||(M=!0,w(q)),N=e,void(T=t);a=!0}if(null!==e){A=!0;try{e(a)}finally{A=!1}}};var q=function(e){if(null!==N){w(q);var n=e-I+U;n<U&&F<U?(8>n&&(n=8),U=n<F?F:n):F=n,I=e+U,C||(C=!0,L.postMessage(void 0))}else M=!1};x=function(e,n){N=e,T=n,A||0>n?L.postMessage(void 0):M||(M=!0,w(q))},E=function(){N=null,C=!1,T=-1}}n.unstable_ImmediatePriority=1,n.unstable_UserBlockingPriority=2,n.unstable_NormalPriority=3,n.unstable_IdlePriority=5,n.unstable_LowPriority=4,n.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=a,l=o;a=e,o=n.unstable_now();try{return t()}finally{a=r,o=l,f()}},n.unstable_next=function(e){switch(a){case 1:case 2:case 3:var t=3;break;default:t=a}var r=a,l=o;a=t,o=n.unstable_now();try{return e()}finally{a=r,o=l,f()}},n.unstable_scheduleCallback=function(e,r){var l=-1!==o?o:n.unstable_now();if("object"==typeof r&&null!==r&&"number"==typeof r.timeout)r=l+r.timeout;else switch(a){case 1:r=l+-1;break;case 2:r=l+250;break;case 5:r=l+1073741823;break;case 4:r=l+1e4;break;default:r=l+5e3}if(e={callback:e,priorityLevel:a,expirationTime:r,next:null,previous:null},null===t)t=e.next=e.previous=e,c();else{l=null;var i=t;do{if(i.expirationTime>r){l=i;break}i=i.next}while(i!==t);null===l?l=t:l===t&&(t=e,c()),(r=l.previous).next=l.previous=e,e.next=l,e.previous=r}return e},n.unstable_cancelCallback=function(e){var n=e.next;if(null!==n){if(n===e)t=null;else{e===t&&(t=n);var r=e.previous;r.next=n,n.previous=r}e.next=e.previous=null}},n.unstable_wrapCallback=function(e){var t=a;return function(){var r=a,l=o;a=t,o=n.unstable_now();try{return e.apply(this,arguments)}finally{a=r,o=l,f()}}},n.unstable_getCurrentPriorityLevel=function(){return a},n.unstable_shouldYield=function(){return!r&&(null!==t&&t.expirationTime<l||S())},n.unstable_continueExecution=function(){null!==t&&c()},n.unstable_pauseExecution=function(){},n.unstable_getFirstCallbackNode=function(){return t}}).call(this,t(7))},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(1),l=t.n(o),i=function(e,n,t,r){return new(t||(t=Promise))(function(a,o){function l(e){try{u(r.next(e))}catch(e){o(e)}}function i(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?a(e.value):new t(function(n){n(e.value)}).then(l,i)}u((r=r.apply(e,n||[])).next())})},u=function(e,n){var t,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=n.call(e,l)}catch(e){o=[6,e],r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},c=function(){function e(){}return e.search=function(e,n){return i(this,void 0,Promise,function(){return u(this,function(e){return[2,{totalcount:0,page:1,perpage:1,totalpage:1,data:[]}]})})},e.search2=function(e,n){return i(this,void 0,Promise,function(){return u(this,function(e){return console.log("request search!"),console.log(n),[2,{totalcount:10,page:1,perpage:4,totalpage:3,data:[{hoge:"aa",fuga:"AA"},{hoge:"bb",fuga:"BB"},{hoge:"cc",fuga:"CC"},{hoge:"dd",fuga:"DD"}]}]})})},e}(),s=function(){function e(){}return e.calcPagingNumber=function(e,n){var t={close:1,hasNext:!1,hasNextSibling:!(e===n),hasPrev:!1,hasPrevSibling:!(1===e),open:1,numberArray:[]},r=e%10;t.open=0===r?e-9:e-r+1,0===r?t.close=e:(t.close=e+(10-r),t.close>n&&(t.close=n)),t.open>=11&&(t.hasPrev=!0),0===t.close%10&&t.close+1<=n&&(t.hasNext=!0);for(var a=t.open;a<=t.close;a++)t.numberArray.push(a);return t},e.calcPrevNextPage=function(e,n,t){var r=1;return(r=e+t)<=0&&(r=1),r>n&&(r=n),r},e}(),f=function(e){var n=e.params,t=e.handleClickPage,a=function(e,r){e.preventDefault();var a=s.calcPrevNextPage(n.page,n.totalpage,r);t(e,a)},o=s.calcPagingNumber(n.page,n.totalpage),l={prev:o.hasPrev?"page-item":"page-item disabled",prevSibling:o.hasPrevSibling?"page-item":"page-item disabled",nextSibling:o.hasNextSibling?"page-item":"page-item disabled",next:o.hasNext?"page-item":"page-item disabled"};return r.createElement("div",{className:"d-flex justify-content-between"},r.createElement("div",null,r.createElement("ul",{className:"pagination"},r.createElement("li",{className:l.prev},r.createElement("a",{href:"#",className:"page-link",onClick:function(e){a(e,-10)}},"«")),r.createElement("li",{className:l.prevSibling},r.createElement("a",{href:"#",className:"page-link",onClick:function(e){a(e,-1)}},"<")),o.numberArray.map(function(e){return r.createElement("li",{key:e,className:n.page===e?"page-item active":"page-item"},r.createElement("a",{href:"#",className:"page-link isnum",onClick:function(n){!function(e,n){e.preventDefault(),t(e,n)}(n,e)}},e.toString()))}),r.createElement("li",{className:l.nextSibling},r.createElement("a",{href:"#",className:"page-link",onClick:function(e){a(e,1)}},">")),r.createElement("li",{className:l.next},r.createElement("a",{href:"#",className:"page-link",onClick:function(e){a(e,10)}},"»")))),r.createElement("div",null,"全 "+n.totalcount+" 件 ("+n.page+" / "+n.totalpage+" ページ) "+n.perpage+" 件ずつ表示"))},p=function(){function e(e,n){void 0===n&&(n=!0),this.ss=window.sessionStorage,this.key="",this.canUseSS=!1,this.key=e;try{this.ss=n?window.sessionStorage:window.localStorage;this.ss.length;this.canUseSS=!0}catch(e){}}return Object.defineProperty(e.prototype,"CanUseSS",{get:function(){return this.canUseSS},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this.canUseSS&&this.ss.removeItem(this.key)},e.prototype.save=function(e){if(this.canUseSS)try{this.ss.setItem(this.key,e)}catch(e){console.dir(e)}},e.prototype.restore=function(){if(this.canUseSS){var e=this.ss.getItem(this.key);return null===e?"":e}return""},e}(),h=function(){return(h=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},m=function(e,n,t,r){return new(t||(t=Promise))(function(a,o){function l(e){try{u(r.next(e))}catch(e){o(e)}}function i(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?a(e.value):new t(function(n){n(e.value)}).then(l,i)}u((r=r.apply(e,n||[])).next())})},d=function(e,n){var t,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=n.call(e,l)}catch(e){o=[6,e],r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},b=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&(t[r[a]]=e[r[a]])}return t},v={totalcount:0,page:1,perpage:10,totalpage:1};var y,g={cond1:"",cond2:"",forcheck:[]},w=function(e){var n=function(e,n,t){var a=this,o=new p(e),l=r.useState(JSON.parse(JSON.stringify(n))),i=l[0],u=l[1],c=r.useState(h({},v)),s=c[0],f=c[1],y=r.useState([]),g=y[0],w=y[1],k=function(e){return m(a,void 0,void 0,function(){var e,n,r,a;return d(this,function(l){switch(l.label){case 0:return o.CanUseSS&&(e=JSON.stringify(i),o.save(e)),[4,t(i,s.page)];case 1:return n=l.sent(),r=n.data,a=b(n,["data"]),w(r),f(a),[2]}})})};return r.useEffect(function(){if(o.CanUseSS){var e=o.restore();if(""!==e){var n=JSON.parse(e);u(h({},n))}}k()},[]),{handleChangeInput:function(e,n){void 0===n&&(n=!1);var t=e.target,r=t.name,a=t.value;if(r in i)if(n){var o=i[r];if(!Array.isArray(o))return;var l=o.indexOf(a);-1===l?o.push(a):o.splice(l,1),i[r]=o.slice(),u(h({},i))}else i[r]=a,u(h({},i))},handleSearch:k,handleReset:function(e){u(JSON.parse(JSON.stringify(n)))},handleClickPage:function(e,n){return m(a,void 0,void 0,function(){var e,r,a;return d(this,function(o){switch(o.label){case 0:return[4,t(i,n)];case 1:return e=o.sent(),r=e.data,a=b(e,["data"]),w(r),f(a),[2]}})})},condition:i,pageObj:s,records:g}}("searchwithhook",g,c.search2),t=n.handleChangeInput,a=n.handleSearch,o=n.handleReset,l=n.handleClickPage,i=n.condition,u=n.pageObj,s=n.records;return r.createElement("div",{className:"p-3"},r.createElement("div",null,r.createElement("div",null,"search"),r.createElement("div",null,"条件1 :"," ",r.createElement("input",{type:"text",name:"cond1",value:i.cond1,onChange:t,className:"form-control"})),r.createElement("div",null,"条件2 :"," ",r.createElement("input",{type:"text",name:"cond2",value:i.cond2,onChange:t,className:"form-control"})),r.createElement("div",null,"条件3 :"," ",r.createElement("input",{type:"checkbox",name:"forcheck",value:"abc",checked:i.forcheck.some(function(e){return"abc"===e}),onChange:function(e){t(e,!0)}}),"ABC",r.createElement("input",{type:"checkbox",name:"forcheck",value:"xyz",checked:i.forcheck.some(function(e){return"xyz"===e}),onChange:function(e){t(e,!0)}}),"XYZ"),r.createElement("div",null,r.createElement("button",{type:"button",className:"btn btn-secondary",onClick:a},"検索"),r.createElement("button",{type:"button",className:"btn btn-secondary",onClick:o},"リセット"))),r.createElement("div",null,r.createElement(f,{params:u,handleClickPage:l})),r.createElement("div",null,r.createElement("table",{className:"table table-striped table-bordered table-sm"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{style:{width:"8em"}},"column1"),r.createElement("th",null,"column2"))),r.createElement("tbody",null,s.map(function(e,n){return r.createElement("tr",{key:n},r.createElement("td",null,e.fuga),r.createElement("td",null,e.hoge))})))))},k=(y=function(e,n){return(y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}y(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),x=function(e){function n(n){return e.call(this,n)||this}return k(n,e),n.prototype.render=function(){return r.createElement(w,null)},n}(r.Component),E=new Intl.NumberFormat("ja-JP"),S=function(e){var n=e.price;return r.createElement("span",null,E.format(n))};document.addEventListener("DOMContentLoaded",function(){console.log("here");var e=document.getElementById("app");if(null===e)throw new Error("app not found");l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x,null)),e);var n=document.getElementById("priceapp");if(null===n)throw new Error("app not found");l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("hr",null),a.a.createElement("div",null,"数値にカンマを入れる。古めのデバイスはサポート外"),a.a.createElement("ul",null,[100,0,1200,52142255,-5e3].map(function(e,n){return a.a.createElement("li",{key:n},a.a.createElement(S,{price:e}))})))),n)},!1)}]);