(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"04ff":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t("cd8e"),o=function(){Promise.all([t.e("common/vendor"),t.e("components/Tabba/ctTabbar")]).then(function(){return resolve(t("2651"))}.bind(null,t)).catch(t.oe)},u={components:{ctTabbar:o},data:function(){return{pic:"",nickname:"",vid:"false",textdata:"数据分析"}},onLoad:function(){this.Falseinfo()},onShow:function(){this.sahjhda()},methods:{sahjhda:function(){var n=this;wx.login({success:function(e){(0,a.getOpenId)(e.code).then((function(e){if(e[1].data.code=200){var t=e[1].data.data.match(/"openid":"(\S*)"}/)[1];(0,a.getOpenIdDetail)(t).then((function(e){n.nickname=e[1].data.data.nickname,n.pic=e[1].data.data.image}))}}))}})},toModify:function(){n.navigateTo({url:"/pages/my/modify/modify"})},toGas:function(){n.switchTab({url:"/pages/Gas/Gas"})},toManagement:function(){n.navigateTo({url:"/pages/management/management"})},toEnvironment:function(){n.navigateTo({url:"/pages/environment/environment"})},toVideo:function(){n.navigateTo({url:"/pages/video/video"})},Falseinfo:function(){var n=this;(0,a.getIsFalse)().then((function(e){n.vid=e[1].data.data,n.vid&&(n.textdata="视频监控")}))}}};e.default=u}).call(this,t("543d")["default"])},"0dc0":function(n,e,t){"use strict";(function(n){t("8448");a(t("66fd"));var e=a(t("6634"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"0f13":function(n,e,t){},"2c6d":function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return a}));var a={uNavbar:function(){return t.e("node-modules/uview-ui/components/u-navbar/u-navbar").then(t.bind(null,"3b4d"))},uAvatar:function(){return t.e("node-modules/uview-ui/components/u-avatar/u-avatar").then(t.bind(null,"a964"))},uIcon:function(){return t.e("node-modules/uview-ui/components/u-icon/u-icon").then(t.bind(null,"34ff"))},uCellGroup:function(){return t.e("node-modules/uview-ui/components/u-cell-group/u-cell-group").then(t.bind(null,"5611"))},uCellItem:function(){return t.e("node-modules/uview-ui/components/u-cell-item/u-cell-item").then(t.bind(null,"1de1"))}},o=function(){var n=this,e=n.$createElement;n._self._c},u=[]},6634:function(n,e,t){"use strict";t.r(e);var a=t("2c6d"),o=t("bbed");for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);t("7cd0");var i,c=t("f0c5"),d=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"0c623c26",null,!1,a["a"],i);e["default"]=d.exports},"7cd0":function(n,e,t){"use strict";var a=t("0f13"),o=t.n(a);o.a},bbed:function(n,e,t){"use strict";t.r(e);var a=t("04ff"),o=t.n(a);for(var u in a)"default"!==u&&function(n){t.d(e,n,(function(){return a[n]}))}(u);e["default"]=o.a}},[["0dc0","common/runtime","common/vendor"]]]);