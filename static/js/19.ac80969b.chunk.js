(this.webpackJsonpkeShiHua=this.webpackJsonpkeShiHua||[]).push([[19],{396:function(e,t,c){},444:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(3),i=c(0),r=c(397),s=c(398),u=c(434),j=c.p+"static/media/frezzing.4dfff90e.png",g=(c(396),c(17)),o=c(10),p=Array.from(Array(30),(function(e,t){return{id:t,src:j}}));t.default=function(){Object(g.h)();var e=Object(i.useState)([]),t=Object(n.a)(e,2),c=t[0],j=t[1],O=Object(i.useState)({current:1,pageSize:10,total:""}),b=Object(n.a)(O,2),f=b[0],l=b[1];return Object(i.useEffect)((function(){l(Object(a.a)(Object(a.a)({},f),{},{total:p.length}))}),[]),Object(i.useEffect)((function(){var e=JSON.parse(JSON.stringify(p));"1"===f.current?j(e.slice(0,f.pageSize)):j(e.slice((f.current-1)*f.pageSize,f.current*f.pageSize))}),[f]),Object(o.jsxs)("div",{className:"pageing--img-container",children:[Object(o.jsx)("main",{children:Object(o.jsx)(r.a,{gutter:[16,16],children:c.map((function(e){return Object(o.jsx)(s.a,{span:6,children:Object(o.jsx)("img",{src:e.src,alt:"",className:"pageing-img"})},e.id)}))})}),Object(o.jsx)("footer",{children:Object(o.jsx)(u.a,{showSizeChanger:!0,pageSizeOptions:[10,20,50,100],pageSize:f.pageSize,current:f.current,total:f.total,onChange:function(e,t){l(Object(a.a)(Object(a.a)({},f),{},{pageSize:t,current:e}))}})})]})}}}]);
//# sourceMappingURL=19.ac80969b.chunk.js.map