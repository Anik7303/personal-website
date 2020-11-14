(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{228:function(e,t,n){},229:function(e,t,n){},230:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){},258:function(e,t,n){},259:function(e,t,n){"use strict";n.r(t);var c=n(1),a=(n(126),n(0)),r=n(54),s=n.n(r),o=n(31),i=n(117),u=n(30),l=(n(228),n(9)),j=(n(229),n(55)),p=(n(230),n(10)),d=n.n(p),b=n(21),h=n(22),m=n.n(h),f="FETCH_MENU_LIST",O="FETCH_PROJECT_LIST",_="FETCH_AUTH_STATE",x="LOGOUT",v=function(){return function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/auth/user/current");case 2:return n=e.sent,console.log(Object(j.a)({},n)),e.abrupt("return",t({type:_,payload:200===n.status}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=Object(u.b)((function(e){return{menuList:e.menuList,isAuth:e.isAuth}}),{fetchMenuList:function(){return function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/menu");case 2:return n=e.sent,e.abrupt("return",t({type:f,payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fetchAuthState:v})((function(e){var t=e.menuList,n=e.isAuth,r=e.fetchMenuList,s=e.fetchAuthState;console.log(Object(j.a)({},e)),Object(a.useEffect)((function(){r()}),[r]),Object(a.useEffect)((function(){s()}),[s]);return Object(c.jsx)("header",{className:"section-header",children:Object(c.jsx)("nav",{className:"nav",children:Object(c.jsxs)("ul",{className:"nav__list",children:[function(){return null===(e=t)||void 0===e||"string"===typeof e&&0===e.trim().length||"object"===typeof e&&0===Object.keys(e).length?null:t.map((function(e,t){return Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)(o.b,{exact:!0,to:e.link,className:"nav__link",children:e.name})},"nav-item-".concat(t))}));var e}(),n?[Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)(o.b,{exact:!0,to:"/dashboard",className:"nav__link",children:"Dashboard"})},"nav-auth-item-1"),Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)(o.b,{exact:!0,to:"/logout",className:"nav__link",children:"Logout"})},"nav-auth-item-2")]:[Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)(o.b,{exact:!0,to:"/login",className:"nav__link",children:"Login"})},"nav-auth-item-1"),Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)(o.b,{exact:!0,to:"/dashboard",className:"nav__link",children:"Dashboard"})},"nav-auth-item-2")]]})})})})),N=(n(251),function(e){return Object(c.jsxs)("footer",{className:"section-footer",children:[Object(c.jsx)("span",{className:"author",children:"Anik Mohammad"}),Object(c.jsx)("span",{children:"\xa9 2020"})]})}),k=n(11),w=(n(252),function(e){var t=e.icon,n=e.className;return Object(c.jsx)("div",{className:n,children:Object(c.jsx)(t,{})})}),y=(n(253),function(e){var t=e.project,n=t.name,a=t.keywords;return Object(c.jsxs)("div",{className:"project__head",children:[Object(c.jsx)("div",{className:"project__name",children:n}),Object(c.jsx)("ul",{className:"project__keywords",children:a.map((function(e,t){return Object(c.jsx)("li",{children:e},"keyword-".concat(t))}))})]})}),S=(n(254),function(e){var t=e.id,n=e.show,r=Object(a.useState)({}),s=Object(k.a)(r,2),o=s[0],i=s[1],u=Object(a.useState)("https"),l=Object(k.a)(u,2),j=l[0],p=l[1];return Object(a.useEffect)((function(){if(t&&n)try{Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/projects/".concat(t));case 2:n=e.sent,i(n.data);case 4:case"end":return e.stop()}}),e)})))()}catch(e){console.log({error:e})}}),[t,n]),Object(c.jsxs)("div",{className:n?"project__details active":"project__details",onClick:function(e){return e.stopPropagation()},children:[Object(c.jsxs)("div",{className:"project__repo",children:[Object(c.jsxs)("div",{className:"project__repo-names",children:[Object(c.jsx)("span",{onClick:function(){return p("https")},children:"https"}),Object(c.jsx)("span",{onClick:function(){return p("ssl")},children:"ssl"})]}),Object(c.jsx)("div",{className:"project__repo-link",children:o.githubRepo&&o.githubRepo[j]})]}),o.description&&Object(c.jsx)("div",{className:"project__description",children:o.description})]})}),C=n(272),E=Object(u.b)((function(e){return{projects:e.projects}}),{fetchProjectList:function(){return function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/projects");case 2:return n=e.sent,e.abrupt("return",t({type:O,payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.projects,n=e.fetchProjectList,r=Object(a.useState)(null),s=Object(k.a)(r,2),o=s[0],i=s[1];Object(a.useEffect)((function(){n()}),[n]);return Object(c.jsxs)("section",{className:"section-project",children:[Object(c.jsx)("h2",{className:"heading-2",children:"Projects"}),Object(c.jsx)("ul",{className:"project__list",children:t.length>0?t.map((function(e){var t=e._id,n=e.name,a=e.link;return Object(c.jsxs)("li",{className:"project__item",onClick:function(){return function(e){return i(e===o?null:e)}(t)},children:[Object(c.jsx)(w,{icon:C.a,className:o===t?"project__icon active":"project__icon"}),Object(c.jsx)(y,{project:e}),Object(c.jsx)("div",{className:"project__action",children:Object(c.jsx)("a",{href:a,title:n,className:"project__link",onClick:function(e){return e.stopPropagation()},target:"_blank",rel:"noreferrer noopener",children:"Go"})}),Object(c.jsx)(S,{id:t,show:o===t})]},t)})):null})]})})),A=(n(255),Object(u.b)(null,{fetchAuthState:v})((function(e){Object(l.g)();var t=Object(a.useState)(""),n=Object(k.a)(t,2),r=n[0],s=n[1],o=Object(a.useState)(""),i=Object(k.a)(o,2),u=i[0],j=i[1],p=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"email":s(c);break;case"password":j(c);break;default:throw new Error("wrong name used in input field")}},h=function(){var t=Object(b.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),m.a.post("/auth/login",{email:r,password:u}).then((function(t){console.log(t),e.fetchAuthState()})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsxs)("form",{className:"form",children:[Object(c.jsx)("div",{className:"form__group",children:Object(c.jsx)("input",{className:"form__input",type:"email",name:"email",placeholder:"Email address",value:r,onChange:p,required:!0})}),Object(c.jsx)("div",{className:"form__group",children:Object(c.jsx)("input",{className:"form__input",type:"password",name:"password",placeholder:"Password",value:u,onChange:p,required:!0})}),Object(c.jsx)("div",{className:"form__action",children:Object(c.jsx)("button",{className:"form__btn",onClick:h,children:"Submit"})})]})}))),L=(n(256),n(257),function(e){var t=Object(a.useState)(""),n=Object(k.a)(t,2),r=n[0],s=n[1],o=Object(a.useState)(""),i=Object(k.a)(o,2),u=i[0],l=i[1],j=Object(a.useState)(""),p=Object(k.a)(j,2),h=p[0],f=p[1],O=Object(a.useState)(""),_=Object(k.a)(O,2),x=_[0],v=_[1],g=Object(a.useState)(""),N=Object(k.a)(g,2),w=N[0],y=N[1],S=Object(a.useState)(""),C=Object(k.a)(S,2),E=C[0],A=C[1],L=Object(a.useState)(""),T=Object(k.a)(L,2),P=T[0],D=T[1],H=function(e){var t=e.target.value;switch(e.target.name){case"name":s(t);break;case"description":l(t);break;case"link":f(t);break;case"keywords":v(t);break;case"repoHttps":y(t);break;case"repoSsl":A(t);break;case"author":D(t);break;default:throw new Error("wrong name used in input field")}},R=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n={name:r,description:u,link:h,keywords:x,repoHttps:w,repoSsl:E,author:P},m.a.post("/api/projects",n).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"add-project",children:Object(c.jsxs)("form",{className:"form",autoComplete:"off",children:[Object(c.jsx)("h2",{className:"heading-3 form__heading",children:"Add Project"}),Object(c.jsx)("div",{className:"form__group",children:Object(c.jsx)("input",{className:"form__input",type:"text",name:"name",placeholder:"Name",value:r,onChange:H,required:!0})}),Object(c.jsx)("div",{className:"form__group",children:Object(c.jsx)("input",{className:"form__input",type:"text",name:"keywords",placeholder:"Keywords (comma separeted)",value:x,onChange:H})}),Object(c.jsx)("div",{className:"form__group",children:Object(c.jsx)("textarea",{className:"form__input form__textarea",name:"description",placeholder:"Description",value:u,onChange:H,rows:5})}),Object(c.jsx)("div",{className:"form__group",children:Object(c.jsx)("input",{className:"form__input",type:"text",name:"link",placeholder:"Link",value:h,onChange:H})}),Object(c.jsx)("div",{className:"form__group",children:Object(c.jsx)("input",{className:"form__input",type:"text",name:"repoHttps",placeholder:"Github Repository Link (https)",value:w,onChange:H})}),Object(c.jsx)("div",{className:"form__group",children:Object(c.jsx)("input",{className:"form__input",type:"text",name:"repoSsl",placeholder:"Github Repository Link (ssl)",value:E,onChange:H})}),Object(c.jsx)("div",{className:"form__group",children:Object(c.jsx)("input",{className:"form__input",type:"text",name:"author",placeholder:"Author Name",value:P,onChange:H})}),Object(c.jsx)("div",{className:"form__group",children:Object(c.jsx)("button",{className:"form__btn",onClick:R,children:"Submit"})})]})})}),T=(n(258),function(e){var t=Object(a.useState)(""),n=Object(k.a)(t,2),r=n[0],s=n[1],o=Object(a.useState)(""),i=Object(k.a)(o,2),u=i[0],l=i[1],j=function(e){var t=e.target.value;switch(e.target.name){case"name":s(t);break;case"link":l(t);break;default:throw new Error("wrong name used in input field")}},p=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n={name:r,link:u},m.a.post("/api/menu",n).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"add-menu",children:Object(c.jsxs)("form",{className:"form",autoComplete:"off",children:[Object(c.jsx)("h2",{className:"heading-3 form__heading",children:"Add Menu"}),Object(c.jsx)("div",{className:"form__group",children:Object(c.jsx)("input",{className:"form__input",type:"text",name:"name",placeholder:"Name (e.g. Projects)",value:r,onChange:j,required:!0})}),Object(c.jsx)("div",{className:"form__group",children:Object(c.jsx)("input",{className:"form__input",type:"text",name:"link",placeholder:"Route (e.g. /projects)",value:u,onChange:j})}),Object(c.jsx)("div",{className:"form__group",children:Object(c.jsx)("button",{className:"form__btn",onClick:p,children:"Submit"})})]})})}),P=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)(L,{}),Object(c.jsx)(T,{})]})},D=Object(u.b)((function(e){return{isAuth:e.isAuth}}),{logOutUser:function(){return function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("logout called"),e.next=3,m.a.get("/auth/user/logout");case 3:return n=e.sent,console.log({response:n}),e.abrupt("return",t({type:x,payload:200===n.status}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,n=Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{exact:!0,path:"/",component:E}),Object(c.jsx)(l.b,{exact:!0,path:"/login",component:A}),Object(c.jsx)(l.b,{exact:!0,path:"/dashboard",component:P}),Object(c.jsx)(l.a,{to:"/"})]}),a=Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{exact:!0,path:"/",component:E}),Object(c.jsx)(l.b,{exact:!0,path:"/dashboard",component:P}),Object(c.jsx)(l.b,{exact:!0,path:"/logout",render:function(){return r()}}),Object(c.jsx)(l.a,{to:"/"})]}),r=function(){console.log("logout called"),e.logOutUser()};return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(g,{}),Object(c.jsx)("main",{className:"section-main",children:t?a:n}),Object(c.jsx)(N,{})]})})),H=n(36),R=n(122),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return t.payload;default:return e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.payload;default:return e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:case x:return t.payload;default:return e}},G=Object(H.c)({projects:M,menuList:U,isAuth:q}),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.d,F=Object(H.e)(G,I(Object(H.a)(R.a))),J=Object(c.jsx)(u.a,{store:F,children:Object(c.jsx)(o.a,{children:Object(c.jsx)(i.a,{children:Object(c.jsx)(D,{})})})});s.a.render(J,document.getElementById("root"))}},[[259,1,2]]]);
//# sourceMappingURL=main.f0a265ac.chunk.js.map