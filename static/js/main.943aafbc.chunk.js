(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(4),l=c(1);c(10);function r(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var s=c(3),o=c.n(s),d=c(0),j=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,i=r(1,Math.ceil(a/c));return Object(d.jsxs)("ul",{className:"pagination",children:[Object(d.jsx)("li",{className:o()("page-item",{disabled:0===i.indexOf(t)}),children:Object(d.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":0===i.indexOf(t),onClick:function(){0!==i.indexOf(t)&&n(t-1)},children:"\xab"})}),i.map((function(e){return Object(d.jsx)("li",{className:"page-item ".concat(t===e&&"active"),children:Object(d.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(d.jsx)("li",{className:o()("page-item",{disabled:i.indexOf(t)===i.length-1}),children:Object(d.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":i.indexOf(t)===i.length-1,onClick:function(){i.indexOf(t)!==i.length-1&&n(t+1)},children:"\xbb"})})]})},h=r(1,42).map((function(e){return"Item ".concat(e)})),u=function(){var e=Object(l.useState)(5),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(l.useState)(1),r=Object(i.a)(n,2),s=r[0],o=r[1],u=c*s-c+1,b=c*s<=h.length?c*s:h.length;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Items with Pagination"}),Object(d.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(u," - ").concat(b," of ").concat(h.length,")")}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(d.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:function(e){t(Number(e.target.value)),o(1)},children:[Object(d.jsx)("option",{value:"3",children:"3"}),Object(d.jsx)("option",{value:"5",children:"5"}),Object(d.jsx)("option",{value:"10",children:"10"}),Object(d.jsx)("option",{value:"20",children:"20"})]})}),Object(d.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(d.jsx)(j,{total:h.length,perPage:c,currentPage:s,onPageChange:o}),Object(d.jsx)("ul",{children:h.slice(u-1,b).map((function(e){return Object(d.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(d.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.943aafbc.chunk.js.map