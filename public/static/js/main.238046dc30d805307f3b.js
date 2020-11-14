(()=>{"use strict";var e={16644:(e,t,n)=>{n(76961);var r=n(67294),o=n(73935),a=n(73727),l=n(70405),c=n(18048),u=n(5977);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=n(9669),m=n.n(s),f="FETCH_MENU_LIST",p="FETCH_PROJECT_LIST";function d(e,t,n,r,o,a,l){try{var c=e[a](l),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}const h=(0,c.$j)((function(e){return{menuList:e.menuList}}),{fetchMenuList:function(){return function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m().get("/api/menu");case 2:return n=e.sent,e.abrupt("return",t({type:f,payload:n.data}));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function l(e){d(a,r,o,l,c,"next",e)}function c(e){d(a,r,o,l,c,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}()}})((function(e){var t,n=e.menuList,o=e.fetchMenuList;return(0,r.useEffect)((function(){o()}),[]),r.createElement("header",{className:"section-header"},r.createElement("nav",{className:"nav"},r.createElement("ul",{className:"nav__list"},null===(t=n)||"undefined"===t||"string"==typeof t&&0===t.trim().length||"array"==typeof t&&0===t.length||"object"===i(t)&&0===Object.keys(t).length?null:n.map((function(e,t){return r.createElement("li",{className:"nav__item",key:"nav-item-".concat(t)},r.createElement(a.OL,{exact:!0,to:e.link,className:"nav__link"},e.name))})))))})),v=function(e){return r.createElement("footer",{className:"section-footer"},r.createElement("span",{className:"author"},"Anik Mohammad"),r.createElement("span",null,"© 2020"))},y=function(e){return r.createElement("div",null,r.createElement("h1",null,"Projects"))},E=function(e){return r.createElement("div",null,r.createElement("h1",null,"About"))},b=function(e){return r.createElement("div",{className:"container"},r.createElement(h,null),r.createElement("main",{className:"section-main"},r.createElement(u.rs,null,r.createElement(u.AW,{exact:!0,path:"/",component:y}),r.createElement(u.AW,{exact:!0,path:"/about",component:E}))),r.createElement(v,null))};var g=n(14890),x=n(53894);const _=(0,g.UY)({projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.payload;default:return e}},menuList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.payload;default:return e}}});var w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.qC;const S=(0,g.MT)(_,w((0,g.md)(x.Z)));var O=r.createElement(c.zt,{store:S},r.createElement(a.VK,null,r.createElement(l.B,null,r.createElement(b,null))));o.render(O,document.getElementById("root"))}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0},t=[[26981,843],[16644,843]],r=()=>{};function o(){for(var r,o=0;o<t.length;o++){for(var a=t[o],l=!0,c=1;c<a.length;c++){var u=a[c];0!==e[u]&&(l=!1)}l&&(t.splice(o--,1),r=n(n.s=a[0]))}return 0===t.length&&(n.x(),n.x=()=>{}),r}n.x=()=>{n.x=()=>{},l=l.slice();for(var e=0;e<l.length;e++)a(l[e]);return(r=o)()};var a=o=>{for(var a,l,[u,i,s,m]=o,f=0,p=[];f<u.length;f++)l=u[f],n.o(e,l)&&e[l]&&p.push(e[l][0]),e[l]=0;for(a in i)n.o(i,a)&&(n.m[a]=i[a]);for(s&&s(n),c(o);p.length;)p.shift()();return m&&t.push.apply(t,m),r()},l=self.webpackChunkclient=self.webpackChunkclient||[],c=l.push.bind(l);l.push=a})(),n.x()})();
//# sourceMappingURL=static\js\main.238046dc30d805307f3b.js.map