(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basiclnfo/basiclnfo"],{"2e13":function(t,n,e){"use strict";var o=e("63cf"),a=e.n(o);a.a},"2fe1":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o}));var o={tTable:function(){return e.e("components/t-table/t-table").then(e.bind(null,"9f1d"))}},a=function(){var t=this,n=t.$createElement;t._self._c},c=[]},"33a4":function(t,n,e){"use strict";e.r(n);var o=e("2fe1"),a=e("7692");for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);e("2e13");var u,r=e("f0c5"),f=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"c178614c",null,!1,o["a"],u);n["default"]=f.exports},"63cf":function(t,n,e){},7692:function(t,n,e){"use strict";e.r(n);var o=e("efa0"),a=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=a.a},b75f:function(t,n,e){"use strict";(function(t){e("ae08");o(e("66fd"));var n=o(e("33a4"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},efa0:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("7d57"),a=function(){Promise.all([e.e("common/vendor"),e.e("components/Tabba/ctTabbar")]).then(function(){return resolve(e("bbf3"))}.bind(null,e)).catch(e.oe)},c=function(){e.e("components/t-table/t-table").then(function(){return resolve(e("9f1d"))}.bind(null,e)).catch(e.oe)},u=function(){e.e("components/t-table/t-th").then(function(){return resolve(e("81f2"))}.bind(null,e)).catch(e.oe)},r=function(){e.e("components/t-table/t-tr").then(function(){return resolve(e("ea53"))}.bind(null,e)).catch(e.oe)},f=function(){e.e("components/t-table/t-td").then(function(){return resolve(e("c8b0"))}.bind(null,e)).catch(e.oe)},i={components:{ctTabbar:a,tTable:c,tTh:u,tTr:r,tTd:f},data:function(){return{data:[]}},onLoad:function(){this.getInfo()},methods:{getInfo:function(){var t=this;(0,o.getBasiclnfo)().then((function(n){t.data=n[1].data.data,console.log(n[1].data.data)}))}}};n.default=i}},[["b75f","common/runtime","common/vendor"]]]);