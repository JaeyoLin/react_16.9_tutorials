(window.webpackJsonpreact_hook=window.webpackJsonpreact_hook||[]).push([[10],{29:function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,u=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(l){a=!0,u=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw u}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",function(){return r})},37:function(t,e,n){"use strict";n.r(e);var r=n(29),a=n(0),u=n.n(a);e.default=function(){var t=Object(a.useState)(0),e=Object(r.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(""),l=Object(r.a)(c,2),i=l[0],f=l[1],s=Object(a.useMemo)(function(){return console.log("compute"),n*n},[n]);return u.a.createElement("div",null,u.a.createElement("p",null,"Count: ".concat(n)),u.a.createElement("p",null,"Count Square: ".concat(s)),u.a.createElement("button",{onClick:function(){o(n+1)}},"+"),u.a.createElement("p",null,"Text: ".concat(i)),u.a.createElement("input",{value:i,onChange:function(t){return f(t.target.value)}}))}}}]);
//# sourceMappingURL=10.d3d22380.chunk.js.map