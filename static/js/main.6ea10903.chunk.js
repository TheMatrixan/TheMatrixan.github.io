(this["webpackJsonpthematrixan.github.io"]=this["webpackJsonpthematrixan.github.io"]||[]).push([[0],{2:function(e,a,t){e.exports={input:"ThemeSwitcher_input__2IN-N",toggle:"ThemeSwitcher_toggle__vr-9W",toggle__handler:"ThemeSwitcher_toggle__handler__2wNt4",crater:"ThemeSwitcher_crater__373xQ","crater--1":"ThemeSwitcher_crater--1__39lXH","crater--2":"ThemeSwitcher_crater--2__k7Nv0","crater--3":"ThemeSwitcher_crater--3__3VE4U",star:"ThemeSwitcher_star__29m02","star--1":"ThemeSwitcher_star--1__1Uhy9","star--2":"ThemeSwitcher_star--2__1xmlQ","star--3":"ThemeSwitcher_star--3__3ZVn4","star--4":"ThemeSwitcher_star--4__1dRE5","star--5":"ThemeSwitcher_star--5__1MPJr","star--6":"ThemeSwitcher_star--6__3uA34"}},28:function(e,a,t){e.exports={switchers:"LanguageSwitcher_switchers__DyTZV","btn-lang":"LanguageSwitcher_btn-lang__1F2dH",active:"LanguageSwitcher_active__2J1bQ"}},36:function(e,a,t){e.exports={temp:"Homepage_temp__3Wno9"}},37:function(e,a,t){e.exports=t.p+"static/media/logo.7132eef3.svg"},39:function(e,a,t){e.exports=t.p+"static/media/adobe-xd.c8b85581.svg"},40:function(e,a,t){e.exports=t.p+"static/media/react.e9f3d01c.svg"},41:function(e,a,t){e.exports=t.p+"static/media/typescript.02867dbe.svg"},42:function(e,a,t){e.exports=t.p+"static/media/github-star.85d514ef.svg"},43:function(e,a,t){e.exports=t.p+"static/media/github-fork.09265842.svg"},44:function(e,a,t){e.exports=t(55)},5:function(e,a,t){e.exports={footer:"Footer_footer__1HR1K",row:"Footer_row__2TteR",info:"Footer_info__NyAsP",link:"Footer_link__MZZ6E","icon-num":"Footer_icon-num__QSC0l",icon:"Footer_icon__1gvGJ"}},54:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n,r,c=t(0),o=t.n(c),i=t(34),l=t.n(i),s=t(12),m=t(57),u=t(10),h={"lang.pl":"Polski","lang.en":"Angielski","theme.change":"Zmie\u0144 motyw","navigation.aboutMe":"O mnie","navigation.portfolio":"Portfolio","navigation.contact":"Kontakt","navigation.resume":"Zobacz CV","header.logo":"Logo strony Mateusz Lesiak","footer.viewRepository":"Przejd\u017a do repozytorium","footer.designedIn":"Zaprojektowane w","footer.createdWith":"Stworzone w","icon.githubStar":"Ikona gwiazdy dla repozytorium z GitHub","icon.githubFork":"Ikona rozga\u0142\u0119zienia dla repozytorium z GitHub","icon.adobeXd":"Adobe XD","icon.reactJs":"React.Js","icon.typeScript":"TypeScript"},g={"navigation.aboutMe":"About me","navigation.portfolio":"Portfolio","navigation.contact":"Contact","navigation.resume":"See CV","header.logo":"Mateusz Lesiak logo","footer.viewRepository":"Go to the repository","footer.designedIn":"Designed in","footer.createdWith":"Built by","icon.githubStar":"Star icon for the GitHub repository","icon.githubFork":"Fork icon for the GitHub repository","icon.adobeXd":"Adobe XD","icon.reactJs":"React.Js","icon.typeScript":"TypeScript"};!function(e){e.English="en",e.Polish="pl"}(r||(r={}));var p,d=Object.keys(r).map((function(e){return r[e]})),_=(n={},Object(u.a)(n,r.Polish,h),Object(u.a)(n,r.English,g),n),f=r.Polish,b=t(35);!function(e){e.CHANGE_LANGUAGE="CHANGE_LANGUAGE"}(p||(p={}));var E,v={language:function(){var e=window.navigator.language.split(/[-_]/)[0];return d.includes(e)?e:f}()},N=function(e,a){switch(a.type){case p.CHANGE_LANGUAGE:return Object(b.a)({},e,{language:a.payload.language});default:return e}},w=Object(c.createContext)({}),k=function(e){var a=e.children,t=Object(c.useReducer)(N,v),n=Object(s.a)(t,2),r=n[0].language,i=n[1];return Object(c.useEffect)((function(){document.documentElement.lang=r}),[r]),o.a.createElement(w.Provider,{value:{state:{language:r},dispatch:i}},o.a.createElement(m.a,{locale:r,messages:_[r],defaultLocale:f},a))},S=t(20),y=t(11),x=t(56),T=t(58),j=t(4),O=t.n(j),H=t(28),G=t.n(H),A=function(){var e=Object(c.useContext)(w),a=e.state,t=e.dispatch,n=Object(x.a)().formatMessage,i=function(e){return function(a){a.preventDefault(),t(function(e){var a=e.language;return{type:p.CHANGE_LANGUAGE,payload:{language:a}}}({language:e}))}};return o.a.createElement("div",{className:G.a.switchers},Object.keys(r).map((function(e){return o.a.createElement("button",{className:O()(G.a["btn-lang"],Object(u.a)({},G.a.active,a.language===r[e])),key:e,title:n({id:"lang.".concat(r[e])}),onClick:i(r[e])},r[e])})))};!function(e){e.Dark="dark",e.Light="light"}(E||(E={}));var L=function(){var e=E.Dark;return localStorage.getItem("theme")?localStorage.getItem("theme")===E.Light&&(e=E.Light):e=window.matchMedia("(prefers-color-scheme: light)").matches?E.Light:E.Dark,e},M=function(e){return localStorage.setItem("theme",e)},z=t(36),C=t.n(z),F=[{path:"/",component:function(){return o.a.createElement("div",{className:C.a.temp},o.a.createElement("h1",null,"Mateusz Lesiak"),o.a.createElement("h2",null,"Strona w budowie"))}},{path:"/about",component:function(){return o.a.createElement("span",null,"About")}},{path:"/contact",component:function(){return o.a.createElement("span",null,"Contact")}},{path:"/resume",component:function(){return o.a.createElement("div",null,"Resume")}},{path:"/portfolio",component:function(){return o.a.createElement("span",null,"Portfolio")}}],D=[{path:"/about",name:"navigation.aboutMe"},{path:"/portfolio",name:"navigation.portfolio"},{path:"/contact",name:"navigation.contact"},{path:"/resume",name:"navigation.resume",enhance:!0}],J=t(2),P=t.n(J),R=function(){var e=Object(x.a)().formatMessage,a=Object(c.useState)(L()===E.Dark),t=Object(s.a)(a,2),n=t[0],r=t[1];Object(c.useEffect)((function(){document.getElementsByTagName("HTML")[0].setAttribute("data-theme",L())}),[n]);return o.a.createElement("div",{className:P.a["toggle-wrapper"]},o.a.createElement("input",{className:P.a.input,id:"theme-switch",type:"checkbox",defaultChecked:n,onChange:function(){!1===n?(M(E.Dark),r(!0)):(M(E.Light),r(!1))}}),o.a.createElement("label",{className:P.a.toggle,htmlFor:"theme-switch",title:e({id:"theme.change"})},o.a.createElement("span",{className:P.a.toggle__handler},o.a.createElement("span",{className:O()(P.a.crater,P.a["crater--1"])}),o.a.createElement("span",{className:O()(P.a.crater,P.a["crater--2"])}),o.a.createElement("span",{className:O()(P.a.crater,P.a["crater--3"])})),o.a.createElement("span",{className:O()(P.a.star,P.a["star--1"])}),o.a.createElement("span",{className:O()(P.a.star,P.a["star--2"])}),o.a.createElement("span",{className:O()(P.a.star,P.a["star--3"])}),o.a.createElement("span",{className:O()(P.a.star,P.a["star--4"])}),o.a.createElement("span",{className:O()(P.a.star,P.a["star--5"])}),o.a.createElement("span",{className:O()(P.a.star,P.a["star--6"])})))},I=t(37),U=t.n(I),X=t(8),Z=t.n(X),W=function(){var e=Object(x.a)().formatMessage;return o.a.createElement("header",{className:O()(Z.a.header)},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:Z.a.navbar},o.a.createElement("div",{className:Z.a["navbar-logo"]},o.a.createElement(S.b,{to:"/"},o.a.createElement("img",{className:Z.a.logo,src:U.a,alt:e({id:"header.logo"})}))),o.a.createElement("div",{className:Z.a["navbar-top"]},o.a.createElement(A,null),o.a.createElement(R,null)),o.a.createElement("ul",{className:Z.a["navbar-menu"]},D.map((function(e,a){var t=e.path,n=e.name,r=e.enhance,c=void 0!==r&&r;return o.a.createElement("li",{key:t,className:c?Z.a["navbar-item-enhance"]:Z.a["navbar-item"]},o.a.createElement("span",{className:Z.a["navbar-item-index"]},String(a+1).padStart(2,"0"),"."),o.a.createElement(S.c,{to:t,className:Z.a["navbar-item-link"],activeClassName:Z.a.active},o.a.createElement(T.a,{id:n})))}))))))},Q=t(14),V=t(39),B=t.n(V),K=t(40),Y=t.n(K),q=t(41),$=t.n(q),ee=t(42),ae=t.n(ee),te=t(43),ne=t.n(te),re=t(5),ce=t.n(re),oe=Object(Q.c)((function(){var e=Object(x.a)().formatMessage,a=Object(c.useState)(0),t=Object(s.a)(a,2),n=t[0],r=t[1],i=Object(c.useState)(0),l=Object(s.a)(i,2),m=l[0],u=l[1];return Object(c.useEffect)((function(){fetch("https://api.github.com/repos/TheMatrixan/TheMatrixan.github.io",{method:"GET"}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){r(e.stargazers_count),u(e.forks_count)})).catch((function(){r("?"),u("?")}))}),[]),o.a.createElement("footer",{className:ce.a.footer},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:ce.a.row},o.a.createElement("span",{className:ce.a.info},o.a.createElement("span",{className:ce.a["icon-num"]},o.a.createElement(T.a,{id:"footer.designedIn"}),"\xa0",o.a.createElement("img",{className:ce.a.icon,src:B.a,alt:e({id:"icon.adobeXd"}),title:e({id:"icon.adobeXd"})})),o.a.createElement("br",null),o.a.createElement("span",{className:ce.a["icon-num"]},o.a.createElement(T.a,{id:"footer.createdWith"}),"\xa0",o.a.createElement("img",{className:ce.a.icon,src:Y.a,alt:e({id:"icon.reactJs"}),title:e({id:"icon.reactJs"})}),o.a.createElement("img",{className:ce.a.icon,src:$.a,alt:e({id:"icon.typeScript"}),title:e({id:"icon.typeScript"})})),o.a.createElement("br",null)),o.a.createElement("a",{href:"https://github.com/TheMatrixan/TheMatrixan.github.io",className:ce.a.link,title:e({id:"footer.viewRepository"}),target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",{className:ce.a["icon-num"]},o.a.createElement("img",{className:ce.a.icon,src:ae.a,alt:e({id:"icon.githubStar"})}),n),o.a.createElement("span",{className:ce.a["icon-num"]},o.a.createElement("img",{className:ce.a.icon,src:ne.a,alt:e({id:"icon.githubFork"})}),m)))))})),ie=function(e){var a=e.children;return Object(c.useEffect)((function(){var e=Date.now()-window.performance.timing.navigationStart,a=setTimeout((function(){document.body.classList.add("loaded")}),e>1500?e-1500:1500);return function(){clearTimeout(a)}}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(W,null),o.a.createElement(c.Suspense,{fallback:"TODO: Loading..."},o.a.createElement("main",{style:{flex:1}},a)),o.a.createElement(oe,null))},le=function(){return o.a.createElement(S.a,null,o.a.createElement(y.a,{path:"/",render:function(){return o.a.createElement(ie,null,o.a.createElement(y.c,null,F.map((function(e){var a=e.path,t=e.component;return o.a.createElement(y.a,{component:t,path:a,key:a,exact:!0})}))))}}))},se=(t(54),function(){return o.a.createElement(k,null,o.a.createElement(le,null))});l.a.render(o.a.createElement(se,null),document.getElementById("root"))},8:function(e,a,t){e.exports={logo:"Header_logo__1QeqU",header:"Header_header__2kGCY",navbar:"Header_navbar__15sIG","navbar-menu":"Header_navbar-menu__3_GyM","navbar-top":"Header_navbar-top__3gTYo","navbar-item":"Header_navbar-item__1zRYK","navbar-item-enhance":"Header_navbar-item-enhance__17PxE","navbar-item-index":"Header_navbar-item-index__2HbjJ","navbar-item-link":"Header_navbar-item-link__3Wyxz",active:"Header_active__1M6Rr"}}},[[44,1,2]]]);
//# sourceMappingURL=main.6ea10903.chunk.js.map