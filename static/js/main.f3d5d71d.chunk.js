(this.webpackJsonpalkemy=this.webpackJsonpalkemy||[]).push([[0],{14:function(e,t,a){e.exports={container:"Team_container__Jknb5",card:"Team_card__1850a",details:"Team_details__zIx6q",cardBody:"Team_cardBody__3DiM9",cardContent:"Team_cardContent__258Ik",btnTeam:"Team_btnTeam__3PnOg",detailsDanger:"Team_detailsDanger__3hkyR",powerContainer:"Team_powerContainer__1kAnB",stats:"Team_stats__17S2m",dataContainer:"Team_dataContainer__3EX13"}},15:function(e,t,a){e.exports={cardLogin:"LoginScreen_cardLogin__2HfFN",container:"LoginScreen_container__2zjGM",cardInfo:"LoginScreen_cardInfo__1Qb2Y",btnSubmit:"LoginScreen_btnSubmit__33JDK",error:"LoginScreen_error__WKzd8",errorContainer:"LoginScreen_errorContainer__dzElQ"}},16:function(e,t,a){e.exports={h5:"Hero_h5__2v3KY",btnBack:"Hero_btnBack__3H7Bp",center:"Hero_center__2QPgY",container:"Hero_container__1D9ad"}},79:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(25),i=a.n(c),r=a(21),s=a(17),o=a(3),l=a(5),d=a(47),j=a(1),b=function(e){var t=e.component,a=Object(d.a)(e,["component"]),n=localStorage.getItem("token");return Object(j.jsx)(o.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return n?Object(j.jsx)(t,Object(l.a)({},e)):Object(j.jsx)(o.a,{to:"/login"})}}))},h=a(6),m=a(46),u=a(15),O=a.n(u),v=function(e){var t=e.text;return Object(j.jsx)("div",{className:O.a.error,children:Object(j.jsx)("p",{children:t})})},p=a(22),x=a.n(p),g=function(e){var t=e.history,a=Object(n.useState)(""),c=Object(h.a)(a,2),i=c[0],r=c[1];return Object(n.useEffect)((function(){localStorage.getItem("token")&&t.push("/home")})),Object(j.jsxs)("div",{id:O.a.container,className:"container mt-3",children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsx)("div",{className:O.a.container,children:Object(j.jsx)(m.a,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email=Object(j.jsx)(v,{text:"Invalid email adress"})):t.email=Object(j.jsx)(v,{text:"Email is required"}),e.password||(t.password=Object(j.jsx)(v,{text:"Password is required"})),t},onSubmit:function(e,a){var n=a.setSubmitting;n(!0);var c={method:"post",url:"http://challenge-react.alkemy.org/",headers:{"Content-Type":"application/json"},data:JSON.stringify({email:e.email,password:e.password})};x()(c).then((function(e){localStorage.setItem("token",e.data.token),t.push("/home")})).catch((function(e){r(e.response.data.error),setTimeout((function(){r(""),n(!1)}),5e3)}))},children:function(e){var t=e.values,a=e.errors,n=e.touched,c=e.handleChange,r=e.handleBlur,s=e.handleSubmit,o=e.isSubmitting;return Object(j.jsx)("div",{className:O.a.cardLogin,children:Object(j.jsxs)("form",{onSubmit:s,children:[Object(j.jsxs)("div",{className:O.a.cardInfo,children:[Object(j.jsx)("div",{children:Object(j.jsx)("label",{children:"Email"})}),Object(j.jsx)("input",{type:"email",name:"email",onChange:c,onBlur:r,value:t.email,placeholder:"challenge@alkemy.org"})]}),a.email&&n.email&&a.email,Object(j.jsxs)("div",{className:O.a.cardInfo,children:[Object(j.jsx)("div",{children:Object(j.jsx)("label",{children:"Password"})}),Object(j.jsx)("input",{type:"password",name:"password",onChange:c,onBlur:r,value:t.password,placeholder:"react"})]}),Object(j.jsx)("div",{className:O.a.errors,children:a.password&&n.password&&a.password}),Object(j.jsx)("div",{className:O.a.btnSubmit,children:Object(j.jsx)("button",{id:O.a.btnSubmit,className:"btn btn-primary",type:"submit",disabled:o,children:"Submit"})}),Object(j.jsx)("div",{className:"errorContainer",children:i&&Object(j.jsx)(v,{text:i})})]})})}})})]})},_=a(16),f=a.n(_);var N=function(e){var t,a,c,i,r=Object(n.useState)(),s=Object(h.a)(r,2),l=s[0],d=s[1];Object(n.useEffect)((function(){try{x.a.get("https://superheroapi.com/api/1155198634989290/".concat(e.match.params.id)).then((function(e){var t=e.data;d(t)}))}catch(t){console.log("ERROR "+t)}}));var b=[];null===l||void 0===l||null===(t=l.biography)||void 0===t||t.aliases.forEach((function(e){return b.push(e)}));var m=b.join(", "),u=null===l||void 0===l||null===(a=l.appearance)||void 0===a?void 0:a.weight[1].split(" ")[0],O=null===l||void 0===l||null===(c=l.appearance)||void 0===c?void 0:c.height[1].split(" ")[0],v=Object(o.g)();return Object(j.jsx)("div",{className:f.a.center,children:Object(j.jsxs)("div",{id:f.a.container,className:"container mt-3",children:[Object(j.jsx)("h1",{children:null===l||void 0===l?void 0:l.name}),Object(j.jsxs)("h5",{className:f.a.h5,children:["Weight: ",u," kg."]}),Object(j.jsxs)("h5",{className:f.a.h5,children:["Height: ",O," cm."]}),Object(j.jsxs)("h5",{className:f.a.h5,children:["Name: ",null===l||void 0===l?void 0:l.biography["full-name"],"."]}),Object(j.jsxs)("h5",{className:f.a.h5,children:["Aliases: ",m,"."]}),Object(j.jsxs)("h5",{className:f.a.h5,children:["Eye color: ",null===l||void 0===l?void 0:l.appearance["eye-color"],"."]}),Object(j.jsxs)("h5",{className:f.a.h5,children:["Hair color: ",null===l||void 0===l?void 0:l.appearance["hair-color"],"."]}),Object(j.jsxs)("h5",{className:f.a.h5,children:["Work location: ",null===l||void 0===l||null===(i=l.work)||void 0===i?void 0:i.base,"."]}),Object(j.jsx)("button",{id:f.a.btnBack,className:"btn btn-secondary mt-3",onClick:function(){return v.goBack()},children:"\u2190 Go back"})]})})},y=a(8),w=a.n(y),S="GET_HERO",C="GET_DETAIL",k="ADD_TO_MY_TEAM",T="REMOVE_FROM_MY_TEAM";function E(e){return{type:T,payload:e}}var H=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),o=Object(h.a)(i,2),l=o[0],d=o[1],b=Object(r.c)((function(e){return e})),m=b.heros.length>0?b.heros[0].results:null,u=b.team,O=Object(r.b)(),p=function(e){b.teamAlignment[e.biography.alignment]>=3?window.alert("It's not possible to add more than 3 members of the same side."):O({type:k,payload:e}),d(!l)};return Object(j.jsxs)("div",{id:w.a.container,className:"container mt-3",children:[Object(j.jsx)("h1",{className:w.a.home,children:"Home"}),Object(j.jsxs)(s.b,{className:w.a.linkToTeam,to:"/team",children:[Object(j.jsx)("h1",{children:"Go to my team \u2192"}),Object(j.jsx)("h5",{children:"The team should have 6 members. There should be 3 members with good orientation and 3 with bad orientation."})]}),Object(j.jsx)("div",{children:Object(j.jsx)("form",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:w.a.inputSearch,children:Object(j.jsx)("input",{type:"text",placeholder:"Search hero by name",value:a,onChange:function(e){c(e.target.value)},className:"mt-3 input-group",autoFocus:!0})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(e){var t;e.preventDefault(),O((t=a,function(e){return x.a.get("https://superheroapi.com/api/1155198634989290/search/".concat(t)).then((function(t){e({type:S,payload:t.data})})).catch((function(t){e({type:S,payload:t.data})}))}))},id:w.a.btnSearch,className:"btn btn-outline-primary mt-3",children:"Search"})})]})})}),Object(j.jsx)("div",{className:w.a.cardContent,children:void 0===m?Object(j.jsx)("div",{className:w.a.containerMsg,children:Object(j.jsx)(v,{text:"Character with given name not found"})}):null===m||void 0===m?void 0:m.map((function(e){var t;return Object(j.jsx)("div",{className:w.a.container,children:Object(j.jsxs)("div",{id:w.a.card,className:"card",children:[Object(j.jsx)("img",{className:"card-img-top",src:null===e||void 0===e||null===(t=e.image)||void 0===t?void 0:t.url,alt:null===e||void 0===e?void 0:e.name}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h3",{className:"card-title",children:null===e||void 0===e?void 0:e.name}),Object(j.jsxs)("h5",{className:"card-title",children:["Intelligence: ",null===e||void 0===e?void 0:e.powerstats.intelligence]}),Object(j.jsxs)("h5",{className:"card-title",children:["Strength: ",null===e||void 0===e?void 0:e.powerstats.strength]}),Object(j.jsxs)("h5",{className:"card-title",children:["Speed: ",null===e||void 0===e?void 0:e.powerstats.speed]}),Object(j.jsxs)("h5",{className:"card-title",children:["Durability: ",null===e||void 0===e?void 0:e.powerstats.durability]}),Object(j.jsxs)("h5",{className:"card-title",children:["Power: ",null===e||void 0===e?void 0:e.powerstats.power]}),Object(j.jsxs)("h5",{className:"card-title",children:["Combat: ",null===e||void 0===e?void 0:e.powerstats.combat]}),Object(j.jsxs)("div",{className:w.a.btnContainer,children:[Object(j.jsx)(s.b,{to:"/hero/".concat(null===e||void 0===e?void 0:e.id),children:Object(j.jsx)("button",{id:w.a.details,className:"btn btn-secondary mt-3",children:"Details"})}),u.some((function(t){return t.id===e.id}))?Object(j.jsx)("button",{id:w.a.detailsDanger,className:"btn btn-danger mt-3",onClick:function(){return function(e){O(E(e)),d(!l)}(e)},children:"Remove hero"}):Object(j.jsx)("button",{id:w.a.details,className:"btn btn-secondary mt-3",onClick:function(){return p(e)},children:"Add to my team"})]})]})]})},e.id)}))})]})},A=a(14),D=a.n(A),I=function(){var e=Object(r.b)(),t=Object(o.g)(),a=Object(r.c)((function(e){return e})),c=a.team,i=a.team,l=Object(n.useState)(!0),d=Object(h.a)(l,2),b=d[0],m=d[1],u=Object(n.useState)({intelligence:0,strength:0,speed:0,durability:0,power:0,combat:0,weight:0,height:0}),O=Object(h.a)(u,2),v=O[0],p=O[1];return i.length<1&&(window.alert("To see your team you must first create it."),t.push("/home")),Object(n.useEffect)((function(){var e=i.reduce((function(e,t){for(var a=0,n=Object.entries(t.powerstats);a<n.length;a++){var c=Object(h.a)(n[a],2),i=c[0],r=c[1];e[i]||(e[i]=0),e[i]+="null"===r?0:parseInt(r)}return e.weight+=parseInt(t.appearance.weight[1].split(" ")[0]),e.height+=parseInt(t.appearance.height[1].split(" ")[0]),e}),{weight:0,height:0}),t=Object.fromEntries(Object.entries(e).sort((function(e,t){var a=Object(h.a)(e,2)[1];return Object(h.a)(t,2)[1]-a})));p(t)}),[i]),Object(j.jsxs)("div",{className:"container mt-3",children:[Object(j.jsx)("h1",{children:"My team"}),Object(j.jsx)("button",{className:"btn btn-secondary",onClick:function(){return t.goBack()},children:"\u2190 Go back"}),Object(j.jsxs)("div",{className:D.a.dataContainer,children:[Object(j.jsxs)("div",{className:D.a.powerContainer,children:[Object(j.jsx)("h3",{children:"Powerstats"}),Object(j.jsx)("div",{className:D.a.stats,children:Object.entries(v).filter((function(e){var t=Object(h.a)(e,1)[0];return"weight"!==t&&"height"!==t})).map((function(e){var t=Object(h.a)(e,2),a=t[0],n=t[1];return Object(j.jsxs)("h4",{children:[a[0].toUpperCase()+a.slice(1),": ",n," "]})}))})]}),Object(j.jsxs)("div",{className:D.a.powerContainer,children:[Object(j.jsx)("h3",{children:"Average"}),Object(j.jsxs)("div",{className:D.a.stats,children:[Object(j.jsxs)("h4",{children:["Weight: ",Math.round((null===v||void 0===v?void 0:v.weight)/i.length)," kg"]}),Object(j.jsxs)("h4",{children:["Height: ",Math.round((null===v||void 0===v?void 0:v.height)/i.length)," cm"]})]})]})]}),Object(j.jsx)("div",{className:D.a.container,children:null===i||void 0===i?void 0:i.map((function(t){var a;return Object(j.jsx)("div",{className:D.a.card,children:Object(j.jsxs)("div",{className:D.a.cardBody,children:[Object(j.jsx)("img",{src:null===t||void 0===t||null===(a=t.image)||void 0===a?void 0:a.url,alt:null===t||void 0===t?void 0:t.name}),Object(j.jsxs)("div",{className:D.a.cardContent,children:[Object(j.jsx)("h3",{children:null===t||void 0===t?void 0:t.name}),Object(j.jsxs)("div",{children:[Object(j.jsx)(s.b,{to:"/hero/".concat(null===t||void 0===t?void 0:t.id),children:Object(j.jsx)("button",{id:D.a.details,className:"btn btn-secondary mt-3",children:"Details"})}),c.some((function(e){return e.id===t.id}))?Object(j.jsx)("button",{id:D.a.detailsDanger,className:"btn btn-danger mt-3",onClick:function(){return function(t){e(E(t)),m(!b)}(t)},children:"Remove hero"}):null]})]})]})},t.id)}))})]})},L=function(){return Object(j.jsx)(s.a,{children:Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{exact:!0,path:"/login",component:g}),Object(j.jsx)(o.b,{exact:!0,path:"/",component:g}),Object(j.jsx)(b,{exact:!0,path:"/home",component:H}),Object(j.jsx)(b,{exact:!0,path:"/hero/:id",component:N}),Object(j.jsx)(b,{exact:!0,path:"/team",component:I})]})})},M=function(){return Object(j.jsx)(L,{})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,80)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))},P=a(28),R=a(24),F={heros:[],team:[],teamAlignment:{good:0,bad:0}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(l.a)(Object(l.a)({},e),{},{heros:[t.payload]});case C:return Object(l.a)(Object(l.a)({},e),{},{country:t.payload});case k:var a=t.payload.biography.alignment;return Object(l.a)(Object(l.a)({},e),{},{team:e.team.concat(t.payload),teamAlignment:Object(l.a)(Object(l.a)({},e.teamAlignment),{},Object(R.a)({},a,e.teamAlignment[a]+1))});case T:var n=t.payload.biography.alignment;return Object(l.a)(Object(l.a)({},e),{},{teamAlignment:Object(l.a)(Object(l.a)({},e.teamAlignment),{},Object(R.a)({},n,e.teamAlignment[n]-1)),team:e.team.filter((function(e){return e.id!==t.payload.id}))});default:return Object(l.a)({},e)}},J=a(45),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.b,z=Object(P.c)(G,Y(Object(P.a)(J.a)));i.a.render(Object(j.jsx)(r.a,{store:z,children:Object(j.jsx)(M,{})}),document.getElementById("root")),B()},8:function(e,t,a){e.exports={btnSearch:"Home_btnSearch__U0_dx",inputSearch:"Home_inputSearch__2NnOv",container:"Home_container__1_ASg",card:"Home_card__28xrz",details:"Home_details__1OYML",detailsDanger:"Home_detailsDanger__16mTP",cardContent:"Home_cardContent__1L5N-",containerMsg:"Home_containerMsg__3xyJl",btnContainer:"Home_btnContainer__2xs2c",linkToTeam:"Home_linkToTeam__1eCXO"}}},[[79,1,2]]]);
//# sourceMappingURL=main.f3d5d71d.chunk.js.map