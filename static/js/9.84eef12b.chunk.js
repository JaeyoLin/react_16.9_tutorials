(window["webpackJsonpreact_16.9_tutorials"]=window["webpackJsonpreact_16.9_tutorials"]||[]).push([[9],{29:function(t,n,e){"use strict";function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,a=!1,u=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(i){a=!0,u=i}finally{try{r||null==c.return||c.return()}finally{if(a)throw u}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.d(n,"a",function(){return r})},35:function(t,n,e){"use strict";e.r(n);var r=e(29),a=e(0),u=e.n(a);n.default=function(){var t=Object(a.useState)(0),n=Object(r.a)(t,2),e=n[0],o=n[1],c=Object(a.useState)(!1),i=Object(r.a)(c,2),l=i[0],f=i[1];return Object(a.useLayoutEffect)(function(){if(l){var t=Date.now()-e,n=setInterval(function(){o(Date.now()-t)},2);return console.log(n),function(){return clearInterval(n)}}},[l]),u.a.createElement("div",null,u.a.createElement("label",null,e,"ms"),u.a.createElement("button",{onClick:function(){f(function(t){return!t})}},l?"End":"Start"),u.a.createElement("button",{onClick:function(){f(!1),o(0)}},"Stop and clean"))}}}]);
//# sourceMappingURL=9.84eef12b.chunk.js.map