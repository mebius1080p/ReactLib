!function(e){function t(t){for(var r,l,i=t[0],u=t[1],c=t[2],f=0,p=[];f<i.length;f++)l=i[f],a[l]&&p.push(a[l][0]),a[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={1:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=u;o.push([8,0]),n()}([,,function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in n=Object(arguments[u]))a.call(n,c)&&(i[c]=n[c]);if(r){l=r(n);for(var s=0;s<l.length;s++)o.call(n,l[s])&&(i[l[s]]=n[l[s]])}}return i}},,,function(e,t,n){"use strict";e.exports=n(6)},function(e,t,n){"use strict";(function(e){
/** @license React v0.13.3
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(t,"__esModule",{value:!0});var n=null,r=!1,a=3,o=-1,l=-1,i=!1,u=!1;function c(){if(!i){var e=n.expirationTime;u?k():u=!0,x(p,e)}}function s(){var e=n,t=n.next;if(n===t)n=null;else{var r=n.previous;n=r.next=t,t.previous=r}e.next=e.previous=null,r=e.callback,t=e.expirationTime,e=e.priorityLevel;var o=a,i=l;a=e,l=t;try{var u=r()}finally{a=o,l=i}if("function"==typeof u)if(u={callback:u,priorityLevel:e,expirationTime:t,next:null,previous:null},null===n)n=u.next=u.previous=u;else{r=null,e=n;do{if(e.expirationTime>=t){r=e;break}e=e.next}while(e!==n);null===r?r=n:r===n&&(n=u,c()),(t=r.previous).next=r.previous=u,u.next=r,u.previous=t}}function f(){if(-1===o&&null!==n&&1===n.priorityLevel){i=!0;try{do{s()}while(null!==n&&1===n.priorityLevel)}finally{i=!1,null!==n?c():u=!1}}}function p(e){i=!0;var a=r;r=e;try{if(e)for(;null!==n;){var o=t.unstable_now();if(!(n.expirationTime<=o))break;do{s()}while(null!==n&&n.expirationTime<=o)}else if(null!==n)do{s()}while(null!==n&&!S())}finally{i=!1,r=a,null!==n?c():u=!1,f()}}var m,d,h=Date,b="function"==typeof setTimeout?setTimeout:void 0,v="function"==typeof clearTimeout?clearTimeout:void 0,y="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,g="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function w(e){m=y(function(t){v(d),e(t)}),d=b(function(){g(m),e(t.unstable_now())},100)}if("object"==typeof performance&&"function"==typeof performance.now){var E=performance;t.unstable_now=function(){return E.now()}}else t.unstable_now=function(){return h.now()};var x,k,S,O=null;if("undefined"!=typeof window?O=window:void 0!==e&&(O=e),O&&O._schedMock){var _=O._schedMock;x=_[0],k=_[1],S=_[2],t.unstable_now=_[3]}else if("undefined"==typeof window||"function"!=typeof MessageChannel){var P=null,j=function(e){if(null!==P)try{P(e)}finally{P=null}};x=function(e){null!==P?setTimeout(x,0,e):(P=e,setTimeout(j,0,!1))},k=function(){P=null},S=function(){return!1}}else{"undefined"!=typeof console&&("function"!=typeof y&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof g&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var N=null,C=!1,T=-1,M=!1,A=!1,F=0,I=33,U=33;S=function(){return F<=t.unstable_now()};var J=new MessageChannel,L=J.port2;J.port1.onmessage=function(){C=!1;var e=N,n=T;N=null,T=-1;var r=t.unstable_now(),a=!1;if(0>=F-r){if(!(-1!==n&&n<=r))return M||(M=!0,w(B)),N=e,void(T=n);a=!0}if(null!==e){A=!0;try{e(a)}finally{A=!1}}};var B=function(e){if(null!==N){w(B);var t=e-F+U;t<U&&I<U?(8>t&&(t=8),U=t<I?I:t):I=t,F=e+U,C||(C=!0,L.postMessage(void 0))}else M=!1};x=function(e,t){N=e,T=t,A||0>t?L.postMessage(void 0):M||(M=!0,w(B))},k=function(){N=null,C=!1,T=-1}}t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=a,l=o;a=e,o=t.unstable_now();try{return n()}finally{a=r,o=l,f()}},t.unstable_next=function(e){switch(a){case 1:case 2:case 3:var n=3;break;default:n=a}var r=a,l=o;a=n,o=t.unstable_now();try{return e()}finally{a=r,o=l,f()}},t.unstable_scheduleCallback=function(e,r){var l=-1!==o?o:t.unstable_now();if("object"==typeof r&&null!==r&&"number"==typeof r.timeout)r=l+r.timeout;else switch(a){case 1:r=l+-1;break;case 2:r=l+250;break;case 5:r=l+1073741823;break;case 4:r=l+1e4;break;default:r=l+5e3}if(e={callback:e,priorityLevel:a,expirationTime:r,next:null,previous:null},null===n)n=e.next=e.previous=e,c();else{l=null;var i=n;do{if(i.expirationTime>r){l=i;break}i=i.next}while(i!==n);null===l?l=n:l===n&&(n=e,c()),(r=l.previous).next=l.previous=e,e.next=l,e.previous=r}return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(t===e)n=null;else{e===n&&(n=t);var r=e.previous;r.next=t,t.previous=r}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var n=a;return function(){var r=a,l=o;a=n,o=t.unstable_now();try{return e.apply(this,arguments)}finally{a=r,o=l,f()}}},t.unstable_getCurrentPriorityLevel=function(){return a},t.unstable_shouldYield=function(){return!r&&(null!==n&&n.expirationTime<l||S())},t.unstable_continueExecution=function(){null!==n&&c()},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return n}}).call(this,n(7))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),l=n(1),i=n.n(l),u=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function l(e){try{u(r.next(e))}catch(e){o(e)}}function i(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(l,i)}u((r=r.apply(e,t||[])).next())})},c=function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},s=function(){function e(){}return e.search=function(e,t){return u(this,void 0,Promise,function(){return c(this,function(e){return[2,{totalcount:0,page:1,perpage:1,totalpage:1,data:[]}]})})},e.search2=function(e,t){return u(this,void 0,Promise,function(){return c(this,function(e){return console.log("request search!"),console.log(t),[2,{totalcount:10,page:1,perpage:4,totalpage:3,data:[{hoge:"aa",fuga:"AA"},{hoge:"bb",fuga:"BB"},{hoge:"cc",fuga:"CC"},{hoge:"dd",fuga:"DD"}]}]})})},e}(),f=function(){function e(){}return e.calcPagingNumber=function(e,t){var n={close:1,hasNext:!1,hasNextSibling:!(e===t),hasPrev:!1,hasPrevSibling:!(1===e),open:1,numberArray:[]},r=e%10;n.open=0===r?e-9:e-r+1,0===r?n.close=e:(n.close=e+(10-r),n.close>t&&(n.close=t)),n.open>=11&&(n.hasPrev=!0),0===n.close%10&&n.close+1<=t&&(n.hasNext=!0);for(var a=n.open;a<=n.close;a++)n.numberArray.push(a);return n},e.calcPrevNextPage=function(e,t,n){var r=1;return(r=e+n)<=0&&(r=1),r>t&&(r=t),r},e}(),p=function(e){var t=e.params,n=e.handleClickPage,r=function(e,r){e.preventDefault();var a=f.calcPrevNextPage(t.page,t.totalpage,r);n(e,a)},o=f.calcPagingNumber(t.page,t.totalpage),l={prev:o.hasPrev?"page-item":"page-item disabled",prevSibling:o.hasPrevSibling?"page-item":"page-item disabled",nextSibling:o.hasNextSibling?"page-item":"page-item disabled",next:o.hasNext?"page-item":"page-item disabled"};return a.createElement("div",{className:"d-flex justify-content-between"},a.createElement("div",null,a.createElement("ul",{className:"pagination"},a.createElement("li",{className:l.prev},a.createElement("a",{href:"#",className:"page-link",onClick:function(e){r(e,-10)}},"«")),a.createElement("li",{className:l.prevSibling},a.createElement("a",{href:"#",className:"page-link",onClick:function(e){r(e,-1)}},"<")),o.numberArray.map(function(e){return a.createElement("li",{key:e,className:t.page===e?"page-item active":"page-item"},a.createElement("a",{href:"#",className:"page-link isnum",onClick:function(t){!function(e,t){e.preventDefault(),n(e,t)}(t,e)}},e.toString()))}),a.createElement("li",{className:l.nextSibling},a.createElement("a",{href:"#",className:"page-link",onClick:function(e){r(e,1)}},">")),a.createElement("li",{className:l.next},a.createElement("a",{href:"#",className:"page-link",onClick:function(e){r(e,10)}},"»")))),a.createElement("div",null,"全 "+t.totalcount+" 件 ("+t.page+" / "+t.totalpage+" ページ) "+t.perpage+" 件ずつ表示"))},m=function(){function e(e,t){void 0===t&&(t=!0),this.ss=window.sessionStorage,this.key="",this.canUseSS=!1,this.key=e;try{this.ss=t?window.sessionStorage:window.localStorage;this.ss.length;this.canUseSS=!0}catch(e){}}return Object.defineProperty(e.prototype,"CanUseSS",{get:function(){return this.canUseSS},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this.canUseSS&&this.ss.removeItem(this.key)},e.prototype.save=function(e){if(this.canUseSS)try{this.ss.setItem(this.key,e)}catch(e){console.dir(e)}},e.prototype.restore=function(){if(this.canUseSS){var e=this.ss.getItem(this.key);return null===e?"":e}return""},e}(),d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},h=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function l(e){try{u(r.next(e))}catch(e){o(e)}}function i(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(l,i)}u((r=r.apply(e,t||[])).next())})},b=function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},y={cond1:"",cond2:"",forcheck:[]},g={totalcount:0,page:1,perpage:10,totalpage:1},w=new m("searchwithhook"),E=function(e){var t=a.useState(JSON.parse(JSON.stringify(y))),n=t[0],r=t[1],o=function(e,t){void 0===t&&(t=!1);var a=e.target,o=a.name,l=a.value;if(o in n)if(t){var i=n[o];if(!Array.isArray(i))return;var u=i.indexOf(l);if(-1===u)i.push(l);else i.splice(u,1);n[o]=i.slice(),r(d({},n))}else n[o]=l,r(d({},n))},l=a.useState(g),i=l[0],u=l[1],c=a.useState([]),f=c[0],m=c[1],E=function(e){return h(void 0,void 0,void 0,function(){var e,t,r,a;return b(this,function(o){switch(o.label){case 0:return console.log("search"),w.CanUseSS&&(e=JSON.stringify(n),w.save(e)),[4,s.search2(n,i.page)];case 1:return t=o.sent(),r=t.data,a=v(t,["data"]),m(r),u(a),[2]}})})};return a.useEffect(function(){if(console.log("auto search once"),w.CanUseSS){console.log("restore condition from ss");var e=w.restore();if(""!==e){var t=JSON.parse(e);r(d({},t))}}E()},[]),a.createElement("div",{className:"p-3"},a.createElement("div",null,a.createElement("div",null,"search"),a.createElement("div",null,"条件1 :"," ",a.createElement("input",{type:"text",name:"cond1",value:n.cond1,onChange:o,className:"form-control"})),a.createElement("div",null,"条件2 :"," ",a.createElement("input",{type:"text",name:"cond2",value:n.cond2,onChange:o,className:"form-control"})),a.createElement("div",null,"条件3 :"," ",a.createElement("input",{type:"checkbox",name:"forcheck",value:"abc",checked:n.forcheck.some(function(e){return"abc"===e}),onChange:function(e){o(e,!0)}}),"ABC",a.createElement("input",{type:"checkbox",name:"forcheck",value:"xyz",checked:n.forcheck.some(function(e){return"xyz"===e}),onChange:function(e){o(e,!0)}}),"XYZ"),a.createElement("div",null,a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:E},"検索"),a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(e){r(JSON.parse(JSON.stringify(y)))}},"リセット"))),a.createElement("div",null,a.createElement(p,{params:i,handleClickPage:function(e,t){return h(void 0,void 0,void 0,function(){var e,r,a;return b(this,function(o){switch(o.label){case 0:return[4,s.search2(n,t)];case 1:return e=o.sent(),r=e.data,a=v(e,["data"]),m(r),u(a),[2]}})})}})),a.createElement("div",null,a.createElement("table",{className:"table table-striped table-bordered table-sm"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{style:{width:"8em"}},"column1"),a.createElement("th",null,"column2"))),a.createElement("tbody",null,f.map(function(e,t){return a.createElement("tr",{key:t},a.createElement("td",null,e.fuga),a.createElement("td",null,e.hoge))})))))},x=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),k=function(e){function t(t){return e.call(this,t)||this}return x(t,e),t.prototype.render=function(){return a.createElement(E,null)},t}(a.Component),S=function(e){var t=new RegExp("\n"),n=e.str;return a.createElement(a.Fragment,null,n.split(t).map(function(e,t){return a.createElement(a.Fragment,{key:t},e.trim(),a.createElement("br",null))}))},O=new Intl.NumberFormat("ja-JP"),_=function(e){var t=e.price;return a.createElement("span",null,O.format(t))};document.addEventListener("DOMContentLoaded",function(){console.log("here");var e=document.getElementById("app");if(null===e)throw new Error("app not found");i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),e);var t=document.getElementById("nl2brapp");if(null===t)throw new Error("app not found");i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement("div",null,o.a.createElement("hr",null),o.a.createElement(S,{str:"改行付き\n\t\tサンプル\n\t\t文章"}))),t);var n=document.getElementById("priceapp");if(null===n)throw new Error("app not found");i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(o.a.Fragment,null,o.a.createElement("hr",null),o.a.createElement("div",null,"数値にカンマを入れる。古めのデバイスはサポート外"),o.a.createElement("ul",null,[100,0,1200,52142255,-5e3].map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(_,{price:e}))})))),n)},!1)}]);